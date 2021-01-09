
export default{
  routes: [{
    path: '/signup',
    name: 'signup',
    component: resolve => require(['components/increment/basic/Signup.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/signup/:email/:code',
    name: 'signup',
    component: resolve => require(['components/increment/basic/Signup.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/refer_register/:email/:code',
    name: 'referRegister',
    component: resolve => require(['components/increment/basic/Referral.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/signup_partner',
    name: 'signupPartner',
    component: resolve => require(['components/increment/basic/SignupPartner.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/verification/:email',
    name: 'verification',
    component: resolve => require(['components/increment/basic/Verification.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/login_verification/:username/:code',
    name: 'loginVerification',
    component: resolve => require(['components/increment/basic/LoginByVerification.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/login',
    name: 'loginAccount',
    // component: resolve => require(['modules/basic/LoginBasic.vue'], resolve),
    component: resolve => require(['modules/basic/LoginBasic.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/home',
    name: 'landing',
    component: resolve => require(['modules/home/Landing.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/request_reset_password',
    name: 'requestResetPassword',
    component: resolve => require(['components/increment/basic/RequestResetPassword.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/reset_password/:username/:code',
    name: 'resetPassword',
    component: resolve => require(['components/increment/basic/ResetPassword.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: resolve => require(['modules/dashboard/Dashboard.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/featured',
    name: 'featured',
    component: resolve => require(['modules/ecommerce/marketplace/Featured.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/marketplace',
    name: 'marketplace',
    component: resolve => require(['modules/ecommerce/marketplace/Marketplace.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/profile/:parameter?',
    name: 'profile',
    component: resolve => require(['modules/basic/UpdateBasic.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/referrals/',
    name: 'referrals',
    component: resolve => require(['components/increment/generic/referral/Referrals.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/products/',
    name: 'products',
    component: resolve => require(['modules/ecommerce/product/Products.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/product/edit/:code?',
    name: 'editProduct',
    component: resolve => require(['components/increment/imarketvue/product/EditProduct.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/deliveries',
    name: 'deliveries',
    component: resolve => require(['modules/ecommerce/deliveries/deliveryManagement.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/orders',
    name: 'orders',
    component: resolve => require(['modules/ecommerce/order/List.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/marketplace/product/:code?/:preview',
    name: 'product preview',
    component: resolve => require(['components/increment/imarketvue/marketplace/Product.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/traces/:code?',
    name: 'traces',
    component: resolve => require(['components/increment/imarketvue/trace/Traces.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/ledger',
    name: 'ledger',
    component: resolve => require(['modules/ecommerce/wallet/Ledger.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/wallet',
    name: 'wallet',
    component: resolve => require(['modules/ecommerce/wallet/Wallet.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/createRequestBorrow',
    name: 'createRequestBorrow',
    component: resolve => require(['components/increment/imarketvue/shipping/CheckoutShipping.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/admin/accounts',
    name: 'accounts',
    component: resolve => require(['modules/admin/Accounts.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/admin/deliveryfees',
    name: 'deliveryfees',
    component: resolve => require(['modules/admin/DeliveryFees.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/admin/fundtransferfees',
    name: 'fundtransferfees',
    component: resolve => require(['modules/admin/FundTransferFees.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/admin/promos',
    name: 'promos',
    component: resolve => require(['modules/admin/Promos.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/admin/withdrawalRequest',
    name: 'withdrawalRequest',
    component: resolve => require(['modules/admin/WithdrawalRequest.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/admin/locations',
    name: 'locations',
    component: resolve => require(['modules/admin/ScopeLocation.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/admin/deposits',
    name: 'deposits',
    component: resolve => require(['modules/admin/Deposits.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/admin/partners',
    name: 'partners',
    component: resolve => require(['modules/admin/Partners.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/welcome',
    name: 'welcome',
    component: resolve => require(['modules/basic/Denied.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/messenger/:username?',
    name: 'messenger',
    component: resolve => require(['components/increment/messengervue/Messenger.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/withdrawalHistory',
    name: 'withdrawalHistory',
    component: resolve => require(['modules/ecommerce/wallet/WithdrawalHistory.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '*',
    name: 'withdrawalHistory',
    component: resolve => require(['src/components/404.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }
  ]
}
