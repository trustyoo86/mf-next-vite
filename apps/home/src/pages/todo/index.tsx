// import { getItem } from "@/usecase/item";
import { ItemQuery } from '@/utils/query/item';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from "react";

function TodoPage() {
  const { data } = useQuery(ItemQuery, { variables: { id: 1 } });
  // const [data, setData] = useState(null);

  // const handleGetItem = async () => {
  //   const data = await getItem();
  //   console.log('data', data);
  //   setData(() => data);
  // };

  useEffect(() => {
    // handleGetItem();
  }, []);

  return (
    // @ts-ignore
    <div>{data && data.item.userId}</div>
  );
}

export default TodoPage;
