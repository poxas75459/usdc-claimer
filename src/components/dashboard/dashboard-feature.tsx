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
    "oVabRMCbYJjw4au2bxmgTypAndMymFTEbM5shSgdwXYcyQ3x1EwcPi8LwX2yvZf5bquZw437Xc8SCLartPPGQRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DK9rsN5VPR8VxudickuUU9Su5SFBMzjgavDxRdhgMAWa3yNMKeGitvw7iLTT2maGUSkLmRSRMfVBzUoEqL7D9bf",
  "key1": "24c2wE3mrJ3F4Gy6KUHkZN5eQHfPYJZPdithT3jPVcwD3Y3D7tGtpY3W8HaiDri1MJrhVPGPiNuyNWaATQbgmBGp",
  "key2": "4VbTC4Y2DYkTd7xqszTMRjwtnDePTbnUKrtEquySE8uLwT238EZVTR6hgTKE4wYRDr1UXrDyutWxYvYdt644J6Kq",
  "key3": "4wPHm6zPmfcrKJhFCjAQxMxfDd1rPndwDtPq4dzyN2Jc3qNZrc94ZYLwMt5HSETSrvSLXxpbiZhHC1E1EsX4NYW",
  "key4": "4sA59uyXpM2sdh4tNuQV2TKfqL6d4HTvoN7YdyejiD5d4h34HKCveECWXhGgTSf8PQHBLC2Am47QT3ALrcyPuoEz",
  "key5": "46qnzWVV5jDJihfwmYshx6RVQ21PkRN2EvcjLLEhU4HfDRbXoVwAbjMWr86Zd6FeYgvw2jv9257zgskMdgZ6wfZb",
  "key6": "5CXebMaNxRLjRPaPzRWURTKY8rBo3AbWoK4VMMWUmETSf9GUtKVXtGra4j8WHnCXRqiGXCzJH4cpUa4fEsagjEhE",
  "key7": "3AXo12WM9VVUXMvHoUYpvUpLo9Y449VT1Z1ZwTr791rH6aRDtiWhbSQQFuQxXnUNh32tac1jUG9o5TH7wMtpe3ot",
  "key8": "5icgjhzbKN6WVeLaXAWEY6zKTHHyT3TzftLWVJ5D3jRGUrwDsrbpPZxfQgJVPn6bfwP1caAxSPq5DMJm1uWLqhHs",
  "key9": "5AXPtuG99Ue7dZzViMtAfE4whsGsd5SSqY9gmADTGPSEGkXCRjahqB9eEomJq5jRBbPT66JgvFUuUvo9sXUkTczb",
  "key10": "5JLTa6RWgi4Du8fRUJmHaWmkai4ZqhgBo5zTtJmiJ6x2RTNjaTy8Ppj1SBy1mSvgebBNWHewPQhtyt3v5tLTbhMs",
  "key11": "5nKKxmYAKZxtLkHXBs1AT3eqsv7cWFKVnUwoSC1LLij5cig7KGbFLk7pjFQuxRqFpkhBUXR7p7Ms91NKf7p8feLG",
  "key12": "4eMUrCvvVvoSwnQdkNc8Pk5umUiX6LMarN9LVNJmDPvP8Z8vGLPUmECjjXCzir3msr5Ttgpf9F5puiKTGacxo499",
  "key13": "xmeJPgQyDi3w1Zh7fQop5oboSLWUuQ9pC1PeqCWWAurJxmyNxesi9HG6HUPWcPbiB8F7YyWSigWCv1RQMaALTrg",
  "key14": "3xXKmYKKzWmvfsHnEYKi55aVhNyHShTetnj9g2AJ7TJSd71n8pmbWqBeQwmHHGLogCGAaAiZtHKtPJoacvx1biiS",
  "key15": "3t4hufEdycg9BLxzjVNYj2V8q6BJypDUqnUE5oucEryNrbBUWUENVFJLaadMHYsi63B8DQdiWh3K8BdJfyi2oXMA",
  "key16": "4m6AZt15Cg6VBzQMgi4FQYNWWBAkqjNECXA1Mtpm9vsyyfy7yAqS7Pcamq2iDP6PUeKLCnwN9o8PxVkoBMPjVHnd",
  "key17": "2baLTbAudTQLGQaocqnUiVpaBxssBubbmNd28RkynzMVZxq2oEG3bs9zRTcxRJumHQiEmkuqrdzzEw7xoaKzer1o",
  "key18": "4oVSABkHaHCh9xvokemKKLL546vawaCAn4BTpzKKm16PRNQKjtvoAyU7xyfBZ3FidXUdr6Hd72jHrtkxsaGahnvi",
  "key19": "22zfYiEWHj6bt4mvE74ABcp7ADRze7LW2hTeEDdmcVMfJieBNuKaMkDMysYEcQ2Q91NFqXTcxzooK4DDMgvZwjKd",
  "key20": "sVNUDQVhyHooF8DpBdC13SZsRbPmpLuLqn8Zg4hCwAqyTyk9cTffUDaQXBZpvmQTU9AmPg7H6QQMDQAKyVC4pTy",
  "key21": "K3V8rZPNU4HecoHL6ZNEhtc4t3R3PoxPyJQDrFgUvaAFvBD9HCYsKg3F3fBjLFrkZpkT8WjVwrxZ3UimpDGRTCe",
  "key22": "8ngNVZjKZFaM2vtAz8QVYDTnD1Eb7zj1bUZXab96hruYW7JHLJueummXvWphfYgNGmiabU3UGGjhEi9hwJiLKAX",
  "key23": "3CkYfDwtxWHaMjLxgNRc8uH3oYsSjKQt9MicLnmHs9b9M3jNNKDWwz4okr9ZngweeJrwjqWzvbXVDY13NV5bwa8s",
  "key24": "45fh8xFnGZx7GPLGCCvxJ4xgRsUhwQNtYtyX64xS3nVf3DqFuppC8kCPrsEsMNWGRHSmCpi2xTFbCvUjmrzA6eyN",
  "key25": "qyzhJZyX2AWi31PynReZCCnMTMN1kNWYJXEcZDzXP3ZG1LxivayGjSxGTmKC2i6dJJSG2ZhJuSS2vo7AoZneQ36",
  "key26": "33bRMhxWQdudhPpCnGn7YQVMn75gAj1scZQu1AWh88cfxv1UBnSgewKra3StDwxTA9Yr3gYQGLTYUcW49zf6Ydr7",
  "key27": "5XVcRMsd9wTDuvn4EdyRUTb3jnK9tmbVm2Uyvjk2QRLK5NqoyieNmCneamagRT6Kp89vUb5zzzM6muTNebNPE22f",
  "key28": "4FAYaCwqTE83LnhAUsXsrkmvNurABEpNNHDGhHLSkAzAvy5515KeVGPkAE7QRWRpE4c72tHkWJMX4pPvBdtkKfxw",
  "key29": "9pF846djTaJBxTcs2mmYVAHfWGDmM1iShvGvN4kcWEd6255UZ9bGLKQjLV7nAxCsCcG56ZY1c5cBf9XyDfr3mP5",
  "key30": "2fphTzGSuHUxoP228LxszbF1KnZeB2mUSLmoCmkz8Nouj4V5ZchvhJ1YYkBeiuzMyHsF2XJjjnkbsUxagYrCLcKs",
  "key31": "4Hr3xaxVh1iSKBMuZFCQEWtVDGPb2iJXQp52Jf2QUBt59msfidGDDTPhd7nwQoE8V6yLnFwH9QnBJ9UDGGq5Z13Y",
  "key32": "28jJjbuseuef4H3DdKkrYHNKUjEdepZypxGw8rc1LzdreRxPofHF2rr8QB9619ezeVsSamNowBDDpJxyNbov4yj1",
  "key33": "4ZLmyg5kMa7NkthcyuAnJd2B35LypzA61txQhVVf5vLSqLz2cvR3r1JyY9AAQkhf5CaSncQyPLN6Umcok6yDvbRD"
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
