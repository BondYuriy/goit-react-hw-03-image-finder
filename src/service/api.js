import axios from 'axios';

const key = '14816782-eacb98039d192ea6b6a9f6855';

const getData = (search, pages) => {
  const FETCH_URL = `https://pixabay.com/api/?q=${search}&page=${pages}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios.get(FETCH_URL).then(response => response.data.hits);
};

export default { getData };
