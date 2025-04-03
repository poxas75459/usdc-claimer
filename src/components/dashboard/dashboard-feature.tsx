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
    "5MWFfTkZ7nsBB9mjYndoujmsWbZVDy2TKfEgzYDt5SJnfQ58KUDtGWKMNnqtXcEBRy4W9GWK2LeadXzzRMHzyKXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35w9ddsGY3Bjqkv6kcQrJfW3hAYPYvbhqX3UKVijQgJNzoMZQHFpU9pSXCDNXkGMXvPySBqcF1scbZZp6p6k17f4",
  "key1": "2FdGbtrr2dFLnDt7oJnZXn8WE4t2s2KxFzSvQH6sB9yjzFL5bDYcP2e9zh4C6bZexoUVVfjf6P681fauPL8YdGbm",
  "key2": "2XnJ9XLqtRuhoSZjToxG7dnd5tGTcSYgHE8tmuh8F428gZx1tZdNKWzZ4W9Qpdsb2iSbKfsHt68SwZgj7yTae9Zu",
  "key3": "2nCSesbtGRx8npj2nEojEe7vaBkm9jd7sm7wVyMAC68vNV4Br2kviH6d9y8H9neUDenj7xiRq44huM3eUo1Lmwbz",
  "key4": "wv5UU9SsZxu29NvUnJ7L45D5dAmzZ7ej6LF4Fun3taYVop8obGtpGG3pykZBg9RuS1RDJ3BsAntzSzzns4WFHQ8",
  "key5": "3x9sMRaJmmzG2vEtxQaFMhkey1aKNMDoU8PuEW9RHsbbrdCJeQ9iUVoC2YF1e3JcvQh4NHw4sUsWv4g6yHxXBPPY",
  "key6": "4yDuFq9G8LQGSTbwCRrBQSh2mJALibcSCUXnwGexekgbDqrPaHHczcayGkUXv8rvFeBPGDZhkhrdKsmri44s2PsD",
  "key7": "66kG5ABdfdDZKzQNp9RssbNzwStexyD4eRhNuBmQ7i2rC9dhSafBY2rAsk2pX98gKvjXVXbkze6zsUyw1ctAZAJ1",
  "key8": "2TBkRQLSASy5cG2YRkeVPSt9ZNKHGxvHZY8pLpEcQ7Pcaor5UgMDUrPF9Hn945y6SJd58Paaqn4huvU6UKeAKgT9",
  "key9": "59ZG6o8LCYNemo6STFfhKF4mRsQDKhcDJjLX8CzEj43JNFzxPi24eY49VYZ31U2ZTiopPqnd8egqa1LFLbPRZ1Gi",
  "key10": "W6otA1oPqRmaxTfSvLJERnT6ZvnH3CW1Xuv3rDJDwbhQhwC83UxTEQwAwSYTPuE5wwS49qQW5uDjs47VBXSgJ3p",
  "key11": "4fzQSBCWCPeQdGeH6EnTv47nS67Y1Z6UGDiLLdxRzgGD5mTrdqgGjSJSajdEJPnN8JTrfNZw7L4iFRRDEaJZNhj2",
  "key12": "5Q98n2uedmp2P7BMEGYSZ1oYujmcr82nf9FDcS3xqWBcndAVj4TdA66nePZwsWAZMFfYMFPBhUXJe2Aa78tAzpiD",
  "key13": "4eKp1d7e66bWFPDKsGuzMGap64gAnwtK1HkuqkLqXU7UzsmWpY1bn1d5rRYvJCbEfabyLvXri1Md7rKYNQ71aWEp",
  "key14": "2UAMfn1JjU1AVv2fn6pbPevcf8znQvKwv6y5TjEgrKVCGZWYu2gQSCsnRfKY78aTNRpaDN3fgGZPFgaRieYfjgbk",
  "key15": "47UvbVFNwaBSxQjVztr97JiuuwVW3h7zqF7dTx9g7ZcmgNxJcWdfyq6s41YjyPaRUoSaHTto838vNTTyEUwxghDW",
  "key16": "3TPE4RLcWJJTEMgdbbNoeTUVvbK4G8VP6sKSnaXQjUfiJ5vvgfAB41etJ6maAFGVspRwuXXUJGdz27yDyPtrjoi",
  "key17": "2UefCKViebuWK6isuuD5Dq4t3qdx5WWivAoURF39NXh9H3UELsbZA7Cf2VBweqFp3KTg5RTiy4fZ1U4uJHoPh5VC",
  "key18": "5YquoRGzYpN3jQpPFgadg6QLvWWxAei9gP6bvPD4P53LivACLmKcPPeixydDiQvortEhGHEGdk2Lymi3AsyBB9p8",
  "key19": "5JcH3Pxmx8StZjQPUMn8z7eCbQK2qEcrk9ax9suuND4FvfpizxAqBAXEzzhLUJo7wqVwGtRvyyUq87bMdKAh4aJZ",
  "key20": "4oJtx5NxtEcifDVEERQUFGiK3uu11gfXeqikAVfZT8ZMw58L2ax5iPWUhqxii3XuDEgukgTfwrcCwVWtK5uSBLMp",
  "key21": "3TPXEESXiAWfFnPjHhF8ueEKyZC7ssJe5jxRQH2bsKXgFZaUcyCuaSzbxhvhzuWADVt6Jew7ZB17TsLfkJwZ2AQe",
  "key22": "4379LUo2Byo7t2L1dfhWKzed7XvXV8MQMvNH2PZ4peGHHqapFZit5Nm4fUrAGmjgUBnuRo8n6E6rATgzVYRCqABe",
  "key23": "3rpgjdBKHfFzi6LSWQGJvgUAHMEcC6eH1Vw1AZvBX2MY4AiJixVviiCSxxQXd22sq4QnUQocAQHHEmKzqiNam6oE",
  "key24": "UUB5BsWAHL1s4wUPqefLfHDScskfJNtE5bLb33PZNX7pGg32HaPoWnyStqaKdio1Szr8hwvLzSh7JxTHirzV6LF",
  "key25": "4bXhoB4Qae8BZFcW4xXWwGDVBLwMfzpfwSc8Ts1fkvwfK22uj4UhHJFd1EsayG2beZeYfDXAmf3Kqw6THdrPqRkh",
  "key26": "2X1mTy2Fb7YaWTLyrbM1PBJifmb2qAmBWJAMXP6WWmYYKWLSHer939zZ1cKLpxkZfXTLN9VJc16wUkeQQeLDusia",
  "key27": "3L3HMDbXyKsNpfBBFn6LARggpAPnefuKNQHZRNaYLDgjSzB3qijzjsWv6GaAevkGoTVWo2ND9Wb7FBL3RobDmBeP",
  "key28": "32E5v412EHQcRcZKyR7oWXAQSbfex4P8gukvkoQeNYpt9DDFRpHHtyKH7HfVBATwB6eLbm3s6iU1eSHedPSWaWGP",
  "key29": "Y396pDA8yk7xcHMfAdtZtug3HnkthgsHBEh1qbCREWekwfbVWSiJd1w5F8ixpm7chZwF3ihnBZtkSN57VZcDyD8",
  "key30": "FGTFVwCRJuF7Znhy1rcv53Ven14bxhZ8tHvpxDpKbZaZxMK1n784kBdib2huxeqi3RbQEucKB1sRMxLkPP6KwhK",
  "key31": "3m3QVHzD5RPLS4jXwxBhz7MuU8STUCG31YxkHZkpF6gVRVaWFa2hN5PMTSk8AehVUw34j8NJfVQkgk932PB3S1jQ",
  "key32": "4A7M4zBpgLfzKyGurYjmadBcWewx5uf9WYhpFUsSo2XE6TaPHaL3EkTvgYPAkhsYMrr3Jr2tGcSLnzn4oRBrVsuu"
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
