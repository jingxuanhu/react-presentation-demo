import React, { Component } from 'react';
// import axios from 'axios';

class MemberDetail extends Component {
  // state = { member: {} };
  //
  // componentWillMount() {
  //   axios.get(
  //     `https://api.github.com/users/${this.props.member}`,
  //     {
  //       headers: { "Authorization": "Basic amluZ3h1YW5odTpodWppbmd4dWFuMTE=" }
  //     }
  //   ).then(response => {
  //     this.setState({ member: response.data });
  //   });
  // }

  render() {
    const { login, avatar_url } = this.props.member;

    return (
      <div className="list-detail">
        <img src={avatar_url} />
        <p>{login}</p>
      </div>
    );
  }
}

export default MemberDetail;
