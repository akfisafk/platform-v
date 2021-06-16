import './sass/App.scss';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { RocketModel, RocketInfo } from './components';
import { Archive, Landing, MissionFile, Upcoming } from './pages';
import { Nav } from './components/nav/Nav';


function App() {
  const location = useLocation();
  
  return (
    <>
      <Nav />
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Landing} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/upcoming/:id" render={({ match }) => (
            <MissionFile id={match.params.id} />
          )} />
          <Route exact path="/archive" component={Archive} />
          <Route exact path="/visualizer">
            <Suspense fallback={null}>
              <RocketInfo />
                <Canvas
                  style={{ height: '600vh', width: '100%' }}>
                {/* <CameraControls/> */}
                  <RocketModel />
                </Canvas>
            </Suspense>
          </Route>
          </Switch>
        </AnimatePresence>
    </>
  );
}

export default App;
