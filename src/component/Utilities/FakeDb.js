const addToDb = id => {
    let applyJob = getselectJob();
    // add quantity
    const quantity = applyJob[id];
    if (!quantity) {
        applyJob[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        applyJob[id] = newQuantity;
    }
    localStorage.setItem('Applied-Jobs', JSON.stringify(applyJob));
}

const removeFromDb = id => {
    const applyJob = getselectJob();
    if (id in applyJob) {
        delete applyJob[id];
        localStorage.setItem('Applied-Jobs', JSON.stringify(applyJob));
    }
}

const getselectJob = () => {
    let applyJob = {};
    
    //get the company details cart from local storage
    const storedCart = localStorage.getItem('Applied-Jobs');
    if (storedCart) {
        applyJob = JSON.parse(storedCart);
        
    }
    return applyJob;
}


export {
    addToDb,
    removeFromDb,
    getselectJob,    
}

