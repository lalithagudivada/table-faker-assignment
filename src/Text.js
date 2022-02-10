import React from "react";
// import Faker from "faker/lib";
import faker from 'faker';


function Text(props){

  return(
    <div className="box">
      <table className="ui very basic collapsing celled table" >
<thead>
  <tr><th>{props.tag}</th>
  <th>Correct Guesses</th>
</tr></thead>
<tbody>
  <tr>
    <td>
      <h4 className="ui image header">
        <img className="ui mini rounded image" src={faker.image.image()} />
        <div className="content">
         {props.name}
          <div className="sub header">{props.a}
        </div>
      </div>
    </h4></td>
    <td>
      22
    </td>
  </tr>
  <tr>
    <td>
      <h4 className="ui image header">
        <img className="ui mini rounded image"  src={faker.image.image()} />
        <div className="content">
         {props.sec}
          <div className="sub header">Fabric Design
        </div>
      </div>
    </h4></td>
    <td>
      15
    </td>
  </tr>
  <tr>
    <td>
      <h4 className="ui image header">
        <img className="ui mini rounded image" src={faker.image.image()}  />
        <div className="content">
         {props.thir}
          <div className="sub header">Entertainment
        </div>
      </div>
    </h4></td>
    <td>
      12
    </td>
  </tr>
  <tr>
    <td>
      <h4 className="ui image header">
        <img className="ui mini rounded image" src={faker.image.image()}  />
        <div className="content">
          {props.four}
          <div className="sub header">{props.b}
        </div>
      </div>
    </h4></td>
    <td>
      11
    </td>
  </tr>
</tbody>
</table>
</div>
  )
}





export default Text;
