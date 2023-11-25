import { Diagram } from '../Diagram';
import './Body.css';

const Body = () => {
  return (
    <div className="body">
      <div className="description"> It is an analytical service for determining the degree of employee burnout</div>
      <Diagram />
    </div>
  );
};

export default Body;
