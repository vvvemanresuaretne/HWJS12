import axios from 'axios';

const API_KEY = '49762011-8c0412d09af011351a5757fc9';

export async function getImagesByQuery(query, page) {
  try {
    const response = await axios('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні зображень:', error.message);
    throw error;
  }
}