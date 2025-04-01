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
    "3ieZwNJv13ZXfri1x7dV5br7Dc38MgZCxvNjTpXZECNAFHVBx3NJXBmsfWyY7TNNt4AfRa7UfqsYyrwttTNMQbMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32kZUsmwMRZFRwz2tBq9hXDqcuJjMhjG9NxgNfX2tymbYSioAMcgRqJmSEHyV1gLKFZg8WcrnwS56uj7DzGKMna1",
  "key1": "5uq6ee8fJiYgH3ryKg9SqRPeEHh4swoMBHdMomKG8XZtsDiZxkxZQXyhXKJMUaabRtw2a6uwxkkt5pESpRYT84Dh",
  "key2": "58SxivFyYaQWrznPowrPAKgqdYCYALir5DhU4vqH5dmr8XjoSR3L2AFS7v4kY3ye6MR1cEVTSE2q7ESeSdYnReuN",
  "key3": "52K24QVg6UxsKsagJSphVo2j48Du5MkMFJPoMfPZr9BwLWH2Du9LGSMsuZyh8YwZ8ii3Bn7DwV9UCLh4xJhhqtiu",
  "key4": "2KepWTcrtA8nWhWt7yU5AvjEhheGwx7QkU5RFC3E5v5b5jazsinULUPtKxBc6tN5W5QZv91o6JweKRk6YYJYJbH6",
  "key5": "4sbqpCUPGWxRyLCKqc2dn7QTd1D32V4HNuoF7w3E5ZBGptCGfLjorAGu57mfMCwdyNcsPeEdQhB6TPh1FKyqcxdj",
  "key6": "2jn8XKPKj1ubCeLCYfWgiRCdeLJc6AsZrT86mdhTEPmSiEoGnvMFADQmby69xvRCiXEiufpKeEn7SNDCV7escY4S",
  "key7": "4YJMKNSRwAS8fLPV1cxfWtDzqiJkPxhTy3mFqFeqCasS4XYuAFzzcXievPhcWmZ5rTmkv6onRgk9YDTyY3cwsXak",
  "key8": "9qSthPgou9PigZ7dcRgQoYxjuz9L3vdPDb4Dhs6ecD6tUdoPFB9W845TeDhg2ybmwmjKfFMGCuY8gZG9eqJ9TpV",
  "key9": "5ZFuPgxTUa3FbmupwbyfrWMRYzfYNaY7WbbsqRkCWmRFdm28kp8KDzPGRLRzhcA3GuHukdKLNTFi8XYjtStbifdE",
  "key10": "4jtBqjA4rgxrKdXc26fPSYKFKzz3Fw8ZxE4hdibpWvyogSZVhLT1gvLLYS1okCTBeLaqDk9HbW4qivHS6xNZWA67",
  "key11": "3E7FsG5GowEDmgLbsBcVXAeM9Kj5hWPdzJbuAXY1hCtZiMJ7nvWKuisumWvc4awp4kqfxYduCVYJM8Qsp4mLW8MU",
  "key12": "5DT5upsmvNq5QauRcenbmp1UPjHTaRE9ZdF4suiX2EuSrsPwYJbgoPNSH7zE68gJJR5jko8rEfr9oDuu9E1ibdQL",
  "key13": "4Fz3mwaReU4Cbc5vtcKvDRZeb3459F3PSJxhcM5durd8wxkUE76HY8pCdwtWfxXgRcpyepbbdKjatBrQrWQXV2UE",
  "key14": "5eqdj5RkFhDfahiSitop4NGKmW5wJ7BZ4YSSQ25uLvjgCDeoqGc4XFCAfDRmUP5vgk6o93LJrGA3UQAwady23goL",
  "key15": "5Hif43LiKjeBiVBwQZy2sKBPXxSGxsPHodrXecoVmbsz5B36FQHmWohZ8ainfuvcoBNiXPyMeP4n7Qd2MBPLX3kf",
  "key16": "sQtbpFFKqZniBMRX5a4rVutW5HT9XvgpgLv1pNCsZdZ25Nng8XWiLZ7HzQq5TEU3Fwkntb1KzJ2Qib3xyzzXm8j",
  "key17": "5Rj6ynkoyumS3WGx9F2CJwaasdn63sBXYzPXv9QKP3Ki6XxC9e7ubGwRJp7qcaK7a2CF2o8BEA8cHFEpk8CJqa6p",
  "key18": "5Hkqu3eHEGTzxZDnKc29zopL2i9FiQdTcRK1EwG9QyeMtYwecs7fvc2z8Qhe87FieTPrVZSYX1CHZw8E7Hvf6NUH",
  "key19": "8XZUX2WiogFZo43tQGJwH6xhLWMLZjYHGdv2fMYfmgHJkrzN87dyoqy3AUeXY3i5x4TMkg2NSLUTaZYmJ7s3GAv",
  "key20": "YDcXWE5FSPH9vtDTC4R67C4qSTDKivThiSJBt4dcwP6Tebo91oCPV3tSBzCJeaPgfLnK4GezC62hcqgHB5axDxd",
  "key21": "2H5AxZs4yV8j3dxMEmX17Z8Hb3o6KPyBRTSksQJ4hQ8b9EZnkRYTJS24BDTSRdBCpv2xwiCr9QnpomQaVWWMcRpM",
  "key22": "3EYgMeWdw6MviaXVQiSaBXzJHuGcuqG9E6UByeEDkMrFzm44PeGymUzFfGGxxVWcSH3s6aKhCeTWCSVSA7WTiztj",
  "key23": "YVu54XP9UgCeyyY28CN5UoixNHQJ17RHKQ4eYrNzjL1x7F9S2FVTYCuAZoTNBs86KndgDcWroEpbHGJBYGUKei5",
  "key24": "2722VCEoRs7kUF2SRrcKd4w8T5jDiMoErvU1oYNRV9AVrW4rS5jseRTuuzvTqMPtednvH5eQHnGGRYd2mR1SUR4X",
  "key25": "3hY7Ms3HN4QbvrB6eDK7hPKJBtyadH1g5h365E26ZUodyVUkCbfNvLssDxFjzWf8QYLggRRYjuYCXAQb1cNpxmHC",
  "key26": "4Y1DxfQ6Tn3UEyH7vbBAjy3TanuqriYcR3MVy4XY81Ao17xvnLA2x2yEvgc3znDjz9R7e7BrboLZVvg2UrumFXXs",
  "key27": "57fYgDoKdV111qXs2H9Cg8SEfpQ6d7wcy3acbnVqWXdRWbNEhpx6HH3s7nhKv6AkuaA2gR19ujVkt4dKxmmXLifR",
  "key28": "3g5Ns6mp7UBEYjCJnHLuQ719N2Gdwqms9D5PTLPNiPqd3LfAJmXf2ih7M4E5ojB3bSsWxeaQkxKzz4fpRYdxKZwu",
  "key29": "4LzvXabU5NKqPVuhJX1Gkg1usdYXFddHJJhMoBL5aSLAmL5ajQExPqc7cHHd35FmG9rMpwEEB2fDN54NJCnSXHWk",
  "key30": "4LZjdwnh1ktezPcagRebCzQjdK466SyKRLoWTCBukyXSSiATkPf19LP9bxgHfp7qCExMdxapkX4GPxQsgjimZhJ6",
  "key31": "3gWkp2toNoUDk2Hh2Cyx56Vjpu4gjt8u7mzKLP6hZYrqiQ3imFfoSbxCeWPVQDLPAMwvC4FW5jLjFhUpwbrYHtMD",
  "key32": "2fTVuFNENzZhL4KQtbTGEriJFcCPZ1FGRb1JH8scCvwdzEtZvGEb4TjBoGCbKRyhoCWyFztZ9oA2aPi9nSt3TxvQ",
  "key33": "53rkKHy9EHAVZ6r74dkaqtDwDxjfHLKk6JefaemXjQugymwCroX9grmYBNyjE7xXgLUDsnpVM2xP5UwdjmQKF1iT",
  "key34": "8Q12HSfJKf5qMhCEkc93U9sVcywsdCS21GPLrmHvEkV6T5uNqfwA7vU7AgjnKXqTNrPES6vHc8YFVghEyLesxbd",
  "key35": "3eQAGhDjRibgXawt2uV9MM7N6zZRMGuB4jb9UosZDcvLLbwjZWuPeCg2iQ6xgfjV4jMqGUDfheN93uKJiMZs5idp",
  "key36": "4eFGcygEM28QVFZDGJgZqq6znrhqYTmT5TfQf5411c1id6SaLCR7UiFSsDCvnmSkssipxCXvd3GbEQZ2FByQE6js",
  "key37": "2bXRAJx9FWepHGF9xFAZu9ZEypRwWRQ2v8onEPB625J9qBHUUaUKd9FpabiT5eS8sFefzXGvnKs8mm22uWMsuUWH",
  "key38": "5NYa7dFCyUTqZise1EzReGDPFbZWzJxPyRGE4TQYgh9pKtiYA4na9eU8wqvYDHAvyNj2YvRS3LriRnsGDSoMBZHu",
  "key39": "5Ye5FeSQDDDcDRf8UDJjzTbB3VRFVKs2AfWb6VBdK819bngEtGSHz1rTjhtTG6hU263oKkqYUFCtQsghZ1tAvUJc",
  "key40": "3ZcLw4WyEkm9atef8kFbDuk1MAsh1kqSkmwQbTQMGQJ9APawkfYZZzL6Yy4dQKgTZzuHu5VUHJ6Hj9CTfK9au7WX",
  "key41": "5zpHPdbN8LL98WXnScK3GpRrM3WqhHTKfavRVB3NEU2qRjJi8PSzoZtNqpRPfyxfCcYcBg54HyvpXo8sKv1TakXo",
  "key42": "5LVcynqxEvtVJo92ypyMJAbstRJsGgNNov7FBE7x8pVDP55vFaT6GPPBdewYN4E1tcEzcfRf9HTemGPRzwsfvAfR"
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
