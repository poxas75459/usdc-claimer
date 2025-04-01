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
    "PRYWWGNXkFx9DjX4yRoLecLhGqgrPkfpr6zPK9kLPpKsNStS1ZUqtExF3p7eH7F3rQ8vRb4aZF1jBhJnV8fUVNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NnbX2yEe1cQnF6H9SFJdHYReZ5ACwnkLkuuPgYA92ziYAbHZHaKqGzy653oqayPA22EZpr3btgTJkAV6t4ZJcAL",
  "key1": "GGEk63mdk78kAnzxUMbLb49Dz2QxSz2B7W5RAcufv3V8nKZFUCSw3CZUbD2jZWqXKxtYU9amB7AgR3P6M75ReuT",
  "key2": "5DwxcDBySfEP5sQjrs7cgQTp4Vv4a8RbGfZQrWLcZQA9WLREPzesbyMgasVHtAKMDbcb8Vvn11dfrCRNnQpcwpCe",
  "key3": "51PwQmAbUwj8JM4p28wmB6pmiJfZqAE7irBjMsn7SjLei2Hk1TcG3uVWqKUcGfkZf1tc2PHByuHbDewD8LJtdCRn",
  "key4": "uzjksDcnkNUTCc6K3XZ7DczjBJEXkW196GnCQB928PofqUBdjdKjZw6Zri5N9MgNaxMtaz9AkFRssKwMg9ydbCW",
  "key5": "2bG8DdRSmHpEus1xBZRqTbQRXR8w2XzcDRjcQ2YMG8xgj98KFDa73zDqz8g2CQCiMwxAXYtHf8WpXPiEDqAmeVeK",
  "key6": "2yQpb2pWYTD8BKtqokoapCSKmDA9h4JVMSgfAPwyGhe77CSRUewRohUKL7jRsjwEmwEQHomwN6uBJkHxP9CVRh8Z",
  "key7": "s1Fj43tBdn7LCHWS2xA9k6EvjiDHkcA6w4PNEWr8Lw3U2yL9ynLkEwgjEoZZ9jJEvRFNJNbVzyJPezP9J5L6JqH",
  "key8": "5YU8MbrrWzXH9dZYhNCEvhwfMN4fQsN8xy4PgTSD5MVDCK2VW9Ss7cC4tmWb41x3z6ytFDPTHhi5oahczL1Tb83U",
  "key9": "2YhQBNahe33Tgsw2JGAfV5ZKuUjw1RK2xvLbao6ieqCas6vGxpkGX81z85dMcrsbZcZZhDVaEJ7Z7M539jQerPjZ",
  "key10": "3prjn1f6gYXioKGjELFcVN3GBteuSfCNhNyNhUh53aMEDs8gjwpjpvrURSA8pLQ2Zma8hqHt6BvbCVMgFqcG27NA",
  "key11": "3Trqk9PGZnBfG6EFdGCzHQgycfcGHzwQdD9ZyFeWYurhy1tczK2vS2iC4uwWCNDQorhPCr9FyXJfA9cZhp8iXEpp",
  "key12": "2DTBkzyj3Di8y534gDeQ57YLYMnd1YkpuXFRTua1aAg6LGzgS4rkNwWvwADL2gwiNzEA5XMyUuQ56X2BM2LMzTsD",
  "key13": "5Y6GkTvrLSeeMHQ8GFKNaGDRPWbNdLJNFonHyitkEWkckPrmmJ3qtYkdwdQn5kWwTSjp1N3dEAHWsoa7DNjXUqJ8",
  "key14": "2jjYM9d3zdZyKERRknwryZYDtzmbsqiArkndEn8d3hnKGjcW9AnYpaiaXXrKVJJ4GU4E565JhWC2yAa7Z47yPnLF",
  "key15": "3E824uyBxcKLEEUapwCAvH2EkcG2vHhpk7pie3xSJo2LHAJDb5jxzTqBQyFfebteq2qgqvzveEH2BjB7y3mXXo5b",
  "key16": "3xV7xYUPYx9Tr86KvnsSbndWM5f4asqexRgJAwSiNn5Kw56sqBz7TBBDJj7nfgazNKF4vozrQzwZr7HsrQumvPaw",
  "key17": "uF14gBUcpmajkknNqUHb7tiemKL8x55MNBsPNG7Um5fGMsL5cRG5XcwY3hw4W4cB4V1fcoNYc1dYQFV6i5ANAdn",
  "key18": "3PPm1N6DzSCXAHyrA1DjKQDGs8kUPcV3KDNfDR61ZvVE6ttkXjTjjmyzCpQH9oStc3ArFjJAN1YKgGjicVw7nT9q",
  "key19": "5SAbpW8mM61JPTzMeb1Z7s4VBmmzVMmTPtgFio6WtGwjhQKdQTBKqtue2E1S7qxfhND3ApxMutXbxcq4fPni1TPC",
  "key20": "4DzBvNZ3Ve3QTCFR4gQHEnXkTtHBf9M2RdeaoXYU7xZ1dqMEjc9KxcwH3R1Czr3R1d6rppMEJQsiZt6Av9d995Ei",
  "key21": "6FXBwvgxLPrJrerj6qm1GVkfWMDR8WUSuQgxLit9MFpPWUZFx57nfTcNS2131wdJxGvaseija5ENfoaMzbs7oWw",
  "key22": "2RsrauvqYcqDqx33WCv8FcopYqgcZsFAfVqwFtTEAaBkd9p6ss7JJqFe9L4xXDoX4c22rWyaUXSxX8YHd3tkYikb",
  "key23": "5qu9fvfgnCunED4jqgThbK4kcs58PBfJgWcBZK9wiavDTNDYp87QY3AuJ1dEwo87ph13mk39gsMpJ2mmD62BQfaZ",
  "key24": "59NeTMasFwuQHHiJLXUYJqZ7Fz1NbXSuDjXN6VMwiHaJnt6CSSCcprTAPGJ2RATZDSYD94AgYAB2W3tdmj2PNAwa",
  "key25": "4dzXFXrha3JJ9LP7m9Swu9ESPZDoMruJQK2YVsMcg3eJJphy1VrRkgpZ3vqJvXQg1UrsjWZWM6A9FP96PQcrWWKe",
  "key26": "3wjUqXXNNViV9NvoJ9nUfq1Xk2hmh7CDrsLaMijm8uEf9YpXbKkHi5pjVZ4VX6x1zqKh2qs9Cg2hNLcacQm92T6U",
  "key27": "2sBwHpe7gi7PY1uqVcQRTZYCFXroVfXsWhsSnU3AXQ2MVGjNTdZpFgHBTBvug37fvmyGZVDj2vAkXkQ5b85jX9KJ",
  "key28": "eAKk8i6yr71PWUoxcCUeMNuy2KVqFUW4cY78vU1CwQwy8zoPgX5GzFSSUn2W6cUwWzkoTu91mVw3fSoMFyqkWQ6",
  "key29": "2q9pwg5nsUhaZaQyuScDH5vwxBWYRMdZhWVcVjfySCRbRW7RMN7Gnb7mgeetv6hiphpRPFjjjN6yBWgWXmiWMz7h",
  "key30": "9zkjWeyjYeaezSeAmrm9SAwspH3m653ja4D7W6yKh8HVBumDTpUqoX64pfvNVX2ZPh3uz5b4p4zJERG3EmBYWEF",
  "key31": "5QqXcKCWz8fjFS39fQHoXHGSg37zqhmKVjEMnsrT43f1ULsmemNDyHY7RMc9ushUTJjDkExgC1i6PJLodgn2hrTE",
  "key32": "AyGZ4nVmzwmeB1gM6e6NArC3JHaLoe5D8QkQJSoXfn3Y3kQ4K2pMr6qHHUZSJk9em4E7UXoUEtwprNsVgvNH638"
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
