import { useLoaderData } from "react-router-dom";
import Cards from "../cards/Cards";
import Cate from "../cate/Cate";

const Home1 = () => {
    const data1= useLoaderData();
   
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
          <Cate></Cate>
          <Cards data={data1}></Cards>
        </div>
    );
};

export default Home1;