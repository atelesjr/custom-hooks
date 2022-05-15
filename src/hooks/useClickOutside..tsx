import { useEffect} from 'react';

export const useClickOutside = (ref:any, action:any)  => {
    
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event:any) {
        if (ref.current && !ref.current.contains(event.target)) {
        //console.log("You clicked outside of me!");
         action();
        }
      }
  
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, action]);
    
}