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
    "4GhsZ4yHABz9VryTkxXyBfwcjmNyYjLLmwPrCvQEuWNEsJRN6hCmj12d24zfD5N3mzmV1pVbqWrFFu2rymTYfQg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7wjjkGZ7fnpKGDiy4KSU774WMHbA7t7aYa9MgBHzTN3J14M7Tfz3kFceTvWGj2jG7BM5pPCM5rPugctnpVN3uw",
  "key1": "3LDJxuzWxgxebBhLBxZSoeKEXdPTvPAwF2nhHAMnBke2f8GSeXANVSdyPzeWnwo62icer8kKmLEduQVdJT9Zayec",
  "key2": "55Tf9ofnyf1AG4JzRpmf48xc3raan67gnn64q9GfWx7sie9DsEdX35Z1LaghCZoGJxFpetRUF6h4urE5RxcnDjSq",
  "key3": "5uGthbbTWEsN2SgRV5txw4i73nAxYiYFwBrHhNJ9ArNudNnpR6ubS5jQUph9J2qdgKuWmqpbrN6aNVaHQnJMpqUs",
  "key4": "32YZeX7gft5vfTipMYNRhdLzb26fhBApaHRtLaiiz3Ehvg9VL7bJgrbDoVbgi58u4y3YnDEPomxNGhTQ3xkRr2Tm",
  "key5": "5zA3HpQKVugBc5TVDegLaPGpQ4kr3CzfquJXd2zZAgYY7S638fBYgVuM1GjF1NEW6G9szi6Gq8SCA28h2boEgtGA",
  "key6": "47vYGzkvkb9D4tCTwRBXo5wBA41d5EwmVW3zd9QMZrb7a12ruQntvUWoK31mq5hSUESGZU11QTDFWT2eK5gngvvR",
  "key7": "ZwxvjMo9yLMkVjzm28gHD82hEPUbGNUxGbkjMqDaGmTPnSjon1kex1oQGzKBW4junvggkjU3XuTrfKoZh1YTzVT",
  "key8": "2Gjw8RqKAg5hRxkJnytkVpApWNakNJXBE6xN9jizggqY7e8touZH43FCA6x9FMAAtahuXu7rwB9spMUQ6H3knHBu",
  "key9": "bxjgmZbzz8HFTRhrncEKnWkjkeFUUHuxUSW4noQ3xQnkKXAmEQgnKJeGbiWoWyKEtCDZ5KpibofFsZMnUKh3FWG",
  "key10": "2kyiZWjueg6THi5LNfh8axiksEhhS8qxo8orq5NiWhTm1BvhKHx4ELS3LAEMLkBAXmQSNKixrLPHSCSuNKdvFFqb",
  "key11": "2XUQo8ncZka7RQKi8yKsQ8BemG83wwNFfsDi36m9Ln7aKZY2h2PZfCqnGDhWFeos1wRa5Sr1EUCrPuXnDfKcaFxS",
  "key12": "PArscTuh2Varmdf9xEeY9wZXmy45Luw4rzcBzWLYQjWDUNLecpTyieTPqnjjkNkpvQGe8SrWA6WACAZmi7HVraf",
  "key13": "3NdpuEx6ke3HXRfLmSxC7nEaA14Y6KPgu6gxzGd3PxRWMqifamckMec5LjbiMx1f4y5L9N5v1Pju9gNUqoMpKsu5",
  "key14": "4ng6vCtFRowA7kwN4sU4NayiHKRro6hEQdupMdEoraMUAinr1bfmNi4VtwpUKTVgsgiaMYfcqpjUFZrdRmWyEtAC",
  "key15": "349U34x32wgrwsmD6GcGwSGSZ4KsmqfPggTnvw3UXHRoJ2WZiGoetJ46NfzuYuNu4YK1JHF1B4bMsduah1WvdBN3",
  "key16": "3kZUCxfEAjokACpeE55jD5NtjEFdhDNgvyUMmCfVzY13VGy49JCThrSXkaWt31Tw7KzvWuPpKiNBu1qdHJjt9Bi9",
  "key17": "3yDViCG6jW6219vH4MBfGezrJoJWFGKUkF6JA7tiAqfLPMuTruSUEK9fkxWJqSB8GxQggAXpfT7LYdDgDVxCVYS9",
  "key18": "5jjVe1BcNYVXNwh58CBEaumrvr8vFBogBKhYgF8HUM9T7HcFReJXz7FBCgdj7CnFYFobRS7nPSGzqnw85KN7QaTz",
  "key19": "4LHh7vhmC95d4KS73QmfM4nfXD82e6vMdppmobfEhGeoDrb3WB5X5ndT8e8wDKmpPTYwaPijKENHxzCBZdEuZBqN",
  "key20": "4JdnxKGEWd326k9fhw8zvNpsunmu5KGTFYD27TLtdM3zxrkwpkM3Mvjt51ZNactBe65Bc5LRwv682y7tWvbmcyFG",
  "key21": "62uwvagoRWZ3EKBAdC48D2VGb9ZQJPVVJmGNr14EqWbxxgsrdi91v5mPsohQ4jdEd95aqdsx1oWKZSc6cnp4a16Q",
  "key22": "2CPi3BsiZ5JV22dgU8phehJLp29BHLjXjFG2cq6QFC1vKNVTWwamF645qGDPztfast7jHoC3JWa7NnPukdThTcQH",
  "key23": "GiqzrZYSHU1XMuwJ5U3m5XyuRM9QKeULZW9df7CmgWHncScVJt2AANs2R3XPu6JTfQiCSSWQUCwCYyNBAnvXcz4",
  "key24": "5WtEVV6JVQje5EHasPYu8qfXSBDc4D5W9wrYCFcydtsmasR1GiALscQKBu3jxQeRJkiavLLc82mvhEPL5YhoDXD1",
  "key25": "gczXWNpyd3dC7BmAgoR4nLL1t9tkcmbVWwsA56y81rzMxUdi8SpJJP17mA17sSFg1L2tLXFArh8W1eRyouJyCiS",
  "key26": "myytKPKoY86jFjkdp21B3M1kzG6u9Wz92HQgM3g2JDLu91mLEjpKhMjiH7Qy4m1FwjTrda9LQkNSuJvsMDMVhT6",
  "key27": "216AZN7EVVQBgpxmkvrsrGSGFTar2qDWACk8iDYEqzxkRu2w2rmabE5YiP52QiiZCczHSxcvAeewByhiWUbvM9p6",
  "key28": "3RQvM1ax21HchFTKL1PrAAjiXCB7k1rVFLPyqvG87qBK6RpVYaZQ5fqf69zepcn7sn8MXM7tKVqrDPBbxip2sMuc",
  "key29": "qBTxjYN8y19q1hUy642yv3ykyJjFxW2V6GwV71v6zTFaSpnkC9mA6JM3tkZjehXDoxqaCQbc3nJiVzGMYnKPfgK",
  "key30": "5wTiWp5XfdXbKAJLNBkQoVhcmRPj3QX1EgWYZAHgn2mhbf9Uee8nfPdtNMFxzziAcXjntuWMmMtuaYG3kqyjADpx",
  "key31": "2g4PjbqhmNNwDhEVQ4P1xLFHKopVsW5GCHFYc7G7ZeETBnJCMGUJ8Q2HC5h4o26VCn8m4drSMfFTKKv3p7vNGALo",
  "key32": "4oJEKT6fLk3BvzjAexGGfRhQEpP2GQWB4wtet6PAsu5d3n8VE2qW7jaMH3E8iHsJAgRKVqBvt8BXYP71L7aaWEyb",
  "key33": "5mHZriit2eySohQnaA9r6JVRLodo5dJqMW9v7waUpLkEzuQQmf2PqyP1WQJWKY4nky34Lp4WjYuShX9FD7dT7mWD",
  "key34": "59BrPxHxNSRT2uxFE5THNkipDUy2L6b7RdvzeWPSz9Y5HVYiPfrsBfcqGV3dpdjVWFTxHzt2dWwD1B7pAAe7ZobH"
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
