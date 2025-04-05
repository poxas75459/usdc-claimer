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
    "5nh4ZwQhWhKbtKfva48Qxmkjn7enynB1Rq9NqtEvr2cw7tveEGCAipCsVWpv4bdiGrnY513LHQGX5vgvV6aPUxMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NALne5zJxUCtrCFX6x2V1z6Kui1VdxYXGdQPjXBeWNmq2eGtXGfhRLojwBMxAf2oLyJYfNfXg8cbXxtGNKSTRrZ",
  "key1": "3Mj7nw7aEN3jgrTeWBBH1VEMWbMU72AfBunP5hm73m4obhFWqNrTqxAsX7coyzMTqwfKAwWbca4FK8Rw6M7WWjJq",
  "key2": "3Hc9K3cHey5mogZLNWL9e6U7oNZVzWGwr4qMXknZeuevmahzfTXFfFe7RFoMPJWYx65Z6YtNhKsa1buDVVd8NJVq",
  "key3": "2se6WRXbHHt3oAfcXmFYQMkNpMY5sJgXeYU5aUoh3PXwGuME6C6Kg23t4zh55RU7KxNKGphf7HVZ3UBoL2EKyrEQ",
  "key4": "4sFLXacGLe9zcXgCnvbk3snpBbQe15sBRu1uBACQyJwM5RsHGn5YWtZgkbT9STo1hw6EcShBkn6JppWChxwDfLh6",
  "key5": "aCiUm79fE8fRqXmKrjFPw1NCGgQjCpAWV2ADNrHLQ2Y2fLqvx3YRuDpnjvSpdWYkBdMKxdZJXZwkQNdj1sMBphJ",
  "key6": "1UWzhU68uKcf5M4pFf4gPeVQyV2ruzrFnVPYNiJd7t5aNcJTuzUVLdpu759cQRj2hQzVLk78zvDL7nvq1mJa3R9",
  "key7": "5WzUNxRLAXfoa2BbHLmaPu77p3XyH6G7S78VZ6LoPvJVj8kiMrX8jwaovNrSapekg5LmxRGoe2x5ADGxUUZrB9Wh",
  "key8": "4vXgKisA9hczuzYfq32rySUMGSbMNMtSh8bUY7pTXXQnBxhJSFCeEdtkwFsYPqAoxyP7R76s6ajxHBAE3tQnBxaE",
  "key9": "5tJDs5xvmv6kuFP9NaNnbCbrVbrRVKKTsCbCcMoxmBUAx7a8kEXmRwARFfaRaLwKtjAZ1AmvNBzWuYddtHy4XaqB",
  "key10": "3YZ44K5TMn6pHyMomBwGnFYj7LC7dKwod8S67iBXdJRWdmxrnd9m3iAYjS3q5rrbuNp1RaLPucz2y4LE7JLQxBv9",
  "key11": "55QFWCnFGTZTTJdxvXuHQYsUK7nXuqNWSdcYk35pE67FisD6tbvydM8kb69toDw1E7C9JwjdHmBWsZpiMjHggBwR",
  "key12": "4F6exyWBSz9sRiXq3kh9agrz8JXfwmS3t2CTmFqhaStKScgR18fMeSgwX3FuQYox79MnutpAsWHRNQpUzbHbHudF",
  "key13": "5fPv5r3KesVGNvHrAu4hDCs4WkG6vUaaYN7AopskqycuKgeth7KQ5CSu8XJUfj9B7z4bwYrq3CTWW9aNRR7ymyo6",
  "key14": "29cBqxvNwYQVcuwpwAJeD7drCsKACtEbpZmXUQNKXrD5Bv2SAS6oZbWWs6aiodauv1kNnKfnv9fhiwkPJSYzPiQV",
  "key15": "4Wv9CxmNrNb6BsXXbSTPAJRKJ4gBK6UycJqzf8fSrdJPguX1Ztz4y7FgdW7V2F3vNeJqRhsD8uaWYW7TruBJrhtq",
  "key16": "4BqMvBHhSuJPbh1VfcNt6LQRH1q12n8aabEN9ztHgDUNHDqhStY63pKpA9KuwE2Ny9PrzGPNpnehtgzrA723iRgS",
  "key17": "2eXEqVnLefdo8jR7G5UZfSAcabBJ1jamMLEajR2J5Wodrq6Wi6ch6KBvYGF8SV7J4xSuBnZFbwqvHmT1XgiSfUzZ",
  "key18": "44ExpzugVVicyb6GjBe5fFCmHYsA3d4LVC5FSHFfn8jakm7gkpNgWmbc98DJUN5M9zee3yRWXq2sTFmHg1KSt3zT",
  "key19": "jLdhEQRfrQ7knK6bypCJWiQhwZpLHyGd2ErXno7KXVhcyssPxoVqXd5zhmsR4pA7Sa2Hu8YhrTzdyxTkCge2nkJ",
  "key20": "3f6WVbUcL5xJqNjiHFNRZRSYfdNtxut7w6GRSNDhZEuRp2BDbTtbd9tfyDrPMseRCHCBDyabeVDayoRjruN2efc",
  "key21": "aW1uuMNTohj2PoFWzieJyb1LKQHFLpfh1so6rNP7jgR8AmbZcafzZD89HPomX5x1WsoKZXJupXzCn7PCJ8QG6hJ",
  "key22": "2bz5VyGP6gcuFesX8EYxxxT1xQ6Qy2XYTGDzo2QCotCbm1nTgRSbZRosPsWnWK6ATgsq5gQe8fRCF71byGMiu4S7",
  "key23": "38Xr4SrySbHHAvM6YfmJjSZKYQd7EndKiSCZK8rmwU1iT2P2G5YKXd8Kns6da7mzvHzNpCn3acbAPoKtMkWJgx19",
  "key24": "5k1AgjJqwdGRxSn6DidgvAbhBWnGnoetez1kWVafkSSEKZ9nru2rDJ8Q6ULYR2hhKn99YzdTPXgf6ZvoRJBFPu3G",
  "key25": "46eKtMpwmm1HVX5MRPx3hXmNhwZ4Rg66HiQDZabhPqfBKBN6iSpymoPAyFmtfeyxNjZ8KuWc6V725Ge97UBCsJyP",
  "key26": "2g3iuShkfrEboWDyhBpQDBQmVJuRymu3Cp2ws7YJsgVQjV7W9Dx2vCPd7gyKJqjH5mDFxwiHExGHS3Yxae7JKN13",
  "key27": "5ZEVbWtKmqphqSeWyX6BL3BuBzXFUg4jTYxFxi3WBjm3tt7qb9zEJ34BXCAFHeikDJTC9kFTgW2f4NmvtTu2tgh3",
  "key28": "4B5sWc5RBqdiMtVnHqtbS6gF7BmoE7BhuM54erZ6DqW4Th6RM3nzwuGbifsyfi1dscBT7LPw2p4FhvkBigxMyFMb",
  "key29": "2RCmwytpSHfSeb6T9fedda3NrEAf45B9uPwwzC7WrsCgyyitDa6fGUAXgXMSvZchMVtzEAupSyoueYjyqMfZfSTZ",
  "key30": "KhH1HFNcVc6e3JVkvDUYPshP7k2TonwX6B5Kj4yFQQc5sCdGXEf9YY1PgsNr8RkMDu9od3E6aeSoCPXqjdp6xSx",
  "key31": "3N9UcUD89ghAiDmxJAkdRRr96kXTz9GfMoZfnVGPpN7o77dDQ8VkNVwiwnLcFJsrJz1Xau6gZweoxjHCVS9VjBDp",
  "key32": "uCdb4dUq7HojwVBtFgPJTt2ATM3ApuxBC2zkHXyCq2zA3dQp2pzD17VTgvVXedYeKK39iQ6k18QSSbRaiSbcgK4",
  "key33": "4PPJP3xFRhBjsu3S5ErBRCxvmzcEKrBBzRPRtGpo1pGoxSyN9g2tEkhx2zPJdgxtUxudyLFMdpSP7ZQ1GiMgHkk4",
  "key34": "2UWEMrZ2aYZQ5v5S132ftpDu3EytP8tc3JcuQdr5k5pSByy8P89Ctt8TFH5wt5NfqyuE1HxqL4H6jroNup6vPjWo",
  "key35": "4E3SgUmQh3yhxs9mxYo3Ap9gQe9reHrJ5fZLwJ3XYzCREG5Z5Fmgs5mW3Q8GpuZmh2Uh5K7bMVVnJUGcaLbvnjGE",
  "key36": "4ekn3TBwB3rqJ7bkM2b8MsvMpW3wYLRziWjENhhmVXU6e6wysw7kNfw9567fNAn9TDndCQ5AEqk3EiVSTk67hdzJ",
  "key37": "5gmVLfropkFjSa6j6w3xJXxHxsp9BETsE4jziZmLFmidtMAr174yb8e58H3BrqqJi2orJahtQc3ZSRvxcjxTsEyi",
  "key38": "2kiMogZZUkcuV1yB8RB7Jy1C47UW3exUaVay8uCzUJMniEVVmmCs8cgM3FuLeCo4okFNGt3jdmqco7s3cs78NrFz",
  "key39": "d2K4pipuBzx7fjagaqfsJdMehLow17PK2j8myQMq412UYXJnHW4i5UCsTv28gykrixVmtfF5e1EZidPXiipFgeS",
  "key40": "334VQ5jfa5QCD43AutwzA7F7LtQ8SEHqh63LY2uJ2fJSs4nqS2hDaQ9qUf31Ycpuira3ygEj6gRWSME9CvKNcTPW",
  "key41": "5GrJSjcBgEYj5yy6RgySEsSdAfALwf7JEcNaDgGmEp9sipr69b84T84QpYnhtQLKAzbKXixHqjyXr2n7dhJUtQSZ",
  "key42": "2wPqkASsXVJacJwRHxbUJmLV352tJeqfTvGD7PD58pctpeVnCHfDbshRNqChv7wKFM8do2krEXZUHzJ6kzeodukZ",
  "key43": "4XUJ2qgZFWCCDEfJ3XdyJHRkeo4Li1kEQvUUy13EZjfNeCny8hFDkRLLng2t7MQDV6LuHQnGuQ4bwgwgn5tCrAn4",
  "key44": "cZmJuzsPQmBpQHmKf4EVqbFe2XWiMJB9NZjDqLfyyCaskGjk7W3L7PRtnMTSU5ZZg624rXbnmkqop6JbJuG5tgs",
  "key45": "2cS8qRLEd6tetxrsDYpZyKFi7mx1vpFCvCnRuJ5mRmCnXD6Qt5N4BjHUvLkgDdJeTbdoLwmL6afWiEDW4AY5ZUDu",
  "key46": "2gRzvSqCHA45MmxU4QQhTwCX67QJ7P2P2RizhgUhVp96QdePA2SFh56Px2h1HN8L1zkaJ2p2YnbEfZzxg6CrEvsf",
  "key47": "2Ly2XKLiJEqVciNie64gGdhsDAEqkjbBmNR8UPMt6CLjfBhctLxS2DiT51qo3wu2kWVxkvCWuPRsoNPYJN3VAsWi",
  "key48": "63ESV5Fd5gNsMeLw43SWabwkwmmTpVdvbqckNCSNQBriwo3jVXtcKrkarkrQGBvSbaj5SssAyTzdyn1mahaNDbWD",
  "key49": "4sHcMxTCUXBvMg9QhFxqr6GywR9DY3CU59uKSeYcdr1iJCxXzisPFe9wMa9ozQ3nboQ9qHi43bN7DPLMfZL4zJpf"
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
