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
    "KJRM9dv4V336JeNgEujfTUE4UkKZxU2wwhgtvCPkqKSLmBYBvoPfxX74UmRPwtTbYHH7ANZ7WVRHjryLHnBQh7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gkk191ALRBkDZkY2Won7jgmhbFHmGgAkixCDgaHT77vu1sCkj6CgKvU58GxMqafUPaZt3DSGf8wxBNMDvzCZKFk",
  "key1": "2Uz6sYw6K76VDc9nciCwVtyM2so9SAw6dH5SAHof5tFRRDk1zQwsAfh5uk7JbjsUVJ85tbSmvx8CVKSBGerDmuJp",
  "key2": "5JXQXpAdxe9ubdZpNUSyTAdkScW23imhfyMQ3N8kzt6UJEnY2qfvCjR2SrrVhnz6s9awp1zbASnRAKTzQEEvVcUR",
  "key3": "4Y9jh84oLyUX1cE2bEPSgJax2y8gabRcyjwDtM4WNU6yhf9ZrR19henvZwFCLTH9iYyaKbMdeBb5XZvrtPP1Nbok",
  "key4": "3ew2nscocENk7J6rVgx8Gdx8n2nVUgTdSYKCnomdYuiYAkqWByRe1JmbB2jiyhzfvk2CYGz5GHNVaQdVippBQxFN",
  "key5": "4PmnjihP9XRc8JRcJdxaHfvF7FQjaccKF4gpByULmEXbgm3bFrrU4qV9ZvR75FpzgZq6GZTbHqLQFu8xMbSmPzHN",
  "key6": "5tKb5Gy4vu6f7WgA1PT1zHYQs7bxFmxp875WjUYf8WfHGn4Wy6uBW5arb4WnstRpsrosyKWmamHthc4DaextE32e",
  "key7": "DjLWQeYFLqtWKAzLmQDL4H5hYqiq5c17H63SQVuLwnuyanTYmJS5pWM6GGQTV3rbcPbHfhF4Lyx38M4jmifUMg4",
  "key8": "oduexEm2v8sbnyQCSpcE3xYhrYDj8e9eEYyeak2pZq1VyWT2wczjVX8i1To4FT4GKUaY5TxLWRC4rjCrnyQUWmU",
  "key9": "2ruwJMnoSojhjaMbTjLRyyg3pGVGv8apaXPy3EvJ2QCv3uZh1dT2nRWbpD1r7ZbJosH7oeG5uFtjpnoQRtr6Xxry",
  "key10": "4AFgDUANz1vbVQL4YwsEpL1Jr7jQ9CrbVzZpe6ATdTZiKbn4gzZydkKwvHuMfGgVPunTDLbptdhJH6mFucFXXuZV",
  "key11": "25MJ3pavzRAQtbf9npkwrnpXshTiDyrRKzsYKJUKLj4X6r93uAm3qR1sQnYkhkoKo7WAikKmosjiVSjex4L2vAUJ",
  "key12": "5crSgEWRLsyWPcEP39kbwQd9FmAkEAr4jiWqoz3xXWCSqrR1Wc3kCZA2qoRT4fb1Wgj3iihDJmsCSHykY6RinAR7",
  "key13": "3TmNHpe3juRisFCNXPRkWzYzarnRjPq3xBbga39Emd1YBSGFafiAW1Lh6ojJcXH5G14fc6grrTgujBRPhMqzYuyg",
  "key14": "4sVpBwGfg5wAGuNcqqRhSJQV9kZbc1bLgqyxdM5nbLoSZ7E7ipxPGKpbqhwbF5sPsHpPa7s5rMJ7uhfMzJV1zQX9",
  "key15": "N69Gq8wWX651efvu2C3NFXaCs4MM4zMF6rGgQKhoyL1xHqUNWhh4Snc21zBbyni5pSBwNe7X7SawVmZgweUxiae",
  "key16": "22PXJjEDMYZtgJymq4rFmmjAWdJwqguK8gwfLcX9qaGnYdGww5P3Q5ynHYWGSuFQ25MkNsfFV5WQcAyF3rEA4Gif",
  "key17": "2wGSKUivkE3pVJc7HVrV1PHKueheuV8MUo4ZGozXUxxeDeoM9zKzSaSq5KN1g2XgGQpCdC83docsYVrBQohVMzEm",
  "key18": "5iuBvq6adx64jxwUK9H2sMrdgxUBCHyUrhBsApFuseiAm87FFB76sfWzxQCWPkTCVBGx4VJt5VRcgBrvzm7mdRr4",
  "key19": "yoAEuCRi4scAUiNNpEmbszdzpx4DFbRefDW7zuSwoRLPypAZ556CAaezh8DwHr6rQWjHqiZ8Bv3Qnu4hVgGqi3x",
  "key20": "5gASkuQxmJfzZGgu1ma8SMjDHPTav9yetvDJz35QnZwDHZ1QpyufSKL2KH5GWtYgUSXHtTUMV3mMM2VmRTtkkkh3",
  "key21": "16f77bLLrWLxs8zvYqSj2g6fAhKKg95xi4nz9Rx296fSD8VDNYavhW91LKJ3hKaXVUwuibS32dX9jN7bx5DXzKq",
  "key22": "2zZaHFy4zdDPvD4DThAjmHLEz8WsP7sxZVNJ144kSVDTJGBjxU5U3GpCxfC8vt7t61txxkQSWQLip4PmPFP5fhVQ",
  "key23": "eD8HGQFkbqUHPyTkT1wvHuZPKZaaguL6SZkRSrRWEidpWyneJvyV4nyqgUUtwCgu38yBWY3zRqQiPnmz3Dar7PM",
  "key24": "57sT5Z1nk7PhEULMT1AvfPqwYRns4Wr9KRamrPNkWMGwVk14EdRe5srm8RBsme23WWgVjBcPnWj4imFQyMRsKBH2",
  "key25": "VKTjgnDbiEUGLjeF2zUg3B45J53GhMiTy6jxnX9arBhye3ucZfZrH6AjaGLX4Qw1eh9B6uZWSijLitfT98Bk6cm",
  "key26": "5niCYiDajgAWHCGi1ArZgw97Qwg45HfqSkkeLVUkg3k85w77PBqAhXJt7Tk3f7pMJbPCdUDC4pWfkLcJPagrrJFY",
  "key27": "3JizBvL25CXwsCvuRLMGtgQKKPA619VGAaiqrUE7kjRdhhnAsNyCTp6hzK8d2fNwixZKtHmXFAhxK4j9Sn67qPm6",
  "key28": "3s6PmSLCzXygQjAPs9aL1aVg19zk9ThWo4zo5SAGU2dTEUsetKoaSxPwAFEieJz1z7apUddDURXZWLQxnzb1ZzJ2",
  "key29": "2AAtXYXwCHZHK4TVhKikyp6knv8tPqFfWWNPXiJa6w2WyiMCXAvixXjxLVJZJyQyJ62ZCwLFB1paaLe8FYez8oB8",
  "key30": "f9DMeHGTUfkD9q6CMEZCsVfDK6ViRwTZFDDGFbZayEbQ7xD67LX6btBxkjFxUEPEA6a8N93EofzHaEGvf7N5cLr",
  "key31": "5cZpcFKSe9GR7cFy8MGsbar1ndHiSJTS6pz38UqjwWuLGx2LGTJorgeuzcVtWxD94xbLn3pEC9uMiZhLqtgoK4tH",
  "key32": "64QeXQYW2zZBgm7oN55C2YwXUyJVhXarmCtdDpNSouykR8GkpQEtw6JN5RthreKZGtXcXgPjyQVcfLiRqMTxHKen",
  "key33": "4YZvFLnPBEXE5Ju2Gihr5fvzb6LCAb7rfMpJcedYohSXAZ7w8Eqh1HQPDLLmskRQwg45i6ScCA7TT2kn76CwJsHK",
  "key34": "3VwWKTpDFbHYj63GZ1F2Hs4iuPemFAxYUPzAgs7yPTuaU1fgW1HXAHKHCus6kPqMc8tGxMyqgfGZcvfL91ijRq4U",
  "key35": "4aYAsDpmuJ59bkir99waz4h9ZegF4Zee2xQWwAK5YxemKw9WeBydhC4s8wnXL53gesrLtqR3iM7TSByu7tmN31q2",
  "key36": "5AkMKG7WhpdH53JbsU5znK8yeriHrYDnZtQrzvfKnx5nyGN2XzNY4VPYaN7RP7ckCtfVDd7woka6gUk8kykAY46Q",
  "key37": "qSWHyY8QNUuEFqMJuaPJxSx3hv2wKSVwS8Ka3J9YZnt9bXCxfBSNiFNAZBXR2ESN5XwBL9iuFkYGHjCMxb3Sv7C",
  "key38": "5tiRoiG9LttWyHnVvYVnSsLjauSQoCb4Rt92Cu2TgqgkXPfrMP6YAMWcUXoPx9LDb4NcQTR4GQnoCjcbhHPEzjYD",
  "key39": "5w8CiGXrHwb2baK9RxX3eikSWZnrWGAVMzKXrFrBqRkkJymsbVm7c1T3FLaPJRUyQ3DXzyEkxqwYaHW6kBNLcrHE",
  "key40": "2LLo2XEEw21hLa8bkvsGjNsvY3QknciABvW9dyD336JTAK8byeuYNr6CcJ862NTCJipfb7bwWBBoumnf6nNAZ9RL",
  "key41": "28w3j5iZ5xaBzFTX6uSRaR3ibkeepxJ8XjCoRYVmF8UTXKtAjG1bfxbdGKKKyDEbmkByFs1gecDYphfunGxU1X4R",
  "key42": "2g1Zp5t1QrV5j8W1Tf35jWXzbAYpHdVRjMhtJq1W4Jr3dEKnL3adfc9XpHudUgiABShzt7veMjdvypYo56zGKGkU",
  "key43": "4DcKLKTTKuMeJ2C1s3NB2prYkewJ4RCmf7GvheGQHEadPqGbiHU1WwH8JvVpB5H6MBEwhpbqMWfEJ4ZVNipbWYeN",
  "key44": "2PDzhY3zavLsWnChfg4hdYHBAdhAE6vGSRSpHWaf5L6emVG2ivX4XJteob3XDkp5ym8dv6PySXLwsMNTo7CSeMou",
  "key45": "FKBz3Mkz6gYQ828SdjCmARE1bSsMMZTZ7fxi6G4jicr1TKKJuLh5MnjBo5R74hqAPBtnTk9duWTrhgcPBv4pHkX",
  "key46": "5bRWVRfWwF9N1Nfgv8wA6YFHbr5Dq9UvZfUNuT6yHZ7TYgy9gBx2Fqkxz4imBRT5m4R4uBRqcjfePZTpG6k5DhJm",
  "key47": "5qkyfRRGBUa5tZcacpho8pRVNTMFjopZ1MEpBrVx6zB5yMqBbE5APcwwjhr6RjtZjd7dN9rzcWb9M9ha44N8i3do"
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
