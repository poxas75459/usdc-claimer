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
    "Va3ct8R2Ae481aEgZAhaTJGaFALedrgcgkbeqK7HeA8LDQpVsrrsnEC9EVZCmWAL8bNN1gQY8CnVdafYhxuxw1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ibsNba6pqAy31hEgxreuQWiz9UkV7pdWUdZPvtWnqjVJAp84AVjiDuvAU71edtrYNguoCYiDTEauvTKw2z24jKw",
  "key1": "3AHcm37qhwwfkRdumWvRmGxLKf5bZRwksS3b73yfJxwYUzaV2DhkK5WenuhpKjc1Y5khBYVrBbA53Vt4AcnWRR3M",
  "key2": "29FWC9YYTnaPwY2rkQsnmAC9GDhJRQc7wzDQJmXyG9osvoxz4aB3wKYY6jEHASbBxqtB9oTDNwACxys7qQz14nNg",
  "key3": "65EMdKn3jfB27c592Ggrxvk9i1bXPcCmV51XTsuGfHfy3T81drCUW2NGH8jbMBJjDr7UCKBwnBMHHBjotkkgioMd",
  "key4": "3ucDtSoqfPABYcHfXiZ7aXq988FFBHN7nCbQwpW7penAKEZK7xuRSHDp7Xuy7ZtkSJYpKnESVhLMGpCpbWCdbWdJ",
  "key5": "2YXXTRyRp8t2sv7bpz9UA1PbySGsVg99pEx98t41pfSoc6qxxkhfWkSUZwZbk1LM4oiSD2A1fp3eyWsg2LAEDUDy",
  "key6": "5ziqvX4GWdr5eTW9E3xog1djo1Z4ciCw8DzhVW1Ntyy3VuUqtvdFFszynMBH5HKafJRJR2dawZaWncnaMCDQQhyP",
  "key7": "23CTXUadKZkP7SPvVtk9rf9CqfNgz93AmWpt2EK91wEi5pNFop2CHoX4u7Zorc9XV9ia4pRnoheHE9xVNtvc19Xe",
  "key8": "4cvLr39uFd1wzNWHUwQf4B5f7gngfnPotxpMhfaG5hxSW5ehXYJfmnQjMgDr5x8o2DSmJtmMTHbDN4R9wUP8NJv9",
  "key9": "4QNtNPH7gUk8mbNzWHivsf2WQLzheeaJrHjMfgPN5L689Y68PSaG4MzCmHMb57uGTeq3vX6d8Y4DE6cXMrtZoEz1",
  "key10": "2iWBR6av7LnGW7rWGf53W89ePNtHZ9UfuY6hFYJmziUjGrAwNtjoySaw6XrQsQa7cDjt15ZhUq6r6QDVBnoZvM5B",
  "key11": "5nBbEvsgxuqZM61UGtatCyGaBDUS9HoxsH4bod7tFsmsox8HvL699yDzkw3eMFGEEZL9Sjc1ojeRMobmypzpaehM",
  "key12": "2cmpBRMdFVptxznL9KmWqWcNirg69rPzE1Comi3gkGq5ShP8g7XbiBrQEqyfmZKhWSEgdf1dyYxLttJKyUSY748t",
  "key13": "4agNSskgKq3Tevv4TZaHpRwjLco8WNdCq7yVjrKBtUHAWmMHkCBMTQ34XGPEWN36Mwrf9fPb4eg3EbkAp7tAhKxW",
  "key14": "3q2Titr6uHhuh249PdsERdxQCckUSM5M88JrDxXTpDZF8jURXkRfN5xvRR299fYxPjkbs7Tt1Xt76msZ6hkVBhvZ",
  "key15": "3tLeuru2ZN9qNTtzLztAywHzTLtpvEFz7mJYu4M6obofymvKvgUWXCvs7NE7jf4qNLQTgybybGf8mKLSnxsjqpof",
  "key16": "5HVdKgTFxMdeCsGWqgatDmJxMRnGPknJaPeJXNFwVFioAcpd1QwviZfifA5F8FtQjyi3WCbuMBz9Mun2wmsE5eU8",
  "key17": "658sfT3UrWaQDNTQNg1A72Z7rH4XpsgNWUaZJjUxu4AgkgvMzCjMmqa7JpDb5spcf2bRhdf3GDNoirrFkRBxPdgj",
  "key18": "34dd8MRg5XjHLLLh1a9PMQ5masnGY9mKfFnxjn88jv1b15qXmF8fLsXgWbVh8i3QUBEzSizFAj9nE2pRRkrJEh39",
  "key19": "2f82xiv77ubX3D2XfCRdJWrrtwYQArtY2nW1ifm6MMoAKZhpZjSwjQeAp1rESBCiLkmYYaHFyM2LGXP5VJ8kvJRk",
  "key20": "4i3zXGcY3cXthvNUmY67YfUBkUXx34jQpM5MtkwTYZifNgeeXwCDkYv8bm8XwW9CF9wFkkvZRixyfrD1nXtJA49c",
  "key21": "4vh3DGTo1gtB2MF38giJ9Kr49HvxfEzdWGL2ZYnyVK5wjx9mjkrbQxMtoLFcSu6FPU8gouZUwRahTmMN3yu9a5PH",
  "key22": "3pS4ghB2wGzLbiFBF5iwjyYBRnyexNG3NGMHvQQzTenp3XBcxhr45HBRYuZ8bHzEQ48p4TSsXbgJi5wV3f8qkPRh",
  "key23": "2XwFwowEuU363GUkDcQjqGs6gZqD6AJ2YBSZRiRyCwYDZxQmvjxon9oYNng63rwn8TkFNo8vW22uogaYEiVXr7j8",
  "key24": "Kdn8HQnKBk54p8Cb4PKo6PgAxGw1f3ZfEhTG9DVbbzcUpFAcoxEBKybNVCLA61VwXsf6ceMizU77Dtrfq3RVTes",
  "key25": "46WFG8hAzXZyqZUVccT4adzorsm15eJeWhq8E74jepNmT3QApcaDBPB23ZG54GKK277CMXyYpAVwnifFa9n2gWr2",
  "key26": "NVMydb9xPnnooCS3AFJnP8TXV6Yn7soj2muytJajWQW4aQTQ4dgHeV6Ds3ktKC3kPxqUSNHYs8qKpNfGDdPBo6A",
  "key27": "4fBwYTYYuZLQBwXNWPjuWdzrwZLSNaMUZjdh9xduPqH1c8P3rvThbvA991cBrJi9wcdF5wokAr6Su6KQKqy1PAbQ",
  "key28": "yoDMSdk1j6DTjGZ2caVUBWiQEHZsMNw8vHgW9o2vH9CcESxVj7Air49m9ZqBxHAtvpERtjVN2qNi42ysXW5X22r",
  "key29": "4yrytHkgFBqPK3wqM7Fg5DNr4HiFhDbYdy1rvZnTeefzTUABFEBvMrXjMeazfADFCmy97cecSojeJ2PkRcc5sUhJ",
  "key30": "4XfNyCeY39Lb7wVzhK66EDy7SaTQ6wPUBVePEgUm6DoTcR8kyMj9khggrhTqimcXW2td4syQSCae21RaNC9fmyhY",
  "key31": "K88ajqSMFj6eL4of9qunNmnihgyb2y9wKuLFfb38mLcfxLsSJWm96E4Z8Dtnj2EMh2oJrqavFSMtnvzkgQhbcS6",
  "key32": "2pJ54NMwUXezNzoHM2MDaaJWczYHN99PX4kj2UPTEufEaAvx7Zmb2s6wbb6WKFkehK1QDiqc9TwQMUp2A4avJ7cT",
  "key33": "4HqjYVRNmY8MParQsRnasXYoAYREnBMUsViDfj8zquRhD3WbGXag2y1MrXcjEWkNDXGaKtcRj2uyPUdPekjv6CfA",
  "key34": "iWs5DjQwefwzcJHDsciuFYXjqmpMi6bqCfp8b1theNpKmo6QCEzcnkDzgGbHY76ZQkke6Eci4DNGdDYGBSGXEBe",
  "key35": "3tN1v4bLz6U8A2A9p8KpJ9PMAHAt7RctGzN35vXtznuMSiivYDck2x63j2EtdNR9JfgvNisi6Y6XteD5fD35TyAK",
  "key36": "5etradfJCj5bSvQW6x14kcmu5Zb29kLMnZt6bmD1NTAAk3TGwGCUMXqx2hHXmmTmjbcAQhU8YWBrQnd6t8jNszx5",
  "key37": "2JFsdRVDmiTLacrVJWFkNVz3Nw1CBysaRv2DREu55n5rkvZPKSpTYHqcYknZTWDAEQXoNHiSthnhtBT9jvzXwYZn",
  "key38": "4jQim1MeQnAhYs8Upd6rQ4ziEQD13dcbEFsXqqTSV1F24BnTD76eUrsFNMMWJxQ8vfU4uvbh7UvLeZrsCC71MxKf",
  "key39": "5PYnP13XoM9BX2EftP4EHzeCw9XaqZX4hignXPfipGPC8MmbxNv7QkHrBJgqyU7E6nVeAPahz9vL41RHYaE4U67a",
  "key40": "29fiT7LBH74ABhyp1ZYSfJbdYXVhywk3zUp17YxzQMaqoBqCWaXDKPX3xKGjmrPLhm1hQ81R6Dz766PXuRiFiL4F"
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
