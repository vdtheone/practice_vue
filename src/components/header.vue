<template lang="">
<header>
    <div class="row">
        <div class="logo">Logo</div>
        <div class="search ml-a">
            <input class="textbox" type="text" name="" id="" placeholder="Search">
        </div>

        <div class="nav">
            <ul>
                <router-link class="link" to="/">Home</router-link>

                <router-link class="link" to="/about">About</router-link>

                <router-link class="link" to="/calculator">Calculator</router-link>

                <router-link class="link" to="/global_registration">Global Registration</router-link>

                <router-link class="link" to="/store">Store</router-link>

                <router-link class="link" to="/composition">Compositioin Component</router-link>
                
                <router-link class="link" to="/compositionsyntax">Compositioin Syntax</router-link>

            </ul>
        </div>
    </div>
</header>
<router-view />
</template>

<script>
export default {

}
</script>

<style>

.row{
    display: flex;
    background-color: white;
    padding: 15px;
}
.logo{
    color: black;
}
ul>.link{
    padding: 10px;
    color: black;
}
.ml-a{
    margin-left: auto;
}

.textbox{
    border: 1px solid black;
    border-radius: 7px; 
    padding-left: 7px;
}

ul>.link:hover{
    background-color: blanchedalmond;
    color: brown;
    border-radius: 20px;
    
}


</style>
