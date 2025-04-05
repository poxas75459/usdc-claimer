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
    "5SPkmb3a8wmTmTZfne2CiEXFWnw9R3LDyJYxfHa7FsttWgbwPZ8tEZ9Vi1wXUodJxqzMGg3BBhVA76dx5GVuhJKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dpic9ygnyxDxx7qv7r9L44N6rjRpRjUjmaD8mB1EjSJmHzpiE66Lfiz7DZT7RkxHn2zZ4UFUZ3tkUZMntoEHwfF",
  "key1": "5RhVZRMp6qRmAzsyzaw9R1jRFmCT8VGXekTRAGmbqkmkjYJA48ukBit7ee1fUteeqHtiiErQzxzZLsQPu3Htmgxs",
  "key2": "3wUtmMBJxWdAwou7rRDS8JQ3LgXGX67BKHH9WHNoGEubVQobPbmEmdsCiRreFkPNbU4Yqoss1Npk8JSHYbe2oTnN",
  "key3": "21wzkZPjuwaWakQWGdA6Judd1vX2AhCWGABpUPtTRctFyVMyaX3CS5UeH7qDysxMoMU98JA3mLYXGLZPR4d9oT8y",
  "key4": "1r4FVs6jx2N9UbodTSbLjdKYZWcGf4x8RFz312gF5aZnE5PWFD77Xjg95NT7PgYx71J5hs8kPw8MV9GVhp4sZyX",
  "key5": "2Lgd2Psf1YzjyXQJ7eTZgXuMsokiv1bLJuaYehYtTMTZ86fN1WBTVujw1X5jGd6vWkQYiALwXZYHhwntuw6t7Ghv",
  "key6": "rAY8vtAJRYQMguKdRptmKhPDn6hDSxQXftMG3P6y59oNdgXPuSUnas8rxsGRGFVHdhtEByo9DLDtB3AfFaUPJiB",
  "key7": "3sx2VvTeuUNUK9h8qGAZUKpBrRuo35ZYEBbve3M1f8frS5SyGs1c5rVXnfzzFJJTqMZTmLzMo1JkpQiobjsUBwJU",
  "key8": "4ecYhH9dPdFuagGKyqWBaBZRTywetwyY28J6qdWpm7sEMzMqJXPK6Ky9c77emVK6WKoXXvHtwGHRmLBb5cZjpDPg",
  "key9": "4QAA4PCVxAss5JfyB2MrY6HcHTYr5d52sd5y2PA5Gn4CGz5XJdWrJYdSX6CUrhoxkWHgrG4KZWpYyig4n2DqpRNq",
  "key10": "3eq2zktqiwYUFDVKfAZRFMX5m79o8xHt3niJSibyxKswxL2bXUrAWhr9GFWweWiqLHCwbJKmcLULPWkMrBWGnmmx",
  "key11": "4Bw6YHTECPePk9JHgebEkJYisd4viWSQc22K1oUjSdBwoNuqiHZRLpg5iUPeLv3vTYVQMjZ3Y9E2ivzmcunt7QMS",
  "key12": "4efeMg8Fsn7xN6GHL9ikRquLWcZASQ3ezo1ARoPEPkhCYeBGRTCmRmYdQ5FWdAzHkpWR8KSXcRweaTBpRBuWMpZo",
  "key13": "BHqQVDEGhjQEG2t1hDvBfzWVZVgHHDF2YpnhKP6p5VHY7vSRGb5WUEtScjCjUxz3D8qxn2vBGg2USnGWfemPm23",
  "key14": "2Xh1R5PRejcStjTc4JhX4LGkAx8cijnUEFNnztbXVsxyien51HqLMwrHnbJjVEUDB16zi69ZmngMsZVueNtR7vxN",
  "key15": "5DESmLdfiS7BdQVmmwktG961iE9yjZo6EDxhEHTYp5JDjCcvsojpoTDog2zrECtuMsefGB5zGFGAvpjtVufKDkSN",
  "key16": "PkEGZTfq1LBTr1sKxhfvKsKSm3dy5gGTeVu7rBwcssBJk6FPFY7JGmMjsDEd3tdRrng38NMHFTSZynJXFR5f4jK",
  "key17": "3QGDT2v64NpM3EuPRQ69e5dDkmAhfm5RMs4YZkgqCiHoH7kFnzG9HH28egtpmrkwJdqYfosrGBWrsJy5oCX2MRYR",
  "key18": "eCx4gryXpFgH6UFfTHVgsy8dAESZL6HiWrvJUp4XFCWUHQb5t4YTnDSVY4hfdz6m2FjPHP2jnGDBcdC3GmXtvuN",
  "key19": "23wTq97yJs8i9WU4B4DdCA5uz6WAhXy5V4Pw2UtFUFWN2PipRLHryGqJCpc4qna4qFayBByut6z9hUGZnL3ANeL8",
  "key20": "4NCDCun1LZFVob4oDqHjJ4K7sZPM8nV2Qi6rJhSGGGL37UR5ngd63zQQqM39c5wo5U2Pk43SjvwKdgA1N2tN9Cvj",
  "key21": "4gwNZtKQGUUbr4zxXYkY5mfSMW4MmFMVFFhwb1cRzhzocDxKWWVMnmannK2YjknQYXkJMSr1imcqyeogYdWzKttP",
  "key22": "2vLxcpQGTDZXiSU6hGLGXCgkiKpV2QmuYWB2wavxbCeDyaPK6uLQKWHJscggHZ3AnzSR8jeYdGosSpr95wQKf2gH",
  "key23": "57fkjbLN7yGLAdUvyNt8ZWyfc4moGKfNMUuR85haPgDcKM6qkxp1bhLpuqRD3hm68fRLUNSqrYqbhjmbsWUNNybJ",
  "key24": "4D4daTnvtkMdPT7cgUmBjHnJ5AsLRoiqg3VB8GzP2K69h3HaN4kcbanADcfFVatKD3scZgSNapgDPrsvzbGJgBv5",
  "key25": "2rjhEAd4HSGamPog1eRLZTPB5U3FU7ML73wMAxkH4GV2LtNBiS9TBpkNCrBvvZBCfe26noaRHoX6TeSBH3QGt3NW",
  "key26": "4bh45ejvPSZE5QCUKcKujmEwhPRb3AnWbbea9qjD1tdRVCzcyg7hRbmgD9izU9C5Pw9in86VCxh19XkspFFTUfNT",
  "key27": "5o8MFnZnCUCUgU8ftbRtXNjvWEakDzTcTB3UHLp2gRN3cQnBweDJMNvjLaPAv3up8u8gKEtzoarBMXwMSp7uvPX9",
  "key28": "erViZEhX8uqzz3ESp31D3vTR5gJs1hp7h7g56QHCjkpTD1PNK1PQfmKJHuQW3AhWXPh5f41uKwZJRSgn3eGcy3h",
  "key29": "jiazqKApAGrEd9Z6Jsm9pyeowrydPThtEFRu5QyAzsjpGDVNzFuAAq6QzNZ8gMHVHTqZfHaPs3z6jPsTCodYvCH",
  "key30": "4z8ZJohSrTcTWdBm8u4RDm8Jwf2LRb5yzvnqLepYLor3hqcQse99cbK68rMYqbi2uzTHQCAHiizDvWmadTNjr7KH",
  "key31": "513qAwP2Ys2wuRpn8wsXjaEUQAYaxq2bRNCPYQaCZZE1G1ufPDwZ6Z4qHGAq1PgPVHzxEoti19iLR2wC1XZgKJH4",
  "key32": "3EYcjXcf1UjGKDRefoLDqHMGXcB1LRgLFGX6VBiRs5BJZueruRQ1qtLocaN8SbZ1iGWXoRWJVSvus14GPam1JSjG",
  "key33": "3mr2ogZABF1FJsPRpbskgB8bwBNzLqCTCrrVUhKDzHQHH2YJnarwpkTY5NTPZKKHsHjrPPcVbr8fWsoLKHyUbmGz",
  "key34": "44zcBrb3mz57RTGyNdLdH7uMmkrCPCEwkWDB8Di6ZDbnLH5JyPpDb9tzrFKksZqJ9F6HWd2ibjCM1aJqq8N3XRQu",
  "key35": "2c3RfmYSdXjQseJ9FEaW8JfwFxdx892CykNv5xfPjFAhvn5sf6o5vkNnxuZ8RtJ6fh2gf8dusGDaeQsF6YZpWGh7",
  "key36": "5mPdE2pTBMKemWcHkeLgGsDEZKmWUmWM5LLV9p6Q5kfEY4o6qTzVaKPTz7vuu2gDv6Mpb5WdkaDe7fjAAY9f6eXc",
  "key37": "5rqCrwY8Qm9K9hp44AQuW3zxdNisrce9deBRo5tfhwrQZShAhc3gtCHaVcho7KvpUfAmxUmbFFhhic5vtNsNGUWE",
  "key38": "5g38ZRY1zJtpVC4ysMRb1kPTtsh1wu1NpBvYGhzatt4K6vui7xmze96VTt9vocRrq8nELSfPSaM11bNYg2Xo5EkG",
  "key39": "4isA6yKhRYHekYKbyeK22bWpZnwZrKZELUWZzfZuM4DoTA9Qtu18qSJSR1mygCdHqgdAHCVpdyMYxm7tr1Ax8CCD",
  "key40": "uM4W2LzHygnbLnX8mXFD1RWJUmNWSNMVt262kd8F1ytppNztPBVeRtC7EqphYKMymf5fDpQTdBTkdtNHfA19Sa6",
  "key41": "5q1Mz8BqNRFwjcWFecU3Km96o8Ct1L8JK4Nr8mvJTkKVmVUyEyDpFnjdhFYvhq4b5itc5GUsoBLvKQBxjv2SbLHJ",
  "key42": "4oQwDEULLdefZt5GeUBPdcA2xeJ51mYzwhgwNAW8tdYs6516wCuXgCfDM1SPRTnfn77jXKrsmFy1CHFY6b3KXA9x",
  "key43": "4gZVrRsdEFREAFa9eMgH4YPZkTtVeAgxfh7EuY1H1jZG655vmwdDB8dzUaM2Qp4o4H7jyNT8NRvNxxQQVUeF9M6T",
  "key44": "5dgUtH6yd2Bw2cMeYP5sP8SS5bemHi8XiyefENHRgiQ5TBDCn7NG17wxBzN63Th3zD8cz3u6dD4dz8SmfxEGdJXm",
  "key45": "3w3d8463gAmaWia1WxhVFkpioYV2eawSqnaPisDy9N2sPMgjrqf92Rqmc5aNZvdP1itZr5JS3yyeKLcBrxuNkF5B",
  "key46": "5HxbTjXdaVVG15RcUSLRdDWHL9SgAB8ajvxso7BYcTy4VabJYRkXMzZv2tUMdgbZeS9NAwRAoBd66MgkxYRBdLdF"
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
