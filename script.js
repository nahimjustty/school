let accountBalance = 0;
let username = ``;
const transactionHistory = [];


const usernameInput = document.getElementById('usernameInput');
const createAccountBtn = document.getElementById('createAccountBtn');
const accountDetailsSection = document.querySelector('.account-details');
const displayUsernameSpan = document.getElementById('displayUsername');
const currentBalanceSpan = document.getElementById('currentBalance');
const transactionAmountInput = document.getElementById('transactionAmount');
const debitBtn = document.getElementById('debitBtn');
const creditBtn = document.getElementById('creditBtn');
const messageParagraph = document.getElementById('message');
const transactionHistoryList = document.getElementById('transactionHistoryList');

function getRandomBalance(min = 10000, max = 50000) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(0));
}


createAccountBtn.addEventListener('click', () => {
    const enteredUsername = usernameInput.value.trim();

    if (enteredUsername === '') {
        messageParagraph.textContent = 'Please enter a username to create an account.';
        messageParagraph.style.color = 'blue';
        return;
    }

    username = enteredUsername;
    accountBalance = getRandomBalance(); 

    displayUsernameSpan.textContent = username;
    updateBalanceDisplay();

    accountDetailsSection.classList.remove('hidden');
    document.querySelector('.username-section').classList.add('hidden');

    messageParagraph.textContent = `Welcome, ${username}! Your account has been created with a balance of $${accountBalance.toFixed(2)}.`;
    messageParagraph.classList.add('success');
});




function updateBalanceDisplay() {
    currentBalanceSpan.textContent = accountBalance;
}

function addTransactionToHistory(type, amount, newBalance) {
    const timestamp = new Date().toLocaleString();
    const transaction = {
        type: type,
        amount: amount,
        newBalance: newBalance,
        timestamp: timestamp
    };

    transactionHistory.unshift(transaction);

    const listItem = document.createElement(`li`);
    listItem.classList.add(type);
};




function handleTransaction(type) {
    const amountStr = transactionAmountInput.value;
    const amount = parseFloat(amountStr);

    messageParagraph.textContent = '';
    messageParagraph.classList.remove('success'); 

    if (isNaN(amount) || amount <= 0) {
        messageParagraph.textContent = 'Please enter a valid positive number for the amount.';
        messageParagraph.style.color = 'red'; 
        return;
    }

    if (type === 'debit') {
        if (accountBalance - amount < 0) {
            messageParagraph.textContent = 'Insufficient funds for this debit transaction.';
            messageParagraph.style.color = 'red';
        } else {
            accountBalance -= amount;
            messageParagraph.textContent = `Successfully debited $${amount.toFixed(2)}.`;
            messageParagraph.style.color = 'red';
            messageParagraph.classList.add('success'); 
        }
    } else if (type === 'credit') {
        accountBalance += amount;
        messageParagraph.textContent = `Successfully credited $${amount.toFixed(2)}.`;
        messageParagraph.classList.add('success');
        messageParagraph.style.color = 'green';
    }

    updateBalanceDisplay();
    transactionAmountInput.value = ''; 
}

debitBtn.addEventListener('click', () => handleTransaction('debit'));
creditBtn.addEventListener('click', () => handleTransaction('credit'));

updateBalanceDisplay();
