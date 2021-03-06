/* eslint-disable no-unused-vars */
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
const desktopStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    zIndex: 100000,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: 10,
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
    width: '100%',
    padding: theme.spacing(3),
  },
  emailViewer: {
    /** referenced from @mm20 on discord */
    position: 'fixed',
    width: `calc(100% - ${drawerWidth}px)`,
    height: '100%',
    left: 0,
    bottom: 0,
    padding: theme.spacing(3),
  },
  table: {
    minWidth: 650,
    height: '100%',
  },
  mailViewerBar: {
    backgroundColor: '#1155ff',
    height: '20%',
  },
}));
/**
 *
 * @param {*} props
 * @return {*} obj
 */
function Content(props) {
  // const {window} = props;

  const classes = desktopStyle();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openViewer, setOpenViewer] = useState(false);
  const [isMobile, setMobile] = useState(!props.useDesktopStyles);
  const [clickedEmail, setClickedEmail] = useState();
  const [mailbox, setMailBox] = useState('Inbox');
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // const container = window !== undefined ? () =>
  //   window().document.body : undefined;
  const obj = {
    isMobile,
    setMobile,
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
            container={window.document.body}
            variant="temporary"
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
            open={props.useDesktopStyles}
          >
            <MailboxList/>
          </Drawer>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <EmailList/>
          {openViewer ? <MailViewer/> : null}
        </main>
      </mailContext.Provider>
    </div>
  );
}

export default Content;
