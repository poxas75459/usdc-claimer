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
    "wYdqxpda94u3MvamnitSzr4A77Mzky7YqjjLT8cDojuKKrpn4Pt34Kssnf3CUQptmoFFTbUv6TaX4QdViUzJY6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UCVm46gx4zS12SjFMKfNu6kNQrfKEKwZAZ1LfMEfaHbmosLHAoXDYMyAa4XKYeWD26DF9wZ5MfF45QSwwAxPz5p",
  "key1": "53g5YC1iLBgnyL9zhtfJubr7G6DsEq81wLs81ctqMQgFZAhWqjPH6Kc9FMZu2yWN5QCaiAV9QkLaR6r8UY33N8jz",
  "key2": "5SCE85cMevwrBs3uXjJzRVizihxtYx3C93dQA7HTKusTWS61w7xv5szNcUKffsxETY4r4FX1BaHh9Z4R5XxuZhde",
  "key3": "3G8HQzDBC4m1eC9VZh2iNkdFr2U2BRSHQ4kyrsDH7LdsEDLebcfjEXDK6tsgV6gMxheT1WkLjAb52KuGEWTLmZ3x",
  "key4": "5noo8jJ152fZBJ3Gdf4nQk7n6YpmSTubFQZzQLGitfxkHeuz3vks7Pnboq6dKykPsKQRu78m8AP8LvoVivHuT3Cu",
  "key5": "4fR3eH6isy9GHFfREsf6XyYW7HEqYCy9LbggTeaUSBwVc4zJLpchfX3rqdxqSBk5w22eGRqofgxkasE6Xrpf2UZq",
  "key6": "58mE3BNf6ZiuzHMcd295acZJ4pquUs44cbvANMAqvDy4qrY5t29PumfeReHURrb42bcEdXsmo1kdUvEGctBVTDZx",
  "key7": "59LH9a14ehapwBSaJZHEuRoaKigswwX7AQihFrSnwHqERmX46WHG5SGs6NCK45MHZhm8eAAWrHxV43PtMqZf1MKT",
  "key8": "5RsMLkuzBsJTFs34SYwhrwS9MK3eCZqeD7rGA7DjPYZCwLeV2ZpzRoTP1QdYJZpFDH34HHWQWF2b6H7xYbZhBVtV",
  "key9": "3JsD5brer2HdMKaA1KzQjs1my4ZxAeRt6SxNDkbGSsJdZcMdjhfFBnBygPG7nQyXgNUpXMagd5vaLWcYFtZBmH3U",
  "key10": "huHUEB6rZzDU6oFKrsst9AwYydyzuZoyJdtoUhADCv8U9wrL86rT4zDE4RwL5bpL1UTXvtqSZMCqTtg297JkUQS",
  "key11": "4o3UyMET5REkRPaZENDoMGksGCkiPb9gxXwLus2BpB1ecHsP9Fuo7b4mcyEfA51tiPyJ7RJFaYS2tnswAXg7atV1",
  "key12": "5d1ajukf4yC6ipTzkXACWeZLw8qc5VYuY6rzQKAWnGtgF5gDctwBWdjjbY95RyLrChg2xqKXyAmJQ7Q6C2SoHHgJ",
  "key13": "66MvrM7vMB1dCHAF9HcBgW7cMjQSB8cweUz3ctUhxVaCz6csf6Ywij2oEze7w1kMiDs2Dwsd8YesJMAqddUuyQg",
  "key14": "3wcXPJZVhQqsKMhNJz9axoLBjaX8ihjWGXgWSfC6QfV4ecQUxGUK2UoTQ2KskgcPA2y4RuCr32kS6suc5Rkq8xdt",
  "key15": "YFPWVmawVmEtDAEt9PrCR8M6pCddx6aKp9YCUwNZckbYHjg66wUcMjhNvEM59EjG45UyYJvSJvVJbzGqUPhwJ6q",
  "key16": "3vtxzRbtXjNcNYsEiW68APXfmAXAjWiZH3NRrpMgC7bxkgU83LuC77R8M9aeWTy4TP8zC1kkQem7Ayr4pWPvxm1c",
  "key17": "2VUwXUc9yM53PKLBpGpaFrXVDJznPvLdNLFrVphNMgFt7ZLCTTkwrR63dMq6Wzs7ij1Vekr5XE4f1a9LUBF4QDMq",
  "key18": "xcXmo72ujh4gn3pX3359WZo2s9yqwFq4v3vndXvLXadVQtg1x9Ruz3WRUtpKfwf62a7CZzCz9fjbVrgU4B2ZcU5",
  "key19": "46fpBuVbhSvVpSxKMDxSTFzKNb3eddPhikmBzjZF1TZys7Wza3dfuMxy34mHmswH6dUQwcUzCTcHscYtkpM5bvdk",
  "key20": "3fFC9Y17J5dnZqwADQQ9ZdQ9iqoSVo7PhtjzYvbxo99CAiR5qPjvn78J3XG33gUozVvaBGdYPCEGGCETrmysYgwm",
  "key21": "7ojYRy1vNamiWRrJ9GpzhqorrrFjpzm2xUGtk7Lpj63SvcVuKi1Qy7xzHD2neBP4MLN6gQXDQ3vf3aWxKbVhZEa",
  "key22": "evz7fvXYt1EfwvKVKqbruVYjjTwZwWiAp5hedrBjFNvnG6G7x4uYyPcZdoKXUbcjzrPRSKbRDU2z8MPQ22crpe9",
  "key23": "4JH3y7a2rotGjfiLrEWMFxvpWVA26owbww6sphDhik9PpqiyeLPMH8fHtVgbmKAMRbc2XDTNg9r5hhexDNGwPkNF",
  "key24": "3oqNqz5uu84UTn7ySgLtT8VsD2GktooRU8KMooduk6CViq8NXYhjCs6rSQfnZtA3j1mYeJoViSCMVrdyA4CMUy2r",
  "key25": "2zpmNmxV7tSCbbeMd9YNgA8hpQeeCe2VC9fwYbvHrDxkzQ7SKhhEggMzRXCD5UXHw3MWJBwo4vRfbH4DcxUc4fpu",
  "key26": "55QHcLpzLPLTnxgS3tVw4wR3iag54FgsHYA8xESwch8u2D6Aijr9niYR8BswRpSvMq4yyXzDuWFAP5a5FmxuaiK2",
  "key27": "5j526eSMCVbniotJsYnBYgZjgb7SLxUs9K8MYk2cLw3mLfYijMwqumHKx1EC6Nc1wHgceYRU7iuXWboqEDTVmSpp",
  "key28": "51Ad29KgjCmBw9iQdLYBTmQLYBfR6uzW5vxv9Dyemqb44iJxjFFQZpFuCTza1bDztmXwJ1TijRodBaEhCwCatc5x",
  "key29": "hCBnHXvCBGQeNDJTnzJnXJJbgMqCWGNp8maHmtQjvMYSPLmyrbCXFsFp95fBF4rWbR937BWbUGNro37awrxytJE",
  "key30": "35Mq5zHuUaD4vcAAsJPsN3KZQthx1v9LpYkLEPqQUCcK6FABCAdEcUgWMyJ3mDSVUJFMsjePEhq6o5hgRrRvuxcD",
  "key31": "255qfJYiNGaXjabmWNA9rp1d6Aizd9PprX4Fj6LBW9psBgx3ADo8bgqKXDmhBVSPmHi3mMdxFh6TXPmbco4EHvU6",
  "key32": "28WGsTwTHB4PckHqpU3s6KFsGmwdtcWTUf2mC3ji76gbdgqEe3gSdReJN5ADjdNjUnf7bGsPhiGchr2sYTWcwE25",
  "key33": "5zGDXPW7tZ6s99q6Vz7GhTnDtfo161w8612dyXPkcM76d5nsLM4TFVXwhv5VePSEXPEYhEnhGnxQGc2N2ugr4Aiv",
  "key34": "N2g5vpczy44LEkAMfUzNssSyZ21U7R5PqV54uKSgUxLBUWn2HvEsEvUpey1FnJ8AkPQScPaKNoLTnsMuFByJTU5",
  "key35": "3qMG7juwPowDGHC6zugxh3m6eiBgJ4oNCG2HRYMpwWiDMYsmUGJV8asCdf6uJLKfUpEmE8ze7FVN1eJjqu2xogRx",
  "key36": "2Ytcx21mNPs2ZAWNEXQ6mxFc833nqGEX4U4AipAss2djsJHueRH3yLU4KgywqPAfnrYa32KogTrV7YaXLcgkMVhW",
  "key37": "5aCuureRwPD1dqp2Sk5u8d3vquhX98mQ1JX4q7FUQ3f5WEaejktMVJvRxhyFFwV9WTBDSqMNB7TSym3eA4JN1wLD",
  "key38": "3Xi1NbEu9byJDMN6U6bLwBntP38dLH6biPTAY424DhzQRQcGVvP9pPwxsXMMqsDHQ4kgxmJEz84nNSbwSdXTa23"
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
