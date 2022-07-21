import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('test')
    // console.log(this.props.currentUser)
  }

  render() {
    return (
      <div className="home">
        <header className='header-1'>
          <div className="nav-header">
            <nav className="nav">
              <div className="main-logo">
                <img src="https://raw.githubusercontent.com/mattpettenato/MobinHood/main/pics/MobinHoodLogo_35.png" alt=""/>
              </div>
              <div className="nav-links">
                <div className="github-link-1">
                  <a href="https://github.com/mattpettenato" target="_blank">Github</a>
                  
                </div>
                <div className="linkedin-link-1">
                  <a href="https://www.linkedin.com/in/matthew-pettenato-936236123/" target="_blank">LinkedIn</a>
                </div>
                <div className="portfolio-link-1">
                  <a href="https://mattpettenato.com/" target="_blank">Portfolio</a>
                </div>
                <div className="angelco-link-1">
                  <a href="https://angel.co/u/matthew-pettenato" target="_blank">AngelList</a>
                </div>
              </div>
            </nav>
              <div className="nav-in-out">
                <div className="sign-in-1">
                  <Link to="/login" className="sign-in-link"><span>Log in</span></Link>
                </div>
                <div className="nav-in-space"></div>
                <div className="sign-up-1">
                  <Link to="/signup" className="sign-up-link"><span>Log in</span></Link>
                </div>
              </div>
          </div>
        </header>
        <div className="home-section-1">
          <div>
            <h1>Investing is simple here</h1>
            {/* <h1>simple here</h1> */}
            <h2>Start building your portfolio with just $1</h2>
            <h3>Invest in stocks, options, and ETFs at your pace and commission-free.</h3>
            <h1>Crypto</h1>
            <h2>Dive right in without the commission fees</h2>
            <h3>Other crypto exchanges charge up to 4% just to buy and sell crypto. We charge 0%. Get BTC, ETH, LTC, DOGE, and more with as little as $1.</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage; 