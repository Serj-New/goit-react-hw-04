import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        borderStyle: 'none'
    },
    overlay: {
        backgroundColor: 'rgba(39, 39, 39, 0.8)'
    }
};

export default function ImageModal({ imageUrl, closeModal }) {
    return (
        <Modal
            isOpen={!!imageUrl}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Photo Modal"
        >
            <img src={imageUrl} alt="" />
        </Modal>
    )
}