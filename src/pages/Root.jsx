import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MyFooter from "../components/MyFooter";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <MyFooter />
    </>
  );
}
