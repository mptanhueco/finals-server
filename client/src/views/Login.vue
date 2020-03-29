<template>
    <div class="container h-100">
        <div class="background-form row justify-content-center text-white mt-5">
            <h1>LOGIN</h1>
        </div>
        <div class ="row h-100 justify-content-center align-items-center background-form mb-5 text-white">
            <div class="col-md-5 mr-auto mt-5">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" name="username" id="username" placeholder="Username" v-model="username"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="password" id="password" placeholder="Password" v-model="password"/>
                </div>
                <div class="form-group">
                <button class ="btn btn-lg btn-secondary mr-4 bg-dark" type="submit">Log-in</button>
                <button class ="btn btn-lg btn-secondary mr-4 bg-dark" type="reset">Cancel</button>
                </div>
            </div>
            <div class="mx-auto mb-auto mt-5">
                 <h1>Content</h1>
                 <h5>Where does it come from?</h5>
                 <p>
                 Contrary to popular belief, Lorem Ipsum is not simply random text. <br>It has roots in a piece of classical Latin literature from 45 BC, <br>
                 making it over 2000 years old. Richard McClintock, a Latin <br> professor at Hampden-Sydney College in Virginia, looked up one of <br> 
                 the more obscure Latin words, consectetur, from a Lorem Ipsum <br>
                 Contrary to popular belief, Lorem Ipsum is not simply random text. <br>It has roots in a piece of classical Latin literature from 45 BC, <br>
                 making it over 2000 years old. Richard McClintock, a Latin <br> professor at Hampden-Sydney College in Virginia, looked up one of <br> 
                 the more obscure Latin words, consectetur, from a Lorem Ipsum <br>
                 Contrary to popular belief, Lorem Ipsum is not simply random text. <br>It has roots in a piece of classical Latin literature from 45 BC, <br>
                 making it over 2000 years old. Richard McClintock, a Latin <br> professor at Hampden-Sydney College in Virginia, looked up one of <br> 
                 the more obscure Latin words, consectetur, from a Lorem Ipsum <br>
                 </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',

}
</script>
