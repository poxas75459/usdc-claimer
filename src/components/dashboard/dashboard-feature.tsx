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
    "2GQLGc7ggZdFw4c8DYq5Qgo33UKpfQ1cS8nSYiVd2egD71zuAG5ropiN5g5i5WjLtybAc7AyL56mEebkvPNULYTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cN3S4DTfc7jf6kM8nLewVGqPDsLCq6Zrwa1c1K1nyB2CqQgs6Agvh9bMgnS29szMtd2XrmJuT8aiWnuq61T38nX",
  "key1": "3H1UJtnBqERmgFKEL8GceLxTxSDBSCBvcrcYoBznnNx5CsiabKjKwx3APpAKWhUPxvyWgVFLdRrtdKxqDrsRYz5T",
  "key2": "WCFtUkye8t8zhkyWrYpBnoiPiPfAyM48Xrw9ThKf2HnZuWYmSUCdG9TgdUEWAUBmsAnnkGo8aM8GQZbfEgwHJmQ",
  "key3": "3iRaTJKVChzs1M5idxT5XAZhWYcVdyJ58Z1YkytJAerAXMVDpXT7hNmddCW67LR6iMXDxJskFn9EpGyrvKfFvuPA",
  "key4": "tRUeku3RhswbNKBbM18irm88gDpaq3m96gWK4RJqr8eWrr2Y7scfXCnKzZNZgJX9vFC4SJMrrhtuWSCuDoFyGwt",
  "key5": "53UiMA69VcVEaCTeoR5tQ7onuqWzJPEHpwRguGrMXy9ZRGBFQKAzYq6GPJyx2QM5UfF9w7R5FBsKarBqD8Zgacpz",
  "key6": "JdYGwowvwZPyTf5MLVwoWUruThwpg82hVHiuNh9DwWTvtZE3uu1RSXYsGHagLC9JwoXYVgHm4ACUrDjFWtop7t5",
  "key7": "4MPyXTeGzF4hahmkJiHnK3HjEepssLpeUgnBDc2enZbViSroC4DMuxpwCGZCuVzKYZQ3CMMNHPXwz8Mq2v78iLhX",
  "key8": "2TmDjNELi7aSDDzFDmFWQPFeau4wAFh8cgcU6fq5xBLpAgh1gEDrS8HyoUtHC3ezggvvV9Dp8R4d8hDSvQBuTXHb",
  "key9": "2kunqfLmTQGJjPAuGgkjL5uFoQLCGoixspKRrkH1bMfj3rhg93TDTGb7H4oyiWKpXKiFnv3fbPBWHZmLJov3nFbz",
  "key10": "5mRRhAE6Scs9zG8g5T2M2euPzgKxFSFg6bVRN75b7Gkp8M5sxuxiqA529pPjKACwiXGQdht8srwZrUZQycYnEsvc",
  "key11": "5S32UMgJBUZ3cskKGnvXhdb4wgWSRsPU1Q4CExvMg9BSiw8f5vkpf74B4xEwfUxrFDLkr8LPWxdTzrcWug48UKtp",
  "key12": "34xLBYV19uUbMPTf7LxnkC2y7Z4HyRCGx7C3DBnAUu4m2VNUk2pQE6cubv3jb6iqomM6dL98TTFvKjALVEhPK6Nm",
  "key13": "5jd9xnRYLFEcysadVPPdakw1SF9ZxnwK6d5R5FYNfipRVcFZJmh577jzqV43tzbos47Tse8pxXfLGXPpk7Nk5Ztk",
  "key14": "sBr9F8ooAATJGY9Rh4Nwqf73sVHBs4CWaJcxQkGBCJXCibdZPnwHwLD3KV7ekTBm8xqdAYQtdM74ZLNQkU5vF6c",
  "key15": "x2mfAgmLga5vD7TUMJXpDPG5PhxM5ZmyZqyJQCgJxvGoPN5cx5DwGyA3NhFBwP59EygnUkYcEAWESRXFFG9wMhg",
  "key16": "21c1XQVB2YQYVsfDL19Arb24NyxpuQnTZ4xFdFxuZUDo5tMLfTPRw32ShEs3kxd9RacaZ57BfR4M5xFLQft8eECv",
  "key17": "3kE87yDM8qgeXsMVxYiFrtKZreKXYf7y5V8dWCeDMGNRQ13zkGTV6Vx12HKH6MA5yzVzjSgncpoTiP82mqY1D9U5",
  "key18": "8e6t33z7zSey7Utk3mK5gnkEf5J5VSRBhHNe8wEYxs15vupCGqArDPt9go1CPNrhkRNopBuAoNRbFBrGrNvLHXi",
  "key19": "2J42BoAhKinQy7gf6iS36UJZgwDeXgD9doVc3o5BmCx8nNsVekE5EXKrXTpK63MuMgVKEZqndVYkgbx6zgHMTUat",
  "key20": "57y2jQdDsb38ggEfvkHtAkWrsKBNDocKBznNgFxEkoJ8KiYgGjUzitTkaRii3uVGp97CWLHC3zv38vQJAJyYezFe",
  "key21": "5YECL2oMPXFxPL3CweMNACjECQVkMELbwAJ5t7TAkjyRigAri6jKaPtfhioeVBkkGGYFPpwEeMa2gC4eC9545sXH",
  "key22": "4KhDFWT689rggKoq49Q2KuzCUrrVrpSgykb5Ba8HrYHeNRarWWEwssuD6wwbcLGvEt3mcqP3yUWxRPrJm8iWEntn",
  "key23": "3nPUNpRj1DjRLGXMCPx98FBJR7vx9R5oHJejRdsruEnwDgN7cqRKsZFsnJfyVWaHUnnEd51az5igufQKbL4bHVv8",
  "key24": "5heMAjnhysmUeQ6W28o2dJzgLyhH3PE35Sy6j6KCg7Ej4s1bpcZ4YaPLWP9rAYxBzda2g1FoA7aZpr9D1A3gZWiN",
  "key25": "3oVZ7MtsY3ZRatkyn1jfReyDLoqH8kT6kA45DoXb8xMP1LLK5rLCLTKEmGHrqWw9tqgFnE2nqKvxK5AdvbF9ZXc4",
  "key26": "2KnhAfbTUwUThta41zptwooGxGu3Sqcj219ng9rYvMeCe1FnM74y8JCL1uNHZvrwEkMdG1DDzfXPBPgJwksMmRsZ",
  "key27": "4HHsZVDW5EqeBCGqW6hMtzCXb4tjpXqrfJdtMAto2zazp31K7F7Fk2EagXVexFF4vaPmue2DwZwwWQNe1coY9fJS"
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
