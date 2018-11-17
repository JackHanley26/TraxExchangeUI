import axios from 'axios';
import {serverConfig} from "../config/config";

export const client = axios.create({
  baseURL: serverConfig.fullURL,
  headers:{}
});
