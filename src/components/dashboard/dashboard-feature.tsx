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
    "gkyK27hRcjjnPr6ULnaMdWsZobYthex8zXncFu48QAZgY2J6fzbueb6J2ZFztp5xUZr6pKkf2uZfHvV3JR4LPxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BWikrSD3cWiTBRsfdo7w26Kjpd4xb444Dk7q4pdScq7ygYrJ4eygYzryqxML2RRm51K6xKEZFuxZre2nbNfMWwJ",
  "key1": "5V8WuquxxFR9ydzjeXeyhiApPgnxxogvbzhDp7NUpNToCgWsN5waxyYEWPRryt5GxjdPjo27fH5pLrQDWuJKbM94",
  "key2": "4QcvZJF6YMr6X8rr1PjUeuuYoYhUgns3EVzrxAiPpbfjoZT7XKqTkvVzgUfFA49fvsn2NpzebQVzQMv4ifCH9Yqq",
  "key3": "eYCejwMy3Unn3ZShirnnbKrk54Juuq5xF9CWnEawS7KzhdTGiECjRBy1LDHCeuibKbArJpypJWNfeF2bLjH45Ei",
  "key4": "2vJ22NbreiZrUs8rxoPQGmvYrukETD8yqtXcDFPB4J1UY4FH1WpuaaG2KEdyQ7Yg46ZVx18JB1vJP9mF27qtgySN",
  "key5": "2UUDhyfCPyf5mPkZCECG5YZqinhv1p5LedkJ64JutbdtEvdkcHdLtNucWP4iQooAJfPxJ8yZNmgVzvi67NNREh48",
  "key6": "3KPkjHuWX78ptgRrtL2hJqDzFdVpZ9GBNt8SU9DpL2usen9zbyeQ4BR2TcUofnEgxbokoDLFZ2PjigJcQmzYdZK4",
  "key7": "Lji4p95wZgwW5HAG8ShtHGeaij1zzyeRXmhEPn9CHoPy1RFnJJ9LKE3LZGwUr5nkYGM3PtYPPspnQsE4xXUNGNq",
  "key8": "3SbfHAaunJv4nqMSzNjBu3Gqsisv6PXFvFgGhK6TvrxfnDmRJSFgzp8wo4G8A4NtXyg61AqBY6oDCjFwDtm58XaQ",
  "key9": "5R4BWgMvarwBAQMdo5wJFqrcBLqZ6xTpN5nj6SDTmH14MaFXwn3F11WHWhn8jTndvPLkKfGVPrB7PWcrxzWVm6xz",
  "key10": "57dYQKWaMnLy6q8hnGeMWttdYibFS8i2p4xURKJXZ4tYXyiakzDCSUfWek1QnDAAQduxX6KJATHPL7xKK9ZhaAcC",
  "key11": "34ijTyJR5wscgdtCdFTY3JAZzD5Ks81xmVQ5oC91h42hexZJvAmpgu7TKNvWN7d1vYzJdvJwBaGyGVv8pMFCn42",
  "key12": "3qpde5sBk375igwKjtPCbVVg4S7aSTA2FSSLt5kAiUgmko6dWqAVcr4QnFf29ZthwReW5x9aKj66ofpeNZA8rprC",
  "key13": "54N5rJTnRfPDw7kETo6UdtFYnQ4wHLj9HfKWa6fBYHakEBRQtbDkitxcnonMppcyqE45s8hourxowBemcZpgXywD",
  "key14": "5KyJWR6ikennEW2eH33oBDi8wc5XnrDgNWwRD7bzcuW96rnTinRPyrBbTFNSYnX2gXVzkUNFpZAwe1Nmd3Ay63dq",
  "key15": "JXx3pN6TXaPi33pzMSLpKz6XsnkyKeCDdc8NpFnQ9cz9FDfnSkEiYsGTu9fc2gcrcReEtLS9oyJkErgCphU9poq",
  "key16": "tpuAr4t37a3R2pQtfgD2eQEZcbxWNkYmgaUeERfwLfDwNsagdRp1cGP6WWcrv5VTvQ2efRkNJh7yxTdf1ikHpeZ",
  "key17": "xN7gFSgJ4S5xKzQnWnZzNSDKTUR8k6bt6GfDpNDtDCK4tfoHQ1fpJx7zCNEaPzCTir8eHWurfkUFDSEjni2UYjy",
  "key18": "g67vt5Xkywr65YcWsrPJRv9B1MJbMWxG6eMNBFh6ndxgHYUUXjbmx2roGVK5GjtPjxcaTrtVZHwfWiRKVjyZLrQ",
  "key19": "3hbcaBzjbAEXn5HPRsAgx6hStTpXkbzpeXCNw9ftSGfzZmh82aV8CFSGWBoBAvVScRRtBh8eBk21i4cYTjGbN3Zy",
  "key20": "67HWnEGkBbHzuExyjbxYcGipKsvYDNwF5BvVPcPn1TfBM9Z5sC7V8KCXUMhb6jfz9YmTDrTsJgCa82kzLAokhjhu",
  "key21": "5js9t4Eb4N8hKDRWceoUnrTX21X9AyWTS424TsC4hbT5V3ZCNQriCR2iXXJKNFx1rDXJSGmXtkBdNZGFdZXKZoT6",
  "key22": "3tbSfGiT3MezsDDr1e328zrPBbPsWvY1EqPTe9c3f8ZKqxxHNsnhDjTfvdjZyhEPR6EhYMAJk2UPe14xH678ythT",
  "key23": "2GoK5Wb7CVToE9mNd1H5VJqbV8EoqrbdQBVu2YfLPqyrmDcQZ4YGGnLxftwT3G5T4poTtd8e9aRbnrWSFfjUEnGA",
  "key24": "51ApJgW94kodVqQbmsLsNwTVKZv3oP2AEyNA5LV8rovbxj9AQT9SMaEAmFxjv7a7CFnrs4ZdZfAtPmEBEyygGufV",
  "key25": "48gfbPqN6dDHVvXnpqN2qVqdaeFEGFgwhggp2cYw6AsjSYthEauQerjyyz1AacewFtcBx1cQEv1QvqBpM6pWTzqD",
  "key26": "52GeS2kq9nak3tSGRj35GbA8tVB2GLdkwxE56618ukK9jymshsRinXNVCHQeYsDbxdcWbuvc2kG75Nfz7dFmkPNz",
  "key27": "3eWcKw5aT95ctcnEEGYPZbaoEz75kYYSFuWbzzXf2wB7SZ8DHtX8vFJyTcnWxyqZYbfHi9iF86Byjryiiihdbudo",
  "key28": "3sdxUJakUSuNWH8CuxNLx8jK99ctgztbgF8SqJGvA5WhqfKvrgNf1yXFhGu2UW1AkKwt4ZjESbcXTmMfN7xuQPRv",
  "key29": "3nktbvyRr1MbcYts3ojSjHn2QKPrtxNm8Y7dvdqNJYewiptAJFrpPoGzuRwT3stMFL4bbiYZdcufgdjV1BHL8vAL",
  "key30": "5h3ZbMdk1XuwkQgLx6Bq7BZ76nShJyT7TfM2F8ePXByN4fWsVckSd9mDVdMs6LmKoK2eZq5V1RMDx3FFHmbPTh1e"
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
