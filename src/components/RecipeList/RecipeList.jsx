import { RecipeCard } from '../RecipeCard/RecipeCard';
import PropTypes from 'prop-types';
import { List } from '../RecipeList.styled';

export const RecipeList = ({items, onDelete}) => {
    return(
      <List>{items.map(item =>(
        <li key={item.id}>
            <RecipeCard item={item} 
            onDelete={onDelete}/>
        </li>))}
      </List>
    );
};


RecipeList.propTyps = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};
