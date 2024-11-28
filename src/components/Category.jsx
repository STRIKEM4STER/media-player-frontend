import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import Videocard from './Videocard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, deletCategoryApi, getAddCategoryApi, updateCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category({categoryVideoStatus}) {

  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [showCategory, setShowCategory] = useState([])
  const [categoryStatus, setCategoryStatus] = useState({})
  const [deleteStatus, setDeleteStatus] = useState({})
  const [categoryUpdateStatus, setCategoryUpdateStatus] = useState({})

  // delete
  const deleteCategory = async(id)=>{
  const  result =  await deletCategoryApi(id)
  if(result.status>=200 && result.status<300){
    setDeleteStatus(result)
  }  
  
  }


  // get
  const getCategory = async()=>{
    const result = await getAddCategoryApi()
    // console.log(result.data);

    if(result.status>=200 && result.status<300){
      setShowCategory(result.data)
    }
    else{
      alert("Something went wrong")
    }
    
    
  }

  console.log(showCategory);
  

  useEffect(()=>{
    getCategory()
  },[categoryStatus, deleteStatus , categoryUpdateStatus, categoryVideoStatus] )


  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  console.log(categoryName);

  const handleCancel = () =>{
    setCategoryName("")
  }

  // add
  const handleAdd =  async()=>{
    if(!categoryName){
      alert("please fill the category name")
    }
    else{
      const reqBody = {
        category: categoryName,
        allVideos:[]
      }

      const result = await addCategoryApi(reqBody)
      console.log(result);

      if(result.status>=200 && result.status<300){
        toast.success("category added successfully ")
        handleClose()
        setCategoryStatus(result)
      }
      else{
        toast.error("something went wrong")
      }
      

    }
  }
  
const videoOver = (e)=>{
  e.preventDefault()
}

const videoDrop = async(e, categoryDetails)=>{
  console.log(categoryDetails);
  const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
  console.log(videoDetails);
  // categoryDetails.allVideos.push(videoDetails)
  // console.log(categoryDetails);
  
  if(categoryDetails.allVideos.find((item)=>item.id==videoDetails.id)){
    alert("video already in category")
  }
  else{
    categoryDetails.allVideos.push(videoDetails)
    console.log(categoryDetails);
    const result = await updateCategoryApi(categoryDetails.id, categoryDetails)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setCategoryUpdateStatus(result)
    }
    
  }
  
}

  const videoDrag = (e, videoDetails, categoryDetails) =>{
    console.log(videoDetails, categoryDetails);

    const details = {
      videoDetails,
      categoryDetails
    }

    e.dataTransfer.setData("Details", JSON.stringify(details))
    
  }

  return (
    <>
    <h5 className='mt-5'> Category </h5>
    <button onClick={handleShow} className='btn btn-warning w-100 mt-4' > Add Category </button>

    { showCategory?.length>0?
      showCategory?.map((item)=>(
        <div className="border border-secondary p-3 rounded mt-4 " droppable onDragOver={(e)=>videoOver(e)} onDrop={(e)=>videoDrop(e , item)} >
        <div className='d-flex justify-content-between' >
          <h6>{item?.category}</h6>
          <button className='btn btn-danger' onClick={()=>deleteCategory(item?.id)} > <FontAwesomeIcon icon={faTrash} /> </button>
        </div>
        {item?.allVideos.length>0 &&
          item?.allVideos.map((video)=>(
            <div draggable onDragStart={(e)=>videoDrag(e, video, item)} >
              <Videocard videoDetails={video} present={true} />
              </div>
           
          ))
          }
      </div>
      ))
    

    :

    <h5 className='text-center text-danger mt-4' >No category added yet..........</h5>}


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-4 border border-dark rounded '>
            <input type="text" placeholder='Enter Category Name' className='form-control' value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
     
      </Modal>

      <ToastContainer position='top-center' theme="coloured" autoClose={2000} />

    </>
  )
}

export default Category