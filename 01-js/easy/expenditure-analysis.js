/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

let transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1756076800000,
    price: 100,
    category: "Veggies",
    itemName: "Brinjal",
  },
  {
    id: 3,
    timestamp: 1856076800000,
    price: 500,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 4,
    timestamp: 1956076800000,
    price: 800,
    category: "Veggies",
    itemName: "Beans",
  },
];

calculateTotalSpentByCategory(transactions);

function calculateTotalSpentByCategory(transactions) {
  // console.log(transactions);

  let arrangedTransaction = {};
  let finalTransaction = [];

  for (let i = 0; i < transactions.length; i++) {
    let singleTransaction = transactions[i];

    // console.log(singleTransaction);

    if (arrangedTransaction[singleTransaction.category]) {
      arrangedTransaction[singleTransaction.category] +=
        singleTransaction.price;
    } else {
      arrangedTransaction[singleTransaction.category] = singleTransaction.price;
    }
  }

  // console.log(arrangedTransaction);

  for (let category in arrangedTransaction) {
    console.log(arrangedTransaction[category]);
    finalTransaction.push({
      category: category,
      totalSpent: arrangedTransaction[category],
    });
  }

  console.log(finalTransaction);

  return finalTransaction;
}

module.exports = calculateTotalSpentByCategory;
