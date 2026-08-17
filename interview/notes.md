# Biên bản Phỏng vấn (Interview Notes)

**Khóa học / Case**: AI Support Radar trên VLearn — Khảo sát Trải nghiệm Vượt qua Bế tắc của Học viên (Learner Experience)  
**Nhóm**: Chicken Plus  
**Thành viên nhóm**:
1. **Phạm Bá Huy** (MHV: `2A202601132`) — Lead / Interviewer chính (Lượt 1)
2. **Nguyễn Văn Tuấn Anh** (MHV: `2A202601813`) — Note-taker & Interviewer (Lượt 2)

**Thời gian thực hiện**: 17/08/2026  
**Thư mục bản ghi (Google Drive)**: [https://drive.google.com/drive/folders/1-jCxMe7__YaxiNBn3664jak6LdRwdS68](https://drive.google.com/drive/folders/1-jCxMe7__YaxiNBn3664jak6LdRwdS68)  
**Hình thức**: Phỏng vấn trực tiếp  

---

## BẢN GHI PHỎNG VẤN 1 (Interviewer: Phạm Bá Huy)

### 1. Thông tin người tham gia & Recruitment Check
- **Mã người tham gia**: `HV-01 (Teo)`
- **Đối tượng**: Học viên đang tự học khóa học Lập trình Web Frontend (ReactJS) trực tuyến.
- **Đúng tiêu chí tuyển**: **[x] Có** / [ ] Không  
  *(Vừa gặp tình huống kẹt bài tập React Hooks trong vài ngày gần đây)*.
- **Đồng thuận (Consent)**: Người tham gia đã đồng ý trả lời và cho phép ghi âm phục vụ nghiên cứu.

### 2. Interview Record chi tiết

| Điều cần giữ lại | Ghi chép chi tiết từ phỏng vấn Teo |
| :--- | :--- |
| **Câu chuyện gần nhất: User đang ở đâu và cố làm gì?** | • Mấy ngày trước, đang học video hướng dẫn về **React Hooks (`useEffect` và các công dụng đi kèm)**.<br>• Tự tay viết một component có form, sau đó gặp lỗi dữ liệu không cập nhật khi chuyển sang component khác.<br>• Đã làm theo đúng ví dụ của giảng viên, kiểm tra code thấy giống hệt ví dụ bài giảng nhưng kết quả chạy thực tế lại không giống. |
| **User đã thực sự làm gì?** | 1. Xem lại video bài giảng vài phút để nghe lại đoạn giảng viên giải thích (lần 1).<br>2. Xem lại lần 2 vẫn không hiểu, đến lần 3 mới nhận ra mình đang bị hổng kiến thức nền tảng chứ không phải do gõ sai cú pháp.<br>3. Mở Google gõ các câu hỏi chung chung: *"React state không cập nhật là như thế nào"*, *"tại sao component của mình lại render lại"*.<br>4. Hỏi ChatGPT: copy trực tiếp đoạn code đưa vào hỏi *"tại sao đoạn này không cập nhật được state, giải thích cho người mới học React"*.<br>5. Đọc bài hướng dẫn trên Google, mất khoảng 40 phút mới tự hiểu và giải quyết được vấn đề. |
| **Khó khăn và Workaround đã dùng** | • **Khó khăn cốt lõi**: Học online không có người ngồi bên cạnh để hỏi ngay lúc bế tắc (khác với học trên lớp có thầy hoặc bạn bè bên cạnh để chỉ điểm).<br>• **Vấn đề khi dùng AI ngoài (ChatGPT)**: Phải biết hỏi cái gì trước; khi bản thân chưa hiểu tại sao mình thiếu kiến thức thì chỉ hỏi được rất chung chung $\rightarrow$ ChatGPT giải thích một vấn đề lại làm phát sinh thêm 2–3 thuật ngữ/vấn đề mới gây hoang mang.<br>• **Workaround**: Tự tìm tài liệu Google, hỏi ChatGPT từng đoạn; nếu kẹt quá thì tạm thời bỏ qua phần đó để tối quay lại đọc lại khi đầu óc tỉnh táo hơn. |
| **Hậu quả hoặc chi phí** | • **Tốn thời gian**: Mỗi lần kẹt mất từ 20-30 phút đến cả tiếng đồng hồ.<br>• **Cảm xúc**: Cảm giác rất nản và khó chịu sau 20-30 phút loay hoay không tiến triển.<br>• **Hệ quả dây chuyền**: Bị hổng kiến thức có tính liên kết (bài 3 chưa hiểu cố học tiếp bài 4 thì sang bài 5 lại bị kẹt tiếp). Nếu dừng lại quá lâu thì mất thời gian, nhưng nếu cứ cố học tiếp thì lỗ hổng kiến thức càng ngày càng lớn. |
| **Điều bất ngờ & Exact Quotes** | **Exact Quotes**:  <br>🗣️ *"Vấn đề lớn nhất là học online mà không có người ngồi bên cạnh để hỏi ngay... ở lớp thì còn có giảng viên hoặc bạn học ngồi cạnh, còn học online thì lúc đó mình không biết hỏi ai."*<br>🗣️ *"Lần đầu tôi không nghĩ là mình hiểu sai đâu. Đến lần thứ hai thì bắt đầu thấy hơi khó chịu. Lần thứ ba tôi mới nhận ra là mình đang thiếu một kiến thức nào đó, chứ không đơn giản là sai code. Cảm giác đó khá là nản..."*<br>🗣️ *"Vấn đề là mình phải biết hỏi cái gì trước. Có những lúc mình không hiểu tại sao mình thiếu kiến thức đó, nên hỏi rất chung chung, rồi được giải thích một vấn đề nhưng lại phát sinh thêm 2-3 vấn đề khác."*<br>🗣️ *"Mình chỉ muốn có gợi ý hoặc giải thích để hiểu thôi, chứ không đưa luôn đáp án."*<br><br>**Phát hiện bất ngờ**: Học viên rất sợ các công cụ "làm hộ bài tập" — họ thực sự muốn tự hiểu bản chất thông qua gợi ý/chỉ điểm đúng lúc (hints) hơn là nhận đáp án có sẵn. |

---

## BẢN GHI PHỎNG VẤN 2 (Interviewer: Nguyễn Văn Tuấn Anh)

### 1. Thông tin người tham gia & Recruitment Check
- **Mã người tham gia**: `HV-02 (Thành)`
- **Đối tượng**: Học viên đang tự học môn Cấu trúc dữ liệu & Giải thuật.
- **Đúng tiêu chí tuyển**: **[x] Có** / [ ] Không  
  *(Vừa gặp khó khăn khi làm bài tập giải thuật trong tuần)*.
- **Đồng thuận (Consent)**: Người tham gia đã đồng ý chia sẻ câu chuyện học tập thực tế.

### 2. Interview Record chi tiết

| Điều cần giữ lại | Ghi chép chi tiết từ phỏng vấn Thành |
| :--- | :--- |
| **Câu chuyện gần nhất: User đang ở đâu và cố làm gì?** | • Trong tuần qua, đang nghiên cứu về **Giải thuật Cây (Tree Algorithm) trong lập trình**, thực hành code trên VSCode.<br>• Mục tiêu: Muốn viết code giải thuật cây nhưng không hiểu bản chất thuật toán hoạt động ra sao và không tìm ra hướng giải quyết bài toán. |
| **User đã thực sự làm gì?** | 1. Cố gắng suy nghĩ hướng đi cho bài toán trên VSCode nhưng cảm thấy hoàn toàn mơ hồ.<br>2. Lên mạng search các công cụ AI như ChatGPT, Gemini để tìm cách giải.<br>3. Khi AI trả về code đáp án, đọc code thấy vẫn không hiểu bản chất.<br>4. Tiếp tục hỏi AI các câu hỏi chi tiết hơn: yêu cầu phân tích từng input, output cụ thể để tự đi từng bước hiểu luồng giải thuật. |
| **Khó khăn và Workaround đã dùng** | • **Khó khăn cốt lõi**: Cảm giác bức bối, mơ hồ vì ngay cả hướng đi ban đầu để phát triển bài toán cũng không nghĩ ra được.<br>• **Vấn đề của AI hiện tại**: AI (ChatGPT, Gemini) có xu hướng nhảy thẳng vào đưa code đáp án hoàn chỉnh, không giải thích luồng tư duy từng bước khiến người học bị ngợp và không hiểu bản chất thuật toán.<br>• **Workaround**: Phải chủ động "ép" AI giải thích bằng cách hỏi bóc tách từng input/output từng bước. |
| **Hậu quả hoặc chi phí** | • **Về tâm lý**: Cảm giác rất bức bối, khó chịu khi bị tắc ý tưởng.<br>• **Về thói quen học tập**: Sau khi học xong một chương thì ôn lại một lần, nhưng sau đó không dùng nữa thì lướt bỏ qua luôn, dẫn đến việc kiến thức không đọng lại bền vững. |
| **Điều bất ngờ & Exact Quotes** | **Exact Quotes**:  <br>🗣️ *"Là một người đam mê giải thuật, mình thấy rất bức bối, khó chịu, vì ngay cái hướng đi để phát triển bài toán mình cũng không thể nghĩ ra được. Bước sau đó mình cảm giác như mơ hồ luôn."*<br>🗣️ *"ChatGPT hay Gemini thì nó cũng đưa ra cho mình các câu trả lời. Nhưng mình thấy nó chỉ đưa ra kiểu đáp án, mà mình vẫn không hiểu được bản chất nó là cái gì. Mình phải hỏi thêm những câu chi tiết hơn, như từng input, output cụ thể..."* |

---

## 3. Tổng hợp Insights chung của Nhóm Chicken Plus

1. **Bế tắc kép (Double Barrier)**: Người học không chỉ bế tắc về mặt kỹ thuật, mà còn bế tắc trong việc **không biết mình đang thiếu kiến thức gì để mà hỏi** (như Teo chia sẻ) và **không biết bắt đầu hướng đi từ đâu** (như Thành chia sẻ).
2. **AI ngoài (ChatGPT/Gemini) chưa giải quyết trọn vẹn**: AI bên ngoài thường mắc 2 lỗi:
   - Đưa ra đáp án hoàn chỉnh làm triệt tiêu tư duy (Thành).
   - Giải thích bằng các khái niệm mới chưa học làm phát sinh thêm 2-3 vấn đề khác (Teo).
3. **Nhu cầu Scaffolded Hints (Gợi ý từng bước)**: Cả 2 học viên đều nhấn mạnh họ **không cần đáp án**, họ cần một người/công cụ **chỉ ra điểm thiếu sót và dẫn dắt từng bước (Socratic hints)** đúng thời điểm đang ngồi học.
