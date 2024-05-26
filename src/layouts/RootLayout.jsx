import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="layout container-fluid">
      <Outlet />
    </div>
  );
};

export default RootLayout;
