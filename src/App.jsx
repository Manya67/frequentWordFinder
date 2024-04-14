import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen w-screen px-2 py-4">
      <Header />
      <Body />
    </div>
  );
}

export default App;

// - main
//  - header
//    - name of app
//    - author name
//  - body
//    - input section
//      - fixed input box
//      - fixed setting box
//    - output section
//      - list box
//         - word with frequency
