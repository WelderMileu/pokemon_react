import "./style.css"

const Load = () => (
    <div className="w-full h-screen flex items-center justify-center flex-col">
        <svg width="100" height="100" className="animate-spin">
            <circle 
                className="circle"
                cx="50" 
                cy="50" 
                r="40" 
            />
            <circle
                className="circle2"
                cx="50" 
                cy="50" 
                r="15"
            />
        </svg>
        <p className="mt-5 text-lg text-green-700">Loading ...</p>
    </div>
);

export default Load
