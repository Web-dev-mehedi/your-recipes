
import PropTypes from 'prop-types';
import Card from '../card/Card';

const Cards = ({data}) => {
    const meals = data.categories
   
    return (
        <div className='col-span-2 md:col-span-3 grid grid-cols-3 gap-6'>
              {
                meals.map(item =>(
                    <Card key={item.id} meal={item}></Card>
                   
                ))
            }
        </div>
    );
};

Cards.propTypes = {
    data:PropTypes.array.isRequired
};

export default Cards;