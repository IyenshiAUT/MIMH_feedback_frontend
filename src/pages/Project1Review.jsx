import ProjectFeedback from '../components/ProjectFeedback/ProjectFeedback';

function Project1Review({ formData, onInputChange }) {
  return (
    <div className="container">
      <ProjectFeedback projectNumber={1} formData={formData} onInputChange={onInputChange} />
    </div>
  );
}

export default Project1Review;
