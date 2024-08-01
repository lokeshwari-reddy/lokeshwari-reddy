function submitVote() {
    // Get the selected option
    const form = document.getElementById('votingForm');
    const selectedOption = form.option.value;
    
    if (!selectedOption) {
        alert('Please select an option before submitting.');
        return;
    }

    // Display the result
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultText').textContent = `You voted for ${selectedOption}.`;
    
    // Normally, here you would send the vote to a server
    // For demonstration purposes, we'll just display the result on the page
}
