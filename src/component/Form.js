import { useEffect, useState } from "react"




export function Form(props){
    let {uyeler,setUyeler,editId,setEditId}=props;
   
const emptyData={
    firstName:"",
    lastName:"",
    email:"",
    position:""

};
let data=editId!=null ? uyeler[editId] : emptyData;
const [uye,setUye]=useState (emptyData);
useEffect(() => {
    //Runs only on the first render
    setUye(data);
    console.log()
  }, [editId]);

const handleChange=(e)=>{
    const{name,value}=e.target;
    setUye({...uye,[name]:value});
}
const handleSubmit=(e)=>{
    e.preventDefault();
    data=editId!=null ? editId : uyeler.length;
    const yeniuye={...uye,id:data}
    console.log(data,yeniuye,uyeler)
    editId!=null ?  uyeler[editId]=yeniuye : setUyeler([...uyeler,yeniuye]) ;
    editId!=null ?  setUyeler(uyeler) :uyeler=uyeler ;

    console.log("222222222222",data,yeniuye,uyeler)
    
    setUye(emptyData);
   setEditId(null);


}



    return(
        <form onSubmit = {handleSubmit}>

            <div>
            <label>Name:
                <input type="text" name="firstName" placeholder="isim giriniz..." onChange={handleChange} value ={uye.firstName} />
                </label>
                <label>Surname:
                <input type="text" name="lastName" placeholder="soyisim giriniz..." onChange={handleChange} value ={uye.lastName} />
                </label>
                <label>Email:
                <input type="text" name="email" placeholder="email giriniz..." onChange={handleChange} value ={uye.email} />
                </label>
                <label>Position:
                <input type="text" name="position" placeholder="pozisyon giriniz..." onChange={handleChange} value ={uye.position} />
                </label>
                <button type="submit" onChange={()=>setEditId(null)}>
                    Gönder 
                </button>
            </div>
        </form>


    )

}