
import { useState } from 'react';
import { Stage, Layer, Rect, Circle, Arrow, Text } from 'react-konva';

export default function App(){
 const [items,setItems] = useState<any[]>([]);

 const add=(type:string)=>setItems([...items,{type,id:Date.now()+Math.random()}]);

 const pasteImage=(e:any)=>{
  const itemsClipboard=e.clipboardData?.items||[];
  for(const item of itemsClipboard){
   if(item.type.indexOf('image')!==-1){
    const file=item.getAsFile();
    const url=URL.createObjectURL(file);
    setItems(prev=>[...prev,{type:'image',url,id:Date.now()}]);
   }
  }
 };

 return (
 <div onPaste={pasteImage} style={{height:'100vh'}}>
  <div style={{padding:10,borderBottom:'1px solid #ccc'}}>
   <button onClick={()=>add('rect')}>Retângulo</button>
   <button onClick={()=>add('circle')}>Círculo</button>
   <button onClick={()=>add('arrow')}>Seta</button>
   <button onClick={()=>add('text')}>Texto</button>
  </div>

  <Stage width={1400} height={850}>
   <Layer>
    {items.map((i:any,index:number)=>{
      if(i.type==='rect') return <Rect key={index} x={80} y={80} width={180} height={80} draggable />;
      if(i.type==='circle') return <Circle key={index} x={300} y={200} radius={50} draggable />;
      if(i.type==='arrow') return <Arrow key={index} points={[100,100,300,200]} draggable />;
      if(i.type==='text') return <Text key={index} text="Novo Texto" x={100} y={50} draggable />;
      return null;
    })}
   </Layer>
  </Stage>
 </div>
 )
}
