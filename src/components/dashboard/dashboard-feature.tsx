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
    "97i3k5As6WSb3QGubEhyLyJaVZ46RXXjjv5jX9qfqccXTA9ip6WgTYCreZyuXqf6xgmfoECPSD68ThyP8je713X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GZKj54bfnV4nBjnVwLtCuw4VBrRW1vmYspg6Rk4SWu51Kdstu5X2udf1nqka7gUJ6xT9rhQ3wXxcbhAioJoiwvV",
  "key1": "4awfH6Fqtd8W8VAU8aXH5zc8VnYTbwxZ6SE3YUFbuHx9dwoowsdcXdAmmSLnS6DStF3PqnEg3P5yYrkAifqWqMcq",
  "key2": "3ytXPCWiBhMnvWaFdkMev5hpsJbMFVH2odUGGYRbHNJz1zVkyKsrX69DcybjzKCVf5Zr5VtsWmGij4afKTwDSjg2",
  "key3": "54jEEQ47GYuYmDH5XTQxGvngvwEQMPcHs94qBrW4D4nDwh9Gxa5RoxJZK5nVBXVhAg4BFboTZUSttGXeAm5V73n4",
  "key4": "4jnHsPL29rG5F3xqENqJcup9W1U8MDzvjzdZz74gJVzmiiUciXzbtG6CDzRnpF9hbM7Esx93wuPSfjaWwrnUgkHv",
  "key5": "3KYt6frBjk3yZ4eCsn6LtsdVy5Af1pkK9RCB6oQmyw3u5sbR9nwWiMtv5AvDfYpbTNrayMuEMF5TKg1wMBkjfLo4",
  "key6": "znpSnv75AYBj5zDevayL3BRCfag4y1Xyjr78sNT3Wzw67Yb2q3C9V7t77DWFbRZgJZXgVzCvXZm1YZWmFYvamzW",
  "key7": "34BbYdNgWrzeYf5oo9Cq258TShWD4Xkx3F9QNYE7ZQB79mey8Uxq4kjJxcjJSNrumGQ8qKC9v14Z9MXiDqkqJ1Un",
  "key8": "1Pzxqg1FJCHDsaNNGLiNnq5g326NVvMR9YAd6nexu8AidcSXdqNjEFrv64caR4JSBUZpifS28nAgivA892VUAUB",
  "key9": "5JtkgrXW1fp4tBST2NjNjxnpPWRg98CszJUWtSuWvb76ABZzstJMiKN8hMrLtjbo1nVaqRyY5Sf1XkfF62wuxL2r",
  "key10": "4mSmBAkUunHdEdEpb6TSYrDa5tpGvuzT9ZBecx27fzP7ZLc9Rxdy7SmbfdpTu5PzohA4diPFcS1WZNqPmgEBL6t4",
  "key11": "3Lm85pXEeS5E81SdEp8JarkcwKxKyTC1E4ZkXS69ZTEM9HoDkmUutSHaZkSMQhHHqKjeYb8iojDzjCs6TQJG45J3",
  "key12": "bZQr5o8rjiDHhnFWk8Fwnb8cmizNJTebwU62P27KuM6sEqXVRY5kQXRxxkYBLtVxoULjDvJLD1rH2KRGDYoFEg8",
  "key13": "YUc6wotLLSxAAu1ModogDBj8f7e76NVkYt43jD9FXhGkmRnAvKMcwD7qpxxMMFze9jLAnFfTETyEzAF45oqfhFc",
  "key14": "2Gj7DE6Mv22uUYq9bczphKCU3c45QxbiBRJMSpRVE4kWniKmuCBxVgiVtWLG27AYzcG5S9ky2DrjxvZP8hSX1mGj",
  "key15": "4w83gXYkqpMYj2ehq5F5GuYQJzAS7MX2KdRWNbsyroMpswnpcUxjCkRzMhpb8A1yqMeFbTXQjDKwhLDKXzgCNgGg",
  "key16": "4L7upD9HWw5TBjuak1SvMBUJ8TTzVbED1PUoMbdNTLVNT4WNBvE6p7iX7rX7DYDSWTk2miTC9ZCthnigGMFTxYYc",
  "key17": "CGaxLB22Eof3242zWsMaua7rFdE1ZfJYSVptQiaq98Be69HxY9WDsfE4nGz7J82o37kbDR1NrMQGys5yLtGFZq7",
  "key18": "squWRViLjH5pRhMx6Pv6wietaJ5RPBKjFTYy4g8nQRhdTQ8HWpmYaevpnUmWupKvxnTbYnkbmPpnMaf13aXPVXS",
  "key19": "EUBxLEbp6wz1wGW8r5npgoeeiZHpMSovxbFK4PRnUhjaDGXjJcYHhzBQcKR41AXcymkPaS8Hqv4MVpmCSLJPSx1",
  "key20": "5nUb8Cx8cvEDWm45xovh9Xmdz8hg5VmcTxPRgYfhyacALz4iExc9VnHCBm91qykV6YGW6MX5pjgYn8Ru719JPSgt",
  "key21": "2irG3JMNowG7bcr5CY4UacZuJmNizS4xqjzALXkueNnudrZdX8Cfs8uL6t7pWZqCjXKb9fxza92qZbVWxkEjmrPq",
  "key22": "5st3LMaJkRkCu5ayg6JcTNgECSxJ2TfWVZLxDLZdxxVtSM5Rr5Dcih5AdHmkjrgjsTLt6b7Y7UpDbaRz6KeLqWZM",
  "key23": "5JWTVPVeNUmaoV3U9TCAZdPPYg8kKRBc5puaJ8PCz1swC4HnTm8R4Nhp59ichocN4SEFyR1GHQ3upV2T7UeEUYDP",
  "key24": "2S3u7TXDh1syARiKb6nmic6yFoMHHekaSKVKcgsZArToE6T6staeDTtvuEAKgnvFgT2S5NRtYNoyUb9dEpRxPd6f"
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
