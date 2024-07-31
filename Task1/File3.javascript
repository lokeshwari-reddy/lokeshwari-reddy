document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the selected vote
    const selectedOption = document.querySelector('input[name="vote"]:checked');
    if (!selectedOption) {
        alert('Please select an option to vote.');
        return;
    }
    
    // Show the result
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('resultText').textContent = `You voted for: ${selectedOption.value}`;
    
    // Clear the form
    document.getElementById('votingForm').reset();
});
