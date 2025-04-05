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
    "xmdpF8imACPDiUAHgRF7C155QJCBZvx4eLdXKuPWGpYNV5BF32Ahq6kNqBZm83Zf2RAe7Aojxhz2Bt8U7gwNFYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gWb2Ria1DuL6uoV8ENxr5XDvjSihYskGUhQ7pRuhNidHfiMBt7XhSqRDooqXTZTCkiUaVELw82qJauBdT3Me32d",
  "key1": "33DQdz34twyS81axLmD4Tm1Hw4PcRsBCbCN8nGwfjfUBMPCsc23ELGmirjjyDVJmj7yaUdbJhARzg5NWAyZCks1r",
  "key2": "3K5mzRV23FRTnAPmRxNng4hAXc5cgvZGfiimWcaY7HMAqEp24N8BQS8gHjP4gM98gkkvmxb7FCaQTP4drnuDYBku",
  "key3": "GZmTQxy8djPQDg26nVbQAFG6JxKMic4HsMTwbZHZ6cEEmoCRPvtbvcTofcZ4amq5ppwbcdvnM29ovhHAkzCBJfa",
  "key4": "2hDQYPp26yKyFC6jWcw5DqENazpfhNZ6b3qieWSATiJQ1nw1nYDYeqPLdmEYsZ2xVd6v1Wpu4C28oB51yLwkZVDa",
  "key5": "2qWmErgXCmB6WaYWH6PqqTPMQ1CuDNVkdtJnu136ZghStXwmBYsu5vCpj4SyTnTBB2rt6Hfj8AmiSZWMs1DqmR1g",
  "key6": "4WyBdz56ktHUmHzMiJRR34SSWKZkBfeb6hdGY3ExGBt4nEWkZGkkaAqvPC52yPPip2fi9ceDmMNaEogDG7uHkA6x",
  "key7": "3u6m3oeL7H9UeM7FJFxorAzKp3xFVAuKpFbvRDqY7EQScRAnQDxqjio7DZFFsSgrGFZKTbp6uT7R1CHkAfq2SFpu",
  "key8": "4pzpNa6pVKgiHDhny6g4CyFYb9Gp98dwztrT7LwnMRXQ2RYCTGFQoEewsh3V2sxgKqnHAH3x6aZMLX5hpCjmGf51",
  "key9": "2kX3fV8q3aSCRZHHL3xKqkQ4NzCFox3b7XPCZ9B4wrueKjdQK9sEZeBaebqvWS5S2WuX296fc9FSC9tVQmc36bwS",
  "key10": "3aD6sy3pjgdPnBSLPxVrUNQtq1TJL4AvauNW9QzvV72dmqfarvavpQ8nPmcuenGqJAyAegXNthvhznWKG4nKXazx",
  "key11": "2SiJ171vA9Vs35ZvKeesSN1bqirxXpy5GZ1WVwez65FLWy1mTrRBrxDrY2xVN11goVVHag4jc2QKaaddFJr77Mpf",
  "key12": "2Zo2seZDbA2Vd9zHWBK3ebz6tLzV7ddt13C9xNkDQyHzjHAVj3w2yaD8MGLbqbGNCgyVyYZKvZTgZtueCwyv8DUR",
  "key13": "3mEcrrgA2kzCJzPVewuXcQN7qPr2XVe1u2eaWfWY8q3rH28G9ZwKngKQB826fHsA6uWqH9adR9QfnKjGsUec283s",
  "key14": "KnHcgtBBGpaLsfRZdVcJR33CYEUGh5tPUgMkLoTb6SqX22cM6A31udunyQqG83TbBH41b1bHXucuM1VjCYchQjx",
  "key15": "3swcFyvrmw4knxy6VMvujWrpAkk27fRqGrisfWwqWVEisbeVH3yu25KPyGwP9VrQQQb3HcYsVMXaWEEkvrPoe5Sw",
  "key16": "rzzPpoe6qAWwVUaX7D3Kqem7qQw75epDUZ3SsSPfNFQdv5ZbWQp8eT6qi7Bchyw1pn3CK9wLfNr6Qb4ACvWYoqD",
  "key17": "5BzLPFNx1JyNf9LQyrxVv5SacQe6DFTUD1ghZ5gzEpULFAPPubRsD2A5xdrdSegm9Q9mpVfTVF7pEU8j73zFA5X4",
  "key18": "3gLBfmZJ6k5LBSDLzvFFH3FJFzKt4jyB2rxBUcinqoXovgBucFmKQ5RjJgDJhYUfFgyxHQGpUcr9jZh3iTFbATka",
  "key19": "2EDrPSMVdt4XpJ8LuanZPhQsPaQEdNTHt5PycPNmcAN968tn27WgrKkjroxk7yw2q9hW44bJLkP4yrV54QN8rBNb",
  "key20": "va8MD3sfvTAgt2JVx7wtazXAf9Pf8gpoMFPyJNwgTUK8VSdT4PubVQ25eKxxiJk4FraoUZS7jMeqQc6LmQ5ZLf4",
  "key21": "25jp8Jv9eqGYmSzH1pdSvBsYEv7kYZVdmjwWqFzGjxWM3KxCdz5su35QVokpUxd56tGBSoZciDWsPV7w2rrpbfkR",
  "key22": "3WyePNMEfAByUmWaUaC4jcXnM1EdQa6ug4S4AsTY5B9LWyzt8fqWe4vdauj8hYA4iwNzCecr51iYaw81KHV4W4hJ",
  "key23": "5PPXChPgqtbNbhkpGQugfoDZuW9NzqD9yQzeABAckxYpSpq2zqjn7XC9zXa4eqFtQywesUTHxQzti7cwB3XB8dQ8",
  "key24": "3T8Z6e5Jsjp9in6HDTGeWZMNwyaXftooubeKJg5GDGgSomHy8ArhSh7BGG41hmhviMz4jpvdUpna2U6fitcpxMKk",
  "key25": "45qbVdvbkoCAJP9GT7Qbbq6r6o3q6JHxxAJenbMpL3xaf6WCiqbwJoST5EP4oYM3rRfLWXz1BctaZAQWjPMcchdE",
  "key26": "2mrSoJ9MuttXAUUBSATW9inAzr3qJx5jQHZ3RkqYkoQqDHBdNvSsnvwVmxxAkbWyWeqRUziXnrBudehQiasqo5Fc",
  "key27": "5ncZJC9MzJr6bPtSXWBG86jYeUfbu8D4hnEDJZVioBZCpygR4QcDrnTZZP32664DW2g25C9ZAqULEaELQjmK7qEC",
  "key28": "5nBRiVtLiWc2QmNvu3Pq6zoNg3vPEKRpqfhJoK2gLtePKGsNKdssY8gUZqnzveyrGmB49vMMK6fVJCYpb1scTQHd",
  "key29": "4z63JtxrMEkp89vm4EoiYwuitFxk2qiv5kbhRBf3wHrU7q3XgWjKALJF1hB2H1Ha3mFjg2RFDfiJhUVZXTb9QwzR",
  "key30": "24Q7TF2mk5rSdA8usi8eoG8hTL5eCA7CDScR3xdXrs3WEvYVCeunqG621TNrWx9wsEYGcxWHrQAh7zhoHhQKn5dp",
  "key31": "2gujCSrE3qY3VyebfB6HhdUSGoBvHviJ2Fdnd7ULbmGbLZxEzreWGtBKaYusFwvFSE9DVVBZ1YohYYKMy3tft8fZ",
  "key32": "5VhhTycz1op3Bz54DXktKsGdt7CZXu4hWu5fYuPN1e4AUnMdQud94p5UGiJBtjjE2VCgYShEZCGLCHB4ZpCuj6bZ",
  "key33": "5X6QFuoWBEX2tep4pJtCgMT3iBJaYNmeQwbGd81w9318QaghswwNfENWrNKp6PRqK1CwjHegRJqAszZgMZiGrsbZ",
  "key34": "cQAwAwtaVHDMzFxb5qyUW2KS8cnHkLfoYU9gmGAKZdJUNy6rS3MqtX4JR4xKKpZTYxhCyNySrdBJ1Y5yJcym6m4",
  "key35": "5cNZ3jRqz8LUf6tWHMTD4weaJG8Lt2pW6D8TbX2CZR7ezJW6oQkKQioypMoQLHGqbMkbgMRbMqsHMJLpwfR5R7nQ",
  "key36": "pxvpC8gMrZ8tNGDUpCEK2WUL8tqhFLe6v1WKf5eyKo7EPZiZdtjo9n694x6MU6GRL4BJgdT9oeAr1ke2PNxiF6h",
  "key37": "3tyeB1qTfqDRKLxdGB8DwspMHaC4MjCESZm2DMZREMNbiPvMKURESVNNg1hC9wmu4NR26SDQRXndDfcjkvFcKZRs"
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
