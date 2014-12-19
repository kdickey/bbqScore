/******************************************************
* bbqScore accepts a number and returns the score
*    based on the KCBS weight method.
*
* @param int inScore is the score to be translated
*
* return value array object with 3 name/key pairs.
*
* Written by Kelby Dickey
* Date: 12/19/2014
* Version: 1.0
*
******************************************************/
function bbqScore(inScore){
	if(!isNaN(inScore)){
		var dAppWt=.56 //Appearance weight
		var dTstWt=2.2972 //Taste weight
		var dTndWt=1.1428 //Tenderness weight

		var iApp=0;
		var iTst=0;
		var iTnd=0;
		var i1=0;
		var i2=0;
		var i3=0;

		while (i1<=9){ 
			while (i2<=9){
				while (i3<=9){
					if ((i1*dAppWt)+(i2*dTstWt)+(i3*dTndWt)==inScore){
						iApp=i1;
						iTst=i2;
						iTnd=i3;
						return {apperance:iApp, taste:iTst, tenderness:iTnd};
		            }  
					i3=i3+1;
				} //end of i3
				i2=i2+1;
				i3=0;
			} //end of i2
			i1=i1+1;
			i2=0;
			i3=0;
		} // end of i1
	}	
	return {apperance:null, taste:null, tenderness:null};
}