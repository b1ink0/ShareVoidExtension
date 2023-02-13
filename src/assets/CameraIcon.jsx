import React from "react";

function CameraIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full`}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
    >
      <path
        d="M256 157c-68.925 0-125 56.075-125 125s56.075 125 125 125 125-56.075 125-125-56.075-125-125-125zm0 210c-46.869 0-85-38.131-85-85s38.131-85 85-85 85 38.131 85 85-38.131 85-85 85z"
        data-original="#000000"
      ></path>
      <path
        d="M452 97h-73.575a6.189 6.189 0 01-5.508-3.327L352.562 50.9a16.065 16.065 0 00-.171-.349C344.512 34.791 328.67 25 311.049 25H202.376c-17.621 0-33.463 9.791-41.342 25.552-.059.116-.115.232-.171.349l-20.356 42.775A6.19 6.19 0 01135 97H60c-33.084 0-60 26.916-60 60v270c0 33.084 26.916 60 60 60h392c33.084 0 60-26.916 60-60V157c0-33.084-26.916-60-60-60zm20 329.999c0 11.028-8.972 20-20 20H60c-11.028 0-20-8.972-20-20V157c0-11.028 8.972-20 20-20h75c17.62 0 33.462-9.79 41.342-25.55.059-.116.115-.233.172-.35l20.356-42.775A6.186 6.186 0 01202.376 65h108.673a6.187 6.187 0 015.506 3.324l20.356 42.775c.057.117.113.234.172.35 7.88 15.76 23.722 25.55 41.342 25.55H452c11.028 0 20 8.972 20 20v270z"
        data-original="#000000"
      ></path>
      <path d="M392 177h40v40h-40z" data-original="#000000"></path>
    </svg>
  );
}

export default React.memo(CameraIcon);