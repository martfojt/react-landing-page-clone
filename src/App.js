import React from 'react';
import styles from './app.module.scss';
import h1logo from './h1-logo.png';
import logo from './logo.svg';

export default function App() {
  return (
    <div>
      <header className="logo">
        <img src={logo} alt="main-logo" />

        <nav>
          <ul>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </nav>
      </header>

      <div>
        <h1>
          Your <img src={h1logo} alt="main-logo" /> knowledge assistant
        </h1>
        <p>
          Get ready-to-use answers from all your knowledge and quit manual
          organization for good.
        </p>
        <button type="button">JOIN THE WAITLIST</button>
      </div>
    </div>
  );
}
