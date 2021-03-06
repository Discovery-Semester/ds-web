import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import {makeStyles} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from './store/reducers/combineReducers';

const store = createStore(rootReducer);


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        flexGrow: 1
    }
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                    <Main/>
                    <Footer/>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
