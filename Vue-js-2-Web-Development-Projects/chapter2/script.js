Vue.filter('date', time => moment(time).format('DD/MM/YY, HH:mm'))

// New VueJS instance      
new Vue({
  // CSS selector of the root DOM element        
  el: '#notebook',
  // Some data        
  data() {
    return {
      // New! A note array
      // notes: [],
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      // Id of the selected note
      selectedId: localStorage.getItem('selected-id') || null,
    }
  },
  // Computed properties
  computed: {
    notePreview() { 
      // Markdown rendered to HTML    
      return this.selectedNote ? marked(this.selectedNote.content) : ''
    },
    addButtonTitle() {
      return this.notes.length + ' note(s) already'
    },
    selectedNote() {
      // We return the matching note with selectedId          
      return this.notes.find(note => note.id === this.selectedId)
    },
    sortedNotes() {
      return this.notes.slice().sort((a, b) => a.created - b.created).sort((a, b) => (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1)
    },
    linesCount() {
      if (this.selectedNote) {
        // Count the number of new line characters            
        return this.selectedNote.content.split(/\r\n|\r|\n/).length
      }
    },
    wordsCount() {
      if (this.selectedNote) {
        var s = this.selectedNote.content
        // Turn new line cahracters into white-spaces            
        s = s.replace(/\n/g, ' ')
        // Exclude start and end white-spaces
        s = s.replace(/(^\s*)|(\s*$)/gi, '')
        // Turn 2 or more duplicate white-spaces into 1           
        s = s.replace(/\s\s+/gi, ' ')
        // Return the number of spaces
        return s.split(' ').length
      }
    },
    charactersCount() {
      if (this.selectedNote) {
        return this.selectedNote.content.split('').length
      }
    },    
  },
  
  // Change watchers  
  watch: {
    notes: {
      // The method name
      handler: 'saveNotes',
      // We need this to watch each note's properties inside the array
      deep: true,
    },
    selectedId(val){
      // The method name
      localStorage.setItem('selected-id', val)
    },
  },
  
  methods: {
    saveNotes() {
      //console.log('saving note:', this.content)
      //localStorage.setItem('content', this.content)
      localStorage.setItem('notes', JSON.stringify(this.notes))
      //this.reportOperation('saving')
      console.log('Notes saved!', new Date())
    },
    // Add a note with some default content and select it  
    addNote() {
      const time = Date.now()
      // Default new note    
      const note = {
        id: String(time),
        title: 'New note ' + (this.notes.length + 1),
        content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
        created: time,
        favorite: false,
      }
      // Add to the list
      this.notes.push(note)
    },
    // to generate guid
    uuidv4() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      )
    },
    
    selectNote (note) {
      this.selectedId = note.id
    },
    // Let's save the selection too  
    saveId (val) {
      localStorage.setItem('selected-id', val)
    },
    
    removeNote() {
      if (this.selectedNote && confirm('Delete the note?')) {
        // Remove the note in the notes array
        const index = this.notes.indexOf(this.selectedNote) 
        if (index !== -1) {
          this.notes.splice(index, 1)
        }
      }
    },
    
    favoriteNote() {
      this.selectedNote.favorite = !this.selectedNote.favorite
    },
  },

  // This will be called when the instance is ready  
  created() { 
    // Set the content to the stored value    
    // or to a default string if nothing was saved    
    // this.content = localStorage.getItem('content') || 'You can write in **markdown**'
  },
})


// console.log('restored note:', localStorage.getItem('content'))