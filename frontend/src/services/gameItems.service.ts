import axios from 'axios';
import { useEffect } from 'react';

const BACKEND_URL = 'http://localhost:3000';

export async function getAllGameItems() {
  const response = await axios.get(BACKEND_URL + '/items/all').then((response: { data: any; }) => {
    return response.data;
  });
  return response;
}
