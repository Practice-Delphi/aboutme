import React, { Component } from 'react';
import './Firsthome.css';

// connect component to redux
import { connect } from 'react-redux';

import Clock from '../clock/Clock';

class Firsthome extends Component {
  render() {
    return (
    <div className="Firsthome">
        <div className="Firsthome-leftbar">
            <div className="Firsthome-clock">
                <Clock/>
            </div>
            <div className="Firsthome-status-container">
                <div className="Firsthome-status">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA"/>
                    <h3>Status 1</h3>
                </div>
                <div className="Firsthome-status">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA"/>
                    <h3>Status 2</h3>
                </div>
                <div className="Firsthome-status">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA"/>
                    <h3>Status 3</h3>
                </div>
                <div className="Firsthome-status">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA"/>
                    <h3>Status 4</h3>
                </div>
            </div>
        </div>
        <div className="Firsthome-rightbar">
            <div className="Firsthome-rightbartitle">
                <h1>Firts Title</h1>
                <h2>Second Title</h2>
            </div>
            <div className="Firtshome-links">
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA"/></a>
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA"/></a>
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA"/></a>
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA"/></a>
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA"/></a>
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA"/><span>22k+</span></a>
            </div>
            <div className="Firtshome-videos">
                <div>
                    <img src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/video512x512.png"/>
                </div>
                <div>
                    <img src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/video512x512.png"/>
                </div>
            </div>
            <div className="Firsthome-documents">
                <div>
                    <button className="btn button-primary">Document 1</button>
                    <button className="btn button-primary">Document 2</button>
                </div>
            </div>
        </div>
    </div>
     
    );
  }
}

const mapStateToProps = state => ({
    // some props
});
const mapDispatchToProps = dispatch => ({
  // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Firsthome);