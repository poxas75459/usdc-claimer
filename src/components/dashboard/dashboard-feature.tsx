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
    "4ckMHMJVtNwh22qTCWrgjGkNapdDHtRziZDbet7nAC7DSB5JY8ZLuX1qsLYbLMH7hAseK2NWD6ULUcL4CCDp8Xu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SrkgnNzpa3N2YhLjSoVj96KZUC3dKJTZS7Z6tCJEEJjGCjTxaGkgYDb3TWiztNo3Af9oqvnjRZZHF8MYEnjzjTu",
  "key1": "36RMwxZ9kC1TWbK9vmKLfCvidUxC6k7s6pe986ZEs483AJGrN4To4ZRgaqCP2PE8BxfCTGyScB2XNhXvdwnrUjh2",
  "key2": "JQE3RRugEydvJWTT28sy3a4hKBhUQZTGJCtEGv4rSqcvj8tQmwYtxuBwEDWw4FsCMvK9W4sWiWiFpMWpF2HVq5H",
  "key3": "3utdZRf3wjBcPADwN8K2VeBXuTbHLoHU8pyBbFDcn7EZdi3Gct3sSY85HTHZeCrTNct5tmcRkHiRj7KNp5Eobx4v",
  "key4": "2unNtwkkY1BRr5y8Sn3bKyUdQBWtqeqHbuVnMm5kyRvhiFAH1DFzD3V7QPphnRWX5XEVWLiUYvWJeojtMPTtbdyP",
  "key5": "3XQktQ8q2NCCvPNBuBM1M5NSmjhoWYLwUxRBJcZDriS1AwhdWq3K5gNSDrqT1UbZdunkUbuiC4Khwn5nJYGHxfoj",
  "key6": "2HDdpR11vB7KUKYYF7ikPM3LCV224F9hTEXqTSUBw5AShz8tZm58Bv9WMzRoLUayvS1wBo8kjhEqpQCNQSkutGxx",
  "key7": "4NXcaVmi4LbqwmjQrPRTcxpKk2PTUXdXZVPZXsnrFPyfndCse6ePvSf4cJ5wc1C1gxPFrmXmFDLdcvubgZphWyCc",
  "key8": "2LDKQ6a1LMHJUmfgRY1PTb5Mfmui3fZ6WN2wi41stiEJFxRAoeYeLvjw8nuHEMRXrTVjN11n1bFdw8vVVMjJ1BwL",
  "key9": "2MQZvtoAQ33KzgQZYwixnNafjyVXaQBiSc9MErSxLcejrqqfj7KcG3rqKVcKcHTnKHHpgvB6wS6B4ZuucdmHmfGF",
  "key10": "3V3sbo38Q1tjW9kDodNQFCoRwbZxsYwSGToyUZcdfPXXzdZsxw5RPVrAtcZHXzoHwZd8dghT5HErDzi4QsC1YYx1",
  "key11": "5jbwwwp8J28cfkvNLEgCUY3uWQTbGpxwSrhwnuLs9NbFBKPgSr5zPRjvPHqum6fKK4K9rSfD6wDMMnvFq46Xk1Wq",
  "key12": "3oQ6MF2XUBhTEa6mbuffia8MpRehjLQiv8uwuX1oXGmtbT4cMCd93kzMibJR3pySibnVFJLK3N22x3YExL1nGkFY",
  "key13": "4NujaPN6zYyckAtRo7yCbp48hgQfF7Mh5twfTtMeWmMyixLytmHwaLki4saESNbQrVFbXTdVWz1h7kHbjAqSX5nk",
  "key14": "8TitdLbeffuYubdFVbyoKXJ2p4SQNeoNHQbrDf7wjW1hzoxD9YzmmS8q6UEGEmNLGP4YZ2zmLhBDBTtPV8F6yXF",
  "key15": "5MKw2grtpHn4RhEnr86oPJLD1tZqNoKLvzHrkak6ocFHv5f4dvdfPf9Xgo2v9PZrdgbmo6eHCU1bKA74WzQwkvcA",
  "key16": "ftorcLfH1iF32MicRfeJsfN97w22ktsY9zJT7sXEiqfq6dQDVJU7rt9oLSkCXJWs89dPSxZXG9SKish37B2gDyN",
  "key17": "3rjr1UjgqV5es98LCoJ1xvuGkAi3GTw5pgXcAN5pk5oYqHwTP1SsJvcKKn5bVjLWQ3TFoTmmQZsS54dektBLH2t8",
  "key18": "WKBXum498NNuaKCNGjoDVMLZYcY9wAhkhJKST5Bh6gW19iaKLBiS3WZsAJbgznYbwY6YkjaEEz3ngkwwES3AJEc",
  "key19": "395XKMgmvCGhmrk3WfxbdrJU1A1T1eH8jHrtW8gF2wM7623cH6j7VYSwqriEM7c7MGegQn762odqCNg1JxZZdsgZ",
  "key20": "2mYKpLvwFeqSW7Bv2pS9Bkt26HvULKpCjZHwepwT7j5ePPhZvM3RNDiFHdnR3jffTDgqXyuNTPrBhzdfNqNZH9GC",
  "key21": "4Lw5QkZe9n4pk5tQTB3wb4GtZF8t9e928fJZ655XrDGmT2aTfq3dYpC9Qk8Er21xzk62v6FGxkuRuUBaTpjRLr2U",
  "key22": "4nChgEo3qroZxHiUW9s7m2989ZMnHzesR2boBKEoyQQtB5voGhiy5fjtmjT92Kf1mfof5ZezokSbe2yi5SykzSVN",
  "key23": "NmdSXQVxte8KhFtwdrVjyweZcxGFE75RAbZwUW1z7Hq1rAYDgeJ17hRfhR2NgHLmntmC4qtJBVqgEn8RJzJQZuB",
  "key24": "4LWTgJmqVDJ5BcY1zi2zgN98eoQyW5mqUMnaXaijjAR8AWrWTPyPaoXSkUxSvACMY8Y7cNANn5wd2UvTZcsejF14",
  "key25": "4Btb8Uanuz6i1Z7gprRTff3UpxjfKJ6PgvRto8AXrF7WSRA5AYMG3hkJ5mrMcWsbRnFSbEhBneQpx96KCz2MenUZ",
  "key26": "64RvciRAa1WLnsLuo3AfMKbq75Z7kKw5U3dMaXdQjy3VkspMTGAzbgoPThz4y3i7TyJg9LkAUfZJ4tsnZivSjmcz",
  "key27": "3jm6k7QS5sSjckM1hgzDgZfJqF37UQut7zuiEKCvmj5KFXoVJAovcGjDmLgoPKJW6c5DXsFsEsPAV5gWJJnZ5fCa",
  "key28": "3kDbuJ94DMhobmePhFncMGyCnVPbX29ikEiBbB3moMoyRKBgEBMyKXCY1JhdpxLU2jih1AyZTBrnq3G8ym71aLSP",
  "key29": "4cUNw9vsRWmhjVM8XiAPUPU4fsrP4ChpMBtTtuQmLjjGfSEewmNhwNacSddqWRtTuCbbGeSiLqWPbG3XgBbxKLai",
  "key30": "4ZyaJPgR4uozJAefiPvaHKPPEiuqv5q6mB3RkJSaUrnGqLh4ZwAPUN9qn4EBRHt5QPr9BGCLnMjrHq96Kz8j8b5e",
  "key31": "26JALQ17FXdcZiAdd9ytQoUAS8EmMdu3gBx1R4DBc3JXPziGpw17kkyZhcS6uuQ4Lnj9gwwi72cquHqtR1BBkDsF",
  "key32": "2ZFNpemxS7SbPS8cXMno3LsRCf7DvBLz8mK83WSG3GxQfYxmWGSXuRXjf1YAjYrS3QRFmqEPpQB9q7eitDzKUsNv",
  "key33": "j5qvrc4ncGXFK9Wy1xhY7fQHtZiwWG8TmH4Qjvssw3ZhasFEr7hKmcAKrPjfUTmJgMtsW8CxLt4y9V8KdVh2Buo",
  "key34": "VS4vPirEENmCBSzAnWe4w8kjFBoe17zoAZyhBuCvTwgPiBchYVHBWvTLYoBmpoWvWbcRD7CFvSk52kCtvBvPasB",
  "key35": "iv2fKiy1cRNjPvomaKTJi7BVgCqJSjnejHmddjTYvAqCmMoV8PDQYJfDYDt98rLNQjhBZheRiPzRcrZszafwEZH"
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
