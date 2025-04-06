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
    "2ujESaGt4cupE4iKc9davwXEskTJSMX87BeG6tL5ogD6BDVD4bmbkaaoHEiBCMQynE4MyVFCbYwgAVstsE8HTNA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sbj9FyRKanQQnhoeLyKz5RcEE486oB92NzY8kyffoUtpx2vmZtiKoNmNs2Q7e7RYw5rvAqoqcF7vM5CFSU7ThMK",
  "key1": "3NkCSetTMwbCeNVZWM4j1kScHZTMTF6j3rb5Unz9ApbYsmWp19UD2JCuqDfkJSTCrDRRfdY8jPfwa35cS5YjrqhU",
  "key2": "4TQJx7HD25vZCA9St4adTc4mArU85tacAJkkkgUK2Ff5Kp4MdPZw4MmACW95LtN3TTBT3VbDFhEKbv73WD4JHpzm",
  "key3": "3S9Lz8fJezZqdZ3To8XowvswNtp69fjW1rUjo77RiLQqGTuCgU9RqVG139GxZZwCZJkuaQqM9sEwNfGhAJiQpQH5",
  "key4": "65SoszzkchdeHikzodwVWZxTzE2NQyFeuk8YWcfn9PGT2MvxL3tv4yirSCXn1CZXcA5vXhibjMv74vMAJWKK1KA2",
  "key5": "5LMLnZXwcxvq9ivDQjWcYTVYmQqKSqsReWDZoX6V7K8BCGMqGWn2p2EB2PiowcsLVWxvHfuV6EtSk4AWJ15zbXH4",
  "key6": "33HE7rqjEuis1YaA5UQR4ihsbUDVeq3r1pLZBxWtMxwDKSxBHkCKmyEkNQzV7Lb4G9HjWRLXuQLEzxSw6yGkEoLD",
  "key7": "3HRXLFJcbgkrsg8XesDqAaoNRMdUq3ughni8EFeDEnXX7ihPkHmHtAnWs9wmnjmCKF4YcjzDaagxQ99RgK939Mxj",
  "key8": "4nNsgqJMmMLEuRaHRkTHvTsyBAH9Xjod2dc6wFESmg9WApF3YWfbztptZfsfHzBDHnM6fCfDD4SuYYRyV6745nmB",
  "key9": "3KJjHeC8theUpgGQH9bnJ1iZefLCrwXfAr8spSxtihFv3M9YcTz7PAvEcxBYvipgtmu8hBv53fEaqFXvaGUGL9eh",
  "key10": "5VE115oZedyBjWcGawX8Kp3GemXxdqyV2jhQqhSmtvL6kb7a9irwbNjSm768GM6tHN1F8n6mh6aMRQKUeiPeKYf4",
  "key11": "5vMgkZmnsWPDXHgRVU3uW9gCLrLBKKd88ShYEcZeAicyfDTbA5y2VdBnWgu422d3zZQvRWsdhpMXbguqKwdAMFuN",
  "key12": "UsRVfqvxZ5SBrKFCeWvoE4Hfik67yqMmVdDq4cnCCB9mugYM2UV8cxT1NbC75oAQafS94FtAnG4Rd8NVEah4Ni1",
  "key13": "YxgnJ4giSXX2Qwg7143niQrNjhUmvVpaj1NbU9rRYi7uak4QJSttEnNj2x6QExw3aewqfqrm8p1iNAHUf5MEkc2",
  "key14": "3n7eVnkvZricTF7yQfDh71Z6Js1ZqK1CcYdVqVFoCtjggBmeeAddgUywcjHQnCPbafpSnjjNUVJkBS49X9VRCU3f",
  "key15": "2ZuP2QCecRh8WLUrmAmS1vqitgqpZW9y6wh5EtijDGmxShCmDmG998vBJZnvMozWxmeZYq6cFP18JnuDdwNrWGa2",
  "key16": "2sMiDBCioHhjYg3ZDAUwxH18eQFHksP2xTmRaCpTpCxWmHNkcXiTiAa8akRCcyahFfg5zVKJAGQWi3fa9ZhnoVmX",
  "key17": "62S7GqJQd96r5k3bizQPvqffGSKbWt9LxDeU87ALhPxcRuHdDgrR4p9rPsMURSkwNqHs7dLhj5o5KKwVP4Wpbivh",
  "key18": "5ekA839UpgfvUpWTfpD9ToA9pJe9BRqYmFsdFaGcsciv9v6Kedt2wWbtn1xqDXQe234YutBABNGFRPfU7kjunXn3",
  "key19": "2BLptLrgFftuVTkkbbN71MZFtgvN9kvRnycwR6iNwjZ98fRnco9Hvhe3gUsZFVbCQV8zYVJx1PWp4Q2xJ6vdwYNn",
  "key20": "K7sd3K7FxdDaHpqUmk5k1Qm2YvosozTZZy9hbXo3mjGfAF4MiUJRbgVZCJtAxFkHkM6h5kDKJsuisk8iAe52e3m",
  "key21": "5HjWWLHvnjhJ3SqBprp5g2xspjZFfpadWzAcUkXwkEVq9nAJJePZtGoWxea1QCeNGah4PmSpQgH4A9qHhCE4N8x7",
  "key22": "4DxSPF7aUu9nLbh55uSrvAcDk4cah5rX6HAoZg863Y5y3xx9PSgqr7LsmVgTp4Jwpe7dkh7VhgSSuWdgQcf7DjWM",
  "key23": "3UpgLykYXzRs7h2a6dUfShGGaYs7cdWY1LCwFDkfDThJsWYRHjLrkNvVUHki4EGLwGR3im6WWogf37Mk7pPRHUss",
  "key24": "58j5SF8xZwLEWAk3We146DNHzLi6LPEAFNCuNWaFyJQz3X3dCJUEnJywmaJWbhY7NuWfLjYLaSUApF7XuH1maYKp",
  "key25": "5b69uc8xBZLZfnbb4gydvtcgXyts4WT28UR7Zqae3NzA3T2GgdAfDinkbeCd3KvCLxySWNQPq1YPBWEcYeoGGwE9",
  "key26": "5A4BtVCYyruxxNToYZ6iHp7ksx4FuSCiQkAU2Z1hfbr4Th4LM5qLnM73XPjib1M3CzM2yvUawAWRikhqraF9wE4H",
  "key27": "egMzbUWvMF99DoLNrouT93thcjRGLRWcwBq7A71GaLBtFgKCURe8K6ionWSivy3wbcHoPGcW2u4R62YcmgjNmiT",
  "key28": "23su5f51CTHCLcyDHeoDYpGuxDUvBTkV8mAKmryq8x91AZWN2WT6RPrCsyZGWJWswvtMBDNrMLFf73zWzJ8P2u15",
  "key29": "AMDrFpfqT7Xjsw9fViB1mHj2YYvJurWHDEnUgDekg2tUbV7opG5jPdYxjPvh4TBz9uVadVRNBRwnEzB9m8ezmc1",
  "key30": "17owx5RUYzM5idCfQSYEQS41U1Rap7WAtu1JXnc4wSyNuS82adYYHBf71JgYzZXaRJXSWdgH7JnqqBogdHkJMtN",
  "key31": "5micJd9bnsGwnGjBT38eTXFGUGDeS3S3Q1VYFAv84ttQ32khCH2EpyULCbkxBFVMbLSWz4SRN4EEADtV58dMsZ6v",
  "key32": "5HXETaAT8xxrhSpDig7Ecii5HoyncFqxP7XUWu5of7XsHkMuNB26WBNoqjaJKn6Z6p6rBmomnHve3H5v273G65U3",
  "key33": "3gSk6YSagypgJKgQ7pWp7g4p4sfiPMhj2UL57JmDudF1Zmru9MqYyaMBMYzYpR62VBdwwVU7PNc2JAZ37hUJiGNJ",
  "key34": "5MNgmfCzh79XC7qhJvAhpewfatkMuEsfwGyuRFjTHQAUgCfPPLQfYHt6JhwY83x21rnjMbWRXzRmL9mmEdyt6YiD",
  "key35": "2x8nb7fNfLW8PKsEH4NwCMBRyHrvjX4suYDzp2SMcxqKHwZ6pPkDbjTRugSWK1nWeqpGThyKkqZeYJELJ3DDQe1K",
  "key36": "56nahRMRPL3QCP2PzJyvEaD5nhWMhVtPMGqFJ4XhLkdN8TxKojPTRQStihwEtzwJzdzjxBmB6x97Ni2AXh1uCSoH",
  "key37": "3kFVbqo11ZGNUjnqc7CUK3HuLmZgFknPgoHfUGeHLjW817vkxXguzJKQL15Pz1Kuu8Bg2XzSMjbvchWe9wUjQdHG",
  "key38": "5XVUTxNGCVyz4iLrwBxRSU1zt6ZHGpaszSzA4VKbsZbBYv99WLdDTM6JH3EBbZJnVE5sPnrBo9djyJud6D1kewRk"
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
