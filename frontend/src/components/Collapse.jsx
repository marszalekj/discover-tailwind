import { useState } from "react";


const Collapse = () => {
    const [isVisible, setIsVisible] = useState(false)
    const handleClick = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true)
    }
    const displayCollapse = () => {
        return <p className="flex justify-center"> Bonjour la famille</p>
    }

    return (
        <div className="flex flex-col w-60">
        <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => handleClick()}>C'est moi
        </button>
        {isVisible && 
        <div className=" bg-green-300">
            {displayCollapse()}
        </div>
        }
        </div>
        
    )
}

export default Collapse