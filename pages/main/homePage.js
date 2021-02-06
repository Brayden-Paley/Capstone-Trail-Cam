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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



const pictureData = async(headers) => {
  var res = await fetch('http://localhost:8080/all-pictures', {
    method: 'GET',
    headers: headers,
    mode: 'cors'
  });
  res = await res.json();
  return getTileData(res);
}

async function getTileData(res){
  if (res.status === 'success'){
    console.log(res.images);
    return res.images;
  } else {
    window.location.href = "http://localhost:3000"
  }
}




export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      tileData : [  
        ]
    };
  }

  componentDidMount() {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Authorization'));
    pictureData(myHeaders).then(function(response){
      this.setState({ tileData: response });
        }.bind(this));
  }
  

  render(){
    return (
      <Layout>
        <div className={classes.root}>
          <AppBar className={utilStyles.appBar}>
            <Toolbar className={classes.toolbar}>
              <Typography  style={{ flex: 1 }} variant="h6" noWrap>
                Home Page
              </Typography>
              <div>
                <Link href="/" >
                  <div>
                    <Button onClick={() => { }} variant="contained"> Log out</Button>
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
                const myHeaders = new Headers();
                myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Authorization'));
                pictureData(myHeaders).then(function(response){
                  this.setState({ tileData: response });
                    }.bind(this));
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
              window.location.href = "http://localhost:3000/main/devicesPage"
              }}>
                <ListItemIcon>
                  <CameraAltIcon/>
                </ListItemIcon>
                <ListItemText primary='Devices'/>
              </ListItem>
            </List>
          </Drawer>
        </div>
        <div className={utilStyles.gridRoot}>
          <GridList cellHeight={200} cellWidth={250} cols={3} className={classes.gridList}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
              <Typography className ={utilStyles.photosText}>Photos</Typography>
            </GridListTile>
            {this.state.tileData.map((tile) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} /*alt={tile.title}
                
                /*<GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />*/ />
                
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Layout>
    )
  }
}