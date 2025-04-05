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
    "5kDFsZB9gMFj35C6uDE9WyFKQUBr3ZS5EeeK8w6hYatcT8Sa7PQjV3yrVqfsLkgAvSL3xgFdeBS4EfPbKERfhNYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YHm9obZPBBX9qz9RW4spGL8sYBdoZPar9fw4mu58jBRNoCN22K41dxbqpGffRjcsCcu6sqgbLqp9Uw9aQ7myTRb",
  "key1": "2WfT1yP5v6RvWnMdxGDTZpqkQWtjcVvi4sM1ftdzPMQnBv4DTwnA9R1b3hbQPWeN7fuXAjgsXAJ1WuYxGMHrpYSg",
  "key2": "28kztm9FALUrL1esMzYLSuqknSEJkEgsWxrCQEC2XQuMEyGSW42rBDrDbVZJg2wZbdrHbhic38hoyDDzdxWKHTUt",
  "key3": "2hKSvaxNGVSehG4GSJEqZFGnkiDEpDEPWVAC8bh4bFtBUfLBzdD7TbDqLGZi3JJ1HKKPymivTL2ANnvTbyHRzzLX",
  "key4": "xnFzgswbEYwY6ASU3H5B5x1YRPwnFqyMNKSbm2WcGmdPzS6rqSLbapPuc5uT58sLxFqDih15cCqDwe8XidV7FnU",
  "key5": "28XC29Xf9xnrbvLBMxfYfYJ122ziGHdmq5cEHEX48aSdTYUXYodw3zVUzLuodNzHi3TPhJawgxpWi2q4iSPnhMbJ",
  "key6": "2mVhb43PxJmu9pZyV8ZaokjHMxKDMJQvD3NqSdbMeYMFuW3MDtpwW98b8yhi7nPNazYiDFXuNGPe1zCGa26gYUJR",
  "key7": "5gkkyw9YFDQpE5mdUajDVLRtEDQqE6REHwGB6t2z3hsmx82BYTr3mHB9mRPjMH63swLxCZ1wA2U79g5gwgpVeZaj",
  "key8": "3eQzPSJ6Hy5vkjYoQ9JZjTqgZhVsePh8A8Hjkonu67hFDvTAERjfXE51crq3WyxTtJ5zCxKhnN7x5GNpoDawRjYG",
  "key9": "5XZAiKYdRB6YhV6g9GGB7AUkdcJwfxB9W61m4WRgGmUULBaWWr4kRNs9akC2n83g3MYE3Te7uJ6N1zjsQJz2529E",
  "key10": "fXoeDYPSNsbY3TjUSVSPaRhLLUURwSR8fHuMsSf6uAFHUFGA73JE4s2rvGkBLemSXjFGP3RHVXdSuhDrNkYh5s3",
  "key11": "5RcHNw5N9eA7j6npVcr8v6KFRFP7xT5azbQRgo1EEaxeRJ2qG25vNScSbMVpTss6x3X8C9oufoeahkATu8LSfueW",
  "key12": "5fx5tBsrhPUzvVsNAP4xavnhZQb4WEH9tuBWtdDBwRKD9ucwxMgnHtqKE53wuBVmmAaNZsVRwz9boBLYkXn2r5HH",
  "key13": "2TKKmB6ohvzVSMpisdYAFiUKaTh8j4E2Ch3m3DeAUn8XGjcp4swR2DRhWEfLVukp8cv3yRxWDmZ5X7fWoVAvvayd",
  "key14": "TGMLyt6kzT7TqcyiQhi5F3swGPHK6bVaQPp8qKKm26wDykmSpmNiMYHB5Jmw2LkP2o1KvqQYUCvtr5mogFjGewm",
  "key15": "PJFkNMtvS4B3TkyeHCjuXY6d5Qso8x2Honfy65Q8jiNPXvLrN9iMgJJE4UYzQQ2HuLQ4uq55UcprQqtz6gVUuh3",
  "key16": "2KMVsJMoacoW3ZpejfxbiJu46vGVxejYAzjbiQEjGAoBjURS3K1XSg9CN4w9tRXV43j1mrJGxHbwLXGwUnoSQNBx",
  "key17": "66qp7UY9Z5ezBRnQexfwgR7AQk29fvzFoftHn5nwJ2VJRQAXLrL66NHYrLQeP2tFHbkGttvUcQhofmbzZgZdTFwj",
  "key18": "65m7X94uS7kk635UwA2RJjuCt9NWACvJzY2R2vFBKkC2tRm9uDjrnBf6b4A2ABZXpumoAd5i8YPv2zLD27q4mjQy",
  "key19": "5iteLEmY5Rc5zddKRgfet9aQvqph5F23D4iY1KGMS9CSwZXtg2CMnobBdf6JQGk5vTdW6t1xBosFeuAX1wpTuSDt",
  "key20": "C2aipRzADrjRdRvjqQqKiTxebz1Q975TmbfawPkD5L5uctUdLuzESeY6qb1qh4Cxd5esswspzmifQVoqYwHCCV2",
  "key21": "2cvNQLW2YpLfoU5h2n43CRqaXggvhPNBMRANjSTKHMRvHgNBkEYgEazXhoxpPpKnN2ehCsmYqGHoHyq4zVwPxSrm",
  "key22": "4dyhFKRA5XKZ3kVursDcGFkEcs4EyBbg2NHUn6fRZMp1Z4xMAzk5RbstNS31cjN1kJ4z6Go7cuPQPPsyHsUBs5CL",
  "key23": "3Ca16RLjea1Hq2FJHyGnWfq7ca4DzXF9eWWjvibZF3jqv466C5zko9mEEt8jNfSi2Lp4bqSendz9vQbypV8MHtua",
  "key24": "3QcobFrUA7QqpzSbdLuyzmD7oUyfeFjunuAydpeQaDi5Fmav9yXnSWkf2HUAcdpnudvUFewHGq1pNRjuvizAbFQ1",
  "key25": "4Ax8mYioFTimhHXqZnCJZQsNv761w6RAkzXa92wgdvJMTvd8qfLqG57DTd3hearGeGZYAiWtpNEnHSbNLzp6RGCB",
  "key26": "3fJotZhgURGrMb2skPwv4NXtVSTSNrDgqb5PXTn6Qy3xgteEpRNFrYKpeHMpFjpm1f3mkBDkhG2yf2PakfJYyDuE",
  "key27": "4nLnJkpxKopvFaBuwzffrC5UvEA7c7Ut6ZLqFqfFoBnqivYng4Stx26RnwQb1f8yvjwJsTsKxuADR41TZzn4fFxH",
  "key28": "56EPykUiTcKKKCecstXGSYnaz4Ed9wL8CDXupWpq4YL2JTpp968aT1Z7pk39EuEe8vY8bbYLrrySCUvANwRP64Jj",
  "key29": "28L7TzNJ3RqMpSem23voRBBq9H5VMqVnApCaTLtcFEYaQ9uznzGSEcV4fJHj3wApyBJutpu1jC8JyZswjXbctWR3",
  "key30": "2JtqwDVnrQkV5qw3TKzvTHQTJ8MnNVNHasgFWDoqbG7vkrKNCiv7LMTWdXtkCPz1TtUsUszndj9MaMwZPXJQ9hpG"
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
