const stablecoinStakingContent = {
    id: "stablecoin-staking",
    title: "Stablecoin Staking",
    icon: "fa-coins",
    content: `
        <h3>Stablecoin Staking Overview</h3>
        <p>Stake your stablecoins to earn PWUSD and additional rewards in PWP and PWB tokens.</p>
        
        <div class="steps-container">
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h4>Deposit Stablecoins</h4>
                    <p>Deposit any supported stablecoin (USDT, USDC, etc.) into the staking contract.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h4>Receive PWUSD</h4>
                    <p>Get PWUSD tokens 1:1 with your deposited stablecoins.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h4>Start Earning</h4>
                    <p>After 24 hours and one full cycle (24h), begin earning rewards.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <h4>Claim or Withdraw</h4>
                    <p>Redeem PWUSD for your stablecoins anytime or keep earning rewards.</p>
                </div>
            </div>
        </div>
        
        <h3>Reward Details</h3>
        <div class="reward-details">
            <div class="reward-item">
                <i class="fas fa-wallet"></i>
                <div>
                    <h4>PWUSD Issuance</h4>
                    <p>1:1 ratio with deposited stablecoins</p>
                </div>
            </div>
            <div class="reward-item">
                <i class="fas fa-gem"></i>
                <div>
                    <h4>Daily Rewards</h4>
                    <p>2 PWP + 2 PWB per $10 staked daily</p>
                </div>
            </div>
            <div class="reward-item">
                <i class="fas fa-clock"></i>
                <div>
                    <h4>Vesting Period</h4>
                    <p>Rewards start after 24h + 1 full cycle (48h total)</p>
                </div>
            </div>
        </div>
        
        <h3>Example Calculation</h3>
        <div class="example-calculation">
            <p>If you stake $1000:</p>
            <ul>
                <li>You receive 1000 PWUSD</li>
                <li>Daily rewards: 200 PWP + 200 PWB</li>
                <li>Weekly rewards: 1400 PWP + 1400 PWB</li>
                <li>Monthly rewards: ~6000 PWP + 6000 PWB</li>
            </ul>
        </div>
        
        <div class="bsc-note">
            <i class="fas fa-exclamation-circle"></i>
            <strong>Important:</strong> Rewards are calculated per $10 increment. Partial amounts don't earn rewards.
        </div>
    `
}; 