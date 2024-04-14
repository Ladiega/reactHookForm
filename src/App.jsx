import { useForm } from "react-hook-form"

export default function App() {
  const { register, handleSubmit,
    formState: {errors}
        
  } = useForm();
  console.log(errors);
  
  const onSubmit = handleSubmit((data) => {
    console.log(data)

  })

  return (
    <form onSubmit={onSubmit}>
      <label id="nombre"  htmlFor="nombre">
        Nombre
      </label>
      <input type="text"
        {...register("nombre", {
          required: {
            value: true,
            message:"Nombre es Obligatorio."
          },
          minLength: {
            value: 2,
            message:"Tu nombre debe tener minino 2 caracteres."            
          },
          maxLength: {
            value: 30,
            message:"Tu nombre tiene mas de 30 caracteres."
          },
          pattern: {
            value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'°]+$/,
            message:"Caracteres no validos para este campo"
          }
        })}
      />
      {
        errors.nombre && <span>{errors.nombre.message}</span>
      }

      {/* <input type="text"
        {...register("nombre", {
          required: true,
          minLength: 2,
          maxLength: 30,
        })}
      /> */}

      {/* /VALIDACION MANUAL */}
      
      {/* {
        errors.nombre?.type === "required" && <span>Nombre es Obligatorio</span>
      }
      {
        errors.nombre?.type === "minLength" && <span>Tu nombre debe tener minimo 2 caracteres</span>
      }
      {
        errors.nombre?.type === "maxLength" && <span>Tu nombre tiene mas de 30 caracteres</span>
      } */}

      <label id="correo" htmlFor="correo">Correo</label>
      <input type="email"
        {...register("correo", {
          required: {
            value: true,
            message:"Correo es Obligatorio"
          },
          pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
            message:"Correo no valido"
            
          }
          
        })}
      />

      {
        errors.correo && <span>{errors.correo.message}</span>
      }

      <label id="password" htmlFor="password">Password</label>
      <input type="password"
        {...register("password", {
          required: {
            value: true,
            message:"Validar Contraseña"
          },
        })}
      />
      {
        errors.password && (
          <span>{errors.password.message}</span>
        )
      }
      <label id="confirmarpassword" htmlFor="confirmarpassword">ConfirmarPassword</label>
      <input type="password"
        {...register("confirmarpassword", {
          required: {
            value: true,
            message: "Confirmar Contraseña es obligatorio"
          }
        })}
      />

      {
        errors.confirmarpassword && (
          <span>{errors.confirmarpassword.message }</span>
        )
      }

      <label id="fechaNacimiento" htmlFor="fechaNacimiento">Fecha de Nacimento</label>
      <input type="date"
        {...register("fechaNacimiento", {
          required: {
            value: true,
            message:"Fecha de nacimiento es obligatorio"
          },
          validate: (value) => {
            const fechaNacimiento = new Date(value);
            const fechaActual = new Date();
            const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

            return edad >= 18 || "Debes ser mayor de 18 años";
           
            // if (edad >= 18) {
            //   return true
            // } else {
            //   return "Debes ser mayor de 18 años."
            // }

          },
        })}
      />

      {
        errors.fechaNacimiento && <span>{errors.fechaNacimiento.message }</span>
      }

      <label id="terminos" htmlFor="terminos">Acepto Terminos y Condiciones</label>
      <input type="checkbox"
        {...register("terminos", {
          required:true
        })}
      />

      <button>Enviar</button>

    </form>
  )
}