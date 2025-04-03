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
    "52zu7WmtMhQ4E1hqf59jEAYLG9iNyZhPH67dbGXnjnhzbKKBSjC7b73fsKik4PsZvwq2ZwS2fczUegBrMgbTHZui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERmXeepuihfaDhSa9ZwDP4g9Eu8RoRbQDWDEBZPThdfNsg587aj6ZHM4t6zfiPQCLf14pCwcjmVboMRGKp2bovA",
  "key1": "3kUbzBqk6MdoRW6KRjwyXLpT9UiW6AFjgyshx1M1vuqWf5EwuWBt2RTumXKBf9u4VF4CvVfHGQdFEXmKWYPPhkK1",
  "key2": "51PUC4gFWfa1pgK3NE5E3YrZfh2oXL5kwHeJhrtx7mvozRYcdErFMEa1xJLGxZMJEAZeFBftBXAjB1GDgkfx486E",
  "key3": "5VWtoQ6tfj3xcvABehCfbPAFnBeynjJBhJowM7CUNPF1Bg6u7cAbq9wRBhpuoQPLv5amBvsYstLVBrw2An5MB8Uo",
  "key4": "45ySVqYsaGgHohhTHBnuY3Ba2W7kFnqF83rZqexs8e4vwX6WRFah4Yd2YUpex6g2Wr7FK2HnJFivbn99UCQDs5ex",
  "key5": "3Th9iJbTQF8ViBb9Hs36FoNC16EkyrimKeByPqkuPRTeNYaA812b9Nn71CAhPXezNnRcPXgyZB5v88bjCYT6ByQb",
  "key6": "3h5hsWSw6EyhQx5UXx6QYXJ6vq19JNrJP3vnokbXNTi2DGi75L7bVdTMiqCQCSiNBNKFCjEoFnWm1zq8cx5bREjR",
  "key7": "28rBuBTe4RAq2nsY5sG3yKbHau379PDuXic9GnCUSo8cw1VF7JzYeB8H2QCrS1eUdt5Tj7uGaRmag22j7qATovsy",
  "key8": "3uW5KNmKVSm56Qamxs14YypW4SG2KtRiw33WkptwefgWNVBat8DYANA1wyUBmJHAjAirCMMUJavKnf2M5mNA9efh",
  "key9": "4FNDrUVzbVd2BLnfmps7fmfFHP76b64L1WigS1BpwhmhegNqxVRdcNi76cHvvp1q8x32jNU1WnWy6LakCEjVxZUz",
  "key10": "cLEm1NQhkFCtWufa8KKESytRi788FANKMrGzEHFXCGnAedQgsWTBe5M5McBFTtXeSWzpR5UU5Lt3AqjUQiVtCpx",
  "key11": "3cqvFCKiMrJbXY5VPbEe351hBu57DTNWRWmmiMCnk7qC8wKZWrTvoPS6NVfgWJ8cirySK4bqyJjjWncZF7HYcsD4",
  "key12": "3QTdGXXcrZs9hauGYX1FG72ENKzsuc3sz4xifQGC8CtTTbosJ7qFX5EgzyEssieaNucRwLn5EgTdHBqVmtRpcwv1",
  "key13": "2b2dcyJ5uzCtoEgX3u4R1Tm2JwPvjZxrqUqcPZRECTsSTBDPQGBoxx9tWohag8NuehLZPCDWABQfaHwCLSveqDM6",
  "key14": "4bxm5XPji746Ck7tYnZ5QGgDxmNGJ3Bt4h2bb5SkefQQxY6uyQfZkWAHMWJmvX67LKhhtwemUEimjmDMbFo3dMSx",
  "key15": "51TXCpcTSNoLoiQwtrru2N9Y6SAWYf3dx9HYk5vFt4CG6FpmAWznCAcheajgybSPgm9B29JVNEb5PZaqHVVAntAi",
  "key16": "5gH8iytA174XWqHr6L8BDV8QjBqUJuG3J29hk757Bt6fvjcwCZkZWXBvqxCjdjkfbCpxFGu3n254wC7FCf9xZ1rB",
  "key17": "LHKCTbPjV3yKn3BePiUS8okPgUtZhPn6tF2cphCMxwCagkbdkk34kFdq63P4mSv2Et1XVTqfbNyjRWAUjQV4v9W",
  "key18": "58nES4HBEE4J5TLK3RX62zUm7a318mAemUnkSR8niJ5GScfSCq4f9utQjwUCAa76wD7yq8CgxTHfNTAjvorp2DNU",
  "key19": "3B9jDkJ57xGuBieaka8BNLYKizTxUzHuELeRuXYQUFaLbGV2i6B2KNvMWzSvf8EAN96TU8GSjJfPfSQ2Qqn8Vtqk",
  "key20": "L32En1ACYSL45TtbB3LMzn7y6JyWPGMR9ewmAjWbkws9RckD8d35pWkHMnt4JB9JSK6LKnnYoupSxy5bUoQsMnr",
  "key21": "2DfxVpeKNeV7nNVCWnUx9gsWMCmLXspgPjuyGBSK89oMyTXFN2tU4fQRwZGSjqqESrdMr3TY1cG7JG1h5dXSEXjh",
  "key22": "4pixqg6K7GqBErSoqEbqRCefyq1ccawr6juj5i9NwDXayvvpansUGAXA2VfAXmFyFQWrCDUBpJ7YVQFwUgPZarT7",
  "key23": "4YKmGQmWeNcp3LkvqtYxX5CojktsvkRgbyszbd5VjwzzPxJzMkqaxQKteWbfY4ctrCowPxdZycWavn9wYVJnfMWE",
  "key24": "2K5a5zKy8vgQK6WGmzRvWWHqXw91Hxp59YbNw6svZQ2AvpaanWRQFUNyFDzM2kbhVKjjpq9tbBkzYcvLiC17tt6i",
  "key25": "jwFFGR7xn8D839aw5RbgdQYACrnSiXaEH8d95zAop9PQj9gqUA4yce71KDuEqNWZWCN9P6cz8YmoCuU7CMm9JXi",
  "key26": "4yw16u3YT9V7sh3HuN6GkZPXUWcbNruJZMjPtf2dxfU8mg5qumpZXwMRA1VK193PG3iUbb9Rf4d8KjDem7ofFJgC",
  "key27": "2XqdCnEHjydAKAXjQngrozyKjteaybZzSyhjeNpwqZmqJ67dGR9cygjtRukuioodgmbWge1yf9FBsj2nD6F8YRJt",
  "key28": "37cZJkXgmcrLjTReyL1TD5hDm92gPB9bsvxvtnQ2Uq3MrATT2BfciLsh3gMTk9dHrH3e7yWNN2D8NVbNCbUJSr8X",
  "key29": "2HaiahctcyJrnAonpMzZTz87YMpVhGZmksDdEDcTYK5UwUQ3BPY65aeQKKRBr5ouY73AqJTc6A1Uh5HfihvjS3U",
  "key30": "3oyeE1MshtDiu1zyJnKhTwBToJXbd4LeSHtJ64d1jpZJFm2jA6WGbSu4BpYDTmjUi5PWWzNhPnASzCc7FzXW9Vmg",
  "key31": "41ZaQUpMVKjhUAVJvphERdd7LFn7NAo3hGRxNQeDLg5yh2hysVpkagKK8vjejEZaYijVGiasccRuyZZR2EdkY8DU",
  "key32": "4iF1XsgAGxnHBFEriVs3y4DLSuxvL7qZB4GD3m6ttFToX2bFmgaLoRZRPVjiHKDFnBJqv3iKBk6Szb45i4ykYFF1",
  "key33": "4L3k7GjoBB5ryifZ8bjTNozRxynrR21mdRiiMdy47ufXnNj7bybFYHhovqtjFc2NA1121NPbvxXKPqpMhdWZDEcU",
  "key34": "3bhMU9mLQdwbvYVG8sJw9NjWSz6RSEcgYD68nhzEh4a9yFbAuvoTam9LhLVHDqsFHHHMK5va1M1vuWMK71gM8auM",
  "key35": "5ivmb2acU7DiZN5MgaJ8PU2Bfy7GLS8WjpKm3k3UCMqAhUJU6gq2GrnzPtXeMup5KxoKrP13ZjxqAKaJb5EPnrFx",
  "key36": "2oC3uyXW9xierDM2xUtXe952Qg54LUjNSDK1HP6kT1ubxR4Px6z99X8Y8X5BRqtyyceSY93hsL9BVX7nvH4jeVVu",
  "key37": "4DkyxbEvVYAZWgJty21Zj7xjBXgWP6iuCbXJWvYaaw5t1i15gN9EaqMQ61hSqEnBbpw1wJMbQdb1phvkEFmS8Tje",
  "key38": "33fBqnjtHdSLW7WcHmRr2nys4i6vxQYy7jmRDecFrQewuNJFNbRRXdDVdPvMTg39wF8BaLdV2qNtbp8pNLM481Da"
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
