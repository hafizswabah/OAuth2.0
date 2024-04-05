import Swal from 'sweetalert2'
import axios from 'axios';

export default function LogOut(){
    Swal.fire({
        title: "Are you sure?",
        text: "You are trying to logout from this app!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes,Log out!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then(async(result) => {
        if (result.isConfirmed) {
            await axios.get("user/logout");
          Swal.fire({
            title: "Logout!",
            text: "Logout succesfully",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
            Swal.fire({
            title: "Cancelled",
            text: "Your Logout cancelled:)",
            icon: "error"
          });
        }
      });
  }