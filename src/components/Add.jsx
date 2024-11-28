import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function Add({setAddStatus}) {

  const [show, setShow] = useState(false);

  const [videoDetails, setVideoDetails] = useState({
    caption:"",
    imgurl:"",
    embededLink:""
  })

  console.log(videoDetails);
  

  const handleClose = () => {setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  const handleCancel = () =>{
    setVideoDetails({
      caption:"",
      imgurl:"",
      embededLink:""
    })
  }

  const handleAdd = async () =>{
    const {caption, imgurl, embededLink} = videoDetails

    if(!caption||!imgurl||!embededLink){
      toast.info("please fill the form completely")
    }
    

    else{ 

      if (embededLink.startsWith("https://youtu.be/")){
        let link = `https://www.youtube.com/embed/${embededLink.slice(17,28)}` 
        console.log(link);

         const result = await addVideoApi({caption, imgurl, embededLink:link})
         console.log(result);

         if(result.status>=200 && result.status<300){
          toast.success("Video Uploaded successfully")
          handleClose()
          setAddStatus(result)
         }
         else{
          toast.error("something went wrong")
          handleCancel()
         }

      }
        else{
          let link = `https://www.youtube.com/embed/${embededLink.slice(-11)}`
          console.log(link);
          
        const result = await addVideoApi({caption, imgurl, embededLink:link})
         console.log(result);

         if(result.status>=200 && result.status<300){
          toast.success("Video Uploaded successfully")
          handleClose()
          setAddStatus(result)
         }
         else{
          toast.error("something went wrong")
          handleCancel()
         }

        }

        
        
    

  }
}

  return (
    <>
    
      <h5><span className='d-md-inline d-none' >Upload new video</span> <FontAwesomeIcon  onClick={handleShow} icon={faCloudArrowUp} className='ms-2' /> </h5>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning' > <FontAwesomeIcon icon={faFilm} /> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <p>Please fill the following details </p>
          <form className='border border-secondary p-3 rounded'>
            <input type="text" value={videoDetails.caption} placeholder='Video Caption'className='form-control' onChange={(e) => setVideoDetails( {...videoDetails, caption : e.target.value})}  />
            <input type="text" value={videoDetails.imgurl} placeholder='Video Image' className='form-control my-3'  onChange={(e) => setVideoDetails( {...videoDetails, imgurl : e.target.value})} />
            <input type="text" value={videoDetails.embededLink} placeholder='Video Url' className='form-control'  onChange={(e) => setVideoDetails( {...videoDetails, embededLink : e.target.value})} />
          </form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme="coloured" autoClose={2000} />


    </>
  )
}

export default Add