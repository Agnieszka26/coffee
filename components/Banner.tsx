import { ReactChild, ReactFragment, ReactPortal } from "react";
import styles from "../styles/Banner.module.css";

const Banner = (props: {
  buttonText:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  handleOnClick: any;
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {" "}
        <span className={styles.white}> Coffee</span> <span> Connoisseur </span>{" "}
      </h1>
      <p className={styles.subtitle}> Discover your local coffe shop! </p>
      <button className={styles.button} onClick={props.handleOnClick}>
        {" "}
        {props.buttonText}
      </button>
    </div>
  );
};
export default Banner;
