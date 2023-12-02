import React from "react";

function AdminConsole(){
    let allContacts;
    const {filter, setFilter} = useState("");
  var findElement = contacts.filter((contact)=>{
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  function mapElements(elements){
    if(elements){
      return elements.map((contact)=>{
        <Card
        name={contact.name}
        img ={contact.img}
        phone= {contact.phone}
        />
      });
    }
    return undefined;
  }

  allContacts = mapElements(findElement);

  function filterListener(event){
    setFilter(event.target.value);
    console.log(event.target);
  }

  return (
    <>
      <div>
        <input type='text' placeholder='Filter' name='filter' onChange={filterListener } value={filter}/>
      </div>
      {allContacts && allContacts.length >0 ? {allContacts} : { 
        
      }}
      </>

  );

}
export default AdminConsole;