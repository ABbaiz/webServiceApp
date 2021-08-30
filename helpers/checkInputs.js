module.exports = (body,required) =>{
  dataEmpty = [];
  checked = true
  required.forEach((item, i) => {
    if(body[item] == undefined){
      checked = false
    }
    else if(body[item] == ''){
      checked = false
      dataEmpty.push(item.replace('_',' '))
    }
  });
  if(!checked){
    return {'status':false,files:dataEmpty}
  }
  return {'status':true}
}
