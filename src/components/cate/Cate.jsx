import { useLoaderData} from "react-router-dom";
const Cate = () => {
const data2 = useLoaderData()

console.log(data2)
    return (
        <div>
            {
           data2.categories.map((item,idx)=>(
                    <div key={idx} className="bg-white px-4 py-2 rounded-md text-lg font-medium">
                        <p>{item.strCategory}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Cate;



