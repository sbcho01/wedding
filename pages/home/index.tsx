import LayoutMainPage from '@/components/layouts/LayoutMainPage'
import HomeMusic from '@/components/pages/home/HomeMusic'
import HomeMain from '@/components/pages/home/HomeMain'

const Home = () => {
    return (
        <LayoutMainPage>
            <div className='flex flex-col min-h-screen'>
                <HomeMusic />
                <HomeMain />
                <div>33</div>
                <div>44</div>
                <div>55</div>
            </div>
        </LayoutMainPage>
    )
}
export default Home
