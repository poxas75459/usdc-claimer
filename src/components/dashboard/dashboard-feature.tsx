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
    "2GHRZHq4LjXCjgRJptFdFLsVUH5L1J79JPz4Ju2Q19yq4U9KhED1YGpgVpjayQgbYMZE2ZenH8SEq8rV3ZCqinaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e38vAjE1EzN185vi3deGfZDr4jixzobfSx3DhxRqm8FkR6rYW5xuXmbDsNg5RJi4pLhVkgBhpWrWJtbd1ex2J8p",
  "key1": "5vtNM5B4usZnACYkAzxaYekPQE4WiQKGd6v4FDrL2bjtW8xkn2cdZ8LK2i12C23Gz4kHAfhkYspsTYxR5XsPTnGA",
  "key2": "3w1BDHtVDUAV4AQfcyfvUSHs7sFeWzqWhHhDTh7gi57NvrFQWPuyqwffNvvSbVnfZLcGcPA8JwZSBCJMrNNBf1GG",
  "key3": "YtAo9c9y9QbXik3FFUEdrRXSqrRrfsrFEgajSknDmSq4jwo7NXUGAx4z6uFHfNdCy2MgVaPYGRQwQH7R4VviCaT",
  "key4": "4J4BmNYc22j5YtP9fR8NUk6JqLKKU6u86yM9MBjoJQSWuVJbLNnew3tdHbWCXNbvkFUYiGXXCJ8rjczoTLkd9w1R",
  "key5": "55rTrYwoFfcNVfrx9ZvNdxgbSxpEBJQxRHdP5j3iLRE1fVhdJouqn2hAjqTAateyS84MfUpa5qWRCK55GS257Wt9",
  "key6": "43X92yHHt3hGZu54jCLRg3asakx9yWee2Waee7pS6wkSiynSNSAzi9RCGDjsrky59nGhgN8mKCSAqXzJhG3THKeH",
  "key7": "mn437BKk9rN5ZYghtGj4tXnwr1cw4C8TQ8JFNeQBPJeajNk7VkqS3WdsBoBe3rkQiBaD7CbHGSkUWNqnE7durH1",
  "key8": "5f5x4AwCfMiV3oTHnkvAJ2vTWWj9KFGfFBkKZPKAocRkL6er66xNm4NvktK65q5C5ZqZoYeJ9PK8fisqT8Nxnk3K",
  "key9": "4DsC8dZCuSv353YDkHnfcdUh47abP6EFCk28W9Anm1CQESRZUxV3DCo3tYfoWGPbytHYuXwbQrxox21EAutE6c6e",
  "key10": "5s15wxUXhSiEWcbsoLRhWRoLtE4Y4QVvMHhZbwAbaWN8mXzPc7L5SLBPUAc8j63JzYSvP3CT4DNi3BuiFxSFkbKX",
  "key11": "3Mm8q6yBTQgGDh8Yx5JdC36SVkZwX1Pxo5aJeeQCEgKLCEFN7RVikHCVxTaWYFKJGdFmMrxwLf5Fh8n54tkiSUhx",
  "key12": "4LZa6SPfjni3xbDcxWmFy9SJkVxVcGDUzGmYWxQHYpNkrt5LjKcVuvnMWF5kSXYmo3eWYRNz123eaMG9N7T4zfet",
  "key13": "JD3ZT9NEiR2oahYoDG294r6jxsUkvCXUzuMXEC94gd1tn1uoNZfrUFEX1xvNMJz48zuDEsRDyrPe8LEYLeNPX2J",
  "key14": "2LKT1epq5T6PjWFYzFVSFA3b4tzzZNr3ZfLRJtSsbaUyVaZKBJKWqKjBRP8kmvcEKRsAHb68zoKufMWFCLaTHbPR",
  "key15": "3iTRfkBA13xVy5KeZVywFFGJaQvk6dNe3PZKNMx7whacE7v4F5twd6sDu3jChiJX6LL7tAJVSmWp8TJfuxjUbEA5",
  "key16": "QvXu7Ao1xJEvATKFmxqWz8apDF5sCofRtWDQJ4txMPvkGm9CM41DTvHYEENP4ZfLffQEkG9FBKHemrhw4nzEXnS",
  "key17": "4JjcuB65TC7zqeP5hgMxnjZyKEphn6vi2o4NMZ8Lqtor3Rnk3RM9ECByv6AeoNKncwqsxSgNmJBhyYXVKRy5UAMP",
  "key18": "2rjnskVZeJTysYhdZS9A7R1qu2q4K8tLDR31wwsFFycnkErVRknQ4RuvotcxFHZVS6RpakfYbPyJhfTkJvANeGAp",
  "key19": "3ebvWUkNynaADLbhMu2hdWYfdgTqsm4TBryqAHp9DVQBKK7GX2xdjqampyUTyZHvjw7vvAYsRP7gUmZjqtxbzfYa",
  "key20": "H54hgWZNxvfZxX3z8eZcVYyFQjdmx2nakaZFfTcikL1qFfaaQKVRwtviKgCCe591CcXRjMt3zc6kkbxrFqqN3v3",
  "key21": "2YY2KU8dxTA19xUjwWCTMxnhZN9SbojXAp24QxNzweLBiFeYpRsog45gXB66VDVtLYcnx3PgPYE8Dw64MJgTT5YK",
  "key22": "4vWmBzdm2ETtzHXhoyorcAQz2j1o2yphrhmXBLvqA4c2LxpYiHRasC8LzXNacFWYcFvbZFtjCA3SMx3EZPaTKaTy",
  "key23": "4aUAsYdjtGZMe3LTxk4adJFtgbzLHgs4mFwokMn4nPsD1NSZ81pNNpPWkaDPLzLQzmNva16sud4N2CcB3gokUzgp",
  "key24": "3Lr9xwXkL3QWmn7sVzFsWzshDVrWgMkf9544aEQAynxfFVHhVYM23GYq1Giry33SEKq8TXdRxMAcQMn5kNrBZo3C",
  "key25": "52b8ZCETeGMod7iKwwxB8UpTJ8dBoyLdkFMtsUz3WmUJG98DJEeKjx9JPegwQVWEp78mTiDMFJLSNDyjLBN8a6ML",
  "key26": "2M7FAaJpdHjcSjUaXQGGVo3gezopPFLRMTgGRnq6mBfDxaaNZLFLC3vSs9rGJdArTcEfjGHvyEWdBQTU8GqDeNfY"
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
