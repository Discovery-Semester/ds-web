import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {changeLanguage} from "../store/actions/languageActionCreator";
import {connect} from "react-redux";
import logo from "../assets/logo-with-text-negativ.png";
import constants from "../common/constants";
import Button from "@material-ui/core/Button";
import {toggleSideDrawer} from "../store/actions/uiActionCreator";
import {Link, NavLink} from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 300,
    },
    fullList: {
        width: 'auto',
    },
    logoContainer: {
        width: '100%',
        backgroundColor: constants.styling.mainColor,
        cursor: 'pointer'
    },
    logo: {
        width: 280,
        margin: 10
    },
    languageButton: {
        marginLeft: 10
    }
});


const SideDrawer = props => {
    const classes = useStyles();

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        // setState({...state, open});
        props.onToggleSideDrawer(open);
    };

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className={classes.logoContainer}>
                <NavLink style={{all: "unset"}} to="/">
                    <img className={classes.logo} src={logo} alt="logo"/>
                </NavLink>
            </div>
            <Divider/>
            <List>
                {[
                    props.translation.mentees,
                    props.translation.mentors,
                    props.translation.news,
                    props.translation.about,
                ].map((text, index) => (
                    <Link key={index} style={{all: 'unset'}} className={classes.menuButtons}
                          to={constants.routes[index]}>
                        <ListItem button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider/>
            <ListItem button key="Language">
                <ListItemText primary={props.translation.language}/>

                {[
                    constants.languages.EN,
                    constants.languages.DE
                ].map((text, index) => (
                    <Button onClick={() => props.onLanguageChange(text)}
                            className={classes.languageButton}
                            key={index}
                            color="inherit"
                            variant={
                                props.currentLanguage === text ? 'contained' : 'outlined'
                            }>
                        {text}
                    </Button>
                ))}
            </ListItem>
            <Divider/>
        </div>
    );

    return (
        <Drawer open={props.sideDrawerOpen} onClose={toggleDrawer(false)}>
            {sideList()}
        </Drawer>
    );
};

const mapStateToProps = state => {
    return {
        translation: state.languages.translation,
        currentLanguage: state.languages.currentLanguage,
        sideDrawerOpen: state.ui.sideDrawerOpen
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLanguageChange: language => dispatch(changeLanguage(language)),
        onToggleSideDrawer: open => dispatch(toggleSideDrawer(open))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);