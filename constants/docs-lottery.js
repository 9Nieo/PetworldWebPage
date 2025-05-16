const lotteryContent = {
    id: "lottery",
    title: "Egg Lottery System",
    icon: "fa-egg",
    content: `
        <h3>PETWORLD Egg Lottery</h3>
        <p>Use USDT or USDC stablecoins to participate in our egg lottery system and obtain pets of varying rarities.</p>
        
        <div class="supported-coins">
            <h4>Accepted Stablecoins:</h4>
            <div class="coin-list">
                <span class="coin-badge"><i class="fab fa-ethereum"></i> USDT</span>
                <span class="coin-badge"><i class="fab fa-ethereum"></i> USDC</span>
            </div>
        </div>

        <div class="lottery-types">
            <div class="lottery-card">
                <div class="lottery-icon common">
                    <i class="fas fa-egg"></i>
                </div>
                <h4>Common Egg</h4>
                <ul>
                    <li>5% chance for COMMON pet</li>
                    <li>90% chance for GOOD pet</li>
                    <li>5% chance for EXCELLENT pet</li>
                </ul>
                <div class="lottery-cost">
                    <span>Cost: $9.9 in stablecoins</span>
                </div>
            </div>
            
            <div class="lottery-card">
                <div class="lottery-icon rare">
                    <i class="fas fa-gem"></i>
                </div>
                <h4>Rare Egg</h4>
                <ul>
                    <li>20% chance for GOOD pet</li>
                    <li>70% chance for EXCELLENT pet</li>
                    <li>10% chance for RARE pet*</li>
                </ul>
                <div class="lottery-cost">
                    <span>Cost: $99 in stablecoins</span>
                </div>
            </div>
            
            <div class="lottery-card">
                <div class="lottery-icon legendary">
                    <i class="fas fa-crown"></i>
                </div>
                <h4>Legendary Egg</h4>
                <ul>
                    <li>55% chance for EXCELLENT pet</li>
                    <li>40% chance for RARE pet*</li>
                    <li>5% chance for LEGENDARY pet*</li>
                </ul>
                <div class="lottery-cost">
                    <span>Cost: $599 in stablecoins</span>
                </div>
            </div>
        </div>
        
        <div class="bsc-note">
            <i class="fas fa-exclamation-circle"></i>
            <strong>Note:</strong> 
            <ul>
                <li>All payments are made in supported stablecoins</li>
                <li>RARE and LEGENDARY pets have limited supply with dynamic rates</li>
                <li>Exchange rates are fixed at 1:1 with USD value</li>
            </ul>
        </div>
        
        <h3>Detailed Probabilities</h3>
        <div class="odds-table">
            <table>
                <thead>
                    <tr>
                        <th>Pet Rarity</th>
                        <th>Common Egg</th>
                        <th>Rare Egg</th>
                        <th>Legendary Egg</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>COMMON</td>
                        <td>5%</td>
                        <td>0%</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>GOOD</td>
                        <td>90%</td>
                        <td>20%</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>EXCELLENT</td>
                        <td>5%</td>
                        <td>70%</td>
                        <td>55%</td>
                    </tr>
                    <tr>
                        <td>RARE*</td>
                        <td>0%</td>
                        <td>10%</td>
                        <td>40%</td>
                    </tr>
                    <tr>
                        <td>LEGENDARY*</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>5%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <h3>Dynamic Rarity System</h3>
        <div class="feature-list">
            <div class="feature-item">
                <i class="fas fa-chart-line"></i>
                <h4>Limited Supply</h4>
                <p>RARE and LEGENDARY pets have fixed maximum quantities in the ecosystem.</p>
            </div>
            <div class="feature-item">
                <i class="fas fa-percentage"></i>
                <h4>Dynamic Rates</h4>
                <p>As RARE/LEGENDARY pets are claimed, their drop rates automatically adjust downward.</p>
            </div>
            <div class="feature-item">
                <i class="fas fa-eye"></i>
                <h4>Transparent Tracking</h4>
                <p>Current remaining quantities and adjusted rates are always visible in-game.</p>
            </div>
        </div>
        
        <div class="steps-container">
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h4>Connect Wallet</h4>
                    <p>Connect your wallet containing USDT or USDC</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h4>Choose Egg Type</h4>
                    <p>Select the egg type matching your desired rarity chances</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h4>Approve & Pay</h4>
                    <p>Approve the transaction and pay with your stablecoins</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <h4>Receive Pet</h4>
                    <p>Immediately receive your randomly selected pet</p>
                </div>
            </div>
        </div>
    `
}; 