const NavigationBar = () => {
    return (
        <div className='flex items-center px-[20px] h-[90px] bg-bgdark text-2xl'>
            <a href="/" className="h-full"><div className='bg-gradient-to-r from-main to-[#f57c00] text-transparent bg-clip-text text-5xl h-full flex items-center'>Ogwen.eu.org</div></a>
            <div className='w-full flex justify-evenly items-center h-full'>
                <a href="http://github.com/Ogwen123" target='_blank'>
                    My Github
                </a>
                <a href="/projects">
                    Projects
                </a>
            </div>
        </div>
    )
}

export default NavigationBar