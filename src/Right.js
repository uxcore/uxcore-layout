import Item from './LayoutItem';

class Right extends Item {
  constructor(props) {
    super(props);
    this.state = {};
  }
}

Right.displayName = 'Right';
Right.defaultProps = Item.defaultProps;
Right.propTypes = Item.propTypes;

export default Right;
