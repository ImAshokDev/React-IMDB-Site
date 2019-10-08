import React from 'react';
import './Header.scss';

const Header = () => (
  <div className="header-section">
    <Logo />
    <Menu
      list={['movies', 'tv series', 'news', 'photos', 'events', 'trailers']}
    />
    <Search />
    <Profile />
  </div>
);

const Logo = () => (
  <div className="logo-block">
    <div>
      <h2>IMDb</h2>
    </div>
  </div>
);
// Map
const Menu = ({ list }) => (
  <div className="menu-block">
    <ul>
      {list.map((d) => (
        <li>{d}</li>
      ))}
    </ul>
  </div>
);
const Search = () => (
  <div className="search-block">
    <button type="submit">
      <i className="fa fa-search" />
    </button>
    <input
      type="text"
      placeholder="Find Movies, TV shows, Celebrities and more..."
      name="search"
    />
  </div>
);
const Profile = () => (
  <div className="profile-block">
    <div className="img" />
  </div>
);
export default Header;
