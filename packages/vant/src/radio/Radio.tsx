import { defineComponent, type ExtractPropTypes } from 'vue';

// Utils
import { pick, createNamespace, extend, makeStringProp } from '../utils';
import { RADIO_KEY } from '../radio-group/RadioGroup';

// Composables
import { useParent } from '@vant/use';

// Components
import Checker, {
  checkerProps,
  CheckerShape,
  CheckerLabelPosition,
} from '../checkbox/Checker';

export type RadioShape = CheckerShape;
export type RadioLabelPosition = CheckerLabelPosition;
export type RadioProps = ExtractPropTypes<typeof checkerProps>;

const [name, bem] = createNamespace('radio');

export default defineComponent({
  name,

  props: extend({}, checkerProps, {
    shape: makeStringProp<RadioShape>('round'),
  }),

  emits: ['update:modelValue'],

  setup(props, { emit, slots }) {
    const { parent } = useParent(RADIO_KEY);

    const checked = () => {
      const value = parent ? parent.props.modelValue : props.modelValue;
      return value === props.name;
    };

    const toggle = () => {
      if (parent) {
        parent.updateValue(props.name);
      } else {
        emit('update:modelValue', props.name);
      }
    };

    return () => (
      <Checker
        v-slots={pick(slots, ['default', 'icon'])}
        bem={bem}
        role="radio"
        parent={parent}
        checked={checked()}
        onToggle={toggle}
        {...props}
      />
    );
  },
});
