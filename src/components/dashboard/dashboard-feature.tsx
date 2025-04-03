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
    "4ehN1RskniYHtMX1NvKP5kuCL2Hv5H8GqdUSNPyTMvg816yjNCV57HmfSxYRMqPARask6KGsrfUHgvqVfL9yUFhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQ9XqAhZ4ubnbxkfBK2AxEDNW4au8AdAmjdXmcRLESvmRk85UdZvwfzhd5Xmack77LVQNhJw4nGFQ23hqoVVLC8",
  "key1": "4eZM7hogho18HWZmztNtUovaSCUDE117gWea1DRBfCdCnxUo6XNz6xDzpP3RC9XAWGbw8FRYjiK4aXwd8R9otmRy",
  "key2": "4AinR2LWdVxPm4jCXpmPEBjjeAFYCGs2HDLebPELFMmd5S3e3JgoGGPXCgRqUMiz3m4WJ8e6Zc36SKZLZdoajjoU",
  "key3": "nHxiYvAqTRLdJfBGxRvqhQGk9t5Dzs8qxm4TDoSKpuq5xraxWtYvhqL65vr9F1bCFhKjwYVRGZowBEA3uPxm6uw",
  "key4": "3efmYZ3BAGPAFRa4AZ1K8Qh5zqgHNhmXUx9ctEkn5kKjAhY7iZCunn3AoBLbsvttCnELVp3Xe86pJzNWX7zhLtDi",
  "key5": "5bubS6B5SujP5dFcsvRxgChBFT3VXZB5CYWGDoN7Tb6EASYfJ79dZLisu9eaNvozP9QmXtfXSBprSPhVTg9rfaTe",
  "key6": "4BHi3gN5MwrxZui1e2Rvn5Ue8QKR6oKoS24kdheP6BzzXtjrP5hYjwvwHLCcvbkeKHAcrzMXxK96zAUtLsarf7DC",
  "key7": "fu7ZzyKeNWci7c9Rf3BF5TQcTB8xr7P8uVYiYjbvXi3vqEK5ZCuw4H5h9Nv1toGyfRCea2fkhJjjgnSjUU377ha",
  "key8": "3mvemvsmQGzzskt63VEMDf8BJQ6QKamYcyBp9ZaQVkhGBvPrffNKxy6GT4VmrBF2Km3791viPBor1Ss7H55oxCA",
  "key9": "61q7q63geGhqUGyjPpescPyMad1nizcCFG6xVHmQyrRBXcSCfZn7hrg1L4xt88tmDzFms65E2UVCmM9TfYis4LQs",
  "key10": "4ijGVDtdN4JkaPmx8jVjNFzmzY4wPQ3Katymkz5awchtVcx7ShASxvNqoJ7J86f7CQBhTgnDZ5v2rb8KPWEoiFhZ",
  "key11": "5cmiFCERZPii9GoUJDnU8LVtihqejUkWHYqWxuG5bshVAz5ZmVdS6nqYP8dZb8XcwtzGiD23ynqu4jZVKJsdi8wM",
  "key12": "2M7pyHDrCMFwoVjFSGY9qmaaSj45D8UGmY8VcRi4bnwpQQ13NxjmcE1a7FzQXtsHAmfn7x2t1eQ9KVqYy5GEaoJr",
  "key13": "3oAMDCMncTEnPQA1cmRsVyWHjFGceM8DdyhzfM2GqBFvVtiQH8kV8z3fZcJEd6pUr4KQEbLCoxVPJmhY3p2DaKDy",
  "key14": "593rJbRg7RizwxCURWw8bVvfkK8xpu5hzbJC8Yf5YMWa5jfvnHBTNkFXvCuAnDYQxDs77fHcrQ6bcqMmzecYQfik",
  "key15": "2ZV2ArAChDYoNT3iNg6kfKqe9KgVB33tVbbuV9rDVhBLREUknFAyH8SkBKx39yU3nJsDhh2aX2nqcnERZyEXNJo1",
  "key16": "55zCCs5dUPRmMkMwTH3KyH2qCiBA3dKXPsrQ3StNYybW8EDpxPTwZcR1oQv5CSJMJocTK92VLVe19xWYt2tKDuxq",
  "key17": "T2f78guyLp6pwF7K8GBEz2NuDsigRDMxEkg53ZGAw3eAebbf1zm6jhrmKmUWdq9kCGWErCCV96or8tiYECaLmVC",
  "key18": "4FC4oEo32SHCU8LMN8PGQmeQ53JJHDvSAWX8vkAQPToMW6aNBvdu5d1tREJYawwKfKwC191kUV3vZNAumrnoXnNa",
  "key19": "2ef8uWu9HqfutbEr2qfQL7Z455TDzZ32wikYqWDuLkFFM52A69pWBrmSEXMFLqnxYntK1eGxhp1pUezgc7nDhW7Z",
  "key20": "bUB7wJWC7FsLjGk131AQ7sxxZX1GqzosNW7tmmkrrTKLrLqBCDPrCevJbeMXCtYdQj16wkfhjd3f2HfLNQ1aivw",
  "key21": "2DBY5WrRmztqC37qxPhR1fJrcdEvPBigQhdXpwgpQRmiGE8p5TNnSeq1hPtJoYHxx8VAHFuBTbWNosVGPczVcwoc",
  "key22": "4mPcD696MJiXXwTjvkvc1LLhTth5jeBvYnmFqe2Dy97ZZNhaTLzjEnzvDhxEMCuQfACcwQd7DBwQVtmxLAscXNiu",
  "key23": "5MUNygwQQZviaavpxe5dnAEAxu9q7anWFU1uS2BHbLKyPLH6WByV6G8TMnSp9Ci6gFBrLdbwhgvbfKzvf9QNQnUX",
  "key24": "5f43deYEK6sRV1Kig7F4zgj4cBGLP4zTHrQpWCmb3zk73FwBkD7T2SnoFs3y4sDvgABvkZygUCWGo8jTGUUbHa2E",
  "key25": "317TRcZuNqkPxQKvksgvoUA7zzw2SLMRiPLxfbcfcLpryMMgEGPknDF5nKTKwBfqc5xFnei68nB7yimkgrEjJU9E",
  "key26": "5moMzQmQSYC1NZd9tgDJiekd1pFtRkddptsxymAP7vw5XYuAhH9tipVNzQdJdpHTfp9u5ECHmSKXNhHGpTpRSdbc",
  "key27": "zWnAcpVuwhHa9jMSi8JXQHb42b7RKJPSAM5iMeEaySRMGqejy1wEBxHKv6QKdL2Su1wRiAsDccn5i2VgciKeoAN",
  "key28": "4rMWVXorog4QK6oio6wGQo84zqsUmR1a8imBxnALj1jionnktoKF7cZ4BbPGHWSbgbpjP7ENJoUgsrUz6gkW4uJM",
  "key29": "8Nq7FZ1x8kTuJu1nWH1hpX8nSBz4fTwyeDqXhA1viNuZDe7cr1EvLPSbLtwgaxJrCNt6jwMw55bCcpnt3rBn8ST",
  "key30": "3s2JMJgn9LrQrafF8k5DCDvxYh7upeAwKjFJBQpFsppQsSXmjwU22j9XdJLfcfrKZJNEixar2fJqaZVDYZLmTv7E",
  "key31": "mrV9vq51QpCYMd1eA4odRQjRoAgsJZAr1g7qjBNFvQ786wGEje4htBqQrA3VZy7F3cWr8o4RsmpKRhfS4RFVWzW",
  "key32": "4JZGkSBVnBAVbwEo7PWAJAnAqWYHErNr521SZPoXGNk1dchUoN5N2PCZmQougVE4FZ843XA5pEu8JZciQgdZnNQi",
  "key33": "Gr4xY49unZ8ukiFotwfyfThQTC4EXrosWTv9vdRMjopx9B9d1VbT4LysAAqNUaUi5mriZzPHoFzM7weVrVomkRK",
  "key34": "2YueVbu8dtnKaxGMAFkYP9wkKfRuuuaFSL113CGFXXi44A9gfd2R1WBdcVA51YCMoa24bgMvXJdXtUMfhRsLVxaA",
  "key35": "645czaU5ZYEXNesYhE7nay2oXWmpLLTFquhF8JiXZQxdPcRs5676GRDKT3jqRjsq3iCqatA1e3o42ZuBMMPs427U",
  "key36": "3XCuP9yNVeLj7K1C4g1pZNsEtPpZFBVrNsP6yqETNEyFaJp4k8QNpbrbo6kRF5535daWwWRn15W4T2TA1m4JCbHs",
  "key37": "2ttuDxkJW61SEwEizjXfhkrnDXvttaBpj36uAxa6CzCZBLmcBLhEP9LLaP8VQ2Vopc47UXg52zBh5FUEuKn52QZJ",
  "key38": "3EzeU4hg9EkL6SbvN5avessCRBnX7vPdaSbPVph4wqhPhGe1JT4hyB2xApwTf9snsZRLWiqxp5pmHXAmVrwzgqB5",
  "key39": "44SPhWBPT2dUTzmzm91ZZKPKXf5U1i4KVFkAoKqusjVYosph3wheHKmz2avxHsPNtJ2fiqcjCVakhmjjeRRCh3kY",
  "key40": "62soemRrXErh1DEBXyXYxg28S3hQspAssGuYBGphW1opVHPQfmY3cXdDLh2L8Vxx9zdQXqBMxchMm77VapbkwLsq",
  "key41": "2Mfu9xaKRFSuuCXcciAPEH7djj16m9hFko27Ya8Y5HoarHFCqY9YbDuLd8yicigjfbHgKLLRbs7mALjgxfaUTxrM",
  "key42": "5JZTXr1xkcXrtZyVRPfamwJbbrN24bgRTeiXsM7Z1vubZKfNDT8aNo4F7eAMShG21cTU6w2v5VHiMPpYx8RdrRxS"
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
