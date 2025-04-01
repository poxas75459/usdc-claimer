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
    "2sJd3q8U4Ru1mhrhWWJVzguKBoFEUbtjmNF5WeZPrXuxzskbUA2R3d2hFE2xiq8NcU1yRdCQsPErJFpJtCpvRB5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LJQtYWVY7tH5UzJP5mhznTGxoQK4vVgt7N3mPzMKiD3YD7xTD8Esze21err6R1HSp7HJhamKfWeSyzUyjrCqwgg",
  "key1": "3paQavWg7mZrNyVVPxsPdZKc3G76wx97ZV3MDspHJ4Y7nQUSGiZFZetejmuZBXoeWqtfebSnYMW3tw9GNmLAqVy6",
  "key2": "2nC7UtZm7ZJm1Xn6dc3RTdNbnY3sr2FKvdGHdrL7hrHSJobPWVLV5Dx3ivNF68Sb5TFkfuzAKHBAFZ2oiPSTJvGw",
  "key3": "W2CKnLhQJ3wUvu776V4HVT2UseV1UNS9JGB96Ni194fYSv9WmGBKgcARv2zkMFTDv4LWtpwn4qTgjLky2KtvqsF",
  "key4": "5q7t3HWLqexkVzH2F19Bd2jP3a2C5fRQj7gRz95W5PFfdmPYq9ybuDaFPfqdKWyFJ9eiZWjhdA5juh2JwCDE9i7u",
  "key5": "45vVkePRmwmNo6VyzSY3QikEbSMi7TZ6AzPdpDmhPH67yqwht6ZU8RndtPQ2BB7vM52f4YhToRoSCzB7V1n5pQRH",
  "key6": "XL1smaUdgQYAMAHpywuS2R8X73ZUBQAX2wuA87tQtLarPcGdmXZzVUfCEM1vsfiVPB3yctdrZfdaFc7kh2j6ujY",
  "key7": "4U9XSv2DNkh1zhMQXU6fDrjzTjsVX4J8pvAKP7goyj146UEQd5iEr5GJFGbwUKJLRJVMuSfBkauveLYbtSghLiPS",
  "key8": "4yqP5de6L5u2EBqEPHTd5HmwRWa4uKrJvDx7R5Q9EJQzfshX9uxQXnL4SRNiyDWRWxyqAxtFgJNnX7Te6A56aDah",
  "key9": "CsTtVGWuaYYgamw7hdeXx27MhEH5iYQnGCGxCCYgMdH3iDsJrwizyvJhJun1wU7DZtLDtbMVb6dGXsHSuJMGQxH",
  "key10": "428a3SWo8XmU3aMiidV6KjRmbrntEp2JveBjBszGDJ9qxCWqPK2d9V9ABxgYKv6kvCrjW63D5odP1MgqP9oDt1bj",
  "key11": "4MPbA93N43s5n5kNorbsGogup3AUD1Fcqx6XvFB8GEFqLrFtRq4yG5GgZwTNWwFgzx7WNFMt5gRGZfjpkmT6GCcv",
  "key12": "5Fa5jHooedSbbAx8pbRhA1F8iwyGGkjunHqfXdneZrjAQwr1Yc76WiofEcGgrk5N6EecCERaX43t12BAyqvN2MrC",
  "key13": "7az5uTXcUTwVEqX7uS3HuAt3HofBx5e9YzodXA7i79KmotVphG6toK3B6ywmkpwWQCDBujDoJwGpuvbS245tAb3",
  "key14": "5hs3hbZKGNPbzpDa5dMXX4XQy2AQD3XyBAdYq8VtTxJTE5Yyhzg8MpPxmZfJLS8rZNKQuTDo7fzS54GXXniLYPPa",
  "key15": "2DiaFY1HSCD8ZbLrRrsvWdszVkxG2B6zvFrS1Dbk97ybCECYfcXQWdW6X3tARNBWLAYwWmALjfJmpMycSBQ2sVxA",
  "key16": "3PmejwHKERxwT9AiyLeWah6cJvqbjShACScWWEjepLHkoka3bZYTXTYXQ5Wmrv4XpjotBp6sJaP3715AnRnLHwkV",
  "key17": "5ym1xrYiZfbTPuWoCJNjJkPJwo15hu2sETTZ8aq5MAgLe77DaaqTe1jrsKEGqcN3rz8Vx6nSdK4fJuCCgSdDBwQk",
  "key18": "5qPj1r2egswHGi4sAvqZmR6mH3kMS5dpSYbRfDyXouEavPWJmMtar43eK6NnWpzUbeqAZwjX3xBXtU4dnL63GKxw",
  "key19": "2N44pZNNF5qZu844SHbdarJDghrAXECGZu7CwEGoTBSNjW2fCdZyFQeWLKz41oG23mEPfLjrLhRQnzMCbMRpStvi",
  "key20": "4qc7jYAxUmGJhp26RqKW5a7imynoAKQCjF2w84zCbGXfqUPe1pFPo4Fz82bMkqBjgYqnJRGHom4QNrdpqYZV6r4E",
  "key21": "PD9mhBWxAaC6U6tNqt6uNZd27eYHC3i2oLehQ3St6Dnbs2kxJADUguhLtEKMKbJZ2b5fg5yULHPLMvaqfBNV6h9",
  "key22": "5QPnUWjqohtGxJyVQfkKdiFTpRAadocdhfnrrgj9eMHU6avEB2uznkZcFCs1fALPToC4oEHpeDJBoFmEpbcW1aRu",
  "key23": "2ekWgBzKHq9N5GAyYTrhpq1jJHy4xD7ZbrfFWKAjRiitwJat3ej6vmp5GfTjADkSYjCWmhchFtZRyqQsNHpMV3ZE",
  "key24": "5gM184X4pj76M5sWtWH4AdhdsU9KhN8akyM7zhoUdhY8MUCLWzWwzkqmth9rXMqpBohhgay3tpvwEB1aof4eN2dL"
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
