import React from "react";
import styles from "./UserStatsGraphics.module.css";

const UserStatsGraphics = ({ data }) => {
  const [graphic, setGraphic] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTotal(data.map(({ acessos }) => +acessos).reduce((a, b) => a + b));
  }, [data]);

  return (
    <section className={`${styles.graphic} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
};

export default UserStatsGraphics;
