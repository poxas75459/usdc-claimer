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
    "Lbx8BFQHBVnV8Dk9Mae14hBMk4YSyXeypDXayoog31pdfPMfWNSRvWGZudb1Fr8gr9iDineWwdanyttozAoEHrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWREUE5Ke4DsBStAnB9cwnq6yJSZv152dvrUZAC1hUwMFd8BezWHxNWfv2StqfmCEpBn5RpUhdwsPaH8Ke4vk7Q",
  "key1": "3fGW6cPaAQSEQ2vNJpxQe7tsy3gQPGT19xYhCLNE6fYtsJuFbgzsbtV5187cA5GjQ9NjhDShU5N4gdHynwMPXrH3",
  "key2": "5DkXb1vmRocXhhzfqVa5hSfnHyfn95zeM12rjMyaF6bmsy9wBPVBDUBM3hF6U4UMbEw2BwjxtberVVMN4X44Xabs",
  "key3": "3H5CNiGqjNyKb4RsD34Y1JVcAxVzggudpCTt15zmsKEEodVt1HYHdk4KvpN3bhviCxLknMUJvdPqoB963aD8Lf3T",
  "key4": "LwVX6NMwT87LT1S3y7wc9EQPfZCUk1urG4Fd9XxwdbuX1D7hZ8Wz97g5cxyApsRjoLntxStquSpCrJJtV8ctx9x",
  "key5": "4bNZvMo6Exrv5MmMSwcZe75RtQhoK8j5y6mEoCPCLS3gfxxeoDWqe2HVG38ueWS5vnTYv4L5NnUbsV8grJAo6FrQ",
  "key6": "2PamqeEjAyKdSQ974qEuAwMtfi1DkCfMnu8ourKyqnM7poKkhDXUic86RCTHeq9jJhNcXWUJrCCJdmugqKNENzqv",
  "key7": "2JbVoZ1tVJNJCMh4S7w7uFhK4GVXsx5tbRViM94ruYXa5UhtndjCNey8ViHB5LWfCPuWyZ9LSngGsts8dqVevc9M",
  "key8": "2A3oSEmZg9YynBxULU41KaQ33eWR5YHF3xMwcHDhQwnX8TxWYu8y9oExKhxfnjb7ysgqCQzLZftkWMz8W9sQqUDG",
  "key9": "3DCyiiAh1nTcb6yyM6iK5cjb1Ju7KCSEVKZYkRj7X5GfUtCKsps7wauQ7dkXqCpTT6QV4YtRQu4ianYA7rspSRUJ",
  "key10": "5gr1oMfEbtNy5G8upGDArmtLnaNEGPQkhcfNuV6cpEUqgouDnHcyMuy6SMu6m8wCphyDShEW7f6WfTyFuHSdmET4",
  "key11": "2ckLquSyf7JJiNKrativsvCWkMuJ5p8PymZ7YddHNyzaMWpq8yK4k94oW6h1jCgLGTA9MA9dn88aqjeycSKkGhJq",
  "key12": "2MxXom3LGMnCSUTPYjEJAL2Rp9UZ5rcBVXnr1VuMUAk4tGTDRUZ3ed6LxHt9a7opqynZcx1yKy4WaY97d7uAMHYS",
  "key13": "4pAro156CoQC688goqY59sfTr1fRw1izu8mjsrRtQrVwkBrLLy6bCfD7yDuXGwFeAjuw57UZZURvLjCdLbdGXJgS",
  "key14": "5JE7bTXxcmtcs1yGxmz6yUkdXfqCwqBnMuA4orxh4ynF383kLGqdX8e6KKQyWa8tUhb9V294hoT8karCZ852WaLg",
  "key15": "2SMmfq61dmQsV1FV6UVsZnTRLUHZkGS76yaMXmBUrrqygN1Ac7MWEzjA3kufC7Usnff8tYqigYLHpJaHgqLDUHEK",
  "key16": "3HwAb5h35FnU6YF5vkRu3aRRGGP5pGaAzVAPUNczAf2g2E9uan6pPbnQZe4cY5T728xQqJFpcvfRei4XrGYb6n59",
  "key17": "zyX5kenGfhoVKTVmi6QgoUipEUs3fKkpNkiBejCAhSyqWTxzdWJFWtPMbbDwibzAR5N6o2HYWmkVFJFJj1G8Qbq",
  "key18": "3iTrjNxKUcz1uEkdaq4ndTz2LwXzq52SVh1JtxBCjvoMp5Q7e8r9jFRwW7jpuzznyWTK8qe5xth9sdZRGkCx7BDY",
  "key19": "5GeTyd4GgwzjAAWVrrbYtJpBNnE9hEPHB8YWmguUgbqo3uKfVG4hav9cWxvzVDcw6RnvgUWMfTqBnBWYDCcE3qxj",
  "key20": "Ac1ZPc9nBsCkwimqcr4sjqLxyvmBbJLcY11ef6KfmKQp8XPogZGtTgkKXxpTTidoN6KRujDHYyyDtXQNVyWTwE5",
  "key21": "14fudiiskpHFY7cKgKC4iWenHVqM6n4mkYsZEhHhLSMVBXpQFF3CoEiuobwaJEvChBLFsL3bC5Z3qDCXvjhxNum",
  "key22": "3ccXWjYRPRzEyeetPiqCnK1L7GkwCPaDvSCq9CCWA72xYGuQgweCVFwLFqyjPDBVfLzj11FytHiRnzvnhDZSkaJh",
  "key23": "uk5FeFf5xotJRvS2SnuwApf961MYCstGZFyZrGq8f9k89yJn8Rs3t6feMh1GtLBttm1kGjUEAHjAWqvoqQ8V5y9",
  "key24": "5UizxiMv9fDihmAdwd6iaG8GorVS2oqDrPkLusW7izb2TEvWe4nxDkd4G6aeh4CrXtEtw1QyRhnA8siztSBSBWGk",
  "key25": "4Xa6ZgxVQVdiWnTiHMZwKmbn1XEgBt4UN698sMSzX9qAvviNBvkRs5ShfWZkrMoNPVkaFpGXvzF26CQoytsv3wdM",
  "key26": "3CUM6qjeN8eNzWRLQEzvrgqEk6WBqFsRsHttPD4sc4MCoygV5rcR6titokYUHDRgUew4vi2ew8faNFtr8LbVoLZz"
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
