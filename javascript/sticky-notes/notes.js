// notes.js
// Project Portfolio Task #1 - Sticky Note App
// A Notes component (class-based, extends React.Component) that:
//  - keeps an array of notes in state
//  - lets the user type a note and click "Add note" to save it with a timestamp
//  - lets the user "Clear notes" to empty the list
//  - lets the user "Show all notes" to view them in a dialog box
//  - renders the notes state array to the page

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      currentNote: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNote = this.addNote.bind(this);
    this.clearNotes = this.clearNotes.bind(this);
    this.showAllNotes = this.showAllNotes.bind(this);
  }

  componentDidMount() {
    // Runs once, right after the component is first rendered to the DOM
    console.log("Notes component mounted. Current notes:", this.state.notes);
  }

  handleChange(e) {
    this.setState({ currentNote: e.target.value });
  }

  addNote() {
    if (this.state.currentNote.trim() === "") return;

    const newNote = {
      text: this.state.currentNote,
      timestamp: new Date().toLocaleString()
    };

    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
      currentNote: ""
    }));
  }

  clearNotes() {
    this.setState({ notes: [] });
  }

  showAllNotes() {
    if (this.state.notes.length === 0) {
      alert("No notes yet.");
      return;
    }
    const summary = this.state.notes
      .map((n) => n.timestamp + "\n" + n.text)
      .join("\n\n");
    alert(summary);
  }

  render() {
    const buttonBase = {
      padding: "9px 16px",
      borderRadius: "6px",
      fontSize: "13px",
      fontWeight: 600,
      cursor: "pointer",
      border: "1px solid transparent",
    };

    return (
      <div
        style={{
          width: "360px",
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
          Stick Notes
        </h1>
        <div style={{ height: "3px", width: "36px", background: "#d62828", marginBottom: "24px" }} />

        <input
          type="text"
          value={this.state.currentNote}
          onChange={this.handleChange}
          placeholder="Write a note..."
          style={{
            width: "100%",
            padding: "10px 12px",
            border: "1px solid #e5e5e5",
            borderRadius: "6px",
            fontSize: "14px",
            outline: "none",
            marginBottom: "14px",
          }}
        />

        <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
          <button
            onClick={this.addNote}
            style={{ ...buttonBase, background: "#d62828", color: "#fff" }}
            onMouseOver={(e) => (e.target.style.background = "#a81f1f")}
            onMouseOut={(e) => (e.target.style.background = "#d62828")}
          >
            Add note
          </button>
          <button
            onClick={this.clearNotes}
            style={{ ...buttonBase, background: "#fff", color: "#d62828", border: "1px solid #d62828" }}
          >
            Clear notes
          </button>
          <button
            onClick={this.showAllNotes}
            style={{ ...buttonBase, background: "#fff", color: "#555", border: "1px solid #e5e5e5" }}
          >
            Show all notes
          </button>
        </div>

        <div>
          {this.state.notes.length === 0 && (
            <p style={{ color: "#999", fontSize: "13px", margin: 0 }}>No notes yet.</p>
          )}
          {this.state.notes.map((note, index) => (
            <div
              key={index}
              style={{
                borderLeft: "3px solid #d62828",
                background: "#fafafa",
                padding: "10px 14px",
                marginBottom: "10px",
                borderRadius: "4px",
              }}
            >
              <span style={{ fontSize: "11px", color: "#999", fontWeight: 600, letterSpacing: "0.02em" }}>
                {note.timestamp}
              </span>
              <p style={{ margin: "4px 0 0 0", fontSize: "14px", color: "#222" }}>{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Notes />, document.getElementById("root"));