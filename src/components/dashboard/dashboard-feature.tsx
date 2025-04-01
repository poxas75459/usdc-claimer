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
    "5WHujZWuLWiuQQ3MFgQKUdCbv6TBj1vXkeEmDhjzAususFzWLvfdMrDHHhhVoY2g1JQ37iThhC5Bh3g1qPabjzZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZZWB9h771u63ssQT71186ZAp32frA7rR5dZxA9PcGUjCFVchUgL6jX4HowtBv7eVTeZGRLR3mYp5tt7MjuH3dyS",
  "key1": "4Qu8Qu9jFgVNNAiZN7mkQWnsKUVVTb8eLNmVStPAAuDa1DMAtuukTfUF6jBGqd1Wqi3mkggVbgn6eu7tzhRFdC2f",
  "key2": "4VyZpS3odskKF1hyAdhVrNhYWn5zy6QucT5bwRskY8GDGvkVrZsNYs5fn2WP9SQT5K9NzCNnhvar6tex17V9NE2X",
  "key3": "2DnPpoE6u8qJn9pBUuexQw6CXxx44zwcYfZkNq1sn3wddqgAsaw5QZkqdMtmQu5jZXUkmaFqHpyczb64ryvuuTRJ",
  "key4": "4dM1qoVZ3UX6D27WPQRHqeCxLSxweJAoD8kb7MKPwf96QiGVs8nPN2DvwRNe4reUKjGvT2hFct4kzjnLkfDcYNtn",
  "key5": "2uYj7mSfWZgeCioVsvLAa4hrom5bpZKUuk6YJyoXVtztQYtcjLCW6z4Jgi74cZnTFMz2SGUbkQeFZLNFQnSV3rLA",
  "key6": "5Wb5NsZYcSUzmyAM4H3QcrL5yhSLqRackvG311Q4Tj4YQ2Vae24nhmEhgBNhQvfFHGVMN3HBJHYiCupyx98umxeu",
  "key7": "tp5Rhxm6Xg9fzdLKXV41CYzwW44SX12bzCkGixyP2E8zcW7mWMg5MQ69XhuCE8SDfHpCnqYqKEoNdUvYQofKecH",
  "key8": "2xYZryF8TNukBuvGTbjkBEipA2xiPdMKBasXRoF3GSsioGLKuvScd7NJwvPDX49RpsSY7bSSMAtHLfzgzs3a9cbS",
  "key9": "3BN5dfxeLseEepM1oSDN7M2jh6G5tMD4HcNeWm8oZ65D6iA1vAH6ghDJAR6gRHVVPoYf4FruSUk15ZN2qZhSasxT",
  "key10": "v4KidbentxWRZf1eAzq98Eb4zLtR3CRwSKBRLJYi9faF6paPvgTge7cnRG92VqTCzzUwUyLsUhEkHMtEpkSFK9w",
  "key11": "43H9fbi8VhtnqgZFFpuEgPSSwLM24DYnTfd6LWjExFGAno261jeeeX4FgsnfMCneU2Mgd4omcTuCDrepALDMDpnV",
  "key12": "29EZPiqcdG67hLx43RRaMvuFrm1uobFP2S1kE7gPx33MYLXxiTQxtaVrd76axKHwPU7FC1wuxrmNx1bsFfXfd3iB",
  "key13": "584mEfKGb3eMC6SDHM2Y7VWGM1ksC3QWNwARrmHRJ5nVS65CntpY4JccYZiSXBWmb7ndfNsAWZiaLsxLst62gwnF",
  "key14": "5VrbxRfuUp66iaNBsVKpbmUPpDjvHujue4ChD3xTwKNvry5wELBo7rnbaGMz89YB8oBdVtN239JMUMEQNBueRUFw",
  "key15": "6473Q8A8jojws7Sn49Cd52YNAVq913oxfUewWzetJWx9F9Jc5VwqHCXjfQpSz2FaZDKcPbVT4a6aUQX4tynj3dS3",
  "key16": "2P23g6yscwbf1LCLRUNZKFnNvQpnCbR2wS8ubukJpf1RtXd5pLLu4YQBWzsNskdw9o48g5sE8PCd6VGWDCXzihwD",
  "key17": "5ht6KcDMk4sKfDPtARi3vbb1LAH7BBrTcyjmWRwk5LeJPTebuJSPAWwzkzwmW4P3jdvGvohC5Q5s7RaZiYNNxxCk",
  "key18": "227GeZMdyXtnagjRnNNUXDHvyhJSc223zEuqYPVFT5RtgAMK3ehsgk25YptnxABvGRkBNE4HDH3v89iwnNmMn5ho",
  "key19": "5rep94MvctA9mF9NauijC6f1VT2mbpUgoxWfAupLrX11AaeQFkXbkPhP7mNouX2ufL3L1mRN97ek9JZBKth1WKEM",
  "key20": "3fwk6oMGDGPWRUZGUgrRmKvZZTdLWkSNDgPkkyKSrgNP3rrgn1Ah4i9KCehEZHfnuo3xBKG8fakjA4yCdPTnqECj",
  "key21": "4sU8tALQTRfB5eVGQxSzqpismRCw64yLT2kEmgEGtuHEQAE6NE9Nk1yJKznz63b8ZrNbgtarqsDXvXAVjRewT5Jt",
  "key22": "2zNG2cFViunyoZGmH1QWsn3nuAKmXjKEfaCQQ74H4511AeBGgN82L5HPQLYQ8cz8QB7mGdBf3xrKyNKNUzetHzb7",
  "key23": "2o4THayD3Q7uxMmRcwddUHaHwHQ77QeoWzwzdSSXrMapjfRZX2Boh7F4gdRyF7rK1okBEzbSgnhKba1JSFPd5smt",
  "key24": "4WG5Y1HxAaQiRptvH7KeMbDEom84Xq2Zx6eoa7QEPK1V9nsF2yTDUBR9KjFWPP9NQz86yX8vxFU4ZkpH5bqRUbsd",
  "key25": "8C3cJRrs9q9kik4wYHorsFjbX5qVo5sTVWthciRyGVXhw67V7KAY9E59d1wY2gRShagm9TJLpoZnoFxJhRqArTz",
  "key26": "3rcEhQHUXxbmKK4PmenGKL2V3yrQjp5wnNfeKm44cd1zWx8MCyJxkCvMCgoU46JENUPS5sdLDmfQ61EJWg5dotPU",
  "key27": "67SZEBxojz6RSLAdKnLHQVAvnNUgJdMkhgQoWJBtYfh73AWyUcih1jDjwXjPZ6zuxwriSD1MXThfxJTbgsFgnD3K",
  "key28": "2TxMUdfmxDnHX4Vjh87jWh34YcYJzFo9TMqicSoAURy6LGGRx8KJQXU8xkg8noqKuAxJ6kbHrZ9uxKqpEbgV1Eou",
  "key29": "4XA3hBNLyVswyUBCxSVaQ1i97KbZHJRRWE82VX9sCYP9686EB17iqE4m3QEGjtRTSigHQbr1MszK5bmw8srsWVWD",
  "key30": "3BpXUBhwM6CJBYWwyo17wbScK1TufmwdEmemvMHiKHUGETE6jiR9rRZQAdSmcpGRsANm2epqCzf457P1d5DXjcj5",
  "key31": "a7caqjwu8gFPhPtTxJLaK3NaEuK6xUiy5gMUT8SDLGMhgY55MRT4vnAf6exxjHVbLVfpcKHrXtnmB3ryvyC1T4a",
  "key32": "3ng9U2DXJb8QND8XqLPwWEFDttFDvqDkP5iGoaRUejErmm4KL6Ji1DHEcbgtJv8WDBT9eeNu2s2C9We7nn4d3sK5",
  "key33": "3ofg6DeujePtmbMnTkoTRpzAkvn84ZPXX8d81fFnB9fK7vUrdADLMeAZAQPWy4a1ro54sMEhy32gQSUXcAYgF33M",
  "key34": "YNcGjo6vU5EbyYGMCwpeEYzKbC8D2KNHdjMagRVfjBUHs3aduGiHMqF5sVZoCrJjw7SR18GdiJCp3TtFrKhjDB3",
  "key35": "3uKBAAuctt6QHjMD3UZuK6QVHbZ1KYS6SGSEN1u9Ctnj1Rr9xRrQJy2Ak7UNpsPKL3aVXNsEbFi9GZDp8NhTAoz9",
  "key36": "4XET8kHaR8CimbZysNKPJLLRJLggRy162N8KcvYC1rpmWRPn6Sc4ZT7JZZtcwHncDDEsH7cAazmL3nHGM5whnqjR",
  "key37": "2TkKin362yLqogUW5WFNMxPJPvdokMFqu928tXEjEvsFhihWQA2XBjPAQxX23f2ojPetEfJpPVMS1uTaMNGwEB8T",
  "key38": "2NeQQKLCQtcevhtnCHsTWSsCZ7v6hapiVY2T4TyJ6QykNdZDn41C2VGNbWu92imNAXNELFiSPgSUMtHKojRDfLQE",
  "key39": "3nG3XKBAWCtYJpW18w675zG8e88THG1sYYRvHUxDT3n9EDn6ySsxKBTHfPmUC1HPHemDw5ocAfnKcXtGAvRnLP5r",
  "key40": "2kw888zqrjQBCmeqErTD1LmpNtHTt36Jd8huW7sSeSNcwNZsR2t2XV5YZQwYMDFZ8NsGtUU81MkxbQdtLhnstuiy",
  "key41": "5z5wQ2AMaS9WR9sVnvM8J8wPxujBshF25PtNpKZDFTdad9cPw9XZtWBWpPcVHDJFYUXdrt4vVysDDUNmNvbRSRpg",
  "key42": "3gA1idicANX2TMyJVZC8zWe1k8UFiCYxAjALC8x5WcXntiU5ibdd4bS253bWkQaBtLeavsYKDXyFf5XB7eLHeAab",
  "key43": "4Xo6UxGxXr88MKiyd8YGF4uraYcSgyPoRPU8DKKtVRMStxVoyTZ7bZAaysmGAJsm3iUjsEib26hjfMSWeFKhhPrN",
  "key44": "5dvYHTdKGPAENzVnFPQHPCEwng5qVdfh52hCH5tyuJBwMjYZCa9ZPicCBV4LSgsyuZRPeDcPcFYcR1qBa3pny2RN"
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
