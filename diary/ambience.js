document.addEventListener('DOMContentLoaded', (event) => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.getElementById('playPause');
    const volumeHandle = document.getElementById('volumeHandle');
    const customVolumeControl = document.getElementById('customVolumeControl');
    const playRandomButton = document.getElementById('playRandom');
    const songQueue = document.getElementById('songQueue');
    const currentTimeSpan = document.getElementById('currentTime');
    const totalTimeSpan = document.getElementById('totalTime');
    const customProgressFill = document.getElementById('customProgressFill');
    const customProgressBar = document.getElementById('customProgressBar');
    const volumeText = document.getElementById('volumeText');
    const scrollingText = document.getElementById('scrollingText');

    const songs = [
        { name: "[2015] bonnie's lullaby - five nights at freddy's 3 (slowed by rambo)", path: "/audio/music/blog/bonnie's lullaby.wav" },
    ];

    let currentSongIndex = 0;

    const defaultVolume = 0.25;

    audioPlayer.volume = defaultVolume;
    updateVolumeHandle(defaultVolume); 

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updateTimes() {
        currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
        if (!isNaN(audioPlayer.duration)) {
            totalTimeSpan.textContent = formatTime(audioPlayer.duration);
        }
    }
    
    // Function to update song title
    function updateSongTitle(index) {
    songTitle.textContent = songs[index].name;
}

    // Function to play a song by index
    function playSong(index) {
        currentSongIndex = index;
        audioPlayer.src = songs[index].path;
        audioPlayer.play();
        playPauseButton.textContent = 'pause';
        updateSongTitle(index);
        saveProgress();
    }

    // Function to play the next song in the list
    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong(currentSongIndex);
    }

    // Function to play a random song
    function playRandomSong() {
        const randomIndex = Math.floor(Math.random() * songs.length);
        playSong(randomIndex);
    }

    // Save progress in local storage
    function saveProgress() {
        const currentSong = audioPlayer.src;
        const currentTime = audioPlayer.currentTime;
        localStorage.setItem('currentSongIndex', currentSongIndex);
        localStorage.setItem('currentTime', currentTime);
    }

    // Load progress from local storage and autoplay
    function loadProgress() {
        const savedSongIndex = localStorage.getItem('currentSongIndex');
        const savedTime = localStorage.getItem('currentTime');

        if (savedSongIndex !== null) {
            currentSongIndex = parseInt(savedSongIndex, 10);
            audioPlayer.src = songs[currentSongIndex].path;
            if (savedTime) {
                audioPlayer.currentTime = savedTime;
            }
            audioPlayer.play();
            playPauseButton.textContent = 'pause';
            updateSongTitle(currentSongIndex);
        } else {
            playRandomSong(); // If no song is saved, play a random song
        }
    }

    // Function to update volume based on click position
    function updateVolume(event) {
        const clickPosition = event.clientX - customVolumeControl.getBoundingClientRect().left;
        const volumePercentage = clickPosition / customVolumeControl.offsetWidth;
        audioPlayer.volume = volumePercentage;
        updateVolumeHandle(volumePercentage);
    }

    // Function to update visual handle position and volume text
    function updateVolumeHandle(volumePercentage) {
        const handlePosition = volumePercentage * (customVolumeControl.offsetWidth - volumeHandle.offsetWidth);
        volumeHandle.style.left = handlePosition + 'px';
        volumeText.textContent = `${Math.round(volumePercentage * 100)}%`; // Update volume text
    }

    // Event listener to update volume when clicking on custom volume control
    customVolumeControl.addEventListener('click', updateVolume);
    customVolumeControl.addEventListener('mousemove', (event) => {
        if (event.buttons === 1) { // Check if left mouse button is held down
            updateVolume(event);
        }
    });

    // Event listener to seek audio when clicking on custom progress bar
    customProgressBar.addEventListener('click', (event) => {
        const clickPosition = event.clientX - customProgressBar.getBoundingClientRect().left;
        const progress = clickPosition / customProgressBar.offsetWidth;
        audioPlayer.currentTime = progress * audioPlayer.duration;

        // Update custom progress bar immediately
        updateCustomProgressBar();
    });

    // Update custom progress bar
    function updateCustomProgressBar() {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        customProgressFill.style.width = progress + '%';
    }

    // Display song queue
    function displaySongQueue() {
        songQueue.innerHTML = '';
        songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.textContent = song.name;
            li.addEventListener('click', () => playSong(index));
            songQueue.appendChild(li);
        });
    }

    // Event listeners
    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = 'pause';
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = 'play';
        }
    });

    playRandomButton.addEventListener('click', playRandomSong);
    audioPlayer.addEventListener('timeupdate', () => {
        updateTimes();
        updateCustomProgressBar();
        saveProgress();
    });
    audioPlayer.addEventListener('ended', playNextSong); // Play the next song when the current song ends

    // Load saved progress and autoplay when the page loads
    loadProgress();

    // Display the song queue
    displaySongQueue();

    // Initial setup
    updateTimes();
    updateVolumeHandle(audioPlayer.volume);
});
