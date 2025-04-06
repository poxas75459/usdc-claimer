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
    "5SbXwqSkX7a5uxrGTVwNuP27DkNwhz8Pt441xcMf8FR2LnScHV2Xf5Ajhhmim5eEhhQ1JtFuw11KhHfNvMpFKKv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dfqsee1wqdwxjiD4xwUPSpmPFxJU1oVkLMGovra5LeHZPf7kFoGKSn3B3fPJR5sjXddLn57HR7b3BNHxYBLd3nG",
  "key1": "wJwBRNJug3To9kddhG9pSN3Eap2gYixs2muqzfxQcooGKYgz6ShzdvDSrAUDakFX2WRUaL9dWV2v1KDRw14yeMR",
  "key2": "5jZkaxQ5Aid9jSLcKBwzGrzY2t5r4Jpz7smAK6siAKfsgtPYHbK21ffTZPMu3joUjvg8P9vEC7X5K67oK235NrmB",
  "key3": "216EDDLUCdDHKEqYR2gui5XwyZtYXS9R8qeqEDtxX6rhLd2m9HR7t6MWzbfhAvUYrWWWu3mjJjgSouLNCDCAnE1Q",
  "key4": "53DowjoCyrFWupnVTFXApan7RB7vEgzCLWyujbUio1y2kh3uSyZQCvNyXwFW9CJyajzJkYiNQP1F8v4xXLTRtuw6",
  "key5": "2Ms8kZeo8EFc1tXi6TMGWQim34UsWyNAfmtp1tnR9iiFBVUaCL14UpCQAdPC9f2VAQjNFyAeVJfUEN6fmgHwLHRg",
  "key6": "2d7isKiTAnDv5ErD3jAQH5dggD4h58Xk9396QBTSLhfwFft9doNuFpbTL7BULarnQPvkdKrZvL3vNA6NQ4hzAtxX",
  "key7": "2cKwakN91n8Gy5AmpJ4MuqeDZYmQPx7x4i4eW1cRFyaDsrxestyoDusA1X22SfKW5MwpqJoRVCXUgFemjQGpwEvR",
  "key8": "5ujernUYV6eruQrh4oaZELeGA5H4fwkWBA2FayvZ3TmAVAXzNFRVZCPReu9hXJmqMeFBTCwsWTD1akZVYiJLzqRL",
  "key9": "2Mvuq9cekt4ZQPNNbE6zGAaAGmCvSaHvpPCZ4zeM7FwVctmHzB9dScLAoPEZ1JNqK4Y6vYZpUiwKckrhx8rimauQ",
  "key10": "LmVVvhExkVSyXoCvSskUoLnvRT56fFrTZPCLLzAaE1iPmGc88xWtsxtky7pW2Kjt23SoJwBKwLfT4YyXWhPW773",
  "key11": "2Hc9UuVxcJCCLEwHmyg9x4wMHD3mr2CgBPrYxTwoQVwRU6K36ieYERFhHKd3WjWzLp95D2MmkUhAENyd9uTZkrsk",
  "key12": "XadGTdcYjqgYysrRYqJcknRjGXXYPjfZyw2sz3p7d6pD2FwstdXkHPcAKk1KQp9PdvxA5JeepEQh3VG9yAXQXHc",
  "key13": "56kdyjKQj6ucLCjugpjqTuA6cqRhYjJWbfWQPHGospKdNPLrw4eMmahuCtBoXZM2R9qLTbHZYCusqpJb2M44c8XV",
  "key14": "5QrVgSJVKG6bxXDmRfe8h3Ez8tAGuStDZhHJXsDzXaPDPyY7o6EhwqYJYzYFyRjg5DiKrND6sdVKUMUYHHSLZpdZ",
  "key15": "5B2oqU8peXCEcy5CzZ7hbBdTcyNoTbqUWF1Vohoqdhy4B5ZqZifH2ZA2VjhmEHqWfD2J1wTMF8mhBJUT93cZefx6",
  "key16": "5F11NCv2wnnVMVxnyFsxizfewmfsHDG536UmoqwYVFC4j63kQEGumJKz481PLY7UcbNQskLfrYx7Q33HJz6tPSiG",
  "key17": "4HEH41c34fAbSMC8eWHohJY5rZdKoDk8Nt7QFnN58UpYZcaDdtDL8oDeBebiciW5TUM9wiqP9LXVAm5k6dNBeJvw",
  "key18": "5t5mvWZVKMysuxw6fHThkxA2kCHqHzpvAr6bJgjQRh4Hr6siTPGa2nmaMrZGB6rY2ZQzVUViVUc2TUUkp4PPY7DP",
  "key19": "5NGvyHrqrN8M8jSEmyaGDxEGNhpcuSH5NLwrH1Q2KyZjwsS3QUCin7BX5VytKES2pJ5DoJJnppqTKwrv8zqhjG4m",
  "key20": "21pKZWTpibxwmCcP3axbvndNFY7cigFPniVavTPnZCFkK1LoznnewksdgG3NNxM7hrc7x15r9bBznjuLHLkUtYXi",
  "key21": "4qLArD3aaFEbroVsLWJSPNJZJBYV5Z4ddmEw4L4sfaEeD9gfu9GAEdwFFkZSetKnG9LWRQn4HDGddu6enZcMfH44",
  "key22": "3HfdE4Uq9GUUrye9KTHMq8TAVNuzGXZMSPgk7kwAFUZBh3HzzcHhECRfXBqL4ZMadbhUG6L9AyV5YBYARFUx2d7G",
  "key23": "2ef3u3hTT79a1RHXWN3qi6EoajqwJmw7Z3LBBLqbt19C2wRqrL8uwAQGF5DeXFS4QiCpcAxYE6WTXN4z8nQMpSYJ",
  "key24": "2N379UeLHhUdv1qWKCZH6VgGEWSMutLC3kbokxy3bZXkpFLa7ooqppdHGDUwbgWP8J6LeJeMDv7FouDtB4iYemNS",
  "key25": "26pdAPQfzGYyzuASYDceeHWk3uz9LK52zjRVVYGkRVswfTHkAVhMtC2RWfTNBxck6mjKWKDvU5xft3y6p6sG8Six",
  "key26": "5az7NtSaguJWqhpA4D64XppZqzbCzXg4rZLJhjfjbDQXvTv5cWYiVTfMGgfAh7JX76R6JtcrV6Jg6SfWPJkAzRTq",
  "key27": "4b6egFbxy14mDuU1bM5o8EF3HKKxwp4JymqFRMbZyA4WaEUdUqd6pHyLk7gXVRaGBhRZTFmfhmmg2333wjEEWUt1",
  "key28": "vK1GzxZntWrax8RSrVrUat47zHeKEr8MsKRR5J78VeiFN2BUaJg5XzgZwUUb9qnsotocBTgpVJBdmnrA6CXURsu",
  "key29": "2svAQmhPcApcq2PX9WPkLT3cBsZ4g6cLgGbVeWq6rN4c1UnTiPM6pgTYgmEYwrf2X8P1Sing9wAnJWSabY5Dfa8i",
  "key30": "5KxphhCvWGFPxG8MnNuNYAAHxiQrtNmzwzBizqD9qqRcoWXr55qagBwmXuTo3oazb4JkXsKsSUz9aoLKTAeC1J2e",
  "key31": "515kze3xi19HzVYAU7S5WWsbtLQq2SPDb8VxGUXVnWPrTXpEUt8H5Q3NUP6o9eQNifFX9jzjvvQFivgeARnmwLvL",
  "key32": "3oKHHjAKz1kP3L2znBsuYp7RQ7GSrDf4JUREQT2bsxbfa5DeY73cZACRFnr3LqBajUVHsHTvAaabPiwoCRyp6UNS",
  "key33": "2mn4KVKS5WAGMZYu2Aqnm11hQ1iqEmXNu8N6hdYvETt1JhUTfREkELEJexNrgCBmDpTW2GbLBhw9yPPP6hDSu5kB",
  "key34": "4azHFgbRAhktuz7qoqeyeyx6V7m4cKvqbbqSCMB1mKY9n6y96khTNdfZ8w4NR9SuE31mHS4iKCXKKmcdipjyV58P",
  "key35": "5VJHVXU1iXL55goSzmKyQ9LSVDghR7LHaMxQfERyQkV33Eg5T9oeKUGEW9WfEsX3aJ2zAN2LR9TwnBDFihZutEAQ",
  "key36": "2j33deiyheoAQwddvVGSn1v5APBYvFeBPmXsxeTsMpCbkp2DK28b9kTo4u8iafTopFPyLa3U8FGgeyd7YSeFPeeA",
  "key37": "36DC4FyLZFzLeDcLdBrSi1awkuc5KXK5SVUrtFgWjMh4QGTZDToKZfgCZqU5zZZkWGNqE3i3gWr3DQww1gPT8Na8",
  "key38": "4pkfwuTy6cmmnEWzSJtepG7LC5yxzXvkkZB2bZCmh1sT8C47UEZdSmWpW7vrHPUj75NebkHDAJGGsrCodJnfWkjZ",
  "key39": "3BvrpEFNiWHjqBAudfVtmQJmNWbzwmW6mjaxubdqUpoQycaTdJZpTqAnUMqJB6ME9KYR6GtpZ8ZgdWheHBk4iV67",
  "key40": "39omJVAwTXMgAGPf533bT7LSUf1ZF34mPrfy9GEzDoGe7b1x2TsCKUJ8BzJ8zpQAmqhHW5JXKyH1t4m65xEP5Xy5",
  "key41": "2mLHLQYEqxUBZxRygJuTY5xzXFm8idau5tsZYkinyQJVSq8Lf8knAzrDt3TkjNATRXHxk31kuy1arW9xax6ZBfy",
  "key42": "4cKbth5pRHf1tFSbGfNEN1ioiAHDPVtD3brmdTyscQNt6REgaWHnBEG92UChLNaLVCkfnQGo8hUqumjf5Ps3dGA8",
  "key43": "5wr16fzbWDx5kx3QD3wKFHi2FSz4rcoE85i9RZfhJisAJTA5fYziHEzoBrYFsGKVm93sT86PhMz87XSdyhVvJ912",
  "key44": "3jMjpjZGKg8kywjwdMWprzMe74XcbSWWjZHKz845MZWNKM9XDNjkLMyqp5UmcG3ke7w4XnTXb2gJbmxfn2MynQ6T",
  "key45": "3CY2aVfFsUCoKwrh8n1RSH4G88fZdb4NNwMKa5LMamd6Fu7SgLaEdeLUS9mchPtXNBHhxYCfpvuRKcUaXPpNFN5p",
  "key46": "4tzB7bMnMP1op6kCrEBigo9uWRE8nR7gh1CZZo4yL5xST8TRFbxm4JzQ1p7dGanqRp4U7J3bQMrxUiapjHZzbf3j",
  "key47": "FQQSMKZKYSckFTvEJqGJVU4mxpGerfxAtHirrVKsqDwDJPoksqcNyKcv1chHwTBK9F6bEPsJ2kiDmM5AVgTMJLB",
  "key48": "45fCHzdFWPwairUgFDoKZwhRJ4JcMXsic45qsXQX1VZVsfJaNX7qMHEFFPn1Spd71H8Xkr2YfekEcwmkHhNT1vdD"
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
