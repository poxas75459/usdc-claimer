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
    "odnqn42QM7geGq3Ko6kMUpoNH4ytBQB9HZZrnP9hrDugNLWuF5EBpWP25x7rrZvQzxtrf6fwiUcras9zKk2WPQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51rQBgXwM6KhHLH7RE8y7H5UWzfRQWu8B8mbmQvuk9n46pc8KKfJSHP5oBLEWytbDHvzAhyryeJFxZhERMqiAKyy",
  "key1": "4bn8wn1wfFFYtHyDJmNiv66F6no1Pfve3w9VPNpxERcjfKemPRgmyVU6QopLGHjbiszB623HnM8nEAXzkMDSU48r",
  "key2": "3Nb2mpAg4roeSR4Gky49FxPwjinuWX4r53eXsgGZqoNoh1Gmo8oBFmxMCke7Q57G96Xjq7EV2mNXEKpJBHHYx7Gk",
  "key3": "2EMbkm31C1ZKssipyY57hpMvB1VM2FaHU6wmZ8PDYACaRFeBZMJmhMXL8cYSWUQgUMU8bSNjip1qEqsB4WyB2Uun",
  "key4": "4PnVTXu8mL1BjKfzUifefK3Ph64GfVDBvdhpuQqx8YGC8XiWfe9roHcqxrTs9NCPHruxLmz2HbZw7zM3RgNCjmAe",
  "key5": "4RkggxSEk8iWo6nahR7WZyaqZHU589fJKqPYA9AX9T3tkTo28mfGsYNjgJhhkokt9xYreb6fUfmWjhYhWJuteBdZ",
  "key6": "4518bagU1zm4xrC2AXtgTg3MuPRmML9NJzYewzuUKLxRpZstCpSWiT4UvdEEbUQuW43V2HjCBZnRbCk1c47HK48E",
  "key7": "4BteQNs8DGzQjh7NbVxq11RfeL8JikEToT1xK3QH25ujVxsZgvBXnxhzGU8zKzj3tLvT9QyLLmsPitvCStreqea3",
  "key8": "Qz8kTvVfQgeRrYxzN9rsAr3twZFB3h1pHxvRYxtYqWQnDVL1kpxWi9bYMen9rdDekGk73mcXoXQQ1cnLBi8dgN5",
  "key9": "3rozkLr2BTde1NKRksRQGmiYVNrVZ8HzBvuqkCxfujiLRv6rmX9ezGmc2Bp6cT3eW2JHAqkUtNb9yi9PC3aQJpkt",
  "key10": "3NgsbqcnBGH8hzoqiYWDue4huaD7f5QtgvXWYqi1Bc4xyRXMeBs6WnWWYoNtiNXcsVnEXAa9wex1yaLTk3EkdwJW",
  "key11": "5d6p3bqHc93UMYyzvyZGNELSxVrLVaWzjKU8w9jgCUHU7Jniwf9uvgU5RmwPM89PbWpYpLL7A6CuBx9EVbjbLA3B",
  "key12": "2gBPuRwBnqzXfq64cEwdv5k3sYXj4aK25TEZ9QoRu17GMsPL5aaWRoEsFcVMAFVSLY7SMYqt61gGJY5w4Y8DqxHe",
  "key13": "65V6YuodLwcYqqQRdrMZotAP7k1rtmdtWPjDVMYtZieJmrFyGQPyBai9sHfuzJJxjPzyS6sRAXbvFrJcj3QS4cqi",
  "key14": "5bnN1FgNsSdim5NhaDHNa64f5iJVECyALDXeSAqv53Q1cgipi1bR3RvCWwzdHE7rk1dt5AhbbHZVcBaS8QihBmq9",
  "key15": "4dsBQTu3ePUYxjgpeehYJFAzu7uhmB6gKasvsV8EjqJ7XpWoLN1HDd8hQcuWUdSv3sXjTb6L4kGCZXSZsiwHMUhS",
  "key16": "514kxYBfswPPS26JuSgFqJJKZQn8QkBYWQNp1fXptRYkbFhq91f6FtX7ewozpbkscT1c6j6vccyMoZiXfbqnteKg",
  "key17": "5UT9VEk7zsDmS4yWuPskRXBzKRYULAFjuoTgS7pdUgHhF9HqPcjdMpV4d4JCDbNrguuUuUjeE9xvRBFnvBfiKr3f",
  "key18": "3BmzGaB7SwYipMAjFEeXuNHrczzEg2Vq4aeRCQsotpBehZuZqYX1y2dfcxYbQwK4dSCvnEbP74egLcdy97r5VPKe",
  "key19": "5Mqh8CuHTaTXLRBWbetHgMPYfbLM8R72qWLt5UsMSQwc8H8gn4bQEuuS6inXJdWq2kjXxN4SRKKnDLMaMsZ7QSDo",
  "key20": "SD6G5Hb2gP48ADHh9iEk6v3VrA7yE9owjq4e6mTUKDGePj9jz9ETjDjM4nDSUAc5FJA5qG5Qo4tnfqfMnCidLiv",
  "key21": "55QTuWJnJNvA2TG5ZgrDEGfFSQty823EnpSfuGYdjyGJxSuS3vkDftXaGZGkfe2hGYM15DnmjD8MuQkYr1v1sdpQ",
  "key22": "2oGtaeL1B1pJwuS5gzJK8qbhVyDU28HEmKr4f18U7jMoLUsKawqPMpJspo9HPxehSEoZ86b8hVzr3bHCsATzspn",
  "key23": "3ZJYf3gTKaaTy6Rpd6P2vN2xHXzBjAXMouB1LTRBYmgSgze3MGfYisF45usPhwikn8VTrsa2QAvaF4Uq87S6reWr",
  "key24": "5PDbMnBZ9CkRod1Wj4cMWiBwQtq5jjoXDv5kKHwWCJRqfLWbpFnY2HvaAhFBJ1hJXNrHYz9zjWVQKDUMAdYMSeEZ",
  "key25": "UnensjYgpNKvVeQCoePxLuXxVFCJKFrkKxy8GxdhKjfhE2Z1MHVTv4SQoPWGfy34SqJLcrURTHCbSHp39FCjRR1",
  "key26": "2b66DtdR5eUT7Cpc3SWV5Ar7PZVcb7H8xuGkbkV9T5NwRaPLKcBNuB8Jzj3vGkGqCh1S5BRcmNVibeKWVLQwWGqp",
  "key27": "4WyCcB2vMNffAEBQN1eQAYFNPqoHTqZfz3DhVgRcajM8AycsPEzJTnv2F5Qgdy4YNApoiFU9rhznSm6TXzwpDBq5"
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
