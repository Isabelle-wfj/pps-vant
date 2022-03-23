# Icon

### Intro

The font-based icon set that can be used via the Icon component or referenced in other components via the `icon` attribute.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Icon } from 'vant';

const app = createApp();
app.use(Icon);
```

## Usage

### Basic Usage

Use `name` prop to set icon name or icon URL.

```html
<pps-icon name="chat-o" />
```

### Using URL

You can directly passing an image URL to the `name` props.

```html
<pps-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### Show Badge

Use `dot` prop, a small red dot will be displayed in the upper right corner of the icon.

Use `badge` prop, the badge will be displayed in the upper right corner of the icon.

```html
<pps-icon name="chat-o" dot />
<pps-icon name="chat-o" badge="9" />
<pps-icon name="chat-o" badge="99+" />
```

### Icon Color

Use `color` prop to set icon color.

```html
<pps-icon name="cart-o" color="#1989fa" />
<pps-icon name="fire-o" color="#ee0a24" />
```

### Icon Size

Use `size` prop to set icon size.

```html
<!-- Using px unit by default -->
<pps-icon name="chat-o" size="40" />
<!-- Using rem unit -->
<pps-icon name="chat-o" size="3rem" />
```

### Add custom iconfont

```css
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
<pps-icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Icon name or URL | _string_ | `''` |
| dot | Whether to show red dot | _boolean_ | `false` |
| badge | Content of the badge | _number \| string_ | `''` |
| badge-props `v3.2.8` | Props of Badge，see [Badge - props](#/en-US/badge#props) | _BadgeProps_ | - |
| color | Icon color | _string_ | `inherit` |
| size | Icon size | _number \| string_ | `inherit` |
| class-prefix | ClassName prefix | _string_ | `pps-icon` |
| tag | HTML Tag of root element | _string_ | `i` |

### Events

| Event | Description                  | Arguments           |
| ----- | ---------------------------- | ------------------- |
| click | Emitted when icon is clicked | _event: MouseEvent_ |

### Types

The component exports the following type definitions:

```ts
import type { IconProps } from 'vant';
```
