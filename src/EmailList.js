import React from 'react';
import loader from './data/loader';
import emails from './data/emails.json';
import mailContext from './mailContext';
loader(); // do not remove this!
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
    return `${d.getHours()}:${d.getMinutes()}`;
  } else if (d.getTime() > cToday.getTime()) {
    return `${d.toLocaleString('default', {month: 'long'})}, ${d.getDate()}`;
  } else {
    return `${d.getFullYear()}`;
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
      {({mailbox}) => (
        <table>
          <tbody>
            {emails.filter((email) =>
              email.mailbox === mailbox.toLowerCase()).sort(
              function(a, b) {
                return new Date(b.received) - new Date(a.received);
              },
            ).map((email) => (
              <tr key={email.id}>
                <td>{email.from.name}</td>
                <td>{email.subject}</td>
                <td>{dateFormatter(email.received)}</td>
                {/* <td>{email.mailbox}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </mailContext.Consumer>
  );
}

export default EmailList;
