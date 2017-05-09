import React, { Component } from 'react';
import axios from 'axios';
import MemberDetail from './MemberDetail';

class MembersList extends Component {
  state = { members: [] };

  componentWillMount() {
    axios.get(
      'https://api.github.com/orgs/visa-innovation-sf/members',
      {
        headers: { "Authorization": "Basic amluZ3h1YW5odTpodWppbmd4dWFuMTE=" }
      }
    ).then(response => {
      this.setState({ members: response.data });
    });
  }

  renderMembers() {
    if(this.state.members.length === 0) {
      return 'Loading...';
    } else {
      return this.state.members.map(member => <MemberDetail key={member.id} member={member}>{member.login}</MemberDetail>);
    }
  }

  render() {
    return (
      <div className="list">
        {this.renderMembers()}
      </div>
    );
  }
}

export default MembersList;
