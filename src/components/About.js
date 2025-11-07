import AboutImag from '../assets/about.png';
export default function About(){
   
    return <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5  md:w-1/4'>
        <img src={AboutImag} />
        </div>
        <div className='md:W-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>👋 Hi, I’m Nithisha, a passionate Full Stack Developer who loves building dynamic and responsive web applications.</p>
            <p className='pb-5'>I enjoy working across the entire development cycle — from designing intuitive front-end interfaces to developing powerful back-end systems.</p>
            <p className='pb-5'>My skill set includes technologies like HTML, CSS, JavaScript, React, Node.js, and Python (Flask). I focus on creating efficient, scalable, and user-friendly web solutions.</p>
            <p className='pb-5'>I’m driven by curiosity and continuous learning, always exploring new tools and frameworks to improve my development workflow.</p>
            <p className='pb-5'>My goal is to design and develop applications that are not only functional but also deliver a seamless user experience.</p>
            </div>

        </div>

    </section>
}