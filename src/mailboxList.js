import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import mailContext from './mailContext';

/**
 * @return {*} MailboxList
 */
function MailboxList() {
  return (
    <mailContext.Consumer>
      {({classes, setMailBox, setOpenViewer, setMobileOpen}) => (
        <div>
          <div className={classes.toolbar} />
          <List>
            {['Inbox', 'Trash'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon/>
                  ) : (
                    <MailIcon/>
                  )}
                </ListItemIcon>
                <ListItemText primary={text} onClick={(e) => {
                  setMailBox(e.target.innerHTML);
                  setOpenViewer(false);
                  setMobileOpen(false);
                }} />
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </mailContext.Consumer>
  );
}
export default MailboxList;
