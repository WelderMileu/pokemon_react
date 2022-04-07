interface Options {
    img: any;
    name: String;
    index: Number;
}

const Card = (props:Options) => (
    <div className='relative
                    p-5
                    border-2
                    border-gray-200
                    m-5
                    w-full
                    sm:w-48
                    h-72
                    sm:h-56
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    hover:scale-150
                    ease-out
                    duration-300
                    cursor-pointer'
    >
        <img src={props.img} alt="" />
        <p className='
            absolute
            bottom-4
            text-gray-800
            text-lg
        '>
            {props.name}
        </p>
        <span className="
            text-lg
            font-bold
            absolute
            top-0
            left-0
            rounded-tl-lg
            rounded-br-lg
            w-10
            h-10
            text-center
            inset-y-0
            drop-shadow-lg
            flex
            items-center
            justify-center
            border-b-2
            border-r-2
            border-gray-200
        ">
            {props.index}
        </span>
    </div>
)

export default Card
