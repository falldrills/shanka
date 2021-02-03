const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const ytdl = require("ytdl-core");
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


const client = new Discord.Client();

const queue = new Map();

client.once("ready", () => {
  console.log("Ready!");
});



client.on("ready" , () =>{
    console.log(`Currently signed in as ${client.user.tag}!`);
    console.log('')
    console.log('╔[═════════════════════]╗')
    console.log('   Created By: ! xans !')
    console.log('╚[═════════════════════]╝')
     client.user.setPresence({
       status: "online",
      activity: {
        name: "s!help",
        type: "STREAMING",
        url: "https://www.twitch.tv/xans4u"
       }
     })
  });
  client.on("warn", (info) => console.log(info));
client.on("error", console.error);

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on('message', message => {
	if (message.content === 's!ping') {
		message.channel.send('Pong.');
	}
});

client.on('message', message => {
	if (message.content === 's!snap') {
		message.channel.send('<@784066071400808490> snap is xans4uu');
	}
});

client.on('message', message => {
	if (message.content === 's!insta') {
		message.channel.send('<@784066071400808490> insta is xans4uu');
	}
});

//https://cdn.discordapp.com/attachments/799396971714314271/806182831943843900/video0.mp4

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  } else {
    message.channel.send(" ");
  }
});

client.on('message', message => {
  if (message.content === 'lumi') {
    message.channel.send('Someone has just dropped their wallet! Use `s!return` to give the wallet back to the owner, or say `s!take` to grab it!');
  }
});


client.on('message', message => {
  if (message.content === 's!help') {
    message.channel.send('https://shanka-official.stackblitz.io/ `This website, owned by <@784066071400808490> is still in progress. Thanks.`');
  }
});

client.on('message', message => {
  if (message.content === 's!free nitro') {
    message.channel.send('here is your daily nitro giveaway, https://discord.gift/dqZ6ApEEF2jcuXHm');
  }
});

client.on('message', message => {
  if (message.content === 's!owner') {
    message.channel.send('The person who scripted and created this bot is: <@784066071400808490>');
  }
});

client.on('message', message => {
  if (message.content === 'here is your daily nitro giveaway, https://discord.gift/dqZ6ApEEF2jcuXHm') {
    message.channel.send('loading snipe statistics.');
  }
});

client.on('message', message => {
  if (message.content === 'loading snipe statistics.') {
    message.channel.send('loading snipe statistics..');
  }
});

client.on('message', message => {
  if (message.content === 'loading snipe statistics..') {
    message.channel.send('loading snipe statistics...');
  }
});

client.on('message', message => {
  if (message.content === 'loading snipe statistics..') {
    message.channel.send('Give me a moment...');
  }
});



client.on('message', message => {
  if (message.content === 'Give me a moment...') {
    message.channel.send('Finished!');
  }
});

client.on('message', message => {
  if (message.content === 'Finished!') {
    message.channel.send('Snipe was made by: ||172.80.80.91||');
  }
});


client.on('message', message => {
  if (message.content === 'hello') {
    message.channel.send('Someone has just dropped their wallet! Use `s!return` to give the wallet back to the owner, or say `s!take` to grab it!');
  }
});

client.on('message', message => {
  if (message.content === 'bye') {
    message.channel.send('Someone has just dropped their wallet! Use `s!return` to give the wallet back to the owner, or say `s!take` to grab it!');
  }
});

client.on('message', message => {
  if (message.content === 'nitro') {
    message.channel.send('Someone has just dropped their wallet! Use `s!return` to give the wallet back to the owner, or say `s!take` to grab it!');
  }
});


client.on('message', message => {
  if (message.content === 'money') {
    message.channel.send('Someone has just dropped their wallet! Use `s!return` to give the wallet back to the owner, or say `s!take` to grab it!');
  }
});

client.on('message', message => {
  if (message.content === 'time') {
    message.channel.send('Someone has just dropped their wallet! Use `s!return` to give the wallet back to the owner, or say `s!take` to grab it!');
  }
});

client.on('message', message => {
  if (message.content === 'hi') {
    message.channel.send('Someone has just dropped their wallet! Use `s!return` to give the wallet back to the owner, or say `s!take` to grab it!');
  }
});

client.on('message', message => {
  if (message.content === 'penis') {
    message.channel.send('You currently have a gun to your head. You have a choice. Take the easy way out (`s!easy`) or you fight, (`s!fight`)');
  }
});

client.on('message', message => {
  if (message.content === 'xans') {
    message.channel.send('You currently have a gun to your head. You have a choice. Take the easy way out (`s!easy`) or you fight, (`s!fight`)');
  }
});

client.on('message', message => {
  if (message.content === 'party') {
    message.channel.send('You currently have a gun to your head. You have a choice. Take the easy way out (`s!easy`) or you fight, (`s!fight`)');
  }
});

client.on('message', message => {
  if (message.content === 'vc') {
    message.channel.send('You currently have a gun to your head. You have a choice. Take the easy way out (`s!easy`) or you fight, (`s!fight`)');
  }
});

client.on('message', message => {
  if (message.content === 'gun') {
    message.channel.send('You currently have a gun to your head. You have a choice. Take the easy way out (`s!easy`) or you fight, (`s!fight`)');
  }
});

client.on('message', message => {
  if (message.content === 'lmao') {
    message.channel.send('You currently have a gun to your head. You have a choice. Take the easy way out (`s!easy`) or you fight, (`s!fight`)');
  }
});

client.on('message', message => {
  if (message.content === 'LMAO') {
    message.channel.send('You currently have a gun to your head. You have a choice. Take the easy way out (`s!easy`) or you fight, (`s!fight`)');
  }
});

client.on('message', message => {
  if (message.content === 'You currently have a gun to your head. You have a choice. Take the easy way out (`s!easy`) or you fight, (`s!fight`)') {
    message.channel.send('Make the right choice...');
  }
});

client.on('message', message => {
  if (message.content === 's!easy') {
    message.channel.send('You killed yourself. You now have lost your stats permanently unless you dm <@784066071400808490> for help.');
  }
});


client.on('message', message => {
  if (message.content === 's!smelly') {
    message.channel.send(' `u is hella smelly` https://cdn.discordapp.com/attachments/804230378390814720/806049283785883658/video0.mp4');
  }
});

client.on('message', message => {
  if (message.content === 's!fight') {
    message.channel.send('You fought and won. You now have a `GLOCK 18` in your inventory. You can kill only 9 people with this gun using the `s!shoot` command.');
  } 
});

client.on('message', message => {
  if (message.content === 's!shoot') {
    message.channel.send('You shot someone. There is blood on your hands.');
  }
});


client.on('message', message => {
  if (message.content === 's!take') {
    message.channel.send('You just picked up `$1,000,000,000!`');
  }
});

client.on('message', message => {
  if (message.content === 'You just picked up `$1,000,000,000!`') {
    message.channel.send('But then you were caught and fined. Better do the right thing next time.');
  }
});

client.on('message', message => {
  if (message.content === 's!return') {
    message.channel.send('You returned the money and have earned `$1,000!`');
  }
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}

client.login(token);