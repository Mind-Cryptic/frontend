import Banner from "../components/Banner";
import DownloadApp from "../components/Downloadapp";
import About from "./About";
import Footer from "../components/footer";
import Puzzle from "../components/Puzzle";
import Decode from "../components/Decode";





export default function Home(){

    return (
        <>
            <Banner />
            {/* <Puzzle/> */}
            <Decode/>
            <DownloadApp/>
            <About/>
            <Footer/>
        </>
    );
};


