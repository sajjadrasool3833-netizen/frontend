const API_URL = 'https://backendtest-735h.vercel.app'; // ⚠️ APNA URL YAHAN DAALEIN

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