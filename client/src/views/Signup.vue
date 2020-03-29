<template>
    <div class="container h-100">
        <div class="background-form row justify-content-center text-white mt-5">
            <h1>REGISTRATION</h1>
        </div>
        <div class ="row h-100 justify-content-center align-items-center background-form mb-5 text-white"> 
            <div class="col-md-5 mr-auto mt-5">    
                <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" class="form-control" name="fname" id="fname" placeholder="First Name" v-model="fname"/>
                </div>
                <div class="form-group">
                    <label for="middle_initial">Middle Initial</label>
                    <input type="text" class="form-control" name="midinitial" id="midinitial" placeholder="Middle Initial" v-model="midinitial"/>
                </div>
                <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" class="form-control" name="lname" id="lname" placeholder="Last Name" v-model="lname"/>
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <textarea type="text" class="form-control" name="address" id="midinitial" placeholder="Address" v-model="address"/>
                </div>
                <div class="form-group">
                    <label for="birthdate">Birthdate</label>
                    <input type="date" class="form-control" name="birthdate" id="birthdate" placeholder="Birthdate" v-model="birthdate"/>
                </div>
                <div class="form-group">
                    <label for="sex">Contact Number</label>
                    <input type="text" class="form-control" name="sex" id="sex" placeholder="Sex" v-model="sex"/>
                </div>
                <div class="form-group">
                    <label for="email">E-mail Address</label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="E-mail Address" v-model="email" required autocomplete="off"/>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" name="username" id="username" placeholder="Username" v-model="username"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="password" id="password" placeholder="Password" v-model="password"/>
                </div>
                 <div class="form-group">
                    <label for="cpassword">Confirm Password</label>
                    <input type="password" class="form-control" name="cpassword" id="cpassword" placeholder="Confirm Password" v-model="cpassword"/>
                </div>
                <div class="form-group">
                <button class ="btn btn-lg btn-secondary mr-4 bg-dark" type="submit">Register</button>
                <button class ="btn btn-lg btn-secondary bg-dark" type="submit">Cancel</button>
                </div>

            </div>
            <div class="mx-auto mb-auto mt-5">
                 <h1>Sample Content</h1>
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
  name: 'Signup',

}
</script>
