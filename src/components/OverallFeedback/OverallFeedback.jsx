import './OverallFeedback.css';

function OverallFeedback({ formData, onInputChange }) {
  return (
    <section className="form-section">
      <h2>💡 Overall Retrospective</h2>
      <div className="form-group">
        <label htmlFor="overallThoughts">General Thoughts on Retro 2025</label>
        <textarea
          id="overallThoughts"
          name="overallThoughts"
          value={formData.overallThoughts}
          onChange={(e) => onInputChange('overallThoughts', e.target.value)}
          rows="4"
          placeholder="Share your overall experience with the projects..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="suggestions">Suggestions for Future</label>
        <textarea
          id="suggestions"
          name="suggestions"
          value={formData.suggestions}
          onChange={(e) => onInputChange('suggestions', e.target.value)}
          rows="3"
          placeholder="Any suggestions for future iterations..."
        />
      </div>
    </section>
  );
}

export default OverallFeedback;
