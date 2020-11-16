////////////////////////////////////
// Configuration!
//
// Your twitch username:
const TWITCH_USER = 'USER';
//
// Get your oauth token by going here: https://twitchapps.com/tmi/
const TWITCH_OATH = 'OAUTH_TOKEN';
//
// The channel -- probably the same as your username?
const CHANNEL = 'That Channel';
//
////////////////////////////////////


const client = new tmi.Client({
  options: { debug: true, messagesLogLevel: "info" },
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: TWITCH_USER,
    password: TWITCH_OATH
  },
  channels: [ CHANNEL ]
});
client.connect().catch(console.error);

chrome.webRequest.onCompleted.addListener(
  (details) => {
    const { url } = details

    if (!url.match(/scryfall-cards.*jpg/)) return;

    console.log('Someone found a card!');

    const card_id = url.match(/\/([^/]+).jpg/)[1];

    console.log(card_id);

    fetch(`https://api.scryfall.com/cards/${card_id}`)
      .then(response => response.json())
      .then(data => {
        let url = data.related_uris.gatherer;
        let name = data.name;
        const msg = `reviewed [${name}](${url})`;
        console.log(msg);
        client.action(CHANNEL, msg);
      });
  }, {
    urls: [
      'https://*.scryfall.com/*'
    ]
  }
);
