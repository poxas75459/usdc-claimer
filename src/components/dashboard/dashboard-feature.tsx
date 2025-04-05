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
    "3WKe1GHUYYTMm87DbXbvTp6P4vEDvih4UiC4dbrxGhpvmSxFAtVcmovqAEghavxJEfGFknQSY9RNK9kpyRjda2Zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bQPFNn6zvEu5o8xZRHqSqCQXPzqVSK6NehGRXZtmqBXZuMNDcc1GS2ywbBtjZeZ8aCadKadhEnuvDcLpnT7sNB3",
  "key1": "5gftSFSMPvE8dVfQ4RhFrs1AB8XQFCxiYEocPtoCYmnn9qTDAqS4im4VeWNpftJKEjK5SQeRF1T9sKARFUTSp2VP",
  "key2": "5Ait7erYAb6YNPHBzt9o89j1mecd8Bih3vdNubVkboUoNVB89k9FjSTMVs1LdL32GM7xyZQFUhudq8kd4v8hagWg",
  "key3": "26EVMRPk5auooCQqLP37CZe42oUYdzronLAogtuNEFsqNtyyDLxbJ8Xnbg6QhAorynCcwjUAu4vgFaKFYSTLZMnt",
  "key4": "3DMAVoHCQKje55SqDySdakJUh1xubLMyGJnbLmG6AQRXXp3rS9ipXKbSynao4cLALZHfEWFcYpVwZKXEyGqUiw3k",
  "key5": "2ceawTZHRYBCuy2BCZAMJC1v1zyqw4EY8EAypQmHumWqsNvQsrTmjBt2NYjKQz1et2TM6rWgRMqiYK3KGAVHCHr4",
  "key6": "2m8jCXY3jDGuKCtrn4aG7VF7horgdJtLQj2oMUvoNerj4azQ7xJpGemHsmNUa5JgLKBUWoMXyRJ235R23HiUwj92",
  "key7": "4LyEAKp96hn5qPiT5KpjxRi2zNwbx9Fwmt2AkdNrs2G4V8W3otMLcF5VKnyngcv3FGFUakJo2sn76YvfjTsr5zie",
  "key8": "2i9ZtG5KYCABrPXmZJnsz787gRfWcpvxBGdsATCUL9yJd3dziK14xpDkxfio6AWUUcAQ71muct8cQUNgnjugSeMN",
  "key9": "24hPUhPAe5jdEsZS4RkRJUfhXVgEMeMngsSgj1Peb8W2BPKTWojiYsSPZA9PWK8hEhKykSBkcQT3eYsUb91JGdA1",
  "key10": "4CAa87Q7XAaWciSmBbbDx5Gty511sDVHmA2uCk7xQXmJKCL4Z6kPm2pXiJs4YkAZg7iTS7U856fjMCcfdM6KX9A4",
  "key11": "5NRG3eto7L3xYGMLKUz4gfrjdJjQhCFNsdkzinBqrX2adXGF61a4DDq8JbtUH4qEAu3TrPggMXRjXUhm7UVnLteY",
  "key12": "9zS9KD667S1fR3JqPUvr3Ypx1zNQ3gX66KtkVKEN86EnmjSfREyc2LzW1pNKYGoJwnXyFZMrqxFZmohhLCZLDxj",
  "key13": "59Rf5bdZ2ABL9G6eQ2y8omRpxRRbBymvPeL1fdouwb4HsfxSMgbCgGVKVDjDViJLKSyySGnYo9o8S2qwCEJPW3fA",
  "key14": "55WifX1EiptFiPD1fHaihDhQmSifVCFUfYFHmdjbJt13bsnjSu5ximzS5QMu1TRQgrQbic2R3PA8JaKc7Fxux5Dk",
  "key15": "3LNoYB142pHqYwwkk7qGP1qdpx6iV6AN1NTe4g6TYYXZHjfQSeMnMCdzudNHVRAftdwkCZ64jyPnHsuYZBYASRUR",
  "key16": "rQMr6J1u8L8xDrF2H3TmWNnhmUXp5C1dQPpX9qJ7ZGXDkGciocNE6wJw8ZdfQv7dnTCxf6k83YbdRbnW9VxjWhi",
  "key17": "2UGNKnBgR5SavD2uRQQmfZMkjP4etyy4RiRLAtB4rBd5KP9kMuRH2LFSW4Z6dh981jKPjh4kfZuDSviqkVaVNwnb",
  "key18": "3z7tLRoCC9D6cJKns1pnQ5zvDsp953nHASJfrCGf9sgqZUBNZm5XeqAJ3EmJMirwDi9V89TB3W6CmbyjWSTvpdRz",
  "key19": "3q8q7y6g6URRXjKJeFGMBeF2jhF4jECzB2EScyB1Fv8UixA34dqE75WQm5hDqh1f3xHbAHWP5XK1Vy5N6wT3upRw",
  "key20": "dn4w1XQT73bA4Zgf9ehm8hDKk6WxLAXxF3hXm6M3E6dXzjyt2KqnAWvG8HKL3et77LZgdPGhKgqEhgzUePbWVPJ",
  "key21": "ynwLYviyA3AQuTFgJfcrYpEYMHYz4j22wxLN2NTc9BChQJp67hdwFsPZ9nqbVMUhBUCRWbAxpZayEPG2u6AUCzC",
  "key22": "2XTCCAGjFh7mcgokSZGSVAG27UUERQ6wrH1q2tL6sFxCTRcqQDk5iaNcQwJjSeFvcmSaNRnZ2Ejt3kXqisFJKueU",
  "key23": "2nG5KrorYWRpjJbs3py9KrYu7JnFH8n9kDjGUQ6oXYdae8Qa1WVCyThDwqYoSG4ebdqqW5FymGRYzw2xDK6oMZiR",
  "key24": "3e3mCfef8k95XS3zZXJy8eAwX37kNHNRmLXoTnwEdL895N3hyk3qAnNrNv28wthXuV8XjTPxVLhbdjuGsEquVXzS",
  "key25": "3HZfCmmYJcz7C5vPyPErwEHqK7zrjWuC3CFDqopNgskZQUHSZDtQf5P4dTVbfsTw7Qv3zPRvhp47SoGFUYghmvpF",
  "key26": "5rAcepDdzFGTtnNUWYTocVyN8tRRFSsqUDch93x7KqNxHT9w5BA2W6TrQZtBLWeZdzTr6wc45hw9RmPA4dGYiYeA",
  "key27": "4Jc88mj6CoBPyutM6XBrCRRp3AGV4zdB8rch5Cki7uvHZJvmdzQ5Eb8Du5wMTGJx6VqZ7dPzL8rcVWXK6wvxDHFX",
  "key28": "4mka9gE5BAB7BpgNKt79G15jfryEyJVbBJbWGzBo5uiaubTcuLmZ7nzn44tJE4cMKnLJSNgk1ZvcJkrmk37sYE5h",
  "key29": "23LdpGyUdSp13AtRdfM5an6QAnJeSyD1ah55qJDPQht1xBAEhtDQ9UnvBUdPPdm69rvEgYajcFBXnBHzE2fnF9QY",
  "key30": "3kJRWaPWuFnTSX2m59xMwbvuuTqhJNGePU4Hbw1RNWna7HEtJQjZJYJsxUyDxzQqdMQVUZeL7KXeURnkGvAm8zBp"
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
