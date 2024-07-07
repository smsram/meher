/// Function to handle hiding the loading page
function hideLoadingPage() {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
}

// Function to handle the loading logic
function handleLoading() {
    // Show the loading page
    document.querySelector('.loading').style.display = 'flex';

    // Hide the loading page after 2 seconds
    setTimeout(() => {
        hideLoadingPage();
    }, 2000); // 2000 milliseconds = 2 seconds
}

window.addEventListener('load', function() {
    handleLoading();
});
