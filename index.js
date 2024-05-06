const mcping = require('minecraft-server-ping')
const yargs = require('yargs')

const args = yargs
    .command("* <target> [port]", "uwu",
        (yargs) => {
            return yargs
                .positional('target', {
                    describe: "Target IP"
                })
                .positional('port', {
                    describe: 'Target Port',
                    default: 25565
                })
        })
    .parseSync();


/*
setInterval(() => {
	process.stdout.write("\x1bc" + `IP: ${args.target} Port: ${args.port}\n${"=".repeat(30)}\n${"=".repeat(30)}\n(Ctrl+C to exit)\n`);
}, 1000);
*/
setInterval(async () => {
	for (let i = 0; i < 1; i++) {
		const data = await mcping.pingUri(new URL(`minecraft://${args.target}:${args.port}`));
		console.log(JSON.stringify(data, null, 2))
	}
}, 1000);