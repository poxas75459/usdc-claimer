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
    "412k8ecskBHSNPHVfpTLZmHZk1hnKd5dMoJhrLxjWCkESUefdKH4jcfALXJVKCroGSf34VpBmdYHRXELi5HipDKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FXaAeiF8k5RFJmH2hBVSvS1LFwjgDrwERWyN7Qz6UMVZ3bPXT2PR4MhpXW2WRptZMavcKisnPqquzi2q3BP9HLo",
  "key1": "5P7magVPD6xZ7KqVA8QhirqSwDh1JeFo2GjRWPKkFDDJ3ea9tAbaGpik5tx7gCyzEDJewcKHQeHDdGP9TN6m7C9t",
  "key2": "2X66SviKFdwjgSYFLmqffSZTzA5VqJkFG8PfMSuLSdz2RDMFqZEM8KqjbHphDxeNrvuiS4ehLBdJvMM7ZxqfEvea",
  "key3": "2E6RRh9RURUcRwPBEpRjWdtdq3rJ5HwY3LKuf8LjA6E1MjQLMiNzBTJyQFf3LkTm6MNSD6UCveXTPgX4ZnHRmgMu",
  "key4": "2JWsgYX4M2aLCTCA2euPYE93QX2WNLwekQp8LhfrQXxxEu7Z5gMjBbxaqMv8CzZEKsF2CEiyU595XxmjUdvfCaYY",
  "key5": "4xqraRtz3ik6J4pn5mwcbRRE4hYwWW5HTZsuhXzqMSHGe1F3P7vWR6jGZurGi9u7fNJVpFNT9SwLWUEQq2YYAf2u",
  "key6": "2z4Eo1o4keA4tpuswt1F7ujXvtAKP6PEccbbGTZSt6B6cb5ZxdZb6Nhyv4N6mwrxkHWptE7VhWwMtBQLVvAshw97",
  "key7": "vKKSsQXAfH9HZf9oucwToGCiDTDoqc22ZP1CBR4dFVwER6oHz67juz8b2kHVN1QnxGmkQiLx9iBEtX9jP28gZun",
  "key8": "PyQENTM33tZyuyyUk1WmyaXwAi1Tsdn39u7mbgC1KYAHcWsDP34LeeEkQZYrRAy14BzbyTxj99EexRdbxLgEV8z",
  "key9": "2vgtQDk4ay5qk9FtFiYV1bfcEW5ZTMWCTBMMHYHj4pXqKnchEiRoSNHUteYATxTFgS4uMTJxa6hYEaWe9jL38DDh",
  "key10": "3qJsJLYY3eSeQ4x35t3seppdDQtmgRywz1D69pnPXnqXa491wiujbxGNEDDaYHGvmv8w2oX6AuyNNpjRbULG2qQt",
  "key11": "4RZdpCAoF6yynkM37EPiZhCoSTLHxRvaWAsodBd7Fqs2tgKEntXuf1vkj1LrHAjNJnXmDFPxaurchXEmqFgMEpwu",
  "key12": "61kH9BAjhCgQFYs3a5FR267inBUymsmgcj3VUyB58iwETZGiRtFXtiB7Tjezon2oB44s9JK5v8qDUmztp7fjFF3f",
  "key13": "ife9Q7T8y8eqbTJNUpwvetf4kY2LZDe9DyZmB3poTdEzdCuUvHksWQsrd52Qnajd3WxhTi3XgiTRvMWKTgBmHor",
  "key14": "5yjzFueMi3h6AgrFEG877mDiXzcm4SwFcACxxmvZsvACfrEP3pdZhxtPfEtxMHf5G16BFDsxzMaaLQxn1oDhvn8F",
  "key15": "5zr4JuJdepXKUkS6TWxvEZGQem96WtDzy8ohiTtntYKU8jiBwH8VRpi3BDsrxcQqVCkbpG8WMPe5f4ya5PG4dcRF",
  "key16": "3TKWKwhpubAv4RaPhwvvLMGY6hg7sGTnaciuK18ECSjKYsSrrMSPryVQtjtxvc2Cz5U38fMk2y9Gk71fmT2nhGqX",
  "key17": "3YRctqhVgnS1HGKFgZ2GHTAxQWkNEiSTMDAni8o5W5vn6RZ8FARZttmaJSc6cRvUTLAKjmVXhaB7KcaQMTd6AmvS",
  "key18": "CiQJ9ntRGawcuNmgJi6EBjYXqEnbGsNAdMu7Fb6J7WSFsnkRNCKdDVtL6eJUqkHQFz67JSLpSCXpmfaRYzkryJ9",
  "key19": "4T7gpNco6z5VEwwnW6wjvBLL3uPfh4biVXaJDi2S8f7LqDL5aVirL8bBNr4sBseztvRUTzeUkpN7vxWcwiz1hixt",
  "key20": "52G2qZ36KL63NrTP9kbsQtSmKuGVXHVvfF4J78v9ESv6wGYnnTjJNTMW9eWfaU2bR3X8aimfc8dLg5E5FXqLFJz7",
  "key21": "Hk2GF9bwrwJaXmJTJiF5SBXni89f5eg4AEMTJ4qyfw9rqMqGc3KcXMjTPt9cGh8EYFLTAuCh1Z4vvuxco6aqiCU",
  "key22": "5mYFH389pcWR8qXuVECVLWThJrM7rxZ6HA5Rk2EgPHPMJonk1gep1hbw8mecAMEdaE6JjPMLFPNiUEaFxQRWtZsr",
  "key23": "HhXFZJNmBqwQcXSZ8EN9mmKBiNYDstDYY5Jix4YaqeyYfHJD2yqoGZJuCuGhyjCaNkz9win4Mz9SAsGum5rimcQ",
  "key24": "2yWt29mvkJh2TFiCz1SNvxmMDtq69RSszazopMHfAR5z45eCoAoQ2s3wpe7jcm6gVDir27LAuhRmmBpge35BoSRe",
  "key25": "5qG3UVg85mmGjJHayLapebtMxDM8KPtR2CN5P2v6F7Ptx4KaJGX6oxst6ryxkAx91e4ztwtTEHNm5Ca5DtgzwLTU",
  "key26": "5NTFmNaaz62rFsPyidTbJ8BK5f76RakuQ74eJMrZvoK6KciqD9JB5GVDiqPA6LH9fSyFMHypn7dh2aMEfcjKDX3Y",
  "key27": "5SPvUM3961RNEMeF73gy1NJU2WqjiZ6KLKGwLQoCWdorfQBMKUZi6kp7RGUw4xRtdfz9KnBoBibw7NJGno5Cg5Rt",
  "key28": "26MFz7x83bppMmo3sHQSMcPRXiRggfDFvvJDWCm5ZhqhhGxFsJUFQzAPMS155GqcBJtSrQp3wJBTx6mw6b98wdcM",
  "key29": "2ZLxCuULVXnUG9EAuE339t4j6pvt7YLsjZJ3Xa5ShtrA1YJvar1Mq8ab4erC14acxXG1ixFutVMaLBrEq8d1YYD5",
  "key30": "3Fn582MaPN2XvhL8ZULqAB6MFooAx1tAsyXA2F4ukiZGYShhk6CjTEWmpyTFigrjHDjSPsmLuqBMPQpAQjVZe5cz",
  "key31": "XnpR4qo5HC3TdVSPFVWSZAD2XEvjikkETEQjvyUZBuop6JcT3ScEsBxPMRyypkQgPT1MhW5LhkSVt9QaGng7HQf",
  "key32": "3iX2DQens2qbxn8uzZpAc44ethGEirWHS3PwL5gxCek4CmHgWo3jh2wzxHDFJc6qzkzjQyDNDnPd7EMKJ8mSzhv",
  "key33": "3y2XQopLzGYhpre34D1hZGbrMajdm9Nz3EDQqv85VE5LUEmMc7VzunW17HC5gd1mj5XqjYF7UzaEzBiRDyuPwFaP",
  "key34": "5zwvhckACkCA4aC1K6yPrYeQTRkSWNsFxgZixoUNhvQwVLDDaoRu7osgDe2peFa5NaNtwKSVsqDZHGgmv35xrfVo",
  "key35": "48AoE1dhweAS1NYujXDR2FdUM2THGA1si9NQ5st51XmMFS3EGKupq8RGd3BhsnqnVxVW38HG8wVunPScNbbhSpn8",
  "key36": "4QJiQkMwUcafkcXt1sG1rH3rFyV24RXnszA2vsHTdaH6Nb2G2hn7S6cy5V58dKsps3avTpg5RFDSLqE7VBg5kaue",
  "key37": "2U72a3zXLpcVGTu5UCcfSFFLNtw3tkFHeR7MgevtxirztrHmPzwuBBkppL11VLM3P5k45cdYjzk7WoZ9JPSrxMWh",
  "key38": "5TpG37gtSVWE4HVCxA8V21W13hytckmJjHPWMQjonEon6iuo18XmJvzPb3jAPAcKXtei674r6yZ3pHa7LqkRX9qi",
  "key39": "4GWNWaitwE1ZbApyWT9cSwx62Vxarbdikgur2mvBhhSNr2JmuLQNFizJAp98MAbyLzzg2CuNewJMaFDLWk5EreQg",
  "key40": "2dUCu7HkS3cX8NTMZmmsrdrV9Y6R8GeM3ANM52skJmtiHdtnZr55dL4cBdRCkzsuGFBSSCW1yCFaHxvhd77gVzGR",
  "key41": "5EGqyeqHmUkt3rHurPrm1oEfmpQGqok3KToHtPnkCg4sFSBBHcEBKnRRR3S2SqhaceKQtP75Ev19gX3yyYhq6B4X",
  "key42": "3TT21gDJundT1WjP3JRcAjkEneWP9f61avj9YcqbomNcDWoJoDBwLwcpkhSw72mTT7ERJFPNjuk7uTj8EWQFTqcK",
  "key43": "3kQPfM5fC5dY4bC6UEvGFRZrQukfvdwkrfAZ7X5GXv1BqWhTwnJ7kJ4Hn6R6jNctJRb685mgGBq1Sv9xd9HSpyA6",
  "key44": "5H1eTjn4rLzi2DanGsrsiptHKvkSvbMsWS2fCDo9DeoU7jeooTRxtV557kkMJrDd9RHtBQzAgqXiszcVSFBzRBkp",
  "key45": "3pSZwHYZprwbGBn9rGUuSALBCkfib4KpqECM7CM3EyDnMi6crovHyvRxqqb17o53m1PCWWwMMnE7sBfAn1PyV2qc",
  "key46": "3NK6g9LSb3dMW92BnyG43xJu763uEd29N7QPqU7DgL6MU9gwJDqC4SxqDsLhF8MzL3UaVcRbnGCtBXSv2PuFV1ND"
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
