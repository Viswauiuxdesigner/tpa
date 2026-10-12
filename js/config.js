/* TPA site configuration.
   Everything that touches the real world is set here so the front end can be
   wired to the existing membership backend without editing page code.
   Leave a value empty ("") to run that feature in clearly-labelled DEMO mode. */
window.TPA_CONFIG = {
  siteUrl: "https://tirupurphotographers.org",
  loginUrl: "",                // POST: mobile, password  -> JSON {ok:true, redirect:"/member/"} | {ok:false, message}
  registerUrl: "",             // POST multipart/form-data -> JSON {ok:true, reference:"..."} | {ok:false, errors:{field:msg}}
  statusUrl: "",               // POST: reference, mobile  -> JSON {ok:true, status:"submitted|verifying|approved|rejected", note}
  contactUrl: "",              // POST: name, contact, subject, message -> JSON {ok:true}
  verifyBase: "https://tirupurphotographers.org/verify?id=", // card QR points to verifyBase + memberId
  whatsappNumber: "919443212345",
  phone: "+91 421 2233445",
  email: "info@tirupurphotographers.org",
  address: "TPA Bhavan, 45 Kumaran Road, Tirupur, Tamil Nadu — 641601",
  officeHours: "Monday to Saturday, 10:00 AM – 7:00 PM IST",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.869018029302!2d77.3410523!3d11.1077595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b897818e69%3A0x6b75f81ca9955fa!2sKumaran%20Rd%2C%20Tiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000",
  adminUrl: "#",
  forgotPasswordUrl: "contact.html",
  maxUploadMB: 2,
  allowedUploads: ["application/pdf","image/jpeg","image/png"]
};

