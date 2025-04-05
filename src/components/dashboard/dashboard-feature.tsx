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
    "4BAkdgctUVKLGRfxQZJPTGgYNeaz6bm9omwVuzFBiJ5Ra9BbMrDM2pLgsyPwBTq7fpBpDdUtVLQYCtAYFc2BGSR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TyapMQW4FPoXCVeGYb1ySMuRdFfQT4zZvrqRn3j4YzALszL5SBdqqPhzCpaZUVDCnss9NkBWzKLFmGST5Wf39KX",
  "key1": "5VbzA5ycLANDZDRn7itRtYXrBPiX5S6cmREd2TTcTNeYgaLeDJtU7WV35K8YLLsCvYwWs6c2LPU41Qm3oLhrUkRW",
  "key2": "yCymLKFRRuGBytLV1xacVK5RJmpADW3P7B79tJv1ckbR1xF7uRrR3t6ULyE1LdHi2AxhWRzmYY8ma4Y28bnfpit",
  "key3": "5dyJP9YbFZT5U9XLYt7U8oTgbUtMNMt14MeSHDJfCcqfisuJVHJs8iKNeiSTgR4jvHicLm85PS1Ry1WmAdhdnhY7",
  "key4": "3jwB1dSiqsVcFzQSU1bm4nWQmmT3SyQ4hT416RvurvTcqNJvQ6QPBynAJxDoLp3ENPdhp3JDhteUBKCirkKWBsGu",
  "key5": "22pcGufnmP7nny58W7w6qRS6gdrEQRAjUaqbyZqEEUr4X9r5mWXvrPvmMrXEAd9aTNvvC1RVWFyxcSR7bgMjpdXt",
  "key6": "2tNfFky8iuy1mFTp5VcDuV6D7k6jLdd7DHpFSqUx8yTnwkujG24PnzcBETxJ1h2YiNkq3KtcVvnewYoDefogNshc",
  "key7": "KzTkbviFUazRs417yy3M6uskzFRXxDcsAtZoNMuxbcTyThtBt5atwkAWe6eDuTwUqnsrPQGwNMtZgzYdQpTxK4f",
  "key8": "2YxDbgZxwaHmBTBZ3EPHxbg5Vb4CBnJwusDrvA5FSQkAbEbGAuKCZfz6UATkUFBu5DtaCHkp9uQehBSo6G988hHR",
  "key9": "mPamKjEMvzrxdkoXKwVH2W7QtYPMgZXteaALpLRnyidqghhk43g3JLybothcyoyVoxGkt1wExmE2Md5E6jXMjQn",
  "key10": "5BvTxmufMxZ6idgXiyrYmixYMu6AQUemC2PxbYA18JMEDXHkWgdyJ6sCnSoeSrP7ntij2tHXYzncDpBMaP7FPxxt",
  "key11": "89cSDbHsULL3SGZbS6EmZJBH2WcKynbxHevXGVEMjCWLsZw8L877ZKC7s7oE13ukLxqKKxJwtrrK1MYUceAyPsQ",
  "key12": "23Ftfiif7cd4tLhXr2XmEEHBrRmedfpSwKiSsY4CYxoSgmGTJg53RPv89rZVSBHr6r7qkUiCHJiBKsYVDqEJX1b9",
  "key13": "6gSSiTmVD4hSZk2ExS9T8Kessf4T849Hg78bncci6e51pLSTv1RfkJHovPFRHSiNxPgiGfeW9YiTYpzYjarrDRZ",
  "key14": "2eSRGTH6kfSwgNnfLz9wV5RPXtNNsgHdDJUsXVW6iqLNCz9fEAMVw8dLnS9BPqQvvjNg1tw7brjpqow3afzrU3d7",
  "key15": "2LoqMnhNzppPRf1CqL5Tk9QVNSpGeE6YnPZ6t4fqNtDgqAFRoWQdvQ3fp65fSAWFGw5Sqmvx61ncYYGQ9Re2Yeae",
  "key16": "54HtaU574YemkrhrUTs2HA5yEBChseCemmKydoH6gj7DmdQreuu53KK2XCe1DrD1Er2jQCjRMJvizEMnuPdynUPr",
  "key17": "5879F8d4NrUUchVdEgGAfTCZ5XyYb79fA9s8AHCMzrfX2bUbZp8H4UPo52MKCKXirBZYB4mHjjMYFnjqdwZRavGN",
  "key18": "4EPo8nG8HCZd8YUkp8Q4s1pYKcV9pLFucGuKErmXskoNkUKegVsSwBy3zmDyJMFUkDkptJSzPEW8MR5mu81RYN5v",
  "key19": "59P83vjnM2Ly7oRwqMgeR8xZYt495Te1eEkMX7zGiK9WfxDveSKBLpVcPzEMUPmzztoNdZocH6sPaVRREkeprCRd",
  "key20": "5pq8jEdrsj9drj6H5q8gMxNwn9pCKi71ZtSqLjbr8HvaXRXFPky3vC9We74g8z1T2kWqotCMoQcrZRxPS8CUSKLK",
  "key21": "4LUBcRjpkEL8yXVsAvxSx2KP1YyogNhaircuCFapaYsMYgHqVgbAQVavdrHiLJn9XKBSBzKjS7d5AxkgGnsBcFQT",
  "key22": "5zRkLMGLC56Nme2NEYz564kZEn6HUT8grZ9t5BZDnYv75YEvGunNJrnkjZMaZvTs6rBkd5bVsyC4hHyZroLLG3YZ",
  "key23": "EbksbohgVUntre29soiPSmyDpExz7rwhjfH9jsghoPUZkuZ2hACRfVux3WdakhDsr2a7ELkFk47kjhCDYHL1GX6",
  "key24": "4kTRwFPUDEuCCTeei2eKUnqKHKveqHXrDVsqywaxKEaN8DVhfXUxsgzi2tmuHJ6xWFYXGHyg6Z6owY5K9Ad8Lkz",
  "key25": "5B6d7q53WQPo6WiES6gGhQmxG4cpEWKdmZrXgo7HY3fZbVjPNWGjGcbcWkVn8XRAUKAjYmCo6XqjC5BxXbYcxTF7",
  "key26": "4reay1PGmykmDuPFvfKNc37NwJWTkpp1UrSjFDd4vWcdynmqic5eRnnotZnHoE86LNXK8vPyNDEVo75qsCmUEdLm",
  "key27": "JUXtNTFWJSLAKt6MZwSdrFiAdGLn5565PndDzuVCHmkZNyEaaiCxFqdvrLNPQnFHCFEUwZ5Gxkfvv3Xv5hXvwhN",
  "key28": "4hNJWgRKeuUFv3garVWP3UkKHiD23eGdbnnQZMXSwMKL7HmvGmcZu4bSbStjn1sAJvZLUNyc3pTqmcFcC68aupXV",
  "key29": "2tziStVnNk3XXuasUYWTBFKK1PqhkVbMpbUqMuhxHZS4zJvTcTHofwHUERqwREupmh7dD2jRGyTS3BzPF8AFuTiT",
  "key30": "4dLXRpY5mDBe5tNv8WhqYtbv4ZjpT4ZtM243PB2QcvE4zBV3dXJRFMZwcjzjkkY9KVXZDVHAXcg7QxrjmPzZV7c",
  "key31": "5bVJwpQUHSi1udeBsim9FguyC3csSUMkDNSNuDJXM7Ee4FEh96Koqmv28RiQN5J5ougT3QbDxWizEf3EhfmsPNnc",
  "key32": "5t2agZTkQ1gWHwoYqXmSVwdquFA5rPnftbqGHSvwyDiKGX6GiUZHgE9UvSfcair3Sh27oJ3UdmiHzpe3jKHByGfy",
  "key33": "5gjVsQncmFpqQ1K15o5MD5V5jPmyuQjGWwvjqBQjEYMW7ea3UgiKcLTjXbTwVmcQ6FsJVJ7WFnPTXXhnaYh98Ukd",
  "key34": "64V3dPbm8zs2WPystKQxyUJkMq3grhPFcn9LbZ5sH6XvRK86z8rdHwaxzgJYsrH5sBEoHyb32aBgRZxGcYuqHqmQ",
  "key35": "3D5p7kZdM1Dv57QwYxEu4v2GdaqDczBWosY4uHkTc94EWg39etpeRMW5kjHGfXZUjqcQLaTwMWLucq6kcmQqkcFY",
  "key36": "4jeoTCsFcjzULtYBPda7cKPxancPCsU4wttAuUqjmogEeVGxwe32V6AL5dccY99Na2o9d7H2LyJsbno1Lbnku9j4",
  "key37": "3Pa6MS1GKPoHzhDRa2cf12dqdwqcP8i9nRdRppoW5EWJszRzPYD2sj4SzkbJzU26zZ6Th7xJMVhbPmTAkxXyGwJm",
  "key38": "5j78UcK7pUDCKXQ88yCmDzk5CN6uKg9Kg11duaipw3RjC433Nc4kJ7YE6UwuxSxfn2sW9sF9HSmseT1hCWdFpCzF",
  "key39": "ZYb2qBcNjWKw4gCdTCHxdoJSggpsY2HRf815ZuVszPJjLenjdeJVtDpKdw7RQfEqe9j1xP1TzsLrHZHrwA5foK3",
  "key40": "5B4NgUUWvaceWyajpsmkpLsDR7FNEY88Wy5tCT5vQqYhq7RcYeR1penEahyHXTSkK6xw7gTYP8viCBKPsEP2gSXx",
  "key41": "5ZFTAT16zSgYFTTWfHR7i5o9VneozDto7xH5XX22QqGiqyURCFQeEK2GGDEvNAbYLZFfzkKjn82PdujPYcD91T3w",
  "key42": "2oozJeLwB2wkzsrfDxVFjmDdBw2SGBvs5D9snAzHGSYvQn3X4SyEjkUgbyNfj8xQFoWNR3hDxtNfjJW3osXVMQFY",
  "key43": "4e4itN7jRMdaXSLyLxGbeubv7RGs2pVHqZtphUGjprttbAJCFzYn5vkRbWbfRHTJVRkf3WDYPXwfueKgubWV3zUE",
  "key44": "2VStE3FBDxD1WqxudZsEJhhMKHytv4D7Q6QdVUGZArgVBeSYpVPvU3hnuGqwWiah5Tpc957cN5LZAofLQcBPw181"
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
