import React from "react";
import Head from "../Interface Elements/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../Interface Elements/Loading";
import Error from "../Interface Elements/Error";
const UserStatsGraphics = React.lazy(() => import("./UserStatsGraphics"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas da conta" />
        <UserStatsGraphics data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
