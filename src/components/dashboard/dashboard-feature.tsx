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
    "5YGryCyBLJ6Pz1vvwGD5ocMm1Q5fRsTodhNiYB97rw75GgmzUePUS92FaY8FHnc7esASTfWt2yjyKWz5WcEgUpQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cG3NToKxk3s8p4U3h6KoQFyeaXphXCKXLrUrKp78CLi9Z2ytDhFj429WKUzTyobBdW5b7LQD8jzNFzetZBQqkqg",
  "key1": "63TQ1VkbD2wPJwrzRY14A7UUs9JVdoBsh54VuvkMTTbR2ksZ21yXmqApgNJCX4GPjZEbqauZSX7Qn19reo5zEJsW",
  "key2": "4YJuTf5NNhx6fPovDpr8oSYBX4YCuE2BGH225Xt1G1RZbG6EqkrWhFEds6QbWdevZXPsPjEr9D9Axnw3qUvo6Gkm",
  "key3": "4zEbjEjqQU5ph2wPxxJzPxewpkeBHQNknePhbaLeSFyKpX3fhaToZn4p1d7ZqSh742jXMLPVd5sBwFm1H4gW79NX",
  "key4": "2kHDqgbYZKjR7XYDKfF6FS2a2ea2f12uHxwNiriiLviHnogfT5yswhRxfQtLATxHxEy6aNCh9hSLKNTu831YiSJ5",
  "key5": "45jy4fGQQMfc1WUvm9m2btjVzHhq8JiRfm5g7kNdsv4ARsUHhvMDprofW7u1LKELWzk5AqF91JPomZkeJeRBLCYP",
  "key6": "4WeRBDVKU6rwatM5fdMoGA8LDFFzBizvLVX2HJUYLcH1JvQzBGNuaBRhRBvBpwbp53f9ELG197966TjBVPHWuz7Y",
  "key7": "JCFtrjj5YNwthzNY8TP9CyA9YACTTwzJkfVk55rHWYG4GYbFVZsBry3KQUWMwejbg2bnU7E5SB9SPWM28ZGE3RB",
  "key8": "3XwMsNoZhoo2uqxUSLgUAnFxUHtjKkRMjVYVyu83UtXtb7DtakMSLFPaoqtvMCq7TH53y4u6Gki87DaLuJb2Ziy3",
  "key9": "5hnSkJwoGEc9Zrc2zxnFA2m7yvmzXciMyHqzkp6wMKfnkFkznzQeJpriYfwHpcuxygbHXq8SmfLGETi6nhVAs5zH",
  "key10": "2oXP3qF9UJtwhdbHyNANLR7gQBi2xXpavC829P6Ebup5oUb7mtzxFJg4Ks7mTu1fddg3AjiXix6tRFFnnRZd8mXo",
  "key11": "5mbDfuBVVtubr71kMsBaTrKdgwQ2ZvKTkixzCaDriaWtGEtXAGu5GHWVqpTSL6bpeZqwjnmMbTmKgw538ZWEUApM",
  "key12": "5yEzVUUFtYQ6XsakC3B67FDUpG7rSR3EdrohgtJLHM1kp13DtzcQ9hJjzfJKXzDZdPnGRspj2L6JPxmmibFGKgeC",
  "key13": "5TApY64ZHx49J4GtRUW1PBUXS2g1B4GQhkoJi6JRQXvoG1jv1DJnym4S8BzyPQrRFVM3gb4vrV49jST5feMEEy55",
  "key14": "4Ux5G5ieKU8ejn32gpTApKi3oyymMGVKSrmQozj6LCFoTjCfSvn8s6gLWqzg3vKmUMNd23gXT4j9NPWDYaUsswkY",
  "key15": "42c2VAXUMufLHHwuMv6ZKQQZXy2s5YYKqZqcjNL1km4RBFBo3JmADsDrxvwJDUuSJRSr86ZN6nFomHns43q6WJue",
  "key16": "44eivzXxzF49A2xMCqDh9y7B2pbcihT9eWn7uGht96GBLETGxZcWy3rcgmC3G1SURfmaK7Qzg2hHf97FGkZi9yP5",
  "key17": "35RpA3FTFyQZADRM9BQdfV3coJsn46LnpxC6nvXrEumt3kiz3fAK25r3dxXeCzDN5Sy7uBn1APD2qHGodfFF8tRe",
  "key18": "2rfo3xc2kqASENhX9i8mmXmuKFNCvHYwwRT7SpSAAuetRiyhEEbXXCzEo1JowBCLw9Zyesp33yivkD6iC3fn22q9",
  "key19": "54eMRKhzTZAh2AQfv3aWtZuLd9FQAQyiesbaHWJbCn7Jx7bhVFUYrNsWQrsbf55QrmzZnW7KMskKQf9n3ALHvFfd",
  "key20": "4M4rdPyRJLDGGkfTtsm67fKeXXUpboR9wq8Y76BHBrDWhCbNTF5EqkW7obPskekYstgn8XcJTs4NP8diPCb7ruUb",
  "key21": "2yg4d7wnfATd4rTs89TVQim9G2yFUJDZKifokcwje5gGfw6orqdY7cWqSU9dM7km9DvpZ9rtreQ8R2hLQrc7oJaf",
  "key22": "4GpVD5mGGs3qT75EHZmpNCL4PTYmg7wdcCsWwzgYiVTobJ4sEsFNghuXfgLKSThbcf4Lhug9x1gmwzu3WaMYbtaP",
  "key23": "Pi4UAZ61QuFYUKeZeuVms5ZKevNrD4D4H3xRJbXi1zw1vqj7T2QEQabUtefZP1N9g5Mi4gCsnCWvYw8wupQirfz",
  "key24": "3B7YFAtfNHDLQREBWvPaYpQDfZpv91DmGYyNsVdsh3Zi42hcvdAMtMG5HCoFku98ShrvAjGDvGbXfiD7h6h7T2Jj"
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
