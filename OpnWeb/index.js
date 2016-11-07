
var businessName = document.getElementById("businessName");
var contactName = document.getElementById("contactName");
var businessTypeOne = document.getElementById("businessTypeOne");
var businessTypeTwo = document.getElementById("businessTypeTwo");
var businessTypeThree = document.getElementById("businessTypeThree");
var mondayOpen = document.getElementById("mondayOpen");
var mondayClose = document.getElementById("mondayClose");
var tuesdayOpen = document.getElementById("tuesdayOpen");
var tuesdayClose = document.getElementById("tuesdayClose");
var wednesdayOpen = document.getElementById("wednesdayOpen");
var wednesdayClose = document.getElementById("wednesdayClose");
var thursdayOpen = document.getElementById("thursdayOpen");
var thursdayClose = document.getElementById("thursdayClose");
var fridayOpen = document.getElementById("fridayOpen");
var fridayClose = document.getElementById("fridayClose");
var saturdayOpen = document.getElementById("saturdayOpen");
var saturdayClose = document.getElementById("saturdayClose");
var sundayOpen = document.getElementById("sundayOpen");
var sundayClose = document.getElementById("sundayClose");
var addressLineOne = document.getElementById("addressLineOne");
var addressLineTwo = document.getElementById("addressLineTwo");
var city = document.getElementById("city");
var state = document.getElementById("state");
var zip = document.getElementById("zip");
var phoneNumber = document.getElementById("phoneNumber");
var website = document.getElementById("website");
var userDescription = document.getElementById("userDescription");

var submitBtn = document.getElementById("submitBtn");
//var opnHeading = document.getElementById("opnHeading");

var firebaseHeadingRef = firebase.database().ref().child("Heading");

firebaseHeadingRef.on('value', function(datasnapshot){
  //opnHeading.innerText = datasnapshot.val();
});

function submitClick() {

  	//alert('butts')
  var firebaseRef = firebase.database().ref().child("business-list")
  // var rootRef = firebase.database().ref().child("business-list");
  // rootRef.on("child_added", snap => {
  // 	var businessName = snap.child("businessName").val()
  // 	var contactName = snap.child("contactName").val()
  // 	alert(businessName);
  // });
  var child = businessName.value;
  var childRef = firebaseRef.child(child);
  var bizName = businessName.value;
  childRef.child("businessName").set(bizName);
  var cntctName = contactName.value;
  childRef.child("contactName").set(cntctName);
  var bt1 = businessTypeOne.value;
  childRef.child("businessTypeOne").set(bt1);
  var bt2 = businessTypeTwo.value;
  childRef.child("businessTypeTwo").set(bt2);
  var bt3 = businessTypeThree.value;
  childRef.child("businessTypeThree").set(bt3);
  var mO = mondayOpen.value;
  childRef.child("mondayOpen").set(mO);
  var mC = mondayClose.value;
  childRef.child("mondayClose").set(mC);
  var tuO = tuesdayOpen.value;
  childRef.child("tuesdayOpen").set(tuO);
  var tuC = tuesdayClose.value;
  childRef.child("tuesdayClose").set(tuC);
  var wO = wednesdayOpen.value;
  childRef.child("wednesdayOpen").set(wO);
  var wC = wednesdayClose.value;
  childRef.child("wednesdayClose").set(wC);
  var thO = thursdayOpen.value;
  childRef.child("thursdayOpen").set(thO);
  var thC = thursdayClose.value;
  childRef.child("thursdayClose").set(thC);
  var fO = fridayOpen.value;
  childRef.child("fridayOpen").set(fO);
  var fC = fridayClose.value;
  childRef.child("fridayClose").set(fC);
  var saO = saturdayOpen.value;
  childRef.child("saturdayOpen").set(saO);
  var saC = saturdayClose.value;
  childRef.child("saturdayClose").set(saC);
  var suO = sundayOpen.value;
  childRef.child("sundayOpen").set(suO);
  var suC = sundayClose.value;
  childRef.child("sundayClose").set(suC);
  var add1 = addressLineOne.value;
  childRef.child("addressLineOne").set(add1);
  var add2 = addressLineTwo.value;
  childRef.child("addressLineTwo").set(add2);
  var cty = city.value;
  childRef.child("city").set(cty);
  var st = state.value;
  childRef.child("state").set(st);
  var zp = zip.value;
  childRef.child("zip").set(zp);
  var phone = phoneNumber.value;
  childRef.child("phoneNumber").set(phone);
  var site = website.value;
  childRef.child("website").set(site);
  var uD = userDescription.value;
  childRef.child("userDescription").set(uD);

  //console.log("hello", firebaseRef.push().set(bizName));

}
