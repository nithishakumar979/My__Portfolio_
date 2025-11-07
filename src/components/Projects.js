import websiteImag1 from '../assets/Chit-Fund.jpg';
import websiteImag2 from '../assets/apii.jpg';
import websiteImag3 from '../assets/chat.png';
import websiteImag4 from '../assets/Collaborative.jpg';
import websiteImag5 from '../assets/Extensions.png';
export default function Projects() {

    const config = {
            projects : [
                {
                    image : websiteImag1,
                    description: 'chit Fund system',
                    link:'https://github.com/nithishakumar979/Chit-funds-Financial-System'
                },
                {
                     image : websiteImag2,
                     description: 'api integration',
                     link: 'https://github.com/nithishakumar979/-API-INTEGRATION'
        
               },
               {
                image : websiteImag3       ,
                description:'chat application',
                link:'https://github.com/nithishakumar979/CHAT-APPLICATION'
               },
               {
                image : websiteImag4       ,
                description:'collabrative',
                link:'https://github.com/nithishakumar979/-REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR'
               },
               {
                image : websiteImag5       ,
                description:'chrome extension',
                link:'https://github.com/nithishakumar979/-CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS'
           }
        
    ]
    }
       return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
              <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
              <p>Designed and developed a responsive full-stack web app with seamless frontend–backend integration for real-time data processing.</p>
            </div>
        </div>
        <div className='w-full'>
        <div className='flex flex-col md:flex-row gap-5 px-10'>
            {config.projects.map((project) => (
                 <div className='relative' >
             <img className='h-[200px] w-[500px]' src={project.image}/>
             <div className='project-desc'>
                <p className='text-center py-5'>{project.description}</p>
                <div className='flex justify-center'>
                    <a className='btn' target='_blank' href={project.link}>view project</a>
                </div>
             </div> 
        </div>
       ))}
        
        </div>
        
        </div>


    </section>

}