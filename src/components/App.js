import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'

function App(props) {
  const [images, setImages] = useState([])

  async function handleSearchSubmit(text){
    let res = await unsplash.get('/search/photos', {
      params: { query: text },
    })
    setImages(res.data.results)
  }

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={handleSearchSubmit} />
      Found: {images.length} images
      <ImageList images={images} />
    </div>
  );
};

export default App;