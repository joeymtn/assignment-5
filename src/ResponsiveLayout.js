import {useDimensions} from './DimensionsProvider';
const ResponsiveLayout = ({breakPoint = 700, renderNarrow, renderDefault}) => {
  const {width} = useDimensions();
  return width > breakPoint ? renderDefault() : renderNarrow();
};
export default ResponsiveLayout;
