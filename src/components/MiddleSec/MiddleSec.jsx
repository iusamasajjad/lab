import { useState } from "react";
import cric from "../../assets/images/Cric.webp"
import shahen from "../../assets/images/shaheen.webp"
import siri2 from "../../assets/images/siri2.webp"
import sirilanka from "../../assets/images/sirilanka.webp"
const MiddleSec = () => {

    const [data, setData] = useState([
        {
            id: 1,
            img: cric,
            title: "Abrar Ahmed, Muhammad Ali get maiden calls-ups for England Test; Fawad, Hasan, Yasir dropped",
            p1: "Shaheen Shah afridi is not fit and availabe for selection yet",
            img2: shahen, p2: "Shaheen 'feeling better' after undergoing appendectomy",
            p3: "He is also currently undergoing a two-week rehab for his knee injury"
        },
        {
            id: 2,
            img: sirilanka,
            title: "SL need all the Super League points they can get, as Afghanistan ODIs kick off",
            p1: "Bilateral ODIs might not excite too many but there's a World Cup spot to nail down",
            img2: siri2, p2: "Sri Lanka recall Lakshan, Rajitha, Kumara for Afghanistan ODIs",
            p3: "Rajapaksa, initially included in the squad, requested for a break from ODI cricket"
        },
        {
            id: 3,
            img: cric,
            title: "Abrar Ahmed, Muhammad Ali get maiden calls-ups for England Test; Fawad, Hasan, Yasir dropped",
            p1: "Shaheen Shah afridi is not fit and availabe for selection yet",
            img2: shahen, p2: "Shaheen 'feeling better' after undergoing appendectomy",
            p3: "He is also currently undergoing a two-week rehab for his knee injury"
        },
        {
            id: 4,
            img: sirilanka,
            title: "SL need all the Super League points they can get, as Afghanistan ODIs kick off",
            p1: "Bilateral ODIs might not excite too many but there's a World Cup spot to nail down",
            img2: siri2, p2: "Sri Lanka recall Lakshan, Rajitha, Kumara for Afghanistan ODIs",
            p3: "Rajapaksa, initially included in the squad, requested for a break from ODI cricket"
        },
    ]);
    const handleDelete = (id) => {

        const dataRecord =
            data.filter((srf) =>
                srf.id !== id
            )

        setData(dataRecord);
    }
    return (
        <>
            <div className="flex flex-wrap justify-between">
                {data.map((item, key) => (<div key={item.id} className="mt-3 mb-8 w-5/12">
                    <div>
                        <img className="w-full" src={item.img} alt="" />
                    </div>
                    <div style={{ height: "230px" }} className="bg-black py-3 text-white px-4">
                        <h1 className="font-extrabold text-sm">{item.title}</h1>
                        <p className="text-xs mt-4">{item.p1}</p>
                        <div className="py-3"><button className="bg-red-500 px-6 py-2 text-white"
                            onClick={() => handleDelete(item.id)}>
                            Delete
                        </button>
                        </div>
                    </div>
                </div>))}
            </div>
        </>
    );
}
export default MiddleSec;