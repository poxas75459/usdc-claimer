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
    "63D58UShLB1iH5bXwuXqF1H1ZWjNTA3TNapzhqjn2JJKSsjrRp5kJuW87NHsnPTooA7uGB5SHVPB1FXCeRDpFBXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nRW4gPm4YE52w5LmeQoQCtoYoSNc8AwE9otynvUoknEnFMFdK5hHDuyeWJkQgpNWwPjH9P7PGtCcKWA96Y6c8dP",
  "key1": "4oPv3DjTKwcukPJ1Vj8oxAoaJybex96jMDfair8cQisTtEuRQ5iK3jAAZtPidvffEBXeiw1rGTcEeifjvpAHsLhx",
  "key2": "5qJXqRyTtqfm9eT1ycFuwioisGKT8R7ANFdnWEF9ocsMv8qDPN2AQXzrqqgCWKhEREpFStgktT86uV3panL3yg3Q",
  "key3": "2VD1uxJTw1eJUTZHUFkygZuPqaZ6uXqmPKDwY3axEveFXJFybRonM3S1T5mUwSamNyaZ8kfmb4JR8JQPD3DaSqh8",
  "key4": "673wsxYdDNpCr3gCyT3ftMZvZHDa78vWZ5rNm27qbzqJeohMHKytJYjA29Dr32Ji8GmfYV18fwYUnq8qqXsVrkGu",
  "key5": "3CRBDf258i8CLVBdsqDjMQ8DJF8KVtTpqKywAH5gqc4fM89HZVbisjVJCYwMi8MU7c4pzNcYQBRoaWDreQNMcppK",
  "key6": "4HR6G3bV9muLzVcTwBFNui5YgCHx9weAp7NJNcGrEA5f2QHwqqfupoSiBgr9M2dRu7vdVRekrUvgcx1snGPvxk26",
  "key7": "5BrfXKBUdcYt3akrWjt61x8Bc53BVnsmxivj33EZwYUNQkEchhBtXGGypCBBuR5HDjgfEJk8qSnLkN6wpGJZ5UUa",
  "key8": "33t2JJxjEVC1mZ2mXUBSRfhnKu49njpZrWghiwSSJetS9GJNxtFDiWbhrKj6HSo4zREzcDXiZKGa9XmcL8pkXWvs",
  "key9": "3bCq9YZfG632ZJHcyANeZxvSFRPuU1X9VZY1Rp9YZKKmpqhWzMuNuUPA36cY9TK6tLY1G58cbqLgvVnNEWow9ja1",
  "key10": "4MHvtQDcFvRBsw1pvQ6s3VxmjPdmAxP7DZthFfRxe7ESbC3mdr4JpzSerBD2cpFWghJgMAYMEusP9i6woGmVwCfT",
  "key11": "5QB6BbCkLhhNBJ36Zvfte1tQfiTzqDSXWj17EpfbHFdWG92nTcJYR3YPGK3aKpUxksUcPddrS9ctuxhtK2reBfFW",
  "key12": "5Avf87PfwaMWtuEUeAvsgfAmHbuAghyhDRL1SHzCAoveJM7CchMSDgLfUmFVAEevwrCmZ7GiurevYDVYydkDSZ2s",
  "key13": "3MHzpfpwmUtGsfknMmpneR7gmnugZFD7f1RS6VJTBF41KWFn6bB7KsNJYY6RHNX9NMK3GmffvGp6Qzx6fmC4BuXG",
  "key14": "4twps9wTVZWuhqUyozDwm6vETAPh9tNxcUf9AgqbBcqTZcAxZRtJTQ81fGMeKmFHkhcPiYE99MSce87Unr5X312M",
  "key15": "eiXDHjUPwD7jUrHTqYnwXHyBPVWHRe4BJtDSsQdvPmQZu7xefxdKWWrx9hk5fKfjba31p4QqqffGEnoi6UJhysr",
  "key16": "6X5hVNiQ1XHdo4QXsvBrcSDugynemuQwWksCQcCtDMXH6VCduUA9gU1dahDCCwu8DtdpoUpgMsP7RmqVyEuaiD1",
  "key17": "Rj8jaKJcZuKNvwzfp5DYMQBBrrouJZMkquEFk5BqBzxTZbXDZukaWV9Sdai9q7qNm3EKf6tvCG14s6eb91yi8V8",
  "key18": "2zcgKsYzXCyuAxom7XaQHbKsJr6cUS1TorMm1WvdAQU2ovqiiqgShCXEFLbbuie8EitKBQKy1zZRTP9qH28ABNR",
  "key19": "2MjC9hY3oUxpCfxQV8nzF71LxnFA7G2EEVYwRk7uFH2uY2WzRSFZVfb6K8TER1MzcKQPc1gPhb5ixTKXA43y4arB",
  "key20": "4u24zHpbiAW79tvTmAdyMa1BNPLdSUZSpLG7HBFfKUjQv2PGbxxZAqfnprH7EB7zFi5J7ieHptZGwpbmujrRBN9v",
  "key21": "6U5drfnm62DCDpuDfhN8Z6svg5BQUWSzsBESS3E7q3ePGsPqYjf7FQ3JCidqPzSoXWb16xNi2QQpKDKpVa29GFX",
  "key22": "UJr5GMhQTzbgQgPzZJNAb57nEFCMy6Lu6jWamErh5xckyfXj6AzhtLygm8o4zm2ntMk1gSdiUJwYG66XVkTakje",
  "key23": "2secUj892VtSNSPb1QWrSJ4kkYKjcR9gbnVQAz1fMdy6m1RixsoZmGf37oei1whmcwK6whZmiSfodbcCwD4qTAGA",
  "key24": "2YL9uV2YFBhE78hag1STf3hGiL8tsL9G5T3pUEPJd5ymVicky3V8ihWsKZoAmzCPXdbiRFifGCDKQa7iZTit4GaY",
  "key25": "zufdyaPhwfNyvAd39UPQatxaCzdQauiyHB5yDcNmgLHMcGL8ux9ABcwRYmf2BVSumDm9b28pvP19e9pMiGbSxCW",
  "key26": "5xN5ENdGtjjE4FnpjFmnJGGygQ8fSkJNtqMy3j1DGJPpHg6jht7FhUFQPeZowmAR78HXJPctJS8E8sFzGM3DMZAd",
  "key27": "2r6ySNb6hXutyhy8kWhPcHwvqmFFYuaBeipPaKWtfxeN768G5nYaZdgFJMSTLGKBRxQzXqPfQUQYst8r47Nqy4Tr",
  "key28": "5F3xNWZ6oo1VBnKvHs8fXMfturaGVVHumtf9dMmBYgCiw3ta1fCie4bBY2rrvgW3QVUn9PwEZAArjJPQPLoZQZYu",
  "key29": "3K7SpeFcW4VgJz8KvoLMwBY4XRyaNBtCZRELJ5s6g9ewHSN7D6LoU2dtGMXjQw49a3GuAv83wMN1W28NFdzgWnyP",
  "key30": "5qkgdPq7onhWomf8N5Qwpn4tuNFixcffi4YE5esSnCUSTfkYfgnAutgvd8KEWWqdR3czNsJKao1pBq1HGa5Ee9Cd",
  "key31": "3F4eJ2BNcMsnYgTFumGuY1BBuerDUSZeVPigGaJb8c9Kxbw6bFYeJbSKuHcPMtkQ9A8FRukqkEzZfDSxaygsqYpD",
  "key32": "3mYT5oiZZTMMBpjnYTdTdXzE8ttCZNJY1Vz4EdHH5B1VS4G3BoGDAgxBEH9QphviCEuRmGVjjEMLQfEwLSMgAKu6",
  "key33": "3iEA8WkXaKXv3ArCTxmSD9t16RqBAwY9tXCxadtvtHk1Ef2EBLNFYN9ovD6gMjdTb4eddG7E9z6xLQhUToCvgiqY",
  "key34": "Ugh1hQDigN9t5SrjkYxh9J7PDt4nanTvgUeeDTF9hsh9MyEDBunGKi6nLMXSpXa8HzDH1t6YaMQ44icQrbeoeQS",
  "key35": "4PqEUSoDUzVeHy4XYrUqPbUfuZm412Cjz3CjwnVZGBgwFrhYPGRfKG7uKunPxZ7ufFGxpktA1dZQYu5om5FUhk86",
  "key36": "5EcxPPd9dq3tdypDmZ6iCQMQGofyiE6gyb1RBR6jSCUQofEcx1tsEgvQLSqfgXGYwHWRpyYgN7DZvLvvSM48pB3H",
  "key37": "3M6stU5pfmWmz5SNwqTryRbmsQKw4Mn99VxuULzYC6UBTi9qxuDKGN38Q8iuQgmYB9DE6YXhaqnCsquiT6MEg6nY",
  "key38": "47UmzQhhvGifpQdtJjgkYsd4Ap5yp7XNsY8F2J57EF9QTNbNPKFwDsmQ9sp6ncGfMM88yiFFdaGbbG26fLkZMixW"
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
