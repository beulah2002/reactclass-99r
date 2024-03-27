const Nestedcondition=()=>{
    let arrayObject=[{
        name:"krian",
        marks:37,
        id:3
    },{
      name:"antony",
     marks:90,
     id:8
    },{
      name:"praveen",
      marks:50,
      id:7
    },{
     name:"divya",
      marks:80,
      id:5
    },{
        name:"navya",
        marks:45,
        id:10
    }
   

    ]
    return(
       <div>
        <h1>sudents marks</h1>
        {
            arrayObject.map((eachobject)=>{
                const{marks,name,id}= eachobject
                return(
                    <div key={id}>
                        <h2>{name}</h2>
                        <h3>marksobtian{marks}</h3>
                        {
                            marks>90?<h5>A+</h5>:marks>80?<h5>A</h5>:marks>60?<h5>B+</h5>:marks>40?<h5>pass</h5>:<h5>better  luck next time,your near to goal</h5>
                        }
                        <div style={{width:"30%",height:2,backgroundColor:"blue"}}></div> 
                    </div>
                

                )
            })
        }
       </div>
    )
}
export default Nestedcondition