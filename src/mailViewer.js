import {Paper} from '@material-ui/core';
import {ListItemIcon} from '@material-ui/core';
import mailContext from './mailContext';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import List from '@material-ui/core/List';
/**
 *
 * @return {*}
 */
function MailViewer() {
  return (
    <mailContext.Consumer>
      {({mailbox, clickedEmail, classes, setOpenViewer}) => (
        <div>
          <Paper className = {classes.MailViewer}>
            <List component ="nav" class = {classes.mailViewerBar}
            >
              <ListItemIcon role="button" className = {classes.mailViewerBar}>
                <IconButton edge="end"
                  aria-label = "close desktop reader"
                  onClick={()=> {
                    setOpenViewer(false);
                  }}
                >
                  <ClearIcon/>
                </IconButton>
              </ListItemIcon>
            </List>
            <div>
              <h1>{`From: ${clickedEmail.from.name} 
            (${clickedEmail.from.email})`}</h1>
              <h1>{`To: ${clickedEmail.to.name}
              (${clickedEmail.to.email})`}</h1>
              <h1>{`Subject: ${clickedEmail.subject}`}</h1>
              <p>{clickedEmail.content}</p>
            </div>
          </Paper>
        </div>
      )}
    </mailContext.Consumer>
  );
}

export default MailViewer;
