<template>
  <div class="menu-content h-100" data-simplebar>
    <ul class="metismenu left-sidenav-menu">
      <!-- <li class="menu-label mt-0">Main</li> -->
      <li>
        <router-link :to="{ name: 'Dashboard' }">
          <a>
            <i data-feather="home" class="align-self-center menu-icon"></i>
            <span>Dashboard</span>
          </a>
        </router-link>
      </li>
      <hr class="hr-dashed hr-menu" />
      <li class="menu-label my-2">FINANCE MODULE</li>
      <li>
        <a href="javascript: void(0);">
          <i data-feather="grid" class="align-self-center menu-icon"></i>
          <span>Finance</span>
          <span class="menu-arrow">
            <i class="mdi mdi-chevron-right"></i>
          </span>
        </a>
        <ul class="nav-second-level" aria-expanded="false">
          <li>
            <router-link :to="{ name: 'accountsHome' }">
              <a>
                <i class="ti-control-record"></i>Accounts
                <span class="menu-arrow left-has-menu">
                  <i class="mdi mdi-chevron-right"></i>
                </span>
              </a>
            </router-link>

            <ul class="nav-second-level" aria-expanded="false">
              <li>
                <router-link :to="{ name: 'accountsHome' }">
                  <a class="nav-link">
                    <i class="ti-control-record"></i>List Accounts
                  </a>
                </router-link>
              </li>
              <!-- <li>
                <router-link :to="{ name: 'createAccount' }">
                  <a class="nav-link">
                    <i class="ti-control-record"></i>Create Account
                  </a>
                </router-link>
              </li> -->
            </ul>
          </li>
        </ul>
      </li>
      <hr class="hr-dashed hr-menu" />
      <li class="menu-label my-2">REGISTRATION MODULE</li>
      <li>
        <a href="javascript: void(0);">
          <i data-feather="grid" class="align-self-center menu-icon"></i>
          <span>Registration</span>
          <span class="menu-arrow">
            <i class="mdi mdi-chevron-right"></i>
          </span>
        </a>
        <ul class="nav-second-level" aria-expanded="false">
          <li>
            <a>
              <i class="ti-control-record"></i>User
              <span class="menu-arrow left-has-menu">
                <i class="mdi mdi-chevron-right"></i>
              </span>
            </a>

            <ul class="nav-second-level" aria-expanded="false">
              <li>
                <router-link :to="{ name: 'userHome' }">
                  <a class="nav-link">
                    <i class="ti-control-record"></i>List
                  </a>
                </router-link>
              </li>
              <!-- <li>
                  <router-link :to="{ name: 'createUser' }">
                    <a class="nav-link">
                      <i class="ti-control-record"></i>Create
                    </a>
                  </router-link>
                </li> -->
            </ul>
          </li>
          <li>
            <a>
              <i class="ti-control-record"></i>Company
              <span class="menu-arrow left-has-menu">
                <i class="mdi mdi-chevron-right"></i>
              </span>
            </a>

            <ul class="nav-second-level" aria-expanded="false">
              <li>
                <router-link :to="{ name: 'companyHome' }">
                  <a class="nav-link">
                    <i class="ti-control-record"></i>List
                  </a>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'createCompany' }">
                  <a class="nav-link">
                    <i class="ti-control-record"></i>Create
                  </a>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    feather.replace();

    function t() {
      $(window).width() < 1025
        ? $("body").addClass("enlarge-menu")
        : $("body").removeClass("enlarge-menu");
    }
    $(".metismenu").metisMenu();
    $(window).resize(function () {
      t();
    });
    $(".button-menu-mobile").on("click", function (t) {
      t.preventDefault(), $("body").toggleClass("enlarge-menu");
    });
    t();
    $('[data-toggle="tooltip"]').tooltip();
    $(".main-icon-menu .nav-link").on("click", function (t) {
      $("body").removeClass("enlarge-menu"),
        t.preventDefault(),
        $(this).addClass("active"),
        $(this).siblings().removeClass("active"),
        $(".main-menu-inner").addClass("active");
      var a = $(this).attr("href");
      $(a).addClass("active"), $(a).siblings().removeClass("active");
    });
    $(".leftbar-tab-menu a, .left-sidenav a").each(function () {
      var t = window.location.href.split(/[?#]/)[0];
      if (this.href == t) {
        $(this).addClass("active"),
          $(this).parent().addClass("active"),
          $(this).parent().parent().addClass("in"),
          $(this).parent().parent().addClass("mm-show"),
          $(this).parent().parent().parent().addClass("mm-active"),
          $(this).parent().parent().prev().addClass("active"),
          $(this).parent().parent().parent().addClass("active"),
          $(this).parent().parent().parent().parent().addClass("mm-show"),
          $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .addClass("mm-active");
        var a = $(this).closest(".main-icon-menu-pane").attr("id");
        $("a[href='#" + a + "']").addClass("active");
      }
    });
    Waves.init();
  },
};
</script>
