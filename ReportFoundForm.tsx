import React from 'react';
import '../ReportForm.css';

const ReportFoundForm: React.FC = () => {
  return (
    <div className="report-form-container">
      <h1>Report a Found Item</h1>
      <form>
        <div className="form-group">
          <label htmlFor="itemName">What did you find?</label>
          <input type="text" id="itemName" placeholder="e.g., Blue backpack" required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Where did you find it?</label>
          <input type="text" id="location" placeholder="e.g., On a bench at Main Street Station" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" placeholder="Describe the item and its contents if applicable."></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="imageUpload">Upload a Photo</label>
          <input type="file" id="imageUpload" accept="image/*" required />
        </div>
        <button type="submit" className="submit-btn">Submit Found Report</button>
      </form>
    </div>
  );
};

export default ReportFoundForm;