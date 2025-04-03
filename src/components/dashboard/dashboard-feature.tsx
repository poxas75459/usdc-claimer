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
    "32aeZcv1sBUNoLSzFhEhTdVbD2X1Azf1vRNzanPYtk7fMjGBCN3cv4GXQDgCkYiZU2KoyHDmbSb3NRsCZSNRHSFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iczrn9chTkEhGJFy7aEAGEdbWHwHfwGYhcUqt7EpxDBgaExknYsvUP8RZJ2uzrAuXReWVLvMSoxwag36ebNsW2M",
  "key1": "442dcidycETza2KSkH6GpmoyaJXZuSaRihxNeixGokqqyiZkNxX2zrWKF5ZvtgnEtnuXDxzTycZ8pSDa63CjXN2f",
  "key2": "5WbtSEnN1MrESaViiLfK2pAfqJUvvXsd53RBV5wtEUDHDNrhrShdkbogCMCDcu1jYXZBMVBYuC6nwtostSxnquXV",
  "key3": "5KUNEEzwuztQUqw6qCoPgaKZH4W5Hj1acoBzMxLgbVZsxVzepMzE6tNtTo68Jv6Ri3KURBn35p1CDvXdmRF8ELrG",
  "key4": "4sbSLhmazQBKVQY3kv9nrM2rMpRjDA34Y3Xs1B3ynohPidXbHURb1L9U3xnsmiL1Xm6ZgpVdUk5goeLTDpusGyTe",
  "key5": "4GheFkXpTUWWdUcC4xRh9CiubBu8acqeWgZxiwqZEfaFSE4nens6EMri8Aobf7rkAAvJ4M6NB7s1GrQpxZQD5MGk",
  "key6": "ibRr8Q4RFkLMymyPtcpqnLJSFYRBvZsgqpjbsnRrpjMbS2632s1LdkQr2xkH1i4MxyJx5sVbB2sY4jShxQVxJq1",
  "key7": "3rLgMZpM2DpHQpn2x4X7fkqEa4t8XaFFazP5U4wysRvzzFu86foYxA7VWLRVUV8kEDp71jSv3oDqcFdJyJ5mkYNH",
  "key8": "1XkT3cRpodcWWh1qng2bViy7wS7TqUXpxLLY7AYUHNNGTULdwYzscZkoUqT12G6vRLfqLktGN63zurBymGCTGpS",
  "key9": "5YSea7RmiRdA2hZKjw9jNZwRUdAgWJghjWhYfYoAJhgt5qpu1REDaeQ5DA315gF8GZ2eaFkCW9MHBbJhNKsSiJEG",
  "key10": "3td8WdSyCQ8geQKCkmhZWW5GXyuNFLyDnGeufuyxkcnPvPN7LkLkwqJyZygqBT4wh7Mm2vAzek6eL7rAnFqAM6tT",
  "key11": "4FEAALQMtxnRsH2HC281qjj1qXwRMLinJq9Wmt31Syvj4rk7EHpSnEJ6bqrWrQDWDTgEVfBbBvdG2yQGpcM9SAXN",
  "key12": "65WCH8gHUJsFYECskFYMAUUAb8AQANU9YvsMvLVHcjxaWsocLEDMXRZ7hmXNc6oEYBgzZzSxn5KL4cCso4sMF7oB",
  "key13": "573YhdUC76TpbVMiWc9UkX9CUFqUEoWcRVbQRTBzNjU5wU5hzphCprapqjRW6USfiG9McJd5pwrTGF8B6wdu5iTX",
  "key14": "4kFzpXb5LyYQXtNJPYY8kLJUL3oxCkKRQ6NTnP2Sps7KSY7TrGquons63cx8e5jWdmVQE5XqpPnnfGH3E7aN5B1B",
  "key15": "2pEFwwDMS1GWkabxbq9M1iHu5qYKpRfWc5yKRdTAVdWHb9bT4tqkZrYe1Tbi9Zt7DTvBsD7rC5fMASQwyFb4xua9",
  "key16": "48MMyJVhbNiWv1ZcvLATEKeGY4gzH4KGjEhVQf8j4a38Loazp4nHTWknuZC6XfX4eE2WYHT1q6RB443CSZ3ZrBQF",
  "key17": "4ekWNMYGK4oYNMFjUrrfXU1HKSs5YPBmC11p2wQZ6pkaHFKo6aFWQjBB8yoEKX4hMUY2B2sUGoTBBoFB7VNP2pEp",
  "key18": "24y8r9x1CgqWyGDiZDm7VYjXu6yoC1L2VmLJt66LqZ5FGBgVZDG1AnL7Lx4eLPQ6tCVk8RiZwdt3LzGHSUXgBVNh",
  "key19": "ZEvoH5bZhfSFagFjkvsJzdH4kUXfZjwicFkEJveMW6AGCkEjknqC2yXy9jG6q2ckiQMX9Jdb7TbwE2KBz5Ad1yG",
  "key20": "3fZAc8UUvkBFJDfDcSjcYgEYnqX1thZQBvctzfGmu5LqrcKSU9JovMT47mbDK7t2g5tmCVEA4JLH7Tv6y9NRgdeF",
  "key21": "WCRs7XMjjmrV5gwTMKu5qeQdrczfbh8i8JD44yhQHe1shpdCy5QXdXRDsTUsBQ6Si1xeJQHxYk2GBJ5K4LHCpmV",
  "key22": "zSMPfKRigrWa72QC3rD6n6DDSFJcpgJuZxS3YYqF1pW1umrrCNHY22eVVyeDxg3Vr48f2QuJHShh9tynZjSip4R",
  "key23": "bnqdLzArKQeMPj1wv4rHz9CY3tWoiN53Mbw8drFNQ9VRqpPXLByhbqHFdJ6RZ2NkbET5UiZVLpWwaXAj6ocd314",
  "key24": "5FV2aFibPrknsWHKUgqq5RojdN5hNaEMvvMPMvYQgYSarCAwFCQNpaDHd8TcWcKKZrQhoMVsvLEzTeZ2SuURDZv7",
  "key25": "28jtYFhzG8Nn5YzBiE5HFCT9fmtcqCV74HTWcje44smVrq8U1xuWyQ72NmhNm4sRFzJyqYPFCQnjrM3wfNDeC39T",
  "key26": "3bGfPXn9TqkRp7sQhJQbUpa6e6RRPcrJhLWhRXLXP7Wn9sU28uXswg619BBhymKS71jdtcFhi8BF14ZtuJQzTWTA",
  "key27": "5GKGciKUNZ6M4PtcR4WPSADnSvrWAgkve71rDA18j1oWTdQXqBM1bLy3kNPWrj8nWnztfjzVJ5WCKAxm1myLECyh",
  "key28": "WNsWpbJE2gqetaWHrPkjgzm8WCv3o3TUUobM1TXhh8jFUjKRUL16SG956kx8ZhvqKmpwYBk6oiDf9SR7nCYNrbv",
  "key29": "CLrDn82YiuoA4XNwbcoirdgg8MF4Gh8NMdyTYCz3X8gsqZEWVnfejNFdqe6qzbNhQkSDDZ8uDaUfxbpf4KeLRBf",
  "key30": "4UDdtqP14mkjJULUg8Fxe5AsGvLtTAhedUzb4wXEeEtjAFWbSCFmsHDytXxGs2FRXHgymDrbtKQeabJqvqFoSe2a",
  "key31": "5BgoDQykHkDNFQLPYxB17a5HZQi6umYgdfDnBVoqFYrqmmUWeEWA8xBMWT2J4GbggBn4FgvsmJNwLu7rZxkPxwwA",
  "key32": "AchukQiEgqFPZQduBvbkUTVxwzWp4CZwviM5ZQAzDLGuJhrfLCjayGi9yDyAKjRfNEQ3FDTGnRiVCoHjyqJ8VeM",
  "key33": "62WWgqogqRmTLhNtqsv3qKdkqnFe5qhuGjihhLe5F6PSrjdEMjNhnPQZke2v9eoXqLFfxXJXeF7jnUwGYf2QVjz3",
  "key34": "5QRcmgUKwJEdmkwEnoQdgiLYJVbxzVTL99n9KEXQ4ccqJaKGf1PWhCu392iyPFBLUpYEbDzbzseG6EgarmMf1NHF",
  "key35": "4uqkgUeiYLMh7MA5kLTe1wSvyb2cR6hEZ39e5LE3NQMMK6NWEY8AfTEZEmqeRUYNVVGNE7PMWwKYMbkb9AX9FYow",
  "key36": "2Y4Noesg36xbA9yNJf3gxduYCU3JKrGqXV2EvRK9jBwvHrbcV2he3WCk77NdTviWn6srS1SgCJo6aTdTVqdQKD98",
  "key37": "5Vpo8D3nY1zNjUUaN1abxxnB8AAVL79jQWShW9uAnSuwg913sCWeuefT6r5FMW9pUiXrb6DD8bJtcCqLJegkDq81",
  "key38": "Ws8T83sKoxxLnrMTnMsMXK8GSZEWqWBjKcbnuqXNih3uUg2RaFq4tM3qKCEHgWPkrKwxU4tC1bjV88frVgcDSqA",
  "key39": "5C86tH5UUQxap7NqCr2Njc5uc61Vq374ZiyZ8WqKCrQCWUUjz2rwuHu4BJZ9H1KHfeb9nLjKea81UxekACuVxjc8",
  "key40": "4zFKbpmPGt28TX2FXz1FoPjj1ABNdRiXmz4C7iHM6FJyVieCeVmejBDaxpzzAyt1Y9R3ZLy3gbXdwTAMoGDqQdx4",
  "key41": "5U43cSsYgbVXgNDxpER3VPceFzE9GWYxhMXZ2ZDwMb17szRsM78feqv6soRFQe9YmkYMKtR3kpsZHDARJrkY6oay",
  "key42": "3jeQLcDA4oByFMKMCuCT7nmfwGU6aj9sQSUdXarvQGRq8ywYN5VEHD8whZcLxqWmEqCAKABzUcLujUAF3XrBDr9c",
  "key43": "29wVrmMyzMHTjTPdyCTeopWMEwcx8jys7LRUsYRcrnMCd4C9goNaEeXU8kNfcY1idaSAz2v4YR1Gbv2jrkNKaeXS",
  "key44": "62hiBagpF3cR2tq5xRRwAGehESA7EhA6TsanVLwuAvXubWj7DtgbzpupbSRYDVtzAMnmTa3CvQJdLdtY5uq1Nw9x",
  "key45": "4UjrcEUGbkrFLkFnnt4sN4xpf861bnFg1iGCX9FqMpu8gmm38YFLpxi3vbVngS8WUf9V41t1Szsq3wBLgWpuBM1e"
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
