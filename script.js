export default function runCommand() {
    const { exec } = require('child_process');

    const command = 'mcrcon -H 174.88.85.18 -p password "deop WomanFunny"';

    // Example: execute the 'ls' command
    exec('ls', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    //location.reload(); //and this would reload the page, loading the log again
    fetchLog(); //or you could just run the fetch log thing again
    document.getElementById("userInput").value = ""; //this would enpty the text
}
