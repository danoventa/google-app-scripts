// In the appscript project, when you enter the below code, and change the 
// folderId, searchText and replaceText vars, select `run` right above the function.
function replaceTextInFolder() {
    // Replace these with your values
    // Folder ID is the seemingly random letters, numbers and underscores after the 
    // folders of the url, e.g., https://drive.google.com/drive/folders/ABC_abC12345_3456_jk?ths=true
    // the ID will be `ABC_abC12345_3456_jk`
    var folderId = 'ABC_abC12345_3456_jk';
    var searchText = 'TEXT_TO_FIND';
    var replaceText = 'TEXT_TO_REPLACE';
  
    var folder = DriveApp.getFolderById(folderId);
    var files = folder.getFilesByType(MimeType.GOOGLE_DOCS);
    
    while (files.hasNext()) {
      var file = files.next();
      var doc = DocumentApp.openById(file.getId());
      var body = doc.getBody();
      body.replaceText(searchText, replaceText);
      doc.saveAndClose();
    }
  }