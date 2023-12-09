
export function runCommand() {
    const serverUrl = '167.99.185.29'; // Replace with your server URL
    const command = 'mcrcon -H 174.88.85.18 -p password "deop WomanFunny"';

    // Sending a POST request to the server
    fetch(`${serverUrl}/execute-command`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Server response:', data);
        // Perform any actions based on the server response
        fetchLog();
        document.getElementById("userInput").value = "";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
