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
    "36Q13M523T1XtX2qGezgBwZ8XsZQ3c538aiLGpvQunqUPPoPjmTBPfotm2HWQCg9yC4Q3CbHrz4aiiLfpzjxPNKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SQkZP9vm9ekknE2PaUSGdu873KxiJwnTd5NxHDoxxCGcPTLic9Fqw7f4A7Yy3GXCGEZv1ST47GzKh91iWks3HoX",
  "key1": "2GNYr1b2k8ogTr6CqwPLcGqgnUNGU8ogZtqSbaRkDRLMUrMTbNJDpqMXFBBHgtsKjG247QHZ79PwnSh8pyntPGF1",
  "key2": "4iKZPhmPCAQNX4GRLrLHnWfosnxLK5EbgL8NTX2WBtb9NcGkSdwkmYVj5MKeu9stCN8DoxN9DZvzx5gS3NdBkB6h",
  "key3": "3pLPoMgV1eRisqKvHzeVNrR4kWBCY7M9LRCBcFQPhrJXN91MYyUWg8zcwxbziqAruHd659GjtcHyELzQRtK8x9Vu",
  "key4": "5mRioyfK3zJVJ3njHVoyHHAVJL6b2QNZAN2QUjd7vpGSektZV9JEnGH6qPE3CNWgDr629fvMj5tiryy4pKcstbN2",
  "key5": "4BxhNFehCiEkeKveoEqoQAg16VduHwr3jt6k1nEWoPePHnnNpGi5Vo7mBKe8NNvZYDR84YTZXqiieAixHrPAShKx",
  "key6": "4ZKr4LAYhWPtTvt6rVkPvYWyzdb6Xh6kfM79geVxgHpXLaxtC69gHciKupuz1A28UyPBdeEG8wPj9Gsq3Cij1rQ5",
  "key7": "7fP2q8YsDWUdSctixtxEYDTL15eLqBKkLUkh6Yjved1UGjrBEfgPhTsh84Y6BziJ2DN69E4MinauBnvGV6aeNo4",
  "key8": "keopQRZNDLyqNHqbd2iDUwgQk3ckTYn3AE5NCQMJLUjkwtVSa1vSXgWDvqjjr3pKjpiHdRW7SS42y9mkVN49N4B",
  "key9": "wVxVkyJqWfPhgmyjtf9FwegW6F7Jhw8WzneeqpTKtcpWHGpojjYc2XQYUdKDvbSPZ5iM62HGNHdmi2Krugsfhme",
  "key10": "38X8tJPHTgLd5bpYJdbJBMdFAFMADGgCaDogfn3xfgauz6msN3gHUFBAzkSnUbokWi9e4sbLZS4E3hKoUMeTve7q",
  "key11": "yCVEByPumzb8w7a63Kkxp8y9PwUGU5aRe2dPpZrLyxv4NK28DRzKMU9o6qAPJedA9JVKTmmAkCxfPBbJE4f4R35",
  "key12": "4QJpwrMa9e7ziaVMkqNHTYMPM44kSbUyNuo2RqkNVYkdS7W5RWizaH3ZuXUCpaZJUrnDRYbDJYFNdnGBhPeMyTRh",
  "key13": "65FpgqUc1Ekkz6spyP5r2tJg2hDQ8mmXiuQXEjLvcWZQCzv4p9aSQsBDFFMz2Dunu8yB4NpN4Uci6G1gP7QV3kTr",
  "key14": "2NTMPufLkKBWkgcHNUcgFYZ2RnPw7Kst5sF7Uu7VPuAfZkeXVoiQcPNZSuanAQ85FFDJXSYbkWEjaE1yoGjTAsoe",
  "key15": "6sN79ghqB7seJC8FSys7EB1c1G2PzeqFt1JWwXPWpWD1DxvsRDPXgQtWhHLr7EmhsQp3EW8BzX8sLMNCggig7zZ",
  "key16": "5uepo4nctUKj1ecEEXK5AHUkaaRcUtEtG7eb4b4ynJHfAEk43AcdMowHdVGqC1EDX2B5wpyEE9wqhaGYdjcFfA9D",
  "key17": "2inzw7DGjnzQ2GYowgE1eSgm4jCiV8hesqJBBo6gNJfyzCeWsCJnKuLxiTeVySW5dUUyKLkk8NxMq3tpyUZyCe1Z",
  "key18": "aHGBz8N2WA8PKiFwn5W6Fy9KAwRL5MeyX96Gdxs3CwVvjLt5ec6pExCJKK6ieW6fctDWDBYC6WYbZazKCeUM5af",
  "key19": "4nLSzWQySUnoUdvKDHa74pD4Z4jZGaddP6NHd6CutTagmKFAobksvdmwPhE1yMjCe9VxLrhwABVVfq6W6EhyiVHX",
  "key20": "4eUAYrAHDSJyQwE5yhJFq74shiGVHGgUspizCpu9ezctjfLAi8zX5MPPwD6wnJ6U4uUNLRek92fryfJyc5Kq23QC",
  "key21": "5JsGetgywxQc6VjCF1zTBVtughAtVvMFM3miKj7arQ2saoHXU2HbuctktpLKt4TwHxN8yWWF7ed5csWWM2TC3Qvb",
  "key22": "62mcByS6qQoa64XvdECj5A3qzDbQ6UJBDZihDvQqEyZC83GVJEnw1DPKyt69G1Z5E64VqfTZR62yL1GqR7xnLHXp",
  "key23": "4gs9k9ZH65yH8c38tCXtXFrppGMme8bdCrvU6obCfNC67Hbmb3Vn9tv4KfEEpNjkKfjjwLBsnh39cv2VtC6qtLD1",
  "key24": "JeUZEAbB33VBnRR3ynDs6qPCVQhNGwKsuZV4bpN4erFPs36NQUoTpPg7W4oHFkKdYxfacE1MGp1p23JejZz4j6p",
  "key25": "4uCQterjU7Z1zox2fAuPyFtZTcPP6cX6fzBCLGD5yPd9RoeMxsChGR1gYA5ppLvTyNpJodr4UxgmEvZdmA6UyPzo",
  "key26": "3wnuNmnS6V1ZggQQTYUF5CDwuSpP3KdWvuUXzKZA3RWGEd5P59ovUZWSnpcx82QsLBVhp131Reaw2fxqRxygX8Re",
  "key27": "2Gn15n2pX1kTQe68Y7zrJrd4XhxNgtWvtZAxEAHGMBHt2BcZ4jbtkGL4AQsb2jNktP4bHEXMkaVUfGbdqu1FRZco",
  "key28": "5fePELHF8WrE875PtcwUNXwi1ztxnss4EAMh8KhtJnrLD9VKtfhdAn78XyXAvgTz3HUCfbweDqAzTfvh4bYDXQV4",
  "key29": "39JH8YTj4bY1jgshvqXH3CC7u6tEUwdRTgw9ZH5ZgxYwuxYz8jfRZLuZLLmFzPawMHjbhGTQgjwxrKms8cxxywCm",
  "key30": "DMtPAMtwtuvt1ZhDXWV4K1ey41wFuL74HvM6SZXdpa1VGBKVmMb2CDPepFwWTuqUQ85ysRcWnqeiEUQJQbDDqHQ",
  "key31": "3oD7GmiV1usymKwMF5nTXahP3wukcHx9ZSzhJSkCqXPiyr9MHMzDu3TFtoaSps1AJCYF7sYmRtmbgRsriXff6rvc",
  "key32": "4ZmxW18PHVk3RfcZoqEbFDTSGQh2W4cVSLhHiveAfMo5zUgySqqZxD7XsceFSRRtDfp5381kTsqnq2D7eTMjgCJS",
  "key33": "2Y8QAc8VHsj5jSzAhbBcVLVmXAfA27zEFbrxBVKzMwQ9fVbJGJkB2P8HD9CBqv85zLjpCscjUqgBEzQD1b7Wbhfv",
  "key34": "QQF67pq1MgHvXEgCqceNunm5XVS1W7Uc6hbf73WZMSYCBxgyb27GepXqumNULUERyMcGNwP7CmcL9kNzFjUaFJk",
  "key35": "5RhvJ4buwWzwChRH5hogQFRKPHBS7cFwZpLRUjULQsshbkAN5qBoh3ocgU5CUYrUPs9TpzKMWJiNCYCpsUjRQF91",
  "key36": "2ATXnJiUJEX8SuyeENwdhW5mAtcd9U7wfPLRspofFnMjS7MTSJKd6WVxhvZYaqM7o2rfb8yo6bbcxW2hpAp673xv",
  "key37": "s42s4gcsy448TJm4eBkeEgfj5vNDmVGw2F8nbe875X72dZzwtSya19VYJhXuEBeG3MkEsdsreKZLMeEGHTn8Vhy",
  "key38": "5cgGmkivfe9H7RN2jbRkxA6asbRNZhitK16Z9BWMzY9RCLHHDNBCFYdVUDerioGa3W8LgWwpYv336Eif1D5Pw5aa",
  "key39": "2o8cJex3TEZ9H1TK6wvwNhQhzJhMEXpUFDA53MuAABTUDg2tLpXMVb4Tg28Wi9rAEY3rVBwe7D7F2YQQ369Mnxqk",
  "key40": "5Z2AAGWA9coPk5b6JzJxMksdVfjFd6iyvvRW1XbCf2j9xjiRCvDSs39jSkxP2X9edbqnXjfGVZ9CiXosVkCeLo3p",
  "key41": "GDYGNEySp7Za6sXsTkfdhkXhcubhpauAx6t2rFi3uMBDnJhpfDbQfGiqpR3F2VQqd7K1YvM7ePEEdsJxa7uLmYG",
  "key42": "4fo35J6GtPZibtaW9Gu13pBZgsZXicJtHXKTRZJVk7fow1TvjezoXpQ6HJztgC2xb6HSe4JHNebmCsR4fckBVX5B",
  "key43": "2Y5kgd4rtZ7Cmz7Z14RS9KBZLQ4qifi9PEYY5F3LCBLP2JPWuNJ55vBLD3tMsu1YJrj3hpCrDwjLpvaiqsdP2yL1",
  "key44": "51CTq51zFyWpTVcKeJRioJfvBHwi9TUwqhKciTAesVPGHUaQDnVNRAAH3ifXshdA8ktvdaviwnNoCtGo2s2oGC1w",
  "key45": "5Q9DZNnX2BFJNmXdHxeJVboKvZZ3ZSfZG5Zj2vuUSzx2GK5fR6N6FiNoD1q1NitRNKrZKiv3CtAayQpyndfEav82",
  "key46": "2prhwvdENhKt1wJKUzSd8p2mxkRNSjjnLS3n1pTwbDa8YZe7UBKngJf7ZGKtvENG1h2Q7Ze3Eg2aziaT3b1vtGW4",
  "key47": "3VJiT3KkV4JnBpPYufurchykmJm6b9gT5kUQ8QkpiaAgZZSt4tsB1qeqGjTzWBMx9BYLt5hxmSwTMyx9Het6X196",
  "key48": "5zCJXPgMAsrHkJCuhZn5iKRSzbB3vvyqJiSt1i3TakYrhxLH9SE8Atxeg81sPM9ajoT4BdgwVw3sRQgZ2zQxDepg",
  "key49": "6yo2Fq7Z9c5TtmsDdkpa9WEjV737CygrZc8qnc6bQe75H7dbG4Uewv57S2UVTYsW9jE3BKDfb6wRNr2kC3J6FTm"
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
