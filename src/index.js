// console.log('ooook')

// 导入react  必须这么写
import React from 'react'
import ReactDom from 'react-dom'


//创建虚拟 DOM 元素
//参数一： 创建的元素的类型，字符串，表示元素的名称
//参数二： 是一个对象或 null，表示当前这个DOM元素的属性
//参数三： 子节点（包括其他 虚拟DOM 获取 文本子节点）
//参数n:   其他子节点
const myh1 = React.createElement('h1',null,'这是我的h1标签');

//* 使用ReactDom 把虚拟DOM渲染到页面上
ReactDom.render()