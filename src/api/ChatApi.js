const BASE_URL = 'https://qa.corider.in/assignment';

export const fetchChatMessages = async (page) => {
  try {
    const response = await fetch(`${BASE_URL}/chat?page=${page}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching chat messages:', error);
    throw error;
  }
};