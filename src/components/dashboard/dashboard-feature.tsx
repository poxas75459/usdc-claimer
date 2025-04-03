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
    "3qT8bRa2eTKte4HoQWL7ucRnvvnB4V279C82k3wnhMwLy1QcUQMbPeb72CroBinUAEJpWnA7FLk7MmGyXBaqUn3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ja6ssRQwx7ofnjoPb76VqHWyhJho6rFsYLaSZe6NLy34Dtq4BuKC6LrTERLscXmYTZMJVfpPmcSb4F6hLYiJPQp",
  "key1": "4K8c8zZqBgW5aAaEFCnqCVuRCZoVdAo23nR3pnXqJR71SgFF4DFHJYBCYkmDk62PUP6hSKpcGpjrb6SL7CEqFF4u",
  "key2": "33HY9y9JDp35ftjUqddw5gUSTRTmrwsWtiSxh2ySA8sQB5BUdBHiDpGt6mGyBzvhKBBtH2XXBS1e8WyYjsJuLJDV",
  "key3": "2xKbk1XttGWtDcefrhyg68qsRg9iSwkTh2F87ycC2yJHyzKxyakvLUDcuaazFWxzy8L3LukACdE4A7iz2f6Xx1cm",
  "key4": "3xr6HHKpEbr7tqFSy9ekMZpuqemF4KgePRL83UAg8i83ueanR8hUUep1p8hAdiVVAYmBE5zdhN51yhnJxrcaEBzB",
  "key5": "4zMxwMLj9tTxTDoCdCStwTD4fKZfeq6PyBiUSdxP3cakyhRm1Cy1Pz7XiXDWF98MHeXAskocPWMSH4oZ63WYovW5",
  "key6": "32miBaFrn5dEpmTUyLKQU9EFvdkTc1ifSMKWyDQmxWqvaJB3Gipr3WwP1Uh35ubujmQD5MHfrKZbXFAjANbkTVry",
  "key7": "3QnRqWMdKrfsb893Rf9Cqr9y2XBkJK7mo6SYHCccewCQJnyTcexTiaHxYUjdTsbaTjVKZ46Jeo5XqprsjNP2vRS5",
  "key8": "3z8g4i5oqtYTotLyfiqND3e64QZsoEmMrRfBSzLmwyjBqKaiBC6kxxQ996iGjFGLCKRTP84vyhHtg5j7p95dZykc",
  "key9": "478Cx2Zz4u6hiZsrF9Cq5gY96WWMYRzDJkNGUSTfWGRptNt291EurjMSYmSXq641pfCiKE998q6N4en8QZ3mUkFR",
  "key10": "rcj3r7db5ds58rXKze6RykZFaSktgWqqZhJhB2jYRoKtR6MEpATfsZypasTT9qzefEBybdYVc9yi6ivHxPbdkqz",
  "key11": "2hHxYQEzUq1TmdMatXiqBJQuavCro8tBumKp11HezYPkXEsK8BT8d8xbSqv5MfdbS18bUK9g4FxszwRDQGr6o9kv",
  "key12": "TmQrTYM6p6S1AYNB8FuPUXmrvawBVcTbZ8sjHwyp4QTydQjUcp2frXeew1ZtVntquCjvzjecUjkNoJZcQHZ9rKX",
  "key13": "2yWuTWDyyUkieL2qAxwizGuykB7NXJJU294s9KU581Q82d4zqgHYAKs7fLWrgWgqTUKnVTpiuNmNzBmhgjfUW8Jy",
  "key14": "1a1VYBVh7Q3hpqDYt3TS4PCVpLQnjsmJViZYP5zVRzJwzVLjd97sEbJ4Gv36TABHtgZc3NF9ZCN2tYkJkJ168bS",
  "key15": "2iREmJiGeuNevVwjrScnqJPkJR8rQziSrQczG95NV5aS1xcyFmTSzyAJwyU9akiaQ6r9vjYe9k9VWrt6ESSvu77L",
  "key16": "45EQK6edRoHTjRsDrhWhsh7wLMVXmFU2y3PERtf57QkwXwpJ19kuJcpqgnxzfRVS6MhYZkd4no2QyipTXqHg3ZmJ",
  "key17": "41pZeuA6XbQnk9WiXWUYL5PtFQdswe8mHmLCuxAj5X6GofLDnXzffk4shtcooiHEiS3fuuNMoHPnm2Bs32ks24hF",
  "key18": "5ptjAQB7Cxd1iqoAWCbyjYCJvxKFDrWQZwNFNZE6kasuarFpEWUHyaEtGHfdJmfa2tTy2abrtrFEGFNYRofNnYcy",
  "key19": "5XQ8UbvfD97w1GvQhmLF3DPE2HRsArMsKdB33PhpztAbrV9GomM7WUAoBKY9DpTgUQTPRNpBKNVoqdVQYwN9seea",
  "key20": "5vXPnY53Mzk65Uyj6vi4LXmCQuxaLQ5kskkMDuTzS6CG73cR7KxEMs5sTokeXhZRo4jaMUuMauegJaj71FPxr8Uc",
  "key21": "3QBjNMPkLdJqG2AbH43ubMbabhykTbzrk1B9v6k8ozaET2CbYRRRYLVFez5go4tC5koH4zav2nmwVbNRthY2Ft6Z",
  "key22": "2xrSNQSao8sXJjHBKThuT3wzRtVZqphEp2zXfxkRFwesJJvzxKGgb1tYAARk8xSp4fBrcakzfZhYuNhWN2EJsiS7",
  "key23": "3YukWHgdkNRmESZpRSp6Yf7E7pTzB4vxieLg54YcLFRvfMVthatCx6cwLaexGqnQUJ1BxhzNFJzmA5FMXHhVdniw",
  "key24": "4dU9UxmJMgcr8RBKASXf4hXTeoaXvAWP1Smi7E1Cqzj1tRSPskcioaU3Yv7yUAun6TR7itTSqWv6xa1KijtQJ39V",
  "key25": "3p6Ta2YMiCj2HZbXb6X2YNxqP6yhJJ6kRCFNJdmkQLvcMpzBrgwLAr1aVg8UtbNwcUzWe21Pbp72sWJvW8qNcqVj",
  "key26": "5SGz3VWGMVX2JtV7JfW53LWoPkwC9e1NzJh3HTejky8dTDZbJ8b17q8xFgiP2jnmkHwGZD4HnwEqjuhpxhrpkASj",
  "key27": "5P4X4xwkKFUt6U9E1SiN1h8WhQyy2k2tPRW8sXVcv8WgUYjFobk1pSpP6kx6QLg9HCupqTKFodUMiheJVmbjb2xb",
  "key28": "37X5gx9HJD1iihShDo8foRQvupn1P1KAVJQ1fcufPqFUa8gbTPsQj2PXyEBUw6R6vETQUJ5Kn19JaQ4zUfN4qcJr",
  "key29": "3zwzJkhYRd4nqbEtAH8dZBo3Ptfkh5FoamWjZQTbP9VSRM9oQ1wPJEpXRkCyKJ8z4sJeWEx5KhxfoCY8XnmFLNPd",
  "key30": "4x7M1jLF5CvaH7ch1st5RPMRJFtcVRPLJ1Ycf5tqMxvY8i5De8TzArKsEt881z4uJMLqJaXaqvUsDZ2RcbnuhdMt",
  "key31": "3U5E5Ct2aRzJjkkSvjDy6mNJcBPtFEJcFnwiXDQer5evjsACDZXiw6vb2HyMCEpBuJmHSvP25V5oxynXfK6CtvR4",
  "key32": "f32T8Mxa5rtqAMH1J5Wq6naGXkh6wTKsRWcdy3xBym52YKrGZufXosjudwje3ffoCdG3G4Kw28MmUDq5AA7egtw",
  "key33": "5yCyRyk2xGbXBz8gGjsSeqZQG5VmBwbQRqueEZ81zz6tGaZcb38AuEoxqvm2t1gSYtMHMXek1kUP5WyBkVH8VKwf",
  "key34": "3YJXLTkCmBV7dcaYWsnnZGN8DjHiEXTMd31sSeTwcQR4PgAvXmmPi1Li2YtXtYQxdbaV4WFz8sG7VNo44sWCJT3g",
  "key35": "zzzcMjKfr5g3HoQbVerXVuGpCrDwzh4QS5yEuH66j6Uts575U4UiT4tQ62bzPUMa3yfNhxAXR6xXFDwo2LvpUhV",
  "key36": "5Yw9aCUpfAWgNcrrikwudDCVta7c7aCnTT71fmHo5ig83SR44RPpDcWhHuYLZa2FDQSdL8SbJN3eeg2HydvkMmex",
  "key37": "55Jk3fuoGM328AbXMs73yapumxJD5ZBCZJv3PfuNtjwdWAiqpy1ixeR5avZY2qHsKpnPjvMad7wNNDj3FjiFvSVg",
  "key38": "a7vBdswCtJ1V6aVYgDBhogDxzhcGGz4BVN1rWGxjBk68M2seT8S6q4ZNMu3v75RaexPHo4hqqbHS9vfvLxdoQRB",
  "key39": "YXJRieVT2HBU1Uc3DRfJjv83748KGnK4WmJSwVdYJvmfBDBVNXjruxPw6DBWz81EW9bdAF4VRGk4HbGSHRcCLag"
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
