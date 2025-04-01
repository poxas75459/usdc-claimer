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
    "4aXND7Hcu9Az79oauwoJcBNMduu6QQyYJUcLhMy5iwe4nazuzkLCuTcao9NVi7GjzGTgvz7YjfwYNjEK7brBieSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42RMX8Go7fKQDBkmCmyiTVwdwKjunQ61Vefjwo7B1JUDbvtWCBbrNZHb1iAgoef8HyqXEevDRk2sYob2t8KnwNbF",
  "key1": "5eAkdg4Gr3pVRzgqCSn1zBxvkmZ7LNdUvFie6FqQ3BXGzxH5nAs27VtfFgnqVb7w65GuSQp8zsiFVCQVVek3y1k4",
  "key2": "4RWSBzuPKBwDzzSHgMvLsdajSSC95eaBLw7EdqUhh4DMueGD8DabNdhrt5bkeZiH3ZLS6DHErUzp8SpRQyZSLGQg",
  "key3": "4N3GZWNzhexxQ63Pj7sQcUgcw1Vei2cCfYacNrTNfmDgHKT94Eemr6icPBu2ByNMWXs11WdzNmqFEehVTchpfyAT",
  "key4": "2pz5rSiuD9mrmVbBmHzDrvqUTdt6d1RMFXDidxAxbZ3pXAnUt2YXg2xTkq6FidtXEX7sYkztiKTrwFyh5b3VxWhR",
  "key5": "2ChCwABc96gwWudTPT5p2tQ1RmUFRC42uwd23gD84u4Q3rJfSXpfDcsa3M7vutFhDpWGXQ52dwwvBcK1UT2uNY9c",
  "key6": "j2UMXU6Pxvi6z8en7c642svj7Q3mojdvvyFYUZZcPUKFMTc4SAvztH3rDJdYPgCTte89RnATjhVnotNfZZgniW8",
  "key7": "3ds9T4PpjWscGFA8jLpdyBr3v1uh7ep7W9W9kDnYUZuDQFCi4Rmzpg2JSbeTq8X6X6GDMZzaWUrGRFqWLhTyMjpg",
  "key8": "3g35U3i97BNQ681gNwTSNhfVcDLWnhFxRHY7iuox6XfJ5qS6oqbGjdGM9zopdac8JTNq32eg1YV9X1ui6Lbm2GnW",
  "key9": "56TWoqkJuTTNTZ5rCu3Bbz9X8AyMts9ohpU7AXS6wqPvcwMTLWBoUEpuVyeq5y8CYVMhgH1dcZjHrjVKPn4ESBs7",
  "key10": "41SMXU4aci2tLCmNuvAqQiJ3tMydn1BEnQuPkHR2oUVyQ2YGdGjty3rgkg4K1wWLey7ziTaX8GMoFKLGfh28j5pr",
  "key11": "x9szs14XNxGiz8omgugUgqmdMzvvHTkf5k3vpkqDVqhQ4FpGg6ihd8YSiV4VTpnXQEgRKpNLgpAWMPHpHSa2VuM",
  "key12": "HCWr751WQLhwTKqH7Pz2v6ajxemAiitzH73QKgZLHtz28amhzKm1vUW3feJ3zEeYBog1YH7Ft77Tdj2o2sc6i3v",
  "key13": "25p9wf3pd3J5VTevut6Jy4fhfuye2ZquBopMFawyY8eUcA49FDWM9pfgYpTc4Bk4PPMhUWkjthAJUiwPSABT8Eac",
  "key14": "2GF6YSTc1BjH4hCSeEWN4EiXz6cHnAzWohikV68J6y3vN5eM9HzytMwSfd5qxFenMeaSPDmYyJeCPtx8mV9NY5sS",
  "key15": "4zNoVtW1rrm7W6bBAKa6zCLd6xx8Mnb9BHq4uTDDY2kT2kScfgsZgug6HNDLQ5J3LDn2Kaj243Nk4CNsnswAnaXw",
  "key16": "5aJSEvWeeSvGhqXpgyLBoBXLJreB3CqJUiBeQhovNY5qqssJWZ1ZXcLqCJXvSgEYZH1TjaUPpWPjQiHdNCQqMgiX",
  "key17": "2qgFw1D1mkqqJ3GNZbxckFt4Y9269b2HRJMg5BTfNRq45ffJN6L5a1NhFUajcnJNrFa89qs6YtNHsBNmwUVBYdNk",
  "key18": "2Mo6xGdKjRBe6C4Ggv3k5ZwgxswtWcVa6os6PpvtNCNpebCQyW6Mskp3vFKSb5Vap5Et1J266WmSG6KAAzMRWSFj",
  "key19": "381Q4XDwcGjdGjqKWLZdxwXGKChm34tnAeTbBaJff7m4RGrCMJ2P3KKZeh2wCa8KAkAvkjp7MBTkA3wFiD7dyhFo",
  "key20": "5pW9adhxqwPbEuUh83M4SsqcrGTthhjWZNkPD58yxTU4Z7xucmAFWf5QKuYX4eGtHhusNw4MpiuFEnDQ3414kZcY",
  "key21": "38d4mHqCQ9ShUijFVdAhQFnjQMHbwz7jPkAjH8fFGg3rMsEFf7DCNQ1yAA4sabpPxLZgrKWMrLucnJCiMQ8F2hUX",
  "key22": "JqXauVgHiVotJJwPQQ4oChrcRzY5Eb41dwG1pwEfVVeDH1aoTaVSQj4Jdg6uK43GeAx3FfURkEMnnumMSMr69LD",
  "key23": "2QuG8BNm9NvAgzKG8bTFcNTicVsD3sdTKb4VAUJWQsvwD2t3b82sECSLo15mmjzUrH9gMViMnGeSLdP2z3sJZd82",
  "key24": "4H2cjEEVWt2Eh5qcFbJhjwUXWqpSy3fo5D7Hud7tFVxrL4BqWQqwnCFc4hr5RTyzzfrANiDDGevX1JVGVKU2ULYj",
  "key25": "5fTZMkXc4C4eKukUKZCFbMUQfyAg4M7FetWPLKUM6Pahv9a1kwXMQ2uXhxmvpiYPXbcUWeFcaJQqPSxSD5dTjPZz",
  "key26": "5dAmAd6GhqLdapeZBiP6e29FP5ZJdtMGsCwdNfqHp6QoncC6FKLbrdTdnhvGZTCusz9a5xNrkRuu2rFZnB7UqcuW",
  "key27": "2NzoQXbXhpcBViMUmNvniEBY9erfEcMmKuaJPq2oVMKhZzRinpHq1rZ7MzB7QeFhMkwkJZABAw4yFvzfusKgQ3ot",
  "key28": "5yS5tNutymZM29z1wYqjficPWUUahfSpdmMrsg8j7wL7sUbjEho6sS7qFbDFHagxQjgSqqqNAoEJ6m3TJsd387wQ",
  "key29": "471NXcGG7nErqk1nzSz3NRdTfLpsCsUsM2Xmwp68eYvqPXckmfcAtMPjzdgHnzzY2hs9tTBZTqiBJwMEWTvrtqLm",
  "key30": "5wHXL7SpBrdvobRr4KGNmmkZLo8n9ZLZrnZZC1Y3G624PRznQArjhiAp8xDT9DrXxYjNyfotCrWT44vNPcx9RKBe",
  "key31": "5xtTYm5hqhXzsEEvzcFYiFkwWzy4Lysqvq1hZC4sgnDEEZVtJo63pZixf6KhxLv1MiG5fhKByBjSzpsSE5Me85Sx",
  "key32": "4tQeKUQSBtijNGzaF2y3HRCMppaDTkF2tR5XdggU2UY1rTwFxyL6aYERrqK7ytbd3e1XxJKfVrPGK2QeyCAGsV2k",
  "key33": "2Co234Ar1LfUmepLVVMdNmqsZiZw8q6QymUzPY5yVerFZ8Fn79bNHA8FCosKyjVDy2rKMeSFC7MGs2x8Dr2rczAM",
  "key34": "3QbhavzdwGAC2iJuhHQ3rJgWVwZca59th5u39fuGLKVyGcK8ZFs9dxMAuXNvZSQZAnx2k1m3wKtDgqjN8FCVVfGR",
  "key35": "VYhxGyuZNA9AQpRYXZcabfsiJk9MUxbUrFF5BgkZye5EEQ2LnTrzWeqmGvtGxpjY8S8KRKAv9Z23ytKwHAYm3sF",
  "key36": "54pJRHjSwaC5CdDZECnpW4U5XHTJqqT5ceZnUYf1g66n56VR1UDHUkLkRKZpk3gNYPgvHjA8aHB8RKtBNRkdiYXV",
  "key37": "5fFguuGp2dZMXTY9qdonfdHX2H5Tzy6TXEkReDpmN6yywMEnbZw2GYqHBBNfar3TmetcZ83eynDwAjjeUP8WBsQN",
  "key38": "55Tb7eh41aQ7r7Gt4GE6T8hBGsiJDUMYBvnPMn9TC8VF3zmTaY9KgTytmPAaNbhpA9ymNVzQ14RF29cAmvDX3BEq"
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
