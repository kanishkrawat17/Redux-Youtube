import { BUY_CAKE } from './cakeTypes'

export const buyCake = (number) => {
    console.log("action");
   return {
       type : BUY_CAKE,
       payload : number,
   }
}
