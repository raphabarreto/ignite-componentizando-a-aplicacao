import { MoviesProvider } from './hooks/useMovies';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Wrapper } from './components/Container';

import './styles/content.scss';
import './styles/global.scss';
import './styles/sidebar.scss';

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
