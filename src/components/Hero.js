import { CgTwitter } from 'react-icons/cg';
import HeroImg from '../assets/nithi.jpg'
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
export default function Hero(){
    const config={
        social:{
            twitter:'',
            facebook:'',
            linkedin:'https://www.linkedin.com/in/nithisha2/'
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>

        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-hero-font '>Hii! ,<br/> I am Nithisha
            <p className='text-2xl'>I am a Full Stack Developer</p>
            
        </h1>
        <div className='flex py-10'>
            <a href = {config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
            <a href = {config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href = {config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>

       

        </div>
        </div>
        <img className='rounded-full transition-transform duration-300 hover:scale-110 md:w-1/4 h-80 ' src = {HeroImg} />
        

    </section>
}