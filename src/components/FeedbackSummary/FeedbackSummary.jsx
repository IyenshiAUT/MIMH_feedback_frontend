import './FeedbackSummary.css';

function FeedbackSummary({ feedback, onNewFeedback }) {
  const renderStars = (rating) => {
    return '⭐'.repeat(parseInt(rating) || 0);
  };

  const getInnovationLabel = (value) => {
    const labels = {
      'low': '🟢 Low - Common approach',
      'medium': '🟡 Medium - Some unique elements',
      'high': '🟠 High - Very innovative',
      'breakthrough': '🔴 Breakthrough - Game-changing'
    };
    return labels[value] || value;
  };

  return (
    <div className="summary-container">
      <div className="summary-card">
        <div className="summary-header">
          <div className="success-icon">✓</div>
          <h2>Feedback Submitted Successfully!</h2>
          <p>Thank you for taking the time to share your valuable feedback</p>
        </div>

        <div className="summary-body">
          <div className="timestamp">
            <span className="timestamp-icon">🕐</span>
            <span>Submitted on {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</span>
          </div>

          {feedback.project1Rating && (
            <div className="project-summary">
              <div className="project-summary-header">
                <span className="project-number">1</span>
                <h3>Tourist Utility Service System</h3>
              </div>
              <div className="summary-items">
                <div className="summary-item">
                  <span className="item-label">Overall Rating</span>
                  <span className="item-value stars">
                    {renderStars(feedback.project1Rating)} 
                    <span className="rating-number">{feedback.project1Rating}/5</span>
                  </span>
                </div>
                {feedback.project1Innovation && (
                  <div className="summary-item">
                    <span className="item-label">Innovation Level</span>
                    <span className="item-value">{getInnovationLabel(feedback.project1Innovation)}</span>
                  </div>
                )}
                {feedback.project1Comments && (
                  <div className="summary-item comments">
                    <span className="item-label">Comments</span>
                    <span className="item-value">{feedback.project1Comments}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {feedback.project2Rating && (
            <div className="project-summary">
              <div className="project-summary-header">
                <span className="project-number">2</span>
                <h3>Stroke Hand Recovery System</h3>
              </div>
              <div className="summary-items">
                <div className="summary-item">
                  <span className="item-label">Overall Rating</span>
                  <span className="item-value stars">
                    {renderStars(feedback.project2Rating)}
                    <span className="rating-number">{feedback.project2Rating}/5</span>
                  </span>
                </div>
                {feedback.project2Innovation && (
                  <div className="summary-item">
                    <span className="item-label">Innovation Level</span>
                    <span className="item-value">{getInnovationLabel(feedback.project2Innovation)}</span>
                  </div>
                )}
                {feedback.project2Comments && (
                  <div className="summary-item comments">
                    <span className="item-label">Comments</span>
                    <span className="item-value">{feedback.project2Comments}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="summary-actions">
          <button className="btn-primary" onClick={onNewFeedback}>
            <span>📝</span> Submit Another Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackSummary;
