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
    "2bPEAHn5dbqfRi7aiuAWFQRWG5zFY1WwMfDDMMnNMAuJoCHcm4Jf5F97PbWxR4QX6kYV2SaHy7CYPbdDtpGtCLrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3afoSdonyoRm6JbZoHSvH8R56BG6dMC9H3yom6WaMbm6LVJ9wzct14sCjVULHQZoVZPFPmAJsiaEsgF6YVUgtYmo",
  "key1": "58bMHNZQf8VPvKwJBsq1kmWqV7MxAfeBnQn2S5WFf5WvF8zJYH6oNA7vGxnvx7M5UdG7mPyo2vHuzCNeTAAVZVHw",
  "key2": "vsBFYyzUYLGdWqKFuH7jk9NT4c2xm1UGRAu6ULVKaquC3u8KFahzTBU1wwA1MPn6ZoUjyZSsPohH8UmQePsci1Q",
  "key3": "LvaGsseLLiTKrSEiTsz3nAdJxGM6qYu4mxmwfvTkdL5AaggbdDewFoMMz5mnZExFJybnxRt9zW1DHKp7BcA5guR",
  "key4": "3k59bgXZepTDDJdQgezm9YPkWNae4fGrmEH41XjiV2EhjwooFx8FgG8qracYegphV7PJ5GNhDBUqNrxuMywfx62g",
  "key5": "2ftj48ZsbcPvX5SXjJmz14eTFPRi1DGxv6RTHXgWNTsvxi9ypFqxeHMjHH1FMQZrSzceVo7g71aimQDs6PmNzRBG",
  "key6": "55MCbHFcYBqSeRA9QkbVuCpqt5wrgVxgvEkPZBaFenr6cdMraHYE8CQ8WK9eLkrFLLABAjSaSVY8SrCPDaKUkYaa",
  "key7": "5ovBhBnFDe5rBXDkiiaYUPeVcanhm6kXyNLcFLm3uD7dRKdXttfJ84WwiBsKyYo35HYMNTpRWvxhEuypRTpgEYRq",
  "key8": "3W6qE2vvpM8WeormhEQMh5KRP9Vafoe99htzpeyuUKPzDop5amTLkUmVnU9KNHeYT1kVzVJravNCsHKvEfUJJfY",
  "key9": "sBADGuuykCb9wk669yg68vgc8NY54utqnSz6Pg6LkGe28oBtGK4BUoPdbF66PJhP8KpPbpjiBTfRQhrYd4WcS1C",
  "key10": "wt6Z6HZnphRs2RE2qYgiwkpeXTLg7FeU42ndVTBJUNSSrqKXMXi1wqyYUGf985ZaKZNQG8dTsqEapNT2571J4B9",
  "key11": "43pwADisvrjHzFSHWMaLAqC3Zw198dWM89518xpSet7r6hgJRquk8ghBEVMEux4VaaD8fbBxEiMjiEjUmaEmcWnW",
  "key12": "56hijhzyukT5J9rkx3CDhEUixPoRStynNkpmdhrKPThmZPkkvPM6RxK4YE2YbRffbhFhvCcQ317zCGsfj19ic6p3",
  "key13": "3eNc6z4CZNrpZ6zE86ERArhRGi4SmBkefisRx9i4jDXSRSymfNKTRXWan45RAfVKsKDQKFHJjxMCQHFHYvjAjdn8",
  "key14": "2dorAnPpT9a6FQmApG544SCFLhWMJyqjdiYe2JoBdZLLi6Cynpcyw8PqoNs6E2Fpnn5GDMWxg7bzYNZcZU5d3seY",
  "key15": "2umme1e5ByevKZacfF7JhNKiMvduCEa3QMJoeQ2nvQQEqta9favFx9foQCv96Chfocypg4NNwhtabybYpzxqXm6T",
  "key16": "45KFdqUqoFGKTdJYJ6wPxv78ftQKD1ExAGUf2YonZUJ6WQ4o3SvpDH5nxAhXqHNqmxDGkw3RYLpzNnpf9SPi8xe6",
  "key17": "5tkhp3NCNvrneUXpEbX4YbMHnuZy5eVVcvHVryPcpfSZJBvzphtN9UFxtjrg55zgqeFFJwaNHGxpfAcpbfnc335c",
  "key18": "5quTzM827dJCa3V4DNZF1sBLqXZSTWKSzoJft5s7JUnPA17geWL561dXMvUFYbXixDyqidsQkYRCySocdVviMxTd",
  "key19": "y7t93ssAQtUfkaT1nemnLPe3qkCJQuWXfo9eFzFEWvYEhBzc5byUFAvwTPAy44YHZZugbxqAY2FYYTAJAAQPdzM",
  "key20": "4JJNpYrZhY9cPCh9VJW8ddNZR98DtoP3cbp6DB6HN6Z5z5GqUjJuZqYvTkHvepk7eHdYDXUT2h1nKAXuWGaVxYJ3",
  "key21": "2BoUXn9q1apt6NFB69UPgRKMrhEJeYkMNfY4ZLcDs6Y8d4AdeEgcxaFu6AyMiWFEEaHrVm31t8hquzWoD5FYd168",
  "key22": "3y9iBGiicY7WbVDDKcZsqweQB6oM3fdut6QRrHiwgyAa6RLyBJBxnRPtYD6CAjkjVXiTpYDVK9xR9ZddH7X961Uh",
  "key23": "jzPbFwkyepeqqfp2PC9dMnu1zVs2Af7DNj8jsvNLw8RKxZufNyHJw2XFvqoQf84VdD8QZBqMaccYX7swSTvv9Q3",
  "key24": "4FFuddQRsXDM1AHdWKpMbmKevbh4P4uURjr6qpWx5LrzxpKHtZ3Jz2vHXXZzUk8EZHUANrrynJbF3DTbpPfmqH6K"
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
