import { useState, useEffect } from 'react';
import feedbackAPI from '../../services/api';
import './FeedbackSummary.css';

function FeedbackSummary({ onNewFeedback }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await feedbackAPI.getStats();
        if (response.success) {
          setStats(response.data);
        } else {
          throw new Error(response.error || 'Failed to fetch statistics');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    return '⭐'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
  };

  const getProjectName = (projectType) => {
    return projectType === 'tourist-utility-service-system'
      ? 'Tourist Utility Service System'
      : 'Stroke Hand Recovery System';
  };

  return (
    <div className="summary-container">
      <div className="summary-card">
        <div className="summary-header">
          <div className="success-icon">📊</div>
          <h2>Project Feedback Summary</h2>
          <p>Thank you for your contribution! Here are the current stats.</p>
        </div>

        <div className="summary-body">
          {loading && <div className="loading-spinner">Loading statistics...</div>}
          {error && <div className="error-message">{error}</div>}
          
          {stats && (
            <div className="stats-grid">
              <div className="stat-item main-stat">
                <span className="stat-value">{stats.totalFeedback}</span>
                <span className="stat-label">Total Submissions</span>
              </div>
              <div className="stat-item main-stat">
                <span className="stat-value">{stats.overallAverageRating}</span>
                <span className="stat-label">Overall Average Rating</span>
              </div>

              {stats.projectStats.map((proj) => (
                <div className="project-summary" key={proj.projectType}>
                  <div className="project-summary-header">
                    <h3>{getProjectName(proj.projectType)}</h3>
                  </div>
                  <div className="summary-items">
                    <div className="summary-item">
                      <span className="item-label">Total Feedback</span>
                      <span className="item-value">{proj.totalFeedback}</span>
                    </div>
                    <div className="summary-item">
                      <span className="item-label">Average Rating</span>
                      <span className="item-value stars">
                        {renderStars(proj.averageRating)}
                        <span className="rating-number">{proj.averageRating}/5</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="summary-footer">
          <button className="btn-reset" onClick={onNewFeedback}>
            <span className="btn-icon">➕</span>
            Submit Another Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackSummary;
