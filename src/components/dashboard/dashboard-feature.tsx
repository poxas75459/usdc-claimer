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
    "36zjLQMtdwRJ4UGypc6gvW3kTgoZXT274ooSvrC8sVEF94L87vMnWin1aQRwRe3xmj6FdbFESETVtDGSSXm1rwDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tW7wHLwg1afyUJnmpHB2tHQa4WKcRsHhsJDM2XRNqLp5k7qcNqXREfakAEeF6Z1Y87RJmLjTndN3Mo2B9CBb2qd",
  "key1": "52joibK7hpVZyqhvP9xTdKvF9v3KBYzsGTDWnpka2MpbbVqSg9RdaM3Yc3s1izf8m34KNSHnbohNrR41ebZMKxjs",
  "key2": "4ZWsiWXrqGDkpxTSySS5NFdUmTDxcyTs6MspyyLVkoSutWcxDGU2SMJ8krEGGZnaPvoqNJZfMUPnf7UiMAFSTAnG",
  "key3": "4NgPALxVD3YF3LhkJTGPTk9q1nwr8FMuurgdKtCygqzfmVZSUG1oZWZpawhrGHM2gZmgaQusaHuhFG1Yask5KSb8",
  "key4": "KBNE79YCCosK4pf9tC2RPaTJgqPx6aVJnP3NN132pYCagucFgE7vNJCdEZt2q1vRiTBm1uQR73uVH3p2UuoavHC",
  "key5": "3TszXsaT4FmZoaG69KEWiVchxwKMNbQBRcLwa7k83sz8yXukUBVht3SkMYfMHnYjiDtGsTTy4tAzbcxPWtv6tHon",
  "key6": "2Ye9BPUrvVteezDKBvyEq7jCbdjMmZv8jQtRCmuro4fK2xtjM2YrfKf3v8pfv174xMKhNYF2vd2nUyw53z7f1vnH",
  "key7": "X4x29NrARRFJ3XVH4q3WDBmqGqrXUEnuHePiFdmtLMnvk9fV12MPHDbrtBC1zLi5RWRguZ9rxYJ41LwueoGc5Kd",
  "key8": "4cQieTzn38yoik7WeiRwo96xyUquMQ6CQTrHT8PeQQJQ7Sj8M4yyvRy5okcyQF6VFXZKuSM8WXQAUbqSaJX5Mutn",
  "key9": "2r9MkzvB95qAWSkqEz9J1cwn4wmnHSjdT8iBc94QD3o6o7TbFG4aKZ26d3CUDDZBcuKQswrz3rynLtfc4HUZamXR",
  "key10": "2uWJkK2EjTW5oDindMiMonFBAs9ifKnvWCxFGd4Hi3bLPes3YghHtEYf2ftJ3Rrp9zQ96einBZeCfjdSqUwvhk74",
  "key11": "4haCNFAnZnaKdsV8qmStyUzuhmEu1wM6c2X2xJc89SNwskPzTfrY5heH2ENze3XjRG3pQb6sVDcDH2dBHYKTNKhm",
  "key12": "dzUvMZCAvLiRbzyAzbXufNwKWXSpvzHWwBUU1gBeTunEbtU2de6BT6f2rXm3H7iyC6EXpmL4ZLN8Tm9wnzqHzeA",
  "key13": "2zBD176hvRAZQQZPshmDqtnFoxfU7UvfT4UgDe2oLDsUUxoGi6ES8fHrfmyYBgzAZRn5rFtg3aJ3qZPmJopXXu5M",
  "key14": "5y3TcMpGHvBd1chM4NKhXwCz8zkx9uR1qpg8uT3eECMXFsVB6XwPQbMZCJLAWMBtBdpDhtHjQwufbPDVer666CW",
  "key15": "YybPijw8eNZ1pEuE5B8D7aCa33oPcp2mtpPsSuYUU47og77bFMNaK1gpr3sDwHYwKrM1mUKn9wkPQJ93mDATpRN",
  "key16": "4UvDrVsHmVXJUGfVKmT35hwHyXACvFXgSohjtyR1LVKpFB6TUJL6t6Tv1EL3NZvmEkZ9HwCYqahRPujHeXNwWGqQ",
  "key17": "2aU7NrF8qhfVQWmuVGDfiono72B3tAccpppeLn6rwiuAFpP1BqLbyaHKHC9gT8s7Fxr25ndG2zYcoN5hfNGCuYVQ",
  "key18": "3zodybC4nnehxMkXBgdbohy1NQrVqnUxKbcQEQf5MWa7GYhEw6HzykBUr2evD22ZfnAEwh12Epu6roS93fYnxG1k",
  "key19": "P2FYSHiPodjPhtT6jYXrhKeeXuzmYNfwMz53mqbc9YnDQr6rTXX7c87YAdcpC8LF6BWiD9nbnJkfXMvPx8MuuCG",
  "key20": "3NnQLNgoxi23oC4BDZxqHZGbfrLETGGVUa2xKQrLbq4P8jc65rDG6B78wUSq9UVGWYwpM7LXpCtfVZXqGw6B4SMe",
  "key21": "2WbxJqq4RhpQSomvP1Bc4Eb7Rr4esGPNprKAB3rramMGBt9YQ7okn7JoyM1fKfWQ8ChGfXs2xePLFFnWep3H8gaH",
  "key22": "hUwtNVaWNh6yit3PWD9f6vsh9aunVuj6NSteGuTiiSTP97K3E2XAfBoq7et3DSahPwDLi3sjX6JPmWLDgjSWWZA",
  "key23": "4HctKgovrh9GR7mtypr7Xy33W6QPJocp2rxidiCB18PDyB3gUN3y1YZft9RFffkGjGacA4KRZXhDVh8dCEdm1zgg",
  "key24": "9iunaGc6uCocjt7c3EwEzhYS2s3dF6i2qpAgP851fLp7xV6VXk1H8kvJUdsoEpYu5nq7geTKkqUEwBGr6TumQ9L",
  "key25": "4RyiLm3ontmW2yJnzXkvF67MB8kr51KwJoRmpdoCkHjJeLfV6cZFEhoLpvBHKL3fHoMwz3RoCbWDygGhd7a893K3",
  "key26": "32WjzGB9mrNVm9ASissixKae8CV6xDsZC2ydtdECuUFs6pkfNNdvsAkM8gxe5TVY1N4dcmjvzgdMdryV6o2FdcgC",
  "key27": "3xxkqY1tGTReGNHFLDVXdsd5YFFRh4phjtcYyauF2irF4kr726L3v9smV7J57BiL6Rk6jSa2f9SNjs7iFZPtg1DN",
  "key28": "y16mgog144V3WUhPQ3mWbHcBB9taSU8gWpZSpG4YoKsphNeoRRLwsyyfEJTStEutXLtfADHTwSkDSHGSKMJGw62",
  "key29": "wZSukEStuqRzq8AScLVLugkMQQUakNZtKp5TARDZqLkUdYn8Do8oeBvPMQFh6WcMgMsUV9LyqBK2CVFomtRZzYJ",
  "key30": "RaxkHpHNtoU9ee9sPAhqW5xqTGmckzQ4dctYSTfZuqEVP1mDCvd7bGmTsu8DWqzpA7CZwmWPeyHR7kmLRSxTPPd",
  "key31": "3rFht1se9vc9v1Bg94URNi3rC6WPa7FiS3fcpSvMUDuWSbgTNtLdWC4G581KYrR48VC82yhrTw8yZtgMb7jg5KQo",
  "key32": "B8xxd8viTJuE26KP3Je6erpK8TijD1B7n6ZobRRhpjgLJJefycrQBKumJySXSgEdowZ64LHK91EWjVNVGWcX15X",
  "key33": "3aPWSdgy9bvgd8mwJfapHfq4n5QVZn2TxL7j3eoWw153Uh2GNTEudZB9bbrLJCsKbbhL5JRQCNmWUt8iSXDSqdyY",
  "key34": "3WMDDsiw5TZiHVuG86BhSWvR61oAGx1S2EWv4RWv2Up9giA21mSnU9avE4ZXLK4rWmPUPgVDNDsWhWhGKyfk5Bzb",
  "key35": "2LzgeLBq7EYSZM3xtLFJU4kXrFaDh2r2S2UvZL18WHg4V1Yv5ax7XSyJaDSwdi5vNzn4qdDnAx97m9t6XCvMLJUN",
  "key36": "3jyvpmakgaHDkriPCPmcMjHKuXLVEo5HDxir8XdTkJXCQa6oB2jmDmehhSEzM6TMYsgcD8z8JhxKkjuESLrgHuP",
  "key37": "5zmnuTD29nfuNwiyzGeQ49G6mDLWxsstbVbpbYhAVTK24eVn73JBpq12kgqWjoTtgZFZvxgBWCexpdz5HKgah5S5",
  "key38": "5MUkwNgkemGq3nknYCx7cn5NTShU75V9FmKSEtFApZL67DSmfQQuKebsJRirmiPZU8ZqkBopkzqdnQ25tJaLc3aQ",
  "key39": "33yqyx3yDzu7QDy22McYNXvxFgHLPZYw3AsE1YNgCFJ66xUAgCnDvypen4Qdq6tknmjsgrdfbrA21EE3KcRR1eHq"
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
