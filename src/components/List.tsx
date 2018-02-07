import * as React from "react";

export interface Props {
  folderItem: string;
}

export default function List(props: Props) {
  const { folderItem } = props;
  return (
    <React.Fragment>
      <header>
        <form id="search">
          <fieldset>
            <input type="text" />
            <span className="find-btn">
              {/* tslint:disable:max-line-length */}
              {/* prettier-ignore */}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M13.707 12.293l-2.822-2.822c.699-.981 1.115-2.177 1.115-3.471 0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6c1.294 0 2.49-.416 3.471-1.115l2.822 2.822c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414zm-7.707-2.293c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path></svg>
            </span>
            {/* prettier-ignore */}
            <span className="x-btn" ><svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M8 6l4-4-2-2-4 4-4-4-2 2 4 4-4 4 2 2 4-4 4 4 2-2-4-4z" fill="#D5D5D5"></path></svg></span>
            {/* tslint:enable:max-line-length */}
          </fieldset>
        </form>
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
