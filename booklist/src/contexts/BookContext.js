import React, {createContext, useEffect, useReducer} from "react";
import { v4 as uuidv4 } from 'uuid';
import {bookReducer} from "../resucers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        let localResults = localStorage.getItem('books');
        return localResults ? JSON.parse(localResults) : [];
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);
    return (
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    )
};

export default BookContextProvider;