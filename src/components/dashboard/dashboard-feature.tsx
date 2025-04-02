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
    "JTJaGhwH6jhFpfanGz5gNJizMjmzMTCeKHt6cJLuktEoFnSzWLYaWaDCFSb2Tc6fA4hp4j59o825314nzWAw3sE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o8txroyJVrCbGqETRbb8gGqvF1En5PgzAd9sK642dWeRZp4uoy1DbLEw2rQcZ7KQhg9VrtK23UoZMQxTmvS1vXK",
  "key1": "5LoVzeDSqk3L7KNWx7rm4NZBFbwHBhtTuxnc1az9Rku4gd88qRRgf9Jd4RoC5SvrvFktj9z66x5pyz9vT2UKFqUc",
  "key2": "5gHXHL7xTXLso6rTtf8qMqY9YHxNyYsoM7yXxZ4nS7EgTjcKpFayjTeQkmkGUEEEDuD9fgMCnPLYFDssZDevSjmJ",
  "key3": "4FEuADk7kL9d8gWB6adEengcjZ8eR4VPvicYrDBh6wdrMWg9KiKTM6xKjLc7VNr7ZyNwfHAWVL55YYH2QoXQc4zj",
  "key4": "tgje3x8Ue5wvRXZo3VHZADZZbbkHDkxejn7orByNJ43F8cPUB4fFt1u3GRYBxGF4JpEYHSPQabr2y3Skh95DfZq",
  "key5": "5PiSkdiz2EUTUcamR5bR5ydkwTzK4D8WyKjaCCnswEm5Yuv3mbc8Ng8fsCtcVrLnWZzjz6Tbj91VReAqX3eRzwoL",
  "key6": "3gDtenHw11xok5hV9tzU8dU7uwAGdGfjBKAKC12VoErYfWnWrBu6Xz1rFeEF2cKH5N448cZ6GtBt5GcwajS78pUb",
  "key7": "4C9dPB1jkTSoZFMf62yyFet7ZgR8t3dLDemdu7jo3XimQdDXJRSsFnwor7y4mrhXUbmVQXrWG72nwqJ5cwG1WTZ6",
  "key8": "5CmXDmjqow6Kc4PPvqN5yHCtSe5Frvxux29pBc4wVrpvx72nsqCt4Yh6DpycKM3qzJeB8AQ6LDAWD7jixLWbCzAn",
  "key9": "28iGNZ6W87pmey86A2ZT7XAvd1vHq35x3KyogS9chJH9JVZvqbkxYiRn7rDY9KcVTSHMFic3id577nha752S8g7B",
  "key10": "SNLi1fpnopNdAj5DYf592iVNLkpYptQGydugaP1gB8NESZanADQkh8HD5WYMiDyfiSPT7wawiDaRpXR4yzQ1eg4",
  "key11": "5nv1EG5yMrzrZaLMmnwiLyk6WXN6A7a9fixfGGxj5Qub1866mkak5bBH9e9Gm8nKaXyxPyUiCMRZRDhD6n6F7Fgw",
  "key12": "469GoMEC637EUW4SxAVHi5uSWFrXHj6mYnDL55TU9qCYMvvT1VCGfq4zDsJKk4WLxxNFifsTjAuVWnMGzJXAnxsM",
  "key13": "58CrCZGVobH7nyzhU1kwSCZhZc4DeY8pVRZaZe7SCQKnzxuG9EK7suBhZ4EQfLFrvDJ6b4ZJepPnUrJJbe7erWnM",
  "key14": "Stpv3L46PbKeAanXeFvBcZt2GFJrCoJHPT3ddyrMC1w6tu4hPrgB4orPFCsA218Pnu44ovcycbL36LQQpiFNhVU",
  "key15": "3c4CUXZkRn6SeZWe2WvfMbLpJtLknB5wHHsqaLoUf6hEqiCa6ksm1vtFdQP12ov2KWrzACcps9jbKYJkEwr4jATw",
  "key16": "dSNeyuefTCFRjJevHyg8xTBARc4XnJoD3bmx8jxtLtoDUUpyWJoF59KWNfSbG378uGEzT9fXo5Yp9rSacHcXi8H",
  "key17": "2Pve4uyiGvsMkKQs1YfWiA9R2LSTYWWeEjjUTx53mR2XjtmKEJVw1FLgCEqJserRVHrijnwsCQzVX8h4EfodB2cz",
  "key18": "3c8tyyexYmnvf1tziWxX2Wfds9WG7RktMoXAiKbFhhuALM2tcz8QB2LixvFbuUbuwfMnoc6D5V8cYz4XA481eNd6",
  "key19": "S1MSwFNUoSqVUUdvySVPfN1vDrruwbzvdVM3NAzQdyn8TG8Qsrb6rkNd6jqMkHAtB5dEZp8TChzp3rCjYWmXQJL",
  "key20": "6225Dvrf6mWD6EywdRJ8uSH2PwqL7epCQDVqrapV8QLe1V6nNoFcwrM4WpG8pJMiYDp5PukpTdg5rDMWvA84dknW",
  "key21": "2HfWzJaJV3xTK2zg8xMLhGjJCaCpRWTtovJMHh5TyomFehTyDLRVoAxTjFyFLkw2QLeCceW4jCNZXDwutpgrpFD3",
  "key22": "3pDqnzseDuA3vUV3xuHEkT5yyzohmXYqtgZx5Ni9f5bqeebhtRyyiAExssDYVdYGH1WopAJeZSyqkd16A8dVM38U",
  "key23": "59wU8wKxhqqLXpY9RcMe4Enm1582enSTpZYibY9ZUHJ9NVegbHhsG56dHKcafUxbfpuPYdTYWzd89gvVWLmPwYEt",
  "key24": "5curAriptpJt6Nbx94DQ2SDvthbrfpZpcrkqgZZs3emQmeLNFK3gdEmoDmxkdrsMTvEiX9aXMYmSNZfJWLPJNEaQ",
  "key25": "5K2M6EN46iQ3BUgGS2PQxNw1vHsHUAGX42gbP42VJZhugAc9JZxgdx7ZAUGsoEfgxnFUfPPBUw91HabkZEbaK5tk",
  "key26": "4PJKD6byfDzGorVGUs9sBuHe3SnSQiD7tj3cvhTiVnMiXU4UuvQdjoXbL6HFW1sziS5vPNBGnBkA69evBX1Z39MG",
  "key27": "4xtVAEGg5wK2EiUGtH4ucLrFuKYbmf5roQps33hyLaJSpsxmiqbjoBXzXzn363dCe7QLpEZG254m4AG716AxUAT9",
  "key28": "4NeRE5bgBmdVdRmfRpBVG9xx9rPvPwrQuPshYKfGqfyD4hdew6jE4NSCRL6FHfasM9p6g4fcoh5nXxszKXa3L34P",
  "key29": "43oLzBuxhKUfN8DcyKTmEa6wQDGZpcAg8YAbReojwJkQVX7zH8M4F9jPNouVuFLo6jCHscS7KybB4fZKi8BMoBEn",
  "key30": "5ixqDXiAiVs9FWdQZKjRxUHZDoBSToEkvS1w1JKWhPRyssjVc8cAjTxqr1cdEBhQGQPCqmNzh6S5P74UsdV8Fht7",
  "key31": "mtyiWrVEEoCScrKoKqS5USwNJWSM2rp2g4njnXKFmHAwa2N5AbmVVVPEmfHeVZRaimmznHTMuywdAzgCWKR18yh",
  "key32": "NXYE4znP9XjHT2tFueFtp9MkQAp2yP3auH4R2G2kAnt5wEKnyVyX1cWB58WXomyHiKXqXukxqx3yfZi7YNnj4ZK",
  "key33": "2P9Aatej1b7GjipTM2WRicEF8weJf8gEr4KDnady5WWZinMt4wkor15ocqQMBhHvGbukFvmoPsBYqC8SHondi32Q",
  "key34": "4LAj9SX4B4bViixHVSs48HuqJdqFuamj8EqZPh6xQ1pFc5nPCZpprMxEvFA23iP9uC53TW1HEahHvFsfbBbXqVXV",
  "key35": "639itHSmJ2gQ2FueVt8RcpEse1xEjJayGc1kGWhibCgZygYb1et2SUm5JmHpEfnqU71sNdbE4FCzhKgGLpDHPumz",
  "key36": "4YgmqReLEMbZ1gY7Y5sacigStjg27MwaSiDxuBMZ5KCFmckjrnZAExuveYDPuhZ1fUDF3akNpJkisCjS53mdhAxk",
  "key37": "2yNiNNVv8RxAR7qoESP71izhNjtRSt9HsRqxRHDxxbBShHnDkSanJqkv3mJU861DcH2k9RZdhktwXrcphRQ9bjnB"
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
