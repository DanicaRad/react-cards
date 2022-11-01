import axios from 'axios';
import {v4 as uuid} from 'uuid';
import { useState } from 'react';

const useAxios = (baseUrl, initialValue = []) => {
  const [data, setData] = useState(initialValue);
  async function addData(params) {
    console.log("params in useAxios", params);
    const getUrl = params ? `${baseUrl}/${params}` : baseUrl;
    const resp = await axios.get(getUrl);
    setData(data => [...data, {...resp.data, id: uuid()}]);
  };
  return [data, addData];
}

export default useAxios;