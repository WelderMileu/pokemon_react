import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../card";

interface Props {
    name: String;
    image: String;
}

export let limit = 100

const Main = () => {
    const [data, setData] = useState<Props[]>([])

    useEffect(() => {
        api
            .get("findAll")
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="p-10 sm:p-20 mt-10 flex flex-wrap">
            {data.map((item, index) => (
                <Card
                    key={index}
                    name={item.name}
                    img={item.image}
                    index={index + 1}
                />
            ))}
        </div>
    )
}

export default Main
