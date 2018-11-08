import React, { Component } from 'react';

import Header from './Header';

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contact',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
];

class App extends Component {
  render() {
    return (
      <div >
      <Header items={menu} / >
      </div>
    );
  }
}

export default App;
