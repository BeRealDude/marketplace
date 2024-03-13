import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styles from './RangeSlider.module.scss';

function valuetext(value) {
  return `${value} $`;
}

function RangeSlider() {
  const [value, setValue] = React.useState([0, 234]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Price Range</h3>
      <Box sx={{ width: 217, height: 31, marginLeft: '8px', marginTop: '8px' }}>
        <Slider
          sx={{
            '.MuiSlider-thumb': {
              color: '#7ACB22',
              width: '16px',
              height: '16px',
            },
            '.MuiSlider-track': {
              color: '#7ACB22',
              boxShadow: '0px 3px 15px 1px rgba(132, 213, 44, 0.31)',
              border: 'none',
            },
            '.MuiSlider-rail': { color: '#30303D', filter: 'contrast(0.5)' },
            '.MuiSlider-valueLabel': {
              padding: '0.12rem 0.38rem',
              fontFamily: 'Proxima Nova',
              fontWeight: '400',
              fontSize: '16px',
              bgcolor: '#30303D',
            },
          }}
          getAriaLabel={() => 'Prise range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay={'auto'}
          getAriaValueText={valuetext}
          valueLabelFormat={valuetext}
          min={0}
          max={999}
        />
      </Box>
      <div className={styles.wrap}>
        <span className={styles.selectedValue}>
          {value[0] === 0 ? valuetext(value[1]) : valuetext(value[0])}
        </span>
        <span
          className={
            value[0] === 0
              ? `${styles.selectedValue} ${styles.unSelectedValue}`
              : `${styles.selectedValue}`
          }
        >
          {value[0] === 0 ? '9999 $' : valuetext(value[1])}
        </span>
      </div>
    </div>
  );
}

export default RangeSlider;
