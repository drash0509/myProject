import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stocks, setStocks] = useState('');
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (images.length + acceptedFiles.length > 5) {
      alert('Maximum of 5 images can be added.');
    } else {
      const newImages = [...images, ...acceptedFiles].slice(0, 5);
      setImages(newImages);
      console.log('Added images:', newImages);
    }
  }, [images]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDeleteImage = (index) => () => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    console.log('Remaining images:', updatedImages);
  };

  const isFormValid = () => {
    return title && category && price && description && stocks && images.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted with images:', images);
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center w-full p-5">
      <div className="flex flex-col justify-center items-center gap-2.5 p-5 border-2 border-[rgba(110,89,75,1)] rounded bg-[#f9f9f9] w-full md:max-w-[40vw]">
        <div {...getRootProps({ className: 'dropzone' })} className="flex justify-center items-center border-2 border-dashed border-gray-400 w-full h-[40vh]">
          <input {...getInputProps()} />
          <p>Drag 'n' drop images here, or click to select images (max 5)</p>
        </div>
        <div className="grid grid-cols-3 gap-2.5 mt-2.5 w-full min-h-[100px] max-h-[200px]">
          {images.map((file, index) => (
            <div key={index} className="w-full h-[100px] relative rounded overflow-hidden flex justify-center items-center shadow">
              <img src={URL.createObjectURL(file)} alt={`preview ${index}`} className="w-full h-full object-contain" />
              <button onClick={handleDeleteImage(index)} className="absolute top-1.25 right-1.25 bg-red-500 text-white w-6 h-6 flex justify-center items-center rounded-full text-sm cursor-pointer">×</button>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full mt-5 md:mt-0 md:max-w-[40%]">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required className="p-2.5 text-base border border-gray-300 rounded" />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required className="p-2.5 text-base border border-gray-300 rounded" />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required className="p-2.5 text-base border border-gray-300 rounded" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required className="p-2.5 text-base border border-gray-300 rounded h-24" />
        <input type="number" value={stocks} onChange={(e) => setStocks(e.target.value)} placeholder="Stocks" required className="p-2.5 text-base border border-gray-300 rounded" />
        <button type="submit" disabled={!isFormValid()} className="p-2.5 bg-[rgba(110,89,75,1)] text-white cursor-pointer rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
