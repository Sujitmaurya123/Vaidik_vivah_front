import Ai from '../../components/home/Ai'
// import Search from '../../components/home/Search'
import Archive from '../../components/home/Archive'
// import YouTube from '../../components/home/YouTube'
// import Navbar from '../../components/home/Navbar'
import GetApp from '../../components/home/GetApp'
import Hero from '../../components/home/Hero'
// import Details from '../../components/home/Details'
// import Stories from '../../components/home/Stories'
import Matching from '../../components/home/Matching'
import Feature from '../../components/home/Feature'
import MembershipPlans from '../../components/home/MembershipPlans'
// import Pre from '../../components/home/Pre'
import "./home.css"
import WeddingSlider from '../../components/home/WeddingSlider'
const Home = () => {
    return (
        <div>
            <Hero />
            <Archive />
            <Matching />
            {/* <YouTube /> */}
            {/* <Stories /> */}
            {/* <Pre/> */}
            <MembershipPlans />
            <Feature />
            <WeddingSlider/>
            <Ai />
            <GetApp />
            {/* <Search /> */}
            {/* <Details /> */}


        </div>
    )
}

export default Home
