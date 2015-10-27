let Item = require('./LayoutItem')

class Right extends Item {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
}

Right.displayName = "Right";
Right.defaultProps = Item.defaultProps;
Right.propTypes = Item.propTypes;
module.exports = Right;