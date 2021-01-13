import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      uri: 'https://practiceapi.devmountain.com/api',
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    axios.get(`https://practiceapi.devmountain.com/api/posts`).then((res) => {
      this.setState({
        posts: res.data,
      });
    });
  }

  updatePost() {}

  deletePost() {}

  createPost() {}

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">
          <Compose />
        </section>
      </div>
    );
  }
}

export default App;
