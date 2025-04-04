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
    "57ZpYJYoHd2CTuuW7KafPdHPsifvtP3vNLZirUL6xWxxhh1tkv4ZBwZA1JFBR1P5b7sjHf62nxpyk767bjFtV6Ls"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oxfo1bxi97VQK8c2oFFQn5paqn2gV1rEPkvHZoFXrnFZwNcptE2Jims9C3X4TTGgSof1W3JRYoqJ93HPQqELFZk",
  "key1": "5rLdyNsN74WCkKpE4mSh2LhmW3wQu9ccKStS1EtJajtLB4M6fTdtenm8RcmSkhBTnYdug79JPnyUcSWVPvnygtdm",
  "key2": "2g8Yj2UqPCxHYAZcJWEdMeZp34eir9T2UpEmKNnCyawHUxL56kt8cYcw14J17x17iExMRQRT2Kg1orQQDDWvRwAp",
  "key3": "4Zt7GrFAY8YADG5627UBB39SdubTnEpSsUtVFkuB9SLZRRHpGvroRLgRcTix9E8c4neHgyFYRjLAcNC8HqzT3Q2T",
  "key4": "4Nme5tQU9bYS7n1bwumpsae7vh6uZyWzCso4BsAe14zrmW6LFEhwwkTz3RyKAkiE5bmbHsBPVdnpvL4KaeGBj4jx",
  "key5": "3bmBPbRT1ToqXZKjq2XnqhDLFcnHk1LZSEwxYGcL6tQX1hYP5Uvx23ruddGgF6stRtSyRHD4ifHQBwNjtWPvU55x",
  "key6": "4dRdhhWBrLnHPdaaQqZ4SMji8iUCj7RfGPJJxNQTBaR6jVZvvdSbm7pvq4iTLpAewsJ4LiHjrDqjJVMMViqtGmmf",
  "key7": "4ESoHwikfU4SsaDJ2EYc9S8bkvQX53rt4K7WSq91UsPftchPDcCVDmben4wN6gDa99kmeEMpM5RbAvuTS6CVocN3",
  "key8": "4s7K3VQxYfoM8k6yhxRQ1R1TXTBtf6etorhAZ7jUCXnW5jQ9bcFzf2wFbV5Rzgv56FgZGQocSc95xhxiNyCwvNF3",
  "key9": "5LYE2c721hDiXH6dmLKw9Pez2dBz8tf87jmVqjRJJpBF97h3ZqstTve3kbMz4ZUsaWwAyu6PmRHxX1bW3NahB62m",
  "key10": "UnuF6ntmkT21GFr1L41fGfnAhimcptYbssh23ZXcC3kLzJ3Q5Aiv5jWDqRDBaQJGVGUwsdyyfTuGxnG5UQP2XhV",
  "key11": "2SJwayedzCeRPsy8xRRHc7qnPifRfp5FrGWsK5RChwf8Ku4e7Syt45sPxTkAhn644zeo9PxYFNeTrF2QHGQcfhwP",
  "key12": "2RSe5fA22wyDGzgSMBQoYtkRDwa54jpHnBC773nes8N59xBucGFsS4kfLgHvLxeeqPDJAXwwxh4MVxsK8BUdxTUg",
  "key13": "64NRePugh7Bu2z1q5je7VfNsMwwPr52eHGsKLMbGBXMYLGmehypNtEphZMrxwdbY9it1uKpgQvR4qJohagCpHizb",
  "key14": "2RWZwBnCx3Bcbe6ACA7cD7LAQRwX5EW7NoibAFkwPcGS1DVVSMh3mBAx1ZaesbohSyVL2uk5pPk8jAoLJNaMq6tj",
  "key15": "p4w555JoNd768QF5ZWqffJ9ULzG1FLHAVTAVUYuad6fLtm35aZxWyv69RXKzETaZ3iEgjiwJbAe85kCKW4Sdpe1",
  "key16": "L7J5tfw4uDrPcLov5ngcx9D3dRFSMPvQpDFp5fwVqnDVKk4j3ZGW4GKHFzwVUCKeghnVzww2yHXvqkuaGfZ2UKY",
  "key17": "2sRj6Z8uzV9iCzsk4cPYzsTpkemxpzsoj3SZCvB8yiZPQU5i5BwdDb4cdYsLHNcKaQjhbNHuPqsgWkRi3L8zHLVY",
  "key18": "46RN4fzUxgRB3UJq2LFzUuNkqeQcvHHt4Ss5iroLBZ7D8QbhMix8x2HwEQVEAjMeHcJcoJZdyTgWnkFJwKrwcHMC",
  "key19": "3pbmDV3JzZUJtJCXXVT5VUrnqMzixpbNjcPstYv8PuZShbvM8cepYSiaNZQR4CCTxbZfWHgfBbBM8yLPzAzHAYdS",
  "key20": "39D2h9PuSasWhqzWZwpcpof5rc9baLyjpnCQd8RDPenx9rQMUXGqH2ztXkBJWUDLXseyJsR4HMfZ4BsX5xDk7JgE",
  "key21": "48ZCyHroNPopRt5ho3qiCNNPqAd7pkBohtkQp13JXy3SxYK58JEWMSrG7jy2ZpCd6ogbwiaef6mvmVfRP3VwQdRS",
  "key22": "6C1cy8BQ89rAPC824wVwqT6mmWs2FWSgb78cEgZuQcHNXHfJ3oNmaEpUA3ZqAin7c5dCP2i1z9wBknkFdq6eSvu",
  "key23": "35GzvNjVnjGo2qrZtEnmCo33ch1oe5k2s2wR5LGBxCr158vitwh3bJUUHTzq3sy2yBr6VLHY56Pu2NyU4Lpw2Piq",
  "key24": "5VdJxKHEX7TC9DsxnucmXx9NDzQ6uYfXCLr9oeG8qHLHiZj4uSpnYjbt8Lm1X5KXW9rrM3iFcM4nsowGZcXqYH13",
  "key25": "45Y3kqg4tEwWTHsAmqxuFfhyRgt5SCi2REmkSsz4yCaqdTw2ZVcbBgRa7EbufLL7pWYREn7Ex9ZoCeaWCJdA45RR",
  "key26": "2qjfhb8gVNx96mAwS3RQepYoFw5ayEAJw7EYahT41prvX5283GGy5vyNhbfJpTYG1MHbDYpuQcsUzF54Th67DU1S",
  "key27": "2PtqfLDct7pavDQnV6gX3SyrLZqAzXZuRa6or6pYJp8pZWYoGWrV9k3g16d34yUAntQuVgb7E8PbWSSSgHY4tuVS",
  "key28": "41jN3KoPSKQ2nCFoTbSphdp4yBSws3LwAZq57A4f72rWRLgNBNpmKqCH46n6JmHh653jg2Djj59inDdHUMwF4ohB",
  "key29": "3ibHtb9XaKsdeTVfY313HWFnoKeSjeH9DFa36v4CBh2nmKgvcaWaFoR1LFwsND2WSLh7uKpdi8XfTTSSRBZ7PYeL",
  "key30": "5YWkXaVgu4qUPcmcqajDp7Gy8LpT9vrQDnaGvVVnbceJ3NoJ75G5mF4bF5aAqqz7nWYn5EzktLn7SheJPTn7jSjC",
  "key31": "3xrT4rCjCgq8WcxkrvKB6PdGZ9PzxSzbyv2W6gbPAjFgZTjDUHVfwziMTqthJsCNcnELSNdzYktBr6uodpsezBtT",
  "key32": "2UsBWogXAiQf98PesvWiq1owfhdegrEu9nyCZWMpxdox6jHJSycUSDSrAkRjBzXEKQGEc3EQ9GAVr5NX3Ho3WF31",
  "key33": "a8GmmoNgN76zRH3vq5DkotxSux9nJGE53HKhCYtj6pwxJRpLxCqrrw623PtQSGX3bzsH3LZZLHfauJdYPu4G2Gt",
  "key34": "3QViMeRJb8bvDgEnvZE3yYySc77TaAqVjLZC6zqiQgfm99Xn4JCweeBHofL7tnPf5DveQwE7DGfPzp8iLL1EVqrg",
  "key35": "28vYLRzVQBw8xdQwgK6BEbpw8qvEB1bx5agRiieX1bukQVPEsvLQyyawibiY47Qvkrb9tMxr8xDQVQ7H8n3naLmX",
  "key36": "22KrmkP821RNrqUWtevLketBcZ5iW3mxcT5eG9GJJcQUik59SY8grC3gkCVWwoX4iRxfcNk8JtnRrZm1vWqmT14s",
  "key37": "oJ29a3dt4TrWZ2CNyDP6uktiDKFHLkZocyKNLZoADAk9tDH2ZiiDiA5HTR5G3yrV3Px7DHutHMNLHL17bJf2TyB",
  "key38": "mgngRHY6ePtvAcFr6aV1JST8daA7BGWrogQSUaZPHoFF9AfxBbwjLWj5t997ZgF53BX6bAoheRvFZ1DMr7F6H1J",
  "key39": "4w2V89uvWnbhXsNa9krU7nFdT3usB3Xu4U5cdbKD3mPkPwQzEAfUx6ppMkMuTG3UTmJBfC8eCAdLV5WDKerU424B",
  "key40": "4eFKd9CqdHuLSQ8bS7D7Cqdkm5pkuXzTXYYvN3hgLMtcSij3aFy1fPsEMP5tbMNABUb3AuBhTzokyiTGe4R8TuM9",
  "key41": "5MTioaVgVDdmbzY7Bf6w8zN2XSwH1k2eHDDM22smz6LYTGhkVE15x6UF8xhFDLevp6fpBaYzxoNZYStJx4c3Sj8e",
  "key42": "infcgsDDvLjdKucZiUcvsv75evVLDSdYh2QznSWw5xqBGdVnQQXx9rTeVcfJzwK1qbea4KgiVKScec34W4cGs6n",
  "key43": "4JUCAB7WA2TV6eUvLViL9X2cnYFuSz1wH8GrxGraz135e5fUM5ho5S3F4APwhjJVDb2HYaZUrzWWNSY5WYtTpVPE"
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
