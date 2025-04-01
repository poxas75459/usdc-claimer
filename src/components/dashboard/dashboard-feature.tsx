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
    "hyK891Y9ZvjnjLmSWZvVrAAyHZ1CcFrtP9MfTw8sZsnVzavjjazUMBVyZU26MhVrfAy4azG27rdBAqtsoDH1FFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55KYC1W3nm7LEeDaNhbA4g9AvTXJu1X7QoTYdpaAGC5q8pn3fLd4jkqMHUoPSHSuhR6XeWaUMQuFCDk7JvBp2jGr",
  "key1": "2NznBpokKgHh41o3sa2n7UxpTDZAJLSxpj5G7BkJ6dzuSmsTT8WZw4JnYGneEQBqM1qFT63GdCx3QLy871Tj8t77",
  "key2": "2BT6iLTDRMDGr9AiHBPFkSsHJxxYMviVanZ15WdgfwH9WoozMzsFkErVhHmhfJGw2G3FfCaPuCWx8Fwv8k7o9PiQ",
  "key3": "2k1Kozo3cXqinKJ2D3QkuAPnu4EWVrSEduDZj5sck2c3v5RMaB3wW68dS354Kff64uhEQebgTonWYV7EeCEX12Uv",
  "key4": "5ggHcTghyzXiXzHokj5RRGinDqBw8EV6naVhsnynAaX2WhJQ5XqK5yPsb7WSiJHbzymC1Mow9PyKeVGsPjY7Zs4Z",
  "key5": "3xY6G1ii7Ray3b6TdWjBTv4M7BWQy3RFF9m8uPxwfFHBPBGSA33EiLiiuiQ47j4Vmc9Wd3nQ6Am5Hhpjv1MRJaG1",
  "key6": "5QZ2GFM75REyQsH6HphzmY8mXe83hBgYQ2CbG1tGmbDQavYaMHFBbSrc6w2xGgC2ZL5F28NEDpCjPM8JW4WwJgEo",
  "key7": "2P74w4AmnCLNubCriwxDERDVyeRw7qbbszQ4TC4eAcTQ6K2Pq8ojzADCHfmFFNiSgHY8XjALyv1jNbqDc5miwx3v",
  "key8": "4o8Bv6hbjevAfM6n3K41jgkAnxKkc4PM2WQ2Yq2gS7QGmkMZVjFYormp4uC4hMu5jtiiy4H59FxzderJqVvgUWTy",
  "key9": "Dzm9vzVhGyKtmoN821nT46yvHrDh5PypCV4QpCF7wKf6AwLCkpdQt2Xmat1S7ypHPR2LyFsGFs9MopN6epjG7gB",
  "key10": "4vH7szuz4eTtGFg1dAoFHnBdBwC9eMQSQEResWujX5byr3ig2pJUCSn3iw3hnW7hLFs1MJ9TiqEqa8QXdtjGbZsu",
  "key11": "4P4so1hLKN4JAgM6pNaT5RKLc3kAQQrZiUe29WDbrRQq6BvCqtvEG31qbcfssvYjxFzavQNQLYmQbsaw1shrGnpb",
  "key12": "4uhJtf9MPqcUitmGNzwf2pVLDp7veA4XHbe6vuGFd1Gts4XAAEup3QNXkN3TsiH2Ue5jhWmRgm7K3iCiLVJDYdz8",
  "key13": "4LsT54pwakUG8cK9Ff3oZQCZMC5GYgRGW5jrPR2UcKZCxHu9b2ARkFD1DqkPzRzgNwdwCXr3B27yUat18vwdKZGE",
  "key14": "51aUYXYU9EgEuZG4YVrNi3iYu5Yg3wiybAjyQf4Jk5Jx27eET13grsSR9bAZxHRprvtL4rFw3nE8YDR5ywgmXs7z",
  "key15": "5yYc5rtFzsWxe7MZke57rS3Ufh4nwP6erciaR8yprL48Hf4ZbwNPBio3KuBFLgaHxG4NrPrZrXqdC742jeS7rYHh",
  "key16": "zDkXqUYc9wDurpKz9C4xZ9HNeCK9WoP7eYwfckP44p7uNmdBbWE6i5gKgm9EABarA2nFUUFXS2My7oceddpUTLL",
  "key17": "5kAmVgysWLDwLc9qrCs5qhN7L4i4qvqbnt3wigRebMUWa2SF9HMJ47kSuepevydX3JRfbW9itBDHri7vLY2XNtCq",
  "key18": "2j3BGrMkhF53bcdWhnJsE46QM9YDSCuw6REBCYdUpDQDS8LTv2HTqW5HNtVSqTPuJAwBLS5vhzhxhhunq829AD67",
  "key19": "oLN3sFXJvCAJx2rpJ2UC5tGD9DhE5fyHAycsu8ViZYhGTWpkwjWJTEv5KmaZjx79hjqhHP322bSF6EHYm7uaRDT",
  "key20": "5dVckrmrS3y7dDGsS46bFB1mq8xrdos5QJ7gyMTpFEW8q779N1cRhEJpEqpyYLXpETntsCGamhk194uLXdLSbdSm",
  "key21": "4vN442nkiQjKxTSPHW8CamSjHmiTXqqehYD1KT5ELtvFuxucACyE9kPvBumNWmMqnmscaSo1bPWeew9irHRUKBe5",
  "key22": "D1fiEq23XoTSsEpvce4cKT3ws9HxEUivFCxDW4e7cNzE86ZbZ7UpmT9yp43mJvJFA7yvKMkKnq1jMu1N8zNT7Pd",
  "key23": "zjUajtreJQwvnhoefXZoaRLAGmCRmrzEnvTYsu4Tqc42ZCUonZMZf7FpjEcLVD5zjjXEbBkNr3S1USwRZt7Pq7q",
  "key24": "4X7HaMYnH9Ki3UF6BZjbBnHzdwz9UXLfxQdKpZvNeFR11kx1pMjqgikjCtthPMKUhYVmTCrTnc2NQLd9muwpWC3F",
  "key25": "2mWFQBtokhzeRGAM9hMnuDU1i15AQmQcQeRTj66xCoFbYXLUgkLssrCB3m2rC8385WJq9xZhogLPjkQdf5nHQp7H",
  "key26": "3gaAcwDU5Ho4fC3ismKcR7W3at7pYcfgv4tRobxdbZZbk4bA5tRq5ArgdStf6jVbnmtDs8LWnGDRcV53BXTvGSxa",
  "key27": "hu97kivg5kfsYtAnq5WewZpd1PNjQ8b6ySmHUR46pH1XpcSfLFpMNNoK2Ut4hNcfwCAUpjbNPG3xXceXx2Z3qEP",
  "key28": "2YwtWgX8CEiaxfuzPmCWPp75c9QLj58evDjx6NrMqUHAGE7Jjs4mHivfvPXh6LhoafbD1Eo4ThYpEMZvygKq4V3m",
  "key29": "ioCe8KQnGJX9oXtMvqxgkNjACHeJjLJKz6tZExAps8j8W2zVy4WvFQh3x5BSRsasqvu5mafMxFbxqmPzmtGkHnh",
  "key30": "3ZKFdhc7K4x13483XMPywraHVF2Xb1pkbiuR2gK46jztUtLmHJ1ZjUAFGq1Mjk525zz6qvvqVK2ei1PVobGinC8t",
  "key31": "2XCVT6QZZoFMELADyNZidXDZB2zoHVRANcSBkK3zoRVffF8b4mg8u4Z5dTewRgMutrza5iAVnonETPcmwWydttXN",
  "key32": "4CcsA4LLSZ8w2zFjGu8Ho3gJSyJMA4usW8VmCW8LThVBDDVR9cMAmPZ3rd9Pp3AYXBKCJUcyFfndJCGJrCJUP1ac",
  "key33": "nrk1SwAqTX5DQLj4TaPapDWdmkQ77AhtD2CeZT3h5K4iUjiRFaoDzDMzxFrS6WDoQidJE3pkzCKZnWnxCSjAYu9",
  "key34": "5ug4xrAiXecNFT5JbRTtja6aMhcqKzqbY3yyaK6tNxGatEE7bvCB32sUaYyRjweJjU8PNCnH4dNFfaeMyzeDRawP",
  "key35": "5JfVqJP8Q24xy9REV6CMMAXNFG8VUgbvt6FawtTGUBspXKdSdssFTPQY8M3dimTwKXwbCfHbxQuz6nMBAmEyWzxp",
  "key36": "5Yg7eVbk3GqwbnWahTc5Pptijp9gMb54dcs7QmTxrUK3gEt7McHwwUVVpwgaE6xTUZmNXKksXBSeQ6wpyvNbEPEe",
  "key37": "2VxPYnuk39PpJpEN4M83ZLhy9JmACB1wXw1iy7u55FKF2Ze7PwTEpZMYvbQJaWL84vjeiJMNtzZPTnv7LiBfkyTV",
  "key38": "5q7WGASMH2U9GBq1dxzGJbCmGMZGEuXtcFyEchVqGiFkdvg8hJPrunBnWu7cerxnTz6SyrtdjwcTCxioA6Qd1Wgq",
  "key39": "5hetPrKqs2WHcDKzxRjw7LwpLtYQdSRW4hP8ataf2EPnnd57z1vEMoJBouiDqCkvfYfAtYfDygfHywGaBYhJCxa7",
  "key40": "5Rzsxca8FjqjUi3C3VhMZZuwthvAhGi3T9GpTzY2ZWtCrkGNoiX3hPTUw4kCEVP94r6PxoF843z6nG4FJivbX5gF",
  "key41": "4DxTPRvDotNDq3XSPogVGyWdBydatzXaAYGuYcaZhKPa18YF9816Kw8QUbUfDUcWK1DoJwvwKDVr45KYK4Yuds5Z",
  "key42": "LebaRCnqQRe3WuRJCCxSsEQfFq3Yq82Ryzm3ePNuctwnj43oRPWYKHr4tBMyhFEMSsek14bfVFKtG7FvkxKaU1z",
  "key43": "3K59EGdHf3U9uYUM7Y1Uf1i6mwPyX1G2h41kS2pWxBcEtq9z8UK32EJbdNNB9JnaQLAREodnJX7gH1RNHz2RDgEF",
  "key44": "e6CtEAaaEPfaoHSSJMfnVpvdi4DEca2a79DFiSadiBrfqJXwP7za53XSmvmNAVu9UpxG7beS6F9hXKWHUvhT41A",
  "key45": "64DmEskUjMk6arNmGA1WNA7CYoLf1iLAsRdv4cXnprGzE7ZSRadh2mCfo2hsnKfdYupRu2Uaq5YFuCSQfgfxuwu6",
  "key46": "66JkEjEFJ28bTKhubgUHpbqFiEcgxjApfbDi3PcxDiuA5X1QnWpyt6spyEJ9sUxPq642APtq5h4WqPFV5CWxJfPw",
  "key47": "2rReMVvCPxEQNaxDEW68DRysUJRDgh36cBDDwJsBGnjUuuYLdG3TLDiYs8yTrcj7MgBYnjszXpp3rLgxUzNwuXE8",
  "key48": "2tGqrnLvt39aXAUYJPccmFPQtBKqgN48EHdzoaCjLdDYUPofkctJH2GBrExcv1YM5SbnSuZpTS7hu7azNGHd6Df9"
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
