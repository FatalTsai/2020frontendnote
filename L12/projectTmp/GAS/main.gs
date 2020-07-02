let doGet = (e)=>{
  if(e.parameter.method == "write1"){
    return write1(e);
  }
}

let doPost = (e)=>{
  if(e.parameter.method == "read1"){
    return read1(e);
  }else if(e.parameter.method == "write1"){
    return write1(e);
  }
}

let read1 = (e)=>{
  let returnObj = new Object();
  returnObj.result = "fail";
  
  let sheetURL = e.parameter.url;
  let sheetTAG = e.parameter.tag;
  let SpreadSheet = SpreadsheetApp.openByUrl(sheetURL);
  let Sheet = SpreadSheet.getSheetByName(sheetTAG);
  
  let startRow = 1;
  let startColumn = 1;
  let endRow = Sheet.getLastRow();
  let endColumn = Sheet.getLastColumn();
  let allData = Sheet.getSheetValues(startRow, startColumn, endRow, endColumn);
  
  returnObj.result = "sus";
  returnObj.allData = allData;
  
  Logger.log(returnObj);
  let JSONString = JSON.stringify(returnObj);
  Logger.log(JSONString);
  return ContentService.createTextOutput(JSONString).setMimeType(ContentService.MimeType.JSON);  
}
  
let write1 = (e)=>{
  let returnObj = new Object();
  returnObj.result = "fail";
  
  let sheetURL = "https://docs.google.com/spreadsheets/d/1cs5LxDLvToTURdw6U2G7NbHPncaVRBFD7wU2O87SvKI/edit#gid=0";
  let sheetTAG = "工作表1";
  let SpreadSheet = SpreadsheetApp.openByUrl(sheetURL);
  let Sheet = SpreadSheet.getSheetByName(sheetTAG);
  
  let LastRow = Sheet.getLastRow();
  
  let name = e.parameter.name;
  let score = e.parameter.score;
  
  let date = new Date();
  let fullDate = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
  let now = fullDate + " " + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  let timestamp = Date.now();
  
  let data = [timestamp, name, score, now];
  data.forEach((e,i)=>{
   Sheet.getRange(LastRow+1, i+1).setValue(e);
   returnObj.result = "sus";
  });
  

  let JSONString = JSON.stringify(returnObj);
  Logger.log(JSONString);
  return ContentService.createTextOutput(JSONString).setMimeType(ContentService.MimeType.JSON);
}