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
    "5dVyjoayGK2Faro4NoJpij8Ggf5x2t7QtdZdc12ChropFnsc1rKZzjzGAbcZhHATwSwAkFh46GegTWzjtcA3K43S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62SbfZMhygGVhCgTyJbdSFvjoxtEHhfhspajusQNRZqN2rL9iEFfoG4HytWMjJYFR6WLomi7paowxrNwFQKQD751",
  "key1": "4pewsBY2xPjwzFoyZvdrHseVyFHGbGhdvWpnWcADCCF8aYe7YsucBFDbykw9ECoWKXTQDEP5UNJFBHYERRyKZYdc",
  "key2": "4PqJKHjJk1BHaiNg4tadVKHm7rii46oKiA6P3K3H6P6n8bRzv7yZqjNWfK2ZTwFgjArLpSJfBdSHx7uwaFsTiYcH",
  "key3": "5h3SdmAvscxxfERVRZupy4mwYqjw2eL6cXshEwp5Uy5QdqiFG5WMGiYejNKufd6m9NCLmwBT8kQx9SpdQkrBCPid",
  "key4": "WJ8rtnMr7nagjFmuHYzJojUJTRpxnE3kjR6BdovEqfpREj68RVcwiLCWjT3KZLb3KfNzfdmPw9jgLhEPpabnM7G",
  "key5": "4vF4T5CCTv93e57uM26xTMEbnigQa5tJR2h4GRfQZ3VC51LFivNeV8T69bRMygo2VbRRAGniF698u2UcbZeoB8QV",
  "key6": "3hBPwoXkSzYXNDqUfeXSG9RJbvdDBHvfFEhfiL9zkWis8jitwLXX8bE68uecGHtmK4665jNWyUtLCrtF7MsfDRmE",
  "key7": "4Vw8j9E3yW3nKHSwyqfr2RgaNtNsg2t35RkVs55U39P1auZv5rEyoj81oLFVdCMnoU934YC2tr3msSoBG7XYTgri",
  "key8": "3sydbMCXj9ScAYeP9akEfP6ZonYZK1jRYUu9KWzxQJuYQ7szigrxaTuTvpUoVpJj7hMMdTtDzTor6jkChPg63mCz",
  "key9": "SqiCU8dxBamZgCK2ErwqAScZ5L6nxwnH9jBouC77oFGyQH4TpmMApDJP4fRpAYoD2FVtr31hW32s3uQKdHYsXDF",
  "key10": "3hciP9dBkMdyTDDcPJYer4qNA5ZnsX9FpToC9e43bzx4VLmmfHtwMYmxzjyYUuCFGZDndEeNt1tBrf5LDvAU6dGN",
  "key11": "8daHB7F2ZtAgtUDpts4pjqoTfkkRg3iqpZRWx4oh694LyKDtwUn8ekZto1TTNmVmNi9ftQGqDY8hH6qxN6GtURo",
  "key12": "v7Axx8JqHa1exC9m5KJ4FYtf7DT7iWyTqJzuDYf729hs641NDZRU7Tiq1SHuECDMk7vXTVcGxHverNcZASC3rU7",
  "key13": "VGPFR2dgUxMXMnYFJqs4z198gKFNCZ3VnMXTTn4Men4y6rDfhticxXV9Dj1m5YWQLM2w8S8Edf6sdJqUSp3icFb",
  "key14": "m3Pc4DEXevovf2xZz9ip2Xy8SrNDV7w7DgW5CPq29qByuZHkehKJs3N88FAcqPU4dHMD37p2LkEsnxiZWV8QUy2",
  "key15": "3dToo2JgdsYpN6AfddmBKPZeSHiGxtqdQo1pzVFpfC8dsfcgKWAiawK7RWawV2imJHR69sMh3HgL3kLqSJiFPvRG",
  "key16": "5KS2cxwErrXXx1pqDWmju9Njfdqr6WPt57iTXAvg98ipmXQQeuHP3RvQmnEz8iCxVFHxJNL6SCC59J2k9NQV4HAg",
  "key17": "356awXxyenncer4dNhfevm15MqyL4ctuVtcKG4JJ4yDTM6fGFYJcsiNMxcMsx6sfoA8jDJQ3qDHC3SzN1QhJd8Nz",
  "key18": "5AYmCnyNsmbqm8Wop2rmZ2aLGZ4a4Zf3eeuvtFxsU5r5YgJd1W67RBwFSwSkiaH4MS2drjA885tQKWPgo3p7oVwr",
  "key19": "cb166BMc6bJ1AVq7ic96y9qmfSUTeRDW2jBmH5Fimd6BhT8ZN8Wbv97XHhUJT6dVdDvb7rMMY4eMMKxnij97UFX",
  "key20": "4WcXD1AZH8NooGV8m6tJwUCTW1M3XzcXj5dfQ7AsMvAxxi7d81cyT4Pc518F22aooP8EsaBBCMPrHnYhRGdmVQN8",
  "key21": "vgGoqScbVTG356RALwVpLkVb6hV5297Mt9QUzXMvTAs3foTTHxC9B9LVTMQoZVEsHqE4MJ8Ue5nPDeDZUfvikUi",
  "key22": "4wrAQWji4re3RUxnGtWJ7cCMKbYpsuUedHNEVVExon22NUZcMbJyYrgB2iuPV5hzA9ciyB49sQGLmT8nQ1hdx4Yg",
  "key23": "4xG4rfMKw7EE5PidqsHgj18QdMMDvn34LbFnZ8ELyjbafNPK489g7jTWriABo8zUa6RLiQeA6sPpHcWUekrYwy98",
  "key24": "4rEth9z4whFbepCnX4An3LDQA67PC6dED4YCBSTjuDn4heoFMck8ET1L8f5EaoyMiNzaEGwdUTMRwWvYRyEqo9Yq",
  "key25": "3TRZgApxvANRgZp7RAbABNT56btKq6DG1qfMb5ip3p5qwUeuPcWCuNPXfa7PaoZaR7EwD92h7AArdRVpC87ubfGQ",
  "key26": "4jK788xdCo82DKoxsNR3TVfsp4uT8d2qNF5dyytfsVfrnPuGU95DdF6AB9sRbsmNL2UWehtN8c51SttUf61V2oTb",
  "key27": "iqN857EvsQM5cP8QW98qor53xAMg564qN7YWLFt3LdKYvUeoW4uVhRQy6mkvxgFMnfjTkjF8WmTjaPXUcbkhQPe",
  "key28": "5ZL4nYnnzNavA3rwcyWAN1CZ3rtw3sGfyehgzAHciSo5YGCQnXW1oE2f8fPxVofeznVjsyRSBj46XzvmqxfavZvb",
  "key29": "2JSdEiG1pJMp9FeDwaCzn8NDxcx7Sb9KkCqmi3HYxV9FqPqrPSuci8r39kFDCFbKod3LyqvpHwMZXUb9FqdQw9uk",
  "key30": "2saRinLzHe6ZLMG7WmhZNNqgjbZW5DKVPWNWEUfTFZw8oBfN8bxvCS4jXUMagSeqSQkHHm143GatXk5Dt25YmfN8",
  "key31": "5Adznea5MujcqDE3dXRLiD98MKdr6cjDHSKL4MZmwP3uU1JxFbdJzcfXEBvGXST4m7X4Mq3a9omgvDk1WvMwqU7K",
  "key32": "351DuHYbggSZFEm7iABDpJkxYumttXcXzswwstdJg9bDikZnKztXKxx5tw1ezhmVh3m56vojFEqKT6DfcL5HuUqj",
  "key33": "2T8feVwHXPFFpQuAn3g8NPbcXXSu7tMmoJTxHVq41bSgtfSn4qnh8nBZu1NWEqsJi8nuYcuNDkjjEt1isdM3cjML",
  "key34": "5mRgTbQLqEeZbKx2JCTobmHUg3QGB8WbfAkF5G7QPmXpHhZ3xK6gbzqUVtzUWaDb6RpqxjTp3cB5BVLGp6zvckCV",
  "key35": "4PRaLhxWCD7FC4rfEGJ7AeMrnhsr6H7p2gZtsCYMFihJ5CBFUeA3dnSChCqdGUwJ9AedyChUP5SvRuHLvnMueyZo",
  "key36": "5XvC1JsamXza2JKV1rJKxuGw3iS6n2iXK12Lt2pb5kiSgKACvBnMNH9TBRH6dq2JC6Dd8bkPdQrvRxEJ3okNf8Ri",
  "key37": "2fXevoyWwXf5mPbVv4kRHNciTAJEuMA2hwj2MZdd9pB2fa9a6ohJ8rpXTirKFhJY5mRZJYnreHpADmVg9D7TyfRR",
  "key38": "3fJhLQ4YjgDJrsVbk5AkrqFBKXFy8KUuV56ivYfCCoim73f5zeUgEsapx13M478zGSrqnuLtxVjvAgvMsGWj1Ep3",
  "key39": "XRFXG1yfN3WXohVRzDjjhSsPnzwpEjHhMFEG5DVWCUTSo4Td5iPy7fb4Kh5VpzjkAfx9p2GdPpvRqRTp6JrDwCd",
  "key40": "5QsCQzoj2zGr3idS6Q6XnnSnFkQ3xSdsBbSDdsMm6GrFjgajTtwC3pAEgZ64SD3QCBHm3z5gruMoeJvUGFWE8Qze",
  "key41": "3gVBatb1FDVQtvymSKYTjw2gae1UWEw84116YsbvF8hzuxwChi2YdnLt5DgGZe7fBZkDDWUqKZBDyKUBytAu5YWf"
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
