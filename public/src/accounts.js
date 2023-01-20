function findAccountById(accounts=[], id=null) {
  return foundId = accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts=[]) {
  return accounts.sort((accountA, accountB)=>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  )
}

function getTotalNumberOfBorrows(account = [], books=[]) {
  const accId = account.id;
  let total = 0
  books.forEach(book => book.borrows.forEach(borrow => accId ===borrow.id && total++))
 return total
}

function getBooksPossessedByAccount(account = {}, books = [], authors = []) {
  //first find all the books the account possesses
  const accId = account.id;
  let possessedBooks = books.filter((book) => {
      //check if the books.borrows list has any accounts who'se id === the given account id
      let doesAccountPossessThisBook = book.borrows.some((possessee) => {
          return possessee.id === accId && possessee.returned === false;
      });

      return doesAccountPossessThisBook;
});
  //then of those books, for each book find the author for that book and give back an array of books with the author embedded into the book object
  let result = possessedBooks.map((book) => {
      //find the author object for this book's author id
      let matchingAuthor = authors.find(
          (author) => author.id === book.authorId
      );

      book.author = matchingAuthor;

      return book;
});

  return result;
}

//console.log(getBooksPossessedByAccount(account1, books, authors));


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
