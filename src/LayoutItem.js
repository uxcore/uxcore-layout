const classnames = require('classnames');
const assign = require('object-assign');
const React = require('react');
const PropTypes = require('prop-types');

class LayoutItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const me = this;
    const style = {};
    if (!me.props.adaptive) {
      style.width = me.props.width;
    }
    return (
      <div
        className={classnames({
          [me.props.className]: !!me.props.className,
        })}
        style={assign({}, style, me.props.style)}
      >
          {me.props.children}
      </div>
    );
  }
}

LayoutItem.displayName = 'LayoutItem';
LayoutItem.defaultProps = {
  width: 500,
};
LayoutItem.propTypes = {
  width: PropTypes.number,
  adaptive: PropTypes.bool,
};

module.exports = LayoutItem;
