function setTextUrlInFolder() {
    var folderId = '1H8aY_j45eV0sBWf1QXQf_xR7qWOM_AXk'; // The ID of the Google Drive folder
    var searchText = 'hyperlink'; // The text you want to find and set the URL
    var url = 'https://www.yahoo.com'; // The URL you want to set
  
    var folder = DriveApp.getFolderById(folderId);
    var files = folder.getFilesByType(MimeType.GOOGLE_DOCS);
    
    while (files.hasNext()) {
      var file = files.next();
      var doc = DocumentApp.openById(file.getId());
      var body = doc.getBody();
      setTextUrlInElement(body, searchText, url);
      doc.saveAndClose();
    }
  }
  
  function setTextUrlInElement(element, searchText, url) {
    var foundElement = element.findText(searchText);
    
    while (foundElement) {
      var text = foundElement.getElement().asText();
      var startOffset = foundElement.getStartOffset();
      var endOffset = foundElement.getEndOffsetInclusive();
      var check = text.getLinkUrl()
      if (check) {
        text.setLinkUrl(startOffset, endOffset, url);
      }
      foundElement = element.findText(searchText, foundElement);
    }
  }