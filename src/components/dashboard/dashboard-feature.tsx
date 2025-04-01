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
    "3T16iCwXUAvW8wxxWs35DA8g5rB8Pnv9xdPZRLr5H5DYQU7NPEsymj43qJtncvsLhw4rK2GypaU9YfSU9xBUbH8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rw3xqcqMd9XKuSUDYXz6WJme5ae1sZqMPxy6pFSr5oh8s8uDhm79K6AYATwX7gCUUiDHhc3VZ3HD3iTGdnSnBop",
  "key1": "61UZVboodStRE9vtCcquauR3CA4axiXp1qmXGFhd22YDwAX9he1tf43uoVjnNgRvxUyaoP6LRyco5t2CPu4ryyv7",
  "key2": "2juHGRVBjEMDeD8u6gsvar6rrQLJ6ev8GsZ8cm7eJBKeXDmfXUNPWnyZYCPqBZyc8TTe74TbUUu6GwuGL1CHMC4c",
  "key3": "6T6gh1ApPaa45GTnnafA7DLT69gQPDxsqz9fz6aUpwoTvHTV4Bhd77f6ZjQRTb4DYtNkJGyLe3P6zcFQempHp71",
  "key4": "2tjxPrfVWqMR3CT3tFCRSdJLFrwqiPzsZZDvUC8TYLmdUpeMzoa3egr4KMTCsVYRTAFZ1et9DqwZb5Mj5zZksUiZ",
  "key5": "3ynRGhYMkcKYqF52vEFRt5QoYbih3w7TKRf4cuu4wi5X7W3N3ABci72nZVKNBxdCV82RnS24NRgNucw1zLncbq26",
  "key6": "2psymdNsWUoUNA4P3FZoCMKJ59eLwUuzooKQG39YfrAJ8wyQqP67gSbiWLgyFuHp3CLvfnBLEpnitj73GszeHkCz",
  "key7": "3LpZaxuzPycCmcRWwHVnajN3QsaFWiZtxBhaBnKZPJdsdHpw4H5p7Wv6zSRDtjRoLZgBhzoZ7SSTvJrZwifPtRvA",
  "key8": "QMPruZwnYRwwqFpHpZeUaEawskKAGyda27i5xk8dN5KBsB7PiyuWQ5TtDJUeimfaWcABG1NGnMCwopUgGxPhjwh",
  "key9": "26aFqgVQHFzo8sNDKvwp1hAULiEoygrNQ4gdKQ6AWy5m5DHtpHRjbH4uvjYxwvuofEymqTfV5tkYf4ULJnTVLm63",
  "key10": "5LUXCgbzcTuGBFRQjASzXfkgupDqVXoTb7TQFHtRfo6Kc237YQdKXhjr9NJEYuDCXFgiDvEjA6DyKEYSLHtMqHgY",
  "key11": "5UNE6qisgVFTYeqcxCBF9vtt15dCz4GQsAq229ggJPDFx8ZCCNgPvETxibM3YTLXrL84dX5wqxQ5RDFgtaz93WmH",
  "key12": "3r2XFFLREwxjw4P1JZqB9FiDk9nobmWmo9GgsY38ZHS6gaCyni2kC6tibku5pMzCmr3yP2Y7hnJMtVhv6UFQwoUC",
  "key13": "icsPydMDJkb4Mnu1eRiAozKnvksv8MCCgkWUTAFhrPmokRCDVqSGPx38DbsJNQzC8TPmpNtCrncczseVyEX1tqW",
  "key14": "36tRtfysZSCZRrpMhxoXbUZTkNp55xWJeCN1xgZQK3au61V1k991WoHoFEtTUgNxUsPUa2C4DR5du34gh2QCxpwS",
  "key15": "2Ae5KQXWvVoLjWpBkpLS9A4MLBKdohpq4ejNzRbuMz18FB3q3of9HAYHFPWpaMe29vaTVgNMdh7kgGwMMXVVQ1mr",
  "key16": "3fi7GdRuZXdisQyEq1hAqgEEBCyjCTL8dD4iXGq6ceSWobEsN3UgbXZw6C2qSv5HfRhEDmE1ksJXCxmFNPv7dDmZ",
  "key17": "23VGs7Bb78sxhx1pzkezpUkU3bn2sCuAXcF8Xsu6wYjEgx8y2zq3S6WCatKFCQeBxrDz9dC5LJRtomdmqovoMSRp",
  "key18": "2QLozvRk7bGEP1waJtjytwCLEqp8XBTSavF7BiVPowF7kw5kZUFdTVbGWqkAZhPrbZyeLyCVWEHEjhg1vgWWC5ma",
  "key19": "4ay8QNsS5YKr7X39LbUJLJ9qS49ZaDD3c7kgKWbfmrfnVKaR7k9ErDwSupyicTFV4xtX24QX6N4JLqBngnMRjQJh",
  "key20": "ev1N2jYWnY8BRUDqQxJHkinkEaQvFLNPf7V3y5BT9MijkVwMLdMpJY3WUAwUmjC4pVn4B85bkMHsxZva3w7NFZF",
  "key21": "2pJVXLRDoBDY9MTjT9VMTkhyv4uh38HuP4WPrn3uNxST2JGhE93msStL8qArkVSxiArfVHRCYfbVm4ySzhuqqvwW",
  "key22": "gY3THoraXNwSonXz8tZ7JKG5Au79GhJvXwgMc4EqgDcXFtq8qMUowqyzetBi9J5ZNtb2YwfEyk3CZ6svJ3r77V7",
  "key23": "4fMoZtNgR45mpkTi1mP6vFVQ7wk8Dn2cA9v8GQNf5mhpUYWPvdvsduqRVRmvgpeSFycvDScygR7j5cf6AwsokS3X",
  "key24": "65XBDiDphcRDPJ1W1wsc9iF6spMteBQFZoEEySVsrytbJ6LZsEiW69F1hJJ4HogV9oifz3cLUjhKAZfg2PMoNUP8",
  "key25": "2JjH4kgC9ugES86vpdpTD2eqzHGeKeX3SzaVizkTeAVEfSsLkDVPToSXarPTWpbpFetbva9WaaJJ9qJ2n34WeyNq",
  "key26": "5XLvbzi8P5yfJQpbHR2qy7Mb86xUiXWFqrr9d72UsyQ1re4UKx7ypSpzF2R1TrbY3nA5wZkzw3xJWFwS9RJV68s",
  "key27": "5cn2ZaN4uJyFHqB12U14e8JnbsUw33qzy5aEef2vCbrxtWfWJYai6EYjMyeEXdG9qKmYgWhDgXmCpjv2rthWjykL",
  "key28": "F8TuLqL5uaQ2G19zHSCUdtAY4pNL3fBwraPtQC777N2MPUDULCAtkx13ZMiuF7JSpXuy2xZCLXQVJ9fnVtxKSfh",
  "key29": "3e3bCJoyGM3rYTKuHpGPtjx6ZxAFmm7hdA5pCYunPbEW8UXQR5FaGQ6esfyNYjuqARTyxVYbN4h2e2UJj73gpsme",
  "key30": "2JDuqTdv7e2hCZ1QvzEo24WehDiHBxKAxWqM775eoVZg6Pat51v86jWaBzJsKUrHgmk3FZUwaxRkchBSstEfRHN6",
  "key31": "5soULWM3nCWeCudJVnJc48WxfMXTdfu1JpMpzv3hCYPa7rHvsuBqjBQqVAoLPorzrbgAm6ia8FBQ8esWaR4fo1xX",
  "key32": "61cjNQB6ctqn5J4FWwHZgzu6dDL1oSN2SmgMx4ar2bbXGFh1mh1LLGPbAwVvjMSbqM91PppBKpbJreCRvdHHgX8B",
  "key33": "4A9GcJB6xBzHqwDxJx13TVXZe8KEVwrcS1CvanB7bt3ftZPzpbRGq7ZNPQ8JV1bbrVx7mkjr6DNhF82iCkyXmNf",
  "key34": "47daEwG7t3pB34NPGLYJ8ukp11NutUPojYXbTM3FiR3nWqpGnJD1YwFapvh5vJhCpo3zAUzeSYJYafQPLJRxPwpi",
  "key35": "3P8YjTgeRahBwCd3YWiPA8Ru5naU2eq5z6MnhgiuAH3Si1KKCmVB6rt2cHUdBCiGktv3vdHooGWxB9nYcHWv9PYL",
  "key36": "XKykUPCznoWER6pktpJ37GMBVsWDMHpkgi1WUxiyintthtztMcXXPzPpxj8yhkZqzHCKP9ZdCoQGkT2MoiTQYhh",
  "key37": "2TNq86W2PewoHEj78djMbf7BKeRQosMbZaYXJJVF34xXtgXqqc3wQjjRuQX8rnDYPDNhcUN9aCVr7UzGsXUybjEu",
  "key38": "4iadjHUNjpfAtiNXQYvMnbHPM5NJUzTEps6n6qNVfuWWNTGgfm7CRUZsLniQvpZmf76pgSpBB2iTkcYcixTXhpDN",
  "key39": "5PHm6sapsuezQMsmVJEX15Sgk6MFK1wDPBLjRAwWMjfftTGfbXWfKaMQrjhK9UNRxy32fXmtBNQV21X1bbmrKavu",
  "key40": "2ApKS4JUL4ngF4spNyJcvwNnyNSF3S4M6j6jVcdiiU8bfWKC9rUxatUqrkLJjv7UqiDNd5Tm1u2dZAX35U5E6FPN",
  "key41": "3cWhW21Vzk1dnNXZM4t7SR76HyL7wpavTBzJhszvvY466nqAi82HfuxF9pfoqAiNTi8LDiw6Ha4s8ZBPJhoRtoKM",
  "key42": "3JyWPnZERV9ZqN5nECuHN8D84ePyr1ZH4nFwG4TerMcLGfVVpS5srvNaWMGkxbmERjsmxXJiZCtXg4XhXSaC3htb",
  "key43": "3r4XRFVw8AhrJCUCATmGCr2eqtwz1Hvn9Auj8Asjbg6dedhFu1upT5Ejtx9qCDUouwBNzMvT1MhHRhuANWr1Zz7F",
  "key44": "324ii1c1LWWubbjLXN7iuUnFCJQ3z3D7W6WeMjFWywUZsWoCEQcmua9jPJDAaxtTEbztjCFAvQEDUkJFRcqbyv9g",
  "key45": "5mWcMJK9YnEMYLm1u4d6NJ26DdkFkxvJPVYPstQBKYHKTPLZ53sRsf6aufvuUdjpvGepVZUpchZAp2hhsZsu1vJv",
  "key46": "5xuMHZucxh7AktWL8bL1bj4TKAtpgn6kwKjazTkejYTv7qYsgG1P8ZqDsrThrbc7QHnNP4A1BbhAYgd7kLbmr7B8",
  "key47": "4nB1ni6mE5durVfqfGiJhWMDHFSyjDmjAC51Ahkxsw8oEpXq5fjyKFeLYwQorjV1jQgk1mGoRYYEHRQ11eTnMHXQ",
  "key48": "bYBJMpcH4hahjiKnsoY4MfUxmF6QhkGpC88aHajBwpefEeAuQGmKsoHW4BmKKs2SWUureW6buzmceh4pdSnEcG9",
  "key49": "3B2sDEJGzHPHKKw3q3S4PXsvJRKep3DhbCqDzLvKcjwzTpmxhbvDVnGgABCDdYyzqPxgESEGYb5tMr6pWTG9eaJu"
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
