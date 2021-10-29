import React from 'react';
import loader from './data/loader';
import emails from './data/emails.json';

loader(); // do not remove this!

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
    <table>
      <tbody>
        {emails.map((email) => (
          <tr key={email.id}>
            <td>{email.from.name}</td>
            <td>{email.subject}</td>
            <td>{email.received}</td>
            <td>{email.mailbox}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmailList;
