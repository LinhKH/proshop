import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalContainer = ({show,title,body,titleSave,titleClose,yesFun,noFun}) => {
    return (
        <Modal show={show} onHide={noFun}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => yesFun()}>
                    {titleSave}
                </Button>
                <Button variant="secondary" onClick={noFun}>
                    {titleClose}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
ModalContainer.defaultProps = {
    show: false,
    title: 'Confirm Delete ?',
    body: 'Woo, are you sure ?',
    titleSave: 'Save',
    titleClose: 'Close',
}

export default ModalContainer
