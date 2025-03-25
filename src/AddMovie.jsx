
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();

  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Movie added hypothetically");
    navigate("/"); 
  };

  return (
    <div>
      <div className="header">
        <h1>Add a New Movie</h1>
      </div>
      <div className="Form">
        <form onSubmit={handleSubmit}>
          {/* Title Field */}
          <div className="form-component">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
          </div>
          
          {/* Director Field */}
          <div className="form-component">
            <label htmlFor="director">Director:</label>
            <input type="text" id="director" name="director" required />
          </div>
          
          {/* Genre Field */}
          <div className="form-component">
            <label htmlFor="genre">Genre:</label>
            <select id="genre" name="genre" required>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
              <option value="Sci-fi">Sci-fi</option>
              <option value="Horror">Horror</option>
            </select>
          </div>
          
          {/* Release Field */}
          <div className="form-component">
            <label htmlFor="release">Release Year:</label>
            <input
              type="number"
              id="release"
              name="release"
              min="1900"
              max="2025"
              required
            />
          </div>
          
          {/* Synopsis Field */}
          <div className="form-component">
            <label htmlFor="synopsis">Synopsis:</label>
            <textarea id="synopsis" name="synopsis" rows="4" required></textarea>
          </div>
          
          {/* Poster Field */}
          <div className="form-component">
            <label htmlFor="poster">Poster URL:</label>
            <input type="url" id="poster" name="poster" required />
          </div>
          
          {/* Submit and Cancel Buttons */}
          <div className="form-component">
            <button type="submit">Submit</button>
            <button
              type="button"
              onClick={() => navigate("/")}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
