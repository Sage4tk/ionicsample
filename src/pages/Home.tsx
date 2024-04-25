import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { eyeOutline, eyeOffOutline, pawSharp} from "ionicons/icons"

import Container from '../components/shared/Container';
import { Link } from 'react-router-dom';
import Input from '../components/shared/Input';
import { ChangeEventHandler, useEffect, useMemo, useState } from 'react';
import Button from '../components/shared/Button';
import moment from 'moment';

const Home: React.FC = () => {

  /** STATES **/
  const [showPassword, setShowpassowrd] = useState<boolean>(false);
  const [form, setForm] = useState({
    username:"",
    password:"",
    confirm: "",
    birth: "",
    email:"",
    terms: false
  });

  // Normal string input handler
  const input_change = (event:React.ChangeEvent<HTMLInputElement>) => {

    setForm({
      ...form,
      [event.target.name]: event.target.value  
    })

  }
  
  // birth date form listener
  const date_change = (event:React.ChangeEvent<HTMLInputElement>):void => {
    const incoming_date = event.target.value;
    // parse last digit
    const last_digit = parseInt(incoming_date[incoming_date.length - 1]);

    // if adding number to date
    if (incoming_date.length > form.birth.length && !isNaN(last_digit) && form.birth.length < 10) {

      // check the firsth digit in the month as it can only be 0 or 1
      if (incoming_date.length === 4 && last_digit > 1) return;
      
      // check first digit if its a valid date
      if (incoming_date.length === 1 && last_digit > 3) return;

      // after the first digit of the month checker
      if (incoming_date.length === 5 && (incoming_date[incoming_date.length - 2] === "1") && last_digit > 2) return;
      
      let new_birth = form.birth + last_digit;

      // add a slash if length is 2 or 5
      if (incoming_date.length === 2 || incoming_date.length === 5) {
        new_birth += "/"
      }

      if (incoming_date.length === 6 || incoming_date.length === 3) {
          new_birth = new_birth.slice(0,-1) + "/" + new_birth.slice(-1)
      }

      // set in form the new digit
      setForm({
        ...form,
        birth: new_birth
      })
    }

    // clear number
    if (incoming_date.length < form.birth.length) {
      setForm({
        ...form,
        birth: (incoming_date.length === 4 || incoming_date.length === 6) ? form.birth.slice(0, -2) : form.birth.slice(0,-1)
      })
    }



  }

  const form_checker = useMemo<boolean>(() => {

    if (!form.username || form.username.length <= 3) return false;

    // check birthdate
    if (form.birth.length < 10) return false;
    
    if (moment(form.birth, "DD/MM/YYYY").isSameOrAfter(moment())) return false;

    // if password is lower the 8 charcters
    if (form.password.length < 8) return false;

    // password contains 1 upper case
    if (!/\d/.test(form.password)) return false;

    // check for 1 upper chase
    if (!/[A-Z]/.test(form.password)) return false;

    // check if password has a special case
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(form.password)) return false;

    // check if valid email
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(form.email)) return false;

    // now check if password is the same with confirm password
    if (form.password !== form.confirm) return false;

    // check if user has agreed to terms
    if (!form.terms) return false;

    // return true if everything passed.
    return true;
  }, [form]);

  const submit_form = ():void => {
    // show form object in console.log and alert
    console.log(form);
    alert(JSON.stringify(form));
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <Container>

          <h1 className='font-semibold text-[28px] mt-[88px] mb-[16px]'>Let's get you started</h1>

          <div className='flex flex-row mb-[24px]'>
            <p className='mr-[8px] text-SUBTEXT'>Already have an account?</p>
            <Link className="text-LINKCOLOR font-medium" to="/login">Login</Link>
          </div>

          <div>

            <Input
              name='username' 
              value={form.username} 
              label='Username' 
              placeholder='Enter username' 
              mb='24px' 
              onChange={input_change}
            />

            <Input
             name='birth' 
             value={form.birth} 
            //  calendar
             onChange={date_change} 
             label='Date of birth' 
             placeholder='DD / MM / YYYY' 
             mb='24px'
             />

            <Input 
              name='email' 
              value={form.email} 
              onChange={input_change} 
              email label='Email address' 
              placeholder='Enter email address' 
              mb='24px'
            />


            <div className='mb-[24px]'> 

              <Input
               name='password' 
               value={form.password} 
               onChange={input_change} 
               label="Password" 
               placeholder="Enter password" 
               password={!showPassword} 
               mb="8px">
                
                  <IonIcon onClick={() => setShowpassowrd(!showPassword)}  className="h-[24px] w-[24px] pl-[16px]" icon={!showPassword? eyeOutline : eyeOffOutline} />
                
              </Input>

              <p className='text-[14px] text-SUBTEXT'>Password should contain at least 8 characters, 1 special symbol character, 1 number, 1 uppercase letter</p>

            </div>

            <Input
             name='confirm' 
             value={form.confirm} 
             onChange={input_change} 
             label="Confirm password" 
             placeholder="Confirm password" 
             password={!showPassword} 
             mb="24px">
                
              <IonIcon onClick={() => setShowpassowrd(!showPassword)}  className="h-[24px] w-[24px] pl-[16px]" icon={!showPassword? eyeOutline : eyeOffOutline} />
                
            </Input>

            <div className='flex flex-row items-center mb-[75px]'>
              <input checked={form.terms}  onChange={() => setForm({...form, terms: !form.terms})} type="checkbox"  className="w-[24px] h-[24px] mr-[12px] border-MAINGREY p-1" />
              <p className='font-medium flex-grow w-1'>I agree to the <Link className="underline text-LINKCOLOR" to="/toc">Terms and Conditions</Link> and <Link className="underline text-LINKCOLOR" to="/privacy-policy">Privacy Policy</Link> of this app.</p>
            </div>

            <div className='pt-[16px] pb-[8px] mb-[34px]'>
              <Button disabled={!form_checker} title='Create Account' widthFull onPress={submit_form} />
            </div>

          </div>


        </Container>  
      </IonContent>
    </IonPage>
  );
};

export default Home;
