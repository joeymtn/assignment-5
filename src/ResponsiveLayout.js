import { useDimensions } from "./DimensionProvider"; 

const ResponsiveLayout = ({ breakPoint  = 414, renderNarrow, renderDefault}) => {
    const {width} = useDimensions() 
    return width > breakPoint ? renderDefault() : renderNarrow()
} 


export default ResponsiveLayout