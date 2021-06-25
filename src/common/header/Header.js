import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


const customStyles= {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

const TabContainer = function(props) {
    return(
        <Typography component="div" style={{padding: 0}}>
            {props.children}
        </Typography>
    );
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
        };
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true})
    }

    closeModalHandler = () => {
        this.setState({modalIsOpen: false})
    }

    tabChangeHandler = (event, value) => {
        this.setState({value});
    }

    render() {
        // const { classes } = this.props;
        return (
            <div>
                <header className="app-header">
                    <IconButton  style={{color: "#ffffff"}} aria-label="Menu">
                    <FastfoodIcon style={{color: "#ffffff"}} />
                    </IconButton>
                    <div className="login-button">
                        <Button variant="contained" color="default" startIcon={<AccountCircle />} onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                </header>
                <Modal 
                ariaHideApp={false} 
                isOpen={this.state.modalIsOpen} 
                contentLabel="Login"
                onRequestClose={this.closeModalHandler}
                style={customStyles}>
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="LOGIN" />
                        <Tab label="SIGNUP"/>
                    </Tabs>
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="userName">Username</InputLabel>
                            <Input id="userName" type="text"/>
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password"/>
                        </FormControl>
                    </TabContainer>

                </Modal>
            </div>
        )
    }
}
export default Header;