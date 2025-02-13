import axios from "axios";
import { config } from "../../config/config";

const audioAppApi = axios.create({ baseURL: config.SERVER_PATH });

export default audioAppApi;
