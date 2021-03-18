import { axios } from '@bundled-es-modules/axios';
import endPoints from '../constants/endpoints';
import { AUTH_TOKEN } from '../constants/misc';

export default axios.create({
  baseURL: endPoints.BASE_URL,
  headers: { Authorization: `Token ${AUTH_TOKEN}` },
});
