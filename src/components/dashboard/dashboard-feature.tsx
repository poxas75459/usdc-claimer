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
    "5R9oitBfoGWbo7Je6rbgcDkshNzsGP3M53ymJ5eScDEDScuDKzU6zP4t5wJJ3vZiHXcSufyrX1fRVZk98XouatGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnXB716u6PLTFv472xmtUAJRCCFxkB5rPZS8XCC5dTXqRzp9Qsg78dYT8T7HsBbB8PzrAnoaujbm1TZMcghdEeM",
  "key1": "q5Tz3APp4Eofq4AQcMbPyakw36d6Qs6sMpaahjJj5zvN9dqW8jjHBVuccvQm3YoYqYPCjskM3yxYrb2P7MQGj2z",
  "key2": "iWRe8idSiQKPVETTGUXahmvKb196AUyEv1NPKgeRadfjqzdKEjXSUFKUMNKsbhzyvWtKiizmg5M1FPnnCvkza2P",
  "key3": "R6VsJb6Us7DeQ7c5YA2c9ZWdC4Nu5AfQyoYnsaM6bzibzn5LGUGdxSgN1g5ED4TihXZBom1RNLp8z8cMw9gLo4B",
  "key4": "5iMbAXE64qtGj9oSZbLondKEMcLQ9kfU6V1VA6BASpkMyDk1LtEHj9kNXxumRjnKX6Sy8eezVxH5PQvd9s97aUPL",
  "key5": "8jMCEdmA5RWungo5Q33NSEtawvVMfrUsJLuM4nGSR1PzFyt3Lj8BqefMhNttPhetxE5gHNXK2jzq18afbJ56uSe",
  "key6": "4xPMGHovSfun2HtgkWKooREDDkvs83bcJdVXbwCxgbRVtxg5SvCbNTjZg1njg8sV13oWkhq8FNg4CECczjb3wkMV",
  "key7": "tivhxFZk4rtqZ5CsodRp4Fu7NQiaCXRFefecTciJ7xZncCfu1AaAofxWMXBnEWNzbcLTsUNiTQJTuNYkBnuLo2m",
  "key8": "651bJigDnqa3zuCSi8f5BR74CW7C9Ume6xBzYn7yPvSYCHoUgQxANnM5Nk91XL9RU8PBae9spwghKnksmsWnNda3",
  "key9": "4meJT6wdmifjCa5MhCG9UfNGkmSqRWJPSYrhSWTyKNxstXiE7MMJ2zKWvDyGv3fSkeHahaievwcdWvVAtvkNei2c",
  "key10": "5Vou4CRiuNGYdHvHw99yZLiGhW5KfpRqYCihQgyFdnWtQr4pU6B9WTCKFd2fD78b81zzwsbdLcBeRjPk55SaxaMx",
  "key11": "34SEQ8fkQMvk5jcg1xzQm68KGLdk9iJTivb82JB85AKQtiAziFecQD6XKw2SVpHiYFQwBWapFAjpDaT1sEEpykrX",
  "key12": "K8HKsadZ23PFmtJKnn6u7FapeHdeBdaLMdLSYdG7bTqt8aWs7Kc6wEgqVK7Khswx4WuZDpBcq4iKz1emPiAvp5X",
  "key13": "uLiatFfJT3zTnuvz6A3bMeuzUg1YUbwou7DSsqoydJtvMj7ftz7Yyu2e6Vuyj14Vntwte97VsQjeZrxLXb97XLM",
  "key14": "3RJhYJ1gjU6M5rfg4CinmnxCEygGCoGYbaCZVb5qbBcryR6EVXYRspFgoHBHSgeNPqdyT6ZG8gbMhMYhRBSyGpTB",
  "key15": "3cohoXZ8chBQzPNJMBgHtaNfiaW3UCG6iJBG3EVAdbzAMsJhpWvzFar3ZNa4R5X77xAarBxqoGKbuWzREEgaMqFN",
  "key16": "216WaqtKgpefAP188MkSWJYrGidSDRGipskEKzQYvx5xhXdWNoTDD9y37NkWq2cgdPEtXgYdzbLE44B9K4uYBnsd",
  "key17": "4eUJLBJPF5sQ5BAkcXtzdxgikLn4gZJ8VmfiS9nYnnkg15oMGg3xpmwRNim5Bcs5ojktJBzEi7cUSsUR5yYH9Ck1",
  "key18": "5CppPe1Hqma8dwHTHkPiWAxP3xAT5GKry72uwFNJkH6pHGj84BvSvtNGDRSvcNYoRfRAVEqPHvHx8UBmZDetQtGt",
  "key19": "5F6A49ibew4zgqFvVGKtTEYDUyUqQDj3RNhJabJrc6bgEpYR6Ex5JEtW2rUtCkouq6f3921YW3fubYAif1XuRdPW",
  "key20": "5zQ7kpCRjafQ6njea9gFBDLPAdS4pKQfKgGDj6X56mF9yvy5dBFE8FDqCbxkSPxbZD1E2V9BdYfTzFdtwyCFtnMz",
  "key21": "4mS1kKaAQKWd5SvbpwShGvt29qxHDb5TytJqMvjp9HsjRTqteTCoCcW7Sz279qcifXCoWxkT7zziQ8R2aWZbBFY7",
  "key22": "5NzvkwUDuAuwDcNLiVrNnnidBGoHZCpKP4oNzAmmJP4CftzxfmjRm3jYToerXW8yuH1MrawazkeYcE3yrhWjMU1Q",
  "key23": "2Po4SjcgStQEU2KezGwCEpvY6CDp36gwkcXbMqhjY8bbSSFSsBn8trCoUuieeoWyovmidpmR9uNsM9hvEAVieaBA",
  "key24": "AeJt1u5UXUD3rKtBu5MVxvTdgA7J26mnceCbgYEqQ8M2fzpiwoY35FYbJftk9BuhZWtqqft2vE7HU8ZSvwZUkxC",
  "key25": "7RD9GRUtPshjCDJwPAFq13WKJshWRtpR8WbEQaaLEEkUtHERaRixuQbE3Zh8skC9LhZRpVTUtUdCYHtrJgujkXL",
  "key26": "JjDFoD8hDfnLAzEr9rS3VnEoeauDofLVjCRvitNFURVBpaHLAJKmyQbLkHbaToXh4qDaYeBbhzS9jmPZdjMSVf7",
  "key27": "3aiAkykJb7qjedp4kYhxJJi61h8w4cugH71az5WpNCQi51GmEpwbKoc5JYcCb7BzKQvkYMGJkGyT8xEcKqrnLwGx",
  "key28": "3PoUpsgrk1oFZX8seZWDbo78FHxWVMwnnF2BfLqHDTew1eBxr6JAW6kXJjEQg4a7KDgYzmgDEgsTk36Ato7zxp7f",
  "key29": "3XAEYUfdnP8L9UFZFnP6NRCrVWa44gotoKMQ3mHJ6PNse5wkpzZhiY148MoXhRTXrJp8QpaETiRPSw4Pa3rwRxX5",
  "key30": "5TzjzWzAXeZuJ29dM84rKTQZX9oWfWMTXYvdF5j396ymEXmoge2DpatvSqp2oG4fsDm48L4a9nQfP3oPoaVJ4jnn",
  "key31": "54mNSze5nchmXRWnmR1DTTLyGbHSBwRQzAg8Xr4wMeCfbG96WNet339frmwhkg3FoWGdCqLWj5qPVxHt6Qpzoahz",
  "key32": "3esFMegJtngn9BgCotpBgJQwTEWDnAfVmkgZHPJeQkCgHozdY9rHmF9mQvNmcXAsHW6fsLbjKWknoN8fEAra634A",
  "key33": "4nXWFwLg7juCUPM2DQhrBJH6djoxeRnYPuWtQ5tKjNWC8BPuxRt4UAqe3z9rqpgvSBKfr5J6JipejitMLYikF5pv",
  "key34": "3TJ8VL3xevP2bVwMbDUwU9Pp5d9wC4WjuUi9pySTTeuVSEfjwtnRBySFvXsRhDj59VBCjQV5STzi6mu5EUVCv7oa",
  "key35": "5MFpvRbhQAZiGexBwK9AM5rws528PD79cYa9jbAxpw8X5dm3L2HG2diSjZMxQ7we8Teb2zxFPnTUhy9y51CJywc2",
  "key36": "43VdkGRUYa6hZUMxAxepXGMRHYxEpG492dDnAKojwj2ANQfnsZ5BDWCASvpkaqhDfUiBgRhGMmNbGgFE26DuSp3U",
  "key37": "mKrawbH5cFzvD8e5DM9xUyLtxZKfM2edDce6iLEYy8v1bTmMgJBHqh9zkCHL4uCMMizXmXxP82n5J2DLEP2BAKm",
  "key38": "2LshaxffDsbQ8ppcb23gXriKnf8H3dy7YrPo2U3xHwBJrdAqgxNDLPjn5sA8tRA7wgv9oy9V4oNP3pcReFSDwfCY",
  "key39": "2jFaqJP9VKshPZyr88wiXN4i49JM3ghB9dgLcr6xQzBwEM3zrBwAXjPYKkH1z9AmHNHnedaLbbeJVJYcPRQNDkXZ",
  "key40": "39FQ2npU4HJafrWyxuBxvNK3EVxT89GWjFzfqDCMKXjm1vGbb7FL1D619uNTFE7wARFgqVtGF7tLPjwDaqYJS3Nu",
  "key41": "2kHog6dGnPoGrP1xj5nAnSfTegNRj7YAnDuVH84EJPZxBLATLaUB6QeZW4eaLpTt5zPHTtX4P8ZQPPvMNxFz7qwD",
  "key42": "1KKcDnvhZJSjNcT5czEt8st2tt2msid2CQUbFFhQCkGHpa3tksvmSy6F1zDEJokfhrL4oromC5FaRmuSZgHMxHu",
  "key43": "2CfmNNE2DHVqb59qqaMRG3pZuD1o8sGp3Kw8UHFbXgdiyeShwfrY8ZxKs2eagK4eG9u3y2oSFstDooyTdKfgzcb5",
  "key44": "64DBtEeXg8yE8jGWEbGCf7f6F8fq26qtNpa19vuhJENqLaJtB9ZFYfsLfikcPKuXxf2M2MsAiEAsr1hG12FXsNBr",
  "key45": "nXDVDScM8AFGY9hQNScnziFxCEbK7wYkHQBDZPMmRrC2ZqrxUZA1fDt2QLoWHswPLh8VYDdgPbnuBBdiG9SfxTR",
  "key46": "2DRogNNYLb6PjTL8rknq98c18Vn7yrkQfGYrY7EoSi9qKVcGS78cEf15ZbJSrGA26bLHcJH3rwQsNtxsDeBABzG",
  "key47": "4ss11vjdNDcQFaQ5VB3F35v13B9nYui8o32dT39h5pisit1GZFie2r4av6JNpojbDqUmLjvp2PdT5Lm7UUhkoom4"
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
