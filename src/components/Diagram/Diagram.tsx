import { Tooltip } from 'react-tooltip';
import { percentage, quantity, score } from './constants';
import './Diagram.css';

const colorSwitch = (num: number) => {
  switch (num) {
    case 0:
      return '#00FF00';
    case 1:
      return '#77E22B';
    case 2:
      return '#95E22B';
    case 3:
      return '#B3E22B';
    case 4:
      return '#D1E22B';
    case 5:
      return '#EFE22B';
    case 6:
      return '#E2AD00';
    case 7:
      return '#E28F00';
    case 8:
      return '#E27100';
    default:
      return '#FF0000';
  }
};

const TOOLTIP_ID = 'line-chart-tooltip';

const Diagram = () => {
  return (
    <div className="diagram">
      <div className="diagram-block">
        <div className="quantity">
          {quantity.map((num) => (
            <div key={num}>{num}</div>
          ))}
        </div>

        <div className="diagram-space">
          <Tooltip id={TOOLTIP_ID} place="top" />
          {score.map((score, idx) => (
            <div
              style={{
                height: `${5.5 * score}px`,
                background: colorSwitch(idx),
                width: 40,
                marginLeft: 10,
                minHeight: 10,
                maxHeight: 550,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
              }}
              data-tooltip-id={TOOLTIP_ID}
              data-tooltip-content={String(score)}
              className="my-anchor-element"
            />
          ))}
        </div>
      </div>
      <div className="percentage">
        {percentage.map((percent) => (
          <div className="block" key={percent}>
            {percent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diagram;
