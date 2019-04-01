const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = "'";



client.on('ready', x => {
    console.log(`Logged in as ${client.user.tag} ${client.user.id} on ${client.guilds.size} server(s)!`);
    client.user.setGame(`Chilling in ${client.guilds.size} server(s).`);
});

client.on('message', msg => {
    if (msg.author.bot || !msg.content.startsWith(prefix) ) return;

    const args = msg.content.slice(prefix.length).split('-');
    const command = args.shift().toLowerCase();

    console.log(args[0]);

    if (command === 'setprefix') {
        if (!msg,author.user === "437751822472708099") return;
        if (!args[0]) return;
        prefix = `${args[0]}`;
        msg.channel.send(`Changed the prefix to ${prefix} for you!`);
    }

    if (command === 'help') {
        const embed = new Discord.RichEmbed()
        .setAuthor(`${msg.author.username}`)
        .setTitle("Help")
        .addField(`Prefix: ${prefix}`, 'The prefix can be changed.', false)
        .addField(`setplaying`, 'Sets the status of what the bots "Playing".', false)
        .addField(`bulkdelete`, 'Removes x amount of messages in the selected channel.', false)
        .addField(`servers`, 'Tells you how many servers I exist in.', false)
        .addField(`setprefix`, `Sets the prefix to specified prefix.`, false);

        msg.channel.send(embed);

        
    }

    if (command === 'servers') {
        msg.channel.send(`I am currently in ${client.guilds.size} server(s)!`);
    }

    if (command === 'setplaying'){
        if (!msg.author.user === "541899752216854531" || !msg.author.user === "333059987314049026" || !msg,author.user === "437751822472708099") return;
        client.user.setGame(args[0]);
        msg.delete();
    }

    if (command === 'bulkdelete') {
        if (!args[0]) return;
        msg.channel.bulkDelete(args[0] + 1);
        msg.channel.send(`I deleted ${args[0]} message(s) fo you!`);
    }

    if (command === 'sendbuild'){
        const rich = new Discord.RichEmbed()
        .setAuthor(`${msg.author.username}`)
        .setTitle("Vouch")
        .setDescription(`${args[0]}`);

        msg.channel.send(rich);
        msg.delete();
    }
    
    console.log(`Args: ${args} Command: ${command}`);

});

client.login(process.env.BOT_TOKEN);