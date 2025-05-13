import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Projects = () => {
  return (
    <div className="md:px-10 mt-10 ml-6 md:ml-0 md:mr-10 mr-0">
      <h1 className="heading md:text-4xl text-3xl md:ml-15 md:mr-15 accent-color">
        Projects
      </h1>
      <div className="md:ml-15 mt-5">
        <h2 className="text-xl md:text-2xl">Ph.D Research Projects</h2>
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full md:ml-5 md:px-10 ml-0 pr-5"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Novel Feature Selection Approach in Stream Data for Efficient
              Knowledge Extraction
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div id="info" className="flex flex-col">
                  <div>
                    <b>Date:</b> February 2018 - Continue
                  </div>
                  <div>
                    <b>University:</b> Gujarat Technological University,
                    Chandkheda.
                  </div>
                  <div>
                    <b>Members:</b> Dr. Kaushikkumar Rana, Suman Tiwari
                  </div>
                </div>
                <div id="content">
                  <p className="text-justify mt-5">
                    In the ever-evolving landscape of data analysis, the
                    efficient extraction of knowledge from streaming data poses
                    unique challenges that demand innovative solutions. This
                    research delves into a 4 novel feature selection approach
                    tailored specifically for streaming data environments.
                    Recognizing the dynamic and continuous nature of data
                    streams, our approach aims to identify and prioritize
                    relevant features in real-time. By adapting to the dynamic
                    nature of streaming data, the proposed method strives to
                    enhance the efficiency of knowledge extraction, ensuring
                    that the selected features capture meaningful patterns and
                    trends as they unfold in the continuous data flow. This
                    research not only contributes to the optimization of feature
                    selection in dynamic data environments but also holds
                    promise for applications in various domains where timely and
                    accurate knowledge extraction from streaming data is
                    critical.
                  </p>
                  <p className="text-justify mt-5">
                    The significance of this research lies in its potential to
                    address the pressing need for efficient feature selection in
                    streaming data scenarios. Traditional methods often struggle
                    to keep pace with the rapid influx of data in real-time,
                    leading to suboptimal knowledge extraction. Our novel
                    approach seeks to bridge this gap by introducing adaptive
                    and real-time feature selection mechanisms. By leveraging
                    the latest advancements in data stream processing, our
                    research aims to redefine the paradigm of feature selection
                    in dynamic data environments, opening avenues for more
                    effective and timely knowledge extraction. As we navigate
                    the era of continuous data streams, this research stands at
                    the forefront, offering a forward thinking approach to
                    empower data scientists and analysts in extracting
                    meaningful insights efficiently
                  </p>
                </div>
                <div id="contribution" className="mt-5">
                  <b>Contribution:</b>
                  <div className="ml-5 mt-5">
                    <ul className="flex list-disc flex-col gap-2">
                      <li>
                        Extracted, Transformed and Loaded(ETL) various news
                        article information and established a minute threshold
                        for window time frame duration to build sliding window
                      </li>
                      <li>
                        Examined news article data alongside real-world results
                      </li>
                      <li>
                        Evaluated Continuous Bag of Words (CBOW) machine
                        learning models to achieve the desired level of
                        proximity using Cosine similarity
                      </li>
                      <li>
                        Collaborated with the public to examine the new features
                        present in the outcomes of news articles
                      </li>
                      <li>
                        Presented noteworthy findings at international
                        conferences
                      </li>
                      <li>Work is currently underway with team members</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Fetus Brain Abnormality Detection and Classification Using Deep
              Learning
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div id="info" className="flex flex-col">
                  <div>
                    <b>Date:</b> February 2019 - Continue
                  </div>
                  <div>
                    <b>University:</b> Gujarat Technological University,
                    Chandkheda.
                  </div>
                  <div>
                    <b>Members:</b> Dr. Kaushikkumar Rana, Chintan Makwana
                  </div>
                </div>
                <div id="content">
                  <p className="text-justify mt-5">
                    Advancements in medical imaging and deep learning
                    technologies have opened new frontiers in prenatal
                    healthcare, particularly in the realm of detecting and
                    classifying fetal brain abnormalities. This research focuses
                    on harnessing the power of deep learning methodologies to
                    enhance the accuracy and efficiency of identifying brain
                    anomalies in the developing fetus. By leveraging
                    sophisticated neural networks and convolutional
                    architectures, our approach aims to automatically detect
                    abnormalities in fetal brain images obtained through
                    advanced imaging modalities. This groundbreaking research
                    not only offers a more precise and timely diagnosis but also
                    contributes to the ongoing efforts in developing
                    non-invasive and early detection methods for fetal brain
                    anomalies, providing critical insights for medical
                    practitioners and expecting parents.
                  </p>
                  <p className="text-justify mt-5">
                    The significance of this study extends beyond the technical
                    realm into the realm of healthcare innovation. Early
                    detection and classification of fetal brain abnormalities
                    are paramount for informed decision-making and potential
                    intervention. By incorporating deep learning techniques,
                    this research strives to provide a reliable and automated
                    system that assists healthcare professionals in diagnosing
                    anomalies accurately and expeditiously. As we navigate the
                    intersection of medical imaging and artificial intelligence,
                    the outcomes of this research have the potential to
                    revolutionize prenatal care, fostering a new era of
                    proactive healthcare interventions and improved outcomes for
                    infants at risk of brain abnormalities.
                  </p>
                </div>
                <div id="contribution" className="mt-5">
                  <b>Contribution:</b>
                  <div className="ml-5 mt-5">
                    <ul className="flex list-disc flex-col gap-2">
                      <li>
                        Fetal Brain MRI images for normal case and abnormal case
                        for different Gestational Age (GA) is collected from
                        different MRI centers in Ahmedabad to form dataset
                      </li>
                      <li>
                        Standardized the size of all MRI images, or resized them
                        to a uniform dimension for model training
                      </li>
                      <li>
                        Mitigated overfitting in deep learning models by
                        employing augmentation techniques, including rotation,
                        flipping, zooming, and shearing in all MRI images
                      </li>
                      <li>
                        Assigned labels to each MRI image based on the type of
                        abnormality
                      </li>
                      <li>
                        Employed adaptive threshold for the foreground and
                        background classes, then fetal brain is isolated from
                        the Cerebrospinal Fluid (CSF) and the Amniotic Fluid
                        surrounding the fetal head. Morphological operations
                        were utilized to eliminate the skull and maternal tissue
                      </li>
                      <li>
                        Currently collaborating with team members to train and
                        test deep learning models
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Recommendation System Using Machine Learning to Predict
              Thunderstorms
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div id="info" className="flex flex-col">
                  <div>
                    <b>Date:</b> February 2018 - Continue
                  </div>
                  <div>
                    <b>University:</b> Gujarat Technological University,
                    Chandkheda.
                  </div>
                  <div>
                    <b>Members:</b> Dr. Kaushikkumar Rana, Ketan Sarvarkar
                  </div>
                </div>
                <div id="content">
                  <p className="text-justify mt-5">
                    Over the years, thunderstorms have emerged as a significant
                    contributor to mortality and a highly destructive natural
                    calamity in our country. The unpredictability stemming from
                    the random nature of our atmosphere makes the anticipation
                    of thunderstorms particularly challenging. This research
                    endeavors to enhance thunderstorm prediction by analyzing
                    atmospheric stability indices indicators strongly linked to
                    thunderstorm occurrence through the utilization of INSAT-3D
                    sounder data. A machine learning approach is employed to
                    predict the values of these indices, establishing threshold
                    values for heightened alertness. The predictability inherent
                    in the data allows for the anticipation of future values,
                    offering a valuable tool for proactive measures.
                  </p>
                  <p className="text-justify mt-5">
                    Meteorologists and other professionals often employ
                    tephigrams a graphical representation of atmospheric
                    temperature and humidity to address complex problems. This
                    approach, embraced by weather observers, scientists, and
                    pilots, sidesteps intricate mathematical calculations by
                    providing a visual tool. The tephigram, integrated with live
                    event data, serves as a dynamic means for meteorologists to
                    forecast cloud height and atmospheric stability. This
                    graphical representation simplifies the interpretation of
                    thermodynamic diagrams, enabling users to instantly grasp
                    the atmospheric conditions and anticipate events more
                    effectively.
                  </p>
                </div>
                <div id="contribution" className="mt-5">
                  <b>Contribution:</b>
                  <div className="ml-5 mt-5">
                    <ul className="flex list-disc flex-col gap-2">
                      <li>
                        Captured atmospheric soundings with Radiosondes and
                        INSAT-3D at the India Meteorological Department (IMD),
                        Ahmedabad, and the Space Application Center, Ahmedabad,
                        6 respectively, when a severe thunderstorm originated
                        within 100 km of the sounding location. This data was
                        recorded in the month of April between the years 2016
                        and 2018, encompassing the six hours preceding the time
                        of each sounding
                      </li>
                      <li>
                        Analyzed data to comprehend the evolution of the
                        thunderstorm
                      </li>
                      <li>
                        Examined daily rainfall data from INSAT-3D, utilizing a
                        standard threshold of 15mm/day to account for instances
                        of thunderstorm occurrences
                      </li>
                      <li>
                        Analyzed time series graphs of such instances, generated
                        from INSAT-3D's data, to extract the date, time, and
                        peak values for the creation of a database containing
                        active cases
                      </li>
                      <li>
                        Studied 70 instances of thunderstorms, differentiating
                        between active and null cases. Retained a total of 1134
                        null soundings during the examination
                      </li>
                      <li>
                        Plotted it on a skew-T log-p diagram and analysed covers
                        parameters such as lifted index, K index, and total
                        totals index
                      </li>
                      <li>
                        Identified patterns of non-randomness in the data
                        through Autoregressive models AR (1)
                      </li>
                      <li>
                        A scatter plot is generated to identify trends in the
                        data
                      </li>
                      <li>
                        Selected specific locations, namely Thiruvananthapuram,
                        Visakhapatnam, and Mizoram, to examine the spatial
                        distribution of various indices over the Indian region
                        where thun- derstorms were reported
                      </li>
                      <li>
                        Shared significant discoveries in international journals
                      </li>
                      <li>
                        Presently working collaboratively with team members to
                        retrieve data from April spanning the years 2018 to
                        2023. Additionally, employing Artificial Neural
                        Networks, the K-nearest method, and Support Vector
                        Machine to expand upon the proposed work
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="md:ml-15 mt-10">
        <h2 className="text-xl md:text-2xl">Master's Projects</h2>
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full md:ml-5 md:px-10 ml-0 pr-5"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              White-box Testing in Service-Oriented Architecture by Applying
              Program Slicing Technique
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div id="info" className="flex flex-col">
                  <div>
                    <b>Date:</b> February 2012 - March 2014
                  </div>
                  <div>
                    <b>University:</b> Gujarat Technological University,
                    Chandkheda.
                  </div>
                  <div>
                    <b>Members:</b> Dr. Kaushikkumar Rana, Harkishan Rathod
                  </div>
                </div>
                <div id="content">
                  <p className="text-justify mt-5">
                    The success of any technological or engineering product
                    hinges on the quality of its service, a factor ensured
                    through rigorous testing. Two primary testing methodologies
                    are employed: black box testing and white box testing.
                  </p>
                  <p className="text-justify mt-5">
                    Historically, web services have undergone testing primarily
                    from a functional perspective, i.e., relying solely on black
                    box testing. However, a novel approach is introduced here,
                    leveraging the dynamic program slicing technique to compute
                    the dynamic slice of the web service. This enables a
                    granular examination of the statements executed for specific
                    input parameters based on the defined slicing criterion.
                    This innovative method enhances our ability to scrutinize
                    and ensure the quality and reliability of the web service.
                  </p>
                </div>
                <div id="contribution" className="mt-5">
                  <b>Contribution:</b>
                  <div className="ml-5 mt-5">
                    <ul className="flex list-disc flex-col gap-2">
                      <li>
                        Developed algorithm and method to do white box testing
                        of web services
                      </li>
                      <li>
                        Improved the capability to thoroughly inspect and
                        guarantee the quality and reliability of the web service
                      </li>
                      <li>
                        Communicated significant findings in global journals
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Dynamic Slicing of Distributed Programs
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div id="info" className="flex flex-col">
                  <div>
                    <b>Date:</b> February 2014 - March 2016
                  </div>
                  <div>
                    <b>University:</b> Gujarat Technological University,
                    Chandkheda.
                  </div>
                  <div>
                    <b>Members:</b> Dr. Kaushikkumar Rana, Jasmit Patel
                  </div>
                </div>
                <div id="content">
                  <p className="text-justify mt-5">
                    The current testing approach for RMI programs lacks the
                    examination of internal workings or logic. To address this,
                    we are adopting the Program Slicing technique to create
                    slices of RMI programs. The challenge arises in the
                    distributed architecture, where direct access to Server code
                    is unavailable; instead, it is accessed through the
                    Registry. To effectively test RMI programs, the development
                    of a user interface becomes essential, not withstanding the
                    various challenges inherent in distinguishing distributed
                    applications from traditional programs.
                  </p>
                  <p className="text-justify mt-5">
                    Our primary objective is to conduct white box testing of
                    Java RMI programs, employing the dynamic slicing technique.
                    We aim to facilitate a user-friendly experience by providing
                    a user interface that enhances the comprehension of program
                    execution, thereby simplifying the testing process for RMI
                    programs. The ultimate goal is to develop a technique
                    capable of testing at the development stage, ensuring
                    thorough testing before deployment.
                  </p>
                </div>
                <div id="contribution" className="mt-5">
                  <b>Contribution:</b>
                  <div className="ml-5 mt-5">
                    <ul className="flex list-disc flex-col gap-2">
                      <li>
                        Created an algorithm and methodology for conducting
                        white box testing on Java RMI programs
                      </li>
                      <li>
                        Developed user-friendly interface do white box testing
                        of Java RMI programs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Regression Testing of Aspect-oriented Program
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div id="info" className="flex flex-col">
                  <div>
                    <b>Date:</b> February 2014 - March 2016
                  </div>
                  <div>
                    <b>University:</b> Gujarat Technological University,
                    Chandkheda.
                  </div>
                  <div>
                    <b>Members:</b> Dr. Kaushikkumar Rana, Thumar Nishant
                  </div>
                </div>
                <div id="content">
                  <p className="text-justify mt-5">
                    Regression testing holds a pivotal role in the software
                    maintenance phase, serving as a crucial component. It is a
                    form of software testing designed to unveil new bugs in both
                    functional and non-functional areas of a system following
                    changes, such as enhancements, alterations in paths, or
                    configuration adjustments. Post-modification of software,
                    rigorous testing is impera- tive to identify and rectify
                    issues before they escalate. Over the past three decades,
                    regression testing has gained substantial attention in
                    research due to the recognition that modifications in one
                    segment of the software can lead to unintended errors. To
                    overcome this challenge and achieve efficient, error-free,
                    and cost-effective software, regression testing emerges as
                    an essential practice.
                  </p>
                  <p className="text-justify mt-5">
                    In a distributed environment, testing becomes increasingly
                    intricate as it necessitates the comprehensive testing of an
                    entire system. This dissertation endeavors to analyze
                    programs and identify an effective regression testing
                    technique capable of minimizing testing efforts. To achieve
                    this, we employ the aspect-oriented dynamic slicing
                    technique to trace the internal behavior of the program. By
                    identifying dependencies within the program, we can leverage
                    this information when introducing a new version of the
                    program, thereby enhancing the effectiveness of the
                    regression testing process.
                  </p>
                </div>
                <div id="contribution" className="mt-5">
                  <b>Contribution:</b>
                  <div className="ml-5 mt-5">
                    <ul className="flex list-disc flex-col gap-2">
                      <li>
                        Deviced an algorithm and methodology for performing
                        regression testing on Aspect-oriented programs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="md:ml-15 mt-10">
        <h2 className="text-xl md:text-2xl">
          Student Startup and Innovation Projects
        </h2>
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full md:ml-5 md:px-10 ml-0 pr-5"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Face Recognition, Mood detection and Automatic Music Playlist
              Generation
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div id="info" className="flex flex-col">
                  <div>
                    <b>Date:</b> February 2019 - June 2020
                  </div>
                  <div>
                    <b>University:</b> Gujarat Technological University,
                    Chandkheda.
                  </div>
                  <div>
                    <b>Members:</b> Dr. Kaushikkumar Rana, Sheth Jilva
                    Pareshkumar, Bhakti Vaghamshi, Vidit Sanghvi, Deval Shah
                  </div>
                </div>
                <div id="content">
                  <p className="text-justify mt-5">
                    The human face, being a significant aspect of an
                    individual's anatomy, holds particular importance in
                    discerning their emotional state. Contemporary technology
                    now enables the direct extraction of pertinent information
                    from the human face through camera-based methods. This
                    extracted input serves as valuable data for discerning an
                    individual's mood. By utilizing this information, a system
                    can automatically curate a playlist of songs that align with
                    the identified emotional state.
                  </p>
                  <p className="text-justify mt-5">
                    This streamlined approach circumvents the laborious and
                    time-consuming task of manually categorizing or grouping
                    songs, presenting an efficient solution for generating
                    playlists tailored to an individual's emotional features. In
                    essence, this algorithm simplifies the playlist creation
                    process, offering a seamless and personalized music
                    experience based on the user's mood.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Semantic Book Recommendation System
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div id="info" className="flex flex-col">
                  <div>
                    <b>Date:</b> February 2019 - June 2020
                  </div>
                  <div>
                    <b>University:</b> Gujarat Technological University,
                    Chandkheda.
                  </div>
                  <div>
                    <b>Members:</b> Dr. Kaushikkumar Rana, Prajapati Raj
                    Ashokbhai, Prajapati Devang Ramanbhai
                  </div>
                </div>
                <div id="content">
                  <p className="text-justify mt-5">
                    The project, designated as the Book Recommendation System,
                    focuses on creating an intelligent web-based bookstore
                    designed to offer personalized book recommendations to
                    users, with a particular emphasis on students. Beyond
                    enabling users to search the database for books, the system
                    will provide tailored recommendations based on both user
                    interests and semantic analysis.
                  </p>
                  <p className="text-justify mt-5">
                    This recommendation engine will leverage a combination of
                    content filtering, collaborative filtering, and association
                    rule mining to enhance accuracy and relevance. Specifically,
                    collaborative recommender systems will aggregate user
                    ratings, identify shared preferences among users, and
                    generate meaningful book recommendations. This multifaceted
                    approach aims to create a dynamic and intelligent platform,
                    providing users, especially students, with a curated
                    selection of books that align with their preferences and
                    interests.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              A Machine Learning-based System to Predict Leaf Disease
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div id="info" className="flex flex-col">
                  <div>
                    <b>Date:</b> February 2019 - June 2020
                  </div>
                  <div>
                    <b>University:</b> Gujarat Technological University,
                    Chandkheda.
                  </div>
                  <div>
                    <b>Members:</b> Dr. Kaushikkumar Rana, Patel Deesha
                    Vipulkumar, Kosti Khushbu Govindbhai, Machhi Minaxiben
                    Shaileshbhai
                  </div>
                </div>
                <div id="content">
                  <p className="text-justify mt-5">
                    In the contemporary landscape, identifying diseases in
                    plants has become a challenging task. Leveraging cutting
                    edge technologies capable of autonomous learning, we aim to
                    streamline this process. Through the implementation of
                    advanced technology, our automated system is designed to
                    detect diseases in leaves efficiently. Users will interact
                    with a user-friendly interface where they can upload leaf
                    images.
                  </p>
                  <p className="text-justify mt-5">
                    Our intelligent system will then categorize the leaf and
                    identify any associated diseases. Additionally, the system
                    offers recommendations for suitable pesticides based on the
                    identified disease. To enhance the overall efficiency, we
                    are incorporating drone technology into our solu- tion.
                    Drones will capture comprehensive images of entire farms,
                    providing users with the ability to obtain real-time
                    snapshots of their farms at any given moment. This holistic
                    approach aims to revolutionize disease detection in plants,
                    offering farmers a proactive and intelligent solution for
                    crop management.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              VGEC Alumni (VAA) Website Development with New Look and Features{" "}
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div id="info" className="flex flex-col">
                  <div>
                    <b>Date:</b> February 2019 - June 2020
                  </div>
                  <div>
                    <b>University:</b> Gujarat Technological University,
                    Chandkheda.
                  </div>
                  <div>
                    <b>Members:</b> Dr. Kaushikkumar Rana, Pandya Prahar,
                    Balwani Shivani Laxmanbhai Shaileshbhai
                  </div>
                </div>
                <div id="content">
                  <p className="text-justify mt-5">
                    Our objective is to support alumni by facilitating seamless
                    job searches and fostering stronger connections with our
                    college community. To achieve this, we are introducing a
                    sharing platform where alumni can freely exchange ideas and
                    information. Additionally, we aim to enhance alumni
                    engagement by offering mentoring and career opportunities to
                    current college students, encouraging them to explore
                    various departments within our institution for career
                    development.
                  </p>
                  <p className="text-justify mt-5">
                    To streamline these initiatives, we are in the process of
                    redeveloping our website and creating an Android
                    application. Furthermore, our goal includes the
                    implementation of an admin panel for community members of
                    different departments, providing them with the tools to
                    regularly manage their respective sections on the main
                    website while maintaining a well-organized user hierarchy.
                    This comprehensive approach aims to create a dynamic and
                    collaborative environment that benefits both alumni and
                    current students.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Projects