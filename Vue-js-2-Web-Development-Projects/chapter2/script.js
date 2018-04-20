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
    }
  },
  // Computed properties
  computed: {
    notePreview() { 
      // Markdown rendered to HTML    
      return marked(this.content)
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
  },

  // This will be called when the instance is ready  
  created() { 
    // Set the content to the stored value    
    // or to a default string if nothing was saved    
    this.content = localStorage.getItem('content') || 'You can write in **markdown**'
  },
})

console.log('restored note:', localStorage.getItem('content'))