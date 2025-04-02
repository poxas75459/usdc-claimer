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
    "5GeKJQTarrzWFpxTa8BUdHYJasmg9ABKDVnqK6HkL3LhKFbY5uzjJ9xDBC9kg9KF3XyQCDw5Ym8Ku93WynpdAS7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34EKqvkJfuoqLQWKzWVaiqad5zkbiHh4BWJRdhfgmh29aoNM8XLJnARbMZPQPVYH5awZbJitEszFV33UVMiMKkQG",
  "key1": "5a1WHQCmxKAKvaXThHgmpqk9SxTRKmpTT3Ygebq5DYMAXQiWWXBRiMY8PTkEecAU1P5EAh1kyGHhP5fLX2mAmqtE",
  "key2": "KChv2BKTi5d3aNn9MN9Z86bqkC8wXEoxNKEJYxxyHpSyeyXgUeJaVapfLfD3Ap3i8nwvCXcxnYVhwCxsdzC5XsM",
  "key3": "3q6gVYQgdz2RUDUiACoQH4MyXGnBgHzsymg5FTr6jD9Phg68QC1X7uviYdrNu1LMkRw8nkQn1FmxY6FfHWFuoVXU",
  "key4": "3WedAqSnknwfc73ojh6PoJCSjk7x9Sw3FzRjMZwA6LVychENZ5M2CEjxgULgsHL3Nn5sGmedXnK5szpfgQqjzB2N",
  "key5": "oPHLuAyJnLEbnMcQidFmkVMEJcfCV53AwdqHaNkkwCW1ra1w5UF8YrUuWjLVtRzQ1e17B3bUJ4aiPt2vEBVYMs4",
  "key6": "3VkrLmrERe21t8aRngeuK4CoudkWLdeEVZG3aJuwX3gFHPxGbiFbwgS9w46mzNj7jpqRvo6SmHqyNBkqfKc9uT7e",
  "key7": "2f3qVmh3iqWtTagbNYZNWS3GZQi13M6z3XPqsBBjbJnBhMHVgwAsKXTEuxmHm7Zi4w2SReMQCN1KthTyquyUWmQn",
  "key8": "5a7JYUV7wxN9Ur7ucfeKuxofsnm1fvgbS7fZJNzsSSZBUMXUzLxmgP62y3dR2YHJcr8hyrCrSEtFF2ri4W8D9KYH",
  "key9": "2pPLiMtWXebLgHZeCTtV4iQsWHPiWSV6FnBPP7a4ogzDHAcqmRAzMApx6ZR1U21ZyXngwNrkuHmcVnjoehaJHNa9",
  "key10": "2wuvpJnmrTnXD3TQARt9RZTZYZeozcezVTCQkybdTToTypogdvvH7RGKvJgCSZmTBiY7xrcCMVU3ttWUcuthHWcJ",
  "key11": "2F94e5W9wr8zkdRQJ6guvMesXAodFmabPVtZyLD57BhAUK4YRuMA2JSQrAMBnSNLbMRNqybBe77VGQu9jkqABJCc",
  "key12": "3gJBtVYnb4czJwAi3zF5dZukWRpFUHdybh2wbFBNEfGv5teaCJpieBVSCwistQsSWY9JUjsAPvJ42wD3EtobheoR",
  "key13": "5J9k2WC2pbEH8rX9SGcXuBZrchDCheRYbNYc81vts9TQS4McVKrQtkUT8gtG5MNiCUDnzFRYW2ia61kDbLjorv8j",
  "key14": "5wYXfQCM6irQ6kHNGH7mLty2ZczcZN2QG5TyccaPqcPAK4AFujUD9U7oiLueup2fsDUzRNkQFBuoRhRXDokcv37e",
  "key15": "5xAYaLrXN7n1wZo1Wjm6QSQEiQKzizNPqEzRqE8gePfoBp6hQgtytzQyrKdB5gu9QvUyg75yfjR7hc1ze8JXfrpn",
  "key16": "5edU6uXrL68abakdnJviykM9i56dSXHFNzREgVAigMGV9QWkQcZ9fB8TJJFBv8kcePGzejtXVBPdcLUgdsNhjr8h",
  "key17": "34LoxqNeFtWW6o6PEYNKSNLZ2AtsFs4noveb7fV3W7UqAzpri43E8BUPSNv22a7jJYXBxCm41htchB4nsszuhbWZ",
  "key18": "5bAGZGhpstnumEWBaVmUxemyCQJrCXgNM2YrYRdvmTyAU3VrDiJvqHMZzWjrHqRHz9eT6qYLcq7Y4TiZeg8njnwH",
  "key19": "3vcWUHHM2czuqXhKTtarnPHMrnGsF9S4byT17wuyUoth7TSP9ncXi6LdYUiQLtJwBj8J7WbqhuFJjwAv8zNpNLLp",
  "key20": "bBumQuYXQQF8VWhxDfw8faWxpmg8kFv3e9swTzbXcmfz8vcZxmCKYCncfHLHtXcMzZ5TDZ6shug336ofFix55Ko",
  "key21": "1aGb6FT4az4W3TPFwa7Hnpt1znFhwxktdZGUGY5vs9PDGQ2WfetuFNNvCPzXdSi9pj4zW8yZh3ARRajrRFVjSvi",
  "key22": "2crGJpqByeoGZbhfpcPRBUg6g232c7xAtPoxfge8porqQtWMWe8hQ1joHmHgFpZzLDBS1wP8PykvhNMXhvGYPypn",
  "key23": "RzLMZFcUZqhYg5n17BWgjAyP5JpKx5v6gLHT6zBAVBZZs6cECdq7wUNT4c7qWiwNn3tcGyju48HxyW1Rp69TjK8",
  "key24": "QNUgKD7i5XsPDrWeEx8mLuBNqLMRGxWzUfoQj61SFVXNP9zsbhb5zFi9fo2Eonx6WEE2q4EFbh3Sr6es3M1rrbo",
  "key25": "2vtrcTh6Bttv7MUPPK63fFYhhj5U62LvTVuCUTjzRNgkQYte5CptBtCDeDarkEVqxYZ8H4ngYseuaTvuARrcs1Y6",
  "key26": "vH242fye8zKGZ3oWJmEX677BWTkeSZx91ew6YnDPrDDDa4RVaTcJgZnCYZT9odxfXTsWzwTGeRsef3vu5it5mTE",
  "key27": "4KuYwcFDGcUkSPkPsW5EM6TYiicQLEwnri2L7VHpC4DJL5xhFUmLMVejJSMwX8X6v6fGJHJhyRnqfCBz9Ju3YvBg"
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
