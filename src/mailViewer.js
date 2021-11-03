import {Paper} from '@material-ui/core';
import {ListItemIcon} from '@material-ui/core';
import mailContext from './mailContext';
/**
 *
 * @return {*}
 */
function MailViewer() {
  return (
    <mailContext.Consumer>
      {({mailbox, clickedEmail, classes}) => (
        <Paper className = {classes.MailViewer}>
          <ListItemIcon role="button" className = {classes.mailViewerBar}/>
          <div>
            <h1>{`From:${clickedEmail.from.name} 
            (${clickedEmail.from.email})`}</h1>
            <h1>{`To:${clickedEmail.to.email} (${clickedEmail.to.email})`}</h1>
            <h1>{`Subject:${clickedEmail.subject}`}</h1>
            <p>{clickedEmail.content}</p>
          </div>
        </Paper>
      )}
    </mailContext.Consumer>
  );
}

export default MailViewer;
