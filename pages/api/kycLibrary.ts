import crypto from 'crypto';

import axios from 'axios';

// These parameters should be used for all requests
const SUMSUB_APP_TOKEN = process.env.SUMSUB_APP_TOKEN; 
const SUMSUB_SECRET_KEY = process.env.SUMSUB_SECRET_KEY; 
const SUMSUB_BASE_URL = 'https://api.sumsub.com'; 

axios.interceptors.request.use(createSignature, function (error) {
  return Promise.reject(error);
})

function createSignature(config: any) {

  var ts = Math.floor(Date.now() / 1000);
  const signature = crypto.createHmac('sha256',  SUMSUB_SECRET_KEY!);
  signature.update(ts + config.method.toUpperCase() + config.url);

  if (config.data instanceof FormData) {
    signature.update(config.data.getBuffer());
  } else if (config.data) {
    signature.update(config.data);
  }

  config.headers['X-App-Access-Ts'] = ts;
  config.headers['X-App-Access-Sig'] = signature.digest('hex');

  return config;
}

export async function getApplicantStatus(externalUserId: string) {
  var method = 'get';
  var url = `/resources/applicants/-;externalUserId=${externalUserId}/one`;

  var headers = {
    'Accept': 'application/json',
    'X-App-Token': SUMSUB_APP_TOKEN
  };

  const response = await axios({
    baseURL: SUMSUB_BASE_URL,
    method,
    url,
    headers,
    data: null,
  })

  return response.data;
}