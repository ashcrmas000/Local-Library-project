function findAuthorById(authors=[], id=null) {
  return found = authors.find((author)=> author.id === id)
}

function findBookById(books=[], id=null) {
  return foundBooks = books.find((book)=> book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = []
  const returnedBooks = []

  books.forEach((booksObj)=>{
    const isBookReturned = booksObj.borrows.every((borrowsObj)=>{
      return borrowsObj.returned
    })

    if(isBookReturned===true){
      returnedBooks.push(booksObj)
    }else{
      borrowedBooks.push(booksObj)
    }
  })
  return [borrowedBooks, returnedBooks]
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow)=> {
    let account=accounts.find((account)=>account.id===borrow.id)
    return {...borrow,...account}
  })
 
  .slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
