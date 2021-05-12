import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { HomeScreen } from 'components/HomeScreen';
import { ProgramScreen } from 'components/ProgramScreen';
import { FaqScreen } from 'components/FaqScreen';

const Home: React.FC = () => {
  // This tiny spring right here controlls all(!) the animations, one for scroll, the other for mouse movement ...
  // const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }));
  // const onMouseMove = useCallback(
  //   ({ clientX: x, clientY: y }) =>
  //     set({ mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
  //   []
  // );
  // const onScroll = useCallback((e) => set({ top: e.target.scrollTop }), []);


  return <ReactFullpage
    scrollingSpeed={1000}
    navigation
    render={({ fullpageApi }) => {
      console.log(fullpageApi);
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <HomeScreen fullpageApi={fullpageApi} />
          </div>
          <div className="section">
            <ProgramScreen fullpageApi={fullpageApi} />
          </div>
          <div className="section">
            <FaqScreen fullpageApi={fullpageApi} />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
}

export default Home;
