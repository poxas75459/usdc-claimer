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
    "64oEnVn9cRiNk5EJQtfguFNPK5TPg5iGnijkSAfmLX5RxqfNNY5YarraNrXiVVk41N7VKGAMp1VrixBwNsnCjFfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PaEmg6P8ZZWM3zJFT1jD78dncb5cXEJ3HX7n8GKu273PMWtRjXVvu7SZZgKKrpxJ5yXeHLgCLTq81ZZT4FJhBfR",
  "key1": "2nZpJF1ozV2yhe4NBsVfmQMAwz6TUGZYc8rmYP36MKSDRfCD7eo1QXGtPS5DEUWnTbvZbDs51m7KEnS2vXx1kc3h",
  "key2": "5AhnggDLq5JAtGZ8anMBGdUmFN61xFAV6VodqpxXzpZkPEQ88b2buwrSCx77zvMmBrt2kZidUpKWu3JEtS5qVUdG",
  "key3": "3wJvxZHGVtKcywqmxLDWzPg4LwimX9zPZRxUEztLs6cvdDqGuomhutCYiEZUFAeQsnWuuksrpdbvyJsqFnUoANod",
  "key4": "vqL33K8DyKDHd64C1NLW8ymcMPt9dzwPganmTTKYcTYfeggCd8G8gKX418NYZjnFq4zKxrvDpakjYTc1mUC3zex",
  "key5": "5zVrMwnWtcYL9opbtXzKTLTWe4VV3TTxHJbXLdTYzXCadfcCcN2GrMkVayxM3fjULEw64gzQU4sxqS1WG41b14Vn",
  "key6": "46fKoH8bb5rq9nowNDUbjNoqivLEP2AsHXVywUA4VfKWeo4vgHcFGn6QvpYGKZoDJ2pnsyzKu92jk15JAYNnUDfB",
  "key7": "5WikNyef18KWf8ssiX2Tcram3S5WZBzo4QQDJnMw2nbhXfYxgjuXFFWrBRgbHr5q6o4ytLpQDA7tDnSxrK75v7tT",
  "key8": "3JdU44t8zi5sCJouGUAZyoouXjELcp47yNoNNkaqWzeyTkXLBggGvTawTrg8evPsvCAcpE1dixq4swDpWtr7tAbd",
  "key9": "41KR76kyuzgpzk3KQWguJms4pZEoiSRCiuo7MFDvJuZ9gagzkToqzZms2NPjQBYLabZpjjW98qwskjYzSiNcLVmW",
  "key10": "2WcrfAwNFvcqwDGhau16jka5NH38ciR1y5zAe4xuKkwULnnH1GCcAhF9somx266wWK7Z2S69gtWt5Asg7eG2qkdS",
  "key11": "3PbRJggHxrxAxmZownfuTdVrdQ63qzhMVzB9VjwCoDd8MNRT7m3gTojkrZwkqY5X4RWfof1n7hrsr5MH8Bsqsk4W",
  "key12": "27KtPEky1ZJSfiZZaFsgvYWJyBDR2gjrcF6RWHW9DUnojxkXv13f9xdLTu1v5q1kuBtpgYSPmgw2czvno9MzTKcK",
  "key13": "5zwsyVBw15bBm7NzRKW8vxJEFf5gg1qUKa3kpZ4tPZA8eKkAs8vFL3GtDQ1rvSU9SULVYrV8VQvma8gEHSfzTqeq",
  "key14": "5fBCxmDFPEGjoMitP7DfAiSskxDvSRoANYRmmLj2tpGRqe4duJdAZyeUKSJgE72bPpu1wP9FQenZs7jT1if12NVz",
  "key15": "2NkfrS1zXRJimcYBHRwpMrJBWMT26kHvvF9rdLSy26W9ZPrGetNpLARGzi6jsA8VM6whBS42R3TRxf6hDrEQScY6",
  "key16": "4E7fHXnnYsbYa8LNQJBDfxGUv3Vow77cKdjRkNLedBRQwraYkaeiHudiJe956ZdUfPASCNYzDc8YGgFeAiG8wcpM",
  "key17": "3CP16FgBxYehVM2ji6Pgx9ZcBD4DYgtk7NDNVx77bJyDKUPzB2PuTyZAom8NHHmszsopr744V6BeJ9Anbenm3aEr",
  "key18": "2kmxSRs4q73aSJ73WGXhf83Lpixm5P2tWLKdR4xAt6ofcsamfDgud2ASAketTgPgUv2ygceog7soEn4tPf7PH23m",
  "key19": "2xUnrADs1kSYjk1WLXsDnddLGSo9EkkFTocDJUT7E8wDHnRwpi7Z3s6BYciKCVwmZ7XdRwYXT6mCrtvPoKfLYgaW",
  "key20": "5oHwUQAfb4rWd27jzZTmfTGSyKWfADVnvJNcJQ2aDmsXPQFF3y8K5oxaMxFSq9iEBJPJVYLDDPpyCMPUdWDe317k",
  "key21": "3hb2NZAgWHRt6NxB6Qxvddrou6tqdcgu1bk4ABgvxVfFUp35vRDsP1yeztd9vw1JnhpTRQXAzfvujwn3NrEBfZCS",
  "key22": "5twKXBSR2UpbwEYi8sqVNUUoCebk2MnzYN6Lvwfvzm8E9DWpUjV1eRgbVLuqyrJeymhXDsfZwLjFccTLEovigXMd",
  "key23": "2JM4xCtUzK2Yoj47CdhRTb1cizLN3wNgN9HBmFauJuvxmikQXzjVM2FUf18jEd8ySXRCJpwC8atR2s8MDYNAiXbs",
  "key24": "56rNVqRiZ7ShiWt5GQXezbjh4tdoQbZdYqvJHjzT9ddmxhNpvMJjVHKr22iG8YT3UkaHUXKyxcWJ7gSSAmtwb6su",
  "key25": "WeMNHoeXqUUF5AdLgxogDvLzmpxenLqgUevKphk21a6ETDd2LQri7NGBdPEkgeEHy3LPCj6uC2Nvo129Ncv2WFC",
  "key26": "4JNJ314cbKVsdDs3vCdD5HzH6eM1s4sG8K1c33pguwsT1sJQRrBeSfP8DLNxxQzHf8VDXt3u7EZZ1uFt1N2syvJ9",
  "key27": "2dKx9xVLMfK4o1L52A5mJQuK1HGomXgfJq3jxWssirVFwgsQXFVkPfXQ83AJzNTGjdWTEmhsjMZVb51EX3AQppvE",
  "key28": "4fttdkWkGdUFnYa4ZnBjybuqd7QFKFcQK3tgipBJmHnnYJGpfZmSxNiZSkLmgL5a4iQeQnr8KGWEu98aaFYMRPb6"
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
