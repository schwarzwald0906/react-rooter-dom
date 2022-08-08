import { Page2 } from "../Page2";
import { URLparameter } from "../URLParameter";

export const Page2Route = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <URLparameter />
  }
];
