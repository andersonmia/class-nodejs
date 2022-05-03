console.log("Before");

getProvince(1, (name) => {
  console.log(name);
  getDistrictsByProvince(name.provinceName, (districts) => {
    console.log(districts);
  });
});

function getProvince(id, callback) {
  setTimeout(() => {
    callback({ id: id, provinceName: "Kgl" });
  }, 2000);
}
function getDistrictsByProvince(provinceName, callback) {
  setTimeout(() => {
    callback({ id: provinceName, districts: [1, 2, 3] });
  }, 2000);
}
console.log("After");
function getSectorsByDistrict(districts, callback) {
  setTimeout(() => {
      callback({districts: districts, sectors: ["sector1", "sector2", "sector3"]});
  }, 2000);
}