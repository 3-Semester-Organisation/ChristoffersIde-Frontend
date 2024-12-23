function makeOption(httpMethod, body) {

    const validHttpMethods = ["GET", "POST", "PUT", "DELETE"];

    if (!validHttpMethods.includes(httpMethod)) {
        throw new Error(`Invalid HTTP method: ${httpMethod}`)
    }

    const option = {
        method: httpMethod.toUpperCase(),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }

    if (body) {
        option.body = JSON.stringify(body);
    }

    return option;
}



async function checkHttpErrors(response) {
    if (!response.ok) {
        const errorResponse = await response.json();
        const error = new Error(errorResponse.answer);
        error.apiError = errorResponse;
        error.status = response.status;
        throw error;
    }
}


export { makeOption, checkHttpErrors };