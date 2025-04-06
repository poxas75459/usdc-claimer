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
    "2j1SGPqmwzu9PzpSYbFfk7VNVm7HDeWWgQFn6ipcyVsxjwgEWMybZGsLratgNNXw2GpNsLM4iKCQ3pyZdgLJ7RMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nJHvL6K3r66J8g6LiFERDUumAdPyf7BePMWH6bzx1Zi7zcXNUWiSzxxZQRG56AvsR1CDVSaT83dQj3cszMxbpdg",
  "key1": "5FfBBtBxou1xXgzQh3gHsv1svRZagE9jaL2YcbzSEE5afjcJsbQRGMQBDPnydB6Y2iq4Dr1e6G4Jq8XNtRxpPXCp",
  "key2": "4J7b5tmZgfNq1CYVhrXyeAyDU3wHSqymHJz1cfDTosToGdkFTN2KrnLHjwG33t1Y6SkZd53mTqZNQTmWxX5UgQAC",
  "key3": "3ENb18UR475zEcMVVVHZNe9oZfmTSbvqDaoSwZCvPMw5ouf9zcN3J4fngJcKXan2V6KMzxTmsZxKLCjPZbiBzKD",
  "key4": "411XtHGsBSFEwHU8d1o3vVnsYiwZ1wDU4fPvZaUzRXF43tAXsDtn7uFxzS7XfgnJRBqnMx8VKou3Q7cY4oiLti6h",
  "key5": "2JGzzQZitXG8UJwkLs1Fx6bBLAxNy2vpQUYFpFqQ8BbRLVhZBpiLHyFLEsiV49AQwECfqt6kdmNfyMhKUkEVYMud",
  "key6": "38aBjov8knNuoro7Ajk9NydUAy8yMozscCjLTbrBgm67taNYj83ZMXmbb3jEFvctH7Ew2AN6zzBtgAQjwm6VEyhu",
  "key7": "RUeFuXiKkSqZWegN19CeGKfXuSRME2Wdoq5ia3mpCxSKWixn7J3EpXnk63W1MWeTXhhamnHrw1eWvDseNPcrCf5",
  "key8": "3512YogYqJGWkCtEzq6ofMcoYxPDrYQhETFxoMzwt6J9WDR91gFCTfDUPv1vegc5Z4qqiN3spCSLPTcxrXPxSxUR",
  "key9": "2Zvr62NHbLHteZTUvEEerJzxgqMx66BgeAt8RTqCdXn3LAiCrFeKycGSfdtdFgG7bT9QXUoVNfYbHXdYAZT5QGLJ",
  "key10": "2i7ZdBCWmAdeWC84hDV2k2Ma9YpWxZgeFETbwGn86vzNtgJKc9a1Dypq87ApUDxy55QjdPWB9NKyhNTH7SqBLZib",
  "key11": "Ru4E1fMbLZBNx9VHKtr8gZkDL5DKgQz6afcZNZRDLvfhU9uyy4ynLMfXpchWTcy1abyg3Ng7Kea5m1JiLhnGifc",
  "key12": "2cAYWZRfATerccQoLRJFAuH8pMKXYLVoLFK1UbN52KwHMHhFnquYCVis9TQUJXm71UbveWJXqCAVtSTauwy3ET9f",
  "key13": "5ekNzfMT2SGnyuyBryJuUFrVyLyeGSPaa1ktaG6EK4zyx5C8Y8PNYSzx6NZCN5XoCjR8Rvo5gHMQMP1Le2DfmRoz",
  "key14": "5ffXdu7tjvmUEWDf4GmrZiNm7n3yYBd27poP2895AbPQHbSZcvo4pgKpTSkQwtm4L7rzXw3Zijvzik7qtXrJyCTU",
  "key15": "5mhcoVY4pMqveFapzPxCaUS6LzQg5czBStqrCmjcyBY1s3JHHTXegVFUHdpU3Q3oxxGF3WvuQzicxVzuPQah2oib",
  "key16": "5fuGDViraD3JaqaDZfG7s1VsxYRvbw3jyvq5Z2zFqaKC5C6aGN4Ar11eDTGkGr9tPyBXxLShTdeXKXaDNnREabhx",
  "key17": "4d9LHtHXhNGxDLgmYa6Tq7DwTuBk9Zh2WqUUj6KKLPJfVtyTXjzJdihHnaaVoJFXCMCo2eTBRppC74yjG2PShzY9",
  "key18": "7DSzzDVzJnrsx1hWYFCZoynPnxr3fNjAXXXUUaR85zJGYcBvsZ5vxL5cBGbnwR91qTVJr7xA6L3PaiBm3ZQrhi9",
  "key19": "5Z2mYwo7ZSKrRebwizrtgiQ7nWu2W4UBfTUzFGBmAvDggkiYfZfsCUq1fbv1Fxh7daD71CpiGR7mT76Kdu39oYiv",
  "key20": "3xNFCQQMrC6on82dJNU1f1p1T3qkHZVtQzJRv8Lf5ug48Xc8HWE2ZAV4XkQ5nBdswkKnJWcjPAo8h5TqQaCWxfYA",
  "key21": "3fihYpZxw57pH1mks71MEQkVZZRz8mfLy1AFAKRyxUmjJoVUFti3413o6TnRS8bULiBbcuVZXNzDDoK4qCToregK",
  "key22": "2Cxh9F7fvQDoForWNic1ZJfLJTfeLCV7zv1nFdkhnqYihttgdoFqvPzX73tLXJHdoHw3aYToxX8YzzSXz3pTpSfm",
  "key23": "5L4DS4m5Hq9jXhKHi7iTu966X7gS3bGdagcud4BQ6SyHHCib8K1sYiNXDsgWREzmeimenq3sNLDuarad9mxowqVt",
  "key24": "PQDfDzRfcS3HgzuYMchwSTng4VmKgxxSr5gwAdLF4ryeSGnqrt3muNTxiMrZCLCtXfd8jEj8XT2qsrFdrStcyzm",
  "key25": "57PNxNoq22TteHq53Xzu1fVarxMc3g2xtt73nwqPSSWXmNhRq8XG5z9egtd9ZMqk1NsTKkYY7XRV6CjbgHjAencE",
  "key26": "4jos6eTAytUe6LkELEWp8Jt6gdyvgitXUBqHkmGi22W8TGeVZ6R2iqTgch9M7GZ1fXqFZfV8BsehW5r4T1HnCTaL",
  "key27": "3aqj8jHb18cz7mWKApQABpbu5LpiFhC5NBjMid4fbhf3yhV5Hn4YvwEgUUyV1KroejbgtiiKmCZudZovSTgFgQUt",
  "key28": "3u3g2zTSoSs9dCrqLAm3Lbp3JTqjusNCCP5rBAessRCimTdrbAJFgMFy2CKAL7LRD1rGJBBjjHCX74MxTU3nMNpT",
  "key29": "5VmiV7aXJXYwiZKmKUvZBuKMdFe2dJX9yX6zK5E5zwmvAkpGQL8bVszSRJMzr2jXqtyQ7FyVDWcPQDqW9nmVntxv",
  "key30": "2eBQA91H3Jcjn4rCoo5QTSjwHsfhW673EHLvs9iSG8dsWS5KnAMAFKyZ478B2RMqpQ99BL6FqeFHnVfYNQbyYscB",
  "key31": "29ywvxTihYMvGzuTFQ4zm82L96aP7iPLGdydX2vP2XSVZpZUbkV4Wgo4VQLzQTytd9qrEkjHdanPmD3XeCqCZqqg",
  "key32": "472evwr2H9EWh5xfxiM4QbtngAscDL4h1mKYJkkmdz8HUnbu1ZBCXoWLSjJE9yjeAkAMBebyrTXjeRKTwrp36KXn",
  "key33": "4CWffu1bL88X2YChEtH1Wsknngh4C9T9JMMbd7WsxuHQegSNBfYPx16anhVisgUZywgvSHT93NjV5U64juidE7dK",
  "key34": "56PcUBFC59K5CzB2Xeft27CBp8weNXjoZooTPaVG8CkhFhMSH7jYh5ifxaZPmrHQRMy8bPmzBp532nbm6mPrD3PH",
  "key35": "55yx4iyL9AjfERNQWijfeFToKfMcGKsBv9LPNEAZu3sWPr13edvWLgMsjfhjFZEbnVTw56RktiogEihX9RuY3qUH",
  "key36": "5g7YaNAsAxiZstWdYT6qRR1eenPnPLVdSvZXLDVT1GSnHbSMo1s1Ty29EaHHEDxyZrrTry3dVdJ1VwFZNyyCrDRZ",
  "key37": "2Ls3koDWXEjJPWVbWK8Pxrz7vwYd7okao9T8uemDhajr83kMG3YPNTpFVpGGRPnCpjyip2ZxMj1nv2D9xsHtskt8",
  "key38": "4E1zWxYsY4VBU1GVGb6Z77z7Y5zG9nUBzwbgVWco2HNVPNXS4fXRkZVFhD3hsg2D4PdVfqn2uyV2KxTbs5dBVxvv"
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
