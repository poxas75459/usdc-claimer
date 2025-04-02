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
    "yCgb772oQTX2Mmz1HG1MmPnbqZby8GRogR4p8teGaC7jmFadBQJxrMGKeoH7os2kdnWHRP51XEwSoMHoXnHgLp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4trNCb1xStpY7bkTeCWeN7fH1E6UJCvMdABob4WnTopYq7774aXFS57Ch6Vudzrzb74smBrZtKRdcGdCpAAfxqkT",
  "key1": "5zVrYY76jRjsKUa9zg4NurNxngxbN1Lv8KzfDkUe6fCQTpjQxN2KjsFvK8uyCp9y3zGNrNzN8yhwgjnoH4DCSJKc",
  "key2": "3FAuuo3CyomJDuS7348Z4U8U8Rmh3Vp7pRymksBxnQfuY7CWd3aBMU1zJUYQQgzp7NNp4zXdeYSm4hf2CsmLDYhM",
  "key3": "2RZyyN7aZGw4nLRXp9dkKVhPJWvj23pUcmoLcNhvyZkhgPFZmJSnoPfnwYGfBm62oLssr6BeyicYMTgyJ2pWNk8D",
  "key4": "3XDfWyS7YHegRyk3ZtoL4AhaK4bpWnH3ScPRWH7Z2BM1RGbpVZiqUCo7iErgBaUM8p9Pgbj8xchs2mRfv6jXyEND",
  "key5": "29G9NgVDy3arGmuKbUyY7U2fuoRSbJGG33MZfQnL4xUzUcpgEwp43ore1i7FfP3cSU9L6rqeYPH4sSUYBMUcHSKL",
  "key6": "3kya1UsNaXQbR4Q6TpdHJQaDQCMNgzb2xqLTEqv3HrCrkHxAWB6hmcmXJHaAt6B8ENqjndE5YTN4Qr9VePm9eTTC",
  "key7": "3ydRVD3egDh5QjBKkpwUNyNWGBSjwPw3DQiewKwGpQZb9xYuradHiXcZ8AGM7EGptyQhzBV61aUcRocNd1MqcMHG",
  "key8": "5c8E7Ga4UxXDegoCvpub3g5zZdu8pxGdCjvrUer5fsjaHHgfUZT4gSZ9XDZjkMXKhLDoHVG1GuCuSBDhgrzzW7CT",
  "key9": "qUkZsL2iw99D3HzBm3hCDHTPER6mE5hwgRHhf6J8Jby9v2vkAxLfxDusNURgNe8Z33BmPF7xPMuQvBCPDtVuPTm",
  "key10": "3L57VgpjZkMr7TiV1yFsRqc4aHwyWrkyGWJsaqRjPDV7ZtU5o6mEjVFxZ6aWHzGHuxLN7EgPSVzWJhmDNTYEvcFf",
  "key11": "597NAYZubjgQdHLsdzjprJjD5vq2o53N248ZKd2bF86PnB6iiT45n63FMqEjyWr5ecTqunQJRqYFKhs5AsTPpc97",
  "key12": "2s2KWrP55TEZm2pYARCQ3JtpMR3jYiiFKuqFXMBPHSYp8ZarPbmbEuYGzPW6nzaF1bZWfF87PTY6AVjvP2aPfBcN",
  "key13": "4NPToqsdLa2CWXEqfaVgp81Tn36V4DZ11sq44ePZChRdSEdoQPV36Rym33NevAbBSQ5VAX8hP4mab6NQCs31gSb2",
  "key14": "2gEPEHC91KG9NVnM8FFAhPCmtwRdDGuquCJ2toMXUXdp5Q1k5mCSAh9u31DB9nxoi4aym3VHqFFMym8UKirm7sbD",
  "key15": "2Vr5P3bRdrWrzVCeaegoHTJYd4BZ13eqK51WSaG2nctcrYVmFwFPM1MEsswBhdUDkgd6Z7o5UAJd8FuiR17E25F5",
  "key16": "4S3ZRTLrZLuHaHXoqSfjEKvCMNniqVohXQtSYujXYj5Kv9yrBFrVAehMJGrT1cMiGzfP2QPnotW9tB87GH3p4vNh",
  "key17": "4tXAj5aeDDYSbavwVPgwMi1EfcRFwBMwsZ7prz31uWfhtPTNHaHTn6pqJuLXABG3pd3S24DNSyT8ChWeoJ2wNSSi",
  "key18": "3mxWDTZ6BKHpbCtRcpANLs3M3f1skdvB1TYDVE74FX4tLdJt4oWpJntmBGSgK5nZJWzKqhaefqPDKy8imBnVKQjE",
  "key19": "dG5GuTcP7GWFd7JsPTwYced7vAkb1c7s77nX1dtcc2cETtNcbeeiNttyhskAh3F8CHrbcKGVqSDVuKbTqNpCBUT",
  "key20": "2rUpKdM2wk2Hq9eq7s2jxe2fyF4ucs7hLzeCG48rvauuEnpfUUZeto4fRiSjCYFArQGnnYNSaNFr774QAgMe8x2S",
  "key21": "3bkVZ5rfN8D3AFjidbyXLa99zvW4A89cfkqYtzPskDmYv6sH9Un4zTeFN5K8jPoWLEAAUxMFgrQpZdrBmVqgMbmA",
  "key22": "3TeXQe5uPfF2hRfq3PEWyGWx1sk27yaRWm8y34LA3Y7vRD35F3zgr6Z6idnhtGW5rcayh2VbZ6Bh9uc4YJKm1s1f",
  "key23": "5VBoXQLCjmPvEJf2eteEQZy2LrJhz7rvp6yXWm5a9dx1HuGGW5r9hULMG1QfPhLqke1PRLsvbHvzd44KyjMRCQ6K",
  "key24": "3ingr4xzYtdxRHT7CVpYbc7FwCCzwgQJ2FQyhtsaJi1jpVqizBjnNWatHt4j1q9fBUxentAEcYdrqKMgJcdar21u",
  "key25": "3ggYQbvukmMPwGUYPUKLQ1EGZit75VGKXEmEVUC5VrmjTY7WC3suVqKuG9v1mNba96EbzeYhYPDf76fD5XLQpe5p",
  "key26": "3hMWcvMsisNUQFw9eHtMbeuUr9jg2oZRsQi3dWnF4gVLTsFFAYoEj8L2ykyUstEJbKGRrGfDGewzsYPpvxuHM9kX",
  "key27": "5FviW7Hy63LsXnP3AN9i8XpB7Ph8ySntZk6oFvyMKokEFUG9yZhDjTYJwn5fU2weeMQoHV7ANnmSkxh1iW7Uy4M7",
  "key28": "3c3MRFtarAMFMhWGWfsr6nsxteLbBifNc8VsP2XPbS9ogYrcLuv4HbTroQjDrd3gFNPA9Cs1MrL8Jdog2ewAGf4M",
  "key29": "D7cGCWBvu4A9afGB79KAqT5e9fFjyfjK6fsqoPHQRvuaxcyVfVGShJqUH4wwJEy2nDKCYSyfffpJqLc2oW2myRD",
  "key30": "5s5j6eFVHL9ETS8jxa2Hucr4f9XXtpTzZzvAMFT4i6eDh1YHgTM6Lfr426iBePVEs4HUwUNsdzcVCdT7z21CPaz1",
  "key31": "J4GvmkxkupRv4LqgVC69QKpukdxiGfmbbXPvLSNCPfmWAx5fTv7fFeVoLbfpyEyZkeg3sTizLr1r3mSqWTk6MN9",
  "key32": "a5iLmPPYNrWy6Lo2dkgzQuih5sFBAUieERaHYRg8dEwVKiBBoURoUtSrNvfUtnuGUGsiadqMpodbdE2GxstUXjr",
  "key33": "VhGvLbis9zPozCP5AXSWvFMUNpz9UFtuvLC1b4rqhoTUVXfZSyqz6V2GEACDt6mD8CAembwCAUPupFBsNhHnxCC",
  "key34": "4LHDC14Zfs8uRWoYGasm9xfhCk57dyEz5DTarqKQsNEHhAcRMufYvKKRiubFxL233saBp4y5upEsvxHNRum89hPG",
  "key35": "4zkK1zmeugVNfhQoPME98tFLo7ZeoNnJ5CiWKoAkquiMSyYgk5ETkhQnVDiFbVD7hCFv17eJ4n5oa29ZtFZQ7w49",
  "key36": "4NytVFtBaSyP3hV5B3ioFxWesg1jEby3ewnJhfpBUxcwHQv86XVP5i1eGTynAiUuDdHNggrkvu9HKqVmmhA4VybA",
  "key37": "4PsPXDPsZJfndx7Enrx2bDTGZh3vfrnVQpVRZg6PvX8ZzjJBjX2ZatNWyGK4QN4D2cNPKRHA4H9vugkPG7fMXKiL",
  "key38": "3BRnX7AZ83GhydZuHqKYGzCV18xHJ6NPVZjzqDwKCSsvSsFJr8f8oVhbDC8MpGeRJQDRCNQPKwcnCYsefY9CsuYJ",
  "key39": "2ejojNLQuWPimgLjQXRx3T8JTgBZTnTiUNrDD3XkaJ69EBRoiCmEMcYMZsxu3Lz1ymjmFArDkQvbkefTBGMtnnVB",
  "key40": "5L3bT5uSprsoDuQX8AJNVPrFvkSjpTSd8PHMzgiheMKhqiVUupHcFx7KtYaDZqmfgQuK7F6U5WpAed9P5zVsZNDe",
  "key41": "Hn1so5thbVPp4oJa9eb5kN5Jt5b9g37nJ5jyZePm4qs1Wb1wc1LMCQNFb9bQELV4JuZibLesVpJri8ryfk2mWJz",
  "key42": "2qZUN55oz9pfpBHBDr39y6x2UKrhfcskfYG7whJzZNR99fystLaRz5Te5rtr3K9NNiyUzGiGAjgjnwk7qtqcSabP",
  "key43": "zy4Cb3YcTCNRMFLZiNpedzZtCrpHbhXMATY1si9VV96fAcDr8kNkxRA5yDsZ2zEkXkMzVZLpgEKuUXXJ7fN8Zen",
  "key44": "5V1gmLjy23BBpKetcvL4FXVUo4FfQJdzHFQ5yhT3zbZF4YJHeTLNLr6iYzh7srfQqqqdR6XC1QN3tK8xQk8CQ2BE",
  "key45": "4bZjFdVsSxpzGXXkGtnMgD36sctMsba1tYMGKJFf7FqfPzJYp1mkRMSccQ9HgBEtgimQZfnJQrR6JiwKtsVBRXnU",
  "key46": "CPkh1Weg2xUUmaAfhrGaw41cE4dRT6WsLYo8NPSD37remvaN5HMdxDVTgtoG8QQoD2Tyw9fjivoaKbLC8HXUP8H",
  "key47": "aWPuhHXp9QAiFpWEP8xyhHowcwPCE4eyYf9Jx71WV72ZeRLihaCUwNUvqsZC2HAaRCvRP8jLaL3MKhm1x4Jym45"
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
