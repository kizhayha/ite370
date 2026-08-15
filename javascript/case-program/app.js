// app.js
// Case Program:
// "Write an app in react JS that will ask the user to enter his/her account
//  name and course. Create a submit button. If the button is pressed,
//  display the name and course of the user using the javascript dialog box."

function App() {
  const [name, setName] = React.useState("");
  const [course, setCourse] = React.useState("");

  function handleSubmit() {
    // Simple validation so an empty click doesn't show a blank alert
    if (name.trim() === "" || course.trim() === "") {
      alert("Please fill in both your account name and course.");
      return;
    }
    // "javascript dialog box" = window.alert()
    alert("Account Name: " + name + "\nCourse: " + course);
  }

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    marginTop: "6px",
    marginBottom: "18px",
    border: "1px solid #e5e5e5",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
  };

  const labelStyle = {
    fontSize: "13px",
    fontWeight: 600,
    color: "#555",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
  };

  return (
    <div
      style={{
        width: "320px",
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "10px",
        padding: "32px",
      }}
    >
      <h1
        style={{
          fontSize: "20px",
          fontWeight: 700,
          margin: "0 0 4px 0",
          color: "#d62828",
        }}
      >
        Student Account Form
      </h1>
      <div style={{ height: "3px", width: "36px", background: "#d62828", marginBottom: "24px" }} />

      <label style={labelStyle}>Account Name</label>
      <input
        style={inputStyle}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <label style={labelStyle}>Course</label>
      <input
        style={inputStyle}
        type="text"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Enter your course"
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "12px",
          background: "#d62828",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "14px",
          fontWeight: 600,
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.target.style.background = "#a81f1f")}
        onMouseOut={(e) => (e.target.style.background = "#d62828")}
      >
        Submit
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);