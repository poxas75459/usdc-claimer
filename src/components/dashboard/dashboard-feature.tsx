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
    "3KDWP1yERyGSWs2aEuJGJSamXMWfuLmWm7ci7Vk37WdejYpouwQHV79cieYfMCUMKtRNuJhize6zLCfkJRkWTrXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QATeBGFqdHSQgZSf6hjtMUbstsAJjkJaEsReQW1Qkx8Bv3L63BPJniS5yy8ebagaTEwsJsNKGQJ78QLJvsKH4QY",
  "key1": "5TaAkvPbAmuPxDKWNLpcunLxvSkRoQFwarJvahwcD7LK1gCSnAXUprwYXTxLtLLnAq7u7NB9ehv3oZh8u2mK2SRb",
  "key2": "5JWpib3KvTZYX7LwFN9XSFGAr15qAz9DJHZfVMXQfh2AXQzDk5nFtpDicEWHz6sF3ftA1XJYuw8BCmr5A7HnTTdM",
  "key3": "3B2cHAfLF5U1L21iHHwnBSNRGE4whx6bJTxRqtug46vu97wdq2E4wkHATSNqb4H6Rxqj7jqJwdYtCsJhVYCBipvk",
  "key4": "1tNA6BvsF56gnXv3kqp8oLjB5rCKQP6oYNUeja2apadUFq52xnwV91GMkhnKxSQhrGq3FcobWstCPZV1eGbBgQU",
  "key5": "2uqMKPBFmnGe3ahX7TPgz2pxGqAJY7XBxGgAuL4HLSEyXJtYFj3droXfdoLH6ixpuui2GFBTuob46xdGdixfa8UV",
  "key6": "4339AoLXMy5idt5Cn8vvUDh5K99GAV9j1fheAzgd558iBATAFeHY5LzCsjjnNTBbv4ZSP9XuAJjdWMURypoypNQW",
  "key7": "2mhZedQDERaVo5cGa85Fs8sGmwVQ4M7bw29nLgfurWgEqs73fqww8k6R11cX7FhwhfiN7EQwdyCSJFP3rJydvfYZ",
  "key8": "4cTjzL1QnDLuy6QG8UNYz2uz8HiRcwJ5cp37oHzPyYoZkSn25LymNVwG4qSPDHRATKw2oGS612Z1hcNEvyFbczKt",
  "key9": "3MPxjRW3cgBqvYBXAE3xnEv5NVZxcEfVtCB6RbYQwGj8eoUYF7HLZ8hCpNnmVwkuPwPBmPkKndFd9QVJwXYfVHCT",
  "key10": "2ihHKiqUoE7y3RydPVSBxVUEFy5uTWY38AKRKSiEQoJpPnZJKiQbzJuJcrHR7cHXG4KWbwNm8uf6C48gsDpTxhXG",
  "key11": "41UXXNVmoH2HhCNiTtSmBzQ18jmVDKYpykK8iVAKAWE9wJ6dFPYZo4AXhoAUK4NzcgdA3SFSeKB2KyJiG8DCc5Mq",
  "key12": "2jiamEzirvWX7u9RxkEj52ukmsLuuRBmzder4EimEAkiSK1JsXDziS3NTCm4CvfEfQDJpHocqdzxZBEY44LbRaau",
  "key13": "4DJ6zReDNHV4voACnXENxuV3RVR9TobushrqcXbRVnaCLYteQe7amFZUXxJHg2e9RyVUiQ5oFUPRRMqpg3xptJa2",
  "key14": "58BjjnCzfToresqFiPyWdRoq6UmtSDe7s9Xj2sohiJwrFoaXra6rtzgZWJADZfa8FdJwvMAvfNnXrLyGP1kqWds6",
  "key15": "3GNWT2Yefro8xzjf4gNdP5CjXnj8YBHLSpdwKbsDiEuUH6d5hmujk1qc3URjZGqsrrS7Z7D6CaKcAEuAWFZZghTN",
  "key16": "3crBV9ggBU3KREaB6pfRpt9xy1EBamTgeaN1RJ9eyLDxWzRCoDrKtHwQY51BHpU8LD32eizU552CvhmEiPnmWsPf",
  "key17": "bwDyqjXj2Z4hXsdUvkASpYwQhctFBqkbtSwLrcn1FaN9hAGbegrtpDc4FABDcG5R2DDkVp6yf4yrt7Yr6zmdCSo",
  "key18": "5iod2LSwByY6U1J7gZkJuyCnFkj3uEtyQP5pN9P66c1vMeXrxD9XvSJqUqJT87gnRe79K47Nr7xmDyfQ7br7C6vR",
  "key19": "4pUJ5Q7utN3yEdm5uzvvynhipfutuz2N77C5QdS9guE41xcjmZTH9H4BZayXxTQEFTwEKmyYDz5NNKYsd83KXLYp",
  "key20": "46rXu5qofixad8UHaWpeYeH2QwSrBKv7gEYiHiZKnfy2JXNsqm5kBuiXwa8QoUTdN1rP4BDvhaQxe79WDkbm7b3t",
  "key21": "hLmV9tVGwB7PBaTrDJTuqXbEbPKCkicgu2vp23To1p3dXEm8xT1kaw7PjMeyBc2zHVQi4KwwzG1kejSUQpmk1mG",
  "key22": "4cipPRC5Qxx5Nd3XVduVkYEzLeKg79hrB6yTZwNoa5nHuPWHtfQLeMQi1pbgjTxckgRAPvt7TJMorNZx1tRp7mbm",
  "key23": "5gruXpx8cS17DRGXzPLuFxeh8h5ZrDK2wz3EYsL8hsfYox71FMp9vM4YhVFYVJq45U38d59po4bsnTzwPHXvi9Sv",
  "key24": "4Ag93Hnz1SM2j6EyGmXQPX4NKE6MKLL2hKR7r4GmiQ4Kxzbxaabtc5C7Sqo4BoD4RYSAED8iMgibpoeeGFgSAkYf",
  "key25": "3wPrjaCAcZS1Yt5ATqrcXdHaeT8p5t2VhmUZxy5Z4vVDGqdPrEa5yAgqVEoPTpa3qRzZ3dekZs9xAqMMLLhqYN34",
  "key26": "5Hct3XjVP8FYhtNjzR5rUHNpHx5eQFfhtHm7JwpQdBaRtLvYUrCNdHohkxPYF9YQqpabucjR6MzcXiFcA98UCRah"
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
