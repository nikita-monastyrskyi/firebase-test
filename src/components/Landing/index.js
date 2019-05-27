import React, {useContext} from 'react';
import FirebaseContext from "../Firebase/context";

const MyComponent = () => {
    const Firebase = useContext(FirebaseContext);
    console.log(Firebase);
    return (
        <div>
            
        </div>
    );
};

export default MyComponent;
