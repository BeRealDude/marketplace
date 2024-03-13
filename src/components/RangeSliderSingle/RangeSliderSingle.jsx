import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import styles from './RangeSliderSingle.module.scss';

function valuetext(value) {
  return `${value} %`;
}

function RangeSliderSingle({ ...data }) {
  const [value, setValue] = useState(65);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{data.title}</h3>
      <Box sx={{ width: 225, height: 32, marginLeft: '8px', marginTop: '8px' }}>
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
          getAriaLabel={() => data.label}
          value={value}
          onChange={handleChange}
          valueLabelDisplay={'auto'}
          getAriaValueText={valuetext}
          valueLabelFormat={valuetext}
          min={0}
          max={100}
        />
      </Box>
      <div className={styles.wrap}>
        <span className={styles.selectedValue}>{valuetext(value)}</span>
      </div>
    </div>
  );
}

export default RangeSliderSingle;
