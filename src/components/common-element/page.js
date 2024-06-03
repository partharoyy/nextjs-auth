'use client';

function CommonElement({ currentItem, value, onChange }) {
  let content = null;
  switch (currentItem.componentType) {
    case 'input':
      content = (
        <input
          className='border-2 border-gray-300 p-2 focus:outline-none focus:border-pink-600 rounded-md'
          name={currentItem.name}
          id={currentItem.name}
          type={currentItem.type}
          value={value}
          onChange={onChange}
          placeholder={currentItem.placeholder}
        />
      );
      break;

    default:
      content = (
        <input
          name={currentItem.name}
          id={currentItem.name}
          type={currentItem.type}
          value={value}
          onChange={onChange}
          placeholder={currentItem.placeholder}
        />
      );
      break;
  }

  return content;
}

export default CommonElement;
