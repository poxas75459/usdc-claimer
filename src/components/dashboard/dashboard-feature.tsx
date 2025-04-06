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
    "5JNu2kjUUWqwuf9BjngDas9fDTvJvgHwvGCW7854ZgAs2Cyob7jLeVY2ZZwrFP67gEW3sRTfY9ANdLpPzfAMu5xH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PJi87FeUmjQs7j6s67N9EaQapF5UNNz58ygMUvM3xcxi1sXS7amQoa1wdSfnekJG8VxKM2GBP4KFew9Q85vitK6",
  "key1": "4DsFSneL4t7K866Jkjew3XjMMDQV5GT3nc8qQ2sikV7LrGQk2vWnpHgrwa3D6bJo6sHPae2mnBybJC8MYhs7v5ZE",
  "key2": "532fudwW8BUpiBQM1XUmLmgn4vnoXnuNjqAZRyUpgGfvUAFGKXhDfEPvmwGLdxjupi5PAg7p2nARPCER7ZRVW4b3",
  "key3": "3b9YgW6cWYhskeCBLUpRjxMEXaBFKMRRvnApeN4QV716652jMYv9oCRbzqbXfX4zuKX1VShYzT9HwQxCs8s16Twj",
  "key4": "3abbc6nvUpetDAFqVBCQUm1fCCmTgx2xKDUXYH9HPLMgx5EGZVsQwNa5wHioKV9xSjVQ5VbaaZdcxjMJKGKsdcTM",
  "key5": "2u8a3EAWPSHZJmHt3wdRX9cRH1rK3FJdooNZWysuhaNQFprpc9CUkX4qM1rGJWQK5omxESctb4nxcDMEdjeyExjW",
  "key6": "27QLpXfnj6HeXsFe8gCberHGppuLhrVtsogcerFJKKwP9pmw78z4eaGby5JfA3MZyp2NBYjPmAKYH3kqBPqKpTFx",
  "key7": "3KMsaKGNVucVSE3T6rGKRLfiijscH8xhGKdfz5NVGR1Zqqj9sdschxfR3zX7sVEQMiD81F9vasVcnd6XoUT7joi5",
  "key8": "5SgNcJPHtTuxj918mC3sWFLMDUwrnTNwiTAyhxsuqxM5XaGvRVUYQp7E4pYfBAsEudySFMiedQ6XB5R7B5Z4o3B1",
  "key9": "r51qzVMwnN5TWMgaPqUfEQF95gj4J5XYPgEw4ERBXxG3oYZE4bv7RWGcdzyYDuqDb69A4G1eyKVXRLZCzzgPhYR",
  "key10": "4nYvqqEvNdukL48vz1S2ptx12hHwso5zxb4Aq61ZnPd1gU1EqqtYCHVvz2ZnCYqANCCxZpMbBYjqd9NoN8xRLraT",
  "key11": "2qpixrmBzW3tcZBFvgkgSGDvZR7tJreN58qthy8iZXvZ1mKUgSgktaKtjGaLBXqjB8qQNiEnapK7j8JNCTgrx8Dh",
  "key12": "2M69pq293WUzqKQrUzH1GeFBTQNie2CmAn5GFpszoqQ6M3abYUNdydt7EBXFEw4S5zYsp1nkisiftH7FpcugqMUF",
  "key13": "Aeg9vhQYEKDSEMyswzpiTV7pUrirmGSwU8dFWYnshHtagx8RJAY774FzgvDySWLkVzys3Wep46y24JMK8p64bq4",
  "key14": "vQThghebGdzjE4hwdL5nrycbkLDpy7KV2DXaeEffoBTCNBxW1PxUkyookAwuGF7RiLmGKerkLr9ewDVs9HZtW5A",
  "key15": "5BwLtCFWX6URdZf8AF4z9sVDNuy54W5exYxwtfrwZeBBDjRjBNdQAJkYboUR6e4RLB7NQQhYsenz1MXPQiwYDGzU",
  "key16": "49jE2cM8aKBhFrkTqCmWACNt3xeDQ5FjFjvwGjXvpq9NEzHGW29JNGt84QvHMBmyeZgAo9fp34p9kqz8Syd9XabR",
  "key17": "5EbMCp336U3SsuxoKa2NQ8FQdwqxS5MXYqTnC2nq4yvxykYH9P9LVNtGQQ3AhaQtoc4i2awfZN6dZALwWWsZj8pE",
  "key18": "3Ctu9R5EfDH5isEaU1wAMchYKJ9vTL6AZ5ZXxJMDHeKFnhFxsYvosS58RqwYSB8bDcFC3cd2tJocnxH7mxi7T3M4",
  "key19": "8HCsTWNXYZzxAR6xU786tYYeH5WBS8rJGxt2rFtQ5vcv6x8R4dVspuc1zJ29acQUWa1dUpoUkYzfDAjE15aJczB",
  "key20": "3ZXD2SMFwhzXwV9CcoHvVsUZorh2vPnt2GYLBtHXbCRGcgNG91vQGFmagGbhRixpGbUQ8XGCGssmGxPXYWAsEnXm",
  "key21": "4mUxiuTpHCKX6T4uNWV34h56ng6KRvWXA2qByPudHegEb9PR3sEMTEBpvECfFqv2Vs9kDRHB7tqnvom6YDvFyzeh",
  "key22": "2yVeX5SyHW3pwRBkB9ePsnWKWjEcPgD7KXUM7LN5kCPePtpbcWrcnZ87AvrdLZ4fdYB5YcYUv9Ptd8Pd8xGP3M4X",
  "key23": "FqY2eBD5MqYGdEUa2YvnQs6yjbB6oJYF5d9rQVY4iRaCy4kzXLhUMajwVXidZQgCNvX3xWAMeWDWxZedv8pRJPW",
  "key24": "2jntcrfyQYC8peyqMrD2d4wGsRGCksZC7agfALqLwX1GkKthzGtTccEpEo7ADodiAP7YZMkkPzxRsA8w2ja6zWUp",
  "key25": "3bBLVUMdycpngoLuwjkfiscWMDH1Ej7LC4WQgw1A499ttWAiFM2RSTELhDeeVUHNtrmu4qkWDSAMGYkY9vdRga13",
  "key26": "Wr2NoB38m8zy9pBBYttKv5qj2ikHQSEM3VS3dpzVyH8cjnbhdYYQE7LHStsYHAdk26eNLvh7BAg2gieX4eVC1RV",
  "key27": "57RVY4AHgA6gJpt4kQr5gw3sD32w6s7rdNBS8wQh16EuFvLm73NctoX12ugC1AZz3E3RUz1Zo2V6N8YBSUrsbkSe",
  "key28": "3neXTCLUZvKaSsUxbqMceQRvtfh5QwxrwYZEM4KpVoyxa3HGmxRuqt2rv21BapnHZMmx94ThjALZfq6fzHAauXzD",
  "key29": "AU3EgkSNqbyTXjKpGCLibM5BwKtXs4JUZrM41AUK3iVbbWmxRNN8XTVwpUFcENo2jsZ11Gj7GHRwREBob4PeLGP",
  "key30": "53VAoKE5rM9FfgDPbfoHFULGWjcpp52jghy1xvrNpG48RFNfskoii168AAjdpCym6cGHeZZwyqtJr1oK1iRBZ3hG",
  "key31": "RyZ1BfQeSEUhR5hM3DBdToWAPu6G1oQFXoQAa7QmWMcD4kYoQdKNK44UF1548QMtnq7YW3MYNWhxVwgy6z62KxS",
  "key32": "5j7o9FAMidven39nkqqoic7qMsvQUxYRVM77T6AEBLitHGgnnocbgmaHJRsZynaUDV9ka63GkA2qs9bLEiP8Tweq",
  "key33": "2oqdCiZSETGR9aXMXKUXWWEXEokDAty1mNj4dQ6yGQYBy9Ryjiye526TnZTiAarBZcXu2vB3sE46ZK6QFgXh4fJt",
  "key34": "5vKegDTBoDrRsWHh8KAFGmummEpBqgc16i6eqVFMxsW46yJHfzfW8nhWQCg5AnpvbVt4LH2FdzVdZGRan5wZ4SM1",
  "key35": "34iAEw24pAp3CLY1TfHqz9HFS4QdWZUdq4vVsyyBMAyDFfU4piMeUXSZAuxuL3dzHUcFKp2uDt7WPZ8j6jdW8vLF",
  "key36": "kmbuDseqhgZadkRt18c9f9eQJXLT53J12BmUtrwQZZWk3zsJt6NRYEHRobvxD7DRqgu3bmFsiQes8iywNEoMfNv",
  "key37": "63LcAAqtmxygzBGUmEiH7FVV85wFhWHdmUkZrKRKiD11BTQemmiByA8wJMSKcwu95NtNdFwRwmevzXeCRbi75dPA",
  "key38": "5M4gX2V1d3xv4KA5AnFpRYmVE6wYpZH8PkQbXaTMpiba1Gj5TYW2f2Czs7XXTCQZrjgJYyKWSCrHBFrCvAQrinzf",
  "key39": "54M8XrgoU7TVeBJynrv5xmR4shgb7VsEQJM7Z1vzF41SdgQJnUwV2qyVa4M7mtwhp8R1Pey5BBFKFbtj3ykxU7G8",
  "key40": "3w8sx3DyPo8ZNs6sMTCRo5JDguqSCyfmpdvnpcXo8N4dB2XEwayJ51ysenr5k4d9EGmQ9nGka6d3adK5qHayg1Zb",
  "key41": "41VxAuWgvZ79nmcZBY1sYEivSzB5gFXRhDr9uHuvPJtadUgy3iq6N8eoQMg3jeLs2uyqPuHw7MeeaYa1yPAbffYd",
  "key42": "3TuHPYxegGWLG3K3Qy8Qo4HQcmyhPom63hs6yCJ4jJgf7hp3hPp3promkK61hLWLVardPSaCoyq23ccXwZL7iSED",
  "key43": "Zp5a9p6khRkQfZYaJDZtZ2mzcatjbk2fb2PgDvr7GXEwbyCZt2oXu7xDDswCRQFGzunf4dhpxWjiAUc1hkpfp41",
  "key44": "fMxevMi8uvrv2UUeTekTEaBe4TzGhkgQiGnz54Z799BQxKDXwZySrbShdCkMWMNDfUSPP3QMhYcBm4rnwXB57wC",
  "key45": "3H7SEuQKEjtFH3LPGxYVbNPnC1SGaR8SoG3sLToYf98wUDUd7DKKrtGz6dPK4dDTzapos6FdBnabotDF3mnubTaP"
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
