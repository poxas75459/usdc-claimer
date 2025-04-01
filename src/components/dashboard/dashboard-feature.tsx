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
    "3a6p92dsoFHgjGPjUeTkXM4xenSkm68VJKXyeRDYsmUB9qKsqoLfJ1z6GMoGi1XHSugfcGiHSBKr29YkYMTXe9H4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPRBTiD938oUKq2CR5KBzf1VTJwqEcHY8vHFAypREmiv8A73CaSXsCKz63Y3R1yEJh2rKwCnB8KZ7n6TtSSsNnj",
  "key1": "3Hq6fnTmMFrasLHLmDCnpJ9wp7MsUTWP4wmCWfLRsdWYHMC2YwZCgVjNbcrEwwMG1p9CeA4QRJicu6GjoiTeGtNY",
  "key2": "3k9P7EUFbjggz27koUJACWq4QpiTwYmRbRRJ5zo6enye1UqDkYQPVp2jQDYGLiT4f6uL66J4BaE6qsfk4FMoC3zR",
  "key3": "4CpoggpGpTyVbdsq2L89pxC5GLKvuLKFmsnkoFkrsJyZgFa9w5coE11CftcXFV9pgYycbxLbLu2RvCaCgSC5jJLZ",
  "key4": "26bjoD6aRFbN8oH32tfKAow9BXBPE95cJu6Bo2uEFJbwa78vwzphFq3CZC8jdr1DRJVFpdgZ43a4rZh46XLLLvGA",
  "key5": "M6o7aPGrRU8zCKBJCE5mLzeFtTFP371TA3YPeJQNiyn5K4S5K2XWurWPJmMuZbUassvE9UiNFBdgE33Wm78abH2",
  "key6": "5ybbuA874M1oErtvXbteMC8Vam5Te9DtX9WdtzuzgewQRwy3TNfsLdK8RNBj4VpoZLRAXjeNQzcFdWPerxwJsV1z",
  "key7": "2MvzHs99cu5oXCeB6xumHxJwYDjPs4NLa5xaqiT7JMuVQCkbUyb7mpFdEaeHXf2aG4mC7XvnXvqGokgGhku8S2kR",
  "key8": "2tbVBLte2u74wCDEXJPH4QVAgx4qQSEgiMju7aZDL5GRQmu9oZiK8GPuLzAhdbz4JhmvKssJNnZqSQVnqovzzjKZ",
  "key9": "2toouHgtiXrCdJMiMYyprmQfX9zsiGRJuPJX8x4sMAbfDzDG5PUDf6P8hzbWpRhUFVS7pwznJyXKFrs8AipERoGq",
  "key10": "2sFAXKHikix9a5A28VZHEnASb7P9Mv32XZ3yjcxatWvFbxA33nEYp5bdNygM2tpQP836RMRdMGq2wcZdXTpFKqkH",
  "key11": "2MXv6ypDx47aJYXpM57B6XJCNGCLDH7TPjjq7KdGJppFTi3HuptRiJZPs1QxGhZmuT7stUwFK2koMyA1HgRmr8uD",
  "key12": "5aA7j8dD2D7LNDXoBMQLsvgwKLcDgkAkgALHu5wNhsqvKxdZrqJYCZtxpe4vsZV1QidcuV2L6K7uBQL5bzkJrHXR",
  "key13": "4GoExza2hCxeJ6QZRdJnyf9YmBQsFsBTutJ4LmqHpP2M28AqBqRSMY8tdcsCZHnWKwHgLT2YUgv6973kdxTxuuV4",
  "key14": "2bSRvBCPmYvAB7rTnsCQgToxQsXpt85a1euc2KPcmnk8Jb4mQ1R1g34m7rTyiiSLsPV3xp78KPbWSxVKn1cXoAe",
  "key15": "4rbi1zxUox2Bjw2GjWn29ZrpBiitgL5byUPn2CqBEtotmuPjWQJLPuH48tTUqtsHp45Y8mzfaVgCcyUHZFeL2dkT",
  "key16": "4YBrunoW4rcAwhK7uU3ii8UBcyrLg7e4jAqRsRKmmNcPhynEpuCsTPXFmHy6VJBo9wsDZEN6jKgBvy2wf7j8E8zL",
  "key17": "3SpSryhKE69nLdX4vpmTH7YWFd8pG19WCJLhyh6d1FzYT74Xgz6qZYWMAfDeVYDMqLdbucfMTzCbXnR3m1rbNLkK",
  "key18": "5DCDFyMzQiZBLgSiK8xe6wceHeq1weE9cykmDAwMNoEQpGZpWyLfxQNNytVE69RdWLjQ4MPBRex8tpF6WzA9Vpzf",
  "key19": "2dXhJStPrz3eH4uk6Tg4tBDUJW336eo52DxhBVgu5CFJB1hQzbi8AsN3eL67rtrhXfK6BWRabrqfsSNuMN7GNxFj",
  "key20": "45UyftFZoSwjMMfwUbmXMPd9KXC1BD56uuYHRGC3VkkT6WLz9UPA57dRz94LCp5xLjUuViUXsi2TS7CTu6AZwZ9H",
  "key21": "4A94pzRsXShJzCVCmDAfHiA5Tpro9vyngDNnsPWjx5RwZAmfRwngxUYvW1Tk4umgdsfzKzQUrDSMix4t8ykQta8j",
  "key22": "5KajWf1BYXgHvR72rDZBEqgVjNPL9JJJgxNJWce2UPnVC2Gsatf4VkgP4jJP2yeRmvujdLxskBe7wfuwPi6TNPSH",
  "key23": "3cvsRkgeCtZJXfyYkQqV5U16wMttQ3Q8aXtJfY5pZqEcxjQsptBxgjXxRXwjNQ6H3dCJJ2fDinWYX2FERBKU65fp",
  "key24": "4AUrziRw42mvxnoHM3Vyq8sHTzt8ukMFfzFX9f4Woq5Q7enKMmDfWZ5H7mLGNENdmZW2hS4aUMpBkB6LWZmpZbiA",
  "key25": "59NTQp4iFAdp7iaYW7EPqG2EPEqkEvumGviYJPVqTrv62d2nrk4FF1AnJdYXLnazkFrMHez6AsZRKm7AJG4TZAjw",
  "key26": "4qBUFUKFPJycNuF27jMUx1mejGfq3zD7Ha7eAkrHSkXeYNXvxDQ5dzCw3oDn1rFBWVnbu42y6riG9kjumkcZut83",
  "key27": "3PU2VCv5ZwjZsK3FDuoXKZeiJnYTt68W6MkbRXcR53RLDPSDsCorZv29ZEFv14LrSKoFjR9S3DV4LoR24zzF2Lyq",
  "key28": "wombntLWtq2i2BjGXFrBmHndsfMuNsVRcVZhxfZja7w62gkeQFaaGxfUs2A1i3ZAxNV1g3FpnEAS4N2B3SLNFqK",
  "key29": "5kJPxwWT9L6YeeXbHSs8b5SRA8oo4gAgEgRyobb9DNVeVVsJBGxb4Hor8m7cfyif6VHbtjBdcSYVenaSQP88JQFH",
  "key30": "2YV67UuvEzyFh57oJqcrHpGUv7LQ9a88LQUukC2DqrJ7BL1CRnQ1iKKPknYaqLRC3Uof9fRTSJHFUbTfsHSr9b5H",
  "key31": "4KcWPvxFBzgJjYTjueDriSd7ZNL9VbxrNjpXjvDcWYEKWKNMprgDHuzhXTKDyZbEHpb9Vs4y76AUChTPiKjHgTW7",
  "key32": "2eV6uVGm3a7eQoZuCszbu1FXhFCJWzY7za8b55YagBVDT5xASKo76goV7aU1xbfUbSCq8xWmFuCWWjPUmEDojiLb",
  "key33": "63wgyK8YikAx7UwibcKLdSuULfbwZ5BFN91ooRHUTiN4nt33Q1262AaxuqJSSLZFHXPRKwXNp3kUMbUWr795B2FY",
  "key34": "49W5LdgH731ShmUnGPY4Qn8J2kuLHz75VB3YF4Pwr6xEWxcHQaNzEJCMdn4tU3Vya5CLHNHceNGd6EjVhjCcCSh3",
  "key35": "2JxwedFBgBdznS6toCebe8uQobcyHHPajpJoSB9M8g78JDVVeXr2YW9wYaAujngAiJchzRLsevYivnRbaLrSJJcu",
  "key36": "49t239ufZ2vVpt4e5vU7GNUMLh45uSBjY42JbKvEobVy4CP4gn9TLFTnNiUH4FWZYRpkkBtqiddepbVGUTvzJQ7h",
  "key37": "3mDrRZyDKy4NkTQMz3eiNc3m6vigAWKmvupaKwRsi8Hs4yoD5SmEYSitrCnJyR69pk2NCdmwN8iuEcpBBEgphr1x"
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
