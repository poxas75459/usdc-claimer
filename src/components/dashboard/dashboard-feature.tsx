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
    "21isPm9ipwbYDfDj2kicr5RJtBi5epk9MAw4TZ4mCcqsqzjsr6Li573RW25ADrswzjWJExXZSCC7rdA19cj37XjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oSQnvhj5xjVbVVLZqZFSvz6MgRLognoqVUCQ4mzDBQ224DjbJRo1qWjKNi5YTxNg2FCQYtGq7ev6yBS3tbFVYbS",
  "key1": "2kYyUWd5TaqmpFyJnQQa2FGYcbCcKwwGnSZ8rJdSqZMEQZao3UytkA28aMbEPdkmLxykZ1FrrBATxnKVMF5Dx6eA",
  "key2": "sS76HJyf9WJuAtK6N3sycR77nCXcRS2fXNm4p4Ny81hzoCUHDpAGAFkRtdj2TMP1iv3LrUbKVZa7oFHEVNKpZoy",
  "key3": "3zyLURkGjkFkEB2aj2N1t3rYPjJr68a7iePrQJjEKpMCPiJPAheQyqvQmhyMT5KvuN2ny2BcEhd1LhFBCyAT7qqD",
  "key4": "4uCyc9wHqfU9HmR2MuomeH79d6q5BZ5W27wKF6dXdPvdaNXyjeDtHugJ1nfg1mDGHbEqzjfhTysZHhkHhMNHs9ZU",
  "key5": "v51232T5CMzfRer7QpR7anAoAhuLLL3WsY7vq7tYJeWTpts9c5AADEuPBPo3Lg8xf8cb7DDYEo9gkbsvEjkGsJ6",
  "key6": "2kzCYSnP7KqDeezD5L4MNS3DkUTuX3dFLcDnV5pbzcmpTrZGn9dFW8EzGhYRZQJbDcR6TwAx7F3gCwdjq1dYm7p4",
  "key7": "CX8PrMohWvd94X57yGUaSjYRRQBXnnfFdo8XMxfoXu8skKDuJESdst5dqssxhMgA8arZ6toQtYJdLRNG7t1Cqui",
  "key8": "E8SRUegUb7gwAN7bwbd7tAjy9BLTiPbC8tVtbeqhC1n4Zrb1KnyuBiAP3hGJseKSJi3rsCUUzjVtMH4uoZaeycq",
  "key9": "3h4HD7mKewkzF35K3P47cpN85ZAbDYdnbPRZgCpvMeyWcup1K8zsNz7nP5bXeUA3qUWbZPfXtRy9tYzegyoPGynq",
  "key10": "31ZsZWRCnvGR4vZajBP7xDkiTG7LWiQhFiCowKTk9AwcCQ61R2zxwWEsTDQ8UQ8VnqZ4ZDbsEqcniXgQLw49J936",
  "key11": "2mchdVma1sMfKGPkwW7rda8uT7WS8D2h6qFSMVrTQCAkiExC8oMqcApBHRMitj9RVrQiniW5t7mTT9TA7xvQrCLb",
  "key12": "5jaiSURGvK2KxkfhbevCFgAsWdmBjvxjgTxfRS7PULWNTcyxs6Nzhk3tJXsm1CivKqqSYMwSnGLpzEhAShEKx5Zm",
  "key13": "2a1WxpHtrYQHeyxfpWTQzcyTTsScAAEF4QSrFfgEUfMRcgvFCKJimEK5i8mEoB53vRrzptRnPHJkSEGSHfP1Tdc8",
  "key14": "38vVa1466RKSL2qFvcQ7Ytb6ywinkhQ1RFV8wb6vt6qe7btZfV1F3kM8yeoVmSYoY8xjXD8fdxcCJVjxjaWvJyHn",
  "key15": "4puv84EDC4HNqGwkdd4M2h956Yhd9gc9oMkHqfgWaCACgEhFaPqzBkTcGCU4vE8mAjn9bCptJmCGUSHeAqVNsitr",
  "key16": "QvTSWbbLqLAUMXXWEjLXxCeyar9Q5AccfDDq1VSBFmHKwA7upXdz89DqRZrw28QyKv2YSsYYZkPNFF4BJvFtRtw",
  "key17": "4zxumw2NbXGnXQ7U7CkWLVk3ncJfaZfFYQzpPTpTxoSdF5iLyULt1MW1sDzgHYeZop63y2xyWgCTQzQ3CG2SXA79",
  "key18": "4Y7QpjJEZaCHrYD7V9nh2FH6iGbsq4TpeyMmngqhw1jiymZASrSrvvNhd78Z36h2n9DyVFHqriMyZPZuzZnu3o6q",
  "key19": "4BjAh4TgtGEWMf4eZniQBgbrTww24TpisCnH5wG2Acu18q6nRxzf4x7K6pUZhPMKo8xg1xQCa9Dg5oXMgDF3FG2K",
  "key20": "89jLf1MtoEGGvJ9odaDWUD37k3JuDcdhbDHeaTKL9ahrsHhFne8fg8wySa5afLPJKTQgLFEiBEfdYB188vwgUXn",
  "key21": "2v3DRqD3MSd4xVuh62egbchFPTt4bUWHrsjw9LiUefpWDEpfzYQQPKLJJg1iP2g7h5MGYnn33kLebCMqPk9X1B1q",
  "key22": "hfPtx5EPj4DmsrTUSNmEdNpSteCLeoE7fDsRjfmTHr5TkPbWt4wfrrFtQGkHNycp5EKiZQuZ9fyvW5GUuu41hJW",
  "key23": "2p4yNG33RW1j6DLjRH8e1vhTBftTuQ9KuCYuSj3E3dUReFRhDgQJLuwsrhCrun4oBHzdYGPNXL6TM4fGyWBbQi6x",
  "key24": "mvov6JXgRkedaY7qhTtE6R1utSmrqSx9NEuH8ohND3myybQTy3GsY5hcWANfdFxCxt945SWFzKQPLzJaA7JDdZg",
  "key25": "2Zs3z1YnwTV7moPG7X8D7hZByuiU9Nu2m9DXouK3rak28VimbdZ8JBsFQY86rdmxEPWz7VPXeZheeJ5GPuwBPUfe",
  "key26": "4XWdAczZvy4LPNeCPkdrWUt5DRgcp9YMNuRiCTFbSMDDPasWEeyRpwaSUkm8uGPN3LvJyrLj9gP8aeLnhBM4x7kE",
  "key27": "3JuTpM1yLAmv7FpQzrk7PrrCk2rJ54WK6s4eADMiDaiJVvBqFcLRnDGFjK61vHXriw3TsKpuXMqtS6p4Gwk7mht8",
  "key28": "4sWXsicwsURdN6W2BdDpMEYQXAwmW7XN6wZtBocX7dJ1N5Tqgb9VnmivWU4Pd5aux1WvKRHMAFjjGkiDVVKy3iZ7",
  "key29": "23vgPfottFprmNRn8W7YsCSgkphvgKvtKeghj3YB5p5t6q5VK8i3eK2GtfDdEbq7pKmUd2iJhsb5hfkYxHf3xrZ1",
  "key30": "4EbeviUuBzGkdosspTBJKHnALgeasXYUWZxKDjtACEGe3wbak6mna8mSSQ9RY2rNvYdGZu7ZWfWrjUWBnE9xBcL",
  "key31": "5CH1BmKbcvkfUyr5ttVicrD3rKCAYvB3v9KKEjqcHMt64iXaFLreHRBfAfrboCwvuwnK4opLkU56kiAMUG1sgKsu",
  "key32": "64i27UyHuEw8aBuqN1Z2QWce5aJ9i684oPgfKimenc5UySpXhHBV99XbJyVXcNBFJciNmBzLqZSgcn3RGB94WhNx"
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
