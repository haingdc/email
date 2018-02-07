import * as React from "react";
import "./List.css";

export interface Props {
  folderItem: string;
}

export default function List(props: Props) {
  const { folderItem } = props;
  return (
    <React.Fragment>
      {/* tslint:disable:max-line-length */}
      <header>
        <svg className="hidden">
          <defs>
            <symbol id="icon-search" viewBox="0 0 14 14">
              <title>search</title>
              <path d="M13.707 12.293l-2.822-2.822c.699-.981 1.115-2.177 1.115-3.471 0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6c1.294 0 2.49-.416 3.471-1.115l2.822 2.822c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414zm-7.707-2.293c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
            </symbol>
            <symbol id="icon-cross" viewBox="0 0 12 12">
              <title>cross</title>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </symbol>
            <symbol id="icon-spinner" viewBox="0 0 16 16">
              <title>spinner</title>
              <path d="M16 6h-6l2.243-2.243c-1.133-1.133-2.64-1.757-4.243-1.757s-3.109 0.624-4.243 1.757c-1.133 1.133-1.757 2.64-1.757 4.243s0.624 3.109 1.757 4.243c1.133 1.133 2.64 1.757 4.243 1.757s3.109-0.624 4.243-1.757c0.095-0.095 0.185-0.192 0.273-0.292l1.505 1.317c-1.466 1.674-3.62 2.732-6.020 2.732-4.418 0-8-3.582-8-8s3.582-8 8-8c2.209 0 4.209 0.896 5.656 2.344l2.343-2.344v6z" />
            </symbol>
            <symbol id="icon-list" viewBox="0 0 16 16">
              <title>list</title>
              <path d="M4.576 11.136v1.728q0 0.352-0.256 0.592t-0.608 0.256h-2.848q-0.368 0-0.608-0.256t-0.256-0.592v-1.728q0-0.352 0.256-0.608t0.608-0.24h2.848q0.368 0 0.608 0.24t0.256 0.608zM4.576 6.576v1.712q0 0.352-0.256 0.608t-0.608 0.24h-2.848q-0.368 0-0.608-0.24t-0.256-0.608v-1.712q0-0.368 0.256-0.608t0.608-0.256h2.848q0.368 0 0.608 0.256t0.256 0.608zM16 11.136v1.728q0 0.352-0.256 0.592t-0.608 0.256h-8.56q-0.368 0-0.608-0.256t-0.256-0.592v-1.728q0-0.352 0.256-0.608t0.608-0.24h8.56q0.368 0 0.608 0.24t0.256 0.608zM4.576 2v1.712q0 0.352-0.256 0.608t-0.608 0.256h-2.848q-0.368 0-0.608-0.256t-0.256-0.608v-1.712q0-0.352 0.256-0.608t0.608-0.256h2.848q0.368 0 0.608 0.256t0.256 0.608zM16 6.576v1.712q0 0.352-0.256 0.608t-0.608 0.24h-8.56q-0.368 0-0.608-0.24t-0.256-0.608v-1.712q0-0.368 0.256-0.608t0.608-0.256h8.56q0.368 0 0.608 0.256t0.256 0.608zM16 2v1.712q0 0.352-0.256 0.608t-0.608 0.256h-8.56q-0.368 0-0.608-0.256t-0.256-0.608v-1.712q0-0.352 0.256-0.608t0.608-0.256h8.56q0.368 0 0.608 0.256t0.256 0.608z" />
            </symbol>
          </defs>
        </svg>
        <form id="search">
          <fieldset>
            <input type="text" />
            <span className="find-btn">
              {/* prettier-ignore */}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><use xlinkHref="#icon-search"></use></svg>
            </span>
            {/* prettier-ignore */}
            <span className="x" ><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="#icon-cross"></use>
            </svg></span>
          </fieldset>
          <button>
            {/* prettier-ignore */}
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <use xlinkHref="#icon-spinner"></use>
            </svg>
          </button>
          <button>
            {/* prettier-ignore */}
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" >
              <use xlinkHref="#icon-list"></use>
            </svg>
          </button>
        </form>
        {/* tslint:enable:max-line-length */}
      </header>
      <div className="list">
        <header>
          <h3>{folderItem}</h3>
          <div className="dropdown">
            <strong>All</strong>
            <ul>
              <a href="/unread">Unread</a>
              <a href="/flagged">Flagged</a>
              <a href="/sortByDate">Sort By Date</a>
              <a href="/sortByName">Sort By Name</a>
            </ul>
          </div>
        </header>
      </div>
    </React.Fragment>
  );
}
