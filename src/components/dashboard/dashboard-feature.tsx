/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3GNTLxBgpRnm6DCZ2dLxCMRuiM7JsTAWKu2n3J4hkyD5wmTmw2kBCQzHBz5CQFBxocjvRsX7s3nPz3qU7hruBvzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AF5iWQVhtvff9Z15YUjr85AHG3Se1MnKiXZ215n1LLW1NPrgBf6cZr2szfE4H5ysfpku2dDNSiL6qdBtax88aLD",
  "key1": "29AhAd5CW4uCMJdUoAVL42wFbYaRt1tWn6p6UnTPWXt5M24TgzB6TiPQTmAKvF4atjZqgro2skkBFZeLgtTizg1E",
  "key2": "5pLQoBen3qcm9Hi2qtjZ1E9ar1v9SVy98FDHJ5PB1QdKooY7WotdWD2SCde4m6ErUGgUaChdgTCgQX2R8hu85jFx",
  "key3": "TADeiCLBrxDzZ7HNweWyi9Wgeo3cPhV1Fv4DuD3SVwhxcL5a3HBZKAtQaPVA9U3qsym8DBcrYE4BxCiXcRiwwei",
  "key4": "4esTFpTBYNjKAi4cPzPLsczmYgA5MGdWamZyTQEGtKR5s2QySK7heghGue3P8agLjumtbeoCprjpGqL1G4xpLzJj",
  "key5": "3V2ZLLszUPUy7Lk2FaKP7v1tvjhbR2sHD3xudSLtinjTogiTYxLk1JoYm5EjQ1M9Z2x4Qp62E31gT7vgu2Q1FXsK",
  "key6": "3FvTBK1eVCWS4dFzrZamGegjGGYGYwh3YgJxwq1ZLeg52Wv8SsEFTGRmuakXS7XYWo4FePcD9zfQ3eWnWaDScSeu",
  "key7": "52v7byXr6Au3X2XvVkicKRT4RJRtG8fHpZeQtBuRrJh7kUnEUHQfxT3x2R9vqbhz5Dp194SUCTjU44zfm8QoSyhh",
  "key8": "67mQS3eeE5rAbx3RhC2aMqxzY7aBXSPVGo8PSLcAkKnMYsYQNHHmpjN7Ud9GqPq86mFyhBNtpshEkPEx38XDZQiQ",
  "key9": "32yEGhBw4dNM9wc7rm8Wcf3HfmzVzYFBDL3Wn5RXWCYkHRn5SRBLc5KBSirQvj52ZSfJE46dqKUcYnuDxmt8XnrD",
  "key10": "5jmuY8RnaPhF5vf9hfhqFjk9fq3wSqKBhrkQs9X9A5iAQrJoWxHWVNjN5BywfyRbDvLaa2BmVLUVSyvK6bzdRh2J",
  "key11": "2BFcBjrcUcRFJGSXqZuXDPsJtFkapTHbuRJTnxbmQ1G2ZJNgUf9QuZvkUqwVfNe1pmX7wXM2nFm4sVYFnycYdTcw",
  "key12": "3JbJc5vs7AVHWm6s8iRQK3AMa8GcXiQSLXokskX1YYWWnzjHg9qAGRMVrXEUxCt62Wceo7uyvpqq4mMAWYYjPC9Q",
  "key13": "2bAzRs7E7ZWsSeuhVYkdbgMx5V8wTCx6pHMc8EK4uzoU4hiS2wwZ9hr6vr8BtsRqLvT8NZnQCpTfJatLKggK7mWf",
  "key14": "3n8tNYAwSeHgstrMgDzeLyTiKRG9soqZS2zeh6mCC1F1AMage86y9Bo4tmQXi8m3muDMxfCjfceA5rS5i38MDdZm",
  "key15": "26XZHFD4XqSGoe6cCmnQNAAoEvaFFNpKK6Hi4tPmDhNX1GRxjzTXHqzMv2JtSxFUQxs6aj3HrbXqRHybDdfByZqj",
  "key16": "2dxBLeMQiHaTM9e9H5oNmFrnoVcixyvmkdb1dra1Y2myLiB4YBN6T7Ujd4Fq5L27BdzeSWBh2QEPaP1HARKau8nw",
  "key17": "4u9QhqKLHNHoU99fYUjF6643eKhzk8AMDs5W5BZW7FB3xrLyC8sexWCnxwxPwfd7sWDcpwUDkLPyhRM4A22yus33",
  "key18": "4bXEYTLPyWzD4AzVvcS8dfQmwBfQfapUq9c3cJyTYikT464969mmTfPd5vwcWuFJxuY4iauymHKkQhcybbKwDt8t",
  "key19": "rd6aPWHfH7HtSd36QfSSPBAqR7DNTDL5tEoaVmf5YYJ8KwsUXM4esGaq3BE1MhMmwsjrYLETp3mi71YePnMz9WF",
  "key20": "4Rr2R3UPYYekgU5GkJpusy9yHzvpsvfVuRkzEhP9skCHemJAtXb2z9D9tMoDwsmadPEsx1vpGjHqkcCdtCsLbnn1",
  "key21": "4BoUQrt23MPPg5H4a7q8XgKbreUtR4Ui9D8FTagxXWQasVDHfLHd534ReZgZVn3c5TTUL5q1qz113Ft7KRNrBuxU",
  "key22": "5nC43wia1WmqGm5aFNhPQrkkeVLqCiHSSKTU3EoX6QUe58B1frSyzks5Sbcg68ZYiAAECxPqveRvWXh3UjonEtsC",
  "key23": "3pectbigyn36T8hCQoP4G2RjZtj7MBNZegrjCbsuhXxUL4T7KRsKY1Eq1zAoBWBLMG434CWBdba3LL1jhP3Q2hpU",
  "key24": "qvYmH8YUweCFrqhSvnZgNikUyNbMUA7qB8caTqr2WD7DE9wD1YAnWDbdfAcxZQ9i6dS7WWzPYvdo4kjuU3wD6bd",
  "key25": "KiFgbyhfzRD2E7Z7SMZEDbtxco9EJH1pxYeqYnsCHoWgWixG6LWSHWRiYn4Pd9WYGpZhaiH2XyGx5MxgtiLXSt7",
  "key26": "2xnYjN2bp9vunP7Fy3noVywKDV5wcRpB9KUuHBHWAW9YNV8vQxtCPQ61u5yhtsbZPgc6gNyY7AsJKbwfnwMTETFx",
  "key27": "5LZKLFGMfsV8hEHdRY7suYZeL7GGGruccAzjM7jABVtsYKpvsx17tqnWJzi1jYgZc5aSc2u4oQgMjduYXoqQQe3a",
  "key28": "5Bi9LpfrLJ8KPgBCuvVie18xwXSMQhqwnsJHvurrsqN8RYkaUULUDumzC7UMckxGa7qnB1VYExyaXEhGvN1TfVzH",
  "key29": "3xhrz1Q7kC4CEUYkKntwryvbszzndcyAGv8BPav1DHcdL6XvEvM3XA1PGC4W5VsQUPL81djrQt6tpDQroWjXdGxp",
  "key30": "3CVEWRokT7JbJciUQ63W9rLDhPiC5Ct1nwNaZYVqALhu1XF73rnXmhHjGYq9wRWjipfSog3dgVea9Gko29vaGpvE",
  "key31": "3We45ccunfSrJGFVfNjH64kTjU3728qmu9SKQuK8e7KAARsZUXrSjUndjFyR6nzLRhiggroMnTGo6HZ9q5Axt2T",
  "key32": "4HgC5WXfL12ttgX5k6cLAuszJk8GujemwdQa7VpUUi5HiymZiPaQbk3BxJ3Zz3wzbWhF8CYu3KXYgea2ERUxkov",
  "key33": "3Satoixf9h3jsS1yd4KRb8tUxA62WJJ5LNp3ayjrfu84HHVMrius3Dxo6bPcWxu7v39UUf25kra9Qk8iNroDY4iC",
  "key34": "2XBnbjuzF6EUsuRjh5jrVMrJeyp1bjtZwvf4ieQ4hDWeBQfRuFpC1p32tGCQsVvd4KG4tcYA78skigmVeikERxHr",
  "key35": "s5fh1G5JNtnRJ5BLQSp7HYi9xJq1Tiw1yEmE4VUHRur2An1WMknZmw7zQ5x3DNoT8Ry7dMaMWAP9rWHcqZKy2sY"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
