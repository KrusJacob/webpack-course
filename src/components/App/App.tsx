import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./App.module.scss";

import imagePng from "@/assets/image.png";
import imageJpg from "@/assets/image.jpg";
import ImageSvg from "@/assets/image.svg";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div data-testid={"App"}>
      <Link to={"/about"}>about</Link>
      <Link to={"/shop"}>shop</Link>
      <p className={styles.title}>{count}</p>
      <button className={styles.button} onClick={() => setCount((count) => count + 1)}>
        ICN
      </button>
      <button className={styles.button} onClick={() => setCount((count) => count - 1)}>
        DEC
      </button>
      <Outlet />
      <div>
        <img width={100} src={imagePng} alt="img" />
        <img width={180} src={imageJpg} alt="img" />
        <ImageSvg width={100} height={100} />
      </div>
      {/* <About /> */}
    </div>
  );
};
