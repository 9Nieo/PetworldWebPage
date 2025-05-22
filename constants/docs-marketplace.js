const marketplaceContent = {
    id: "marketplace",
    title: "Decentralized Marketplace",
    icon: "fa-store",
    content: `
        <h3>PETWORLD Decentralized Marketplace</h3>
        <p>Our fully decentralized marketplace allows players to trade pet NFTs freely and securely on the blockchain.</p>
        
        <div class="info-blocks">
            <div class="info-block">
                <i class="fas fa-lock"></i>
                <h4>Secure Transactions</h4>
                <p>All trades are executed through smart contracts, ensuring security and transparency.</p>
            </div>
            
            <div class="info-block">
                <i class="fas fa-coins"></i>
                <h4>1% Transaction Fee</h4>
                <p>A small 1% fee is charged on all successful transactions to support platform maintenance.</p>
            </div>
            
            <div class="info-block">
                <i class="fas fa-clock"></i>
                <h4>1-Hour Cooldown</h4>
                <p>After listing or modifying a pet's price, there's a 1-hour cooldown before further changes.</p>
            </div>
        </div>
        
        <h3>Marketplace Rules</h3>
        <div class="rules-list">
            <div class="rule-item">
                <i class="fas fa-ban"></i>
                <h4>Common Pets Restriction</h4>
                <p>Common quality pets cannot be listed on the marketplace to maintain value for higher rarity pets.</p>
            </div>
            
            <div class="rule-item">
                <i class="fas fa-gem"></i>
                <h4>Minimum Rarity</h4>
                <p>Only pets of Good quality or higher can be traded on the marketplace.</p>
            </div>
            
            <div class="rule-item">
                <i class="fas fa-hand-holding-usd"></i>
                <h4>Price Stability</h4>
                <p>The 1-hour cooldown prevents price manipulation and excessive market fluctuations.</p>
            </div>
        </div>
        
        <h3>How to Use the Marketplace</h3>
        <div class="steps-container">
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h4>Connect Your Wallet</h4>
                    <p>Link your Web3 wallet to access the marketplace features.</p>
                </div>
            </div>
            
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h4>Select a Pet</h4>
                    <p>Choose a pet from your collection (Good quality or higher).</p>
                </div>
            </div>
            
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h4>Set Price & List</h4>
                    <p>Set your asking price and confirm the listing transaction.</p>
                </div>
            </div>
            
            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <h4>Wait for Buyer</h4>
                    <p>Your pet will be visible to all players until purchased.</p>
                </div>
            </div>
        </div>
        
        <div class="notice">
            <i class="fas fa-exclamation-circle"></i>
            <p><strong>Note:</strong> All transactions are final. Once a pet is sold, the transaction cannot be reversed.</p>
        </div>
        
        <h3>Fees Breakdown</h3>
        <div class="fee-structure">
            <div class="fee-item">
                <h4>Listing Fee</h4>
                <p>Gas Only</p>
                <p>Standard blockchain gas fees apply</p>
            </div>
            
            <div class="fee-item">
                <h4>Transaction Fee</h4>
                <p>1%</p>
                <p>Deducted from the sale price</p>
            </div>
            
            <div class="fee-item">
                <h4>Withdrawal Fee</h4>
                <p>Gas Only</p>
                <p>Standard blockchain gas fees apply</p>
            </div>
        </div>
    `
}; 