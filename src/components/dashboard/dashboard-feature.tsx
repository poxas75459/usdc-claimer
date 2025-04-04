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
    "2LGQrenbTW1GeanFoE44B1hLCfyT3tzenB8iS4kxBoQZuPUDnRe9dFvPXcFiHUsx4vxaCcZqDqJujxmX6V1RPhBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UcvfGQpnA9jwNwd4GX1E17BLRombL4ydx5EHhpqdjEk2D9DNx8vbHsHfwY9kfQUtYA7MCLmJcWN7Rq7HHjAi8sx",
  "key1": "4Rn729ZJ4WUrUFabzdzuxPiz8pE7PMHChoBKjMvF7oc1zAoBTBXS1sNRJAMZYY7xY3eUvyNnteFPPZW2BjjiNxYo",
  "key2": "4ZZz8XXXV9AsQQxERhXNG9duDwvN5q5UPqGJ8V7tmi4ERUyoe6rgwgpuEu1x9ptsUbHRcufzfMNUeiWLo1swKqsa",
  "key3": "48RUEaiLTStsDQanNebzgjbQkZ9bT85C95dtV7w7y5jdZQioubamoYuS9EhA2YTyNe7W8o2XKCgsSboDpvwYTMcs",
  "key4": "4iaiLmBoLraCA24p5simpcCX5VuYZdw3nzrdyisorRF9pzTg2rcd2cHmxhr5Q64HNaEedXaRhLnyELm4KGXmELRS",
  "key5": "4njjn3f6RewwDADSXCQF9A5aJG1mSV88HTjqgAtCNYdvFMvHNicP9ky2Z8QjUDrEdM3eHc7JMxfkBk5cB6Hta3vE",
  "key6": "4tnBBFg9WCvHjugrRDKwVCFV2o4GaqHLY9QH9m9ARtTcMLYKKsSNvBkX5Hor6e1NNkax2HQmDyrat4tAhV8q4tKr",
  "key7": "2TDbbJHb5cJF83jisbXBLmRGrEL678Ss2rbFCjAeGnQ6pJJo2KC7d6sGwVsEaoPYw9RBkFBqHdgHSWS8QHj9uEEj",
  "key8": "2juC6YJsKEKhfy6Ui9ftu8PLuBznGvRCbaMPfChRGfSSGSKLMX4weVkqsBTPLJwwk926hvZSRBNCsedQx3N2PL8H",
  "key9": "3HzjhJg5kAHehpvT7LdKt8oNv71vD5oQfuNu1WgxSH2g131WPW5rZcRkYW5ZCvruGSj26fDwY63pgubJx6vMZNiz",
  "key10": "4Bkz146GSMGQRfvNTF2QaRsJ5tTURdfLtqUyqZ5WCDAJpMDXzALfsYipig8mLW7JRCoX8RQCAo6boX3xE56oZG1s",
  "key11": "JWBSsMzKcqLawYDfqiD8hy5YWwU3csDMfYTb8iy93NWdPag9zbDHkykddGqBdLfGamSMZRkzj98JxkCPXyiBzok",
  "key12": "2BbTBGWgGYkJzqjWKUnEVi2AFhY6oYwTa9KzWgLeEmtcu452yWi7zNxEbubUoeHup2JWovY6GH9uAVPztq1LnPXy",
  "key13": "5dys9jed2HwCgsM2iPUBj5RbmHLXFVxjUUctD2v4qN7RjPQq7xehLMZFBV5Yj9UVTmBP5yMmCTmiVxcJpoKFhiu6",
  "key14": "XDatUePzxWF7Xu92xvVY3DpbePfW6uDk5AfHPRT4DkGYX2ws89YV7xHAmSMx3F58e177Gxq2BDLqLpKYHAzP62b",
  "key15": "2SwREuB4zjvjyVRjwDcnFVfXKu1rshspqkxQaGUtxADGKcBKQxgBMFbnWuRBhnTu5VNXf5uQyhxVUx37Sv7XTtdR",
  "key16": "61J7N7tvFXn5ER9ARdRFroEN8U1dNx16XyURqUSo6QQEWXKx2JEKYeeaiJCFsN8kfKijjbEtTVXd2wwPLP53GYsu",
  "key17": "2UgCc9P6BAy396jJE2Z9K2S5KC7sQLBhrM5G8YruDu6zX26yA2PEXbHPAdKba3g1X4XipZLQTwEez1X67o2Drw4H",
  "key18": "5SBxeTDKMeQ1KAArnTMhJyHaZdiLbMpemC4zjkM91JBnQzKbURTNTnU68t194NDh1k9x3xekda3Y1WW8BxAt94Rt",
  "key19": "riY5o9Bi3aYz5GBdjKjiDnUTD7B16vtDf8jjyiM15dB9kUfg9d11c9x1FKL8ZFiJY67b6yBrTooPafUDyUVb6bJ",
  "key20": "2bM8dD46oSVNsmGPEx4mgU9KomuAEZTNtxMWMdTSbvW6tDASLQRAB9K1jC9ComiyHZQJp7GxwtLiRUNoFqDnfZWG",
  "key21": "4f34D6wSsWofWu22sW7bCQhN7gdqQYf5N9oZBz8JgbG94dzj9XVKTWbdw6aTeevsHdCnM6dAc8sHXYZjQ5eibXzL",
  "key22": "51RWDH6VDPU8oqYyQ5xi563co9boPbRBToTBChWFUtDbsFjFVidZU62xiPfFXtq63vciJS63qKEZ2X4vaiagLSg4",
  "key23": "4LQivJ8mJ8vGGSVGs2Jbu5vNkJ2GsytQRDo6LRytoQViCdrgwRW9cYBefVcMRxLQ3qQLxQbCEVJTfRwchVXDF5iv",
  "key24": "4umHv2duA6DcN9A2z62GKXh8zRnnxJ3VXmp9S9TLfJv6FToEgiiJ3EDKXGfkpduRstWjbUdKLada78teHiUxtDTY",
  "key25": "4Bm5ZxzR7pEuBxdiV6virRRwjkacogbzqy4YAQdq1wiNhdWj3X7i6H9cgJLez3ogKGbR2dQGagugoL5bGKjxfq1B",
  "key26": "31D5ht2V7QMGzZh5paeZUV3VoVCDKRZV4rTv8XkkL7Hz3ZhVgPHnad8S7Javoj28RuXVufYowMHJD9bqfiEqCYa5",
  "key27": "34Z2zixqRNvtsdxztwCFVijTLfBcS9wt3oMju4tKnSs5m3BXa5iQSLBdtTbKdPqYyYSqoTXn1KqQHAUUEUnk1umL",
  "key28": "4cqP1WnvTYRaY6V4Bk5hLNDzU8hTSKxarU4jdfKxcbbMGuGqAYDGVLqWSRB7j3Q58C2rK6h4LgkoH4zSqSjKndFJ",
  "key29": "4BjjJ2y3MtQGxtcSe3MFCB3dDsB9dzjkycYq1VtqUFNeNxGK6VPCk7KqJ5ctPgTLymCsBvLQuWebMXohL5aNLVWg",
  "key30": "cu6U7qi2L96TGFaiZ37XbjJHUgbjVLkbgAZYP5meTPcN9mQUU6jcuK9jEH5wuq8xmMKu8KcoTbrq8DWEKeT5Pxv",
  "key31": "4K3KASChpKCgb96V9LvrsENLwcFR9dAKrRVFAEDqA34vFuQtMX4Y1S5XPkX3Uea1MqwoySnGd86iLrmUUSLKZG6g",
  "key32": "5mDvV8yvNEFefC8ieGhuVAtMbViWGjcZyNfddpM5pwDxrPSkh88tkfwc8HjQW2qnhisxURpQykyJJFCa2bjSguvz"
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
