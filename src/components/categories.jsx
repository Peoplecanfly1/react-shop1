import React from "react";


export default class Categories extends React.Component {
  state = {
    activeItem: null,
  };

  onSelectedItem = index =>{
      this.setState({
          activeItem : index,
      })
  }

  render() {
    const { items, onClickItem } = this.props;

    return (
      <div className="categories">
        <ul>
          <li className="active">Все</li>
          {items.map((item, index) => (
            <li
              className={this.state.activeItem === index ? "active" : ""}
              onClick={() => this.onSelectedItem(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// export default function Categories({ items, onClickItem }) {
//   console.log(onClickItem);
//   return (
//     <div className="categories">
//       <ul>
//         <li className="active">Все</li>
//         {items.map((item, index) => (
//           <li onClick={() => onClickItem(item)} key={`${item}_${index}`}>
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
