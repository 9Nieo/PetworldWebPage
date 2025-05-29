const petsContent = {
    id: "pets",
    title: "Pets & Collections",
    icon: "fa-paw",
    content: `
        <h3>How to Get Pets</h3>
        <p>There are several ways to acquire pets in PETWORLD:</p>
        <div class="acquisition-methods">
            <div class="method">
                <h4><i class="fas fa-gift"></i> Starter Pets</h4>
                <p>Each new player can claim one free starter pet (requires gas fee)</p>
            </div>
            <div class="method">
                <h4><i class="fas fa-store"></i> Shop</h4>
                <p>Obtain pets of different rarities through lottery in the shop</p>
            </div>
            <div class="method">
                <h4><i class="fas fa-shopping-cart"></i> Marketplace</h4>
                <p>Purchase pets from other players in our decentralized marketplace</p>
            </div>
        </div>
        
        <h3>Pet Rarities</h3>
        <div class="rarity-info">
            <div class="rarity-item">
                <span class="rarity-tag common">Common</span>
                <p>Frequently encountered pets with standard traits.</p>
            </div>
            <div class="rarity-item">
                <span class="rarity-tag good">Good</span>
                <p>Less common pets with desirable characteristics.</p>
            </div>
            <div class="rarity-item">
                <span class="rarity-tag excellent">Excellent</span>
                <p>Scarce pets possessing notable qualities for collectors.</p>
            </div>
            <div class="rarity-item">
                <span class="rarity-tag rare">Rare</span>
                <p>Infrequently found pets highly sought after by enthusiasts.</p>
            </div>
            <div class="rarity-item">
                <span class="rarity-tag legendary">Legendary</span>
                <p>Extremely rare, often mythical creatures that are the pinnacle of any collection.</p>
            </div>
        </div>

        <h3>Pet Rewards</h3>
        <p>Pets generate rewards every hour based on their rarity and level:</p>
        
        <div class="reward-levels">
            <div class="level-selector">
                <label for="reward-level">Select Pet Level:</label>
                <select id="reward-level">
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                    <option value="4">Level 4</option>
                    <option value="5">Level 5</option>
                </select>
            </div>
            
            <div class="reward-chart">
                <div class="chart-item">
                    <span class="rarity-tag common">Common</span>
                    <div class="chart-bar-container">
                        <div class="bar-row">
                            <div class="bar-label">PWP:</div>
                            <div class="chart-bar pwp" style="--percentage: 0.02%"></div>
                            <div class="bar-value">1</div>
                        </div>
                        <div class="bar-row">
                            <div class="bar-label">PWB:</div>
                            <div class="chart-bar pwb" style="--percentage: 0.013%"></div>
                            <div class="bar-value">2</div>
                        </div>
                    </div>
                </div>
                <div class="chart-item">
                    <span class="rarity-tag good">Good</span>
                    <div class="chart-bar-container">
                        <div class="bar-row">
                            <div class="bar-label">PWP:</div>
                            <div class="chart-bar pwp" style="--percentage: 0.2%"></div>
                            <div class="bar-value">10</div>
                        </div>
                        <div class="bar-row">
                            <div class="bar-label">PWB:</div>
                            <div class="chart-bar pwb" style="--percentage: 0.13%"></div>
                            <div class="bar-value">20</div>
                        </div>
                    </div>
                </div>
                <div class="chart-item">
                    <span class="rarity-tag excellent">Excellent</span>
                    <div class="chart-bar-container">
                        <div class="bar-row">
                            <div class="bar-label">PWP:</div>
                            <div class="chart-bar pwp" style="--percentage: 2%"></div>
                            <div class="bar-value">100</div>
                        </div>
                        <div class="bar-row">
                            <div class="bar-label">PWB:</div>
                            <div class="chart-bar pwb" style="--percentage: 1.3%"></div>
                            <div class="bar-value">200</div>
                        </div>
                    </div>
                </div>
                <div class="chart-item">
                    <span class="rarity-tag rare">Rare</span>
                    <div class="chart-bar-container">
                        <div class="bar-row">
                            <div class="bar-label">PWP:</div>
                            <div class="chart-bar pwp" style="--percentage: 16%"></div>
                            <div class="bar-value">800</div>
                        </div>
                        <div class="bar-row">
                            <div class="bar-label">PWB:</div>
                            <div class="chart-bar pwb" style="--percentage: 13.3%"></div>
                            <div class="bar-value">2000</div>
                        </div>
                    </div>
                </div>
                <div class="chart-item">
                    <span class="rarity-tag legendary">Legendary</span>
                    <div class="chart-bar-container">
                        <div class="bar-row">
                            <div class="bar-label">PWP:</div>
                            <div class="chart-bar pwp" style="--percentage: 100%"></div>
                            <div class="bar-value">5000</div>
                        </div>
                        <div class="bar-row">
                            <div class="bar-label">PWB:</div>
                            <div class="chart-bar pwb" style="--percentage: 100%"></div>
                            <div class="bar-value">15000</div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="note">Note: Rewards are per hour and scale linearly with pet level (Level 1 ×1, Level 2 ×2, etc.).</p>
        </div>

        <h3>Pet Leveling System</h3>
        <p>Feed your pets with PWFOOD (PWF) to level them up. Each PWF equals 1 hour of feeding time.</p>
        
        <div class="leveling-table">
            <table>
                <thead>
                    <tr>
                        <th>Target Level</th>
                        <th>PWF Required</th>
                        <th>Equivalent Feeding Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Level 2</td>
                        <td>1,000 PWF</td>
                        <td>1,000 hours (~42 days)</td>
                    </tr>
                    <tr>
                        <td>Level 3</td>
                        <td>3,000 PWF</td>
                        <td>3,000 hours (~125 days)</td>
                    </tr>
                    <tr>
                        <td>Level 4</td>
                        <td>10,000 PWF</td>
                        <td>10,000 hours (~417 days)</td>
                    </tr>
                    <tr>
                        <td>Level 5 (Max)</td>
                        <td>30,000 PWF</td>
                        <td>30,000 hours (~3.4 years)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="reward-notice">
            <div class="notice-header">
                <i class="fas fa-exclamation-triangle"></i>
                <h4>Important Reward Calculation Notice</h4>
            </div>
            <div class="notice-content">
                <p><strong>Rewards are calculated based on your pet's current level at the time of claiming.</strong></p>
                <ul>
                    <li>Unclaimed rewards will automatically use your pet's <em>current level multiplier</em> when claimed</li>
                    <li>If you're close to leveling up, consider waiting to claim rewards until after leveling up</li>
                    <li>Example: 1000 PWP unclaimed at level 1 becomes 2000 PWP if claimed at level 2</li>
                </ul>
            </div>
        </div>

        <div class="bsc-note">
            <i class="fas fa-info-circle"></i>
            <strong>Note:</strong> 
            <ul>
                <li>PWF can be acquired through gameplay or purchased</li>
                <li>Feeding progress is cumulative and saved permanently</li>
                <li>Higher level pets generate more rewards</li>
            </ul>
        </div>
    `
}; 