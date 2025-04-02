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
    "2c9htidMS8TpAF5oddD12iDX8DwRg2A3TCaD3FhGt2dz2BuFZGejWVG2RU1w7SSRi2skvnD3Wf18gVjKyatgfKWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K3ZGbHQKBa9xoNPdU16hYgRti8X64BeUzovQvVeTgNb1VEVqMgx2LPnzBLhEFnZA6HvwmAsAPBLdGgArBGGneHc",
  "key1": "7snNr3pBxmWkthDVVhYPxqnT2Nq6SdYFuztrY8yfs1biBmu9bFXWqjaaGgmC9uKRsvYJUi4iVTyAwMHpDqARF4b",
  "key2": "5d3hnkxK8msRZES79gaTfJakNxRmtzx4t2hZKHynLvZHwRVfB5VU2Up1zhvo7K1SxnvE3tb3cZ9qPFxS27YM3Qcn",
  "key3": "55zL96u7R2k9VscdYoEXQ9ABMAK2ndPUSxjx9WS8BkrCBFJ5KryjL5WaH9QCBHSWds8S9uVcSGv2MfvqyBU5CsmV",
  "key4": "3jQzy6y9DjJ1wPBTEiSpATvgmK3m1mggfiudNeKQZPNTi9SxE9BvaDYx9b3pCAVbBVnmZNba7NofNcaFyHF1Ecku",
  "key5": "4u3r52sX6oiVsRkJZ6gZmurqEjeZ41Mtt2x4CcoeCPJGGYrN91CW3HRP1S6TMqDy6NW8BgFAYn2YK7cghMwEjmTu",
  "key6": "4G7JY6XAcDAphD5DQembgTYU6YRAkLWx29mcUZwjXZfjkoX1811ekcEk2y2T6RdehJ7xWPUspaD5pMYDuDw65pkY",
  "key7": "3jccrUDicXR34x4wci1KkvznPitPAREiHDwPBGDEqibys3mZayP3hteCmEq9ui2NDMDEorGGc1DXS4XXHyFtQEXh",
  "key8": "2Pb9Lt8UG1w9NmnNDgD6NLNxiosVagrCosgg9vp9ict5HECScWyfW38eMULJKVMThoabsf6nUM127N6Hm7veGEnu",
  "key9": "NcUEpmqm2exi8faW5exKhmTRmkFq9HJTZuuzWu6WS3z36z67jZRmHcD3vi8A7uUQvBwrWjFjQDsqZtJzAydPucE",
  "key10": "jR7PwW94eC9dw69WdXdG8S7zbqbPpapYcrCKVfzeRcr6nv4htbU7mf1ZamTDNzQBzq2zMLXAAwhFFLqqyCB9A7F",
  "key11": "XXWSfjvLcbtzTPqspuuHegcKfaLWRkjiFrfT6tmZ5TarmSz5GHNvue5747tQq4j9AFWg73BZWXr9CS7Sfutn6Z5",
  "key12": "SPzV5do55aijH9mC1KKRPiqJBWWH2RPpkz4pBvGWJ9oV34g3SxgqnAGhU8eseiwLnUq7gzmxzZuBKTt3kuYZqVe",
  "key13": "5RYMHmc2cPZspQJD9ZKtwuXN78rhQkbgjY6q38bAixjpDDUKy9kEKt9VnAcGFvmA9Ls7TG6fHNMXTfrDL1T3cyYG",
  "key14": "S5g7mKWwBY3A7g65zCGRXR5QEWb2mTrDhVmVakXP8dwKur4FTNFrU3Ff9gu6nVciHoMz27wdpa5PrJfi4cYnBvE",
  "key15": "3zdMygaWUabeKQe6eyTA7D3b2q38hoic4yQ1FmHZcjvwzmcmVc4uBemKmSgHc2betSSawhzobCkLGyNv5ZfE3fGn",
  "key16": "2CqpjDUWG35QfMg8PZ6xn2jmKM48WP4s6UwT3TCAnafxsJxr5rDsJCBWSZRjTjXDZkzs333hRDusTyhDv7eFP1u9",
  "key17": "2pMGoCbf76PK5KYPiESn12o2wsWBsYs3SRfGbxwWezGirAUB9Ra3FBUfpkmMwmodm2GS2FgkswKXCxBNVG2BiAf2",
  "key18": "2QLLBFCXAqqJej1z3mDqwwy66UbjcD4zk3C4Y4jeeZC8vvZKt84SZdJtLEYXQtDStibDoxfkPq6f6V7kXcNqeLBK",
  "key19": "B4fHGB5RqsfAgTUM2pCN14mUfm2wc6FeaM43nQ2zcNsNqfp9SKzYNVFzQj9Vk3Kwj7Kx5zN9S9PB6ML3k1w9Cce",
  "key20": "rsxCGNCeEGjq22LajSmYtmTBCc6sZC6torPg1tbZbVwjw5pqoMiuUCkASwuootbZ63DwMyPzXG4pBWFxnwrDvci",
  "key21": "4DXhnbJLk6AaJbAitSNMXmzyHK42RYNoqNcw1Mx9zC37GqkGM32Z6pcFrUX4YoH1YHkLdeQLG1dYqjq55MpkVvsr",
  "key22": "3KizvqUV6Vk3VkFasRUMwsYa2wxXNCcaTzaQmn1qGaupH6eNb3gZr9a8HzuNe6DFhzEZmk1eirk7RM9MerAqJaj1",
  "key23": "3YGKLR8iNjyXBpo5VbmJxbbv7SzuKzFGBSvzoXAYH3djtfQHiTrcGhw9ABuTpd4GuZPDnEZ6qxQ456cpxHb3j9NU",
  "key24": "2FM1anRLYzbJDXigEvyUkUcCKKfwmAcX3jof2Cfe12WhaY1LtRicx2Jb7dXJwk1pWZAMNd37LpAJvzqqt8Yd71Py",
  "key25": "234f1tmeKCyvDsRNYzTRe1kAvoy5U5hEiKbxEHdYZfV7dpnoc9TtcCJpeF28vqfHG74TiavTBXyS1S5HokisTSSz",
  "key26": "3EPqU89sySSdUZtNxzheCQKvqtvL4Zfy8ago5PYTBfa5gGemGBu8ZJzEq9fsXcajePEm45Cx9WcTwoM3xVKtn1eB",
  "key27": "2RfaHaR9eVsqkeSe7dREqu2DdHmfRnKgxDsaDLwQ9vRWS7pXyQNnGPjDrxc5wqSBiyCWDaswDuGZxUqEboGFV2Hj",
  "key28": "3YzciuN2L2kepptphfndFr8GBFkYiQbW1uMANxmDNQJYkFLHUDnPqH4AvvK2ZpcJTuzaAsiL6PD4Z3Sw3SMypm3V",
  "key29": "4wcax6kRF5M9Q3pau8QfJMrCcqVRTPTwzP5h5odabfveAVXMve2jhGqSaa2aCyLfeyNR6peVxS379tDag4axv4od",
  "key30": "31JEj8M5fMt9WvzNfvSeCxqFhz91X2P3DoAvVdMHbzikBtFmyo3uK5GDJz9hQfPYZ8D5rfBWwN58Yps87ez5n9zJ",
  "key31": "568yodKPCf1HCAf7LhMfBRwSY77Fr8yzVR8UFN7Ww745UhBTJ71QdNTh3g5vm1cN5KdiwY4j3cPgPxE6zLY4poFC",
  "key32": "2GRQY8cPwm4Sdp1g4r7PdHdgsZCEzbkyDYULXKUgdMG6z6LyMAoML12WNB1H4yGHg86iD7PtkSCm7KMJ4cy8PEf5",
  "key33": "o6zN4XAFTzHaGu3bBcddW9h9uwgyEH4XkVZhm3YCKVzcXv1UnjmSjbqkv7Ppf8EfbmUKBELLNMz3V2oFNjwnVxr",
  "key34": "3K5LUnbjCSnm5B8G367DHKArcb2SkPiRDuCzJgvrXnStCz8YCR7oBvecowTWSbED2GSJF16erTxRJzceJsX69dHg",
  "key35": "63NyGTJNa6r8kUwdahT3VXpG1zAwhygttqeBLwuUrYh4V3pzTc56G22ai8r9nGNfa72R1GHBKeLPaHSZ8Ck9rYkY",
  "key36": "3vvgeKjsifvhrMbwesfKTuzm7n2VkNHs2VgbcEyr9nChJnzXQdn6JVBUrzPom3Qy1EmtPxRm3YS9pPX2v8u6SrLi",
  "key37": "5GEFVwqPJY9YkJ17zhhYti3RjfC6Po1hh3EAaLZ1BZFR9J8nHFYGsxKWqTFEKs7n2FzUMqVdbCMYTvWDjHqWjBrg",
  "key38": "4wWp83fWEy2pZZWRfxRvGPeQtMcKCbr8Uetqn2XmHdC5KNw9UCcunpR7PYyutMPEt8Qy1sZCQdLGTxS6rUtUcDox",
  "key39": "3dnQtSj2PS26ZLQMVQ23UcJoc3xaZ3LLG9XoKrfp6kq9hDj3vYc7cxeKzpHqSR5Kmjn3hKWTdvdkWz8Bik8wtpeT",
  "key40": "3A2eQagyn9UVemB1FWw1GWLQsQJyHT9tXMJUpGsAg2dzESjQK4uSNKmuzr2qMkB9VEqFuSJhDGwXmnQ5vnsC6Huc",
  "key41": "bhxsJsUXXe3bhoDpbT6UFN3L12WAeKcM3pW8orCpXcDmoPqbCP8B1LxEvRsmr48VpHyxdQWo256kiJzTtPph8Rj",
  "key42": "45H3Q5nKcCbhWTtuKaDRdLDBtTTcsLvsaKrtNhzcD111my5TPXL3sMi3pF8FVqRe18Yf6Vvm7ueYXaRkEuiDcamd",
  "key43": "2ZahBc8haF92PZmKrPgossAHYhf3XjN3AZrELXF4F9nhCmxQUNR54Qhn2hVWAiwpgaupZxZ8TWdFU3hiB6a25wXL",
  "key44": "5FXXChs5RhpiNL4KDVNhRNWA1UfLRXiSBLq59K6UGLmdURnEZTgFemhDxr3vtMDRQ6FEDgAKFrpTLvxh4QxVAmmN",
  "key45": "C4FcTfNLj9XzYWVQmsLDbVstbj3Bbhk53GCXehVsHfhQU56JsS3xjqS3qjrzgjQqHedPdNq4Rk7nSHFxZCmHeJn",
  "key46": "29hgDKu19eVcVgjNsarjjnSUguQUph4qA1saYdNdkuvhVcB5ZjDy1iFCLgZ1cbjwRkxvBaQzshtJ3dHTEfCXF79a"
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
