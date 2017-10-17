import Item from './LayoutItem';

class Left extends Item {
  constructor(props) {
    super(props);
    this.state = {};
  }
}

Left.displayName = 'Left';
Left.defaultProps = Item.defaultProps;
Left.propTypes = Item.propTypes;

export default Left;
