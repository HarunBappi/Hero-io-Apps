const getInstallApps = () =>{
    return JSON.parse(localStorage.getItem("installedApps") )|| []
}

const saveInstalledApps = (apps) =>{
    localStorage.setItem("installedApps", JSON.stringify(apps))
}

export {getInstallApps, saveInstalledApps}