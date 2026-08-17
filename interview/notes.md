# Biên bản Phỏng vấn (Interview Notes)

**Khóa học / Case**: AI Support Radar trên VLearn — Khảo sát Trải nghiệm Vượt qua Bế tắc của Học viên (Learner Experience)  
**Người phỏng vấn (Interviewer)**: Phạm Bá Huy (MHV: 2A202601132)  
**Người ghi chép (Note-taker)**: Nguyễn Văn Tuấn Anh (MHV: 2A202601813)
**Thời gian thực hiện**: 17/08/2026 · Thời lượng: 22 phút  
**Hình thức**: Phỏng vấn trực tiếp  

---

## 1. Thông tin người tham gia & Recruitment Check

- **Mã người tham gia**: `HV-01`
- **Thông tin cơ bản**: Nam, 21 tuổi, sinh viên ngành CNTT vừa hoàn thành 4 tuần đầu khóa học *Web Frontend Cơ bản* trên nền tảng VLearn (khóa học kết hợp video bài giảng và bài tập thực hành tuần).
- **Đúng tiêu chí tuyển**: **[x] Có** / [ ] Không  
  *(Đã tham gia khóa học trực tuyến trong vòng 45 ngày qua và từng gặp bế tắc bài tập dẫn đến chậm tiến độ)*.
- **Cam kết đồng ý (Consent)**: Người tham gia đã đồng ý cho phép ghi âm và sử dụng thông tin ẩn danh phục vụ mục đích nghiên cứu học tập.

---

## 2. Interview Record

| Điều cần giữ lại | Ghi chép chi tiết từ buổi phỏng vấn |
| :--- | :--- |
| **Câu chuyện gần nhất: User đang ở đâu và cố làm gì?** | • Thời điểm: Khoảng 3 tuần trước (cuối tuần thứ 3 của khóa học), vào lúc 23:00 đêm Chủ nhật.<br>• Bối cảnh: Đang ngồi một mình tại bàn học ở phòng trọ, cố gắng hoàn thành bài tập thực hành tuần về *Xử lý Bất đồng bộ (Async/Await & Fetch API)* để nộp trước hạn chót 23:59.<br>• Mục tiêu: Muốn kết nối dữ liệu từ API giả lập về render ra danh sách sản phẩm trên giao diện web. |
| **User đã thực sự làm gì?** | 1. Viết code theo hướng dẫn trong video nhưng màn hình báo lỗi `Promise {<pending>}` và `undefined`.<br>2. Tua lại đoạn video bài giảng 3 lần ở phút 14:20 để dò từng dòng code xem sai ở đâu nhưng không phát hiện ra lỗi.<br>3. Mở tab ChatGPT, copy toàn bộ đoạn code lỗi paste vào hỏi *"Tại sao code này không chạy?"*.<br>4. ChatGPT trả về một đoạn code dùng thư viện Axios và cú pháp lạ chưa học trên lớp. Copy thử vào thì chạy được nhưng không hiểu bản chất.<br>5. Đăng một câu hỏi ngắn lên nhóm Zalo lớp lúc 23:25: *"Mọi người ơi cho mình hỏi lỗi fetch này xử lý sao ạ?"* kèm ảnh chụp màn hình bị mờ. |
| **Khó khăn và Workaround đã dùng** | • **Rào cản hỏi hỗ trợ (Help-seeking Barrier)**: Không dám nhắn tin riêng cho Trợ giảng (TA) vì lúc đó đã nửa đêm, sợ làm phiền và sợ bị TA đánh giá là *"kiến thức cơ bản trong video giảng rồi mà còn không biết làm"*.<br>• **Độ trễ phản hồi**: Nhóm Zalo lúc nửa đêm không ai xem, đến tận 9h sáng hôm sau mới có một bạn học viên khác vào thả icon cười và bình luận chung chung.<br>• **Workaround**: Vì sắp hết hạn nộp bài (deadline 23:59), bạn quyết định lên GitHub tìm repo bài tập của khóa trước, copy nguyên đoạn code nộp tạm để không bị trừ điểm chuyên cần. |
| **Hậu quả hoặc chi phí** | • **Về kiến thức**: Bị hổng hoàn toàn phần kiến thức cốt lõi về Xử lý Bất đồng bộ (Async JS).<br>• **Về tiến độ**: Sang tuần 4 học đến React Hooks (`useEffect`), vì không hiểu bản chất tuần 3 nên bạn hoàn toàn không thể theo kịp bài giảng tuần 4. Bị dồn ứ tiếp 2 bài tập của tuần 4.<br>• **Về tâm lý & hành vi**: Cảm thấy bất lực, tự ti và nản lòng. Bạn đã ngừng đăng nhập vào VLearn suốt 10 ngày sau đó và suýt bỏ dở khóa học (silent drop-out). |
| **Điều bất ngờ, trái giả thuyết hoặc Exact Quotes** | **Exact Quotes đáng chú ý**:  <br>🗣️ *"Em không dám nhắn hỏi anh Trợ giảng lúc 11h đêm vì sợ phiền, mà hỏi lên nhóm lớp thì ngại các bạn thấy mình dốt..."*<br>🗣️ *"Hỏi ChatGPT nó sửa cho chạy được ngay, nhưng nó viết bằng cách khác bài học trên VLearn nên em càng rối, chả hiểu vì sao nó chạy được. Sang bài sau gặp lại lỗi đó em vẫn mù tịt."*<br>🗣️ *"Lúc học online sợ nhất là cảm giác ngồi một mình lúc nửa đêm bị tắc đúng 1 dấu chấm phẩy hay 1 dòng code mà không có ai gỡ cho ngay lúc đó. Tắc tầm 2 ngày là nản không muốn mở máy lên học nữa."*<br><br>**Điều bất ngờ trái giả thuyết**:  <br>• Team ban đầu giả định học viên thiếu công cụ tìm kiếm (thiếu tài liệu). Nhưng thực tế, học viên có thừa công cụ (Google, ChatGPT), vấn đề là **công cụ bên ngoài đưa ra giải pháp không ăn khớp với ngữ cảnh giáo trình của khóa học**, khiến học viên càng hoang mang hơn.<br>• Yếu tố cảm xúc (**sự cô độc + nỗi sợ bị phán xét**) là rào cản tâm lý cực lớn ngăn cản học viên tìm kiếm sự giúp đỡ từ người thật. |

---

## 3. Tóm tắt các phát hiện chính (Key Takeaways)

1. **Golden Window để can thiệp**: Thời điểm bế tắc thường rơi vào ban đêm (21h–24h) khi tự học. Nếu sau 24–48 giờ không được gỡ rối, học viên sẽ bắt đầu chu kỳ dồn bài và ngưng đăng nhập.
2. **Workaround tạm thời gây hại dài hạn**: Học viên copy code từ ChatGPT/GitHub để đối phó deadline, tạo ra "ảo tưởng hoàn thành" trên hệ thống nhưng thực chất đã bị rỗng kiến thức và sẽ bỏ cuộc ở bài khó tiếp theo.
3. **Giá trị của sự hỗ trợ kịp thời & an toàn tâm lý**: Học viên cần một kênh hỗ trợ tức thì, đúng ngữ cảnh bài giảng và không tạo áp lực phán xét năng lực cá nhân.
