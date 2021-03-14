<template>
  <b-modal hide-header hide-footer class="p-0" id="SingUpModal">
    <b-card border-variant="success">
      <b-container class="p-2">
        <b-card-header
          class="p-0 d-flex justify-content-between align-items-center"
          header-bg-variant="white"
          header-border-variant="white"
        >
          <div>Bilet Bayisi'ne Üye Ol</div>
          <b-button
            class="close-btn"
            variant="light"
            block
            @click="$bvModal.hide('SingUpModal')"
          >
            <close-icon :size="24" />
          </b-button>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <label class="label-placeholder" for="ad">Adınız</label>
              <b-form-input type="text" id="ad" />
            </b-form-group>
            <b-form-group>
              <label class="label-placeholder" for="soyad">Soyadınız</label>
              <b-form-input type="text" id="soyad" />
            </b-form-group>
            <b-form-group>
              <label class="label-placeholder" for="email">Email</label>
              <b-form-input type="text" id="email" />
            </b-form-group>
            <b-form-group>
              <label class="label-placeholder" for="password">Şifre</label>
              <b-form-input type="password" id="password" />
            </b-form-group>
            <b-form-group>
              <label class="label-placeholder" for="password"
                >Şifre Tekrar</label
              >
              <b-form-input type="password" id="password" />
            </b-form-group>
            <b-form-group class="mb-2">
              <input type="checkbox" id="rememberme" />
              <label class="remember-me ml-2" for="rememberme"
                >Beni hatırla</label
              >
            </b-form-group>
            <b-button variant="success" class="login-btn mb-3">Üye Ol</b-button>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <b-link class="d-block" href="/">Üye Ol</b-link>
              <b-link class="d-block" href="/">Şifremi unuttum</b-link>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="line-1"></div>
              <div class="or">
                yada
              </div>
              <div class="line-1"></div>
            </div>
            <button class="d-flex w-fb">
              <div>
                <facebook-icon :size="34" :color="'white'" />
              </div>
              <div class="">
                Facebook İle Bağlan
              </div>
            </button>
          </b-form>
        </b-card-body>
      </b-container>
    </b-card>
  </b-modal>
</template>

<script>
import CloseIcon from '../icons/CloseIcon.vue';
import FacebookIcon from '../icons/FacebookIcon.vue';

export default {
  components: {CloseIcon, FacebookIcon},
  name: 'SingUp',
};
</script>
