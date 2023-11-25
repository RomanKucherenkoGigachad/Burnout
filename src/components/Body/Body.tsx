import { Diagram } from '../Diagram';
import { Recommendation } from '../Recommendation';
import './Body.css';

const Body = () => {
  return (
    <div className="body">
      <div className="description"> It is an analytical service for determining the degree of employee burnout</div>
      <div className="description"> Here you can see statistics for your company</div>
      <div className="content">
        <Diagram />
        <Recommendation />
      </div>
    </div>
  );
};

export default Body;
