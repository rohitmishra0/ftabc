I m making a skill bartr system where i have different tables in appwrite for storage i am using database of appwrite and backend i m making of java spring boot and front end is done by angular. So i m giving the backend codes. give the changes i need to make for my project attached files are technical design document and function required document of my project.



Controller class

package com.ctrlaltdefeat.Bartr.controllers;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ctrlaltdefeat.Bartr.models.Category;
import com.ctrlaltdefeat.Bartr.services.CategoryService;
@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final CategoryService categoryService;
   public CategoryController(CategoryService categoryService) {
       this.categoryService = categoryService;
   }
    @PostMapping
    public Category createCategory(@RequestBody Category category) {
        return categoryService.createCategory(category);
    }
    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable String id) {
        return categoryService.getCategoryById(id);
    }
    @GetMapping
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }
    @PutMapping("/{id}")
    public Category updateCategory(@PathVariable String id, @RequestBody Category category) {
        return categoryService.updateCategory(id, category);
    }
    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable String id){
        categoryService.deleteCategory(id);
    }
}
package com.ctrlaltdefeat.Bartr.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ctrlaltdefeat.Bartr.services.CategoryService;
import com.ctrlaltdefeat.Bartr.services.CourseService;
import com.ctrlaltdefeat.Bartr.models.Course;;
@RestController
@RequestMapping("/api/courses")
public class CourseController {
    private final CourseService courseService;
   public CourseController(CourseService courseService) {
       this.courseService = courseService;
   }
    @PostMapping
    public Course createCourse(@RequestBody Course course){
        return courseService.createCourse(course);
    }
    @GetMapping
    public List<Course> getAllCourse() {
        return courseService.getAllCourses();
    }
    @GetMapping("/category/{categoryId}")
    public Course getCourseById(@PathVariable String id)  {
        return courseService.getCourseById(id);
    }
    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable String id, @RequestBody Course course){

        return courseService.updateCourse(id, course);
    }
    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable String id) {
        courseService.deleteCourse(id);
    }
}

package com.ctrlaltdefeat.Bartr.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ctrlaltdefeat.Bartr.models.Enrollment;
import com.ctrlaltdefeat.Bartr.services.EnrollmentService;
@RestController
@RequestMapping("/api/enrollments")
public class EnrollmentController {
    private final EnrollmentService enrollmentService;
   public EnrollmentController(EnrollmentService enrollmentService) {
       this.enrollmentService = enrollmentService;
   }
    @PostMapping
    public Enrollment enrollUser(@RequestBody Enrollment enrollment) {

        return enrollmentService.enrollUser(enrollment);

    }
    @GetMapping("/user/{userId}")

    public List<Enrollment> getEnrollmentsForUser(@PathVariable String userId) {

        return enrollmentService.getEnrollmentsForUser(userId);
    }



    @GetMapping("/course/{courseId}")

    public List<Enrollment> getEnrollmentsForCourse(@PathVariable String courseId) {

        return enrollmentService.getEnrollmentsForCourse(courseId);

    }



    @DeleteMapping("/id")

    public void deleteEnrollment(@PathVariable String id) {

        enrollmentService.deleteEnrollment(id);

    }





}

package com.ctrlaltdefeat.Bartr.controllers;



import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;



import com.ctrlaltdefeat.Bartr.services.PaymentService;

import com.ctrlaltdefeat.Bartr.models.Payment;





@RestController

@RequestMapping("/api/payments")

public class PaymentController {

   

    private final PaymentService paymentService;





   public PaymentController(PaymentService paymentService) {

       this.paymentService = paymentService;

   }

    @PostMapping

    public Payment createPayment(@RequestBody Payment payment) {

        return paymentService.createPayment(payment);

    }



    @GetMapping("/id")

    public Payment getPaymentById(@PathVariable String id) {

        return paymentService.getPaymentById(id);

    }



    @GetMapping

    public List<Payment> getAllPayments() {

        return paymentService.getAllPayments();

    }



    @DeleteMapping("/{id}")

    public void deletePayment(@PathVariable String id){

        paymentService.deletePayment(id);

    }



}

package com.ctrlaltdefeat.Bartr.controllers;



import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;



import com.ctrlaltdefeat.Bartr.services.TransactionService;

import com.ctrlaltdefeat.Bartr.models.Transaction;





@RestController

@RequestMapping("/api/transactions")

public class TransactionController {

    

    private final TransactionService transactionService;



    public TransactionController(TransactionService transactionService) {

       this.transactionService = transactionService;

   }

    @PostMapping

    public Transaction createTransaction(@RequestBody Transaction transaction){

        return transactionService.createTransaction(transaction);

    }



    @GetMapping("/{id}")

    public Transaction geTransactionById(@PathVariable String id) {

        return transactionService.getTransactionById(id);

    }



    @GetMapping

    public List<Transaction> getAllTransactions() {

        return transactionService.getAllTransactions();

    }



    @DeleteMapping("/id")

    public void deleteTransaction(@PathVariable String id){

        transactionService.deleteTransaction(id);

    }



}

package com.ctrlaltdefeat.Bartr.controllers;



import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;



import com.ctrlaltdefeat.Bartr.services.UserService;

import com.ctrlaltdefeat.Bartr.models.User;



@RestController

@RequestMapping("/api/users")

public class UserController {

    @Autowired

    private final UserService userService;



    public UserController(UserService userService) {

       this.userService = userService;

   }

    @PostMapping    

    public User createUser(@RequestBody User user){

        return userService.createUser(user);

    }



    @GetMapping("/{id}")

    public User getUserById(@PathVariable String id) {

        return userService.getUserById(id);

    }



    @GetMapping

    public List<User> getAllUsers(){

        return userService.getAllUsers();

    }

    

    @PutMapping("/{id}")

    public User updateUser(@PathVariable String id, @RequestBody User user) {

        return userService.updateUser(id, user);

    }



    @DeleteMapping("/{id}")

    public void deleteUser(@PathVariable String id) {

        userService.deleteUser(id);

    }
}

Model classes

package com.ctrlaltdefeat.Bartr.models;
import org.springframework.stereotype.Component;
@Component
public class Category {

    private int id;

    private String name;

    private String description;

    private int xp_cost;

    

    //Getters and Setters

    public int getId() {

        return id;

    }

    public void setId(int id) {

        this.id = id;

    }

    public String getName() {

        return name;

    }

    public void setName(String name) {

        this.name = name;

    }

    public String getDescription() {

        return description;

    }

    public void setDescription(String description) {

        this.description = description;

    }

    public int getXp_cost() {

        return xp_cost;

    }

    public void setXp_cost(int xp_cost) {

        this.xp_cost = xp_cost;

    }
}

package com.ctrlaltdefeat.Bartr.models;
import java.util.Date;
public class Course {

    private int id;

    private String title;
    private String description;
    private int category_id;
    private int creator_id;
    private Date created_at;
    private String level;
    //Getters and Setters
    public int getId() {
        return id;
    }
    public void setId(int id) {

        this.id = id;

    }

    public String getTitle() {

        return title;

    }

    public void setTitle(String title) {

        this.title = title;

    }

    public String getDescription() {

        return description;

    }

    public void setDescription(String description) {

        this.description = description;

    }

    public int getCategory_id() {

        return category_id;

    }

    public void setCategory_id(int category_id) {

        this.category_id = category_id;

    }

    public int getCreator_id() {

        return creator_id;

    }

    public void setCreator_id(int creator_id) {

        this.creator_id = creator_id;

    }

    public Date getCreated_at() {

        return created_at;

    }

    public void setCreated_at(Date created_at) {

        this.created_at = created_at;

    }

    public String getLevel() {

        return level;

    }

    public void setLevel(String level) {

        this.level = level;

    }

    

}

package com.ctrlaltdefeat.Bartr.models;



import java.util.Date;

import org.springframework.stereotype.Component;



@Component

public class Enrollment {

    private int id;

    private int course_id;

    private int learner_id;

    private Date enrollment_date;

    

    //Getters and Setters

    public int getId() {

        return id;

    }

    public void setId(int id) {

        this.id = id;

    }

    public int getCourse_id() {

        return course_id;

    }

    public void setCourse_id(int course_id) {

        this.course_id = course_id;

    }

    public int getLearner_id() {

        return learner_id;

    }

    public void setLearner_id(int learner_id) {

        this.learner_id = learner_id;

    }

    public Date getEnrollment_date() {

        return enrollment_date;

    }

    public void setEnrollment_date(Date enrollment_date) {

        this.enrollment_date = enrollment_date;

    }

    

}

package com.ctrlaltdefeat.Bartr.models;



import java.util.Date;

import org.springframework.stereotype.Component;



@Component

public class Payment {

    private int id;

    private int user_id;

    private int amount;

    private String mode;

    private int xp_purchased;

    private Date purchased_at;

    

    //Getters and Setters

    public int getId() {

        return id;

    }

    public void setId(int id) {

        this.id = id;

    }

    public int getUser_id() {

        return user_id;

    }

    public void setUser_id(int user_id) {

        this.user_id = user_id;

    }

    public int getAmount() {

        return amount;

    }

    public void setAmount(int amount) {

        this.amount = amount;

    }

    public String getMode() {

        return mode;

    }

    public void setMode(String mode) {

        this.mode = mode;

    }

    public int getXp_purchased() {

        return xp_purchased;

    }

    public void setXp_purchased(int xp_purchased) {

        this.xp_purchased = xp_purchased;

    }

    public Date getPurchased_at() {

        return purchased_at;

    }

    public void setPurchased_at(Date purchased_at) {

        this.purchased_at = purchased_at;

    }

}

package com.ctrlaltdefeat.Bartr.models;



import java.util.Date;

import org.springframework.stereotype.Component;



@Component

public class Transaction {

    private int id;

    private int user_id;

    private int course_id;

    private String type;

    private int amount;

    private Date transacted_at;

    

    //Getters and Setters

    public int getId() {

        return id;

    }

    public void setId(int id) {

        this.id = id;

    }

    public int getUser_id() {

        return user_id;

    }

    public void setUser_id(int user_id) {

        this.user_id = user_id;

    }

    public int getCourse_id() {

        return course_id;

    }

    public void setCourse_id(int course_id) {

        this.course_id = course_id;

    }

    public String getType() {

        return type;

    }

    public void setType(String type) {

        this.type = type;

    }

    public int getAmount() {

        return amount;

    }

    public void setAmount(int amount) {

        this.amount = amount;

    }

    public Date getTransacted_at() {

        return transacted_at;

    }

    public void setTransacted_at(Date transacted_at) {

        this.transacted_at = transacted_at;

    }

}

package com.ctrlaltdefeat.Bartr.models;



import java.util.Date;

import org.springframework.stereotype.Component;



@Component

public class User {

    private int id;

    private String username;

    private String email;

    private String password;

    private String phone;

    private String fullname;

    private int xp;

    private String avatar_url;

    private Date created_at;

    

    //Getters and Setters

    public int getId() {

        return id;

    }

    public void setId(int id) {

        this.id = id;

    }

    public String getUsername() {

        return username;

    }

    public void setUsername(String username) {

        this.username = username;

    }

    public String getEmail() {

        return email;

    }

    public void setEmail(String email) {

        this.email = email;

    }

    public String getPassword() {

        return password;

    }

    public void setPassword(String password) {

        this.password = password;

    }

    public String getPhone() {

        return phone;

    }

    public void setPhone(String phone) {

        this.phone = phone;

    }

    public String getFullname() {

        return fullname;

    }

    public void setFullname(String fullname) {

        this.fullname = fullname;

    }

    public int getXp() {

        return xp;

    }

    public void setXp(int xp) {

        this.xp = xp;

    }

    public String getAvatar_url() {

        return avatar_url;

    }

    public void setAvatar_url(String avatar_url) {

        this.avatar_url = avatar_url;

    }

    public Date getCreated_at() {

        return created_at;

    }

    public void setCreated_at(Date created_at) {

        this.created_at = created_at;

    }

}

Repsitory

package com.ctrlaltdefeat.Bartr.repository;

import com.fasterxml.jackson.core.type.TypeReference;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.http.*;

import org.springframework.web.client.RestTemplate;

import java.util.List;

import java.util.Map;

import java.util.stream.Collectors;

public abstract class AppwriteRestRepository<T> {

   protected final RestTemplate restTemplate;

   protected final ObjectMapper objectMapper = new ObjectMapper();

   @Value("${appwrite.endpoint}")

   protected String baseUrl;

   @Value("${appwrite.project.id}")

   protected String projectId;

   @Value("${appwrite.api.key}")

   protected String apiKey;

   @Value("${appwrite.database.id}")

   protected String databaseId;

   public AppwriteRestRepository(RestTemplate restTemplate) {

       this.restTemplate = restTemplate;

   }

   protected abstract String getCollectionId();

   protected abstract Class<T> getEntityClass();

   public T createDocument(Map<String, Object> data) {

       HttpHeaders headers = buildHeaders();

       Map<String, Object> body = Map.of("documentId", "unique()", "data", data);

       HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

       ResponseEntity<Map> response = restTemplate.postForEntity(

               baseUrl + "/databases/" + databaseId + "/collections/" + getCollectionId() + "/documents",

               request,

               Map.class

       );

       Map<String, Object> documentData = (Map<String, Object>) response.getBody().get("data");

       return objectMapper.convertValue(documentData, getEntityClass());

   }

   public T getDocument(String id) {

       HttpHeaders headers = buildHeaders();

       HttpEntity<Void> request = new HttpEntity<>(headers);

       ResponseEntity<Map> response = restTemplate.exchange(

               baseUrl + "/databases/" + databaseId + "/collections/" + getCollectionId() + "/documents/" + id,

               HttpMethod.GET,

               request,

               Map.class

       );

       Map<String, Object> documentData = (Map<String, Object>) response.getBody().get("data");

       return objectMapper.convertValue(documentData, getEntityClass());

   }

   public List<T> listDocuments() {

       HttpHeaders headers = buildHeaders();

       HttpEntity<Void> request = new HttpEntity<>(headers);

       ResponseEntity<Map> response = restTemplate.exchange(

               baseUrl + "/databases/" + databaseId + "/collections/" + getCollectionId() + "/documents",

               HttpMethod.GET,

               request,

               Map.class

       );

       List<Map<String, Object>> documents = (List<Map<String, Object>>) response.getBody().get("documents");

       return documents.stream()

               .map(doc -> objectMapper.convertValue(doc.get("data"), getEntityClass()))

               .collect(Collectors.toList());

   }

   public T updateDocument(String id, Map<String, Object> data) {

       HttpHeaders headers = buildHeaders();

       Map<String, Object> body = Map.of("data", data);

       HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

       ResponseEntity<Map> response = restTemplate.exchange(

               baseUrl + "/databases/" + databaseId + "/collections/" + getCollectionId() + "/documents/" + id,

               HttpMethod.PATCH,

               request,

               Map.class

       );

       Map<String, Object> documentData = (Map<String, Object>) response.getBody().get("data");

       return objectMapper.convertValue(documentData, getEntityClass());

   }

   public void deleteDocument(String id) {

       HttpHeaders headers = buildHeaders();

       HttpEntity<Void> request = new HttpEntity<>(headers);

       restTemplate.exchange(

               baseUrl + "/databases/" + databaseId + "/collections/" + getCollectionId() + "/documents/" + id,

               HttpMethod.DELETE,

               request,

               Void.class

       );

   }

   private HttpHeaders buildHeaders() {

       HttpHeaders headers = new HttpHeaders();

       headers.set("X-Appwrite-Project", projectId);

       headers.set("X-Appwrite-Key", apiKey);

       headers.setContentType(MediaType.APPLICATION_JSON);

       return headers;

   }

}

package com.ctrlaltdefeat.Bartr.repository;

import com.ctrlaltdefeat.Bartr.models.Category;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Repository;

import org.springframework.web.client.RestTemplate;

@Repository

public class CategoryRepository extends AppwriteRestRepository<Category> {

   @Value("${appwrite.collection.categories}")

   private String collectionId;

   public CategoryRepository(RestTemplate restTemplate) {

       super(restTemplate);

   }

   @Override

   protected String getCollectionId() {

       return collectionId;

   }

   @Override

   protected Class<Category> getEntityClass() {

       return Category.class;

   }

}

package com.ctrlaltdefeat.Bartr.repository;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Repository;

import org.springframework.web.client.RestTemplate;



import com.ctrlaltdefeat.Bartr.models.Course;

@Repository

public class CourseRepository extends AppwriteRestRepository<Course> {

   @Value("${appwrite.collection.courses}")

   private String collectionId;

   public CourseRepository(RestTemplate restTemplate) {

       super(restTemplate);

   }

   @Override

   protected String getCollectionId() {

       return collectionId;

   }



   @Override

   protected Class<Course> getEntityClass() {

       return Course.class;

   }

}

package com.ctrlaltdefeat.Bartr.repository;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Repository;

import org.springframework.web.client.RestTemplate;



import com.ctrlaltdefeat.Bartr.models.Enrollment;

@Repository

public class EnrollmentRepository extends AppwriteRestRepository<Enrollment> {

   @Value("${appwrite.collection.enrollments}")

   private String collectionId;

   public EnrollmentRepository(RestTemplate restTemplate) {

       super(restTemplate);

   }

   @Override

   protected String getCollectionId() {

       return collectionId;

   }



   @Override

   protected Class<Enrollment> getEntityClass() {

       return Enrollment.class;

   }

}

package com.ctrlaltdefeat.Bartr.repository;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Repository;

import org.springframework.web.client.RestTemplate;



import com.ctrlaltdefeat.Bartr.models.Payment;

@Repository

public class PaymentRepository extends AppwriteRestRepository<Payment> {

   @Value("${appwrite.collection.payments}")

   private String collectionId;

   public PaymentRepository(RestTemplate restTemplate) {

       super(restTemplate);

   }

   @Override

   protected String getCollectionId() {

       return collectionId;

   }



   @Override

   protected Class<Payment> getEntityClass() {

       return Payment.class;

   }

}

package com.ctrlaltdefeat.Bartr.repository;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Repository;

import org.springframework.web.client.RestTemplate;



import com.ctrlaltdefeat.Bartr.models.Transaction;

@Repository

public class TransactionRepository extends AppwriteRestRepository<Transaction> {

   @Value("${appwrite.collection.transactions}")

   private String collectionId;

   public TransactionRepository(RestTemplate restTemplate) {

       super(restTemplate);

   }

   @Override

   protected String getCollectionId() {

       return collectionId;

   }



   @Override

   protected Class<Transaction> getEntityClass() {

       return Transaction.class;

   }

}

package com.ctrlaltdefeat.Bartr.repository;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Repository;

import org.springframework.web.client.RestTemplate;



import com.ctrlaltdefeat.Bartr.models.User;

@Repository

public class UserRepository extends AppwriteRestRepository<User> {

   @Value("${appwrite.collection.users}")

   private String collectionId;

   public UserRepository(RestTemplate restTemplate) {

       super(restTemplate);

   }

   @Override

   protected String getCollectionId() {

       return collectionId;

   }



   @Override

   protected Class<User> getEntityClass() {

       return User.class;

   }

}



Services class

package com.ctrlaltdefeat.Bartr.services;

import com.ctrlaltdefeat.Bartr.models.Category;

import com.ctrlaltdefeat.Bartr.repository.CategoryRepository;

import com.fasterxml.jackson.databind.ObjectMapper;



import org.springframework.stereotype.Service;



import java.util.List;

import java.util.Map;

@Service

public class CategoryService {

   private final CategoryRepository categoryRepository;

      private final ObjectMapper objectMapper =new ObjectMapper();



   public CategoryService(CategoryRepository categoryRepository) {

       this.categoryRepository = categoryRepository;

   }

   public Category createCategory(Category category) {

        Map<String,Object> data = objectMapper.convertValue(category, Map.class);

       return categoryRepository.createDocument(data);

   }

   public Category getCategoryById(String id) {

       return categoryRepository.getDocument(id);

   }

   public List<Category> getAllCategories() {

       return categoryRepository.listDocuments();

   }

   public Category updateCategory(String id, Category category) {

    Map<String,Object> data = objectMapper.convertValue(category, Map.class);



       return categoryRepository.updateDocument(id, data);

   }

   public void deleteCategory(String id) {

        categoryRepository.deleteDocument(id);

   }

}

package com.ctrlaltdefeat.Bartr.services;

import com.ctrlaltdefeat.Bartr.models.Course;

import com.ctrlaltdefeat.Bartr.repository.CourseRepository;

import com.fasterxml.jackson.databind.ObjectMapper;



import org.springframework.stereotype.Service;



import java.util.List;

import java.util.Map;

@Service

public class CourseService {

   private final CourseRepository courseRepository;

   private final ObjectMapper objectMapper =new ObjectMapper();

   public CourseService(CourseRepository courseRepository) {

       this.courseRepository = courseRepository;

   }

   public Course createCourse(Course course) {

        Map<String,Object> data = objectMapper.convertValue(course, Map.class);

       return courseRepository.createDocument(data);

   }

   public Course getCourseById(String id) {

       return courseRepository.getDocument(id);

   }

   public List<Course> getAllCourses() {

       return courseRepository.listDocuments();

   }

   public Course updateCourse(String id, Course course) {

    Map<String,Object> data = objectMapper.convertValue(course, Map.class);

       return courseRepository.updateDocument(id, data);

   }

   public void deleteCourse(String id) {

        courseRepository.deleteDocument(id);

   }

}

package com.ctrlaltdefeat.Bartr.services;

import com.ctrlaltdefeat.Bartr.models.Enrollment;

import com.ctrlaltdefeat.Bartr.repository.EnrollmentRepository;

import com.fasterxml.jackson.databind.ObjectMapper;



import org.springframework.stereotype.Service;



import java.util.List;

import java.util.Map;

@Service

public class EnrollmentService {

   private final EnrollmentRepository enrollmentRepository;

      private final ObjectMapper objectMapper =new ObjectMapper();



   public EnrollmentService(EnrollmentRepository enrollmentRepository) {

       this.enrollmentRepository = enrollmentRepository;

   }

   public Enrollment enrollUser(Enrollment enrollment) {

       // Business logic for XP checks, eligibility, etc. can be added here.

       Map<String,Object> data = objectMapper.convertValue(enrollment, Map.class);

       return enrollmentRepository.createDocument(data);

   }

   public Enrollment getEnrollmentById(String id) {

       return enrollmentRepository.getDocument(id);

   }

   public List<Enrollment> getAllEnrollments() {

       return enrollmentRepository.listDocuments();

   }

   public void deleteEnrollment(String id) {

        enrollmentRepository.deleteDocument(id);

   }

}

package com.ctrlaltdefeat.Bartr.services;

import com.ctrlaltdefeat.Bartr.models.Payment;

import com.ctrlaltdefeat.Bartr.repository.PaymentRepository;

import com.fasterxml.jackson.databind.ObjectMapper;



import org.springframework.stereotype.Service;



import java.util.List;

import java.util.Map;

@Service

public class PaymentService {

   private final PaymentRepository paymentRepository;

      private final ObjectMapper objectMapper =new ObjectMapper();



   public PaymentService(PaymentRepository paymentRepository) {

       this.paymentRepository = paymentRepository;

   }

   public Payment createPayment(Payment payment) {

    Map<String,Object> data = objectMapper.convertValue(payment, Map.class);

       return paymentRepository.createDocument(data);

   }

   public Payment getPaymentById(String id) {

       return paymentRepository.getDocument(id);

   }

   public List<Payment> getAllPayments() {

       return paymentRepository.listDocuments();

   }

   public void deletePayment(String id) {

        paymentRepository.deleteDocument(id);

   }

}

package com.ctrlaltdefeat.Bartr.services;

import com.ctrlaltdefeat.Bartr.models.Transaction;

import com.ctrlaltdefeat.Bartr.repository.TransactionRepository;

import com.fasterxml.jackson.databind.ObjectMapper;



import org.springframework.stereotype.Service;



import java.util.List;

import java.util.Map;

@Service

public class TransactionService {

   private final TransactionRepository transactionRepository;

      private final ObjectMapper objectMapper =new ObjectMapper();



   public TransactionService(TransactionRepository transactionRepository) {

       this.transactionRepository = transactionRepository;

   }

   public Transaction createTransaction(Transaction transaction) {

    Map<String,Object> data = objectMapper.convertValue(transaction, Map.class);

       return transactionRepository.createDocument(data);

   }

   public Transaction getTransactionById(String id) {

       return transactionRepository.getDocument(id);

   }

   public List<Transaction> getAllTransactions() {

       return transactionRepository.listDocuments();

   }

   public void deleteTransaction(String id) {

        transactionRepository.deleteDocument(id);

   }

}

give all the changes required in every code line by line
