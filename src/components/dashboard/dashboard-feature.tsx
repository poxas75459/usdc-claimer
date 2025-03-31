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
    "2RjJ8JZd4tDuCfUu1UGm5VfkRHM715g14MW4UGbst5KHvcnyAQua6mL7wpPDRTP52MnF9Pu5PnkQFmRuasoV7eCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zGreiDF7KKX2UtLtdc5oSWuZ9PB6TmNyT2a7rH9V9X4RWupnXd9Xsc2qZ2XrXNVxLf9dpkC12oT9FxfgastjzsS",
  "key1": "5kK5hY8FudHwXtWvwepb4JvN8DnAyuqeyhAfYzDXgjAqQocBrxse8ncnMQTAYUjbKGcdudKW6qJWt2Xo9DgEeKKc",
  "key2": "5iEhL5UDnG5Yanz6XAQAQhYWE91Trc2qyUAcuPfq3mNGrzApiBkTmsYf5RCyVdzwRxKp4Wg74Eg1JmJPPkFHQc8B",
  "key3": "2Wtr6zxgaVUphNAKBaSrp8HZBgUxvNq5xTWzAvjjUX1VPiTds757KaUByyBhn7yNNYNtU5TX8CXyToc9H1k2jLfD",
  "key4": "4BCBRSjd3pMtZD7qxzjc7QEhksJBbF9A3i9LgF8tkGjQw2LJsbECDPiEimsqg8xj9cjHRXkLwKPVcCcGqdoTzY8a",
  "key5": "58o8sBLmSV4g3MRwKcNftQ5o2ADvWdJvXfmfGBbVs2sTvYWEpKbs7435BdjU3LHuTK3qhXrkxdKXs3ZPyz1QDT45",
  "key6": "MovW67ZspLKHyQwCb8Hr7ak9H9pQ8rJ9MaKsP5K3PmrNniwT5H4SkJVXD5SgyHUZPkpE5boVg3Kg4sVWmRBuqYq",
  "key7": "2Rizi7ooacxSc5rER1PPPb5d5ALD3ZfgUGkqMD8rMY2FsLMMkQNqJZaUzLR4QE7uu61Mg4CqeFSVUH8w8xHEtwck",
  "key8": "5o3sE1t4skrjowTvyRun6Wf4iKe6JLsQti1H7fgjFYk4LFWAjNVQ97jtdZTUhM9aXo5EsEaRcnjD6Rv8ytb2noz7",
  "key9": "5PLzdF45uzpZ4XYuQow8c7eKEd9aJw1MVyRqqQ3ZpJnpD6T7kvAu7d3XWV6Nfrbua1uL58nQY6oU1E6coovUhgth",
  "key10": "61yVB3AMYX3oZuzmiQNnqMYs3jHKFZEX1MbkWwFbZjeZyYcVm9r6b8oUHgHBpg59uvYJUNcYrsPh7sf4YyuxR3rU",
  "key11": "B3MbBtum9JSf5VpZzhSfHpNmDTj1CJY9nEczdNxYi2fBVZqybrbYG1b8MnW4c7FNXP8fLnF68ghNEecQ1YV7m5N",
  "key12": "31zm9vWGwy5uCY1yNFQhdsvUbXuk6p98AUU6tpCrk7FckopL6U7VKemFfXQoQ8wLeknhqMbYPj3uE5UJLuiQYz7n",
  "key13": "25i2reKoZP8qB8mX6wbd7KA8SpJhRvggbQpmkxHsSa7DsSjhVAPBMW5NL2cPKnVzPPVmjgsGJdiEa2YNf8rZL2a9",
  "key14": "63tkQu6ToS1nNzfSioNssmRCtXVsoKhW4S6cMrcMNbBVtGZqoYABfKgv6gGJJocQVedPfRxEmpAX5Ce3XJcdrfwp",
  "key15": "AHzzoorrDiPKFhiKXMeZTw3xMSQyJoDituFLU9fEbQ38gEFX4Nh1PqmyrqkuriFgc3oeBcwN6bLc1XSDQgwTen5",
  "key16": "rcm7UdwLrMXAuD43JNHxvYFixnAVdgKzu71MMLDJRxwdCYRy1KrtdV7df3yBGq1tgLaxjFGvHFJWib9gjBANHvu",
  "key17": "jrYAx5JL2pcam9jdnGc6Dwyv4LeNEQMJVetMWxwgMf58g69NS94i3sKjskR7R9pZXg4uknoq2rG1ayHEdsmj6Lj",
  "key18": "44tTWJ3XgiCvsxMzroLufez7EbWktiu9EVpRUHP5bY8vJcUCZrLgndLn133ecj3rBk1buouP1FQEZdDbLwxrjCoa",
  "key19": "3Fpy1XmvbsTSnTBNoUJvd2oDjUJ9nxBodjVu1Mx7XjpPknSsAermWz9cQKyVhfzgnWnke9ucpu8DUFaUTe5hs4fh",
  "key20": "2thUbiKeUUXt7khKzFN7hMVCHRmAEAH42jmN8uHVgjTqyStfNoFz1XzR6vRUF9mbYkQG4YMdwU1YmpMvUPMEqhf6",
  "key21": "2LMHiU6ZAwin4duX61opvt866bYQnY9Z3w2XR8GUhgxdaYZbfnkt446M7zuAEhwyQvZ4ie4kSRa8z2fkSodqvqk6",
  "key22": "Ze3jurfZnf5wTyo7bVWTYwoAY5WWsKRhAcBH2TfDJTerNL8NERLUTLpNXVUhWEfyDa5rjHkj7ggZu4H4KMtrGp9",
  "key23": "QhBE7xVrQdqGpznU2mA6wc8ip5C5N7JdtX2B9XRwmJvohuYvGZJ51c94mhwNGPZ9XqRChyoiKYu9GryMrqDgmWk",
  "key24": "38YpbtTetK7J7FqJBmomVymvRs5w6in1HYAbpMNEQarz8VXESzwKmyUfFhXBXmRoiafJUtYRVRWucnHFKSjvagd9",
  "key25": "4shPSGhfW3FRSxPiPTjSMWspnC3JZ5jo78KV2Am3SkqoUy7Toia6XYaMYc5BXaaouBsoBKJskoLtGySGRJ7HsLFc",
  "key26": "5LpzjctyAwDB4Xk2avPnMdN9cjrkpB7hpiveKS6NpB3LMphnbD4jGX9pzSi2Zf5ZUc2xeBLu4mBQH8iSRTc7PUe",
  "key27": "2cv61xvtmMgtr29kRi3Rx515BZJyqJgacEwCad3TbVETWiAHrW8VwXGhMY4R37dLJY3nQEf7kS5VoU7Xvbh1i2n1",
  "key28": "3AQvFYaWPpKXziCKAx3brxfN8xWDW8SUpWWMDgupE22szTWQzzzNqqDFcaHTLna8hmhq83YamyNdfTUzLVPgopfB",
  "key29": "pvmsviuac3pnVg8jgpggMm1bQj7JNGgcHc31KU5ZMwZpCxxKyDQW8iyGjcqfnGHfqjck2ZgTBvtPRrwJm9KpVtX",
  "key30": "57fQ6qZZgppZLfYu3TRnJsH1EBfGB2Frzt2ShnaQu9ENVy5Z5oqRyqxLMGzZNTqCEntEKT2oU8EFhETJMT1biPy8",
  "key31": "jFFAtRvbcXYpENk37Ck6MFmjzxUj1AM9NmymyYzA5rLTxgra9RbJ8hC76roucLR8ke7GqB9u5jNXeoYpfo2XPY5",
  "key32": "2bAv6iU7SgUdMVQW3jbjZn7AXxNuhzZSQNjpvTysQFGbxjmdAFKvqxgnxRbUjQB7RPyFS5ovvz2NDwj1PhD4weio",
  "key33": "VMwYGGw3pQNXLjcBU2tMt7yLyZtE2fkBMRDLnw2nshxX85eQie8a7uGHsvf8ciqkdUnnjVUR55TKMDNKf76sL8K"
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
