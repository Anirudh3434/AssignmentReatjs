import React, { useState } from 'react';
import adsPoster from '../Assest';
import { MdEdit } from 'react-icons/md';
import EditBannerTemplateBs from '../EditBannerTemplateBs';

function BannerImageComp() {
  const [edit, setEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [items, setItems] = useState(adsPoster);

  const editMenu = (item, index) => {
    setSelectedItem(item);
    setSelectedItemIndex(index);
    setEdit(true);
  };

  const updatedFun = (updatedItem, index) => {
    const newItems = [...items];
    newItems[index] = updatedItem;
    setItems(newItems);
  };

  return (
    <>
      {items.map((item, index) => {
        const cardClassName = `card-${index}`;
        const cardTitleClass = `cardTitle-${index}`;
        const cardDescriptionClass = `cardDesc-${index}`;
        const ctaClass = `cardCta-${index}`;
        const cardImageClass = `cardImage-${index}`;

        return (
          <div key={index} className='card-container'>
            {!edit && (
              <button className='edit' onClick={() => editMenu(item, index)}>
                <MdEdit />
              </button>
            )}
            <div
              className={cardClassName}
              style={{ backgroundImage: `url(${item.background})` }}
            >
              <div className='Title'>
                <h2 className={cardTitleClass}>{item.title}</h2>
                <p className={cardDescriptionClass}>{item.description}</p>
                <button className={ctaClass}>{item.cta}</button>
              </div>
              <div className='Image'>
                <img className={cardImageClass} src={item.image} alt="" />
              </div>
            </div>
          </div>
        );
      })}

      {edit && selectedItem && (
        <EditBannerTemplateBs
          setEdit={setEdit}
          item={selectedItem}
          updatedFun={updatedFun}
          index={selectedItemIndex} 
        />
      )}
    </>
  );
}

export default BannerImageComp;
