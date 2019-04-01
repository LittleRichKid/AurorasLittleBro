const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "'";



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
        if (!args[0]) return;
        prefix = `${args[0]}`;
    }

    if (command === 'help') {
        const embed = new Discord.RichEmbed()
        .setAuthor(`${msg.author.username}`)
        .setTitle("Help")
        .addField(`Prefix: ${prefix}`, 'The prefix can be changed.', false)
        .addField(`setplaying`, 'Sets the status of what the bots "Playing".', false)
        .addField(`bulkdelete`, 'Removes x amount of messages in the selected channel.', false)
        .addField(`servers`, 'Tells you how many servers I exist in.', false);

        msg.channel.send(embed);

        
    }

    if (command === 'servers') {
        msg.channel.send(`I am currently in ${client.guilds.size} server(s)!`);
    }

    if (command === 'setplaying'){
        if (!msg.author.id === "541899752216854531" || !msg.author.id === "333059987314049026") return;
        client.user.setGame(args[0]);
        msg.delete();
    }

    if (command === 'bulkdelete') {
        if (!args[0]) return;
        msg.channel.bulkDelete(args[0] + 1);
        msg.channel.send(`I deleted ${args[0]} message(s) fo you!`);
    }

    if (command === 'sendbuild'){
        
    }
    
    console.log(`Args: ${args} Command: ${command}`);

});

client.login(process.env.BOT_TOKEN);