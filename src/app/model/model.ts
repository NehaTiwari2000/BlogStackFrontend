export interface User {
  email_id: string
  last_name: string
  first_name: string
  gender: string
  phone_number: string
  password: string
  user_roles: UserRole[]
  status: string
  date_of_birth: string
  address: string
  profile_photo: string
}

  export interface UserData {
    id: string;
    name: string;
    progress: string;
    fruit: string;
  }

  export interface Payload {
    get(arg0: string): unknown
    password: any
    user_id: string
    email_id: string
    last_name: string
    first_name: string
    gender: string
    phone_number: string
    user_roles: UserRole[]
    status: string
    date_of_birth: string
    address: string
    middle_name?: string
  }
  
  export interface UserRole {
    role_name: string
  }

  export interface Root {
    user_id: string
    email_id: string
    last_name: string
    middle_name: string
    first_name: string
    address: string
    gender: string
    profile_photo: string
    date_of_birth: string
    status_set: string
  }
  
  