// API Service for connecting to Cloudflare D1 Backend
const API_BASE_URL = 'https://feedback-backend.pages.dev';

export const feedbackAPI = {
  // Submit feedback for a project
  async submitFeedback(projectType, rating, innovation, comments) {
    const response = await fetch(`${API_BASE_URL}/api/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectType,
        rating,
        innovation: innovation || null,
        comments: comments || null,
      }),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to submit feedback');
    }
    
    return response.json();
  },

  // Get all feedback
  async getAllFeedback(page = 1, limit = 10) {
    const response = await fetch(
      `${API_BASE_URL}/api/feedback?page=${page}&limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch feedback');
    }
    
    return response.json();
  },

  // Get feedback by project type
  async getFeedbackByProject(projectType, page = 1, limit = 10) {
    const response = await fetch(
      `${API_BASE_URL}/api/feedback/project/${projectType}?page=${page}&limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch project feedback');
    }
    
    return response.json();
  },

  // Get feedback statistics
  async getStats() {
    const response = await fetch(`${API_BASE_URL}/api/feedback/stats/summary`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch statistics');
    }
    
    return response.json();
  },

  // Health check
  async healthCheck() {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    return response.json();
  }
};

export default feedbackAPI;
