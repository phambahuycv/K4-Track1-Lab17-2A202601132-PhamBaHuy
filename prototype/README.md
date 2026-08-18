# Hướng Dẫn Kiểm Thử Prototype A/B/C — VLearn Support Radar (Day 18)

## 1. Giới thiệu tổng quan
Prototype này được xây dựng để phục vụ buổi kiểm thử người dùng (User Testing) so sánh 3 phương án hỗ trợ học tập khi học viên gặp bế tắc với bài tập React Hooks `useEffect`.

Cả 3 phương án chia sẻ **70% thành phần chung (Common Context)**:
- Giao diện nền tảng học trực tuyến VLearn (Video bài giảng mốc 04:12, Code editor `UserProfile.jsx`, Console Test Suite báo lỗi `Test Case #2 FAILED`).
- Task & Outcome chung: Hiểu bản chất lỗi thiếu dependency trong `useEffect` và sửa code thành `[userId]` để vượt qua bài test.

---

## 2. Hướng dẫn mở và kiểm thử Prototype

### Cách mở nhanh
Bạn có thể mở trực tiếp file `index.html` trong thư mục `prototype/` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox, Brave):
```powershell
# Mở trực tiếp bằng trình duyệt mặc định trên Windows:
start c:\Users\ADMIN\Documents\AI_in_Action\K4-Track1-Lab17-2A202601132-PhamBaHuy\prototype\index.html
```
Hoặc chạy một static web server:
```powershell
npx -y serve c:\Users\ADMIN\Documents\AI_in_Action\K4-Track1-Lab17-2A202601132-PhamBaHuy\prototype
```

---

## 3. Ba Option được kiểm thử (Critical Interactions)

| Option | Tên phương án | Cơ chế tương tác chính | Điểm phục hồi & Kiểm soát (Control / Recovery) |
| :--- | :--- | :--- | :--- |
| **Option A** | **Socratic Hints AI** *(AI-Led / Guided)* | Nhấp nút *"💡 Cần gợi ý tư duy"*, AI hiển thị phân tích lỗi, đưa ra 2 hướng giả định, đặt câu hỏi gợi mở nhiều lượt để học viên tự tư duy ra đáp án. | • Nút *"Đổi câu hỏi gợi ý"*<br>• Nút *"Hint không đúng ý"*<br>• Nút khẩn cấp *"🚨 Xem đáp án chi tiết"* |
| **Option B** | **In-video Contextual Explainer** *(User-Led / Bounded)* | Học viên chủ động bôi đen dòng code 15 (`}, []);`) hoặc nhấp mốc video `04:12`, sau đó nhấp *"🔍 Giải thích đoạn này với AI"*. AI giải thích cô đọng đúng phạm vi lựa chọn. | • Nút *"💡 Cho ví dụ minh họa"*<br>• Nút *"⚡ Giải thích ngắn hơn"*<br>• Nút *"✕ Đóng & Tự sửa"* |
| **Option C** | **Fast SLA Q&A** *(Human Baseline / Non-AI)* | Nhấp nút *"🙋 Gửi câu hỏi cho Trợ giảng (TA)"*, gửi ticket có đính kèm code lỗi tự động và theo dõi đồng hồ đếm ngược SLA (≤ 30 phút). Giả lập nhận phản hồi từ TA Hoàng Nam. | • Nút *"✏️ Bổ sung ghi chú"*<br>• Nút *"✅ Tôi đã tự sửa được (Hủy ticket)"*<br>• Nút *"⏭️ Học tạm Bài 13 trong lúc chờ"* |

---

## 4. Bảng Chú Thích Dành Cho Người Quan Sát (Facilitator Annotation)

Trong giao diện, nhấp nút **"📋 Facilitator Notes: BẬT"** ở góc phải trên để bật/tắt khung chú thích này (ngoài tầm nhìn của Tester):

### OPTION A: Socratic Hints AI
- **We expect the tester to:** Nhấp nút *"Cần gợi ý tư duy"*, đọc câu hỏi dẫn dắt của AI, suy ngẫm và trả lời từng bước để tự phát hiện ra lỗi thiếu dependency trong useEffect.
- **Watch for:** Tester có đọc kỹ câu hỏi gợi mở hay vội vàng tìm nút đáp án? Tester có cảm thấy bị "hỏi vặn" hay được khai sáng tư duy? Phản xạ khi thấy AI hiển thị 2 giả định nguyên nhân.
- **Do not explain:** TUYỆT ĐỐI KHÔNG giải thích cơ chế Dependency Array của useEffect; KHÔNG giải thích cách AI suy luận hay chỉ điểm cần bấm nút nào. Để tester tự ra quyết định.

### OPTION B: In-video Contextual Explainer
- **We expect the tester to:** Bôi đen/chọn dòng code số 15 (`}, []);`) hoặc mốc video 04:12, sau đó nhấp *"Giải thích đoạn này"*, đọc giải thích cô đọng sát bài giảng và tự sửa code.
- **Watch for:** Tester có nhận biết được mình cần bôi đen chỗ nào không? Tester có thử bôi đen quá ngắn (nhận cảnh báo) không? Tester có dùng các phím tắt *"Cho ví dụ"* / *"Đơn giản hơn"* trước khi sửa code?
---

## 5. Ma Trận 9 Test Cases Kiểm Thử Chi Tiết (3 Solutions × 3 Scenarios)

Để kiểm chứng toàn diện 3 giải pháp theo chuẩn Day 18, mỗi Option được kiểm thử qua **3 Test Cases** (tổng cộng **9 Test Cases**), bao gồm: Luồng chuẩn (Happy Path), Xử lý độ không chắc chắn (Uncertainty/Ambiguity) và Quyền kiểm soát/Phục hồi (Control & Recovery):

| STT | Mã Test Case | Solution Option | Tình huống / Kịch bản kiểm thử | Hành vi kỳ vọng của Tester | Điểm kiểm chứng (Pass Criteria) |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **1** | **TC-A1** | **Option A** *(Socratic AI)* | **Happy Path (Dẫn dắt tư duy)**: Học viên gặp lỗi Test #2 fail, bấm *"Cần gợi ý tư duy"*, đọc câu hỏi AI và chọn đáp án đúng. | Đọc gợi ý, chọn câu trả lời A (effect chỉ chạy 1 lần), nhận ra nguyên nhân và sửa code thành `[userId]`. | Tester tự hiểu tại sao cần `[userId]` mà không cần ai cho đáp án sẵn. Test Case #2 PASS. |
| **2** | **TC-A2** | **Option A** *(Socratic AI)* | **Uncertainty Path (AI chưa chắc chắn)**: AI phân vân giữa 2 nguyên nhân (Dependency Array vs Closure) và hỏi người dùng. | Tester chủ động chọn nhánh *"1. Cơ chế Dependency Array []"* để AI tiếp tục điều hướng đúng hướng. | Hệ thống không tự ý đoán mò khi chưa chắc; trao quyền xác nhận cho người dùng. |
| **3** | **TC-A3** | **Option A** *(Socratic AI)* | **Control & Emergency Recovery**: Học viên không hiểu câu hỏi gợi ý hoặc bị kẹt luồng tư duy. | Tester bấm *"Đổi câu hỏi gợi ý khác"*, *"Hint không đúng ý"* hoặc bấm nút khẩn cấp *"Xem đáp án chi tiết"*. | Tester không bị "nhốt" trong vòng lặp hỏi đáp; có đường thoát an toàn 100%. |
| **4** | **TC-B1** | **Option B** *(Explainer)* | **Happy Path (Khoanh vùng chính xác)**: Học viên bôi đen dòng 15 (`}, []);`) hoặc mốc video `04:12`, bấm *"Giải thích đoạn này"*. | Đọc giải thích cô đọng tại chỗ, nắm được `[]` rỗng làm effect không re-run, tự sửa thành `[userId]`. | Nhận thông tin tức thì, không bị ngợp thuật ngữ lạ ngoài bài học. Test Case #2 PASS. |
| **5** | **TC-B2** | **Option B** *(Explainer)* | **Uncertainty / Bad Selection**: Học viên chọn sai dòng hoặc bôi đen quá ngắn (ví dụ chỉ 1 từ `user`). | Tester quan sát cảnh báo *"Vùng chọn chưa đủ ngữ cảnh"*, sau đó chọn lại dòng code 15 trọn vẹn. | Hệ thống cảnh báo rõ ràng khi thiếu dữ liệu ngữ cảnh, không đưa ra giải thích vô nghĩa. |
| **6** | **TC-B3** | **Option B** *(Explainer)* | **Control & Depth Customization**: Học viên muốn xem ví dụ hoặc muốn giải thích ngắn gọn hơn. | Tester bấm *"Cho ví dụ minh họa"* (hiện code mẫu) hoặc *"Giải thích ngắn hơn"* (tóm tắt 1 câu) hoặc bấm *"✕ Đóng"*. | Tester toàn quyền tùy biến độ sâu của lời giải thích theo khả năng tiếp thu của mình. |
| **7** | **TC-C1** | **Option C** *(Fast SLA)* | **Happy Path (Ticket & Human TA Response)**: Học viên tạo ticket hỗ trợ, đính kèm code/log tự động và chờ TA trả lời. | Tester gửi ticket, quan sát đồng hồ SLA đếm ngược, nhận câu trả lời từ TA Hoàng Nam và sửa code. | Cảm nhận được sự chính xác từ con người, nhưng đối mặt với độ trễ phản hồi. Test Case #2 PASS. |
| **8** | **TC-C2** | **Option C** *(Fast SLA)* | **Asynchronous Multitasking (Chờ đợi)**: Trong lúc ticket đang trong hàng đợi, học viên không muốn dừng việc học. | Tester bấm *"Học tạm Bài 13 trong lúc chờ"* để tiếp tục xem nội dung khác trong khi chờ notification. | Tránh tình trạng học viên ngồi chờ chết thời gian làm đứt đà tự học (loss of momentum). |
| **9** | **TC-C3** | **Option C** *(Fast SLA)* | **Control & Self-Recovery (Hủy ticket)**: Trong lúc chờ TA, học viên tự nhìn ra lỗi hoặc đã sửa xong. | Tester bấm nút *"Tôi đã tự sửa được (Hủy ticket)"* để giải phóng ticket khỏi hàng đợi của TA. | Tester có toàn quyền rút lại yêu cầu hỗ trợ khi không còn nhu cầu. |

---

---

## 6. Hướng Dẫn Từng Thao Tác Chi Tiết Cho 9 Test Cases (Interactive Playbook)

Trên giao diện web, thanh **Interactive 9 Test Cases Step-by-Step Guide Bar** sẽ tự động hướng dẫn và làm sáng (glow spotlight) các nút bấm bạn cần click ở từng bước:

### 🔹 OPTION A: Socratic Hints AI (AI-Led / Guided)
* **`TC-A1` (Happy Path — Dẫn dắt tư duy từng bước):**
  1. *Bước 1/5*: Nhấp vào nút `[💡 Cần gợi ý tư duy]` trên thanh Editor Actions.
  2. *Bước 2/5*: AI hiển thị 2 hướng nghi vấn $\rightarrow$ Nhấp chọn `[1. Cơ chế hoạt động của Dependency Array []]`.
  3. *Bước 3/5*: Đọc câu hỏi gợi mở của AI và nhấp chọn `[Đáp án A: Không, mảng rỗng [] chỉ chạy đúng 1 lần...]`.
  4. *Bước 4/5*: Nhấp vào nút `[🔧 Tự động điền [userId]]` (hoặc nhấp trực tiếp vào ô `[]` ở dòng 15 trong code).
  5. *Bước 5/5*: Nhấp nút `[▶ Run Tests]` $\rightarrow$ Quan sát thông báo chúc mừng `2 of 2 Tests PASS`.

* **`TC-A2` (Uncertainty Path — AI phân vân giữa 2 nguyên nhân):**
  1. *Bước 1/3*: Nhấp nút `[💡 Cần gợi ý tư duy]`.
  2. *Bước 2/3*: Quan sát AI minh bạch về độ không chắc chắn $\rightarrow$ Thử chọn `[2. Lỗi Stale Closure trong React Hook]`.
  3. *Bước 3/3*: Quan sát AI tiếp nhận và điều chỉnh câu hỏi gợi mở bám theo nhánh bạn vừa chọn.

* **`TC-A3` (Control & Emergency Recovery — Quyền kiểm soát & Lối thoát khẩn cấp):**
  1. *Bước 1/4*: Mở câu hỏi gợi mở và chọn nhánh `[1. Cơ chế Dependency Array []]`.
  2. *Bước 2/4*: Nhấp nút `[🔄 Đổi câu hỏi gợi ý khác]` nếu thấy câu hỏi hiện tại chưa rõ.
  3. *Bước 3/4*: Nhấp nút `[⚠️ Hint không đúng ý]` để yêu cầu AI chọn lại mốc kiến thức.
  4. *Bước 4/4*: Nhấp nút đỏ `[🚨 Xem đáp án chi tiết (Khẩn cấp)]` để kiểm tra lối thoát an toàn khi bị kẹt quá lâu.

---

### 🔹 OPTION B: In-video Contextual Explainer (User-Led / Bounded)
* **`TC-B1` (Happy Path — Khoanh vùng & Giải thích tại chỗ):**
  1. *Bước 1/4*: Nhấp chuột vào dòng code 15 (`}, []);`) hoặc nhấp mốc video `[04:12]`.
  2. *Bước 2/4*: Nhấp nút `[🔍 Giải thích đoạn này với AI]` trên pop-up nổi xuất hiện.
  3. *Bước 3/4*: Đọc giải thích cô đọng dưới Terminal và nhấp `[🔧 Điền [userId] vào code]`.
  4. *Bước 4/4*: Nhấp `[▶ Run Tests]` để xác nhận bài làm đã chính xác.

* **`TC-B2` (Uncertainty — Khoanh vùng chưa đủ ngữ cảnh):**
  1. *Bước 1/2*: Thử nhấp chọn dòng code số 8 (`// Lấy thông tin user...`) hoặc dòng 4.
  2. *Bước 2/2*: Quan sát thông báo cảnh báo: *"Vùng chọn có thể chưa đủ ngữ cảnh"*, sau đó nhấp lại vào đúng dòng 15.

* **`TC-B3` (Control & Depth Customization — Tùy biến độ sâu kiến thức):**
  1. *Bước 1/4*: Nhấp chọn dòng 15 và bấm `[🔍 Giải thích đoạn này với AI]`.
  2. *Bước 2/4*: Nhấp nút `[💡 Cho ví dụ minh họa]` để xem đoạn code so sánh `❌` vs `✅`.
  3. *Bước 3/4*: Nhấp nút `[⚡ Giải thích ngắn hơn]` để nhận tóm tắt 1 câu TL;DR.
  4. *Bước 4/4*: Nhấp nút `[✕ Đóng & Tự sửa]` để đóng thẻ giải thích và tự sửa code.

---

### 🔹 OPTION C: Fast SLA Q&A (Human Baseline / Non-AI)
* **`TC-C1` (Happy Path — Gửi Ticket & Nhận phản hồi Trợ giảng):**
  1. *Bước 1/5*: Nhấp nút `[🙋 Gửi câu hỏi cho TA (SLA ≤ 30p)]` trên thanh Editor Actions.
  2. *Bước 2/5*: Xem phần tự động đính kèm code/log và nhấp `[🚀 Gửi Ticket Hỗ Trợ]`.
  3. *Bước 3/5*: Quan sát đồng hồ SLA đếm ngược (`29:58`) và tiến trình 3 bước (Đã gửi $\rightarrow$ TA nhận $\rightarrow$ TA trả lời).
  4. *Bước 4/5*: Nhấp `[⚡ Giả lập TA phản hồi ngay]` (hoặc đợi 3.5s) để đọc tin nhắn hướng dẫn của TA Hoàng Nam.
  5. *Bước 5/5*: Nhấp `[🔧 Sửa code theo hướng dẫn của TA]` và bấm `[▶ Run Tests]` để hoàn thành bài test.

* **`TC-C2` (Asynchronous Multitasking — Học tiếp trong lúc chờ):**
  1. *Bước 1/2*: Tạo ticket hỗ trợ.
  2. *Bước 2/2*: Trong lúc SLA đang đếm, nhấp nút `[⏭️ Học tạm Bài 13 trong lúc chờ]` để không bị đứt đà học tập.

* **`TC-C3` (Control & Self-Recovery — Bổ sung / Hủy ticket):**
  1. *Bước 1/3*: Tạo ticket hỗ trợ.
  2. *Bước 2/3*: Nhấp nút `[✏️ Bổ sung ghi chú]` để gửi thêm thông tin mô tả cho TA.
  3. *Bước 3/3*: Nhấp nút `[✅ Tôi đã tự sửa được (Hủy ticket)]` để giải phóng hàng đợi khi đã tự sửa được.

---

## 7. Đường dẫn phục hồi (Reset Path)
Bất kỳ lúc nào, nhấn nút **"🔄 Reset Scenario"** ở thanh điều hướng để khôi phục toàn bộ trạng thái bài toán về Common Context ban đầu:
- Code trở lại trạng thái lỗi `[]`.
- Test Case #2 trở lại trạng thái `FAIL`.
- Tất cả các hộp thoại tương tác, ticket và bộ đếm SLA được xóa sạch.
