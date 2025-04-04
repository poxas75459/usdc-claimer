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
    "5WsUk6BdmDxLWMn4ZsASd9b3PcBh6zGxMCtNFS1kHLyiLi2tPw23ynK16gyw913NPPUS3bueaEqpFAU94LKmJSA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7kJgichaAwNg2YnjnkkGd7Ye3k9WVCFbTwqxX83mAcDqJDp9edKJkBkauDwFyJthKtkT8qZRcgQhdxZBSVdAvdX",
  "key1": "4X4vsFNU39GxPkUREgBqzi1g5h55Gf5mLW5XFiZbt5RE4pckhCEVinfwuaMXFB1ugdGT22n1aBfxiDXmcXmXLTEp",
  "key2": "3WJZmeHQ3EpDdr2p3ciXqe7czZZdoF3sXQvmefAgfnJaDjZbkVr6ousP7ypubEveU5gi8R7DqhVjTMHnpajmvSLG",
  "key3": "5vJQRTVPEva1bJHPiFzBieVdkj9dJMMu3QFwSBHB53KL4ZW9p8wMizxdWaXmfUao8icEfW1yZqZhdcoCbXkRVWgw",
  "key4": "4ef1jNv1ukCcxyKEVzWxf2zgrfoCQePqRYCTXGiGtmUkCrJMVRbMhPoD3M2aan4BHGK5zEyJAJH3yEToDmTaMwFd",
  "key5": "2YKp961zyAfFu2vwvKX9HrAJCbp53p3H1sEbKXt5g3YQRT2oAALGhTSR1wPmmTR7BZvfjoqpfu1X8N4ZnSJegBLi",
  "key6": "47azzjEYDJCBgc4xFDvWcNMyyAjiS4E3eMVkAZGMzFvhkt5QScfi7Ban9HiQCoVqz5paxmyGHHrxiHyhe3PXQL2W",
  "key7": "5RvGQTPBnQEWSiBEbLXovYwvemQqhKHR5WqRWdrNKiHnEnjCBHoNEDPkuQEgQmuW12TAwt9Ad2VuHgq2xMYqSiTw",
  "key8": "65ziRKtoQ4garZVpJTLubbarKPtWtMiFEsCF6kkF4X1fBdQpSfNNNrS91s2U3FGDgefspxYp2MdxfEECiU8YREPQ",
  "key9": "27hdtLF1VZRxNhZj4meDSr9x2zHCcduPHZ75RJVrWZH9sXLdQimKFpsAEf9jKApuBBcgFy2f6KoiGm6SDHLLxKmB",
  "key10": "45MLk7BpAoRpALxqBLfnzSRMUqMrMKQvmTa2TKK7mgKqSPAnrw9PYpyiyRn5v7F9gAHibcK8nnCwnJsgCxDSt9ts",
  "key11": "yCLiKJYgzBNpbkWbgqEM7DYBRTz3WythBawRqRrNhGDddAWu3ssQGMTxmLhzNZf4ehXmkpJpMv4RRQ5jwn4wrvu",
  "key12": "5ABFwakLNefgVsSLVb65jm3aRiRcX87GgQR4Hzo6o1xDx8C7TUswUhxufC4VE9tJXJZKjonEUJWGA5UzY86fgLQt",
  "key13": "2AczJhmgUqEPz7zTECHZRNuCvHnt7pfrWi4FMLZ9WAypg8sQYq4ocLW3eXYXPrr8NBQHW444SLn5NCkbD5qZhdt3",
  "key14": "2jR8egRGPkgZiLwu45dSLUMCPszVKSEFwVU7jT7LARzPwE6i41diXQ8uJs98UdcijanRx7PmjBAiHHMxeizrEeFK",
  "key15": "jXcsYdBD49Xue7SmD8AafXFjUMqLYAC2aQqvF8mxrHJAGin5RrhsRUD2N5oPhpSV4nAQbtE1iXxNAbEgNLRBWy4",
  "key16": "NZVi8L5pS9eY4MG8T3crNYsx5Z9FXYnaZwsg8m5FwcV2A4223kfxvvnf6oUAQfpB2Mv8e4wCcyWqT6P1uC8Kx69",
  "key17": "5xPop7KWv2K3oJwNi1ggzr7bFfksQHoVH238nk3ykYknqaKSkXW8FZeYP58XtEXKigSe8wQn7haDpLh4EihWZTWc",
  "key18": "5VVTn5jyPhEM4ETgyLQ2LrZP2N1ET5efdANMzRsFosq9TRn6sM9ggUg6b3pextpczCmY5GTNWscbocrHXPxSsCQE",
  "key19": "3VVY6Tj1GmZkipz2L9qYVQNJkJE8DiPecfVDw6E7Qm33ziaX3J8v3aX5X2eqWXcJn8hQusMqtmCV1peLSntK79ta",
  "key20": "3rWTznMX1ZwyDzUBPcuEN1A8LJZhBQUUxk7DHhoiQ8RDuD4eBxzRbLCuCa3mZZP8MBVfNBZsUHgKcAh9GFBaZDiz",
  "key21": "4pRdXpF8GiFBp2584EKH5qJoqWi9smXVb8eZtDA7aDHSH9qnJsWKL4SYYxJPt81y3C531WxBKbvi3yfTrJJ6TbX6",
  "key22": "wYpF183FYcRFp192zHfLRMFwm8dKRjtcnKiQMT3y16vT5hJ97HC99TAX9W54X61LoNwRGdvfa5MUVb1RoQmVazR",
  "key23": "3xtSmc3zjw5NpW1xphe4bcxTKLmdLn3qznwr27nFFYw8jPejcwmjo9ffQ6usDVf1yMouYKzTymurK7NTgGab7ZK5",
  "key24": "5bcRvfb5TmdhsUXUstnCdbRmh8VPN9vP64BnheYieYhDiytppWyAfccdxpwEZURqbyf6H9bjfVZwLNaJ5hNRjz4G",
  "key25": "2S849oCAkUXNRPpyf7QVE3eQL9DdUm3K1doYZVKsczqHYiu2FK9FwW8G9LLitS8VYyXZp8Kammd2DJapQrvVAs55",
  "key26": "4XZC3orZBmay5UrSRFb3icUV6E4YqCpP5kiuvvQmnLvCE7osqJdWrorf8TAmYYg1HRP7xUee1qBvKYRLMSq1F3wH",
  "key27": "35uV3hpZ9eohX975EPzgdk1U7CkSdDm1Wu62sAXZsz1Ssa2Nh9f6khXQBho8DGswKf1MFEMZpStsgJ6n7djhNjXu",
  "key28": "48QvN87onAD6z4RdDE6knLZgcjzAWhYb37QjNdQkDueGpS2JkfbjfYgZk9QibpARwPnQZY1sWf717k7oj73SS3J8",
  "key29": "5nALgvo3bQQD1xb97E7xWTc4bz3E5fuqG7C31WZYLKS3ALV7TbynsjTDN8aqpw3EhhLKvfYbggmuqMquPgDmAveJ"
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
