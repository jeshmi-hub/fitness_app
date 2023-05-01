export const exerciseOptions = {
    method: 'GET',
     headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '622859381emsh809e1605f972a70p169a32jsn3bcee8711af7'
      
    }
  };

export const youtubeOptions = {
    method: 'GET',
    params: {
      id: 'UCE_M8A5yxnLfW0KghEeajjw'
    },
    headers: {
      'X-RapidAPI-Key': '622859381emsh809e1605f972a70p169a32jsn3bcee8711af7',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

