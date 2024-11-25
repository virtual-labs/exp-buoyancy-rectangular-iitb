let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Buoyancy and Floatation</h4>

        <div class="fs-16px">
        <p style="text-align: center">Centre of buoyancy of rectangular block</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    calculation();
    let btn_text = get_collapse_btn_text("Activity 1", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-weight: 400; font-size: 18px;">
            Find the volume of water displaced and position of centre of buoyancy for a wooden block having density of ${block_rho} kg/m<sup>3</sup>. The height, width and length are ${block_height} m, ${block_width} m and and ${block_length} m respectively.
        </p>

        <br>
        <br>

        <p style="text-align:center"><img src="images/rectangleBlock.png" style="width:40%;"></p>
        <br>
        
        <div class="row">
            <p style="font-weight: 500; font-size: 18px;">i) Weight of the block</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;">
                    $$ W = \\rho * g * volume \\quad N $$
                </p>
            </div>
            <div class="col-6"></div>
        
            <div class="col-2"></div>
            <div class="col-4">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\quad W = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='weight-inp'><span id='weight-val-sp'></span> N
                <button class='btn btn-info' style='position: relative; left: 4vw; color:#fff;' onclick='verify_weight();' id='temp-btn-weight' >Verify</button>
                 </p>
            </div>
            <div class="col-1"></div>
        </div>
        <br>
        <div class="row" id="height-div" style="display: block">
            <p style="font-weight: 400; font-size: 18px;">For equilibrium, <br>
            weight of water displaced = weight of wooden block </p>
            </p>
            <p style="font-weight: 500; font-size: 18px;">ii) Height of the block submerged in water</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;">
                    $$ weight * length * height * \\rho_w * g = W \\quad m $$
                    $$ height = \\frac{W}{width * length * \\rho_w * g} \\quad m $$

                </p>
            </div>
            <div class="col-6"></div>
        
            <div class="col-2"></div>
            <div class="col-5">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\quad\\quad height = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='height-inp'><span id='height-val-sp'></span> m
                <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_height();' id='temp-btn-height' >Verify</button>
                 </p>
            </div>
            <div class="col-1"></div>
        </div>

        <div class="row" id="buoyancy-div" style="display: block">
            <p style="font-weight: 500; font-size: 18px;">iii) Centre of Buoyancy</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;">
                    $$ Centre\\ of\\ Buoyancy = \\frac{h}{2} \\quad m $$
                </p>
            </div>
            <div class="col-6"></div>
        
            <div class="col-2"></div>
            <div class="col-6">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ Centre\\ of\\ Buoyancy = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='buoyancy-inp'><span id='buoyancy-val-sp'></span> m
                <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_buoyancy();' id='temp-btn-buoyancy' >Verify</button>
                 </p>
            </div>
            <div class="col-1"></div>
        </div>

        <div class="row" id="ig-div" style="display: none">
            <p style="font-weight: 500; font-size: 18px;">iv) Calculate moment of inertia about centre of gravity</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;">
                    $$ I_G = \\frac{bh^3}{36} \\quad m^4 $$
                </p>
            </div>
            <div class="col-6"></div>
        
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$\\quad\\quad I_G = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='ig-inp'><span id='ig-val-sp'></span> m<sup>4</sup>
                <button class='btn btn-info' style='position: relative; left: 6vw; color:#fff;' onclick='verify_ig();' id='temp-btn-ig' >Verify</button>
                 </p>
            </div>
            <div class="col-1"></div>
        </div>

        <div class="row" id="hstar-div" style="display: none">
            <p style="font-weight: 500; font-size: 18px;">v) Calculate position of centre of pressure</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;">
                    $$h^* = \\frac{I_G \\sin^2\\theta}{A\\bar{h}} + \\bar{h} \\quad m $$
                </p>
            </div>
            <div class="col-6"></div>
        
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\quad\\quad\\quad\\quad\\quad h^* = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='hstar-inp'><span id='hstar-val-sp'></span> m
                <button class='btn btn-info' style='position: relative; left: 2vw; color:#fff;' onclick='verify_hstar();' id='temp-btn-hstar' >Verify</button>
                 </p>
            </div>
            <div class="col-1"></div>
        </div>

    </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculation() {
    //block_rho = 650;
    block_rho = Math.floor(Math.random() * (100 + 1)) + 600;
    console.log("rho of block= ", block_rho);
    let volume = block_height * block_width * block_length;
    block_weight = block_rho * gravity * volume;
    console.log("weight of block= ", block_weight);
    block_submerged_height = block_weight / (block_width * block_length * water_rho * gravity);
    console.log("height of submerged block= ", block_submerged_height);
    cb = block_submerged_height / 2;
    console.log("centre of buoyancy= ", cb);
}
function verify_weight() {
    let btn = document.getElementById('temp-btn-weight');
    let weight_inp = document.getElementById('weight-inp');
    let sp1 = document.getElementById('weight-val-sp');
    if (!verify_values(parseFloat(parseFloat(weight_inp.value).toFixed(2)), parseFloat(block_weight.toFixed(2)))) {
        alert(`incorrect value of weight`);
        return;
    }
    weight_inp.remove();
    sp1.innerText = `${parseFloat(block_weight.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('height-div'));
    div.style.display = 'block';
}
function verify_height() {
    let btn = document.getElementById('temp-btn-height');
    let height_inp = document.getElementById('height-inp');
    let sp2 = document.getElementById('height-val-sp');
    if (!verify_values(parseFloat(parseFloat(height_inp.value).toFixed(2)), parseFloat(block_submerged_height.toFixed(2)))) {
        alert(`incorrect value of height of submerged block`);
        return;
    }
    height_inp.remove();
    sp2.innerText = `${parseFloat(block_submerged_height.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('buoyancy-div'));
    div.style.display = 'block';
}
function verify_buoyancy() {
    let btn = document.getElementById('temp-btn-buoyancy');
    let buoyancy_inp = document.getElementById('buoyancy-inp');
    let sp3 = document.getElementById('buoyancy-val-sp');
    if (!verify_values(parseFloat(parseFloat(buoyancy_inp.value).toFixed(2)), parseFloat(cb.toFixed(2)))) {
        alert(`incorrect value of centre of buoyancy`);
        return;
    }
    buoyancy_inp.remove();
    sp3.innerText = `${parseFloat(cb.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    exp_complete();
}
function exp_complete() {
    let btn = (document.getElementById('temp-btn-act2-spwt'));
    btn && btn.remove();
    alert('Experiment completed');
}
activity1();
//# sourceMappingURL=activity1.js.map