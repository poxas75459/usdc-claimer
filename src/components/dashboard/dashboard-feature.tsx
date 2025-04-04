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
    "2KMesnLTZybJ5zRSMXVvAxfFrKcCVpBQuDwz5X1y9x7zykMHoQs5ymSfVuXEhYJwh1nNVDBK1EatXkEyg7QY432W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xi7jatRm9CXmtspZ1Mybsru93bsGNjfTogmRxRNpYpF46GTXYRorgsfpmMsCkT7KFgPyvGoHjxicaPX4KWSttNy",
  "key1": "4rKg41UZ5cRxaU8KDD1ooG4XtHRMzWGeJ5UZNUE1XQfwjhthDSuozNaFh2GhRQ5YTZXgpwCpU3KicgSpgqrKyezB",
  "key2": "4d3NxBvfFvSsTfEr95s1b57cme9on47ow7QzjSFr4CEScAi4WXrE6AYTmvVf4H9ksccEhRrvAHVRMeJBSBRAgpv2",
  "key3": "3ixyeE5ynQz3AZbZp6aEBmjmmqtodUGKEQxmyfdJQrifGHAUwMr6pLa2XuvQKSZPZAXiA8w6B3dNFTMcn7SNTQSW",
  "key4": "5BFvMZFKWrzH8jNyKS4FRjFkz6MSnu7YtU4B27kA4vXchVWzRXq4MsBnQ4U5dxv9pyCNR46JqqCfGNM32yREvr5M",
  "key5": "4b4XYdtrQEuhmS793Raog4TpkGFoUyq1aNrXaAwXEw3EdvUKaEFMDLD9cutt4oSbXnnszLkuVexCaMeqUDwVr8dT",
  "key6": "4ZYLCL6WKXbvzxWMwaFxvuEvLUeCpBQaEaf9FxuvycrYDF3R6zmBPzz9hCFwe4o4wTN1LFv2cvmm2y4VA6cekdsg",
  "key7": "96q6txpLU3xPGUQV1utaEoMkZnCkDqQmWmsd6AMDhfGj5Cwo6hphxnvnGk8Ee3b7PGpEcxWfPo4XVcbpYCwFx2u",
  "key8": "3uu8vFcJFqMihBvvLcCnisw2pVVMzrxEVkUwaGaSuzPTuZtCKUa7w6zmyLRQmqoLgYZ4K2efK1jBrLTwbHfAmMtC",
  "key9": "5ZjZaN24QZd6YsMokiYWpZtYnRvUZ8B1jSMt8qC1izyZVutTYhtb64LBju3byarTc9ZvtLozB6dXVXfQbCgJ5FpS",
  "key10": "3kGqLG7VVzyrSX1zcuazrPV9zUb9tLoxhBQjh7hXeeoomyn9Yhi2c6JRmZzJ5uenMhqpQJ2S9h8k2zZDbs2mmoek",
  "key11": "2Wct3NKAme29krFxfqJmfsvU2xBMpoUxXiy8yCZ1EBxirwimdXzbcLke4jtprERSVNKoBXZ7TA8rY13yk2as8Qov",
  "key12": "3C2mupgHBY435bsEeytokDmUwdi5tCgW1CPE3nA5qJtYuGj7BfM5VMQ7HWRBX4Q1TJbZPPsvZQUZ97s8Wpg3Jjcr",
  "key13": "3RS2KnWJFungdHY9mv8j6tdNn1u9CezGuhBHqrWBHnguy5v23t17PQKgPY3ocsP9Lys1QpWiRdXoY61SaeDAVbGL",
  "key14": "2XtNJ5HujBQMNRHbtSybH5R9gSgwA9NZszvheTBnj2H14B1TFfjME43YKLNsVfmYjh2zn1yz6F5XyeJUXYTdiohH",
  "key15": "499Nma9hRGJoAPPxkpcK9qAeEsfmYv4EKPJ3wg4ozcwwz2cUT9f5R8pNsfG31qFH99HFca3maYR6SahXdqfS6fgo",
  "key16": "5nHKS9ZydpMx6c3o1dG4jgn9R1QEFmagBSnAvz8hfmbdwVxgWN7tRLjt1aDwWJXLtGpMTC2zLu2bYqYBEj1FbDTT",
  "key17": "4XwHa9N9iHcQWAhq64rYiDeJfWw8yAJkx5X8N2RQa8mxqq5BSpoC3rFzwZF2jmU96EFsQQ3u7RoUKQdxgjL4T57y",
  "key18": "5R9b48eShvGqFuTuw5z6FQsTbdzsPU8qy8VxSa7CakEZo5kQ3wNTnweaVT5Q9js3Xo7dY8xg5aRyj34XVA4ojENT",
  "key19": "3aZmrDzqZARbsH3oBxaKhzqMU2BBSmJ31SA51eMUjZ6VDumDcv7WZsvhtomcyN7puUiEWo6svWQC75kYr8cxMxsH",
  "key20": "iiv6WMt4S8a2zsFsyZqknTeeQfPNTQXgmidwFZXkPcVnUkW1WemAPmVSRtMWCdba52jm7t8CCyGUueHb9Z1vGpM",
  "key21": "gaKVcWWcGvjgeK3CP2rc336gfGm1vpeqPwHKCHoj9cTFkMGcbqXBTFp7gtk4bJN1co5GSF1Bz42gzD2dPDVHckJ",
  "key22": "HNTzDK7bsfRhxtZ85JjmFX2wF9iegaeCWWAR5AoxCTw9kj2JVVuUByUhhrUPevh87bAy8sRdirteSTckLyyQiS8",
  "key23": "8am9ZMpBmrA8EDipEPBJT2MJhLN6wsETN4vvk63DBvvtNhyTUc8atAqMMERF5dJmnkAnTAcvmGtSLfWmLeCY3R6",
  "key24": "5YAvFXvpTMs7fKtxpBHbgXu6osgF5nrd3c2PY6A77D5Xb5oSZ6p8ZVdiEMDL8JYEYSg8p5Cn8i9G5YaTMmAgRivJ"
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
