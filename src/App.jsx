import { useState } from 'react';
import Header from './components/Header/Header';
import ProjectSelector from './components/ProjectSelector/ProjectSelector';
import ProjectFeedback from './components/ProjectFeedback/ProjectFeedback';
import OverallFeedback from './components/OverallFeedback/OverallFeedback';
import FeedbackSummary from './components/FeedbackSummary/FeedbackSummary';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    projectSelection: '',
    project1Rating: 0,
    project1Strengths: '',
    project1Weaknesses: '',
    project1Innovation: '',
    project1TechnicalComments: '',
    project1DesignComments: '',
    project1UsabilityComments: '',
    project1PerformanceComments: '',
    project1Comments: '',
    project2Rating: 0,
    project2Strengths: '',
    project2Weaknesses: '',
    project2Innovation: '',
    project2TechnicalComments: '',
    project2DesignComments: '',
    project2UsabilityComments: '',
    project2PerformanceComments: '',
    project2Comments: '',
    overallThoughts: '',
    suggestions: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [feedbackHistory, setFeedbackHistory] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.projectSelection) {
      alert('Please select a project');
      return;
    }

    // Validate project ratings
    if ((formData.projectSelection === 'project1' || formData.projectSelection === 'both') && formData.project1Rating === 0) {
      alert('Please provide a rating for Project 1');
      return;
    }

    if ((formData.projectSelection === 'project2' || formData.projectSelection === 'both') && formData.project2Rating === 0) {
      alert('Please provide a rating for Project 2');
      return;
    }

    // Validate project strengths
    if ((formData.projectSelection === 'project1' || formData.projectSelection === 'both') && !formData.project1Strengths) {
      alert('Please describe the strengths of Project 1');
      return;
    }

    if ((formData.projectSelection === 'project2' || formData.projectSelection === 'both') && !formData.project2Strengths) {
      alert('Please describe the strengths of Project 2');
      return;
    }

    // Add timestamp and id
    const feedbackEntry = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };

    // Save to history
    const updatedHistory = [...feedbackHistory, feedbackEntry];
    setFeedbackHistory(updatedHistory);

    // Save to localStorage
    localStorage.setItem('retro2025Feedback', JSON.stringify(updatedHistory));

    // Show summary
    setSubmitted(true);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setFormData({
      projectSelection: '',
      project1Rating: 0,
      project1Strengths: '',
      project1Weaknesses: '',
      project1Innovation: '',
      project1TechnicalComments: '',
      project1DesignComments: '',
      project1UsabilityComments: '',
      project1PerformanceComments: '',
      project1Comments: '',
      project2Rating: 0,
      project2Strengths: '',
      project2Weaknesses: '',
      project2Innovation: '',
      project2TechnicalComments: '',
      project2DesignComments: '',
      project2UsabilityComments: '',
      project2PerformanceComments: '',
      project2Comments: '',
      overallThoughts: '',
      suggestions: ''
    });
  };

  const handleNewFeedback = () => {
    setSubmitted(false);
    handleReset();
  };

  return (
    <div className="app" style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)', minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif' }}>
      <Header />
      
      {!submitted ? (
        <div className="container">
          <div className="feedback-form-container">
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <ProjectSelector 
                selectedProject={formData.projectSelection}
                onProjectChange={(value) => handleInputChange('projectSelection', value)}
              />

              {(formData.projectSelection === 'project1' || formData.projectSelection === 'both') && (
                <ProjectFeedback 
                  projectNumber={1}
                  formData={formData}
                  onInputChange={handleInputChange}
                />
              )}

              {(formData.projectSelection === 'project2' || formData.projectSelection === 'both') && (
                <ProjectFeedback 
                  projectNumber={2}
                  formData={formData}
                  onInputChange={handleInputChange}
                />
              )}

              {formData.projectSelection && (
                <OverallFeedback 
                  formData={formData}
                  onInputChange={handleInputChange}
                />
              )}

              {formData.projectSelection && (
                <div className="form-actions">
                  <button type="submit" className="btn-submit">Submit Feedback</button>
                  <button type="reset" className="btn-reset">Reset Form</button>
                </div>
              )}
            </form>
          </div>
        </div>
      ) : (
        <FeedbackSummary 
          feedback={formData}
          onNewFeedback={handleNewFeedback}
        />
      )}

      <footer className="footer">
        <p>&copy; 2025 Team MIMH | All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
