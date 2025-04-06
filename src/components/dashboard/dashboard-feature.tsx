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
    "3mRVCdxVvKQSnQFiV87wBAkLkyw17AQZsBJi3L6foJoSksmD91EEBMPv7y2KvLouE9pXbQkXR3uJYRC627kitz11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQuHgHw8qr54uEvCfVQyWy6EsyoKn5zVecroWHMtLA8NLokQahXG8huMjMS3fcwXBGN3KF5siyNehM9bp6B1YPX",
  "key1": "gasJoAezfiX6HqFeWyHKaDXVJzRmQcxsekXVFiRGmw42jito1gVTSUqQ1HcLxeFnA3npuTVCijjwqfARZHaTzaU",
  "key2": "3BwSkfvjSzdbH2M4qsnwqkLonUkjRHne2nYcqMsWchggucHrX2zhSxvf8vuNP3XLrMdR5bAxxMZFz6WBQ9dwZLh9",
  "key3": "29smAshfFH8T7Qq5yfxAWHbWKvmR15zBhvA8AdmthXFsgBFJQNCLoY444TUE6k1Jg4nL38BYsYVVqnpamzAfs3uf",
  "key4": "2z1cfLY5eAnjjJ3xSDhKwWLW14QRBzH5cUPXvJD2gVMXuAK8CXSZUARdSQrQMLQnZNpLaftwpyq8tC6fjc9sbXAt",
  "key5": "37vR5uDKMh7uJEJ4MgY4dRFMqZpZcsare4e3SmWz4HJkYVNEtU8hh3693jDp92M7hcK6SrsHnxYZDpzFdKJ1fMTp",
  "key6": "q9QZNeVmUdBfHFE8oecsPTwWJPZVWDUYfhkJtuZKDCmG8XsVxB1GAzKdhgobxT2jAe1T2MyPJhNsKg2NEfGDhTs",
  "key7": "33UhLkJgpHdVMYJyKay4KUn9uYpsT2hodC4ZDY9VG4Psh3HLpbBU7UfYyAfpCkVgBCQVtiLCC7rfe7kd4Wos4inc",
  "key8": "5Nwzv3i4SDRZtBCgPsoB4KKiGuByUa91JEomKe5gdgChRUGBUo41nnZAzHtcHxdqAJAjexRHsNzBhVhqNH2TjfgA",
  "key9": "VyDswTS5HMTU5rsrwmhD89Qmz3XXe67PS7zHBcHLsuXstfh9XQkSyu7hifJKdEZxjRveJA4xP9nBrsaopLVAE5g",
  "key10": "3Xr8LEwhmZFqgFEK5JnozwZMCp85MPLw42nBPPeKxiT7hmg3Lhxo2Y9QNwggaJHE8YRc3SGu89LP3tLbScdmQosY",
  "key11": "3mqp5Tb8aykBBj7NtoxerdJWjU3eYUYQwQuybbutDBU1CYqd1ruEMV3BKmJG9EuqZwPKNzNvcCebTu3vxC5mriWN",
  "key12": "2EUZxc4v1kb6xFNih5BrfyEYGB1T6DNEW3ZmN4DHTDJSGcoiXHvfXf3e6926Xr5SYBKB11W4ZoHWpTNnVReH2pLz",
  "key13": "3ECgQfXUH5cwt6WTUdTj4Lcfxg4gxVnUFMDzT17TNuvXwcyz6BbvRtu5H3kq6Cx25qkyDPWHsaKTExtnAkJ71hMz",
  "key14": "UQb4RSSHekWsF8t9541tW1wGjLUhL1tETh4JqGb5nARHZUHZmLdE7imH4QqJ6qTMf11YyfjRrZ8iTqhkiquicUN",
  "key15": "4pfo7Hx322vJGScrq4Y61Aw3PJBB75A3GiLEPXZsmYZKV8danaLUPT25ximaBdbiWoMQ4PCXtKti7ciT9Qriawaw",
  "key16": "4sjf5iBkEjavm5NoArZfuiXkJ5vruPZUxz6PimFPkLTvK1ojAmx1X4v28AjY322gg6Py9bYm7NQoxZjd8AenW6ZC",
  "key17": "2Rit7peUh5nCoHGyF35err1ibu8Mfb1Nk8xcQE6WR4rZxTJE3MS2sgKkYmkQopqzAZ3h91FgesvABY6mu1Lxc6zy",
  "key18": "5DkqrMyjcVh94iNQaxSiC6UxkzVwTXeJxWvAah6cJT1822MSJqrwMCUEGp83qrQquXT1ZByG3RL1mvr9p11kgXvY",
  "key19": "28iSHhzSUVTb75rBMCeaeFgvg7kLSPQJRQfZjLuuCpd1iNUnxKAmjtqceNNP3ZqEonan9u4CWL6svYBAwGUrDjPm",
  "key20": "4Xe4GjUHZ23suZLFNTswHMDxwzupiCnbAVTmfUNi5W1axeHmb19RHn4Yx3pFhPagc2Qt8sAXeJmZS4pyq6i7H7FV",
  "key21": "4qTHjdqd9TzVfm6WV8LHrTUtN6PHkx5ypbc7fiSLbexEvh267HwRUaqfHSNXas9C2aw7zJ9XXjYXcgm8wcyVL8ia",
  "key22": "4B3KXH5dChyQMPoMxeycppL7uc9Aj6B9KJ1LjrSrwFgAky3jP7HSS5qMg6TJ6oN2heGcFHkHpKQZF1Ybuh6gvKaT",
  "key23": "2cHULTamMVy5aZr6go7JSoaFeyQeDJSMz6J8qU52wi7RqkPrdxEGYdNpoiF5ehr2mhLxM516zi545DnAYmX8irud",
  "key24": "36DScBx4aN5j1zUhwnbKZNLMVQLVU6ycdPcszNCXCL1YnG1JjMcCPmrbu74nvxRN57FgGxZbkkTjvkrUjJh9od3P",
  "key25": "KcKMbTkghi5aefPmgRLMH58qY9w3Nd8jzsioix5yan5fNS2eioQUxSRb7YBW9boHit6jnjuuek5X6Yst7EZjuQ8",
  "key26": "4FvgjcbwumcHAmPk442gA2fr9JgB2qfjCHvh4fe5bLXTiLMAZFVUNemeyA4Bn5UpCnXvTouabBM93263kRHJAtQh",
  "key27": "4gMssRiueZC38aticwrkzMgJBaa6W9HmKB8gzfNWZQtYLEnJRA5F7DXB1ii6rXJK44S1JnHroS4YP53fmHdvG2zz",
  "key28": "4JDRgJ2umAyGx8sKaHTNATA6ZBqLbHULWytgMvidcS7FpAJL51Ey31ioC7vDxjUwR1bKEgwyaUg9FRMAgBau1yzi",
  "key29": "46eAaKn4W7azpfJEU9xXersoEnvAdbGrNJfkwUSUhbiPCcLuHFeuYT6eXfNBnKCgbYqbEiS3AHc7pYtWUK5HzwjK",
  "key30": "2MtzEhfuAZf1hz4WbN4dZZT685MdtuvkQ24Ua9VEorqsH7faRCqMQZN2iyjN6gj3PtfWQD526FGf1TYr1Z1bwqpA",
  "key31": "2zKimpFGgac1LKqM6pj1eSft7D48HaXyZGZR8b7ZB1vpQ63anfoUJ62AvX2Fnk1aWy2J4rrjjvVWAPTPDmVtVJZY",
  "key32": "4nLcdTH3m7bjb5sqwcC6AeQnEBa515955KMw6wESRPWsPM8GM68Kr83qMLVJ6MdiN5YVufn9WQgca1H4pkTk7v6S",
  "key33": "CHGgFa2ZR66KnCWSdcWDysMtEXyWuc7cH3gfAxj2daKDsnNvwGuT1qVEVPTuqAGD9U7Y62PTSaPLpEfTLveru9t",
  "key34": "5tRQXoaWSmQXXo9WunsioMytneaTSLEKQDkw3wjqis4RPagFJdsdd1PB5iKkdqjjU1kJdgrYzkFP9fUa7SQxgTfb",
  "key35": "oi8G5g4KUeSDXaLgWQrP12P5XEVcejhHytW8HGrvo1Qpa96REn2UMMt1BXeCim4dCCoh9WuoiXVUJmmbCSvcDug",
  "key36": "4ZJF5R8w1g3v4FSQnkJNrW6HoNcKYKwGRPwfLUqMA45ZzfnnmGQCG7eVzy8f7EKPiq2scowhurFL11o2BXdZKZhC",
  "key37": "2AK7yyQrihomCvfQQ9KAVz8Vr4pu7wjMWsnN3oZoDH1vGKWbDRNiPSmKUbqzLhtLMieLJDNYYb8DV4ZTUpzkZAeB",
  "key38": "23v4NdPmZ9N48g4aMmNWQ9LdJQ35Q9EaMA6QTF4MkANbfvhBSvF4ZYSJeEyuVMausaSKLrHTKZdxovSre61qBWaQ",
  "key39": "3RqhY3FaA8g5jhVuVdcbJfg5PCZVezNPagApRnTrLpvNJ1KdmLGJTcRZDFesWEn98bzjuqDpRRAQv6SZUh7fBwix",
  "key40": "5Ha7vipHx1vCscsmUm4XMULL67yXMkdVnvpJAmKCkUChsWZFRuD8WC5HsmdPbKJQktzUqqZoefZ36RyqejUu3H5N",
  "key41": "67KCajFRD3GZmYgYyiUSoKry3fRbS6NXPAd8k6nPEC8gDQqit6EhMFqmeVVRk2ZSoDbQPe5NNKWEX2duxrCA9nNs",
  "key42": "2Hbu1AvQqNYiFZBAcHgo83BdR8Q5TyZreRRFtVjZnM1nopx3VWsdZEo9jBwNhnAoyrued26c2Wtz4Y7wg3qE3Gyh",
  "key43": "3MacTBqpxEZ7FGXfNX6Mynn9ZEjAiFWgiCPhmHjrc8qvPQyyoMXWNwCjHyaqipsZUvn2gRhvhybQiPzB1NVDfiwd",
  "key44": "4QEWntdD5Qu1E3m6Yr3J4m62nkyouShMrqHUiX9hM2rWJcsHeyDFPit7G9twMVAJaiGGmqXQr2VXyB17pJRdfScx",
  "key45": "2ykf3RzXwffVMWvKA4yJnvkkkyi2VMAKYj4p2tW65MwH1YtDFApwLf5paRjPwR4FHTPBfGCQEZnHrJSQ9aaHS6zF",
  "key46": "aaA3Q9rqwSoNVabj5iBpx6DzPnY43eMHNSNHZGvvEE1KBatGvrmXewMVbz35UXrgibJNAieyeXFTpzavWY2bPhc",
  "key47": "3i1ViQzFX1ia4KfegjTA2JFMZocbQxftNzED3TKLX2TaQ6JQKmFoPgRdz44EK5f8WnThaLynXMMqvgQAxfSteEbd",
  "key48": "yoBzxPHM85oM48z5BDDfwRZMkiWBvz5aVrxasGVK313YoRzXykVdCV1RfgTKyr51BK6ufNxCe5wAwBMYgE7EemH"
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
