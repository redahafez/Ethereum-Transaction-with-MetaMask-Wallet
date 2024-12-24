# Ethereum Transaction with MetaMask Wallet
This project provides a web application demonstrating how to interact with the Ethereum blockchain using MetaMask and ethers.js. It enables users to connect their MetaMask wallet to the site, view their connected account address, and prepare for sending transactions on the Ethereum network.

# Ethereum + MetaMask Interaction

This project demonstrates how to create a basic website that interacts with the Ethereum blockchain via the MetaMask wallet using `ethers.js`. Users can connect their wallet, display their Ethereum address, and build a foundation for sending transactions and interacting with smart contracts.

## Features

- Connect to MetaMask wallet.
- Display the connected Ethereum account address.
- Easily extendable to add Ethereum transaction and smart contract interaction capabilities.

## Folder Structure

File Integration:
index.html: This is your main page where users interact with MetaMask and initiate transactions. The page loads the necessary scripts like ethereum.js for wallet interaction and profit.js for transaction logic.

ethereum.js: This file handles connecting to MetaMask and signing Ethereum transactions using ethers.js. It ensures the user's wallet is connected before sending transactions.

profit.js: Contains transaction logic where users can initiate transactions with added fees for profit. This file calculates the transaction fee markup and sends the final transaction amount (with markup).

styles.css: Provides the basic layout and styling for the HTML elements (buttons, inputs, and feedback areas).


## Prerequisites

1. **MetaMask Wallet**:
   - Install MetaMask on your browser: [Download MetaMask](https://metamask.io/download.html).
   - Ensure you are logged in and connected to the Ethereum network.

2. **Serve the Application**:
   - Serve the project via HTTPS or `localhost` for proper MetaMask functionality.

## How to Use

1. Clone the Repository:
   ```bash
   git clone https://github.com/redahafez/Ethereum-Transaction-with-MetaMask-Wallet.git
   cd Ethereum-Transaction-with-MetaMask-Wallet


Open the file in a browser with MetaMask installed and unlocked.

Connect Wallet:

Click the "Connect MetaMask" button.
Approve the connection request in MetaMask.
View Account Details:

The connected Ethereum account address will be displayed on the page.
