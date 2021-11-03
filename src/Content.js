import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import EmailList from './EmailList';
import MailboxList from './MailboxList';
import TitleBar from './TitleBar';
import mailContext from './mailContext';
import {makeStyles, useTheme} from '@material-ui/core/styles';
/* eslint-disable-next-line no-unused-vars */
import MailViewer from './MailViewer';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: 1000,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    width: '100%',
    padding: theme.spacing(3),
  },
  emailViewer: {
    /** referenced from @mm20 on discord */
    position: 'fixed', left: '50%', top: '10%',
    width: '300%',
    height: 1000000,
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  table: {
    minWidth: 650,
    height: '50%',
  },
  mailViewerBar: {
    backgroundColor: '#1155ff',
  },
}));
/**
 *
 * @param {*} props
 * @return {*} obj
 */
function Content(props) {
  const {window} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openViewer, setOpenViewer] = useState(false);
  const [clickedEmail, setClickedEmail] = useState();
  const [mailbox, setMailBox] = useState('Inbox');
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () =>
    window().document.body : undefined;
  const obj = {
    clickedEmail,
    setClickedEmail,
    openViewer,
    setOpenViewer,
    mailbox,
    setMailBox,
    classes,
    mobileOpen,
    setMobileOpen,
    handleDrawerToggle,
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <mailContext.Provider value ={obj}>
        <TitleBar/>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with
        js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          > <MailboxList/>
          </Drawer>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="persistent"
            open
          >
            <MailboxList/>
            {}
          </Drawer>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <EmailList/>
          {clickedEmail ? <MailViewer/> : null}
        </main>
      </mailContext.Provider>
    </div>
  );
}

export default Content;
