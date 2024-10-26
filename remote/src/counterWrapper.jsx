import { render } from "solid-js/web";
import Counter from "./Counter";

export default (el) => {
    if (el) {
      render(Counter, el);
    } else {
      console.error('Element passed to render does not exist');
    }
};