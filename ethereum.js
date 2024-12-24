// ethereum.js

// Check if MetaMask is installed and initialize Web3Provider
if (typeof window.ethereum === 'undefined') {
    document.getElementById('wallet-status').innerText = 'Please install MetaMask!';
}

async function connectWallet() {
    if (window.ethereum) {
        try {
            // Request accounts
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            document.getElementById('wallet-status').innerText = `Connected: ${address}`;
        } catch (error) {
            console.log("Error connecting wallet:", error);
            document.getElementById('wallet-status').innerText = 'Error connecting wallet. Ensure MetaMask is installed.';
        }
    }
}

document.getElementById('connect-wallet-btn').addEventListener('click', connectWallet);
