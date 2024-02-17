// /*
//   Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
//   and return a list of objects where each object is unique category-wise and has total price spent as its value.
//   Transaction - an object like { itemName, category, price, timestamp }.
//   Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
// */

function calculateTotalSpentByCategory(transactions) {
  let res = [];
  for (let i = 0; i < transactions.length; i++) {
    isPresentInRes = false;
    for (let j = 0; j < res.length; j++) {
      if (res[j].category === transactions[i].category) {
        res[j].totalSpent += transactions[i].price;
        isPresentInRes = true;
      }
    }
    if (!isPresentInRes) {
      res.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
    }
  }

  return res;
}

module.exports = calculateTotalSpentByCategory;
