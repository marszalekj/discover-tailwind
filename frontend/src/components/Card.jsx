import { Link } from 'react-router-dom';

const Card = (props) => {



    return (
        <div className='flex w-80 max-w-sm mb-8 rounded overflow-hidden bg-orange-100 shadow-lg justify-center'>
          <Link to={`product/` + props.data.symbol} className="card-layout" key={props.data.symbol}>
            <div class="flex flex-col px-6 py-4 justify-center">
                <h2 className='font-bold text-xl mb-2 justify-center'>{props.data.symbol} </h2>
                <h2 className='font-bold text-xl mb-2 justify-center'>{props.data.lastPrice} </h2>
            
            </div>
            </Link>
        </div>
    );

};

export default Card;