import React from 'react';
import '../ReportForm.css';

const ReportLostForm: React.FC = () => {
  return (
    <div className="report-form-container">
      <h1>Report a Lost Item</h1>
      <form>
        <div className="form-group">
          <label htmlFor="itemName">What did you lose?</label>
          <input type="text" id="itemName" placeholder="e.g., Black leather wallet" required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Where did you last have it?</label>
          <input type="text" id="location" placeholder="e.g., Central Park near the fountain" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" placeholder="Add any details like brand, color, or identifying marks."></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="imageUpload">Upload a Photo (optional)</label>
          <input type="file" id="imageUpload" accept="image/*" />
        </div>
        <button type="submit" className="submit-btn">Submit Lost Report</button>
      </form>
    </div>
  );
};

export default ReportLostForm;