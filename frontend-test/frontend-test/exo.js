var WATER_POINT_TYPE = "WATER";
var EARTH_POINT_TYPE = "EARTH";
var POINT_TYPES = [WATER_POINT_TYPE, EARTH_POINT_TYPE];

var DEFAULT_WATER_COLOR = [30, 144, 255];
var DEFAULT_EARTH_COLOR = [105, 105, 105];
var DEFAULT_COLORS = {
  [WATER_POINT_TYPE]: DEFAULT_WATER_COLOR, // blue
  [EARTH_POINT_TYPE]: DEFAULT_EARTH_COLOR, // dark grey
};

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

class Map {
  constructor(height, width) {
    var map = [];
    for (var i = 0; i < height; i++) {
      var row = [];
      for (var j = 0; j < width; j++) {
        row.push(this.generatePointType());
      }
      map.push(row);
    }
    this.map = map;
  }

  generatePointType() {
    return POINT_TYPES[generateRandomInteger(2)];
  }

  generateRandomColor() {
    var color = undefined;
    while (!color || Object.keys(DEFAULT_COLORS).includes(color)) {
      color = [];
      for (var i = 0; i < 3; i++) {
        color.push(generateRandomInteger(256));
      }
    }
    return color;
  }

  getRawMap() {
    var rawMap = [];
    for (var i = 0; i < this.map.length; i++) {
      var row = [];
      for (var j = 0; j < this.map[i].length; j++) {
        row.push(DEFAULT_COLORS[this.map[i][j]]);
      }
      rawMap.push(row);
    }
    return rawMap;
  }

  getColoredMap() {
    // TODO: That's where you work
    let value = this.generateRandomColor();
   
    let arrayOfColor = []
    arrayOfColor.push(value)
    console.log('color:', value)
    let getRow = this.getRawMap()


    for(var i =0 ; i<getRow.length; i++) {
      for(var j=0; j<getRow[i].length; j++) {
        // check if index i, j is earth by concatinating array with join()
        if (getRow[i][j].join() === DEFAULT_EARTH_COLOR.join()){
          // if is earth we need to color the earth point and start check 
          // the top left bottom and rigth if it's earth

        
        getRow[i][j] = value
        //  if (getRow[i+1][j]) {

        //  }
          
           

        }
       
      }

    }
    return getRow
  }

  getTopIndexMap(i, j, row) {
  console.log('j:', j)
  console.log('i:', i)

  }
  getBottomIndexMap(i, j, row) {

  }
  getLeftIndexMap(i, j, row) {

  }
  getRightIndexMap(i, j, row) {

  }

}
