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
    "631HeKu7BGrjWDtn3i6cELSLn9fgcr5CjELg8ST89t3oCVdfLcMtys7pbenhVfwysM2X8uQaELQuuVeNv3ofmacL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jFiTYZWALKd3hN5Mm9WsdALLkeMSvAgVeC8YFi7329q8zty3AzJjXiyDqpKrfyCh42w37aBE42rvs3nMd2cFNM9",
  "key1": "5J1YUkza2QouABHpt11FSTv1kay6VDHD7CWERChk2DzrQeSczECn9aJNYgA6tf6abq2aKygiHo8P947pBV3zkeeV",
  "key2": "3HNbyhbRqZmooa4Px25RifMtzL5A9SRiJtWuSy25vL3NvwdhKo7Mc6YNd5yb1LLVT9EVthbA4nVtEihsbenPvMZ",
  "key3": "53inZ4rmRWYAPJXPNQiLT6fknNdSAQ7qhjbTaumqgzpBVkvKzRV5umbMQpETQxTVvP1UfipT8FaWE49NG2CHXGA9",
  "key4": "YBaw34UatQwLwXMU8A9tLMMfHXZyLoWFNr9s3ZiXWb158b8gVSv9u6JnCqBkkZLnTp3eRVkn7JzkwmWSwJbhWVK",
  "key5": "2LSKHUbF8xnPv8muf8GjSiSKGjrVQLGjY1rKsk9uoHRkBZT8C1nuXfmQUjAvvdWXohqv6yErGSuqM6ovdbueYXKT",
  "key6": "LDok1zebG7KHe3Lm5WgMgumRK5tsjsoQjzsejyKq3jRbsznwnUVuYWQLWZtPkjdx7nwed7qh1c9KxLjZdoSUTdj",
  "key7": "3Zz1v9esa3ux4qrZLNjckRDRYFctwA3ikiW1tNbhzsF63JkhA7UGiErc58eQrMvV54zhHRmU7G4vsWqqQ4UmnTkS",
  "key8": "5CZgBdcBXYhQqE3ZsfTX73MdbHk6FYQfRHhfYMRc3RNaPGCBKqhWvhV56dh43yhVRrDotbT5T7jYqTE9ZW7q63Gq",
  "key9": "26Abz3uWY7KhizuLXuLNLBkAw5sTefkJQWr8ip1bAUa6KnR8Ud6TwkVQUVooH2qPZpHT8oef5TAAyDWU51oPBJqM",
  "key10": "4fo61ZGijCjRaUggA7A6soq6zYJgEgy3V7UjpMJHTw6RTrPSDSTvkBBbhtN6vfjFMPjxysaXJtAFhK89C2a5qTMN",
  "key11": "4XeEYC8mUqQURRxviHs22g68WS2jZVvLs9Xi7UT5jFt3ie5HuUfxR7VHBJAwdcZiXEBMAsbpQEU9QbAUfAS4roWd",
  "key12": "2sXiWWcvyArbXZqETAt7UsMtgPTf2HaaUhDsRQVNLpnRMsjqzgqbgtfRm9cHt9Rv4H6azDLK5zeP6vhZmePECe2A",
  "key13": "DwgHtC5UdXvt6WbHhdxNrswRSdwQ9tC9ZQ7FocqoGR9Qj192fQBuzUYSeNm86BF2LLA47GmCZ9WofcDty2G1ipy",
  "key14": "3BvK2ju92njqtjZ3bcCSNNrDiN4JPZqQhzzmvzRh9Gzcrb3bQcpy8S5im9ozRrq274A8iiRepKPvqptiktdaT1dr",
  "key15": "49UJ7uSZZj64NhhQJ4JieNjn5vqqBVpxcjFvbfmDb4a4jews9z4nHWCEoGE6gi6GzP1gVJgo3fmmFGPUUXXsy9fV",
  "key16": "3iUu8fmg2fVX75FW7xSLu9QoeEyx27HfBwqxqkhaUheyhm54EPkeKNhXf5uvQhs9NnsHxEFMTkUudmhXR2zr5Rkq",
  "key17": "3DfMTPHcJBC8F863mbqoviEB8sT1e4np7maCY9ERrMfjv2mrS73SLhZZi2nGe99Mnd2qoqhkkqobWmiv7Ydgoose",
  "key18": "4QcwEphd9MnH4k1481D8NBKxBiM14xyrwSKTgcyPXLyNG8KvYx4Qv4KEUqkHDUvmxnAktjdU6QZXeDRwbh3ueQQA",
  "key19": "5VB5PXFnBHmUGTeQqBnGve5R74NNS5CvAJsCo4r6nesb4AqFVpTCsBZcLaoctAJZYLduR3txFUSXn97ThyB4nrEa",
  "key20": "5DMZUSeWfr1U2L2wpREGpYrVNcVvkabyCgjFq4eVWc3fwAUS5MpjcFyP4JoAjYXdgm7nwncrPYP2MksBHWMPbG7v",
  "key21": "32SCCzGvhpvH4NYz8a7ezeox1yfqqYm7t86CL5MMd6ZRFNqyNZBoeDmeVyGSvxqcNn3PWPi9f2isAW9b7BC1fDdW",
  "key22": "3erc2b5bTxnC1Up6427wxdfKWeiGmE8JQXp3EUcYdtcRCJ6WbhRWjAmFiGfnJnywVo8pY1Wfg7ziBsQRThBviZoe",
  "key23": "3F248FUnktHmGcfTStXDQUASy7gLfSUSRWeaSw6zCV7PtyqwLYanu2LBaHKQMA8q8Ms3Cd5vCcJMCYv7GumRbVG4",
  "key24": "4HzM9P83VGx7TsDgXXga9mJ4ZbZ9oHEzVRJQRJumkwb358xw9Tipp6asFNWCvnHajThdPDxVfPrhtDbJu5MN9Ydq",
  "key25": "3GjpYc8b7BUiPo4y6tgFTspNvAzZ1YAjbZrnyYcPjPTxUDvyDGkQVW5KhtfALhd3uk5L2CumqcDCwvyh5SQKNHnU",
  "key26": "642TbXf2C881nzTrpgZwrTWYAT7BYyCnhSbPT3RKoquYxTCWF7HUNHZn9GSqf4ZxxP6r3dL3frvEZrSUhqMwHpqQ",
  "key27": "4R961DMEnrycGCrqVTRR8Myhnpg9d5HyzeFxAuYeTmZHADL7HXQqbXoZ6FiQ2xYFdTPyWm6U3bt8BD5Mt3jMDveZ",
  "key28": "4VP8zuGnsSF2DA6nY93iFM6u8Xa5x2uoLkEApLKQQP4TQfKoJ4GYL1xqwRLUFdnVrWkPjQwpmdHvmUKrG4auP99W",
  "key29": "3AE4aRpT9ooSWpbSyiEf3dhngsFK6meeziq34tbSAAJRvBuqMG3pPvH684R8Zm6y6F4wuQbf2jVvsv12aB1GV3k4",
  "key30": "2ZhH4yF769SERNGMyMGkhRCVvrzqN7CWhonXayYLUMQH1EA6X4L2RmMtWigKMPZtWxmhCQkhaSAkEaFuiYH43346",
  "key31": "2XHfTfwDpxoX8cspYtseSQ2sPai1pRwdBaGMfQ6LGfLhputaYstFtL1gDqYEW3PxWgkStu9pcgVfYjrY9EEN693j",
  "key32": "PJYZCFdZEKjSooPXA7PTHuG2AsS55h6gbRp9zXoaMyHdPaKYn4LQkkkjNUy1vBGcmLi4nKVm8p9Ez9J6zRzD442",
  "key33": "5henodBGeB9hdx3zAmd6fAe6LBdxC2V6rcvPtN5vLknQawEkLLP8NVh6wovZWHfULfwqagxsxEAMjnEZREchhMF6",
  "key34": "5o92h7JcLnQzEpUXfFZUXmLzXPjQAcG5oRJhXtBFdCkZczKKx258EFf4u6eQW4jiCiWnDkYNrDN6ceKuSwr7kArG",
  "key35": "5RCy4TBqpgZWEXkSZJAA8RvuenFaP5SeSqDG3DwsSJuqGJHxEJFZNHaZj3wKtGojTkB6Z7UP5Dj4ddiPq6tCPaga",
  "key36": "3q2sf4EpziX1cnJMjnQycx9hYqBAaxCkYbRQmPVBwb1u8rD8rT433AqauMuExyPVGNfzzu1g1ohQsL1SHMzg8KKX",
  "key37": "zg7MwcCRULVntUP1bzg2EyhdbBCawQ1u2VtQE8NTymSdjKiqvTBvLH3bbKwqfGoQbeWbsFk8iSKuP9cDZrPMUS5",
  "key38": "3dJhkfSfo1htxwYSHy6TKJNriWGdRAQbZWu1LB7Q8uyY1uNzmd6GXrkD1c3cXsN1pYEKjWpAJ63uYJonAznG7ZWu",
  "key39": "64R9xQDyLkrgnSeXghEALoMSXt5kS9RoQdRhEA3Gky2xXeU54Yy2n2wqZ13Gc6PUds1FN4N76HMZE7ePCR6TDJij",
  "key40": "eX7GHBhzHLV3CeiU5vRQk58UuSY6ziyty5ssvUjbFRX7wvuPiMgkvBL74NojYeB9KZhLn9CogaAUdMusPigAFqR",
  "key41": "398kE32w6jfTYLGTy9LRiLKtPbmvE3fTrP8pQATuPsT2fjbV4cZLvHTodi24DLRxntKFgfqcZzMMKibK83XTQp2n",
  "key42": "4Su5DmTirDmQoYQoTySPK7VJbdXGBM815QwzsFiuc6jUVdTv3T2D3PuFqe6xrhWAHn5QoA9J6Dt4wzd5YYr1WD8h",
  "key43": "2SYaxE4vD6FwAveyEjjLPci658gCH876fSqCb7XQfefqzzDuK4itCPUyPaSJAjHmQZJ6Mv3puGKA9n1f8VkTm1L4",
  "key44": "5cJP8rScofcsSGYs9N1bin8r3M2sZnAaFPkYPcy9tK7kRbpNgmSUdQM9TCqknLanaGsTZkk3u6XniE2eYRBxyvBD",
  "key45": "3HxQH1CVcpxHfoVQ3HVyW263GEqAE66N6iNtNDBckEdZZZJxLZq18fRHoyd77uAK3osq9Ept73dfM77qR4eXKCaa",
  "key46": "7JpZ5BQUhn2zxvGaHsgsfVBTGVvtKVrLHUxZvQ7GvtetARkh59bMLodsjb7aoSazESJbK3YkAzh99hE68nZ6AfK",
  "key47": "4AjxyBqxuczmyJtkykE3wSBxPQzvyrZbKkhf4Xr9Mjn16rAgoqpNeg5rYd6v4bERmvUKdJZRpo3EpEKD6Etsmw7N"
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
