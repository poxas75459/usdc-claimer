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
    "mGAvvignATy19jhmnS2kW54k6aftPAZku65uCgePLvERc9AKBXcY52FXAp5TtfadadSHVB6Gp8vivvGVEHPPTgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mcgZR3iCJ9idV3tSCa5opQasMzWHAEXHX4fgd2othJcj3WscQqfPfRCUjDHeQML8h8SojmV9YRup5944YTjveBg",
  "key1": "5EcGkyiY3MPnxeQ7apojhoBr8YWM8ezTZSQkvKMMKHDiEecJBfGnPCqrorr4YFLg7ETzmWaENyoJ3wpksdsXYZHS",
  "key2": "7v2CHmY2RzfodX7QiD6ni9ZGG2KrSTNdqwi7ED2St9zcxuHZ7gbroFTrKCafcGsLMPTo96XeWjSwUYckLqRffLQ",
  "key3": "2ZDf229vU4VeZ3Pns5x6HgWPFLwSRe2yMHKoQnDUBkev5BpchJ5i81BccuBfv6BtyoYDQWNZN4K6ZkCTeCvNb7FB",
  "key4": "594aTauhV8m9mG44KHkM9ezKfeCNSPZdjXuZokUk6jp6K2jBdDwXH15TWp4Cp52zjVGiUMuqeU9hWYPj8RJLQXuP",
  "key5": "63Ydb3qQp4wA5magSB2T6wtUxVwbguFc4obRFDmYXg1orZqxwTfmLFZrdXmwyZ7GAiyGJiXrbC2fdJzcmCY2zi1m",
  "key6": "5RSyWZj56Lr5i2gkFoNsKSHX99CprGDVuTJwvynnKNXiqcLAyHQpkcvbGyBUtsthMwQndLhv1uPk3hFPFkqMZPBN",
  "key7": "2CR5uwuV52MiMxEQKaHqwfvMF67y1yMJB5tFuwYy5Qdu2Nqsk7NmSzzJEmJ9tEX6M7eMH1AzriWzzAo5bedAGUs7",
  "key8": "3MrHGfKaQ8AaND6WuSs5Bn9S9L7tJEqMSU6RxcwtTfiUwGQioBgv4w5aFbmzjUGZ5gp7TighhzrggrTSY94ppXvh",
  "key9": "QuGEmgjiGSHrw1gdNxvPogWboFvsvH9sPAh7Wz7EoTry68Z9kVw2Y7584mPasDXJgZ2eTre7MC33pwwHn3CQmsZ",
  "key10": "4M1U1zNfym97NcbG6UTsNMmskqJiNcYXxnJdm8fh4aCZnfEqf87J9CxBeZSLuoYpa48U9Hjaghg3DqiUcgdkCede",
  "key11": "4FEqrPVsS7gJR8j4FNBvYSqRvBcVncsPe3CEPd2U8ywufjPreNuJMkBTfQPy6PDCmbXLwm6BUMHB5sk2FPU63JKj",
  "key12": "4qCs8qh8LF9ScAwryyJF24X7SpuVFrMxxuB5uentABt2VwFS1bSFKcFRfjfxM3bogftq6V9c1JTfv3B7gxDPccoY",
  "key13": "4FqcYG4MiQHQmTRzEdoan4tipGrB3qMC2e2rTh3JdikZNYNKHs6mkGtYmLwUCM2yzaaJb4HEEF6FDokdY2CQhaW4",
  "key14": "PTTQSGutBUYymtKVc6NReazwkp29oU2BqL1y1fvXgp99EqxYoQqha2VUZ3dd2KGEm1uGb7LyJAQtedePNAsev9E",
  "key15": "3z8dyiWvN27kjMdDhCWS2yiijr9yvJkPtLGX3YPDQjfpyC8K4n5kMs9cvrQp2uSGBRPrA27U4zjtvfGPt8ma24B4",
  "key16": "5vYKJLd69qEMVoqiSzfGR825hArcaSCVU8SEmr91TxTXr8xzTXRG5jvyUdxrUEgvdj5K5fRgGUBAAmQzjXL9htN2",
  "key17": "3MQYkonnzL2DNS4YiW1EBSppvSJ9N8TuniCiSMknCi9hhHbZ1MLB73qahzZuvrrYC5saneNA3KUgLdTohP85GCGx",
  "key18": "5MKXuZaigvME3efgSHWMGBbYG3Hjb3gU3hwoYNd1nrUsLRBqfV2MhvAA1tLsLhvADKn6B8LsX3BCZtGs8turvcv3",
  "key19": "4Trada8S7C6vQnDnTdPzqYNURLHa3Bj7yxuDafZj5a2hMMPMdUhc3quvHPztckM9HW9MDjenP3dwT4dZhW53MJ3u",
  "key20": "2Ub15pBTSLPaiRdmJvfgExzgUxiTNLwgq9LVCLdfqwjjAMVCG71LrbHwF5dPV4KNpmprUgw3SP1FGS3eBo14qKZQ",
  "key21": "4UqQEo2BZtczmdedTKnpFwPcvQPxhe1MpxrLx49eBMWixAWuNvkj18sQ1xH8qmgQ7pjePmn2VQShyicKREF9oZDh",
  "key22": "3FbhTgC4WTShGiNRs8dyehTDEx5xcNUfXW7iQJSMVbpU1WEWGKRvtMyMkPeqt2g99Qn8UeCZVJwYUi1m7oKxaMtd",
  "key23": "k3XLcEE1mb1Bw6V6tX5oSDQobqsYBzxXk8B6Up1snsekHBJtVrLrSjxSTe61TfeDuz6fKFd7KQBMM2crjRiivS9",
  "key24": "3cmWSpnjvRoTtgEqZzDchwBNzYMQEW3oYEEvWujy4joSVooy9mJQp9XUJjYjzBZRAgGL7Q5rdow1i1uPt68qNqHH",
  "key25": "38hj7zEkyXPso1FECKN8ttuNSFaHkNkyQNg4n4SNmtkvZMhKgySwZjWp2g44Y4YQADtyBtXHgDce1SwjJfpqw8V1",
  "key26": "4hReU4b2wVj45dKPXssvEB9uypu5wg2Cbdd7PCRLzfkAqcqPZzezFhyrUzhQZmU4gX7bFYUBbzyBe5znVEKaKAqQ",
  "key27": "4whj59uaUhVGPjFSgUmi6bmsSLfpeB6Fydz64TYpKPuFeejotEtp3DG7rTdTzNAaovgKG37XeFVLGpZgQZDyx3m1",
  "key28": "4jQSmSVWK1UepFkVAtWEtJQ3wnCeuLDinnQEDBSwyR35CxcRXsEQoJUKCHLanUz4z9yZQiWdzR4F24767NYXVMbb",
  "key29": "4unCFor2RyoLShLmaU9zjjSkZ1NkTC4qGFKRb2mMe2UaaWWxQZZxEUQ8DmWX6N5tTv7F8NwDF9VLxhbivcc4MTHJ",
  "key30": "9MueFuNtMyS1qEtGKxjfSVhH23M1vUDnDRVc7M56RHWqHp6AwitQnFXbW3Ft4jGpJfmoDbLtgYDL4SbJo7TnnxM",
  "key31": "537GDNzuZfMykYLGBR658B3oKVw5ooZjhkcp26ZepPxnQhUEAXneSb5AusMXiHsu5nPvT6B88UBjnugH1GWWa4M9",
  "key32": "rFFeviDy78CedDij7kFKeDTLVotqJE8p3R5fNZHUdTqpTjYoh2XSvGgSL7UoEewJ8XH2rJ8ikdF2MomiFtpBXSF",
  "key33": "5fTVENV2YgVo2d7mk8upt5xrTyGdPN9QwAvR4MvtcDSwrw3rX6o5T3TquEoYg1YU9h4C6ngQLpTfdN4yo9QPc8ex",
  "key34": "r2Xp4mWVL6hmAZZ3MC8TSkrgq76rU2XQ52xUS9vAWXrNgiDAkXDyV4WtaoTfPfoKx3avS9s9JYnWMiKMZtgkRne",
  "key35": "h3iTiTQPsALMbQtpgoWzHoweCpP5a3oZ2ogeL2pUhicpyaf5WNPxUXncZfn9gR7Gw7ovrRHAsJLdWJskmrnmsXw",
  "key36": "3B4RmAwG9caFEWLTS5SK26SCtLVCEgctzZh4qTnAJMyddjbYcRy5jgk7xsuhSGyhCmrHgWS8uetpaFbM8GpGL2mT",
  "key37": "41xxUj1xp72YtPwWQdguU4MhWb68hBXANvLBWVMvQBm8ajgDUb7pvtsSFukhSMG2AeLwGg27aw96WXcFKhUJCzgT",
  "key38": "5h3uuHPBQUfzMFemeFtBEbwBHcKGpQnwqGqSKWCR5xskpqbvH5ddvFoWMtPo3UYoSNFNWRgPkUH3599ZVhTcdz3K",
  "key39": "3RLeUU9EdkxMvrKMvbpyjYCRwFnXBXjFLxkiqGn1rrMLRZQNot74ZNZpuGbQ6CJ525AAh6cYGey9jpXwkRXTvSE4",
  "key40": "65vLG6TXLptgXs2ZXakVvTqMvwuHMSqgEtb9jS9NGsorXy5k75RH3rDKcnsa3m8fs2YLLu3coqG7yToyCruiwaxj",
  "key41": "2K5V2bgRxPJyYiqG6jr1TQWzHA9UuG379KXGK81aYJf2xVS7wo9eZffU9wm8ppz5J1YiH1G92xzM6G1xkarabYm3",
  "key42": "5hLWRmHEQKzNUiR21yfj1FJL7o385CQauSvyK851h9ertY2aSGmcQsEp1ybhe9DXS4r2Rvhz7L2z51fFY8XB4E3b",
  "key43": "5Z6Nh6fvig29W6AWZHjZGRWqRDzdG4ZVqmoj5QvLEHN7XYRfWtyDzMoDkCX4CavvyVHxtoknGG8U5qRBQSrUBCZL",
  "key44": "DfPSS7NbMaavNhKJpnzTzpqJGKLjBwH8s9kagmJeZeFu5KJ6giHWxxcpgpeXYoHYuHxXAosYJJCF2M8E9KffVir",
  "key45": "acMz7Df4YGSGqLhydFJNkHHaZAFTdK6vQsh64ZuFfkMsLmoHGqRtvzVDWxcQ8XgicEKYUsErd74qqvrEDX9AxeX",
  "key46": "39KMbZTNXmPEodg2Np66ixwHimvjkthdDRhsK1ogsWBpZMWMNkhvZpzTJ35EUmH9HNEsU2Xc37kLhTgZ7QmSQGPX",
  "key47": "65uuXPjNu8XL782vjsv6VfQ4advJnXAD8mSQCJ2XZGuByVZ5iEGhpRgVjJsEdfqTai4HSG95ETPGQR7caJSiJ7qW",
  "key48": "2J3KrxYfXkpVFf2QkyuC352KdxM1WbwCHLDHM7g8J4PrhhYDmR7YnH3HobWUtJ5fq1ryoqbkpgwoEoLsse5cRFcA"
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
