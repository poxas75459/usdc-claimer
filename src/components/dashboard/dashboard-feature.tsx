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
    "2zpeUd6cN7sYSnGEPQzQjzxqWCA8v2E5hbM49cf1J6B6cyBbW8g69qdDzyaVPzufjRmKL7R8BC4Wsp7cFz9LRyEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bVD4a3XJrRCgCuzdgzP72z9enzpdGiMCVh9CPx19UMjre4zMTwRZGtPyEgY1EVjfKHG4D9XZ68LRne5Bw9epnt8",
  "key1": "5kjp1xnZTqrHi1H1sdqXyx4TjpML6s2qE5LntQgsLBKu7YMcHPhfZWPaVEmLvLhkKCWo4CTH7xqBsbUrNxePExj",
  "key2": "YWbniVFgW2wEKejxxb2G7CGdzv47vugCGdVwrYuMLqM2LqtK2oKxxaJrgNEDtVQ5ahQJy1dky876mQVmK19yMr8",
  "key3": "2MdC25c6vKDtE4NoDTQsVQ47iY5VZSm3UdpbYxNjgXUh5xWVJgL2oCvfe8iidiyo6sST8QArHDhBFUjw63tR98hn",
  "key4": "mHLfNZpHqyuiRSqSoRtaJ3um7PY3BjQYkhXSnA4Z55VS9qJSitvYR8mKshfAJNPnMDScqkRz2ciwbxgqHpBPKFg",
  "key5": "4J2mJXR72NvW9nonEbXBQAbNbiCKixZCwS542PkKUtKJ23Qsv4nP8MnsJGPRB2CYfU7vJjsUd5dMH6cEsYqNuasW",
  "key6": "55NWhMYQYwWBR6N1soE6Tjhvw9hQ2AeUNpn6qt93azkbeM7gNqLJaFLgiXNxEFKeghicfoJahsUGMcCBAo5EzXB6",
  "key7": "4T8mhH9on3v7rrhFU4V9wMDc1avLioJWr4PL7QfK971G4qwwivSKWjNDJL1o8sDVVwqkxWyJ45YU646iVBz6cad4",
  "key8": "48gakRbbgrbSC4M7cxdoonCBmj3mFWatR48QhpHHSZp4XXQChZ7GpJYbi1VvUMPQeu21C2JYAyeRth4mJMt1sPUK",
  "key9": "2uKm9UHhRdtkLHRVPTyGjiVxHGXH2jxJossLGzMDapc6rMf1ZYVGpuBEFBgqtTNgioLdQ375boedkcvp9aKk3WUW",
  "key10": "4HhqsAmnjCA2eBqR3pEzsDwf2EULypYs5FMRW3kTry1Fgh3YSRTTnabnyH8a8RMZp4rjT1DStwV69pZpwKy65qQM",
  "key11": "3vtZBHATWKU11uRPBBPSDBh6BCPDUYgrSvMho6PiLGxu2rAx8c3GeH7FtvLkDBrSoPB2hnFDcwPUsN7yPxBYpPVA",
  "key12": "Kgu84LKtLDduHCDVhqdTcuJYDHD9ag7CWYqJDWzBv5MkDPQ3ektEWwaanESH8DjkaaDnrTsv7TzjYfTMACfRskd",
  "key13": "5BM5MJzhHka1f3BRDmZKMqggsCduzXzfyViqYKybSwjiMUoSdQEa1GJCa6TZF3C1xFBM1ocs2y9AGjUvrLq7KNUD",
  "key14": "3asP2FXUHtEAVz1ZmQrca4xbhnQiCAjhnpqRHYCzwfB9EfiEAfTaZTYgD1QXWY4wFjKRZhzTh36KB2DjuV3FJJUZ",
  "key15": "C52W4LLh2HSAfn4B7B1B9E94G4yjoZ97yvV6y3pt8iWjKX2A69JBtdn182jnJwGqhi5Re9Fx7fpSFxup3euG99o",
  "key16": "kgpK29xk8MbLH1BDmZdp85TD8aiMu7efcez6A6cWiJ1NmgxusroWygLbRDr8eyQnwN25U7cmyhuyztPXq3MLPQh",
  "key17": "yE1khMdNMjeBkF52ZpYkkMvrGS9EY972o3exy7sX2R9pQVVvSqP8c8r9ysyp7NWyQQETJpDErg4extUvL8BskDT",
  "key18": "34trB6xauKBNTANuUS3DP8NgU6rscQJdLgSnQBvThLACizqKUY1XPjf62wu1VTrqVPAVsnL1wP6moNXMaHrp7oab",
  "key19": "5ExFPtoYKDQbWVCxn8PdwYX9dxkdT72vMkCiskBs8D9ZhW47qfa421ZqB5KKsseUv9VePh2EXTCT3N8Qk6sMNpyV",
  "key20": "2HPdh8BoFytDveZFoiaVuZuiwHPRq7sF85TnAffavCLzGKbFeMeicDQdYeuPgi8ipJeQoBFDpRGTvpSMHcYPvcaS",
  "key21": "4f2zXuo8HVn2ofhU8tHnmoMAXzz7dCwC3jvMqgWXhZLVvSM9od1XwJFm88RqnxuND1gjVn6n6HcYAPEsTshM5Uxo",
  "key22": "3H5pqdMFRjVMRetBhULwhr7D66abBhU5ZanZQY9ukQFJWJR1X7rVHVXYNyoPppoZV6BGXWXw7nitcM8f2eHqA8qJ",
  "key23": "5ExLN7Uzb6gHN4tJjZentQ1oYvuWQUc8jhbB5h39faAxpctPRJurE51PcdCKVG9Wjmoi68D4nNbqk6h2HTxbPZuc",
  "key24": "3R8AxuiYUV5Aw8UXzyEKb9av5qmBSNMyFpjNppXV8L32tvQbi1vLpt23h9bRGihwwJVWJz5aiPs2UcN1rpus8bp9",
  "key25": "3xSdJJrZx9qS7a2vaWWttVDNUTM5M9QWi5YrxzxUMXp7mrXKF8T84nYc5ydP5UmARAc2MYdLDU4whJt8xeWHTuH7",
  "key26": "5dSY9jH1GY3hE2cyYCwASkrqjwivYbmuvNXk39ESPGQxcuwpuQV6SWV2dq1Zt6NdFVNJkXze9YUizfDvunFtEUGQ",
  "key27": "5Gdp5McXLi1GuP193an7jQQpD41mGbXQUdbiqQ8WA9RMRr4QEiJTEu1Uo9Jq6JKdYuerQWeyFDADkrFnkMniYH36",
  "key28": "3sSyxXPUkSAZN3X7qBraXmicHvZEAtaTkGy5u9sRgALEDbFtVTZ6irWM91ur9ShcJtwZqVuBBekPkS6j4G9TtTdx",
  "key29": "4x1UHL7UjN2SrfBFgxjph6prbJWFda4W8EjqiokqRtzfytjfrk9vhSpN7PrDW83VMAfmJPAU3pFihkpiUikeFGW3",
  "key30": "5ghXXVd7VBhhK3ceeBP4NxTJxpJkQwg2Qp71G2ajRUJFemmQ8JNNqyPuZJAuivYgd77A8jk2xh3epEfyHYDLU69k",
  "key31": "2WbRU4Ydk3yq1F6W5FF2bPdGGuvkF33u8Ux9mYgo3s1K6Nw5bb71NYKWHWNpKLeKXgM9vMbJNQrdJ8ES4MYujMn3",
  "key32": "3TS1UkXLsuZVqMT3FxySB9U2Ub4RtJspfGCQEPDwzyn2zGzP9qGzphyQytSpZx3e1FAveLTgckAGkBofgVQTpiU5",
  "key33": "5es6kXE2r6CdBSKJNBXwQ4skvAaPtpjGzLLzURC1zssD4uNN9VU8Zm7MwiSVRRQgFNyGbnHuuUYkiq6vCfkUaqo8",
  "key34": "3Q6zzPHryGCGmirKeopQCewhBz2zPZ7Rxt5b2MNviKqdKmyELTNkWk5kXUVfJkbAiixrRABMGTVWJ4FUd9Z59mkr",
  "key35": "5TC4J54KFnt9Jvar1FvaUXW1sF9eZbBTRBwNcG52WFFmaQUXnmL9pUhcRVDUDoHbt1XZByxL2EaK1aSq7mDQ5srw",
  "key36": "49yzNiqPrKpesWjppF1BMfjCJVYtASnSxCNNAdGzqtnUHpPWdXkk6nZmDaubys2AfLiFwsiHuHHAVNHAGhJw3o4g",
  "key37": "3iWsStAQJ8oXqUYUB7hBQyQU8kTaQ6BD1GJsSdDxnc3mCoSfCkmqRTSTyhDAnSTmntBJw9Nh8Y6f2a89bctoYYBV",
  "key38": "43Wdxv9EpgJ8QzP579WA3fkb3ySwuNT7uGFUNfMooDQbaWqLHXDKWRgpN1qAZmQhQX6buwwJGopUztNWMFsG6ckK"
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
