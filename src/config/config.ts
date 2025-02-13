const SERVER_PATH = import.meta.env.VITE_SERVER_PATH;

if (!SERVER_PATH) {
  throw new Error('VITE_SERVER_PATH is not defined in .env');
}

export const config = {
  SERVER_PATH,
};
