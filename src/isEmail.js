export default function isEmail(e){
    
        const  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if(!e.target.value.match(mailformat)) {
                    return true
                }
         
}