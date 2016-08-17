class Note {
	constructor(author, text) {
		this.author = author;
		this.text = text;
	}
}
class NoteApplication {
	constructor() {
		this.notes = [];
	}
	create(note_content) {
		if (note_content instanceof Note) {
			this.notes.push(note_content);
			return this.notes;
		}
	}
	listNotes() {
		if (this.notes.length > 0) {
			var contents = "";
			for (var i = 0; i < this.notes.length; i++){
				contents += "Note ID: "+ i +"\n"+this.notes[i]['text']+"\nBy Author "+this.notes[i]['author']+"\n\n";
			}
			return contents;
		}
		return "No Notes found";
	}
	get(note_id) {
		if (typeof(note_id) == "number") {
			if (this.notes.length > note_id) {
				return this.notes[note_id]['text'];
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
			if(this.notes[i].text.indexOf(search_text) > -1) {
				found += "\nNote ID: "+ i +"\n"+this.notes[i].text+"\nBy Author "+this.notes[i].author+"\n";
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