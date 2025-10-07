import React from "react";

const LoggedLayout = ({ children }) => {
  return (
    <div className="flex-1 grid grid-row-[48px_1fr_48px]">
      <header className="text-white">Kode</header>
      <div className="">{children}</div>
      <footer className="text-white">footer</footer>
    </div>
  );
};

export default LoggedLayout;
