<template lang="html">
  <footer>
    <div class="footer-section-1">
      <div class="footer-menu">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="footer-menu-block">
                <div class="footer-menu-title">
                  <a class="footer_logo" href="/">
                    <img src="../assets/starlet_logo.png" alt="">
                  </a>
                </div>
                <ul class="footer-menu-items list-unstyled">
                  <li class="footer-menu-item">Самое интересное описание из созданных человеком...</li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="footer-menu-block">
                <div class="footer-menu-title">
                  Информация
                </div>
                <ul class="footer-menu-items list-unstyled">
                  <li class="footer-menu-item"><a href="#">О проекте</a></li>
                  <li class="footer-menu-item"><a href="#">Обратная связь</a></li>
                  <li class="footer-menu-item"><a href="#">Публичная оферта</a></li>
                  <li class="footer-menu-item"><a href="#">Помощь</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="footer-menu-block">
                <div class="footer-menu-title">
                  Участие
                </div>
                <ul class="footer-menu-items list-unstyled">
                  <li class="footer-menu-item"><a href="#">Информация для учасников</a></li>
                  <li class="footer-menu-item"><a href="#">Добавить новый фильм</a></li>
                  <li class="footer-menu-item"><a href="#">Добавить новый сериал</a></li>
                  <li class="footer-menu-item"><a href="#">Карта сайта</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="footer-menu-block">
                <div class="footer-menu-title">
                  Сообщество
                </div>
                <ul class="footer-menu-items list-unstyled">
                  <li class="footer-menu-item"><a href="#">FAQ</a></li>
                  <li class="footer-menu-item"><a href="#">Доска почёта</a></li>
                  <li class="footer-menu-item"><a href="#">Обсуждения</a></li>
                  <li class="footer-menu-item"><a href="#">Следить за разработкой</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-section-2">
      <div class="footer-copyright">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-lg-auto">
              <div class="text-lg-left footer-copyright-text">
                © 2020 Starlet - очень крутой ресурс по кино.
              </div>
              <div class="text-lg-left footer-copyright-text">
                Автор проекта: <span>Илья Редколис</span> - <a href="mailto:illyaredkolis@gmail.com">illyaredkolis@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="css" scoped>
.footer-section-1 {
  background-color: #14171a;
  color: #666666;
}

.footer-menu {
  padding: 20px 0px 0px;
}

.footer-menu-block {
  margin: 0px 0px 20px;
}

.footer-menu-title {
  line-height: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: #d2d2d2;
  margin: 0px 0px 10px;
  text-align: center;

}

.footer_logo img {
  display: block;
  margin: auto;
  position: relative;
  padding: 0 5px;
  height: 55px;
  object-fit: contain;
  opacity: .4;
}

.footer_logo img:hover {
  opacity: .6;
}

.footer-menu-items {
  line-height: 18px;
}

.footer-menu-item {
  margin: 0px 0px 10px;
  font-size: .8em;
  font-weight: 300;
  text-align: center;
}

.footer-menu-item a {
  color: #666666;
  transition: .3s;
}

.footer-menu-item:hover a {
  color: #d2d2d2;
}

.footer-copyright {
  background-color: #040506;
  color: #d2d2d2;
  font-size: 0.6em;
  line-height: 16px;
  padding: 10px 0px;
}

.footer-copyright span, .footer-copyright a {
  color: #ff8a00;
  transition: .3s;
}

.footer-copyright a:hover {
  color: #fff;
}

.footer-copyright-text {
  display: inline-block;
  padding: 0 2px;
}
</style>
