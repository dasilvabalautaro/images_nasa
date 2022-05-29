import React from 'react';
import Image from './Image';
import './App.css';
import styled from 'styled-components';

class App extends React.Component {
  state = {
    isLoading: true,
    imgs: [],
    error: null,
    shouldLoadImages: false,
    setShouldLoadImages: false
  };

  getFetchImgs() {
    this.setState({
      loading: true
    }, () => {

      fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=DEMO_KEY').then(res => res.json()).then(result => this.setState({
        loading: false,
        imgs: result,
      })).catch(console.log);
    })
  }

  componentDidMount() {
    this.getFetchImgs();
  }

  render() {
    const {
      imgs,
      error,
      shouldLoadImages
    } = this.state;

    const Container = styled.div`display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
    grid-auto-rows: minmax(100px, auto);`;

    let result = [];
    const arrayImages: any[] = Object.values(imgs);

    if (arrayImages.length > 0) {
      for (const idx in arrayImages[0]) {
        const strJson = {earth_date: arrayImages[0][idx]["earth_date"], 
        img_src: arrayImages[0][idx]["img_src"]};
        result.push(JSON.stringify(strJson));
      }
    }

    return (
      <React.Fragment>
        {error ? <p> {error} </p> : null}
        <div className="App">
          <header className="App-header">
            <h1>Images Mars NASA</h1>
          </header>
          <button onClick={() => this.setState({ setShouldLoadImages: true, shouldLoadImages: true })}>Load images...</button>
          <button onClick={() => this.setState({ setShouldLoadImages: false, shouldLoadImages: false })}>Unload images...</button>

          {shouldLoadImages && (
            <Container>
              {result.map(item  => {
                const parse = JSON.parse(item)
                return <Image
                  useFade={true}
                  useFallback={true}
                  label={parse["earth_date"]}
                  imageUrl={parse["img_src"]} />
              })}
            </Container>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default App;
