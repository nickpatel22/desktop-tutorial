
/**
 * @description redis Module
 * @module repository/redis
 * @requires redis
 */

 var redisClient = require('redis').createClient();

 const Setkey = (key, value) => redisClient.set(key, value);
 //const Getkey = (key) => redisClient.get(key);
 
 
 async function Getkey(key) {
   return new Promise((resolve) => {
     redisClient.get(key, function (_err, reply) {
     resolve(reply);
     });
     })
 }
 
 const Gethashkey = (key) => redisClient.hgetall(key, (err, object) => {
   if (err) {
     return err;
   } else {
     return object;
   }
 });
 
 const Sethashkey = (key, value) => redisClient.hmset(key, value);
 
 async function hgetall(key) {
 
   return new Promise((resolve) => {
     redisClient.hgetall(key, function (_err, reply) {
     resolve(reply);
     });
     })
   // try {
   //     await redisClient.hgetall(key.toString('utf8'), function (err, redisResult) {
   //     if (redisResult) {
   //       console.log(redisResult);
   //       result=redisResult;
   //       //return result;
   //        return 'hello';
   //     } else {
   //       console.log(err)
   //       return false;
   //     }
   //   });
   // } catch (error) {
   //   console.log(error)
   // }
 }
 // --- ---//
 //var temp = await redis.hgetall("GOLD-I")
 
 module.exports = {
   Sethashkey,
   Gethashkey,
   Setkey,
   Getkey,
   hgetall
 }
 