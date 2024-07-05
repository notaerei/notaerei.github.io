document.getElementById('generate').addEventListener('click', () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomIndex];

    document.getElementById('quote').innerHTML = selectedQuote.quote;
    document.getElementById('author').innerHTML = selectedQuote.author;
});

const quotes = [
    {
    author: "poppy | EAT | 2021",
    quote: "maybe today <br> i throw it all away <br> let my body eat itself and finally get its way"
    },
    {
        author: "poppy | EAT | 2021",
        quote: "i tell everyone that i'm okay <br> but i'm ashamed <br> i'm afraid <br> and it all eats at me"
    },
    {
        author: "poppy | EAT | 2021",
        quote: "i'm not okay <br> i know that i'm not safe <br> could you come and eat me up and put me out my pain?"
    },
    {
        author: "elita | introverted | 2019",
        quote: "i dont hate you <br> i just need some time alone"
    },
    {
        author: "waterparks | magnetic | 2021",
        quote: "but you said it <br> i'm magnetic to the things i hate the most"
    },
    {
        author: "persona 4 | heartbeat, heartbreak | 2008",
        quote: "tell me why you did it <br> every dream falling apart <br> tell me why you did it <br> after the promise"
    },
    {
        author: "elita | introverted | 2019",
        quote: "i'm nervous observing <br> so determined it's concerning <br> i'm a burden and i'm hurting <br> go easy on me, i'm learning"
    },
    {
        author: "jack off jill | fear of dying | 2000",
        quote: "i'm not afraid of standing still <br> i'm just afraid of being bored <br> i'm not afraid of speaking my mind <br> i'm just afraid of being ignored"
    },
    {
        author: "jack off jill | fear of dying | 2000",
        quote: "i'm not afraid of feeling <br> and i'm not afraid of trying i'm just afraid of losing <br> and i am afraid of dying"
    },
    {
        author: "jack off jill | fear of dying | 2000",
        quote: "i'm not afraid, put the gun in my hand <br> i'm just afraid it'll hurt like hell"
    },
    {
        author: "jack off jill | fear of dying | 2000",
        quote: "i'm not afraid of screaming <br> and i'm not afraid of crying <br> i'm just afraid of forgetting <br> and i am afraid of dying"
    },
    {
        author: "mindless self indulgence | never wanted to dance | 2008",
        quote: "there is nothing you can do that i have not already done to myself"
    },
    {
        author: "portal 2 | want you gone | 2011",
        quote: "oh how we laughed and laughed <br> except i wasn't laughing"
    },
    {
        author: "cam meekins | better days | 2013",
        quote: "i sing about you every way <br> cause you're the perfect melody <br> know the world ain't perfect <br> but to me you were my everything"
    },
    {
        author: "CUCO | lover is a day | 2016",
        quote: "furthering my distance from you <br> realistically i can't leave now <br> but i'm okay as long as you keep me from going crazy"
    },
    {
        author: "CUCO | lover is a day | 2016",
        quote: "i'll take the bumpy road <br> it'll probably break my legs <br> as long as i don't show you what's ruining my head"
    },
    {
        author: "hum | stars | 1995",
        quote: "i bring her home everything i want and nothing that she needs <br> i thought she would be there holding daisies <br> she always waits for me <br> she thinks she missed the train to mars <br> she's out back counting stars"
    },
    {
        author: "the zombies | the way i feel inside | 1965",
        quote: "should i try to hide <br> the way i feel inside my heart for you <br> would you say that you would try to love me too <br> in your mind could you ever be really close to me?"
    },
    {
        author: "the zombies | the way i feel inside | 1965",
        quote: "but til i can see that you would really care for me <br> i'll keep trying to hide the way i feel inside"
    },
    {
        author: "carpenters | two lives | 1983",
        quote: "maybe i'm a dreamer <br> maybe just a fool <br> lately i can hardly see the sun"
    },
    {
        author: "sorry | jealous guy | 2019",
        quote: "i don't wanna share your pretty heart with anybody else <br> i'm a selfish guy its only you me and myself <br> i'm a jealous guy <br> dont want to see your pretty eyes with anybody else"
    },
    {
        author: "sorry | jealous guy | 2019",
        quote: "i want to be the one to serve you <br> i have to be the one who serves you"
    },
    {
        author: "BADBADNOTGOOD | time moves slow | 2016",
        quote: "time moves slow when you're all alone <br> and the time moves slow when you're out on your own <br> and the time moves slow when you're missing a friend <br> and the time moves slow when you came to the end"
    },
    {
        author: "BADBADNOTGOOD | time moves slow | 2016",
        quote: "running away is easy <br> it's the leaving thats hard"
    },
    {
        author: "BADBADNOTGOOD | time moves slow | 2016",
        quote: "and loving you was easy <br> it was you leaving that scarred"
    },
    {
        author: "BADBADNOTGOOD | time moves slow | 2016",
        quote: "i knew just what you were thinking that day <br> you just didn't love me like i do <br> like i love you <br> the sad thing is were better off this way"
    },
    {
        author: "sammy rae | kick it to me | 2018",
        quote: "singing the blues all on my own in a dark room <br> nobody there all on my own in a dark room"
    },
    {
        author: "lady gaga | replay | 2020",
        quote: "who was it that pulled the trigger <br> was it you or i?"
    },
    {
        author: "lady gaga | replay | 2020",
        quote: "the monster inside you is torturing me <br> the scars on my mind are on replay"
    },
    {
        author: "lady gaga | replay | 2020",
        quote: "psychologically its something that i cant explain"
    },
    {
        author: "savlonic | epoch | 2016",
        quote: "i know we can make it better than it ever was"
    },
    {
        author: "savlonic | epoch | 2016",
        quote: "our fates are not yet written <br> i will take the warning <br> choose a way thats less destructive"
    },
    {
        author: "the living tombstone | my ordinary life | 2017",
        quote: "the people always different but it always feels the same"
    },
    {
        author: "the living tombstone | my ordinary life | 2017",
        quote: "staying still, eyes closed <br> let the world just pass me by"
    },
    {
        author: "the living tombstone | my ordinary life | 2017",
        quote: "lean in, let go <br> i feel fear for the very last time"
    },
    {
        author: "the living tombstone | my ordinary life | 2017",
        quote: "they tell me that im special <br> i smile and shake my head <br> ill give them stories to tell friends about the things i said"
    },
    {
        author: "the living tombstone | my ordinary life | 2017",
        quote: "they tell me im so humble <br> i say im turning red <br> they let me lie to them and dont feel like theyve been misled"
    },
    {
        author: "the living tombstone | my ordinary life | 2017",
        quote: "when you become untouchable youre unable to touch"
    },
    {
        author: "the living tombstone | i got no time | 2016",
        quote: "ive been staring at my death so many times"
    },
    {
        author: "the living tombstone | i got no time | 2016",
        quote: "i felt like i won <br> but i wasnt done <br> the nightmare repeats itself every time"
    },
    {
        author: "the living tombstone | i got no time | 2016",
        quote: "im getting sick from these apologies <br> from people with priorities <br> that their life matters so much more than mine"
    },
    {
        author: "the powerpuff girls | love makes the world go round | 1999",
        quote: "you cant hurt me with the things that you do <br> ill pick up dandelions and ill give them to you"
    },
    {
        author: "the powerpuff girls | you wanna make us feel real good | 2004",
        quote: "as i descend to the earth and i view the universe above me <br> i realize that life evolves revolves and dissolves completely around the opposites <br> therefore i conclude that i cannot exist in my utopian mind"
    },
    {
        author: "giga-p | drop pop candy | 2014",
        quote: "even when its raining i dont use an umbrella"
    },
    {
        author: "carpenters | i need to be in love | 1976",
        quote: "the hardest thing ive ever done is keep believing <br> theres someone in this crazy world for me"
    },
    {
        author: "carpenters | i need to be in love | 1976",
        quote: "the way that people come and go through temporary lives <br> my chance could come and i might never know"
    },
    {
        author: "carpenters | i need to be in love | 1976",
        quote: "it took awhile for me to learn that nothing comes for free <br> the price ive paid is high enough for me"
    },
    {
        author: "carpenters | i need to be in love | 1976",
        quote: "i know i ask perfection of a quite imperfect world <br> and fool enough to think thats what ill find"
    },
    {
        author: "carpenters | i need to be in love | 1976",
        quote: "here i am with pockets full of good intentions <br> but none of them will comfort me"
    },
    {
        author: "carpenters | i need to be in love | 1976",
        quote: "without a friend in sight <br> hanging on a hope but im alright"
    },
    {
        author: "persona 4 | heaven | 2008",
        quote: "cant get my mind out of those memories"
    },
    {
        author: "persona 4 | heaven | 2008",
        quote: "music keeps on turning me from the words that hurt my soul"
    },
    {
        author: "persona 4 | heaven | 2008",
        quote: "those long days passing by from that door <br> like late summer they slowly fade away"
    },
    {
        author: "carpenters | superstar | 1971",
        quote: "loneliness is such a sad affair <br> and i can hardly wait to be with you again"
    },
    {
        author: "carpenters | rainy days and mondays | 1974",
        quote: "sometimes id like to quit"
    },
    {
        author: "carpenters | rainy days and mondays | 1974",
        quote: "funny but it seems that its the only thing to do run and find the one who loves me"
    },
    {
        author: "carpenters | rainy days and mondays | 1974",
        quote: "what i feel has come and gone before <br> no need to talk it out"
    },
    {
        author: "carpenters | ill never fall in love again | 1971",
        quote: "what do you get when you fall in love <br> you only get lies and pain and sorrow"
    },
    {
        author: "carpenters | ill never fall in love again | 1971",
        quote: "dont tell me what its all about <br> cus ive been there and im glad im out"
    },
    {
        author: "carpenters | i wont last a day without you | 1972",
        quote: "day after day i must face a world of strangers where i dont belong"
    },
    {
        author: "carpenters | i wont last a day without you | 1972",
        quote: "when theres no getting over that rainbow <br> when my smallest of dreams wont come true <br> i can take all the madness the world has to give <br> but i wont last a day without you"
    },
    {
        author: "carpenters | all you get from love is a love song | 1976",
        quote: "now the tears in my eyes are ever blinding <br> the future that lies before me i cannot see <br> although tomorrow i know the sun is rising <br> lighting up the world for everyone but not for me"
    },
    {
        author: "death cab for cutie | ill follow you into the dark | 2014",
        quote: "love of mine <br> someday you will die <br> but ill be close behind <br> ill follow you into the dark"
    },
    {
        author: "death cab for cutie | ill follow you into the dark | 2014",
        quote: "if theres no one beside you when your soul embarks <br> then ill follow you into the dark"
    },
    {
        author: "death cab for cutie | ill follow you into the dark | 2014",
        quote: "well hold each other soon in the blackest of rooms"
    },
    {
        author: "death cab for cutie | soul meets body | 2005",
        quote: "i want to live where soul meets body <br> and let the sun wrap its arms around me <br> and bathe my skin in water cool and cleansing <br> and feel what its like to be new"
    },
    {
        author: "death cab for cutie | soul meets body | 2005",
        quote: "i do believe its true <br> that there are roads left in both of our shoes <br> but if the silence takes you then i hope it takes me too"
    },
    {
        author: "death cab for cutie | soul meets body | 2005",
        quote: "youre the only song i want to hear <br> a melody softly soaring through my atmosphere"
    },
    {
        author: "adele | skyfall | 2014",
        quote: "i know id never be me without the security of your loving arms"
    },
    {
        author: "johnny goth | panic | 2019",
        quote: "get me out of here <br> get me away"
    },
    {
        author: "mars argo | wasted away | 2014",
        quote: "wasted away again <br> warm milk dripping down my skin <br> your words running through my head <br> if im sick, im sad, im mad"
    },
    {
        author: "mars argo | wasted away | 2014",
        quote: "you might lie and i might cry <br> ill wipe my eyes, nevermind"
    },
    {
        author: "unaloon | CODEPENDENCY | 2019",
        quote: "i convince myself im fine <br> but now that i can see <br> its just my codependency"
    },
    {
        author: "unaloon | CODEPENDENCY | 2019",
        quote: "please just speak to me <br> please just say you need me <br> please just speak to me <br> please just say you love me"
    },
    {
        author: "unaloon | CODEPENDENCY | 2019",
        quote: "tell me that youll be alright <br> so i wont have to deny that its all in me <br>that its just my codependency"
    },
    {
        author: "unaloon | CODEPENDENCY | 2019",
        quote: "im just as bad as you when im alone too"
    },
    {
        author: "mars argo | using you | 2014",
        quote: "i dont care if i dont live to see another day <br> i love you in the worst way"
    },
    {
        author: "mars argo | using you | 2014",
        quote: "am i naive to think that he could be the love of my life? <br> there is a voice inside my head thats telling me that its right <br> i never thought id tell him how scared i am of losing him"
    },
    {
        author: "mars argo | runaway runaway | 2012",
        quote: "is there anybody listening? <br> eager words are making me an awful mess <br> you say you need me <br> were running out of time <br> i guess i fear the fear of consequence <br> you say youll leave me <br> but youll be sorry"
    },
    {
        author: "mars argo | runaway runaway | 2012",
        quote: "i wish i was a dumb pop star so the words wouldnt matter to you"
    },
    {
        author: "mars argo | runaway runaway | 2012",
        quote: "am i living an illusion? <br> i wanna runaway runaway runaway"
    },
    {
        author: "mars argo | runaway runaway | 2012",
        quote: "i feel like im losing control <br> maybe i should let myself go cus this is so predictable"
    },
    {
        author: "mars argo | runaway runaway | 2012",
        quote: "is there something that im missing? <br> my walls are caving in <br> i cant hear what youre saying <br> im afraid of giving in"
    },
    {
        author: "mars argo | love in black and white | 2011",
        quote: "i fell into a phase that im not fairly proud of when i first met my permanent frown"
    },
    {
        author: "mars argo | beauty is empty | 2011",
        quote: "your pretty smile is a monster and your beauty is empty"
    },
    {
        author: "mars argo | technology is a dead bird | 2009",
        quote: "i need to be myself again <br> i know precisely when its time to be the actor"
    },
    {
        author: "mars argo | technology is a dead bird | 2009",
        quote: "technology is a dead bird in your hands"
    },
    {
        author: "evanescence | hello | 2003",
        quote: "if i smile and dont believe <br> soon i know ill wake from this dream"
    },
    {
        author: "evanescence | hello | 2003",
        quote: "dont try to fix me im not broken <br> hello, im the lie living for you so you can hide"
    },
    {
        author: "poppy | dont ask | 2020",
        quote: "ll keep quiet cus the truth is getting too loud"
    },
    {
        author: "poppy | dont ask | 2020",
        quote: "ive given up too much to let this take me out"
    },
    {
        author: "poppy | dont ask | 2020",
        quote: "dont ask me how im feeling <br> theres nothing to talk about"
    },
    {
        author: "pink floyd | time | 1973",
        quote: "the time is gone <br> the song is over <br> thought id something more to say"
    },
    {
        author: "flatsound | i exist i exist i exist | 2009",
        quote: "look at me look at me look at me look at me <br> because i exist i exist i exist i exist i exist i exist"
    },
    {
        author: "now, now | thread | 2012",
        quote: "a hint of light in the dark <br> only enough to keep from giving up <br> if i could go back to the start to break the pattern forming between us"
    },
    {
        author: "now, now | wolf | 2012",
        quote: "i would kill to be your clothes <br> cling to your body and hang from your bones"
    },
    {
        author: "now, now | prehistoric | 2012",
        quote: "ill say that ive been trying to move on <br> we both know im not"
    },
    {
        author: "now, now | prehistoric | 2012",
        quote: "i would trade this sleep for you in a heartbeat"
    },
    {
        author: "now, now | prehistoric | 2012",
        quote: "each day you come closer <br> so close i can almost feel your breath on my shoulders <br> but i know if i turn around you might run away again"
    },
    {
        author: "now, now | school friends | 2012",
        quote: "she will be invisible like you want her <br> she will try to do everything just right for you"
    },
    {
        author: "now, now | school friends | 2012",
        quote: "you just like her where shes at <br> and youll thank her for the things she bought you <br> then youll go on your way"
    },
    {
        author: "now, now | school friends | 2012",
        quote: "the next day when you chase the other girl <br> she will remember all the things you said to her"
    },
    {
        author: "now, now | school friends | 2012",
        quote: "we can keep in touch if thats what you want <br> you can call me too if thats what friends do"
    },
    {
        author: "now, now | school friends | 2012",
        quote: "i am what you need when you cant find it somewhere else <br> i am what you want when you dont have anything else"
    },
    {
        author: "panucci's pizza | aesthetic? (more like ass-pathetic) | 2015",
        quote: "i wanna scoop out my cheeks so you cant pinch them anymore <br> i want to add to my legs and be as tall as the morgue <br> i want the fat in my arms to melt off my bones <br> and my stomach to fall out right onto the floor board"
    },
    {
        author: "panucci's pizza | aesthetic? (more like ass-pathetic) | 2015",
        quote: "arms, legs, gut, face <br> all of the things you love but i hate"
    },
    {
        author: "al bowlly | heartaches | 1931",
        quote: "heartaches, heartaches <br> my loving you meant only heartaches"
    },
    {
        author: "al bowlly | heartaches | 1931",
        quote: "heartaches, heartaches <br> what does it matter how my heart breaks"
    },
    {
        author: "al bowlly | heartaches | 1931",
        quote: "i should be happy with someone new <br> but my heart aches for you"
    },
    {
        author: "AJJ | body terror song | 2020",
        quote: "im so sorry that you have to have a body <br> one that will hurt you and be the subject of so much of your fear"
    },
    {
        author: "three days grace | pain | 2006",
        quote: "youre sick of feeling numb <br> youre not the only one"
    },
    {
        author: "three days grace | pain | 2006",
        quote: "this life is filled with hurt when happiness doesnt work"
    },
    {
        author: "three days grace | pain | 2006",
        quote: "id rather feel pain than nothing at all"
    },
    {
        author: "flyleaf | all around me | 2005",
        quote: "i can feel you all around me <br> thickening the air im breathing"
    },
    {
        author: "evanescence | missing | 2004",
        quote: "you wont cry for my absence <br> i know you forgot me long ago <br> am i that unimportant <br> am i so insignificant <br> isnt something missing? <br> isnt someone missing me?"
    },
    {
        author: "evanescence | missing | 2004",
        quote: "even though im the sacrifice <br> you wont try for me, not now <br> though id die to know you love me <br> im all alone"
    },
    {
        author: "evanescence | missing | 2004",
        quote: "and if i bleed, ill bleed knowing you dont care <br> and if i sleep just to dream of you <br> and wake without you there <br> isnt something missing?"
    },
    {
        author: "tupac | keep ya head up | 1993",
        quote: "forgive but dont forget <br> keep your head up"
    },
    {
        author: "bobby caldwell | what you won't do for love | 1978",
        quote: "my friends wonder what is wrong with me <br> well im in a daze from your love you see"
    },
    {
        author: "bobby caldwell | what you won't do for love | 1978",
        quote: "what you wont do do for love <br> you tried everything but you dont give up <br> in my world only you make me do for love what i would not do"
    },
    {
        author: "grover washington jr. & bill withers | just the two of us | 1980",
        quote: "we look for love no time for tears <br>wasted waters all that is and it dont make no flowers grow"
    },
    {
        author: "grover washington jr. & bill withers | just the two of us | 1980",
        quote: "good things might come to those who wait <br> not for those who wait too late"
    },
    {
        author: "grover washington jr. & bill withers | just the two of us | 1980",
        quote: "just the two of us <br> we can make it if we try"
    },
    {
        author: "mac demarco | treat her better | 2014",
        quote: "treat her better boy <br> if having her at your sides something you enjoy <br> if having her in your lifes really so important to you now"
    },
    {
        author: "daryl hall & john oates | she's gone | 1974",
        quote: "think ill spend eternity in the city <br> let the carbon and monoxide choke my thoughts away <br> and pretty bodies help dissolve the memories <br> they can never be what she was to me"
    },
    {
        author: "little river band | reminiscing | 1978",
        quote: "i want to build my world around you"
    },
    {
        author: "little river band | reminiscing | 1978",
        quote: "i said to myself when we are old <br> we will go dancing in the dark <br> walking through the park and reminiscing"
    },
    {
        author: "karen carpenter | if i had you | 1989",
        quote: "if i had you i wouldnt need the sun to light the morning <br> if i could have your love to light my night id never for a second keep our love from burning bright"
    },
    {
        author: "karen carpenter | if i had you | 1989",
        quote: "if i had you again i wouldnt be the fool ive been <br> if i had you again id never let the loving end"
    },
    {
        author: "karen carpenter | if i had you | 1989",
        quote: "so say that you believe in second chances <br> and say youll let me be with you tonight <br> if youll take my hand ill show you just how love could be so right"
    },
    {
        author: "bobby caldwell | my flame | 1978",
        quote: "my flame, some things will never change <br> i still hold your vision in my hand <br> say you still love me"
    },
    {
        author: "poppy | am i a girl? | 2018",
        quote: "please dont complicate me <br> i dont understand <br> sometimes im feminine <br> sometimes im masculine"
    },
    {
        author: "poppy | am i a girl? | 2018",
        quote: "dont evaluate me as woman or man <br> its keeping me awake <br> cant differentiate"
    },
    {
        author: "poppy | am i a girl? | 2018",
        quote: "am i girl? <br> am i boy? <br> am i a girl? <br> what does that even mean? <br> im somewhere in between"
    },
    {
        author: "TV girl | not allowed | 2016",
        quote: "wish that it was me <br> i guess its different cus you love him <br> but ive got an interactive sick and twisted imagination <br> and thats gotta count for something"
    },
    {
        author: "TV girl | not allowed | 2016",
        quote: "i hope were still friends <br> yeah i hope you dont mind"
    },
    {
        author: "cherish | chemical x | 2003",
        quote: "beware of the powerpuff girls"
    },
    {
        author: "meg & dia | monster | 2006",
        quote: "he battered his tiny fists to feel something <br> wondered what its like to touch and feel something"
    },
    {
        author: "meg & dia | monster | 2006",
        quote: "monster <br> how should i feel?"
    },
    {
        author: "meg & dia | monster | 2006",
        quote: "he slowly saw their nightmares were his dreams"
    },
    {
        author: "meg & dia | monster | 2006",
        quote: "turn the sheets down <br> murder ears with pillow lace <br> theres bath tubs full of glow flies <br> bathe in kerosene"
    },
    {
        author: "poppy | flux | 2021",
        quote: "my body is fluid cus ive been through it all <br> chewed up and used its cut into pieces to feed them all"
    },
    {
        author: "poppy | flux | 2021",
        quote: "when i see red, i go <br> and the serotonin will flow <br> and theres no bandage to lessen the damage"
    },
    {
        author: "poppy | on the level | 2021",
        quote: "right into traffic driving straight through every light ive got a habit of ignoring obvious signs"
    },
    {
        author: "poppy | hysteria | 2021",
        quote: "cant contain my emotions theres <br> no box big enough to hold them"
    },
    {
        author: "poppy | her | 2021",
        quote: "run your mouth to keep her scared <br> you expected her to care <br> but when her mind made up you were illfully prepared"
    },
    {
        author: "poppy | as strange as it seems | 2021",
        quote: "i was a passenger in a speeding car <br> you showed no regard for me"
    },
    {
        author: "poppy | as strange as it seems | 2021",
        quote: "i was a careful girl with a broken heart <br> you showed no regard for me"
    },
    {
        author: "poppy | as strange as it seems | 2021",
        quote: "im hanging on the steering wheel of a speeding car <br> ive got no regard for me"
    },
    {
        author: "poppy | never find my place | 2021",
        quote: "tonight ill eat my brain and maybe find a resolution <br> tonight ill cure my pain"
    },
    {
        author: "eels | your lucky day in hell | 1998",
        quote: "years go by <br> still i dont know who shall inherit this earth <br> and no one will know my name until its on a stone"
    },
    {
        author: "the living tombstone | i got no time | 2016",
        quote: "im regretting having memories of my friends <br> who they used to be <br> beside me before they left me to die"
    },
    {
        author: "the living tombstone | i got no time | 2016",
        quote: "i have this urge to kill and show that im alive <br> im getting sick from these apologies <br> from people with priorities that their life matters so much more than mine"
    },
    {
        author: "the living tombstone | i got no time | 2016",
        quote: "im stuttering again <br> no one will listen and no one will understand <br> because im crying as much as i speak"
    },
    {
        author: "built to spill | big dipper | 1994",
        quote: "you should have been here last night and heard what the big dipper said to me"
    },
    {
        author: "inabakumori feat. kaai yuki | lag train (ラグトレイン) | 2020",
        quote: "i wheeze out a pained breath as i sleep and fake my way through this ever lengthening day"
    },
    {
        author: "connor spioto | the villain i appear to be | 2017",
        quote: "i assure you before you can find me im gone <br> so come on and catch me youve still got a chance"
    },
    {
        author: "connor spioto | the villain i appear to be | 2017",
        quote: "although i may not think everything through <br> i dont take back what i say or regret what i do"
    },
    {
        author: "connor spioto | the villain i appear to be | 2017",
        quote: "even if you cant see the good inside me <br> i dont have the time to tell you why i do the things that i do"
    },
    {
        author: "connor spioto | the villain i appear to be | 2017",
        quote: "please hold on and soon youll see <br> that im not the villain i appear to be"
    },
    {
        author: "connor spioto | the villain i appear to be | 2017",
        quote: "i know you think im crazy <br> but i hope that maybe now youll see why i had to try"
    },
    {
        author: "teddyloid | fly away | 2010",
        quote: "heart stood still when we first met <br> i thought wed be together yet youre using me for your own gain <br> and now ill never feel the same"
    },
    {
        author: "teddyloid | fly away | 2010",
        quote: "youll never find a better time make your stand youll be fine"
    },
    {
        author: "mag.lo | who am i? | 2016",
        quote: "is this a dream or a waking fucking nightmare?"
    },
    {
        author: "mag.lo | who am i? | 2016",
        quote: "at the tip of my wand i could write songs <br> but why write <br> why bother"
    },
    {
        author: "13 the musical | what it means to be a friend | 2008",
        quote: "a friend is the person who most of all cares about what you feel <br> and nothing is harder than learning a friend isnt real"
    },
    {
        author: "13 the musical | if that's what it is | 2008",
        quote: "lets face it youve worked so hard and now youre scarred and free of any hope"
    },
    {
        author: "13 the musical | if that's what it is | 2008",
        quote: "if thats what it is then thats what it is <br> though thats not the way i choose to see it"
    },
    {
        author: "13 the musical | if that's what it is | 2008",
        quote: "i make my own rules <br> i do what i can <br> if i hit the wall then maybe its all part of the plan"
    },
    {
        author: "13 the musical | if that's what it is | 2008",
        quote: "tomorrow will come <br> today will be gone <br> and so i put one foot in front of the other"
    },
    {
        author: "13 the musical | if that's what it is | 2008",
        quote: "i say i wont cry <br> i cry until dawn <br> and then i put one foot in front of the other"
    },
    {
        author: "13 the musical | if that's what it is | 2008",
        quote: "i face the world for what it is and not what i wish it could be"
    },
    {
        author: "13 the musical | if that's what it is | 2008",
        quote: "one day ill be thirty <br> one day ill be fine <br> one day ill make fun of this dramatic life of mine"
    },
    {
        author: "13 the musical | a little more homework | 2008",
        quote: "one day ill be older and then ill write a book about the choices that i made"
    },
    {
        author: "13 the musical | a little more homework | 2008",
        quote: "ill choose what to say <br> what to see when presented with a candy coated opportunity"
    },
    {
        author: "13 the musical | a little more homework | 2008",
        quote: "so you gotta hang in there til the whole story ends <br>cus we all have a little more homework to do"
    },
    {
        author: "mean girls the musical | what's wrong with me | 2018",
        quote: "whats wrong with me <br> wheres my mind <br> where does it end"
    },
    {
        author: "mean girls the musical | what's wrong with me | 2018",
        quote: "mama called me beautiful <br> dont believe her anymore <br> now im listening to you"
    },
    {
        author: "mean girls the musical | what's wrong with me | 2018",
        quote: "when we both know youre cruel and we both know youre right <br> i could listen to you like a fool all night"
    },
    {
        author: "mean girls the musical | what's wrong with me | 2018",
        quote: "tell me whats wrong with me <br> my body face my hair tell me <br> all my many faults <br> tell me like you care"
    },
    {
        author: "13 the musical | a little more homework | 2008",
        quote: "the sky goes blue and the sky goes black and no matter what you do you cant go back"
    },
    {
        author: "flyleaf | all around me | 2005",
        quote: "i can feel you all around me thickening the air im breathing <br> holding onto what im feeling <br> savouring this heart thats healing"
    },
    {
        author: "flyleaf | all around me | 2005",
        quote: "you said you would never leave me <br> i believe you <br> i believe"
    },
]

/*
    {
        author: "",
        quote: ""
    },
    
    " ": 'step into my mind youll last two seconds then youre gone demons in my penthouse know the words to all my songs',
    " ": 'in all my searching theres one thing that i found we dont go to heaven we just rot inside the ground',
    " ": 'and you dont seem to understand a shame you seemed an honest man',
    " ": 'and you know what they say might hurt you and you know that it means so much and you dont even feel a thing',
    " ": 'i am falling i am fading i am drowning help me to breathe i am hurting i have lost it all i am losing',
    " ": 'and you dont seem the lying kind a shame that i can read your mind',
    " ": 'please understand if love ends then i promise you that i shall never breathe again',
    " ": 'i cant get you out of my head and i know i cant pretend that i wont die if you decide you wont see me again',
    " ": 'when i die fuck it i wanna go to hell cus im a piece of shit it aint hard to fuckin tell',
    " ": 'i wonder if i died would tears come to her eyes forgive me for my disrespect forgive me for my lies',
    " ": 'chasing after you is like a fairytale but i feel like im glued on tight to this carousel',
    " ": 'its no fun when im sitting all alone youre right in front of me and im done with your bittersweet bittersweet tragedy',
    " ": 'tell me why the hell no one is here tell me what to do to make it all feel better maybe its a cruel joke one me whatever whatever',
    " ": 'maybe if i know all of them well i wouldnt have been trapped inside this hell that holds me',
    " ": 'cant take it anymore need to put you to bed sing you a lullaby where you die in the end',
    " ": 'im peeling the skin off my face cus i really hate feeling safe',
    " ": 'im not a piece of cake for you to just discard while you walk away',
    " ": 'beauty queen of only eighteen she had some trouble with herself he was always there to help her she always belonged to someone else',
    " ": 'i dont mind spending every day out in your corner in the pouring rain',
    " ": 'im obsessed with you in a way i cant believe when you wipe your tears do you wipe them just for me',
    " ": 'and even if i was wrong i know i dont deserve this',
    " ": 'im lying on the moon my dear ill be there soon',
    " ": 'all i want is you now all i wanna do now is wait for you to call me baby im so sorry do you wanna hurt me are you gonna hurt me please dont desert me',
    " ": 'but even if he were my man hed never truly understand what it means to be a girl',
    " ": 'put ribbons in my curls then carry around a knife with my diamonds its psycho',
    " ": 'trade it all for a false self insecurity fall in love fall in line with all his fantasies',
    " ": 'fake it til we make everyone happy but ourselves use us for our bodies til theres nothing but a shell',
    " ": 'i was born and raised as an eastern girl in a western world i was told to choose to be what i chose to be there doesnt seem to be a place for me',
    " ": 'you should be able to feel a performance with your whole body and soul',
    " ": 'i reflect on my reflection and i ask myself the question whats the right direction to go i dont know',
    " ": 'im always running out of time i think ive made up my mind',
    " ": 'everything that i believed in turned out to be such a stupid fantasy a reflection of how i wanted things to be im ending everything i know screaming out in pain might as well rip out my throat much too fast i will sing and cry this is my goodbye',
    " ": 'i cant abandon the fantasy that i know everything you see about me is only show heart is exhausted and weak but im not afraid all i can do now i watch as i fade away',
    " ": 'as for the strength and the will left inside of me im just a kid i dont know what you want from me',
    " ": 'one by one after another my memories start to delete ill never retrieve them but theyll never take away my memories of you times that we laughed and the fun things we used to do all i can hope is that you wont forget them too',
    " ": 'nowadays when i try to sing i can feel my body rip at the seams desperately praying for some kind of miracle no one listens im all alone',
    " ": 'everything that i protected turned out to be a delusion in the end stabbing me with the love ill never have again if i tried saying how i feel would that even reach you before i disappeared not enough time to sing or cry this is my goodbye',
    " ": 'this is the end of me soon i wont know im gone fading away from here until theres nothing left its so pathetic right now that i think of it only the memories of my voice will remain',
    " ": 'you might forget me but please dont forget my name if that alone could come true i can rest in peace lasting forever like how i was supposed to be this is the end now but i like to think someday that even if i die this song will still remain',
    " ": 'thank you so much and finally goodbye for good',
    " ": 'watch me fault her youre living like a disaster she said kill me faster with strawberry gashes all over',
    " ": 'called her over and asked her if she was improving she said feels fine its wonderful wonderful here hex me told her i dreamt of a devil that knew her',
    " ": 'i lay quiet waiting for her voice to say some things you lose and some things you just give away scold me failed her if only id held on tighter to her pale white skin that twisted and withered away from me way from me',
    " ": 'watch me lose her its almost like losing myself give her my soul and let them take somebody else',
    " ": 'when i step onto the stage see the curtain raise im apparent ive got someone to play all the crowds are in the seats looking straight at me for an answer they just get what they see',
    " ": 'every time it all comes down in the end thats a truth that the stage school doesnt teach you but its good to know',
    " ": 'it takes much more than just learning a script you see you gotta take the part and believe it i sometimes make up all of my lines on the spot but i will always give what i got',
    " ": 'i thought i was only acting but i felt exactly like it was all for real i sure didnt know it hurt so but then no rehearsal could show you how to feel inside what you gotta hide where to put your pride when to realize youve had your time find another role carry on the show',
    " ": 'so far it occurs to me that everybody in the world is afraid of me just one more sin and down we go but the news is out and i think im going to kill myself or fuck myself or tell myself about the only thing that matters now',
    " ": 'this planet isnt special collections made of clay im waiting for the punishment i know is on my way cut cut cut me up and fuck fuck fuck me up',
    " ": 'somewhere on a toilet wall i read the words you form a line to formalize the former lies and i finally saw the truth something so profound and it was sitting there surrounded by the garbage and the stains another victim of the refuse',
    " ": 'please please forgive me but i wont be home again maybe someday youll look up and barely conscious youll say to no one isnt something missing',
    " ": 'you wont cry for my absence i know you forgot me long ago am i that unimportant am i so insignificant isnt something missing isnt someone missing me',
    " ": 'even though im the sacrifice you wont try for me not now though id die to know you love me im all alone',
    " ": 'and if i bleed ill bleed knowing you dont care and if i sleep just to dream of you ill wake without you there',
    " ": 'now i will tell you what ive done for you fifty thousand years ive cried screaming deceiving and bleeding for you and you still wont hear me',
    " ": 'dont want you hand this time ill save myself maybe ill wake up for once',
    " ": 'i wanna be the true savior the one with the terrible demise',
    " ": 'i wanna be your true love im the only one you could cry to all the time i could just be who you need darling wont you just plead or should i begin to bleed',
    " ": 'ill tear down the sky what do you want ill do it all for life my love my alibi tonight ill try to do it for you',
    " ": 'i wanna be a white angel the one with two billion of eyes i wanna be like a fly on the wall to watch you until you die im gonna be where you are doesnt matter how far because we are meant to be',
    " ": 'im not a fan of puppeteers but ive a nagging fear someone else is pulling at the strings',
    " ": 'a terrible catastrophe played by your symphony what a terrifying work of art',
    " ": 'you just dont know it yet but you love me and i love you the same one day well have a pretty wedding and ill be your everything well be together yes forever we will never ever part you dont know it yet but baby ive already got your heart',
    " ": 'last night goodnight this night ill hold you hand tight and go to sleep goodnight',
    " ": 'itd be wonderful if i could spend morning with you once more i just wish even such a small hope can be made a miracle',
    " ": 'when i think that the end will arrive someday thats when i hope that the night sky will keep your smile goodnight',
    " ": 'if it wasnt for you i could sleep forever but im not mad i want breakfast',
    " ": 'happy thoughts happy thoughts happy thoughts in bottles all in a row',
    " ": 'sometimes my friend feels a certain way down comes a bottle to save the day',
    " ": 'night after night more dreams friend after friend more bottles',
    " ": 'holding them out to each and every friend each and every bottle but every time i let one go it shatters against the tile between my feet happy thoughts happy thoughts happy thoughts in shards all over the floor',
    " ": 'a poem is never actually finished it just stops moving',
    " ": 'i mean i only tried to laugh along because i was being laughed at so why did they get angry at me',
    " ": 'when things dont go as well as they do in my imagination why do i always have to say im sorry',
    " ": 'ive mastered the art of whiling away my time by pretending to sleep so much that i turned to stone and stopped breathing',
    " ": 'a useless loving tool that was never painted in any colour even when i got down on my knees and tolerated everything nothing came to save me isnt this too much havent i been left out is that right',
    " ": 'i mean even if you try to blame your sins and such on this tiny tiny world full of lies and curse it will that blame make things better or worse',
    " ": 'its not like its selfish or anything to want you to believe from the bottom of your heart that im adorable',
    " ": 'viva viva happy i cry big tears all night all night all by myself',
    " ": 'a perplexing thing called love took over and then i couldnt keep my heart space from splitting in two never had the capacity to control it in the first place',
    " ": 'everyday is full of why did this did that but in the end its sayonara baby',
    " ": 'a blades edge with centimeters of suspicion stabbing a vein at the end of it all sickly love spurts out',
    " ": 'each night i went to sleep wishing that this would turn out to be a nightmare <br> yet each morning i awoke to find that the world was just as horribly warped as it was the day before'
*/
