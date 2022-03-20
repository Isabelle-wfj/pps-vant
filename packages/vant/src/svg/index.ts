import { withInstall } from '../utils';
import _Svg from './svg';
import svgs from '@pps/svgs';

export const Svg = withInstall(_Svg);
svgs.svg();
export default Svg;
export type { SvgProps } from './svg';

declare module 'vue' {
  export interface GlobalComponents {
    PpsSvg: typeof Svg;
  }
}
