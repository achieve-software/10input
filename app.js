const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
// Bu JavaScript kod bloğu, .btn öğesine tıklandığında .search öğesine .active sınıfını ekleyip çıkarmayı ve .input öğesine odaklanmayı sağlar.
// .querySelector() yöntemi kullanılarak, .search, .input ve .btn öğeleri DOM'da bulunur.
// .addEventListener() yöntemi kullanılarak, .btn öğesine bir tıklama olayı eklenir. Tıklama olayı tetiklendiğinde, bir arrow işlevi kullanılır ve bu işlev .classList.toggle() yöntemini çağırarak .search öğesine .active sınıfını ekler veya çıkarır. Böylece arama kutusu genişleyip daralır.
// Daha sonra, .input öğesine .focus() yöntemi çağrılarak odaklanılır, böylece kullanıcı arama kutusuna hemen metin girebilir.
