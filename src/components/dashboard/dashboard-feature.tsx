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
    "3nRNosVwMXPBXX8RCdYZo255ZxCtRgdS7pKEWskpD1hLbYUtULzYXxFrTDX7PqMhYL7N8jQQgkDUx2xDZkxePQdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fh2x2a3DkvpWCssk9SpQmYdJxcMgEXQM6hbJWti5JMae6M6oVz1SruPBZycTuxxDegoGaCPm6QfLgNP8Ax4Kh2q",
  "key1": "51Am4te5Sv8Me8Bn7iav2YxXHnUk6FdpCf2hpm6wtA6xxqUhnwbeUx7a14tXsKhqEZqHTvGkSeKVK5yG1MfcHtBH",
  "key2": "5EhfsA22uYcsgDhmfsSbZPm2ixyHZ15bwHdFquVUVnn2AFMAEQFYPcnrsGzfq5yL13CwCvncRwJF6BfwmWGtA69t",
  "key3": "4vf67xYuVMXMrhTAAGfhdJbCpau9NpB2aaquFKnqYJks26JLnYjki7ipFETcj5WL2R5J2gqFRYrWrGbmjjvDBgQC",
  "key4": "3iFkCqrV1nd7XCUQHQxuycVTcpuf9uPLLFJLHy1cUozX3H7DB27CVZtWcU2kQcmTZdUtNxsrb9cfAaH3eqNws56p",
  "key5": "5KnRkoB7Sepgp3EMu1QkwVhir6eb69MBLmWZkcNDdXUW5HVV1d6dwLRM3BCZHjCqPp2i4yziHNU7PEr6B1QaBvSN",
  "key6": "sq5XSYMj9Z7mry9a5dTk3jxeMd9LbZr7Bn1NJ6hDoSTjFgrE9jpinMprwu9iH89wyMKffkfnE7eYohLs9VWAZ1u",
  "key7": "5fXeqsAd9PwMQkwszqCriR9Qg1utVTnQj9X4SqJ8uEndu1jEpcE8noSpT3wyF4SYLw6cHBvUfqW5Yp7GuZjAoWra",
  "key8": "4cvMGuHS2GR5i8ntvBW36SVkvjm97qkuhWx4ibDpyZuyFJGjZzt6Vsc1FXDRBjxi3ZFwMEnJzYFU957UKkkaLj6R",
  "key9": "wrBuwme5BUVZdgtwPfRASYyFXtt9gnbkLZy6fXvCTLCApcMkLc64Z82HAJQM52uhZxjEVSufGbHmMyH3wstHCLs",
  "key10": "2Fw4edn81tKosH4SaBF3PWKz9n7cVYMsh7nqKTcXmSZtU2eetTC7Rd9n2fJuSnwuBcJ7den7LgGZ4gHkTTb3AhhY",
  "key11": "3synoBiz9u815adEdQsckA437DCzWhd2mvVQqcqqcriWMrskaqGHDTdSPw9itpHHL8x85rXzeRNinXw1cw97EJgB",
  "key12": "3X97LUatP3veWHXsr4YeZ7dR9yHECwV9KVSReRpqJhQ1ZMNMydpUif78vph5CLSgVKDggBrtLoSj7mTUPcEM1aZT",
  "key13": "2gcssY1vtJFxLEaHDYue3TzkYJ316xh1hkCczSoUnHheCXRuDoadhnTi3T9N4wGzzg7qSEbU46rQmq9nHBT3SFVu",
  "key14": "5xEfyWPdtRSY3U1CxcrxsmnLcc7fmGPo9NcSYvnWJoGXkya7R8aH6dpv9VMvu65ZUPDF9cxegjJeyCocMgvL5i42",
  "key15": "3iYAuR4GS5spwYLJEDxEQdgmVFRh4vfxoitKgwDvT3Duiw3FWxpioXHx1GynuhtCu6fFbr3MTU6iiZJq9tD7orPT",
  "key16": "2bBrcuZYnr4Pr88kmth9nrGq1iXmMRwMZqwW7LZAyTaq2QhTnc7Ecr7J4e5qErTJW8vAgDvftKsiwt4wKuijhKL",
  "key17": "4iNocPH6vjY6TEDBFFqFNMkDFYiV6QM8qndT1Thfd6mzshdmcCxZPyuHXXrds6o8Do2ZCYpKAMrZrfhkBGEubvbE",
  "key18": "3jJKDkenEiao6gWoyD393NiiriJCeauVhGPCdXwBzoWVRcUWt91j8hZiS5i8AMS8svJ5pQdP2rinhDz7N1z1BhR7",
  "key19": "38b5SPLZfLX4cXTSqXpGa5ixHUqRcUcCTJaXKcy8p6dtJaJJZprorEzsCSRgkseEUXxEwEHug2cp4WAvh4du2enV",
  "key20": "3mDYqRV5VNsioRxU9yUpcGjUzjE1xWDb5Yz16pqaX62AZAepV3S7teaFcg3vUvmMqNfLubsmhdyonDnfS1KhHZE3",
  "key21": "3RFBkaD68BzDbsYyaCyGysUa2gynByoqJKvhnnMRpD4DkhsNYL29YXjpyHvEu41SgnWTvLE1TtkZaRxqGZPw87zN",
  "key22": "5XJ5BUtc2QyApy3Le6vokeKaHY6XAsftqbFLvUnx5YCSjz8zza9oB5jDovP3oSrEvjuQ7X5FpjFq5GKotQzcwzHQ",
  "key23": "2CQKUVjAZHVYpKZgapZnH5gT3XsBg5fXDEy9WPapCRHmWHR1ihS1L4Rr8gqP5oGJT5BpgqEJGqpgx8SFD4wfcnLe",
  "key24": "2SVaNazxU5DWpdJ9PAjf1QC3m7JfCnenFUEa23tFDUv13rSke353RztqEjGeimA7VpfJQVUEsVrMG5TqL7J772vk",
  "key25": "5u1fFMsYjQHsBbFTHiu7DX5VUkM7MAaTN7sXcdBJCftHXgoFVarjSj7fNuBiw6BxgKf249dVaSmUGR7Q5soqZTea",
  "key26": "5wEEYFjAtxkqtdnJRMVpGYRRU2isik3uwG2zXTQ463mqGAxnGDeBoxgrjDkXha8gt697EgMEzuLxHjVDdaa2jEw5",
  "key27": "4jGnjFZ5Ksg3b6XjrQfjLsXBZzAoaTypnNkqkzkqxJGw6fq8RkDMjNqGZdmMVegRT2T1zekMYuM4erSox49SMCTs",
  "key28": "2XcqPxiNumeHKKLmcmiwGwWLZZFC8gjmqWEgUgcpYjNU77haQFHgTKTFgFofxQCL9pKj1djTPPNeJDe1BgAdxYGR",
  "key29": "2iwN1bcZ5KEVwwwFriTkwZZd4NVEWVaTtQYePe56BZBpnS3zHw5ixiCJikoLHQpSqHuRNJZrHcpzijRdRzX7EVnb",
  "key30": "35ywqrjMbxu4fc3L7D1UmGvA2iXBobYPGsFZWsBaQQxdPrjwErgpr287pTcETD2PbmmLw96FSz5nyQUgsTcLTji8",
  "key31": "3S1WGJa7dToa19yuG9zxnQD8LAN1bzubXFuvgYUQHEMYUQPjBYxjLYPwGkscFMgaExKcsmMpQgRWGuJ4nioUBQpp",
  "key32": "35uyR1haZfssyWiVBxN887uga17Qw83VbD14P7Jk6ZGdM2HfS2A4dNusNunS2UTZEUeegFGdK1QUxWkWzexCVtzY",
  "key33": "2y1F63KPqGWBfwodFwSLbv9C5s2FgVnFGJDfP9REp788YTCNuM9JSkFLgtTJBHBD6gw9rnz1AqXsfZFejePf9sg6",
  "key34": "3c6hmh7dZFHCF3cKyZy7Z8dZwJ4ghWdPjBJpERdbCLAie84aqcVrck4uBAZ9hT7YZh19djcAfhr1ZnAwtaSoyRQ8"
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
