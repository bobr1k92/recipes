import { RecipeCard } from '../RecipeCard';
import PropTypes from 'prop-types';
import { List } from '../RecipeList.styled';

export const RecipeList = ({items}) => {
    return(
      <List>{items.map(item =>(
        <li key={item.id}>
            <RecipeCard item={item}/>
        </li>))}
      </List>
    );
};


RecipeList.propTyps = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};
