let Layout = require('../src');
let {Left, Right} = Layout;
let classnames = require('classnames');

class Demo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <p>左侧自适应，右侧固定</p>
            <Layout className="layoutDemo">
                <Left adaptive={true} className="left">左</Left>
                <Right width={190} className="right">右</Right>
            </Layout>
            <p>右侧自适应，左侧固定</p>
            <Layout className="layoutDemo">
                <Left width={190} className="left">左</Left>
                <Right adaptive={true} className="right">右</Right>
            </Layout>
            <p>左右都固定</p>
            <Layout className="layoutDemo fixed">
                <Left width={500} className="left">左</Left>
                <Right width={500} className="right">右</Right>
            </Layout>
        </div>
        
    }
}

module.exports = Demo;
