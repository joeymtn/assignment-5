import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import ResponsiveLayout from './ResponsiveLayout';

const defaultStyles = 'default';
const narrowStyles = 'narrow';

/**
 *
 * @return {*}
 */
function App() {
  return (
    <ResponsiveLayout
      renderDefault={() => (

        <Content styles={defaultStyles} />
      )}
      renderNarrow={() => (
        <Content styles={narrowStyles} />
      )}
    />
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;
