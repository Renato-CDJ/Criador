
import { Stage, Layer, Rect, Text } from 'react-konva';

export default function CanvasEditor(){
 return (
 <Stage width={1200} height={800}>
  <Layer>
   <Rect x={50} y={50} width={1000} height={700} draggable />
   <Text text='Área do Slide' x={80} y={80} fontSize={28}/>
  </Layer>
 </Stage>
 )
}
