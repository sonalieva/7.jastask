let fileInput = document.getElementById('filesinput');
let uploadimg =document.getElementById('imgsupload');

fileInput.addEventListener('change', function () {
    [...this.files].forEach(file => {
        if (file.type.startsWith('image/')) {
            let reader = new FileReader();
            reader.onload = function () {
                
                let div = document.createElement('div')
                let img = document.createElement('img');
                img.setAttribute('src', reader.result);
                imgSection.appendChild(div);
                div.appendChild(img);
                div.appendChild(boxs);
                boxs.addEventListener('click', function () {
                    boxs.parentElement.remove();
                })
            }
            reader.readAsDataURL(file);
        }
        else {
            console.log("aaaaaa")
            this.value = ''
        }
    })
})
let imgUploadBox = document.getElementById('imgUploadBox');

imgUploadBox.addEventListener('click', function (e) {
    fileInput.click();
})
