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
    "3Z4qUgmpoFgNNUohXjKdXb3bGboirLxLaXpJ7Qpj4A9qQ8uysFnATWsz8H88dcEPifPt9eskwKVN1YYT6eiVNi6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYSZsoUKgB6VexJgHeCHVfmGXRkLWWu9CSLFxugv6fEEiCnJ1qFa9UX6pfT9kfsYzakqzu5vcG4QGewwkF3ZDKM",
  "key1": "4pqZ3vooLeC52vecUmRyx7TvkVyEz1CboR8Q9vxj9REr9bHgdQWXwJ6utAbgDrTktTsQZ6HuUZxkvJ4mqKMFTvc3",
  "key2": "4wuqrcy684REEXSLQnh8QtXUQtZCx8mtMRm3qh1oBirp7cgJWVUi9FE9n7MiGopj8y5u7NN21VUzaErECgxYVR5d",
  "key3": "25bfXoMoYhQA8E5UnRKnfVWZ6n8JWDxVYn7sXpqcM7WMGhDDetiSBdCQq64ET6Ki87kKfUk9bjHGCXUtYc49qYmK",
  "key4": "Kz13xZQB66n8CgJ7gFoQc8BcdAFoxpvYwZn3gbUsmB9nCac8x43GQcDp1fAkknRw5oQfYXUaoNKKmxZT5zR8LTk",
  "key5": "47GAYVCYEyh3BrqP6qZ7f7X5TLg4VYm1ANf9VAQgezSitFPcn4dTeAF5PQt1nu1pjUsC9k6Si4q19nrE561JFCN5",
  "key6": "3Ep1oRSK62dFPcXkwFZ3Q5T94VasBR8AUP9RCT1M4nrfo44jsDGE78YJK1Jsrcp9aWoccrPhoLfcdnemRrFXySer",
  "key7": "33ceYTg8hbDFpFb1zG8s86hByg5Bq6jUTYbzgrWfeQeHzAhv3DYphvAnAZjuLkwY4EomJLYLWq5t9bB757NnHR3y",
  "key8": "hzG4cR2F94f9uvi8n1vjjKJcX13hpdLpFzPPRoU2ejZ1sHErzbqKrnZaCxxWv9boXhWmL94jQUX1BPom891PdfZ",
  "key9": "4LHdWkBtzC7ixDShyVc3ExY8wECGw5apMwna2Kr73KgEoNTWCz5Keif58m4EZFhhHrebm3yfd24ybyUtti48PSjm",
  "key10": "444RacymT3RNccryZuATTG11jkojvt59js3rtZDz2vTrLVmKiwdD3aZZ3JNbgX75ERCVcHP66L6GMJL6abYoD5ND",
  "key11": "2fWpEEAvd68zfvc71uz3pV4bSgSk1UZaDHjACTeaFsnEW4quunXPMkegy2o15o6ygizVCkoEXoeCorNMdsyWfysP",
  "key12": "2bRmCddDCLwPvb9edBVYNC3di9UWS78s3p9CeGJFNGkUwnprV1MDZtE385hL2DDt5mRpEGasdTxSHt7yBrbNnbdZ",
  "key13": "dGSnYTfzuPaZLNdmpKwUrwMch48CQMHeVTMURhhAjycP9rNsYqQCv3DvZtkrr3Uja9aopALP5n5M4pBSuV5CoJx",
  "key14": "3afkCyG6oGLd9AiPaPcTUxuNih8zqYnV3Au5p286LRsAYyhzDAk1Zoh5gPaJL5foqWJDdFu9a6Af5sdVkCJvbTdJ",
  "key15": "2kzpbRRJs9j81fYqaPhWE6qUuo8AkvRKngWzWYSRXeFeSuU6uWdnrXDbezpaZmx3SPsdnF4H6mjgnrJsFCT1mMGD",
  "key16": "5v5m61pjH1QRzNeEFH8Xv4r8W9jEUvoRSQvEewdouKJF4Sj1W9AEvJTv5oaEtXkDWfbtxEKjRLErfQqFTcTZh3dQ",
  "key17": "Vo4wsnjQTG8vShhDGzEC75ZSwJrfe5eJszoVSfh2A1SdMuA8YiqRVVS1sHxb9J5jS52gVXVSnuedfDZ3wPHSEsN",
  "key18": "59Hs39rVnLsF8Xk5TaSKHhT3c37EtJaDBM4zYQnA8PBrwF7V3dYgdrDcLGCTtNyNdCdjGeFCMktUhUN62HMuiNo5",
  "key19": "4YaiL4C3ZRxCEr2ov8jNb2eJ9dCSGgGYqPd92ouW61ctGxwE4Tk8GmVGE3okrSRmVGviC6Cw33NmGw6BaeSfppwt",
  "key20": "87nPuYMmT5H3CPHeadMKmKcWoc2F2HPnR8FFESUjL5yBGx9AveD67cSG4Wtid8x8AfknDBMwP7xTcCcRPx2sh2F",
  "key21": "Pv7AfptDrzuRwgRpwupiyX5tF2xEbC5soZ4Fu2BzF6LMyYyiaV1ZTMwY5iZoagkF7bPtZsCioWgKp3KJbySTdHs",
  "key22": "2DeiAu7nMBRbvMnfod5n4eF9AcpMBu4ETDCv24xJQd8v2s8rpxX96pcmseXsqQCTF4qhY89rxFTdrTZUC6LqHdcj",
  "key23": "5taiZuLGGmwZ9LXUgDDkUSgkXNakF7uZ1p7utBmCdjUsWgJb7pv9sKK4uAzqHwrGaJ2Rs4ochyFrMAuHte8MD9xm",
  "key24": "35URJ7XF7zWCu6qyDQfLweTuZ3BmNmQrABKzkcindo5RfuxDJAVsC31aDTLuz398jLLgHwFTSWsj28E42E1zrmXi",
  "key25": "3o98nuNfsyFxY2TnaLnszqzMQyHcXTuxgj6GC9Uz6Cu6JHCdKBm69JtJRKTvmhGuQbQfPc8vZuz5hQdwWiiFsySb",
  "key26": "3ZA2YVNTqgAgFkrayre9AD34EkAfzLJRhaqzw89WzetcshcYaD2JMn1jVnEkLKjMUevDeCEwXL5n1iFs8RnnBtke",
  "key27": "5qnVQxWtXoc7QGyJJ5Zy2bnxZ6Y3oLGsc6dXz7nynbSxvToxCcZs9Ubf9rQCSQJ6bKn5vAHUdgxBJgZpmSRkc2yg",
  "key28": "5WoMvXzgWtBuDBvjAgfc7oWWJbZkvsL8fFzsj4jMy61ukbxohzjqkgPcPFowmEhyNXz8LiFc29mNpMnEDZo5pGza",
  "key29": "5UAUkT3zfnKi7Yu122rkSpYbuw5Nkx2gZUUyk5zDTX5EBZy8K1eJe9A5rgeAdMUVVQ8Fr9Bt3pHECKmKkEFub27s",
  "key30": "5o26Lz6w32jYWVXCc4QrZs8PwBBZ1x2jGYNQEVZsvAQA37hTfwCcgbZwVL9DWbXDyQWcnG7xpozgFYeRyJtbjFUh",
  "key31": "4sWYSS95J2KcwmHRpbLsxeXM5ApdLgSFy5kCBFPmjvxh1wWt7rop9udw3yXnZ8Hpf4kQ9MqsWieFDr4VXMQZ17ft",
  "key32": "3h2oVrkGN2BG2kb9Bk9JUX8ty9QYrAx3YH7AiepaYTsKaA7EZ2A5dftexD5MQTDL7a1P33CibVpxvza6wjjiwd7H",
  "key33": "2k67xaepyAp8YMCXHQdxfMea5cuFpEtoicxXYvX4Rkosjo6GWQp8znRMgWREegJtMiLXRg2zeWtZ4CkSorZGWtCy",
  "key34": "3kCRz5QNsHPpreqPUNxbaDmvQdNGC5FD4PK3w6so6dAw7g99TYkQKmGS4UwuvCkSuJKgbX7Gj3E2nMCtjdUUYG7",
  "key35": "5cXSP7MBvo5VkxikjhVopFpE7V6yFYS1AuUvV28EidRXNaQW94j7H68x5BZF8GFmMSr5hfcntBnhdt84VZ4JCCRx",
  "key36": "29ER5dwSFwBipoZYmpucriqT2wNHCohENcCGrdp2hsrL3JR8Lk1ivXYQSkn9CHoX3SstrLUq5tFWVribqzGSuXSe",
  "key37": "3Q6G3aDN7D8sbPshExw9eCZYGQMjWXMr3TemXE9aMWDFoWRoaefk4pJyzwfSPPGQ7WDgC5hv5TgTwt8aYKmEAPdK",
  "key38": "4N9negZDgpSS45gjH2Uub6EMt34bXe5PwKkCdv2SdvALZfa1ZuMWw9hfMiyby97v7J73hmjVDJeGan6d1Sfu9iyL",
  "key39": "49Xs4TnkccezpKWQLKydKoPTicf3A41mqKZmT5eYydnZ9S39Ub6VYmtvMXQQWUoqa2QhhHc1286Txh1tkX3Cat5p",
  "key40": "5RmQ7JDGymPjdwjWXfHAoFoxrHnLD3gec7qRXqZATxvT4jXXRWEisypKJDc4gQjZrCPw21XV8paAUvRLzGqaxGie",
  "key41": "arcU8m14KroKwUr8n34jQniXABaGC7yY9GdBUmpHsdan8v911EfDYFQosXrBDeir2ujhuSvDhBmKeYiFTERuymb",
  "key42": "iMUxnZYu84cNqoW6JhsvpdphYyUHm6GehpDesXwYKtHGC6ZmQgscxGfn6umQidWrnoRzDA2bXc77agoMC7aXiSz",
  "key43": "4wDcMdAJFFQ4jmg7WBvPjUUowrqaBYk3P6UG97kEYiy5aCGgqXKLpejXywnuXK5AF3dT6meGHWnQojde879T26xp",
  "key44": "36R6PtGP2sgE6XBpruk5BgyRyNY26DB4sUJSKWj5b7cR4eRHVvfmziSX1een7KGwLoG2MkyS7ZeA85iGuYafXgsZ",
  "key45": "3bvN3ipFb7MeL1uf6HtRHbXXR51SMKGVwhqqgoUVxKGbXomaTmdiPgrhU4xyKVJiDuDrtRH755EemEu6bqFwVBEu",
  "key46": "5eBvw4pmDDXHR2vG7PoCzTBkL4J1TZPNRivsRyicgZrtvWewRUCMXxnqU3tNfwR26vhxDGhPsXgtcqJXTL5Nt9yk"
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
