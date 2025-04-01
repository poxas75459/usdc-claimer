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
    "5r4JSL2ZKGuBX4eR6qgoHhU8M82KqpbVXdczVf8Jhgbu2keWApgsN8cNPkV6upwyqZWGJSQh5sNrMLM5A4bfwWyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QGYWSnwhBCdvjHC8J216WEmF6RAjvkAR5pBGqjLojRKaFYtVcRriYG1soFjXXBCduXEHiAYMHV5xy1Y8QEtzuJa",
  "key1": "5CvXmH1nqc6xcKGkAaGEaekWH2NryXuV2CnL9KPKvWwuRniucmJCsKiJXV7vT6U1CwRzKQEi5nwFqGUWDHYsSzfU",
  "key2": "2CcwL2jMRUF64L6yur6bq6LwYXazGeK1ddkoecCtGcb2eBwTiGAC1NviyCoNFg7mG7cLA2mBh6hUurydyJvHkJja",
  "key3": "565yVp1FUhEjYYBPZJgEeh8PgCNmfBqx4Wuscq2MXSKq7HPx91HJgXnT9ndfPusNNrJUiYcoviKpvGmTCRUQF24b",
  "key4": "sHhfh3CZ6oRnExrdm3WqjbbJGKMnpHKZewptWDGJKkBwySb1pncJ6rQt2DxDpP1ydLZt4bcofoaeRjk5EELa76K",
  "key5": "5KgLGDTCHqJEik54bu6u7ao7KThak6xk7Cafm6rHeX5vU7464ji3FYAXYxkp6auQgobmVWJdZ4nJphLPZ2GjJkL6",
  "key6": "5JaE8paocjvmjT63hMtigMh4r6oAihTrmeGgnUGMyiN4SUCBtFiM64QtU19AqSMcfr7scsoGnzXcsfuXCcPze9mL",
  "key7": "2pzm8NaLwqmoBtcEPg2nH7Nax7Tg4qj9afz4ekFZKqUE2xUUpK5p8qMXyGNdqpZjw6uwis1cBMGhad18g7gZdwUT",
  "key8": "3ABGUhvLDKgwBFqtn1SUS1V4jjd4SfG7pGWjZYprgAZWpHEGVquWSwotzuzC7WGU2nEkzxbWmvtJNgyqENhAqKP8",
  "key9": "3i4CRAqvXtRUXpA1ozHKUKh1r2CnnMVE225uTnNiQb4Dwsm99UScoPFvVkSs2piD5kWpEaUcwDLvw5sAhFjeZMNP",
  "key10": "fuGpm5bh492teokvSrLVLdxq6qYYRcwX9h4S3JunPywUXT4uGjxHjEF78wh61cukJ6CdXan5JzCJratFebVbGMu",
  "key11": "4moY5WkiH4ZJRxS1JxP7UsSgka8B98NHHb3UJkbEVp68AnMdKCmotS24NGsgdVQ7vyDZcv2Rp19nhtDm76MZ6ihP",
  "key12": "ByTFeHsoG2npwBE5rawviTAZ7JKnAPNBnttZ8AMwayJFbbRgu3m36Gn1EJT7iRAYXStyHt8TEVSMbxZBiq6TXjE",
  "key13": "2FBdCQ8FGv2do97jdvRfbQSS6YKXLnUxrfqM1TE28hZkDazoF7WFKFdQ5GM8yeqXh3FwRpM6bAopRYnA558MwfAf",
  "key14": "HZ1DSJ9iW1ay8d9fHkZWWnWJJWRCY28Wu125mh5uyeWXhFRKxQN4kCy4MpZWCP1wwe2K9UADytjb6aPorLLEbGs",
  "key15": "3vkSeh8KzWJyPdgoPmNrmF8sRohiQQYKA5f3UEZUxqjZ1DiBeXRuvR6sv95Q5XMffJEMJgxhthMDdcU9CWLqBoQu",
  "key16": "29zMnumJPq26AJZW6Pau1QuH7J7JRa7YwX56unJHsDAkN2xrS4gCCqwCsdTADwyvWC3zeYULFZMAUSJ9hKRQTf5o",
  "key17": "4sKqkz12dBJ2xCxBV4nC2qAzd3EesqGq2BL2yhyRmvqhThqeS9kkWXhR3xN3Mnz1gRzFa6LygVHy3KizSjBXNNX5",
  "key18": "3ENTWoA38hkU4d8awmfUwZ1riPTT1Fxy6MBD74TKcnvuTwL8hbF6Z89Jis7YKrx7TGTkDi8tk8fVd1XWgeeyRZ9c",
  "key19": "3jxc75c6hzArfu63pzg2GG2Yd5i82eVn6m4PPG3BE6am4fSxpvJnoByH8fCkpWPgs8SBJjKe4NU7xWso82vZAgse",
  "key20": "5Unz3VxAgLHfp1hT2t3GmxwNuWm7K1hhkBxs77F2bVqVpeNizZbmYUxFbbiDV5mUr4BUjezLTMnyzW1qEvcCzp1W",
  "key21": "5PHSyxxV7r1RbZykswJj5Fr58kekSZNpT5hsgmtzEkX4ZP1fWgDYNGJSTBKvQwnnzpu1HHkYZKX4cS3aZor4AoxF",
  "key22": "5G43HXgeUvyTpwdBM9VfvD7qLG6hp6S8L6K7K5KHjfWENozuQHLeRfLaVkkoFXCTc8MESARsHf877nUbKGPpCKus",
  "key23": "3nBxJr5TNWERDUv5z1iL4iv9Jf82VJrPqcbs1nR8oGA2s4SVpokSacHrytVqmdKt6xW6L3EZq4wathRto7VpsPk9",
  "key24": "aupzPTBp2zBtTHkVoRjC2D2wjsz3EJDUWvhKSNGsuyuT2m6RSfg5oEerZvrz6ZDmcQqyjNXg687r8QuDWqJXfoW",
  "key25": "3aFvtpcHFZxBSzSoU7Zk8SXK16tbstLmfkKGujxTtxhijtFJpbzthVr74fsPtG48XwcFRBXraMBQj8qXQvrH6461",
  "key26": "2A9TZ2vEPfASLCnVn12q7PdCKpWmoFdRutVhXb7kd56BZfJGG36pH56eW7vogHHMoE4pD8DBhbQtNxhbqBipNqnE",
  "key27": "yNNi9RW1DXQHjwn9cY9S5nzJiEcGejf4RQuihFYjzxvsKSj6YSDBJToGWqemrmABk883GCY2PtT147suUcUYTyL",
  "key28": "p3YyibN3dWDeXRo4q6u3XAMerzzcv9doaxiioKrUP6xH7pNxXzdgZkpMzKF7AGHzjb6CBoBds3Yd31dLQNrmZHq",
  "key29": "2k8DHAePG2cAYA5V98gXiEeZA3XmhFW8NFzH9ZVSWHAH5MFspzSWNpqpybToJRDmxCG25LyzQNLPwLXEX4ipsP2i",
  "key30": "ZUGuWREij6Cscoh6BAmufMvtaujYr7UK7jHcoLvy8rGjNkobrgr7FMeQdpbHgJhkQFCLqNdEPUvcguykTRytUf4",
  "key31": "2iikjxF18Mi591kmbte6k448Cj997SwPGLbLd14DNFNq5ZK96L8xajTEMfoSTfvKrjaXLPY1p3PsZ2yFr1WAqhJs",
  "key32": "3AM6VsPwjHJZARu2jj4F45e3wV6e8c4LE7zsKS2ryAQDubaoVmCaTGWqBRu8pypJpCpcW5jp3q7iSxpHtSYYyXnY",
  "key33": "31teWfrCmuExLtBmqweS3mGLaCVrm39wvSTRisetGSa269ebstJ5scL4yyjPk9vJSg1HBeoTSKDfnTWJF9LFGMWu",
  "key34": "5UQMQPMGsbBxfSL4YjFyGgZ9TE1iDuJmsYh16Z11WgpdJipb1C9KCdesgFV1kH9d82jeB5Bi1vx8RGhgRwdZ1FZc",
  "key35": "5sQfPiSLfkMYZBuMLVGZMHeULZhJrwdYaPpTFqCXFwkHyZiwQ3CSeDJ3rRFzKyzwbodPPHDt8yYCsx8uQiXtUTC5",
  "key36": "4zayCsHRWfZjuNcE4WWFQLCTnxZ82eKXv8CQx263anobRGRMtsEo9bUUzdNSikEJPQ8poXzy8eRoZokVMMuf61sH",
  "key37": "3aWmnGHUF8cZ5hW4SYcUpYymNU2DFB4V5zj478SEa8q19rxF3zWg17cYTuprZxGirhxycri66TbAKsE7iySJCVc8",
  "key38": "3kzrgmTF7SAyUA3juFDHy7v6onAiTFXx3fYFFrwZcKEUDYwJfHMNfBMY1FcA5snR3DuezGQ5Pv3hRQk78ENBYmxw",
  "key39": "2cmYvB44RAkyB7rEypvMXLGgrkdDBAYxEMoKCNjN3UALwo27Eg2QiAJjvCiHMyvj8YwG3oTs8F9NiNsZ9qXYWyva",
  "key40": "567sDKyLbZhxEs1t4UzW5D3cAtszJ4Y8TNmSBUcrEgRTSk9um8sDU3qZ5cR7U3f4Gu3qggUo1JKSH9xGXciaLaFp",
  "key41": "4rqeE2VB1yoP2aRkTjHLf1WdpLk7pHk1fmRjtz2NrPXkerAbEXSiP3pCwMiB4oM8amqiLr8rM5618krFU879h5LL",
  "key42": "2wuZzVRJ9zSNt2nLGqHoktNeb6UQ9LN84k1jSjHdqextZvpNdk39NsGPvZcbmJXLQwk4pU6brhQEmsL2c7Q6rew4",
  "key43": "3xG2x1AwaPQR2ME1jbVKSQSJPDdAiKEXqQYqbywoURdgVJgQ3q8C4bQHTjF65i4ogq9RttRZZdCkaGb16Dz5CkWn",
  "key44": "66C6TsLmrgsZFBL8NniaoHevXjH5uwnSfsB1qHenT6E4V7Bq9Z58quwE7JW4YznCkWXTHqXnihmo8YECc72Nfmtx",
  "key45": "386gY813rjuHq6pmwj98L3GRqZ7ihtMCr1CnUvoGhjVMT2mmKNRJZVxb41CwVDcdGmL6MAjF1VKEMDy9DCE1RoVK"
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
