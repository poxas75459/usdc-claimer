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
    "4j41Ma1KSf24zimzrWT49QcpBk4igM8VBvEDpsF4QUrg88Hb2LmVqxyhnwDMpX8g8eyJXMAf7nYJRBHvZsb5MLsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xbLKX7K5THtmGLMevZV37rJHLWbNffCjy5A7nw9CNd1bWe3NYnuQ2bMqSYShPc6qDbWDftqMbHU4Q2NGYM75EjE",
  "key1": "8a1cdSrog6odEHf6gD3jKNRY3wB9bC8cXSbEz3ndj7zbDKGNk49w5v5BfcbZZ5S7y5QJCXNJW6YWq496GHvyoXy",
  "key2": "U6RRkCbFSMetq86965N2zTueg9YmQ7M5C3NhYverk8CoaebdHnncq76t4PjqSKvLx6EsChVntRZKShiSmVHapfy",
  "key3": "5MPxRUekoyT2LLSdXZbPmdSqjJp6VZgyKEXYWZr1eVvaiUU2wax4koY4NgT1zdm8d7zLqBH2Gc9mrXZifb7xTr74",
  "key4": "2agjJGnegRzCeSNpJP64VPbWFV6zPyXcU2xVWDE1rG1jbj5QV95mwZ9GGCPtNTiYttgn8i5ERx3xfCXe8ZG254Sy",
  "key5": "4Ez9nBpjRTvsWkanGeiwZhCmyFWNR1qpLG4h1AW8rTpahDsJAVAG6bp11tUbcSmbBkTjB4ThsBdcjthwAL5Wbywy",
  "key6": "3hAQJKbBpGRKKWWwomDA8dq8ZGrjbha9aw3u1mXGKAFC22UBYDAWH1522Q6hZQbKwZxobuy2tHzK5HTQXR4j7DiG",
  "key7": "2eTSx1La4hgh7EnUsysqSx2zkC4jXVTuoL7WAKSeR4FEQzAUSKQU3jKR6joQCPCb3zZ3Q6UgxLkdeMZcntbtNqux",
  "key8": "48SYyP39VKJec22vjpXza6tQ3hasxokxSmz9kSBcptgzgdNxcbPV4wUhnTa4T8ypVG5qfUNr5YuMbhfh1U4iQfSj",
  "key9": "3n6fjXDjnRsJQD79c7D3qV8djqFv7kWJaz4cK2QUsgFftDKzAjTRYBPvmHvSnfe5FfxsczFsKK6fcevPdmTxPstJ",
  "key10": "9wHrqhCDt6S3VM7pJbEzNzxbbZRSWdw3btQR8T7Wo1cUUhuu45yY7oijLSECpK8gaQzYjxgUQVXQwo31QHBvADN",
  "key11": "5U9beiBW4QikFji2EXimTgWwbqRny6FC8H6cSBEAAaWBzDBkoy2eXDKgW1jixC5ns6726Kb5pLFKebdMQxffMVXD",
  "key12": "5LoZe6LcHSnhWbGJBQvu3ZtpdSCA9W4vNqRxNZVBEmFQNzEm4a7QRKNMQuQXpQkN3wegJAtEp8ScaRySbb7RFYiZ",
  "key13": "4YQp6v4yJirguhEmamy2U8qggezf1B6Bkc47EDfzbHTyUCJnUY2bG4mZTzHFKEFScRPFMitQmBzvFGjH6RvpWNFB",
  "key14": "VsFSjmXqUFHHZDEz2tGA9zzu4cfNKCTJzfYyjmqeqBwKCtXpEZtTAY5aXjPGYb7p2qH6Vv6BpPjMbJGL6hEWnCs",
  "key15": "5GiWbn6ETYGN3bF5as6SbuD6xpTQ1YYPBWuuzTUauJGDkTnmw89T2gTHWhc6rFxQCwvysfdi4odkp2jkxvgB9vpt",
  "key16": "5i5fdLczhayqsRcpZCJmG2P1e46Qqd89w3UvKgfgh1bswBEeSuhKb5s6CLRWQPrpazq6ikobTZozfJ8NvHHz6EGd",
  "key17": "5eV4K1yg2JzN5KAeaeVDpSQ1YCh5JUwmcsfoJXscgeHf2uw96NW2NLZdE8tLZskpfiiyuvxCpaPSxTqpFpp8qwXH",
  "key18": "1CVgZ98puRKZp9XGUEh3ivPVdNKbdcZgjLeMic5j4tWjZrmoD7ftRwDFMBcg8t9iUgdtWDGGzUUPYYE1toBd8nb",
  "key19": "3aLGhGfG1qNHHEqP9ZpxdmLcecHcNeKNJdA2HeYjDCW89RyVds8JQMyA4pdpShMxst9qp2FYvnKAYonjFaS5KTDJ",
  "key20": "3jtQ6ipCaSJzDbJxgti19WCsFwDzzBM1Zn9CUbiV6qDZ3fKi8kHKc3DD2t1Xn9jtNirWcnAs9gtyYYoRhJknLKHd",
  "key21": "C87nT5fpST7kELUhSt8PqmxGAZCBFFEbPC7yGQsVgwW3V8ZzEWuRxgwhGNhpCWLxidPLqj68v7yjKTiwrJE6W2t",
  "key22": "2XmomHLefHkkcptvJr4cXEsmbtZAfwNzuQWFRt6BAAYGAqoBjjoppH9wuTJxiSuiNfmx2gKAsMwipmKWbUZnHoYm",
  "key23": "5FRf3TSsoSrKvtp5m7ZDZrdbdRabL2gQTiHKbX58mK5aBQggx8PhrMrXfxMrZjLMzgCgq1dWF2BDwLk2DV5MjW3b",
  "key24": "5ajXwiY3M1pjqR5zrKn9f1r2BbTyeQmPBsAAgSz2DasWsCKNjXzLsnrkVNxkXKeSbdHoMFD5LWWRfrBWuHhKCuyC"
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
