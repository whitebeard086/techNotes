import { Outlet } from "react-router-dom";
import { DashFooter, DashHeader } from ".";

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className="dash-container">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};
export default DashLayout;
