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
    "2YSuKHCHxFH9KWeCuKeCqywEnMaxDFMmXjaXn919MR2mKeQAuwmWgLv6akm4TCJQKXyvKZcXxXjkt2uDAKUsP8CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9yvAwhUQNFuLn4FNx1iJN4KDm2jCXUBXNrwzebdnTwsGPiEQ7igNLMMZLD5ZgMTSX9ZXsn78tZBcUXPfFfrzZNA",
  "key1": "67eiy75J6m9YC6sAiTvyChBMxvfgc931EDyZN2UzZuwFTzhe4yWjLpZAVR4cE7Ww6wYoJJZENMSqu6Kv9UVpxVtJ",
  "key2": "3VY6ZRd45N9ZGyM5tanw6NkqEE9nzPKj8nUWnuiya4FeRpDhEVz6HRBemrVbDvg9fMAyGjg6YfX9WZoJLkMLhHhQ",
  "key3": "4y1g9W2GT3mRERLKY4p72tt4Ze9qFN7jxUHabUZQAm9ecgzrzLUAeFtPdXfgBJmbziY1HuxooUeDZqAynbN9EMmd",
  "key4": "27c7Cb43KJnmNxtzywaLvs8yc8TE3DAU2J7fjExnD6EmFMsFuj46izpJVJsx6R6phMUF2PAabDz3yban3bCLSccT",
  "key5": "3fvqq1wkotWNkAK3dY55rFwCJjbTyKJ1iYxVJgGsrxv8TVn2kH82uwayM2EEgxGWr35U8bcGm2gauBjXqM7vQfto",
  "key6": "38FD8Xjfrczv2pDireHaBoqHr1StHHSYWd2yJ2Uzxs7qW68sxEHjxuXrH547AsKktcWgmXHEXUZxHiJpUivoDSNk",
  "key7": "XesMdQvpbp6wLiDHUspeEALsKaA2xxZB2vDTNV4PQTVmmSTU32RgS5CpyE9ZHXLj9fxzWAjZznCfdkvTYfbBZBC",
  "key8": "5pWuWqggRuSDXnYYTZxhqFvuUqgHjMGCTvHRWwHvSQnkjsAg7jPDSNDannAfbcj5ZVLDmED5BnVM15uU2Wis2e9M",
  "key9": "KbJmP5BJWmUET64wyGcVizJM7SiGyrwcHJzQKe1aCD2KVfD9642FV8D7r4TxKZRKU1DMo4yWdfZvtAgyY9hzso2",
  "key10": "4JR88pxJC1EKfd84mdHjX8sZrBTfzfoFhNGfvemXM8Yd4oC8z7Z6LuMiarapxALM8L6L7jGmYWLGfo7TES2TGKMb",
  "key11": "4mjVMu4TENBcAnbcZTyxTwoNWMiNibaUntQYsk81wY8suiZqbU9tfVSgr2x8nq1iNAAdsszKGhxEs4ypit9fX6Ec",
  "key12": "4tAbZWtzvsSA6fsA2ZgiCxLXwDjv9mLptpkY8W2j6YL9cnjfdc7m1NLvx3HzFmDSpuTp8zncz6SGtX5CwQ29EnLa",
  "key13": "3C4fceBGwJFzXMj3ucrby6iPpEzTdcKWP51VQAfBU3EyFFPbCzRLPdTugCRHBPjCTfkZwms4e1U8zxMSus6asZx6",
  "key14": "63i9FZhaN5T9sd7GWtRTDAQ9y37AmcA2q5umBAv9NbHMqEB3bZWMii3nxCeyCJuYF56ZndyoWGxxNrH8tj6yFVf8",
  "key15": "4Hh4uhWASUNc8a48vcdVtR8cabNH4KPZYVWLWUvuKALi3Rmqu7zxGrokuaTRPtgRdfRxBnJcmaLcBMX3CBwXKwhV",
  "key16": "5gANcniNqn35zUqpwy9dWuzNJ2vgGT1ofp36u9qns1MaykAiuQkmMAVy2tcfjeryPXP1Y173C3qT9C2n2Bjf9v6X",
  "key17": "YLTWCh8vCHDLFzh44VL1YdRiFfwZxfyXVsfoz3bDyjWbf1DLkDtLftrgoSrWGKovaxhjuREbGbG5jXZnZk9FTY2",
  "key18": "4ERyjKaMs9ucNQKaeVq46UQzs4yLPhnQeyeWGMhpm6XAd4BhQr5d2oeFegLumtJYkAzHDggmbhaLVheeVjjcGnt8",
  "key19": "3Vr4LWSYv8QUDiYqt2MQG6wtoUkW6HBTdTvum47tcJp21evLBkXDg3dAwPHfkGgQSbFM3Bz6dG9ZuV3ZkKuA9PNF",
  "key20": "9a9ESRKAMVyyYY4PJ2Q6kL8gBLeMS1t9wJ64HYvsqewwuBoaDrDnmsHpZW75jAKF5oMudAMdUk2hFRAmgkuvQgV",
  "key21": "44Zo3uRFN1XLQR6eTouVgYrjSHL23aGPW1LwMQ1DgMJHMyQLAvzFHkgVCtstsLL7bPySHZ7VTEVti1aGtcjsFRHs",
  "key22": "5FoTeqbFsnPgsNLnikNDGHcUaGVc9iMCkn2hQngdfZM25qanotgT1ZV1vgNkbc569ARgsU7RbbstpvKvu8Np4ovb",
  "key23": "2jf78eXsNT6j7L9ghEoh72eU44dV6S4dVXhQxytTJ3qYJpMghDZvsMmDVsPTfozc1d9pQPBnds9C25feFS12DpA9",
  "key24": "4BMUZq89YwrE3HHaPAzHkPL3gpDs22jo8Tm4GvqrgnDHrMHc8kpCBCBNGL9ccyjLUtAGx3tyLyUpDfP7nac873S8",
  "key25": "2rJkqTUyMfNHaENSiZCRbUFueBc199m9hEmoqvu3XWR23LzUsTUHEBRev4vUbJ5BAjkik8ykthr7o54TFcx8h3d5",
  "key26": "3nco9oKJ93rBNT54jEcZJxHxQZjkcHVoMxKFGdc7yj3XMkCw7Myki6hBFx2GWe7eYJvGLJBcvC3eQvVFERoF6n9k",
  "key27": "RR8wxj5ZfzAJqeYGXzr1UATRaAsXQMTR63QXXV88b4yUEVTC7BGSVi5nyWr8VpPWWHaXKv9TQBYzuLepGnbxRgf",
  "key28": "62xYmVsGoDfN2AW13MnjDwNWcNqG7jP6fxsd43gwt37MNRV9mczpneXpa6W6ufddR5QXFeNWf1SK719xTdXRTGo",
  "key29": "5RpZqrzRjFrgLNEStkPeXFePTJYeJFeeahEm5yTDyGk3HwdYrdbGPGNrRM9V4xP31z2kki3S6bKqDF6Su88D7RhC",
  "key30": "3RXTVx7otGZG24hXKdub8KLaeKTb8X5TRGowr2CsBHJQyThUF129TcnjpEwrRhF4KKnqjniYgj2XTKyFredFE7kq"
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
