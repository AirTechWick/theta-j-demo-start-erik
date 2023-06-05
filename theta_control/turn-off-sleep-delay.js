export {turnOffSleepDelay}

const turnOffSleepDelay = async (urlEndpoint) => {

    const body = {'name': 'camera.setOptions',
                "parameters": {
                    "options": {
                        "sleepDelay": 65535
            }   
        }
    }

    const response = await fetch(
        `${urlEndpoint}commands/execute`, 
        {method: 'POST', 
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    });

    const data =  await response.json();

    const prettyData = JSON.stringify(data, null, 4)

    return prettyData

};