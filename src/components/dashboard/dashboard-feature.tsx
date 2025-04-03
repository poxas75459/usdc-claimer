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
    "4mW3zk5gtoYT21kZnBKEaCFFkTNRt6Yeh1GiY24qgVq8FsqDBX8SUGArDzvJQdT6NGU9z6FqfyVS5u8hGR1Sd9q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gv7mNmyNHN7uUP47cKk1Xk1r37emZ8RHExWfFAj1JyLAZe4z4fDhAQPLBaYkjkR8AQoD2uksL7YLxcSgtusUfTU",
  "key1": "2awj4ErY2cYGKnWZ1omUfWsDUakxrbqp6C3tLGN6oa1fBjoz9qsBkG55G8Wqx5sEUxpz1714p1rK6dWG5eDcasHJ",
  "key2": "3LsSNhcha8FHu5qDc56tV79eowxiz7XRN4jHw9z6qCZadz8ayPczt3Wwpov5PnfuDFTdLxcZNcmvXe8cHV9ejvSi",
  "key3": "34tG2e7MqD9ZA2vchCKiSoc9TxUu4ZV8QfJzkpSNSbxYFmwsA4C8rWrSFtNTT1HwNphbrXpvBkWszs6K3ic1NS9K",
  "key4": "5kGz121friV62dyKahADwCh8NuPdbch4KS7KupA4U4SxFtKo7rHGKHr6p6vDgCtc15fngn8MLvm3nNVLx1AwFC88",
  "key5": "t9cQhvA4bY93jsJac3FKqRF95AgZj2EGemZrHVkMDSCAjny4d2sFywJL1v9nBFaZcV3gHLp8LiEsZUoThEpQvxm",
  "key6": "31kHsG5Qi568fvhdGFsUQLKw6EETAEZFicJZhqHNckyU6xrNNTbk74QYps6bF7N9KY53oqvkQ2SmnMdtcLKztjyZ",
  "key7": "2qYA6bEB3LbK2Ao2pSweEZdDMrVyJZBgBPQn7VqTTrdT7GCAGiKr1ATeQUXe9AmxFWBGHFYpc5wDcVbAgtLiBXSQ",
  "key8": "4RknbeJ5oqgSsTvNmT4GebGeAdMKnhvtSCo4zNGqtP4ghBwvtTTUoFHLatrQdmfuMZoDrUXaLWr5JNBKXmDTHAyn",
  "key9": "4tANoRoEABS7z3ZcfQVmMGLeHeEKhsvQGn3M9zrwT39PjTmZzhYEjeNWm9BA9GdMekmJJ4HPyVsxqJjrgu82s1Em",
  "key10": "4o58VAnFaZU6uTKm6TMne6nwKD7DRQ4qqR7wMQYrwxnmx1eBdZ9mszPzPB2cxKcgTFk4APE8xj3vLYNwocVEC2o6",
  "key11": "25LU22VNxgm7qRmm6JTFfuqbKW9Sv77UiGWS5UZwjmLQBjXP95KU3kxWnBHJJUcjkAe7FtDUDGmVCaYpjJm3oQ1x",
  "key12": "5Z1qq3NqWwvyA6rm57CZGktVAbU9RQWYSB3AvUUXaWDkVnaCEokyp1hB35YcYZnuJoyUpeiUfWZu6Q9Ct1f216FH",
  "key13": "2hio4EcCZfYn5PEC5dEUVvifG89Wxc4fUNRiPvzLhB58FAZ92DPYrqySLvVb8LbgAAWAeZhoVdMjLCNEAfUV8iG6",
  "key14": "r6LVoGNz83HrnhJgc2W44X8kTE7nYo6Re8pqSGJ93QaAF1CKubpwet3i8LM84XAEvCk6YsC6CPrnRVVECVFgoSv",
  "key15": "3vrHDsqQ4oV9rvuP6cppLif42PqyEqCHyYqmUYoCJPbdQ2qf2JULFwBtgUcUQEcF5eybitLVMqXvtfjhc8gPDLH2",
  "key16": "k7tK7iNgRWbn6dHNTee9bhQ3YmULAv1a4qpwcMkZ3D3AwVSDz612ryg6KNMazvPwjNS2a8ZVtrny7WRAUzgN7D5",
  "key17": "4njhrpY9cM6WMQ9Pj1BEQy4mzKzvDzYrEbVz9PdYvwFB8bvmwW7ehQi8YYPG8QbCMaBgpUbxnQTd7pSkeVXNoFws",
  "key18": "2ms9Gsfnei5p2Dz6rEdPaZ9Ya6DNrbzcsGRsXsxvtCEsCxrC51hx67hjZctQqLC28YwSkoXRjZRAq2xLE9HfZApE",
  "key19": "65eKfooZkszGT9qRoL4JcbhUHgtpfKnwBHbdJUGHaWipTyuLuatiWjp54im4x9LXhBCrC6HqLYAqTztM2jC51gBL",
  "key20": "4cGtjCnMvrrvvWBMuM5ijKEYCCP25Agm7nE46jMYhERuBRSwiThEzTG1W4cpA1QKri2aRHUJ3EnkubkBm9cLZJM8",
  "key21": "63z2HKrNu3E1pJbnqFvLULzEkntkgBToKyaJbrjhkgvituwrj6AqapNtxRFrv8V6SkvDRsmKesAikJytgzHeuUgD",
  "key22": "2hjnSy5VzBWBy4dopi3Q3J7vnhurUgtji7RdRdfnLjMAhoUpaWLqGZspeRj9SE2cQ2yMmKY1qPtPbbqU5eb9R6XW",
  "key23": "2kg8s5mih6jWdGiZAyWfFkFh9wMnYQSJpeAa4uDRjhmJjF1NQHy5L5yJSmpsu6q9uFTPpj9zmD1HHtviAyCtwNkf",
  "key24": "3wx7du1LHdfuyCMivQyhJDaxbpg9MSy7oGzGj75gmYt7fhacV6mMUhRp2jtLRRt2Egac5jFmzYFCfaLL6BX5gHX1",
  "key25": "2mdBax3z1zqihqkaNW3ioZFEduoQS9CsLwmJe3EMyvuoZKRub94C3VFQfErcVdmEpxtzLSpZvh2ezQqNr1FeEKnh",
  "key26": "3x8NmWp6vfAThzb8qszmADX9xWb6dUq9X7xMGbv7BtihBPoaQZt74uSiL72C7e5gRUU1T58aMFe4LHHeD9VwXtLA",
  "key27": "5iAoTYLVQ46SGzHQ8w8aaxPv6ymDuVZLa1sh9sMqjMZ1SHTZNaEgK7kfNfpfoQpBxCF7meka8bRaJQ4TbeKFw2z4",
  "key28": "5oGs29FYjVdjiKempDQBvBNnX5tjxqfWrQS1STVmqt48oYP1YFVRZNt7q8AgoTaP9FUX3si2FMhUp2RdXv8bG7Jv",
  "key29": "4CnfoMPYg657HTSBjGkKwnZf86CSM7RRuS2kXjr4GZb8mTfPbEW4CpRcZ7b9CgBtLRnf6Tw5u24WWn4hhVN27JgD",
  "key30": "myYzd3ineCS2WvKRwofcJ2QQVhQg8ecThgSFhB2NsAozLg26anx9mY4LX68cxpGKgjAtnz6U7XKAaG32LfajwaH",
  "key31": "2jEjuXKtKFEFimyJ7i4tdzstDfhFuEjc3np3QW2MUPHRQfecKEfL2eNkWPTnDeqWfUuAdmB3TQYkPuvKZHMMuZ6g",
  "key32": "mZsaypUWFQGm5FBmqseAYPDRb1dzxTnGxsLhp3eyvouXCpLBafy8zGfb9NVKr3jVz7wR6SL8YWPr2qm8RYoswbv",
  "key33": "2oe5Pa4W6LH2LhivDYCtkWGkVvNCtqMymsLLuwU87zF3VvPaoVmqVfRoVTqzrjeunknorazM4UHFi5t9iQHDG9cY",
  "key34": "4xq5HwCY7Z5phD5JoaLgW5VNPHGjovGtSefvn6oBmY1bFED8xsk79Hd78Rp85ne53VqTLt84C8zYZSBPDFTv9Phb",
  "key35": "2EtZtHibRD52w4eiL5kEpM5N2irm1bFy97H14Dy6NRJ9iQVJxmt31GgvxGRBJmJxtN7qVVw8WkDFaVqwPDoDUCmd",
  "key36": "4YsoZaSH7BeFWJQwbqgc1XU6T7GDm4NrBfLH323Vp81k39tnKhvjzp8Q2Xra4SW6Pum6Kar2mNaafK2okhpZbDmw",
  "key37": "2sJwgKUcNn9TzzuoutkH2TVkfKCUwdQSALXUWF7Fc7hU3tWMeikXTjhA7MhrCZnLT3gRext316jxSDG2Zjr7Wd9",
  "key38": "2xBYhPA57UeJwME2F5ZjG7nhuj7S6yZnigysAvNT9wenB8GphWDFfBTmpaU5SJeL1NXwY5vXGbwLhgwsASkyefva",
  "key39": "6u9aLhdniAgptKdEduPHABK49FmJ3z8raew3zJYB2umWZpdmyUC9AEHuDqV3RMgLEYTVfCCgXc5AXDUXnxekYyq",
  "key40": "45gs2M5uvuMVTNdokwBaXyXstUSzbfa1z1bCxk4CZWAkSi5nDCADd4ASzjBmhqD4sNgbiEEwYkQXVX2WVUi1zdTa",
  "key41": "5RpEE4XpWEQCTbqmyE9xk9M3H2dBgrZZSvNBoZEAinixBtp7j579CMHpmN2yYAfxCb7Rq4etWTsoENW68XfEVbc8",
  "key42": "3gC1rVhYU1vSUZjCEg92JdfZdoFWjeTW8ApqBbGSJetkUKHNJo4n4s5Xe9LDBSxHzaarRuo43oeuFaYA2FVjS5bQ",
  "key43": "3Ay3RdnG59jGF79KfGJ6ksVD4ifHadSYB5dv2UHRC1jESYqTS5qJNDWjofHpLzzDcX4z7SShnCqoBEKDMYMMQsjp"
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
