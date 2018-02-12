import * as React from "react";
import "./List.css";
import "./EmailItem.css";
import { MockEmail } from "../mock/email_list";
import { format } from "date-fns";

export interface Props {
  folderItem: string;
  emailList: MockEmail[];
}

export interface State {
  find: string;
  dropdown: "on" | "";
}

export default class List extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { find: "", dropdown: "" };
    this.setText = this.setText.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  setText(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ find: event.target.value });
  }

  toggleDropdown() {
    if (!this.state.dropdown) {
      this.setState({ dropdown: "on" });
    } else {
      this.setState({ dropdown: "" });
    }
  }

  render() {
    const { folderItem, emailList } = this.props;
    const { dropdown } = this.state;
    return (
      <React.Fragment>
        {/* tslint:disable:max-line-length */}
        <header>
          <svg className="hidden">
            <defs>
              <symbol id="icon-search" viewBox="0 0 16 16">
                <title>search</title>
                <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
              </symbol>
              <symbol id="icon-cross" viewBox="0 0 16 16">
                <title>cross</title>
                <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z" />
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
              <input
                type="text"
                value={this.state.find}
                onChange={this.setText}
              />
              <span className="find-btn">
                {/* prettier-ignore */}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><use xlinkHref="#icon-search"></use></svg>
              </span>
              {/* prettier-ignore */}
              <span className="x" >
              <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="#icon-cross"></use>
              </svg>
            </span>
            </fieldset>
            <button>
              {/* prettier-ignore */}
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <use xlinkHref="#icon-spinner"></use>
            </svg>
            </button>
            <button>
              {/* prettier-ignore */}
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" >
              <use xlinkHref="#icon-list"></use>
            </svg>
            </button>
          </form>
          {/* tslint:enable:max-line-length */}
        </header>
        <div className="list">
          <div className="main-container">
            <header>
              <h3>{folderItem}</h3>
              <div className="dropdown" onClick={this.toggleDropdown}>
                <strong>All</strong>
                <ul className={dropdown}>
                  <a href="/unread">Unread</a>
                  <a href="/flagged">Flagged</a>
                  <a href="/sortByDate">Sort By Date</a>
                  <a href="/sortByName">Sort By Name</a>
                </ul>
              </div>
            </header>
            <div className="content-wrapper">
              <div className="overflow-container">
                <div className="overflow-content">
                  {emailList ? (
                    emailList.map(({ id, email }, i) => (
                      <EmailItem
                        key={i}
                        id={id}
                        name={email.name}
                        datetime={new Date(`${email.date} ${email.time}`)}
                        title={email.title}
                      />
                    ))
                  ) : (
                    <article>There is nothing.</article>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export interface EmailItemProps {
  id: number;
  name: string;
  title: string;
  datetime: Date;
}

export function EmailItem({ id, name, title, datetime }: EmailItemProps) {
  const dateToString = format(datetime, "ddd h:mm A");
  return (
    <article>
      <div>
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
      <time>{dateToString}</time>
    </article>
  );
}
