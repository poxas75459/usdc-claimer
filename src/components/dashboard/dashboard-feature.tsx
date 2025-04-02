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
    "KMyPhNj1v9Sqgt8n1WCXa1PGMhKKuXnZL24Q6Xf4ALtqK3vkgFjs5fNAdqrdkr2EaTWdN5fAZVeSEEYwu6RNxtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ACA7x8EnbQdN5CbcDvhQqFhxmZmuZUhTkMMgUXSnjux8LSxeN4sJfksDAmuhzGTNEcFcbrciuHW3Laz8woNrSM",
  "key1": "3T3hPwQ4wCeBBtR81AfpazqfNRvZK4DQnL8ywoJFCi192RFN9Af3fYyRwA7DvoasXRJekt9hZDksFhmxe8kHdkV9",
  "key2": "58wRnFjobmnLtHLv11pj7jVDwWDuYtfVtEHmKDQqR1TPVp3Jv5Jffj6RkSNNw5TZsxZVHQ4PYcig1w1dBfRBEg8D",
  "key3": "5PjfTRb47UhWu2zE9v7McFTgsEVybKTSEMqQt4vXw8r92yMn2hSg9pud9hzfMX5GVfrP94L9BxneLQYDv2KuroY6",
  "key4": "32wH4LxerSAoTXceKDbcUY5uB2y17nAKHjcAzJGqFnms2Nj3hCwXxY6M7S9jDPDVARgPBkoXm5Qd6zpsaPVnz6HS",
  "key5": "5hf5ipTRCG3tgDC9TYCyCEnHPbBt6uWBN1GLPmTSueTo8Xa7GdzmAVZWuk3wQDcgmjKqbV7RRSvU8CzMtYMeR3GS",
  "key6": "4Nb8Yb9i3HxpAbQmGgRCh6ogqMCc7YmL3WYgZDRE6psp2SxqPqHMf9RLcivCiwzFsgfHQ1BUkvmSsRBKM5yLkzWd",
  "key7": "2rsBS7hxy25AoKukZWsaCdrH54zr5wd7HUPZDWt6raHAJB77S341AwXvcyodv29GPgii3XBC2YHsn6HeGpAo4ZjC",
  "key8": "4Lay64WkYGcRW1unbQUqCAPG1sihhDdiNhH1smm1sf4f7cAgrJzrW7hK3F6kAwjtNchoJMJsXtDKrvVayHcVRgZ1",
  "key9": "5VQU5hAxrtaf1XEHZTws9X9uFiozh3qHViSucYr179Tb5hWEsVuxqYaom9km8RwBqYUJy8zzYnsMKxiUyUM8oQWp",
  "key10": "2uEVFgFCcnB8zq39LV4TqYAnd496WABAadbqZ2vYLNvpSx7FWGkkdY4t3TUGCrNzfCA27VC6KxaGVsJFePX5fB9q",
  "key11": "2LaCBsFHmx1napSWpQ7Y4hxhhzvLjdmSESTM7EeEEzvXMRwVNxKmhYWB8JDm7mAgfS8zhz8qQ1ThF49jR1SqM2Th",
  "key12": "39YeaiFtMMz3hXHBssEMx63UZRWx1r1SaxwayPZTs9rztYjq5ZqR7H84txFx3G4V98Q7V2FVKZZuTnXX2rS3UcAA",
  "key13": "3F6Ke6ZFf57jVJq4AkwQPHYLquAKsupqGYStV4bTjSFFKiUrg8h4dVwSXChh3kmTGgZJRG5RR4amsHgbDwBLEqhX",
  "key14": "eHp2eMCdtDPW846Xd54zZkpLTwEHxoNqHsMDwGceWa6CcEHDkQLX34APrVLCYaGcBvWpsnT28oF6i98LYD7SMUX",
  "key15": "5EqFrmRaGqDGyqvkF565tdxGtJsdqi2SsiZw3ojiXxJw4JFxxhoGc9bgNdwRJvHGFxRRtoD4JKZYzhm3FV7joTGH",
  "key16": "4jZynf7eYU2zbjXuxZdaUJSZf8MFDjP354uGJCf3ao7vJe9Q6DMeGDkFCE8nUcNCqCEHbeJCPzr2avkhtZDW5gtQ",
  "key17": "4K6cGsMKePhA299YFvaNa1YFRmsFksdFK6gofGrJxGojdhZgj7dy8CJTa4ebChAkAXVZLmVBYd4eTh8CMM1LM4WT",
  "key18": "59Tqi33uvprogx7UZpNNUxwXgsAXgw8wJuTTdYEhihgCzXN1iW1QEeWuCMnbrxm6irAYHpGUrSNDXNndcVh5ZvyG",
  "key19": "4ELwREK16Ldubzh1HiEiFuh5khNx12sB5FLv5ogSWzdU9qLRidgQ5dmgVeVrEnwYpWd8Movefnz1M5Z4TtJSrapi",
  "key20": "5w89Z5jTMTotCLe1YqZijvbw3UZQxpxb1zxnxg3LkPsBAw9njRJNbUKEzoUtSY6iJcauGggwkg6kqfK31MEc2Tiq",
  "key21": "5YwD5UhmiPPQs4yQFyVmSF3hYFGMWYX2LfNiUAAkUNVqPLctcuv6fgB3iXUXuuEdcYUWmBy86CLYhprTpjHFxe3x",
  "key22": "53cxGk2NBpmGfwAxccZNsasdwFmpUhBXhk3mMVaF8VUuxf4YYnoeP4jbSACVG4QmeVQL4xxuGuzPKWMt4oMGWpKj",
  "key23": "K362DNBtzGtTXtCzE15Ce1st68sTvyU81dqcP1a8vWpCxCbdKpg7ybVVKGbyEEn1q1s8GBYxEFxSffkgcZ5DXRy",
  "key24": "3vzwHv1nYRoe4q7StmA7W3KDLzSqR5ThbJTuTgsEpii14hWR3jY6vHkz4JuhLb824qEGpvWwgxvwQfy2GkzQU8jL",
  "key25": "5JoU8PynjCfo6wcBtFrUSLh9T6SPAFdM9fKTowKKvKq1J3CkfaqV3Dp33c16mdhbTKHYStdoXfMv1jE21LPJTMH5",
  "key26": "4GDN4oaDj3PxynH2JRKgs9hCigGqnqwe6pnML6rkAsZ1TU4sFazMm8xijBuC9WHSuTc3yrGztZTNuxAUY2aUTrny",
  "key27": "NYXRqczukaZVFFJuWpzQDqae8tKSxHGLrnufv9WXACRw18PHasXjGcWSsyKJnq9yurVhkyuzxanrS4XHmnrUetZ",
  "key28": "Tk3eAQHZLcqR4ShdYjrmjXJdEfN1Qzket1xhik2txdNdVkaA4eH3fmrZmvVEyVLrzKdD719G3rk4GF3GbfDisMs",
  "key29": "4PwFwUtqGosnoR2wNBm2BHKrQjetzt71is4Enb3R9XhSLFGRgxPWtUARcyRvngMVb5MHKDPmcVobwsrbACSvcRij",
  "key30": "3c9ySmLr1HEdfKTUN7cwWrZnyAqeH8Qg8QYeS46agAoqJqLZuuBv9h5mTFhNskrmzgoKjj5n8dESrYzF3Pb3Rrof",
  "key31": "56q6UGpf8zZHbzFqKGc7EZrh1pyyJYTHtEKdS3F7XeG88fZ7wLLPiPYehTGCt4pW5oyEwNVLUTYx9E1yS6RB7cnW",
  "key32": "45zMp1U4uXBCcZwbvAn7RhQPHFqor2gbtJqYwMRyncnwvJKPkpSppuUjzjr55rRxyWDefPcJvkW8KXrfpJsZSGN7"
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
