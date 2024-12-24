document.getElementById('connect-wallet-btn').addEventListener('click', connectWallet);

async function connectWallet() {
    if (window.ethereum) {
        try {
            // Request account access (prompt user to connect their wallet)
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Once the account is connected, display the account address
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();

            document.getElementById("status-message").innerText = "MetaMask is connected.";
            document.getElementById("account-details").innerText = `Connected account: ${address}`;
        } catch (error) {
            console.error('User denied account access', error);
            document.getElementById("status-message").innerText = "Please connect MetaMask to continue.";
        }
    } else {
        // MetaMask not installed
        console.error("MetaMask is not installed.");
        document.getElementById("status-message").innerText = "MetaMask is not installed. Please install MetaMask to use this app.";
    }
}
