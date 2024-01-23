import React from 'react';
import styles from './app.module.scss';
import h1logo from './h1-logo.png';
import index from './index.scss';
import logo from './logo.svg';

export default function App() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
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
          Your <img src={h1logo} className={styles.ailogo} alt="ai-logo" />{' '}
          knowledge assistant
        </h1>
        <p>
          Get ready-to-use answers from all your knowledge <br /> and quit
          manual organization for good.
        </p>
        <button className={styles.bluebutton} type="button">
          JOIN THE WAITLIST
        </button>
      </div>
      <div>
        <img
          src="https://assets-global.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2.png"
          loading="eager"
          sizes="(max-width: 479px) 92vw, 90vw"
          srcSet="https://assets-global.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2-p-500.png 500w, https://assets-global.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2-p-800.png 800w, https://assets-global.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2-p-1080.png 1080w, https://assets-global.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2-p-1600.png 1600w, https://assets-global.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2-p-2000.png 2000w, https://assets-global.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2.png 3270w"
          alt="laptop-logo"
        />
      </div>
      <div>
        <p>
          Loved by professionals from <br />
          companies such as
        </p>
      </div>
      <div>logo logo logo logo</div>
      <div>logo logo logo logo</div>

      <hr />
      <div>
        <h2>
          Remember anything. <br />
          Just ask a question.
        </h2>
        <p>
          Gems is the shortcut for all your knowledge. Just summon Gems and ask
          any question.
        </p>
      </div>
    </div>
  );
}
