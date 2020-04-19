
function Donate() {

}
function showhideprivate() {
	console.log(document.getElementById('Privatebutton'));
	if (document.getElementById('Privatebutton').checked===false) {document.getElementById('private').style.display='none';}
	else {document.getElementById('private').style.display='block';}
}
function showhidepublic()	{
	console.log(document.getElementById('Publicbutton'));
	if (document.getElementById('Publicbutton').checked===false) {document.getElementById('public').style.display='none';}
	else {document.getElementById('public').style.display='block';}
}
	
function showhideRegion()	{

	var selection= document.getElementById('region');
	var region= selection.options[selection.selectedIndex].value;
if (region==='North') {(document.getElementById('privateSahel').style.display='none')
	&&
 (document.getElementById('publicSahel').style.display='none') 
	&&
  (document.getElementById('privateSouth').style.display='none')
	&&
  (document.getElementById('publicSouth').style.display='none')
  &&
  (document.getElementById('privateNorth').style.display='block')
	&&
  (document.getElementById('publicNorth').style.display='block')
  
}
if (region==='All') {(document.getElementById('privateSahel').style.display='block')
	&&
 (document.getElementById('publicSahel').style.display='block') 
	&&
  (document.getElementById('privateSouth').style.display='block')
	&&
  (document.getElementById('publicSouth').style.display='block')
  &&
  (document.getElementById('privateNorth').style.display='block')
	&&
(document.getElementById('publicNorth').style.display='block')}
if (region==='Sahel') {(document.getElementById('privateNorth').style.display='none')
	&&
 (document.getElementById('publicNorth').style.display='none') 
	&&
  (document.getElementById('privateSouth').style.display='none')
	&&
  (document.getElementById('publicSouth').style.display='none')
    &&
  (document.getElementById('privateSahel').style.display='block')
	&&
  (document.getElementById('publicSahel').style.display='block')
 }

if (region==='South') {(document.getElementById('privateNorth').style.display='none')
	&&
 (document.getElementById('publicNorth').style.display='none') 
	&&
  (document.getElementById('privateSahel').style.display='none')
	&&
  (document.getElementById('publicSahel').style.display='none')
    &&
  (document.getElementById('privateSouth').style.display='block')
	&&
  (document.getElementById('publicSouth').style.display='block')
 }
}
