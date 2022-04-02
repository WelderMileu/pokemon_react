import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../card";

interface Props {
    name: String;
    img: String;
}

export const opt = {
    "limit": 103,
    "offset": 200
}

const Main = () => {
    const [data, setData] = useState<Props[]>([])
    const results: Props[] = []

    useEffect(() => {
        api
            .get(`?limit=${opt.limit}&offset=${opt.offset}`)
            .then(response => results.push(response.data.results))
            .catch(err => console.log(err))

        for (let init = 0; init < results.length; init++) {
            let position = init + opt.offset

            api
                .get(`${position}`)
                .then(response => {
                    let species: any = {
                        name: response.data.species.name,
                        img: response.data.sprites.front_default
                    }

                    setData(species)
                })
                .catch(err => console.log(err))
        }
    }, [])

    return (
        <div className="p-10 sm:p-20 mt-10 flex flex-wrap">
            {data.map((item, index) => (
                <Card
                    key={index}
                    name={item.name}
                    img={item.img}
                    index={index + 1}
                />
            ))}
        </div>
    )
}

export default Main
