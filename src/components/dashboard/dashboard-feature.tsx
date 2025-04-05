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
    "jAPSW4WUQj6DhAoLvaAxbpMNVefhHAYuemM6RipEVFLwXk3pU5M7bnCZimHnEhGcqAFkJReRm9NTuAwbY12L3vL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r2frvMXtVYtu1fqZxSPPkDgrrRcoYKFDY97mn9mtxGiGmruN9brAdyjFuU8SRwPfbAyCUaDULjB5i2WSpnroXYK",
  "key1": "41ukfgzipFVuy8ykacwt1r9hRheGTskkXTWwTJgNXAcQuAxHPpQ8jZGP28cbhHg8WKB6k2imVBj2pQAhJ5zkbGk7",
  "key2": "4dZUiDASu1jSfrKWLZYXQxe3vU9rjQ2XDtyAiNzyRnBGWaBQNNTJAuWtWjHbxWB5UzqXf83sNkZENH8K77nh6TqH",
  "key3": "23sMVg9r6yKvfU9zXf6Lnv7T44xtEtP6Fw2f49ALS1z4nbzjUwe1HNJHaSNsDfdxSP9TAMHzgvMNmWJFXFxPJxfq",
  "key4": "BeXyWkksrBMZaunWzEX5S5eazmLn4rqHTejUW7N5ZiEwLag4zTqavHKSbpiE1jo8EBvuQ1S8aicYe8YHJwVWkmd",
  "key5": "23uo1ZtUoHJw9sNY8Aob7vp6woRRYpBGCiDdN14PXZJohp1YSu6oh2BEGWhufHNdNMZstHbec1Wht486wc7QvidH",
  "key6": "4CkWEsiJKjVoDcG4Er36j6SZMbRnT4xhFt2Lm8TV8gfX1V6uZ5ntSmABPKMvkw2V8jBLisRZBML12g8rgjAsaZ4m",
  "key7": "5Zv8cArHxAnsCg8DeingdAJUi3oP1NfWp5KaTdsYHXEdD4uxAUbfkAkV1EkfmSMjnZArbhzywsgRtXTizf5R2xBe",
  "key8": "Vpa1GxocN8ofVePxWEt4rNRU6KUYRfbZoy7EozaVKGrADaTLSVBJXmH8ubzgUuzcuxpka3YUr1aug4ur1TYdmu7",
  "key9": "NC8hM1Uv8THzf4Hg5y6LCqiYZ3hbNrCuGh2NarCEfNZuouV2WViztCXWC5ber2XHzifSYiD7UeS2jbYGP9PFQss",
  "key10": "59Fv7kg9mBBvNUY8VdhfLmAdakqQWEns1AzXujudYSqa88JcWAq4MLNt2BquxTPVbMX7jf3QUARayZUEP3SAV4RF",
  "key11": "4bCeaUkiBU9AL9P8g8uay7zFGRAwAAXwT8UVSCGyLAnrnVcQLq5QwVBKH1jHp9hLtzn6DCTzhkNBmSzVTGBLcgfw",
  "key12": "5GEoAT1PeHXnDnDauy4dzpj2DgGRMaSmW2g8Lku7ZV1nGAdWQT6Wpq37cRh61tJ8Gfrd5XTYyamu6AU622TRqbQ1",
  "key13": "5xAgMNQYgzAHVf6JvYynNJ3gGULZZJfWeRgZhfZgchiRvd4FoDxTFQsanxZSQUvmkNFTPgduivw2RHBx6xBLgbDn",
  "key14": "32xPhgYbUkq9waG2RLBGpz4Gmr511AgEN9PtikPVcHcEE4FLW9gAik8raQTqLm61E6BxPg4a27G4FWyJRbd59owy",
  "key15": "4qYHzn8CkCyESaPK6eUpHgPRx5FnSccpTvuBKNFKTSuYseL4DPVcJzyYnXVNnEyLHvqwfQtoA35Cz41K2mWbkvVv",
  "key16": "4osAihkaGhdGA12pnbaUVPqgdMDhKUxpgoPLM9KAFpQsUNSGvJBKKZRM989NPqcWd9XKRkQRia5Yng4eTJCiqMMU",
  "key17": "4RH2SWpqTAVu9LH4Hh5pE4rSkPhoYm4zCpKdW9eXX9VRKQWfk4nTjjhJhSSLXTohibrBGPfYe3Jb5kP4TPPquZfF",
  "key18": "5LACu4jJ1bczvMHxWitcEebRWR8JEhe9yoPcoTd58dPDuGUuf2WS9TkYijDEtSHqbeecjcvSazrnbt3xXZ6qocmX",
  "key19": "P8r7EK2ULTPgws85Mu15oT5R4nSZmegHbpRryBB8a2U9FcJiqyr2iuQdoUQ6mkCQmxEhJJR5jGXSVrt3GsXpiPu",
  "key20": "2G4f9VCxdA7MCe9nnKCMXkzhaSZb7WKbjShWuex8pxwrJzeZb6AkwJeeGnQ1JZLv1nTSdpJyEkedPAnmg2hBtYoq",
  "key21": "3m7hAhARbZdtW3V2LUmsaALoFHJqhRxjd6tNXwRtDJ26xgubg81RMdMusZFTpmvBw1tGXyk7aU4g7gLtvJDuAUUi",
  "key22": "4timw599zwmbTZhUuFxHyK5UqVQ84VrRsJPtfE14yyc5h3DsMYfLQwYsrmSFWGUCoL3NBjZKehcs7LpKtoACfZ4Z",
  "key23": "2Ab7UwEjcJMKEcz8751VZvTwcjRvxGJHqJUxtqSN2pgdX8SHotj1D7fNmQDJoNKw9k9nD6dSPHC1UqSNahe3Aqt3",
  "key24": "2TuWJodRbrGhnRRetJLTMXR9LzE5yqjpMTmeDekDergLXgQ46HNrwH2XKHPqy4X5wX5sWKGZU9bZZqVJFreZrFpB",
  "key25": "4o5CUTnHmsKNjVkADRN9jMfATZWJcEDfRk8LRDJVsWoZ5Zv3PYKbfM4RqSgQa5cAxYnTrDAmLq1hrqpJxjkBdk8U",
  "key26": "5qo9CFzyqCEraFMWj3kJQDiz2o7mzW7xKy957eyMB8pVow7XnX3eCbknVUoi8xkZkv2YmL8hz1XSc9u4KeHBaWvZ",
  "key27": "5gCywxc5Nnno1aS1e1oYZLTH7UEXqpoopC95LwrbcFYbnu4tPY7xsMEzfRJCLhA8FQJF9pBhRVe9SK8ES2mguyWS",
  "key28": "47xnLBuKrbuRep1C7AA6pReBtKZDuCxd5vKVmz8Nj4GcySdTgDiaZ2tn9raw8nr5weDdA23bKasDeFvE5EtJGdT8",
  "key29": "3NEHbNKnsfDqWJ9BL54QrBMSma7g8CizRZXfRD22uR136AoahDgHXpjyQUdLb8PP5VgcqEPuCWf7vTKERNNt8Snt",
  "key30": "3EancbpkTkCA1KcKJLKGePLYEiM9qkC8XJb2NpijPXYU9JLR4hGbY5o9nmbwofvE4skEoJJKpDLrzkPrhdhiFFB",
  "key31": "nzGGPUcTgYgmGWMDqZfkCw12Hw8ittrErkQkXq9cpiYrbix4w8MMfZ6ob9WgwAEPegGVzoShSwuFVArA5UHSYQX",
  "key32": "mrrCRCVAVWahpDzMX2LPZ2VabKgaVs6S6bEQvcfuifyVFZTZv7qSPFeEWRcEoA67DRvXho7f2KfXJBbwMzKZLCR",
  "key33": "3qWasizcadGmA7HCv4v9mDLBUNh1jfF5x9PELWoUwGYkgFULnUv55n8wTuB4npKKh9Yskp5xD64C4ToEFik2Nqqy",
  "key34": "2VcCivLLaQBTYxAcfzpjc43htGuQxKxYPMocJCKrQd5E2XFokCZdX7sp6GeFtqSTTv5z9Cn12Cuk89266S2pBbn3"
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
