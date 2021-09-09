import Header from "./common/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import { FC } from 'react';

// function App() {
//     return (
        // <div className="container">
        //     <Router>
        //         <Header />
        //         <Switch>
        //             <Route path="/">
        //                 <Dashboard />
        //             </Route>
        //         </Switch>
        //     </Router>
        // </div>
//     );
// }

// export default App;

const App: FC = (props) => {
    return (
        <div className="container">
            <Router>
                <Header />
                <Switch>
                    <Route path="/">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;