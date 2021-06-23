import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        color: "#edede",
        width: "100%",
    },
    toolBar: {
        color: "#edede",
        width: "100%",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    loginButton: {
        position: "relative",
        float: "right",
        backgroundColor: "#edede",
    },
    title: {
      flexGrow: 1,
    },
    search: {
        position: "relative",
        borderRadius: "4px",
        backgroundColor: "#c0c0c0",
        marginLeft: 0,
        width: "300px",
        float: "right",
        marginTop: "18px",
    },
    searchIcon: {
        padding: theme.spacing(2),
        marginRight: theme.spacing(2),
        height: "100%",
        position: "relative",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
    },
    inputRoot: {
        color: "#ffffff",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    },
  }));

  class Header extends Component {
    render() {
        const { classes } = this.props;
        
        return (
          <AppBar position="static" className={classes.appBar} style={{ background: '#212b35' }} >
            <Toolbar style={{ width: '100%' }}>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <FastfoodIcon />
              </IconButton>
              <div className={classes.search} style={{ background: '#ccfff5' }} >
                                
                                <span >
                                <SearchIcon className={classes.searchIcon} />
                                </span>
                                
                                
                                <Input
                                    disableUnderline={false}
                                    placeholder="Search by Restaurant Name"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ "aria-label": "search" }}
                                    onChange={this.inputChangeHandler}
                                    style={{ color: '#c4c4c4' }}
                                />
                </div>
              <Button className={classes.loginButton} style={{ background: '#c4c4c4' }} >
              <AccountCircle />
                  Login
                  </Button>
            </Toolbar>
          </AppBar>
        );
      }
  }
export default withStyles(useStyles) (Header);