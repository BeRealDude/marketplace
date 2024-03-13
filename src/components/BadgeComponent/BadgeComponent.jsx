/* eslint-disable react/prop-types */
// import React from 'react';

import styles from './BadgeComponent.module.scss';



function BadgeComponent({
  isChecked,
  selectedOptions,
  selectedOptionsMethod,
  deleteBadge,
  deleteBadgeProduct,
  selectedOptionsSize,
  deleteBadgeSize,
}) {
  function onDelete(option) {
    deleteBadge(option);
  }

  function onDeleteProduct(option) {
    deleteBadgeProduct(option);
  }

  function onDeleteSize(option) {
    deleteBadgeSize(option);
  }

  return (
    <div>
      <span>1034,5 Results</span>
      {isChecked && ''}
      <div className={styles.badgesContainer}>
        {selectedOptions.map(option => (
          <span key={option.id} className={styles.badge}>
            {option.label}
            <button onClick={() => onDelete(option)}>X</button>
          </span>
        ))}
      </div>
      <div className={styles.badgesContainer}>
        {selectedOptionsMethod.map(option => (
          <span key={option.id} className={styles.badge}>
            {option.label}
            <button onClick={() => onDeleteProduct(option)}>X</button>
          </span>
        ))}
      </div>
      <div className={styles.badgesContainer}>
        {selectedOptionsSize.map(option => (
          <span key={option.id} className={styles.badge}>
            {option.label}
            <button onClick={() => onDeleteSize(option)}>X</button>
          </span>
        ))}
      </div>
    </div>
  );
};


export default BadgeComponent;
