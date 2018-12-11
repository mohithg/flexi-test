import React from 'react';

class Flexi extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit() {
    // Replace data with the form data
    const data = {};
    this.props.onSubmit(data); // dont edit this line
  }

  // Do your stuff here!

}

export default Flexi;