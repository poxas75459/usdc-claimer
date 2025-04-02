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
    "5XxHyYjPJtnDk5m8Xz2pdKYT5pUAx3r5h2BPSpQgMG6b5WLYJvK14YdX4wCLmy2b7VEo2gCWed7W5Yz4KkAGfJwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mREnzkwUYZCyM3L71TdesdeRhfky9goQhk3Hskx8aBSGpdoqd9w5ynZL4zeLq1bvcmrHurSz6Ygd4yhftznd1gs",
  "key1": "7tVScUQmXC5GPk1yeAyXAyFsuKTT8UcgEWwwKDBw43Xe3CsuZA1CzY39JMK7KZSfawc62ZhuHQnMNXSXRY1osJW",
  "key2": "5oau4bEoXUYzCd5hs8dBBxDcmSCXbK35GKrEQJY6rDKuSVB2PHpmf6vxL9QSksbwsoEDwLVsrdygz8gQRpafU2ti",
  "key3": "cRFffAnwFboTCW5a1pPiQoB8KS9cH3iZH1F43wuoCn3c5HUWMPXx5HyDaVYdETBpPjAj7NuFLmfYgzab1jNfYs2",
  "key4": "H6Hw5iPBED8yCkUcvL84UMM4Em3MG49pARBvXnMaNAisbsmSur8uMQM6Z6GzxJka8XJGcwbCPhYHDdGLapU4QuA",
  "key5": "5povu4m9vSJxW96dWBsPPWrtvQbkezWooXdWqFNb2zRcS1wNsmbzCdmeYHchxiZ9bThiy2E2Cvbsd5wcyCQd1eLL",
  "key6": "VxCRZCk9SShGnUWCuuquhz9iKQ7XHqBMvHFiQ7qA2XqZ1QbdgeRQf197FFH1uEdiLRum1qotiBuF9RFKXMZndtk",
  "key7": "3EFvfjx3t5XK2sma8ACy7LZDY7LHC2uQrApDD1Vzd4WcerVX752DVAjRaECUcwtTWVckh5EWhxnVSq7p1fXRryr2",
  "key8": "3rFf5hE17zFvZomJyZRS3eeLaFgfVccT9x4WFhyyV2biNqzqTgyHcozavKbbKAWVxMW7GcurPM5gbMmkCDwnKdMQ",
  "key9": "STLVFzhRPskSwKCjBhNYgaVwiBaHqAwCCThtncnR19u9PuqTvepAFi6iXh5swwTjqYtyVwAgS1HSffH3dHotM4W",
  "key10": "43GwGpwLz9adCUa1b5jfCGrJ9goAfoM3bvxzStYoYuFAPpS7AcVJgQgHzLFcEGNVxSdbdf6b8cniqngcf3KoLXE2",
  "key11": "c1TMBoUbVRj6Jic3GM4PP9QcPokZJ4rKwfry9z3Xey7a6YA6gknc7sib7ndRpf2k6w7Gi9LbNjehdGvcAzM1APA",
  "key12": "3VxaoQC1UD46mXqJXDdES4sZ8ipdS2Pv11kqF1BfUnwYB8L5ja8au3cmGMEbfoQyWRUG2v6VQMnMKZX8eW3osuJy",
  "key13": "5BHR1dRUaQzCK1o2wia3HFSuHMgto8tRPxqmF55tNeCEbLxjWrmh1fLS3Y1WjgiWZWN925y42i9yTgMK1bEP1Xew",
  "key14": "VkG9TzowsL5uh2Uw751opg9tUsdKAXpCTS3BCjc4ahmG33B5rPp5dXTV7c6GQ7sGhLTg3mT6NJUsBmf8Y1d2Ano",
  "key15": "45mqirPZmfHwVNJucmRQ456QgZRLEuNPZjthG3225HKHdWcwzcgkydUoo8UxaaKd9VAz2duMDD1fXsbULxkHDgiv",
  "key16": "5Adimujr1ezLmBnbvYpFXaqbRkZMTqpYyWKBji1wKFuBUKVfJ8yFDnmFEEb7YKXzyb7a813hd9oCtLhkz29dtS7h",
  "key17": "5xLDqahFmLB5sSP3PC5Fk6Mg67zk7PPEHJUfuEPcfnzSKzoH1K2srhomoubp5mFfPKtM9ZcdFGSAn7QTessB5bvT",
  "key18": "2PHP4nzvJXSSUMJFd1Wgr3bGvT4vwo6gfCHqi3oW655F2YMSjNQ6KNhTgc5aLMFnMxef74Hc5oEApLxJY2QKNauP",
  "key19": "2Xv3WbK6i4qnYFx6e9387qAbSNiKjRdUCSZ6FixNUfiYwiuKHhdKnqrtNUwk22PbiowMGLfmDHQRN2wCtP1S7kpq",
  "key20": "HBpNj5gkjWFeDudCs9ZaMEZTJVkYsthb6pseTvQu2Lfo5pt1bdrpuRuAZkCJ6ZtjLJowwMB1Mnx7u1yyuafgS2F",
  "key21": "5huMKgTfWLQKovxFq8AqZvdositrKfe7KXgAWKzPSjfRjkNcxZvbjRQFRYWrAs8NvRLjFiFM8BmDVEYhmrFmGDUS",
  "key22": "5FwFvgtsA8NW2fNVstiA69qYbLpHg7A8JswVeqsksdX5V8Zt7opt7v6KmiMF5efrycYjvBSZo36ktEpCsRX2YsDH",
  "key23": "4ZJFQ3ZcGU1RSRM96c7RA1xi3iyh5Uz7MBx6CJfJUDdjoN5RmJ7u9jeChtZ6z34EQS3G5Dd3HopjKvdzn3okfZHE",
  "key24": "4Hf2qVCPixWRRxVvGSHhdaoJk7MvH9ZeSmpKDrFdW3SMBwABJ92LvWujrTbdSeYcHFtbGnjZMUMoRnXiXo5ESvsp",
  "key25": "2ohgJPyxTuBwaAZiHD5NPTc2AvQYPoL6iVJ33MgEvnQw7HS4XDFPwrSMrK3ibYNGqNNHQRvvznquTiiy8YQGMM5j",
  "key26": "2krqz1TqynmVoS5LmC6Js2FpSvYgeq9W2Gxi4fqy4bxnH9FnU6YK8Hixhnyey7Dmx6SnuYAdLATx4oddHhtS3o2Y",
  "key27": "2VLfDMm5y1H9t4bELeBrkJuyduLKb4GiyGaHTwFbj58kvswDKDszKiCLMs37DRowr5Sx1ZKPQ7HeXzQLQqsDQK3K",
  "key28": "5CL1J3rMfSb1BqJ1hu4gBFksFTK77hjYa6SotVkAupLZxgohRaPGFGFTdoQv7Cf7MVMLxbhihNziNBr6J1sCCcrj",
  "key29": "4CmkRF8BctUj7RUtRnVKNsRK8iJzWrLueSiCLvGYAjsVUDXrqe78hkuXjsjWtW9qgXPYscpqiDzTjzi94dvgwQLH",
  "key30": "5W4vZMDRRTQBNH8CH3wmfkB7brb11CuNZHx1XsmMtjdpSP3VN5iF5dR94DVyFkMA1odkSCwPZjp4pWWcyFxPPc1B",
  "key31": "2JxJpNQffMNp9AH2KkPfWSrLvgTkcuKczr2UBrzw2yftzwi8asu6SxA4owQRGbAh2qSuBTqPDaLyb91wDmxZMBbg",
  "key32": "uoxmFHaBcnqb65oFBrffKGBVRnzJGoUP47bwWrYKojmhmVPoW8i4VujwxwkiVfzvMRj8L1V3KMtAdc1FYTB7CM9",
  "key33": "2nQa2tqkdowLgrDkUCKPVofue1dBQK8hwUqntToCceVHtNQVFkae7U8CeYrZCqWmN3MtBrwU1QmbNWzcUGJH81Kp",
  "key34": "3AXcbg4XmEstYv6MQnh1AVty1fWXZ69tr6KZdcWPphKSfsTp1BXSmSr3izcxUW9MqZpCDUD8MT1nidjuYmss77aM",
  "key35": "KaFUmXAtxLyPT1MnhueTsD5u4buAQ8ynrp8dKuawUv4aUKkaEkk36XeNkYV1B1iTRjjySoz3c53cwjPzxFZ34AR",
  "key36": "4HYNh7vTC8bmHc3dLV4BD2zqu4FwGT7ognj8CYNAn84LxvxKWmLpQb7KN5ev9RFk6tGasoJBG4VUrk5Lv1wM664",
  "key37": "4BWw79CkAremWeoohHQv57CDBdwEVizEz4BK346LkP1mEoQKffY9WNuR9tqXxDynuPeahLFDmV4YsHvX7Yr4Ww3R",
  "key38": "2pRigQSc97UEZQpf4UQQanWj5gsCb7344JkE6Q2U4TQFbcGE8FrSLPtPsEHWdfL5eJMzJGEfysw7VTmL6s4uqV3E"
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
