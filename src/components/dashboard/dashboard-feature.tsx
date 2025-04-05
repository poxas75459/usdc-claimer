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
    "3erEtEi39ifzsSwymHJ2sRPykx6Jf4y6AMhvoi3SDyQ3QHL3FgLvsnAaHcsU1Gmp4EebSJzXCeVLMy358tUk3up3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n4itmxFjrK92WqMNgHcDvby68ePS8EXSkvxLs9MDimkEbMTUag9we2Ehue4bXCzuJZkHUNE6tA2P23k5LfxBZzJ",
  "key1": "34LTUTSWVtfb5qmswSHGf7THZpsfFtJvt8ux332PHbHkFVA2LfL5DK3mGsxUNCYu1cxnK83bQzWaEUurWfNVr4ys",
  "key2": "3Mu4LAYbpbxvZacxAt68h4RBLFYP3tbjacvXBLrZvH3rFeAdfQQhBLeyRCbYpALzjWFtop1bQb1vHnqcYYiYrx5p",
  "key3": "muVvAHfPcgnX2x2o6Kk9MbLifPyNEFxVQ2BpZMb23P9tkmRGpn5KpbAi88bJFd3tR2zMUcXA1nUvDr45KNx9Txp",
  "key4": "PcwxU7YkoiTPJD8MYjCE6PqAEedqekZ9CtA8Cq7kVdhfxMUadTWzHkwEZDFgRteUbtBaJs8g9XxczoaQSBohWZj",
  "key5": "qVp8g3RBmvePPRv5GzSXQJRRv3iuuBSNhNt6SiDyonLeMxB7MBmbjNvF6botxDftXR463iimrQfiQ1h7sbin78x",
  "key6": "cV3oWe8hNSYjteZqKRbdL2jiRaY1Qr1gwha1uaoSSbxkJbgVXEG6m2MMvgh1SPjBhLR2zbSzSqQFLL3rkbWDbui",
  "key7": "3CGZyQp74C2x56fQYux8GofpTqQK9k4BKRUScwG9x8eZmCebyfRxpKrcF6zU2eL5FEsehBn9nBS98W5PKf3199E6",
  "key8": "2HxBBKYViY7HdrP2yAacthiUmBMJMBJBdBRRfUHxWTyfaNQiWpyPioPNWTXtkrT6b2bNVq5f5E2iixJJaphhhuZi",
  "key9": "41yyVCBKgA5gr2BYj6XikpkVv6Xxo6wLsEUHG78nMeR1WDcEp2pw5v4cTySmAEC5Un8ovpcEpM7Kw4mGQNNykiCb",
  "key10": "5865NJYTYTWrTgimQfrbnXajhbzqTZFnU2z7MkcaHNL5CbuTt9AnQ2u2yorrvaXP5xwnVWKJztPaCQa4AFS9FbVP",
  "key11": "4wfduHr47q48v4a6BqAfj2xj5XUmbp1bHCFEpaz1LGVgLrMyw5eaNScJD5gy3ykaCSWX1s69EMavG7z9LXQA95cE",
  "key12": "2AWX5qyroHjzYeYEE3n2PmctZg7gGhEAt2g6SKQvUC78eLYoVKDh48TYikHbBqWceQx7xSYsdvfE2zQzB8rVemoB",
  "key13": "3ZLnirg3GgiawV2dkWFj5s7TM158QnVzyNpJHsHZq7bVoF8QU3xvWL7Desck5gYnGwHqsV7KGvHmLWk9pzBXSXaa",
  "key14": "HpbtFduD8S338ssaxAPX6M6yzyMdRCc2gbYxh2avP4rYikRzA2tbVXN5w3JEQmX4n8SxmC8nj1z6owQauESyuEf",
  "key15": "5VBFmHoCnzqsxTPoxLrDygbwRXsBfjheuwcYfn3JZzvZE5ccQtGsoSHXcxeEu1e7THTG4KZELvszg7L5p1Z6nvSN",
  "key16": "4QQzsztMNcc5wWJVSgyaUtvsabp7Qzfn4qmR1W2hhghRRNSStwbat5uJoysJC8wRWAY53GyvnMFawb1MybActvs4",
  "key17": "2rAvotDGyjDZWvT9DUoyr1SHYuSosxBe3Een3rYFSeszHxbBL86fZn33Em7paMhwuvv3yHuMXNhtRTG2u72nJZ8Q",
  "key18": "3wqxPDPVct818b5xeAjZjYFJBb3Ze96rusnAy8UkFL8RnZnYsPbW3U64kdoZXTXt6CRedwQmd9NhxJAngMkpfk8w",
  "key19": "5f75ZEvPUw6jX39ACTmNp4wt8Y8tuz7eHuDXR9TGaaLo122YBaudmxwGivKsWNkswwXWdPhdQgWGabGjnYcMBqDB",
  "key20": "55quit4DoW9ZAJSfKWdQtCCCmCk8T9CcCK5SgJWT9wuoryRreR3WC9CexybmMKcrYLt5jUvJUPQ1zbfpRaMQsBUK",
  "key21": "5Sr6zArgNCDQfBwfTgbJFeMJJ6TrcEjYDusDGsqpL4R5xtxEn7cNhHjYJkymfrNtWRhPhav6HWhYBfc4cnfYDCnH",
  "key22": "4UAyUEf86223pTjuSCskX4kEiK7oNs4Mh1zXbRriQG9eBVvs7bNmTPgAaychNKFmxuFRNZuZek4ek15xing43FXw",
  "key23": "27PMno96mtmhug6rBW5wpaVAnHrMuSU27FQTQq8k75TouPZR3ExpeAkAhDr5eZKp2yLXeYZiH5nF5hpB4rp6bXni",
  "key24": "5FkkZUX925EvrvfdiirDnR1kbHPHn3HXGYbTiNsruNknEqoEP3WipmLaWcS4Gh3sKgtitb3AUvYACuKazsXoqNhp",
  "key25": "5X9H8HNgpBsMtUJDoTSe1uvdC2praEDnnbFf6QvkfxokFcXv5Qftk7dSBys1wZWakyFzATTGrJNNxHvDC73GKrxm",
  "key26": "5tgXN8qrbtXd1m4DeCY42sGJCFdNhSjRPCFcJfrMizBMGpxAQJPGJQ4SKtJZoM262uEVLK5h5qWrknuE6eA7FsSe",
  "key27": "ttwKCnKHiYEFTGmGMAvikxgvyFJZeteGZ5ojWPQRBZkJPi6uNQrmQD4fru4Yy4YhrTKfxDd9maSaHiFYztjJLAn",
  "key28": "2x8b6LP8XYMB3txeSRfJv4Bk1iYKrSBsjhcSKRczcdo3e4XuB3JmBG2FgX1FfwJiHFGeAyw1JMY1XP5y86htsW4U",
  "key29": "LoDZuaqQatVocBBFhoqZJ1LM1WUuAjsnTuBJmGxQs6W19W2X5Lyn9mc58uWGciN7v8aGA577eEBfkGdKRt1JEu4",
  "key30": "5romYXx52wsYbT46RkME1eZ3D6jU4FB897t9EP7CqgT7Z8PnJUtPhhvgfQkuc8ZeCY5MzpZyzv5wNXrw4RgobMPh"
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
