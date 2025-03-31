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
    "3ZJMVuy4MeRkyp2iH69AniQ3jRrk8VTG54QA3Yj1PvTAEdYd8GXJ3bToroJ89nBGYGfVB5gViWQvXhZGB31doWB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WbghqxRQwM452yVR5MXexyFXxe1VLn8xCprGte5K73H7TPEkZVPkyxfomCjLvaZfDDmLxB8g6P74Nz1tb4HpxE",
  "key1": "5tuujRNvbAY1EXZ2UeE1EPrfUfyj1ReYqaDykfDmvG3K3YWdPM3vM2DzYSJ6kBht4CAeVQegBybw2VM2R4WeC2d3",
  "key2": "3u7bJxpmnmjzcQH5mWWnrn5q18FNag8caBz8EUeREQuvCiUVvuhb1V1DGANWv7hA9ctZGZqTnK1tYNtXEjNmoogE",
  "key3": "3jyCG4PZjKw9CHxBcFrNtLxbPZt1r4EuSzeJvzNq87XYYdXRmb6FHWKqpx8mismDn5ErPpyaH2tX9Ko35x4dJ5Na",
  "key4": "5krLvNxk6bqt2N2sHFM8EHwRwSjE9Ujx2pvARu4wz3o7EL23mcpjWTQAzXEVHxhSBEs3PdrqyByNYZUWbEr166hd",
  "key5": "3NfiCUGQVT9inP8SAZx8fJGneJc9R7S9DrebBeaAj3ftrhGmZgY5qzq6TujUSvBtkzfSJ7Gf6sXb1DuWYjzVc4eU",
  "key6": "cCBRTJcGPR5BQ5shGVCh33wdU7iBVEZw3wrAMPEEGBVbh5A6cqjRtcFGeoVo48jV94hd4vEAGTotZmXCRyiMzxt",
  "key7": "3hwaVDbckRT6GpcNDCf484aXs6N2nErpTq7vzGaedr6e5o4N6n8NpSbPFYHE3AeeopmcY4qqdE9noYf7wrJ1hvcr",
  "key8": "5y9QvMttBW144Dtw9MUTVDfDx4NtanM29iwNNykXsnPj3zn6jzY2dnf5vg6uCpw5kr4n6hBpoxmwKnitrjmBq1Xq",
  "key9": "3YfQHgLrZkCQpN2UqtcqTPyBUxgaWErtVbUWGrHVKLZ6wYuzsyy9owvU6fA7MUVxXxCG6EuDt7aLAWb3fLVxhyp6",
  "key10": "3fodiJWG9Lo92xasCyHxhrfbVgCfHaZCfFrBrmoxPnDeo9JKUNMqJqkUzohYygtxhGDWPLd2nm33vxV4dLTehKjx",
  "key11": "4WV6bShHmz8TNVjKcsKYe6g7Bgkmy5SEmGeg6g6FgVQwSigeMPuRPis74XGkz2mJTxEvDjaGGuuzfrYRNHCws3Ep",
  "key12": "5yJ5dfBGTQivhzvd5LzEqY8RZaPBmMwsk4ecUrkG4DEkwZgJC8KjVWW4mE9VzdrQecWsgv3vYySBNqjXsUtewvuy",
  "key13": "hp4aVy5EG6BFvLtk9hikywRpynejQ5cRE3cAPd7QeuHqrabWRp9i69USYybsJWdDdFcqB5q5gus3GFo8P7t9Qge",
  "key14": "3QZFqjL1qeaeRaHZ9RtvGABMeSdHkN2hnrQ67sT361ihH72ywV61QTMfVSkNNH5NjRtJSeQEdsRfqQ3haqkehMqH",
  "key15": "5gHPyqkYXBJ7puCryxA2b2LizXW34NAJvDSPqFiK3Tksy2jC3oFfqy3AUCo3GM54MZTVNnzcNcHNgP3ZyPvCtnk5",
  "key16": "5XwCqxJUZE6RA2EmijRVjBHsBe2aBfkL69jucqKqhVtTJntdqFUZhyxb8EgbYViyNJ6RxFjfVDfuwDimwK8TMgun",
  "key17": "4Lawso8VZKVq5CPSQ4AZNNeKr1tPyKwGRT6ERG8DWY5u92zNXSVRyrzJq4SL8w1aA9wQuz9D3ui8kfm7PeduS2ws",
  "key18": "3Y5Vzd2JrmPoxgafoWMZNFGscevZEBrEFNyB1sysRDYQBWfDWz1i2fkA7SCU46owjiPVUmhdxUST5hzoV5JxQk1g",
  "key19": "2MUZC9Yb3DZ8WeUs7PBGwPrcxErorA12PP2RWJswDYDCTPTmQu55sFYMoc7eycUxiPcSW4Ebdk1zTtBg3SMC72iM",
  "key20": "5kBR5NwCJN2X5tLGXZw2vLvSbc28zpuNFXXTi4WKwUbCSaTgxsvAswHaT1kxaoTW6MokN8DvaVtT3nnpuAg57t7N",
  "key21": "2ficTLoj8CE4n3pok9wKuHaESh3zR48VYTGigq9RD8WQJPd9b5qBekJjQQCMWPTQhbpzEwJMmyubyx5LFHxLon91",
  "key22": "31uRQzB612ScCFbY4ViQFWqPB8cSA9HNDggAv28j17kpm5wS8pDjmCB6dmE2KMvy3io8ooFYmsutHkro73jAitLZ",
  "key23": "2NhWoRRWkRhWQNemtDzu7a4QChHBvcWZpQ9trSy318J4jCDcC2bXMXhvjDJ5QQD7JKgZpBumr5FpiHvV39LvxZnD",
  "key24": "3wbvbsP5VL6RxRW3UUYEDN5ZaBz92KxMRRSHMSHPSiACrC22a9qyTLc9crnk8LiUaKiu7dkQM1TLw6TBc9khf4SV",
  "key25": "5u4cA3j9m7kRN8XNpNH2Ldp81CJLi3Q1qwFF9BEtKB8qorGVN5HA4ovV1Qu2TJ9sfYoBAtLEbWHM7HY99uCXnzed",
  "key26": "4dakwmRUhDhD4KtaGULqiXgKW15VCyLZmhrHHKL7rXEND9j6SFWZvnwz9e7S7N5sangL3gbpmVZik3rxHTMZnwbC",
  "key27": "5krETtqupt7gZEvseGYiMTw9tpvYqGhPvRbuNh1fBgQcWYNvH3Ga9szoyTpLxFM4g4HpD6UTYu476qXfTvEQqYtT",
  "key28": "4uWuseTAezuCzCQCGNJn8UY12B7XPScyYAqy25JSrnHVbsTMU36mPfeR4N8s61eMNyvP59LKBUBqfAoWKkKnqXux",
  "key29": "2FhxeS9B4G79J3Kr5fA2F5k9RprV2ZyytYU4ewpXMk5sgitbQScKAkfJAW7KVhUFg1tjV6rbMkgFJLucTkstGgN2",
  "key30": "2fTqXqFJ1Upg2nFKUCMZGV8ApRs4hYQeuFLnCy6MTXkZyvFLBiudHozR2w4KvewzHzU9RLnHVXX7fWZG816kWkDE",
  "key31": "4axQ6tUee94T5vdnj5bNEq3tcUvRXASrbZPLxd4d64NGSDxXtXsTuaoz35k49fsyM3GfFeekhDxLC3dRBAJ5HBod",
  "key32": "4PBh3LrVTAqfkJiw7AXPRHU3XXRcP15vWLLx2cFywPDmnJfViRYemy2HiovkGADi7NFL3FBjVmBF5oG7Gnyk6DYw",
  "key33": "41viVUbyphKFDudigCP7CyNA1jwUCVA1Lu8QqcUu3B87HfmquUcP6FtRWpLPjaLsViz6r49TignZ6GTU9pAFSyNu",
  "key34": "2bVtQDH93TmuD2CZaBPDU39RVddFYBDpG3v5SZYHoCFLfdfWrV9JzYW6HFNVLpwZXW34aMBhKEy14Cjx9hS5w8rW",
  "key35": "3xSXqVu3pY9Ngq3QESBhaQHG9ReFwk6pMKaB8mPoqZgHNf5YUhxCdNHpUwUtBtTDDdSUfi4HDZJEbsQENaweCSbC",
  "key36": "27LqsdbTmPDbxTbXZS8uWKjNMvxkhNdzFE8XxYFjthaYrPiYYDtW98nJGrTVbUVoHsXFW7n5wmzqQVWNW2pcA97D",
  "key37": "3nAeeXyuHQvyJk3GQgtyvdqzUPNzqYXjnbTao5zBV4Kt5bZfzGBwXiGezkukhWLUeLLQF91kn83KnPmpzDoq9LFK",
  "key38": "66mtdeGXbktbbzJe6JWBfmzXuomA3RHbYtp8GNnmCSyXjtPP5fEiFDJajw6aLm86e9MCAxMZoEyqzEgBHLjuxCVo",
  "key39": "37BXC4DgAbKJNK4bhnn1mU3PRmfL59zUQFAs12gQdTm3LpNoSEZDFGVT4fRYa6Xnk7wA5bowCnwPtpUkzzbSVHCH",
  "key40": "32vd4V1o36AGqsbNtgNUHpuAWsarEiGQtvXeAZLw8hLZptMMawLVfFg9kJQN6tM2mjHRSVYDBaDH8rdz4sn1addk",
  "key41": "3KRfxf5Zej9zeWT8SMeXEL3wRsYBQ8vq9rTZzFDf1NuhiKeZFeva1U9anuT4SGhCZUgeMDS7PJM4CtjP2SM8Vdu4",
  "key42": "3z6tFkE847Vu4ffCS3HTWWdeieX99VYjm3HbDEf4bDxzkA1p52uUjyPsezJboxRVyuAwy4pKmz1xXP7hc1hf7Cp2",
  "key43": "zoScJWym4gHEBNVNd5285wrE3CQoyqcMd7ugDYUS1BPCH4D8eFMAnJjWredtqcYorRFHnF4DxaWYDgXbV5QP8QP",
  "key44": "4SjKCQiuHnWyp7zPGxMdTB1VHxHP958c6XShyjbdTmnHfQu9fN5jtT8NXxWC86Sa5DeKrFm489YXL4qZXL48cmoT"
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
