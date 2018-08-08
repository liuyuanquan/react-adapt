import React, { Component } from 'react';
import './App.css';

const externalClassArray = [
  'wrapper-flex',
  'wrapper-float-bfc',
  'wrapper-inline-block',
  'wrapper-double-float',
  'wrapper-float',
  'wrapper-absolute',
  'wrapper-grid'
]

const externalClassTextArray = [
  `
  .wrapper-flex {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
  
  .wrapper-flex .left {
    flex-grow: 0;
  }
  
  .wrapper-flex .right {
    flex-grow: 1;
    border-color: #000000;
  }
  `,
  `
  .wrapper-float-bfc {
    overflow: hidden;
  }
  
  .wrapper-float-bfc .left {
    float: left;
  }
  
  .wrapper-float-bfc .right {
    overflow: hidden;
    border-color: blue;
  }
  `,
  `
  .wrapper-inline-block {
  
  }
  
  .wrapper-inline-block .left {
    display: inline-block;
    vertical-align: top;
  }
  
  .wrapper-inline-block .right {
    display: inline-block;
    width: calc(100% - 140px);
    box-sizing: border-box;
    border-color: green;
  }
  `,
  `
  .wrapper-double-float {
    overflow: hidden;
  }
  
  .wrapper-double-float .left {
    float: left;
  }
  
  .wrapper-double-float .right {
    float: left;
    width: calc(100% - 140px);
    box-sizing: border-box;
    border-color: #ff6c60;
  }
  `,
  `
  .wrapper-float {
    overflow: hidden;
  }
  
  .wrapper-float .left {
    float: left;
  }
  
  .wrapper-float .right {
    margin-left: 140px;
    border-color: #0FF000;
  }
  `,
  `
  .wrapper-absolute {
  
  }
  
  .wrapper-absolute .left {
    position: absolute;
  }
  
  .wrapper-absolute .right {
    margin-left: 140px;
    border-color: #0FFF00;
  }
  `,
  `
  .wrapper-grid {
    display: grid;
    grid-template-columns: 130px 1fr;
    align-items: start;
  }
  
  .wrapper-grid .left,
  .wrapper-grid .right {
    box-sizing: border-box;
  }
  
  .wrapper-grid .left {
    grid-column: 1;
  }
  
  .wrapper-grid .right {
    grid-column: 2;
  }
  `
]

class App extends Component {
  constructor(props) {
    super(props)
    this.selectRef1 = React.createRef()
    this.selectRef2 = React.createRef()

    const select = 6
    const externalClass = externalClassArray[select]
    const externalClassText = externalClassTextArray[select]
    
    this.state = {
      select,
      height: 'atuo',
      externalClass,
      externalClassText
    }

    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
  }
  handleChange1() {
    const value = this.selectRef1.current.value
    this.setState({
      select: value,
      externalClass: externalClassArray[+value],
      externalClassText: externalClassTextArray[+value]
    })
  }
  handleChange2() {
    const value = this.selectRef2.current.value
    this.setState({
      height: value
    })
  }
  render() {
    const { select, externalClass, externalClassText, height } = this.state
    const { handleChange1, handleChange2, selectRef1, selectRef2 } = this
    return (
      <div>
        <div style={{marginBottom:'20px'}}>
          选择不同的方案查看效果：
          <select value={select} onChange={handleChange1} ref={selectRef1} style={{verticalAlign: 'top'}}>
            <option value='0'>flex</option>
            <option value='1'>float+BFC</option>
            <option value='2'>双inline-block</option>
            <option value='3'>双float</option>
            <option value='4'>float+margin-left</option>
            <option value='5'>absolute+margin-left</option>
            <option value='6'>grid</option>
          </select>
          <br />
          <br />
          选择右侧的高度：
          <select value={height} onChange={handleChange2} ref={selectRef2}>
            <option value='auto'>auto</option>
            <option value='500px'>500px</option>
          </select>
        </div>
        <div className={`wrapper ${externalClass}`}>
          <div className='left'>
            左边固定宽度，高度不固定
            <br />
            <br />
            <br />
            <br />
            高度有可能会很小，也可能很大
          </div>
          <div className='right' style={{'height': height}}>
            这里的内容可能比左侧高，也可能比左侧低。宽度需要自适应。<br />
            <pre style={{backgroundColor: '#CCCCCC'}}>
              {externalClassText}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App
