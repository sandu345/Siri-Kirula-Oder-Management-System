// import React from 'react';
// import { Link } from 'react-router-dom';
// import './verticalNavStyling.css'; // Import the custom CSS
// import logo from './images/logo.jpg';

// function VerticalNav({ links }) {
//   return (
//     <div className="vertical-nav">
//       <img src={logo} alt="Logo" className="nav-logo" />
//       <nav>
//         <ul>
//           {links.map(link => (
//             <li key={link.name}>
//               <Link to={link.path}>{link.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default VerticalNav;
import React from 'react';
import { Link } from 'react-router-dom';
import './verticalNavStyling.css'; // Import the custom CSS
import logo from './images/logo.jpg';

function VerticalNav({ links }) {
  return (
    <div className="vertical-nav">
      <img src={logo} alt="Logo" className="nav-logo" />
      <nav>
        <ul>
          {links.map(link => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default VerticalNav;
