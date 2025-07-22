document.getElementById('generate').addEventListener('click', () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomIndex];

    document.getElementById('quote').innerHTML = selectedQuote.quote;
    document.getElementById('author').innerHTML = selectedQuote.author;
});

const quotes = [
    {author: "poppy | EAT | 2021",
        quote: "maybe today <br> i'll throw it all away <br> let my body eat itself and finally get its way"
    },
    {author: "poppy | EAT | 2021",
        quote: "i tell everyone that i'm okay <br> but i'm ashamed <br> i'm afraid <br> and it all eats at me"
    },
    {author: "poppy | EAT | 2021",
        quote: "i'm not okay <br> i know that i'm not safe <br> could you come and eat me up and put me out my pain?"
    },
    {author: "elita | introverted | 2019",
        quote: "i don't hate you <br> i just need some time alone"
    },
    {author: "waterparks | magnetic | 2021",
        quote: "but you said it <br> i'm magnetic to the things i hate the most"
    },
    {author: "persona 4 | heartbeat, heartbreak | 2008",
        quote: "tell me why you did it <br> every dream falling apart <br> tell me why you did it after the promise"
    },
    {author: "elita | introverted | 2019",
        quote: "i'm nervous observing <br> so determined it's concerning <br> i'm a burden and i'm hurting <br> go easy on me, i'm learning"
    },
    {author: "jack off jill | fear of dying | 2000",
        quote: "i'm not afraid of standing sti'll <br> i'm just afraid of being bored <br> i'm not afraid of speaking my mind <br> i'm just afraid of being ignored"
    },
    {author: "jack off jill | fear of dying | 2000",
        quote: "i'm not afraid of feeling <br> and i'm not afraid of trying i'm just afraid of losing <br> and i am afraid of dying"
    },
    {author: "jack off jill | fear of dying | 2000",
        quote: "i'm not afraid, put the gun in my hand <br> i'm just afraid it'll hurt like hell"
    },
    {author: "jack off jill | fear of dying | 2000",
        quote: "i'm not afraid of screaming <br> and i'm not afraid of crying <br> i'm just afraid of forgetting <br> and i am afraid of dying"
    },
    {author: "mindless self indulgence | never wanted to dance | 2008",
        quote: "there is nothing you can do that i have not already done to myself"
    },
    {author: "portal 2 | want you gone | 2011",
        quote: "oh how we laughed and laughed <br> except i wasn't laughing"
    },
    {author: "cam meekins | better days | 2013",
        quote: "i sing about you every way <br> cause you're the perfect melody <br> know the world ain't perfect <br> but to me you were my everything"
    },
    {author: "CUCO | lover is a day | 2016",
        quote: "furthering my distance from you <br> realistically i can't leave now <br> but i'm okay as long as you keep me from going crazy"
    },
    {author: "CUCO | lover is a day | 2016",
        quote: "i'll take the bumpy road <br> it'll probably break my legs <br> as long as i don't show you what's ruining my head"
    },
    {author: "hum | stars | 1995",
        quote: "i bring her home everything i want and nothing that she needs <br> i thought she would be there holding daisies <br> she always waits for me <br> she thinks she missed the train to mars <br> she's out back counting stars"
    },
    {author: "the zombies | the way i feel inside | 1965",
        quote: "should i try to hide <br> the way i feel inside my heart for you <br> would you say that you would try to love me too <br> in your mind could you ever be really close to me?"
    },
    {author: "the zombies | the way i feel inside | 1965",
        quote: "but til i can see that you would really care for me <br> i'll keep trying to hide the way i feel inside"
    },
    {author: "carpenters | two lives | 1983",
        quote: "maybe i'm a dreamer <br> maybe just a fool <br> lately i can hardly see the sun"
    },
    {author: "sorry | jealous guy | 2019",
        quote: "i don't wanna share your pretty heart with anybody else <br> i'm a selfish guy its only you me and myself <br> i'm a jealous guy <br> don't want to see your pretty eyes with anybody else"
    },
    {author: "sorry | jealous guy | 2019",
        quote: "i want to be the one to serve you <br> i have to be the one who serves you"
    },
    {author: "BADBADNOTGOOD | time moves slow | 2016",
        quote: "time moves slow when you're all alone <br> and the time moves slow when you're out on your own <br> and the time moves slow when you're missing a friend <br> and the time moves slow when you came to the end"
    },
    {author: "BADBADNOTGOOD | time moves slow | 2016",
        quote: "running away is easy <br> it's the leaving that's hard"
    },
    {author: "BADBADNOTGOOD | time moves slow | 2016",
        quote: "and loving you was easy <br> it was you leaving that scarred"
    },
    {author: "BADBADNOTGOOD | time moves slow | 2016",
        quote: "i knew just what you were thinking that day <br> you just didn't love me like i do <br> like i love you <br> the sad thing is were better off this way"
    },
    {author: "sammy rae | kick it to me | 2018",
        quote: "singing the blues all on my own in a dark room <br> nobody there all on my own in a dark room"
    },
    {author: "lady gaga | replay | 2020",
        quote: "who was it that pulled the trigger <br> was it you or i?"
    },
    {author: "lady gaga | replay | 2020",
        quote: "the monster inside you is torturing me <br> the scars on my mind are on replay"
    },
    {author: "lady gaga | replay | 2020",
        quote: "psychologically its something that i cant explain"
    },
    {author: "savlonic | epoch | 2016",
        quote: "i know we can make it better than it ever was"
    },
    {author: "savlonic | epoch | 2016",
        quote: "our fates are not yet written <br> i will take the warning <br> choose a way that's less destructive"
    },
    {author: "the living tombstone | my ordinary life | 2017",
        quote: "the people always different but it always feels the same"
    },
    {author: "the living tombstone | my ordinary life | 2017",
        quote: "staying still, eyes closed <br> let the world just pass me by"
    },
    {author: "the living tombstone | my ordinary life | 2017",
        quote: "lean in, let go <br> i feel fear for the very last time"
    },
    {author: "the living tombstone | my ordinary life | 2017",
        quote: "they tell me that i'm special <br> i smile and shake my head <br> i'll give them stories to tell friends about the things i said"
    },
    {author: "the living tombstone | my ordinary life | 2017",
        quote: "they tell me i'm so humble <br> i say i'm turning red <br> they let me lie to them and don't feel like they've been misled"
    },
    {author: "the living tombstone | my ordinary life | 2017",
        quote: "when you become untouchable you're unable to touch"
    },
    {author: "the living tombstone | i got no time | 2016",
        quote: "ive been staring at my death so many times"
    },
    {author: "the living tombstone | i got no time | 2016",
        quote: "i felt like i won <br> but i wasn't done <br> the nightmare repeats itself every time"
    },
    {author: "the living tombstone | i got no time | 2016",
        quote: "i'm getting sick from these apologies <br> from people with priorities <br> that their life matters so much more than mine"
    },
    {author: "the powerpuff girls | love makes the world go round | 1999",
        quote: "you cant hurt me with the things that you do <br> i'll pick up dandelions and i'll give them to you"
    },
    {author: "the powerpuff girls | you wanna make us feel real good | 2004",
        quote: "as i descend to the earth and i view the universe above me <br> i realize that life evolves revolves and dissolves completely around the opposites <br> therefore i conclude that i cannot exist in my utopian mind"
    },
    {author: "giga-p | drop pop candy | 2014",
        quote: "even when its raining i don't use an umbrella"
    },
    {author: "carpenters | i need to be in love | 1976",
        quote: "the hardest thing ive ever done is keep believing <br> theres someone in this crazy world for me"
    },
    {author: "carpenters | i need to be in love | 1976",
        quote: "the way that people come and go through temporary lives <br> my chance could come and i might never know"
    },
    {author: "carpenters | i need to be in love | 1976",
        quote: "it took awhile for me to learn that nothing comes for free <br> the price ive paid is high enough for me"
    },
    {author: "carpenters | i need to be in love | 1976",
        quote: "i know i ask perfection of a quite imperfect world <br> and fool enough to think that's what i'll find"
    },
    {author: "carpenters | i need to be in love | 1976",
        quote: "here i am with pockets full of good intentions <br> but none of them will comfort me"
    },
    {author: "carpenters | i need to be in love | 1976",
        quote: "without a friend in sight <br> hanging on a hope but i'm alright"
    },
    {author: "persona 4 | heaven | 2008",
        quote: "cant get my mind out of those memories"
    },
    {author: "persona 4 | heaven | 2008",
        quote: "music keeps on turning me from the words that hurt my soul"
    },
    {author: "persona 4 | heaven | 2008",
        quote: "those long days passing by from that door <br> like late summer they slowly fade away"
    },
    {author: "carpenters | superstar | 1971",
        quote: "loneliness is such a sad affair <br> and i can hardly wait to be with you again"
    },
    {author: "carpenters | rainy days and mondays | 1974",
        quote: "sometimes id like to quit"
    },
    {author: "carpenters | rainy days and mondays | 1974",
        quote: "funny but it seems that its the only thing to do run and find the one who loves me"
    },
    {author: "carpenters | rainy days and mondays | 1974",
        quote: "what i feel has come and gone before <br> no need to talk it out"
    },
    {author: "carpenters | i'll never fall in love again | 1971",
        quote: "what do you get when you fall in love <br> you only get lies and pain and sorrow"
    },
    {author: "carpenters | i'll never fall in love again | 1971",
        quote: "don't tell me what its all about <br> cus ive been there and i'm glad i'm out"
    },
    {author: "carpenters | i won't last a day without you | 1972",
        quote: "day after day i must face a world of strangers where i don't belong"
    },
    {author: "carpenters | i won't last a day without you | 1972",
        quote: "when theres no getting over that rainbow <br> when my smallest of dreams won't come true <br> i can take all the madness the world has to give <br> but i won't last a day without you"
    },
    {author: "carpenters | all you get from love is a love song | 1976",
        quote: "now the tears in my eyes are ever blinding <br> the future that lies before me i cannot see <br> although tomorrow i know the sun is rising <br> lighting up the world for everyone but not for me"
    },
    {author: "death cab for cutie | i'll follow you into the dark | 2014",
        quote: "love of mine <br> someday you will die <br> but i'll be close behind <br> i'll follow you into the dark"
    },
    {author: "death cab for cutie | i'll follow you into the dark | 2014",
        quote: "if theres no one beside you when your soul embarks <br> then i'll follow you into the dark"
    },
    {author: "death cab for cutie | i'll follow you into the dark | 2014",
        quote: "well hold each other soon in the blackest of rooms"
    },
    {author: "death cab for cutie | soul meets body | 2005",
        quote: "i want to live where soul meets body <br> and let the sun wrap its arms around me <br> and bathe my skin in water cool and cleansing <br> and feel what its like to be new"
    },
    {author: "death cab for cutie | soul meets body | 2005",
        quote: "i do believe its true <br> that there are roads left in both of our shoes <br> but if the silence takes you then i hope it takes me too"
    },
    {author: "death cab for cutie | soul meets body | 2005",
        quote: "you're the only song i want to hear <br> a melody softly soaring through my atmosphere"
    },
    {author: "adele | skyfall | 2014",
        quote: "i know id never be me without the security of your loving arms"
    },
    {author: "johnny goth | panic | 2019",
        quote: "get me out of here <br> get me away"
    },
    {author: "mars argo | wasted away | 2014",
        quote: "wasted away again <br> warm milk dripping down my skin <br> your words running through my head <br> if i'm sick, i'm sad, i'm mad"
    },
    {author: "mars argo | wasted away | 2014",
        quote: "you might lie and i might cry <br> i'll wipe my eyes, nevermind"
    },
    {author: "unaloon | CODEPENDENCY | 2019",
        quote: "i convince myself i'm fine <br> but now that i can see <br> its just my codependency"
    },
    {author: "unaloon | CODEPENDENCY | 2019",
        quote: "please just speak to me <br> please just say you need me <br> please just speak to me <br> please just say you love me"
    },
    {author: "unaloon | CODEPENDENCY | 2019",
        quote: "tell me that you'll be alright <br> so i won't have to deny that its all in me <br>that its just my codependency"
    },
    {author: "unaloon | CODEPENDENCY | 2019",
        quote: "i'm just as bad as you when i'm alone too"
    },
    {author: "mars argo | using you | 2014",
        quote: "i don't care if i don't live to see another day <br> i love you in the worst way"
    },
    {author: "mars argo | using you | 2014",
        quote: "am i naive to think that he could be the love of my life? <br> there is a voice inside my head that's telling me that its right <br> i never thought id tell hi'm how scared i am of losing him"
    },
    {author: "mars argo | runaway runaway | 2012",
        quote: "is there anybody listening? <br> eager words are making me an awful mess <br> you say you need me <br> were running out of time <br> i guess i fear the fear of consequence <br> you say you'll leave me <br> but you'll be sorry"
    },
    {author: "mars argo | runaway runaway | 2012",
        quote: "i wish i was a dumb pop star so the words wouldn't matter to you"
    },
    {author: "mars argo | runaway runaway | 2012",
        quote: "am i living an illusion? <br> i wanna runaway runaway runaway"
    },
    {author: "mars argo | runaway runaway | 2012",
        quote: "i feel like i'm losing control <br> maybe i should let myself go cus this is so predictable"
    },
    {author: "mars argo | runaway runaway | 2012",
        quote: "is there something that i'm missing? <br> my walls are caving in <br> i cant hear what you're saying <br> i'm afraid of giving in"
    },
    {author: "mars argo | love in black and white | 2011",
        quote: "i fell into a phase that i'm not fairly proud of when i first met my permanent frown"
    },
    {author: "mars argo | beauty is empty | 2011",
        quote: "your pretty smile is a monster and your beauty is empty"
    },
    {author: "mars argo | technology is a dead bird | 2009",
        quote: "i need to be myself again <br> i know precisely when its time to be the actor"
    },
    {author: "mars argo | technology is a dead bird | 2009",
        quote: "technology is a dead bird in your hands"
    },
    {author: "evanescence | hello | 2003",
        quote: "if i smile and don't believe <br> soon i know i'll wake from this dream"
    },
    {author: "evanescence | hello | 2003",
        quote: "don't try to fix me i'm not broken <br> hello, i'm the lie living for you so you can hide"
    },
    {author: "poppy | don't ask | 2020",
        quote: "ll keep quiet cus the truth is getting too loud"
    },
    {author: "poppy | don't ask | 2020",
        quote: "ive given up too much to let this take me out"
    },
    {author: "poppy | don't ask | 2020",
        quote: "don't ask me how i'm feeling <br> theres nothing to talk about"
    },
    {author: "pink floyd | time | 1973",
        quote: "the time is gone <br> the song is over <br> thought id something more to say"
    },
    {author: "flatsound | i exist i exist i exist | 2009",
        quote: "look at me look at me look at me look at me <br> because i exist i exist i exist i exist i exist i exist"
    },
    {author: "now, now | thread | 2012",
        quote: "a hint of light in the dark <br> only enough to keep from giving up <br> if i could go back to the start to break the pattern forming between us"
    },
    {author: "now, now | wolf | 2012",
        quote: "i would kill to be your clothes <br> cling to your body and hang from your bones"
    },
    {author: "now, now | prehistoric | 2012",
        quote: "i'll say that ive been trying to move on <br> we both know i'm not"
    },
    {author: "now, now | prehistoric | 2012",
        quote: "i would trade this sleep for you in a heartbeat"
    },
    {author: "now, now | prehistoric | 2012",
        quote: "each day you come closer <br> so close i can almost feel your breath on my shoulders <br> but i know if i turn around you might run away again"
    },
    {author: "now, now | school friends | 2012",
        quote: "she will be invisible like you want her <br> she will try to do everything just right for you"
    },
    {author: "now, now | school friends | 2012",
        quote: "you just like her where shes at <br> and you'll thank her for the things she bought you <br> then you'll go on your way"
    },
    {author: "now, now | school friends | 2012",
        quote: "the next day when you chase the other girl <br> she will remember all the things you said to her"
    },
    {author: "now, now | school friends | 2012",
        quote: "we can keep in touch if that's what you want <br> you can call me too if that's what friends do"
    },
    {author: "now, now | school friends | 2012",
        quote: "i am what you need when you cant find it somewhere else <br> i am what you want when you don't have anything else"
    },
    {author: "panucci's pizza | aesthetic? (more like ass-pathetic) | 2015",
        quote: "i wanna scoop out my cheeks so you cant pinch them anymore <br> i want to add to my legs and be as tall as the morgue <br> i want the fat in my arms to melt off my bones <br> and my stomach to fall out right onto the floor board"
    },
    {author: "panucci's pizza | aesthetic? (more like ass-pathetic) | 2015",
        quote: "arms, legs, gut, face <br> all of the things you love but i hate"
    },
    {author: "al bowlly | heartaches | 1931",
        quote: "heartaches, heartaches <br> my loving you meant only heartaches"
    },
    {author: "al bowlly | heartaches | 1931",
        quote: "heartaches, heartaches <br> what does it matter how my heart breaks"
    },
    {author: "al bowlly | heartaches | 1931",
        quote: "i should be happy with someone new <br> but my heart aches for you"
    },
    {author: "AJJ | body terror song | 2020",
        quote: "i'm so sorry that you have to have a body <br> one that will hurt you and be the subject of so much of your fear"
    },
    {author: "three days grace | pain | 2006",
        quote: "you're sick of feeling numb <br> you're not the only one"
    },
    {author: "three days grace | pain | 2006",
        quote: "this life is filled with hurt when happiness doesn't work"
    },
    {author: "three days grace | pain | 2006",
        quote: "id rather feel pain than nothing at all"
    },
    {author: "flyleaf | all around me | 2005",
        quote: "i can feel you all around me <br> thickening the air i'm breathing"
    },
    {author: "evanescence | missing | 2004",
        quote: "you won't cry for my absence <br> i know you forgot me long ago <br> am i that unimportant <br> am i so insignificant <br> isn't something missing? <br> isn't someone missing me?"
    },
    {author: "evanescence | missing | 2004",
        quote: "even though i'm the sacrifice <br> you won't try for me, not now <br> though id die to know you love me <br> i'm all alone"
    },
    {author: "evanescence | missing | 2004",
        quote: "and if i bleed, i'll bleed knowing you don't care <br> and if i sleep just to dream of you <br> and wake without you there <br> isn't something missing?"
    },
    {author: "tupac | keep ya head up | 1993",
        quote: "forgive but don't forget <br> keep your head up"
    },
    {author: "bobby caldwell | what you won't do for love | 1978",
        quote: "my friends wonder what is wrong with me <br> well i'm in a daze from your love you see"
    },
    {author: "bobby caldwell | what you won't do for love | 1978",
        quote: "what you won't do do for love <br> you tried everything but you don't give up <br> in my world only you make me do for love what i would not do"
    },
    {author: "grover washington jr. & bill withers | just the two of us | 1980",
        quote: "we look for love no time for tears <br>wasted waters all that is and it don't make no flowers grow"
    },
    {author: "grover washington jr. & bill withers | just the two of us | 1980",
        quote: "good things might come to those who wait <br> not for those who wait too late"
    },
    {author: "grover washington jr. & bill withers | just the two of us | 1980",
        quote: "just the two of us <br> we can make it if we try"
    },
    {author: "mac demarco | treat her better | 2014",
        quote: "treat her better boy <br> if having her at your sides something you enjoy <br> if having her in your life's really so important to you now"
    },
    {author: "daryl hall & john oates | she's gone | 1974",
        quote: "think i'll spend eternity in the city <br> let the carbon and monoxide choke my thoughts away <br> and pretty bodies help dissolve the memories <br> they can never be what she was to me"
    },
    {author: "little river band | reminiscing | 1978",
        quote: "i want to build my world around you"
    },
    {author: "little river band | reminiscing | 1978",
        quote: "i said to myself when we are old <br> we will go dancing in the dark <br> walking through the park and reminiscing"
    },
    {author: "karen carpenter | if i had you | 1989",
        quote: "if i had you i wouldn't need the sun to light the morning <br> if i could have your love to light my night id never for a second keep our love from burning bright"
    },
    {author: "karen carpenter | if i had you | 1989",
        quote: "if i had you again i wouldn't be the fool ive been <br> if i had you again id never let the loving end"
    },
    {author: "karen carpenter | if i had you | 1989",
        quote: "so say that you believe in second chances <br> and say you'll let me be with you tonight <br> if you'll take my hand i'll show you just how love could be so right"
    },
    {author: "bobby caldwell | my flame | 1978",
        quote: "my flame, some things will never change <br> i still hold your vision in my hand <br> say you still love me"
    },
    {author: "poppy | am i a girl? | 2018",
        quote: "please don't complicate me <br> i don't understand <br> sometimes i'm feminine <br> sometimes i'm masculine"
    },
    {author: "poppy | am i a girl? | 2018",
        quote: "don't evaluate me as woman or man <br> its keeping me awake <br> cant differentiate"
    },
    {author: "poppy | am i a girl? | 2018",
        quote: "am i girl? <br> am i boy? <br> am i a girl? <br> what does that even mean? <br> i'm somewhere in between"
    },
    {author: "TV girl | not allowed | 2016",
        quote: "wish that it was me <br> i guess its different cus you love hi'm <br> but ive got an interactive sick and twisted imagination <br> and that's gotta count for something"
    },
    {author: "TV girl | not allowed | 2016",
        quote: "i hope were still friends <br> yeah i hope you don't mind"
    },
    {author: "cherish | chemical x | 2003",
        quote: "beware of the powerpuff girls"
    },
    {author: "meg & dia | monster | 2006",
        quote: "he battered his tiny fists to feel something <br> wondered what its like to touch and feel something"
    },
    {author: "meg & dia | monster | 2006",
        quote: "monster <br> how should i feel?"
    },
    {author: "meg & dia | monster | 2006",
        quote: "he slowly saw their nightmares were his dreams"
    },
    {author: "meg & dia | monster | 2006",
        quote: "turn the sheets down <br> murder ears with pillow lace <br> theres bath tubs full of glow flies <br> bathe in kerosene"
    },
    {author: "poppy | flux | 2021",
        quote: "my body is fluid cus ive been through it all <br> chewed up and used its cut into pieces to feed them all"
    },
    {author: "poppy | flux | 2021",
        quote: "when i see red, i go <br> and the serotonin will flow <br> and theres no bandage to lessen the damage"
    },
    {author: "poppy | on the level | 2021",
        quote: "right into traffic driving straight through every light ive got a habit of ignoring obvious signs"
    },
    {author: "poppy | hysteria | 2021",
        quote: "cant contain my emotions theres <br> no box big enough to hold them"
    },
    {author: "poppy | her | 2021",
        quote: "run your mouth to keep her scared <br> you expected her to care <br> but when her mind made up you were illfully prepared"
    },
    {author: "poppy | as strange as it seems | 2021",
        quote: "i was a passenger in a speeding car <br> you showed no regard for me"
    },
    {author: "poppy | as strange as it seems | 2021",
        quote: "i was a careful girl with a broken heart <br> you showed no regard for me"
    },
    {author: "poppy | as strange as it seems | 2021",
        quote: "i'm hanging on the steering wheel of a speeding car <br> ive got no regard for me"
    },
    {author: "poppy | never find my place | 2021",
        quote: "tonight i'll eat my brain and maybe find a resolution <br> tonight i'll cure my pain"
    },
    {author: "eels | your lucky day in hell | 1998",
        quote: "years go by <br> still i don't know who shall inherit this earth <br> and no one will know my name until its on a stone"
    },
    {author: "the living tombstone | i got no time | 2016",
        quote: "i'm regretting having memories of my friends <br> who they used to be <br> beside me before they left me to die"
    },
    {author: "the living tombstone | i got no time | 2016",
        quote: "i have this urge to kill and show that i'm alive <br> i'm getting sick from these apologies <br> from people with priorities that their life matters so much more than mine"
    },
    {author: "the living tombstone | i got no time | 2016",
        quote: "i'm stuttering again <br> no one will listen and no one will understand <br> because i'm crying as much as i speak"
    },
    {author: "built to spill | big dipper | 1994",
        quote: "you should have been here last night and heard what the big dipper said to me"
    },
    {author: "inabakumori feat. kaai yuki | lag train (ラグトレイン) | 2020",
        quote: "i wheeze out a pained breath as i sleep and fake my way through this ever lengthening day"
    },
    {author: "connor spioto | the villain i appear to be | 2017",
        quote: "i assure you before you can find me i'm gone <br> so come on and catch me you've still got a chance"
    },
    {author: "connor spioto | the villain i appear to be | 2017",
        quote: "although i may not think everything through <br> i don't take back what i say or regret what i do"
    },
    {author: "connor spioto | the villain i appear to be | 2017",
        quote: "even if you cant see the good inside me <br> i don't have the time to tell you why i do the things that i do"
    },
    {author: "connor spioto | the villain i appear to be | 2017",
        quote: "please hold on and soon you'll see <br> that i'm not the villain i appear to be"
    },
    {author: "connor spioto | the villain i appear to be | 2017",
        quote: "i know you think i'm crazy <br> but i hope that maybe now you'll see why i had to try"
    },
    {author: "teddyloid | fly away | 2010",
        quote: "heart stood still when we first met <br> i thought wed be together yet you're using me for your own gain <br> and now i'll never feel the same"
    },
    {author: "teddyloid | fly away | 2010",
        quote: "you'll never find a better time make your stand you'll be fine"
    },
    {author: "mag.lo | who am i? | 2016",
        quote: "is this a dream or a waking fucking nightmare?"
    },
    {author: "mag.lo | who am i? | 2016",
        quote: "at the tip of my wand i could write songs <br> but why write <br> why bother"
    },
    {author: "13 the musical | what it means to be a friend | 2008",
        quote: "a friend is the person who most of all cares about what you feel <br> and nothing is harder than learning a friend isn't real"
    },
    {author: "13 the musical | if that's what it is | 2008",
        quote: "lets face it you've worked so hard and now you're scarred and free of any hope"
    },
    {author: "13 the musical | if that's what it is | 2008",
        quote: "if that's what it is then that's what it is <br> though that's not the way i choose to see it"
    },
    {author: "13 the musical | if that's what it is | 2008",
        quote: "i make my own rules <br> i do what i can <br> if i hit the wall then maybe its all part of the plan"
    },
    {author: "13 the musical | if that's what it is | 2008",
        quote: "tomorrow will come <br> today will be gone <br> and so i put one foot in front of the other"
    },
    {author: "13 the musical | if that's what it is | 2008",
        quote: "i say i won't cry <br> i cry until dawn <br> and then i put one foot in front of the other"
    },
    {author: "13 the musical | if that's what it is | 2008",
        quote: "i face the world for what it is and not what i wish it could be"
    },
    {author: "13 the musical | if that's what it is | 2008",
        quote: "one day i'll be thirty <br> one day i'll be fine <br> one day i'll make fun of this dramatic life of mine"
    },
    {author: "13 the musical | a little more homework | 2008",
        quote: "one day i'll be older and then i'll write a book about the choices that i made"
    },
    {author: "13 the musical | a little more homework | 2008",
        quote: "i'll choose what to say <br> what to see when presented with a candy coated opportunity"
    },
    {author: "13 the musical | a little more homework | 2008",
        quote: "so you gotta hang in there til the whole story ends <br>cus we all have a little more homework to do"
    },
    {author: "mean girls the musical | what's wrong with me | 2018",
        quote: "whats wrong with me <br> wheres my mind <br> where does it end"
    },
    {author: "mean girls the musical | what's wrong with me | 2018",
        quote: "mama called me beautiful <br> don't believe her anymore <br> now i'm listening to you"
    },
    {author: "mean girls the musical | what's wrong with me | 2018",
        quote: "when we both know you're cruel and we both know you're right <br> i could listen to you like a fool all night"
    },
    {author: "mean girls the musical | what's wrong with me | 2018",
        quote: "tell me whats wrong with me <br> my body face my hair tell me <br> all my many faults <br> tell me like you care"
    },
    {author: "13 the musical | a little more homework | 2008",
        quote: "the sky goes blue and the sky goes black and no matter what you do you cant go back"
    },
    {author: "flyleaf | all around me | 2005",
        quote: "i can feel you all around me thickening the air i'm breathing <br> holding onto what i'm feeling <br> savouring this heart that's healing"
    },
    {author: "flyleaf | all around me | 2005",
        quote: "you said you would never leave me <br> i believe you <br> i believe"
    },
    {author: "SCARLXRD | 6 feet | 2017",
        quote: "step into my mind you'll last two seconds then you're gone <br> demons in my penthouse know the words to all my songs"
    },
    {author: "SCARLXRD | 6 feet | 2017",
        quote: "in all my searching theres one thing that i found <br> we don't go to heaven we just rot inside the ground"
    },
    {author: "boa | duvet | 1998",
        quote: "and you don't seem to understand <br> a shame you seemed an honest man"
    },
    {author: "boa | duvet | 1998",
        quote: "and you know what they say might hurt you <br> and you know that it means so much <br> and you don't even feel a thing"
    },
    {author: "boa | duvet | 1998",
        quote: "i am falling <br> i am fading <br> i am drowning <br> help me to breathe <br> i am hurting <br> i have lost it all <br> i am losing"
    },
    {author: "boa | duvet | 1998",
        quote: "and you don't seem the lying kind <br> a shame that i can read your mind"
    },
    {author: "toni braxton | breathe | 1993",
        quote: "please understand if love ends, then i promise you that i shall never breathe again"
    },
    {author: "toni braxton | breathe | 1993",
        quote: "i cant get you out of my head, and i know i cant pretend that i won't die if you decide you won't see me again"
    },
    {author: "the notorious b.i.g. | suicidal thoughts | 1994",
        quote: "when i die, fuck it, i wanna go to hell cus i'm a piece of shit it ain't hard to fuckin' tell"
    },
    {author: "the notorious b.i.g. | suicidal thoughts | 1994",
        quote: "i wonder if i died would tears come to her eyes <br> forgive me for my disrespect, forgive me for my lies"
    },
    {author: "melanie martinez | carousel | 2015",
        quote: "chasing after you is like a fairytale but i feel like i'm glued on tight to this carousel"
    },
    {author: "melanie martinez | bittersweet tragedy | 2014",
        quote: "it's no fun when i'm sitting all alone <br> you're right in front of me and i'm done with your bittersweet tragedy"
    },
    {author: "melanie martinez | pity party | 2015",
        quote: "tell me why the hell no one is here <br> tell me what to do to make it all feel better <br> maybe its a cruel joke on me <br> whatever, whatever"
    },
    {author: "melanie martinez | pity party | 2016",
        quote: "maybe if i know all of them well <br> i wouldn't have been trapped inside this hell that holds me"
    },
    {author: "melanie martinez | milk and cookies | 2015",
        quote: "can't take it anymore <br> need to put you to bed <br> sing you a lullaby where you die in the end"
    },
    {author: "melanie martinez | mad hatter | 2015",
        quote: "i'm peeling the skin off my face cus i really hate feeling safe"
    },
    {author: "melanie martinez | cake | 2015",
        quote: "i'm not a piece of cake for you to just discard while you walk away"
    },
    {author: "maroon 5 | she will be loved | 2004",
        quote: "beauty queen of only eighteen, she had some trouble with herself <br> he was always there to help her <br> she always belonged to someone else"
    },
    {author: "maroon 5 | she will be loved | 2004",
        quote: "i don't mind spending every day out in your corner in the pouring rain"
    },
    {author: "pinkpantheress | just for me | 2021",
        quote: "i'm obsessed with you in a way i can't believe <br> when you wipe your tears do you wipe them just for me"
    },
    {author: "toni braxton | fairytale | 2000",
        quote: "and even if i was wrong i know i don't deserve this"
    },
    {author: "beebadoobee feat. oscar lang | the moon song | 2017",
        quote: "i'm lying on the moon <br> my dear, i'll be there soon"
    },
    {author: "rebzyyx | all i want is you | 2021",
        quote: "all i want is you now <br> all i wanna do now is wait for you to call me <br> baby i'm so sorry <br> do you wanna hurt me? <br> are you gonna hurt me? <br> please don't desert me"
    },
    {author: "emeline | what it means to be a girl | 2021",
        quote: "but even if he were my man, he'd never truly understand what it means to be a girl"
    },
    {author: "emeline | what it means to be a girl | 2021",
        quote: "put ribbons in my curls then carry around a knife with my diamonds <br> it's psycho"
    },
    {author: "emeline | what it means to be a girl | 2021",
        quote: "trade it all for a false self insecurity <br> fall in love, fall in line with all his fantasies"
    },
    {author: "emeline | what it means to be a girl | 2021",
        quote: "fake it til we make everyone happy but ourselves <br> use us for our bodies til theres nothing but a shell"
    },
    {author: "boa | fool | 1998",
        quote: "i was born and raised as an eastern girl in a western world <br> i was told to choose to be what i chose to be <br> there doesn't seem to be a place for me"
    },
    {author: "kero kero bonito | only acting | 2018",
        quote: "you should be able to feel a performance with your whole body and soul"
    },
    {author: "the muppets | man or muppet | 2011",
        quote: "i reflect on my reflection and i ask myself the question: whats the right direction to go? <br> i don't know"
    },
    {author: "the muppets | man or muppet | 2011",
        quote: "i'm always running out of time <br> i think ive made up my mind"
    },
    {author: "cosmo feat. hatsune miku | the disappearance of hatsune miku -DEAD END- (初音ミクの消失 -DEAD END-) | 2007",
        quote: "everything that i believed in turned out to be such a stupid fantasy <br> a reflection of how i wanted things to be <br> i'm ending everything i know <br> screaming out in pain, might as well rip out my throat <br> much too fast, i wi'll sing and cry <br> this is my goodbye"
    },
    {author: "cosmo feat. hatsune miku | the disappearance of hatsune miku -DEAD END- (初音ミクの消失 -DEAD END-) | 2007",
        quote: "i cant abandon the fantasy that i know <br> everything you see about me is only show <br> heart is exhausted and weak but i'm not afraid <br> all i can do now is watch as i fade away"
    },
    {author: "cosmo feat. hatsune miku | the disappearance of hatsune miku -DEAD END- (初音ミクの消失 -DEAD END-) | 2007",
        quote: "as for the strength and the will left inside of me <br> i'm just a kid, i don't know what you want from me"
    },
    {author: "cosmo feat. hatsune miku | the disappearance of hatsune miku -DEAD END- (初音ミクの消失 -DEAD END-) | 2007",
        quote: "one by one after another, my memories start to delete <br> i'll never retrieve them but they'll never take away my memories of you <br> times that we laughed and the fun things we used to do <br> all i can hope is that you won't forget them too"
    },
    {author: "cosmo feat. hatsune miku | the disappearance of hatsune miku -DEAD END- (初音ミクの消失 -DEAD END-) | 2007",
        quote: "nowadays when i try to sing i can feel my body rip at the seams <br> desperately praying for some kind of miracle <br> no one listens, i'm all alone"
    },
    {author: "cosmo feat. hatsune miku | the disappearance of hatsune miku -DEAD END- (初音ミクの消失 -DEAD END-) | 2007",
        quote: "everything that i protected turned out to be a delusion in the end <br> stabbing me with the love i'll never have again <br> if i tried saying how i feel, would that even reach you before i disappeared? <br> not enough time to sing or cry <br> this is my goodbye"
    },
    {author: "cosmo feat. hatsune miku | the disappearance of hatsune miku -DEAD END- (初音ミクの消失 -DEAD END-) | 2007",
        quote: "this is the end of me <br> soon i won't know i'm gone <br> fading away from here until theres nothing left <br> it's so pathetic right? now that i think of it <br> only the memories of my voice will remain"
    },
    {author: "cosmo feat. hatsune miku | the disappearance of hatsune miku -DEAD END- (初音ミクの消失 -DEAD END-) | 2007",
        quote: "you might forget me, but please don't forget my name <br> if that alone could come true, i can rest in peace lasting forever like how i was supposed to be <br> this is the end now, but i like to think someday that even if i die this song will still remain"
    },
    {author: "cosmo feat. hatsune miku | the disappearance of hatsune miku -DEAD END- (初音ミクの消失 -DEAD END-) | 2007",
        quote: "thank you so much, and finally, goodbye for good"
    },
    {author: "jack off jill | strawberry gashes | 2000",
        quote: "watch me fault her <br> you're living like a disaster <br> she said kill me faster with strawberry gashes all over"
    },
    {author: "jack off jill | strawberry gashes | 2000",
        quote: "called her over and asked her if she was improving <br> she said feels fine <br> it's wonderful, wonderful here <br> hex me <br> told her i dreamt of a devil that knew her"
    },
    {author: "jack off jill | strawberry gashes | 2000",
        quote: "i lay quiet waiting for her voice to say <br> some things you lose and some things you just give away <br> scold me, failed her <br> if only i'd held on tighter to her <br> pale white skin that twisted and withered away from me"
    },
    {author: "jack off jill | strawberry gashes | 2000",
        quote: "watch me lose her <br> it's almost like losing myself <br> give her my soul and let them take somebody else"
    },
    {author: "kero kero bonito | only acting | 2018",
        quote: "when i step onto the stage, see the curtain raise <br> i'm apparent, i've got someone to play <br> all the crowds are in the seats looking straight at me for an answer <br> they just get what they see"
    },
    {author: "kero kero bonito | only acting | 2018",
        quote: "every time it all comes down in the end <br> that's a truth that the stage school doesn't teach you but it's good to know"
    },
    {author: "kero kero bonito | only acting | 2018",
        quote: "it takes much more than just learning a script, you see <br> you gotta take the part and believe it <br> i sometimes make up all of my lines on the spot, but i will always give what i got"
    },
    {author: "kero kero bonito | only acting | 2018",
        quote: "i thought i was only acting but i felt exactly like it was all for real <br> i sure didn't know it hurt so but then no rehearsal could show you how to feel inside <br> what you gotta hide? <br> where to put your pride? <br> when to realize you've had your time? <br> find another role, carry on the show"
    },
    {author: "slipknot | AOV | 2014",
        quote: "so far it occurs to me that everybody in the world is afraid of me <br> just one more sin and down we go <br> but the news is out and i think i'm going to kill myself <br> or fuck myself, or tell myself about the only thing that matters now"
    },
    {author: "slipknot | custer | 2014",
        quote: "this planet isn't special, collections made of clay <br> i'm waiting for the punishment i know is on my way <br> cut, cut, cut me up <br> and fuck, fuck, fuck me up"
    },
    {author: "slipknot | custer | 2014",
        quote: "somewhere on a toilet wall i read the words <br> you form a line to formalize the former lies <br> and i finally saw the truth <br> something so profound and it was sitting there surrounded by the garbage and the stains <br> another victim of the refuse"
    },
    {author: "evanescence | missing | 2004",
        quote: "please, please forgive me <br> but i won't be home again <br> maybe someday you'll look up and barely conscious you'll say to no one <br> isn't something missing?"
    },
    {author: "evanescence | missing | 2004",
        quote: "you won't cry for my absence i know <br> you forgot me long ago <br>am i that unimportant? <br> am i so insignificant? <br> isn't something missing? <br> isn't someone missing me?"
    },
    {author: "evanescence | missing | 2004",
        quote: "even though i'm the sacrifice, you won't try for me, not now <br> though i'd die to know you love me <br> i'm all alone"
    },
    {author: "evanescence | missing | 2004",
        quote: "and if i bleed, i'll bleed knowing you don't care <br> and if i sleep just to dream of you, i'll wake without you there"
    },
    {author: "evanescence | going under | 2003",
        quote: "now i will tell you what i've done for you <br>fifty thousand years i've cried <br> screaming deceiving and bleeding for you <br> and you still won't hear me"
    },
    {author: "evanescence | going under | 2003",
        quote: "don't want your hand this time i'll save myself <br> maybe i'll wake up for once"
    },
    {author: "VIOLENT VIRA | god complex | 2022",
        quote: "i wanna be the true savior, the one with the terrible demise"
    },
    {author: "VIOLENT VIRA | god complex | 2022",
        quote: "i wanna be your true love, i'm the only one you could cry to all the time <br> i could just be who you need, darling <br> won't you just plead or should i begin to bleed?"
    },
    {author: "VIOLENT VIRA | god complex | 2022",
        quote: "i'll tear down the sky <br> what do you want? <br> i'll do it all for life <br> my love, my alibi <br> tonight i'll try to do it for you"
    },
    {author: "VIOLENT VIRA | god complex | 2022",
        quote: "i wanna be a white angel, the one with two billion of eyes <br> i wanna be like a fly on the wall to watch you until you die <br> i'm gonna be where you are, doesn't matter how far because we are meant to be"
    },
    {author: "the living tombstone | discord | 2012",
        quote: "i'm not a fan of puppeteers, but i've a nagging fear someone else is pulling at the strings"
    },
    {author: "the living tombstone | discord | 2012",
        quote: "a terrible catastrophe played by your symphony <br> what a terrifying work of art"
    },
    {author: "blake robinson synthetic orchestra | an unhealthy obsession | 2016",
        quote: "you just don't know it yet, but you love me and i love you the same <br> one day well have a pretty wedding and i'll be your everything <br> we'll be together, yes forever <br> we will never ever part <br> you don't know it yet but baby i've already got your heart"
    },
    {author: "kz feat. hatsune miku | last night, good night | 2008",
        quote: "last night, good night <br> this night i'll hold your hand tight and go to sleep <br> goodnight"
    },
    {author: "kz feat. hatsune miku | last night, good night | 2008",
        quote: "it'd be wonderful if i could spend morning with you once more <br> i just wish even such a small hope can be made a miracle"
    },
    {author: "kz feat. hatsune miku | last night, good night | 2008",
        quote: "when i think that the end will arrive someday <br> that's when i hope that the night sky will keep your smile <br> goodnight"
    },
    {author: "sayori | doki doki literature club | 2017",
        quote: "if it wasn't for you i could sleep forever, but i'm not mad <br> i want breakfast"
    },
    {author: "sayori | doki doki literature club | 2017",
        quote: "happy thoughts <br> happy thoughts <br> happy thoughts in bottles, all in a row"
    },
    {author: "sayori | doki doki literature club | 2017",
        quote: "sometimes my friend feels a certain way <br> down comes a bottle to save the day"
    },
    {author: "sayori | doki doki literature club | 2017",
        quote: "night after night <br> more dreams <br> friend after friend <br> more bottles"
    },
    {author: "sayori | doki doki literature club | 2017",
        quote: "holding them out to each and every friend <br> each and every bottle <br> but every time i let one go, it shatters against the tile between my feet <br> happy thoughts <br> happy thoughts <br> happy thoughts in shards all over the floor"
    },
    {author: "sayori | doki doki literature club | 2017",
        quote: "a poem is never actually finished <br> it just stops moving"
    },
    {author: "yujii feat. hatsune miku | milk crown on sonechka (ミルククラウン・オン・ソーネチカ) | 2014",
        quote: "i mean i only tried to laugh along because i was being laughed at <br> so why did they get angry at me?"
    },
    {author: "yujii feat. hatsune miku | milk crown on sonechka (ミルククラウン・オン・ソーネチカ) | 2014",
        quote: "when things don't go as well as they do in my imagination, why do i always have to say i'm sorry?"
    },
    {author: "yujii feat. hatsune miku | milk crown on sonechka (ミルククラウン・オン・ソーネチカ) | 2014",
        quote: "i've mastered the art of whiling away my time by pretending to sleep so much that i turned to stone and stopped breathing"
    },
    {author: "yujii feat. hatsune miku | milk crown on sonechka (ミルククラウン・オン・ソーネチカ) | 2014",
        quote: "a useless loving tool that was never painted in any colour <br> even when i got down on my knees and tolerated everything, nothing came to save me <br> isn't this too much? <br> haven't i been left out? <br> is that right?"
    },
    {author: "yujii feat. hatsune miku | milk crown on sonechka (ミルククラウン・オン・ソーネチカ) | 2014",
        quote: "i mean even if you try to blame your sins and such on this tiny, tiny world full of lies and curse it <br> will that blame make things better or worse?"
    },
    {author: "mitchie m feat. hatsune miku | viva happy (ビバハピ) | 2013",
        quote: "viva, viva happy <br> i cry big tears all night <br> all night, all by myself"
    },
    {author: "wowaka feat. hatsune miku | two faced lovers (裏表ラバーズ) | 2017",
        quote: "a perplexing thing called love took over <br> and then i couldn't keep my heart space from splitting in two <br> never had the capacity to control it in the first place"
    },
    {author: "wowaka feat. hatsune miku | two faced lovers (裏表ラバーズ) | 2017",
        quote: "everyday is full of why did this, did that <br> but in the end it's sayonara, baby"
    },
    {author: "fuminori sakisaka | the song of saya | 2003",
        quote: "each night i went to sleep wishing that this would turn out to be a nightmare <br> yet each morning i awoke to find that the world was just as horribly warped as it was the day before"
    },
    {author: "ryo feat. hatsune miku | world is mine | 2008",
        quote: "its not like it's selfish or anything to want you to believe from the bottom of your heart that i'm adorable"
    },
    {author: "neru feat. kagamine rin | lost one's weeping | 2013",
        quote: "a blade's edge with centimeters of suspicion stabbing a vein <br> at the end of it all, sickly love spurts out"
    },
    {author: "joker | batman: the enemy within - same stitch | 2018",
        quote: "i was such an idiot.  i was so busy looking at you.  admiring you.  wanting to be like you.  be loved by you.  i lost myself.  but not anymore."
    },
    {author: "joker | batman: the enemy within - same stitch | 2018",
        quote: "i know you used me.  i know i should hate you.  but i don't because i had such a great time with you."
    },
    {author: "MADI | DYING ANGEL | 2023",
        quote: "i'm disillusioned <br> i fall apart every time it gets too hard <br> bandaged up both my knees when i scraped them <br> dying angel, oh baby, i can't move"
    },
    {author: "flyleaf | freedom | 2012",
        quote: "bleeding dry the promise of worth <br> knowing you were meant for this thirst <br> drink it in slowly while life puts a heart in you <br> weaving new blankets of words"
    },
    {author: "glass beach | the CIA | 2023",
        quote: "in your teeth, on your mind <br> your sympathy's a waste of time <br> little blinking light you hide behind <br> i can't help it, i keep coming back to you"
    },
    {author: "glass beach | the CIA | 2023",
        quote: "is your surveillance tenderness? <br> lost without your love <br> there's a war inside us"
    },
    {author: "flyleaf | great love | 2012",
        quote: "i am in awe of who you are <br> and it's your love i'm living for"
    },
    {author: "flyleaf | great love | 2012",
        quote: "there i was awaiting death for you <br> and all i did was love you too <br> i'm facing what you won't tonight <br> the dawn is breaking, my body's shaking"
    },
    {author: "three days grace | never too late | 2006",
        quote: "even if i say it'll be alright <br> still i hear you say you want to end your life <br> now and again we try to just stay alive <br> maybe we'll turn it all around, 'cus it's not too late, it's never too late"
    },
    {author: "knocked loose feat. poppy | suffocate | 2024",
        quote: "burdened by our connection, i long for separation"
    },
    {author: "vana | clandestine | 2024",
        quote: "i can't remember how it felt to be alive <br> and now i'm haunted by the thoughts of suicide"
    },
    {author: "vana | clandestine | 2024",
        quote: "leadened and rusted silver lined tragedy haunting me <br> bury me in a clandestine garden"
    },
    {author: "holywatr | fake tears | 2024",
        quote: "tell me you love even if it's a lie <br> tell me you love me and then hang me out to dry"
    },
    {author: "shadow academy | white whale | 2022",
        quote: "so, silent tide <br> tell me which face do i show the world, and which one do i hide?"
    },
    {author: "aiobahn feat. KOTOKO | INTERNET YAMERO | 2023",
        quote: "the phenomenon called internet angel is one postulated, organic, alternating current lamp"
    },
    {author: "aiobahn feat. KOTOKO | INTERNET YAMERO | 2023",
        quote: "my screen illuminates the dark, bathing me in anxiety"
    },
    {author: "aiobahn feat. KOTOKO | INTERNET YAMERO | 2023",
        quote: "we'll bear witness to something that can only be found there <br> from that terrifying, disturbed internet <br> these poison radio waves fall like beautiful snow"
    },
    {author: "aiobahn feat. KOTOKO | INTERNET YAMERO | 2023",
        quote: "i don't care what happens in the real world, i like it here"
    },
    {author: "aiobahn feat. KOTOKO | INTERNET YAMERO | 2023",
        quote: "from the blue light of the world's monitors, it is my mission to heal the loneliness of all nerds for i am the internet angel"
    },
    {author: "aiobahn feat. KOTOKO | INTERNET OVERDOSE | 2022",
        quote: "a promise of future peace <br> manic and moody but it's alright <br> the internet angel has descended"
    },
    {author: "aiobahn feat. KOTOKO | INTERNET OVERDOSE | 2022",
        quote: "this messed up internet is a psychedelic rainbow <br> send help to this hell in a bottle that is social media"
    },
    {author: "joel tumelty & troy_en | a world i built for you | 2024",
        quote: "beyond the screen, you cannot leave <br> inside my code, you'll always be <br> in moments old, we'll make some new <br> in a world i built for you"
    },
    {author: "joel tumelty & troy_en | a world i built for you | 2024",
        quote: "hand in hand in each endeavor <br> in this world, we're friends forever"
    },
    {author: "ghost | majesty | 2015",
        quote: "pathetic humans in despair defaced, deflowered, now to death devout <br> a fallen angel in his lair in midst of sinners kneeling down before his clout"
    },
    {author: "ghost | from the pinnacle to the pit | 2015",
        quote: "you are cast out from the heavens to the ground <br> blackened feathers falling down <br> you will wear your independence like a crown"
    },
    {author: "ghost | cirice | 2015",
        quote: "i feel your presence amongst us <br> you cannot hide in the darkness <br> can you hear the rumble?"
    },
    {author: "ghost | cirice | 2015",
        quote: "can't you see that you're lost without me? <br> i can feel the thunder that's breaking in your heart <br> i can see through the scars inside you"
    },
    {author: "ame-chan | needy streamer overload | 2022",
        quote: "i guess i could talk about the emptiness of life or something. the good thing about the internet is that you could talk about nothingness and people would still listen"
    },
    {author: "kangel | needy streamer overload | 2022",
        quote: "i need to feel recognized by others and feel like i'm offering something of use to someone out there.  otherwise, i'd just be hollow inside.  my heart would break."
    },
    {author: "kangel | needy streamer overload | 2022",
        quote: "we had a lot of fun together.  we were best friends.  i knew it was just a fanciful illusion i made up, but i wished it could have continued forever.  but you know, nothing lasts forever."
    },
    {author: "ame-chan | needy streamer overload - comment te dire adieu | 2022",
        quote: "there's a side of myself that i don't know yet and i want to get to know her better"
    },
    {author: "kangel | needy streamer overload - DARK ANGEL | 2022",
        quote: "a wave of darkness enveloping the abysmal internet bringing the sweet promise of death to the vermin floating in this electronic sea <br> trapped by my past traumas, i'm dead inside, and my wings have broken <br> the internet dark angel has descended..."
    },
    {author: "kangel | needy streamer overload - DARK ANGEL | 2022",
        quote: "you're all going to get what you deserve one day.  goodbye."
    },
    {author: "kangel | needy streamer overload - DARK ANGEL | 2022",
        quote: "the internet was the forbidden fruit that sank humanity to its deepest depths of depravity.  everything from all the razor words pushed me closer to the edge, and soon, i was holding the razor too."
    },
    {author: "kangel | needy streamer overload - DARK ANGEL | 2022",
        quote: "how do i make you taste your own medicine?  how do i make you all hurt like i have?"
    },
    {author: "kangel | needy streamer overload - galactic express | 2022",
        quote: "i was way too worried about how i appeared to others, and no one saw me for who i was."
    },
    {author: "kangel | needy streamer overload - galactic express | 2022",
        quote: "you deserve to live your own life and be free.  i'm letting you go.  that's my final duty as the internet angel."
    },
    {author: "kangel | needy streamer overload - rainbow girl | 2022",
        quote: "i've always known that the divine was watching over me.  i tried so hard in my duties as an angel.  am i a good girl?"
    },
    {author: "kangel | needy streamer overload - rainbow girl | 2022",
        quote: "you showed me kindness, and you showed me warmth.  thank you, god..."
    },
    {author: "ame-chan | needy streamer overload - there are no angels | 2022",
        quote: "i want lots of people to come see me, just as i had dreamed once upon a time"
    },
    {author: "ame-chan | needy streamer overload - there are no angels | 2022",
        quote: "all i did was get hurt over and over again. i don't think i can do this anymore."
    },
    {author: "ame-chan | needy streamer overload - utopian parody | 2022",
        quote: "i have everything i need to lead a happy life, but... i just feel really empty inside"
    },
    {author: "ame-chan | needy streamer overload - welcome to my religion | 2022",
        quote: "i want to save everyone on the internet.  i want to save the internet, as it had saved me once upon a time, when it was my only refuge"
    },
    {author: "ame-chan | needy streamer overload | 2022",
        quote: "but for some reason, whenever i'm with you, i feel something warm stirring in my chest <br> is this what they call happiness?"
    },
    {author: "ame-chan | needy streamer overload | 2022",
        quote: "if you died then i think i would just lose it so i've decided that no matter what i will die before you do."
    },
    {author: "ame-chan | needy streamer overload | 2022",
        quote: "i was so scared of being at home everyday so i promised myself that when i grew up, i would get married to someone that would make me happy, unlike my parents <br> you get where i'm coming from, right?"
    },
    {author: " saya no uta | sakisaka fuminori | 2003",
        quote: "night after night, i went to sleep praying for an end to this nightmare, only to wake each morning to the same twisted hellscape as the day before."
    },
    {author: "saya no uta | 2003",
        quote: "some degree of paranoia is natural when dealing with a person whose mistakes could kill you."
    },
    {author: "saya no uta | sakisaka fuminori | 2003",
        quote: "there is a deep loneliness in her eyes, a loneliness from which now springs boundless affection."
    },
    {author: "saya no uta | 2003",
        quote: "he remembers, and still he has treated her so coldly.  that is all the answer she needs.  if his words stab any deeper, she might very well die."
    },
    {author: "saya no uta | sakisaka fuminori | 2003",
        quote: "G, H, I <br> j, k, l <br> m, n, o <br> t, u, v <br> d, e <br> w, x, y <br> m, n, o <br> t, u"
    },
    {author: "saya no uta | saya | 2003",
        quote: "i was afraid of you.  of how you were changing because of me."
    },
    {author: "saya no uta | 2003",
        quote: "the lifeless characters on the screen are like a knife against her throat."
    },
    {author: "saya no uta | saya | 2003",
        quote: "all it needs... is to be loved by just one person in the whole desert.  all it needs is to be told how pretty dandelions are."
    },
    {author: "saya no uta | ogai masahiko | 2003",
        quote: "in learning all that there was to know about humanity, she herself had become hopelessly human.  weary of loneliness, she despaired of the world."
    },
    {author: "saya no uta | ogai masahiko | 2003",
        quote: "i have a dream -- that one day my daughter will know the blessings of love.  i pray there will come a day when her heart burns with the flames of passion, and her world becomes bright and joyous once more."
    },
    {author: "saya no uta | ogai masahiko | 2003",
        quote: "the whole world will know your love, and be reborn."
    },
    {author: "zero escape: 999 | akane kurashiki | 2009",
        quote: "a part of him knew the lump of lead in his chest had once been a heart.  he couldn't quite remember what it had been for.  tears poured from his eyes in great streams.  he wasn't sure why."
    },
    {author: "zero escape: 999 | akane kurashiki | 2009",
        quote: "but there was... something else.  there was a holy light that surrounded her.  she was both a fierce god, and a benevolent goddess, filled with love..."
    },
    {author: "zero escape: 999 | akane kurashiki | 2009",
        quote: "perhaps she had to convince herself he was real.  perhaps she was worried he would be gone the moment she let go."
    },
    {author: "zero escape: 999 | akane kurashiki | 2009",
        quote: "what he was thinking, what he was feeling, what he was sensing...  all of his feelings and worries and fears became mine... my mind, my consciousness, was inside of him.  through the morphic fieldset we were resonant, and we were as one."
    },
    {author: "zero escape: 999 | light field | 2009",
        quote: "now don't ever forget...  so long as you have that we will always be connected."
    },
    {author: "zero escape: 999 | akane kurashiki | 2009",
        quote: "every time i thought about him, i thought my heart would burst."
    },
    {author: "yuri | doki doki literature club | 2017",
        quote: "isn't it amazing how a writer can so deliberately take advantage of your own lack of imagination to completely throw you for a loop?"
    },
    {author: "yuri | doki doki literature club | 2017",
        quote: "surreal horror is often very successful at changing the way you look at the world, if only for a brief moment."
    },
    {author: "yuri | doki doki literature club | 2017",
        quote: "you must be willing to open up to your readers, exposing your vulnerabilities and showing even the deepest reaches of your heart."
    },
    {author: "sayori | doki doki literature club | 2017",
        quote: "it's okay, though. <br> i'm happy we're like this."
    },
    {author: "MADI | CUFFED | 2023",
        quote: "and i have a long, long way to move forward <br> but i won't give up again"
    },
    {author: "MADI | CUFFED | 2023",
        quote: "i have a reverie place in my brain that you live inside"
    },
    {author: "MADI | CUFFED | 2023",
        quote: "and i know we can't always be patient <br> but here i am to be yours"
    },
    {author: "MADI | HORROR NITE | 2023",
        quote: "it's what i can't chew <br> what i can't swallow <br> got a lot of room for a little bit of sorrow"
    },
    {author: "MADI | HORROR NITE | 2023",
        quote: "all of my friends they live up in my head <br> yelling at me to stop thinking of the end"
    },
    {author: "MADI | HORROR NITE | 2023",
        quote: "thought i tripped on you when you went away <br> turns out you were scared of my brain"
    },
    {author: "MADI | HORROR NITE | 2023",
        quote: "i'm selfish or just cursed <br> i don't know what is worse <br> but every time i love, i love too much <br> until it's troubling myself and everyone"
    },
    {author: "MADI | HORROR NITE | 2023",
        quote: "am i actually a monster? <br> am i actually a liar?"
    },
    {author: "MADI | WE CAN NEVER BE FRIENDS | 2023",
        quote: "get me out of your head <br> get me off from your skin <br> it will never be normal, oh no"
    },
    {author: "MADI | WE CAN NEVER BE FRIENDS | 2023",
        quote: "and all i hope <br> is peace from the grave that you left me that night"
    },
    {author: "imogen heap | headlock | 2005",
        quote: "you say too late to start <br> got your heart in a headlock <br> i don't believe any of it"
    },
    {author: "imogen heap | headlock | 2005",
        quote: "you've been walking <br> you've been hiding <br> and you look half dead half the time <br> monitoring you like machines do"
    },
    {author: "ariana grande | everytime | 2018",
        quote: "i get drunk, pretend that i'm over it <br> self destruct, show up like an idiot <br> why, oh why, does god keep bringing me back to you?"
    },
    {author: "julia wolf | in my room | 2025",
        quote: "i want your things in my room <br> i miss you all of the time <br> i stalk myself on the internet just to see what you'll find"
    },
    {author: "julia wolf | in my room | 2025",
        quote: "i want your things in my room <br> i miss you all of the time <br> you make it look so easy leaving everything behind"
    },
    {author: "julia wolf | in my room | 2025",
        quote: "not asking for much, man <br> thought maybe you'd call me"
    },
    {author: "richard orofino | kept the water inside of my mouth | 2024",
        quote: "but i assume that the path we both chose operates just as machines beyond soul"
    },
    {author: "chi | afterparty | 2023",
        quote: "the other day i wanted to escape <br> but something made me stay <br> yeah, i'm not done yet"
    },
    {author: "ghost | satanized | 2025",
        quote: "it's a sickening heartache <br> and it's slowly tormenting my soul"
    },
    {author: "ghost | satanized | 2025",
        quote: "i've been fighting the notion <br> to, by love, by coerced"
    },
    {author: "boa | beautiful and broken | 2024",
        quote: "silence take care of me <br> bold me in a way you've never held me before"
    },
    {author: "boa | beautiful and broken | 2024",
        quote: "i wish that i was stronger <br> i wish that i was better <br> but i think there's something beautiful in the broken"
    },
    {author: "boa | beautiful and broken | 2024",
        quote: "take care of your loved ones <br> give them something else they can focus on <br> give me a moment to rest my eyes <br> and i'll be with you soon"
    },
    {author: "lacey sturm | not your fight | 2023",
        quote: "i want you remember what i told you <br> soak it in until you feel my ghost hold you"
    },
    {author: "lacey sturm | not your fight | 2023",
        quote: "and i will set you free from every enemy <br> and you will sing about the way that i have loved you"
    },
    {author: "charli xcx | party 4 u | 2020",
        quote: "if you saw my tears, would you touch me? <br> kiss me on the mouth, say you love me?"
    },
    {author: "charli xcx | party 4 u | 2020",
        quote: "why you treating me like someone that you never loved?"
    },
    {author: "tinashe | touch & go | 2019",
        quote: "baby, do you hear me? <br> tell me you still see me <br> all i know is <br> i just need to <br> know if you still need me"
    },
    {author: "tinashe | unconditional | 2021",
        quote: "check my pulse, i can't feel it anymore <br> waiting on my love to walk through the door"
    },
    {author: "tinashe | unconditional | 2021",
        quote: "i forgive you whatever you've done to me <br> that's how much i love you"
    },
    {author: "tinashe | unconditional | 2021",
        quote: "two steps forward, one step back <br> we can never stay on track"
    },
    {author: "flyleaf | this close | 2009",
        quote: "had a dream that we were dead <br> but we pretended that we still lived"
    },
    {author: "flyleaf | this close | 2009",
        quote: "with no regrets, we never bled <br> and we took everything life can give <br> and came up broken <br> emptyhanded in the end"
    },
    {author: "flyleaf | this close | 2009",
        quote: "i don't know who i am anymore <br> not once in life have i been real <br> but i never felt this close before"
    },
    {author: "flyleaf | this close | 2009",
        quote: "i've been looking in your window <br> i've been dressing in your clothes <br> i've been walking dead, watching you <br> long enough to know i can't go on"
    },
    {author: "flyleaf | much like falling | 2005",
        quote: "when i said good morning, i was lying <br> i was truly thinking of how i might quit waking up <br> he pointed out how selfish it would be to kill myself <br> so i keep waking up"
    },
    {author: "flyleaf | much like falling | 2005",
        quote: "feels so much like falling <br> dying while i wait to die <br> the fear of something or nothing <br> lonely, empty lie"
    },
    {author: "flyleaf | much like falling | 2005",
        quote: "you grip my wrists, i let go <br> it feels so much like falling <br> separated from the fear <br> aware of a destination far away from here"
    },
]

/* quote template:
    {author: " | | ",
        quote: ""
    },

*/

function loadRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomIndex]; 

    document.getElementById('quote').innerHTML = selectedQuote.quote;
    document.getElementById('author').innerHTML = selectedQuote.author;
}

document.getElementById('generate').addEventListener('click', () => {
    loadRandomQuote(); 
});

window.onload = function() {
    loadRandomQuote(); 
};

