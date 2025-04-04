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
    "3a27kA28VAVzH9v8gqVg6Ceyg8kUphJpzqJjtG4gXp3LSuL6vrTECEi9Lru4e1NDUJU8gVCzcWzxEyYZPo9S9ATm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51HHUEhGfTSsRgnY8VLmwJBNGstUSYBF85WSB45NH94uqXCiZCNtuqpGsqUaeCZMgF7ef89RhrT9CPLf5rYfKsZW",
  "key1": "3VTT3Q4bvfX8z4HPt74v6uoFjv9XYfqndeNnW2jHDaTiqHYsFyWys59bfLEMJxiuyV7p8Htv9akDixMdmSeztfvU",
  "key2": "4hFgZsoEe3YuCfVx2iJavE8sZSssFGaxwFU9C3RjPK4QKkBooJFhqwFk8cvh6XiXkmihc7vBuahwedpZ1x9QhbwX",
  "key3": "B7BsrECLZMvi89b865HdQJrm8JaTPteKyFmnRdouKZQQyXLXBD7v8Tx7m4WMR1UkxYrVVZjjM8CrGgMfVDVYDwx",
  "key4": "2ZPeJDn2E3yQ9q3T2hqY4aiEmx9r8CpPcXujc8hrfynhwgrCi6N9GeeXoyiQ4u42xExnAyP1nq7sRSB2RaLZL6TB",
  "key5": "4M4GFt3C5rDWTCSHwkuDw8H6wmGCuc18CeVsvRkVDdPoW7jogVbnYgmQoknRTXE6K6kBtxVdBc9AgUCiVrJ2gAJJ",
  "key6": "SSB2pbd2n2bcYjd9isWumj6kfDJ58GFf6aiZPfgPvSjCxubEwrE6xKVB2E1bsuSNcf87UcWEahvYPP4LRBrrF91",
  "key7": "tTfSpwbqRTBqZ6GN6rg7cmVN9KSobRTZpESz1LFT8o8RraP9AWQAho2TrDDaLoWXu4ptp9pnyFFGNptHvxrDd7a",
  "key8": "2KtxYjWvHX2msa5HNyrkyBWmGMtueJF2RdoiXqc4CZXFmsYfRuHWXxGXjQWfrpLU62m2bBVik8kZAt2fsLmarYwJ",
  "key9": "3mdrZHihkkWeUxQxyW5ZM2CWpuNu6oZKcgyMz31cthegy97LcfqaNVU1CS3HRvduq83UxrgU7TkVCSasrKLTs6Xh",
  "key10": "5pAQJyT8UYj7rC22FHSaFKzXDDqBz1GuRu4Uo33JdiXmLqLQexzaamMdBayywocvbyudufN5ArGkVwGeNJigNLra",
  "key11": "3kbHbr3vDBdCZUXCfBhSeWi5Rk8Jhc3uLDsNaLH9cfEAeen5AyViCbdgTXUriJdUyscUsUGG7BYNWYK6nUc1XfVe",
  "key12": "LT7RdvNadXEFqVvWhWFyrEAvRsXVBYTJcNFoK5b7PKz3G3jS3mZwGSkhnQsdtz9WZaSLz75GtypUBTxyYzEVbzr",
  "key13": "2KtBn7B3zpGGoi7V2MRvtJGDJ3AgwujpJz7x1oaWxqbT2qafsMjUbd2PBqPALcT9frecd7AUhZQG2DcZ6yEQpseU",
  "key14": "2ytYZfPqiDYHmuExocH9vJqhUaenRD2Cha6RJ8mL7itgfLMMbY5eGCCdx9Z69gJtLYQdTpwWQ3s6UgUtXcSBeTC4",
  "key15": "61bYd54MfDLzCjC6H5PydVxY4SjrQxTNzJLH6ya8nmbRKkcqDQxTJT87ieSn2ykmJ95FsefWaGGXa7KJEWHK5D6q",
  "key16": "3nD4hdxbs3KjPX7dGSkg8ccHWYFvkZ3dQk3FXUUoMLmx3pV9imvGnqgZiy4goD2rVBc2UVsGzTBMXsoT58YwEDwm",
  "key17": "jEveML1x64nW3eFSv8pWaSfrgTpVJiB6YpoEDzMH9JU7NLjg4Ue5WYGV1ZhD5S4XbpquUBen5gV3kdfUQxhYHQ3",
  "key18": "2tKHFet6d5dHN87gg6KfSTWh8SD3XiroBaVak831UsGYSn8eTh2ZUwdq7qdMzKxzRUsp9Zcc9p6qskfN4SERQ4t7",
  "key19": "5u9bh1878jSQPYkbNsoRFRjBpbFwSzzfRfvUWLPkkJvuYCEZ4baJGUodmBXUm7xo1JWkdX5D1JFBGg9Rf4hwSENx",
  "key20": "7QDKxscxHdFpFXod5LDadL4M3oDyUTyXhgc3CWwxBu9cypJYWNc6CvTmU4JAxjuJogktC1MNxY9dpg2ERjBswYj",
  "key21": "TA4PJ91RMSLBLfrfuvkUtaLQsnY9LaMVn99xaP4TbruhHaoNF1f73h1Xc8stmTSDhBgLjnp5sjk8ujQx1mzMTZV",
  "key22": "8oWvHhUyc7B6tu5ZDf1ZJsu9BgLS59osd5dxJVhMyaf8P6LBCWDcXZyVCLazLxPGQBrzvcCYdQhZ7FB2qHx3qop",
  "key23": "5EsM9MnZ7dhHfoHBrA9X8L51xHpQPTfkTXPJ123hLF69bNkmtrAfjZtgKsDJ5P4E3HHKsxbQkYHhQAqgFvgMa6Ej",
  "key24": "5gvgaWYeikgRGNext26oeaembZfDsZJngy2naQGUzQZgsofmqFNJQN8coKyrqGSEADaA6858t5RU88dLh4xA6gvN",
  "key25": "2AdyCRVQrgbpNTgVDsoPsf3JwdrEj9C6fgydSHaoApZBMLT8ZesyAzPgTkDk6jfwM3x7SxBos5FfqpN9pL6JZQE5",
  "key26": "5LzCVLZrHwgYeuEbWFSwqVs6UQkyjFFagbfttf58qeQpSn7zpq1xXA4FmgndqCNtpvGLH4e9e3XHaPsf5LbHAc1V",
  "key27": "VLhF4mnPLLNmFmuru1rfcNKUMGKd4SsFojoqWjMfjftbiU8ZzewU6PVn1EfKQxWTP3bsY7ru8D1dsF6iLcPuFmf",
  "key28": "2p1e34jKLcs5dFGVxdPdA1rxs2aPv5KYdsVjaVcTXJrTfvFUKtJpXCenBUP1H8wKozEffa3oymmXZk7ZndeU6gGs",
  "key29": "4d9NygYP8niu7TKUtXqJqrF9wXt3RZqPTk9RiVLNpBdjKHxruQfSQFUHkjyM6WkT3CkTwteJbXGJdwj74toEWiyb",
  "key30": "5LE6AcodpA2rM2AjycAUeHX8LDywa39AFeFADe1C1F6NDt8xnSWnqoFmNKVYb5vthEaA4PPXhaNTuiFkFjMBHJ31",
  "key31": "4KKRCmbX6vKxN9udLJ8qBmtwqeCEniZBaanXeCf5RQUUUp9W2dHLA1RKsrXJbMHxU3CMbPTNR8hWoCfHVXp4rESZ",
  "key32": "2Ci2toub7D4FtZCkiNkj3FyoEQzEr8YYYqhXPtGsC3UzCu75TTkK6iycq345H13gapvj5BAWcAmPH25YTP3DFdrj",
  "key33": "3gogMWFBQ5VapZ8TpE3Rjh1yAXg1ThcV7Z2aNLKMu1fD6nK4Z5SJeKP3w5eiZX7aye4niNY3f1co9XAyL1Em7hFQ",
  "key34": "3GVapcmxQRUR19KPJkqEwf3i6rH1P3Ra7cdPsxbAeBKyvUcgAN2sMcVeAPVJh3o64f2PmGJjVqXZcP6ZMR6fLB6i",
  "key35": "3ivCwLRSvBhdTvTsanu7ziMCHEvuXXX7H8qmVFFbH1JvLD8stf64xYzA7cpKHRS37cWoTzbrvSSSVeS6o1qkMmcc",
  "key36": "3kFwK3DbRjg2Qq73kf4dxmWaFWAftw6bxG3pv7Wb48T87gpwmVZpU9HGfAcxPVzPadboG58S96zhksEeKwrigueM",
  "key37": "2dVwVwVJWHX1hj8PzdgBFishEZMnnFbUmHU8FUr8gjSjKUJU8yDGCJVGnFi4Jmi2FkuekKap19jTSA5WBFa4mFHF",
  "key38": "3HPKyeRm23iPo4PMfK7c2MLRiiLWoKnL7Cya9rrXVEnwT6mKhgYb2p2N7KTGFWJ531xrox8kqSx88rWGhkhh7nQM",
  "key39": "3rMKEZYcxyVdnMdenCW5QchD3AQNm9YuBkSGcU4HZfzSveTc2F6nAtrSC9oJ9Zcvocytep5Jt9TNEdUZZ4zeovJY",
  "key40": "DxKTsoSonigjop131JCvsHa6UgKTRBHgSqis1WU4oZFQW1xH7EzHpmTA1cvmLWTeDfPnwiqbKs3JzmyVsqYvSkJ",
  "key41": "n8r8ZEAB9cTPrQ6CQwNgcDD4eV4b6LWZPBLJZbrvRtjwoxWVW92T3DWFErHJMHt5CbYoguSj9RnoKfMiE8gFQxq",
  "key42": "3XgexagS3CtBFYhk7iU7FDMctTEPRzsatWJNgdp2jbEVPeXUTrzrzN3WYu4LKYdCx3JEDvG4vddEzuR8bgcgWZpm",
  "key43": "5CJ8sZZsc5oXqbNw9zrGozh2VqyfchCQ1WcNnUumTTJ3tzSAp7CMRYwhWHWCtNzMoqratn5ntBpU2y7MgZi5sDEA",
  "key44": "2eL5r9KEHbifGYqLFBuWZsFTg7ozLpd1SyN4vpCU6xB6m1x9oxmWQRDUeixBsPzDZCmh9L7L51adkiR6SkDqhPLf",
  "key45": "41C7HV9WoSTaimEKzUeKraDBQxWc3QXYMJ7w9FdSojVQtgsyDsV5QGs53dPMci9Ag657waJEhyJHspYo2aTn9n6g",
  "key46": "38hVjw77hza8KPrCYZquXMXf6NiTpPVvQGvoENS1X6r59wdDNFfHiSKA4W1uVVUJPALbJWipXj84GMXqQ8UQpGxD",
  "key47": "3fFTFtcnV5xUiUj1uF94MxRfq7AG7WfdwbHHenyixfxXbpTpmm7srV5QMdEe33pf9LcsqW8XKwqPPHvDB1fAMpMN"
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
