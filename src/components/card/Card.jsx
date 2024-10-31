
import PropTypes from 'prop-types';

const Card = ({meal}) => {
    const {strCategory,strCategoryThumb,strCategoryDescription}= meal;
   
    return (
        <div className='border border-[#6b6b6b4d] p-4 rounded-lg'>
            <img src={strCategoryThumb} alt="img" className='w-full mx-auto object-cover p-4' />
            <div className='py-6'>
                <h2><strong>Name : </strong> {strCategory}</h2>
                <p><strong>Desc : </strong>{strCategoryDescription}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    meal : PropTypes.object.isRequired
};

export default Card;