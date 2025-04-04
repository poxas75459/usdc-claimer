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
    "239zwrMX2jXAARToY2bv9UUsEJV2RLbxseh4JaPZ9ptjp4CZgpxiLYLGRgJ2M9bTjJhgwgRsu6kyCJFDeuR2EtMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PmiYStcZEKxaBwXDLvGzcrJK6FUVTdwRjkpKL9g8MYi5sphjw67Vz6xd9MP3dMAtRmhxcdXzfqtXwv5UtXDQsVG",
  "key1": "63XCk7WtiiZPoNBzA2CRyppZvdysVB8zREG6YoG46D2ckAyvGDM9Y2u7rxpea8P1QDxEZUypN8uZJXVDj8UfLGLo",
  "key2": "5aLCvKCS1c8g7A95ykMPdf8NMYJmnd2cRMBeTaw8HmvmSSXuUF5PWsJU9X2DbFJEApyq8LxEYnbtCaMjiHmDYMtk",
  "key3": "4T4EGRx8X6rk9C2eb8TwqmVFbdtBBCqmnXopK8qJ5pioJqWcWVhpX2K91ywEvcJvzW8ArnU31gvaKLgrt38p73bg",
  "key4": "4nkbXnrbW8gMXsqpM486Fm2H4KFyAzRQU9TRPW378dZXHNQdZnfvF1BkwKz4vpYQngTzS7bJmVWPE1AQhK9TZUah",
  "key5": "5kVhbiXR6PyyJo7Endk9KkAed4VkKFuiKz7P3yNS7jW5scP938QdM86xXg6FepXR33B3z1EoZ8WmYftLQWe19RRj",
  "key6": "5g3YyqaKVtEu8254UbihTHSUaQixurnPQjFLRAA5taL9MvBrXY3HqcR1MTsMox26BwUbkTQsLHzW8ihAzh8QfDot",
  "key7": "5d247hFLGsm9vPfpp8t6JYNyZD8GD1W3TKWU4G3cxc3RHkCz9b2oKmTwSn5A9x4qgX8ya3dgRScDM84kHabfAwio",
  "key8": "36N3R2TKBNJK3WxQbGmxiWusmfzx5xWwU8tupBjQAP6j4StBeZiGM3NKMpWqYGXxVEbJwq1smXEAjWvpvegeSsNA",
  "key9": "5QLeQLtTaHQQNqdADeANYUx47Wt2eNW6gg5X97LiH36HF2z9AqqD2NDqbNTS2BKKU1bDNNVVXmiBvY1a6Kk4a6Mu",
  "key10": "4gQAw7DzH5Tj8m1mgCEd9wXX4wZPYNdCcWFiG2zQyFEJQjJEPa7n7nsLD3iciRMETnjAR6whxdnY6K95u4yUSsuv",
  "key11": "2UY7hAEWK2BBg541jQxzCdkkM6hSjUgRWpwMGQQ4C9yA99ek82CQ7njDPwjTggNeSUegviiB4iGkS13ocaZwSTcP",
  "key12": "WGZk9SYiyXymaap8kUkj6o8nB8htJLA3SbcskQEFp6XFURCnANwtpHFeTCJjaCvCsvguCAVCaipVKD5BisoJ6gR",
  "key13": "WiuaWbLY7PVxvqhFf6nao6cJmE1h81sriXLLac3pAnhjWDTBTmXTz18eUc9QbGnGHUQwdh7teUevhFfXbMhPU6X",
  "key14": "4qAV7bK6pgwyD7cL2D7C9G2u3z2c1i4t9pKqbPDo8GMektuA2SonbwiBhBLqsegjBGwbBmmKjLedU7n8HGpQjos2",
  "key15": "vnCo4WjcjtZjTJ8Asb6VYgFio4nPbuaA4ARdg3zn1mZ6ewsQPzuDm8m8kyaTEzagbthJemorEU489mT9V9Ww3MK",
  "key16": "34Q3ZqZtvD3B1ruumBa11BCsmRSS5YGSeToxsj4ga1UCNqPaoTng56HzYo7GU2oRJj7DTjNFW4zLyCTyzWUbwyNJ",
  "key17": "38ZKSYsnh5dULE8BRt8sfR6KdNVbhys9GVKwYqfQkNJWsVeubxCYSVV3xhug99H5vzpCnSpXAppjJietemFj9MzV",
  "key18": "3FsrpJyp9S7HBiFp7E7FHrDSDnrusddY3VXhhzP4UJFhTs1NRauC8mzK26dzRwgLbQ995kCieseEm8Rf4fm89Dif",
  "key19": "2LsK65ioysjt83A7sYuF3ShXt5HFZ7JsWryuH8nCXuWPpUdYegei7AxF8eWYNgxfqxs4xtBw2JqAFNrdu8769Y8T",
  "key20": "4BaV9ARWqwjJoaoeCUnSqFXVeLD7csuuHCoYEEvpAHJT584FJs28fMW9cRz33LT4xfej3uuic1AnXnf61ofUaWSd",
  "key21": "3oamc3Vw6mpwCMSdZ1tnzZ9p9qzfSq1TuY24B3X6MUGrWdftQFpQ28Q3moUhjGf5gMc1sZGo3bLCSpcBFAnrjF8d",
  "key22": "azFt4F5NPFhT7mVKanuz1tLkAuozSbfYtYPVJyTpUAUPJCXE4kdNjKRJa7uaTrqfBnLGtCSYLowQ1bfnvLrJXQ4",
  "key23": "31Y6nQhdieFuGPygNZ8sPQGfEZhHfvTPWXPjaoDfBZbhUTVYnkiUJL2mex4LmpMcWyE9RwcssxS9dwm5rbwheokZ",
  "key24": "2yCDnzJ7cXLX1jrmgTEjky2vf5nNV7dpDiopigRmCmPYNzPHU2QCwFGKZg8qV2Bo12yYNLxJZqNVAVE2K2SnWVcH",
  "key25": "3SZoaPZhXHF37Su4nai8KzXmV5Xo6isajvEyprKJebvuUJ6A3iRAPVSNjWRPzEFPKMGs8mgfhVmCwu3UNMFP9zWp",
  "key26": "47k2imdgYa3DG8U1m6hp8mLWhrtKpEdCKw9vfxjxr3WdqqD4i2zFkDX9WNhZW8tPJ1VrjJairtLZmRpxTunijGTZ",
  "key27": "4McRmEjokthExMcvix7PQ4fGP8bPTFv3amjMR8nA1TKYn6PHz5DmNjsPhgJNmnjHAmeuBL5KmdseoBAPnjwqgChY",
  "key28": "4NEtFk3t6dFZa7oP1XZUs1pRFwKJFnaosoquxwsuM4ZTnbgA5pymqqUtxHcspiHnZgBpEeacioK3joaDFqgdB1TT",
  "key29": "3CGi3BVXvXa9pCg8F6hJrFmdEn7AxJofBEfTgpw9VJUsEon9mDfLAYWULTfYYjHfzD9gTUJYhrJBsKec6HYnn3ub",
  "key30": "1fbxUNuGyqFMjwHNvEwFpykbYPi4H1WZsWpDAqHPDzi9oyeGXV5QL9BxPfDoNu9r25EQQG3fjBCGb6tbn3McTnZ",
  "key31": "319NJPA7Gdspx369ME2MA1uKvjfkUooJhJjW66TGzgXwRGtKEhu4dGGe6UYWbrY5kZM7EDYvKSZWEMRQug76FCgz",
  "key32": "GTkniep1msHXsAWKiUXch4u2GzrUPZVPNU6Ysp6W7CNT3ZbHCDDGZHVQCmo5iJPy3F1xBRN5MC9roSMXAsbiPCd",
  "key33": "BcvZhw6MSiYDKU9aHEDAZYcU5fWwRRjb3qSmc7UbFvcgMmgydgB5SD6yaGJaA4jik4BBTJt6Rm3mrcsc37ZkKJb"
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
