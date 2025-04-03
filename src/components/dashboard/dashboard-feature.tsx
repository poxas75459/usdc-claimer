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
    "4wsPBGrV1EWp65HMfnEpDkX62u1XU4g2nd5mwqP8udqQ4Ky1uJhcdsNipzpjEdTRqb629cQBmriemYupjP9LmMgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UGBunZqr2wSzbhqBHBmVzqsgUB2R7PffC3BMTUpgVyQDK8RLLx1ApDK3ZfNxba5J9kUUyqVp12NjGEWSxeRV664",
  "key1": "3WzexgGQgShim3D1dmWwdBymNPQagtFmktNAaVXM1M94zwyrVuS2djeQnnvCCcgpz5fXfpvjbSzEjyrfBG63EAk4",
  "key2": "UkLiraStwQqFstkuDpw4xrcFoWkPxTBomaZgwzCMSXpgVgztwd7D3G8D9HzenmmQNzgdERRBz4NvWZpkcZvvwWe",
  "key3": "5JRS9Wcu4skiWTkitPiSpZDxx51FPnfqXC8ahhY5wt9QkusJiqk23Rvvpn6neFXEiB6eqtUPJDL3TfxhZTtY9588",
  "key4": "3shndcUmKQvr1YynCUrD3DYw8DWX8Z6M3chn2Dzmys8F9xAETEruXEhmbVwbkG5SQWvL6HxCzngkkLNwfpA7bz6Y",
  "key5": "61X2iJFnuqDLHYbsXY4sBgaasCg8vZbepmmitvBgkjy8o2KSprwcE83aZj4kXgmWQCkUyv7AvHERvkrUQBrMgeLo",
  "key6": "5dgkkaE4FnkmB2sm9KKRoVrNGUtVQqFh5wpeuRSHkhJGprtvbrRb7JLFwCXReoUzt3yE5eCvNLY9NFN69cBDszuj",
  "key7": "2wrNNSRDxdWnAbKEaUVGoFhyg81pdPtkEbXyjMBN5ab4JYnLpiAhGG5RnhAS2tMUv5CXgYxAXMF3k3aMKkEKpTco",
  "key8": "5cSbt9pH1ev5B83dWpKtXU2FjDj2Wd7nKJu93DMvZ4uaxu76ozYQ7zLmJB72tQiBy1XF9BzUbwJzJjNcK5mWgY3s",
  "key9": "3n4AaSsVpfnySAHchGsT9UxeRD5L6yaFhVTqCxM8k9fejyfnpcFz7KYr1SdXrf1ZtG5CNLDsqTu2UowAVFZGsgbW",
  "key10": "4LiwyAsyiPae4gKPSpXDLaJ5U9SBg6E165QNerPTHE94reWcHR2M5H4QRLZhdjYcUAYhFhTzhqF2fZAp88zSoU2a",
  "key11": "5eS5o1R7ipLn3WmgDsLWPLWPQzUwnHYYfPnvTyzAMrZc8c2nuzoAdtnfwqjcQiLeJkmYxzSVQUWS3vUNKfPnMo7S",
  "key12": "2KizDtfaxYMmGWSZkYeYFrgFFhV9KAWfhFpyKPU2GwiZuu8MVQWRjxBg8wnyL1aQQMyS5RoDkRBgtDzox2NSy3v",
  "key13": "2pv1wNsgR5r3TpvjpiFBsZuDmBRfq3exbyNmWugmSCHSoz5VQ3SwJzTM9EPmmtPayjPP6x9Bb4kkQwJy4Btm2V7J",
  "key14": "MCBVqqghL487y9Q9wHRLuRYCQ8aYt3qpA8wTHPwkR3sXbXvouFqS2wXgij2m8raWBAUJg1DkFG8AM69tWa6cy33",
  "key15": "3D3Qiw7Bz96JjAAXaRZ66qQxARXYzYj52eHpwUkVSBNy9oMWY1T34TM7MSWDwgi6YATixKTzYDank2TRHWQpfxCR",
  "key16": "2DwM8SjNPUghJ8FFfPxYXJsCh3zjonNGKKivkfDHJ6yHARRFVuuZQBmRe6ipzxkNAmCy48epagh3c57PcB7HsYCN",
  "key17": "atY13U1GwkzsipGEuGnUVmxXowBTsvSYE5EnhMZpidVgQu2LU8Ap2MjeVtqq9KMbZTDHZVEREE8XQ7srqupeNmV",
  "key18": "2KSEv5ZgRYLrdvr6bM6RU6dfY33jWe3ntn1NKfAvoMwpiHDTUpepCECpCFHi2qbZyRjowsi35WYHAqUNeskgxVML",
  "key19": "46jeVaJSrpT943MBdVYiGECijYN4PXKi8f5zwBqzf7HuB95Y88a4Zj7RiawHF4yg6vwU5WaJcC8BMSf32mPKHkcd",
  "key20": "4vYBEoEayuj1fKzHJfP6ncrAUqNZY2YmjJQ1SxALLcKbiqi3YmWETYa6g5D1nqpT1vtbGWGKHq1KnyvNjYHpfQJr",
  "key21": "ERGSPW6nu13bh4gmP5vhuB3W2oHwCx2QLyo7YtG67Ustzkozy67wg4GKusHEEtACKNTPvEw1KqXiynfSedCXHk6",
  "key22": "2Nff83XVmbHqJDuG6tD4dgithz66D3v4eCDpmzmfQcCWtXYpDPiQNPtPbA16aq4JAm7uE7Pnq1xUboampq1HnxfZ",
  "key23": "269dkB8jRkgVM56wFS5a946scqsJUfbacPY3G7An5N62bQEipyUDbohtes3evTgAF1xzSZFHhgXMi2M89Rmq1dcc",
  "key24": "221x7BUvn3UmMH4XQR1ekg48jXR6BYYE4VdJtiNQ9ES1RX9FP8fQrGifDuVHd49asuH4vWkf1yFafbKMDhfFyYPn",
  "key25": "5vgrNadBSCf2PhceijdeKB6DHqMJpFMzEFkSmHg8UPHWVbYuGPoddphGba8AVD7FZa9q62dg1fuyLKfSWKY1qgTX",
  "key26": "2AGY8qf4sEfE5AzWAweCdq8EsGAz3fKk8h76LQciy6FwywrZkuNA53zSB24R9zJSzGsQ58M4W8Tpz9BHmwEd2QR6",
  "key27": "3hHhnoxxXHMfZ7Sc63FEhXxt513Gf3j25rCZacZeMN9wyzA7RPjxTgZpC6asfntk5J7ngKRaUWm25TMqiqDh3q7m",
  "key28": "43BtN8BqynHLTXHzvhxoEPjphfXLJnBeCHgJURDkDxo5RG9FECUWNfn3HJwxFktQSQo9ZgbjWRcEFF9N6eunmyf3",
  "key29": "2z1m6piyLWcMgmfjjYjW9rfAVAdVR2ogAmTj8mKrJANNyqppGCjYtnPrMtoXWGLW21LuSUXkHMUMrjz9hjwLJowV",
  "key30": "52nNrDkcAjnhi8D3Le8C4dNUnSGCyivKyrJYPUhSi4f64tTUgzdF4Mr42fah2Ja1AwEbaaFdCrWYfoyWLrZx66t6",
  "key31": "3cQ2ux27TDei1Z6TKNmHharhwMGzXnHajhsHdVCoAT3GMaPcYJLDP86EPEff2tZbK1wwwFDEnjAoLzDrqoo8tmtt",
  "key32": "bJSFwL9ibtNTMTtVNGLwYrwnnohga1sSSpryrh1BUyBJTKAjWbE4uHUzz5ChYpPWP4qsL6G9eC4mNHskQpstTh5",
  "key33": "3gKra4ahyBAM5w9PacNPx1qvGXRu4dMQQkrxXnBrou1mYmzjxL46k2NvbJg7u7vc5Tjp5fGSZ7L2JrUK7DyJYqvt",
  "key34": "2pqikcWpV41ydHGuzar3jcKpNrYen6Uk5czJCythwLq4uyayeXDB9PPYxGjnyjMog7LRd9VMNPVQNFyBx47odgfC",
  "key35": "44gvp4CdHdLacpcb7vVFScjYrbYebYUmnXj6kjvR77pzm8zwYj5QCwNAtfoPMDLnwkQLkcjqeY2HPsQQefr2VAna",
  "key36": "5MK5cfRYa4TUqD2xozoxQutUxyvSjszwmERMgpNq5zh4YYZ9ww1fHbxmSbyeDS5vRyZ62z2Wbnexvs8Ud9UA6G7B",
  "key37": "LUGCLdHvzKbtikHXViuWyhDCMDpo1KKety4mscNLJ23c4bKhfGY7UjcRVJyir9hN9bxnZ6MK6Red46uwdDtK7E7",
  "key38": "3g68f9usLmn2WdpufQRvB4bZ5KwscTMmQtpsAZY8rDDV1BoqvAKiLNAwT6BeVJEpgu5UMt4xJa77w4qPdGgvL8KY",
  "key39": "3LFoZJVHw4mzLvDgogroY1wMqbiMpj5yXpM1zkYJNvzPyRyiBcbZLuzJjXHCLKVcGE8vq19F69bT6XQAxm24E7wq",
  "key40": "3P1WLkBSz3VrFsUuppTNMeNrFdZSHcN7dLrFuJQ6S2b7k6gW2grsgDgbW5koixnwFffpRJQEDt9WysBWwwrU1fvR",
  "key41": "3SiWcX6MLLTTgrK4tEaLo876thV81THC789xFhfkpLJGYru44MNV31TkPPYvsxcod2sfVPkaQURNyBsDJJb9zsFe",
  "key42": "4TRz4Q3r3o36eem8h79NzD8pja1gUYdq9SQ4nPgjxNahSb3EjFhGkwzc1kQG3J33o72q3dTS64BpYHps45Uq4Mnp",
  "key43": "5qEiaNob1X3i6HFF6WoymCkp8SSZND178Lu22rC1rABsZRh3yzuixHPCV2srj8zBH6UvfRZ5MacfnxyvtiMbRAZK",
  "key44": "Lrf37okfTHvVCCR3rLAuyvcEn34d14z5jvSCbW6RU13Nv2SfKDHeyHRY6iknU37KKZn4miN8rkBAAw1qex78P7Y",
  "key45": "2EKgFJyLERD8tpXFrbCBVbKiUzJbaaapx8XyjvwZ7aTBhjfFdMX3QdeZU2AzUYmmntK2CqPwtsBBx8U2ciqTju49",
  "key46": "Xj1a22aF7pdRA7idWsBKr8iyngc4Ecr2JXKZQZKTHNYT7aesYXFP7orADLtebJPgt64wU3M2zyb3aSfmh4T3LTg",
  "key47": "XUDnUtahYjpqXjboowkSaEiF5McTRvAWWwwDeciFkESWKJyne18DvDRU2MBWCMYAwYwHiXAemuBHBNtcoGNdXdg"
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
