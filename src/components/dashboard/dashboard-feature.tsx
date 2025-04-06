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
    "tVv8mX4yorWXy9kdjpW6SQnQtPuv2Z7CKRVuButaezCRsUmC54yjqCJyxGbgYZq9KyzBp8mURJZm7eDmPNCdU6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KUZ6eKgykKc6vepysnDfs2U2jCqLMgxT1uwD8TUHWSxwhaKaFvNcY6vDxkX1oxrTQtbDKL6j37KtvouLtx4XkdW",
  "key1": "5gvh7QdvyvtcRsR7yLA9UtTLu1AFSdg3FyiKMAT93CHJBske8Lv1QyPWPVWjwmncJoVG9UtiY4yjhjaDFMMwR8Ww",
  "key2": "4YF2MkC8osiYvW6oAW2PjDHfvAwNpJYcnNPUYKLnJ6FgzXoq8S7NtPGee48YkLhS2dUV6pkGHzBcr1WcyqwTqwwH",
  "key3": "5wDELdtK4PrZDhq3HyayTtCVquuKw2w5GnEMLqpxkmYvSJxS1WoJma5SgPSAGs7w14jUbd1J8bCHspgQw28QATwh",
  "key4": "4zpoQRDcDrJpjgFAhYP9fPYKCfPo8z8FitbWPBQTrACpbWdMkfSsjedUrRwuQtBAVsSeqCywGNu3T7Cempyhj7eu",
  "key5": "5qVghBUVCjnqwTeV4wzMw1FjJegoG1g53vN4FpqPQfWRqvg8UZfwZy2MMibNpRrg275Uimp4MVLJtBy4QWHxPYC9",
  "key6": "2XC7BUgpUXb6HQL3bqDAuRnFUrr1nvKGRbMmN3Boi4XB3sM9FYfhkJDq8vneWKfiUdGe7rEXzJFCcZCK7gZZHGtw",
  "key7": "5AzCfbwAeDa6Qhu5NofBPgNsmbxQbB3b6CmWNVKdnW2FhGyEUvd6sejUkzXnMizEP61QtQozadSsRKKj5f8kJSXw",
  "key8": "5G9t33qfcUdmeHLuGBvDSnmvahNaY2i2YGXU52V3MLSXnhiFrmL1LxSvjCgBTNTS35zkw5wJDaR57k1Rv2WTwexx",
  "key9": "2kg9jmGQgmW2wDs8oWfcZkS2LRGLogDw3EVHinyyjkiYwGxUgfHvZKMBgERdqeJjxjEFpvRMv6PfzGVEn3SjRdSk",
  "key10": "22HdMPkTiBJzKtZRKmWM3PmXEjs4YQk8YrwunDZNZ9aNuw2czKYYZiJcuU4C8Qh1rz2cxyUpnA7Ejqcx3AcvAcLx",
  "key11": "FUbLzS3sr7Yix75atirh3AdLwYNi5XVj6NMqj6GeY8FziVQ1TMWbvSZA7sFmfZroeUyXK86uWnfzqcGc1FvuQyf",
  "key12": "5fBypE5a3sEEeb2SBLc2y5SteT6kMC9iVG92hvbxy6sH1jbRVxZ2v3mqLNCYhrXr8moPh4tz3EczGgXG1vzG2pjS",
  "key13": "yNGzk9w66wfWZEpKyPHdPfviviudsCaCzRKiAHt365F1q9XZ5oaETJiHmAgAfCGEPSFvwTmj261BNnjV7R49ozK",
  "key14": "2UY2G4i5dEvnWNdqwy9raZhNxbVfdvqF7Nbmm41N9mwjDRHAUjALAgqp5duKNWKGt1oYhUJ9Lu8H3mAiaPUMgrxy",
  "key15": "bZzigQy5CrrERy6LVa11goQozxS7eYwY8JUDSwxbYSLC84iuVHLLCmNWq7vYo8aMKBcJZgvEhV3jAYAHtbpqEdN",
  "key16": "5P6FXd5H8PyEtFcFjptYpi3uiVb8exvN8oisY93s9YrRC7yEqxbgggw9tZC8HESssThEMuyTaV9TKUcNwbXYiwPU",
  "key17": "2LYQ8BXE8ish8abiM9Px27QXDFTagvK2oeUC3X1U9j9ZYkyYuKpaP6aEE65D5BLSuEKT5URcZm9EvSHYzGKc1r4a",
  "key18": "3U5FZqWsh8dEx3tE3LYu3hx28ru9Hbe3MNhT7wSD2XvXdLvHsAG4fgiPV53Wd7XNL4Q1xUgnZ7vmm9dSDnzCsU4Y",
  "key19": "4wPcuRFT6hGXDAs32oiN9K5zVgZDz3XH1hgPdFUmyF6e3mwMsXydHFDokGfn5CVzSdGBQysGHrd6mAs8cuz5FEEM",
  "key20": "4irZ9tTNgaoCQAAs4EmnwmeLaZSQwt5vt7m5pTYfdy8Y21PPjr9iW5fwZ2q5uEBhvzhW4qbthnaPbUsvoYU9uDZP",
  "key21": "47CVjqBw3p9zUjKgNATMFiiyFp7VPsGs1dNju9WLmQzbXDMHwKEYFVJzNRZUimjwLjAiSezrsBsgNacNSkW3YLBt",
  "key22": "4k8DBvsyJCePaBMF3b2UPzXfqcB26cFMWcqyhJhPFTTphMghgHot11gd4nuiufxaurwVvYw4tRn9ZDmkcrDhWGkJ",
  "key23": "2QK2rdUcjeor5JdxzgwuPJ8vKvTiKbrKJFPBye27ubNuxkhoiBtRKkcxdp6vgJsuy3MT4VA1BV17f37bGgk3Cmsc",
  "key24": "2YBLjDXJGHDmi25oDXA9rJFSSajTcNM9wEYug19LGsvq6GzdzHJkHY9wKmVDMpFYy98dmsFKsgfMXTVSDkqm957d"
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
