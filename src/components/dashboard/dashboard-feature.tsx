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
    "2T5CoLjHFFynMwRMkv2Cnk58Du6ASam6AnKFHwVQw9SDX7LYMcfrzPWfFV8xzEAnXUrCBj1RBHvkmRPxv6vgRV4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uGARntT6q66ZnbyToUhjHFvU6oAVa47AQKhaykJt6iSVoGunuH7oXnjbYcyLkuhUUgcNewYTFz7JAeDDuRJpCa4",
  "key1": "5cj71te2QiSmHRxEPWxkMEPMu2sDzJakiug2Y34zPqiPngpvZ36Suskv6rKZWZLJWTC2AzFPDWrTun4wDy1qFvr",
  "key2": "5UrmhGVYkGDDW8xoQbaza13eDhmnmzyS5J8T9by75PwCMZfWfkdcHU4YJj7koAwveq4YweXhCa9aMk6ibz9jkU7g",
  "key3": "66k3eaGqMcL8r4axdMzGiNpR5YdrozrFh3ne7gzamrYiYXwE2T8mnxba8b4jPD9Ai85Z6gTdsjHxL5ZdUyREnF4M",
  "key4": "2H71cn5DiHPb2rQczYLXbyZ69hYgNf2U3pYuu38ppHBijF4pkuHHejFEWuiZxts6meqf9kwiwvSwA1FRDu9EmSEf",
  "key5": "4ocCQA5F9WgvpWmEhLug9STWmqgggyi1tpMCMc6bwetWNmSv9LZhuTk4C1usdCLZZBacLvvWxqYT7o4eT2U6xrx6",
  "key6": "667PD4tveRJz2gENtfyQu6FZ6CMQvhKQ38FkJBGUH4oNbmUkyNGAVgtZdJkEMSxCQT435UR5PuenotnVhVQ9oaWV",
  "key7": "5euA2BoXX5ZeEj4jxGwtPYdLbdVuPorcXfcUYmv1CjrGgHbNZtVwdjCEKUHUq6W1PSfEaJJuV99HazW1zVNm9z7W",
  "key8": "5wJZTQhTKzk8u6gTyXgHCXWMrAqS4f9vibmpFVYrFqyWDAJu7UyvctWQjPJPMqBp3UpGUXgiDBtR7XeVjQLMuDgG",
  "key9": "3arNPUvE8HBH7tj13XDPziBdeqeqgQc2oRw9ACUkJUWaNszhaRGhqicdbK7X9dZQcCFwwei49EC9NBB6cSQze2Bu",
  "key10": "4cb4rYKQa2XzU7HD21eX3wyo8Pt6FaVwSyjtXSJFctQvZYaTF4HMPvf3pDncoUZu9GFgXYP1DZ3M1cqV3iYffrTT",
  "key11": "2nf6TuX8117V8uzoSKZDHexqqByrzhPC53J8HbVRAhWsTiQBGc7L8bsAVAnqXjaJ6oVqAbfxdZyWFUTvLFEzSmro",
  "key12": "5fEzfcznAa7ZWczc8ZEuPs911RcKZU5FTvxbxqaTyJRBv87jWUvxpxuLUSh1LKjyWy9SkjEUnJ4kHtniRJs6sbXK",
  "key13": "3xCagCV4WSRdvDLyyuUuTpNap28TcMdXoq66mr11QjHEby7Lso4sYyJHaPNoHZipup2Gnom3Bc6ehdj2ES9maTtN",
  "key14": "36nZBxdvSYBRZQg1NkAYS5YXEHBXpzJxNnyBsKS6pddkQxjYfU4bSarZuRus8JqVoZoBDqx1WZVAsgSoTh2rjmJK",
  "key15": "5HAMjxTfVVJtibi5hQnrTmnFpVmFbjJFKUrSPcWe8ewNZpRQ1sEgHPvmAq7opnVJiS52Cd1bJ19x1BMK4mpHZkmi",
  "key16": "zefwJaBBXWHr2BLngAGrwhMC5bxjk1tcDbfzbvwTuhFGYYq1B5GXXi5Qx5FCEntZsnL4VY6Aypg55wEJ8tR6koP",
  "key17": "23rTW4AvJx99xJAa9mMS7xgnStmGZKj2mRPDCFLPmfiXhVRWsBTbNEfVKLAPo8tQjncNZfr4QbR4AM2FBbGctrZz",
  "key18": "4mXRybrd5YCapDnYfuPARm7TMsdezcZs9LZRGhj7YDPCQQPqX3rfWnSFuTMSZCznYkBSK2vfmXWVaJP4JQfDbmYW",
  "key19": "3ujQUhVVRRk6au2hr4maHPsna2W8dHnvCWoYGCqbz65KMdRdPgKYHYVcXF5pYvU1BxXqgn519hC3gGScDV3kNvk5",
  "key20": "jJdrwavhwSJc6SNDTizcTFqPLt1RMBQTaHw7QJWYPadbSz49dywXfZvt5Jo165vH5i76z1hiKzwJKw6KYCN9RLS",
  "key21": "4oxNGor5xGpdts1Abvy3Kf8DuLbWnZiwFb5gzVipEEy7uRHdPy2fGakde71NCo9r6JjvVfF6eaJPUY8SNMGz4CrU",
  "key22": "4MJgHBo27YLLHxoB3Z5WWSnHsCyTFwMseZKeumR3495RHG2rkCKmzECdFW53tCLDdMX2jEfcxaopTC4neV5hqZpf",
  "key23": "3XYvDXx4Td7qugaXN9Np5YHDDMNEDRoxXhS6wGCyeHVnmEp5CzUg51EiBT4hgt4YM9p1QhzKh3n22QqLUyMKMkHr",
  "key24": "5j2sG89hxHQAQRYGMAL7YjnDR5B2diRXxd8qUSwMp682nh8ZExxtUp3SAkqBFnGzqJW1Zqx3nt6UzBmssVdryShU",
  "key25": "2XJFmuHUgsumY6fentNx5HTdHLw6eJS2YdkPsfvbvUrDr8HWz7m2eunqVEnxj46YR9rH2Nw24Dn1gCeJkkynVFN7",
  "key26": "owg5pZWqAx2vWfYkzb9Yov9tNAJVTLZCHkGtL1a6QY2wRkJhzN4BjLsnYF6RNsGj9zJ6JYzZPKQeAjmwTTi2Nhh",
  "key27": "2rkH9daXVMR3FVrafXvwAT54uZts5ZNN5yuXvSuNQ1kfzFUn7EhQ7cjyLyH5KiW2WyQ1WqoFQ3meeqqMVjFVAGtP",
  "key28": "pdtxbANFpxKBL5PFzSuU8yNzg3uTyWjJhue7kih1PxH9snFHZv8vrpqS54HZKFLm7jB1Un855AvF38fV2mqtRiM",
  "key29": "5igS5bVbz2akMNd2ruXHeKEarzXm3DS7xWwkzpqehMFY9WyuxGrcLPBrzwmNbRQ6JLxoBYLXL7dD4msLupAGk73B",
  "key30": "BG3zmjqdQYUDQebP6rZdhonM3pC5QKvBn8RnmTS5SkZvEp5iSPqD71ZrbxwQaVZy5CKA8qYntUfbnWy7ohb1f8q",
  "key31": "2JN892iv3CNbRaj4LwM67w95HQEdD5E7j7Apcwom4Wo5Wuc7UShPYKkN91pecUDEh9rhuL6x9zYv5niZDWYwQ1vf",
  "key32": "dJQn35ojGFdmANiBkvRmqDfDi19VAb71PFkQ1BGLJaYocS43UnNU2CPLYE2F7UnqTLo8b3MhVx9t6LdDiVPy44p",
  "key33": "SErR3BMVrUzqD6g4vsqnYJaky4M32mofuFLMDojsxaxPd8RcLA8WXAxCe2zKcgokGt4RPe1yS7xWAZ2fiALc2Cr",
  "key34": "4o3omghymv9nr5sbARGrWFzYECbni3BsWF1uwYTKTgxaFZUta4BUmc88SFp8vkpGp3FJyCJy5kdsqN6H8BXcSsd",
  "key35": "2G5hWWSUyhrZjXDneLHFVjnN3seRSNZX3fviYkJP5efw3Qm5xJfjKvRDWH2tyTCcAEE3fAv5xcC4CFUAqbiSJmn1",
  "key36": "4DhzJn43BJL51thvY9kEw4x8nNYyFGhXqg6tof5MK1wdsoKeUEqra7VmLGS1AopM8HfzGZXdqiNgdvSJhe2M3HVu"
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
