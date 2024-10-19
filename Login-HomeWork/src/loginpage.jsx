import { useForm } from "react-hook-form";
import "./loginpage.css";

export default function Login() {
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    


  return (
    <>
      <form className="main-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="profile">
          <h2>Edit Profile</h2>
          <div className="img-uplod">
            <label htmlFor="image">Upload Image</label>
            <input type="file" {...register('image' , {required:'please upload an image.'})} className="img-input"/>
            {errors.image && <p>{errors.image.message}</p>}
        </div>
        </div>
        <div className="details-container">
          <div className="detilas-first-last-name">
            <div className="first-name-container">
              <label>First Name</label>
              <input
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className="last-name-container">
              <label>Last Name</label>
              <input  {...register("lastName", { required: "Last Name is required" })}/>
              {errors.lastName && <p>{errors.lastName.message}</p>}
          
            </div>
          </div>

          <div className="details">
            <label>Email</label>
            <input 
                {...register('email' , {
                    required:'Email is required',
                    pattern: {value: /\S+@\S+\.\S+/,
                        message: "Invalid email address"}
                })}
                     className="input-details" />
                     {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="details">
            <label>Address</label>
            <input 
                {...register('address', {
                    required: 'Address is required',
                    pattern: {value: /^\d+\s[A-Za-zÀ-ÿ0-9\s.,'-]+,\s?[A-Za-zÀ-ÿ\s]+,\s?\d{4}$/ ,
                        message:'Address not found'
                    }
                })}
            className="input-details" />
            {errors.address && <p>{errors.address.message}</p>}
          </div>

          <div className="details">
            <label>Contact Number</label>
            <input {...register('number' , {
                required:'Number required',
                pattern: {value: /^(?:(\+216)|0)?\s?\d{2}\s?\d{3}\s?\d{3}$/ ,
                    message:'Number not found'
                }
            })} 
            className="input-details" />
             {errors.number && <p>{errors.number.message}</p>}
          </div>

          <div className="details">
            <label>Counrty</label>
            <input type="text" className="input-details" />
          </div>

          <div className="details">
            <label>Password</label>
            <input {...register('password', {
                required:'password at least 8 characters Long',
                pattern: {value: /^.{8,}$/,
                    message:'password at least 8 characters Long'
                }
            })}
            className="input-details" />
                {errors.password && <p>{errors.password.message}</p>}

          </div>

          <div className="button-container">
            <button className="cancel-btn" >Cancel</button>
            <button className="submit-btn" type="submit">Save</button>
          </div>
        </div>
      </form>
    </>
  );
}
