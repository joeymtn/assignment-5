import React from 'react';
import loader from './data/loader';
import emails from './data/emails.json';
import mailContext from './mailContext';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
loader(); // do not remove this!
loader();
// https://attacomsian.com/blog/check-if-date-is-today-javascript
const isToday = (date) => {
  const today = new Date();
  return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
};
const dateFormatter = (date) => {
  const d = new Date(date);
  const cToday = new Date();
  cToday.setMonth(-12);
  if (isToday(d)) {
    let s = `${d.toLocaleString('en-US', {hour: '2-digit', minute: '2-digit',
      hour12: 'false'})}`;
    s = s.replace('AM', '');
    return s;
  } else {
    return `${d.toLocaleString('default', {month: 'short'})}
     ${d.toLocaleString('en-US', {day: '2-digit'})}`;
  }
};
// https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property
/**
 * Simple component with no state.
 *
 * See the basic-react example for an example of adding and reacting to
 * changes in state and lecture 10 for details on Material-UI
 *
 * @return {object} JSX
 */
function EmailList() {
  return (
    <mailContext.Consumer>
      {({mailbox, openViewer, setOpenViewer, setClickedEmail, classes}) => (
        <TableContainer component={Paper}>
          <table className={classes.table} aria-label="simple table">
            <tbody>
              {emails.filter((email) =>
                email.mailbox === mailbox.toLowerCase()).sort(
                function(a, b) {
                  return new Date(b.received) - new Date(a.received);
                },
              ).map((email) => (
                <tr key={email.id} aria-label= {`${email.from.name} 
                ${email.subject}`}
                role='button' onClick={() => {
                  setOpenViewer(true);
                  setClickedEmail(email);
                }}>
                  <td>{email.from.name}</td>
                  <td>{email.subject}</td>
                  <td>{dateFormatter(email.received)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      )}
    </mailContext.Consumer>


  );
}

export default EmailList;
