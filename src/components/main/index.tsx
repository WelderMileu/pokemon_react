import { useEffect, useState } from "react";
import api from "../../services/api";

import Card from "../card";

interface Props {
    name: String;
    url: String;
}

const Main = () => {
    const [data, setData] = useState<Props[]>([])

    useEffect(() => {
        api
            .get("pokemon?limit=103&offset=200")
            .then(response => setData(response.data.results))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="p-12 mt-10 flex flex-wrap">
            { data.map((item, index) => (
                <Card
                    key={index} 
                    img={item.url}
                    name={item.name}
                    index={index}
                />
            )) }
        </div>
    )
}

export default Main
