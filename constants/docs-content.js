const docsContent = {
    sections: [
        {
            id: "getting-started",
            title: "Getting Started",
            icon: "fa-rocket",
            content: `
                <h3>Introduction to PETWORLD</h3>
                <p>Welcome to PETWORLD, a decentralized game world where you can collect, trade, and battle with unique digital pets. This guide will help you get started with the basics.</p>
                
                <h3>System Requirements</h3>
                <ul>
                    <li>Windows 10 or later / macOS 10.15 or later</li>
                    <li>4GB RAM minimum (8GB recommended)</li>
                    <li>2GB free disk space</li>
                    <li>Web3 wallet (MetaMask, Coinbase Wallet, etc.)</li>
                </ul>
                
                <h3>Installation Guide</h3>
                <ol>
                    <li>Download the PETWORLD client from our <a href="download.html">download page</a></li>
                    <li>Run the installer and follow the on-screen instructions</li>
                    <li>Launch PETWORLD and connect your wallet</li>
                    <li>Complete the tutorial to receive your first free pet</li>
                </ol>
            `
        },
        {
            id: "gameplay",
            title: "Gameplay Guide",
            icon: "fa-gamepad",
            content: `
                <h3>Basic Controls</h3>
                <p>Learn the basic controls to navigate through PETWORLD:</p>
                <div class="keyboard-shortcuts">
                    <div class="shortcut">
                        <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd>
                        <span>Movement</span>
                    </div>
                    <div class="shortcut">
                        <kbd>Space</kbd>
                        <span>Jump/Interact</span>
                    </div>
                    <div class="shortcut">
                        <kbd>E</kbd>
                        <span>Open Inventory</span>
                    </div>
                </div>
                
                <h3>Battling System</h3>
                <p>PETWORLD features a turn-based battle system where your pets can compete against others:</p>
                <ul>
                    <li>Each pet has unique abilities and stats</li>
                    <li>Battles are automatically recorded on the blockchain</li>
                    <li>Winning battles earns you tokens and experience</li>
                </ul>
            `
        },
        {
            id: "pets",
            title: "Pets & Collections",
            icon: "fa-paw",
            content: `
                <h3>Pet Rarities</h3>
                <p>Pets in PETWORLD come in different rarities:</p>
                <div class="rarity-info">
                    <div class="rarity-item">
                        <span class="rarity-tag common">Common</span>
                        <p>Basic pets with standard abilities</p>
                    </div>
                    <div class="rarity-item">
                        <span class="rarity-tag rare">Rare</span>
                        <p>Stronger pets with special abilities</p>
                    </div>
                    <div class="rarity-item">
                        <span class="rarity-tag legendary">Legendary</span>
                        <p>Ultra-rare pets with unique powers</p>
                    </div>
                </div>
                
                <h3>Breeding System</h3>
                <p>Combine two pets to create a new one with mixed traits:</p>
                <ul>
                    <li>Breeding costs tokens and has a cooldown period</li>
                    <li>Offspring inherit traits from both parents</li>
                    <li>There's a small chance of mutation for rare traits</li>
                </ul>
            `
        },
        {
            id: "economy",
            title: "Economy System",
            icon: "fa-coins",
            content: `
                <h3>Tokenomics</h3>
                <p>PETWORLD has a dual-token economy:</p>
                <div class="token-info">
                    <div class="token-item">
                        <h4>$PET</h4>
                        <p>Utility token used for in-game transactions</p>
                    </div>
                    <div class="token-item">
                        <h4>$GEM</h4>
                        <p>Governance token for voting on game development</p>
                    </div>
                </div>
                
                <h3>Earning Tokens</h3>
                <p>You can earn tokens in several ways:</p>
                <ul>
                    <li>Winning pet battles</li>
                    <li>Completing quests and achievements</li>
                    <li>Trading rare pets in the marketplace</li>
                    <li>Participating in special events</li>
                </ul>
            `
        },
        {
            id: "faq",
            title: "FAQ",
            icon: "fa-question-circle",
            content: `
                <h3>Frequently Asked Questions</h3>
                
                <div class="faq-item">
                    <h4>How do I get my first pet?</h4>
                    <p>Complete the tutorial after installing the game to receive your first free pet. You can also purchase pets from the marketplace.</p>
                </div>
                
                <div class="faq-item">
                    <h4>Is PETWORLD free to play?</h4>
                    <p>Yes, PETWORLD is free to download and play. Some premium features may require tokens.</p>
                </div>
                
                <div class="faq-item">
                    <h4>Can I trade pets with other players?</h4>
                    <p>Yes, all pets are NFTs that can be freely traded on our marketplace or any compatible NFT platform.</p>
                </div>
            `
        }
    ]
}; 