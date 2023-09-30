import * as yup from 'yup'
const regEx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const Schema = yup.object().shape({
    name:yup
    .string()
    .min(3,"Lütfen tam isminizi giriniz.")
    .required("İsim Soyisim alanı zorunludur.")  ,
    email:yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email'i girmek zorunludur."),
    password:yup
    .string()
    .min(5,"Lütfen en az 5 karakter giriniz.")
    .matches(regEx,{
        message:"Lütfen en az 1 büyük harf bir küçük harf ve bir sayı giriniz.",
    })
    .required("Parola alanı zorunludur."),
    passAgain:yup
    .string()
    .oneOf([yup.ref("password")],"Şifreler eşleşmiyor")
    .required("Tekrar şifre girmek zorunludur")
});