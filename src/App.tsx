import { MoviesProvider } from './hooks/useMovies';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Wrapper } from './components/Container';

import './styles/global.scss';

export function App() {
  return (
    <MoviesProvider>
      <Wrapper>
        <SideBar />
        <Content />
      </Wrapper>
    </MoviesProvider>
  );
}
