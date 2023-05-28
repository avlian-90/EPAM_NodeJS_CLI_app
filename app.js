const os = require("os");

const userName = os.userInfo().username;

console.log(`Welcome ${userName}!`);

process.on("SIGINT", () => {
    console.log(`Thank you ${userName}, goodbye!`);
    process.exit();
});

process.stdin.on("data", (data) => {
    const command = data.toString().trim();

    switch (command) {

        case ".exit":
            console.log(`Thank you ${userName}, goodbye!`);
            process.exit();
            break;

        case "os --cpus":
            const cpus = os.cpus();
            console.log(`Overall amount of CPUs: ${cpus.length}`);
            cpus.forEach((cpu, index) => {
                console.log(`CPU ${index + 1}: model: ${cpu.model}, clock rate: ${(cpu.speed / 1000).toFixed(2)}GHz`);
            })
            break;

        case "os --homedir":
            console.log(os.homedir());
            break;
    
        case "os --username": 
            console.log(userName);
            break;

        case "os --architecture":
            console.log(os.arch());
            break;

        case "os --hostname": 
            console.log(os.hostname());
            break;

        case "os --platform":
            console.log(os.platform());
            break;

        case "os --memory":
            console.log(os.freemem());
            break;

        default: 
            console.log("Invalid input");
    }
});




