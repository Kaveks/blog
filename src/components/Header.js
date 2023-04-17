import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyle=makeStyles((theme)=>({
    appBar:{borderBottom: `1px solid ${theme.palette.divider}`,

    }
}));

function Header(){
    const classes = useStyle();
    const Style={
    marginLeft:'20px',
    color:'#e91e63',
    }
    return(
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="white" elevation={0} className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>BlogmeUp</Typography>
                    <Typography variant="h6" color="inherit" noWrap style={{marginLeft:'20px',color:'#e91e63'}}>
                    <Link href="/" variant="subtitle1" color="inherit">
                            Home
                    </Link>
                    </Typography>
                    <Typography variant="h6" color="inherit" noWrap style={Style}>
                    <Link href="/create" variant="subtitle1" color="inherit">
                            Create
                    </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Header;
