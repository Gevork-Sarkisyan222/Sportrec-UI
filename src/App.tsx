import React from 'react';
import './App.scss';
import Header from './components/Header';
import News from './components/News';
import Content from './components/Content';
import { useMediaQuery } from 'react-responsive';

// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import HomeIcon from '@mui/icons-material/Home';

function App() {
  const isSmallDevice = useMediaQuery({
    query: '(max-width: 1270px)',
  });

  return (
    <div className="App">
      <Header />
      {!isSmallDevice && (
        <div className="center-content">
          <div className="container">
            <News />
          </div>
        </div>
      )}

      <Content />
    </div>
  );
}

export default App;
