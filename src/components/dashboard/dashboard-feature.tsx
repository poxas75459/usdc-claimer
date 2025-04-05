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
    "2bgxtcx82Hh7QvRXWdCX1j5ztE7A9AMb4wyPn43aYw719PbY9VXPKxMN1d7S7KWBptYSuLXJe9W9dvLMYS73H6KL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7puwGSU1eDjpk7azVnX9mChPx1jeQrqwkntLzPJJ1MommMZGWbhGqEEERAJxPicRnNTSx8hqd4W3r6tqgyixGty",
  "key1": "569KPhomuvMKudni29zgmpn3m8UyFZ1p9GqfaxSYjb2tkFsNP8VZ7niR9ZuvLjYPiiz1aKbiw2ELZPkWGncFsFFZ",
  "key2": "5Sfu8EXj2GTW4kcsC8xbtBhUNKyoYsm2GEarh3Ktbhxf1cqjazL1zNYvj2Uc5MJjUJuv32bkbfwJ768aYvczGFqP",
  "key3": "3VGgbpQPdkwSQMBiyaDZSCXoDL3vz649rMcFidomJXfYXG3JvF1bSrtqQgXTsexnNxjrSf8c6qAoPaXZdLkqQkeF",
  "key4": "2RXXD2hkNB6FNJNDvqEdG1bnS1MGuE2Mtr1Ck6dvyYTvAWGJip9htACWg2jQZEStwij99AvTqWJuhPstXyCYv5hq",
  "key5": "4xZ3a1Hx2KUX4oUcz3TcwaYWFTJYyR4b1tyXXXyQc6m669h9N4dwAUcN1Xp8PwULY9B4msv1X8zKfWC8dzq3qrT6",
  "key6": "3Cy8APbbWzi5G2iZ4J1gcv47EydPz8wcodjjekLMdhhnV3KgcxZtMq6MZnq6HtYK8vNxD6BYvfGketPXg8bdNrSq",
  "key7": "5DL55u3Cob4ZXTiJF63Lh954PPtZHDyi86aHiuJaTnJA9DTRhsjbhfDotggsJfgHc6dgrkhxmDW5cjk2a8pQkoPK",
  "key8": "2JhVBAq1WVXSnJSKgsAtqXRfXPdKSsLTBd5KtXRVUywy6S6mW7exZczmbDQWVMGf2Umf8hbruZMK4MHme4CHcxpt",
  "key9": "WoByASd1Vg6ou3VtmnyuTyx74eF1sZjZpQPUzkyxkfoNS4cgLEtWiZaFnDr7oFFkYhfFYixhhgMSKGY81M4oE2m",
  "key10": "DGQCmBNnYR61NtYaeeRCz15k63jzQjaiCvZWbNKsq6q7og3LcnGzmiPzc6sdnf2eXWXAB5GuK4QUADhJxw8VVFM",
  "key11": "RTgK5MtHYYkiwMWJALbHcwAvTei1LFRWCgR7LPmVREJANzU8rdwSxip293PhzxiSJqeFzK9VWAF4LRemVhSg822",
  "key12": "5Nhi14uKzV2eS97PQ8rGphdJkRL2zM3e86BHahaCBKtszdvotYECKSkVVdGtdC44WTMUkNggjk3WQkX1cMYNKAAH",
  "key13": "2H7tDVT49rAu5wYoP74BYHVanrz3uJyAuKMH98q7fZHn5MStuUpBGCqz7pgk6crWuV4BWKX8GSmsMH5qd5AgHjmo",
  "key14": "2L5TuMrSm4N8b9xoJUhGgLinCPrfK7hESaCiQ1Qc4EDoRdw14CQKAgG5uNVf5wDcaTQzQEQY319KKpVoz2MSKDGz",
  "key15": "2w1DfzipzCEbhVdUg9rUVN6RRSFRi4ff8zLkGnBt6zExRF2rYBtzpg3BE1y1oUJ86xVpMk9U8zwYTm6wM28nGsrX",
  "key16": "3G4Czg1d2w7hVdZh2onRt5kQo32T1tJFLK6XoRHmHCRwwJKLLwHqaUsgeusSidF7rKDmeBe1PJTydJnu6kAdWhgY",
  "key17": "2yXLaNAtJpuHTSWsYxJ8x7CT9JoFXXRbeAE7Nhk5CCWVdBQ5hgbrDSFQfE3T1u6f12Qxw4RCueEjA1bgvvZaN6Ay",
  "key18": "28GpEMSjewQChdwsay6T49w1DzpTxU1puR4a8ropns1qwhxjzWKr6CvsTgegNsrZNAAkzpdnLv5ou2Efbg9yyH5q",
  "key19": "2y4pYx5T61ismgWnJQepECVq3DYJdinu2nY8wkQGsFcCHRehmMcYk8KA9eChGdvebqXmvNNG51y8VDg8TznrLTfD",
  "key20": "5csCFb1MJMo8kXDSU4Dc8MiDjgW3KAnkwoaHPBNVBrdn8cHJqrenBiE1Wf7rsXJqxvf11kdNzeBu1d5ry2szxLMg",
  "key21": "3EiMYLyxZeAoeUux7W3spZMhzKiMaz1DAhwAJtyjwb6XpHTizojXmreN9wyYSajkvaEve4DsebAVyfYqLDJkGphH",
  "key22": "4jdY6HTfvhVjMz2BW79DnpBk7nD846JcxD8eX3YJhjJJKkpCS1xavtnGBntRR6nzKzyo1UpCRpZnA97cgj95vGX8",
  "key23": "2vz6jpVm4S2yUVEgB8tyT4zS1RnPcNPTjWHnDcRsi2E5tTTFCxCdV3S9MjzpeSB3n4heCWD4mC3a3cfBBs44f5Vz",
  "key24": "rxrGwXx3QnHZjbho7UGxdBbCg5K5j5rgx9kSg4vJhvMPpBmvopVPuuWxpe9g3iKyWjWZXAWjNuWuHFnnxRsEAfW",
  "key25": "3roh4xYXwYJSeks26UxyJKVe23WjhLcm73t6WfkQkRzMfpXewfiWJQZ1C9vJUBZUmZ4C6hLAXUvkGqE7xj5fghpG",
  "key26": "4NcyRnUfB4NeTKWZ8gZwdQphtTvn57kcNEfxTqyYiAtb4qiqsABAfBa7BJMCxzrYKJDhvA292AgeGLp766RehwT7",
  "key27": "2LkyfecWNACVh6kXmDEFfM7cRRw6hnpuDByTspa8WxUL5g9dtpBVabPhr2xmxXXFaSrjGKZnBLwMFPoFFrfQ7qvf",
  "key28": "3BhAeYQTE7AvnMqY4iv6VpMBeJuSqTrnSUFFH37kTyFgnGmJFKVydNtDLSt9FnXzCSYknXH7X2JtFTX4vLBx5Y2w",
  "key29": "NUNnBAqmouoGx3GSNbJ4M2S1SzXKrUdrxuE2cqomtxk34JVXBb9ijv1XwgYgsq4iwqiZKij1uCQA5RKHNUQz9k9",
  "key30": "2VABz5fDTwmfo69X8B5fx5ep6A5G6Xj84qWg8P8nY7AZ9PbyFwnRq7doUQQpjdB9os7NraFMxUugkUUkdjPc9Lsd"
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
