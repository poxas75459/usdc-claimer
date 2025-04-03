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
    "ySMoVGR4txgHQmBSH5Hneao5WTqZsJ3bk7Nm6iG6oeExDeZ6v5nE7VLajkoTFhpKNX9V4NonB35VK1EkwqwGbXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GdP4AAdCRcDBocWfFpN7yTsoKn14ZjJkGA4bD7oruqjQmvwftTDQHbdrQkUndPmLNqRChYxYbn1m8F3LskcoYTX",
  "key1": "3mVbC362Cm5WmL5fZD3d1z14mEXME1utUFZpWZSkqjiaaaxNjHNz5MTZaMvsseXcG1GABaoa42RygEoDetz9zQAV",
  "key2": "61kNGFPkSriJTuLn8jkvDFs1ToiNoNiLANmh6UMrvCVNmyhhS9sxRTNvttWG6xYLJfdVyvfRLTgtExsaQN9u4nDG",
  "key3": "4efyvqALKQSBb6HstpGGxtumtsQSRBdrV8UYcrPKpUy16fJN9dhmPy9Tou1ZK35ocLjYWfuv9W9sNjtqD1ScuGHz",
  "key4": "UPJNrL2pUn3qKVQopovEKBdfxaDebapCLkU8iRRe4332tg7sAHzsx3T7y3ewgDezbEsV4BCBgNSXQiAw5QSubhF",
  "key5": "4KN5mGMuRMUN5qKT4QEa9dLn1h85hwsk3BsAzb9e3U4L1qS5XoQTtjJVhfiCAvu9tkCrVETDnYhUZnxEj1xMTLzV",
  "key6": "3EP74LkDuwLAeRcAMxqu3KgsaHcFTG2NwHuXsqScjgaHFJyB4N49AuQM9X4JoJCmREgTbqJkoFP6wDZvDQitxjtX",
  "key7": "2fvsZ8GzH3qGXKU2ftvGHncyXRnYEyapt2sHSHC5hUL2EX5FQLWXL2fUXhyQGemKR5m5ujSDv736ZqtLgy3PaFs6",
  "key8": "639gpzpZjompLtuGTqpFWegPLaecDqoxbDDSaaUCAhs5SanEPyCvr2kG8DWWgutmmN5bZKNg6pZh3XmrALfCFx5E",
  "key9": "3ED5k4mnSbZPSiRCM4VFmWjzwo5xXudvJMZeBAqXn4F8SYUodLbyaPJ7JzwUbm9P3dFzz7y7FH1qqdLuo9CwpdPs",
  "key10": "53d6NS5ysuXFtoip5CLHAzM14pR9jpduMXET2Q9p7nmQtg6kjWV1vsoDS3X1wJ8XgvygXgGxe5UewvHD3i8oszTP",
  "key11": "4aE1skWymyHja46GTsnQJCNcXnzm1KNFf93cWhPxn8wtJri4jknvNsz7jk9QHQgigM2BfeZzHTKA6dYVq1NbZwNM",
  "key12": "2biHyTpjVRJU1RfNDgLZHbTTXCYGhALFbvD2vGf6DQXLJC4TEz54Zrfz2HkLLLiLaDwrNhegzL8ay1Svicp9J6rZ",
  "key13": "2oxzArHU5TgaSfCnPqeS87zBqFBpcQScjJYRShdfYMLdt69syb7GNC8btSLsjPCMZjP6Ef3xq2TLvgo5moQy5Xvb",
  "key14": "33Vtam39XrDw8a6uED4ztKErZQa7FSx45aGmFScfGDEumXyYDhSFm7gv7sagzmQ6wSoKZYzUCXw7g9xQGafZTg5g",
  "key15": "2gWJDKr8DcRUHBLiEnLQLXJZWcyjdQbLagmq2AVVv2HFQcA7RWaf71eXJZCNH888K6NtaLQBHiALdGTxHjeHUkF",
  "key16": "66Uh2NYoB9YjQJzWUFQBQKkFHKc7pFnEp8LiB9LpK6aViSrPf8MUhKCb7KBvAoHKY3ftNejcD4YGUgwimpGinyCB",
  "key17": "4gw9LNffsXz25a73z5bF7ikXTEcgGSV9LfDtN4tATbStXWANQY1UpcofT5gJFT3yMTjEhsUqDpMSHKAyXiw2Czif",
  "key18": "3TePSiaALiHoVeM4JcbXCrn7UXqYj4gxvPeG876xC1e8EiP8ixRDfRKs3HUS7kEm1ohx6hHyxyRRbQMzJ4TpGv8N",
  "key19": "5ZxJD2VLuRrKzzqATuyHE75BJaQSXTB8uvX8dTYhaV6pz3DSgV56zbk2qHjEJrCZb6YwLMNvKBMYinJ4WuL3nvX1",
  "key20": "51RzYX1RF4f1SEL1os9tJR6r7ifAELieM19q5a3bTVGs4rKXywjWdjDQSaG6LoqzzE4jcYzMGC19tUGPobuFbcbi",
  "key21": "3Ejwh4U2iNiwzyjh32RyYzPQXsiy2eqF5Ts21YJWGHBs3yFz48sAALRksdDQJZTW3jFUDmDYUkjayGovDntQQXBZ",
  "key22": "44Wwa198g9g9QkXvP7VWhHQbYreFigH4ujSc2ZgWmm4Vyv6641upb3qaSrSuVeEt96zR9QJynSda7Zvgvqf6QKww",
  "key23": "4nnXqeLhiJZVqswF83Ngw8JWfPLf8c9Nvysc62Tto1RBcWFdLS8TPkbEe6CvaMzsfgVRG6G2wFk5ABYX4SeCB3o9",
  "key24": "5pfSXnj8yLyx7RKcNnSWnEKBjimxaD6NdGAyBwH7482mdqueb1iUCASph25pbdtiut5Vxnern5T3M7jgHUvDjmmN",
  "key25": "3futRHfDBVidDmrnTFCbfLPsCEciuVbzwZoBP9dZuBTCaXFtCQVU9JypA7PH8vB7xNMeaWXbektFMQeyQBbMq9yV",
  "key26": "xvYFwMTHUSikbzq3QXw42yusaZ2UAizsD3ucZcNvwo8UScVTk5PzE2NKZjy1bF5C3QpW5KMxYj8fpwEGShnbvLS",
  "key27": "rUeCeP2xvJxmWFw9HsrR5Ey1nQSj8iPnnZNfA4gzVoTNnktEoSonX92KSnR1YVituzQ5PGaGVCSWWAcwG9XFx7q",
  "key28": "3wvbzoyWJLvJkZQB3zTw5GjA3jBm5sP64JoQ7JHYw3mh5S2TC2h49ShfnX5T89oKwHVjfnLEPDxDUfxsqmLVDHym",
  "key29": "2nz9yoDxyNkJRJAXM2xDEyPGMqmSCwikLVQqSkWxxnsuJSJeJvH2MQi7XYARE22foAdfNW2qA3ZwGfZf3VLBN3GB",
  "key30": "3qAQog9AWn4BW4H7YGkcE9eaAHhYGokaYkYVSAzvuXrA8uoDLMQ6BY5Tzpo8YtDjwyT3bitv6J9MYFATA3X9a2y",
  "key31": "3zar94j399hvcWYw31aeQUWsnZEGsnarR63T9MkkZWFmwDfSHptcbhUrvYkRVGXmV1iAXzLxtnCvcDiMboCThsB8",
  "key32": "5GNtYY9nk6qYtMjVh7JMSLV5KSoWyr3hiaW9c5z2XNNiZQu2XJ8zZPXno3vR2GwArsBUDnUAGchn3cPnwNYT3M84",
  "key33": "2ytsvnACyfMZcxbEEfL9zqTuJMLtuAy29mQfaTuWLAp3CgTZLnCjjPL4wH9JGqxep6QZS78D9ucQZW9Cj7GxvUXi",
  "key34": "3frKHgKWdpVNpTGVnZn6WHh6ViqnBCxqKDkmxDoSrzAaYJWENSaPhywUymwXvoZdNaT4yTCKUeh3ThkHgAiacFyS",
  "key35": "4uS42HRqtPCwDZJypiH2GkXbkmdgvYdRRBt3amSAkzAKRAM9fiyRjVdttpMMziucGu3jyn6xdYt4Qimf49t3mNu4",
  "key36": "ufJjgKjmHgDsvH87tgL993e95brcUyKrqe3N6BSHuDPQY6kN9mVXTGhGsseopW6hR8rKX2pGz9Va8bkno7zNRFc",
  "key37": "5mS5G3yxJKTj3B3pjiANfRA34uz6VSvEWRNoHaQKUTDxDmaqZVcWCpDWA8PxtVkqj5dpTzDQ86w9qnFwRv3EFzio",
  "key38": "5mH7QsMtjbaaQShWEkMQoeBnw14P7QYbKvowd6xwVbLdXeuqVjHQkcBP5qmFvFWuygXoAC4H4Q4B9BvdJ328VFY3",
  "key39": "2mPQhc8gYEnsuDWBfT7ueZ3dTDFWyjiGQfhYw5yH7cBn6KuMdzbC9xdnjnnEsGKV2KB2AJJKVK9K3FgLN5sYA2aj",
  "key40": "3Dto54MQ8dzLbHJMkYPKb4iMwsX5fFkMzcPdLERJdJgK9saVijAGyyxxJyUQQBmmtXuKMAnuYE3VimQFU3DeTTsu",
  "key41": "iTfjKx7CHKS71UK56jE3arcuLfy6LWvG3cVwQX3YsLNrG6G2zeu1r2Bg5oeAEP7yMY9yNv3bfHo6YjPXfVucbCf",
  "key42": "4sa64fWX3SKB5GHKnt4JDYwqLZSHVgqxZhrwKMRvLBk8D9oafAtQ1fJBVecfbYrzhrw3uybreQFB7v972LWY3Rvn",
  "key43": "4hTmQcERLDPrUGkywSoQGVkxn5AHfPbJu6woAXAEUvAkjYvH2cPYTFg8byNVWBqG23nJKxeYFtBwikM4LqTjteNV",
  "key44": "5sg17DuzaYAeecqhpcjz9sKcmvW6Wp3Mc5DPACDYwbrYvaFqzPmcHGhrKqeSYovzX5TTzArkjQLvBZRKAgbtiA6j",
  "key45": "3MZypPAsqDEHuGsAkaHcp1S6F6yqfShKLkjk6zBsTmyxa2PapWcTb6oDoYvEjyZcmmbUEwvvYuUF271JRLpAxmS4",
  "key46": "4ca1FbCRrw4NK9PDD6BYTCAZVF6qSRFXJ9ACuJqwgVQsj8yfhCwVxAPcg5EiL8hrHV2CtnWHnue3duxLavsf2jA9",
  "key47": "puz7ATo1SKPeCQYpWkpPDRPaLFhCamX64PFZ9dB66WqYKHuF27bab4YikX7Un2Bk4eoB5hdUCXjroGoA3aEvngb",
  "key48": "3mmtTCQLF7arp7HNsgLKg2oPxtABGsrd6Wx8VanYDUHCxDhyNMHP5KgpBhD79Qd5swEudGMaKA3XH3E8vVhnXpVJ"
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
