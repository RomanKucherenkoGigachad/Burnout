import './Recommendation.css';

const Recommendation = () => {
  return (
    <div className="recommendation">
      <div className="ul">
        <span className="rec-title">Recommendations for managers</span>
        <ul>
          <li className="li">Provide feedback</li>
          <li className="li">Praise and reward employees for achievements</li>
          <li className="li">Monitor the atmosphere in the team</li>
          <li className="li">Help employees find goals</li>
          <li className="li">Change of responsibilities</li>
        </ul>
      </div>

      <div className="ul" style={{ marginTop: 24 }}>
        <span className="rec-title">Recommendations for employees</span>
        <ul>
          <li className="li">Find new hobby</li>
          <li className="li">Workplace update</li>
          <li className="li">Sports activities</li>
          <li className="li">Vacation</li>
        </ul>
      </div>
    </div>
  );
};

export default Recommendation;
