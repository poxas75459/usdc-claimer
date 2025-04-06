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
    "2yz4C9ihnYEhzhvYfpLoshVERcXJ434yFWtMotd25L5NCSFaa6pMiRR6pceypi3cUgbbU8VQUvBvLhhM9U4exYf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hnQEm4tzixGqDzeUEUbYbm7gHmCquSjNHVydFU84aA5qqG98xTGhY4RQ4HqqXA1HxthKsZdWhZ6wsUifHBKTYFh",
  "key1": "3WbcSAvxVcieW14GMxurDwE3D7FfQDY97GCYaHWihSNX2B2ykGRbpUNyUzCz6zYvWMPnndmWyxw5o5qkNQNeBHkb",
  "key2": "ig5BFTSzJwxjCbh15e8TjbzaXZZA4rMrZocYFBgDrGpzvgXduozSECB8SnCC9wSaQgd7BCSniyPD1ejHGoRhAAh",
  "key3": "37VQA1hgvn6agV39gwxugemLAAgfMMsmBVQrW6evUAmZBFP2tWpfN1MoHHYKzxZryS2ydNkhTNGFjgsz1ccEaA6x",
  "key4": "u4udaou81TgjAxNyBdF9jRFttDLLuNAYBkNaWGWGCoN828qzMrBzc4Ctiu7BSa1qvYDGoifzSdoqcngnaYtHLQb",
  "key5": "4kJVqvg5PYUvcLrUe89pAZnkG8fgH2gke23rL6YDxXQTZqUhqtFLM8hWTyexYDtPXRUVPRBfqwYUdHd9J1hAdekC",
  "key6": "3dEdaFDQ4Z1Ltjfjxw8C4Jgbj46vzsqcMopnHMqq63k7JbAq2pT7JtfNMLZfF21BAFcXb1aF5LLpdHs2JFvCwFWB",
  "key7": "2zHh2AfX1GfkRS7aLuzy3NuavDsuD76bQ8nCrqm4YMcTGYHukqZtu2fjGN2rLu8bjdxK2yVVy22Ahex6rh4qUJRd",
  "key8": "64LfPGPgczd4P1RdpzUFrMBnFocw8BY72h7fFbuTMoKh1F8Lct69ZNuEBkm9qQiRNEUyWH7B7Gxv84vJVL56zHKL",
  "key9": "3hTwENeQiRPYishW4fRhzgexfEe4fczFojAZ1YtSkdm5NDZmqHx8EDCurrN61uvWAAmX1rLmZhjXhNiX6uJ8iP62",
  "key10": "eMxxfLURSuEGBMu8ZRSqCgbH8PcfnvK2zHWMBVpr57jdNdtZsGDZ1b2DFQWBoLh7PJA3ors672Uz4bHNRRxMvKr",
  "key11": "Q32n54FeKaBzHQQmvogaQajngN2mkqwdqXtG6atX9Ku1P4P4j7bUovBQ7EnmTqLih21LgEcz6AC7uJNmggHLPJr",
  "key12": "2G5BN492jDYkGLeQk6P83tQSZJFpMbs1RmY3srWvH98gA4hVxxiwgYYbG4hEB7StV69iUqNuDm3PYnjqciTUquXS",
  "key13": "5AQ6kHeJXZs8LXd6j61U9rmb6NNsvLGuAQ5ybZoL8Dv84tLgBGKvFkUUXk8uFNDcfjcdoWM1qBeoG4RbSDQhyiEF",
  "key14": "3vu4LEascUQRAjJbZVbyzh7GmmCEXwRdDmn64EGyxpFdnCxrKPY5o7wWnkEyev8nF1ea4Zr1h6ZbR1SrvgcE6X73",
  "key15": "34s2aW6ZgaaYhQieegH2PHz73hCfwKKiaEBUJkNdRoAVVo7V3959G3htbJcsn9zq2xg7vzfuyw5hjqratWWZ9Sf1",
  "key16": "313iwYF6qMLBsC7AeaBhRZh95NoyxAQnkSJ1i8hcHFtUqUm3gko7Y35GTjmeCjAkYQQ6rArTK6m47KnxhP1Rowsx",
  "key17": "4NiESoypQUPu6S3hk5x1s9HkgX6vWRhe5W1xXWFF7bh7DJvnaqM67eTSWvRHohgHgTLVehrn2nYgXnKdVKvVB4L2",
  "key18": "3gkgniQPFzfmsgGhHKqpvFGdwq6GVMNpCQJNRjqmXk4DRzqnuwNRXR9b29muFaMNBDz79oadsNY1m3yHjsdTjHfP",
  "key19": "5qegGkoS3ijbTu8zghpuvdvU48dbMmkCfPua1RkjyiW5FufdLnxzK5k9YSVDxsHJ4BCjVefeB7EKrV7aTrXMt9Su",
  "key20": "3E6z6dp37nRvZ22pbprripLk1pXH57ToeGK7XmGvAsyhwpF5UeR6ZUgTP2KRo5HPc6MR4Z3V4yiAXqzmfBp31LGu",
  "key21": "yL2nNBGhJgEDdb6TGuMAqjarTv7STmuEwtZnLNhnZSwaRFjQwp4GufUBAaz7GMid3jEFyNrUhGwBJHgh7EHJB2w",
  "key22": "4byAmuxs4JcXAxfCNWuLTtSX82cmowaiMoFMB1hE1VtGnHUUCjqCXZothE3KMsBogGtaSgzg6SCWCuv47vx26Q99",
  "key23": "2f6HsvDELBDQhWY2peNEqpKAWPgkyEMz6LvRhfbmce5iEYqV235MPqJUbRxCbc96fGARJuamJ5CjbjLJ5nKfKDVB",
  "key24": "X1Wwjix3ytezEFsHUANTCp8DPFvp4uwgo5W4zxyvahF6ELZNGrSdBaQaKoaDMgboRLJ4nPc3RDQNRDHqT1T3NtF",
  "key25": "67ZX7Jii5FtLwromEzDf8toywu7gnvfGWLw9F3oXNPszUrGmaV1zWU9Csj3VBgMQtdfFLGjmuotiQNPjY62KdHgm",
  "key26": "3K8nbkTBEBsttorEZdRWdUou7vXBQK4mG7EEeJKGM3aTGjr4eNoMDahqx8AemKcjNhCrH9tSpbgYH6iDwtoyPMvh",
  "key27": "BSnCac8hgCRciXwutacpPiR5fC5SYHCUjg4thoaep2QYsZRd5QQ3a7XV8aWb2YZJVHCdkXiTrVv7LvHEHWUVFW8",
  "key28": "oR9aCx6Vy4sCFtGZs7dfEStqinWB2wuTe8YfcBEhRKRxaTU2dUs2MnPkdwt5kcoyF4msbxcwxitzxhYdkMCDLm2",
  "key29": "8pLSUsPg1MnLcJ9HKEcbKyFykTpuTefFD34h39uKoScuYgpfWVMjjx939Zedy2Dvvup2aYpvxYkqU5RCNB1CGeU",
  "key30": "gZxRf87oEkocfRjvmvYHxCktVWxqk3BUjNJb9zvipvFD6iG6pzKKnG2UrNEqXSBofyXXtwrFa7neQ9pNsWtZU7H",
  "key31": "4oedGcpRJiPw35x1R2wyXq5XYv22Gv9dwDbn6JUopYv9xVDNgKRYDWDD5oyogqpgZroiVU7K9NFyxwY1t7rcuoHS",
  "key32": "5aUmhDzbHQBzFgNZxPzeVnmmb9fLzsGNZtYE9ym6Nd2dd6hjmEeimbMjowT1MmYg3S8Ar8YLmS1bhnVuxs93uhs4",
  "key33": "34o94uvshFN4aRVuRwGGS326HJkeUNDyHJS3A54FkhKrnUkYmxZz5LDKCYBuvKgsomtxtpGzfTffBiJMx53UW2vs",
  "key34": "Vd4LSqwAJHyfpFwHdJ15Pdb3nCnVC6TwZ8Cghe2CK5134AfN4cEpBKYYcCJBxcHdEf4Askr1UD36AEVSVyMc2pe",
  "key35": "2n4kCVcnEjMDc4cipJ2qvb2Bgn134ruX3GDwxFPjCq6ehej8dVpSby7eNQ1Xf1KqkJsdDa2kSPvn8AX7MqQVD8mv",
  "key36": "5YfswQCjQMmzGDrjTSJ9K7m4Bg7q8Ve672hxtGFkoSdeqFoAkuBFr5Hcyjpgd9uQGfN5Xs7k3Lkiofa6S8LLcA3q",
  "key37": "4MdnmAzD2NXScsQCDzERbHpbDAHYFiAWzvziZdkAZ8Ay6DKAP3KN6czHDAHSwjS3PVxNqGw3XCQHRydsCMGgGCdd",
  "key38": "4ZjJWgwnjKz2Xn9Mj4izbQNmPVxBRXRTVKBJyLoZiL1D19jCpGxMdifi5hnTTvJHvUGpheiHYjLS3MEnQZ7E52CY",
  "key39": "r9u8MqZJxBvt9x8RMoyptYmCMCFnJ4eJotsfExRrsUHS3MArPSmvHtQfNwcQRQMSEHcwG4oeyuEmyzKjiizNkQp",
  "key40": "5UfLtKqVfq12aM8Px5snLew4833KShqh22TbJPyh5Hx4bfhSfBojYdBzJQ3eJDyLCwrhj6LjoQ8aqKy5yx8L1uMw",
  "key41": "5qFDHcHkkAcS1Tv4xwa7QcAdnFQQHiH5BpySZhhCoCaKaMdEfftSdA7Chojh5tCdGhcLCkfddTCt7B8F2oR18XKp",
  "key42": "5NPNyDVUeR32HjbYcqWW6dUUd8aNfUiBH4JEAVgnrhzRHiP76xwiNpRtQfKQVAjQAUzdCddVQw2hd9Z9xiRfq1Sh",
  "key43": "26YD2FQgQkg9GeDje92MHPgUSdKc3t5jt55V7G6NvU3UtTyyNtjzdHDX8zq77n5XjowR5HmpVLuuX3PG17RSjy9z",
  "key44": "55V4NpW12CTN8iTPHzYgvV8JVQSUB8SorsHBTrPNjJuFWCQ75MD7htdXSVm7YTD9vwx5cGTcvGEQ5BkVXpxFTEH9",
  "key45": "4iVFqJ8ShXejG3rnod3BVnYzzSdzwykBxZzb3Y5WA3bPU3WZNKWxYLJkcMx1oLo8esmQg3ZjjvUpqSKdDsZT7pzN",
  "key46": "2qNn4rjgmWcdawyT84WWEDGTJhaucjx9jBpjPzfFymypKc72qKLmEcTWq26LPUXv1crmaUGDHqMU6rbkK8f5qbcN",
  "key47": "3NvBQh3X7dmK3AP4Auo3M6ajkFqwKEbBQkvp5yj9nTQH7kMqVtVz3gwMGmW4qv7N9sLodi3mo47FcxjyrqmYaFfW",
  "key48": "4tS5noPxZRSPzLt2QFvL9CzkLK4FCZFoqo4WkDGEyGSUAjMSuV4Mkg9JSXMFA9TZyUuGcYtXMUonFEGV1e81rj2b"
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
