import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {useTheme} from '@material-ui/core/styles';
import {useStyles} from './useStyles';
import EmailList from './EmailList';
import MailboxList from './MailboxList';
import TitleBar from './TitleBar';
import {IsOpenContext} from './isOpenProvider'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     zIndex: 10,
//     [theme.breakpoints.up('sm')]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//   },
//   appBar: {
//     zIndex: 100000,
//     [theme.breakpoints.up('sm')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//     },
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));
/**
 *
 * @param {*} props
 * @return {*} obj
 */
function App(props) {
  const {window} = props;
  const classes = useStyles();
  const theme = useTheme();
  // const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [mailbox, setMailBox] = React.useState('Inbox');
  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };
  const container = window !== undefined ? () =>
    window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TitleBar/>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with
        js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
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
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <MailboxList/>
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <EmailList/>
      </main>
    </div>
  );
}
App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default App;
