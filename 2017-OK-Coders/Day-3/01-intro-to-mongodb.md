





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-223154a4264e621d49411c69fd71062cb152480ce2de3bde5ae285e801db7185.css" integrity="sha256-IjFUpCZOYh1JQRxp/XEGLLFSSAzi3jveWuKF6AHbcYU=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-11c46449861d69b02a101da2d9e4232e7213635a4d2839dde7e30604f59cf718.css" integrity="sha256-EcRkSYYdabAqEB2i2eQjLnITY1pNKDnd5+MGBPWc9xg=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>ok-coders-spring-2017-back-end/01-intro-to-mongodb.md at master · okcoders/ok-coders-spring-2017-back-end</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars2.githubusercontent.com/u/7583961?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="okcoders/ok-coders-spring-2017-back-end" property="og:title" /><meta content="https://github.com/okcoders/ok-coders-spring-2017-back-end" property="og:url" /><meta content="ok-coders-spring-2017-back-end - Spring 2017 backend class for OK Coders" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTYwMzE0MzY5OjZlZTVjNTQ5MDE5ZTJiOTA4MGUwMjcyNTc5OGMzMTg1ZDI2Y2M2NmZjMjRiOWE1MzNjMWYwZTExZDBhZmU5Y2E=--6fea5913c825e7987e72a3deac87a5cd7fc65a5a">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="A580:1DFFF:1E33673:2DBAEFB:58F27F02" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="A580:1DFFF:1E33673:2DBAEFB:58F27F02" name="octolytics-dimension-request_id" /><meta content="14240693" name="octolytics-actor-id" /><meta content="mdmoery" name="octolytics-actor-login" /><meta content="53b3c125e84c5d6fecc951ec7b117d9bbd55654735b2419634d3a966ce7de441" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="mdmoery">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ZGRlNWFhNmFkMDQ5ZTc4NjhlOGI2N2NhMDMzYWEzNzFhMzk0MGZlMWZjMTdhODRjNWYyZTIxODUxZWU4NzE1ZXx7InJlbW90ZV9hZGRyZXNzIjoiNjguMjI3LjEyNC4xOCIsInJlcXVlc3RfaWQiOiJBNTgwOjFERkZGOjFFMzM2NzM6MkRCQUVGQjo1OEYyN0YwMiIsInRpbWVzdGFtcCI6MTQ5MjI4NzIzNywiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="7d29c5983f712a373068bb751d84ad82a5baccdd">

  <meta http-equiv="x-pjax-version" content="687002853f6963ad768d20799cfd58be">
  

    
  <meta name="description" content="ok-coders-spring-2017-back-end - Spring 2017 backend class for OK Coders">
  <meta name="go-import" content="github.com/okcoders/ok-coders-spring-2017-back-end git https://github.com/okcoders/ok-coders-spring-2017-back-end.git">

  <meta content="7583961" name="octolytics-dimension-user_id" /><meta content="okcoders" name="octolytics-dimension-user_login" /><meta content="85777669" name="octolytics-dimension-repository_id" /><meta content="okcoders/ok-coders-spring-2017-back-end" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="85777669" name="octolytics-dimension-repository_network_root_id" /><meta content="okcoders/ok-coders-spring-2017-back-end" name="octolytics-dimension-repository_network_root_nwo" />
        <link href="https://github.com/okcoders/ok-coders-spring-2017-back-end/commits/master.atom" rel="alternate" title="Recent Commits to ok-coders-spring-2017-back-end:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/okcoders/ok-coders-spring-2017-back-end/blob/master/08-mongodb/01-intro-to-mongodb.md" data-pjax-transient>


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
        <a href="/okcoders/ok-coders-spring-2017-back-end/blob/master/08-mongodb/01-intro-to-mongodb.md" class="header-search-scope no-underline">This repository</a>
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

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="cQuiAZF+8tWZlawiqrXHk6NSADuRYVRuURsZtfZ07k+SUzEWog5gWGptYLJV3CQTJpH3zTqHTVI9968fieKy2Q==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="U8y0xkcZoZKoF6S62qPMS/BmooJR89SsdE6C2t+UWgqwlCfRdGkzH1vvaColyi/LdaVVdPoVzZAYojRwoAIGnA==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="WkX2jZWaeeEaEcXBEi0gHnsXEHd9NWNn8GH2ushReb0sPbG1iYIvoPDGIOWaUXU7jZpKEUupCk7G4IbnGWCnyg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="85777669" />

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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/okcoders/ok-coders-spring-2017-back-end/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YPaTjfVwoPsbT+j7TH/D30EK2gqb4A5FSpfEDASjWuQzmDRwZEGNoHKGGQOCYxwuVnQO85ABlOIXXHB60VJs3A==" /></div>
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/okcoders/ok-coders-spring-2017-back-end/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="yJ6NATjAX1lJDQHqtJzW7UPPsftvNrMIaAdJ6Uh9T2+7fj6gnRZ+fgTpAC+Qyr0kas5FNUlyq7TnIVnbAd2X5g==" /></div>
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
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/okcoders/ok-coders-spring-2017-back-end/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="TntgI9dAEH8XyFwtBeMhz46iyKz44kJXMXgAKMzCp20qfhwa+0b3elMpJNzyDh1Ni1gJME/s9g5MU8ZS2uX/YA==" /></div>
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

    
          

<a href="/okcoders/ok-coders-spring-2017-back-end/blob/a817a7ecdf596180e870541dd1279dd634f61dfe/08-mongodb/01-intro-to-mongodb.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:7330f67a503e5f0e28284913a6f7272b -->

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
               href="/okcoders/ok-coders-spring-2017-back-end/blob/master/08-mongodb/01-intro-to-mongodb.md"
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
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/okcoders/ok-coders-spring-2017-back-end"><span>ok-coders-spring-2017-back-end</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/okcoders/ok-coders-spring-2017-back-end/tree/master/08-mongodb"><span>08-mongodb</span></a></span><span class="separator">/</span><strong class="final-path">01-intro-to-mongodb.md</strong>
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
      <a href="/okcoders/ok-coders-spring-2017-back-end/raw/master/08-mongodb/01-intro-to-mongodb.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/okcoders/ok-coders-spring-2017-back-end/blame/master/08-mongodb/01-intro-to-mongodb.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/okcoders/ok-coders-spring-2017-back-end/commits/master/08-mongodb/01-intro-to-mongodb.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/okcoders/ok-coders-spring-2017-back-end/edit/master/08-mongodb/01-intro-to-mongodb.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UaaktoSLKWbDMPIWxH4qQ3OXQLCZac71sezetGLzMy41ZZ2YKq3B68PBIueo36FZRogjtva3B7VnTWITNv1Wiw==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/okcoders/ok-coders-spring-2017-back-end/delete/master/08-mongodb/01-intro-to-mongodb.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+rGwoNhXAEdVlsS1YlTOdb1pKJ6h3Z9k51ZC1ZWurbNe5erAeitPf9+E7zFB3Q694lXjHnfJS+HxeGK1LXQeAw==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      537 lines (365 sloc)
      <span class="file-info-divider"></span>
    22.4 KB
  </div>
</div>

  
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-mondodb" class="anchor" href="#mondodb" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mondodb</h1>
<p>MongoDB is one of a new class of modern database systems known as <em>NoSQL</em> databases. SQL systems use the structed query language for modifying the database and use a tables and rows abstraction to model data. NoSQL databases typically employ some other form of querying and use documents, key-value pairs, graphs and other data structures to model data.</p>
<p>SQL is still a standard in database systems and is definitely worth learning. But the structured query language is another programming language -- a declarative one -- that we'd have to study, whereas mongodb uses javascript for data access. This is really incredible. In addition to using javascript for server side development with node and express, beyond already using it for client side features, we can now also use javascript to create, query and modify data in a database.</p>
<p>MongoDB also forms part of what is known as the <em>MEAN</em> stack for <em>full stack</em> javascript web development, which is a popular approach to contemporary web application development. By the end of this class we'll have covered three of the four technologies used in this approach.</p>
<h2><a id="user-content-guides" class="anchor" href="#guides" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Guides</h2>
<p>We can use a CLI with mongodb to do all the CRUD operations:
<a href="https://docs.mongodb.com/getting-started/shell/">https://docs.mongodb.com/getting-started/shell/</a></p>
<p>Or we can use a node driver and write .js files to do the same thing:
<a href="https://docs.mongodb.com/getting-started/node/">https://docs.mongodb.com/getting-started/node/</a></p>
<h2><a id="user-content-installation" class="anchor" href="#installation" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>
<p><strong>Mac</strong></p>
<p>If you are using homebrew, then at the command line simply:</p>
<pre><code>$ brew update
$ brew install mongodb
</code></pre>
<p>If not, install from the package at <a href="http://www.mongodb.org/downloads">mongodb.org/downloads</a></p>
<p><strong>Windows</strong></p>
<p>Install from the package at <a href="http://www.mongodb.org/downloads">mongodb.org/downloads</a>. Download and open the file.</p>
<p>The Windows executables will be installed in your Program Files directory, inside a Mongo folder (the exact name of the folder depends on your system). You will find the required executables inside a <em>bin</em> folder in that directory.</p>
<h2><a id="user-content-starting-mongodb" class="anchor" href="#starting-mongodb" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Starting MongoDB</h2>
<p>Using a database involves two applications: a database server or <em>daemon</em> that runs in the background and a database client with which you directly interact. MongoDB ships with the <code>mongodb</code> daemon and the <code>mongo</code> client.</p>
<p><strong>Mac / Linux</strong></p>
<p>Start both the daemon and the client from the command line. Start the daemon first, as it actually implements the database.</p>
<p>You must specify a directory path to your database when starting the latest release of the mongo database daemon. Use a local directory for now. <code>cd</code> into a new folder and:</p>
<pre><code>$ mkdir db
$ mongod --dbpath db
</code></pre>
<p>This sequence of commands creates a new empty <em>db</em> directory and then starts the mongo server, telling it to use that folder for the database. This also keep the database server running in a terminal window. To quit the database type Control-C: <code>^c</code>.</p>
<p>To interact with the database from the command line client you will need to start up another terminal window.</p>
<p>On the Macintosh you mays see a warning when starting the database server:</p>
<p>"WARNING: soft rlimits too low. Number of files is 256, should be at least 1000"</p>
<p>If that occurs, execute the following command before running the daemon:</p>
<pre><code>$ ulimit -n 2048
</code></pre>
<p><strong>Windows</strong></p>
<p>First you will need to create the database path that mongo uses. In a Command Prompt type:</p>
<pre><code>md \data\db
</code></pre>
<p>Then find the Mongo directory that the download installed. It will be in your <code>C:\Program Files</code>. Find the <em>bin</em> directory inside the Mongo directory. It contains a <code>mongod.exe</code> file. Run that program.</p>
<p>If you have trouble installing or running mongo on windows, refer to the <a href="http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/">official documentation</a>.</p>
<p><strong>Connecting to the database</strong></p>
<p>We're now ready to connect to the database. On Mac or Linux, in another terminal window, execute the <code>mongo</code> command. It should connect you to the database and tell you some information about it:</p>
<pre><code>$ mongo
MongoDB shell version: 2.6.3
connecting to: test
&gt;
</code></pre>
<p>On Windows, run the <code>mongo.exe</code> file in that <em>bin</em> folder. You'll type commands into this command prompt.</p>
<p>Notice that the prompt changes to a <code>&gt;</code>, indicating that you are in the mongo REPL. You may type commands and the mongo client will send them to the server to be executed. Any results are printed back to the REPL.</p>
<p>At any point in your interaction with the command line client, if you aren't sure what to do next type the <code>help</code> command. It will print a list of available commands given the current context:</p>
<pre><code>&gt; help
db.help()                    help on db methods
db.mycoll.help()             help on collection methods
sh.help()                    sharding helpers
rs.help()                    replica set helpers
...
</code></pre>
<p>For now use the <code>exit</code> command to quit the client:</p>
<pre><code>&gt; exit
</code></pre>
<p>As you interact with the database through the client application you'll see the server print out information to the other terminal.</p>
<h2><a id="user-content-dbs-collection-and-documents" class="anchor" href="#dbs-collection-and-documents" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DBs, Collection and Documents</h2>
<p>Recall from the previous chapter that the mongo database uses collections of documents to model data, rather than tables as SQL does. A collection is just a bunch of documents. Documents are really the data object we'll be interacting with, but when we create a document or otherwise modify it, we'll be doing that in the context of a collection.</p>
<pre><code>SQL Structure |  MongoDB Structure
--------------|-------------------
 database     |     database
 table        |     collection
 row          |     document
</code></pre>
<p>Example collections might be <code>posts</code>, <code>users</code>, <code>comments</code> and so on in a blog application. Then each collection contains the data for particular posts, users and comments.</p>
<p>Before we create collections we need to specify what database those collections will belong to. This is similar to SQL. A single mongo server can support many databases that are independent of one another. Let's fire up the mongo client, create a database and start adding data</p>
<p>Make sure you're running the <code>mongo</code> command line client:</p>
<pre><code>$ mongo
&gt;
</code></pre>
<p>and execute:</p>
<pre><code>&gt; show dbs
admin  (empty)
local  0.078GB
test   (empty)
</code></pre>
<p>The <code>show dbs</code> command just lists the currently active databases. To switch to a database, simply execute the <code>use</code> command, providing the name of the database:</p>
<pre><code>&gt; use blog
switched to db blog
</code></pre>
<p>Notice, however, that <code>show</code> does not yet include the new blog database:</p>
<pre><code>&gt; show dbs
admin  (empty)
local  0.078GB
test   (empty)
</code></pre>
<p>Both databases and collections are created <em>lazily</em> in mongodb. A database won't be created until there is data added to it, likewise for a collection.</p>
<h2><a id="user-content-crud" class="anchor" href="#crud" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CRUD</h2>
<p>Although mongodb supports a number of advanced database operations like geolocation based queries, mapreduce and sharding, we will focus on creating, retrieving, updating and deleting data, or the <em>CRUD</em> operations.</p>
<pre><code>CRUD Operation | Command
---------------|----------------
  create       |   insert
  read         |   find
  update       |   update
  delete       |   remove
</code></pre>
<p>The CRUD operators are all performed on the <code>db</code> object in the mongo client, and further on another object that targets the collection for the command. For example, if you want to work with documents in a <code>posts</code> collection, your commands will begin with <code>db.posts</code>. The commands will then be methods on this <code>db.posts</code> object.</p>
<p>If you want to make changes to the comments collection, use <code>db.comments</code>. <code>db</code> here always refers to the currently used database.</p>
<h3><a id="user-content-create" class="anchor" href="#create" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create</h3>
<p>Let's create a few blog posts then. Target the <code>db.posts</code> object. The command we'll use is <code>insert</code>, and we pass it a normal javascript object:</p>
<pre><code>&gt; db.posts.insert({
	title: "The email line that's client repellent",
	body: "I’d gone through a few droughts as a freelancer",
	author: "OK Coders"
})
</code></pre>
<p>The client should respond with the result:</p>
<pre><code>WriteResult({ "nInserted" : 1 })
</code></pre>
<p>We can see that the post has been created. First confirm that the collection exists:</p>
<pre><code>&gt; show collections
posts
system.indexes
</code></pre>
<p>We see the <code>posts</code> collection has just been created along with a system collection for managing indexes.</p>
<p>Execute the <code>find</code> command on <code>db.posts</code> to see the actual post object:</p>
<pre><code>&gt; db.posts.find()
{ "_id" : ObjectId("53cd2309b3f624fc17ca5cc9"), "title" : "The email line that's client repellent", "body" : "I’d gone through a few droughts as a freelancer", "author" : "OK Coders" }
</code></pre>
<p>The command returns the single document we just created. Notice the document contains an additional <code>_id</code> parameter of type <code>ObjectId</code>. This is the unique identifier mongodb uses to identify objects in a database and it is the identifier we'll use for the <code>:id</code> param in our resourceful routes.</p>
<p>It's possible to insert more than one object at a time. Just pass an array of javascript objects to the insert method. Go ahead and create a few more blog posts. I'm copying content from <a href="https://github.com/okcoders/rendering-templates-homework/blob/master/post.js">posts.js</a>:</p>
<pre><code>&gt; db.posts.insert([
  {
    title: "The Moderately Enthusiastic Programmer",
    body: "I feel like I’m practically the poster child for the 'passionate programmer'",
    author: "Mr. T"
  },
  {
    title: "The Magic of Strace",
    body: "Early in my career, a co-worker and I were flown from Memphis to Orlando to try to help end a multi-day outage",
    author: "Ninja Programming"
  },
  {
    title: "http://nightwatchjs.org/",
    body: "Simple but powerful syntax which enables you to write tests very quickly, using only Javascript and CSS selectors.",
    author: "The Night Watchman"
  }
])
</code></pre>
<p>You should receive a message that no errors occurred while adding the data.</p>
<p>Again confirm that the posts were added with the <code>find</code> command:</p>
<pre><code>&gt; db.posts.find()
{ "_id" : ObjectId("53cd2309b3f624fc17ca5cc9"), "title" : "The email line that's client repellent", "body" : "I’d gone through a few droughts as a freelancer", "author" : "OK Coders" }
...
</code></pre>
<p>Sure enough, each post was added and assigned a unique object ID.</p>
<h3><a id="user-content-retrieve" class="anchor" href="#retrieve" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Retrieve</h3>
<p>Retrieving, or <em>querying</em>, documents in mongodb is straightforward. We'll use the <code>find</code> command as we've already seen. Without additional arguments the <code>find</code> command retrieves all the documents in a collection. With additional arguments it behaves like the <code>WHERE</code> clause in a SQL statement. MongoDB provides it own named parameters attached to javascript objects to control the querying.</p>
<p>Without other arguments, <code>find</code> returns all the documents in a collection:</p>
<pre><code>&gt; db.posts.find()
...
</code></pre>
<p>A command like this might be used when someone visits the <code>/posts</code> url on your blog.</p>
<p>Often, however, you'll want to retrieve a single document, for example when the user vists <code>/posts/:id</code>, and you'll want to retrieve that document by its unique identifier. This is equivalent to filtering the find command by <code>_id</code>, or in SQL using a <code>WHERE _id = :id</code> clause. Mongo makes this easy to do.</p>
<p>Get the object id of a post in your database. One of mine is:</p>
<pre><code>ObjectId("53cd2309b3f624fc17ca5cc9")
</code></pre>
<p>In the find command, pass in a <em>query object</em> with the parameters and their values that you'd like to query against:</p>
<pre><code>&gt; db.posts.find({
_id: ObjectId("53cd2309b3f624fc17ca5cc9")
})
</code></pre>
<p>Notice that I am passing a normal javascript object to the find command and that object contains parameters which documents of that type (posts) have, for example, <code>_id</code>'s. Mongo then returns only those documents which match those parameters:</p>
<pre><code>{ "_id" : ObjectId("53cd2309b3f624fc17ca5cc9"), "title" : "The email line that's client repellent", "body" : "I’d gone through a few droughts as a freelancer", "author" : "OK Coders" }
</code></pre>
<p>All querying in mongodb works like this. We'll pass in a query object to the <code>find</code> command that targets specific attributes on the documents in the collection.</p>
<p>We can query against any attribute on a document. Search for those documents whose author is <code>"Mr. T"</code>:</p>
<pre><code>&gt; db.posts.find({
author: "Mr. T"
})
</code></pre>
<p>You'll need to supply an author value that actually occurs in your documents. Mongo then returns the correct document.</p>
<pre><code>{ "_id" : ObjectId("53cd2561b3f624fc17ca5cca"), "title" : "The Moderately Enthusiastic Programmer", "body" : "I feel like I’m practically the poster child for the 'passionate programmer'", "author" : "Mr. T" }
</code></pre>
<p>We can use <a href="http://en.wikipedia.org/wiki/Regular_expression">regular expressions</a> for more advanced text based queries against object attributes. For example, the following query finds any document in the posts collection whose title begins with the word 'the', regardless of its case:</p>
<pre><code>&gt; db.posts.find({
	title: /^the/i
})
</code></pre>
<p>Mongo supports much more advanced querying which is beyond the scope of this chapter.</p>
<p><strong>Choosing the fields to return</strong></p>
<p>We can specify which attributes or properties to return when we query a collection. By default the <code>find</code> command returns the entire document which matches its query, but we can ask it to return a subset of attributes instead.</p>
<p>Add a second object argument to the find command, again composed of the names of attributes on the documents in the collection but with boolean values to indicate if you want those attributes returned:</p>
<pre><code>&gt; db.posts.find( {}, {title: true} )
</code></pre>
<p>This command asks find to only return the title attribute for the documents it matches. Because I don't have a specific query I need to pass in an empty object for the first parameter. It returns the documents but with only their <code>_id</code> and <code>_title</code>:</p>
<pre><code>{ "_id" : ObjectId("53cd2309b3f624fc17ca5cc9"), "title" : "The email line that's client repellent" }
{ "_id" : ObjectId("53cd2561b3f624fc17ca5cca"), "title" : "The Moderately Enthusiastic Programmer" }
{ "_id" : ObjectId("53cd2561b3f624fc17ca5ccb"), "title" : "The Magic of Strace" }
{ "_id" : ObjectId("53cd2561b3f624fc17ca5ccc"), "title" : "http://nightwatchjs.org/" }
</code></pre>
<p><strong>The Cursor</strong></p>
<p>The cursor allows us to specify the order and range of the documents returned.</p>
<p>These are additional methods that you call on the object that is returned by the find command. You can <em>method chain</em> them together to get the desired effect.</p>
<p>For example, to sort the results of a find operation, add the <code>sort()</code> method and again pass it a javascript object with the sort ordering you'd like to apply. This is like the <code>ORDER BY</code> clause in SQL.</p>
<p>Let's order our posts by author's name, ascending:</p>
<pre><code>&gt; db.posts.find().sort( { author: 1 } )
</code></pre>
<p>Use a value of <code>-1</code> to sort descending. You may specify more than one attribute to sort by.</p>
<p>Use the <code>limit()</code> and <code>skip()</code> commands to specify the range of results you'd like to retrieve. For example, to skip the first two documents and only retrieve the next one after them, use <code>skip(2)</code> and <code>limit(1)</code> after the <code>find()</code> command:</p>
<pre><code>&gt; db.posts.find().skip(2).limit(1)
</code></pre>
<p>Cursor methods like this are often used to page through a long list of items.</p>
<h3><a id="user-content-update" class="anchor" href="#update" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Update</h3>
<p>Updating is a little stranger in mongo. An <code>update</code> command allows us to target a subset of documents in a collection and then make a number of kinds of changes to those documents.</p>
<p>Update is called with two arguments, both of them javascript objects. The first object functions like the query object in the <code>find</code> command. It filters for a subset of documents in the collection. The second argument specifies what kind of change to make.</p>
<p>Most often we'll want to target a single document that a user has just edited and save in our web application, and we'll want to modify the attributes they have changed.</p>
<p>To accomplish this, call update with the two javascript objects. The first object filters by the object id, which we'll acquire from a url parameter. The second will use the special property <code>$set</code> which itself takes an object of attributes and their values that you want to change on the target document.</p>
<p>Find an object you'd like to change in your posts collection. You'll need the <code>_id</code> value. I'm using <code>ObjectId("53cd2309b3f624fc17ca5cc9")</code></p>
<p>Let's build the update command up piece by piece. First target that document with the update command:</p>
<pre><code>db.posts.update({
	_id: ObjectId("53cd2309b3f624fc17ca5cc9")
},
{
	...
})
</code></pre>
<p>Notice that we have a second object that needs to be filled in. Provide the <code>$set</code> property which itself takes an object:</p>
<pre><code>db.posts.update({
	_id: ObjectId("53cd2309b3f624fc17ca5cc9")
},
{
	$set: {
		...
	}
})
</code></pre>
<p>Finally, inside the <code>$set</code> object, specify the attributes you'd like to modify and their new values:</p>
<pre><code>&gt; db.posts.update({
	_id: ObjectId("53cd2309b3f624fc17ca5cc9")
},
{
	$set: {
		title: "New title for this post"
	}
})
</code></pre>
<p>This final command will actually perform the update. I've used extra spacing here to make the structure clear but you can always write the entire command on a single line.</p>
<p>A <code>find</code> query shows us that the post has in fact been modified:</p>
<pre><code>&gt; db.posts.find( {_id: ObjectId("53cd2309b3f624fc17ca5cc9")} )
{ "_id" : ObjectId("53cd2309b3f624fc17ca5cc9"), "title" : "New title for this post", "body" : "I’d gone through a few droughts as a freelancer", "author" : "OK Coders" }
</code></pre>
<p>We used the special <code>$set</code> parameter to specify what kind of update we want to execute. Mongo supports other updates like unseting, incrementing and array modification, but these are beyond the scope of this chapter.</p>
<p>Note that it is possible to update more than one object simultaneously. The first argument to the <code>update</code> command is an object that works just like the query object in the <code>find</code> command. If it matches more than one document in the collection then all the matched documents will be updated.</p>
<h3><a id="user-content-delete" class="anchor" href="#delete" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Delete</h3>
<p>Deleting is straightforward. Use the <code>remove</code> command. Like the <code>find</code> and <code>update</code> commands it takes a query object as its first parameter. The command then deletes any object that matches that query.</p>
<p>For example, to delete the post document I've been modifiying:</p>
<pre><code>&gt; db.posts.remove({
	_id: ObjectId("53cd2309b3f624fc17ca5cc9")
})
</code></pre>
<p>I could delete all the posts by calling delete with an empty query object:</p>
<pre><code>&gt; db.posts.remove({})
</code></pre>
<p>Be careful!</p>
<h2><a id="user-content-using-nested-values" class="anchor" href="#using-nested-values" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using nested values</h2>
<p>Before we wrap up this intoduction to mongoDB let's take a short look at nested values and what it means to be a schemaless database.</p>
<p>We learned in the previous chapter that SQL style databases do not support nested data. The value at a particular column and row in a table must be a simple data type: number, text, date, etc. You cannot insert a table in a table, and you cannot include more complex data structures like arrays or objects.</p>
<p>MongoDB, however, does support nested data types in documents. A document attribute can be an array or another javascript object. Moreover mongo fully supports querying against these nested properties and making modifications to them.</p>
<p>For example insert a post that has a keywords attribute that is an array of strings:</p>
<pre><code>&gt; db.posts.insert({
	title: "Keywords test",
	body: "Lorem ipsum",
	author: "Mr. T",
	keywords: [ "node", "mongo", "okcoders" ]
})
</code></pre>
<p><code>db.posts.find()</code> now returns that document as well:</p>
<pre><code>...
{ "_id" : ObjectId("53cd49aeb3f624fc17ca5ccd"), "title" : "Keywords test", "body" : "Lorem ipsum", "author" : "Mr. T", "keywords" : [ "node", "mongo", "okcoders" ] }
</code></pre>
<p>Importantly, notice that our keywords is a list of distinct values. We could not do this in a SQL style database.</p>
<p>We can now query against that nested array as we do any other document attribute. Mongo automatically infers that you mean to check for values in an array when your query object targets array attributes:</p>
<pre><code>&gt; db.posts.find({
	keywords: 'node'
})
</code></pre>
<p>We can even use regular expressions, which is pretty powerful stuff and much simpler than SQL:</p>
<pre><code>&gt; db.posts.find({
	keywords: /NODE/i
})
</code></pre>
<p>In addition to arrays we can nest javascript objects inside our documents. Create a post that has an author attribute but this time provide a javascript object with a name and id fields for it:</p>
<pre><code>&gt; db.posts.insert({
	title: "Nested author test",
	body: "Lorem ipsum",
	author: {
		id: 1,
 		name: "OK Coders"
	}
})
</code></pre>
<p>Notice we're just using a nested javascript object. Confirm the insertion with the <code>find</code> operation:</p>
<pre><code>{ "_id" : ObjectId("53cd4d03b3f624fc17ca5cce"), "title" : "Nested author test", "body" : "Lorem ipsum", "author" : { "id" : 1, "name" : "OK Coders" } }
</code></pre>
<p>As with arrays, we can query against attributes in the nested object. Simply use the dot syntax to reach into it:</p>
<pre><code>&gt; db.posts.find({
	"author.name": 'OK Coders'
})
</code></pre>
<p>You can nest as deeply as you like in a mongo document and can combine arrays and objects. Notice that we have to wrap the property name in quotes because the period <code>.</code> is not a legal character for a property name.</p>
<h2><a id="user-content-schemaless-documents" class="anchor" href="#schemaless-documents" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Schemaless documents</h2>
<p>In the above example we were able to insert a document into the posts collection that contained a keywords attribute even though no other post has that attribute. This is partly what it means to be <em>schemaless.</em> We can add new attributes to documents with no effect on the previous attributes.</p>
<p>(Schemaless also means that we don't have to specify a document's attributes in advance, which must be done in SQL with the <code>CREATE TABLE</code> statement.)</p>
<p>Notice what happens then if we request the documents back in a <code>find</code> operation but only ask for keywords:</p>
<pre><code>db.posts.find( {}, { keywords: true } )
{ "_id" : ObjectId("53cd2309b3f624fc17ca5cc9") }
{ "_id" : ObjectId("53cd2561b3f624fc17ca5cca") }
{ "_id" : ObjectId("53cd2561b3f624fc17ca5ccb") }
{ "_id" : ObjectId("53cd2561b3f624fc17ca5ccc") }
{ "_id" : ObjectId("53cd49aeb3f624fc17ca5ccd"), "keywords" : [ "node", "mongo", "okcoders" ] }
</code></pre>
<p>We get a number of objects back, as we expect, but only one of them has keywords. What happens of we try to iterate through all these objects and access the keywords? What value will we get back when a document doesn't have that attribute?</p>
<p><code>undefined</code></p>
<p>Be careful taking advantage of this feature. Your application must now deal with possibly many missing values when it makes queries against collections.</p>
<p>Or consider the fact that some of our post documents now have two kinds of <code>author</code> values: one a simple string and the other a javascript object. How will your application handle that? Will it do the right thing?</p>
<p>Schemaless storage is a powerful feature of mongoDB and allows for the rapid prototyping of an application without having to worry about blowing out your database or modifying tables, but in the end you probably want to lock down a format for your documents once you reach an advanced stage in your project and then have a consistent and sane policy for adding new attributes.</p>
<h2><a id="user-content-graphical-utilities" class="anchor" href="#graphical-utilities" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Graphical utilities</h2>
<p>Using the command line to interact with your mongo data can be frustrating and error prone. The cross platform graphical client, <a href="http://robomongo.org/">Robomongo</a>, might be a better option for you.</p>
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
      <li>&copy; 2017 <span title="0.10065s from github-fe-a93be76.cp1-iad.github.net">GitHub</span>, Inc.</li>
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

