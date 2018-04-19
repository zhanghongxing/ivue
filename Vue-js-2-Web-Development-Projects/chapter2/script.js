// New VueJS instance      
new Vue({
  // CSS selector of the root DOM element        
  el: '#notebook',
  // Some data        
  data() {
    return {
      content: 'I\'m in **bold**! **Bold** *Italic* [link]http://vuejs.org',
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
    content: 'saveNote',
  },
  
  methods: {
    saveNote(val) {
      console.log('saving note:', val)
      localStorage.setItem('content', val)
    },
  },
  
})