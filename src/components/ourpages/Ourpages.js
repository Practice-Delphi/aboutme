import React, { Component } from 'react';
import './Ourpages.css';

// connect component to redux
import { connect } from 'react-redux';

class Ourpages extends Component{
    render(){
        return(
            <div class = "Ourpages">
                <div class = "Page TOP3">    <a href = "#" ><img class ="Imagine" src = "http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg"/></a></div>
                <div class = "Page ICORated"><a href = "#" ><img class ="Imagine" src = "http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg"/></a></div>
                <div class = "Page TracICO"> <a href = "#" ><img class ="Imagine" src = "http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg"/></a></div>
                <div class = "Page Foundico"><a href = "#" ><img class ="Imagine" src = "http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg"/></a></div>
                <div class = "Page ICOMarcs"><a href = "#" ><img class ="Imagine" src = "http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kanna-kamui-miss-kobayashis-dragon-something-2.98.jpg"/></a></div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Ourpages);