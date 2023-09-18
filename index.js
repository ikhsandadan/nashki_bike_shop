class Account {
    constructor(username, password, balance) {
        this.username = username;
        this.password = password;
        this.balance = balance;
    }
}

class Bike {
    constructor(name, type, price, img, desc, availability = true) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.img = img;
        this.desc = desc;
        this.availability = availability;
    }
}

class DataAccount {
    constructor() {
        this.accounts = [];
    }

    addAccount(account) {
        this.accounts.push(account);
    }

    displayAccount(myAccount) {
        this.accounts.forEach((account) => {
            if (myAccount === account.username.toLowerCase()) {
                document.getElementById("user_detail").innerHTML = (`Username: ${account.username} | Balance: $ ${account.balance}`);
            }
        });
    }
}

class DataBike {
    constructor() {
        this.bikes = [];
    }

    addBike(bike) {
        this.bikes.push(bike);
    }

    displayAvailableBike() {
        // Retrieves element with id "show_bike"
        const showBikeElement = document.getElementById("show_bike");
        
        // Clear the "show_bike" element before adding available bikes
        showBikeElement.innerHTML = "";
    
        // Do a loop through all the bikes
        this.bikes.forEach((bike, index) => {
            if (bike.availability) {
                // Create a div element for each available bike
                const bikeElement = document.createElement("div");
                bikeElement.classList.add("box_bike");
    
                // Populates a div element with bike information
                bikeElement.innerHTML = `
                    <p class="bike_title" id="title${index + 1}">${bike.name}</p>
                    <img width="300" height="100%" src="${bike.img}" id="img${index + 1}" alt="bike"/>
                    <div class="box_desc">
                        <p>Price:</P>
                        <div class="bike_desc" id="price${index + 1}">$ ${bike.price}</div>
                        <p>Type:</p>
                        <div class="bike_desc" id="type${index + 1}">${bike.type}</div>
                        <div class="bike_desc hide" id="desc${index + 1}">${bike.desc}</div>
                    </div>
                    <button type="submit" id="detail" onClick="showBike(${index + 1})">Detail</button>
                `;
    
                // Added bike element into "show_bike" element
                showBikeElement.appendChild(bikeElement);
            }
        });
    }
}

const dataBike = new DataBike();
const dataAccount = new DataAccount();

const bike1 = new Bike("Santa Cruz BRONSON", "Mountain Bike", 5000, "./images/santacruz.jpg", "The Santa Cruz Bronson is ready for any driving fun. Thanks to the generous suspension travel is ready for big jumps on any trail. Through the fine VPP rear end it goes relaxed back to go. The MX wheels show that the choice between two wheel sizes is not a one-way street and especially not a contradiction. The 29” front wheel provides traction and stability, for full control in corners. With the smaller 27.5” rear wheel, the bike remains agile and lively. It loves manuals, jumps and fast direction changes. Just like you!");
const bike2 = new Bike("Orbea ORCA M20iLTD", "Road Bike", 5749, "./images/orbea.jpg", "The Orbea Orca is the choice of stylish riders who demand the lightest bike with the best combination of technologies and flexible ergonomics. These are riders who don’t think of themselves as sprinters or rolleurs or climbers or even racers, they want a bike that can do everything and master any route. They are athletes who are looking for leading technology and style and appreciate a bike that stands out from the rest.<br>With the Orbea Orca M20iLTD you get a lightweight OMX frame made of carbon, as well as an OMX carbon fork with ICR integration and many other attachments made of this lightweight material. Shift electronically via Shimano Di2 12-speed - group. Vision 40 SC rims and 25c wide Vittoria Rubino Pro tires complete the overall picture.");
const bike3 = new Bike("Cannondale SCALPEL HT", "Mountain Bike", 2290, "./images/cannondale.jpg", "Confidence on edge. No hesitant, fistful-of-brakes descending here. The ultra slack, 66.5° front end gives you the stability and control you need to really open it up on the downhills. Brake later. Corner harder. Pass on the descents.<br>Stay centered. Cannondale Scalpel HT’s Proportional Response size-specific chainstays and steep seat angle keep you balanced between the wheels for better traction and power on the ups, and more confident control on the downs.<br>Drop the chatter. Sculpted flex zones in the chainstays partner with dropped seatstays to eat up the chatter from rowdy terrain, boosting control, smoothing the ride, minimizing fatigue. Go harder. Go faster. Go farther.");
const bike4 = new Bike("Specialized AETHOS PRO", "Road Bike", 9000, "./images/specialized.jpg", "Aethos - billions of calculations in search of one thing - the perfect riding experience! This is more than just a marketing slogan, it is the Specialized philosophy. The Aethos was designed to bridge the gap between perfected ride quality, extremely light weight and unparalleled style.");
const bike5 = new Bike("Bianchi OLTRE PRO", "Road Bike", 7999, "./images/bianchi.jpg", "To create an aero bike that controls airflow, Bianchi borrowed ideas from innovative technology sectors, including automotive, aerospace and architecture. The goal is to lead the air to very specific areas of the frame, ensuring airflow is as close to the surfaces of the bike and rider as possible. The far-thinking design is enhanced by a judicious balance of paint and exposed carbon, creating a fearsome racing aesthetic that never for a second compromises on the overall weight of the Oltre.<br>The Oltre Pro shares the same construction principles as the top-of-the-line RC model and features Air Deflector technology and a new aero handlebar. The frame incorporates the Bianchi CV vibration cancellation system into the carbon fiber, which increases riding comfort for a less extreme rider.<br>The layup of the frame combines carbon fiber with Countervail a revolutionary damping material that is exclusive to Bianchi. Once you've done a few miles on this Bianchi frame, you'll know: Countervail is the real deal. Typical road vibrations that cause wear and fatigue are noticeably reduced with Bianchi's Countervail frames. With the Infinito CV, you can simply ride longer with less physical discomfort.");
const bike6 = new Bike("Marin ALPINE TRAIL XR", "Mountain Bike", 2799, "./images/marin.jpg", "The Marin Alpine Trail is a 29” wheeled full suspension bike built for the all day enduro rider that earns their downhill fun.<br>Big mountains, epic passes, and all day ripping descents. If you live for the alpine adventure and gravity-fueled downhills, look no further than the Marin Alpine Trail series. Built around the longest travel version of Marin's critically acclaimed MultiTrac platform with progressive slack headtube/steep seattube geometry, low-slung aluminum or carbon frames, and 29” wheels, the Alpine Trail is here to conquer all singletrack in its path.");
const bike7 = new Bike("Trek Fuel EX", "Mountain Bike", 3699, "./images/trek.jpg", "The Fuel EX 8 is a true trail bike for those who not only want to plunge down wild descents, but also ride back up again afterwards to give themselves the thrill over and over again. It is based on a robust aluminum frame and shifts smoothly and precisely thanks to high-quality Shimano XT drivetrain. The FOX Rhythm fork with 150 mm stroke can neither debris nor roots harm, and with the FOX Float X damper you keep full control at all times. With the new frame-integrated storage compartment and adjustable geometry, you get all the benefits of the carbon models without having to dig too deep into your pocket.");

const user1 = new Account("Bob", "123456", 10000);
const user2 = new Account("Alice", "123456", 3000);
const user3 = new Account("Alex", "123456", 5000);

const login = () => {
    dataBike.addBike(bike1);
    dataBike.addBike(bike2);
    dataBike.addBike(bike3);
    dataBike.addBike(bike4);
    dataBike.addBike(bike5);
    dataBike.addBike(bike6);
    dataBike.addBike(bike7);

    dataAccount.addAccount(user1);
    dataAccount.addAccount(user2);
    dataAccount.addAccount(user3);

    var filterableCard = document.querySelectorAll(".filterable_card .card");

    let Username = document.getElementById("username").value;
    let Password = document.getElementById("password").value;
    let result = "";
    let loggedIn = false;

    try {
        dataAccount.accounts.forEach(user => {
            if (Username.toLowerCase() === user.username.toLowerCase() && Password === user.password) {
                loggedIn = true;
            }
        })

        if (loggedIn) {
            result = `Welcome ${Username}`
        } else {
            result = "Wrong username or password";
            throw new Error(location.reload());
        }
    } catch (error) {
        return error;
    } finally {
        alert(result);
    }

    if (loggedIn === true) {
        filterableCard.forEach(card => {
            card.classList.add("hide");
    
            if (card.dataset.name === "main") {
                card.classList.remove("hide");
            }
        })
    
        displayData();
    }
}

document.getElementById("login").addEventListener("click", login);
document.getElementById("username").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        login();
    }
});
document.getElementById("password").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        login();
    }
});

const displayData = () => {
    var myAccount = document.getElementById("username").value.toLowerCase();

    dataBike.displayAvailableBike();

    dataAccount.displayAccount(myAccount);
}

function cancelBuy() {
    var myAccount = document.getElementById("user_detail").innerHTML.replace(/^[\s\d]+/, "");
    const showBikeElement = document.getElementById("show_bike");

    showBikeElement.classList.remove("bike_display");
    showBikeElement.classList.add("card_bike");

    dataBike.displayAvailableBike();

    dataAccount.displayAccount(myAccount);
}

function showBike(id) {
    const title = document.getElementById("title" + id).innerHTML;
    const image = document.getElementById("img" + id).src;
    const price = document.getElementById("price" + id).innerHTML;
    const type = document.getElementById("type" + id).innerHTML;
    const desc = document.getElementById("desc" + id).innerHTML;

    const showBikeElement = document.getElementById("show_bike");

    showBikeElement.innerHTML = "";

    showBikeElement.classList.remove("card_bike");
    showBikeElement.classList.add("bike_display");
    
    const bikeElement = document.createElement("div");
    bikeElement.classList.add("box_bike_detail");

    bikeElement.innerHTML = `
        <p class="bike_title_detail" id="title${id}">${title}</p>
        <div class="box_bike_detail_box">
            <img width="800" height="100%" src="${image}" id="img${id}" alt="bike"/>
            <div class="box_desc">
                <p class="bike_desc">Price:</p>
                <div class="bike_desc" id="price${id}">${price}</div>
                <p class="bike_desc">Type:</p>
                <div class="bike_desc" id="type${id}">${type}</div>
                <p class="bike_desc">Description:</p>
                <div class="bike_desc" id="desc${id}">${desc}</div>
                <div class="button_box">
                    <button type="submit" id="buy" onClick="checkout('${price.replace("$ ","")}', '${title}', '${image}')">Checkout!</button>
                    <button type="submit" id="cancel_buy" onClick="cancelBuy()">Cancel</button>
                </div>
            </div>
        </div>
    `;

    showBikeElement.appendChild(bikeElement);
}

function checkout(price, title, image) {
    var buyPrice = parseInt(price);
    var disc = 0;
    var discPrice = 0;
    var total = 0;

    switch(true) {
        case (buyPrice <= 3000):
            disc = 2.5;
            discPrice = Math.round((buyPrice *  disc) / 100);
            total = buyPrice - discPrice;
            break;
        
        case (buyPrice > 3000 && buyPrice <= 6000):
            disc = 5;
            discPrice = Math.round((buyPrice *  disc) / 100);
            total = buyPrice - discPrice;
            break;
        
        default:
            disc = 10;
            discPrice = Math.round((buyPrice * disc) / 100);
            total = buyPrice - discPrice;
            break;
    }

    const showBikeElement = document.getElementById("show_bike");
    const userBalance = document.getElementById("user_detail").innerHTML.replace(/\D/g, '');
    var summary = userBalance - total;
        
    showBikeElement.innerHTML = "";

    showBikeElement.classList.remove("card_bike");
    showBikeElement.classList.add("bike_display");
    
    const bikeElement = document.createElement("div");
    bikeElement.classList.add("box_bike_detail");

    bikeElement.innerHTML = `
        <p class="bike_title_detail">${title}</p>
        <div class="box_bike_detail_box">
            <img width="500" height="100%" src="${image}" alt="bike"/>
            <div class="box_desc">
                <p class="bike_desc">Price:</p>
                <div class="bike_desc_buy">$ ${buyPrice}</div>
                <p class="bike_desc">Discount ${disc}%:</p>
                <div class="bike_desc_buy">$ ${discPrice}</div>
                <p class="bike_desc">Total Price:</p>
                <div class="bike_desc_buy row_line">$ ${total}</div>
                <p class="bike_desc">Your Balance:</p>
                <div class="bike_desc_buy">$ ${userBalance}</div>
                <p class="bike_desc">Remaining Balance:</p>
                <div class="bike_desc_buy row_line">$ ${summary}</div>
                <button type="submit" id="buy" onClick="confirmBuy('${total}', '${title}', '${image}')">Buy</button>
                <button type="submit" id="cancel_buy" onClick="cancelBuy()">Cancel</button>
            </div>
        </div>
    `;

    showBikeElement.appendChild(bikeElement);
}

function confirmBuy(total, title, image) {
    var balance = parseInt(document.getElementById("user_detail").innerHTML.replace(/\D/g, ''));
    var newBalance = 0;
    var result = "Purchase Failed";
    let isSufficient = false;

    try {
        if (balance >= total) {
            newBalance = balance - total;
            result = "Successful Purchase!"
            isSufficient = true;
        } else {
            throw new Error("Your Balance Is Insufficient For This Purchase!");
        }
    } catch (error) {
        alert(error);
    } finally {
        alert(result);
    }

    if (isSufficient) {
        const user = document.getElementById("user_detail").innerHTML.replace(/[0-9]/g, '');
        const showBikeElement = document.getElementById("show_bike");
        
        showBikeElement.innerHTML = "";

        showBikeElement.classList.remove("card_bike");
        showBikeElement.classList.add("bike_display");
        
        const bikeElement = document.createElement("div");
        bikeElement.classList.add("box_bike_detail");

        bikeElement.innerHTML = `
            <p class="bike_title_detail">${title}</p>
            <div class="box_bike_detail_box">
                <img width="300" height="100%" src="${image}" alt="bike"/>
                <div class="box_desc">
                    <p class="bike_desc">Thank you for your purchase. Your bike will be shipped soon!</p>
                </div>
                <button type="submit" id="look_again" onClick="cancelBuy()">Look for another bikes</button>
            </div>
        `;

        showBikeElement.appendChild(bikeElement);

        document.getElementById("user_detail").innerHTML = user + newBalance;
    }
}