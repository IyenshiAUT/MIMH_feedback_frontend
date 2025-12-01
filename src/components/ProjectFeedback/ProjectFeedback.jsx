import StarRating from '../StarRating/StarRating';
import './ProjectFeedback.css';

function ProjectFeedback({ projectNumber, formData, onInputChange }) {
  const prefix = `project${projectNumber}`;
  const projectName = projectNumber === 1 ? 'Tourist Utility Service System' : 'Stroke Hand Recovery System';

  return (
    <div className="feedback-container">
      <div className="feedback-card">
        <div className="feedback-header">
          <div className="project-badge">{projectNumber}</div>
          <div className="header-text">
            <h2>{projectName}</h2>
            <p>Share your valuable feedback to help us improve</p>
          </div>
        </div>

        <div className="feedback-body">
          <div className="feedback-field">
            <label className="field-label">
              <span className="label-icon">⭐</span>
              Overall Rating
              <span className="required">*</span>
            </label>
            <div className="rating-wrapper">
              <StarRating
                rating={formData[`${prefix}Rating`]}
                onRatingChange={(rating) => onInputChange(`${prefix}Rating`, rating)}
              />
            </div>
            <p className="field-description">How would you rate this project overall?</p>
          </div>

          <div className="feedback-field">
            <label className="field-label" htmlFor={`${prefix}Innovation`}>
              <span className="label-icon">💡</span>
              Innovation Level
            </label>
            <select
              id={`${prefix}Innovation`}
              name={`${prefix}Innovation`}
              className="field-select"
              value={formData[`${prefix}Innovation`]}
              onChange={(e) => onInputChange(`${prefix}Innovation`, e.target.value)}
            >
              <option value="">Select innovation level...</option>
              <option value="low">🟢 Low - Common approach</option>
              <option value="medium">🟡 Medium - Some unique elements</option>
              <option value="high">🟠 High - Very innovative</option>
              <option value="breakthrough">🔴 Breakthrough - Game-changing</option>
            </select>
            <p className="field-description">How unique and creative is this project?</p>
          </div>

          <div className="feedback-field">
            <label className="field-label" htmlFor={`${prefix}Comments`}>
              <span className="label-icon">💬</span>
              Comments & Suggestions
            </label>
            <textarea
              id={`${prefix}Comments`}
              name={`${prefix}Comments`}
              className="field-textarea"
              value={formData[`${prefix}Comments`]}
              onChange={(e) => onInputChange(`${prefix}Comments`, e.target.value)}
              rows={5}
              placeholder="Share your thoughts, suggestions, or any feedback that could help improve this project..."
            />
            <p className="field-description">Your detailed feedback is highly appreciated</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectFeedback;

