import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import RankItemsContainer from "./components/RankItemsContainer";
import MovieImageArr from "./components/MovieImages";
import AlbumImageArr from "./components/AlbumImages";
import Profiles from "./components/Profiles";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/rank-movies',
      element: <RankItemsContainer dataType={1} imgArr={MovieImageArr} />
  },
  {
    path: '/rank-albums',
      element: <RankItemsContainer dataType={2} imgArr={AlbumImageArr} />
  },
  {
    path: '/profiles',
    element: <Profiles />
  }
];

export default AppRoutes;
