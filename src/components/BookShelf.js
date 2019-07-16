import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  
  render() {
    
    const { books, shelf } = this.props;
    const this_shelf_books = books.filter((book) => book.shelf === shelf);
    const shelfName = {
      "currentlyReading": "Currently Reading",
      "wantToRead": "Want To Read",
      "read": "Read"
    }

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">
            { shelfName[shelf] }
          </h2>

          <div className="bookshelf-books">
            <div className="books-grid">
              {console.log( this_shelf_books )}
              {
                this_shelf_books.map((book) => (
                  <li key={ book.id }>
                    <Book title={ book.title} 
                      authors={ book.authors } 
                      thumbnail={ book.imageLinks ? 
                      book.imageLinks.thumbnail : "" } 
                    />
                  </li>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf;