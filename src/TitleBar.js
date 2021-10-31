import {useStyles} from './useStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {isOpenContext} from './App';
// eslint-disable-next-line valid-jsdoc
/**
 * return {*}
 */
function TitleBar() {
  const classes = useStyles();
  return (
    <isOpenContext.Consumer>
      {({mobileOpen, handleDrawerToggle}) => (
        <AppBar position="fixed"
          className={classes.appBar}
          zIndex={classes.appBar.zIndex}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
            CSE 183 Mail - inbox
            </Typography>
          </Toolbar>
        </AppBar>
      )}
    </isOpenContext.Consumer>
  );
}
export default TitleBar;
