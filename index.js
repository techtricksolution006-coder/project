// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        // Remove active class from all panes
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        // Add active class to corresponding pane
        document.getElementById(tabName).classList.add('active');
    });
});

// Search button functionality
document.querySelectorAll('.search-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const activePane = document.querySelector('.tab-pane.active');
        const searchId = activePane.querySelector('#appId');
        const searchName = activePane.querySelector('#appName');
        
        const value = searchId ? searchId.value : searchName.value;
        
        if (value.trim()) {
            alert('Searching for: ' + value);
            // Here you would typically make an API call
        } else {
            alert('Please enter a value to search');
        }
    });
});
