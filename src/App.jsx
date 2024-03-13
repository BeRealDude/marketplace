import { useState } from 'react';
import BadgeComponent from './components/BadgeComponent/BadgeComponent';
import Dropdown from './components/Dropdown/Dropdown';
import Header from './components/Header/Header';
import PanelRangeSliders from './components/PanelRangeSliders/PanelRangeSliders';
import styles from './App.module.scss'
import Footer from './components/Footer/Footer';

function App() {
  const options = [
    { id: 1, label: '100% Indica' },
    { id: 2, label: '100% Sativa' },
    { id: 3, label: '>50% Indica' },
    { id: 4, label: '>50% Sativa' },
  ];
  const optionsMethod = [
    { id: 5, label: 'Indoor' },
    { id: 6, label: 'Outdoor' },
    { id: 7, label: 'Greenhouse' },
    { id: 8, label: 'Light Deprivation' },
    { id: 9, label: 'Mixed Light' },
    { id: 10, label: 'Other' },
  ];
  const optionsSize = [
    { id: 11, label: 'Flower' },
    { id: 12, label: 'Pre-Roll Flower' },
    { id: 13, label: 'Pre-Roll Infused' },
    { id: 14, label: 'Pre-Roll Leaf' },
    { id: 15, label: 'Shake' },
    { id: 16, label: 'Smalls' },
    { id: 17, label: 'Trim' },
    { id: 18, label: 'Shake' },
    { id: 19, label: 'Keef' },
    { id: 20, label: 'Fresh Frozen' },
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionsMethod, setSelectedOptionsMethod] = useState([]);
  const [selectedOptionsSize, setSelectedOptionsSize] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const onOptionToggle = () => {
    setIsChecked(!isChecked);
  };

  function deleteBadge(option) {
    const isSelected = selectedOptions.some(
      selectedOption => selectedOption.id === option.id,
    );
    if (isSelected) {
      setSelectedOptions(
        selectedOptions.filter(
          selectedOption => selectedOption.id !== option.id,
        ),
      );
    }
  }

  function deleteBadgeProduct(option) {
    const isSelected = selectedOptionsMethod.some(
      selectedOption => selectedOption.id === option.id,
    );
    if (isSelected) {
      setSelectedOptionsMethod(
        selectedOptionsMethod.filter(
          selectedOption => selectedOption.id !== option.id,
        ),
      );
    }
  }

  function deleteBadgeSize(option) {
    const isSelected = selectedOptionsSize.some(
      selectedOption => selectedOption.id === option.id,
    );
    if (isSelected) {
      setSelectedOptionsSize(
        selectedOptionsSize.filter(
          selectedOption => selectedOption.id !== option.id,
        ),
      );
    }
  }
  

  return (
    <>
      <Header />
      <main>
        <PanelRangeSliders />
        <BadgeComponent
          isChecked={isChecked}
          selectedOptions={selectedOptions}
          selectedOptionsMethod={selectedOptionsMethod}
          deleteBadge={deleteBadge}
          deleteBadgeProduct={deleteBadgeProduct}
          selectedOptionsSize={selectedOptionsSize}
          deleteBadgeSize={deleteBadgeSize}
        />
        <div className={styles.dropDownPanel}>
          <Dropdown
            onOptionToggle={onOptionToggle}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            options={options}
            title={'Classification'}
          />
          <Dropdown
            onOptionToggle={onOptionToggle}
            selectedOptions={selectedOptionsMethod}
            setSelectedOptions={setSelectedOptionsMethod}
            options={optionsMethod}
            title={'Production Method'}
          />
          <Dropdown
            onOptionToggle={onOptionToggle}
            selectedOptions={selectedOptionsSize}
            setSelectedOptions={setSelectedOptionsSize}
            options={optionsSize}
            title={'Size'}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
