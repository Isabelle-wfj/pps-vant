import { createRequire } from 'module';

const require = createRequire(import.meta.url);
export default {
  name: 'pps-svg',
  svg: () => {
    const req = require.context('./svgs', false, /\.svg$/);
    const requireAll = (requireContext) =>
      requireContext.keys().map(requireContext);
    requireAll(req);
  },
};
