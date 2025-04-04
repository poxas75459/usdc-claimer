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
    "4Xhjz4C2ceRCZiendrVWU4mYxwDXJ8Bg8eMFZDoZoJoKXDfq93mDdxW4teEhWSfqUQKjukuEJdu6FHRqcS7Z8wzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vvfw9VZxaup3MMh7jN3jDhMDnpmAMgB8uxGUDBdcS3h58eRgau856eNP4QSmuLxWUau3fDEaANJzwtHiFgPMLkP",
  "key1": "5ADEQCtQ1vdBCyxyW64Swy5kZqSCXh5WgpiA6xRDj2ZbhiWmNiEv4xStn1xqHc6iWedy37jmrePYAxgceNrWTq6s",
  "key2": "23Z1eqpXayHiBiHahzBJePgfxwF3FFX3Vop8iooLp9fA7znqsy3uf2EHMVpKzCca5YS9n6eM6CgJkh4aVUBGCK27",
  "key3": "iKp5Uky44gT74ZGGNrujJsT9Aqm1PEjpgLPAkXvDpx9Q2rK2SCVFnsbQnM6stLDBr3tncdMpTWktgpe2wDZWoud",
  "key4": "2KbJaHAxFigkcNJ7xHz1tfHWCfwXtAszu8PdFfBY4DMxEURrm9gjzB1hbcVQukLWu6RmoduEiyA3rNPsT31TEZPf",
  "key5": "hkPbvc4c9G5cAMv9uwqJTRLvN9RVfQxXVBCixvpSeiVZ95mMUHi18omJKwCuFc3BVQUKKzF6xQTXFCa7KbHPH1f",
  "key6": "2fjS9Fzb8x5dgzjyL1SVmNaLBnFt5gynh6bk3BRdvjsX8XBaQG4o4RJnT3Ums6So3roBJictw8UV5qpbxrXoVRLV",
  "key7": "2zYsuxtzmoP9M5aaq23DMoSeYzETYYNqarhebtzfE4y9mcFYKsDVeQgr95jRwp4NUeEVm1G1a9t4hcG1mwLvzdtv",
  "key8": "54H5wsSmAPG2DZDJABpXxTv4R797gz5tDQ9zJu8EjKiyaqEmtJ3ug6KiGLEifzMPmdAVahoSoQ2gKMbZoxhTHLxV",
  "key9": "3vjR7E9kSukagQqgq2GQUqTsR6PevuCTyMeWt2Vc9dwajE5SA5waSjGfihAF9MkNBGfgr9VJqQH1cyBzucnWE2gB",
  "key10": "5qp6g8fC41maK9DT5Bz7fCcQr84jB87L5Hq5uV9t7P4CLfqLLwe2TxWLDNf5QLRSLQGpbsVxxdLEWJX98av8qFhf",
  "key11": "2pLj7jHygvhtDaPzaaT3Vj6pD79NbvA9sd3GaoxPRUo7DkARTRij843wZZ7kbV3KdmeXCwoxUDbmWEj9DumykM1c",
  "key12": "3Luk3aNcf6czzvYjXU6TdW8tWhn5fnHhtSPwHpk44vrNLRM9BuAHEbipc9TvwB1fAqTm2QDga8wd79m1nE1joGB3",
  "key13": "53ww7pYBp8kWzdk5hD87o1D3ZMmTHrMcR5PdqCWVJGaoEoBj6xHf6Fk3qF8arP7EXu8xTtvNcq81D5LQWKBy3uUK",
  "key14": "56WW9ajvZAG2LvTtLvWjofic2w4fELVuiRGAxBuC1JZJDdnWk9vxyKcveWfhbqua5pTUsa1ic7XKca4fvWarJF3P",
  "key15": "4CqNqqGxs3nQNutL4G623wMoEGtXnSP8pBkGfbUQFMYDnPURJgs4y6rjRd3vCxkKpcWgg3V22HbBQ5PZiJQfDpwh",
  "key16": "2J3boZ9FdajULhYKHgZZ978hibzR7dzxXPMSWLcMNSKemgmnok9bZwrSe8voDQ8LcmXXoakVy1wfR7yjQWK6Z7a8",
  "key17": "5ZjXBiGGvoDACWp35LWz8zqBcyxayYZvzTf9HBxHdex2Nb4hBzMpRjSPnq28PoMoG2GL2gC5bmHwVooRnWoPW5zs",
  "key18": "4bp2RoZENhzLob2V41qHR4M2pSqGoudkKm9qSm8DesGr3x9zz9e13MwJqJ7BhT8JUdtAQhvabHYntxMZCEUoejgs",
  "key19": "4U4gf2cT5rStsKhdDCNoSQDkRMNkJ9W8cF1oiBTwyE5iyFndPRNybsE5DQpqPVeUu9EzP9QdCg44Xp92H1t74A4m",
  "key20": "RJwYcWyHHGUQr8CWdHyQ86AJT1YQQNE3ajaJmUZLPqp8WFJWpYxEWkPgVfAAdwBb5rSt4chC4F7zmWPP6anEKkY",
  "key21": "5sFNtLFbH1Zy3wt9RCVjw5uHWxRUCt2niCVshPJitieRDBdsTQnfD6YDddsZMcaMmHzs7U2XCdk7gFZGyK3t71KM",
  "key22": "5qDywxDrZm1NeGpsHcBu8tsZt1dwHVdNuu71HQ9MQcHtYGojLNbq5HWkTLpwAqHBNvZV8JTRd4iPbPxVHDiHcUKH",
  "key23": "3hL2kURemyyxfZa1zJS3swUqVTXsZZs4ZegKHEGhp4EDdqRNLVGQxS7xuHs2VcbHtMi92auPYyAoJWxKAvGXvtU2",
  "key24": "52t6RUpd5D4CKkUwqWnZsPMyyFzvVTnYBad1Au9hTbt8bV2p2BJK8FMosptFVWmBVwuZKJdBd4HN9jwEu3vjZq2H",
  "key25": "3Z1A3vpt7iaRiL73RCrG9DvvGZyTn3D6VbEtVH1m3NzdjmbxJNxizBnN4DToiVctRER6UUKecK9cpk58wFDW7aUQ",
  "key26": "5nCCJ3qieYUqVNJakJPnbqicYkenCX9dVJZ9eZgqTAsU5f9jC8MjU5u9SHnZfyi2MVKCtUudtVmUoia9aM4kEGvh",
  "key27": "58VEE4VBhKeUB59XE7igeRkdA3S4kVAc5aPAqXUdFyrKUDPy8rHpuL2vXN8Ne8NQ8bSTnwRq2uvkBQ7a2uuM1jci",
  "key28": "568ebH9DGiujrWmrPkmJGhDNvkhb4qU7jWcX9HF2La6XM3gQhk5feufcVF6kTjPC5soyYhxMXR9adpZGySjQuo8C",
  "key29": "GnaTdg8KNvSDzTZbyUqfXaJxTFKTw2Saf72wzoVC9wN4kMHQ87oMzHGB2bm54HgspcSjQKoru2C5Jr5h47hqeb9",
  "key30": "2yxSGB36a2NbLCniTwu32h82wWSi6x6ZtEtWf3FRnZzqAmfkcd4b2F5of5Yfo4qvqDFA9NGFih9e7uJ6SgyVYwy1",
  "key31": "5mEYyaQJSPryUQZPrrkkLp7xKsDsvpmLZHndQXbjqK9BY7w7cxNkjSgXLuVPTwNzGWZw8pc8AWgVshfUEVnEWbVp",
  "key32": "2cwf2Nci59wRzSPW6g1JRPVTrsffGzMy32AQCMenfprgfhtGNcNqnZCjpCvoWdPbQbLYjavFhrarVHAGmezF6zhN",
  "key33": "4bkoZh4WU4rn63PRGLhrss8UcHzAmEK9Si2rrfH4anRHnHypEn5Dc2kkco7ishETfhmz3J2BB7jX4vwTBf3sJUyr",
  "key34": "43Z8UbDTxbF8KH5ZccDcu7C5gL7pbjKZRsJsFXosu3bjBMhdTx2TqjJiGa45itRyxx8uVnC6q6QWxban18deXVis",
  "key35": "55TxvvSkehUX95ut3MuqkTieQBobcM3sVrP2vmTUfVLAMZmTrNCobDGhdYEHibo2e5ojZ3hH3eXX5iV56mPwtcyf",
  "key36": "5ED6N6WfxaTXudxHCAqULZPyMr3nWrV1mjkHc58hRZxgLVMfhTYiWkDG5SpuhgjUbRXgQF2cZRUTRskjw7MiHaEZ",
  "key37": "49wSkHGJpthgVGsqRsMbBTEFc8k3PbDd9mDXeKZFv6KCwX9NZFZsUB2tbS7AYXphmLNsGHYvt3H8wNmJuTT1WRi",
  "key38": "Z9CcGt4Yb4JnbCbx24WTxGrYeTKPLXSjfSZqdfvWhQQ7XBwethd4TLFVQCzZYJzw1UA11YBR7VxjRZKcTYAd8Wa",
  "key39": "4aqricECANfqCjAv6yJdvqyTdneycmRJPcrnuwqU81XnTRAb71q3q2GDE5EuMnSTekvZ7Nti9Q2aGeRaaA3CFGaE",
  "key40": "2KPwVKtQ7hfq8bNnffsx2tZ8SaZYuB5uWowuxs2onAn1xfQ16KHotRx69bs6GAEtXDrFRytj99f2id8uVYzZW9VZ",
  "key41": "4HiTGowT28jEy8w37chhCRtt1x1WpDK4h5UxQiARqAuCBpQqVBxb2MChJ69P8jb78fCBmUZogAW5KFHVxKiKKFS1",
  "key42": "3HWZaLYqk4VBKqBmFpRvJHBQWqzCh2CWQHs4iwpkg8AJ4s2UpVnxrs5Vi1nnqQwTNbypbrkXC4RKRGPMuk6MF6mg",
  "key43": "4ih8jb5pzTSP5Cyg12XiZVEq2cP2NUASCo5vU5LCRUCLeprC1xeRAuPqdBG1kR6mPogbM9KZgsG2rF59T2jjcLxu",
  "key44": "KQLaCDgXSREQJCUGzv3WGZ9mzPPp6tYsxhGtBjYus1Eu4XrfY8J47Fa6k5543ng8Cg3p3zGkxarTv3oMVL81U3t",
  "key45": "4aYcrYg3We8dindojy9qRa7mX26KWbRWkLAjpQ8qSWqUy1y7eGAWEdC9SKEtsF3agjp1gD4p5XrgvnMDwSAt4wgj"
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
