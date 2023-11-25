import { Tooltip } from 'react-tooltip';
import { percentage, quantity, score } from './constants';
import './Diagram.css';

const Diagram = () => {
  const colorSwitch = (num: number) => {
    switch (num) {
      case (num = 0):
        return '#00FF00';
      case (num = 1):
        return '#77E22B';
      case (num = 2):
        return '#95E22B';
      case (num = 3):
        return '#B3E22B';
      case (num = 4):
        return '#D1E22B';
      case (num = 5):
        return '#EFE22B';
      case (num = 6):
        return '#E2AD00';
      case (num = 7):
        return '#E28F00';
      case (num = 8):
        return '#E27100';
      default:
        return '#FF0000';
    }
  };

  return (
    <div className="diagram">
      <div className="diagram-block">
        <div className="quantity">
          {quantity.map((num) => (
            <div key={num}>{num}</div>
          ))}
        </div>

        <div className="diagram-space">
          {score.map((score, idx) => (
            <>
              <Tooltip anchorSelect="#idx" place="top" key={`${score + idx}`}>
                {score}
              </Tooltip>
              <div
                style={{
                  height: `${5.5 * score}px`,
                  background: colorSwitch(idx),
                  width: 40,
                  marginLeft: 10,
                  minHeight: 10,
                  maxHeight: 550,
                }}
                className="my-anchor-element"
                id={idx}
              />
            </>
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
