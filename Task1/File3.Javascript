document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="vote"]:checked');
    if (selectedOption) {
        document.getElementById('result').innerHTML = `<p>Thank you for voting for ${selectedOption.nextElementSibling.textContent}!</p>`;
    } else {
        document.getElementById('result').innerHTML = `<p>Please select an option before submitting.</p>`;
    }
});
