import Modal from 'react-modal';
import { AiOutlineCloseCircle} from "react-icons/ai";
import { CloseBtn } from './ImageModal.styled';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');

export const ImageModal = ({isOpen, image, onClose}) => {
    return (
<Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    style={customStyles}
    contentLabel="Example Modal"
      >
    <div>
        <img src={image} alt="#" width="480"/>
        <CloseBtn onClick={onClose}><AiOutlineCloseCircle size={24}/></CloseBtn>
    </div>
        
</Modal> 
  );
};


