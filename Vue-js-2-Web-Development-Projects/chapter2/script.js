// New VueJS instance      
new Vue({
  // CSS selector of the root DOM element        
  el: '#notebook',
  // Some data        
  data() {
    return {
      content: localStorage.getItem('content') || 'You can write in **markdown**',
      // New! A note array
      notes: [],
      // Id of the selected note
      selectedId: null,
    }
  },
  // Computed properties
  computed: {
    notePreview() { 
      // Markdown rendered to HTML    
      return marked(this.content)
    },
    addButtonTitle() {
      return this.notes.length + ' note(s) already'
    },
  },
  
  // Change watchers  
  watch: {
    // Watching 'content' data property    
    content (val, oldVal) {
      console.log('new note:', val, 'old note:', oldVal),
      console.log('saving note:', this.content)
      localStorage.setItem('content', this.content)
    },
  },
  
  methods: {
    saveNote() {
      console.log('saving note:', this.content)
      localStorage.setItem('content', this.content)
      this.reportOperation('saving')
    },
    reportOperation (opName) {
      console.log('The', opName, 'operation was completed!')
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
  },

  // This will be called when the instance is ready  
  created() { 
    // Set the content to the stored value    
    // or to a default string if nothing was saved    
    this.content = localStorage.getItem('content') || 'You can write in **markdown**'
  },
})

console.log('restored note:', localStorage.getItem('content'))