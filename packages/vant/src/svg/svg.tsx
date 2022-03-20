import { defineComponent, type ExtractPropTypes } from 'vue';

import { numericProp, createNamespace } from '../utils';

const [name, bem] = createNamespace('svg');

const svgProps = {
  name: String,
  size: numericProp,
};

export type SvgProps = ExtractPropTypes<typeof svgProps>;

export default defineComponent({
  name,

  props: svgProps,

  setup(props) {
    return () => (
      <svg class={bem('svg')} aria-hidden="true">
        <use xlinkHref={props.name} />
      </svg>
    );
  },
});
