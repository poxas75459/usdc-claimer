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
    "26j2gkg6wzspT2c3nrGj9xeWfuDBnpYLgYECdDQBT9AnQtjA4JfV8jPswmjPVnQiki7e7oNe7U5LCgLAT6t5RSG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cWww2W9JYdVFW6jWfmUe4VkGvSr2ybsiKhBNkww9smKqzvLT5jPbi1HVzqC67GhapJAQaR7WtbuQYLdMzd4bgj3",
  "key1": "121GBbMjoD473R7s6m5C77KTuwzCYF2nsAkfZFrjwwQxMAtuE6h7SUacngDdsJHgiBF6KBEep22grMvocukTeS2v",
  "key2": "5Skyccqej7AsRftYcVEaYnvFZ3wr9jdqRaQkgQLh4MGebJ67qcswMbD9y7hjpoRemKKrQQjpMWaNhH27tdFBb9Ea",
  "key3": "4qL1GpLs6rM7ovTeuEprLL8KtEX5gj8Gjm2vXfawGCAiyQiS1pWKE9f31k5ULRQgcDdM1pDcgdFd4Nh4ykCt3ztb",
  "key4": "2wjCAXh4knStwKj4BbK6t1DUyt67dsd23DVNzmGNJ2HLA3p8EenTNcBKT1VEs3P832eMaSyEFQ6jTSxk5HuZnmXK",
  "key5": "2GAeiSCd6T546mZwSY6Td8vohg6nfaALhLqMReDNUPn3tDsR65zZLp7ewjJ29Hh111Zh6PdCKaiCfWPoaYv2xFjq",
  "key6": "2nf4z4xeCaxJUcTxTJSYjSz7hLcSjd2ZgV1s1s8pFSycbEs9FofwSbZNpSBMUCadxNKgWQ2gJDTBpTABejQVF1pY",
  "key7": "3gVtit8rXhdnAPrXANj45Yz1nExFED9uKEfgXrUk4X25b2rxGxYYAikcZyA3KqKZtN7n8Gq4kPTxNhBUCEteNyJa",
  "key8": "4sMFkAfkGg62CkkYcWb8EksH5PCDhkVMGgH61Vaou35BLdxy7EvzZQeHo3RTXyT65NDbNed61Hw4Y6DYr3RSeY5B",
  "key9": "5C6u7aMfbCy3a98igFHLRjLNH4GH2VNqMiKjT8jkbDgHGLuXXkYZfzoK77HRywvdFuW2hLaKAR2q99YnQxJ12e7J",
  "key10": "2GM2N8CL3JRFRC8Wyfn9qjC3RyefCqKqYugZYKchdMv9U88PJmhBMoeGEscWEwUUe2R18Kna7urDBA9ptsb5F4X2",
  "key11": "4vtSywPHJWq65kgGJGQZVot6GiCeG1SQXsrs7nAX5eRhwqKBoAGsigN3R8khg2gB8yKkPqzH2MCHwwVGngYGWq15",
  "key12": "3VDDCzjq96SSnfH4Y2x9dRd8J2j1tcizF8CaUbVxki19WErdWTGkcYFzWpGhxFuEUEB4ZMuPDzAXsC2u89bgZodW",
  "key13": "4ZcjUuTDQomGUHjwMnaniVfrBt1zdm6XN2CXvYHCN8y6B8fQZE2h4EA4xYAMTgqAGw6xrLj6meC5NgTdjPx7k3SZ",
  "key14": "svgNQxeCRKTeVXEYusqAcp79bSEufz6ny65YKGbGdvfxryrytVr1f36y6nCbBwrkv2Wp9StcXSYvUQPg2VNsKPB",
  "key15": "33hmv4TQFCh6PC7vD3VbLu1KpReYrjhhpNLdDsjaMbQGPZSyuwDokKMJ6vpgEdJiD5j66cB1U3F9M22jfLiCFh7m",
  "key16": "4SqyqMWZceu3zmFkSdULfK39uSHWrDY8kQvEbagJPkSqjZFnmR41o5qPb5TpXoeTKpUNskP8VypHQsBgV8xDNdZA",
  "key17": "5MmKqtsFHAfR6aEGnoPLTW3jHEpzR4q9395n339U8MtpzbYTvwGmfnkP2f4aBMBqQj5KxaXQyRhajHmev4f7F9UZ",
  "key18": "2a6u69jDDum8jU2qcf6g748xbfhFGPPQXdNXEV9SetDFopU3xE6KdaDa6MUApEJPKdduZziwfNembhSYgMRxgNF6",
  "key19": "37WqanDjN49p4RQSQ2XcsnuKR9xXvCmWt5GdLgCG9v3B6SKHxDTP4AC2C6kQciRwaHfQbQthWVD8oGjgSWBZgJfD",
  "key20": "iMEwwYEcaLcFZmTAhKgcpstYvjC64KJovdanWqLgYs6VMZqb8PuC2ukkprZh3b7WEJyXoBZ6YAeuKrEXkurvQRi",
  "key21": "58pWDTq5yPSpcDFV9YzLuJg5DrpV1rShXtmGoNwnwfk9X8CLajzqKqrY3DUA4zj26eyiCbUGP3E1N2J5FY2qQgvU",
  "key22": "5bLuC81n7jWqkzQSvuzX7Xn21jjaGEADYXCZpaMoNqUaRh3uYHTirRttokbSUwS2E1cBUfiyhJWGgFY5Yez4tDZz",
  "key23": "5SaweGQgSpzQKG6WczDf4njqSEBnPs5WB7C83JVr7VT9wgzRFwWZM6xBiM4iv8KG4Xg25QCjQoLHavj7MbF3H5nH",
  "key24": "21SZSfqj1jF94ZcAqyXkprMqwFm5sMEdxbabJcE4vyE1cu2SsapkZPC2N7EaCwU8w2M9QAFV2gHYaWuVEoLNwqRX",
  "key25": "4S9E8kz9CuYfrG9b76xTEZAHFnoWHeEA3PLyypjZ8Td2dgARRsLLpDnKAMAnxYwmLuaZnyQY87k2pSdquNhMwGnu",
  "key26": "5vPqM2wBkaGUtY2PsSZVTtLo8XhoSoNhdaRzSUNZLUr2nhw3oaRoRFAQPCJQ68ZsXiaZ9NyVBAEdyrawGxgDyWJm",
  "key27": "JfBFmwkue5F8PTXnqwPi39sJNr4Fu7KGU66DZmkNapSpiUqpxvdeWt8e8EbNY4a9CBapxxK9QUuGEqtw4BQjs2D",
  "key28": "4dvNKvvNfk1RE6zveb6StWtSKT4TedUNYyrTC7XTydHX5XVpfB7jCTSJLwSYnVJcoDJK5D5Law1nqbUdtwC9WCuH",
  "key29": "8Jeh8n5ePNUayZJvEN6Yyvr5iVB3gTNGqqn5xpfq1Z943oXrTNy1AtknYAszdnuQ8NHQZAxCmRexL7LMEQAHNN3",
  "key30": "3KL3HV3PJesxDrzS6ZgAgpAnhod2dNvHKJzHJ9nZabeGCYwQ3wutYTZDSVN83qn1h7i9F9R3FDdFU5g9pvnSzd7W",
  "key31": "P7Zhrd1TPwa4US5A26LZ4pDSzwp6hLpHmcWuw1DKvkuJj4Kwrmdi4zaAem6Lr5qpY1NZiPuN7QMom26pRikbyZX",
  "key32": "2CFCJ9x6qrDL4AgQywMQwRYpiRmatL5Tft6dLipJTmaWRzEjDD4esLndmwZd3WkdA5dFiBfhr2Fg4hnw1g1LJtq7",
  "key33": "2bE9Q8QkXzYnNwuMSWLn1YGggQnHhY9AnNatE2PN8yb5AEjm9bkte9BR4HL9EvDs7EfeEJPNTdFqeHNaWTXvhd52",
  "key34": "Z3U5wCerGmnWGzAhqiANBPhzAmgY2L9xQ9ynDsxC3r3w2XJxso7bbyPpRm5iQNvNdyVFcGpR5Rsd6GdA3JFPtTC",
  "key35": "2Dci9VJ8rbUwPbjTbrXYcC949A1k6yQBpSNetEpYDgVvPbgLthEkhDqKGTPtXNpPRh3RzpSSEnZZmFTFbs6T3bL7",
  "key36": "21rNQNfRqXfVSqJ1Z9cDvNFsMSSWHVwFr5zNeNQLJQUqNoJtZ9s5gDgeVF9Zk7Af9KUmtFg5uwg4W6SCjDVh6G6x",
  "key37": "4zZ5uF3AK93g6oEqz98zrkybmTRKpmWfXUGYGkbVHMtyaWXAiSFmjefcxMo6AtwK4H6aD9mLWtkEcCrUwJWcAN3Y",
  "key38": "Aw6Q6SHKCEXiBKyRsBiqUwvUzTVJJ5rftwQRUYGCijZgVCn5d9JppLrMUeCdnYXT1YH2vRJAjqunokz8zRNCckY",
  "key39": "5Hg9NZx4GKbTjptbtCsV9yYkDfTBGMeo7VJfDfA69ENm5V3tzs3TBTGfxzu7S1nTBdaD6NvgrwJqk7xaQJC3Qmqq",
  "key40": "2ha9KiUeSJz8uYxZRt2REvFfzADETdySUXVvm4egAQPpvbKfNaNSqcHE7Q3iLzqvH1QdB3WxbmcxwqSgoNir1T8f",
  "key41": "2JuV5MATpiR3n8xzQuByumQkf3zWq73VLgZZ46ekG6qbJZ95QyZdPNds53PxAKYFcuURr52VhEznuniQNZEnoGhB",
  "key42": "2C8XjW9vx4qsmWR6ibdh8RS4F74qUzCED1pb7rLmbDr7dRXGHtwJ5ycX1meq2h1AQ1GFjxwCK8VMh2N9t23d9s6K",
  "key43": "4A9UfHSayRanxpvTJn2PMuCvgEUZwu3opmbruH5AwXRCcyXNJRyVovxEanvf75DxFWeyKpwoip1psfjKhXsWMfG7",
  "key44": "2eJvkTW9mEMtdUoSpkVGXpmpXBAabLVV9DSdMmyQsGKfgL4PBiS8k68HJkR3wCzCyTsNysTmYS4RBi1eUbm89Vm4",
  "key45": "D15DmNDRWkrGtnVvqUkHqfchEnhEedyxfLiRjBi9LodHJCMDru99b8dSg2SP6FFKn4WjtLAWhNh1CZ22pZmN51Z",
  "key46": "3Nx9zzkV3o2RtaFT6yVxMTfREBQcSb6ZEDxZqGPS2Spqq8DpGvGRyow4CzCbzyXxPukp5KUwu7F8bqzYLNhBvgsh"
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
