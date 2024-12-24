// profit.js

async function executeTransaction() {
    const recipient = document.getElementById('recipient-address').value;
    const amount = document.getElementById('amount').value;

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        
        // Set service fee for the transaction (e.g., 0.01 ETH)
        const serviceFee = 0.01;
        const totalAmount = parseFloat(amount) + serviceFee;

        const tx = await signer.sendTransaction({
            to: recipient,
            value: ethers.utils.parseEther(totalAmount.toString())
        });

        document.getElementById('transaction-feedback').innerText = `Transaction Sent! Hash: ${tx.hash} | Service Fee Charged: ${serviceFee} ETH`;

    } catch (error) {
        console.error("Transaction error:", error);
        document.getElementById('transaction-feedback').innerText = "Error executing the transaction.";
    }
}

document.getElementById('send-transaction-btn').addEventListener('click', executeTransaction);
