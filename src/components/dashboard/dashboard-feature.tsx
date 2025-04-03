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
    "2BrspppmdCWN5JuTRobse2zUjzhvvgkAyBdVb8MbAZoxqGDwvcCH2yGjuBt6xMo9kvK9pFnrEnPfUX3TR3Nn2TZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ktHzQQ6y3qKyJfzk4fqYPEzEpsbNKGy8nLSATYaJaYVEund251Uq6Xfj2pMnnBuVsChfd2YjbUKqPBhQcptxqLE",
  "key1": "ES8E6WEE6M9zGn4ek1VGW1jLHNvet2UdPYR3ZqE96nUcf3QUjgYL4smJKLkewW3j4qC4ckfMhn4CKC3rxAd5u7u",
  "key2": "5R7pLmnrBNWaQ12V8azihuczjvbtWMD1YgoGZ1b75VrYcYvyhhXWRdYaswyyrzFy6kwVSNWtVaAxYj14hi2BNC7S",
  "key3": "4ai8hi8Ttg1WVxTughbeu1Dmp5mD71S45mUWoYLfEeoyacp4QGvub1aNW8JA42nzrvCEmQZbDeMqVRnS1bX5qKg1",
  "key4": "5D44MpamQb4STCA1ffPGUiFqSX5mbxrBpe3QUNcwzceScjRgYniuQBwsN16HRmiiRwBu32FEycsbE5amGHGxtk6M",
  "key5": "hjoGnKNVhYd86cCzouj6gihPQsXwdzFyinhQQD8THPj4QZyrXVDBqrjjx5ZVeXqNwBSUuFFeHYRa6XX1nTiSBeN",
  "key6": "5xDTRFeffEQ6kHkZXsZUh2s98FLGAXaDxPUvjZevYprpDp42uF3qVzR4LjRZCU5Lm7jR1y73MQ7QLgLkwLuTQTV1",
  "key7": "2zxYJp4UsE9o8BHh7spbzud8FokSfJViWefo2TzT9GpRAW194SFBDxFE5Ga8mZTPZvvAxTubAfkVysqqqQgy4S6B",
  "key8": "5d6nQKnW2xKohgp6LCHDgCf8LH5RgcTi5pTvbiaPktUqRUFcizmFv5C81GngXzZ8tfY9gXssUHgqX3r2qTsdiwB7",
  "key9": "4VA4WfcPiva5kbjUxNGGVfArhkX4X5mfpCmy79UgCmGPYFKtNprWtg1peKSRXtrR99TCcj1tNYPLtnPvRtbtXb5p",
  "key10": "5gGmK4F4zhhjK3kV6YEqSdeUPi2kANhoeXsnEcYXPvifo475YjU59snAdmXXeP3dpwSKGsJ8osSmX9kGfNA5rKfC",
  "key11": "2SKgh9XLgGEEdj5HPQFpyLCoHwTtXLNGn9z2pKS6jHbQxk7TLc7qw48Ltd3WhVU2RhnkP9S32RwTFNiCe8myPpEH",
  "key12": "5n6SGNzo4cY3vELiuDJDCErg8WDtoLZu2MYmkyqnGc4DHEHXqFey4UGiALt4h46E6iVqN2sayrKAZAXCUm9ce6hW",
  "key13": "5sjAfhWrLrdqBSwqWLEaKtgmD5vtrXz2zSGuLYJs33VyEcfNTrJLa2B2aWDEnW9Zk2KfeUZzbBaAKN6Hn7j24NRt",
  "key14": "4LgPZm8mzSbseQUz4xejUUFz8kUVQRyy23kfPoQy8iGMRcevTiCretuqYCYPBCDTevN4UpyLsWowXwd7o7VeTQP6",
  "key15": "4BwbiXcJM5uvXmJgXg8nU8hFDGeZ4v3DiZCUCa1V46XdUZ2u33xujwXKbaRgqo13iQfJNKNoMsrGt3aKDAvyktcV",
  "key16": "5uadWfidsrQoSpU8PedYSpY3c4qidQLuD3wNpF7aeKAb1hR66id2GLxCkVSq73jmUBqai5z1JQjvojfvTCdG4Pvi",
  "key17": "4eDHYbtyWxJgVb8q1eADYati22qEbM85vgkYEhPp6enFAPzPqcd1RBkngc1SCHDj66E174EjtRhk9DojtcQgN3SX",
  "key18": "4ENqmKMd9PrtigWX3bBfyvmLEML8ZNCaGV6gBDvqQAuACamsys9aj5gEQWztGzTC2gm31b5zUDzapM9yS5GPQzhj",
  "key19": "3ykEMFEwxMvntgyvfvaYXV6htvxZSDGNxt2U6Z28WyMmwGZk7uihb2muciiLqArpGFNLoYFmgkhim1GprsPsi9d7",
  "key20": "4aTvfZw8SrbVajvNKQm5qnrVPFsPZEnq7WxgBqeJL5v7kNG5o2rNokEehtvSVsaDMRqcvpnGda5cwMVjQHag1w6d",
  "key21": "5hswg42scYSJ6Pyb4VG7TjWJBQPeS4jBy6gTSMmrwRL27wRePf2fEVJhZM7XCLJfXFGotjiXvKh1grwUjgbx2Vs6",
  "key22": "5MdJ7nH11ELmgfEo1rYtnLfsuESrvjNAh3YZRHbakqZed9QgpgvRQYSLjMumbfD5e6b8g4xPZrknfVxWr1GmxmNb",
  "key23": "5tG6Mew6i5khLfKU5YHSBv7ZdGvwsq4v2pe1bMayRLsriinrVvzdgMKpwjNm8GLMQDHhc7cVxn3CNKRjrqcLRCeD",
  "key24": "9ktQaeCah4YFsCEBGhsAUdxX6J1n3ZwhE1DurJytSBmT5e4cESNKFoKN3he3hbyeL38GiixGZussxb6XtMvmvzU"
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
