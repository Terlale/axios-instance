//FETCH
            // const Post = (name,reorderLevel) =>{
            //     fetch(`https://northwind.vercel.app/api/products`,{
            //     method:"Post",
            //     headers: {
            //     "Content-Type": "application/json",
            //     },
            //     body : JSON.stringify({
            //         name: name,
            //         reorderLevel:reorderLevel
            //     })
            // })
            // .then((res) => res.json())
            // .then((data)=>{
            //     console.log(data)
            // })
            // }

            // const arr = []
            // fetch('https://northwind.vercel.app/api/products')
            // .then(response => response.json())
            // .then((data) => {
            //    arr.push(data.filter((item) => item.supplier?.companyName == "New Orleans Cajun Delights"))
            //    console.log(arr)
            // });

        
            // const Update =(id,name)=>{
            //  fetch(`https://northwind.vercel.app/api/products/${id}`,{
            //      method:"PATCH",
            //      headers: {
            //      "Content-Type": "application/json",
            //      },
            //      body:JSON.stringify({
            //          name: name,
            //      })
            //  })
            //  .then((res) => res.json())
            //  .then((data)=>{
            //      console.log(data)
            //  })
            // }

            // const del =(id)=>{
            //  fetch(`https://northwind.vercel.app/api/products/${id}`,{
            //      method:"DELETE"
            //  })
            //  .then((res)=>res.json())
            //  .then((data)=>{
            //      console.log(data)
            //  })
            // }

    
    //AXIOS
            // const Post =(name,quantityPerUnit)=>{
            //     axios.post("https://northwind.vercel.app/api/products",{
            //     name: name,
            //     quantityPerUnit:quantityPerUnit
            // })
            // .then((response)=>{
            //     console.log(response.data)
            // })
            // }


            // const arr = [];
            // axios.get(`https://northwind.vercel.app/api/products`)
            //   .then((res) => {
            //     const filteredData = res.data.filter((item) => item.supplier?.companyName === "New Orleans Cajun Delights");
            //     arr.push(filteredData);
            //   });
            //   console.log(arr);



            // const Update = (id, name) =>{
            //  axios.patch(`https://northwind.vercel.app/api/products/${id}`,{
            //      name: name
            //  })
            //  .then((res)=>{
            //      console.log(res.data)
            //  })
            // }

           

            // const del = (id) =>{
            //     axios.delete(`https://northwind.vercel.app/api/products/${id}`)
            //     .then((res)=>{
            //     console.log(res.data)
            // })
            // }

    //AXIOS INSTANCE
            // const instance = axios.create({
            //     baseURL: `https://northwind.vercel.app/api`,
            //     headers: {"X-Custom-Header": "foobar" }
            // })

          
            // const postAxios = (name, quantityPerUnit) => {
            // instance
            //   .post("products", {
            //     name,
            //     quantityPerUnit,
            //   })
            //   .then((res) => {
            //     console.log(res.data);
            //   });
            //;

            // const Update = (id,name) =>{
            //  instance.patch(`products/${id}`,{
            //      name: name
            //  }).then((res)=>{
            //      console.log(res.data)
            //  })
            // }

            // const del = (id) =>{
            //     instance.delete(`products/${id}`)
            //     .then((res)=>{
            //         console.log(res.data)
            //     })
            // }