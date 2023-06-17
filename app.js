import { getData, putData, removeNode } from './utils.js';

// Clear database
await removeNode('users');
await removeNode('moneyflows');
await removeNode('moneyFlows');
await removeNode('transactions');

// Prepare data
const exampleUser = {
    id: 1,
    name: 'Walter White',
    password: '$3jkeRRb$kmNh54GSbcxVvHGLDS$yy25h6',
    username: 'heisenberg',
    email: 'heisenberg1@gmail.com'
};
const exampleTransaction1 = {
    id: 1,
    userId: 1,
    type: 'add',
    value: 1500,
    operationDate: '2023-06-01T12:10:53.2643561'
};
const exampleTransaction2 = {
    id: 2,
    userId: 1,
    type: 'withdraw',
    value: 300,
    operationDate: '2023-06-12T13:23:49.1643509'
};
const exampleMoneyFlow1 = {
    id: 1,
    userId: 1,
    stockId: 'goog',
    stockCount: 10,
    stockPrice: 25,
    type: 'buy',
    transactionDate: '2023-06-02T17:40:27.2648134'
};
const exampleMoneyFlow2 = {
    id: 2,
    userId: 1,
    stockId: 'goog',
    stockCount: 10,
    stockPrice: 27,
    type: 'sell',
    transactionDate: '2023-06-10T09:21:01:27.2648789'
};

// Add data to database
await putData('users', 1, exampleUser);
await putData('transactions', 1, exampleTransaction1);
await putData('transactions', 2, exampleTransaction2);
await putData('moneyflows', 1, exampleMoneyFlow1);
await putData('moneyflows', 2, exampleMoneyFlow2);

// Fetch and print data
await getData('users').then(val => console.log(val));
await getData('moneyflows').then(val => console.log(val));
await getData('transactions').then(val => console.log(val));