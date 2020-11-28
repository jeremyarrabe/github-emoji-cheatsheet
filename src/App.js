import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './App.module.css';

import { github } from './api/data';
import Card from './components/Card';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      data: [],
      isCopied: false,
    };
  }

  componentDidMount() {
    this.setState({
      data: github.types,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { isCopied } = this.state;
    if (isCopied) {
      this.turnOffCopy = setTimeout(() => {
        this.setState(() => ({ isCopied: false }));
      }, 1500);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.turnOffCopy);
  }

  search = (e) => {
    this.setState({
      searchVal: e.target.value,
    });
  };

  copyToClipBoard = () => {
    console.log(1);
    this.setState({
      isCopied: true,
    });
  };

  viewTypes = () => {
    const { searchVal, data } = this.state;
    if (searchVal) {
      return data
        .filter((res) => {
          return res.title.toLowerCase().indexOf(searchVal.toLocaleLowerCase()) !== -1;
        })
        .map((type, i) => {
          return (
            <CopyToClipboard
              key={i}
              text={type.type}
              onCopy={() => this.setState({ isCopied: true })}
            >
              <Card
                title={type.title}
                symbol={type.symbol}
                type={type.type}
                onClick={() => console.log(`copied ${type.type}`)}
              />
            </CopyToClipboard>
          );
        });
    }
    return data.map((type, i) => {
      return (
        <CopyToClipboard
          key={i}
          text={type.type}
          onCopy={() => this.setState({ isCopied: true })}
        >
          <Card
            title={type.title}
            symbol={type.symbol}
            type={type.type}
            onClick={() => console.log(`copied ${type.type}`)}
          />
        </CopyToClipboard>
      );
    });
  };

  render() {
    const { searchVal, isCopied } = this.state;
    return (
      <>
        <motion.div animate={{ opacity: isCopied ? 1 : 0 }} className={styles.showCopied}>
          <p>Copied to clipboard</p>
        </motion.div>
        <div className={styles.container}>
          <div className={styles.navigation}>
            <nav>
              <h1 className={styles.title}>GitHub Emojis Cheat Sheet</h1>
              <svg className={styles.githubIcon} viewBox="0 0 36 35.109">
                <path
                  id="Icon_simple-github"
                  data-name="Icon simple-github"
                  d="M18,.445a18,18,0,0,0-5.693,35.077c.9.169,1.23-.387,1.23-.866,0-.428-.015-1.56-.023-3.06-5.007,1.086-6.063-2.415-6.063-2.415a4.771,4.771,0,0,0-2-2.632c-1.63-1.116.126-1.094.126-1.094A3.774,3.774,0,0,1,8.333,27.31a3.836,3.836,0,0,0,5.243,1.5,3.838,3.838,0,0,1,1.14-2.407c-4-.45-8.2-2-8.2-8.9a6.944,6.944,0,0,1,1.852-4.83,6.4,6.4,0,0,1,.158-4.764s1.507-.483,4.95,1.845a16.97,16.97,0,0,1,9,0C25.9,7.428,27.4,7.911,27.4,7.911a6.577,6.577,0,0,1,.18,4.764,6.973,6.973,0,0,1,1.845,4.83c0,6.915-4.208,8.438-8.212,8.88a4.309,4.309,0,0,1,1.215,3.33c0,2.409-.022,4.344-.022,4.929,0,.472.315,1.035,1.237.855A17.978,17.978,0,0,0,18,.445"
                  transform="translate(0 -0.445)"
                  fill="#fff"
                />
              </svg>
            </nav>
            <div className={styles.search}>
              <svg className={styles.searchIcon} viewBox="0 0 17.621 17.621">
                <g
                  id="Icon_feather-search"
                  data-name="Icon feather-search"
                  transform="translate(1.5 1.5)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M16.944,10.722A6.222,6.222,0,1,1,10.722,4.5,6.222,6.222,0,0,1,16.944,10.722Z"
                    transform="translate(-4.5 -4.5)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M28.358,28.358l-3.383-3.383"
                    transform="translate(-14.358 -14.358)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </g>
              </svg>
              <input
                type="text"
                placeholder="search"
                value={searchVal}
                onChange={this.search}
              />
            </div>
          </div>
          <main>{this.viewTypes()}</main>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
