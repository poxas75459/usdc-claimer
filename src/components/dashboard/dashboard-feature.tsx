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
    "2TwgcLtnwLbkAo7rmrzHxSQNWXQ64tg1e8F8zNQCRjWiHZVGNGVJBJ5rrEsSKDSzrB53cKMzhonErWc1r16eEXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wKdtaLk49FfjNVWiu1Ns2kMt3gSgjfbkvcDHNcFuQ3uArhawiRfHux8d5yPSRW7ukBFVLzZC8iEM8op5i3fVyaU",
  "key1": "4gxdgMFVpEtA7BwSQyJAndS3MgCpyaxxDd4rfWzPPvmSSxCB32SndyJLQFQrxkPE4sdnXgHxz3TaqvhW8jcFpdxX",
  "key2": "3YbV6a1H87qbjG8QDRBk3TzHXqyVivD4uKzQXQxAM96stV7qMaE4TbnvNqPiyCtm9tFT9NgsywkVRTH2uZz6nD7n",
  "key3": "29amEfGP2ei4qapPdb5n762m3TTEza78DQdgKiGLhaAHCiSP3uMN9mciNpVDtPobBAHhye7gKdg9PFrb9HGdDopd",
  "key4": "CCSRJca8nQLJXpAHVAhmuo8Y8cJSdXMdErWpULsFJoXQwPaKR1bvFSmV1jmkyd7VNh8p4Xd8gFdQjkRMwfTWBE4",
  "key5": "2L9mq3ZcDRAXCj9ujQVP6dvs4YUodpwgNmDia5ZQFeSzpt7QLHjREmcY8q5jB5iky153D3zR6P5sC8tDEsZPDv5s",
  "key6": "4eKwJxdVZXshSmBoDh1FbFwK6ucnZcJUU1JbscW5pHnGH5f4qJempZSQEUqQzjK2NrsRQvbbBQh7puBi9x83Jsi5",
  "key7": "4pXvVP52vLtmwzVm2LxaJobsvE3JqdJJBiWzMcJrqp1WTsZM8Ub6Ztnx3qeST3Np2tGCApwKBzLWnxCZdSNC67Z7",
  "key8": "Sr2TmLAoeUaPTWsePbHn4mKEbnonAkkfaNz6VdDgDuAMzJkqZmUE9DiHZhiXdC8ThHs7tpFsM2qN62wDLcYMnke",
  "key9": "3V6mNxKiS2V8ZoPQ9ZPgSgBipbsJvAoYqbhdWSBPpQn5yTCRY5Rn1R9n5TvVqABdghgM6ARNxhnKn7wWmWbeVrDL",
  "key10": "43mDNH8Ud43XjN1bqYRMZz9vaaHMUUSjq6Zu7V1qqvkZMeDG98H9s23p4BCkNXDG67GfBJ8FJosFzUzjohRs6ohs",
  "key11": "cP41NjCR4SYDhBkYMGMbhtGeyLvFGfdenvcQmqQxxSXhENSQeArDxbjkUvAkHc8RJsaFYjEaoXRd4ravAnrPKNe",
  "key12": "crSWcAzdaXneQKW5y4puohmZr1onyVnr2twisELaEBztEzH7zpZyL6Y4nizwJRUWbP1CLgzUjfmsJT9Se7B6QEf",
  "key13": "3Kikv9HrRKiUGfZEibZs4F7AuB9xCGZYWjnhzMzeHSAr14WSJ3B3egw2WdBebVwFmgCTbcZi18mAYHdy6qUQ2ru2",
  "key14": "31kqQgwbGEuMPmPWJho8xNxDN9vp9jyKbzxFbW53wS3mRJh4B13wXXCUVKntKKvWS37mQGs51sKfULLiqY2DWCLM",
  "key15": "2Zdf9NZKwwFZWEYE5kx9efX8zudkkKLd8tzvYGeX8xRz3EFPSj12NtjDyueWseYSKEsy3CLrSXNZTyg87TGJwYXk",
  "key16": "299SRnbZQHsPcwRZB4vx1xFtJxoQE7Wrpco8cJ7a53RdBm2vvnbySUFyA89YqMJyCe4LXzfZNGFmaFBSkLrHtpMG",
  "key17": "2bkaezhjAc62CtFq531aFq8RxT5sLBVYFpmdjgwqnwSh9mPumBoMGc7Dyqv5X56haVe7npkh4wXn5MsC8ZRv4vW5",
  "key18": "4q8icpAqUV73hz2jKkShpZAnsc7CSp9cLp7XFBNYRqE6tQtW7fmbgDySYejo9DbbuyR1DUUdrS12D8RrhdMQiyfs",
  "key19": "3EcEuNf6n6uTZpRu32mjXzMro12KK8qdYo5SFNwYgL97nZza3UkWEkW4BrJ7ph9iQTHZQ59As4HBMe3F69zGmHgE",
  "key20": "2xFfjvQfvQH6LYmDUws5YhSzSF5ceZTf9MQFCAFK1GPzDW7uQiNZmGUxfgpmLvKTm7hcjsmeYuEV1A2zXDjph9rx",
  "key21": "3RzJJT4EEC9sZZrGQBwEXqPuSiAHZmAeRfprLNBA2vHMzPQvfqBZUBmVesKFMpYNwdUGMrYJpnitn12M9ZnUqJa6",
  "key22": "3zU9aTQ91E7ZH2aSc7uyiBCxGgcBrXzQtVjXoAVG3XWD8Gn9ra3YDsQf7FtfvWByfyMEMXbTSr9QNsx2JRQUP8x6",
  "key23": "35FBef9h7fxsS6Yw5mU4VH8swrBpBY5T2WQkAJBiQ3AC2PSMRyKTX3RCVThfeLJj3unJM7DPDc1WpxLXWdaHhsQ2",
  "key24": "YW5PJktyw56TKeZEuG3td3xy5rsyNBaokic1eHGzjjnVJ3p9uktVBdKeRD5z2zoukXnDBMSW1raoAZfqMSzVJHR",
  "key25": "9rgnemuorBQyVfFX884XwXE1ZD6aF57c7U5guRY28Qz9gMPuJaLNtCTDXQfzjsu4ZisVW76MFQDEgfnuyfnBJ8H",
  "key26": "3w5GL2QTe1dD4schFNYhyfqjJGmDLjrKqFhAWavTwCPeRw6TBykYVffehpi4DCnLzzCqrbwGmSDndsJ3hf4F1WUS",
  "key27": "5YUResubu6qDGMSDbpSWQob3UzEMRYUGMJ32NYjEgdJ2yCxuaQjyWSKc8ThPxJDkdZMdMD1LyhfEDwr27rZwFG1b",
  "key28": "5PPKuZku38eUA4cHNoZ74JxFcmRWVCQzWSgkEKstmqMcDoGzoEM6HP2MYTHDCTXts5pqctXJdbLrc8y7t3YRSzKL"
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
