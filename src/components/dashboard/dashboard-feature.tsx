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
    "4nvoHA9mPdF4MQkCFz5TqLGMDJLyTtTUeqNcGBPzKm95VEV3aB1o9z1SS6kq4ov2Pq5U1QQSfaCDrS9TYZKEnn5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nXYUhZG4KPMp9JuGD3NHXYsdHrg4Jo9Jnmg1Nbt5PVnm3z7gW5kJ8gE6g6my77iY2VqJCAMNQJmi1wBietZKigP",
  "key1": "4wAzUuPt4LMUTtJXcLmisHhWnavWV4LaNbn1XEKumwHQypweWYXYJJmkN8R1ZL4GKJn5XTy5ZW9roTrKzS962u4u",
  "key2": "hxJ9KjtiDQhQ5KKFNSwEBfbB3y4CSoC7cbV6eizALPPQ28j9Dntk1pXMWaLWpEjGW2pDiE972sQaHeYQPf7KZV5",
  "key3": "5r3jsdi4PvWvfDEg12Zu1b4EAQN3PstGYEC7Pua6Xngd4yaU7XQPugPRdUswjMMsYBTYGGngWuyAjGNd3492UhSL",
  "key4": "4BH6gV9ER9DZ6YGF97BrTz9amYEVpPmpCjV58ukRkcKwtEcn5xe9auyvxdJ6Nqu1TbVsgwukLhVU2wP1anK9bFYu",
  "key5": "46ub6o6sfroG9qcp6nrBXme5w391eP6DBT7ve8H96zqFLY52MQuCpKq6Pqq1Giscxrp85A2T6nmG6pmHFSrXni3g",
  "key6": "2FouYNT59TU38TmYkqNHqZtmMrwzNYSctCdf6sw7WWYcDNZ2U3X4sKoiNUaVm96bYZwuzcTmQAYW13L545GSjiKd",
  "key7": "XJBCizkrjmKHEzaBd4pCKCVCQLp5Sc3ZvLWWMypyXXeDmeZsLLc3AgUZqLGtUH7vKMNjFMZ7Suhue3A3eLkzoq5",
  "key8": "3c4drFXbkdgGb25b8uecN3osMPxcgnZcZzVguEgCNLfYvYtKm18YVb9QrYxzKz2brm1tNhRXTfsjw4mdgSRhByR8",
  "key9": "5jb8CsstZH6dF3YJQ4EuRw73DseCRJcqF84sK4CLWdch5ArkY4m8C5gbdcRCEWSSXmC7sE9J39PxQt29N173iCNM",
  "key10": "9WBuAqJkikrRyGoMSFh7FucWhPuvTpTnxQprpFRCHbPLTby4t117WCEjDunB6xKoVsNSnxuETbkkxfKcv5o9XwY",
  "key11": "3qdGwKvnJu3tLcwzeMkKnyEtLGFUb2U6B6imkX3JRAjAxNeHGeLeV1addkZa2ANcaEox7kULeDYFJ4iHMc4twfpm",
  "key12": "1y4VgNUrujf57jQhqyF2c93XeTaAzHSZmgCcEa9B9HvrTVwjLtruYJsob31siCQHWwuv1wxoiQEFJGG6AV1uNhu",
  "key13": "2XAaAVSHQzAKhnmg1okGx1G898HcsD4oDAoDdD2NZs7Q4H4hZ2zW37zQppVZDjSqtqCAqcMQTU2NiQf7Rzn6Um8",
  "key14": "4eNWJPAomQDRFEAq2Jviwe8eLPWpG3748kp8TE9BBzTtM9GXZqyZFVZg48EGDmo65fGGBoUfrWTcN7ZoV2erFKt4",
  "key15": "4BNsVZ2CHQieLhfvQ7492jAjYzna2MR7zTSXvSmLYfZU97eZ8joGE7pr7uaEWuGuRGcq29ye1L8h8hPr12M4u273",
  "key16": "48jst6ieeBLxNhQEHKPK37JPRGWAEnyF4DAH9xs2KcURUXdYomVc8KhwCPPhSMTgWqhma9PC4mQfX7xzV8zHNhhH",
  "key17": "2diRJdsE8ZuFn2ymDV9BvYDvzjhSa1UMZNyEcYR6tsZBW23NThpuzENdrczcrWpQgsAWCPNz2L11qCG4A9qUXomz",
  "key18": "4y5cFgDShS4mDPjxWcJSLMDaC3ye5TYBwZWDLW4burjU88bFRCB26Yv9uFnGeQF34BEwNLfXubmnmphxugbXgRMk",
  "key19": "4oZkdcdgS3fYgzNdn4gY6RWfEALUZVN7wz2SwFSyXoXn5Ymrhncr7iFkfF7eF1KqsguDtQnUSCgAAK7rXVbtsw7k",
  "key20": "3cyWBWR6G3RR8vrPZMShH8EnLJab8r9VaNVfpV3kNM5a7RnFgxrxyLsDX1RKSamvopZcTYDDJhaS8qUCpjekANXT",
  "key21": "2vbUHRx27mkvheFFV8HwEi5rec3Z8RMDjRFuyMVfd3tV34fFmqYevvnwRwGMxDiLv7wTBbHbegb9avs69nR8iYHL",
  "key22": "5YtZ9q97UvyxmwBpnCZbTUo7y4aydg5Bo4v6wdXteQYgmeHjwznymYW8vPsgtDC3Ya2YWkLoPnwwJGkejmDrLjiX",
  "key23": "5u7QzWqrx7SxcS8hyoPAfuKN8Ci1euKQcGXCCBrfNciTxUpK6eohzZx3fmNSvLxVG3bs17JBPY78Xy4QVnxZ7pyS",
  "key24": "4KsftV9nAWnTVqfS7AHK79hXiELW5YfEz5YFVS7mp3VW9Tggf4Sc8NmvzPufxiM1YogEnGh988JpqLu7ZGRT92mp",
  "key25": "3iz6QHbnTuRp7n3Xw7UxRhSrgQtRXzzE48JMsgfMgaPHPuy5VshCiLqpEUieAp5ETgPbDUH8rnGZ1aKJHtA8Pd1H",
  "key26": "3aTi2PAuEccFaUSYf2tXQadAFxKYS6hD42obkmoa4mvRChmSVnJnduqyhFVypQiakJ1nHHLudNQ9m1Ci2aaWv8ni",
  "key27": "5g6SQbZdSaCAgNR26DKStw3LomScujkmmCY7JCB8RaLvpbwUBmJZ1kX5eL2HNgNvv8W7sBVQno9pS9pYAw1PjEca",
  "key28": "z8yUJcWowDMBLXEd3Hp1UGpa1kdToTMLfFUjMsTwAywoZbUsz6h1SHa598eggJYUxUhKEWGWsBKDTpJt6osQbhH",
  "key29": "5fMEgwDzwijtXCypYmn67cSMdBRXK2mXRjRgBuSZe1WP3GcNE8SuJvUD4LXx7LCeeViAGktLLDDCwpoBpxmo1ZxZ"
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
