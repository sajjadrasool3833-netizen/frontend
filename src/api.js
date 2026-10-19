// ⚠️ YAHAN APNA VERCEL URL DAALEIN
const API_URL = 'https://backendtest-weld.vercel.app'; 

export const apiFetch = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  return response;
};