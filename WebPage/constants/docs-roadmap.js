const roadmapContent = {
    id: "roadmap",
    title: "Roadmap",
    icon: "fa-map",
    content: `
        <h3>Development Timeline</h3>
        
        <div class="roadmap-container">
            <div class="roadmap-phase active">
                <div class="phase-header">
                    <div class="phase-marker"></div>
                    <h4>Phase 1 - Core Foundation</h4>
                    <div class="phase-status">Completed</div>
                </div>
                <ul class="phase-items">
                    <li class="completed">Deploy core smart contracts</li>
                    <li class="completed">Implement basic game functionality</li>
                    <li class="completed">Complete pet feeding system</li>
                    <li class="completed">Launch lottery system</li>
                    <li class="completed">Establish marketplace</li>
                    <li class="completed">Implement stablecoin staking rewards</li>
                </ul>
            </div>
            
            <div class="roadmap-phase current">
                <div class="phase-header">
                    <div class="phase-marker"></div>
                    <h4>Phase 2 - Token Economy</h4>
                    <div class="phase-status">In Progress</div>
                </div>
                <ul class="phase-items">
                    <li class="in-progress">Enhance game features and mechanics</li>
                    <li class="in-progress">Generate PW token</li>
                    <li class="in-progress">Implement token burn mechanism</li>
                    <li class="in-progress">List PW token on exchanges</li>
                </ul>
            </div>
            
            <div class="roadmap-phase">
                <div class="phase-header">
                    <div class="phase-marker"></div>
                    <h4>Phase 3 - Advanced Staking</h4>
                    <div class="phase-status">Planned</div>
                </div>
                <ul class="phase-items">
                    <li class="planned">Enable PW token staking</li>
                    <li class="planned">Implement reverse burn functionality</li>
                    <li class="planned">Expand reward mechanisms</li>
                </ul>
            </div>
            
            <div class="roadmap-phase">
                <div class="phase-header">
                    <div class="phase-marker"></div>
                    <h4>Phase 4 - Community Governance</h4>
                    <div class="phase-status">Planned</div>
                </div>
                <ul class="phase-items">
                    <li class="planned">Transition to community governance</li>
                    <li class="planned">Relinquish core contract ownership</li>
                    <li class="planned">Open-source game framework</li>
                    <li class="planned">Community-driven development</li>
                </ul>
            </div>

            <div class="roadmap-phase">
                <div class="phase-header">
                    <div class="phase-marker"></div>
                    <h4>Phase 5 - Revenue Sharing</h4>
                    <div class="phase-status">Planned</div>
                </div>
                <ul class="phase-items">
                    <li class="planned">Redistribute lottery proceeds to community</li>
                    <li class="planned">Share marketplace revenue with participants</li>
                    <li class="planned">Implement community reward pools</li>
                </ul>
            </div>
        </div>
        
        <div class="roadmap-legend">
            <div class="legend-item">
                <div class="legend-color completed"></div>
                <span>Completed</span>
            </div>
            <div class="legend-item">
                <div class="legend-color in-progress"></div>
                <span>In Progress</span>
            </div>
            <div class="legend-item">
                <div class="legend-color planned"></div>
                <span>Planned</span>
            </div>
        </div>
    `
}; 