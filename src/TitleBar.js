// import {useStyles} from './useStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import mailContext from './mailContext';
// eslint-disable-next-line valid-jsdoc
/**
 * return {*}
 */
function TitleBar() {
  return (
    <mailContext.Consumer>
      {({mobileOpen, handleDrawerToggle, classes, mailbox}) => (
        <AppBar position="fixed"
          className={classes.appBar}
          style={{zIndex: 10000}}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label= "toggle drawer"
              role= "button"
              onClick={() => {
                handleDrawerToggle();
              }}
              className={classes.menuButton}
            >
              <MenuIcon
              />
            </IconButton>
            <Typography variant="h6" noWrap>
            CSE183 Mail - {mailbox}
            </Typography>
          </Toolbar>
        </AppBar>
      )}
    </mailContext.Consumer>
  );
}
export default TitleBar;
