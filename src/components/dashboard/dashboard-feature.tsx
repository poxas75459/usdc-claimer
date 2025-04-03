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
    "FVPHp4hZoKT2eWuYpdE1eWTUvHjcVrdeGu7cENPm6rg6Ctjn4biPVk4fxw39GCx4FzDvBdZ12wVrz3TG9KVc1JH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y9BJeTx9epsdubCxYf8eEwUHQVKaMNrs1c2Q3KuRPNcjKQyjpFoXi5YEKrQUKqcKQB9ZGHUsRmCGgAF77AKtRhD",
  "key1": "5tTXGD3KPcSZNjmWa9qhgncYCpvGJozDqwzaku57ViXyrM2Pcy9QYLg5XEpnHU3cUHR5ZkUFBymvjYPjjEfgjARu",
  "key2": "TUZzdXS5oCo286gtBkUEpnkTJSLKMkDHMD7rWY3hJ81CawTcepQaDqWdfZVpRagqysPEhtyyLt57Mpjsx7ZgYDL",
  "key3": "2WuiaqxCuMrieUbmzmZ8koCdWDi7VGmsZsm3vouGbGWaF81Yh4RYj9zDtmiBHjm2rPa2N3e76wq5fnmDoqB8xJe4",
  "key4": "5gVEwFAbV3ZeR7WqxYtCMiH316Yi9Y2UcXgsoegpWaVB7WqmT67cuweYqTS8uyRzzXmWcbcGDDxt5T1CHzyBL97S",
  "key5": "4d2hqv4iK85dcBzdskMeBajyqaYBZbq7nWaV1t2THBNRBKkWiPNi2L3Nfr7gRZWcW1fD2a1qPTgi8fGgLztnMV6L",
  "key6": "5YMo262d5b5iL79YwXh2Nkvh4tgA8rYr2J4CFt9qG5qnZLQfVApaBqJE5nkxnqJdUFPCes2gc2sePRKXSnrGKe3j",
  "key7": "2AxgY6EGLhcC73wECQ8tmtvjNALxSyJNvt8oWjxnWwnbZ2TxiaxE7NYFNjRWW45ksAyP1atghC16wAQbwQ9xBeV3",
  "key8": "4QHPUK7Kxchkx8XWqEnzFzc8DkV99n8NUUyTwzkGG5H3Mqti8x4c3pSVKWzWYxLDALqpT8ggEZts7V77LCNX2y18",
  "key9": "4vp93J1ZWysmhjai6o6yAH7ab7bKbHYgvu3c825tuxD3wQUUd8Fh8GWCfeidMNRqYnZvJckTs4EofhCmn9WWrD52",
  "key10": "4XMQYhtd1qfwBJp6H1UfVRBvSgvd9Cd9tBcbH65Q1DYGi81NVC2zsGvBr2Ht6eA1fZqBJzd6DmLJhSmXfeLe8JAZ",
  "key11": "42K8JwcXzmNJKEd3931ZnM4S73sFCKQVHCqNowshV1nqX7sR31J6RPmPHdhpKSDFHGf7R7TEmnTVmNCGFxraBtDe",
  "key12": "Ua3wuhUB43apU1WwLuAVMPRpYm9b1rnL4dEeNR1jZTnM8eki5krnJNLWYfoGDMZiYG8nRSMLYbx97UxtFv3iQKV",
  "key13": "5UVFUaGKzojzwyw4N5o3BgyGo24gR2vk2oRNSCwvcnnwmDXyCE83YKM3X8wf3GuX5Ffnk5T5jbwd5d4USbwduG8C",
  "key14": "2mDc965AXKQd1BznGo6YUe5zJBepVq9dnxZsDhYENvsoe6jvrYG3xEg7HGdwShxmz8ZtPiU44KufcuucRQEec7vL",
  "key15": "9xvkdsvjqCmegbGve3xcz1vwNzswNvrnb3WB6EfVDKa2MS271Wg8oZo7T4oYTUiYC6ZSRDSbx86C8jpFyHEV2UW",
  "key16": "4aeykfAF1c17HxsiD6hWHbroW8rbbiAj6GJkdYbMs17PjcNXB4xLn5BCViUaV3CGQY3LLanrhHrKGpaN858FUYQe",
  "key17": "4DjXaTeFVhUxuNw8mcEQhLY33txN2DaHu4s2UchCJWUyzHyYBZ9DgWo7JrmZCrxPsxXnva1aqFWTXqf4vDaEZe7k",
  "key18": "5R85aquC1AEzJnZLNj7k865gPbz74s4kZoxd8qsa1KqyBhCCYsr8UY8izcYUbqYUGDDHPndjJC6DAud7xYBfHQNQ",
  "key19": "2cJuQRPmi6VbKsdZita4DRwdA2uVLLf1cNEmJQjNKLjtzFEnfWbGDroaguJnPAxaUvfVeZA85xzDDN2zg45xRbhk",
  "key20": "4j9pH7Ty8YDg7hvzpQ2zjKJE5GUHX3AgYw5VEVEUpnSMGS22mGkDVbn8nXGehu9NSzh7x4tLgrc8WShPvuqDruua",
  "key21": "2mXzLEgNwXX4n3qEUDYct34axYKf1zSn7MaZtMRXcdLYpjuiJovrXX1kG8jY16ncCcHNNyuL9x2HMP2U3bmtSm5f",
  "key22": "2HvLV7HyzS1ATwrEBXFvV7EHQm26KCdEuLRkFnPAehpF7B96MT4bk7dpMQ8sr9V126pXFBQipCGAjd5FMQxBFgQw",
  "key23": "xFzVPj7DueKK5w47HrkxTHd7CnzTNYgNBSrM8JmvyvTanKq5iqNASc6FrH28QJ4u5NukGhHotzSMLBmfvKZsQyc",
  "key24": "5wo8ZpZ2KcRpTmUHi6PEmVAgD91FR4Vmkb89yeg9J6pN3mE15JTMKd2K9k1wuKrYXcXjatUtydnismy2ncXQVtNK",
  "key25": "2Jz51aVqeRzxpVGt4oFL8eVr4NisXp66HGwdnXLYk5tLTythcLqCagDWZNDEtaikDPvKVk6WRTy1xh9s33CbVYDZ"
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
