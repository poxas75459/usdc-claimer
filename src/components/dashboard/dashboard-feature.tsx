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
    "5uD8LEUf5PrKF17jT3s3uAx12Bu4j94HJ6NDuV4XRPzWPGny81t3hM5AUDtrkFMyCXxov6jzJVUoKdQXE9w41ZD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YCA1xLmXbjcg7htxSpxn6mMygCboiAST9gfmcuosCKjVGfqXAsDR8aLg4aVS6FZKbJM2G62jRyNRBdLTvkHDzx5",
  "key1": "45ondSHQV9SH9nhqgvFnaT5aPCPbtar1usY35QH73cSR2V6u5FvLxXSV3CS6mmuhHiYqzKqAXxzQVPhp6KU8E5eG",
  "key2": "3LKNkfe5C5zHQ2yyQuf7QJphvRTj1txSkGimh9FARzdH9y42z7gxVK5RwL327LTxVq6rcDaFu6MgbJ1QsEMWmJ2w",
  "key3": "h7BnHpMr5TgnC9T2JwJVYESA8CEHfLe9Yp44vBBzsec6MqfgXRypipWE7ueATVsgkrLfSBvzDLE6wiNVjYJATgW",
  "key4": "2acg53mRmHAbSuMJ4mDF4s9ediYkE9S94SzKcz1pTM7Gub6pQELGdjogco5FLCTqyEuYSffJerB4ggZXG6FGciqM",
  "key5": "2WMmEowjGbBnv5Nf13dwauvTCHJhu4nUPkM1QgjPPh5hQaGKe5jSfZjQEFhHxhLAQKx8u5Hkt1e7vBqeWUbFMEGJ",
  "key6": "EbR4aVLYsNA8bcgDkiuPCsXtn4Bpp6qJM7uTvhwur3WifuKPFBUPpDRnJUXjXkWeuiFTWYqa5SHM7kbz54RNcAM",
  "key7": "FMTEynksfMV3GuPS3TedTNasaVfRL4NwNLXi5xDzbpamWyRfwHCqoTzc7azcoc3arfuKAAJGPA4JEFwys6WFFUM",
  "key8": "28BUv9gtibjtDVe41QJ4GHfhT1pmR6SqFBod1qHb8cLHDghDjCrVbxeA25nXBiEpJJeAh3NzGSv84PnXgZ4qSRpZ",
  "key9": "3mdoZhpzASbPiVxPM3wrKRixkgh4My1gwsN5K8GAaee6VBTKkXHvCC4koYiNcF2o8wn2vhaEi9bDqzrm3SwEum8u",
  "key10": "5ejWCqb7uA5ebeHhMDsgdF3YZ5XMzmXETRMaJ8SL8fQxrxJk6BiqvFs3CWaBP6TKU9qvoYibm3AGofRQjb9A9rny",
  "key11": "2V64sTy9Jw4sx2WWVYSgk8yr5WNAr94j3jZqw8QK1X9kkZ37RBTTk5XoHwQG1jiy3S9c9Ap6CHNahgYo79w5BpB8",
  "key12": "3G2zvpZcKkTrhScZ42rwxtEBcBSc1cLKPJJjGzkoJYv1v72qTMqbZwbW1ZfMKzeCmqAwN36RQPdv2X6SaznULL4X",
  "key13": "2CqDdcaWpiLtLVkY5JNRfAiESsgQfmoz2FpZ3bmhDmveRCARxLG3EbB5FSqMeuK7Y6SykknH8usJGXmSEPaDaRg5",
  "key14": "67muA7Kgz2hFdFxuj1tyLSe5Xc2soxSV63LhgV4ZE6giaaSKHDC3YK8HgLHrDefpufvyRUvet9g3ntE7tjSNqhnr",
  "key15": "4cQYSeFRcfHHn87omkt5WMEwSBxGeCaHGQhGBxcGE6zjhHs9GEMDkYUzwNUygTqvnFaBV6gAtmTtn1aNjg8M41JC",
  "key16": "2gwnujQb92r7tSovf5CtgxzHw94MaRBeyX1mMmGjE55uML33Kx79fTdfLtjFXWB2XhP95GouzvauugKfDD9rpUVD",
  "key17": "2TXAKEUybPvkuGLGW1NXnuRGcm1ZREu81KT57vDtzgG3Q9AWXpMe9ATZvRdHi3K61Wb9wqsVx3PRVqdTco4fPHt2",
  "key18": "29wxNdpGjdz9BR27DYwBtxs7wvwQ98g6UK4jBnFxjcKPUaFqUhbyBjBFtbeKG6smcJo189ddVQsP1w8xVEKXHZXA",
  "key19": "3s9dhVxmnEz6Gs78NU2UgyL3TFeyB2aGzFQKusBZhCuVMyzjwv45cHtW1mKzWYuEv31rh3BmsGmKESFC5HQStiX2",
  "key20": "4QNojWi2idWbPvnqH6YQq83q7APPzUYQ4AdXGB1amWQom1qbGv8Qr1efWmDMPcn3dL7JgdMoEx1w9MLHp1QoHe9F",
  "key21": "FSPNeFxsVcPjQzEM5foWQoFR3xUxcVgjZZG3yMuLTKiwwKgr7QhyeQHZUPbjxRVUAjSAdFUW5MKZ3mb6EMnfG7j",
  "key22": "HMQVaGN34Ftzrb33sJqGUsiaKaqbR51T28vSgpQi8dqRuM3KCTm2QiZy8k58LKaotb4g4vRMzXAsWx3qcpgXqGx",
  "key23": "MmA6VXgLZ1tGUbTptLDg5LRD6BvQYvpYcbTJJmDbaWyzCJuKBukGsmwXhY8jh5rzNVTwT79a7x5f8fHU58NSSEN",
  "key24": "2JSFoh438VSExFqJ8nuKAAvPt6NPaLUjYjduHyJcocPNhryCKh8e23yciTKikK3QNhUvMJL8f5GZyqCxZRo21Y9r",
  "key25": "2JmHKRLKSYDSUqRy4U8EZwUDpHwFs2nuRUSWGWJDxXWbXqDTsDkEHb5amorwfBB9JTjjsMAkX8CtEubKvNPW52Ee"
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
