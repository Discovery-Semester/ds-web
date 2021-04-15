import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import vsethLogo from '../../assets/vseth_Logo_bylines_organisation-white.svg'
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Aux from "../../hoc/Aux";
import constants from '../../common/constants';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://discovery-semester.ch">
                discovery-semester.ch
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: constants.styling.mainColor,
        textAlign: 'center'
    },
    footerContact: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    vsethImage: {
        height: 70,
        marginTop: -10,
        marginBottom: -10,
        float: 'right',
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <Aux>
            <CssBaseline/>
            <footer className={classes.footer}>
                <Toolbar>
                    <Container maxWidth="sm">
                        <Typography variant="body1"><a className={classes.footerContact}
                            href={"mailto:contact@discovery-semester.ch"}>contact@discovery-semester.ch</a></Typography>
                        <Copyright/>
                    </Container>
                    <img className={classes.vsethImage} src={vsethLogo} alt="vseth-logo"/>
                </Toolbar>
            </footer>
        </Aux>
    );
}
