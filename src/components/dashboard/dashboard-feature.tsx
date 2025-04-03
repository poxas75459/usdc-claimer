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
    "3RycdyJMDWEmQwmkUqpNPtWRk5P61YipPEpvrjYwkYCzPrRGja2wrpcb98FC84pwaVCSgGWyU5X2PrRRRs2o6xKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v4aVRT5MEUmmJEufz3dwkKvT82X8AXZyexrFypBsUMQVh7jEnM5f12AMoG3EkhvPxDjEBiNhqjMWQQREGJfMN46",
  "key1": "5P4fYk213PBxUjvJ8Nggvo8ki6Xmh96tP4dBAWMDL9H8iFF9ExYACyMCoe6zm79GyeMy1qeZrFtVEGGKxj5dThLy",
  "key2": "4NGJ4SC7WJm9kBCFcRqQKVrYvWYsDYjQdcEUCynfjqy4SEMdXuvjq9MokPM9UrSXGeuV2FPiQC9we4eXqGziZan9",
  "key3": "gypZB8PsH2GH2J9EpxymL6nUxCy9P76kak6TZuZHqB75yKasti7ZcXLCThSvLfToovmr8s2zMobyh4Am9iyLrAC",
  "key4": "2XQ9qgoRYmbEoq34jedRoVyE91md7G1UkLeDR82VeNTw6AkW92dt6FPyW4TeV5H2Gy2bwsWHv127PDesVEGbQoYN",
  "key5": "f8wyPPwEaS9jEEdj7cqMKUDUVs99sTmEtv5L8dcxb2WyvVx61eKP5kcMxYzAnwg1UJhtx63G5brx1VpMQUPeFAu",
  "key6": "5rTJNHw4eTawFwZtYxAYtUWva3NpdQeieaQD8tV1aazJhp3JAcWha6judhBzMswxZ1MjvkSWfdXvW5VkrnCMTeSP",
  "key7": "RDBuL2Jq5T7pUvrVeRpxboyivV6G1ckv7UhDFKvmebduNe4sALyJ8aQm8h3R1TYewuYqS9tyaMC5YQ4WAeeMqZq",
  "key8": "2PNmb6gxJXUy89udYmZjq2pbAFo7AgebXrNsHabcmdS81wST3VWxY1QFZdDJYbp5YWDCbzJ4WcW33LPscUGVvgRq",
  "key9": "dbFLY3SWjmThLAwmKaeFFSKQcGDDJkNdYDw4Ee86j1iV9BiVe8dK2mgw1r6jZkjWernEaYNjZkwKNSx77iiDfvg",
  "key10": "49nQWKxo26utpJEHnqNnmvHpcrRqM2bQiUjuBYp15UxYqcvziG8fvjsxG7dei7BngJwkbtUf7GUPF6gjuZMwsUM",
  "key11": "3ZLH6wBrsXBLQCHhr1qPWUBapvZ2VWQhBvmW4zqX9QiBtk91bTzAJmJz2psizywH7HuHk8rGJpUDYUZRX7bMcAze",
  "key12": "4H4A3fgBTotpsxz2G3qUGqDgTULAyCxJKeGeEpVmpji2Ukeit97VMFnEhwRBZzUYqSLfELnkte2gr7mqivQkpLfi",
  "key13": "3GNrXAez5mXesf1XPzCwsdnSu2t13JS7g6aXTxKQiYf3GBvR2uYDXRJRXPR9eVrr2SpwnHWpaAW1z1Efa3cHDzGs",
  "key14": "4CS3myKKzL6RNgHGAw1fmMYyB1GQYX5xiyo3ynu1fK7eSXK9zoSKxaxr2Nv6D3JcaWn1BFoFMcH5HVqYHrwqutef",
  "key15": "54RzGV7Gb9oXYYZyxTQu5Fdm1HV4gEaapGJ67EEFyMA1CezSKziuXfNugUREbqNzTgLQmikADrcFeRuYSoa5uL4H",
  "key16": "2JGDc4mvKhT3JrtwDCqKMA3KEeoqgqZcTjYdfmkEoPa9kFs9Ma3GTpaqpGyNNGuSRJqmCtm8AsYsKR3GNyCEFPkb",
  "key17": "5UGHCrbwNS1Pq16bnnSGm9xJmpCZmerHPacR2SA3S1uABE9kvvLMtwxpCTQAzr64x5vZ4n2gr2YRcCzmYwTasXm7",
  "key18": "37YxYc2HdSgb5zCTQwr6F4kppR8tr3BD54arCnh1jXYB8VnfgQ7oyA71doZzg4fAbsYckRdmKJwSuNPsafL4Hams",
  "key19": "57os2nb8D8rqkVcEb2x7WHjMoePx6gmMkVj4nQUgvgwiFKjw9h4uCfV5dUS6aPBzjUomHSWrWcqffhN24WBnY3wf",
  "key20": "wzQXbakgEF76NxcngHkiHh2ECs1JfuaRe9rAP8YF6SufstFYQgY2APqWtpNm4QJ9LCPDbLkY55pkyBKFs8cQu3F",
  "key21": "5yiaM3xzEWfNNWaiC93aLjuYUN5Vkin5fPatfY1ENWxsuFLf1zmoAJzXXMELX9AgDd8G52LrNQ6EFqpRD2oKWDER",
  "key22": "dd7pMoQJFnVoymcu2oYLs62wo9wWNd2Txq9XYpR8nqxpRVdL3rcJoYNfvGdJHmxVYa9jQETZ5jJaMEh73aKQ7Zw",
  "key23": "TsgwKp8djnG5vXwbC3gAfQ44DDe9VcKygZ48HZ21edVkR2ZLeDZH4LupemJsVhBuk16TkWjq5zEkyqT2XKWLZKd",
  "key24": "534AnqPeyq8NqFbmshxR74dauguJevZhiYKPfVZz98CVo3VYFYVxW5qyjyJMQmxHdaXtXZJL6qLe8A2iWK5m6Xa",
  "key25": "3GaY8oZkcVcuiQCCTJ3Pfc9Zr4nCarcqQwpeuStPik98UaxzCuXboismEoe5Bqr39ZHpmz9q8oqZ5QHkKb8oTrMr",
  "key26": "8Udkbz3YZ35ME2XeasW9jt6ZdRduhUeKHwXWJxdeNMsNvYXNgMUs2z5SXaPSTjV8CodeGeZeYZZJLB8JSrq6Zha",
  "key27": "pPhbKVpbMvWPjLBZC14TDew8bvzJsJukg5kcm8ej3xNugAn8idYPn6V672vwe61YzEZtQsPvJSefYcMjGyyHXJp",
  "key28": "2J6tm2EGcwWG4ipdpzXkAM9Mi5EjecrjUNJNWw9ajUECzeYkxQ8J7ik2aecfNFd8idpnFrrcVPvEKU2hYApZgRU6",
  "key29": "24fCyFT8g8R7WwoCtaiibDFQ9dS4BphZjPBSob4SmkVfgcnj2FMkk8AQBPLoxCXJcmz9bx6VXbuNQRopqU3VSwqE",
  "key30": "4hi238xB2hbC2weUKZz9t2W4d8Y3kpvWQyBvoZ43PjLCHuSgv8S6jo8UZwteTGadGZNF2FeTQBXbXgSYWPbAhVbL",
  "key31": "2jGwcsGNHM5LVdyMLpdjBRtvx7VsJSWtS9tCHr54JMzm8qpf2ADZwUh9PCdq5WKD9hBY6377GJo8ayod8Rti2DtF",
  "key32": "2sQQdg8hLGNTodxD8FWrtmBv5s7SKQLKDrwfz4TFTu7cqJKEuNx7rsDVmPx8a3zh1rwbG7ywMRBrfii7mcGWYS1x",
  "key33": "2NMQ2Cs4gS6LWK2DAiZkw9oCYxRSEmWtiZMCRKg8RTCrykc8hr31xnTNvRCj5eYKbEtaShFrZLnQKCteFhJkvxLu",
  "key34": "3TMap7fsoCT2ZBA6HLdLs7GQJ9MWhCZUraNgBvLoXFSceEK2oZXT9CsjPqY614gDTqDvFoju5pjtQkgiWQiekMUR",
  "key35": "3AwTeeCY2gmdw6rovRgqaQyaTBAdf3rppXYaYzEm4PBhYVw7aFpBFFE1XmNQ513UQdB2K7qCWyhzZAdfV1H4Jrf3",
  "key36": "3sYQAaF6BrT87ExkbqniZMygMUJrgNDFhXFBCW787MrNUvgf5GhnkAJMPLSMQETUMy6thNh4Y2XkxzMi4xeEuGgK",
  "key37": "2m9hdPYAVyiFvkhFuvF9qns9nLxmkDZSw5qmx4VaoJtiSVV1xkCGwgWq8Vh6gSpxbvStuFFeA8thzrkJTTgP1a1g",
  "key38": "5z8otRd2nAq5Dgk4rBNv8HbwSDErScrcKzw7LueEmSa5y77DxPRK2Gkm6pWS1jVBVZMHhfxU5k7jic9sPbS25RQk",
  "key39": "4Y4krH7YR7Fd2tL6H9X6TkiL31c7piqSQThYktoRwcvsmR9ELbtZpHqanHUMRgYECqmYxYE1VjtTmLrziZqq2hQ4",
  "key40": "3GKozwfXQu85jwFcUbhcCbiC1Hy2C6RGgtd6jmzCvya9Z3Y3YC4hjKDTaQzkRzjfxfqVwq5nTqhEckVTtAht4KtD",
  "key41": "5v5QZyeHbth7pc644VsX49XvkURZJtBTJzN6Sd1uAGSix1uky4Hv3SVzioWQLMTP8o15jHWNsaGEFSMGFBiQVXsZ",
  "key42": "3GCWJiFuyzskY98aF7KHWsNyqa43kcBGUinHY23zBQX7FyXVfCByvZ4tXACGbAiB16yi4AEq3xHhNuzxbjm4Vuq3",
  "key43": "5nFBCPfAG1hGUprLCVLTj5ZXS7Zm5AenkwiSifCCLo57bW8E29x8TyF84vTe2wqJ7JCiWqrQBVXiTK6gcqPMX1fo",
  "key44": "44sPxDmacWCiSW75zJV5eL4aWoQTSvremp1KbrhFnceG8wR55fXx5wBKhJqDqnZRcvNUTuqN2x4pTNz4PuYuaQS5",
  "key45": "V1egMfHCL7HFxkCrRkLtXuMWnhbm1xMcALSjbsd1zyqQ8Qrtw8iCni5zDh9gHK8bewEAnCQhHGAkm4xW9MTJbMz",
  "key46": "2bYyHBqZRuDidKkbPa1ms41CgW1DiZM3LaDJ6wuUqeyqvZXZ1WV6htveQZLYKfeSgUWPy61H4pQf2qMsBBKapfMm",
  "key47": "4N3wxa9mPwNJ21D2rRy7UVLaUYCyDAt6tdBZeh87T31V389VvUCFAU2r1AAsZjWcTTitfgdrZYNwTxPMskzQzSH8",
  "key48": "4ugHpEuoQvvvUj6k2oGpunPLfBoRNPqFwxnGAxwqNeF9wpfAvQxjbmyHENByi5RK8brsgJK2HfpYQDSCqNTbshBU",
  "key49": "4B4TM54AB3469KE5JLiXPrXXRdPMa9ywtYH4MUkQVMezaRD1CRL3CJsPx5yqJ1yJzf2ueASu6vT56NKpT8MKMFx6"
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
