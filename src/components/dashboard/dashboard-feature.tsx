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
    "4CYNdqdkQcTFi7ByrQECXpg6cpwWrnMbZdmZhpHe2Vcw1AgPSyduPaHr9ho4ExBhk8rkxPrsSd4erernEnJVCYLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KZCuZ4mMGQdztZ5cWWnLE7NV7CNEU8rvSupLjni7TYoH5S8RRMYBw2Mma52R2yoTpRkdxi2j6VY1qP2t3Rzr4eZ",
  "key1": "36uDp6DKpxSW8DjNX6oJHiBH58VWNeuQbQ16RAcBSv7wt81Uu5eVWoxEDUjLAZTiWXAwRiYFt9QivAmTC47NiHWP",
  "key2": "2qXTgRSffRgqPnKsmvBLd2QLqV3UsYx1H94RDGG8DSadBgiETT7zdWvKjqwgKQZ5qDQdrzmXdVrsVcns7aqGo7J7",
  "key3": "4Htznjmzg4YQX2RgcqrjedF2dezMnPvRg3oVdXMr3EEJEpYNsUYU4QFSEGTxjQ4dN1QbZfSJubppzjBkuLdDH2rb",
  "key4": "5drrxbPWuEDLgonT5XYuB57FBU9aZ92x6AfNmCfJnpb6vY4AbDmntgGCy7D4Wb32VUcEatgf7hk5PXyNaZQ8rcWm",
  "key5": "4aaCap3jNqBmEjvC4N7XXiGL4e6ki9DyRxr3jjxLs816ofigum27emuXkCAiQ358FpYDGBaHY6oEc5BpUYSozAxQ",
  "key6": "53pKttJPRfigT9Z9eis1BH6KdsuKkY6YQuAuKa8UE9rqgMjgYagzzmLS3ZKeUxEfwqLQ112SCnLxUefjzmbe8hMb",
  "key7": "3qkDaLnnyDA9JbkNq5ryEQ3dnfDHSWpTCRN2K5QA6zCSUvDZAfLmBpTjbQBZBUPkmuf9YQKrz9Z6N52zUmDK9U4o",
  "key8": "4Hj7YzU1w9cmKYHTpFjBmHaNXtXwTvKQddr8cordqcRnVS8qqhV6hzkj5F9b4kjBagtFLd2TbEFpYz8iRzn88gLL",
  "key9": "47dwKif1Rm7AQUJqNjR6byhWM852qeWZoUJUkFJkDWn7HW8P8Y66TY57oetS3AJZ9KWw7oXk5h6dh4DanujSeB2M",
  "key10": "2FKe9W4AYVZjzoT9L4FQb7R7GDPqA7hQ6t5tTrGZ5h4riiVAzvubcZyUQ2eevgF6QycSvVmBA3V2zwQVU7CDi7Mq",
  "key11": "64Fh4Yk54sJQUQbuP8RJytuyAYBGhafm6peAojzpWQbfrya4NUCTrbGTdphLTMiXXQRNM9VU41CfHy7r3hdd511z",
  "key12": "4J5EyiG6ntLDPJHdVYpsj5gJegp5UZwFcUsC9Cr6Zde33CGkpMmsYipQFU42cakYzTctJhZaamXru9NrFC8iVRXg",
  "key13": "4yXM8fX44raVSjpgK6MTmv5qnTdjv8FfChek3x6rtHTzcRF5G8Z4JYPRY7xVPxBAqsproCvjx4fbjRsys8VUXc6R",
  "key14": "4N1CyQ58qgFACB5GJndHfGvdDS39i4VRCD54PBfZHsdqsiCdisuG6NLihh8NE95AoVZv1LNj9xXCvs864nWKUTLT",
  "key15": "63RHMRLk4K3H2YXzhuUZJAKHGW4SSjwhzkxeMWaNrNY3beBZJss6H5UEPGJN3orH5DD7UzQdoeBUMG3NKknZEbHw",
  "key16": "2QSpiuGRDD5jU8hSWmmCTnqaKDmADGg3JZqtUDU5dzcB6eA47YcfD74d5sVf2F6S3Uwfk6LkYrtZzALrK2rNDeRp",
  "key17": "4PmG1h9eAXg5faYiSyDyS2PmQcEQRiTjQjXBiGCwTSRhWKVnr1aufbM5KraSa3thw7oJRY5AErZ4HW7LaN1tLhh1",
  "key18": "2dg3SyRSAGyyFVyyb4unbGmno9yymBcUsaRqXMka5F9oH3JnyVfG4VuPuh7ShqNGrAirfXZosbaH8MMH4u3jNa3j",
  "key19": "5kfrUU8mAuWNuqarC5uypG65kA33uDvHf5UihYnNoUHqTdhF3ANukRpK2oqYDzgBkyTEvaovDZs4tshJoDGMKx96",
  "key20": "4dDwQXp5j11Uhc9Hcj6AqWzpLNc5twwPHRZWV1NZjYNyndCNJNrr19kdkg5B5MC89AAV3d4xvcgq4LRpFrx1wEcx",
  "key21": "3bm4JUrRUiuALusZFNVnKE7mjz5DKE1sEWViyHayX1qSrgvjBipgYbqEtNkLRuSXhebd4CQevwLV2UdCK3cSxLkG",
  "key22": "2PftkmY9JERmNcT2tmQLm4uAU9JqAnNibHSBJNiWhz2z9u4zRTXj8isfsz3rifmyRdu8gLqFv9geRggZSnWghjeQ",
  "key23": "5WPGMmjDebEDybns6NE6TwAfqApNUrwQBcspg1kkL5JZ8CX3H8dgMxdcVF1t3D4dfshhZFRAghTc4DfM1Q6kc3Br",
  "key24": "4neoExZpPmK8ZrSyWXebNJJF7WmbCHAapY41qULFJfgv8ogQuYS9koyEaiVEr3mdk6LVSQck5EzyZ7ErJSa6dVrA",
  "key25": "5AWV2cqwjpvnCmb7CVgq2847QM5uGXzEUZVqPQvFjD8d9PTnBU8rPDYp5HKtXQcvDTidskx1ctaMtRStaMG14dii",
  "key26": "3jLwKCGWMx8iqfKBDL69PSrfwzzudDiFXydJ5m6JMyuBfWcJ3H9QiM5tRav24mbutTeCjxsxebaSw7RmiVJMEtMU",
  "key27": "CsADzMduTcXKbjdLPr8w8ypJg3Ek2PvgpZHk7xkV7Kms14UhNdCobX8b4W6SHK8pMY77xZTKBdTCGjAadoBQ9Ty",
  "key28": "RDs23gVTF6MUgFz6dPP4D91gPBzzmmWvz6idu9Jy1HyhMTz2EUz6Hcf9ufTJEiYGPXmAR6DbhAgb8CPjGTeiuJs",
  "key29": "3W8Z1ppgZyfmuQuar66Yn56rrokro4EsRv2nG8totjcc8upoBCiQW5bNXo5wFqaLijDSGWEFjuR3h4qiZVQ6VZR3",
  "key30": "3xfpXy1PX6ycpFS7cgjK3px9NRwQh3j5E1zKVW7PEev8iEJ9TJpwsPMuUAfWfeag2X8XweZqxrFx99bwmHYn22Ht"
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
