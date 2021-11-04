import {useDimensions} from './DimensionsProvider';
const ResponsiveLayout = ({breakPoint = 550, renderNarrow, renderDefault}) => {
  const {width} = useDimensions();
  console.log(`width > breakPoint = ${width > breakPoint}`);
  return width > breakPoint ? renderDefault() : renderNarrow();
};
export default ResponsiveLayout;
