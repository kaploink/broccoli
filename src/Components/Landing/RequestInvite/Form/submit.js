import { SubmissionError } from 'redux-form';
const apiEndpoint = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod';

export default (values, dispatch) =>
  new Promise((resolve, reject) =>
    fetch(`${apiEndpoint}/fake-auth`, {
      method: 'post',
      body: JSON.stringify(
        {
          name: values.name,
          email: values.email,
        }
      )
    })
    // parse response
    .then(response =>
      response.json().then(json => ({response, json}))
    )
    .then(({json, response}) => {
      if (!response.ok) {
        // got a validish error response (with optional message)
        reject(new SubmissionError({_error: json.errorMessage}));
        return;
      }

      // all good...
      resolve();
    })
    .catch(error => {
      // no valid response
      reject(new SubmissionError());
    })
  )
;
