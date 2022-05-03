function getProvince(id){
    return new Promise((resolve,reject)=>{
        resolve({id,provincenames:[{
            id:id,
            names:'Kigali'
        },{
            id:id,
            names:'North'
        },{
            id:id,
            names:'South'
        }]
    })
    }, 2000);
}
const getDistrictsByProvince=(provincenames)=>{
    return new Promise((resolve,reject)=>{
        resolve({provincenames,districtnames:['Kicukiro','Rubavu','Musanze','Nyabihu']})
    }, 2000);
}
const getSectorsByDistrict=(districtnames)=>{
    return new Promise((resolve,reject)=>{
        resolve({districtnames,sectors:['a','b','c','d']})
    }, 2000);
}
async function display() {
    const provincenow= await getProvince(1)
    const getProvince=await getDistrictsByProvince(provincenow.provincenames)
    console.log(getProvince)
    const getSectorsByDistrictnow=await getSectorsByDistrict(getProvince.districtnames)
    console.log(getSectorsByDistrictnow)
}
display()