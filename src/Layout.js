/**
* @author: eternalsky
* @time:   10/26 2015
*/

let Left = require("./Left");
let Right = require("./Right");
let classnames = require("classnames");
let React = require('react'); 
let ReactDOM = require('react-dom');


class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    processChildren() {
        let me = this;
        let children = me.props.children;
        let leftAdaptive = false;
        let rightAdaptive = false;
        React.Children.map(children, (child) => {
            if (child && typeof child.type == 'function' && child.type.displayName == 'Left' ) {
                me.left = child;
                leftAdaptive = !!child.props.adaptive;
            }
            else if (child && typeof child.type == 'function' && child.type.displayName == 'Right') {
                me.right = child;
                rightAdaptive = !!child.props.adaptive;
            }
        });

        me.suffix = me.getSuffix(leftAdaptive, rightAdaptive);
        if (me.suffix == 'rf') {
            me.rightStyle = {
                marginLeft: -me.right.props.width
            }
            me.leftStyle = {
                paddingRight: me.right.props.width
            }
        }
        else if (me.suffix == 'lf') {
            me.rightStyle = {
                paddingLeft: me.left.props.width
            }
            me.leftStyle = {
                marginRight: -me.left.props.width
            }
        }
        return me.generateClass(me.suffix);
    }

    getSuffix(leftAdaptive, rightAdaptive) {
        let suffix = '';
        // 如果都是非自适应，则为 fixed
        if (!leftAdaptive && !rightAdaptive) {
            suffix = 'fixed';
        }
        // 左侧定宽，右侧自适应，lf
        else if (!leftAdaptive && rightAdaptive) {
            suffix = 'lf'
        }
        // 左侧自适应，右侧定宽，rf
        else if (leftAdaptive && !rightAdaptive) {
            suffix = 'rf'
        }
        else {
            console.error("left and right cannot be both adaptive, layout generation failed")
        }
        return suffix;
    }

    generateClass(suffix) {
        let me = this;
        let length = React.Children.count(me.props.children);
        let layoutCls = '';
        let leftCls = '';
        let rightCls = '';
        
        if (length == 2) {
            layoutCls = 'kuma-layout-2c';
        }
        else if (lengthCls == 3) {
            layoutCls = 'kuma-layout-3c'
        }
        else {
            console.error("children length should be 2 or 3, layout generation failed");
        }
        
        
        leftCls = layoutCls + '-left-' + suffix;
        rightCls = layoutCls + '-right-' + suffix;
        return {
            layoutCls: layoutCls,
            leftCls: leftCls,
            rightCls: rightCls
        }
    }

    renderLeft(cls) {
        let me = this;
        if (!!me.left) {
            return React.cloneElement(me.left, {
                className: classnames({
                    [me.left.props.className]: !!me.left.props.className,
                    [cls.leftCls]: true
                }),
                style: me.leftStyle || {},
                key: 'left'
            })
        }
    }

    renderRight(cls) {
        let me = this;
        if (!!me.right) {
            return React.cloneElement(me.right, {
                className: classnames({
                    [me.right.props.className]: !!me.right.props.className,
                    [cls.rightCls]: true
                }),
                style: me.rightStyle || {},
                key: 'right'
            })
        }
    }

    renderLayout(cls) {
        let me = this;
        let arr = [];
        if (me.suffix == 'lf') {
            arr.push(me.renderRight(cls));
            arr.push(me.renderLeft(cls));
        }
        else {
            arr.push(me.renderLeft(cls)); 
            arr.push(me.renderRight(cls));
        }
        return arr;
    }

    render() {
        let me = this;
        let cls = me.processChildren();
        return <div className={classnames({
            [me.props.className]: !!me.props.className,
            [cls.layoutCls]: true,
            "fn-clear": true
        })}>
            {me.renderLayout(cls)}
        </div>
    }


    
}

Layout.Left = Left;
Layout.Right = Right;
Layout.displayName = "Layout";
Layout.defaultProps = {};
Layout.propTypes = {};
module.exports = Layout;
