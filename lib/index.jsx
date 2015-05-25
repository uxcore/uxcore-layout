/**
* @author: zhouquan.yezq
* @time:   5/21 2015
*/
import React from 'react';
const component = React.createClass({
    mixins: [],
    propTypes: {
    },
    getDefaultProps() {
        return {
            prefixCls:"uxcore-layout",
            jsxrows:0,
            mode:"H", //V-vertical 垂直 or H -horizontal 水平
            jsxcols:0,
            jsxwidth:"",
            jsxheight:""
        };
    },
    getInitialState() {
        return {
            clientWidth: 1000,
            clientHeight:1000,
        };
    },
    componentDidUpdate: function() {},
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.sync);
    },
    generatePane: function(el,index) {
        if(this.props.mode=="H") {
            var styles={
                width:"0px",
                borderRight:"0px solid #efefef",
                float:"left"
             };
            if(this.props.jsxcols[index]=="*"){
            var _width=this.state.clientWidth-this.calculWidth();
            if(_width*1 <0) {
                styles.width="0px";
            }else {
                styles.width=_width+"px";

            }
            }else {
                styles.width=this.props.jsxcols[index]+"px"
            }
        }else {
            var styles={
                width:"100%",
                borderRight:"0px solid #efefef",
                float:"left"
             };
            if(this.props.jsxrows[index]=="*"){
                var _height=this.state.clientHeight-this.calculHeight();
                if(_height*1 <0) {
                    styles.height="0px";
                }else {
                    styles.height=_height+"px";
                }
            }else {
                styles.height=this.props.jsxrows[index]+"px"
            }
        }
        
        return <div className="layout-pane" style={styles}>
            {el}
        </div>
    },
    calculHeight: function() {
        var _height=0;
        this.props.jsxrows.forEach(function(v,index) {
            if(v!=="*") {
                _height=_height*1+v*1;
            }
        });
        return _height;
    },
    calculWidth: function() {
        var _width=0;
        this.props.jsxcols.forEach(function(v,index) {
            if(v!=="*") {
                _width=_width*1+v*1;
            }
        });
        return _width;
    },
    render() {
         var props= this.props;
         if( props.jsxcols!==0) {
            props.mode="H";
            props.jsxcols= props.jsxcols.split?props.jsxcols.split(","):props.jsxcols;
         }else {
            props.mode="V";
            props.jsxrows=props.jsxrows.split?props.jsxrows.split(","):props.jsxrows;
         }
         var me=this,index=0;
         var className = `${props.prefixCls}`;
         var children= props.children;
         if (props.className) {
            className += ' ' + props.className;
         }
         return (
           <div className={className}>
                {children.map(function(child) {
                    return me.generatePane(child, index++);
                })}
           </div>
        )
    },
    componentDidMount() {
        window.addEventListener("resize", this.sync);
        this.sync();
    },
    sync: function() {
        var node=this.getDOMNode();
        this.setState({
            clientWidth: node.clientWidth,
            clientHeight:node.clientHeight
        });
    }

});
export default component;
