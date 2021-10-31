

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import {useStyles} from './useStyles';


/**
 * @return {*} MailboxList
*/
function MailboxList() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar} />
      <List>
        {['Inbox', 'Trash'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ?
              <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
export default MailboxList;
