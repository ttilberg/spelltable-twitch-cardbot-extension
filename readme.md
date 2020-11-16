# Chrome Extension: Spelltable + Twitch Cardbot

A friend and I play Magic on www.Spelltable.com. It's cool. We also wanted to live stream our games. But you can't see the cards we click!

This hacky extension sniffs network traffic for "Hey, you tried looking at that card details" and forwards that information to a configured twitch chat.


# The Tin

Spelltable provides an interface to look up cards by either searching for card names, or clicking on a card in play. When you pull up a card, it makes a query to [Scryfall](https://scryfall.com/docs/api) to get the card image.

This extension adds a hook for those image requests by watching for specific url patterns that signify an image load from Scryfall --> `url.match(/scryfall-cards.*jpg/)`. If we see this request, someone (probably) pulled up a card. We extract the card id from the image filename, and make a followup request to get card details. This gives us the name, and the Gatherer url.

Finally, the [TMI Twitch Chat package](https://github.com/tmijs/tmi.js) makes short work of sending our message back to the configured Twitch chat.


# Installation

- Clone/download this repo somewhere memorable
- Edit the file `card_sniffer.js` to include your correct user/oauth/channel credentials
- Go to about://extensions in Chrome.
- Enable "Developer Mode"
- Click "Load Unpacked" and locate this folder
- Sling some spells


## Password/Oauth

Twitch chatbots require oauth. You can get an oauth token for your account at: https://twitchapps.com/tmi/
