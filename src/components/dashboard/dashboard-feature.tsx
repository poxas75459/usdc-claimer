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
    "35hUheZDXxHZvuBDCXEksY8iUU7pDQArmj5XjbrFiVzu8X2rcZ7vjcyiPK4KzdEGz6xbGXpfUZ97PVVyVCpvCcgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26VWXge5EeVDp8UgxHUMhuedrKgVuC5Ls4cqBJhLheLE6d5wJrX6qkUj12HcdJWXC87zRzgTm9GoHJhvXsPfGpQX",
  "key1": "jhNKx3X4PqtXz8vUXTtCdcT6ZzqwPyyxLdKADjLLdWfUyXw9q8VV9HKDLNhHyHgAQhrUp1H5PQZNMgJMGYmjAo6",
  "key2": "5LT9METsqJ5Cu9RZA6PiV8BvLfdxg5Vk8pMqnXS1d66LDcgJQfURLnav2YphjH1V638bPGwGbs7Zk6Vt961ZMknf",
  "key3": "65yHVXFAYMVMkj32ruZeitcbj5XmnPkvikc3RgQxqyTke4FnKmKLwWwmFKTj5a9Di5qm5rFKN6f2WzUJ1hY7Bda1",
  "key4": "49fXH5fbHYVaUBoCrVFTm4roFtFLXV54d8FkfC77YjB3ZLezyBkzmfAERvaYaZz77pd21Wyf44PwBYfeirtb2CrX",
  "key5": "25n3L7mqct3TmY9i3C1ByRB7eJ577jGgVMeTi1fKQsmvkyijo8rEPcJcECEPrPjg6kqdwCQ9PcJK8TRnZNXSYVxE",
  "key6": "Ka1oiKw7wc5zcbhsuhvnzsqMxTiwwuWHdsgdUdgsWRSAnWmn9wjkQH9vbVbp4eBQ8zoYUbE9ScZJ1YdtbS7Tw8S",
  "key7": "3DjLWgh82LRY51LXiyMtKqyCV5bRrEDQZi8NU74BCLNdemimqNpMwx8KJVRbinHVKrJwPkbQfR8VQTY4LUVz7Q6e",
  "key8": "2LxMKpydKzPNqGWGGYNHcL7PoAgBZxW8LmR9Y4qdviAD3Jnwo5ZgXu4ytYGi6QaJKU7tq2rW3rebUwStf87bXJ3w",
  "key9": "4A26ZvDsTqj6nVvVS5UyVDgdDNR2fS3JgESp61B6ZUJmyuAeiUbNNETnEMYStwrCyAa2GXcxDP6fft86poX198H3",
  "key10": "4kB5HXpiybTwQqp51rZ9X2QeeqohvTTMXHswCBJ1zyK8JYpNzEiuMTXHPQdEkP6VCkFNrRqEQFyTaZPkdGh9E5bd",
  "key11": "2L9eZGKAu9T88g3357NBMDgFBZDvSiQWKxc3bwT5JtD3A9HD5u5iXvXCihvSsVuTz3FJGvkGKXbbS6JpainpRoDZ",
  "key12": "4kxDNqSJTSucvzhk2qzFK3b4aeGjMEm7KqPpYpSMKikUmBiG34c9QZApkm3sH7DZj8X3UcL5jvxDdTxyK4NBUfPY",
  "key13": "4HLonan5udCe8a8MCMYnauze3LPsac3hRsXU4YZkP58YziTJqmiqQk8YXAZj1gkD55zC3qpe4DpMkDGv7tDnjqZx",
  "key14": "21JKAiobDdjEPf5FJ21irJ8AVV9h1rYbZUv3qMACQro6TMdD6REqJRVpC3i8YoCHB5Ei4pugyCce2a5CQMbW3T7S",
  "key15": "26bVGTUK58bQFvsBxJacYDrQTyjiBnCaL6nLiguy7Zet6aDuac7wx38dyxGktnL4zA5AymXhq6N9CtETncWc6z3Y",
  "key16": "3Zr72GaEgPABWrVBP4tjF7LfsHZ7LracRghjZ6FKrb9MvMbxaGsShZcAEUoScRKKyL7Jmk2i8swBS2LsmPERLXGS",
  "key17": "2PUxNGq44rgRU9rDzYLTR5gqxY6tiQCKyt3B2cBxbwy4adsMNk5WpzQXoLd7tay2f7oG2Vy8uuiXeVBJDxm993Jw",
  "key18": "2kxf6ihifZmvuhwnsj1g8XcHEMF2bZ2QvdoUPb9aogZBLgXLUKCuME1GyDrbHWYSPP2wYDnY2uNhN1BLkFe2B4XX",
  "key19": "7vfUbjDp7sCMATnqGkkYKoy9tB7FuGhgAxrdmjEoCTvGUWvnNGu9LMmxdFgbG1c9juEZaToNbrCey9RGvmDuGzZ",
  "key20": "5HrnDD2sSYpgngKSTVWRt7vCvQjX4r6UFJVm5GCinkgBDsxTm5g9GAuVMaJswrThhcYDYGXhWnrXTh3UdSG78GAc",
  "key21": "2kCAuZBVN2sjpAVCWfKFqwzJDENiyEj3jvdqbHsSNF83k8vBsGcXSYYVpaqZms7KP6rBxpscQTRqFVQTx4GG38JN",
  "key22": "SpVkCWaCYnH25eDcqUuUizJuzayizm9vYf3fpWFMTzmRxZQkV5JPDiMb82Eq4E2KK2Vv68UFwkEsYYLpARi13kQ",
  "key23": "3osrDkuaz6bCV5NeMm5ErSLXKycbgXNyrKUhK6W2UGjEMqxfbDeRjssj6bvsJGu4hHHxMzFYNjqchoN5vsexSVwU",
  "key24": "2SDJhiYYDnm9GYQTwZ6TbJXCMDuLujisZgfuSqhwQWgkm5xcAe3svtpZGbWHyCYTTxcGqXT2P7dTuiAXsyA9yXvN",
  "key25": "4zNRfrSuZ49idb93v7Zyhs5TvceaKu3fJDrCWNTTrS8Vekj9yiVbXpzz2LvdVBWvETzZmJy9ipJcbGoYUmx8DN6N",
  "key26": "4SWwX7ms8kDfXVBA7BpCeE1aNay6ebKbMWJ2fbTbWZF15cCU3R7AEPcD2kqun13cqgWtiuMVWCG79m6rrF7V8KNs",
  "key27": "fZ3W1wAuPRpmtjGWGFThf9Hyo38up2uLQWmKGuc3m2NaDtUF214aP7tHvNNTyD9E4gNEHPULZwiBwmZjAdzkQYi",
  "key28": "vunHtKefdvEagj2Jt7ftBMShVmLPfFmGXLVemZwT8N5tny2HDH3PrFD7UBufsvGF5bW3Vw9pXkULxicX39TVuE8",
  "key29": "4TGMyezWjrc2EPMnYAfmiwcaS59JgRC7KnqdrGRz5ZHU8vTZ82GQ8yYFD6pYZZ8mupp8VjSUg6yrmewBTE7napnK"
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
