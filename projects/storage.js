window.projectStorage={
 read(key){try{const value=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(value)?value:[]}catch{return[]}},
 write(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch{return false}}
};
