// import {useDimensions} from './DimensionProvider';

const ResponsiveLayout = ({breakPoint = 414, renderNarrow, renderDefault}) => {
  // const width = useDimensions();
  const width = 500;
  return width > breakPoint ? renderDefault() : renderNarrow();
};


export default ResponsiveLayout;
