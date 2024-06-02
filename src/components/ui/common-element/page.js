'use client';

function CommonElement({ currentItem, value, onChange }) {
  let content = null;
  switch (currentItem.componentType) {
    case 'input':
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
