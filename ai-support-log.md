# AI Support Log — Day 18

**Học viên:** Phạm Bá Huy (MHV: `2A202601132`)  
**Nhóm:** Chicken Plus  
**Vai trò:** Lead / Interviewer phỏng vấn Teo (Case React Hooks `useEffect`); Phụ trách thiết kế Common Context, xây dựng Web Prototype A/B/C, Ma trận 9 Test Cases và Stepper Guide kiểm thử  
**Bài lab:** Track 1 – Day 18 (Multiple Prototypes – Human–AI design)

---

## 1. AI đã giúp tôi ở đâu?

- **Thiết kế kiến trúc Web Prototype tương tác (HTML/CSS/JS):**
  - Gợi ý và hiện thực hóa layout chuẩn **70% Shared Core** (Common Context: Video bài giảng `useEffect` mốc 04:12, Trình soạn thảo `UserProfile.jsx`, Test Suite Console) và **30% Critical Interaction** biệt lập cho 3 Options (Socratic AI, Contextual Explainer, Fast SLA Q&A).
- **Xây dựng State Machine & Mockup tương tác động:**
  - Lập trình bộ điều khiển State Machine quản lý luồng hội thoại gợi mở nhiều lượt (Option A), cơ chế khoanh vùng code/video kèm pop-up (Option B), và đồng hồ đếm ngược SLA ≤ 30 phút cùng quy trình mô phỏng phản hồi của Trợ giảng con người (Option C).
- **Chuẩn hóa Ma trận 9 Test Cases & Stepper Guide:**
  - Hỗ trợ phân loại và chi tiết hóa 9 Test Cases (3 Options × 3 Scenarios: Happy Path, Uncertainty, Control & Recovery).
  - Lập trình thanh điều khiển Stepper Guide dẫn dắt từng click chuột thực tế kèm hiệu ứng ánh sáng (Spotlight Glow) chỉ dẫn thao tác.
- **Thiết kế khay Facilitator Annotation ngoài frame:**
  - Định dạng chuẩn 4 trường thông tin cho người quan sát (`We expect tester to`, `Watch for`, `Do not explain`, `Control & Recovery points`).

**Công cụ đã dùng:** Antigravity AI / Gemini 3.7 / Claude (tùy phiên).

---

## 2. AI sai, hời hợt hoặc làm các options giống nhau ở đâu?

- **Thiếu tính tương tác thực tế ở các Test Cases:**
  - Ban đầu AI đề xuất chạy tự động hàng loạt test case chỉ bằng 1 nút bấm (làm tester không tự tay thao tác và không cảm nhận được luồng tương tác thật). Tôi đã yêu cầu AI thiết kế lại thành hệ thống Stepper Guide dẫn dắt từng bước thủ công để người dùng tự click, tự chọn đáp án và tự sửa code.
- **Thiếu lối thoát & nút quay lại sau khi kiểm thử thành công:**
  - Khi hoàn thành bài test và hiện Modal chúc mừng (Success Modal), ban đầu AI quên tạo các nút quay lại/làm lại khiến người dùng bị kẹt. Tôi đã phát hiện và yêu cầu bổ sung nút "Quay lại & Thử Testcase khác", "Xem Ma trận 9 Test Cases", "Thử Option kế tiếp" và nút đóng `✕`.
- **Nguy cơ triệt tiêu tư duy trong Option A (Socratic AI):**
  - Ban đầu AI gợi ý câu hỏi có xu hướng đưa thẳng đáp án sửa `[userId]`. Tôi đã yêu cầu hiệu chỉnh nghiêm ngặt để AI chỉ đặt câu hỏi gợi mở về cơ chế mảng dependency `[]`, buộc người học tự suy luận.
- **Giải thích quá tải thuật ngữ trong Option B (Contextual Explainer):**
  - Ban đầu AI đưa ra giải thích dài dòng bằng các thuật ngữ lạ ngoài bài học. Tôi đã giới hạn phạm vi giải thích cô đọng trong nội dung bài giảng và bổ sung các nút tùy biến "Cho ví dụ", "Giải thích ngắn hơn".

---

## 3. Tôi đã tự sửa hoặc quyết định lại điều gì?

- **Lựa chọn tình huống bế tắc thật làm Data Fixture:**
  - Quyết định lấy chính tình huống kẹt code `useEffect` thiếu dependency từ buổi phỏng vấn thực tế với bạn Teo (Day 17) làm bài tập và lỗi chung cho cả 3 phương án.
- **Quyết định cấu trúc 3 Option theo mức độ Agency:**
  - Chốt phân vai rõ rệt: Option A (AI-Led / Moderate Agency - Ask), Option B (User-Led / Low Agency - Don't Act cho đến khi Trigger), Option C (Human Baseline / No AI).
- **Yêu cầu xây dựng Stepper Guide cho 9 Test Cases:**
  - Trực tiếp chỉ đạo bổ sung thanh dẫn dắt từng thao tác thực tế thay vì để AI tự động kích hoạt kịch bản, đảm bảo tiêu chí "Definition of Testable" (tester tự thao tác độc lập 100%).
- **Kiểm soát toàn bộ Quyền phục hồi & Lối thoát khẩn cấp:**
  - Thiết kế các nút Control/Recovery riêng biệt cho từng Option (Đổi câu hỏi, Báo hint không đúng ý, Lối thoát khẩn cấp xem đáp án, Hủy ticket, Chuyển bài tạm thời).
- **Tách bạch phần ghi chép quan sát với suy diễn:**
  - Giữ vững nguyên tắc ghi nhận khách quan mọi hành vi của tester, không để AI suy đoán hay tạo feedback ảo.

---

## 4. Cam kết tính trung thực

- Toàn bộ kịch bản, tình huống bế tắc và dữ liệu kiểm thử đều xuất phát từ phỏng vấn thực tế của nhóm Chicken Plus.
- Không sử dụng AI để tạo trích dẫn (quote), quan sát (observation) hoặc kết quả kiểm thử không có thật.
- Các phản biện, quyết định thiết kế và cải tiến giao diện trong prototype đều do tôi trực tiếp định hướng và yêu cầu AI lập trình theo đúng ý đồ.
- AI tạo mẫu tham khảo hướng đi.
---

**Tỷ lệ đóng góp ước lượng:**  
- **Thiết kế, định hướng & quyết định (Problem Hypothesis, Human–AI Agency, 9 Test Cases, Review & Testing):** ~75–80% do Phạm Bá Huy và nhóm Chicken Plus thực hiện.  
- **AI hỗ trợ:** ~20–25% (Hỗ trợ viết mã HTML/CSS/JS, styling Dark mode, tối ưu State machine và định dạng tài liệu).
