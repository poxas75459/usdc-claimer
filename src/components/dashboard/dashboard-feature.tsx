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
    "5TeUiRrS4rq687wmmFeC3SrFy2w7CagxfVHyswHGTFv6yntLvwHwa7nR2suWat8mXHAuqmc4F4QNAJ5SGHGpbSk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56F4zYtQhC9HthfTCmY3LdGT3tX7R594v4UiL6GJof6oAfi39Z43CbQF7mC7eEJANLbMGPriRLLvP2ot9yk56vwL",
  "key1": "5sKrzMsRiBfpA9c6vAxGyYoSNzdYtHbNnzxxrMV8D1QoRnoYsdDGDtp2BReRux3ZbeR9wZxGNZSL9B3feqmrXRmX",
  "key2": "gf9YvCvdQExWi3sSrBVsC12fXnv92iSigvuvV4x9DMQNwAjXGgd2NsNAfvSw1VrXBWo5PHNbPvr1NNCMsSxTtg4",
  "key3": "7ruiSyTtE65yoYTZxpXumL8WfeDL17txA4fXG1BjPadXVqFtnB2k67K95ZZH71SVtaT5N8gCQUvg5Qu4y4ZMHGp",
  "key4": "3U7WXdGcCuP4jyiiiF4zXxgXCfYn4MvrPkVYKpKdaeFHefjNAUkedgNkD2XS44zTJsMWX73JWeEHZ5ZfbuNcFne9",
  "key5": "2xgdN6Qv4vEDa8Ysj7BZrnrsyaFBFXurG6KZW1LsDiFC8DYshmXuaQ6sjAzQWt6pzbba9LQ52nY8PxUyqkvgvUqJ",
  "key6": "2iN32HiVyccGfzyUYsVUTZqwBn1RPH3VLSHDCzPkNrVrkBUso8wMcdSq3MdNMHBJkCiZdEE7Wxvwar7i8PXdu2Sb",
  "key7": "2UPYaMkZydahuuFa8XMRevijAGVEWLGNSugumr85AUPiBxmqgqVTDZaNfsmxeQ6L76L9zcnBxozFsF11B2n9mN1T",
  "key8": "4nv1cyffdwrB6EnHXtoxJnsinJEUwMfKmiVsCQeFbhQf1zLzBYGzmpqsavCtLRVmitQ2Q5EoWPjx1KiZffsCPgfr",
  "key9": "N5UaEaXaLgTeoJ4zH4eXWU4FhkSfodTRXR6VSnwJuVqCf3HyQnCnzUcnJWkhBH8jzbkU9RcAFGmHHzeFho8tsNu",
  "key10": "49ddFQJa7AZHkfm4G167tBgxLCJdMs5mGRwtB9fgwikhM2hJiP42Mb9Eaa1VLcmExaq3MeP1NEBePZxZk6QCSV9p",
  "key11": "YtKz7vRXN2r5HfGKhN7unCmetBr9UEndxJUHWPNpbGDPTzy59QpSi7NfkAUCm7QjQpPzVacwSXmKaP6G51MyxfA",
  "key12": "7EHTRvx63656xihrCQwD2dh63MpaPBmiQM8tVG2aPBg9RyVXEw2hJfEaH5acqHUB2BncnDFvpxVpZqvcAPeGdCs",
  "key13": "u8uZf4wekLPXTU4XhtVyvwQALc5QCJFFFPuZFbfQjteiHqKSzYhWJhpCKS7p7dzPt7ZXoA1t5zzvJmFFweaRZha",
  "key14": "4mQ5X3c74t9VPPQnHMirsfzhbEHNKpZF7m48SsyjeYbpVSNgdUhL5gbGCruLvqw6ViEQGrt3Npb97S2qNDaEfgGE",
  "key15": "5ZtwrmpwxRQMqLHVbtEV2bvL2gJnDJjBob2AGxipN3krXbRTW511EDgCUAXexHVF4sZgn2xhZuGadF9YMMwkY7Mf",
  "key16": "2sXFuQ3MhD1yh3iJAJwHsrh9U9FQo4LywpzVHgiUmMcUxZyA3kELXr9sWQwuAQSj2yNWECqUv5mjykJjZgi1ozJY",
  "key17": "2bBHfbUrTTKoJSjCxZQMMxzCnwq77hhBZms4ARyUTa8KkQWf1jyHhNDMy8TjfUGbHXsAsatG6MF2PoLfrF7zpuEF",
  "key18": "L5gAyKGNALQ1GoHCncTybHmQPLcQrk1Qwn9kGRqjvZwqkRUPshwEugNizUcp7BVT53rEXKpoXpuHUkHu6bvxBhV",
  "key19": "2MSHzzs1X8phAxmAU9WKiQVngqVhTq2dTkXnCqfYvMGvC7764gM7bMrFozGduYoXTENeF5x9JEXH7aava8emea7W",
  "key20": "37LBWWD73Y5pMeyfrX9DDnkTsMELjxdzXTNwoT5mcZb2RggmQngpfXqkbNEp2jZiEDkFUWhYxxMNA8gBSMYb6jxn",
  "key21": "5VdN2fsc6qPcNADtRq4wTz2sEBnWth6W8HesF22wv7dKjW1H2S1irUSpetoABDkULtSPb9ZNX4geWUPYNidnWUkW",
  "key22": "66TaEUbgeNTTJWm3P3cjA3KCU7J13FnxFhYq1eWeHYSSUQd9KNkNo8ZqiXbzjwVKMuXhKeQno2HiEdD8kgnVso16",
  "key23": "5xa9NeQniWCVhRwGVvW96i2aoYJXF5Skt4zDBw557p1o4Bqg1kp6keCVU3NmoeKBev3zCafCj1dDixydGj89QoEs",
  "key24": "4hEK5D6HmJVWhmnoj8qiLHDNa7aC3o1aZThFz2VC8E4H7BQGvXqd6DSvFtwMj7tX7jyYqbGP8tSJSxSF4YUghJPH",
  "key25": "5G2BvUKZwTX2tcyFR9E4U7hnY8GPCFKDF9i4WCw7vjy1cwHjUNHKS4TWpM3XpeFLnKeDcjyMHMPbY9ouwAsgrMSQ",
  "key26": "5wqrqnmCne9DigzxTauBid88GurE4Yfbao3dbkcj5hrPJH7QX5d3o5hNZeMvGkNhAjAMZ2BBNhyjT98YYtoTzqUf",
  "key27": "43rUQVwLm8Lv5YUQ9ygrqAH5Fcj1myZN8XWJ7vp8FmHVEU2xfx1pj1hcKf5e4vrCHsXsh72iKEm3CaEeX8HGBMHN",
  "key28": "zRHWyV88ECqyamsCBprziZUpEjnLqST3SUcGan4i3sYpUGMg9MeaHyZiW2j3KQCm8vErEMsfQamtKWgPe48BgFP",
  "key29": "4f4YGSeaD62CoJ77PVFgyfEJgY8d8m7ux9gJDg7V7esQpUxCTGpmCqDK8YnMm7wh1Quos7mHvedQiEZDA7t7VPPh",
  "key30": "4zNoEg5KMTRnFLFrDEgGqdrUeZFGxcfvXLRQBd8nyh3ZqBKRvVrTWgUWS3zLQwrfjssb6aNke5XpZTc3WhQE5JXz",
  "key31": "1z7jDNhbTa7TBFRPqpXJQhdCet6GzhvyANXUUcb1USx7coN7zC9qtqb3HJGR1biZUGLcT7XAavLPF2Xe65FF6nq",
  "key32": "3JxQPhzmJhN5BpL3edFUSK46nvzcM218DaoYaKARXYuNCM5rK2Z4XjGjkZP1vkC623hn2pTXwzSoZBmJmUD5V9Ux",
  "key33": "38ynQe3tJnUNWAsdrLKouecZPDFnJSkRpNSWR6Zirbza3FT8rwbVyxCqd6hauAYPfCviHpK3AVEZCKmHDxdgE7rq",
  "key34": "48W1Gm7FCAryfirvcqCwvWFDio3sNTryGHNQD7jjVVDYJuqxX7WCcEMbhhX6skPirFrQixwUBpx4DiZFHmQYe4zZ",
  "key35": "5FRE84cdkbyBZ45fLkZBQKTxAK3M5DuXc1xkr7oJYLChKAvP5SWnJMK2u2vSZw9nq3kM5Xevmq1j1GynTSLew8fx",
  "key36": "3yaSX9RcRSU5MaHWx1ZjUiBGYQyg9bWS4NeaQPNU1TqXBvrx2s9VUjWDXZvcf4j2dkHj54kfXfz9xwCEZ12CtLDV",
  "key37": "wQNewND8MqXC4vikgy6hKfJLgKMFs76bVVU5Re2q9RE7F8jAA9tLcKiu9zTFUmKu3XbKYJGqYBgVaGciXj5MX4d",
  "key38": "65S8feUX6HGrWKgqBZTxavgceH3DFsoQkfN4gh97YULYRRA6CVVUdeb6RQ7E7ZFw1dGktXtvp8Jw8Knj68k7fpFm"
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
