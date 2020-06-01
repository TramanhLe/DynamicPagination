"use strict";
// import data from "./data.js";
const data = 
[
  { id: 1, title: "Pride and Prejudice", author: "Jane Austen"},
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee"},
  { id: 3, title: "Great Gatsby, The", author: "F. Scott Fitzgerald"},
  { id: 4, title: "Wuthering Heigths", author: "Emily Bronte"},
  { id: 5, title: "Jane Eyre", author: "Charlotte Bronte"},
  { id: 6, title: "Little Women", author: "Louisa May Alcott"},
  { id: 7, title: "Anna Karenina", author: "Leo Tolstoy"},
  { id: 8, title: "Lord Of The Flies", author: "William Golding"},
  { id: 9, title: "Animal Farm", author: "George Orwell"},
  { id: 10, title: "Odyssey", author: "Homer"},
  { id: 11, title: "A Midsummer's Night Dream",author: "William Shakespeare"},
  { id: 12, title: "Tempest, The", author: "William Shakespeare"},
  { id: 13, title: "Romeo and Juliet", author: "William Shakespeare"},
  { id: 14, title: "Great Expectations", author: "Charles Dickens"},
  { id: 15, title: "Sense and Sensibility", author: "Jane Austen"},
  { id: 16, title: "Adventures of Huckleberry Finn, The", author: "Mark Twain" },
  { id: 17, title: "Catcher in the Rye, The", author: "J. D. Salinger"},
  { id: 18, title: "Brave New World", author: "Aldous Huxley" },
  { id: 19, title: "Of Mice and Men", author: "John Steinbeck" },
  { id: 20, title: "Adventures of Tom Sawyer, The", author: "Mark Twain" },
];
//(() => {
  const booksPerPage = 6; // Number of rows in a page
  const numberOfPages = Math.ceil(data.length / booksPerPage); 
  const lastPage = numberOfPages - 1;
  let currentPage = 0;
  let buttons = []; // associative array to get button by number
  const getTableElement = () => document.getElementsByTagName("table")[0];
  const rowInsert = (id = 0, title = "", author = "") => 
  {
    /*const table = getTableElement();
    const row = table.insertRow();
    const idCell = row.insertCell(0);
    const titleCell = row.insertCell(1);
    const authorCell = row.insertCell(2);
    idCell.innerHTML = id;
    titleCell.innerHTML = title;
    authorCell.innerHTML = author; */

    let idCell = document.createElement("td");
    idCell.innerHTML = id;
    let titleCell = document.createElement("td");
    titleCell.innerHTML = title;
    let authorCell = document.createElement("td");
    authorCell.innerHTML = author;
    let tblRow = document.createElement("tr");
    tblRow.appendChild(idCell);
    tblRow.appendChild(titleCell);
    tblRow.appendChild(authorCell);
    bkTable.appendChild(tblRow);
  };
  const getBooksForPage = () => // Setting up the books in the page
  {
    const firstBookInPage = currentPage * booksPerPage;
    return data.slice(firstBookInPage, firstBookInPage + booksPerPage);
  };
  const insertAllRows = () => // Setting the books into a table
  {
    const books = getBooksForPage();
    books.forEach(book => rowInsert(book.id, book.title, book.author));
  };
  // Setting the button element 
  const activateButton = () => {
    let buttonElement = document.createElement('button');
    buttonElement.classList.add("active");
    buttonElement.setAttribute("aria-pressed", "true");
  };
  const deactivateButton = () => {
    let buttonElement = document.createElement('button');
    buttonElement.classList.remove("active");
    buttonElement.setAttribute("aria-pressed", "false");
  };
  const clearRows = () => {
      document.getElementById("tbody").innerHTML="";
  }

  const goToPage = (pageIndex = 0) => 
  {
    console.log("Hello");
    clearRows();
    //deactivateButton(buttons[currentPage]);
    //activateButton(buttons[pageIndex]);
    //currentPage = pageIndex;
    
    //insertAllRows();
  };
  const changePage = (num = 0) => 
  {
    const nextPage = currentPage + num;
    if (nextPage < 0) {
      console.log("This is the first page.")  
    }
    else if (nextPage > lastPage) 
    {
      console.log("This is the last page.");
    } else {
      goToPage(nextPage);
    }
  };
  const nextPage = () => changePage(1);
  const previousPage = () => changePage(-1);
  const addClickListener = (id = "", callback = () => undefined) =>
    document.getElementById(id).addEventListener("click", callback);
  const addPageButtons = () => {
    const pageSpan = document.getElementById("pageButtons");
    for (let page = 1; page <= numberOfPages; page++) {
      let button = document.createElement("button");
      button.innerHTML = page;
      button.className = "btn btn-primary";
      button.addEventListener("click", () => goToPage(page));
      pageSpan.appendChild(button);
      buttons[page] = button; // add to hashmap for reference 
    }
    activateButton(buttons[0]);
  };
  document.addEventListener("DOMContentLoaded", () => {
    addPageButtons();
    addClickListener("nextPageButton", nextPage);
    addClickListener("prevPageButton", previousPage);
    insertAllRows();
  });
//})();