let baseUrl

export default {
  install(Vue, options) {
    console.log('fetch plugin is installed!', options)
    
    baseUrl = options.baseUrl

  } 
}