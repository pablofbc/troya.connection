// services/api.ts
import axios from "axios";
import { axiosApi } from "./axios";
//import { UserModel } from "@/models/users/user.model";
//import { BaseResponse } from "@/models/base-response.model";
import { Alert } from "react-native";


// export const GetUserById = async (Id: string | null) => {
//   const apiUrl = `${process.env.EXPO_PUBLIC_API_URL}/Users/by-id?id=${Id}`;
//   console.log(apiUrl);
//   try {
//     const response = await axiosApi.get<BaseResponse<UserModel>>(apiUrl);
//     return response.data.result;
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     throw error;
//   }
// };

// export const setPushToken = async (pushToken: string, codUsuario: string) => {
//   const api = axios.create({
//     baseURL: `${process.env.EXPO_PUBLIC_API_URL}`,
//   });
//   try {
//     const response = await api.put(`/Users/setPushToken?pushToken=${pushToken}&codUsuario=${codUsuario}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error setting push token:", error);
//     throw error;
//   }
// };

export const comunidadApi = async () => {
   
    try {
      const response = await axiosApi.get(`https://cc210ecba693.sn.mynetname.net:9091/comunidadAPI/api/UserOrganization/GetFormByCodUserByCodOrg?CodUser=AACA6001019D6&CodOrg=COD_MPI`);
      return response.data;
    } catch (error) {
      Alert.alert("no se conecto a comunidad");
      throw error;
    }
  };

  export const editorApi = async (codUser: String, codOrg: String) => {
   
    try {
      // const response = await axios.get(
      //   'https://cc210ecba693.sn.mynetname.net:9091/comunidadAPI/api/UserOrganization/GetFormByCodUserByCodOrg', 
      //   {
      //     params: {
      //       CodUser: codUser,
      //       CodOrg: codOrg
      //     },
      //     validateStatus: () => true  // Permitir respuestas de error sin lanzar excepciones
      //   }
      // );
      const response = await axiosApi.get(`https://cc210ecba693.sn.mynetname.net:9091/FormEditionAPI/api/Personas/GetPersonas/CE_3133195_202410090517381738`);
      return response.data;
    } catch (error) {
      Alert.alert("no se conecto a Editor");
      throw error;
    }
  };

  export const conectarApi = async (codUser: String, codOrg: String) => {
   
    try {
      const response = await axios.get(
        'https://cc210ecba693.sn.mynetname.net:9091/vrmApi/api/Users/sign-in', 
        {
          params: {
            username: codUser,
            password: codOrg
          },
          validateStatus: () => true  // Permitir respuestas de error sin lanzar excepciones
        }
      );
      //const response = await axiosApi.get(`https://cc210ecba693.sn.mynetname.net:9091/FormEditionAPI/api/Personas/GetPersonas/CE_3133195_202410090517381738`);
      return response;
    } catch (error) {
      Alert.alert("no se conecto a Editor");
      throw error;
    }
  };
