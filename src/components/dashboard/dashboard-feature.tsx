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
    "2mSZfnibAf1ZQLfcuwCzcu8gq43vfY53Q7fBKiVEAYV3Z5hTmX6TBRkxugTCJ9iqHBLs2x5me3dx3BdarmG1WSAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LjAYHyFmNVBBgkK4uDR3qWAcgCcNPP6pJohWLQihTPp6VALwjnNHnyoGdvs28PTXjMeVmQMntDgGhR6KdQuyVvV",
  "key1": "5CRPVJ7GCX35cpo8aXbvp4a6KEUHMytDvknpC3TeiYRAM3EzVM1J5GQmU2LGH5dtHeTRnoJDtxgbxZUdQFAwR7ia",
  "key2": "5BMNQ34k2vngS92qkhuE4TeM8WyYqUB3aeSK3AACVwwGBS812SUZxGNdobLYkse2YoU1uEFVcXXCXa8wdxT1eZfo",
  "key3": "5m6ubAARs5P9NkUW1DcZ2PTST7uh6xUT7S71555somZAeZ9dwSMmc5YrUZdED4er51rP4EhF763RLwJythzPp5eA",
  "key4": "5M1ktfzVbEp6zzHvdDP4jvz9UMEJieovarRnCc51gMJc5HzFqy1pLRA5pZgBCYUe2jDmEwdtyRTzQf8r9WssE7WC",
  "key5": "n4DYiunA7nf25g37VhbGocSEezzbQegxBtb1itFxnNqgRWkcv5fgaLMTnJRsRtzSr7Mm3cw9ny4o7AAr8UDzrMp",
  "key6": "3GFRUhisJNsov4TCYCEn3KRD4mXALA76Dsd5r2Q9727sA7dqphjMT2DTqZozDah8jqQsvfGfQJnvS6AJ14joVwDh",
  "key7": "2keoFmiSQ3BVccemeqTKgHB3h6JGY1eB7kiQbEqUvb4bvK7cvvoMdnSKrHb9SPQvzfLYugvFS1quDKaXe5UZhj6b",
  "key8": "5U6RCkPKa6NjHwqtGuiRVdChp4hMbhZNDfj4mbCqXkiwGxmgdsGX17y6Cg2s6KP5w5gyiYY8jxEp89Ed2Ub1TRg7",
  "key9": "kjG2EFPFs7UiqVoZW9oLFbH32kZMWH2Z1enuW2VXZ7SPDmDAkFXTFdKW27XP7bNptd5MKaVYmXvLHPqRgzgMQ4g",
  "key10": "5jxiRM4k4LezsZnix4eZqxouPKe5pVeNeJgDzcGCxwRowNoAPATpbYiMyC52fhMcHP6bPkubbdgAaLbgquB3Psyy",
  "key11": "5jFJKHzHoq4QjBFLFjdAPBRij4bGDmreFeBBS3yEfNC5v84dYSNYNbze8VssKTWcm8abtKKt7oNcPkAVDc3RaaC3",
  "key12": "5gLmV9PfiBPsD5KqeV7YB8d2svxhpXSsgZ6vJ3r6mb45cSVdX6h9SGrDyRuREDivXScN1E8RDkU6bPDYYiHNNbsx",
  "key13": "3UyLppX44ssLQ7nMnJwgatZbYtYF67xnx8SLKF2Jm5W8WamUJ2meg7FwnGmThDyznUMmkSBL79vsdmfJwUogtSNr",
  "key14": "66vzMQuhELzFeikvTK7zXBoiZDyXJMUH51mjWgKE4Jt4RkELT1zH4XoZuAfYX1D3fFtg89PbM5aG3Zy8WYJpS8s7",
  "key15": "gU4XZEJAMkSgce5Xy59QHMYhKhBe92qGh3HBkYPgpzLsDoTJG48QevhKaWwzqjX8kSm7cDMp1hL54Pic1Qo2FDg",
  "key16": "5QXsSFUQtNUPbRx8jHcNjpUvCWUEtXtxG6r5YF78CZUtFf5A6c3CpPxE9615zPt3wZuPyunB8zzYqj1CatnX3yoC",
  "key17": "VAwu8TfaXTDksd92mWEtFBYz9WQELZ7seSi3qRxuFUC3ATkVVHj1K1oJdMtsPw2pjbRDLnnjRZQF4yBtWoguroa",
  "key18": "2NNSqk2KEKdEuS6z2sa4C35tiaSuMScNAD6R5fh41kp1SCUnyXFHGjEw7c1CnajDxpzCUY4FskZHBnCNc2GonTuy",
  "key19": "3hMTALMCEhEh7uoRR7Yf6vaR7pq4vyeLBhD4LLjhvb1MZkCRrtztWnrtDy1T9reHnqJbCmG1BW6RHMJYmCzx3qHL",
  "key20": "4rnmUXiumrKrds3RCJUsFzJociNNgvZ4FpNMbhoMV8EsqvbY1uf5ySGoX7au1kM26Xi7aH6ZsGrMgfWptxw56Xvm",
  "key21": "gtzHXAfyhREwJUPprfGCe2XpV62c44gxm5t513YfLLUxX4XrtYkDph33Va6jup958HyoXM7fKi3zQbevwEimXS5",
  "key22": "2eNfgPMwmHcM4mRduifBWbLX1bACRHMo66Qf9z7KJK1Wv41Kg8BX12VFmkSRqzojE9sJQYQfr62z48GUu8JPxcTo",
  "key23": "4aWr8vJZjWZx8NaCSsLFxoyniBMkMxXjHB8GoEfqJyRnj5jeyuf8FsNfmWWkWr6PLcREwaRob2aZkuVgv4KgvWWo",
  "key24": "Rp3SMiR7gLL6o4UhdNU9HW1C7fjzXupaaZLpN7LrLojSG8K4Ni18iXf3NnJpVNrfcWtgBWtoNVjYUNBRCzHWYyF",
  "key25": "FAyJxT8fjTRykpmkzWBQMe9dXQqv76twSYLKpHX3crMzb5SNMQbcXrypT9t5UaCJgziQoeVh8PE1gSzfBCgMU29",
  "key26": "3ZrpLZjRxtH8hyDy5vcqX933qDSWzjxHzBEe1cD7gHmrxPN8yWSzLvADZwLXo2jG5DSfEYPhrupUvQdzdGMthnF7",
  "key27": "3irmE3CKj9X7yKgEYL7sWGXuczzR9B2KncCKSvxczXMjqXyhDvt3tUf9L1LjS1nhGSg49yaMxoWy4eS3TMQMbTai",
  "key28": "7nUY5BFmVmx9BB8hRi9QUJ9YrRQdkAaziyRvZLtefp5cgnpRFjj4CmG77KG9MHg13pVj7ZMDFk3ZLUdQ2TumkrF",
  "key29": "4opSZ6HX5tTzMaJ6w8cAJyzsf8NUDCc3LzMzMhUuHbDT6J2y4Zcj9nU8S6jcs18UcXEu4EHZF42ZSsh21tKKjc9C",
  "key30": "42n6kxeHK82UhtNRJfA1YkaWgDFtsau461Wdjpz9tADNEXx7iAUEbiyacJtG1wQfCK21Eh5GsTLAnKakG2VL8JNr",
  "key31": "5XVy8atCWSYHqeXZW2PdFBR6AazFyw1HnYLMC9hdGv4Yrsd3fVmSj4sahZVubtxYnQ7wnkxz5JjuamQ24s1W9RmX",
  "key32": "2VZQg7Qjtc86wtxn2xToBUUPPsjevwYiEtYmdHteeMiZJScccPQEr992ZhH7XkhSmgwSJ4WXxEgLhWfhmwnTM57j",
  "key33": "51bWp6VMFq7syJ4GndrcJuvxr7T47C896sELjUaLD5G6ydyPqCiJD36QxmiobP6w1oUaepGTkFubvys9KBqiftX5"
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
