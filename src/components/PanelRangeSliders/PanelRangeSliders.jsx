import RangeSlider from "../RangeSlider/RangeSlider";
import RangeSliderSingle from "../RangeSliderSingle/RangeSliderSingle";
import styles from './PanelRangeSliders.module.scss';

function PanelRangeSliders() {
  return (
    <section className={styles.panelSliders}>
      <RangeSlider />
      <RangeSliderSingle title={'ТНС, %'} label={'percentage of THC'} />
      <RangeSliderSingle title={'CBD, %'} label={'percentage of CBD'} />
    </section>
  );
}

export default PanelRangeSliders;
