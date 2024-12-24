# eth
This project provides a web application demonstrating how to interact with the Ethereum blockchain using MetaMask and ethers.js. It enables users to connect their MetaMask wallet to the site, view their connected account address, and prepare for sending transactions on the Ethereum network.

# Ethereum + MetaMask Interaction Demo

This project demonstrates how to create a basic website that interacts with the Ethereum blockchain via the MetaMask wallet using `ethers.js`. Users can connect their wallet, display their Ethereum address, and build a foundation for sending transactions and interacting with smart contracts.

## Features

- Connect to MetaMask wallet.
- Display the connected Ethereum account address.
- Easily extendable to add Ethereum transaction and smart contract interaction capabilities.

## Folder Structure

project-folder/ │ ├── index.html # Homepage ├── js/ │ ├── ethereum.js # Ethereum and MetaMask interaction logic │ └── app.js # Additional app logic (future use) │ ├── css/ │ ├── styles.css # Styling for the homepage │ └── assets/ └── images/ └── logo.png # Website logo or other image resources



## Prerequisites

1. **MetaMask Wallet**:
   - Install MetaMask on your browser: [Download MetaMask](https://metamask.io/download.html).
   - Ensure you are logged in and connected to the Ethereum network.

2. **Serve the Application**:
   - Serve the project via HTTPS or `localhost` for proper MetaMask functionality.

## How to Use

1. Clone the Repository:
   ```bash
   git clone https://github.com/your-username/ethereum-metamask-interaction.git
   cd ethereum-metamask-interaction


Open the file in a browser with MetaMask installed and unlocked.

Connect Wallet:

Click the "Connect MetaMask" button.
Approve the connection request in MetaMask.
View Account Details:

The connected Ethereum account address will be displayed on the page.
