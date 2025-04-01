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
    "53b9n9es8prv6E4g8pZHvcaQ5VXfkQA3UNQYc6WyNCchxrVpNUdv1b2UYQRBHxwbwgncvzMBqd27xbKbX4NwzbLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oHrrfEKLChru5SJuF1d558PTqAaZgYnbxwsMLHHb9XZqZBqdrR8DM2rS3xrYnUo3ZszRSzggRjd8VJt9hjFJ8cx",
  "key1": "4W8QJioHifWEFCnw62ML3MYzB9ju2wrdx5AXB1t9DufrLHcgSE113nTqEFXykh7pcbtrDQ66tmVBZxyZfMekxWKJ",
  "key2": "EyFrCtjY5mhkVw6ecycA7ynXM9XzqHkjCSHLZNKmg4d6zfRCDWjssPoFRkJRiTktxHEyqEdoGhkzQ2HnsNtcGYQ",
  "key3": "2Rnk1nobM3zk1FBz5m438pqs459UnAtfzFMXuv1zNQ9ZzsUQ8QDknViZLxpJTbXXEE4h5tgqjSEt9xajBz4LBWLG",
  "key4": "3qp1hQ2jQ4bBLymoA21qcCnCQUs2oYMQGnZ25TNUMsFtndH2JKELNwY22f23Bhxu8WJZLkL4cne9csQrtd93FxHB",
  "key5": "2KZX1MNikMKw5rZhtSCkK1QyvM6Jh9oFFnotceWkFcN5LZ7dtZpsCESfyqWudhqMRMn5WjhPAPuFLTBfRycywSw3",
  "key6": "3U5LCFhAtaekRBTTreXm5Pi2uQBPZk2mXJ8SeUr4FPSqFJw9jWQMCBDDL2wqDAp8NHfuWqaxVweDpVk5F52LAx4R",
  "key7": "EfAjVyetVmWwEc4CJ3Xtyk1mqoy3WPNRQny3dBvvuYCvPtB2iupvrWyAJYSmpqa6X4R9aQsWrd4B9sXSdUmhY45",
  "key8": "2jrHVLAjg4LrqxZvSYBeSmZiALdkKsQYQD2oUD74wjiaB4muEQwqz7ArbAuZEeMrQVxz2zwoWDPbzREH3KY98WRR",
  "key9": "4BbRa45Pi394o6vC7JWcjweaUNGJN2P4k17LNsQKXufZTdEoQbi8MdCndf2RhhZe4jPjJz6BNTTvAb39f8WTGrdM",
  "key10": "2BxNT5QJ2mSRsCnowyHKnfmsAiLvKjobLX6o6MtRqBBAoqCGtKhDUUsshNJkDwJBLTq7ztrbzdvPftopUDd1oMsu",
  "key11": "3UPtHthyNfvakibKcRoNLQdWu3Sh28aE9qN5EzzZWnSWVFtVAgDpfoMY9zGxWWtL5bDyrfwsnSkZw49yhyFXnfkr",
  "key12": "41tMjS3LLDGiXPty4MUgAoZ1j1qfgxfW4sSnTVNVmxcbwArwDbAS7KPMUGeFg4MWwSDncJjzmwMwwBkhKT3Rg5yc",
  "key13": "36hU8vXY5uB6zFwNqaWb4PGrXbPgu8ixQZbYk9Lah36trCsyAZNKa8YmQ3Uyw95Rf8Tuz8EYs7Zv2AMEV5FqXnmZ",
  "key14": "2ZMqJcWSTEr7auxsZdreme5ASfZrut1tA3funBFp7FCsRQj3J9vYbhztz51CbD9bfGee9kt9qxJMKBhBRX6TYtUS",
  "key15": "2DhbY8NtZvFd95vZyX9SwvZ8wocTGCspTFPT7zA2bEryos7ZANMZTE4UDd9mYRdERs1zUZhrQehMNjq6L2GFJS33",
  "key16": "23TKDw9UDjuU9viqT8zphiCe7WiUUZALaA74uRJwJzkku3DXYL7ovGWmy7rn4tVDpsfqUY8Ygjh9MHDgmTwaCVwg",
  "key17": "5EhXn8UAd37qXbQRaHbJTMCs36VsPX7NBjt3Xy7mHQqVj1XW5NDRcGdA5s6MJVwxY2E2mZ8GApG4D2nqT8cyK1Wa",
  "key18": "5B2s4NA1p8wP4scByT1YfoZC1gf4KPZi9MTArrcwq1psV4C44pvwURMWjFibtvrusxm3ZHMbnj5dA845p4gkSf15",
  "key19": "5rm22RKSc21YZZ1fACpbQbukLPWtrJRtw7GGjwWLY82rBebSaqE1MSUkzAHpxuLftnEe2tGJkxpDqsoVX3BEJuv8",
  "key20": "4yMut896EN3uVXEtY7bY3Raff1E1wQXKwf9kJkisTnhrvKTZkisj4jkYg8LLief9gSyEG7QZhiFCrmot8JDywe2R",
  "key21": "5TpQ4pFNDH2YeGxopxuJwc6vG7WRKFDkJEH76ZxWNaRdztQVdVQQGYkHNQ5jctZsUE2tKS6fjMbN3dxGdu2YEDGf",
  "key22": "4kXxDaurDRYXfgZYxrf73JuRM5ar31L8txh3nxoni5rNMq1WcP8De6Ldya5ExjAT7G7aSgGBTDV64gbihqXkPkpb",
  "key23": "5KpjUrZQWPqutNQMy67dixtBWxjkgR54vJDsjZ13PaTJ1FvsxDvCneeMqDDmWcNHSYmE1YHGy6JJVoE5MzDyXcxt",
  "key24": "5xnPKbFQN3c2dH25caC7jco87vgz9kmvDBbxBH1ShHBobR56cRvk18yWBpWyXeSmNvU8hFjDBSY9soSLoDpCEhvz",
  "key25": "3qfh95a1QfwgYGH5dBGAr5wVR4ngoCDdt8MSNVezhSwURUSrynBsfkiRKFNqnjhkkiKjJhj6y5jZY99yJbfxG4mq",
  "key26": "5TjLek56YUM6hpGcnzYLkwtk2S6rcXN64aZSgvQu8pgFdBYCgzz8yup5RNKfj7J29CT6NDxh5Xpp87H6xqNyCNmA",
  "key27": "ZHUXtHvNGPhspHaUFAfgGme4JFekVCXRADmbHSZ3wvDkwMxH5AWcD7bYzvpBpRGjtMJXHH1s6ttCujQP4oym52E",
  "key28": "5KPG98ShwDyrJbdFWajenQcUYhottB7wPDkLEd7vDyJoszRmombqhf5D7DwJeSiakDgmdnYT4HZq6AdkJ7y4dvaF"
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
