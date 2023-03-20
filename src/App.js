import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="input-image">
          <label className="label-image">
            <input className="file-image" type="file" multiple accept="image" />
            <span className="input-image-text">
              Upload image to be splitted into A3 files
            </span>
          </label>
        </div>
        <input className="button-upload" type="button" value="Upload" />
      </header>
    </div>
  );
}

export default App;
