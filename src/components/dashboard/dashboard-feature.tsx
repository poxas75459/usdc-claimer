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
    "DWVrTFsABAiKyAoCs8NCXTWjBAdScak2uLdQbEU9Zi4HcovzM8pRYpeyT2wniiP1QC8kp6iJa3d5wH2vxGHtaAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qY1KNihVk6WGcgAXXVePChd3hAi5hCkziqXffT52jydkopud3JxeCrX5wKhGc9MtK8NkBgWpQ2i7s9ijkv77kUW",
  "key1": "3KVz953pTnusdw7qb4SjLKuqdoyPJMtK58rWtGLLLLmy6qKs4xnJf4XromGsN7rhFNYu6fwMgWyvfn82iyvb3rcr",
  "key2": "3gQnnJpZAVufes6jWsdCv8ttGHsLruDpAF5ubw6zDicK51gyFeavfVkFAQmryJbc4UFWWxkhePPrfWXLBit5vvdm",
  "key3": "2K8M28DfSHJsasYSw9qXns8oSAVSsD6FLaAyWwrH2UBuSHDLhTjLzx75tpfNftQJcSP8AUNzc5cNLzGYHn9QLQUN",
  "key4": "57CUQuV2HFiZjvknTfqRDoVND5vSDoJEmgH5NZDoHUPSx3ZbjACBrp3VzU8EeSndq7UdcbQBybjxWMjpakTmDrAR",
  "key5": "2bFtTJYfF9W34cWebxTchmzRQYivWYGnh7UbW5pabAQ7We5w83im3tx39hmTCS8kssiwxjU3ZygfuLtc9Wi8T7WS",
  "key6": "4pR1J3XkccGtu3WQCSEJ6Jh8GbCei3Hc2ftDEzQt96bJj3n31smeu7CEvqTTaUnSRrc2bF4Db4BsuTaZPcVVz9N3",
  "key7": "4EMWJnfDB1nCJb7Vir8j4J578GJmxwLNcmhmj2mR7tGDVQm3kEocqn3YrCsxn5Q2VNCvmByEP8wv4BckFbkvoULE",
  "key8": "3ReNwVBCDz5Jg4ojfm4RuJfubv7KLT4xrij2NXSkej7CMpmvc1qMspmUyfbwikp8S23SvanRe5H2PTw325g4i7Qw",
  "key9": "5d1b6uJSfeAXjzGqeCps4mRXTjJmWFXd8HsC16x3nuno9M6zymhPgiLHsfuKiXTUwmFjEHfFn6dets4yG32mDtRp",
  "key10": "2tuVMqnPoNJF5eRQ8bGtwHzGJZrsjpiLQ4CWesVQJM4Um9jZZUGMonWbesG9cc2hXEwTjQqZgwsDbpbi8rPmCWYH",
  "key11": "2qgx87sEmoZyMXzqTzGe4yichMqRFjHS2MxYJpkVH3KnByYrFAyohpSMz6Pk2bNPnoGsi8kT34E2Ru65MvQmFRpc",
  "key12": "5AwyRB42sEzzAk3xKjymCk7RcUzM42ZNwR2ZXAmBVWLfXctTYeY4s1dewqR1bZmtfgdbcqfTYC7NMscPpxfshf1z",
  "key13": "5Jh1WDK47KBJkJZEbJEAnyjGmxfKr7HAM2fip4dwRXZPd3CaWyuWTa2zkfyfpf8bhGkjrXtijd2jGVdeZJ8d3GSs",
  "key14": "2eBKatsjU38gtFr6v6vz4GKb7BKib6QKErhxLrTEgGNe3p2CafNbFwgK6u7VvKfe8arHuWcWhYrhNKNZWyCRsqir",
  "key15": "5SbwG5xWnzDhMuK4zk6QRiNYkRwKS4ovXLkR4mDJCbXJ8qszyUf9a9V3cdykDmCtBGrv5s5CEftNe6w986V5KVLG",
  "key16": "5ciAfRjvDxGqqLP8MUiduk9Z97Sb75ffwu373xc69E1CoTGGn7hpYmqUG9JMWiCNwQyV3UDV2MjerPcsm3F1aAS1",
  "key17": "5UfVQViYUUmuGpkiwhVgdwZ4m6iQK5wc3jD8Pwj6GScEHUoERW7Wcp2q4MXgpwVfity9KNtW17g4fHQUQKbe38zt",
  "key18": "69ArGLpwo19UNkNdMFWVKGsHYgDsmd6ajDqNa7tr2Xa8HBcQtyoTqLew5Rjx935Un3YwCa1mR8w8RhTYb3wCEFd",
  "key19": "4Lk5obFPaGL2ZRJbt3ewYdmFKtXXtjLa8K91ekLuUchdbrS8VcVshB4ByUSFk7kNFmpqvr9gVurdN9rEXVtqLFFT",
  "key20": "3BfUYVACZ2nfrjeCEkg71XD5DGtvhQZvVk9imTthBEqZnG2ZVZteXuVMEgyq9hPrXwvQvpctQBqfz9BC6APuhth2",
  "key21": "4QaQZdwAuZt85kDeAqhYE5kYmRHAHFf64dSLfLFnjVCCNk2ZrpgWiYEPu6MadDgDSgU7c3UbHePhg1xNPhtS2Lpq",
  "key22": "HoigKG3RAyt2452yEThUjVa9ip9sYntdRjp7hogPGVgs4kfL9B14GWKFpqviP2ziuZQ84W4mU2ws4bKsj3cej3K",
  "key23": "5RPaXciJdg7qQ9mZV4iWWCxut9pp5Qge7hGJKKBJD3AiEAAEbSkDyFjq1jAbGqRAC4ZHzHpD3xWudhjXL1feZwh9",
  "key24": "2PnDPkQVJzvWLM8qb68bBVKcLg9dsJGoKLH6hh7QmiLHqGY86S94PxkBGsYtAhXhVXzVfvjyXHPsqmNBfXKLEZ6U",
  "key25": "3Y9i9rBYCREX3HQAkbFnzqRGuH8vt3vcW1kQfwQePefefnPZpsuwFvuhZyyepctfjrMg1UaMep39aGZjZH6Y5XUP",
  "key26": "27Z8VesHs4y6AiCG6yVtR2gApocMcdzFzsiyskrmhYPUvJRuvP7FM4bdKXELZmzWA5swg3LY2BkkEbT5KG267QZk",
  "key27": "58HzdoZ28P6QR4EgeN3FNprztrGypQYc4h7VYCc4ZR35UrG92P4CoA5breGcNtSXRcbPmpdwVecZLubeFKRHJPd2",
  "key28": "2iByc9jHXUyU8P1RYpwFLmRWXh2UvBzGVbxHbaNEoNYsWSuZ7xWsbDfxJoQ7J7tZyTPq1a8Ze6L1hVYdR2tJBZT4",
  "key29": "45YiaqYTwb87xN42ruryiRR1W3M1HDZ6UxtkRjtZNhDsvypMyc3H7CSDKdDbREwd3TNMCJAmLeNPCzHkULobGb8s",
  "key30": "47T7rnasuMi7uKNNArudE4cERtkjhTnosHvvsfnWda37sae4hNU3D8uaeKyB8QHEjDQctT4o17V1Y5EqQS9DJzGj",
  "key31": "4oCcYdtg1yULteEwnKuJNnN8Wzpx3bA9x8msm6qdX4o78XJmPR1P8RTRH4nuGgskjAAXqcfYBFhcTdpne4yCd5Au",
  "key32": "22WdtYj8jw8pi9LDW5BppVz7ZaPSPW1H8JQxJn4B6p9fH3PdoVKNdQTfZHs3Y1h1W2DopNQZceVcMs4qhwDxD7n1",
  "key33": "3bUAk2DVkYuMHFdC9QeLBMxYVoHWPDrYcwdjpTC3R2n8JLCR3PdVBDsdE6YpTiEXpuHRH4R1omVij6FP8vGwScJQ",
  "key34": "2Aifap6URQn6motvjKtCb5gV9zSbxw6xsS3T5mifnFztzCaiv3KLcJJRhkSjen86KjYsnz6oyVUFBujLs2Xm9xuf",
  "key35": "35iPdm6CdC2i5C9h6SZDtB62gYMiddqG3q7nps2igbvwBmNM7rb777fPB8gMgY97ZRaxCL4EwR2BNCDhY34gf5hN",
  "key36": "21PX3NECfZQViWoCHSsWacpfzYuQQ7h7vE2zeK6oZH9BQLGZw1eqpQg4wkuNRJJqVENek2Z66q5x1foo6PCiHqHp",
  "key37": "17xgpyqCgnYv8o5LvDFUkUc2Ye71T1HNZjr2GRZJxAJrxMEnzme9JpUJAnFBSXUQGTPshQhwVYDrhYBXowjKSD1",
  "key38": "MiattyDBNR6n15XNvbcjYRyLuMqp8yDbYfrFyFARhXyDYYGS9kChtYEpjURY36re7XtxnegLtqBUx9qVqqUeNyV",
  "key39": "5FGGjFGj6v9fZAKbCuRedH1y59BTpdZ41dyHCQuG6TtGE16PpMie8UnjXZRe7MqD7gfiukAdA6Sz1PnCnv8wAwz4",
  "key40": "2E3xjdHmeRKsAQr72a37D5BWSnpf9B17zFqrxPj7wnqnfRjaMzXM8Qc6iv78XN8QJGGBZzqVUMRoQbxE27jE1VfJ",
  "key41": "EY6axbjPGJR4BQHv7445Mcm5HsoWhCwmj7uM8UXvBm9FsDKLmgX6NJkV9U4NZbNbxvGnPyapCUQuXb8JGC76J4F"
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
