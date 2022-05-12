let count = 0

 function previewFiles(input) {
   const preview = document.getElementById('preview')
   const {
     files
   } = input

   Array.from(files).forEach(file => {
     const reader = new FileReader()

     reader.onload = e => {
       const div = document.createElement('div')
       const img = document.createElement('img')
       const button = document.createElement('button')

       img.src = e.target.result
       img.width = 130
       img.height = 130
       img.alt = `file-${++count}`

       button.textContent = 'X'
       button.addEventListener('click', () => {
         preview.removeChild(div)
       })

       div.appendChild(img)
       div.appendChild(button)

       preview.appendChild(div)
     }

     reader.readAsDataURL(file)
   })
 }
    
let inpFile = document.querySelector('[name="file"]');
let div = document.querySelector('.area');
div.addEventListener("click",function() {
    this.children[1].click();
})
div.addEventListener("dragover",function(ev) {
    ev.preventDefault
})
div.addEventListener("drop",function() {
    this.children[1].click();
})
