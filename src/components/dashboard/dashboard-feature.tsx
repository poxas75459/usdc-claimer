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
    "3qKXdD9pGBKyana8N17WyZqXLxGoQaL9KsCZim6aAWVE6ZpVbEtkpfHz2QzbSXkGtoaKTWzULWwNPFqXRWgppyN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29q1qQcLyrp4CLp131fMpDizhLtYKwdhzZfDUXZwR4MS9BrHpLX4KY9Fw4Btqc7y1NS7kTMTahtL3HyQrXcWtfpN",
  "key1": "2fpuHXhavadFnHebb8Dy9QuLw1NkAEmx7p4pq2v8B5UDM8uedgedu1JRXPRtaVva4zRyuC655fi4sWRL9yCZYe1p",
  "key2": "5ckTm13aL9L21u2cp3bN8LNxefWZiwnqZvggZHFNE9uuDPBg97a7v4LGWMos2fQR7jtj2T9zX5knDJqYYHHMaAhi",
  "key3": "3ycc2x1fKrtQMBzJbULUnFft83cxRKba6nRrQdvcaywNXfp9cEpQ9TqbAdLjEpsyot5GJ8tT2rgWpXCdanCfWjyg",
  "key4": "5rFGqFvScESDr8kyfDpXEXB4Mw3zpkqw2hDizNHzsaZ6YKx4FLVnpwghA1vAxHSwetSRvwQ2sZrYjAVsAKMGcoZx",
  "key5": "67KzUo9tTzHYMxXx3EUhgGDxzUGMZK3hawrrQWtAjNgSj3hwe8khu1JHMxJx1KcYYWxTx981sVpq9W2DtE4GbD99",
  "key6": "5Bbg4rAyyBz9xj6cFrS6DGNixiyqZn24tVhMvG6tA8L8Aq7e2AiY38a87Ku4zfEg4wguRnrw6CuRbxosiYwMB2A2",
  "key7": "2HnHda2tAwHqYDBxzQy4g5mUkmNEP6ZeSGHDVcWuKyPTNzbMZe6GrBoSF31C5ZgThaf7WM8CgZysnbTQnzSgZZUy",
  "key8": "2vsoRmKBZF3MA4qvfuUgGShDqCY9uSwRz2iMAxBZPY7ES1zVJv3j9tXif6R2KjtsQbFZ1WK6c912mb3QFrNBLkjH",
  "key9": "5bcG7zhUmBuMaFPYC5yNykU6GsRWv7gj9j1YNuXXbahVBJKeNAx95cAHTv8oARPqwrdUfVdtJdiMCdAoWxKXaURC",
  "key10": "U7yXu6fMTY5fkGKsogzuoUmDMD1RTvK1ov8NveC7uFMFuS4YXUnmxNADMvthNsnkGgSMxhJ1624egCoAkPcDYBP",
  "key11": "5D2iX5i7bRUZHChtCCmheYZMjSx1J5k338cQkEZjr7ZrirgjKUGha724891FFVtHRVHr8Ejru1yBAWM8XL2nRaKJ",
  "key12": "5z1Bq48XZzVansQ8BPLRyo3ufhN1FyX7HshTVwnMudu6NFCoUCo8qa96XoiJGM3kVMHDoP6MEzf9114ga9vAT98P",
  "key13": "64K2dWiA6BMGSvsXBnLBMbPuAzVcj8DQrR46q6yGwz4a8q9Hn864LCK128krpa6cB3xaRt5PgQ5dBov7DoqwjS2F",
  "key14": "gFp9Fqdzu8Sq79xTD8cBTfoJ1w7PH2JAJ2ghQfvUPHm7RiSaSofASDvfqfNZEG4wMcX8YP3k9CMHd7jNXquPAp5",
  "key15": "3hZZ6HaVCdQ2m4Yq6w93vqw2nsPmmAmcpuPYwF1tyGCdpu3rR28H7QhWwoECxAeiKLGxtzTz2k1YdyCPdrxEMzmY",
  "key16": "3GdunEL7M8ksVevnnLtS2546hywsWpJa4HR963zCiDpNZTRAReNmnQU33a59gS5GrddLzA9kFMRonBckznrQJuQe",
  "key17": "3N8mh9X2idjW9f6AcYLKp6qXnHQ1mSswucZPEUKp2zgdJn3EdTq2zAhLL3ooSpeuDmNWkm2t6VRTqnv6PCd434w3",
  "key18": "3KsZvGCtfmGGmxkuahnzekPzJ5Cd2NRyXB2RHFsqQLaKdsUSUFaLohY8f5wZdtuLXfwcm1riqn5LAWNHnUKmXSbT",
  "key19": "ero89f8BFmUqP4pYKDM1Ut7zGmsDY2Wxk8sCo5dDmxoUgjPjgjcg61LfPhMFxhmogbqN2WeHYpra18Tn7nfBMAz",
  "key20": "yfL3rVtp3tyTYz91DeMH8UEjad3Fd5nbuXSgSR1jY6ZVBqXyBDdtPvGfGKMHfpSuq5SrVwnVDXcR95wUZP1TQQ7",
  "key21": "45FkSvYHzQL7EML32SETSeEyEU8KfusGguSGQ77gefcv76JwAsyCpETZwj4ew7ynWL9nZwZHiFRLFMDfS8CRj9t",
  "key22": "3RTHKbg7qzDovBvDPpApXhRXMpRMAUK4z3FAZM5JNa5KffFwwWKSUWX9oi5R5w9kUG66pJSzKQDos5bpa7oKJrSF",
  "key23": "5ZBQn9C8ndXRQuv3tULcBQDz9KYuYrivE3v8RLzProkyHvjA4p4CpNco81mREWgvLnm5EYmeHWbGnq6J44xxtTQH",
  "key24": "22pq2UV48oW7xfMUfx5SNvE77GVybegPMFi1Mw5WT7aESL7siiEXLAgMCZCM9BdGSKhLTLrG9My8XfG1R98DvBXk",
  "key25": "5y4ZL66a5uNQq5ps4wsxLgvj7Afs57k1V8hXPMfmurs72DekG9ZmB5xp2ahnbUwm2tMN5KfbxvcKL2U5Lfv3PodY",
  "key26": "4F7MYz9J5XYwebnjEyj5u424YbrjdjTERQUoSEtvMGaU8Mwj5EpEeDUxHKf3cZnpainLrrsK6eEFmLXkn5n3pWjJ",
  "key27": "qdqvwAuYtu1BjJpgmGpTmzQVsDyarWvcM5SGAu6NrmTdsgb8jmPH6YQj2uCCbs8qFiUoLY2CENCdN2zFLuKKeLK",
  "key28": "LLZu3tk3QP4RNfFps237y1rbUUFtyPn63ftd7E2rBDGjeQgWB7MBb1gTT9oqKiGURpZxirYXgSMGGb325dpPGK7",
  "key29": "4UMzum1pRiXPKQdyivVGegCebxXFXMGZ35HtpWmA3ivovXCE5KxEcjuZhGyimPW2BCKMXhQX4wdJ6nVya8Qi8Zpg",
  "key30": "6nRxvPswHbggYNrd4WJLGqPr9LTYnE1UmVe5AZ1ept8Y4sWQfUYUNGMDP74c1GJxjyFg8HsvUi5mMUmnZegFtYo",
  "key31": "3uAAEASDq4AuKKXNLFHGsxgxnMdoYa3JgeWLPFLAT1XwAZMSRwHw4xMKNRKwdjdTvtrdHrryLJTufeqs62bhyCkw",
  "key32": "3JaR578uFjJhhzwgR6PZXTu6PqqNwoSZ93PV9QiPY4f5Tc2w1DEoX4L4CwNXDqe7Q8SdmKFuR7Ky1bFhk1LSVecK",
  "key33": "3oZ4fdyS1ZWFbkoVoDVLP8Jo5VTnKYULKqpHQE12nqJtTEo9x9zcJzgSfpnEGdDkut7TRQVpDnkPJjYfVkF2ny4c",
  "key34": "2hFYgo95roML8rFwpuEUPNQAyp8mJzQqwdUpBLKfNkcxoomabJabzvWLgU5ehyAN8DQfq5agfR648t5c3QiCwQ5o",
  "key35": "5UV1DqLM2o54Rtvoxhznaqf5EmL65RGCXxq3vnceRZN5BvV7iAmVEQmhCg2pBYM1xu227nB2YsLRJrDx6CVs511s",
  "key36": "2yYk5iZ14qqrq3cx5p16gHzqDq7WYmuks6sr3F46ZT4jPne2QKSE8pUsHFe2xzCFfqHTM7dcDweXREGuLvd8t2jk",
  "key37": "64u9JzzebtTJWqM4j6yQgaPKsuRUgvPT6dxGxzUZMYn2S3a93EdXr5dw1WXpGzv2oUxbgt4QJS7GKZ5dBgP6GkJ8",
  "key38": "4fqzkNZMgMHLYiX4jpP5fX655B3sf2WWEv4NNkBiSWZR8UanZaRnUSoFocp6qbk9BdJGwCaVRvdVRRm77aS2tBPU",
  "key39": "2GhEfza7X9QVcFgRGhqxRjpc6psCBXnKJGRfBud6J3XwTLmkdisceUwdDM8MHp3LxsdYCPErAV4B7FX3RdKYFNSG",
  "key40": "47Ce1VmEN6yjxPPBJQHFR6K9VfwZ5tupYuek3mohC4b9uYSDiZHNu11ovPsoafRreAYnVrAM88fB1vJkSvdPtq9Q",
  "key41": "5ghGCxoXpLze3bpExHNrBKdERM3JM8RzmYqnQQTw83zf3BZ4tvNrQC2ZjdH4qsBNZ6usCLz4LWgqc1xGXsTBdxW7",
  "key42": "3yPU6NYxpYDyoBM496Jr9oEP4rZTR1itqHK3S7PA7QFSQ2Eq2D5BKaqn7S2475Tqn4DQg1jt71SP15XQo93afzoL",
  "key43": "39i8jieDeLbS1ApHgZLUbm1XT5bhrKLd8HUwNGi8rk4QiKcEvE4kN2XoXo3is5bQv2wMY94MBcCPfga6q6XiEqqv",
  "key44": "2WGDysX7CxxKmcmE5oBvmiA43E2ummzo6W6n6ZMhGdFBCv8mSz96TKMq9DtonZdkpduCR8UFo86deWSHGgBwSnqQ",
  "key45": "3d849ZtoTZDxEu5SEi5iY3dyyqd7qtmSC9edaBPnB5xG1u8znVaNPkdREUbAsTmGuAGu21LigVwB1qUwoRLuB6Qy",
  "key46": "3FADD57ChWcZMVpvoKtAZWXhzZJurT15aiX1zEjVe64k7MNvPfmCkHMokmLVZ7Ma7dS9555kwYop8q7JGkmBqzsQ",
  "key47": "2XX2dcFBpdTpgvxhwp4m5Wen3hAFXurxKPENgG17LtzfYfb36XaWy9VRWsuXqetRbwRe8P1kkzFCriXukVUuVpXC",
  "key48": "4db1bgNdwrNVkx7g5SAuik7BS89tVpMQuH6NswZ5bofDyKhD8VriZXipanhec6ZPw964vQern1ERT7Q642F7T3Zd"
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
