import ProjectFeedback from '../components/ProjectFeedback/ProjectFeedback';

function Project2Review({ formData, onInputChange }) {
  return (
    <div className="container">
      <ProjectFeedback projectNumber={2} formData={formData} onInputChange={onInputChange} />
    </div>
  );
}

export default Project2Review;
