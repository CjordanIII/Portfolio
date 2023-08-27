


export default function Email(){
    function sendMail(){
        window.open("mailto:Clarencejordan087@gmail.com ?subject=subject&body=body")
    }
   
    return (
      <div>
        <a href="#" onClick={sendMail}>
          <h1>Email</h1>
        </a>
      </div>
    );
}