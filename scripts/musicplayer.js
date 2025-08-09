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
        { name: "[2011] ah, it's a wonderful cat's life (嗚呼、素晴らしきニャン生) - nem feat. kagamine len & GUMI", path: "../audio/music/aereicore list/ah, it's a wonderful cat's life (8-bit).mp3" },
        { name: "[2015] love me, love me, love me (愛して愛して愛して) - kikuo feat. hatsune miku", path: "../audio/music/aereicore list/aishite aishite aishite (sega megadrive version).mp3" },
        { name: "[2010] aradia's theme (pre-death) - toby fox", path: "../audio/music/aereicore list/aradia's theme (pre-death).mp3" },
        { name: "[1988] athletic - super mario bros 3", path: "../audio/music/aereicore list/athletic (sega megadrive version).mp3" },
        { name: "[2019] bitter choco decoration (ビターチョコデコレーション) - syudou feat. hatsune miku", path: "../audio/music/aereicore list/bitter chocolate decoration (sega megadrive version).mp3" },
        { name: "[2012] blue bird lamentation - zero escape: virtue's last reward", path: "../audio/music/aereicore list/blue bird lamentation (8-bit).mp3" },
        { name: "[2001] caramelldansen - caramell", path: "../audio/music/aereicore list/caramelldansen (sega genesis version).mp3" },
        { name: "[1994] carnival night act II (in minor) - sonic the hedgehog 3", path: "../audio/music/aereicore list/carnival night act II (in minor).mp3" },
        { name: "[2011] cara mia addio - portal 2", path: "../audio/music/aereicore list/carnival night act II (in minor).mp3" },
        { name: "[2015] cirice - ghost", path: "../audio/music/aereicore list/cirice.wav"},
        { name: "[2016] crumbling dreams - five nights at freddy's: sister location", path: "../audio/music/aereicore list/crumbling dreams (8-bit).mp3" },
        { name: "[2021] dialtone (earthbound version) - deltarune chapter 2", path: "../audio/music/aereicore list/dialtone (earthbound version).mp3" },
        { name: "[1990] donut plains (in minor) - super mario world", path: "../audio/music/aereicore list/donut plains theme (in minor).mp3" },
        { name: "[1994] enjoy your stay - earthbound", path: "../audio/music/aereicore list/enjoy your stay.mp3" },
        { name: "[2002] espionage - nokia 3310", path: "../audio/music/aereicore list/espionage.mp3" },
        { name: "[2011] fairgrounds - wizard101", path: "../audio/music/aereicore list/fairgrounds.mp3" },
        { name: "[2001] gallery - luigi's mansion", path: "../audio/music/aereicore list/gallery theme.mp3" },
        { name: "[2004] green neon world - yume nikki", path: "../audio/music/aereicore list/green neon world.mp3" },
        { name: "[1931] heartaches (super mario bros. version) - al bowlly", path: "../audio/music/aereicore list/heartaches (super mario bros. version).mp3" },
        { name: "[2018] hole-dwelling (あなぐらぐらし) (8-bit version) - kikuo feat. hatsune miku", path: "../audio/music/aereicore list/hole dwelling (8-bit).mp3" },
        { name: "[2018] hole-dwelling (あなぐらぐらし) (sega megadrive version) - kikuo feat. hatsune miku", path: "../audio/music/aereicore list/hole dwelling (sega megadrive version).mp3" },
        { name: "[2013] inevitabilis - puella magi madoka magica the movie: rebellion", path: "../audio/music/aereicore list/inevitabilis (8-bit).mp3" },
        { name: "[2022] INTERNET OVERDOSE - aiobahn feat. KOTOKO", path: "../audio/music/aereicore list/INTERNET OVERDOSE (noteblock version).mp3" },
        { name: "[2001] kamek's library - mario party DS", path: "../audio/music/aereicore list/kamek's library.mp3" },
        { name: "[2003] shoes of glass (ガラスのくつ) - saya no uta", path: "../audio/music/aereicore list/kanako-itou.mp3" },
        { name: "[1791] lacrimosa requiem - mozart", path: "../audio/music/aereicore list/requiem.mp3"},
        { name: "[1996] lavender town - pokemon red & green", path: "../audio/music/aereicore list/lavender town.mp3" },
        { name: "[2007] lavender waters - yume 2kki", path: "../audio/music/aereicore list/lavender waters.mp3" },
        { name: "[2021] let the living beware - genshin impact", path: "../audio/music/aereicore list/let the living beware (8-bit).mp3" },
        { name: "[2001] mansion melody pianissima - luigi's mansion", path: "../audio/music/aereicore list/mansion melody pianissima theme.mp3" },
        { name: "[2012] memory - ib", path: "../audio/music/aereicore list/memory (8-bit).mp3" },
        { name: "[2001] menu screen - luigi's mansion", path: "../audio/music/aereicore list/menu screen theme.mp3" },
        { name: "[2004] merry-go-round of life - howl's moving castle", path: "../audio/music/aereicore list/merry go round of life (sega megadrive version).mp3" },
        { name: "[2012] morphogenetic sorrow - zero escape: virtue's last reward", path: "../audio/music/aereicore list/morphogenetic sorrow (8-bit).mp3" },
        { name: "[1987] never gonna give you up - rick astley", path: "../audio/music/aereicore list/never gonna give you up (sega megadrive version).mp3" },
        { name: "[2006] overworld (in minor) - new super mario bros.", path: "../audio/music/aereicore list/overworld theme (in minor).mp3" },
        { name: "[1994] pokey's house - earthbound", path: "../audio/music/aereicore list/pokey's house.mp3" },
        { name: "[2001] professor e. gadd - luigi's mansion", path: "../audio/music/aereicore list/professor e. gadd theme.mp3" },
        { name: "[2001] pumpkin hill zone - sonic adventure 2", path: "../audio/music/aereicore list/pumpkin hill zone (sega megadrive version).mp3" },
        { name: "[2017] six's music box - little nightmares", path: "../audio/music/aereicore list/six's music box (8-bit).mp3" },
        { name: "[2011] slippery steps - kirby's return to dreamland", path: "../audio/music/aereicore list/slippery steps.mp3" },
        { name: "[2015] spooktune - undertale", path: "../audio/music/aereicore list/spooktune.mp3" },
        { name: "[2015] spookwave - undertale", path: "../audio/music/aereicore list/spookwave.mp3" },
        { name: "[1988] stage one - ghouls 'n ghosts", path: "../audio/music/aereicore list/stage one.mp3" },
        { name: "[2010] telephone - lady gaga feat. beyonce", path: "../audio/music/aereicore list/telephone (sega megadrive version).mp3" },
        { name: "[2009] the penis (eek!) (kirby 64 version) - surasshu", path: "../audio/music/aereicore list/the penis (EEK!) (kirby 64 version).mp3" },
        { name: "[2009] the penis (eek!) (meowsynth version) - surasshu", path: "../audio/music/aereicore list/the penis (EEK!) (meowsynth version).mp3" },
        { name: "[2009] the penis (eek!) (steven universe: the movie version) - surasshu", path: "../audio/music/aereicore list/the penis (EEK!) (steven universe the movie version).mp3" },
        { name: "[2009] the penis (eek!) (vinesauce ROM corrupter version) - surasshu", path: "../audio/music/aereicore list/the penis (EEK!) (vinesauce rom corrupter version).mp3" },
        { name: "[2011] tokyo teddy bear (東京テディベア) - neru feat. kagamine rin", path: "../audio/music/aereicore list/tokyo teddy bear (8-bit).mp3" },
        { name: "[1985] underwater (in minor) - super mario bros.", path: "../audio/music/aereicore list/underwater theme (in minor).mp3" },
        { name: "[1882] valse sentimentale - tchaikovsky", path: "../audio/music/aereicore list/valse sentimentale.mp3"},
        { name: "[2006] versus overworld (in minor) - new super mario bros.", path: "../audio/music/aereicore list/versus overworld theme (in minor).mp3" },
        { name: "[1996] virtual insanity - jamiroquai", path: "../audio/music/aereicore list/virtual insanity (8-bit).mp3" },
        { name: "[1990] water - super mario world", path: "../audio/music/aereicore list/water (in F harmonic minor).mp3" },
        { name: "[2009] watery graves (fast version)- plants vs. zombies", path: "../audio/music/aereicore list/water graves (fast version).mp3" },
        { name: "[2009] watery graves (toontown version)- plants vs. zombies", path: "../audio/music/aereicore list/watery graves (toontown version).mp3" },
        { name: "[2006] wii sports theme - wii sports", path: "../audio/music/aereicore list/wii sports theme (in minor).mp3" },
        { name: "[2008] world is mine (ワールドイズマイン) - ryo feat. hatsune miku", path: "../audio/music/aereicore list/world is mine (sega megadrive version).mp3" },
        { name: "[1829] waltz in b minor - chopin", path: "../audio/music/aereicore list/waltz in b minor.mp3"},
        { name: "[2013] world bowser - super mario 3d world", path: "../audio/music/aereicore list/world bowser.wav"}
    ];

    let currentSongIndex = 0;

    const defaultVolume = 0.33;

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
    
    function updateSongTitle(index) {
    songTitle.textContent = songs[index].name;
}

    function playSong(index) {
        currentSongIndex = index;
        audioPlayer.src = songs[index].path;
        audioPlayer.play();
        playPauseButton.textContent = 'pause';
        updateSongTitle(index);
        saveProgress();
    }

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong(currentSongIndex);
    }

    function playRandomSong() {
        const randomIndex = Math.floor(Math.random() * songs.length);
        playSong(randomIndex);
    }

    function saveProgress() {
        const currentSong = audioPlayer.src;
        const currentTime = audioPlayer.currentTime;
        localStorage.setItem('currentSongIndex', currentSongIndex);
        localStorage.setItem('currentTime', currentTime);
    }

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
            playRandomSong();
        }
    }

    function updateVolume(event) {
        const clickPosition = event.clientX - customVolumeControl.getBoundingClientRect().left;
        const volumePercentage = clickPosition / customVolumeControl.offsetWidth;
        audioPlayer.volume = volumePercentage;
        updateVolumeHandle(volumePercentage);
    }

    function updateVolumeHandle(volumePercentage) {
        const handlePosition = volumePercentage * (customVolumeControl.offsetWidth - volumeHandle.offsetWidth);
        volumeHandle.style.left = handlePosition + 'px';
        volumeText.textContent = `${Math.round(volumePercentage * 100)}%`;
    }

    customVolumeControl.addEventListener('click', updateVolume);
    customVolumeControl.addEventListener('mousemove', (event) => {
        if (event.buttons === 1) {
            updateVolume(event);
        }
    });

    customProgressBar.addEventListener('click', (event) => {
        const clickPosition = event.clientX - customProgressBar.getBoundingClientRect().left;
        const progress = clickPosition / customProgressBar.offsetWidth;
        audioPlayer.currentTime = progress * audioPlayer.duration;

        updateCustomProgressBar();
    });

    function updateCustomProgressBar() {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        customProgressFill.style.width = progress + '%';
    }

    function displaySongQueue() {
        songQueue.innerHTML = '';
        songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.textContent = song.name;
            li.addEventListener('click', () => playSong(index));
            songQueue.appendChild(li);
        });
    }

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
    audioPlayer.addEventListener('ended', playNextSong);

    loadProgress();

    displaySongQueue();

    updateTimes();
    updateVolumeHandle(audioPlayer.volume);
});
