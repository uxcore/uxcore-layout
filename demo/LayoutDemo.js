let Layout = require('../src');
let {Left, Right} = Layout;
let Menu = require('uxcore-menu');
let Form = require('uxcore-form');
let Button = require('uxcore-button');
let SubMenu = Menu.SubMenu;
let {
    InputFormField,
    FormRow,
    OtherFormField,
    DateFormField,
    CascadeSelectFormField,
    SelectFormField,
    CheckboxGroupFormField
} = Form;
let MenuItem = Menu.Item;
let Item = CheckboxGroupFormField.Item;
let classnames = require('classnames');

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1'
        };
    }

    handleFRClick(from) {
        alert(from);
    }

    componentDidMount() {
        var me = this;
        $(".J_enter").on("keydown", function(e) {
            if (e.which == 13) {
                console.log(me.refs.form.getValues());
            }
        })
    }

    componentWillUnmount() {
        $(".J_enter").off("keydown");
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    handleSearchClick() {
        var me = this;
        me.setState({
            showAdSearch: !me.state.showAdSearch
        });
    }

    handleSubmitClick() {
        var me = this;
        console.log(me.refs.form.getValues());
    }

    handleResetClick() {
        var me = this;
        me.refs.form.resetValues();
    }

    render() {
        let me = this;
        return <div>
            <p>左侧自适应，右侧固定</p>
            <Layout className="layoutDemo">
                <Left adaptive={true} className="left"><span onClick={me.handleFRClick.bind(me, "left")}>左</span></Left>
                <Right width={190} className="right"><span onClick={me.handleFRClick.bind(me, "right")}>右</span></Right>
            </Layout>
            <p>右侧自适应，左侧固定</p>
            <Layout className="layoutDemo">
                <Left width={190} className="left"><span onClick={me.handleFRClick.bind(me, "left")}>左</span></Left>
                <Right adaptive={true} className="right"><span onClick={me.handleFRClick.bind(me, "right")}>右</span></Right>
            </Layout>
            <p>左右都固定</p>
            <Layout className="layoutDemo fixed">
                <Left width={500} className="left"><span onClick={me.handleFRClick.bind(me, "left")}>左</span></Left>
                <Right width={500} className="right"><span onClick={me.handleFRClick.bind(me, "right")}>右</span></Right>
            </Layout>
            <p>实际场景</p>
            <Layout className="demo4">
                <Left width={190}>
                     <Menu onClick={this.handleClick.bind(this)}
                      style={{width:190}}
                      defaultOpenKeys={['sub1']}
                      selectedKeys={[this.state.current]}
                      mode="inline">
                      <SubMenu key="sub1" title={<span><i className="kuma-icon kuma-icon-email"></i><span>导航一</span></span>}>
                          <Menu.Item key="1">选项1</Menu.Item>
                          <Menu.Item key="2">选项2</Menu.Item>
                          <Menu.Item key="3">选项3</Menu.Item>
                          <Menu.Item key="4">选项4</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub2" title={<span><i className="kuma-icon kuma-icon-wangwang"></i><span>导航二</span></span>}>
                          <Menu.Item key="5">选项5</Menu.Item>
                          <Menu.Item key="6">选项6</Menu.Item>
                          <SubMenu key="sub3" title="三级导航">
                              <Menu.Item key="7">选项7</Menu.Item>
                              <Menu.Item key="8">选项8</Menu.Item>
                          </SubMenu>
                      </SubMenu>
                      <SubMenu key="sub4" title={<span><i className="kuma-icon kuma-icon-boss"></i><span>导航三</span></span>}>
                          <Menu.Item key="9">选项9</Menu.Item>
                          <Menu.Item key="10">选项10</Menu.Item>
                          <Menu.Item key="11">选项11</Menu.Item>
                          <Menu.Item key="12">选项12</Menu.Item>
                      </SubMenu>
                  </Menu>
                </Left>
                <Right adaptive={true}>
                    <Form ref="form">
                        <FormRow>
                            <InputFormField className="J_enter" jsxplaceholder="输入 xxxx 进行查询" jsxshowLabel={false} jsxname="search" />
                            <OtherFormField jsxflex={2}>
                                <div className="demo-updown" onClick={me.handleSearchClick.bind(me)}>
                                    <a href="javascript:;">高级查询</a><i className={classnames({
                                        "kuma-icon": true,
                                        "kuma-icon-title-up": me.state.showAdSearch,
                                        "kuma-icon-title-down": !me.state.showAdSearch
                                    })}></i>
                                </div>                            
                            </OtherFormField>
                        </FormRow>
                        <FormRow className={classnames({
                            "f-dn": !me.state.showAdSearch
                        })}>
                            <InputFormField jsxlabel="名称" jsxname="input1"/>
                            <DateFormField jsxlabel="名称" jsxname="date1" jsxtype="cascade" style={{
                                width: 100
                            }}/>
                        </FormRow>
                        <FormRow className={classnames({
                            "f-dn": !me.state.showAdSearch
                        })}>
                            <SelectFormField className="select2" 
                                             jsxfetchUrl="http://suggest.taobao.com/sug"
                                             jsxmultiple={true}
                                             jsxname="select2"
                                             jsxlabel="名称"
                                             afterFetch={(obj) => {
                                                let data = {};
                                                obj.result.forEach((item, index) => {
                                                    data[item[1]] = item[0];
                                                });
                                                console.log(data);
                                                return data;
                                             }}/>
                            <CheckboxGroupFormField jsxlabel="名称" jsxname="check1">
                                <Item value="1" text="名称"/>
                                <Item value="2" text="名称"/>
                                <Item value="3" text="名称"/>
                            </CheckboxGroupFormField>
                        </FormRow>
                        <FormRow className={classnames({
                            "f-dn": !me.state.showAdSearch
                        })}>
                            <OtherFormField className="button1">
                                <Button type="primary" onClick={me.handleSubmitClick.bind(me)}>提交</Button>
                                <Button type="secondary" onClick={me.handleResetClick.bind(me)}>重置</Button>
                            </OtherFormField>
                        </FormRow>
                    </Form>
                </Right>
            </Layout>
        </div>
        
    }
}

module.exports = Demo;
