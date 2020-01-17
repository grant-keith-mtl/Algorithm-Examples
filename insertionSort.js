var A = [1,3,5,4,2,6];
function insertionSort(A){
    var key;
    var i;
    var j;
    for(j = 1; j <= A.length; j++){
        key = A[j];
        i = j-1;
        while(i>0 && A[i]>key){
            A[i+1] = A[i];
            i--;
        }
        A[i+1] = key;
    }
    
}