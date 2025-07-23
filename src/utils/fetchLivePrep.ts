import axios from 'axios';

export const fetchLivePrep = async () => {
  const response = await axios.get('https://graph.microsoft.com/v1.0/me/events');
  return response.data;
};
