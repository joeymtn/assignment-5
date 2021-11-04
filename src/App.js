import React from 'react';
import Content from './Content';
import DimensionsProvider from './DimensionsProvider';
import ResponsiveLayout from './ResponsiveLayout';
// eslint-disable-next-line no-unused-vars
import {makeStyles, theme} from '@material-ui/core/styles';
// const narrowStyles = 'narrow';
// const drawerWidth = 240;
// const defaultStyles = makeStyles((theme) => ({
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
//     zIndex: 1000,
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
//     width: '100%',
//     padding: theme.spacing(3),
//   },
//   emailViewer: {
//     /** referenced from @mm20 on discord */
//     position: 'fixed',
//     width: `calc(100% - ${drawerWidth}px)`,
//     height: '100%',
//     left: 0,
//     bottom: 0,
//     padding: theme.spacing(3),
//   },
//   table: {
//     minWidth: 650,
//   },
//   mailViewerBar: {
//     backgroundColor: '#1155ff',
//   },
// }));
/**
 *
 * @return {*}
 */
function App() {
  return (
    <DimensionsProvider>
      <ResponsiveLayout
        renderDefault={() => (
          <Content useDesktopStyles={true}/>
        )}
        renderNarrow={() => (
          <Content useDesktopStyles={false}/>
        )}
      />
    </DimensionsProvider>
  );
}

// App.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   // window: PropTypes.func,
// };

export default App;
