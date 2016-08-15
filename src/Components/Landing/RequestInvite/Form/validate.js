import memoize from 'lru-memoize';

export default
  memoize(10)(
    values => ({
      // chained for improved ux (display one error at a time)
      name:
        !values.name && 'Please provide a name',
      email: values.name &&
        !values.email && 'Please provide an email address',
      confirmEmail: values.email && (
        (!values.confirmEmail && 'Please confirm your email address') ||
        (values.email !== values.confirmEmail && 'Oops, email addresses don\'t match')
      ),
    })
  )
;
