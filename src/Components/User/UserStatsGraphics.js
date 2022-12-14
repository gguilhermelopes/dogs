import React from "react";
import styles from "./UserStatsGraphics.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphics = ({ data }) => {
  const [graphic, setGraphic] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (data.length) {
      const graphData = data.map((item) => {
        return {
          x: item.title,
          y: +item.acessos,
        };
      });
      setTotal(data.map(({ acessos }) => +acessos).reduce((a, b) => a + b));
      setGraphic(graphData);
    }
  }, [data]);

  return (
    <>
      {data.length ? (
        <section className={`${styles.graphic} animeLeft`}>
          <div className={styles.total}>
            <p>Acessos: {total}</p>
          </div>
          <div>
            <VictoryPie
              data={graphic}
              innerRadius={50}
              padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
              style={{
                data: {
                  fillOpacity: 0.9,
                  stroke: "#fff",
                  strokeWidth: 2,
                },
                labels: {
                  fontSize: 14,
                  fill: "#333",
                },
              }}
            />
          </div>
          <div>
            <VictoryChart>
              <VictoryBar alignment="start" data={graphic} />
            </VictoryChart>
          </div>
        </section>
      ) : (
        <p
          style={{
            margin: "3rem",
            textAlign: "center",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Nenhuma foto postada.
        </p>
      )}
    </>
  );
};

export default UserStatsGraphics;
