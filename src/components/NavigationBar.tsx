const NavigationBar = () => {
    return (
        <div className='flex items-center px-[20px] h-[90px] bg-bgdark text-2xl justify-between'>
            <a href="/" className="h-[90px] w-[20%]"><div className='title bg-gradient-to-r from-main to-secondary text-transparent bg-clip-text text-4xl h-[90px] flex items-center'> <span>{">"}</span>&nbsp;Ogwen.eu.org</div></a>
            <div className='w-[60%] flex justify-evenly items-center h-full'>
                <a href="/sites">
                    Sites
                </a>
                <a href="/projects">
                    Projects
                </a>
            </div>
            <a
                href="https://github.com/Ogwen123"
                className="w-[20%] flex flex-row justify-end"
            >
                <img
                    src="https://i.ibb.co/6b7zkrb/github.png"
                    className='h-7 w-8'
                />
            </a>
        </div>
    )
}

export default NavigationBar