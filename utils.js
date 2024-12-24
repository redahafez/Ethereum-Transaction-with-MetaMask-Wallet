// utils.js

function validateAddress(address) {
    return ethers.utils.isAddress(address);
}

function formatAmount(amount) {
    return ethers.utils.formatEther(amount);
}

// Export utilities as needed in other files
