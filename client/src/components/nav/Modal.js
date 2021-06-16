export const Modal = ({ open, children, onClose }) => {
    if (!open) return null;

    return (
        <>
            <div className="modal-behind" onClick={onClose} />
            <div className="modal">
                {children}
            </div>
        </>
    )
}