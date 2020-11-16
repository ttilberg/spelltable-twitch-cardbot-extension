# Chrome Extension: Spelltable + Twitch Cardbot

A friend and I play Magic on www.Spelltable.com. It's cool. We also wanted to live stream our games. But you can't see the cards we click!

This hacky extension sniffs network traffic for "Hey, you tried looking at that card details" and forwards that information to a configured twitch chat.


# Installation
- Clone/download this repo somewhere memorable
- Edit the file `card_sniffer.js` to include your correct user/oauth/channel credentials
- Go to about://extensions in Chrome.
- Enable "Developer Mode"
- Click "Load Unpacked" and locate this folder
- Sling some spells


# Password/Oauth
Twitch chatbots require oauth. You can get an oauth token for your account at: https://twitchapps.com/tmi/
