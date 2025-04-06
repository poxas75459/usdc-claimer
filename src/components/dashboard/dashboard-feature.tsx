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
    "5WERyU4DiW3bg7B5MPSggZkWakjN49cKxhtpmt2ReGyePbNdq8frLmC1S8T843kWYPTvDsi5huDKotkJHWXamZ5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T3C4Bwg4fAGt81aKdWgqaBBvfXG1bbpmuh8b6qRtxpi6ew5yt3UsadjUJvYZcPNVquMoik6nf4w5Rot1vuYnrxZ",
  "key1": "2hZdysnAzfFM1BhCmk18nnBZP1kHsbg2QTLkuKFNdgGP2qHP2JzTLjBteL13SG4cB4uYPW2mcthvtYg2yLwFYYME",
  "key2": "2oZFoHT9QHQb34hAdn5ofDpT6eg7DBALTwcWNsGibi9yjoXb8kyViYq1KiCTNw1s1sCUfk7LQ35YGdhtb6Ae6hwh",
  "key3": "29PijzoWrLtp4V22ruTkKNd52kc7vNNkNAetXvtKhkpgg4ahXqd9xa8TeDBteDJvAc375LBDKP6wFB1UGwNdHmhE",
  "key4": "KdBw6yWSFeoxZtYsj6cFRz271rxGR7bYtb8Rr1rxwm83UoVAQEc6jkbudQrzgDx6VuKPcENyxSQ9PQE1pzENPVx",
  "key5": "4gxzCHd12Aoi637prtMgMeZJ2pJC5LKZvWh5czjohhj7535VWGhshKSUbcP2utyCMcVk7o19LeFF4dpWQv3Sy6Dj",
  "key6": "PKH8Z3w8vBQC13AApnm8VWMbKVrA3DU4baraF7Z3PmPu6LM9wd7vGbNNex8d6MonaDRxJja5QKahGJojNDeRMyw",
  "key7": "5g7wEbaseiRWXqgYLHomn3kgVimgUmfL83iSG2Fcjo7CNfJiQeQWNVHJiMMrbtRziQzoMnxyXQmUV4F98mQMi6Az",
  "key8": "4JT4wvKMcpLqNAc4Hm99NHQsXfP6Gv1kqM3UMJbsQB3rwQHfyp8weUBH1L6r845kGvHKPNtnhbF7d53DwFtSi6Uj",
  "key9": "4UoPTkKXEw97LQa5nAfiZYR5KqKyau9nXGrwgJrR82Rzaa1mbEPGjEnVbK68ZB8pMits1JXo1XWyaTXuBDpXdJr2",
  "key10": "53cBg4GF8xBxdKBWtxxvEspW4omfcZvDfzWvEVC1o2WQts3Lzq143h7qJoWR5SphSjLdeqALfKWHoxv8aMyULAuZ",
  "key11": "41mciJiDaU5rGoabTy244Pd4LF7J25otsDdJCpgxyUH1Z4WVkEU3QkijBWNyQWeGrttZHBehgszzFTuYDBm3B9Z3",
  "key12": "34tayuux1djrqdrgHQPDYxnPzZGqj7FkvdrpyAzxdqeufm55T6HT8yahjQMQsYL3zcHZ1ckjgHaLT2wUCRn6wo5k",
  "key13": "5fVS2uzsEHJDf5BEGjAeRjRSpXrkR4CvJg1ZzGkbbVf4C6jxkkpNVPLnr9buKfXVV6eoMPzYXBtS13S2UNr2e8ox",
  "key14": "2hTKhZFAWX3fWJqFaqfDTmaJVfyh69yGRAQz1vZnx6woHJoGavxcQEug8mcu7yux9XytQQvHSxZyF13csVgWr6xD",
  "key15": "2igUzcd5X94QoT3n39Hzo7o6kf7pCeh5ASBi66JoTanmNLu1R86faKTHryGQgLnLFseCN8NbNxVwLnmeTcgaVF81",
  "key16": "4Gnsqw5MYGd2tDcwDwma8TTNeyBssc76KK1NvxotiZPhkwzL8FGRBnqoXHaLbvZBK3LD5QVDNZ1hvgbNjGhQBWtG",
  "key17": "2GRSY5F4zRiRNHjoNjpsh3a4dfjjPYqqLWVRu18GsisuD5GRJcZfCfQnJFL8hNQmeUt6Uh9EXRbsRiV8A3G5e9sY",
  "key18": "3y6wngPYZzCoxUxdRPNNFSVJNDbWCK4z26RcaY7ZkUCVND2Hzid7k9j4L8PLs3PUizU5NTmQkvKrgxv41rTm24oX",
  "key19": "3XU68G9jZcfZ1YMQUPfZrWcUKkDRUJb29KwvUCjaAHESHL6mxxDpk7WdFEvQAEGeVZNXrrdbt8cRbDoozxSxj4bD",
  "key20": "5snE41sPEAsCug6dS9DaAD6rMQdg1t425Kq2iwsUuRqfJzhGN9HboDV623k3oeQVjtBZzxRHCogU7GNijfabLXGY",
  "key21": "4SuS4agoLKyVPw9bzAwsQjGqNZeuTzbp46z3HssxichpnGPGGrZzWgam9VKY1HjDj4ctrYkpJEVSxfACJnisWgsE",
  "key22": "5oCJwWaycDKgdMucKedQapn6cYjuUE9Ai5gcj5qfZ4hvcZZ5BjjeuSvETFvRmYutWXNX9FLFZeEP8Yxc2TRUTmCu",
  "key23": "2Xuws6YfP2VgZf4W6ewzp3mk462BLxXAccx9dL9qTPjPuWtt7LLXzKXT2M4tpyr2Bx4tZucW3gfRRAf9T6sioXpV",
  "key24": "L1hVFE4QAhuopTSfCBB6CCQD5SsQy1tE85qwrdspw4sb93jrqNem4cFA3y3byaJEQb6rUKZCZtf9TkVsozaiCyk",
  "key25": "4idds73h59iybAfcoESt8QNc4UC1QZzBcFLwkTSt5uBwt8mZ4URcU5jLvq7Cna99BWA8NZ29bEkGprw9P3FmeCtG",
  "key26": "ak9DEg8pwfHB6ta4sz4APwhgWSDLLk8F2MG7DjQXaSefxty5kr2WM98BQGZNJGe3tLJqTpPsr9ALUTj7i4LPA8B",
  "key27": "5Wdgm6wS8zh5Br51n658z1VporJ4EW4sabDau954eb9wbcYQS56fTgLWGRYeC19iuC7aJugCuSAJh9BXsGamHa9i",
  "key28": "AnF3ypKwe5MoVacevzcLoNdESVKQf8fRBSJ9tCVxoseJztCMtvGhzo5JNFYgPrFTTp4jBsJCovAJagg1XsB8py5",
  "key29": "2SztqeYzEmbhEBCzecEZmfFHCmWfUDNH34bY7fnV2qgUEuizXWX86QzPQVVMvUVZWRTbVzvurBENE2u9hEEe8prx",
  "key30": "5czRCBqpAf2ejrnTfvcTf3PmNmVHaFB6RMV9bEeEqT3f6cmZbrLevrgn2acf1DzSz3okVBXWzF67ieh9fAkbcqMh",
  "key31": "4YwrYv4zPRXGf8YX58fyHZd3y5RkuYx7Gd5shhnuYKh4CfzRV4xyHpre3vXJBoSLGVfcMwqeihVViiohcAvX2Lpa",
  "key32": "2BXVWFh7gK97wW3Bk1vyZErZzSA4Znra2jAc4tkLbFPkVTErvYNjx1oFjHJnM4DtSPeybPrw66QiZ3R6Asc8iwdh",
  "key33": "7ug5H2vouZYeLUjxpZksR1eXghMo3MWXH9hFSyi9Qvo9DFFLJdWLff3qGByrMabjzopRvH2SpPsc4JxkpHk3Wi5",
  "key34": "29gQC2A5KoZGTMPq1VLbXNAtnDehVuEDqvhsKo5u48bYBVzc8LNg6wPAHmhhsqtDoUwy3KtnourYJx2rom8r8NLE",
  "key35": "3NCwRg5PmfNxHMbBZZHmLAEYua9GYsL91jmVEcorudSyqYSLcKd5UB5z3JPE6NqiNgLgwic8SMEm9wL8Y1BvrkaB",
  "key36": "D4kxcRsr7nij4dAqfY3LguJMU7DNfEz5sWUdgNEA2BkhCwn6jL28SdxK6677pZPUrB1Dwv4NS6c573hmND7RwTW",
  "key37": "4NjRVUmiHmDyX7qziRPWqo3tu28rXBtWgSsvR3GKsczrUtcRdfyoFbpqaLk45VhPaNKNjJqwLNhWMj6prQof7aWS",
  "key38": "4cgpW6VgzQHBSK5LxgFbSuabCd32nidik2rP4EUdsx8LDpCLJodeq32YhngaCCoob5UFKyYFdNKjfBYwBhVbhTuS",
  "key39": "5yX49W1JZ7YyT4rZeXCD8oGyQDhUkBY5un86gvBpB699WWPns4Su8x8WEpZf1wifXrUop17tcBx79ezqeYev4zaF",
  "key40": "27rPCu64dEe7rR8UJFYK4NHUFKGz4Ky4yqK2W1Rmwq7gshkaMS2uXn5q7BvaKCeSsqEbX53EEbrEwFoqLRuC3HUM",
  "key41": "2dpZX59WAT9SbX2mNSTbuuU2F92FyGcbWUN8cMXc5pLzYXW6JZs5CnKTgJHfQYkp3sK8x3kjP1jm3dsrvQGGSCRK",
  "key42": "5SuKjArYEAzJ5avfJYTibTZtxh1JeUSD3uPoh6FVGsAu5FACvxUiXXpo8zRcoB9uw3Suzue4bZ3a2wTDuFGBknFu",
  "key43": "64UaCwM89TvTiA8EMt6EMKDEFSk8w4AJRdxNSmUx8JGpMg1kWVkDrv4Rm9jj9jZNsKcy1cxKfe8NQfsV2sJhniMh",
  "key44": "2Yc2PGFJpNxmAbncTiDEwq5jYDWcoHX8ZnQ7GVZuUXEEt9NCd1WLPLNkc3jLEsHnwwWP3kMHujk4wc7pwDJm89AB"
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
