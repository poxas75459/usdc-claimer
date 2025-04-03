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
    "4PrpPmyGwXAYTT1NTBejAc8tyciHyhcy3z5aB2gR1HBZYeC5XF8pgPWuXp8Rhmwd8qeCdZ8gkm9xiRRJD9uieHky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eLh43zG27xao2w79TaeW3fEYV6zNVVuDJfkjNDNyv6metkwiBs6NUEevg3Sj8nZBuTxztbwJiZA4uAEQcgXu6mv",
  "key1": "5KaqWyn7dcqnoqh6HEdoktvUuRUknWyNXHbmJg4XSSvmdJ9VBjHHw1yaGz2y9CUyEdNzZn2Et5ewfAvp6TwPJfjD",
  "key2": "2ftk3ECJYkqKCCmLbi6zDnm5ndmgRQGMFqzYscJza5xzNR6VZBEHK5ewUNShbCFQVHueYXnTwfDFW5ngCgnVAj3R",
  "key3": "5ceYsQ3t9USRpRvPVY727mBkFjkZ7foi7eiMhbR3biXv4B7xANiFSW7EpyfDBgzv1iuf1hJctXfDfmKQLmcMrgFQ",
  "key4": "4Pksn84V25EfyFYkimDX6KqqvYZThMGoEfXb5P6p8zMCrm9qu4qJbtw53bVWPfeyjasyow1UF9omUd1chjoipLTD",
  "key5": "649LSKHaQ4ocpkxpHfrGKb9jWuQpyvPNGzdjgq1CtgSsevFi6X6nxV9VrffqKAgh4FHSK7qo7LgEKYvhYJitZKDm",
  "key6": "2LmgFbtVRZY6PxC7XDzWfasZ1n8LHeXX63QVGnBJ1q3BYnXS7jzRzQQB9pX3bCtNQd4wBhne5CyqiugLvHwnsgy6",
  "key7": "2xmrh2EDCKnrvCi6ZQPMTwvLcHkEzR4J3CWokiMp7ixftuqW43nPSHLDT7aXkkEJ65NbtMkSpXJm2g4w8PwStRdt",
  "key8": "3ZT86thPoBDJmWU8zjPwvK8tNnnhFkabCsdc3Gcyw1VMZNugr4fpMzuPMjA3L4nEkv1UvkYnWwX9QoVaHJ8AULBm",
  "key9": "8cu4XbAJBabmnJfmVWWr4kivYr5kowqFZYmgNBQVjBkffhhcqz5xVABexv2ZHA2sbgfMh4nWQRLKs4TuSHWS2BG",
  "key10": "4su6pruzLMkDrsikKNfoM3nvtgY2U9nw39VPdDYfdF8o5WPhmZrivMo1hJMuhusBxifSkmbSVioeREK3Rif96Dhr",
  "key11": "4Ako5v9jfr9Fkq8mnbaVP2MainsSSBH3wT6pYzmyeA5rcUzRdfJfe9tf9L4d7UodYWqNkAuxgEmBEupxsCLxwj8A",
  "key12": "3oeFHqs9Deq67hedLP37yJ9Ty74cXmKEzpk6zZe8iBNuCRis84b8vp972NbCuh89YeT8w6f8nsuKrUWhFFxotwBJ",
  "key13": "5H7XbraJhPvdYGQnYo3EUT58XXkbnXhF35BEw134L6RE9cYfPVL68aVqMpJayuEEm3zJK8tj3hYSBZU7QT3Y6P12",
  "key14": "2wxRu63dUrFcr1HTDo56SAJyUoUGSEsQNrPXd3rHSnQoGCJV2Gc8xcV6RJY89J78LUHnKcnbi8BnFZTWuKpidAza",
  "key15": "26STSEEgxuKTcuVvCGKzhkgevfH4gjF7mFLEYVUsfFVsMNBT6XPgDwDZmrdgJJrJPHgGDn2qmLm7yH4EVz6FZJb8",
  "key16": "3eBvgN7Vi44u9AsZFYZWVsB6aQ5NdxSHU5fyT17vuDMkXoZrjMgEC1cvG4iNazGnjndgnhSoQPNpujEjnhWNfGfa",
  "key17": "pDU8dC9uhP7LnW1qRPP5qVN4iexCSnqgU8tzVhMQmntBmvbY68YEtScpFvZDLnG4MnRkkuZYn6hPduM98cK9b6u",
  "key18": "7FqQSWaGuTsJZfG2FGKzYzxEZo5QfnHSsmCCMYvT8A7NUPUq8efjTo6LdS6sgJSzw3NMVFANumDBLMWJANrHCtg",
  "key19": "3nzXXXDrSYEQMEsbQ9oSfA8NkJAgrwwvpZruqnnNcTi3ukoQPKG2VTXDvu3fmdCvpL6b9bwnvwQbGJfPkK343Kh5",
  "key20": "nvSYSFx3cNSncmKew488KiVw5CFGjoSAa9U8xXEzJLrNnL8oUd7XmUMjuSSXVpqURDdUL3jSzQxoQNcHdaiKvUx",
  "key21": "EGipPyAoy5cj5cEZUX1QNtvNcTURhjAZTiofCuRzP4GRAn7qRdRT8QsYNRhEBtqPpnej6B1NAWpK2Qae4sxES5K",
  "key22": "5V4ha3NfkhvbBPEGKWxoc6nwNFfRhEHZjDUbNe4YKgK1Rdn4LHsZWVyBnPooqxxRnYcbkiEX1W3rLiGNNBPhYG8",
  "key23": "34yzc4vF8t7THcDCFR9vMkjU1LXKTttrEKw89MLr7nn5puVW7rsZEQ9TGbUrZrg6bDDcyRoyiZeJFM49iS91fNF3",
  "key24": "2yJzym4tNZvoSxpjhG6xGps7TovU4booKQm1qBvqdjx8qTjx7mQYoqyFqUXiAHFBe8JTJCtva1nyiUPUkAQounVy",
  "key25": "4YETLsA5BnfBU2dkcSQku5HfhzgK69DKCwd94sB3Cph4j52zNt7FyANpV2KGNTkbLKy4BmZC7sdq3a7bZHugti1M",
  "key26": "2gC31JvcE8EG9FvfNyHARsyr6AfB45ey5APLTcwUsRVBkbvxApavedjoG6b7juBhPuCjJUDx2ksLCuE1FQFqbCtU"
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
