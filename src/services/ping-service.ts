import axios from 'axios';
import { ServiceDescription } from '../types';

export const ping = () => axios.get('/ping').then(res => res.data as ServiceDescription[]);
