window.addEventListener("load", initiateBotResponse);

const responses = {
    // personal queries //
    "your name": "my name is aerei, or ari!  it's pronounced 'ah-ree', although some people may prefer 'air-ree' or 'ah-ray'!  personally, i don't have any specific preference in pronunciation.  sometimes you may hear my close friends call me ash, but if you aren't close to me, please stick with calling me ari.",
    "your pronouns": "my pronouns are she/her, it/its, and ny/nym (pronounced 'nee' and 'nim').  i am nonbinary, specifically girlflux.  i prefer feminine honorifics and terms, so please refrain from using masculine terms when referring to me.  i also do not like when they/them pronouns are used on me.",
    "your sexuality": "i am a proud polyamorous bisexual with no lean!",
    "your ethnicity": "i am 100% filipino, but born and raised in america.",
    "your race": "i am 100% filipino, but born and raised in america.",
    "your birthday": "my birthday is december 30!",
    "your age": "i prefer to withhold telling people my age for private reasons, but for internet safety's sake, i am an adult.",
    "how old are you": "i prefer to withhold telling people my age for private reasons, but for internet safety's sake, i am an adult.",
    "where do you live": "i live in southern california!",
    "you located": "i live in southern california!",
    "you go to school": "i am currently pursuing a bachelor's degree in kinesiology in one of the california state universities.",
    "boyfriend": "i currently have a very wonderful boyfriend that i have been dating for a year!",
    "girlfriend": "i currently have a very wonderful boyfriend that i have been dating for a year!",
    
    // website related queries //
    "music player": "this website uses a free music player from cincopa.",
    "font": "this website uses the font RomanceA by asterism for headers and MS gothic for basically everything else.  in my videos, i use FOT-seurat pro EB for most of my captions, and cyberpunk waifus by isaac b.  my twitch chat and stream overlays uses rainydays by camellina.",
    
    // commission related queries//
    "buy a commission": "please refer to the 'buy my art' page for my commission info!",
    
    // social media related queries //
    "stream schedule": "i am a full time university student so my schedule fluctuates during each semester depending on my class and work schedule.  i try to upload once a week on saturdays and stream every friday night, but please refer to the #videos channel in my discord server for my actual stream and upload schedule during months where this is not the case!",
    "upload schedule": "i am a full time university student so my schedule fluctuates during each semester depending on my class and work schedule.  i try to upload once a week on saturdays and stream every friday night, but please refer to the #videos channel in my discord server for my actual stream and upload schedule during months where this is not the case!",
    "discord": "you can find the link to my discord server in the top right corner of this site.  i am usually active on my server ever day.  my server is where i post important announcements, notify people of streams and uploads, and just interact with everyone who supports me in general!",
    "twitter": "you can find the link to my twitter page in the top right corner of this site.  i usually post my stream and upload schedule here once a month, and this is also where i post important announcements, notifications for my streams and uploads, and art pieces.",
    "twitch": "you can find the link to my twitch channel in the top right corner of this site.  i try my best to stream every week, but whenever i'm not streaming, i'm usually still available through my discord server.",
    "youtube": "you can find the link to my youtube channel in the top right corner of this site.  i try my best to upload at least once a month, but whenever i'm not uploading, i am most definitely available through my discord server.",
    
    // music related queries //
    
    // equipment and software queries //
    "tablet": "i use a huion H640p USB drawing tablet that connects to my laptop.  its about $35.",
    "microphone": "i use a blue yeti USB microphone with a random boom arm stand that i got off of amazon.  in total it was about $100.",
    "laptop": "i use a 15 inch lenovo legion 5.  it has a intel core i7-10750H CPU @ 2.60GHz, an NVIDIA geforce GTX 1650 ti, and operates on windows 11 at 8.0 gb of ram.  it cost me a little under $1000.",
    "recording software": "i use OBS to record my screen for streaming and videos.  for recording audio, i use audacity.  both of these programs are free!",
    "recording program": "i use OBS to record my screen for streaming and videos.  for recording audio, i use audacity.  both of these programs are free!",
    "editing software": "i use sony vegas pro 18 to edit my videos.  for music, i use LMMS, a free open source program.",
    "editing program": "i use sony vegas pro 18 to edit my videos.  for music, i use LMMS, a free open source program.",
    "art software": "i use krita for digital art, which is free and open source.  for drawings before 2022, however, i used paint tool sai v2.  both of these are my favourite programs to use out of all the ones i've tried!",
    "art program": "i use krita for digital art, which is free and open source.  for drawings before 2022, however, i used paint tool sai v2.  both of these are my favourite programs to use out of all the ones i've tried!",
    "alerts": "i use the streamlabs website + streamlabels software for stream alerts.  it's free!",
    
    // salutations //
    "hello": "hello!  what can i answer for you today?",
    "hi": "hiya!  what can i answer for you today?",
    "hey": "heya!  what can i answer for you today?",
    "sup": "what's up?  what can i answer for you today?",
    "cya": "see ya!",
    "goodbye": "bye for now!",
    "bye": "hope to see you soon!",
};

function generateResponse(userInput) {
    userInput = userInput.toLowerCase();
    for (const keyword in responses) {
        if (userInput.includes(keyword)) {
            return responses[keyword];
        }
    }
    return "i'm not sure i can answer that here!  try contacting me through discord (@aerei) for a better response.";
}

function initiateBotResponse() {
    const initialMessage = "welcome to my website!  if you have any questions about me, my services, or this website, feel free to ask me using the chat box below!  please spell your words correctly and in english for the best results.  also note: i am a bot, so if you have any questions that i can't answer in this chat, please reach out to the real me on discord! (@aerei)";
    const messageElement = `<div class="message bot-message initial-bot-message">${initialMessage}</div>`;
    const chatLog = document.getElementById("chat-log");
    chatLog.innerHTML += messageElement;
}


function displayUserMessage(message) {
    const chatLog = document.getElementById("chat-log");
    chatLog.innerHTML += `<div class="message user-message">${message}</div>`;
}

function displayBotMessage(message) {
    const chatLog = document.getElementById("chat-log");
    chatLog.innerHTML += `<div class="message bot-message">${message}</div>`;
}

function handleUserInput() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    displayUserMessage(userInput);
    const botResponse = generateResponse(userInput);
    displayBotMessage(botResponse);

    document.getElementById("user-input").value = "";
}

document.getElementById("user-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleUserInput();
    }

});
