import "./style.css"

const Load = () => {
    let value: number = 50;
    const items: any[] = []

    function circle() {
        for (value; value > 0; value--) {
            items.push(value)
        }
    }

    circle()

    return (
        <div className="w-full h-screen flex items-center justify-center flex-col">
            <div id="spiner" className="flex items-center justify-center">
                <svg className="animate-spin" width="100" height="100">
                    <circle
                        className="circle"
                        cx={50}
                        cy={50}
                        r={10}
                    />

                    <circle
                        className="circle"
                        cx={50}
                        cy={50}
                        r={20}
                    />

                    <circle
                        className="circle"
                        cx={50}
                        cy={50}
                        r={30}
                    />
                </svg>
            </div>
        </div>
    )

}

export default Load
