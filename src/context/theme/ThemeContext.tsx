import { createContext, useState } from "react";
import { themes } from "./themes";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(themes.light);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [selctedTheme, setSelectedTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={selctedTheme}>
      <div
        className=" absolute z-50 justify-end dropdown  top-0 right-0 dropdown-left
        "
      >
        <div tabIndex={0} role="button" className="btn m-1">
          Theme
          <svg
            width="12px"
            height="12px"
            className="h-2 w-2 fill-current opacity-60 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
        >
          <li>
            <input
              onChange={(e) => {
                setSelectedTheme(e.target.value);
              }}
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Light"
              value="light"
            />
          </li>
          <li>
            <input
              onChange={(e) => {
                setSelectedTheme(e.target.value);
              }}
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Dark"
              value="dark"
            />
          </li>
          <li>
            <input
              onChange={(e) => {
                setSelectedTheme(e.target.value);
              }}
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Cupcake"
              value="cupcake"
            />
          </li>
          <li>
            <input
              onChange={(e) => {
                setSelectedTheme(e.target.value);
              }}
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Dracula"
              value="dracula"
            />
          </li>
        </ul>
      </div>
      {children}
    </ThemeContext.Provider>
  );
};
