import memoize from 'lru-memoize';
import { isEmail } from '../../../_common/validation';
// import { required, email, match, minLength, createValidator } from '../../../_common/validation';

export default
  memoize(10)(
    values =>
      // chained for improved ux (display one error at a time)
      (!values.name && {
        name: 'Please provide a name'
      }) ||
      (values.name.length < 3 && {
        name: 'Please provide a longer name'
      }) ||
      (!values.email && {
        email: 'Please provide an email address'
      }) ||
      (!isEmail(values.email) && {
        email: 'Please provide a valid email address'
      }) ||
      (!values.confirmEmail && {
        confirmEmail: 'Please confirm your email address'
      }) ||
      (values.email !== values.confirmEmail && {
        confirmEmail: 'Oops, email addresses don\'t match'
      })

    // or for neater code but less friendly UX:
    // values =>
    //   createValidator({
    //     name: [required, minLength(3)],
    //     email: [required, email],
    //     confirmEmail: [required, match(email)],
    //   })(values)
  )
;
