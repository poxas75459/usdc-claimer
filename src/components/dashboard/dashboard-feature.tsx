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
    "xkHW4gXWThLwoDBQz7AjNhBSbjAE5qX2WFi8Y5qDL2tCsbM2QDRv9M4LVLuZczotnw8J8hr8BbwCDSMA6gPApVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ScfKFni6h6rtJX9pDGmuQBm3zEoERYHMt3aA1HaPAENEJt24DBW5VLLzexneCZDug8scTcbyQyjWuQcj8oDNCgN",
  "key1": "3JmxiMDEZDK8XVaCtVnS6WnK21cLgZyyUbHRSuSGoc9d1em2Tui88ewaggNR1KUGTSXpRCiGSMzg78TDN4v7Fikh",
  "key2": "5YJjuMHm7ukVocoHHVnKzoiV4zLogMXLJR5xK47XnNhqfm3Eh6TDCHpswU5TVYpZx3ztLwd3GowNqtm7NRbqs6mf",
  "key3": "5wdCG9hoXiq5coN9XJZ2mPHjq1oeD4gBprrv79tmQeKjJND5BPv7BHgauJz6fbrPfDgvrgN4TaW4g9i9LJ3rw5CG",
  "key4": "2eLhsBNrj4iArJz5dV5kpR2uEc7nFrFhmWZbYQn5748VnKguLL5o6PJR9mxnzGxUCqJe5M95iAjHKjymiMfP5c5e",
  "key5": "59MbFeBWoYUN2RDru11rHbjDTTWKKFM2MDMPunjb98cprtxisC8WhkS9qBG84uVPvaFonT6HaJaxC5UpwxY4PVBW",
  "key6": "5GMU9h4gMY3CT7yC7aMLvLQom1yWuH7DwL9ucZgnvx89eK1n1xzkyn8TYoue8irqs773jufMGKUoiTqbtUxSUm46",
  "key7": "N82UoSZM7riKjJHybELUaEwKaUBjpYUfB772hZgwxGFbV1rzwyuLM24UYLWQbmndrN5obwkuPCSipDPHGFFXVHY",
  "key8": "2SCUM1M29BYXKTbvzJbcz4HUaJhe1suLCQ4SLqvKxXhW5KLyzM7Q4L5mXYtNHZbu84A18fRRcgmoAk3cfWN5iVNk",
  "key9": "4bNaW7SF2qxWubyyx3WAKdXrhNDk4SoXyeQoEpSJt5ozyGGqTswtJQMNxhCptQ1ySnY15pn96XyiiHgf2js6ZQkB",
  "key10": "3YWfRnMB3s2RqMUhvgcaB7RRtHLaoYTjVenxuxkoS2Ks9WE4mTBegPwq5cp9WCKZz4fZomPPkPEKdJ9MAWue3DBa",
  "key11": "4AcguAm8wFBZ7CupYwGHSuztACLVD3Z8gqoF84VLDqRX9dVSeA4wsQ7aum4Z7NDMQoetMwCxdHdB26osrsMUugXn",
  "key12": "59cAnVPtFgRwJA6cccrJWnzj1KsqS3NDzqG6PXBAx7MP15AnsMnzyyfXrBq2uRj9ujxmayEynDExUWfxucW8wp27",
  "key13": "2uQgGJYkLkxzcjqxH4AGCbU83FWip1s8otK6oPXLpxgh8zRkFoce84X2WKvHZHKQuqqNY5mkYy5FpcQu2t8DSQRN",
  "key14": "54zVo4UrhLVgLmt5WPa1ExF2MJgaBcS5PXbvVETngERmXKCTfYYcFsT299Dre5BJARd5qiWKGHTXE7z3amymQ9Mk",
  "key15": "3AyQQZ6RwQoPC1SaGiBwopc42DJFHUoqsabbaCmVK68ZaSMNdmFqrD2eYuWBaBXVCgNnJHw4cN4fw7fb5kkHszEn",
  "key16": "4TyhN5D1VE346bGfbhHdGqdUeupMPxNn4BWKfd4Adyhv6HxVfJ7pmV6Nc1Yv6sQXtLTzJUi6TWk3Ndxgj4PsM2Xm",
  "key17": "CYcUgQYGG49A6pk3YVyEKf4m4W7fKNqSnfKkfxka35etqsBKXrRKxrQwjZZSNn8XF74iLjEGjKsEvqbBfaxdSv9",
  "key18": "4YSPs2E6qhsRCMGq5tNncX5ch2iZG2F7u5ZosrQxDSeVr7HbtEG651yvfs2UEMr5QsftXvz694JbwnrTZftNxFYX",
  "key19": "TQpyvn7Bv7JhgZasUC7CkWK7vdFAAv243dGrK2tLN8NJcAy2Ht99mMZDWjEmzKX22BYiBzJQ643L1d9LE7hL5FF",
  "key20": "3Ct7L86EEFW2eBLoNNz6fb26UUxdGBEzwrpBXiup1YhTsRHqFCbGvqe3McDbvo2wArqk6zmBf1Y4n3pBaXmMuVgJ",
  "key21": "2vrWBLHtcWFZRnpARoX257ACaM4dtvhbT8sKvUHHSdCUguM2ygehu9nTEsV5vTVbiSKm4vT1iGGfg7WkEKBavZD8",
  "key22": "2Z9WDTCFEPEdzL1RpeiPYXANNvBVUTd58GJV6NuVM8cuQ7LdE7qGZCAnDtZGtW5SYZN79nZEWBa9bxxNcj65WPkc",
  "key23": "XmNPLgiLsDHmb4hkAPDtNt7ZmLYQvt6mvP3kEtgCUv6ebpjkerwdArB99JscTeFRYwA5veJ8T2YD8U1Qu4cNRKW",
  "key24": "cEiarTspHU2FBZeSwDYWnFbzL7JoXfAL1LFHiJSdarRyHDKnarmCFEQ7dHzdaJeMFEXPXAvFGHAA4zAX5kSsE2k",
  "key25": "4rvV16p7ALHyvuikqDbcjUH1JtbE99Wi8ftn1RQJdusogCssqjRKHgrSCePuuzowcYxwxAs42Njb45kqwsFRNSEd",
  "key26": "51ZY2Q4M4zrHNd9D91V74KHobGSCoSLR2TR9E5v1jsNUeEaEcmnUKJNR35M4bALfT1iv5MjuuJTMD8fX1CDWJx9Q",
  "key27": "48VJdZChuod3BqnoiUymAjoJ8eweWLLrsixiV674cG4zZEjt7659hBsVD7WHiRUvPtFNEqGtgSaMREepQP2GG8fj",
  "key28": "4zJzN4MjHmksb1xH6uy2NVYmRLNKXCBKT4rQLwgJLfYfLhcr8V1MzVksXek8QN2wSj7KqR27ieB7VuCGPaQpdhPS",
  "key29": "4AywyYgXMu5Vf4b1JvVDByovVxT1PsR1TpUtocMqxiqQeMCW1YWfdnqDZ2SYewAihUiPgHUbYMnAfMV9V5b8VLUA",
  "key30": "icbZRgApHkSszxrDqV8xgshJmj4DeXJHa3mcf8dqyvCABPtUh1wjeZK5VDuDwgMS7BX7Fm1vLLhG3WJu6yNPHkD",
  "key31": "2bno7VLxZDTByjjygNPReuSjTEWJb36P6NFDwyaL8ecEmuWmWCYEmbVhmzBWg3mY88UbhH6CkXSshCj5KoiPVsjo",
  "key32": "2ExPG9ZCVanU3X2B66kLV763Z8wRTaYw5xbXNLp2CefwQkD4DK9rYC7bxzv2Lz4kiavejiRU78WeEgG383ziwikM",
  "key33": "5rA1nup1p5GtKpvBvL5eqGmArKbiBM6gScoLkYT7zd6wYG13icFhuDgAcKUvEQMNvxoJFr12sj9AnQmTTq6qpm2d",
  "key34": "36Q5e9uzENWYnM2DyunTgSfPoK38zYzZfJghinLmib7CjUCns8gcJA9Unu5DAPmMDrUPLRVuRb8UY3z2AQkJsSpe",
  "key35": "4wS1MVZF6KTMHAtjPbSGdxxKQoQWagaD6a9nggPkiCWYHzJV7K7ecACuaGugy8BAgFKm93dAAyWsdUo9DLXsXfSf",
  "key36": "3rtJn4S8cePzjiU9FnKDw7fiQPdnJrxxRKagWFf4YsTQDMXZfs23zxtqRXkLED89o8q8wi5iPuAwrrsotWPBKeLz",
  "key37": "3af84D3fUbGPn2wsUu9k1s5QM5etozniKUimYfEGesCDou3Ktjf9i68PxxKRtZZAHG1FbLkAveaTyqPGYWpcermt",
  "key38": "3a96PNtnvC29BdtnGvyPQnVjmmcH1ggv8QCwPfpB32geNCtk2FfZFpCFWmSSnK4wLg9khE7uSYg35C3gZHG1hu5f",
  "key39": "5ECU8zwxxuXcN1KwdyFn1KyQ8cA5CELw7qh3VsYaKQ2cBLwcjtrYhVwrD8afpLHpdSBN2uBEfwQixtT8wNJya3fs",
  "key40": "2Bt5kRyc6QmfzLqFMbU7PwnNARX9krfSyRF9W4kti6k3LSnAk7RkkH7ygXPdphuGiqHZ8Tz7AZj2wqTVvqjy7eJ5",
  "key41": "213T3UMgBQMLYTQLL5FDnr7NcQjn8cYAgGuxCRuG5nzz26GH7dbJHg5bVSio2irqFEaVAbgXFh24cymGmoQ124p7"
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
