import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/homeLayout'
import { AppBar } from '@material-ui/core'
import styles from '../../components/layout.module.css'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import utilStyles from '../../styles/utils.module.css'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import MailIcon from '@material-ui/icons/Mail';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StarRateIcon from '@material-ui/icons/StarRate';
import ShareIcon from '@material-ui/icons/Share';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const registerDevice = async (headers) => {
  var res = await fetch('http://localhost:8080/register-device', {
  method: 'GET',
  headers: headers
});
res = await res.json();
_confirmRegistration(res)
}

function _confirmRegistration(res){
  if (res.status === 'success') {
    alert("Device registered!")
    return res;
  } else {
    //likely change this so that it logs you out instead, this is because if this doesn't work, that means your token expired.
    window.location.href = "http://localhost:3000"
  }
}


const classes = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  }, drawerPaper: {
    width: drawerWidth,
  },
  gridRoot: {
    width: 350,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 2000,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
}));


export default class DevicesPage extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render(){
    return (
      <Layout>
        <div className={classes.root}>
          <AppBar className={utilStyles.appBar}>
            <Toolbar className={classes.toolbar}>
              <Typography style={{ flex: 1 }} variant="h6" noWrap>
                Devices
              </Typography>
              <div>
                <Link href="/" >
                  <div>
                    <Button onClick={() => {
                      localStorage.setItem('Authorization', '');
                     }} variant="contained"> Log out</Button>
                  </div>
                </Link>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            className={utilStyles.drawer}
            variant="permanent"
            anchor="left"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Divider />
            <List>
              <ListItem button key= 'New Pictures' onClick={() => {
                window.location.href = "http://54.174.96.252:3000/main/homePage"
              }}>
                <ListItemIcon>
                  <MailIcon/>
                  
                </ListItemIcon>
                <ListItemText primary='New Pictures'/>
              </ListItem>
              <ListItem button key= 'Saved' onClick={() => {

              }}>
                <ListItemIcon>
                  <StarRateIcon/>
                  
                </ListItemIcon>
                <ListItemText primary='Saved'/>
              </ListItem>
              <ListItem button key= 'Share' onClick={() => {
              }}>
                <ListItemIcon>
                  <ShareIcon/>
                  
                </ListItemIcon>
                <ListItemText primary='Share'/>
              </ListItem>
              <ListItem button key= 'Stats' onClick={() => {
              }}>
                <ListItemIcon>
                  <EqualizerIcon/>
                </ListItemIcon>
                <ListItemText primary='Stats'/>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button key= 'All Pictures' onClick={() => {
              }}>
                <ListItemIcon>
                  <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary='All Pictures'/>
              </ListItem>
              <ListItem button key= 'Deleted' onClick={() => {
              }}>
                <ListItemIcon>
                  <DeleteForeverIcon/>
                </ListItemIcon>
                <ListItemText primary='Deleted'/>
              </ListItem>
            </List>
            <Divider />
            <List>
            <ListItem button key= 'Devices' onClick={() => {
              }}>
                <ListItemIcon>
                  <CameraAltIcon/>
                </ListItemIcon>
                <ListItemText primary='Devices'/>
              </ListItem>
            </List>
          </Drawer>
        </div>
        <div className={classes.gridRoot}>
            <Typography className ={utilStyles.addRemoveDevice} noWrap variant='h4' style={{ flex: 1 }}>
            Add or Remove a Device
            </Typography>
            <div className={styles.devicesForm}>
              <TextField id="serial-number" label="Serial Number" variant="outlined" />
            </div>
            <div className={styles.devicesForm}>
              <TextField id="nickname" label="Nickname" variant="outlined" />
            </div>
            <div className={styles.devicesForm}>
              <TextField id="location" label="Location" variant="outlined" />
            </div>
            <div>
            <Grid container className={utilStyles.grid} direction="row" justify="center" alignItems="center" spacing={100}>
            <Grid className={utilStyles.gridItemDevices} item xs={3}>
              <Button classname={utilStyles.signUpPageButton} onClick={() => {
                const myHeaders = new Headers();
                var serialIdEntered = document.getElementById("serial-number").value;
                var nicknameEntered = document.getElementById("nickname").value;
                var locationEntered = document.getElementById("location").value;
                
                myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Authorization'));
                myHeaders.append('serial-id', serialIdEntered);
                myHeaders.append('nickname', nicknameEntered);
                myHeaders.append('location', locationEntered);
                
                registerDevice(myHeaders);


                }} variant="contained">Register</Button>

            </Grid>
            <Grid className={utilStyles.gridItemDevices} item xs={3}>
              <Button className={utilStyles.loginPageButton} onClick={() => {
              
            }} variant="contained">Remove</Button>
            </Grid>
          </Grid>
            </div>

        </div>
      </Layout>
    )
  }
}