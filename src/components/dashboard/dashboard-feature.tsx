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
    "2fC5dTyYjVyGbLW8a3Bzounw4MSTgtLpmoJ2n1TvydwZJbyocDeTBytzcLepy2mFtz4xPZiHzegVJxVbRDLkc9dW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MQxXYCC5PRj5B4v9MZnFetTEWvobi8c7ooWeYAiStULyq5WrfCg1m8EPBNYejfWELhpW4ckXRSpBhSjK3rfLDiq",
  "key1": "3SiRS7XbSc9rxNK2iXdMz3xfVJKoZ4nrXbHH2yJKpA97TG8uNuGTGsRE5Yu8EZyUTn3TYuwLFg6TLnhL1HA3eQ9u",
  "key2": "3QLECZ1Kq2LLsSXdMWe6Y8hUb8uF4ftfF53AF8QHkNMomSGQzD6vLc33G5uxvVb82sMkcyQWTfK88QYLAXASreB9",
  "key3": "Xngd7v443A5WmjFE5bkLst8S4fcEYAjpbhF9eu1dhkzMUTXVSnrLrBx9CubajDeeRGfN1Q7bay83ZUgsmsoCPno",
  "key4": "3BiNvP7ZNs3qk6qKbpnfKDxaZvynAA9CPwCETeoozrP9ZoBrEK6dvUfbmhmdASRDwzwUvGjsQDprYNFXfH2KuSFk",
  "key5": "5At6RMJqqsvUQSH1X8Krey3UftMa5L2mETkLUiwbutFzC7fSjzkdDfjjgQucrVPCTBXXtMmuRtdiEDCNL7Zwb2sE",
  "key6": "42f2rudKyV6JXYZGuGN6czhkCM7iPp5ad4Gd3dYx761LPKxW8WS6pwvc95B46bkBSp4kXEXC3G66J6qBoq5dze4Q",
  "key7": "izRaV7ZJtJqRWHqEgwSmAm878M14StJhkncvJsyWY1k4F3Wsbfhz2uD1JGG1vGQbYuUEgUVVpbTcM3xZxKXM4dy",
  "key8": "4oqvNXfaVunQS7Eppc9YKqQ1LHM2t4UUfagYXxZqXksYgf7hvhCzPphxM3WRCjDLv2gfrUXRh95PfH58qW1ccWU3",
  "key9": "XdRzaggKTVjFFaAb96968J95cx5eT9FYwPY7k9sysUY8Mj4hQefimQAepiG7of1MqaFbpaFTNk9HZcMgpXeJjH4",
  "key10": "5yaqgcY2UagkjHVEpT6j6YTBdVoqJDiTVsLTc4aKynhuZWx8wzbCQw6NS3o1fagRyVU7GuHntKFXkauPiiD3PzfX",
  "key11": "2QTx9HkWgLQ7uTtzgXWJDTiP5Fw5VaXSeZj1ctDeHTu9qJgqViTZwTjypUdi44fcs5SDgQkwPQZuGPo8ZKm3hJqB",
  "key12": "2pAJ8Wf6Pi6YJ1uS9ZvpfgqqG5xVcPoj9Aq9sj1RWwWzXiXEAnwJkAyVuGFingTv2E93P3Sn87aPmU4QhhqMA7j4",
  "key13": "bxdhqW48ZDHEiXyiKmWdGonopHjBofhbExMSJUqAGR5pbkvyVV79jBhMsW8A2mUQiaALQo2NNKKN95KGt9Jr4AK",
  "key14": "63YB9Kmkwd9S6AgoBBU7Fy93YSCbCD1ArgZMGMyiCvjJ1hDBHNzjxAb6q4TaiyYk9DeCBo4nKoUKsVegNNoQHrLp",
  "key15": "6ihKqdhd3X5KxFuPcvPZeX53Pufkhi1WeG2t21JJszxSg7t9ucWUwTmEZJegJfdjKHZroV7dMVhKNG4Hi86wNpJ",
  "key16": "47uk7T2VU6WZ7VKvdYNSc78S96s6EpqvjJuCY5Dx5d1CBFX2e3D1ww64gMHWt77LPLjoKF8PjuW98ftkpAaEBMus",
  "key17": "2ZB2iLdoaan4swBsdsmm1GjzrxX21mFn1fBoFg2XN8ReihDh9Az1uRkD5v5yJovRrPZ4Y4q1wW1aL4aPBmqLGd89",
  "key18": "4w2Ho2TuQtUMGobFwyqz9YuVuKPGSxUr9dr6ABuDJm5TJUYGHAiit4XNMNTMcpKaE2WRuwQEnMP2yn6FG2f6D3SP",
  "key19": "3bLcMBF2oJyFVaEodyzMLzv4ypLaHc7jGbQVzhEt1Hg1uY1vS8wyu2yv2gBGwgwhSJRXQpsKqU7zF6mQrtAfBJ5T",
  "key20": "3oxBGQXVbDTtVordHyrvNtQwzdnBazMWLFsj1jvYLXYF8NCreU9f2PcGvrgFMczRKso1xaPLKcJMXDgjNHiJdoMP",
  "key21": "5yCwVn9SSYM5qv3fnCZ78dJzo35QUak7t7rHLH426nCZExWib7PDUp8croocKHtLqkMM2PZ7P3D9LYe5abemyksu",
  "key22": "3E7qdQiwLFRExrhHwERrFpJ6dBPGekvWbTin1Z6E67AfR41RSpXFSJ72aBQeiwZgLT5isXrWxERwKRyGf1VTwH4W",
  "key23": "3qBY3dwAprHK6KTUqSvdNrsRZF5VwuQEtpTMVqz9Vr5nBw7CTxriCdQV1zqyMWtsRVocZZYyxnrppMsnMrx2Tc3E",
  "key24": "2vCEMwFzF6Hio36zX2dLieY3ppB27WqLNuRCSics88s9MUvCVp7EX3CuZrAdpL1ZLp3u2DNjpH5FLL9UB3TUm1yj",
  "key25": "5xCHt5Nsr7XytxBC2akovKwcSEfEV4a2E9dSvgrtRo8Sbug3f3MSNTPaomnUpCFngQc6GCmi92c2xqR4muB1rFwW",
  "key26": "MQPciptG6o3oGUW4833EuMsf3bQvfpqxEadzC7EC5tUiFFJNC84SMz1GGqMVpkY5sqKR62VvdCyt4ZaP14fL6uZ",
  "key27": "24N8kChV7FKNobrXqnZfxyi1kbE1xWwWFF8LngQ5VkuuAnqiJ131qwxH7pQiwnKe5SSqc9omXCitSrjKyXGShBxo",
  "key28": "4zNjTvQSM5bDkoF881wm2RYec4Z3dcF8idkrsArAtJXoTUfYSy6cDpuj1MJ6wEiGvQYhu14XmGn5ZuRU9MJmrfqe",
  "key29": "KSefHZBXXL2DpcMcXxV82mFNdFwG8QK3hPa6VkAegHqE1PsvwJuRyNNVidb27Zind4NTBbPEdE7aY7r5k78Rruq",
  "key30": "4XJg8qKJ6TJsNWt8nBMwRUAgbKzE8prjPHetWU4pLAYgwoMQx9X8SPRoXTztho9cgChNgLj4kMpP1XrWxVUxWWNx",
  "key31": "2rT7TYt52vEmAyAZEmqGp1d7PrL9sV2hqnKTDcnPDWRoDCpmnqLyv2Uu8XwXiGbmih4p2NpnMM4c3ZH5r2fFm9Xi",
  "key32": "2fu1uLy7pACcoTRBR5XjkrS6K4rCedcMPpnva9KCzeRUD2trXiUqHPPF1on6sqoL9qCXJVpg6BW3cjKutiRFEy6L",
  "key33": "2qFsr83AQFnqkiC622YeFccMMM2HbJPLYxH6b73J4AtcQPYPJvnBUexFhVdzYPEcf8WCAR1jP4SJeXcKSbpV4acb",
  "key34": "5xJrkYgpKENzrj6G1Hao5DkNwjcPsXFcuL7v8gew4F94TiTF5YAMbuzi5rQXqbMeRXLXJDmN6qwKZeJJYCUXLPqn",
  "key35": "2HgAgCU2hCrcNTN7q9ppVug3SSYS9yoSPnchny95C2mC7pNCsnDShgeb3wDw24ejBD61R4MN6MGgXr9x2viWxuzk"
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
