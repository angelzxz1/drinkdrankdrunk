"use client"
import Link from 'next/link'


interface LinkProps {
    children: JSX.Element | JSX.Element[] | string,
    URL: string
}

const CLink = ({children, URL}:LinkProps): JSX.Element => {
    return (
        <div
            className="
                mx-4
                relative
                after:content-['']
                after:absolute
                after:w-0
                after:h-px
                after:bg-white
                after:bottom-0
                after:left-1/2
                transition-all
                duration-100
                ease-in-out
                after:transition-all
                after:duration-100
                after:ease-in-out
                hover:scale-150
                hover:after:w-full
                hover:after:left-0

            "
        >
            <Link href={URL}>
                {children}
            </Link>
        </div>
    )    
}


const NavBar = () => {
	return (
		<section className="
            bg-[#00000050]
            fixed 
            w-full
            t-0
            p-4
            "
        >
			<div
                className="
                    flex
                    justify-center
                "
            >
                <div
                    className="
                        w-3/4
                        flex
                        justify-around
                    "
                >
                    <div
                        className='
                            w-1/2
                            flex
                        '
                    >
                        <CLink URL="/play">Play</CLink>
                        <CLink URL="/howtoplay">How to play</CLink> 
                    </div> 
                    <div
                        className='
                            w-1/2
                            flex
                            justify-end
                        '
                    >
                        <button
                            onClick={(e)=>{
                                e.preventDefault()

                            }}
                        >
                            <img 
                                src="./outWhite.svg"
                                className="
                                    max-w-[2rem]
                                    transition-all
                                    duration-100
                                    ease-in-out
                                    hover:scale-150
                                "
                            ></img>
                        </button>
                    </div> 
                </div>
            </div>
		</section>
	);
};

export default NavBar;
