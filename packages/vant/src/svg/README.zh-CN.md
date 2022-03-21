# Svg 彩色图标

### 介绍

### 引入

```js
import { createApp } from 'vue';
import { Svg } from 'svg';

const app = createApp();
app.use(Svg);
```

## 代码演示

### 基础用法

```html
<pps-svg name="color-fial" />
```

```html
<van-icon name="chat-o" dot />
<van-icon name="chat-o" badge="9" />
<van-icon name="chat-o" badge="99+" />
```

### 图标颜色

通过 `color` 属性来设置图标的颜色。

```html
<van-icon name="cart-o" color="#1989fa" />
<van-icon name="fire-o" color="#ee0a24" />
```

### 图标大小

通过 `size` 属性来设置图标的尺寸大小，可以指定任意 CSS 单位。

```html
<!-- 不指定单位，默认使用 px -->
<van-icon name="chat-o" size="40" />
<!-- 指定使用 rem 单位 -->
<van-icon name="chat-o" size="3rem" />
```

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<!-- 通过 class-prefix 指定类名为 my-icon -->
<van-icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| badge-props `v3.2.8` | 自定义徽标的属性，传入的对象会被透传给 [Badge 组件的 props](#/zh-CN/badge#props) | _BadgeProps_ | - |
| color | 图标颜色 | _string_ | `inherit` |
| size | 图标大小，如 `20px` `2em`，默认单位为 `px` | _number \| string_ | `inherit` |
| class-prefix | 类名前缀，用于使用自定义图标 | _string_ | `van-icon` |
| tag | 根节点对应的 HTML 标签名 | _string_ | `i` |

### Events

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击图标时触发 | _event: MouseEvent_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { IconProps } from 'vant';
```
