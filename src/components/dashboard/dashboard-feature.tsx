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
    "58Ftgs1HdgHEu3whvt5JqwMUSpqThAjeJyKvqs6xJPTkTgxgMbYp6smGtCAZzbU1H9fzK6JiM62e3ZUJTtVrY8hZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NAo2afsjWg51kkyusNyn75jzBC3jZ9SEcNkJfCm9J1geb7Q55RzDCfYWNiXLFuW31dcddgPKArSsVSrfkvmy22e",
  "key1": "2tiecFw5zhA947uxk5wHGYobkm5JDSxkX7t3Zy57P6jFv38SjnEDDBhsMQc7ee634pNoKFqVv8hC1oZMm9si79bs",
  "key2": "5SCiknWhVT3adeWi5ivuh72CMG1YE44Q2fng7x2FeN62BB4phapYQ1BNEgrNnNNwF9LY6AksECMiANJFjHDHUuZ9",
  "key3": "mF3XSBNc4UMh4B11iAZ4anDbMYjQra21ggxErvxExqciGgYRccuC91w3EcHdSj642Zk8d4hGEcDtgeLTTik6aSC",
  "key4": "Gz6gLMpfq4EHHh2awfYRManoaYFAQ2ouuSaVgCVFArV58ftJ7phJjds4TUUifdbUpcggoEbaZbky5MSCu8jzxFf",
  "key5": "3yRw1B3F3i2narmLCbuTgjNKSHhL81Nw5fagh7gZMPXFLshJXNS9D1VM5fxpR94XYkESPAqXH1CrZ5Ag9WW7FpcH",
  "key6": "3mAqHxoS6vUzX3VuEqQm1EJPqXCQvHx1KNyfacWVwjwUjPgpPLYTPbwzRBfRXuZTnnVoByRBQCR2DnYJ6rzCFrwz",
  "key7": "4qi3dFkC6WrXE4FLq2Cqfium7C1tBefVSJ1gXijiXJF2f4BBqyMSoJG17D6nKbAY7CcYehucPANRkwW5iAiJDQwT",
  "key8": "2T6yESS4cVM5Trqyq5vm1KeMiroJGhhnLYqVA7Whz3WefCkaWRK3jFKY4NDMfEn2AKXbqbXYPNKbJYGxwWNVekeF",
  "key9": "5P2cA1fHRLf7zg9aktYdXJ5JCb4pDUwF3KxuXdEYCbtsKH773byShMCFH8j5gumW5Rdi6NtGgsNGN8LpFMGnM3sS",
  "key10": "4zs8CEykdRvDJC4ZCsipM6PMG9j4S8DgynutdFNTjJBxS3LwL6hk2vViZBrVMjNG8uJ8Eqrkbdq1d7qVD5uw8cbz",
  "key11": "2u9GzrHnc6UHsFoBewKSXntECLihdnu1Fme9q2XE4fPS42p2cKBT9RXNgG631iKawAtvnzUZDdedhgV51XkH8rYZ",
  "key12": "5J1zjyYMSMAwXZ1rnju2MFEGkGdsjV6u7BzSJAbjdpNMmDSzpuC9a6d2La4ZYHLJKV1UXJEmhsgC6kUeQMQe2qHV",
  "key13": "4CPj13m8vwSodWeY8HkYndCeKpXqbHpjdMifuJKtnB8rxDL3AxNFFTC8xKdvbHfEQv29WaPbJYGAJxoBrLkdooYP",
  "key14": "4tMDpb1NjkifxG8HuZVkHqNPWdvkqT2Gr1jd6VksPS8YtvuucKWDefTP1QRbdUzJRB8c9j8KtHguLVy1Fxc1utew",
  "key15": "2xgdSDgszvAxT1oagdKyRz9HHjsFAvkKUK2LJTRFj1DEdBQhCnxEsqmMdSzvkx9pCXsX4URJ62rhXr8WtYywWZSc",
  "key16": "44BxtYULrqfkaQieo957gqaTbqQ35WSMJJPemakx6eKqN1aSMfRD8jALLVPYrW11CqM4JjPsccybv177h6W3MPFk",
  "key17": "5EfRyE4dJvcdZRsb9peFDNfnxUYvRjdp4BmKjfTehBy4e2zjNEJURnpTQNUGvcDYFmMD3NKp3V54iKa9rDQPzZoG",
  "key18": "2Fv6rVNVW7VFssaLMbYrCCLAemEoPfoF4UvdVp3fDCdGPqyS3hJBSH1yASeNRTjc7J7GXRK8g3zes2BNbPtDoFeY",
  "key19": "5KjXzUSaXvJs5y1buByJkNDghUvco83kr1Ei1QWMaZCxjzQrZbhCsedUtgfAutFezaksWgfy8cXJJYQsPPrUD2SG",
  "key20": "3zHxFUGcAKSHhEUvLVzmqHqZoHyEftFRYEf35RV3Hu32JkHSdMAVV2VWHQUeBdGqYZiUTbPfbbnE4yfQunui7eXq",
  "key21": "y5BBbgN9ucCycgRxu4zyuVLpJ3FuaX7XPeJZjvAA2mQXyHYs7hGF8SbvHrpfLf1L2fe8GyJrcRZ7HN1FiRj7kVQ",
  "key22": "2JmxWGLR3T7uxcFa1M7P3J9NHFznpWHmMYAhUQUaDqswzJjQBT24L8bHv22QW1vPt3EJLa6Lrc2Q9tT94Zx899QE",
  "key23": "43RMfziZLxkNbraKZqHw2T4KQMi3AhiQqsjoC6daHuLFE4XbjSEYL6v2iv9dk9xm6ddbhVsnwYijt9vPKidmPD7v",
  "key24": "4UxgAbMjoWWZ4EEVtYcGgnWCPMbKnJbPoZ2b8mZt8EBhdJj8NQRHQG9VE9fr6YgM3bw6Zpash3WYqTTZEBKx5Vb",
  "key25": "59cL5FwJvPW9a1SZWhVqWqCawBdGJzRyPsVnT1kNpmJhA5XabuJgcZhg47QcXPubxGUYDFusjDUPSbydTC7WMD6P",
  "key26": "5UqtLoWjL8e2LtLEBty7GdchkW7aE2NucaZGC77ncqwKu3EpysTyghYYJ5bbKP3RQQQvB6o1CFnHMYMvKxuLdAyG",
  "key27": "4dQS9Uh84Wv1As7H4LsmmuCaqwVLarVJEqjRvL981DQ7moPX61ucgdD52sJBBtwyqRwrsCgat8ywBVj57NJqUuu",
  "key28": "3fALbfDyAYZboJnfLirXvZUCmFPk2jzRinWaRbxrsKN8daEMfp16WNGxCVRcGLEZ2DLAnx68KdLSkyNtZHFxA3Qb",
  "key29": "45mffF4GiTGyJ1LBW6hJqNMV7FtMr45V4YF2AoGmJXv75L8kP7MqvqsLRhkjn8M3VrZj6BoZmyfYyEB4cVLJyovw",
  "key30": "2BoMGjnC4iLX4GAsEb8X2vThSgZnEUG3SX5RncdQW4DmxCw8oVvUGHrmcbkaSXx7JkKnZpsogdDby5prhDuu8A4a",
  "key31": "286reHHNU3EDspGvn3QpvtczpxxuZNnd85LJjZK8cNKJE8sMdp7iFEKHrw6VE788DVV7cCMTmVE4Sp5LWgnjYxi7",
  "key32": "4cC8uzHcsL6sgfLYviBAkV6mM4UQaxpVLdg98wdmoVrHXvJ1FXH81Ruv6FKP8SHKvvWmhvUg6zgkBSZSXT3BM2cb",
  "key33": "4DTT7mFbzZhQKh6NGDn5ciy1QAfJTnN8PHXDaqdHdLbPFRSCzYBLVExuwQhgwCVvU1XawhQtekMHWiLgpr1ZSeBd",
  "key34": "2fZHUCFL9czC3bpuKf4S7irqofPhUF5HnQzAkcNaKSwhToyKYRhU1ppygKxLL1iSV5n3kb6gpJsZ4s4ABebTFGcy",
  "key35": "4GC3sctDqsCdXhonTzH84JtxeVD7YDbm5zxiCK282S5Juk85cYQeQuufjLis8z3xNbJ7p9PRfREGG17RAS5rVRUj",
  "key36": "3srrq42uatzfHumZiaQ23ogL5syrGNxe6GAExfXEAVCuabQdhcX8AhNrPJowPKxDjcJb3VT44ikRRAnnbNC91nEE",
  "key37": "4xBFy2B9CNn1GE7NnhuxvUJtZBA9QBBYeutAzvg6mjno1MkDg7Q1SpvEpK6jUKVgcs59XbVu5xnyntHwed1NT9XE",
  "key38": "3X5P5QF5XjxHxJrJ9JqYH6d2EusqUQnqwdHXTWLCcGZGDQReqsNfCStmeuBHToja7YcGzzxU4isyG9ud6fTer74k",
  "key39": "z6n1NGv6mMHUefmjXMEBFQZMdxjq84kmhk94PoRPAiRYoAr4TYz448VyMCpDzJSahsBuDWAxvh4EWZQKXXWx7Dc",
  "key40": "5AUzYrv53KfrFRNExCd4icguNAqijGnuWqd4vigDCQmRsR5NNiTkLgV7sDKCs8UG625aUGg5HJGdWdQpwYNqJL66",
  "key41": "5Dz4xHGuZknxfiJnS7hTPjiRWsbXWcfGzcz9wBDELGfd5NP67xuWufMan5XKzpD7N57XMjXcCLwSN3deir39Br6y",
  "key42": "56w8tFcQPvtQVuTkK76cg8VGWZ1YWbB3suh1UaTkzib2ZL1j363inGU6K6xQsJFd6nGdp8w1iducvCSr1Z5Zuv5m",
  "key43": "4xqThDfV2MNnk2zFLKvXiS4rNwFkkfiRp9vW1GD8dyrgoaZMB46RMxFs1EhQzxmdE55a9c6AHmGE62qNvw7vXyys",
  "key44": "4b1DLDwx8FCvKsRHKRwagVgfybcyxF644b8t5wwB94Zn6hnHrezn3Nuxtge6RYU32sUJ96ra858qgt9XrvKB2Pgm",
  "key45": "2pMzrGikD54U3uSBVfBRQtvqHZKL7Qn6pKqKg9kXV2Xdoh4DJvd2XZheiauJXAc552qJJrTAipawcqR1gcXwKLN3",
  "key46": "3f65DM9TE16GA897ocmvcMff5JUGsVW8hW1Sk1RfKXsrz67UXVwUY8ooP1AMd8cyUFMsDi5djoTR1hFtPps1zXvQ",
  "key47": "cbr7xtWSExGNqXwG2zGP68L8Nv4rpox1rXQUEVo4aZPfzMGzCu72JxyWGWBrEFk6XnGFiW3sYRYf2km7TvRTMR8"
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
