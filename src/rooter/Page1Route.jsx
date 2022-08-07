import { Page1 } from "../Page1";
import { Page1detailA } from "../Page1detailA";
import { Page1detailB } from "../Page1detailB";

export const Page1Route = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/Page1detailA",
    exact: false,
    children: <Page1detailA />
  },
  {
    path: "/Page1detailB",
    exact: false,
    children: <Page1detailB />
  }
];
