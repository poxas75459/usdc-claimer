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
    "Lsdzya8PZVeaWEbZLL9WBnzVtpyjA4bGLz8PdVg9mcopAfu3jmtQPcaELmGUDakUNFGgVWYkuH3NX3PKjKxpEMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uWEo7ADggVhNw2kkNKUWmjFD3HzHx7TtATP4hf463fqiHkPpKQoHDRvyJ7sg7y39SQHdBfHNDjVt3jHc1qSb7vA",
  "key1": "3dkdvRDrX7xPab3iAcapkiEAJ1jLETW7ui26rEHScJuZFeNgi37bLfgM1ReqgTjQxLoetFxz4MYgRdMRvS9Geyjr",
  "key2": "5cpBfcWADCYCNcyBiGVErfNjztq7ZWEoavDDhUc1QesU28FqkdGLnWqZz9wsvGsH874xjPiyHdvDdwakyFR7h3AH",
  "key3": "4vyk2dUTv6P1ZUfMnAqUxzM8wPx8bhdTL2gSm1qgKDdCvWkjjak9moyJSaCVvUVCTMTKoVQmPpuhZypDD8QPQxL6",
  "key4": "4g9JW5CwoqiBuh8DrWzsNn8uNYDgDKVPuy8sdy7xzBgNXyRxTib6F7E8B9GZ9q1hw9DBcqCjMjqaRysifbsUVWEG",
  "key5": "3LU6a1LAiacUChk6BMh1CGgBLEmt1DFZv3uiK6CUDQBA55B542QTZZJqo9gKVZjAnk1JTSWQSkehVWMYoKkQAunm",
  "key6": "2orww1gD2MioYb3H18Zbzv5sX3dEkoaUmXTJbsekML8t95GQvUs4gaN9ygzQdGTMxFPfdKaurgkT2cdCNCpE1ZXx",
  "key7": "gVE9biyzSciBYibU6sBnPjMqY5zCyjuP5Kxwg3bVwjjahqUNyMB6eZv1K9ovWyB8zFnq9Mxt4tK3LdNEM8cTKfu",
  "key8": "3LmE11n599SWvwCfmVxNPVLJu1uoVJYRE8kCU7YmLtNNJc375dMb63kZzZEgVaXVAFn1EADMZM2YRKtvReMacfVG",
  "key9": "5fbVC2kt5ajM8rj9AbbRFfRDnThH5TUpxWK9JBVhoghnAqBBtvo39s3G94PtExY7ydTcvShETkEfdLPhHKoCuXkf",
  "key10": "2BVsbZBkmg4B7h8rjxYNU6HbrLu5d77y6YZFt8R2RzmtqtUZPiLgfYYJaruYMvv1jw23Ys1jCMYwnnMV9qxFFUhG",
  "key11": "59SesFF9Fk6XovdG17JQUnZ42xMkht7jUg35KjVGonTTPzGhZymjh5wyzYsTj4GuE6FsnfckTTGa9dcPWNpV6BMJ",
  "key12": "5iCMcnCHXVYc7AoBhLWz9W1fwhNBRSNSZ41Vs6rQhhqaMuTLwRD6LhbrSrFqEprN3fP9GU3mLbxW67g1Y2iosnLi",
  "key13": "5SqswXgtvttob4N9hKbjytwrpDP12ifp358gww9cZDL8DJJPs9KUSS7EosaSJsrPZyPtF2YVzVS2HwRRaDo1NAwb",
  "key14": "41byvwXSQgJeJbM3sVJjEFK3jVnPhXzTLaf8ZQsv2fgFRKbL5dLkiZnLA46b8CW9zETs7n9Dr3ytEeFerFyU5xoX",
  "key15": "4vFZWccXWrEr3Sm69GtdoG2h3s5uzCJcmpQbw4GDNWZjMsKXwSiadQ2F3bsVZRTh2WyDFR5uu3UYcUGqoG81fapC",
  "key16": "5t9NRJcxdnubW91GTaC4nsXEgeKi7dnQ7WnSMXHcGB8fNrC3hdEdSCqkfHZ3JCmucLcCMs1eryd6GhCqZiK4tvAR",
  "key17": "3JoCRgfjLg8y4F2s5WG4MSCWajhTXpoCrqz43fJctiqVQomSf71AewYEEd8EUzdh2dRgptAdK1TnJHj54xvkd8f6",
  "key18": "4rm9XrL1vVosqScSgwXQhAP9zFHD2mfEc8EGppQhWmrb63byqiF8U1nGA6uFWfpXCBaDeSZtSA3wZ5hYwUckpUaq",
  "key19": "5aV8vpUVVqaSBW5SGvsRpYbGNKY6ceQ3ARh28S2WNaJGNmBuBQYG7fYSk5UYL4WN5Bx4hcNBJ8fCgAHtuEhZoNNn",
  "key20": "t7fpwhSW3NQwSAmCTMA7KThvyL9AyA4XqTyAwr2eGep4RXGshXRHyiEoHqxmjsytqeWNu7FhcVo2rmiKfcZSjTM",
  "key21": "2J2zwuG1isobqSYXpVLTdUkq2sDuKbTME1NYcuCg1qt71GJhQLKbuVQFWoYUdwS8ugE6Lo2NXiZ6zUzrmPnbJg2j",
  "key22": "4CJBe2h9pN26wtmVy5abyTgizw5CbqRCrYpDWky1VdGABG55ZwuBS4p9s81vL4ZqcVpzFfUqcfsgqsB3sknrV3iN",
  "key23": "2gRjYZEyDMsNn2bhed7t7MbHj3FMZ2sR6LKGmZwJvZtbv6HVA7nJCS8V5XtU4PzFqPb44Juan4KzaHKhWgd5sKJn",
  "key24": "65kFVZRacB2J8s1h1H6zjaF9nTwjZSZ9JSrEUJ5tFWDqE81dZ6Z1oMbSBRDeHKDH1PzoWpdWNYvjEAaWmTnES9ry",
  "key25": "nsrCwXXCEd2HUPRePjy1LofkCSxgn5sW9HAHchodQLCAF2VEAuAAyhWhpwkJ5PttHLiR3ZzSRPAEDMwAHuVy9St",
  "key26": "V4Zs79FqLX6orRALZauEWHimbckTtfDtwwDJqPUCLcWtwxW2uVqY1ZW9WvPD8tziPnCvcSoUtBhcYNMFZFz95Dj",
  "key27": "3ryBBpWB7DBNmHnFr45dAnY74cGHNwALMENGQQKDUzHY6aGXbbn553n8vN2vMd1jQXcMPMerKc4T9WWC4xaEjokD",
  "key28": "5rumzYjAddt2fX5VxiCJdhJBJVpRKktYTccUHvebXYTgtUYpWYVRr496z8c5FB5bgWTEeJJpJoQorfHoH4wdmEEK",
  "key29": "k9Y4TDnFDsnF2W9kisC5Ld3Zg9tYwRxGqooTJQT859UqQVSrSFdD6FLkioM4LkHdyLg5BN6Gu3rDdBmifiNboHS",
  "key30": "5ueQtvGUpvpg74esoxybq77HCv1gDydcdCw8uLDKBHHgE9LEtkwnEjsEUuEBdszjPAazTLR1m2QuoD5w9HVJpQyr",
  "key31": "2TQ4b1yvzByvDbHVjfyiBu5MWaAh5CSf6FAd2R7Tqc3gkHGmJrf8TwhU7kLBnoBTXNkX6okh2cYifbKQVL9xgqTa",
  "key32": "RQfF6Nu2vcfJ1frewZjWJ8JaniS1tjGXrVk5Q1Hr6zzkESG9xXtMcPLLomtvds3ztkHo5U2YYK6HzdXbU3xuhRr",
  "key33": "h1dUG1EvgPtVBrZzyBkQXhjMo2aj8SLorD8ijeZJPCZTYDE3Q97Qh32tbKKc8stLdenQwGQ4r864dbZpiPTdUra",
  "key34": "3CdaDz9GMvXEvmnBGJfvtZAiLYvJaaTfMUbTB7bo7ouESJ5soUodJD715jDjSJhjSCKF1A1HBohcYoLAGJPBVfdU",
  "key35": "26iHMuZghdHxgkQA8yPhRrYpGwpwtcns45QnL1vbXFtpWHE9LWiQPDemdZJVLXp3sesx6nU4nwFUrcFgqMgztbsY",
  "key36": "3ce8Qju1dVq1ESeLZTtWahbzWxAF8LnBw1o2GgH9HaQ1aXxvHdAjsaS4ivpjom4YkUKAt8krPEgWFQZBrwnEEadW",
  "key37": "582Kis3vgAYozTkkQ5yuCVzoBSNpgSsLVnoDazQqmUKT8fqJv25QNQnaeSETTUnVBS3t9BfxnXhApxHFoBh7UfSx"
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
