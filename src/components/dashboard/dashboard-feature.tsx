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
    "4PWDM1DpD2Fnnwa62GhTqDEna8dWbYHhdB3sqbbf7wsmRmy2BZGThBMtPZdXJKAuHhdfeaA8U3y8as66kJe95drY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D6RAV1WCdVnHiTstN313AuQu4L2KeWaVgmNyWFdiQ3tUVTUUAeurReqNM3KDRPUHJiUEDERJN3RBnSksPuk2a3i",
  "key1": "3cL8KcmmLzs5vBxHCk1Cqi3Vpsigj8dLEcQ2UqcvqbLRCAacUmCg2UWJCWrMXRkJMt8i1fhdBY2aATnVJjSueK14",
  "key2": "4jDxLJhm9vAX1GsYaB5kFZ87D9Nx11MTtVKBhBKhNyUBvWF8dhHjwW6xVBhVcufQp6ndXHS3poJUrt4im4q2mVq3",
  "key3": "3jFHJ7UgruHVE8aQMW1fKAyiPbBK3cT8PJFpVmEf8dUqc6aYpjW1d7n5TY3DgQzqDYS5ZnzoRjR9eUBnLUBE7rJJ",
  "key4": "5ZnHvPKkCGbSxRpprBicfya6xuBwvRy2yXWsGyZDkeRmjVUCVGvD49dR12pHvkb1bS3Hq5mmfQqJKX1cvTbHQ6mX",
  "key5": "7rCHLHFeWakacTcBxWBQ6PaFbLmYDDThn4AdgwnRFGGTNmnyxrzQtQkXFnLCosG4ubia4eBXn2WG5vEAy7f8mP6",
  "key6": "Qh3gySnnVifUFfbZRGHZd2kLqAou9yDxQ8koaj2QNJctnymQdN7GQm6ME8hBRBGHZrskfbtcNNbErod8A22K1zM",
  "key7": "4mGEDoKz9GvSksxS1DjFofnNWaDzWbwd1ynaficW5yw9wmpmCeffDEmQYLo1Vu9jvKurNi8WBTrTrC7h5DKQxRWh",
  "key8": "5v2ojBmPchMvH6hbdfDBcAWjVq8MNHD5hjx9T6dBNP6fEok1t5FZJk2iEky77b4iPgRx3bNucN98NjWQQA7dmtFy",
  "key9": "3HPYsvPXbVYfBJQFsLr7Dno9UH8ZoiahcxcX6UWV4gdqYUD6v2zRCtJg19iQrFYDUe7Qphsr9M7grnszJAKiTcLu",
  "key10": "5ZZJDXS9F837nkVs5UwwK2tUwwUF2qvuM2md9uphKfFPo8UCuMqjAa2QZhDvfECB7aYYjrJ4hQsGHJwJ96udQ8KQ",
  "key11": "5FuRHME8Q6Jc8FvrRJUuTZYLFQAAfcfY17hJ8gj11gRGWjqgJNw5ZQj6QVXjWQftYMMgAqbS5eabAaGRWefunhpx",
  "key12": "4B9o7iPNJnQLMNQ7Lq8hNqCJc7mSTMxZbiiaCPhvL8yG7k13nGdrBoGJ91sEHyLsv84Zu6xZTcjuWjCMC6oybegp",
  "key13": "2vt3qHUidiPFHXFdYnrQ2UFAW6JwZCs6DJmn93isZsuRwfBkCmPxijJbXaqkgV6Qxfwtspkqzks9WvtmXpU3KCTc",
  "key14": "5x5gBadEd5aStDMNuBwin2Nh1o8N1WQuARsYyNgggca2JSuFitupjfPtv2YJV7YPY7Pa7uRe8q2ESUqgD9oDHTA5",
  "key15": "2kbed2vQgH4JFGS64Agru2XEiHK9HJt7u3EtBzW36cVEVNtJ7y2egGHnpr4RPUpzri4P4eFoY6So9QjRBsUu9P4V",
  "key16": "4gg2FGRShqLy4xWQkxjY7nax4f8cy1prjgvPEhtzLpzvVdq5b3R2wPkPD5sgtwqvR5XZE4oPzudWhgsv2Mnypb63",
  "key17": "oL75NWFJyiiuyDoKBBtJxV6C3czohbZwGc39YVjsQ8Zsc7bFjEKSUY7KtAaYkyWXqRfiS4TSXMtVMGocmgQTCzq",
  "key18": "2GTEZW9xy6BQA18zNmesJZmngNGDK362kYLfGsFyfSqWkareDnpmBiBNy4TUbtwh9wNTiCA9WtFsyioZ1BYdPwA8",
  "key19": "3H9pFzAoA9EkzeDQS7L44spuCozFzyiJizCUvL5cp3CSKUGifZbNyyUdRHW5c7oJcRsR8pJFCi7U61t7mPQ9ADtY",
  "key20": "bageXTRcXw6Sii5YfdGhRT4EysVKzq6zLC1aWL19T6zWfvLxBL4kNUQuZxoVsFgAvxY1VeDZngyyQQ8JaqXc1fU",
  "key21": "5r1YhidBRcssU5ceZXAveEuwfHqogwPHFKU6fKT4wNJ4Yn7exTLXQLR7rcxvPNnKhGS6ZdVNsenw6TZ365UkJMof",
  "key22": "4J5JikPaDMM3GheoFmsCyZKFYqz1ujhXraaU5xBhcSnkktP24t476DVVPtn3VJVxrmgdAz4MXhTCxsXHCg6SQy8",
  "key23": "3maGUWLviBotJzvYb8cBmove6kfdDjKGx9KVf3nWdp6mY927iiuNGYSUFi5QSTrVKusfCCBvKvarn8cS2ASkwSnB",
  "key24": "5npho941MWEoRGC9UC5f5oEizrkXFpTsW4CytoXZpYYkL8B9n4JRLPMinbiNNbHjCSP4CJPp7WeoDqYSoVdvT6vA",
  "key25": "49uiFykJLfsRzg5PDKCNtAzy9VgSE7sHYMLCc1KwUoyYi3rkXBtVi77DaaHuyaYzRYF18JckHGAE9WdZPvZceTUr"
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
