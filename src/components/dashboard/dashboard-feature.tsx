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
    "g1YsYD2RfLdv4m3W4hG5z6Pn48Wwxv2TJXB67vg5jVAjyS1LFCd9TUfzEXcJQCAMEovZe2EobU1ASjkJcS8zUZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yhia8E9ujzeEngUTS3a9tPYDCsbTJGqz6GgvV2zUtq2MhuLhMNCs6xbgDGH7mMGaC7dpeyDoV69ZoRpXi7Mhuy4",
  "key1": "2WSNGAfrueoy7PXcqoJYT17yHr3vejABAZQdd6tP55p2bRSkXZTKHHid6LQhgnCVdfUtfcBJLUYT4DdWw8NEUEE3",
  "key2": "3GDDse9tQ6tntNxherZTaWAJGwPamxEk2n9w998QWKkaW1NZZDxvWfkjL2AURSAt6kTLWjJRRVWtxo7xJdXiEac",
  "key3": "TjUnGuAnb6VYrm4JUnxp7ANqpWDDiE4teSmx9RGixhNGEVT7BkTuAK74zcQCN1SNKjW57CCTTYwDuWkffmuH8yc",
  "key4": "4WUCWNmMW1twXZBpw9PtTy1gd2Lwr1zPWdx4j2uwWW4qeNPE7YFjzvXE3ccHhFbFGXViu73fQepE3aAWTMnz9YkD",
  "key5": "5m53yyqka2bJvWZqmqjNrXQLGYsnD6n63qKnuaaP852YuVpWMbC4P9pvctsQ4ztbPJpJstXSHr4kYdrs2x1FMZ8q",
  "key6": "4PkMaXJfFcEzRW2KZqr9FUNUkggao2cuKwpMxMqPDcXc1MYAfJJtBUecYqpKUxXUgQ64kSRTverxYNrBNUxENfEd",
  "key7": "5vn9SEurNsFqevsPiFQMmTg2Hd2V3U6sJ4N58rsSwuyGeLQpFBVnLaT464wP6gLCMZtWENPSynRVNtRgNirsEF4N",
  "key8": "5cxBE7ugGw932SiEW5gywRMH2UmgRyY2KMWGbzYJ9MSwVcg3VFVABahdU9xAaUHKQU8aDbzH6yujfeiWKxdGPh2L",
  "key9": "2xCgCn1cqGMycSFBUihCa7C85d89T2qXRGjHo615CFPyyJxr11hN27tdqWtBD7EyuWJcBHay7RLjrtWL1DhtYTzQ",
  "key10": "5wzbtD6hAn1kMxhTCuBYrezSYM9ephwi7rAjzaD4oLxmaLtXpFqqbAcjWB5CYdiYEUks2N9HZCUmJvhGpkCsXtKM",
  "key11": "3zqkqxdjGpsD5adH9M7MBgEVqFqR3o4upSD1MwwztGvgEmsygQttHH2uSHYJbSFEFehe82ckSpJyR3etVZay3E7L",
  "key12": "37LxUmwYDTP771nUHtzPhDHBCioj7b3CvYoxk8FyGbyGCTNLEBpyeYBsoHgMUG2pVLnAB8iRJTf4vjtyQM1SVG4A",
  "key13": "39EsUgkCRxVUyYDSsvo1LfjLvnUSxSdVmDLKezDLNLd9sgAZmqTzPJYNRYvcpzU7KArNnZAYb6o5ykQDJLNxy2CV",
  "key14": "4pfwWJeRAL2vx1jy2iJrN3oKafs1nVY4oXuXdWXw8aHbcynSTbNS8M9YfMkZkUdoXu8RrCpvdJf3TKgCN4RhpaLf",
  "key15": "4yBjA21NGAP9NC8zkzwaRfAHY42LpyaMgcvRw1zDvk2Twjmh8pGNG8SrkdbkBjYnbJzy3i6R128psV4d42KqPLjg",
  "key16": "4MgPLzwR4hbhuL2UUEFE3Z4QYYH4s2jeEgKGLYeyXaGdyM8ay7TQsyVgLC4ofpKtVX6qnQo2pU7woBU7HELmpwX8",
  "key17": "2PhPBgHeHpv6UWTKcAPYDAf3SPPFy8k2Fb1mgGbxQM8zb21NvWo1MXWSnc7zFrr88yXCNWrDXEGZ6J3xNGKTnWa2",
  "key18": "K9HbUowbXmkPGZrxKuS3eak4QGNX5R1M2iokFwQ5eywwrbDnG4qcfW8Bqw7s4shPYgpAbKDpzb8ebZNCyHCZU6S",
  "key19": "2uN5XMr3GQQUY8LTEwpAbSBqQgJnJb1rTSowKHivYsJCga9aWWZroK48dGuFqkpF9UDZ3iYWzu1kwBDJCcw4wkRY",
  "key20": "2aAdaR2o4YPdRrroKaDjEpUgdzytSyqeagSeHuRAXpwWcACff5H6Unmnt8Zht3PL5FVjjYdAw1SaN9ySDsmobU6o",
  "key21": "5gcGetZXtfWAQUaWEAePAk7V6FxnCwzQFFSnnAbHGsMTSjKxJsfzp5adhsPWLGqYuYbQpNujDaiicxUwuMwz3Jve",
  "key22": "7BMqriAbMvsYTvYXpkfUHjbRwHRCPayWhBXJLQdqz28BMNQmhASiNihsSmqsJebCkN6YuL7oBqfbWMpeqTR5xnj",
  "key23": "i9z3nA1auBxx46DStMqjjZsxGMXcnEw9ZwsPmYiM2ERDYMonBffW1m43WPxPX788HdbZeaH7MDC4APRzktLS7Qz",
  "key24": "31EuB4xrMF1GBPpqpTnkbhjLuYGjuhHu7t959uhkppJ5t8fz4mpXKMvPt47k9HZWkVXHmUkYsx6iZugTRpCiTgYj",
  "key25": "KTRZZ6ifp89Zbjxg6ymfVJ1NZqRSnT46p3i46LvtyP475k1Krwvn6KiWgij3itHutP1DZdY73BLZUXyWaZ7jy7d",
  "key26": "53EaZzhpKWyHgtFGonSo5681NicAhirKkaBb8CXD57qCLCA6XscfKA41qx9aJgwnd6TQ3MbJcbFSB4xv3YvTgMJv",
  "key27": "4kahByyK2zmPhqLpSnshGD6sR5vCVU2uMAMKge5ozWvCjDB6but84bVJqu2WbayFfENM7ntmRoNtNEfDfNLULJFZ",
  "key28": "5EfzRispSiDH49aXnFYxfGydpmoYQtKq8LzSHpcJm1HEpJQgAsQ96tPDsT7SSMSscpEn5QrYpR4anRWEC482gthu",
  "key29": "6vDm9Vwhvhdgbp4QdNwDwjQJ3Sxk4b9nn86pehmrrUu52oZYnsoDfBa9du2ebHoCXVfazn7qYfYmjL8uyd6rKVY",
  "key30": "r82nf3pSSNRuAXv8vKbaRApt3JuCJWsyv4mdYPHmj6RJYX3F453Sb9F62qUVw75cSZtH4wyto4krbMvfS45HMRD",
  "key31": "8nhdXauGcS6mvHsfrFvFD5NTv7NWBU3jkYV77sNb3r29b6oTbQqcYdj4wSHjZTPnUzvwhbTDtNWE9Dr7hFjqKHQ",
  "key32": "5FSwk2ez2WbQFeSxvwxKxVaeBY1ehPu9cXB6A6xhfdo7mZw9aJnTUSqyiN9REKKzZp4aiUa29t1rroG7TGBDoFUN",
  "key33": "3jvrxEApVz5H9TZ5c7kBXMD3YPjWLEumLDBHK9i1bps3rw1CPcsWuJS2hu93iWUDNfvZE2h7s1ZDygMWZZMqsnDA"
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
