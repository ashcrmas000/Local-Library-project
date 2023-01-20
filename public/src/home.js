function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.reduce((total, booksObj)=>{
    let booksStillLoaned = booksObj.borrows.some(
      (borrower) => borrower.returned === false
    )
    if (booksStillLoaned){
      total++
    }
    return total
  }, 0)
}

const getMostCommonGenres = (books) => {
  let popularGenres = {};
  books.forEach((book) => {
    if (book.genre in popularGenres) {
      popularGenres[book.genre]++;
    }else{
      popularGenres[book.genre] = 1
    }
  })

  let result = Object.keys(popularGenres).map((genreName)=>{
    return {name: genreName, count: popularGenres[genreName]}
  })
  result.sort((genreA, genreB)=> {
    return genreB.count - genreA.count
  })
  return result.slice(0,5)
}

function getMostPopularBooks(books) {
  return books

  .map((book)=>{
    return {name: book.title, count: book.borrows.length}
  })
  .sort((bookA,bookB)=>(
    bookA.count < bookB.count ? 1 :-1
  ))
    .slice(0,5)
  //It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.

//Each object in the returned array has two keys:

//- The `name` key which represents the title of the book.
//- The `count` key which represents the number of times the book has been borrowed.
}
/*
example of most popular books function result
  [
    { name: "incididunt nostrud minim", count: 30 },
    { name: "culpa do sint", count: 30 },
    { name: "ullamco est minim", count: 29 },
    ...
  ]
*/

function getMostPopularAuthors(books, authors) {
  //should locate the most popular authors out of the list based on number of their books borrowed from books.borrows, with help from their authorId
  let mostPopularAuthors = books
    .sort((bookA, bookB)=> {
      return bookB.borrows.length - bookA.borrows.length
    })
    .slice(0,5)

    return mostPopularAuthors.map((book) => {
      let authorOfBook = authors.find((author)=> author.id === book.authorId)

      let fullName = joinFirstAndLastName(
        authorOfBook.name.first,
        authorOfBook.name.last
      )
      return {name: fullName, count: book.borrows.length}
    })
}
function joinFirstAndLastName(first,last){
  return `${first} ${last}`
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
