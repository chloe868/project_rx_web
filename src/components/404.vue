<template>
    <div class="d-flex align-items-center flex-column justify-content-center h-100 text-black" style="margin-top: 5%">
        <img :src="require('src/assets/img/logo.png')" class="logo-brand">
        <h1 class="display-4"><b>Coming Soon!</b></h1>
    </div>
</template>
<style lang="scss" scoped> 
@import "~assets/style/colors.scss";
img {
    height: 250px;;
}
h1 {
    color: $primary;
}
</style>
