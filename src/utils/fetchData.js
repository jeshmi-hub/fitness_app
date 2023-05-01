export const exerciseOptions = {
    method: 'GET',
     headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '622859381emsh809e1605f972a70p169a32jsn3bcee8711af7'
      
    }
  };

export const fetchData = async(url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}