import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ThemeContextProvider>
                    <AuthContextProvider>
                        <Navbar />
                        <BookContextProvider>
                            <BookList />
                        </BookContextProvider>
                        <ToggleTheme />
                    </AuthContextProvider>
                </ThemeContextProvider>
            </div>
        );
    }
}

export default App;
