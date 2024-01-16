
        function fileValidation() {
            var fileInput = 
                document.getElementById('formFile');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions = /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;
             
            if (!allowedExtensions.exec(filePath)) {
                alert('Invalid file type');
                fileInput.value = '';
                document.getElementById("msg").innerHTML=("select valid file")
                return false;
            }
            else{
                true
                document.getElementById("msg").innerHTML=("Success")
            }
        }