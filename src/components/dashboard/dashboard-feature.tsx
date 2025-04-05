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
    "4TeCx9e2LfgjAVQwaSWEJiMs8wZ3W7LVbaeVeSv3ncuoRSzEpWXU5EqTB47WL8VC6ixnEfnuc4xriNbg8WnZ6B6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N4ASRExKbmmqVJs7Dhs5nzpxcy4ZN1V8G36X1mXkZHsadhsp7EX6Kp1P24wpbnBLZXZavAKBNK6rf9GsUY6KLWv",
  "key1": "4J2xtcVRSVMDbqz6ccwgropUU5vj8XL4qfe1viukbPE6hqhWFVPsCHfXgW54u4TRUDfUz3o2zpkXCWL2qmiogif2",
  "key2": "5yMcAYzeMAqzz1A7gzJGxvqoRRJwkKJQiUxsnz8qso3cudQLBPcw4uvXN2DQdvWRk1hu3zMComwsHwbubbckxMVp",
  "key3": "3gcrLyigSPjZqcYR7a3EL7HSxRqkeJGeZg4zNHbaAWEGQkeZ9mCmVQRRfFRuEYSgmuQXSmnrtXmeFCkUKV8RLCVC",
  "key4": "4T3DsHEam8WnA8LcG47dzmzbhjaSupD37akSUkKSSzu2fiDW9mQNqbPk8kKPGj2pHz5wDEMLEqbufaG3oSRfzy1Q",
  "key5": "2EFzZXTQNAWmUXH3JwinZ8u46x4cRnt8jtc65dBuPWdmTgC6nTQVvivDZYgeKejcCHnJvxqeFeiDWdjByjTy4CV7",
  "key6": "37ibf9bVn7iLQPRe8qf2b4nL8743tiiqfMjJCNfwuj8VXL8HUB61haWDQmkwxWvHcfzppn3DoFZszfUF3j9NhCn2",
  "key7": "5cNKNMU14ShiG73sKe46NfKveKRwpWbARYSnaJWSt4Xs2xerJKLnhuocJZzNiyXBLqr6xKEfHVxkThEYkSRaEmA5",
  "key8": "UX8xPk9Nmr4EHCnCeQUURr8mqZW7ZEnLJHChLYJirzpxdyste5NqUk1K4GCsqwStvdp6Dmc5nnmppqYvYfcv2q1",
  "key9": "3oyckBkAJnjUEKPP837c6QvEUme5oJgsDVxn8D1Tj3GowEyMhJtTB2Jzsej8tt1QvJoTWQMmoH4tZGzd5egcye8v",
  "key10": "2yYPDLFWvc4xFV18suecjLqeq7HgNXunFgZNjSg1qaDnsp6SH2AwAftfnTjKpkmF2pGx83y7sTGSmzWAM7Q2qVYS",
  "key11": "5pgQZ7Bbzj3QLa4unaWbwoRRTLmR3A2cAVHb9ewTsW1RkPkK39sDFnGXCFmwucSYUrp2sr7UoqWiSHPin41SqaN8",
  "key12": "H1wHYVLF9xxMTLVFStJNWBzLfr5hQm3HndgGiACMmeyTo1PRbSdCWBqyyku7M1Y8hTwewVW5fPa6ZRjfuq5C7tp",
  "key13": "5fujKRWtnxR1zQyCXvab9UZj2uPar2xPYUKwZW5NF1EcYVjLbWYRpMWGNfRZfLn9ccpW3hECf53VDzxmbGF8YoF3",
  "key14": "cBFWCR2i3XbvMameTV7x6W8r2zgR2z87QvMV69gcHBf8HgTejDiQ1gUZuamysirSpF8VJiCNWWP1fAk4unh34Br",
  "key15": "VMjs9aC5QQeQKYBviHjR7UnTte9Cdew3j2VnBgj8QJnpp4uvZE67GVJVqzQ2wc32YHeANh67DCkh3x9AvuPZMnd",
  "key16": "2zRTUUTLZXyjh93tNtqkQVjUTkTeaSu92tJS3UjATwv87WubPRCANdmq1uqo6UMThv3MRJJ5ZuAbXJgpDagwbxot",
  "key17": "31MfgWRtBHHAJTiMu9EQpzPJ7YDzR7ZbZY4Juhz1GW5NV3FePLvk1phA8gASSuju8DBurQ1B9P6nSu4dzgRcDWbx",
  "key18": "47o6Hb8rmqdM6meZCEBXFUDFRbwF8YgvT2P8GxoyUfcNN2wwWjYcNiXSGM45AfP5SJp3VQAMK27s1Xs6izBrMTQc",
  "key19": "46fwTS3ZsZ5XbGt6TmeZzccGBEp4KVmbsgaRdJj4WhncVbs7h24LjCsKmSvSJZtrKe22bDF6Ukpm4pnR8iNgL4wF",
  "key20": "2RUwoUN3SuxrCqqMqcXKGQ44PUUsEFj7TkjQcDqb4PbTbuMMeTrj6sGYM6xwZDFdY9GNyQ6U6zxqQ7wJTpnPdo6q",
  "key21": "3mP8E9V8beYAbBZ6cizoALxY4Q79dHdbYdGJb947QCFriLizYn7pJD4gP98JwQscqEXN1EZCxxERNBmqFyPFLbLz",
  "key22": "4zq43HBpaqFTvMRZd64xyHDDgpDBxxJrcT9Ev9Zwr5erqimicoqUNQLcJLVKNKSACXDY8WHAuZfZ89R3CQ68ELFu",
  "key23": "38qr2ZvyUHgP5orHzyVvnwm6dBbsGPzQAyXb8FbdRAxbScS3XNqqq4NFr2QmCuNrCnNeh7Ua5LNceAwq3gRSUw2q",
  "key24": "5FHoF4qogQBqqcPnTJyBJkwijomTseEwwHr2XgGghGBZu7XvzkAw8VfhM8KE7jmEcJLfqqCziM8mBqzBBAVgcLxk",
  "key25": "5gue7kgRFNyAvtk219jRVRLDEn2aryrQd6x9PBEqZ4kSMBwqNrnqdHhJqGYqkrMZQgtnLLxfuSjgSp67jLpty5d1",
  "key26": "dGbP2VXowE7ouH51Hhh7v7xZH1af83k5Haz75WJKRbDkTHayL4cWT1v9U9uL8GHNMbiJQ5Jm5byzhkHTUrZVnYd",
  "key27": "2wZM9kto2HcPs5xifAfVGZnfgDao4b7m4AT2UPdCHwBSQVdpxTrTYCuvMguykoYEJJgmopq85VH8XeyCa7QvijTc",
  "key28": "59EuNjDzdJGJYcKyLrSEVSGzxSomfFvC8JKF8CdXbQjwqKNRVf16KkjytgjctSCp4MZepNMx8RgXeSVq9Qfn9Gw6",
  "key29": "65LRETsC26igHAW2nFgY3qZgimQCv19BDxaAjgpWmxauvwvkbLftUFLUsEsuytxyoV8Y2LLTBfJWuooZYTGYYLb9",
  "key30": "JFc6f95ayQL8PodvoJHv8oXivNQoJoR5gkjbTL31G5eE8FohVzgJXfGSEN5r8rZLgWNw3YVNkhqxnxJuwxCyVQJ",
  "key31": "31X2Xuj4bkWxdchFCqa5s9oLMeFsMphwuzpxwZd3zTXquVwkQDbUwpuXBxbW7DpQtzTL8Bhw2um6ZqeLxY7P7EMY",
  "key32": "6Am4NySTUSf2u2JaNnj9wytAqCL68RtcJzbEqEyfvTwTtT3TV48Ac1zY3m15Re6bh86puK6Q525q7vJZSF64JZH",
  "key33": "5eHHExhGAqDiyN1t9r7PJWnAGcSs1CnyGjQHBibLiDmjTwD3JLe3hBQJyp24EXARby8VkuWqn1HexDNWYt4ovqTi"
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
