class NoteApplication {
	constructor(author) {
		this.author = author;
		this.notes = [];
	}
	create(note_content) {
		this.notes.push(note_content);
	}
	listNotes() {
		if (this.notes.length > 0) {
			var contents = "";
			for (var i = 0; i < this.notes.length; i++){
				contents += "Note ID: "+ i +"\n"+this.notes[i]+"\nBy Author "+this.author;
			}
			return contents;
		}
		return "No Notes found";
	}
	get(note_id) {
		if (typeof(note_id) == "number") {
			if (this.notes.length > note_id) {
			return this.notes[note_id];
			}else{
				return "Invalid note id";
			}
		}else {
			return "Enter a valid number";
		}
	}
	search(search_text) {
		var found = "";
		for (var i = 0; i < this.notes.length; i++) {
			if(this.notes[i].indexOf(search_text) >= 0) {
				found += "\nNote ID: "+ i +"\n"+this.notes[i]+"\nBy Author "+this.author+"\n";
			}
		}
		if (found.length > 0) {
			return found;
		}
		else {
			return "word not found";
		}
	}
	delete(note_id) {
		if (typeof(note_id) == "number") {
			if (this.notes.length > note_id) {
				this.notes.pop(note_id);
			}
			console.log("delete");
		}else {
			return "Enter a valid number";
		}
	}
	edit(note_id, new_content) {
		if (typeof(note_id) == "number") {
			if (this.notes.length >= note_id) {
				this.notes[note_id] = new_content;
			}
		}else {
			return "Enter a valid number";
		}
	}
}