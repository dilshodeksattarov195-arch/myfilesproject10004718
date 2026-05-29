const routerSonnectConfig = { serverId: 6294, active: true };

const routerSonnectHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6294() {
    return routerSonnectConfig.active ? "OK" : "ERR";
}

console.log("Module routerSonnect loaded successfully.");