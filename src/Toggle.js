import React from 'react';
import { connect } from 'react-redux';
import { boolean } from 'prop-types';
import { bindActionCreators } from 'redux';

import { toggleMessage } from './actions';

const bullshitSentence = "You'll be seeing this if I'm toggled on";

// eslint-disable-next-line
const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    <button onClick={toggleMessage}>Toggle Me!</button>
    {messageVisibility && <p style={{ color: '#FFF' }}>{bullshitSentence}</p>}
  </div>
);

Toggle.propTypes = () => ({
  messageVisibility: boolean.isRequired,
});

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
