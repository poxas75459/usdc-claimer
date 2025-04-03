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
    "3nnECAXV2BzkoKjZhoHeTajxVWBtaeJmFkiKTj9AZeuSzUii36j3JUf43Lzx4fZi3YiHAchae6NJe1s24Pok73Bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32VestwcgP1ad2yF3gPKk42Awi4nm4HeLzjDyWdAvxuM7BBYUsyE2mXRWdYMSCFfTsEAoe4nhCnVpCgeN3kLpdEc",
  "key1": "fSBww7wqbvdf6ZFadonwDZLJcYs8yTnkfeFDSTGYHBW2abuBucHcUvnWpR3PzfvAmFDBPhAa71mff6hbsDDCMQJ",
  "key2": "3y1F1UZJuoKNeVkBrFMKkE4fnCZiXcMbVkK7AZjF42YzmegJYCANizUZBWQtGrDCGekG1GtwV9mq4oNTe7x8wpKY",
  "key3": "8mzHQ1wt6f79rqHsQcHfJVh9M2jzyMfQVXDZxhsw3viZkXmVbKhHPaHtxNQpPfPf1E8LGUEXesXng2TvKoxZ6de",
  "key4": "5nSYfuK6ifizh1SLqVJuiBnZFZb1tvd6Hq4pTRjXDvvQP8UiqxiuXLJsUXHtfRieakD4EDoVu8Fbr2dJVyg7Gba1",
  "key5": "38X5KFWAQGWsk8yq7HDtGpHnehgfUKbChRJEgpFDJEriBNvvLC8tqyRW5NkyjzpGXTmyZbN7qk1utXP5UDMGApPi",
  "key6": "5aELSMPhZmW9Mjc5oN75i5WxcHj6fQ1ycgJydHCov1Byp5VaF63eFntMFhZFJUcWHTSB45z73BTGNafrCbvFyXdu",
  "key7": "U1oQamX8N9y6NG9G5mkZ9kHSJRJ7UeBNPt1ZTze9AN1ymqcMTXEk7Z63dDr9Ek3Ra3kA4He4fjqk2m5h2fQLZJU",
  "key8": "44oT4ageP2DjH5Yvy4d1MgW4mW4u3Tz6mH1wJS9f9xNs3kqQeZWqrgSZ9rfsau42jXfT78phwbQa9EGkwsvxUjyy",
  "key9": "3o7Zbor9eMr7q7skAL35rb6JTZpDLS9oMzkyQdm18Y7saGsJCZj5MzqT5dYDBF1besh5biGeiSXup5dMWzXKEumR",
  "key10": "29EVzaawHGrSfcozNXZ2mJ7UkNXTA6i7q3A7k4nxH4xYaLonYi8evYZ9CRGb2PJ3j6NFnHbHJAk7UeTCRkwrowN6",
  "key11": "5fe4gTC2Z8trjpAoCvuFPVuWJGgEw4GnT7mF4nksPQb1ps6ohUdQ4q8jbacUAvBpzztr92TWjF9k9diPea6MVeX7",
  "key12": "7XvyVwVm2hhSWVKdtSGXeeQQ3BfyA97dSMQNuqJyuRbrCgJ5A79UZ2aZLCvvHqFo7QsEjnqtLtwBs58dRq5txid",
  "key13": "51XXTvEmtMXiCQa7eRWSg5HXfiTqRtK8DmSqavQCCB1ZzzFC2EpgLSSgSJV8vCHqoTp94VYkqk7qXEnUXbjCiEjD",
  "key14": "45d7MpXjKmBUggXoZC1S9sg8FUacMUcdE69BDfFrZxYfSnmYPQceUEZD9RpvRUAYq1Yw9BDXnug4VGYNGJ7ytVzw",
  "key15": "6a1Gw7HgCG41bcsg6c9eUvnZ1tG6aeFXqGpTadts38DkY9n9qkBjsfgVGFqGrjmweuXVLKaTvGrgsS5d9LRArwQ",
  "key16": "4qG3Ys3mnYVCRrHqSAftPo9YVZHEJZPwUhpv2B7Nkx6qELVkCKSJ6YafivnxVmW6GsU8fSEMpUtA6BAQHzCQRnVZ",
  "key17": "4TH4Bw2tSMMH9gQPDoLututez4qmD7k53LRYtG1AtNe4GzS8BZ1jA1SA1R2GhTyQedasykEEecyVKXJ294rThdMQ",
  "key18": "5DQMn8tvfBd2LAxPmugz9nv5zKZQuBmAVB2i5UozXQKt1debbpWsAHHuNBZm4dXyPZKWMDFytuu6F3Mhc4bFs8ph",
  "key19": "ArnN6wQe4M7zSPMhZZ7bu8ng1GYGju4ieksWDcNH7V6wacx8114XiadRHyFuT9RrXMKsxZKXZr1rA3MPfAzPBvW",
  "key20": "35VuHg7DDred26GkrN6wbcqmwA3rYo5GQRJGhPD15yQPs2A58ppS2AHmfHfviMv1r6pTDo2EpemB4d7SvcrrCBhs",
  "key21": "5ywjJL27cxt323vyMXw5gB7nWecZjrTJhRxFQBpVSqkgo6YUXwdY16cj728LPMJxsbMFn2T6vF1bSe6rqRr2eXSC",
  "key22": "5geGJHskDui7PG3ajpGMoeJbrYe1WaxJvvcnZ4ZaQPduqo9CyYSSVsN1d2Y8yE2Kfj2NQD77UeMv5UdWSqdT9NX1",
  "key23": "53jmrXoEDESwP9dyeSmm4vAzFPQqpCSw79o1Nj8SY6kY4rKDWERyzRQWdkmqtojKGpWv92dRxJJGpPHEothixpzh",
  "key24": "5FSTEp3mKuNDd5pp8dTdWWupZMVUUh4HSm8GFQu1SZHF1qL81Rb4BgbKKC3B1wVUtc7FHeD5v8QVE3eGbVc9CpMW"
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
