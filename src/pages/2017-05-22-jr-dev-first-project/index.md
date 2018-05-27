---
path: '/a-jr-devs-first-project-launch'
title: A junior dev’s first project launch and what I learned
published: true
date: '2017-05-22'
---

Hello and good day to you. I am Nick Kramer, krames12 on the interwebs, a junior developer who just recently landed his first developer job. I will write more in depth about my background in a later blog post, but for now I’ll keep the introduction short. I started teaching myself to code in December of 2015, knew somebody who knew somebody looking for a junior developer whose personality fit with the company, and here I am almost three months into my first developer job with an awesome boss and colleague. Now that that’s over let’s get into the meat and potatoes, my perspective on my first “solo” project as a “professional” developer.

### Planning Stage
We were approached by our sales person / company owner, we’re a small company of six people, about a medical company who needed a HIPAA solution to storing and accessing files. This is something we’ve dealt with many times in the past as we are a network solutions company with a very small development team and some really talented network engineers. My task in this was the application side of things.

The scope of the project was fairly simple:

- Have a way for agents in the field to securely send files to the company
- Have different roles with different types of access / views
- User and file management from the administration side with a “master” level account
- Only accessible to users with accounts.

It didn’t seem too complicated until I got to the user management side, but we’ll get into that later.

### Early Development
The scope was set and away we went. We started off with a simple design mock up, and we are by no means designers, and decided what needed to be in the prototype to be shown at the initial client meeting.

The prototype scope was:

- Working login with a couple of dummy accounts to demonstrate what can and can’t be seen / used
- Upload / List of files
- Somewhat dummy administration area
- Reasonable looking design

Luckily, I’ve spent some time working with CSS and at least knew a tiny bit about design and the importance of the user experience while on the path to becoming a developer. I am by no means an expert, but I know enough to make stuff work, look decent, as well as being able to spot pain points when using an application.

Having some direction with the mock up and our trusty whiteboard list, the first week went fairly smooth. Since we were keeping to the scope of the project, it was pretty cut and dry what needed to be done. There was a bit of a trip up on the login system, but one of the perks of having past projects with similar features in the company is having code to learn from and… borrow. There were plenty of discussions between my boss and I as to how to structure the database as well as the overall feel of the application flow. This was a wonderful way to get some internal feedback and helped shape how the project turned out.

### Client Meeting
After a week and a half of “prototype” development, it was time for our owner and I to go and meet with the client about the project. The goal was to get as much feedback as possible and hoping that most things that were already developed didn’t need to be changed too much. I was incredibly nervous since this project was my “baby”. However, I also understand that critique and feedback are necessary for a project to become it’s best version of itself. So putting those feeling aside as best as I could, it was time.

The initial reaction was surprisingly positive! Surprising in regards to how hard I can be on myself, so that was a huge relief right off the bat. I walked through the application mentioning what it could do, showing it in action, and answering questions as they came. The fact that some of the functionality was made from some assumptions we had about the business luckily lined up with most of how it actually worked, so that was a bit of a relief as well.

Overall it went incredibly well! We ironed out what needed to be improved, what we missed in our assumptions, and what the client wanted in the administration area which was slightly laid out in a half working state.

The absolute highlight of the meeting though was the client saying,

> “Overall, this is absolutely amazing! Minus the one or two features we talked about I would love to use this right now.”
That sent me into a confidence overload, I might actually know what I’m doing at this point! For now anyway.

### Post Meeting Development
On the agenda after the meeting was mostly user management, file management, and secure user login. There was a lot of new territory I had not come into contact with yet. User logins and handling user data is something that I was super scared about when working on my personal projects to the point that I actually avoided it up until this point. There already was a working user login but resetting passwords and setting the initial password was the scary part.

We ended up going with a token that was saved in database upon creation, or password reset, with a direct link that is sent out via email or given to the user by the Master Admin.

We used our own variation of this code snippet the unique reset token:

`$generatedKey = sha1(mt_rant(10000, 99999).time().$userID);`

The token in the link is checked against the database and welcomes the user to the password reset page upon matching. Once the user sets / resets their password, the token is deleted and the account is then allowed to log into the system. It kicks them back to the login screen and they can go about their business.

### It’s launching Friday? SINCE WHEN?
After some hallway discussions, we find out that the soft launch is on Friday. We were under the impression we had an extra week or two to get things done. After much panic and realization that there was a fair amount of miscommunication, we dig a bit deeper and break out the bigger scope stuff into smaller more digestible chunks. A lot of these chunks I had not dealt with before, password resetting and general user management were the big ones.

Despite this fear and constant freaking out, things got done. Having a hard end date helps and so does having an amazing developer to go to with questions. Half of the time it was a simple “you’re over thinking this, try doing it this way instead”, or a “we actually have that in this other project, let me give you access to the repo.” My personal goal was to finish on Thursday so that small bug fixed and server deployment could happen on Friday, and that goal was met! Everything was going according to the impromptu schedule we had cobbled together at the last moment.

### (Soft) Launch Day
It was Friday and I came in feeling super confident and ready for the inevitable slew of bugs once it hit the production server. The kicker for the day was that my boss, the other developer on the team, was leaving for the day around lunch time. That wasn’t too big of a deal though as long as the server got setup properly. The networking team was in a mad dash to get final day prep out of the way and configured for the on site prep a little bit after lunch.

We didn’t quite get the DNS and host set for the production server until just after lunch, and this is when I learned that my boss was trying to get the IP earlier in the day so he could set up the SSL certificate. Due to my lack of knowledge in that area, I was unaware that you needed the DNS to setup SSL. At that moment I went from being calm and collected to somewhat contained freak out. I had never done this before and we have three to four hours until we go live live! OH GOD! I was frantically googling and trying not to e-mail my boss asking for remote help since he was doing family related things that afternoon, hence the half day. I finally reached out and he got things sorted out… after a couple hours of LetsEncrypt being down for an hour and a half.

Things got fixed a little under an hour before we were going to present the finish product. I was not going on site as I wasn’t needed in that regard, just at my desk waiting for a slew of e-mails about bug reports as you can never trust the “it works on my machine!” mentality.

Most everything worked flawlessly, except for the couple things that didn’t which I am currently dealing with on this sunny Monday. I was shocked at only receiving one email and one phone call about file size restrictions. So far they seem to absolutely love it and I am relieved beyond belief.

### What I learned
I had heard and read about the project process before so I had a few thoughts going into this, but overall it went about as smooth as I figured it would. Smooth in some areas and totally choppy in others.

Of course I wanted to impress people with it being my first project that was pretty much entirely under my control. But I did stumble a bit and I did learn a lot.

My biggest takeaways are:

- Communication is key
- Documentation about start and end dates is incredibly important
- I will always run into a problem I have never seen before
- I can, and will, overcome those problems
- Having a proper time frame for when things are going to happen is incredibly important when it comes to prepping things to go to production

One thing that really helped through the process was my ability to, and the companies acceptance of, being vocal when I thought things weren’t going right. The frequent discussions and questioning about how different aspects of the project should act and feel were incredibly important to how it turned out.