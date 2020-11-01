import React, { useState, useRef, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { API_URL } from '../utils/constants';

const App = (props) => {
  const [file, setFile] = useState(null); // state for storing actual image
  // const [errorMsg, setErrorMsg] = useState('');
  const dropRef = useRef(); // React ref for managing the hover state of droppable area
 


    // const onDrop = (files) => { 
    // const uploadedFiles = files;
    // for(let i = 0; i < files.length; i++){
    //   setFiles(prevArray => [...prevArray,uploadedFiles[i]]);
    //   console.log(files);
    //   console.log(uploadedFiles);
    
    // }
     
    const onDrop = (files) => {
      const [uploadedFile] = files;
      setFile(uploadedFile);

   }

    const handleOnSubmit = async (event) => {
    event.preventDefault();
        // if (files) {
        //   const formData = new FormData();
        //   files.forEach(file => {
        //     formData.append('file', file);
        //   })
     
            if (file) {
              const formData = new FormData();
          formData.append('file', file);
        
        
          await axios.post('${API_URL}/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        }
      };
      

   
 
  
  return (
    <React.Fragment>
      
      <Form className="search-form" onSubmit={handleOnSubmit}>
        {/* {errorMsg && <p className="errorMsg">{errorMsg}</p>} */}
        <div className="upload-section">
        
  <Dropzone onDrop={onDrop}>
    {({ getRootProps, getInputProps }) => (
      <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
        <input {...getInputProps()} />
        <p>Drag and drop a file OR click here to select a file</p>
        
        {file  && (
          <div>
            <strong>Selected files:</strong> {file.name}
          </div>
        )}
      </div>
    )}
  </Dropzone>
</div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};
export default App;
