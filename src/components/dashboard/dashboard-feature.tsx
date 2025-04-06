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
    "hvnRiYoxtXPpTsU7U4NazkM1wxKGg9tGn1irGiqH8WwSHVnTTGYyJ1xeUFxatF1MVvmsGzwu3GePYuHCTbYMjTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38TsnVdqaWtrvYAwNbhEjhH6Ly79kXDjSHhmawBo1qk7xSCMaLsA3yfPVyHtLiWnWASsou22JjYCzffd4xWzWgMC",
  "key1": "5gX53LHFT62JUBvAcGmap5XkZdzBybz9o5veB6y6MgAS1iBYjrQoRUm5fMKeD4zkmVKsMaa1o4T9RznYsyG82YMQ",
  "key2": "EvDkvWUL7neD783EymMdmJPgx3c5UMCwf1WaF7QBRKhbScgrmRFKgQeaLcJB4wbtcyhQje3va341QG18qDJb7Qa",
  "key3": "3yLtty4gSwY5E6uqvcYhsM1ojyPv8bd1A6wxMAiVycSDh1tqyzsuqgN1E2ytqXP8FTk5osKAF5NMh8ib8X3WAJL6",
  "key4": "5wAR67jSvRn6R5jkHioAxEeKJ4yF8y7J6irkqh74i2EdE1XFXtNdri1gQ83kQKoa1NDShjQuvbZekCpCydURfpvs",
  "key5": "5jSNDtpksDTuGw97mNKJGHV1NWWX9PmfagvdzWZakNiPuHgkkjVcfTGLvDrSVj92XG2Pasnkau1svWzmjdDybLKS",
  "key6": "gUHMPAFsKAuGRsb3zHSEYwVzApZWQNDe3itHZqayKSrdfJUQ1kuMj33DzdPtn4UrQ3PaBMMmews8PEgfeEcLDtX",
  "key7": "5PKQUUocTC91e6uChqsL5XvHA7y89GgG6Bim3LRS9qiK5GScRD23bcgXaj2n52AdbnxGGVBNDfXigLFG1Qmvoun",
  "key8": "42VGbNDc2PXFKV5QCtRdxXz9vkrfpE38KkT1DGuRHX9mVt9E8J4EuCQ7r67jvHdf5NdYjiqrqYtbjpD2ZcwnJtBk",
  "key9": "SwQctDoi3umCCv8zSJ43HbndBEoKsm671u9czPZmFvu2nnC5i5bks2zFQNMs4N29CHs4bBhaN8SQ9ddAd39gvRQ",
  "key10": "2roEhj6R2tBVMBHz635kn36cFNMkhehrKRau3R5DB4d8EWYRyQAN15ciFTN45ZLTxjm7JDMuvXV26KSEH4QJs9BY",
  "key11": "mCz6Wx7wyLbXo2LYKCoys3z6KuJAWcJQ3LBSVwYrARqN48AQUDFJvz16PHigYNbwBGj2D91eQVqDijfjbwTEdve",
  "key12": "3NgrkeozcJcs4oHx5wEQBYsDsQBLiobcdpLeuDdWrTV539GbGgM7SsXNUL3J5rN4agaZNKirsubwrVDLPshZuSko",
  "key13": "2r1ehxawGfaKMkHqtsX7i2NGsqzNKqYj73qMUpCYmJtL7MmWtWk4DuW6kGu4KCurYrX7Ra69XxxcLiaoyhe9koCf",
  "key14": "5mGYEwYsLVK472nQv69BeX8ro6k7WmvHMovx6eVLqFuAMpcf4sy3Y94HZT1KU1WsK54yinqREw3kFdKmDCiNW7hE",
  "key15": "2ewWKYvEQUNwnULiw1NaPTiPGtMQ3ueCiaGYYntVAstubiZZSEiGeJAGUWGmgd3L8k3WGPq98ogiRZso66EiRJ53",
  "key16": "48Tv1mzbp5TA6oRrcxuTPYbPDwMsbMgx82E2sXBNzpzhirS9CUnMs4pp86qCoDTadXhmUR84xRwW5YukbixxMDgG",
  "key17": "bbpKLuc6gsy3MeQaqXcF9rtYPjYHADkbRqMWZESDv5NMXM3w3Aam35R7bNoNBB18idAGAGiSm65higasCxV5X6t",
  "key18": "3YCHnZ9XW8poVx5vG3U2juz4PXZEaYJdpgDqKu8XP42Z5rM5nDNx9zMberwd3dd93nxpwqG1GQJdfUU2qejBuXSy",
  "key19": "7fSxMmSheigi22qdyJYgQfiAnbBC1irtLWrwL9afby3ujk8B2aANdEc3DpYSrCQahwkGagPKLhtTwK67GQjKPzK",
  "key20": "5VTJfHTtRcjFKFGWsYxouk7HsB5WAs6NQEGJKERniR9xCq8pReRRdTFJLo2TzTf76VGDgBKb7scbfzWCdS1cYLYq",
  "key21": "3aGcFqkNJVNQbWf4k4mNVMKxTSviGERiLMSroj8RUMDN9k3FkcCitJQWwC78Tc7cJ8PMXVC1dZ7rNytHyqs8h8Nj",
  "key22": "33C342J1zKqRgtNknVqBGBDsY6RaG2CrmHftbPyLgsyqBgdmrbpy23nsUBt5goYpMQfMto2MNN3SeC3Az4vtorek",
  "key23": "2DWUT7auDPTJqsfTmddAydTYvAsPWGKkus559kxYVJrrkyJyqHQsxQZAH74nCY4Nk66VfiRKnXq651G7t55uApCk",
  "key24": "4YanXA5q3iu7cva8f9mLkJeP3Pwne2gnXJyX9nJxr5z657cF5eESd3DPoFwAoFtf6areJJ4tufaa5fxLVHqJXFkH",
  "key25": "4Y4wcasF1kke9TSK1GMkR7nVpDnpLeiEvWvo5eZCybWJEFUGxxV3knmYwVDNUH39ek4XbsoQynSecQcGs1fvgE1t",
  "key26": "2akxsKDRLUSXY6nWA9vUg572y9CMCq83t6AY2s85jLjPaWoskWUPWaSsdmWd2C82nMkb7BtdKHELokMjN1NsrsDS",
  "key27": "2LNo4y3jmFPt7muZTtuuLExWeUyDqdQvrt58BpNZmHpUKZJWueRPzffxMwRWKwLgDZq3S1oez1ZWq1wwfaWqpM3q",
  "key28": "3WdV29XKzZqLetbqD6G9ReegoZB3NdFPFkqL4buQnKcR8nAiDoXSQumvBZxSdAKFhVsAizbg6PzB8zgRQ7VUgEkR",
  "key29": "A2Xc8v45KUynfeFDyLv5Qrh6RwagRpZvKqYmo3z3ePUKGNtE5bN9DjnQMLJwtdEEuGBVEFikcwq4ZEa9xgw69L6",
  "key30": "5Lut5Rrjh9oXozaGFXRYFxmmkbxjeEky67bLgXpdBsJdhVaVaDRBT8ym2yrX6xdEeJ11kXkGV1kmeXnVKTMwoKBT",
  "key31": "2pZNvTzkR3tdqtErgURhJFm3P8KPeSqvUi5mKMAdoAvvF8dXBfojpie85RfywpZNfFGNQvttJuLwZ9iDQ3jY3ngV",
  "key32": "54J6NuPQoA9kpPrv5wv8x9GzNh4pMNk9671uZgT24bNjrdfQTYNkTiNFtPvdSDu8N2uT5H1s3aSYBuQyYKbAMDnZ",
  "key33": "2VucK42kjg2omFiZh27zQAepBXMDy7AoNqEakP5MDYHzzNj217V8D7pAhf1HXUvr5D7UgsCsoeRs6jBR3UX2NkK9",
  "key34": "3DnGRgjNbZcs8CViQSDijSv763wv4wMHrNPZT3UW4ydnaQuGqLcqoZB4akcoVAPijdjPq8BFSHCwwuQNtic3bbze",
  "key35": "3mCWcXntTMGgyhw5v6mHj4SZgrnrSSuTpDWuaUF6GC6pLDUXpEnJp5Erk8rdMqa3gcuF8C3sBp5h7eThaupGJUUe",
  "key36": "1E31GyxSXFa1mWuLnQoZk3V9zF3qx4djn1DULLNRCEF6vHzikPBqFjXEA3aXkwMHW1npxAP5aNSyEmsukGk2MFo",
  "key37": "2HxX6MsEt7V25NMm9wMvjBZf2fXxv5MPsxNehiUuGaGkvcqaMNqLc9JV6dMar5vmkbk5HKUdFaKY3CxnHLJxFfzx",
  "key38": "5UMrmR853EpXVGfgurUPqzgC6EihjSss1eH4vwP29SZFwf3AbW9rkaGayYGBufoFh37gHiKC8ikihzBst4Xt79jB",
  "key39": "435k3bnSSAqPT7NFQ7EvWUGdLdtbb8fRaY7jrURXJgP3HTfbrenSgRAiHo1uYJtuwy2BXNo2GqcYWY3Ep1fMq5d5",
  "key40": "3Rmg42mcMxNsifbE8t85cQo1pD5Hy9JNnKnHFzoycNLRxARE3jqcN9rdxxy1a6NW5CvNnf1jJ2Psbo1rRRtqqF7H",
  "key41": "FSq1bCq35ZT52MbGJ2ayv7hQ4W2RfT8z6WGd9SEVjP1fKyM7XHZjqaSgaZDsCiKaYL54YfBrEnMkjqVaU3R92qC"
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
