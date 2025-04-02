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
    "CHzniTZrbzK3pgdFQsMb4DRLAX2ig8mu2mt77XZs68ikjp1ipJA3GhraENhtqqFKU4EUP6VeCAgimjztSE9bwdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v3XufHWxm3jRrmu2w62aKtSsvqswDKwXGosaSpgYixRiXfGR4NfGdaVizbyMnaCqXmsS8vM7AvJbf1t3Pc9t8Fc",
  "key1": "4hvSNaxcp198Qd5pTNov1cxt59woC5szVxH3TtZ4Agh6w5mNtJe2SuxZKKC7FAyijpNBDxkBMX18jzPJcgKfJdtS",
  "key2": "42K3DZBuPbQxHgF4HT1fQ83uGQX4knvvxQD5N7MnaAqriDqAdUNLcboYfK1GT6y64FbDLAKYmpoMMdgyMPjgMMkQ",
  "key3": "4xifcqQYdMfSnfd4dFrXpGC3bCeUth7f664bHXT16aJ29SK8MjJ3XVyPNagB2hp9LeJiFkmHgvTeHUBinRNMuddy",
  "key4": "nG6t6zqm8Dfp3VS8TExS31mvzDm3xsorx4sggbxj3wGYMoT62zz6887SG69rKueKJo5EMot6QP26DbW6Ub1mGzj",
  "key5": "2QLJLUnLES6pvNcpjyTG6ptqZs5vnJeFuhyW4u1iy7r6C5JsxEYict2CUbuDr4ZtdN1xqf4KVpWt72Uj5thiRzHZ",
  "key6": "65oMdVbL4y1RqQzmhNxkBcHwCgGHrZLTkpxDhjJcum8aNa1JUC8c63wcDHcDXMJUiDhFfYSkBxpmH9tDLUyujwjH",
  "key7": "nV9ZbEBoeeYeQguiWut472qJRpBPi6sg56DwosQnp6QziiweXs1q9RyRcSbtb78akVeQyAK1dWcvUG7L9xNNnSz",
  "key8": "44wfcPfsidt8ZXcL7i3EEgEWp1YuQzWK9tXUTqHa89pgD7psgnRFeAmdAZCdCkodAPE7NapKfYXQUGnVZMzMmCdr",
  "key9": "513oh6uwuvU1j1k81qTTKf8p8AyXCcR1Fc2WHLqw2zzSFJBuMeiTVLEseQe5GWaumx1BvZ4bhL3HSLPUuV1TvvWz",
  "key10": "3QfrG1RWtkHHtGpfKur6pHDbqkBA8A7f5Yb6SehcutXvivWJi3qX3e2QWyMH1BMEu5RZikanXPF2ctc3GpFFTHug",
  "key11": "3uquDUrtib9qo7GNF6nCxWkXCp2sz1yJFq1kGVwCzGnqHcSrTwCee4qReTZM9KJjJJMkQXf2PxxdZWAdbYvMqPtq",
  "key12": "5dWDfzB2Szu4fzx7vcx6auU2JhP8PLj2HtdRSBmqbfD6TUj7fPif4ERrprkguQ845VzK9UZkmbQuWs1kLhHobdr5",
  "key13": "aQoY955VyqipKGnUaAvfwWP52TeQLA2CUsTjRcA3VRjMjqYX3uWp4k31DmcqzYj3Ky3LBzDwjdDVKqQx61MoAHi",
  "key14": "3CsDxDqy84TmdCycG8XWHk9uafiLCgRkUY4YprS5WHC7Aa4Z94SqK911hP1kA1ezvY68vrZ8APbUYMSzXbqDJXFX",
  "key15": "3qNPB7EYjHTXDE75YQirXvAEGCDnyX96Z2s7K8bZSGU954uSipdAqtQwbEafuc7WpXTMd6SYSnaLAs8nC4deMQF1",
  "key16": "2GBTtH2aoGcu2xMUa5Qh7TJw1mJxbMY2diUqfF9kYuGaPmdwCVacsyqJYmbo3MG4YM8UtAstgBLXetx8nkmXmSnP",
  "key17": "43hn4iPT1qMXt8RwdyVjpebuXF8pgT28dvtiLzUbNCNJCrb4KaHEAUHpRmh4Qih9Hgmf7FMfRZVa2EQRW9FLhrUD",
  "key18": "7gZNVUY95YSmvqbJQygfEgrUETNeHeLsPx6rhbwnMfHzM7FxRFVigsEYajWTPAAQykCfNjpX6SYuUJLKXQ8P6ND",
  "key19": "g6FBkAuod9NMbCSsA8k1RPaXGSvDbKUtR3Ddih6pzjwXue5p6wYDY5e1TiUZAbDY9zTFjKBB1yvZyRtqACXKq2F",
  "key20": "3Lx1VpaFjKHQaHLxmWji15Nc62Bgj9E794SZzFRhkDFoSQ4yP9p11EhJAwjKQN8kLhEcjaZ1maXptn6DvQSL1nEF",
  "key21": "5YEpVi77AoirBSJmJRNGqJo8jmDNPtGyEgCqZaZGu2PSKUSjGEHyMXiuX7RqoEMxcrorijp8rMuGEfC1t3brTj77",
  "key22": "5u4XxuysfgZFWNib4kWTrMgU1zfg8NcYYsXSB3Syqb1cAKCEvwHXCN5PPYuzbVoegRBneWXZf5HYHXNhc69xhwVn",
  "key23": "3GWfWXg31b5YwCNCUZQPZbMEN7e74jckLE1jSiLutAUkJ1cDSibTfDJd3tyjrPeqremcyPz9KPkPrRfP68q5R2DD",
  "key24": "5YtB7Qj8xJVG6BKn5MEHWoHvFC5qyBvrC7YoopYtHyiPjUFNEYpNu1XP91vWNpzFt8jtmDmSa3k1qn2VJrtUUzCV",
  "key25": "4A1GmoaUcxWBDd1FDF4RbHr6Zu5VNb6HbrgooxVVZ29yQPz3Mzo1pvb9yMTUKyyEQZoAev3r6qjqzyRhyB95DKBN",
  "key26": "3iStGq7NUTDxuhK9Yd1UeBStDmiSbuhPcisp9QZ28GxDXNjohMPQwKAf5QaeWes3YHJ8uB6dtqDBk2jSZFs6uadD",
  "key27": "5pBjUqSdtS1r5KFLk7MMDssbGEgzURzygpWHj3cB3jMVR3uCpu3QS8nULvG6Usze8Wq9q8WJMs3KEHJTG4KfiWRo",
  "key28": "2PEvkwKMEw8uyJmFraF2FQWXGJ37mnqKMzkAUYGe6mjU4iuiPAoYYN2Do5tbyMz8Yy4xBihf59TKqXNXVajWCwpy",
  "key29": "39yJGxmuFdTDTVtL95iAjFndqjHPGLa5UzuLKckwZ9tf6AiRgShCwQmLuYgAsbb45iaAJ7WGehRoZYYEK48ASMm6",
  "key30": "6346cJigydTQWn9RoUZP4kY7VFAamKdbZb4zNffG9e6D2wqAFJDsFL9v7QRRXMJ93UL96RKe9uCvHD2mYRw7zuV",
  "key31": "3WLNurAsqAJpZ83ZsMHhJ5R41zbHRVWc89F11LPC1Uth1AsRSPtKUog7eiPjMNMtJ44J5HLKJgtCxSSK5JkuuTj9",
  "key32": "xDUEbyFcGeuEDoKZPNRwP938se4aAEFFXt7F2wS3AysZzmoGKXjz4ysDkMNhWr5VaaRqu1jNiLkhG8q6HkWyAJk",
  "key33": "4DZ7CRT6LsG36zT5xw9ffhzo6idYLWCGA8mW9nM4HF6ShFw4972XJFjj2U9p8GnVhA4otZra93q3iZcVFKkUoGnp",
  "key34": "5ogecbbAHZyP3w6h77HXbiYnS66JnC54BNZcDFSX1eYkxbdCTJqY22WSFrA27yStf3fFoXe7PU2zeQkntceTb3zc",
  "key35": "3n1zRzq8iNm6UCvFHkXNin8iHqNwU4TRyQADCoYCp7Phjn4xLJgwgqHtxJ8Gwap7JVxWayuak25Jv8yj651fJkSZ",
  "key36": "FyVAFNDGvjPpzjnJfo7VTNutc14fs9Vy6Pw2hjPffnq3uqdQHR2HrkRfnKNq4TpgS8GdgSRWJtuJN4GEFdnt3um",
  "key37": "2sYLSHhPTKnSNx9FcYGtZTWMEDYSxdoj8VDnHoyvc3VxeoQLLUwkwuACGCVbbLR2GCZ5bWdWeQvcnFn3SSGgPwBQ"
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
