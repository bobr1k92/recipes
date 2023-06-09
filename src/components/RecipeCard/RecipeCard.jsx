import { useState } from 'react';
import { AiOutlineClockCircle, AiOutlinePieChart } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';
import { HiTrash, HiZoomIn } from 'react-icons/hi';
import PropTypes from 'prop-types';
import {
  Container,
  InfoBlock,
  Name,
  Image,
  Meta,
  RecipeInfo,
  BadgeList,
  Badge,
  Actions,
} from './RecipeCard.styled';
import { RecipeDifficulty } from 'constants';
import { ImageModal } from 'components/ImageModal/ImageModal';

export const RecipeCard = ({
  item: { id, image, name, time, servings, calories, difficulty },
  onDelete,
}) => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <Container>
      <Image src={image} alt={name} />
      <Meta>
        <Name>{name}</Name>

        <RecipeInfo>
          <InfoBlock>
            <AiOutlineClockCircle size="24" />
            <span>{time} min</span>
          </InfoBlock>
          <InfoBlock>
            <AiOutlinePieChart size="24" />
            <span>{servings} servings</span>
          </InfoBlock>
          <InfoBlock>
            <BsBarChart size="24" />
            <span>{calories} calories</span>
          </InfoBlock>
        </RecipeInfo>

        <BadgeList>
          <Badge
            active={difficulty === RecipeDifficulty.easy}
            type={RecipeDifficulty.easy}
          >
            Easy
          </Badge>
          <Badge
            active={difficulty === RecipeDifficulty.medium}
            type={RecipeDifficulty.medium}
          >
            Medium
          </Badge>
          <Badge
            active={difficulty === RecipeDifficulty.hard}
            type={RecipeDifficulty.hard}
          >
            Hard
          </Badge>
        </BadgeList>

        <Actions>
          <button aria-label="Delete" onClick={() => onDelete(id)}>
            <HiTrash />
          </button>
          <button aria-label="Zoom" onClick={() => setSelectedImg(image)}>
            <HiZoomIn />
          </button>
        </Actions>
      </Meta>
      <ImageModal
        isOpen={selectedImg !== null}
        onClose={() => setSelectedImg(null)}
        image={selectedImg}
      />
    </Container>
  );
};

RecipeCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};

// export class RecipeCard extends Component {
//   state = {
//     selectedImg: null,
//   };

//   setSelectedImg = () => {
//     this.setState({ selectedImg: this.props.item.image });
//   };

//   closeModal = () => {
//     this.setState({ selectedImg: null });
//   };

//   render() {
//     const { selectedImg } = this.state;
//     const {
//       item: { id, image, name, time, servings, calories, difficulty },
//       onDelete,
//     } = this.props;

//     return (
//       <Container>
//         <Image src={image} alt={name} />
//         <Meta>
//           <Name>{name}</Name>

//           <RecipeInfo>
//             <InfoBlock>
//               <AiOutlineClockCircle size="24" />
//               <span>{time} min</span>
//             </InfoBlock>
//             <InfoBlock>
//               <AiOutlinePieChart size="24" />
//               <span>{servings} servings</span>
//             </InfoBlock>
//             <InfoBlock>
//               <BsBarChart size="24" />
//               <span>{calories} calories</span>
//             </InfoBlock>
//           </RecipeInfo>

//           <BadgeList>
//             <Badge
//               active={difficulty === RecipeDifficulty.easy}
//               type={RecipeDifficulty.easy}
//             >
//               Easy
//             </Badge>
//             <Badge
//               active={difficulty === RecipeDifficulty.medium}
//               type={RecipeDifficulty.medium}
//             >
//               Medium
//             </Badge>
//             <Badge
//               active={difficulty === RecipeDifficulty.hard}
//               type={RecipeDifficulty.hard}
//             >
//               Hard
//             </Badge>
//           </BadgeList>

//           <Actions>
//             <button aria-label="Delete" onClick={() => onDelete(id)}>
//               <HiTrash />
//             </button>
//             <button aria-label="Zoom" onClick={this.setSelectedImg}>
//               <HiZoomIn />
//             </button>
//           </Actions>
//         </Meta>
//         <ImageModal
//           isOpen={selectedImg !== null}
//           onClose={this.closeModal}
//           image={selectedImg}
//         />
//       </Container>
//     );
//   }
// }
