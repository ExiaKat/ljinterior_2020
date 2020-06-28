import React, { Component } from 'react';

class Links extends Component {
    state = {
        showWechat: false
    }

    toggleShowWechat = () => {
        this.setState(state => ({showWechat: !state.showWechat}))
    }

    render() {
        return (
            <ul className="links">
                <li className="link wechat" onMouseEnter={this.toggleShowWechat} onMouseLeave={this.toggleShowWechat}>
                    <a href=""><img src="/images/logo/wechat.png" alt="WeChat" width="30px"/></a>
                </li>
                <li className="link">
                    <a href="https://www.facebook.com/RetailDesignSydney/"><img src="/images/logo/facebook.png" alt="Facebook" width="30px"/></a>
                </li>
                <li className="link">
                    <a href="https://www.instagram.com/lj_interior_design_sydney/"><img src="/images/logo/instgram.png" alt="Instagram" width="30px"/></a>
                </li>
                <li className="link">
                    <a href="https://www.pinterest.ca/designzlj/boards/"><img src="/images/logo/pinterest.png" alt="Pinterest" width="30px"/></a>
                </li>
                <li className="link">
                    <a href="https://www.linkedin.com/in/li-jun-zhang-b89865103/"><img src="/images/logo/linkedin.png" alt="Linkedin" width="30px"/></a>
                </li>
                {this.state.showWechat ? <div id="wechat_qr" className="wechat_qr"><img src="/images/wechat_qr.JPG" alt="Wechat QR" width="90px" /></div> : null}
            </ul>
        );
    }
}

export default Links;