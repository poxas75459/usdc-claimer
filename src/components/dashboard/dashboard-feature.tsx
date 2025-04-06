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
    "4CvhMGVfimDSvEcNG72jgDG5Tv7Vi5fRZSs8yczccb7QwcZFuPJREeriuoG7iiMXKerxptB4C5d7p2kSTqtWTCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zu4qSCCUAyuoYMdqaZ4fM8tNRD9LJC6sGWrBd4TLt49Rr425dFWRmxoeKZdZRx194CsyRJsSDZFfcQuLDnXM7zY",
  "key1": "2SxWN7qhxSmoxhyuXbufFS1e5jrhMoGUCdQVo9VdcTDx63id51fDoEA5A6VBgd3KC18nJ11AA93AaUSuYsknHxLK",
  "key2": "3HkXb5Rx5wQZbcWpqFkb9g6AiQy7BRWdVEfksM29QjrbL9Yhejzz4UzVZgjgks3RkFWUB8ZzGJg2HEfdueNuXmHQ",
  "key3": "41MdfDzhk2sCA85dNvSDRNrBP57KVFrSzXZn6LJcE6GSa2H8g9ZtrGd6R812oAaQasqLnBgEzkAVTBZrMUWKbEcb",
  "key4": "458QbyMGdUfa3ok6dFbVRDD3LJsZ7ENQ33oBBBJTknKr6buT4DVdF2HubZQBdSCo5W3dFfHNsEM6dFLNmJjDdzK6",
  "key5": "9YxhFNdf2DMFLG8VEc6YoVbSdqNMuecp6MV2d265ACBE7z9yr5B3BTCLoBmFaYNQj3AjJW5xVaPDg76H5dUioMq",
  "key6": "EHE3iXV4STVR8zPK24FmjJw4QLfpA4tFqVK2UzinieLT3afgzkAajP1m9qU2f2qMYtZoTkeP9NQmPHFKgettanQ",
  "key7": "5G7of4BY3R6L3yBZ6FaQnBAFVgoi6qkTEgBoH67rQLB6pv9qvqrzhorBFkjCit8YTw8sQkCSn7vgEH65MrQxYXWC",
  "key8": "3uGjWTgkM1smn1uc2JVBff3Gv9tYXvVKgSRxCutABQTsYK5uNeagbpePZZYkLjZg7HFjcK2ZAhAVBcd1dfFxWrKt",
  "key9": "4BmQMXS6DTQjta9dmgdYmh92TgU1uajKfdcCpo1yNNTQShxxAcgfJUfvxjTW3d8oDiboQeX55gSEx4UAPy8F3RSo",
  "key10": "ZyurqVSh49bk7nKfD8CHMfGLEUbaM4EF9Muu54T3eqsF65zbRHdMwSBwfGVwJQB1s4pk8Yt9BbNrH2mJfQyKJt4",
  "key11": "3YwLGfU5vSet8LGpZBFgZVGMdu9WrhRvNF2M14ubohZE61yebMhynhM4BNhdDGtbnGP5x8nZ2BnCbAMd9aJU2s8M",
  "key12": "54k7fDWweLZpSP7RQBM5HAKyysdrNqFDakgAFqSLGh79tWvPFCpcbaJu2TsZMZxW8Gxnz8asaWrAwurpBowwZoF9",
  "key13": "2GydGnWpV4MfKHPwHh7g6VzR5RfgPCCmbs4k9yrqgNAKEuRcN5U72vab8UtedWm4kWecU57mUTkhNZApeByTao9L",
  "key14": "BxnwSTKjraUoU7KJwQgmrJo2pjFTVcMzzfWRhyhCwBhvYYNYRvjE66nh6isrshBXwzv5Quc1PEgab3JTycBvB4z",
  "key15": "4EkT4hcysZdsRhCmafR8Wjhoj6DNBsZkB3kUmauwanFadzQsGnDEeo9ZT9amtNe93nkoYMNSsrAArm79shuYKRrR",
  "key16": "61ixY478giMyAgsfh32HPMdDJ7AUauSDPXEsMJNFZ985cYwEGNUGnXek3eZixDy81G8w5wWyeDVkwg1YPzYtS8Q6",
  "key17": "5gfBXrXdVYtJjpxZBoCX4CEZmNxnpURPPpPigjUP4ZB4DV82ZgUb9H2ofFTpb54EYYeCbrAkNTPz4dqMojrxWFQy",
  "key18": "4KFAAPceNW2jhBnZSxEemZARaa7BUXFXXCGdDNpJyPS7sabisVwWY3KBNeq18SpeiGXNUXrjY7YZRmCFJ8pawBe5",
  "key19": "5TDhyvW7Xb7HjToickATgLj35FUU1N4m2enweDmPgrNwXAv2dX7KYxFKH1X7iunND3NYa638C5A64zV1gpEKiE4G",
  "key20": "E2gWrtb4dJ5Y2NKda9ZrKoMSGHgSG9AAb6PrJtRabCpvpD8z2oXuAcECQc2wSy28tTWEgiCQENzswjTLkWCqCzs",
  "key21": "62LCZ8LWCxTx4uTJqb4jkNqZVk2vuTToPBJYPW4HEBP85icJWG34LXYT69xYfU1jQL24EvNMRPCB4nvya5FJiUEe",
  "key22": "2zUmcatDBVomwhwqaNAv7WXNveHyz4PLqdgEFEiUsCEJ3RCr5TH7TVDRja8m7WRBpRgTRwvJ25x8UVyZvJ2SX9RU",
  "key23": "363UMHhpBc4jgWTYbiK8x9kuR4TYRXNG1FbVXYwGXsx7BUFEbN1ETRsPaaHmE9s8MduMg9jHjBDHxsettVMUW3jN",
  "key24": "3g68oFwVEqZkhCDnkenMg6oSpMkMpvC9HxmCTT93UxXQwTBya6AdWDBHiJcCCpRYhHq7dE1C9CeKzYkdQW9UyYLU",
  "key25": "56SZhCg2CBdtzXECsKn2Cb9NtUgViaFEz7vrrd1YHwwK6S5n96AN3SYQoNchXdH2n4oHnVa3NuPPoSBHLnFXEQFT",
  "key26": "4erYyeReu5H9CXXKDtbAp5mhVUGQ4r2Qc6F7zCe1dy6fgSvAqQ2EsSeCvE9BUYSj7kdqzcVWJ8s2LNBvXeTVwMbu",
  "key27": "5sqZSCALYQbh937o6hJFbu8tdmKmRp6e3gNhrcu2qCDfzqPHb3wvVCqc4sBHAQMVcp5dBVzwLrWpfJbxvqJXycyR",
  "key28": "3xViqzuLwMTe6LXSGtmTF9KmfFx5GptJqmmiiCoAp5p73BwTWbcwe8KhZMTET1fL1zVYmWWN5vTSYNEiFXnWyDjT",
  "key29": "5e8JLBHeGcWMc4hqmhMJ3TgRSVUaaTnKsMwkW9TAwjNWed3TwgJF9yCmmMSQ4v86wmwMKHJ3sUeYBg5P2h4uYBxY",
  "key30": "4byw59HFkY4k1Z4uttVPhXeELEZy3V3NGy8Vdm7NuFiguM9ZJfkBTorXX9kgY3Kv7mBjXLP5D21qt6BiMiA4j4Vb",
  "key31": "67bTTVJ7Wq993upifiSSSJq4puEq1kMhU5L9aMHAwcFyNmF6tdPrc35BTDiYPu1PYYRuGdVdnM9dYXzv6DhHLQ5u",
  "key32": "7u6fBy2s6fLFKitMScT8Yf7d7ru3inRVTh2wLpp3nA8FYqnVLdo7ZdhKRV3vXEwwmTBhYjgYZyr48qFjPvCXiSV",
  "key33": "3jLahsx5eWBtRJwMx6UGJdx79Sfc3sRs8agxTGPTTFnYmN3rMGnYidmqxDSpKvPCemRR1joAaPsq8tuqbi36DLDU",
  "key34": "4auF4V6MfdkvjMW8TMKXL1ni9LLQyPknPx21HKEa9Srk6YasRnHP6GMLpaYxSBJPYKGFSpoH28ic2KykHAuJpfj7",
  "key35": "4U9P7uotWSX8nFtvmUYHxFcRwE8a2G5M3z63Hat3AYiPR4V3qepS35ANx1VeN74T5cH12Z3czAzrT4yE1Q2tesrL"
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
