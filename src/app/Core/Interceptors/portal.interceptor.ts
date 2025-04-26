import { HttpInterceptorFn } from '@angular/common/http';

export const portalInterceptor: HttpInterceptorFn = (req, next) => {

// req : my http request from browser(clientsi
// de frontend) to server (backend)
//next : sends a clone of updated req after adding (headers , token ,configuration, Till response loader ,etc)


 const base: string='https://upskilling-egypt.com:3007/';
 //const token = get it fromlocal storage (session cars)
 const Modified =req.clone({  // choose whatever yo wanna add here

 url: base + req.url,  //baseurl at service api observable functions + request path (hnakol elbase url path fy elservice api observable functions 34an yb2a total two parts wa7d hena w tanyhnak)
 //setHeaders : { Authorization: `Bearer ${token}` }  //api headers key - value  ex --> "authorization key for getting our token (its value)"
})

return next(Modified)



};

