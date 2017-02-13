# tab.js
### 一个简易的选项卡插件

  一个简易的选显卡插件，可经过简单的配置，完成一些基本的选项卡功能。<br>
  
* 基本选项卡切换功能
* 自动切换(时间可配置)
* 可配置触发切换的事件(click, mouseover, etc..)
* 指定当鼠标放在指定元素上时，选项卡停止自动播放，鼠标移开继续播放
* 回调函数callback，当选项卡进行切换时调用

----

#### 基本配置
```javascript
tab({
    tabs : aTabs,
    contents : aCnts,
    tabAfter : 'active',
    conAfter : 'active',
    event : 'mouseover',
    autoPlay : false,
    time : 2000,
    stopElem : stopElem,
    callback : function ( index ){
        //  index为当选项卡发生变化时，当前内容的索引值
    }
});
```
#### tabs[elements] 原生js获取到选项卡选项的元素集合
#### contents[elements] 原生js获取到选项卡内容的元素集合
#### tabAfter[String] 选项卡选项在选中后的类名
#### conAfter[String] 选项卡内容在选中后的样类名
#### event[String] 触发选项卡的事件名称（不需要加on）
#### autoPlay[Boolean] 选项卡是否自动播放
#### time[Number] 选项卡切换时间（单位为ms，autoPlay为true时可设置）
#### stopElem[elements] 当鼠标在此元素悬停时，选项卡停止播放、当鼠标离开此元素时，选显卡继续播放（autoPlay为true时可设置）
#### callback[Function] 选项卡切换的回调函数，当选项卡切换时调用此方法，形参为当前选项的索引值
