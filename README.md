## uxcore-layout


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url]
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-layout.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-layout
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-layout.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-layout
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-layout.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-layout?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-layout.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-layout
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-layout.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-layout#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-layout.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-layout.svg
[sauce-url]: https://saucelabs.com/u/uxcore


#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-layout
$ cd uxcore-layout
$ npm install
$ npm start
```

## Usage

```javascript
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
            <Layout className="layoutDemo">
                <Left width={500} className="left">左</Left>
                <Right width={500} className="right">右</Right>
            </Layout>
        </div>
        
    }
}

module.exports = Demo;
```

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|className|string|optional|""|加入额外的类名，在使用 kuma 的基础上进行适当的定制时会用得到|


## 子组件

### Left/Right

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|className|string|optional| |加入额外的类名，在使用 kuma 的基础上进行适当的定制时会用得到|
|width|number|optional|500|布局块的宽度，仅在定宽时起作用|
|adaptive|boolean|optional| |是否为自适应，未设定 adaptive=true 的一侧，则为定宽，不可两者皆为自适应|


