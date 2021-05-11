import React, { useCallback } from 'react';
import { Layout } from 'components/Layout';
import { HomeScreen } from 'components/HomeScreen';
import { Canvas } from '@react-three/fiber';
import { useSpring } from 'react-spring/three';
import { Stars } from '../src/components/Stars';
import classes from './index.module.css';

const Home = () => (
  // This tiny spring right here controlls all(!) the animations, one for scroll, the other for mouse movement ...
  // const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }));
  // const onMouseMove = useCallback(
  //   ({ clientX: x, clientY: y }) =>
  //     set({ mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
  //   []
  // );
  // const onScroll = useCallback((e) => set({ top: e.target.scrollTop }), []);

  <Layout>
    <HomeScreen />
    {/* <Canvas className={classes.canvas}> */}
    {/*  <Stars /> */}
    {/* </Canvas> */}
    {/* <div className="scroll-container" onScroll={onScroll} onMouseMove={onMouseMove}> */}
    {/*  <div style={{ height: '525vh' }} /> */}
    {/* </div> */}
  </Layout>
);
export default Home;
