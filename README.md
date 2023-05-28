# GitHub Yazısı: React Firebase Auth İşlemi

Bu projede, React ve Firebase'i kullanarak basit bir kimlik doğrulama (authentication) işlemi gerçekleştirdik. Firebase, kullanıcıların kaydolmasını, giriş yapmasını, şifrelerini sıfırlamasını ve kimlik doğrulamasını yönetmemize olanak sağlayan bir bulut platformudur.

Projenin temel adımlarını aşağıda özetledim:

1. React Projesi Kurulumu:
   - Öncelikle, React projesini oluşturmak için create-react-app aracını kullandık.
   - Proje klasörünü oluşturduktan sonra, gerekli bağımlılıkları yüklemek için npm veya yarn kullanarak projeyi başlattık.

2. Firebase Kurulumu:
   - Firebase'i projemize entegre etmek için Firebase Console'da yeni bir proje oluşturduk.
   - Proje oluşturulduktan sonra, Firebase SDK'sını projemize eklemek için gerekli yapılandırmaları yaptık.

3. Yönlendirme İşlemi:
   - React Router kullanarak sayfalar arasında geçiş yapmayı sağladık.
   - Kullanıcı kaydolma, giriş yapma, şifre sıfırlama gibi işlemler için farklı sayfalara yönlendirdik.

4. Giriş Yapma İşlemi:
   - Firebase Authentication'ı kullanarak kullanıcıları kaydolduktan sonra giriş yapmalarını sağladık.
   - E-posta ve şifreyle giriş yapma işlemi gerçekleştirdik.

5. Şifremi Unuttum İşlemi:
   - Kullanıcılar şifrelerini unuttuklarında, Firebase Authentication üzerinden şifre sıfırlama e-postası göndermelerini sağladık.
   - Kullanıcılar e-postalarını girerek şifrelerini sıfırlayabildiler.

6. Kimlik Doğrulama Akışı ve Layout:
   - Kullanıcı giriş yaptığında veya çıkış yaptığında, kimlik doğrulama durumunu izleyerek layout'u güncelledik.
   - Kimlik doğrulaması yapılmışsa, kullanıcıya özel sayfalara erişim sağladık. Aksi takdirde, giriş yapmalarını istedik.

7. React Firebase Hooks Kullanımı:
   - Firebase'i kullanmak için React Hooks olan useFirebaseAuth ve useFirestore ile özelleştirilmiş kancalar oluşturduk.
   - Bu kancaları kullanarak Firebase Authentication ve Firestore işlemlerini gerçekleştirdik.

Bu proje için [Benim Videom](https://youtu.be/THjxDxyLYGw) ve [Benim Videom]([https://youtu.be/THjxDxyLYGw](https://www.youtube.com/watch?v=Rf1bzCj5YEE&list=PLiYPP1v1hM95zFZUqX8qhmIjvrZQ4eEav)) adlı YouTube kanalından yardım aldım. Videoda, React Firebase auth işlemini adım adım anlatan bir rehber sunuluyor. Bu kaynağı referans alarak projeyi geliştirdim.

Daha fazla ayrıntı ve kod örneklerini [GitHub](https://github.com/ahmetsedr/FirebaseAuth/) sayfamda bulabilirsiniz. Projeyi inceleyerek Firebase Authentication'ı kullanarak nasıl kimlik doğrulama işlemleri gerçekleştirebileceğinizi görebilirsiniz.

Keyifli çalışmalar!
