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
    "2rhpmzqifvHFHBgiifdrFM4SHX8vU7CrQ2x76ANhDLTLR6yQwcyuFBj6hfxfHzfnTYEnfNgs7QAEgRTu9GyYYYap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mxLgxW2esngEe6FA2JBSR7r61r6dkh91TLtaZAYoUNu7Vnqi2rYzqeKbtBgjBQc1C4voSYiA7A4uBBZuGrLSMyX",
  "key1": "2eW1TFD4FW124EwBnFAr5JZTkbnrrjmgLMtuo5SihRUGXg34mavpk8wJPAurFmXdmbC4zdSnuJmjWsm2iRNhqpFV",
  "key2": "3s9WicG2fQLhz8nqDcGGuGC5QMbDxVrJ9K4C74sFuYv88sVePkjA9ChDdRL3HXP7GWpCrbLXYLCdTJZWpK2CXTTp",
  "key3": "2eDe4UYxgV1ivjdFjxhLiwNRKahhaA1Es5iN4ca8ZJ5eZCL5sq5Qb4DKF3bTg9qsrqpUBAJx2YcUKo1c7p6BUi6d",
  "key4": "4Q2KXwotbmSkF4Q87b2Kyv4vvT1iQAsRGeYG7PzcBKaVoqcjW7JRT7x7AF6cVBPphq7eEm3qjaJRoavaQ3yaLF3y",
  "key5": "aMUQiZ25FS3DnLUPzhRKHZX4ENQgpUKUAivgyvHR11ieSqD2gvmDo7brcCQadjT8X5smJJfVf3D9L82QgdZb7eM",
  "key6": "55DyZjADo1UNoHbuxbUa9mYJeJqUdvLeq3QhnFj9jP6E5quPLfcDkoCo2ZiZrm2LwFXy6s6eXpY6k23dntH2LNWa",
  "key7": "5nMV5pLdk1kcY2Y4fuwxQWxpqAEMSWqGFHC3obhCjGbYnR6q2zN9YzAFYsPuvdazYCJEQuaQBP7MgZGeiXGP5B4w",
  "key8": "5mKjCv3HNpkw1Zyw7rAugH8dxTLtc8GzGUzCjBC3WaDBxK8K6ZaRChdTciBUfa9EpEGu3WL5hAmU3SWyPzqZVqdT",
  "key9": "4dUxAWRRcFSVmXcP8hABNJJhJ1QygEE9bTU8yS4Rm7btiwAHUhz87zNzP2yEuP7pPPoMaA4PQHEdkrD9DeC2WsR8",
  "key10": "5JtsFpbjzSLNpkNB59UYdiSZ3fF1fzXRxzzkM8sj9PWRDkfzJSgnEorHy8VdSxuNFgAKw2XXVxicZK8obnubffuu",
  "key11": "CKUz6iMZLfty8gz8MG5RxzStoNdSgeAQgykniAyyfRjer3NVofj6g1gmp2sLwYxPr174fMqoSDeVGyHu7tQ8qC1",
  "key12": "5BVCmvbQekGz34mJ8pAY37VkZ6xLun3xatj4p1rfaU2acbgpFkUc7cvZh41kG1bqVrLKnhyMiWJwgAHpHHQoLqMh",
  "key13": "214Vf8Mhag7JD5iYk3WaUoZPZF42YCZ1JV1Dq6T6rvUfMwPapm1X3iPSnJRBJZrwtwSUB3jH5AZozUCr4qowWsQe",
  "key14": "4yo4GiQHQ8jya9SynA5uQtxgWLvuPozgzWD8KqxGrCNUFofFewnyA9UYvKUUy4ziyVnDKQNhquyZzy4YW1Uskm8S",
  "key15": "eJujYbkV6DP3bvemHC9fu5yk2YNs3NWZU35tRiEwGtUiCf2jcgAYtJzKedpZwJBw6sVWGbh5y7p7qStSGEjf5Dq",
  "key16": "2PWswxszLCqiRt1HeJcUERaPmpzcKQWPsiRPULimR5vBqFobunEbstRUq5LVLQSagTTcE6KmExoeYzHMzFEEz4E9",
  "key17": "2njcan1rnfQVJx3ukQZsLYNbmx33Js3G1RqxNyKoFgUxAHRnBhuowBB95feeMTjxoUvfQWuk2KZpsbQoYGvqg1Kx",
  "key18": "2gy7LxuFKSt3quHa9y5Hnu61LxyGFD81bBA8QxwFxX4Bvno5yM9SiWNZjf41bSJN7u1akQe2yjNFsanBAt4xuE3p",
  "key19": "5KUvJmwRDt6DLkDZTtXmYgZAcX41UsbvHcqq898pbrVQkcqK2eJSPxhwx5fnQ2fm7RJDP1vJA5XwF54fDr694vdq",
  "key20": "4ZGfQBniJgbnZk1WHbtKg82mAjCjjbHX5eAjabbAGXabQntzm5RCqgPZbG16y4L9SLUV1x6e38wRAmbyMLZK93G9",
  "key21": "2yBy39vtizUNQKTEA41UxtJGWDn2WZZhbETCSMaJgBKnTYdti4iD423fsyzG7VkdWANuBWY4418A1nPDffcVZW8h",
  "key22": "umGZNG7wn4MceukTNfF3XN6Fb8XHU3qAWHkvWxySuXvwdkmN9bnFzDAJ3gv1SV6zdLkY73vQRhWdqiLxPFh4ZSN",
  "key23": "2B91cRci1TeiZejYPQzrXKhnPFuh4qQFB87fzDyFpRggCHKv8M2rPH359MXCtJE8zGA13oGUuPUfeYosa9PKjHDz",
  "key24": "oZ5kA7E7Xd6mTaq2GtvYkDGwEMDXVBTbW2m37AnwbTFBkGGuyHK27wcnJqaHrnkk1nxsTU8ySGLau2V58gGwjNe",
  "key25": "3fvAMeQS9MFCzfUmJ9CDf9oqKTAvGDfpA17dAZ1CZWVYzbEK2ZNts5SAN7i8SiFU2qEGxLbSPxprEDXQ5zgMPyNZ",
  "key26": "5wiHPR57T6GtqkeBkLbWcNPP5qmVdcDrJuATPQrS8dMPpU8w5NnWxqeasBHvCj6Nds9CbrQDD2upczDMD2RyCDwQ",
  "key27": "4Nu9qomFh1Gsp4Ryw9sC6szdyvhykSi74apRtHzP1xdmGw7uKWxbJQk1WCsFj18Npu1gcCNJs2Ht2Pq43wsFVmPY",
  "key28": "2uJjXErFjhEiUBYJwiQCWvn2XHwt3aoabaxhQtZxo6256EBeaSbfaV4oWBdAGqwWRBVMcqxHH6ar7WgHSdKTHBmQ",
  "key29": "qyHQRvt6TuWwJqweXABr4knLMQdGdtdExtYAy6n5mB78gkynNFFMFzrQhuewmUrNJ4bhcBSYQg5bBVy56aZfwzg",
  "key30": "2mB4TigZPYRmAqJvp6Cyy7zwW7ZPCPJVtwPsJkbmcLtmvnJZDyBi5RVZS2tipHAs8k82b4j9sor2vy9iVDpxFtUb",
  "key31": "2qEmQ3cakYkuHziPnm3eAbzJvhxQQLN8hTWaCARpobanFucgBW6na2sjy5vVwd5eB7rtZaDi7w6rL7ELuHrurrhE",
  "key32": "5fELzGgBYg7xebMLbLwWr2UPSirT3P859QnnmXX1XhDrwnFwWBqgGMJMxJS5CrPSQpMMpRem3f7xkNb66u7RDAnn"
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
