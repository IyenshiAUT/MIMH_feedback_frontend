import './ProjectSelector.css';

function ProjectSelector({ selectedProject, onProjectChange }) {
  return (
    <section className="form-section">
      <h2>📋 Select Project to Review</h2>
      <div className="project-selector">
        <label className="project-option">
          <input
            type="radio"
            name="projectSelection"
            value="project1"
            checked={selectedProject === 'project1'}
            onChange={(e) => onProjectChange(e.target.value)}
            required
          />
          <div className="project-card" onClick={() => onProjectChange('project1')} style={{ cursor: 'pointer' }}>
            <div className="project-icon">1</div>
            <h3>Tourist Utility Service System</h3>
            <p>First project for review</p>
          </div>
        </label>
        <label className="project-option">
          <input
            type="radio"
            name="projectSelection"
            value="project2"
            checked={selectedProject === 'project2'}
            onChange={(e) => onProjectChange(e.target.value)}
            required
          />
          <div className="project-card" onClick={() => onProjectChange('project2')} style={{ cursor: 'pointer' }}>
            <div className="project-icon">2</div>
            <h3>Stroke Hand Recovery System</h3>
            <p>Second project for review</p>
          </div>
        </label>
      </div>
    </section>
  );
}

export default ProjectSelector;
