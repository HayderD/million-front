const config = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
};

if (!config.API_BASE_URL) {
  throw new Error('REACT_APP_API_BASE_URL no está definida en el archivo .env');
}

export default config;