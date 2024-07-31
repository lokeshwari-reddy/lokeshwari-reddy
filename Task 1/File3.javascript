// script.js
const votes = {
    'Option 1': 0,
    'Option 2': 0,
    'Option 3': 0
};

function submitVote() {
    const form = document.getElementById('votingForm');
    const formData = new FormData(form);
    const selectedOption = formData.get('vote');

    if (selectedOption) {
        votes[selectedOption]++;
        displayResults();
    } else {
        alert('Please select an option to vote.');
    }
}

function displayResults() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Current Results:</h2>';
    for (const [option, count] of Object.entries(votes)) {
        resultDiv.innerHTML += `<p>${option}: ${count} vote(s)</p>`;
    }
}
