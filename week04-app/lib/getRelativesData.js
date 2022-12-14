import fs from 'fs';
import path from 'path';

const getData = path.join(process.cwd(), 'jsondata');

export function getSecondIDs(){
  const fspath = path.join(getData, 'relativesData.json');
  const jsonStringData = fs.readFileSync(fspath, 'utf8');
  const jsonObject = JSON.parse(jsonStringData);
  const returnData = jsonObject.map(item => {
      return {
        params: {
          id: item.id.toString()
        }
      }
    }
  );
  return returnData;
}

export function getSecondList(){
  const fspath = path.join(getData, 'relativesData.json');
  const jsonStringData = fs.readFileSync(fspath, 'utf8');
  const jsonObject = JSON.parse(jsonStringData);
  jsonObject.sort(function(x, y) {
      return x.name.localeCompare(y.name);
    }                 
  );

  return jsonObject.map(item => {
      return {
        id: item.id.toString(),
        name: item.name
      }
    }
  );
}

export async function getSecondData(idRequest){
  const fspath = path.join(getData, 'relativesData.json');
  const jsonStringData = fs.readFileSync(fspath, 'utf8');
  const jsonObject = JSON.parse(jsonStringData);
  const objectFilter = jsonObject.filter( object => {
      return object.id.toString() === idRequest;
    }    
  );

  let objectReturn;
  if(objectFilter.length > 0) {
    objectReturn = objectFilter[0];
  }
  else {
    objectReturn = {};
  }

  return objectReturn;
}