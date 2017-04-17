





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-223154a4264e621d49411c69fd71062cb152480ce2de3bde5ae285e801db7185.css" integrity="sha256-IjFUpCZOYh1JQRxp/XEGLLFSSAzi3jveWuKF6AHbcYU=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-11c46449861d69b02a101da2d9e4232e7213635a4d2839dde7e30604f59cf718.css" integrity="sha256-EcRkSYYdabAqEB2i2eQjLnITY1pNKDnd5+MGBPWc9xg=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>ok-coders-spring-2017-back-end/01-intro-to-javascript.md at master · okcoders/ok-coders-spring-2017-back-end</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars2.githubusercontent.com/u/7583961?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="okcoders/ok-coders-spring-2017-back-end" property="og:title" /><meta content="https://github.com/okcoders/ok-coders-spring-2017-back-end" property="og:url" /><meta content="ok-coders-spring-2017-back-end - Spring 2017 backend class for OK Coders" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTYwMzE0MzY5OjY1YWZmMDU4NjU5OGM2YjI4NGJmZTRkMzcwOGJkZWZlM2JjMTExMWUzYjYxMDVhZmE5NWY1NDhhODVmZDQ5MmU=--407db50b06d2d4f05f99cdf6417adf0748f923e7">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="A5D2:1DFF9:C4937E:12AB620:58F27F9E" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="A5D2:1DFF9:C4937E:12AB620:58F27F9E" name="octolytics-dimension-request_id" /><meta content="14240693" name="octolytics-actor-id" /><meta content="mdmoery" name="octolytics-actor-login" /><meta content="53b3c125e84c5d6fecc951ec7b117d9bbd55654735b2419634d3a966ce7de441" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="mdmoery">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="Yjk3M2U4NjU0MWQ0MWRhYjg5MTg1MzFiM2EyYWVhZDA3YmRiNzAyNGZhM2FiZGVmODE5OTg4ZDUxNzFkNzY4Znx7InJlbW90ZV9hZGRyZXNzIjoiNjguMjI3LjEyNC4xOCIsInJlcXVlc3RfaWQiOiJBNUQyOjFERkY5OkM0OTM3RToxMkFCNjIwOjU4RjI3RjlFIiwidGltZXN0YW1wIjoxNDkyMjg3MzkwLCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="7d29c5983f712a373068bb751d84ad82a5baccdd">

  <meta http-equiv="x-pjax-version" content="687002853f6963ad768d20799cfd58be">
  

    
  <meta name="description" content="ok-coders-spring-2017-back-end - Spring 2017 backend class for OK Coders">
  <meta name="go-import" content="github.com/okcoders/ok-coders-spring-2017-back-end git https://github.com/okcoders/ok-coders-spring-2017-back-end.git">

  <meta content="7583961" name="octolytics-dimension-user_id" /><meta content="okcoders" name="octolytics-dimension-user_login" /><meta content="85777669" name="octolytics-dimension-repository_id" /><meta content="okcoders/ok-coders-spring-2017-back-end" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="85777669" name="octolytics-dimension-repository_network_root_id" /><meta content="okcoders/ok-coders-spring-2017-back-end" name="octolytics-dimension-repository_network_root_nwo" />
        <link href="https://github.com/okcoders/ok-coders-spring-2017-back-end/commits/master.atom" rel="alternate" title="Recent Commits to ok-coders-spring-2017-back-end:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/okcoders/ok-coders-spring-2017-back-end/blob/master/03-javascript-intro/01-intro-to-javascript.md" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production page-blob">
    


  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<div class="header" role="banner">
  <div class="container clearfix">
    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/okcoders/ok-coders-spring-2017-back-end/search" class="js-site-search-form" data-scoped-search-url="/okcoders/ok-coders-spring-2017-back-end/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/okcoders/ok-coders-spring-2017-back-end/blob/master/03-javascript-intro/01-intro-to-javascript.md" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator " data-channel="notification-changed:14240693" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell float-left" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="okcoders/ok-coders-spring-2017-back-end">This repository</span>
  </div>
    <a class="dropdown-item" href="/okcoders/ok-coders-spring-2017-back-end/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/mdmoery"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@mdmoery" class="avatar" src="https://avatars2.githubusercontent.com/u/14240693?v=3&amp;s=40" height="20" width="20">
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">mdmoery</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/mdmoery" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/mdmoery?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="JuYTKjnO3pAim72OXcPFMJYdJz/YBBL61bZlRW0OGU/FvoA9Cr5MHdFjcR6iqiawE97QyXPiC8a5WtPvEphF2Q==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0/NpIW6vI+Chdwrwqopvu+3s/Dkf+eJlppNhRxq5nsgwq/o2Xd+xbVKPxmBV44w7aC8Lz7Qf+1nKf9ftZS/CXg==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>  </div>
</div>


      

  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        



  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
    <div class="container repohead-details-container">


      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4Ldy9n2G3WySGvvzz/LlrcYRTgEGbhF4DmCPi773RzKWzzXOYZ6LLXjNHtdHjrCIMJwUZzDyeFE44f/Wb8aZRQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="85777669" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/okcoders/ok-coders-spring-2017-back-end/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/okcoders/ok-coders-spring-2017-back-end/watchers"
            aria-label="11 users are watching this repository">
            11
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/okcoders/ok-coders-spring-2017-back-end/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="g90wdJSPDZfZRwrh6QLvkhIHOItXwkGPYtZN5VXYmUXQs5eJBb4gzLCO+xknHjBjBXnsclwj2yg/HfmTgCmvfQ==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar okcoders/ok-coders-spring-2017-back-end"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/okcoders/ok-coders-spring-2017-back-end/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/okcoders/ok-coders-spring-2017-back-end/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NQ/YuUgMk192c+DX4558VhJAejkdTSj6a5gLRVOIJZ5G72sY7dqyeDuX4RLHyBefO0GO9zsJMEbkvht3Gij9Fw==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star okcoders/ok-coders-spring-2017-back-end"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/okcoders/ok-coders-spring-2017-back-end/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/okcoders/ok-coders-spring-2017-back-end/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Aptg+O231RpB9swccdQ2Ct12SlawlKLvSMr5jUt/5jJmnhzBwbEyHwUXtO2GOQqI2IyLygeaFrY14T/3XVi+Pw==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of okcoders/ok-coders-spring-2017-back-end to your account"
                aria-label="Fork your own copy of okcoders/ok-coders-spring-2017-back-end to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/okcoders/ok-coders-spring-2017-back-end/network" class="social-count"
       aria-label="3 users forked this repository">
      3
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/okcoders" class="url fn" rel="author">okcoders</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/okcoders/ok-coders-spring-2017-back-end" data-pjax="#js-repo-pjax-container">ok-coders-spring-2017-back-end</a></strong>

</h1>

    </div>
    <div class="container">
      
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/okcoders/ok-coders-spring-2017-back-end" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /okcoders/ok-coders-spring-2017-back-end" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/okcoders/ok-coders-spring-2017-back-end/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /okcoders/ok-coders-spring-2017-back-end/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/okcoders/ok-coders-spring-2017-back-end/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /okcoders/ok-coders-spring-2017-back-end/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/okcoders/ok-coders-spring-2017-back-end/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /okcoders/ok-coders-spring-2017-back-end/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="counter">0</span>
</a>
    <a href="/okcoders/ok-coders-spring-2017-back-end/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /okcoders/ok-coders-spring-2017-back-end/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/okcoders/ok-coders-spring-2017-back-end/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /okcoders/ok-coders-spring-2017-back-end/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/okcoders/ok-coders-spring-2017-back-end/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /okcoders/ok-coders-spring-2017-back-end/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

    </div>
  </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
          

<a href="/okcoders/ok-coders-spring-2017-back-end/blob/a817a7ecdf596180e870541dd1279dd634f61dfe/03-javascript-intro/01-intro-to-javascript.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:4ea26a298f7dca110b6f0a7fa2f3b526 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/okcoders/ok-coders-spring-2017-back-end/blob/master/03-javascript-intro/01-intro-to-javascript.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/okcoders/ok-coders-spring-2017-back-end/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/okcoders/ok-coders-spring-2017-back-end"><span>ok-coders-spring-2017-back-end</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/okcoders/ok-coders-spring-2017-back-end/tree/master/03-javascript-intro"><span>03-javascript-intro</span></a></span><span class="separator">/</span><strong class="final-path">01-intro-to-javascript.md</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/okcoders/ok-coders-spring-2017-back-end/commit/a817a7ecdf596180e870541dd1279dd634f61dfe" data-pjax>
          a817a7e
        </a>
        <relative-time datetime="2017-04-15T13:53:33Z">Apr 15, 2017</relative-time>
      </span>
      <div>
        <img alt="@brockers" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1927765?v=3&amp;s=40" width="20" />
        <a href="/brockers" class="user-mention" rel="contributor">brockers</a>
          <a href="/okcoders/ok-coders-spring-2017-back-end/commit/a817a7ecdf596180e870541dd1279dd634f61dfe" class="message" data-pjax="true" title="Semi colons are your friend.">Semi colons are your friend.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@brockers" height="24" src="https://avatars2.githubusercontent.com/u/1927765?v=3&amp;s=48" width="24" />
            <a href="/brockers">brockers</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/okcoders/ok-coders-spring-2017-back-end/raw/master/03-javascript-intro/01-intro-to-javascript.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/okcoders/ok-coders-spring-2017-back-end/blame/master/03-javascript-intro/01-intro-to-javascript.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/okcoders/ok-coders-spring-2017-back-end/commits/master/03-javascript-intro/01-intro-to-javascript.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/okcoders/ok-coders-spring-2017-back-end/edit/master/03-javascript-intro/01-intro-to-javascript.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5cd1YrbRtkFj4RVUQ3yRdgKVTBz53vpvBf4cIl848OkK4ZiOOJpackXX9252eEDfPeWe0eo4jufyiVlqoNzk6w==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/okcoders/ok-coders-spring-2017-back-end/delete/master/03-javascript-intro/01-intro-to-javascript.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="/Olr8fponDbJp7uHEXsNe5X6CpOvJxr5xYeLjlMyf1lO8J8hQvQv7x84YP6pB3qmRRAl7X17Gs0uoyYMGtDHCA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      340 lines (263 sloc)
      <span class="file-info-divider"></span>
    10.6 KB
  </div>
</div>

  
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-javascript-introduction" class="anchor" href="#javascript-introduction" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JavaScript: Introduction</h1>
<p>JavaScript is a high-level, untyped, functional programming language created by Brendan Eich of Netscape in 10 days and first introduced in 1995 for use in dynamic web pages, or web pages that could respond to user actions and change their content.  Since then javascript has been introduced nto a number of environments. Most recently, <a href="http://nodejs.org/">Node.js</a> has popularized server-side programming with javascript.</p>
<p>Programming languages are a complex topic, and learning to program is difficult and requires practice. It will be frustrating at times. Programming languages are like languages, in so far as you type in something that looks like English and the computer manages to turn it into instructions that it understands. But programming languages are picky about their <em>syntax</em>, so the code must be just right in order to work.</p>
<p>The upcoming javascript chapters will focus on practical examples but will always discuss the syntax as well. Although javascript was originally designed for the browser, we will do most of our work in node.</p>
<h2><a id="user-content-node-or-chrome-console" class="anchor" href="#node-or-chrome-console" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node or Chrome Console</h2>
<p>Node provides a <em>runtime</em> for javascript programs as well as access to system functionaliy (it utilizes the V8 Javascript engine just like Chrome).  For now, that means we'll run our javascript programs using node. Type <code>node</code> at the console to bring up a REPL, or <em>read-evaluate-print-loop</em> Or, open the developer tools part of chrome and go to the console section:</p>
<pre><code>    $ node
&gt;
</code></pre>
<p>Notice that the prompt changes to a <code>&gt;</code> which means that node is waiting for input from you. Node <em>evaluates</em> whatever you've typed when you press return, and then it print out the result:</p>
<pre><code>    $ node
    &gt; 5
    5
    &gt; 5 + 5
    10
&gt;
</code></pre>
<p>When node is finished evaluating your input, it returns you to the <code>&gt;</code> prompt and waits for more. When you're finished and want to quit node, hold down the control key and press c: <code>^C</code>. You will need to press control-c twice.</p>
<h2><a id="user-content-data-types" class="anchor" href="#data-types" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Data Types</h2>
<p>For us, the fundamental unit of a programming language will be data. If our programs do nothing else, they will work with data.</p>
<p>Data is not an abstract topic. <em>Numbers</em> for example are data. Try typing a number at the node prompt:</p>
<pre><code>    &gt; 12
    12
&gt;
</code></pre>
<p>Node evaluates the number and prints the result, then it returns you to the prompt. The result of evaluating a number is just the number itself, in this case twelve.</p>
<p><em>Text</em> is also data. In programming languagaes, bits of text are called <em>strings</em>. In javascript, a string is represented by enclosing it in single or double quotes, like <code>"hello world"</code> or <code>'hello world'</code>. Try typing a string at the node prompt (for javascript, we will use single quotes):</p>
<pre><code>    &gt; "hello world"
    'hello world'
&gt;
</code></pre>
<p>Node evaluates the string and prints the result, then it returns you to the prompt. As with numbers, the result of evaluating a string is just the string itself.</p>
<p>There are other <em>types</em> of data. <em>Type</em> is a technical term. Data always have a type. A number is a type of data. Strings are a type of data. There are other types of data in javascript, for example, the <em>boolean</em> type.</p>
<p>Boolean data is always either <code>true</code> or <code>false</code>. True and false have special meaning in programming languages and are used in many circumstances. Try typing <code>true</code> into node:</p>
<pre><code>    &gt; true
    true
&gt;
</code></pre>
<p>Node understands <code>true</code> and <code>false</code> because they are <em>keywords</em> in the language. They <em>mean</em> something. Notice that true just evaluates to true. Likewise, false evaluates to false. There are other types of data we'll learn about in future chapters.</p>
<h2><a id="user-content-mathematical-operations" class="anchor" href="#mathematical-operations" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mathematical Operations</h2>
<p>Typically we want to do something with our data. Another way of saying this is we want to <em>operate</em> on it. The most basic operation we can perform is mathematical. After all, computers were originally built to perform mathematical operations.</p>
<p>For example, you can add two numbers together:</p>
<pre><code>    &gt; 12 + 12
    24
&gt;
</code></pre>
<p>Node evaluates the entire mathematical operation as a single <em>expression</em>. Expression is also a technical term in programming. What is important to know for now is that an expression always has a result. We can see that <code>12+12</code> has a   result because node prints it out before returning to the prompt.</p>
<p>Javascript supports all of the standard mathematical operations such as addition, subtraction, multiplication and division using the following symbols:</p>
<table>
  <tbody><tr>
    <td> + </td>
    <td> Addition </td>
  </tr>
  <tr>
    <td> - </td>
    <td> Subtraction </td>
  </tr>
  <tr>
    <td> * </td>
    <td> Multiplication </td>
  </tr>
  <tr>
    <td> / </td>
    <td> Division </td>
  </tr>
</tbody></table>
<p>Note that programming languages often use the asterisk <code>*</code> for multiplication and <code>/</code> for division. Try multiplying two numbers in node:</p>
<pre><code>    &gt; 12 * 12
    144
&gt;
</code></pre>
<p>Once again, node evaluates the mathematical operation and prints out the result.</p>
<p>Combine mathematical operations into more complex expressions by putting more than one operation on a line:</p>
<pre><code>    &gt; 5 + 5 + 5
    15
&gt;
</code></pre>
<p>Combine and group mathematical operations with parenthesis, <code>( ... )</code>. Parenthesis are used more generally to group any expression in a programming language, not just mathematical ones, but it's easy to see what they do using math as an example:</p>
<pre><code>    &gt; 1 + 2 * 3
    7
    &gt; (1 + 2) * 3
    9
&gt;
</code></pre>
<p>If you remember from basic math, parenthesis change the order of operations.
Normally multiplication is performed before addition, so in the expression <code>1 + 2 * 3</code>, first two and three are multipled and then one is added to the result.</p>
<p>When parenthesis are included, first one and two are added and then the result
of that operation is multiplied by three. Similarly, in their more general
sense, parenthesis will control the order of operations in any expression.</p>
<p>Parenthesis are always evaluated from the inside out. Start with the most deeply
<em>nested</em> parenthesis and work your way out:</p>
<pre><code>    &gt; (2 * (5 + 10) ) / (2 + 1)
    10
&gt;
</code></pre>
<h2><a id="user-content-string-and-boolean-operations" class="anchor" href="#string-and-boolean-operations" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String and Boolean Operations</h2>
<p>Javascript supports a few basic operations for string and boolean data types as
well. For example, <em>concatenate</em> two strings in javascript with the same <code>+</code>
operation:</p>
<pre><code>    &gt; "hello" + "world"
    'helloworld'
&gt;
</code></pre>
<p>Think of this as string addition. Notice that there is no space added to the
strings to separate them. You must add spacing yourself.</p>
<table>
  <tbody><tr>
    <td> + </td>
    <td> String concatenation </td>
  </tr>
</tbody></table>
<p>Always be aware of what type of data you are working with. If you put two
numbers in quotes, they are strings and no longer numbers. When you add them
together, you will be adding strings:</p>
<pre><code>    &gt; "12" + "24"
    '1224'
&gt;
</code></pre>
<p>The two basic boolean operations are the <em>and</em> <code>&amp;&amp;</code> and <em>or</em> <code>||</code> operations:</p>
<table>
  <tbody><tr>
    <td> &amp;&amp; </td>
    <td> and </td>
    <td> result is true only if both operands are true </td>
  </tr>
  <tr>
    <td> || </td>
    <td> or </td>
    <td> result is true if either operand is true </td>
  </tr>
</tbody></table>
<p>Boolean operations compare two pieces of data, called <em>operands</em>. An operand is
just the stuff that an operation works on. Compare two booleans in node:</p>
<pre><code>    &gt; true &amp;&amp; true
    true
    &gt; true &amp;&amp; false
    false
</code></pre>
<p>The result of a boolean operation is another boolean. The result depends on the
operands and the operation. A truth table is commonly used to describe the
possible results:</p>
<table>
  <tbody><tr>
    <td>&amp;&amp;</td>
    <th>true</th>
    <th>false</th>
  </tr>
  <tr>
    <th>true</th>
    <td>true</td>
    <td>false</td>
  </tr>
  <tr>
    <th>false</th>
    <td>false</td>
    <td>false</td>
  </tr>
</tbody></table>
<p>This table says that the <em>and</em> operation <code>&amp;&amp;</code> only results in true when both
operands are true. The following table shows that the <em>or</em> operation <code>||</code>
results in true when either operand is true:</p>
<table>
  <tbody><tr>
    <td>||</td>
    <th>true</th>
    <th>false</th>
  </tr>
  <tr>
    <th>true</th>
    <td>true</td>
    <td>true</td>
  </tr>
  <tr>
    <th>false</th>
    <td>true</td>
    <td>false</td>
  </tr>
</tbody></table>
<p>Try various combinations of true and false with the two operations to confirm
that the results match the truth tables.</p>
<p>Another important boolean operation is the <em>not</em>, written as an exclamation mark
<code>!</code>. Not reverse the value of the boolean so that <code>true</code> becomes <code>false</code> and
vice versa:</p>
<pre><code>    &gt; !true
    false
</code></pre>
<p>The truth table is straightforward:</p>
<table>
  <tbody><tr>
    <td>!</td>
    <th>true</th>
    <th>false</th>
  </tr>
  <tr>
    <th></th>
    <td>false</td>
    <td>true</td>
  </tr>
</tbody></table>
<h2><a id="user-content-comparsions" class="anchor" href="#comparsions" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Comparsions</h2>
<p>Another type of operation involves comparisons.  Javascript can compare numbers,
strings, or booleans and so on. Common comparsions <em>test</em> for equality or
inequality. The result of a comparison is always either <code>true</code> or <code>false</code>.</p>
<p>Check if two numbers are equal with a double equal sign <code>==</code>:</p>
<pre><code>    &gt; 5 == 5
    true
&gt;
</code></pre>
<p>Is five equal to five? Yes it is, true. Notice that <strong>two equal signs</strong> must be
used for comparison. A single equal sign is used for assignment, which we'll
learn about in the next chapter. If you try to compare with a single equal sign,
javascript produces an error:</p>
<pre><code>    &gt; 5 = 5
    ReferenceError: Invalid left-hand side in assignment ...
&gt;
</code></pre>
<p>There are other types of comparisons. Here are the common ones:</p>
<table>
  <tbody><tr>
    <td> == </td>
    <td> equals </td>
    <td> true if two pieces of data are equal </td>
  </tr>
  <tr>
    <td> != </td>
    <td> not equals </td>
    <td> true if two pieces of data are not equal </td>
  </tr>
  <tr>
    <td> &gt; </td>
    <td> greater than </td>
    <td> true if the first item is greater than the second </td>
  </tr>
  <tr>
    <td> &lt; </td>
    <td> less than </td>
    <td> true if the first item is less than the second </td>
  </tr>
  <tr>
    <td> &gt;= </td>
    <td> greater than or equal </td>
    <td> true if the first item is greater than or equal to the second </td>
  </tr>
  <tr>
    <td> &lt;= </td>
    <td> less than </td>
    <td> true if the first item is less than or equal to the second </td>
  </tr>
</tbody></table>
<p>Try typing a few into node:</p>
<pre><code>    &gt; 5 &lt; 6
    true
    &gt; 5 &lt; 3
    false
&gt;
    &gt; 5 - 4 &lt; 3
    true
&gt;
</code></pre>
<p>Notice in the first example that javascript performs the subtraction before
comparing the result. Programming languages also have an order of operations,
and mathematical operations always take place before comparisons. They have
<em>precedence</em>.</p>
<p>Strings may also be compared in javascript:</p>
<pre><code>    &gt; "zach" == "zach"
    true
    &gt; "zach" == "david"
    false
    &gt; "zach" == "ZACH"
    false
&gt;
</code></pre>
<p>Notice that string comparisons are <em>case sensitive</em>.</p>
<p>How do you think other comparison operations work with strings?</p>
<pre><code>    &gt; "zach" &lt; "b"
    false
    &gt; "zach" &lt; "zachary"
    true
</code></pre>
<p>--</p>
</article>
  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.12203s from github-fe137-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha256-ikMY/+oJoM24IUt2zykmufagztMYoxe+1BnbGSFMaQ0=" src="https://assets-cdn.github.com/assets/compat-8a4318ffea09a0cdb8214b76cf2926b9f6a0ced318a317bed419db19214c690d.js"></script>
    <script crossorigin="anonymous" integrity="sha256-bRCeda2EcbpBUIJybADDX7kpzquXUIJJKDXxHsqMB9k=" src="https://assets-cdn.github.com/assets/frameworks-6d109e75ad8471ba415082726c00c35fb929ceab975082492835f11eca8c07d9.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-IloiriQg40qyPGpBMQQNF8DOryIzkuxVdkGoQS45GiM=" src="https://assets-cdn.github.com/assets/github-225a22ae2420e34ab23c6a4131040d17c0ceaf223392ec557641a8412e391a23.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

