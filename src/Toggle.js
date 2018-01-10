import React from 'react';
import { connect } from 'react-redux';
import { boolean } from 'prop-types';

const bullshitSentence = "You'll be seeing this if I'm toggled on";

const Toggle = ({ messageVisibility }) => (
  <div>
    {messageVisibility && <p style={{ color: '#FFF' }}>{bullshitSentence}</p>}
    <button onClick={() => console.log(`toggle: ${messageVisibility}`)}>
      Toggle Me!
    </button>
  </div>
);

Toggle.propTypes = () => ({
  messageVisibility: boolean.isRequired,
});

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

export default connect(mapStateToProps)(Toggle);
