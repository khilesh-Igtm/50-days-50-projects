const counter = document.querySelectorAll('.counter');
counter.forEach(coun=>{
    // at starting the inner text will be 0 for all social media.
    coun.innerText = '0'
    const updateCounter = ()=>{
        // by using + in front of this , the data will be of number datatype.
        // initially it is string , checkout in html file.
        const target = +coun.getAttribute('data-target')
        // this getAttribute method will get the attribute of data-target from the coun, which is one
        // element from the counter i.e, 12000,5000,7000. And this all is stored in target variable.
    //    now we take the innerText of coun and change to number. So, that we can increment it's value.
        const c = +coun.innerText
        // how much we want to increment it by , divide 12000/200, 5000/200 and 7000/200 we get 60,25,35 .
        // so each will increment by 60,25 and 35 and give the final output.
    //    but if we divide by 1000 each element then it will execute slow  bcz the quotient will be 12,5,7 . so at each
    // iteration it will increment only 12,5,and7.
        const increment = target/200

        // we do not want to cross our target.
       if(c<target){
        coun.innerText = `${Math.ceil(c+increment)}`
// there will be 1 millisecond duration between each number increment.
        setTimeout(updateCounter,1)
       }else{
        counter.innerText = target
       }
    }
    updateCounter()
})