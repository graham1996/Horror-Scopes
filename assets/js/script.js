var formEl = $('.birth-form');
var birthdayEl = $('input[name="birthday"]');
var birthTimeEl = $('input[name="birth-time"]');
//var nasaUrl = "https://api.nasa.gov/planetary/apod?api_key=";
var nasaUrl = "https://images-api.nasa.gov/search?q="
var nasaKey = "Bb0VibPKgDQeWj6rnb7xN5ueIK4ykbqnkoSRzonS";
var moonKey = "a7ff106b7692ff39d83d685ee3bd714b";
var moonUrl = "https://api.openweathermap.org/data/2.5/onecall?";
var moonLat = localStorage.getItem('latitude');
var moonLon = localStorage.getItem('longitude');
var moonEl = document.getElementById('moon');
var cardName1 = localStorage.getItem('card-1-name');
var cardName2 = localStorage.getItem('card-2-name');
var cardName3 = localStorage.getItem('cart-3-name');
var cardMeaning1 = localStorage.getItem('card-1-meaning');
var cardMeaning2 = localStorage.getItem('card-2-meaning');
var cardMeaning3 = localStorage.getItem('card-3-meaning');
var geminiHoroscopes = ['Learn everything now. In your solar return, you have the ability to know all things by staring directly at the sun for several hours, or at the sun’s nemesis, the moon. Perhaps the latter is safest.', 'There is a sentient seashell in your ribcage. Pry open the bone-hinge, hold it to your ear, & listen. It’s whispers are calling b.s. & telling good truths, for it is all-knowing. Put your faith in yourself, your voice, & in psychic seashell.', 'The great thing about being dazzling is that everyone is drawn to you, but the terrible thing is also that everyone is drawn to you. It’s the clove cigarette paradox. Consider dabbling in some well-meaning psychic manipulation. Read Circe’s secret diaries.'];
var taurusHoroscopes = ['You need to build an R&R-burrow to do some feelings, & because you draw comfort from tangible things, demand that the spirits of ether manifest. Let the archangels burn with splendor! Because for you, it isn’t real unless it’s right there blazing in your self-care bunker.', 'After the full moon, your dreams will answer your most pressing questions about love, magic, & adequate hydration. Yes, even that dream about harmonizing with an all-spider a capella group. Especially that one. Keep a dream journal bound in fairy spittle.', 'Change is coming from within you in the form of an Athena-like lightning-burst out through your skull. Allow this new, sassy-smart electricity being to revamp everything from your wardrobe to your nervous system. Crackle onward!'];
var cancerHoroscopes = ['As it happens, your myriad, shimmering, weird impulses are the guiding force to the world’s happiness. Unlock the tiny bird-sized door of your throat & let the bluebird of your happy weirdness voice its prophetic delights!', 'Whether or not you meant to, at the full moon, you supped on the youth of the world’s children, & you will never age. However, now you have the whims & fancies of an unrestrained child, & you must do your best to indulge the delightful madness that ensues.', 'How can you best serve the Mother Darksome & Divine, & in turn, yourself? Try tattooing your lover in their sleep, mentoring at-risk bats, or start a school for wayward girls with pyrokinesis. Find the right cause to bring you back to your clawed heart.'];
var leoHoroscopes = ['If you are bored, it’s not you. It’s them. Your mantra: Be the gala at the haunted mansion. Be the reason the portraits’ eyes follow you through a room. Like, attracts like, dear Leo, & you’re well on your way to catching the eye of a charismatic succubus.', 'If you’re wondering if everything is a lie & your anxiety is manifesting as hoards of spiders crawling up the walls, you’re right where you’re supposed to be. The new moon is an excellent time to take up hatchet throwing AND and hatchet burying. & maybe buy a funky crystal.', 'If you’re asking yourself, “What am I even doing with my life?” then it’s really important that you don’t listen to anyone. Instead, go deep in the forest, cover yourself with earth, & let trees & herbs sprout from your ribcage. Then you will know.']
var virgoHoroscopes = ['Make up some business cards to promote yourself & your many talents. Now is the time! & enchant them so that they burst into flame once the recipient commits their information to memory. It’ll show how dynamic & fun you are!', 'It’s great that you appreciate aesthetics, but stop hiring your friends from model casting calls. Instead, summon some of the lovelier daemons from the realm of ether & fog. That #squad is much more your speed. Go hit the clubs!', 'Everyone is really into you telling them what to do. People will probably pay you to do it, so dig deep & sweetly delve into their childhood issues in the boardroom. You’ll have your CEO crying like a baby & handing you that promotion in no time. You’re THAT delightful!'];
var libraHoroscopes = ['If you’ve been disappointed by people recently, they’re stupid. Appeal to the magic boar of the forest to bring your true peeps (alive). Y’all might be scared at first bc the boar is bigger than expected, but open your heart, for he is gentle, & will also bring scones.', 'When was the last time you read through your old grimoires? Pore over the centuries of spells & stream-of-consciousness punning in search of codes from your higher self. Practice deep listening & draw boundaries with a poisoned athame. Your needs come 1st!', 'You want to use leg magic to run away, but instead pirouette to the skeletons in your closet & invite them to high tea. Do feelings together over finger sandwiches & whatever skeletons eat (finger sandwiches?), even irrational ones. Ask them for advice.'];
var scorpioHoroscopes = ['You are so passionate that you have an actual fire inside you. Learn to breathe it at will so you can char things or people as needed & provide clean, renewable energy. Learn to blow smoke rings out your nose too because people just love it.', 'You are in love with the moon, & she is changeable. She gifted you oceans, but full of sea monsters. You gifted her the starlight you secrete from the special gland all Scorpios have. It’s ok to ask the moon for commitment, balance, & splitsies dinners.', 'Dress for the vigilante antihero job you want, not the one you have. Whether you’re more of a Mata Hari or Punisher, think carefully about the props you need—poison darts? Pitchforks?—what they say about you, & the energy they attract from the throngs',];
var sagittariusHoroscopes = ['If things don’t go your way, make the chaos entertaining, like the Boschian nightmares you know & love. Let the farm animals indoors, fill the wells with perfume, adopt a tarantula, go to magic camp! It might be the most fun you have this year.', 'Have you been practicing your insect orchestra? The world is taken with your immense creative talent, as well as the thousand glittering eyes of your garage band. It’s time for you to monetize this. Humans & bats alike applaud your hard & unfathomable work.', 'You have crushed every bad thing that happened to you through your powerful cocktail of battle strategy & black magic. Now that the past is literally dead to you, light an arrow on fire & shoot it into a forest. The tree it hits will tell your future'];
var capricornHoroscopes = ['Create balance in your busy life by running around in circles flinging coffee everywhere & shouting about how busy you are. Then, take to the hills & gather your talking animals friends for a lovely yet comforting story hour, & sleep beneath the stars.', 'Time to play! The stars suggest laser tag, or something in which you shoot light from your body, symbolizing how captivating & piercing you are, thereby triple-charging your powers. Perhaps try something with electric eels.', 'When was the last time you rolled around on the floor for the sheer pleasure of it? Or made friends with the rats at the park or on the subway? Prioritize glee. Teach a religious leader how to hula-hoop. Quit the banal. Become the Emperor of Ice Cream.'];
var aquariusHoroscopes = ['Go outside, take a deep breath, & build the enchanted citadel you dreamt of through the long winter & planned with the thousands-year-old angels. Now is the time for your plans to blossom into gargoyles, flying buttresses, & architectural cryptomancy.', 'Transform into a nymph, sprite, or scary merperson & let the enchanted waterfalls power-wash away all that no longer serves you. Pay no mind to the cynical squirrel guardians who say change is impossible. They’re just pissed their TV pilot didn’t sell.', 'You have been reanimated after you were encased in ice for a hot minute, & it’s time to re-learn how to move your fingers & toes & pump blood through your body. Nuzzling animals & tanning beds are a good way to warm the heart, but not simultaneously.'];
var piscesHoroscopes = ['If you’re experiencing flashes of rage, do something productive. Start with a series of interpretive dance and arson, captain an armada of space cats, & write a treatise out of swords to resolve remaining grievances. Then take an angry-nap.', 'The full moon calls you to create your own spirituality. You don’t have to start by summoning hot Jesus from the Madonna video, but you can! You already have divine spirits from ethereal realms speaking through you, so preach from here to the YMCA!', 'What do you need to create an impenetrable sense of home? Whether you fill your garden with the top 10 poisonous plants, or build a thrifty diy fence of recycled daggers, be sure to give offerings to your house spirit & call your alien overlord collect.'];
var ariesHoroscopes = ['You are illuminated from within, literally emanating silvery lunar light from your skin, highlighting all aspects of your life, truth, & the universe. You can’t look away. No one can. It’s part of the curse. Learn from your light as you hover above mortals', 'You awoke to find your body became a Transformer-style crime-fighting robo-suit. Collaborate with the team of friendly scientists who manifested in your bathroom to make the best of your new gear, talents, & life purpose. Also avoid emotional spending $$$', 'Privacy is important. Consider becoming unplottable, wearing disguises & full body armor, & sequestering yourself in a tower owned by a grumpy bear who minds his own business. You will later become great friends.'];

console.log(moonLon);
console.log(moonLat);


fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3")
    .then(function (response) {
        return response.json()
            .then(function (data) {
                console.log(data);
                if (!cardName1) {
                    localStorage.setItem("card-1-name", data.cards[0].name);
                    localStorage.setItem('card-1-meaning', data.cards[0].meaning_up)
                    localStorage.setItem("card-2-name", data.cards[1].name);
                    localStorage.setItem('card-2-meaning', data.cards[1].meaning_up)
                    localStorage.setItem("card-3-name", data.cards[2].name);
                    localStorage.setItem('card-3-meaning', data.cards[2].meaning_up)
                }

            })
    });

fetch(nasaUrl + 'regulus', {
})
    .then(function (response) {
        return response.json()
            .then(function (data) {
                console.log(data);
            })
    });
fetch('https://api.le-systeme-solaire.net/rest/bodies/', {

})
    .then(function (response) {
        return response.json()
            .then(function (data) {
                console.log(data);
            })


    })
fetch(moonUrl + "lat=1" + "&lon=1" + "&appid=" + moonKey, {

})
    .then(function (response) {
        return response.json()
            .then(function (data) {
                console.log(data);
                console.log(data.daily[0].moon_phase);
                localStorage.setItem("moon_phase", data.daily[0].moon_phase);
            })
    })
var moonPhase = localStorage.getItem("moon_phase");
console.log(moonPhase);

window.onload = function () {
    setTime()


    moonEl = document.getElementById('moon');
    if (moonPhase === 0) {
        console.log("new moon");
        moonEl.setAttribute('src', './assets/images/newmoon.png')
    }
    else if (moonPhase < 0.25) {
        console.log("waxing crescent");
        moonEl.setAttribute('src', './assets/images/waxingcrescent.png')
    }
    else if (moonPhase < 0.26) {
        console.log("first quarter");
        moonEl.setAttribute('src', './assets/images/firstquarter.png')
    }
    else if (moonPhase < 0.5) {
        console.log("waxing gibbous");
        moonEl.setAttribute('src', './assets/images/waxinggibbous.png')
    }
    else if (moonPhase < 0.51) {
        console.log("full moon");
        moonEl.setAttribute('src', './assets/images/fullmoon.png')
    }
    else if (moonPhase < 0.75) {
        console.log("waning gibbous");
        moonEl.setAttribute('src', './assets/images/waninggibbous.png')
    }
    else if (moonPhase < 0.76) {
        console.log("last quarter");
        moonEl.setAttribute('src', './assets/images/lastquarter.png')
    }
    else if (moonPhase) {
        console.log("waning crescent");
        moonEl.setAttribute('src', './assets/images/waningcrescent.png')
    }
    else {
        moonPhaseEl.text("You dont care about the moon :(")
    }
}



function setTime() {
    var timeEl = $('.time');
    var timerInterval = setInterval(function () {
        timeEl.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        return;
    }, 50)
}

function zodiac(day, month) {
    var zodiac = ['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
    var last_day = ['', 19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21, 19];
    return (day > last_day[month]) ? zodiac[month * 1 + 1] : zodiac[month];
}
document.getElementById('test_z').onclick = function () {
    document.getElementById('s_zodiac').innerHTML = zodiac(document.getElementById('s_days').value, document.getElementById('s_m').value);
}

// var horoscopeButtonEl = document.getElementById('horoscopebut');
horoscopeButtonEl.addEventListener("click", function () {
    if (capricorn) {
        horoscopeEl.textContent = capricornHoroscopes[Math.floor(Math.random() * 3)]
    }
    else if (aquarius) {
        horoscopeEl.textContent = capricornHoroscopes[Math.floor(Math.random() * 3)]
    }
    else if (pisces) {
        horoscopeEl.textContent = piscesHoroscopes[Math.floor(Math.random() * 3)]
    }
    else if (aries) {
        horoscopeEl.textContent = ariesHoroscopes[Math.floor(Math.random() * 3)]
    }
    else if (taurus) {
        horoscopeEl.textContent = taurusHoroscopes[Math.floor(Math.random() * 3)]
    }
    else if (gemini) {
        horoscopeEl.textContent = geminiHoroscopes[Math.floor(Math.random() * 3)]
    }
    else if (cancer) {
        horoscopeEl.textContent = cancerHoroscopes[Math.floor(Math.random() * 3)]
    }
    else if (leo) {
        horoscopeEl.textContent = leoHoroscopes[Math.floor(Math.random() * 3)]
    }
    else if (virgo) {
        horoscopeEl.textContent = virgoHoroscopes[Math.floor(Math.random() * 3)]
    }
    else if (libra) {
        horoscopeEl.textContent = libraHoroscopes[Math.floor(Math.random() * 3)]
    }
    else if (scorpio) {
        horoscopeEl.textContent = scorpioHoroscopes[Math.floor(Math.random() * 3)]
    }
    else if (sagittarius) {
        horoscopeEl.textContent = sagittariusHoroscopes[Math.floor(Math.random() * 3)]
    }
}
)

console.log(document.getElementById('s_zodiac'));