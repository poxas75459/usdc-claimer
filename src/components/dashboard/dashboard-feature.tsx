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
    "4ZgkyNjYSdsUVKZyxXtacQ6g2my1FnHvN6UBKfzmDLybhrVU8GHNwnqfUsocQj4ogRgj53e8UVg3awZAq7XVT5Qv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KbvCMh5nU9PXrfUVEB1bCKBFDZUDxGGhxtC9XSxrjTkL4xVXvC1yns9xfVVMvMqS8p37PKUmm4yUjCsAaoK8ky",
  "key1": "3naHph6qqSq7brKUWsX4XD5K1nLswhVxWvxjiJNE8jzwFRG12QESnx1bro2cqUwUKg2FjSmNicPr127DfVPpwhEn",
  "key2": "5dnyztXAxdeCHhSb2vk75cTMQ4UWw9RF8rdQCD3Uif3VdLgYHXus5v3tmGmuE75CGFpqxEWafgqr2VbU64mwRbKq",
  "key3": "5znEW5APkiXdv5P4aXFmVnZ836QKkvZKhHM79uqzjEdK9CSUjEkiHuWXMEr4HYBymY6oF34kHZBdj8NgT7h1Rxak",
  "key4": "5prJiRmzpVEqMro6MMm1zCeujvtC4ta1ENgDDaXnDivirptknv6YVyFhXDkduGTy8QFou61qyPSKESHWxkXBQgnH",
  "key5": "63qBBKXny8Fu8zU79p9axfKaGWFcWN5bxmMFaL6qjX1rSQ3iEqGBU36ifDgPaFr984Lu6ok52VhTDC8BdhyQ1Tus",
  "key6": "4ZEWkWsdtAAh9mv7N9yt5Fd4kkDNDYNNBtVBSLYYzo8E15vTYdMSFRvVnyTAXPNHMVuynXXajjZZhgEUUVkWs3F2",
  "key7": "AAFUAKt4toMLfVEMuv2BVJMTd9GwtVNxwwgJr8gVkMGR2x2kzM8M4YP6p3LQD1D5UdeaRWwC3nJigPDHfEZBsnZ",
  "key8": "5FjnhuREx1Wx37AMgc5PKsUi8rCfPx2V3rb7P2ShMeBKiNRk6ATPJFXVNjrD79fnsYbwC5G2kZEDKKzxNvAikGmk",
  "key9": "4ZgErA5SBNbkeSDKUAFyWD7aNZLPCZBP9dGkEAoqT88UnF3ezCsuWw7QdWnxe83GXLNCpRuJwboCPyUFCcWEiQdP",
  "key10": "KcMNJiexAJFgQf28qTPjHhUge3a82kxtUt5EKFw2RLpDGuyCfV6cPRFoRD1ijMEZdgvqMjatDbEfPUvSh1TJ2Dt",
  "key11": "4AUE96TNUxkvvEY2cDEwmsDwhcrpTBD3msBRBP46FrATYhaA7mVQuQhjLqarJsTEovqQvLwKWqrqgKAk1A3k1rD7",
  "key12": "4w5ocJQiGjQuEE6yybPaeKr8HNa3YtC47AWjzxR2BkjShBWPjJS2fR4GiegJtPeURFyCmXNsLr4UGyPrrjk2Exo5",
  "key13": "5wzDairFYSx4u37KHUEGJBBp4DHS1G5nbzqMSuMnoL6g2o95B82tagvgUe1yy7TLiFrRtMcacZThchbLFU2WpehP",
  "key14": "5dF4JJfWjGDYwFsPfudbcFtt7sCTFHJUppwLpZeQnUnN8UDV36tC5yQnRscEnNuwF9Diefb7V1uNw5B4t1Fvi1W1",
  "key15": "2YVZWxho3HxgQoqPidw6wCSbrCcyHw2xTvEntgSGpjwDsHo5gmB7sezD2noKUMq5e4eD7ovRnLmhSG2T1ScBRApk",
  "key16": "5x4j7vAmbPB9meCNpGwb8vas2NMLdsUjtsYnRwr6bVFyNBLbiqBq1jowK2Zi32V3MtKtxKjMvuCJiG2aBD7aKbbF",
  "key17": "4g242wu37TGZq9spTCV1bQxhmVtRL8aBwJ2BfKryrXZ3a321iVRh34R26TTzMTn88Gd6rb7Himrxrpoesj4Fnsvx",
  "key18": "36mtLUwc3M6xhYbFwjRwQtXtUso7JCGqL5nHziQDhCKAQekMECLKpE1v8L66hXd1LmNLRDDKViBDLUFt7ikNaXvB",
  "key19": "3hMjcwDj9ysju1tvTshMSsnkefD9XVfM1RmrYy4fuCgGHqztKDSEWeFuEXE447tvg9jBVCaRik7P143CfN9CYt8f",
  "key20": "2wnvbGia5PaHMwmjw5xDV2rr2eNJ1mjRxgN8mbW26fDD4rYeNHQkTC4ayaaAx7LqwgJi89sDzTZSjTfoJQ8E6EZQ",
  "key21": "4dtrzvcNamvD4SM6CW4NVaESvHW7QLPEpPhTSZAj6Gq9hpRmNbWPQ9Jn4o6PkK5ArkkNSv88v6CXc28TXJM5v4Xh",
  "key22": "677tR8QER2R8xchdb2Uu8qK37cJxVWB8e7BLAiiy4UC7UR8w85cPwxc6dgLZ94qaQSkVQatK7m6qAkFgtMpuLrSX",
  "key23": "5KpwokoU8V8Kx78qoXzT2gX6QAXwXDmnPHsm36duVBLLspSf94Q62uWno6kJM7mDDMHftW6D2HaPvrecgoYVkfoe",
  "key24": "4djwJ122J9su9iDGpC3zbzWM9EbA9YQ6uUejECkDengV8rtsSZbsLu8siDTbtdoXcgtK2kKnNbwvCPQuWQMDb4K4",
  "key25": "2zFchFPbiKfdwUTRHHqqhCqYHZgygFAUaenkV1FPh2ZufNhfjT3jfaBiFAVUo42NHud9yxg81wiTodX67xyA1Brb",
  "key26": "5ysYeJz2KvEDu7RfBrpoft8Kw5htxdXgihpo67HsyQUaPx4rxnVQhA94NPEA8cQ5PJBhGqiZgRoK3e21bF1BAQJU",
  "key27": "4AUHJMTvanhKhWcVMH1EDVL8Tacn7hNSVES12TUPPy76nBEioSyvpvmBf7tYKpapxuZLECNnt6qBVftYFG3XFktf",
  "key28": "RRLKo8d6xS3pBiPQWWJ9SeiLx6MVa6CN7KFVbQD6BYkid94HJNqms4cvAMtXwSEEoAh8nm6C7HpMJMWSjngGzFW",
  "key29": "2HeWfqJZd6faeAxGo8wWr1EYtTRx67W71FcVXhwBuVEMh5BqpubEJavXtmitvrvmYbwKTYKH5XXz3yuyX4Vf51Zc",
  "key30": "4NsCunia5rn1Nuqqaew1mypdsygfoPfXsi2RgniXPZvhd1SegrCqFrppehmatAv3H9pr6TmL1K3mStiWAqGJ3up9",
  "key31": "5RXyGaCYhrFatVZV7RoV7yYgjQ9gEYGinGxTqC3VrrD9zehaVaGJY77QQg9h3g7BRU8EamjXmqi22hjymxoM78Ly",
  "key32": "5xAhyhzoqsCPHJNb3CDyREKdE68LBD3HXnBqoQfdGdBWD2gicN7XBJQz6kadFmhDCQQaQbo87ckUGUZxHsSup3x5",
  "key33": "qGxj1HBKq4bh8nnaGoARm6LQVTDyAmBVAWnYJzycS7GSc2B7UuLd7PwJbK9X49cw5EWYVZ68EeHe1VijutTABXV",
  "key34": "6FWV5cLJwJCFtckLPA8ZV2g1Eg4rUKuxFds4vCX9RKzUc2HFUesUci32DsjUFpDXRASQthf9VpMJoF9bTWqPiWT",
  "key35": "46E1dHGJpK1tHVNsQ3n7HrpdDhpcgVdv8X3Ndwou5oaucE6wbMXGd5uPqXJmSEdhfsFGdoCN4uLJ9LkXaiYMAPdm"
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
