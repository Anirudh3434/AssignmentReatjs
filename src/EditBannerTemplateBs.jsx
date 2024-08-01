import React, { useState, useEffect } from 'react';
import adsPoster from './Assest';

function EditBannerTemplateBs({ setEdit, item, updatedFun, index }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedThumbnail, setSelectedThumbnail] = useState('');

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setDescription(item.description);
      setSelectedThumbnail(item.image);
    }
  }, [item]);

  const handleDone = (e) => {
    e.preventDefault();

    const updated = {
      ...item,
      title: title,
      description: description,
      image: selectedThumbnail 
    };

    updatedFun(updated, index); 
    setEdit(false);
  };

  return (
    <div className="menu-container">
      <div className='box'>
        <h1>Edit Banner</h1>
        <div>
          <img src={selectedThumbnail} alt="Banner Preview" className="preview-image" />
        </div>
        <div>
          {adsPoster.map((poster, idx) => (
            <img
              key={idx}
              src={poster.image}
              alt={`Thumbnail ${idx}`}
              className='thumbnails'
              onClick={() => setSelectedThumbnail(poster.image)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
        <form onSubmit={handleDone}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          /><br />

          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          /><br />

          <button type="submit">Done</button>
        </form>
      </div>
    </div>
  );
}

export default EditBannerTemplateBs;
