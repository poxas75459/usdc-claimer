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
    "5yrdKqNR6FvnLrNzfbKo5XeQHs6Fz3XK1fPESfqzhEcuJdjcMydqUKazrcn9RTH6zooLETeobjEnfzptZx1YmisN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VYDqnEbSnCXdbiTf9FXrjni6MZgh8beTPXQQuwyc7SGKzZmBFPVuWVMbjvasjSDXbmHLh6GKD5xAYuUPT6siP9B",
  "key1": "5oibXTTPJww7iaVmNaSRdwFSD3aqEJuy19g7WSxCRnmENXWNCEBfsJWeBfbN7o3WxvkHB5KVW9ZcEQ824RisQnkW",
  "key2": "4xUT88DrGHth1sLoEGbJ7U6Mf2ShGPpQzRLAuRcCRXJ4zBGAYcuzR7S1s44W7bxALtEaWJceuG63SkeceYmrcSRH",
  "key3": "48BCVoAjWNoXm71fw33NaqogDmwcJwfu9kgU6rWKo5kAzQikxdqkfFQJyUaLiEUwLQyw143KAF1UaZsr1CxRmGNa",
  "key4": "56KRoxnwRJ75PfCRNgJjd1qKpAnKBdva1wgXZuA9S9AKt5VmjSFksW1hG7AAnJxd33XnBXj94WZuCuBcXji2Z8iZ",
  "key5": "4V7g5X2vdG6LBGePeyxHzsKi8awDDbhVQ62QqsijaPWusb8k2c3pqCZp3NwjAEdpnLQ1L1QqFeHoWEAwAg8b9WS6",
  "key6": "4zBx44VohG1J8JhAiUYdVYrdVM46EMUAGTxXsqrppxwAUpow2jqzYej7MR2paoNEUkSA5YxmCUd76o8s54dThzoR",
  "key7": "3ndRrtmJqnnDqVgmgWtoBJUqYTFFyWFBkjDhUpdzfdPVRPwLxPcZmyp7b92qvqGmmwoUP7Xw4nTKPK2zMExx1VaL",
  "key8": "3irgx2F2HJyj91mCJs8UFXYiE274mezN6PSZwrnRu9eLkr1Ni1TUHAnEAQKgRH7hQPj7EpvV2kytokySroQZVm7M",
  "key9": "4gqWQAAR1FhXoyP7oDr8EqDfLaCWzU8PpJ36vVQFLPdKwVQT8hDqkVCivkGxVQtvW98wF2ZGnExjywUhtPhTz2qB",
  "key10": "VJzUoSjPC5ivZgigkEGhCBAoJ4EsoA3pBvmLiYFqQxq3t3RcGHyarNDHxLU7cPXcxLgA7FgnGzD8JMwzkCaBvbD",
  "key11": "4szki85UPwkBqcfzeY9PUoYE7RPk3RNyjFTFEVdHGvWfueyTx57hjcQAbCKRJeGR2yUBZQDoE1NSerDwktz4Cigq",
  "key12": "2jPfFfmmC81Lmddk7mnr5m8arVv8xAuepwDXPSBpiVr2ZSFwTBJe2njFmYR8skQCjmQ9QGm6pR4m5cesYz5i2M2r",
  "key13": "dpp6pAXsYPgfqCRvBxdQq58eWSq5TQf5fypGeSc5kX7Zq5tJ4h9pSm9NhN22dNNYQVaN6TWVGBM1K3V7CS2Q49H",
  "key14": "pup4qQ8Jv6PJzbtQ9YVsyKTzRhdgWA69WoyX6fMdaYRx1rePxVkj3VA9DKukTnAm7yFggLsSgax5iXF4jfYHK5T",
  "key15": "22P39EcJUwos28Sw7TVxyy53SSHsdkyp9bQWdfuzSvEQih7B92arkHR5qB5frMUdFffaN9qDQF47j6rJvxeKRPGe",
  "key16": "2k7QhbU7LZp8uqBm7houRmTujdfrxFYukkXC8kSVPhR7fXufMeZC62MRSJyYGVkABYHyc2XoomkxLJ1Pc6Jm23bG",
  "key17": "HaLtWxBub9AWp6o5Fo6kGzhaAt2eNN7DPWzrYbFhCmarokXFGdBNEgV6ArP5gHZnNS16e286kPKvShSRzvgvMww",
  "key18": "MLqteqXEmrCBQM4AhpnncC5PCTK9ksDwh4dPn5srmQek4ZrZhho5gPsX1btZEsDm67EZQEigWNGaUgxkZBDhmfW",
  "key19": "2h3jo2xkNeNSmQMN5Ws9JXDQEns3Y14ByTAhQSBkBHB4urTmRZrAJAdULuNM54XjSCPX3GN6UfCLcSsN59iuty3T",
  "key20": "5rk4UNPCRPzHoUFiQabHuWchoQ4S8foQAbsQQVdcqA811nhXdDJKXgo3zm4WUbqi2JgycRM4a6Vtt6z3S3zsgEFq",
  "key21": "3hgjVDtsQga8q5hSeRrMATSrnZyXMoUhMwadNVe9fghGecVLSxQYnDxQCEAsLSEyrMEk4qv5tDFNZop4oQHDSggH",
  "key22": "W1xsgfzxtmfqKKhDSjXnqDz8b4EswNJPBTsvHKtCEPsrV8Y6p1YjAyzfah839584ukBTYSe8nN8fxJLi1XGm5Zh",
  "key23": "tNqv8TGD4orfHrFqt9Bh72q8rRyUfXaDu2eDPeq6Z6jTVWG85zXLt8jvCcPnL9mEYghJ7MZuPjzuYGEtJFCBzeA",
  "key24": "4DQE1LUtYcEvg1Y58CfeHtHYMZDaKeK5giwLigmpqJoU3AhcGPsFWkSjuVa3WYYV3rbWUZGGYtJPUMkh5oGuFYmy"
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
