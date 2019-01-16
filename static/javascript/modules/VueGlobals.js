Vue.prototype.apiProcessForm = async function (path, inputData, callback = false, refName = 'form') {
  const rawResponse = await fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputData)
  });

  const apiResponse = await rawResponse.json();

  if (apiResponse.error && apiResponse.field) {
    let form = this.$refs[refName];
    let field = this.schema.fields.find(field => field.model && field.model === apiResponse.field);

    if (field) {
      form.errors.push({error: apiResponse.message, field: field})
    }
  }
  else {
    if (callback && typeof callback === 'function') {
      callback(apiResponse);
    }
  }
};

Vue.prototype.apiRequest = async function (path, callback = false) {
  try{
    const rawResponse = await fetch(path, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    if(rawResponse.status === 200){
      const apiResponse = await rawResponse.json();
      if (callback && typeof callback === 'function') {
        callback(apiResponse);
      }
    }
    else{
      console.error(rawResponse);
    }

  }
  catch (error) {
    console.error(error);
  }

}