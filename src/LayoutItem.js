let classnames = require('classnames');
let assign = require('object-assign');
let React = require('react'); 
let ReactDOM = require('react-dom');

class LayoutItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let me = this;
        let style = {};
        if (!me.props.adaptive) {
            style.width = me.props.width;
        }
        return <div className={classnames({
            [me.props.className]: !!me.props.className
        })} style={assign({}, style, me.props.style)}>
            {me.props.children}
        </div>
    }


    
}

LayoutItem.displayName = "LayoutItem";
LayoutItem.defaultProps = {
    width: 500
};
LayoutItem.propTypes = {
    width: React.PropTypes.number,
    adaptive: React.PropTypes.bool
};
module.exports = LayoutItem;