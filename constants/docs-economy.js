const economyContent = {
    id: "economy",
    title: "Economy System",
    icon: "fa-coins",
    content: `
        <h3>Economic Model Overview</h3>
        <p>PETWORLD features a sustainable dual-token economy:</p>
        <div class="economy-model">
            <div class="model-part">
                <h4>$PWP Token</h4>
                <ul>
                    <li>The PETWORLD points token, through which users can eventually obtain the project's PW token.</li>
                    <li>Obtainable through feeding pets and staking stablecoins.</li>
                </ul>
            </div>
            <div class="model-part">
                <h4>$PWB Token</h4>
                <ul>
                    <li>A reward token designed to incentivize those who participate in reverse burning.</li>
                    <li>Obtainable through feeding pets and staking stablecoins.</li>
                </ul>
            </div>
            <div class="model-part">
                <h4>$PWF Token</h4>
                <ul>
                    <li>Used to feed pets to maintain satiety and level them up.</li>
                </ul>
            </div>
             <div class="model-part">
                <h4>$PWR Token</h4>
                <ul>
                    <li>Obtainable through reverse burning of PW, used in conjunction with PWB to get more PWP.</li>
                </ul>
            </div>
            <div class="model-part">
                <h4>$PW Token</h4>
                <ul>
                    <li>The project's final token, which will be listed on exchanges.</li>
                </ul>
            </div>
        </div>
        
        <h3>Triple Deflationary Model</h3>
        <p>PETWORLD employs a unique triple deflationary economic model, distinguishing itself from traditional single deflationary models, such as Bitcoin, which primarily rely on controlling issuance quantity over time. Our model incorporates three mechanisms to reduce the total supply of PW tokens:</p>
        <ul>
            <li><strong>Time-based Reduction:</strong> Similar to traditional models, the rate at which PW tokens are introduced decreases over time.</li>
            <li><strong>Incentivized Reverse Burning:</strong> We introduce an innovative incentive mechanism where users can profit by performing reverse burning of PW tokens, voluntarily reducing the total supply.</li>
            <li><strong>Developer Buyback and Burning:</strong> To further control the supply, the development team will periodically use a portion of the profits from the shop and marketplace to buy back and burn PW tokens.</li>
        </ul>
        <p>While incentivized reverse burning encourages user participation in supply reduction, developer buybacks are essential to ensure a more significant impact on the total supply. We may explore future mechanisms to add further value to the PW token, potentially evolving into a quadruple deflationary economic model.</p>
        
        <h3>Why Developer Buybacks Matter</h3>
        <p>Developer buybacks of PW tokens offer significant advantages for the project ecosystem. A key benefit is protecting the value of high-tier NFTs (owned by Rare and Legendary pet holders). By reducing the circulating supply of PW tokens, buybacks help maintain and potentially increase the token's value, which in turn helps preserve the market value of these valuable NFTs.</p>
        <p>Furthermore, high-value NFTs and a strong token price attract more users to stake and invest in the project, creating a positive cycle. This continuous engagement and investment benefit the entire PETWORLD ecosystem.</p>
        
        <h3>How the Economy Works</h3>
        <p>The economic cycle in PETWORLD:</p>
        <ol class="economy-cycle">
            <li>Players earn PWP and PWB tokens through raising pets and staking stablecoins.</li>
            <li>Burn PWP tokens to obtain PW tokens; the amount of PW in the burning pool gradually decreases over time.</li>
            <li>Players can perform reverse burning of PW for arbitrage to obtain PWP or PWR.</li>
            <li>Players can stake PW tokens to earn passive income.</li>
            <li>Developers will periodically use a portion of the profits from shop purchases and the marketplace to buy back PW tokens.</li>
        </ol>
        
        <h3>Token Distribution</h3>
        <div class="distribution-chart">
            <div class="chart-item" style="--percentage: 65%">
                <span>Burning Pool</span>
                <div class="chart-bar"></div>
                <span>65%</span>
            </div>
            <div class="chart-item" style="--percentage: 5%">
                <span>Staking (in batches)</span>
                <div class="chart-bar"></div>
                <span>5%</span>
            </div>
            <div class="chart-item" style="--percentage: 10%">
                <span>Developer</span>
                <div class="chart-bar"></div>
                <span>10%</span>
            </div>
            <div class="chart-item" style="--percentage: 20%">
                <span>Other Uses</span>
                <div class="chart-bar"></div>
                <span>20%</span>
            </div>
        </div>
    `
}; 