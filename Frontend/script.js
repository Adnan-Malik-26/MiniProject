document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const cancelLoginBtn = document.getElementById('cancel-login');
    const modalClose = document.querySelector('.modal-close');
    const loginForm = document.getElementById('login-form');

    // Open login modal
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });

    // Close login modal functions
    function closeModal() {
        loginModal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    // Close with cancel button
    cancelLoginBtn.addEventListener('click', closeModal);
    
    // Close with X button
    modalClose.addEventListener('click', closeModal);
    
    // Close when clicking outside the modal
    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            closeModal();
        }
    });

    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // This would normally connect to an authentication service
        console.log('Login attempt:', { email, password });
        
        // Simulating successful login
        alert('Login successful! Redirecting to dashboard...');
        closeModal();
    });

    // Chart filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would update the chart based on the selected time period
            const period = this.textContent.toLowerCase();
            updateChart(period);
        });
    });

    // Placeholder function to update chart data
    function updateChart(period) {
        console.log(`Updating chart to show ${period} data`);
        // In a real application, this would fetch data and re-render the chart
    }

    // Device action handlers
    const deviceActions = document.querySelectorAll('.device-action');
    
    deviceActions.forEach(action => {
        action.addEventListener('click', function() {
            const actionText = this.textContent;
            const deviceName = this.parentElement.parentElement.querySelector('td').textContent;
            
            if (actionText === 'View Data') {
                alert(`Viewing data for ${deviceName}`);
                // This would open a detail view or dashboard for the specific device
            } else if (actionText === 'Reconnect') {
                alert(`Attempting to reconnect ${deviceName}...`);
                // This would trigger a reconnection process
            }
        });
    });

    // Purchase buttons for carbon credits
    const purchaseButtons = document.querySelectorAll('.credit-card .btn-primary');
    
    purchaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const creditCard = this.closest('.credit-card');
            const projectTitle = creditCard.querySelector('.credit-title').textContent;
            const price = creditCard.querySelector('.credit-price').textContent;
            
            alert(`You are about to purchase carbon credits from "${projectTitle}" at ${price}. Proceeding to checkout...`);
            // This would redirect to a checkout process
        });
    });

    // Responsive menu toggle (simplified version)
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            // For mobile view
            // In a real implementation, you might add a hamburger menu here
        } else {
            // For desktop view
        }
    });

    // Simulate data loading for the dashboard
    simulateDataLoading();
});

// Simulate loading data and statistics
function simulateDataLoading() {
    // This function would normally fetch data from an API
    console.log('Loading dashboard data...');
    
    // In a real application, you would replace these placeholder behaviors
    // with actual API calls and data visualizations
    
    // Example: Creating a simple emissions chart (in a real app, you'd use a library like Chart.js)
    setTimeout(() => {
        const chartPlaceholder = document.querySelector('.chart-placeholder');
        if (chartPlaceholder) {
            chartPlaceholder.innerHTML = '<p>Chart data loaded! In a real application, this would display an interactive emissions chart.</p>';
        }
        
        console.log('Dashboard data loaded successfully');
    }, 1500);
}

// Example of IoT device data processing function
function processDeviceData(deviceId, data) {
    // This would process incoming data from IoT devices
    console.log(`Processing data from device ${deviceId}`, data);
    
    // In a real application, this might:
    // 1. Calculate emissions
    // 2. Update statistics
    // 3. Trigger alerts if thresholds are exceeded
    // 4. Update the user interface
    
    return {
        processed: true,
        emissions: data.raw * 0.85, // Example calculation
        timestamp: new Date()
    };
}

// Function to handle blockchain transactions for carbon credits
function initiateBlockchainTransaction(fromId, toId, amount, projectId) {
    // This would connect to a blockchain network to record carbon credit transactions
    console.log(`Initiating transaction of ${amount} tokens from ${fromId} to ${toId} for project ${projectId}`);
    
    // In a real application, this would:
    // 1. Connect to a blockchain wallet
    // 2. Create and sign a transaction
    // 3. Wait for confirmation
    // 4. Update the UI accordingly
    
    // Simulated response
    return {
        status: 'pending',
        transactionId: 'tx_' + Math.random().toString(36).substr(2, 9),
        timestamp: new Date()
    };
}

// Example function to calculate carbon footprint from activity data
function calculateCarbonFootprint(activities) {
    // This would calculate a carbon footprint based on user activities
    let totalEmissions = 0;
    
    // Example calculation logic (simplified)
    if (activities.transportation) {
        totalEmissions += activities.transportation.distance * 0.2; // Example factor
    }
    
    if (activities.energy) {
        totalEmissions += activities.energy.kwh * 0.5; // Example factor
    }
    
    if (activities.food) {
        totalEmissions += activities.food.meat * 3; // Example factor
    }
    
    return {
        total: totalEmissions,
        breakdown: {
            transportation: activities.transportation ? activities.transportation.distance * 0.2 : 0,
            energy: activities.energy ? activities.energy.kwh * 0.5 : 0,
            food: activities.food ? activities.food.meat * 3 : 0
        }
    };
}
