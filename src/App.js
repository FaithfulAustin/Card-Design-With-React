import Info from "./Components/Info";
import About from "./Components/About";
import Interest from "./Components/Interest";
import Footer from "./Components/Footer";
import "./index.css"
function App(){
return(
    <div className="card">
        <Info/>
        <About/>
        <Interest/>
        <Footer/>
    </div>
)
}
export default App;