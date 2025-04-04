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
    "5xcu66tdSVgxN5EMmbNvTWmiPPuWsfTAWcszPChMad4f6GhiX7osmEdAJnw4ANi2abu8e4RcBV41Tv1oqqVxuNPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mvzCV9bkCXfAVrLLRcmD1Y1gb9iDnuCuJH6THRSUY2aEQNSB6f9pzAprvh7RnDJ2mAKjVs2NUgEfKbvmdJda7BX",
  "key1": "2KibNf5qd9CuzFiEWwbBkE92fWfs19W5ZdVbXZDW2swKfEzccBCsoFmRUSd3N5w1ms674497RdTAax3TK7MLGYog",
  "key2": "5aPomnUaMcBb7BULCDc2zqZ4xgiq5Tifkp4ty8yShbRZVBVksTqJDu76SQMrJ9p45JEtLfeDrTVfPzyXX6nH9Cdc",
  "key3": "RCk8SmqBbNdoHEmLihoEW1Z68SCPMrHXnGxYEX2ipiaSZo6FGcgYXkvbQ4tAtSruhWYDkNQb5UY85BW4ThNEQfB",
  "key4": "2gkKURe1qG4T5PZFiWc5jYWnoSwcuZXXELsUeU5XFj24AibcLWhZAHuz1mV9PMybUE2Nqa4ScjPdnwCUeit3sJ9",
  "key5": "YAviXA9FvGscQPRbDEb1iCSE6raCnxUTT1V9WRSWpJ3XRsXpz3RftTnjGUNhPQT1miXPj9ZAMDx56YoVRH6FxuM",
  "key6": "5wZLC8VgKLF5CNBcCMBtyzRHt5N9Canwea2eLX8syCG2g6mtJg9HZn9XcKGN3EShCoGzTu3Mw1diRoxWVfigE6dx",
  "key7": "5KBAeeHRTeT9hAJpv7BVdtCNBrpwoUh66pPFTw3sJmQDsJVnTtBWYqPXaTgPyr3EfBF7d5sGUSC295wAqPWQD6T4",
  "key8": "2BpHM8YarbRCv6pSkp9sq2z7WugjQxck73wXp3pe6vj4wBQzXhZC83Qx8rE2Aqq7FLVPhikYQesTLuFzm9Z3owGE",
  "key9": "3aBqbcRHuHdooTQoEALE49VM2eDwLAmmQgCuAJnSokR7AHHwXEDydarSEjtpyv2F6S4p5h6Wi8KjUyiKWJz347ot",
  "key10": "2i8BcrDDUX5RByav9peDFwMaR4frBrqCdTakUjbmAXDhmQ2C5aCsVX7Uqj2oazma8ETQ56BTLJWw11bNDC1fqA94",
  "key11": "2KuQ9fTvEpiRypErMMrBwA5bAXaZ8nFT2zMQ3vvqoCCsKgkQaXvXXUvRvAqQbEmSEVXSt2wKkMbRESiopPma8KkX",
  "key12": "3jqtpkb1zFMCx7jseoBdmWZUk88RJPbNkJ9u45fdCrKBgG4AjomvBrby44t7R3RFazS8SgAZ1Gk19cL7AjtYvf3j",
  "key13": "2GhPRVPa8GQJz1pbJq7a1MjnwY2DNespJpamLpnykizBbVofoHBoz5CLceeB5NEsUpqHThfictEBQKVuyAXmJq8q",
  "key14": "3psGKLxD7s5SUFf7yERvqHiWGPqBXzFTYHb2hRp4w3ErFQDet5pyukQgafS8GH2ezd6UBXbR5rXjyxGnsXNGhC9G",
  "key15": "3zhKRiHBBJb2QhqvtAnyvH7j4WSoB6z879a49yDQkYrEL9uy1v6CH6bHva39v2AjTjQTzrJB41bcmJv1BKGTVJYb",
  "key16": "2Mi5TEEEFZyzCpXWW8wR4H7cErwCf19rQkRboVz1d1PdKAhqo3r9oLKdyNfYr7Q6qfvnPrjH7mpMMGMpEJhf59tY",
  "key17": "5hYv3QMAG9AhdheB6Gh92z1tDxWFm3MrMKivXKjtYdsqVGYnhgbb99hmfiJehrw6r7AnfS6MPBQatWWBFB5VRbge",
  "key18": "5AQnNnfTaiUHpr7GEa7k1rUR5gfBg3Q4RoQairAKsGBxPJtq6ymCpLK8qpwsNGeTdsdePTV7a2HAWMJrUApYYBLT",
  "key19": "3oYNxYX5ZZUQHbmmfxSDc4QfXaszgjFr41ZdKz84yfGaJtaFNeyfpi71LRYgwbtganjxky3YBgdhLGy8u1W51LJj",
  "key20": "4sKmdcZgzbrVp2VYPqf54VNWecpKweZgcNEU1EPLFdTAuBsGkvr8tGgsBeu9bACEL2eLfRoLKCxEKXraHePAtWZb",
  "key21": "4zigzRBZGRjdnNS6hpkwwyMLeAW2dpj7npL1N18Egcokcu9nNmo32CmAgTVyUaxzJnnu4a4y1YNT96gABSXt65MX",
  "key22": "3Tf26EQQA6ZE98AhRRuMZyW5S8jHmMJ38TVogWwPCXFjGt1w5EBnNmkFQCNS2LE2sRSA3u34MzmpyU9NWdSaz6Tn",
  "key23": "5icdUyq96hUmdEY6aiTn8u8X3NNSbisyCG3DDBHNcNRSxMvzwYNBFMdSKLjU2yqDepUpBfkisZRkTnHu9mWLnyo",
  "key24": "5B6TaExhnd3zWGVQHW8rqfjMSuycKME34gAJSYQtVMt19z3KnnFy4PUMWx2wc3Qkb7Fi3PexUi4RKEuWfGMCZZfB",
  "key25": "2T83ENUnX1XaBpMzTDi3N4T5ZCYfoBBN54EqTW9xrZndbnfQrk8ocs35KL4D99Va6nUScWV2CHjiU7M5388fTHU3",
  "key26": "5eaxAGAa2oKCeVqGounRPaffXr251hDTi7pjwJh9sT1VJaeYYf2jJiWPvHBrvMSCJkraPUhD4BYPCBEPoW9ZNnbG",
  "key27": "4zNo2mWpVr6Pz3eQnESPYY9H5gJKuY977W981tP3snYiHbY5wjQ4fYPqFXkzcQXytGMBBphrcsAKGw8ooN2k1FQq",
  "key28": "5157VRN647fa6sFNKDW5VzXynwFbF5xSkXFxt979JKSsFGAuBi77m8w4xt3Eiiapt9Njb9fZYitkSHyShJ3zNUKa",
  "key29": "5afThCXrCLzeuhkTXU1tDUfFSNePJUeg95rnu7bRoaaNBJffBhMZhBwVysi7i5TKUe4JMmPxTTXVED72bNA4rvBs",
  "key30": "yHzcRGtD8VXvc8B1JfEAcUyVjU3GsBQwP5DhTdXcfZVUqaKRKCpUpaQ4bM22d13jSTcsn7BY7hroM1zAgPuSC6o",
  "key31": "9TtVddUn7aDomT4q1ED6jxTatkRJ9Exe3HXwo7ygJmdg2HDohb79wN7UeeDxvkzNHBPVky4DAMPp8dM8pgg7DVc",
  "key32": "5cixvjzB16pbXnY3NeBJpMrK6a1qvx1MmaZabZ9LfTNmntF9C3VQXjpYZd8Ge9ZKaYc9hqHSmJhn6U8tapvsN7MR",
  "key33": "3hPXabywhkUc2F2kjh9R1ZLu23ZRTdjVrpfuWXDShspt4S1K1RcAspCbznNW6RiKVE3SxnBqZ7aZQ8fq1a5J4QxE",
  "key34": "4Ds46zawKv5J8ND88Mr9ejqbZ3Gtbr9TN2KnegRwRQ9yzWbEz8pM5wHYoyRVy9ZKYX4b8kHmDv3LjCoFxvJA9B1",
  "key35": "2CppJJSF2vCLCA5BD926HP11EYkwJcVYJWAYZQbtjenJfb3zARf31J3kRZL1vop4zwrcfiGcYFieUWrdGPtcXxZX",
  "key36": "3gSasVZhdGVjG8EuK9nFGGV6U184VeFWahghFTvyoP4S64AaNuCVL4DU8qpGQb3qhD1aynyYwETmqFjgG3onZVH7",
  "key37": "5bXgjJPg91aszYQbFykeh2Ef217K7rA9TYKaSC5xSZzNUKbxrgjqRFWUcVyoGaLLEo51hqPwjEg7YgfUwQUMkcJy",
  "key38": "JxjN26c6LvEnK7y1bvFephCxyVvkM9j4Z3yeuUhqxchZUmLL42aFVwNwURXhRAR7RU7K7Uoay5c1m2mQmfx3Gau",
  "key39": "3vJ2qea6BAVX4n2PuMuf9nKNS1XJyPWpD245mi76qHH4CHys5moQ5fQwXLBLq16SbtfBVXUYUhXYyyBxFjANPZhi",
  "key40": "52J1T5qqFwuDV6nTWMHfMQbZPTVYD2GSmPoEDZBv9ZE1hKFiL5W6R611zKBgYyRekic6MemPxh9LiU8C1DQZohpQ",
  "key41": "5KiPuJSkAqnUmYkYbTvrB3XWwfKFq7iEr6hedaKdJhpRzC2FhYxRVFntPMASCpnXpnkJo83TQG5AnW7JovJerB93"
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
