
import Toolbar from './components/Toolbar';
import CanvasEditor from './components/CanvasEditor';
import SlideNavigator from './components/SlideNavigator';

export default function App(){
 return (
  <div style={{display:'grid',gridTemplateColumns:'260px 1fr 280px',height:'100vh'}}>
   <Toolbar/>
   <CanvasEditor/>
   <SlideNavigator/>
  </div>
 )
}
