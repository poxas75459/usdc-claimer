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
    "3x1miWcPRz1YGjdSeW67HMJqAFBekXtupXpjqpCxoNwmbXyzModfR82tdX4MXADWjmggv25T6aZ6vNsy1PMBV4Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NF4vyQ2oWgNb7717Lir5c1QsyiL3jreiU6ou9W1f11Hh5thu92JDQ7wsYFsjc5YbsmwMaSJnCLb9t3BsTDMZY3e",
  "key1": "5KjAiLAidGsuxoPyo9ns6Uc27AZmjLrwbsMu843DfvSzX63wKwcV9pvbyhw7EkAC2y7iGfft8jBJFRSaUT9CrqhG",
  "key2": "5y8LEkFWfGB8SQnKUF5wKvP1u4KULGM7uTzNp8QGPyazaYt4RGmmHx3cnMwrPr6hZMyDUMokm9C1VmU3BkZircjD",
  "key3": "3jpWkJgQsFneHtHT1Jd78NFEZnrcEt4xpyhhuXHiszSCcaYUbP9Z11yj9hRFscczDt443xg67miq9zMBUraMRZCx",
  "key4": "mUugCqBK26U7LnaWvXiCEbann7B39kXrH5UrLYt4gCY2m1CxARRE2w6MkDzAgetrtxekSZbTZRUnMUMLyJqh4jq",
  "key5": "zRioQvVQQvFGmffW64gNKAF22Krcf7aRAm1nGFD7HSFrmABTDcS1TQx2JZCYRGrrpEuS6GmSSft6kT6VwkHomaX",
  "key6": "61tLMJxWDhNQK8RTd1nPJ5ELymBQBsPkp6eUoQaqr5AGwiDRxPDs2VWbk3HvitLGXTBjE4xt2Yq5T62HoKNZEiFY",
  "key7": "2sJWqoP5b8yypjCZS9FAZHwaUDukX3T9tma1ofHMfYXQktAmvyENZ36Fco4rUxe9xiizqHhC7LGPKJxFhh9KWMY6",
  "key8": "4t7b62seDkemaVzNZQJnNwGDNtqPUf1KvEAq9vGzVgTiBsctnJrrb4dYr5wgqTctMDsfRsmBuv6jbzXYJe2vpdpa",
  "key9": "4JDDQEujH4dh4zNCCuhbiWA1TA8c8pFUeF3K22Re8Xg4tcta5wVEjnjZnpqUbZKxNZmccVRxeu4QevrfFeYTR46u",
  "key10": "55QEMNAbjcoHqcmqtvHiGBZFUMRQDQgvQMoS1KsKrqNQa35F732KLK9Xs1yWCe8JecgFmxycodxaWrky3zWBzXCz",
  "key11": "49sDrrRfCZkQaU9X6tcTHuKW6n1aMsbAWHyNBAkecrCijLXwNXWE7tPSmyRPz1jWvdEX664CTJnFKgcscijoBdKx",
  "key12": "kaAR6EQRxf6gcnaN3voTvVDp7VMpPbhib1hsvvFoXbVuKcZ9h1ffFzd4ucCoXYqfP6ztUAtNocxnjyEpMYh56M6",
  "key13": "5kcyvw7dsJu18PjzkcELKwE2bdLKsca2QjTFBBkkTEzERj5VkmYmn3WF3rCnkFuh5X8LiC9tmcz21QvJWf6xwAfw",
  "key14": "3J1DWgDASRSemvfVXSLGuQJXC5rtFc92MxNE33Sb2F2R8TBKccmch98jYDc93EZPszhS7ZiyaQAtiYAf3ZbVKVj8",
  "key15": "5LzSEafnDXNYvEe63ZHGuU9EHstbzT1QmtB9TgSjjtURmQUnNAzSjtBPnTqgB5APAnc12JHiAYrrN2WGKQ3CrvPQ",
  "key16": "kGR9B2AvmQNGbw1T4B4qwTvGw2gNtDWQRtZHUQ8oqS7vkRGxQo7516H5E5zz3y7XefaEC2TL34VjMGp3H83LRpN",
  "key17": "3EqWVFMteZ3gZSq4NtfEt421itKrCmkkwRhNar9VegnqczQYrZf3kgwJycD9iFNrQHkpjdLx8kUqTttPNbJdnCCe",
  "key18": "BT1Lh3F5WfKVb543i2tSjySUJT4Hukyi84evSoewcha1rSZR6Ny7MZ4bfM7bhduiXzq4iUoja7ADZEx8gJGM5vy",
  "key19": "51MD8rkkXPnnBhFYWXg3AjG58DsgyRRVQHrXCjZHJ6P5hb1fJzos1yWxZgcH7J6jkU5YuexD1QNHQdUzMyFVwbc3",
  "key20": "4s7CfJf1XBV5CftxBS1g24izjbwpM3BRawasxzTRJMRUyYqf3PHQzTq25bESppTewjJfiZxqqCzCfo14F7tsWxLW",
  "key21": "qG9YPrL3N7Mk4GnP2sjCCYpYfmHcqKqi3a3EPmJknm62Hcyy5QF7k5UuPtMNtd1dAP31u3Mz25yCw4L3LKsYJHB",
  "key22": "3xQW5sftUVji5NdHWWGxZspVCyxiGEEiC2neFSjhVQrXzK9mwo7sW8wZey8yF6k2hsn9jpBJFUtqt4FDzri7BN9Z",
  "key23": "E2VvGcVY5VTYB3eKGjYvqwosTubZtZYj7CuZfb6ERS9akCwHEDcEQEPmW4Gm5mZegZEZaasnrS2EWdYgWzyMto7",
  "key24": "4QRj6VJFSNkEuth8gArU5xALMBBdVQfEpCaTs4WSp3o7DzZVV6JjmZ8o5kuQoWpU5dr1mk6yHieVrMmmZQ9pNMqU",
  "key25": "3SKzhFj93ruu8RhqoysYCEBgzWqZHVnjxNjRbPcwg66i7KzsKUA4jjVhRPAnKg4CUP5orsTrAg3i9tWuSQLg4u5L",
  "key26": "2fNamM2LbHmpFb56Z9YeCUEZf9KQMfgjQHn2WL75BU7c2bXxAuGLaKYNK7NxtpUTZQkcAXxCWtf8GzzyQQikMRY9",
  "key27": "5NuH1j1g91eyMbGudQosxALU652tQzqrXDzZFHpwt18NSgzsfGGnMDnfwXTD4WjdUwhHdGGwh8cQqzmAExgokKzB",
  "key28": "3jDMDZgiHAH42K1DPpWxFU3XbwpoJ6Q21vr8kNXwnXuZoQZ2CmGzinqLYxZhjN1vG6bhYUQxze9znMbwKiBBE1pU",
  "key29": "28WQShUm2KodbYMTPAaTi5yxgGLvHgBMap5mWtf46kNfq5QtzvrCHCofonoGcsiW2WGBPHciYNH8JFAtj8PkLLen",
  "key30": "3uCTV5vhGKKaLQY6evhKQJwPYkjk1EZn1nXKxXdVHeSmwXtpQc7YkXRqbebitQcJdEr4VGvDb7yrRdEC5TeCwuvT",
  "key31": "5ds1x85cFNxhMhQnh7EdKcoqa58NWuqvRx2gGcNyrykVemu83LDb2YZUVh2dSU3PGq28vrJ78RPQoQ97rTBicaBF",
  "key32": "2x8bBSPezvxo7gvYbG7C1VDnYkF6wunXWhXtymX9YrsHiG9kSG3Qgu4wzHPTgwQMoCgsQJ7ALCAzFwsnW9GcnHY6",
  "key33": "4e3pdEwDEL7hHduHEiswJP6X6MQqQKJ5gNk7fvsRzqM9QRWu39mezxDms9AKE8LPR7acUt2XYQwjZFjeU4JV66kF",
  "key34": "3GgRpUiFB9AVrpcXEBjZZCMR3SZqtVGY2E8m7nTHmzivDz4G9sBmUko5pT6t3nmRxj8xWK4YS2RRNQRghKVz1pqF",
  "key35": "3Qujx172JwCZuJmYAvJ6hPPq8ooCkkxcATxGsU5MnrLD8JXp5T8bQTUFSZB9varim9v6tWsvRoKXTbRum9mVPJS8",
  "key36": "56961XPdEbrHyj3Ls5sXHrTsjpcmeeso3EiEQUk2oPr4zWhpX6dNDn8YatoPTocid2tBTaQCJdD7CoF3ShVa51AJ",
  "key37": "Srk5mskrTBjRaEoFhLsp3spYVZebHJrFAw2voH7L3NwCQ5HnAQ5ci3PiSTvE6KddBkDtEJhWBKMX2jEDCVYB4Ze",
  "key38": "5vWdpqeWz7LTdy58QW1qNiWUSchovdhhirwrZ6T7uKp5cSaYqsYjJrsKp1feRmBr7X4oEsBwHvwkpNja9vHLUss6",
  "key39": "3crbfqdd7i2y52i7ivKEWEDLBAptaPGD1u6bonBL5QJScF6Hj5eAUSuZnJWs3G5YY2GxkfnCDoGL7B2BYT3XbDTL",
  "key40": "38XJnt7C5qC145m5SjVBVBwkxcRnFVjm9QfcjdknxeQqKgrihHHSXt44KLubVDAF4DcZG8oE6vCoBHeLqxWMVfJg",
  "key41": "79aw2JkYsNrP2dK6qxc4CJHUqWQPWcBqomikP6NSXnZgTeELChvTXUge3J3fY96jj91h9vm4xU5FP8wzGRfm9iZ",
  "key42": "4yTWwnQhmvzBbCS3YtRGpJiWdHizFdSwEGbrseXHcgXEZdjiMKN2AtJAPE8drjeNWMKGmPHvURMRwtyZY1A26spx",
  "key43": "D46MKZ6oRtTTC5ssoZjTuw4gp3hHxnmzFL5gvX1qHPongbE6THDqsagPqW3u9GbFrQDoLKZ37YpXxc1p3YER15T",
  "key44": "2U84sScWdxDxa4e66Ko9WK4mTdS6TtfQDr1vm9oktPZviYgNYs9Gg19sGXayDFB2HCk52dRJGiNcrptphinHfQ7Z",
  "key45": "2WqJDdm3nkb56XQxk4PGoDq6wvKdxq1NXMG9PfzZzZ8xhDVQrVqNady1XYu8hND3MDEiACSDwtdRhhM6eYv3Q4Be",
  "key46": "5GiJM3VKZg8PuFDsYkw6b8cSYAidJeaPfP8Db3QaVPgrH4y6zoDV6oVvPr4Dxb5BKN8jjPdpymSUuEUwNa8kH1st"
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
