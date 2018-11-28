var contactp = {
<template>
    <main id="contactp-sect">
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis sapien sapien, ac interdum libero mollis id. </p>
        <div id="form-container">
        <form id="contact-form">
            <div class="contact-grid">
                <div v-for="field in contactFields" class="field">
                    <label class="hidden" for="field.name">{{field.name}}</label>
                    <input :type="field.type" :class="field.class" :name="field.name" :placeholder="field.placeholder">
                </div>
            
            <div class="field">
                <textarea wrap="off" name="message" rows="10" cols="20" placeholder="Message"></textarea>
            </div>
            </div>
            <button type="submit" value="Submit">Submit</button>
        </form>
        </div>
    </main>
</template>

<script>
  export default {
      data() {

          return {

                contactFields: [

                {label: 'Name', type:'text', class: 'input', name: 'name', placeholder:'Your First Name'},
                {label: 'Email', type:'text', class: 'input', name: 'email', placeholder:'Your Email Address'},
                {label: 'Referral', type:'text', class: 'input', name: 'referral', placeholder:'How Did You Hear About Me?'},
                {label: 'Subject', type:'text', class: 'input', name: 'subject', placeholder:'Subject'}
              ],

               messageFields: [

                //{label: 'Message', type:'text', class: 'input', name: 'message', placeholder:'Message'}
              ]
          }
      }
    }
</script>

<style>
  /* Your CSS goes here */
</style>

}