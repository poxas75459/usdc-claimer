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
    "2DRX5jHucCvNSLgoG171LGJf1XoGvp2GsBbdXv41U5K6Zo5wZJiuFCNn8bHm87KwhJcbAvdkpYdVndTKspbqwuWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HBVH5R9Fy1g4NuGmWWWkAPZsrJLZFETAie8qxB6qW9sVtHoEudLRJqgXbu2ik5EviXzeTaj8HruZPjF7VCs4v3Q",
  "key1": "4KmqHqJjcQDQQi8iVJTit8JQWgmUnw4to74catYpnURHrb6CEs91V77jARRknhWQZ3i4cxPisgHWPu415Miii2s",
  "key2": "d3B1Ns2LBT9uyvi1jjhUozydJyn7YfNjES5crwjLaf4NRveVkLByW4rGV2LZJzPnkC9vnGFnbvhXW96P3etRdHV",
  "key3": "2FfehoG2vNivCGB3MrEgjUZ66ZxwxFeUhWdR6jPfnGMJrFBNQgLWTpuH6oSDkQS1R68rjubLVKLz5u2r7zi7gYHj",
  "key4": "5s5e5ywyXujpwPkXdioPwsJhmAkcxpXhssTFMrFmxnpq4RztDoE16njiq59higEHQHKDEY5VAadZr2HRsZXZiKdC",
  "key5": "2CggjyGVvFJyGcxPdqdUyqznZrTqGjo6QobqnVNFvHnAFYNGUEy2Tbsjc9WPDPjCkAweNfTGsWYkZe45EhFbnsrc",
  "key6": "5h6ZtjF59FMVBSjSwHr67DpDYjj6tcnFy3q2gQRu4iUe4Wg8rudWhkpGHHmscTT4V395vBPgjRGvdYufNmFRAtPN",
  "key7": "4Y6dZo2MsaojcbnKJFrSPdjC6M1NSgSNd46Y5DZTo6VzwZBBTTrv1UtXdxsBgrLASMXZ6QVfozRmi3HaWU5eHotq",
  "key8": "4jzRQPLxPcSCKQFxXAy229yFAVPF6zSMWHvkVX9PteGVrUFKdPz8uABAJWSRnFYq5BPSdf1Cn5hFdhxCec5P9eni",
  "key9": "3hJ1Cocrdvb6dLp4roYF45NLnoN97EG2tud6eRqNFBoda831JMDKi621Va33Mqba5QDcReepiSg5a3qiHf1C1yAn",
  "key10": "3EcmRUuPhLm6MmZ4qALd8uEzD9oUXG6x16y21bYo4tRduKCe9oxSYvCBLhGyX8ssRM3wiMzzGfp9dGd68PtekurX",
  "key11": "4rxsGjTtvXRKRowPYdU38HHTZzYSz3iJyBxU1hi25jKabTLDHEnb1KZXJtVREwqXjBgUZQwNcPrJsAZW6CSqMsYi",
  "key12": "5eBnJYCx6WhEhW49AP5fvxMpKH8V3tX7v8dcGD5SME42ED3MKgFVMwEZZZVHEWp7eKcbYxXyLBxJgenevTYhfswg",
  "key13": "2TpkrREY9Gr2RHes9vAESQgkcGFRnWqRq7Nj55qDUnrfq8hFWvQ1fKiuzCqFu93gQQWXZBDX1eMkn6BjQi8CtRKc",
  "key14": "2t69taciicJgGNKYLJ7S91NJpx6AxKqXDEFi89gCaPF5c4VRKEtT9wn9YkWGJWk2ZpDdQskwHfzqjoA3pz7UCqtH",
  "key15": "2828pTLbpCAHnvgjvFfeKXR5Scuvm7u37ARMFPNwgbLBKW4UNqKBMxujcPytA6Gsvg3LdbUmQwjtTPxNTVdWTxAB",
  "key16": "3MctiBtwhBp27a7PYV7UxnV8TuKa8RvvHWF4oCTpJi8rAWofrDdLeHhsAb4BRJp2UZj75YqQxEM6HKhNnUwnLhXM",
  "key17": "dMd1QER4Mw8MgtWx3LGHZUJWMuNHc7LKeGrwSUXmHS1qTe64T7LPQV8fRjfFFFJaXn66v82vnAHkf8vfcWXnYQW",
  "key18": "2zfsuy1miAxALpn9fpm2v9xrJFt6HY2UixXGkLjbVpQpwN8LkPHFZz2Vo5NiEL2heMNATmqDN2PsmihNcw8rzy1s",
  "key19": "4jTSmGCSnfyXvdTEtfCVyTcrBBv92K14L38MqR413Z3dZRaXfAePmxHQc3XxVSwgpAZaYxo5cyX3nv1qRmH7d1ZB",
  "key20": "2zDy6vGjCFaKDkbvn4sRv4E84qbmrLmPLvUEwuBU74BG8JbGBopo53DjN5vTm9iB6swse1mYsS8mvz8ijDMioyqj",
  "key21": "5BYoGvfH8GRE1PuqcQzAscUWCz6WQ9BDejyftGigwPvqVLuPmYNGwqv2kaHEkgmmrhbGgA4wnsbZuidDVKE7hYkV",
  "key22": "2w7D5naY65RR62JNsM8Z6R8gcZjBvoHZnoGKQMaN8xWuxN3xTdF8Cyq8C2rZjRdPhtPgoeJUZ6ocoDsxBF1VJtDE",
  "key23": "ByutKGBpgDhY62fi3tYGZCH51dwt5XRdkXW3TpRjqiJRoe86smDY8cjtXXzNMRcRQ2Ddqcu7b8wxBo3cKhZrtrf",
  "key24": "4tfs3YC2Px41po1ydgELu7rkHwwLo4Ece2rJ5hqK4AUau2sysJnSAzbh1EGGDArdZq2yUhtJjA9pEPJaciorUsFS",
  "key25": "64kqDYRmgQJe6BcGNj8HS4DTCKvV1nCE37KQgBrSdxxCb9aEr3k8MFVKvBPpyL43zwg2g3DUMTRMFTqtt4oMAQr8",
  "key26": "3bBfotW4sjWQXzY8GmKaYhgLHeeqstSk4bQBGj32AnmYyPokw1BdnSWpTDvS2K7yY6wEJfqqSnjSdAzo23mWqCFz",
  "key27": "5TVy8hBmxjSBQVxfgW8WbyN1DZq7FtKAkGQo26TZ87h9jQEuz1KtF3y8daAW5GZUU5RP6n7qH1AmJn2naBgMPLww",
  "key28": "5KtQsDg7qNgC2rokYtPr1H8pc7asiEBR4wDAapLzXEzrrbYsZpyCzVcfzybiZGm9DjWmgnqqqD3aXaDoK7CrpT49",
  "key29": "2h87da1dreJiSFm3qHiWTsBVXwgpWB5orVZHs71biFrrxZ9Fz3UwmfZc7F1wLEzE4hpR1rjohR6KU35y5zTu2dcg",
  "key30": "CjLjmieNzZt997DmSarNURoSGDbbCx2Z162rSnoxtQCUy2EmqnGTMkEayPywNBnv3RR9k6S8GjSkJxU7zgWJvtF",
  "key31": "g9BLWKggNHH7RQbVUYAQt6WexLma6QT9wuXoWGNEq6QTmshaoJ2BAReb8NGyp3348LhxaBWcCfaCr9eZheLoPxQ",
  "key32": "26XipceMrDTDMeVBzMmrL2rdHBJKu2rzAd51aYJ28KinUxdfxa1FKvJLWM6adHBfrvnModfod4gx4vCXYDxAQK97",
  "key33": "UBs9HkxDb4Z8a1BS764vr1mrDGLzUtpDoXEWSKPyBFw9jtynyxqQ4UauT9G77y5yW49N6oUqyojDGtSmzyMWsNj",
  "key34": "3GKqF91PJzPceZX2z8vQz68aewDUMkkrLVoWXxg1wyWApMyF62WQeaKwab3tPPRuTwwJixsN6bzu2w9g5Q2dsmTo",
  "key35": "2Bcp8uCLijgpoT4hudTjSR63siEiUbwmfdp1M2GYwt9CrWpVd7F5m5x3S6zAHtHexrpJEFZKcP9HF675LPW7FqgH",
  "key36": "4qRJBfr6HshrbQ3Ps6eZj9ESXcZDJn8cHuVGm7ytd28ScNKLrzoydg7abRqTgC61e94tRTdELnbm3LnUKF37Pa2Q",
  "key37": "8LWgRLfsRJZqmPkfVxqw7hWK3P3ho763QPgUEvkSDgAT8cQKtbG3sBkv5ikqbw433oWd2sJ8VrhpncqHgbCj8ir",
  "key38": "uWnQUUWHxdzZpMiWNpG848bFiHeqwMvvn9AG5n9Za13QHVVLhHerGQGc6UU4song9goSF6K5VH6NT9brdLjtNUn",
  "key39": "3CvvLYmHJZtDiFFd1V9yYTjCcUXhE9iDwyfs8baZizuXJBJefPiyzTbykEHQ7hQdainK31gW7GT25j3VngPKhavz",
  "key40": "oxwZND6pRa7SvHCVAGhchDASnNiz3rXJpaJRSHzCXUJ8ub7ZrCaQ1uorP66XEgWTD3C21rtnf5dw27KKN5SbWa7",
  "key41": "2FhxPdGmj2ZLDuqK792z9rJRnXALRPFM1Jkat2yWXy7ckQS6jotsjDQZcGd5s24LkdupBoppPz4MUEQ85mYXKPQi",
  "key42": "4yXXghZ5LhN5fgPS5TY3casLRrJ8CMvTDrTSCxUuom8ieKxxJy5AWYyLtyRUSf8VeUkT9tLhC8Goequ2w1NjC3pe"
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
