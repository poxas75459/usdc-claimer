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
    "4EqdgArqDjArgCRNcr15R7x8CSGhsJ1xwJXAr1Gp1D2RJocU9zPtU79vxMDiv2k1gmXvDYBHsUq1K6Sk1n7yhPSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SW8b8sfNN3k4CfgoEV7ajzuNSqtHHtboFekAQV19eUU9oRyiUuiAp2dmuPP4NVdRLjbgpT8eP8VjdaBqS8RCJty",
  "key1": "26mv3Eh29mHJxGv9n8aU3HpZ6Q79Fc733inw2zrqPutVAwpkBgEqBKH9MKDnuvVbbyeVTuCZrgxkug3Yg78pu5A5",
  "key2": "5JAnBJsxQ6R4vzb88W77CNKYAr3PiCyCLSQnhgP17MbpgoGfgh6EGb94Z23nNXBrAubgis6CBujmXfn9iRvvdiCT",
  "key3": "5QBiLwdG89CaikDLN3R2jAaCs81NMC5tvWSEYvbRbvjuNvE1tF3MNeYdvVHexL5hNron7iHwKHdux8BSTLCxsM2b",
  "key4": "4Kr6izjpuVXGp5rMNpY8MFDvFyREzkSuATWrwFB95A49iSgF5Ek6azH6HqL38wzMioJLr2g22ahwDrZRUQWgRWGo",
  "key5": "3ktscKefET8i9f1hp4VPkJBbZN6oaZJvnELyAmEHyWHXRpEQruqM33KpcFmLUWWoNJTyfe6niX9gor26AamVBosU",
  "key6": "2HUqMyAikcraBaDeMQTRDjmLJkRrrKHM9tAqu23M5HQzhKvcqGrAH2YPc7hkVqfN1fXLnRDqA3V6vy5VbJUqU5r6",
  "key7": "5ymAiWn5b4VXGqifwvuABwREYa8uxMugN2YBkoxRhNqfCZng3yoa8UxuTRYU2dVocgtAAGjBvmMgV64Shng8pfeR",
  "key8": "5mi9P9vfhFjpagb6wAjXd2janaRJGFfggqVHZVvDC3UaaG6MmRH4dqHqVnePnYa8w8ahsMtTxgCB1pLCwo2xB85q",
  "key9": "4HjVE4eq4kfjYxUEjdzooHwEVC1oqHabSWkt8SWp8yaq4MV9TJzzqzQHsSKxrVz8pMcSWJiShr3vzt42jEvJs7jW",
  "key10": "o1ZaErF8V9S6PxHBLj136Y4zXSukRvDoMhoZdfNsytpkd9A27u1xFjKAMo8HWDF6TUQabebyTF6aRuiKTYSokb7",
  "key11": "4dTgiUZyUgz4ZjPkF3AtSHA79hu3TA2XftbrVFta2ouWJgF7QvGYrzum1GcmKt4nimz3dtQ75PbJPEibaTMD8E1c",
  "key12": "vjLsupzWNZcDYN4w1QVMBLt2wayXUV5eWBSUF5wAZK84MyGwQVB72Bj6QMzy1F7UM4Q9CqaFv5j8c6DnKB5jyEh",
  "key13": "5oamvytEY7Zuer2WeERuPGshU5ZyZVc5BsymkTySswbzDABZGn2gSQKevm5J7fDo67YCWGCq384yDigZH3NDULee",
  "key14": "4BqMXRqe8NrrdiU9tN7aCSXn3G4bZ35og7qCYbsYZoYTzoXjAMKTW1dxWTzw8TJJBaweehNWQP7ER7NUhavLiek4",
  "key15": "6Xtux17PUeEDHbRnKEJSxw8PJJoxgwUqcQdgpGZKMPCNptSptyKs9fpqYGzK8Kd8kPexXRuv74SsrzGtv53dDRQ",
  "key16": "3K7XGZTadrnwDrQDPUzSNNqoRkuKTUC7Cox89wUR1QuCvcQLk8TV3ioJuW3d9mKCKsEQBFsJcLMEeoL7miBzsCxJ",
  "key17": "67Aj9nMw5Sc9U4wq68XporDwaxxSpRrc1kmLihtP3inhCDTuXp94ZrxwiSEvWsXA7tCUdjvfiyRq1B5oX3DoafLr",
  "key18": "2ZkpAn2WGpFGimP1Tj2GuSpmTCGPYGYXFGfg8Nn15sqVegJumSdamioiAcopLJ8wAHZxr5zq6tJXX3ErHBwaE4qf",
  "key19": "3BKVDE4G8pinGLiHCqAKpYyvkS4mVEGrJ3zj5RJ6K6xVjMj7NGnouzwUSq7mU2NDZUq3qcg5BPtoMijRBUt18kEK",
  "key20": "372gYUyMzaTAFB9HptiPaLydCSn8YXmj3vJzck6fQZZAmhcs746VmDDmDu1ChZgDcPjTki3jrUNkxmyAt7UnPCGx",
  "key21": "4rdqZaLKptVuQjP7RS9R7qGRZxxLTSxg5HZ4DUYNHms1unaeQ9EA5Gyes6jVtdxUATnTRYWVkCQmaD7hsefWNftA",
  "key22": "5MgRL9vVqEn7x1WSpivndNtR5uicPsFrawbSrWNST7MfM8q7ShsKfmy7kGpkAirmtJWiubUCpqJcnjWKtMxUDzjX",
  "key23": "2t4cdJwg9u8zMsc4ndBErYhWD2bd9ZJWQs639ZfaABTt5KXuMUWrPkudA2r4LQUanWjb3P2uarQhpYamr1Mk9BUK",
  "key24": "4imrswaVkvu4sNTZpvPUn5Qkcv6MawF14WiAS5KXKHLA3qGCFmw71FiFsjL3cGb6XLs7b7uE6xMhRm9DWEvxCwgy",
  "key25": "4pt3pCarePgQuhRLevPoLjfFpzy2okwvynympWJkJLZ6mQ7Loa3XLnaWDFVELo6rCgU9QAt1bWqx6vx6c3nKi6xV",
  "key26": "4ye1KcqnWgEb7w8UtEKnzUsKCLbGHmE4a2Z6FSft1y1UX1tQp4FLfWfFbFgSfCe7BVZcvPkG2KANLtGWuodd84Gc",
  "key27": "nF9qAjiYqfUTBoZE49tdJjx131UCYLmWMVUffyNmBHZ3SrA5hbdUZikcgyqYQZr1tYpXCQ2aXQD8HUz3pEDa4LH",
  "key28": "3zsMSf86RBC8EbZGa746ChPSp8dbh2A1s2httfSc1RNTseMGuhwCyRTCuDGrLJrStbHBBoSkSJsQomaS1rnUjhpg",
  "key29": "3GscUxTomteHT3XxazMvvCU7ewcYCKyMcatj61sfc3L9fpindfnDx8gcvbapRCuwbLYoRhW3t1vPWZsPHNRCoHih",
  "key30": "LYdye4HhBEe2n1q5iP1XLULkDXmmpwvMkRrLVpWNFUgHxxQnvfUdh1rPa9mb7p6ysYeJC5LnVeVJBQwGGFUrvLF",
  "key31": "F6D8ytnkY4xmooTx65ukConn3crpisaoYMyGSmkbc7Z9kSDRRKHjgRrcm3yjyAWeWwhrLmvGaosc2LVbDJA5WNc",
  "key32": "5Uw326dwonK4VGwoReAAVTqTnmDHraWY3e9o34F1AFuZsGMybGxmJimieB1nW5ohKkcw6dByuuvshMWwsZnoNrQL",
  "key33": "64DznxNcLrD8i4csvQmCmPxuuTs8nf3yjLjmkXZXAhBjFX4NCXfEknSH8PKNkXEjseQ46FB2ffTdMcfZV7TgKsEG",
  "key34": "5Jwsj9PhnvCRoiFd2k4A5Wi49HgxrcYkpU4fCKGtG5LEEpTAv3a6tKd6VL4eqhoj8ZtUVvxHscTxhhZJ9ToV2gfP",
  "key35": "hKHKcBLmvZAArU4EGZGUPWABmkZYPHfgHuuHQVHQ1BTzaZ5RnGk9mg114LtiBzc9NkBmSVcVuev7h8rvseAmXWa",
  "key36": "3MNtWrK9VTekg1hmLdq4Jntu64dNeGVbyboLwQwxZX7cw6F38wnHTYvryUAYVhYG2D2sAAqbTA8aveLfkj59UQGD",
  "key37": "3kptcTFq479jUrmSbZWDSXCZ28cMonzwprsVZtKbDmzQBsZwPSmqmFT4upssVC5SJQnCydHNfNiqhbCoBrLxZaaX",
  "key38": "33MskQRPdA1NRhdFTGjAtA6TChbDRQLJQ81ck8U7hkbPCqAKtbq2ab3bxL1nAcnL7oS3qhqgohHEeaMu9kFNTGoP",
  "key39": "ttwgXNtPjtMFbwrmS5ifY9zGcjJHH7Xk6rduzojsqQU8j9uQhW9JRpuFiPRyq6aBtyYGmt3uP7pMjcsDyozux2A",
  "key40": "4q53u3VAbWooGurECNDSqU14fH5h7wFkchRjw2e8zTh2tgUhA9fEBHBm6nPMGaXE2gaxvVaTZR8aBy7PWgxdhSfS",
  "key41": "3btvxj4AQv3CJT8vC2kKZ8r95u6fBqaqvE31MHQW6JF8jmU51rNtX5i4Md8KgvwQj7KGaavS2RCJ4xDUtqiCK8aG",
  "key42": "qmMVZCjfXmQst5nKBkQSG7hrDMhZMRVdHafdVM6nEscjgGVXxpWaV52jQTEd4ahmwDSXweuzJXRPuTFiXMKFh53",
  "key43": "4icbp4KzAJ8zBx5Wn26JJex5QTtDpJLqgDbc26qaRr5VrfaTbfpoDsn5pD5cZtvHBvgGxKb73MbCMfs9X2joTYwN",
  "key44": "56nrLdRVncaZbyGZFDZe4cQs5Svx3pwBNj5nGbdf2pxpSckeo8kYNM35M9LVJQr98LCBtn8xZYRuzhxtDuhoYqBu",
  "key45": "2D3zkhBQdFMGAQ4m4stMoQpHPeKt85FQ2xxxpB6TEcGGbFEpcRS2Urm9xkewuDPTqJ1ipug64PqKhACb4p2QHv5C"
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
