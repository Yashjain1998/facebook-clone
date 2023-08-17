import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { useState } from "react";
import Login from "./Login";
function App() {
  const [sigin, checksigin] = useState(true);
  return (
    <div className="App">
       {(sigin) ? (
        <Login login={checksigin} state={sigin} />
      ) : (
        <>
          <Header />
          <div className="app_body">
            {/* SideBar */}
            <Sidebar />
            {/* Feed */}
             <Feed />
             {/* Widgets */}
             <Widgets />
           </div>
        </>
      )}
    </div>
  );
}

export default App;
