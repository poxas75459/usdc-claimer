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
    "4AZ9xnXJs1GxoARHEND2tSdE4TaQwpTwRWYMC21NaAp113r7ee1UhTsbLGoL9xc9YWfHFysqdwXwKLqQgx4ZKb3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GfGvNHGpQPxr2sJFBdcxSuc5fqYVr3HgaXe1KZRQp9pZ7XQgKM6ujYevVq1YDqSg7LATjeZDvv31zknHzUjtAQH",
  "key1": "5BCuwH6jw9vN4Mksm7KGBsHi5gAvRx5ipH2WyGuFFiype5g6mo6DrmU5NhT772ydnCBu8PSAg3cxUHGjcEu76WxP",
  "key2": "3mdww917EzWXaux1Kr7WGa3KhHwxeujG5duC8E6MjNe8sNjjYVzatVpN72Vcv2YAPp2uxP4P8q3WcemibES1kJ23",
  "key3": "5xCfVyUKBdL1M9t6nsQh6vZkzazfyBw7g5NjroSbo2qK4ZFXXmmBCunc7ZWBda1bShULRLnmpj6AMGy9FYRRvCXA",
  "key4": "63avSqujsATtfSFfbdDwCH8x4dd8yzzAaSvtdMY6DLRKC4yRkJrXWf5tvF5syWWiXVQ1mWNPwXRR8v38AbMDb6uG",
  "key5": "tz7VU1jbnNfEisw7oa29yPXKaKjQBsJHe59AZcEoy8XtP7rJSnrvDF7zQK936omR3Xx5SYMqiwmnZu2FrGszbYv",
  "key6": "2gYwwgvzNEe5cwpo17xmU7PhrtdTodQtR1QxrFNfGyKtAbELsftvqxncssBYNCELddGTEmpx6maQTrk8akPHjVQX",
  "key7": "5hEzycqzCgVY35NL5vJj8tGAfgbnmooVpBYEQwaQEHz51wVWePTaj1Ud9Kdb6sAnsb37tEKsoadWcLbW3SN4ahZ",
  "key8": "3txPBu4AA4nkxNH2ipdKs5adzi4QMGeqzRMdJt5zpC9Wj5iJAwuim8kHBLRHjzLn2cqgKnkk33PPYzrkZXsdm43S",
  "key9": "2Yc6meFTERbwLQKw93QrokURoNdaiMkwW1ogtj6ddYMwtczGpCQ2cEXWjv9ZGQtP2xCg4hTcubHJfT44eics1nTP",
  "key10": "vue5xPEnmUR9kGSi9Xxc8dsAvRKGwcEq7oHtUA5F2sbHyDF2o9ioj59BhpqDsYJDbw19MEGRyDEeE6hX2fKJZq2",
  "key11": "64hbTrphMy5UpfrByaDuwFoRS4wjtFVn1x5a2pCN1cPBoargrPk111uvex7Lf5bXExhYKrevUPwUawwThLL93zoq",
  "key12": "2eAP5Q2dEuPowPxKrJQh1W3HZVT9ENrDXo2GpdFC3dahK5nZtPZV29gKYscdYUvGZVwY3fhW9WbSM8GupD8XCyvT",
  "key13": "3R6oWPcUX9NQm2Xc7y1N3m5NyvRQ9zkZ7iLHJDRtWLF2EwV7GZx4L3DT1P7ALXYjXa8aY13eK9mg4VaMiVCWsuih",
  "key14": "63my9fCtWx6CpPPB2Ws762KFjVmrdSyR2ThJC7jdUWKrC5SXvvqHqEcsELL3qQQSmSoA8o9tcWmqiaEaK8gnHeKF",
  "key15": "5ESiHfUxBw4nEZZ8a7ykeTeBUc7e6hjdf5y1hC98rkExwWXBVJwZAUdxT41Mdt7u2mtKAmQpS3vnCRnCFNrKN1fe",
  "key16": "2gWV1Kw6NR5n21Y2xSi7AoYLYJ7MQmTYwFjnn5qYG7mjr7K1mhDpJHdevXKwWyiKWeknrFZaiVWQ9wUyX438HDsJ",
  "key17": "2vRJEcBVxQZe31wWh4TNTsyyENEPQJmnukxezUyCPoEtxBSEtFr4M3T2yzJdSepdtxZNjJoeBMasRA2hfXCp7aA",
  "key18": "46QnBixU1sH3LTAWuk4Ec15xFnpqHK71CQRDhNcv1DWkodpRygUbY9JXXu9ctdzSXFnrRaFDEPL2SxjYuUVMv2jy",
  "key19": "3N7aaNwZnG8AcVZUCy5jHPEBHh3oLLttkF8HUxhQEdQFkfy7HVeg7o7frrhhZ1Q6mnax3pQmDiLeRYo4H7HPYkvZ",
  "key20": "4ktDw89dScJzkTcohPiGamemABoG5tijjR1sEtS6oZbgDbpQhBBkRhj1tLTpSPQyJBSRDNx5tCzAmStrdCkbQd9r",
  "key21": "4smEXp4DnkrsPxTiESH3Tsv4PJdnNDbRkwPE6TRNdaFbWcYckYB8i4reHyQNmXcsA9C5jeCsRbm31cPoTxR3efH8",
  "key22": "5wwtp9pxcNGjyhGoSxVzzDtLyWDEapRBC5zww6Dd2u1A2HoJtUz3YcmELVWZ6tMdjfYsRMBGuK7Wba4VNPzM4DrC",
  "key23": "8M5miAm6ueGbkQaocKgyq65yxU4WB2bJkgX7Ms3nuHjuy5HV6dAEanqY92bnRujecDL55tLKPZmiZix1PqqXCzk",
  "key24": "3hnm22LFSc9qGac6MYHVfRDnaEL8vCzgGq3twZ9TpZDQwMnFygAviaq2fFTGD7uTMpFwgbMGHsrpx7d2iBDsM4uj",
  "key25": "3cgKJwZpeFi9vwhkkCcjiDi7C5kPaQbsvTnRmXRTm8njS65GVL6eMLV13s34HMJ2kmg67bnvRY2eVaEkrvZ862yZ",
  "key26": "2uhqdFjPHW7TY4REviCPYW27eYG3yu3bRMQuMpL7ohpC3heDHeEJp57dVtv6rg85a4FLwbyQBRTvNjGozK9D9Ghh",
  "key27": "2SqvLZoS5GkyUarEgaQeH8xXdX2eAU12vjziKrYNw5ZKvCkjqydNguThG2c6HXwK4WnJBuqb9CsFr2ZBJ9Cyfbmu",
  "key28": "4EwPogtzvVwHGgWf6ErcMd6eC53yKM61uwZnd4yp5jw4Bis3Y1RiRjGCpCjEvuffUnoMPz15TUMLgfbVx273xCJB",
  "key29": "YwxTXrTyGJ8HEBgQiG9r1vJRpyJUYu7pQxRqWUzKUJrjjyB2pM1f1r41YJVTMRXACaPWxpQtfipmH7CaZTLMYPt",
  "key30": "3qRf28qy7hXwQ1Ln7gBFyoCSY967wEXaAkuMegVLYKdYeNN1mwZw761irkc1ACDWS2MZEY7BWGPxMSE7TYFruyve",
  "key31": "2q9cLG4mBBZ7xFK1dkUy7qAHS8KC51xq1ePGbkP3ff1GAgbheetMRyrdEwZCmt6sPYA5HUmJSijas89trGM857Lg",
  "key32": "4QcBxPUfUB2xPXViBN2neyCzabpWtDh6pQkdJAiP8arSzZ2GPRcq2qJJsN5VF7XWUMHwfVYPE6Wx5zW9KQLynmsa"
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
