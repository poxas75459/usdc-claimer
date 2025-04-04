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
    "4JtLyLjQCApctJUHh1E2Ya6G6C5FS28wFWxqCFRDE1UxuNV77qLMcwcq44JjacM76LhJh47JEwUpDsJeV7KJdpgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BWC6FQCiUWMUDZwPkWFwBdgyejUxsQaQM6wZdvS27vE2w8s14mnzhF8cjkpU1Ryc2vh1Yc6kXpUveZmF9WtEgKk",
  "key1": "4JDLNcCtY2ec9Azjd8QkyRWPZc1Yo1UbWLppbu7yUevebXtjwJomBCz1qyPvbrMR4x9MkzCqpjVKrEnUXBbDEmjp",
  "key2": "2ckfac12WV6jCLmRo4Bu6y76sg4TJmXPC6jqYByn4N26dTSRmaBWKGJSHNBSq83ZhovAF2UuGjiUPVkACyomhifV",
  "key3": "5ExNhsPR9LaEhhiEPVsVQYb3qYbNrnrnfhp9QX4RUPWYEF976ThjgZejEdZjZPb6ZnL4yWDC3yCyx3C3SLAszS4D",
  "key4": "3xutmyTfRa5cFSGMPGWz8qsKLLb31cqvnBvTX6JfRM4du8qrGVGFxZPeDcxFyvCVevXf2Tv4eSGGiKAnHvMnhntx",
  "key5": "4ooDDcfjhpVU7fghUNczjMAFxEoLZTgN9TrXzvhLR5BPBiJj5wJpS5kjmBzFmYzCu7bh2WXqs74gQMF753tbSMCh",
  "key6": "3dDaStkMiBy95oY7XjyrvkCYki3LKhbBKBWsAUbLAevSq3EXPwZLL1EDXt8NQgSoLg2Tu5pSjh5wd88M81Vec9P9",
  "key7": "38tyo2N6HLTVzRrdeCfT1Q3kS4HmzaTvhhrVjFZMSLCPrF4ZdgRbhRLizMjBHb6pAxWLNzWUCquN8DSx45T5zpZN",
  "key8": "2uJkQdaUN8cQ9CYLCm6pfq9LKZ3uYsVaXufMPVd2PcXuQ5p8KGD4oePwvn7yspA2w8DttUdKB6L2tvZb3CgGjz4T",
  "key9": "cCkyuwMbEdHKLeuKvixPgHbMJ4KczVL3B89hj7TGRuCbMFxtRLSjwvAKy2m9ssrrmxA85Dcr9ANeGuNcQU6YstN",
  "key10": "4HG4XQaTEZJJteMCFCu2c1iL3kZgHMsPAoPK1xt6rgBBevh7tTbc9rwgsnBoqVFgkGAmNoPjNDUNVibtF1JGf4Ww",
  "key11": "5wL1wjD9VDYrhLmnamTF8dvsBZhxgDUocwgVhbF2b1SaLtwpd1jpXF7JCWxdLJmu1eDkB2cuZiHPDp8mFrpDDKFk",
  "key12": "2mcoiTf8C358nQMFQB8j5AHwwALSw7T8xWAMBttH9Q8QRavYw9UFqegMJAiCvP4wWdp4TBvhjxxHqJiyT5J7WAP3",
  "key13": "4n3ia6PKXQnZKuUuuTHc3jd3NnoK8CvR8AWCY3sEEhsmQ4gzNYuThnEkCsZ1FStDmVNcwztSbfWgnA1r6kiYJhT3",
  "key14": "2y65xYoZAX1sptTJ3L3RTHNJGvHZeaXzfxCBNBjMGTTk6fuenqTXrxyzNNLgnYcyU2UhwnsT1QLairfTLPhYoRqN",
  "key15": "3UTdBZTTGy94kGMfN4FE7vd8MDoT9phigRtL7es9n7KRKQrDkaELDY5CKvFudb11wgAARWCsK63UUbHUYB7JCRVw",
  "key16": "2ziqQNY6h5f3nvRLnhcwYpkJfw4CaMxfmst2YHgBbW8tAjcGYjnw4KHeKB7MdD2perFABKBwviwe4tz5UF9FSFpm",
  "key17": "2H73ZKVTFMmrNjavfEMbAg2zNQT7eUii46P485oP2LAYa2QvpXoPTJWJkLBcoSyB7UiiC8wZcET8ssiuiyuXpieG",
  "key18": "5ogp1Pabg3rVbtubebYwJXXAaLxU2KnhSP54BLDeRVWVpQ3SUS3FiaFsNQz7ERv4GE7x8J8gpNEbCRreF9KvbmiB",
  "key19": "FxJVNM5Hd45hPLFM1PvqVRuhmEvBa5ie7WBAqBK8hnXwveFxiLMWsah7ScprCU3jtWeoKRwzrg3USL9DTtVP9jF",
  "key20": "2zdGHvD25kpwuxXv7bqgX3mCAzwukbTsa4nhe3detqp9mL9QT6oRqDqiGdfGEKDxhu8mceXJBwmb49G2T7nqEd8r",
  "key21": "4gA56gFgUBBs79n4WyMSA2zDhvqea8164vpBCpWBW7wgjpf1mhWiP7r3NmYJ5nVuv4w2waywQshVDeXMNrszZ9FE",
  "key22": "5mM5aY2ayF639QCycjruBXAUxQkpxWSsduMNvHegbqJAtmakqDiCmW3rwRoxWAVcNvCozPmZjchPcspAE1RFY2Ws",
  "key23": "5zPEkCmwSiZDsJRo5JRWgZkzM4MzhGCdLFW9bUXwwfeRmMjBtmriC8r6Ga8FsxZzX94jPE5ACr6QNCf9E4dzq558",
  "key24": "ttmA81gFfoTDC9TEE6LoAkwVWQ7jdHpCww1RwqKndHUXCZzDwBpx6q6wcYAgLACdDFEhiTL2VT4pR2q1wmEAXLS",
  "key25": "3F6iqUbayAbYRUCAzQursFKuwPEqo7PeVSvqd4N7i2yvd8Sc4xLiJa9jYWr1vZn9iHgA68kkYu1ZxVPEwYFiU3Hc",
  "key26": "4WYzrp6RPKNww5NJBp94hqf1svqLV4gNVa7zLvFpokdz3vXTajz39wkRNv3S4oFoWDK6J3kYthU9ZQcixomEGeAw",
  "key27": "2BJXgohKJDmNDQot4BTgMcsnZsFzcfSHDrVBRAyVq1Jx2PVCaMZo4Vgi9imEYs1VHBxFKPaRzGLnkUoBszBLQofi",
  "key28": "3pradYBsP9FFr3EeVruFYv1SPTSaPdxkFNUPukSXB9rM2ZxdbtSyoX97F4tXUrV4ifcN3NyuU9bbZBMuMMnh2AFJ",
  "key29": "2f8pJHDt7Xmq5dhX42bMwLY91qHycxXX26UVUmEgp5d2muR4syVV3sicqVtFamtNB69LYCTqKgAq5mdWbHah1n7Y",
  "key30": "3ZshzdGBCnHR8wr9TuTj3StUPtZB1VjAZCM6mjboVkihiBAqrgqQJZWZpdgP2My3JV7WK8PcPFNxBuZmDVGFdoh2",
  "key31": "C5SftRKYmFQrpEbrhrT94NspsLnDWQxLpFMgdWi8twU3xJ2RSquuy4FQfBpboevwoBQozfsyDdL6rsZC7zgMxLB",
  "key32": "VKhCsMTud1LUVgD4axE8E3Kt7msCDg5K3CKgzEmsc6t7j7U9BAkfEQ7ghynuyY92vMQJyeZF3s1xAVcFLHEuPd8",
  "key33": "5UuBmr7BX2Xnok9aq24cWcE7mBZW8Y1PP4K27g73tEMJ2S7TkSFnfEFKKV5yvoRMxJ6EKar1oDKoz68pFjRrjQwa",
  "key34": "3ssxhLPHUNFu7sqNZsvfdstCdbqPviGapoaV8LiG9RRArqKQQ1wdfXBMRTu32fbQaWzPGhAC1GG1x5XjVUxLrsoN",
  "key35": "3u41Kbt875Qnu4Fy1RiTsev4EmpyK4z7iWXHxpxdLyFkEQG3M169YJc5yw5JhawZXG2D4r8idnQmpJ3tbS8q7DtV",
  "key36": "auD9TfBsRA4zqeBYqorWmM87mKz6cudZ3K51bvF8jPM1UKvrv5ieEsDJ2TzSSLQycEVE3XvTfs13FxhMePefrXJ",
  "key37": "62DgT4h6uXy68u7jHA7LW4tDRR24nMCrHC3CmGrcMmyE5hx3UtqLgKKCZmDvWr3cRGaKyB4zK2zyTZ1yrVVMDJ3y",
  "key38": "3suz6NReRafxegVeRdqSXEVhqDnz9gvwxSzqwK1E2tWPJK8ebpPRJR3Kh13bcyZWXxYrp8ERBuh1Bh6z9pFac2ou",
  "key39": "xqRsPBHyWzzhXVa7tyov9iapPSzRyBbQqTBRHfx8AQyEkHb5psQgaLiyhkf67hdRWstzkjYjaAsthhv9uzDsu8m",
  "key40": "4BH9H8r7hTnVwWAZKrGCLBB452b9Nu6sDBiKNgP73agkiof6CxurmbNegVWN5PWPvx8dq3E9PWLtfz1mRUWxDk6u",
  "key41": "4B1ggwCch3MXxk524HVf6CzFD8Kxq8RGtFBvyPYqJtZyufH6HTBCj6qNX43LC5SwRzC7Dx2b8PT37KVv1gvKytDE",
  "key42": "4f1zGf49gwPzEmRDSzWMYjTGPXTCpf4dAWv8vEJC8C8rHc8TxuyrwaiFbTeFK6vTDusgynH4snS2NspK6QbZcZ37",
  "key43": "3mA1AF4NUj9zsrk1NN9sQvMARdAVXDryD6JCaXEn7Bc1xb7mEfWaHhSL9TayEpLxKpPK31ew7L28MXxj6BVxUoF5",
  "key44": "5ALx6KBhREf6X5qH2zqwegGV2fSSjZoCTzxzHpXZjNRU5AQQqBSynWRRzCXUK5SD8PtvdYo6EgYNUM6w98tX8mcP",
  "key45": "2jMC1zn3fp4NJVCKaWL9DiUKjwoR4DchZT6CpeZLTsfmpBidTTXHS4j7kyKdLpXuyAd3Fh9uEqVmXy583cyVagsh",
  "key46": "5HC7bFiT5SVTvcAjUUgEMjtg7HR2CgJuBUs1q5QpHK4r8JPH1SDnE4JUS6ojRiHr5Resmt2KgE9JTKSLtp3Pxdvd"
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
