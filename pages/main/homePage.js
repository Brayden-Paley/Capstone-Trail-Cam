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
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
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
    width: 200,
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

const testImage = '/images/profile.jpeg';


const tileData = [
     {
       img: testImage,
       title: 'Image1',
       author: 'author',
     },
     {
       img: testImage,
       title: 'Image2',
       author: 'author',
     },
     {
      img: testImage,
      title: 'Image3',
      author: 'author',
    },
    {
      img: testImage,
      title: 'Image4',
      author: 'author',
    },
    {
      img: testImage,
      title: 'Image5',
      author: 'author',
    },
    {
      img: testImage,
      title: 'Image6',
      author: 'author',
    },
    {
      img: testImage,
      title: 'Image4',
      author: 'author',
    },
    {
      img: testImage,
      title: 'Image5',
      author: 'author',
    },
    {
      img: testImage,
      title: 'Image6',
      author: 'author',
    },
    {
      img: testImage,
      title: 'Image4',
      author: 'author',
    },
    {
      img: testImage,
      title: 'Image5',
      author: 'author',
    },
    {
      img: testImage,
      title: 'Image6',
      author: 'author',
    },
   ];

export default function HomePage() {
  return (
    <Layout>
      <div className={classes.root}>
        <AppBar className={utilStyles.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography style={{ flex: 1 }} variant="h6" noWrap>
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
            {['New Pictures', 'Saved', 'Share', 'Stats'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index === 0 ? <MailIcon /> : index === 1 ? <StarRateIcon /> : index === 2 ? <ShareIcon /> : <EqualizerIcon />} </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All Pictures', 'Deleted'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <DeleteForeverIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Add Device', 'Remove Device'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <AddIcon /> : <RemoveIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
      <div className={classes.gridRoot}>
        <GridList cellHeight={180} cols={3} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            <ListSubheader component="div">Photos</ListSubheader>
          </GridListTile>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Layout>
  )
}