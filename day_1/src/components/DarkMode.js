import React, {useEffect, useState} from 'react'

export const DarkMode = () => {

    const [theme, setTheme] = useState("light-theme")
    
    const toggleTheme = () => {
        (theme === "dark-theme") ? setTheme("light-theme") : setTheme("dark-theme")
    }

    useEffect(() => {
            document.body.className = theme;
            console.log('useEffect')
        }, [theme]);

    return (
    <>
        <main>
            <section>
                <div className='flex font-mono'>
                    <div className='text-2xl w-1/2 my-40 mx-20'>
                        <p>Neon is a young Filipina woman with olive skin and a short stature. She sports an athletic attire with black and blue running leggings along with a pair 
                            of sneakers. She also wears a dark-blue cropped vest that appears to act as electrical conduits for her powers. Her arms and face have light blue patterns 
                            that can illuminate with her radiant abilities. She has shoulder-length shaggy hair, colored mainly electric blue with streaks of yellow throughout and 
                            wears it in a half-up pigtails hairstyle. She also wears a belt and accessorizes with a golden bracelet on each arm. <br/>
                            When using her radiant powers to channel electricity through her body, the patterns on her arms, face, as well as her eyes glow light blue along with 
                            the her hair which stands-up due to the electricity.</p>
                        <button className='font-mono border border-x-4 p-2 my-10 text-md' onClick={() => toggleTheme()}> Toggle Mode </button>
                    </div>
                    <div>
                        <img className='w-full' src='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8093ba7b5e84ed05/61d8a63ddea73a236fc56d12/Neon_KeyArt-Web.png'/>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}
