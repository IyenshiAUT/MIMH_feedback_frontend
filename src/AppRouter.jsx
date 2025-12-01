import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Project1Review from './pages/Project1Review';
import Project2Review from './pages/Project2Review';
import FeedbackSummary from './components/FeedbackSummary/FeedbackSummary';
import Header from './components/Header/Header';
import feedbackAPI from './services/api';
import './App.css';

function AppContent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectSelection: '',
    project1Rating: 0,
    project1Innovation: '',
    project1Comments: '',
    project2Rating: 0,
    project2Innovation: '',
    project2Comments: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProjectChange = (value) => {
    setFormData(prev => ({ ...prev, projectSelection: value }));
    if (value === 'project1') navigate('/tourist-utility-service-system');
    else if (value === 'project2') navigate('/stroke-hand-recovery-system');
  };

  const handleSubmit = async (projectNumber) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const prefix = `project${projectNumber}`;
      const projectType = projectNumber === 1 
        ? 'tourist-utility-service-system' 
        : 'stroke-hand-recovery-system';
      
      const rating = formData[`${prefix}Rating`];
      const innovation = formData[`${prefix}Innovation`];
      const comments = formData[`${prefix}Comments`];
      
      if (!rating || rating === 0) {
        throw new Error('Please provide a rating before submitting');
      }
      
      await feedbackAPI.submitFeedback(projectType, rating, innovation, comments);
      
      setSubmitted(true);
      navigate('/summary');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setSubmitError(error.message);
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewFeedback = () => {
    setFormData({
      projectSelection: '',
      project1Rating: 0,
      project1Innovation: '',
      project1Comments: '',
      project2Rating: 0,
      project2Innovation: '',
      project2Comments: ''
    });
    setSubmitted(false);
    setSubmitError(null);
    navigate('/');
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={
          <Home selectedProject={formData.projectSelection} onProjectChange={handleProjectChange} />
        } />
        <Route path="/tourist-utility-service-system" element={
          <>
            <Project1Review formData={formData} onInputChange={handleInputChange} />
            {submitError && <div className="error-message">{submitError}</div>}
            <div className="form-actions">
              <button 
                className="btn-submit" 
                onClick={() => handleSubmit(1)}
                disabled={isSubmitting}
              >
                <span className="btn-icon">{isSubmitting ? '⏳' : '📤'}</span>
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </>
        } />
        <Route path="/stroke-hand-recovery-system" element={
          <>
            <Project2Review formData={formData} onInputChange={handleInputChange} />
            {submitError && <div className="error-message">{submitError}</div>}
            <div className="form-actions">
              <button 
                className="btn-submit" 
                onClick={() => handleSubmit(2)}
                disabled={isSubmitting}
              >
                <span className="btn-icon">{isSubmitting ? '⏳' : '📤'}</span>
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </>
        } />
        <Route path="/summary" element={
          <FeedbackSummary feedback={formData} onNewFeedback={handleNewFeedback} />
        } />
      </Routes>
      <footer className="footer">
        <p>&copy; 2025 Team MIMH | All rights reserved</p>
      </footer>
    </div>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default AppRouter;
