export function runCommand() {
    const serverUrl = '167.99.185.29/admin.html';
    const command = 'mcrcon -H 174.88.85.18 -p password "deop WomanFunny"';
    "mcron"

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
        
        fetchLog();
        document.getElementById("userInput").value = "";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
