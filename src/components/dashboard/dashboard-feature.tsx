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
    "y154msipJ72XimZXW6YJhrYYtnC3nWAEYDXxSB1uGiyFhRssievx4JPwtWmWRbK5mv3xythmwpzcJH85S298hPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hwQ6dqssYqpbDzTrPZra3DwHGRZb1SeBCXPMAM3kRC8ud7Kra4YZZQWhNe3N7TbJctELpkSmRqqYSvZdjidgtHQ",
  "key1": "2D8KPvrwCykKAdN9h9K1PHcR9V9bpUJVNR7EgNWgD6eXqknnu6TZoJVcgDQ7PuuzBdjjexqEDRzqbXBikMtxf37m",
  "key2": "2waWB6vuJrjt2sFKchGq6tVqJREecsjdKUh8Qwwv7RQ6x3JssBDVVf8mVrXRw3uzpZzyjLtskQJu8Z4emGYmzKyU",
  "key3": "5S9Adyc8stN3q3nEiXJVLKbmMppYwzadeTU46tAmYszQGgmWSC2ZZPQG7ZymLiDTuMg7LJy3xEVyGfbBycZN298Q",
  "key4": "31bZTdr7AUFgMCLLp4SUD6WKfVsfvBz1ae8R1sRW5coNDhPM7T9N8vbagp8XXpEH4WD1s8ioTjQ4ks7AaxkZurYh",
  "key5": "5VCECQVLUWBi826tNFtLirKNu3div3a2MeEyH7YRPcdsqTQo8HqTZSATVBtCStxbHWAbDmWWoibr9PjdXHc5BQbG",
  "key6": "4x9Bx4GjMat4rRwjFz4kahhYtvfVc1y2yfoGciHuAyc96D1tckiaaZzWu1hT2wiMF1xa3vYw92PtSojojDz7Ns2C",
  "key7": "42GzwpVcNuFYmknKAcdTLQcTrQnuNxLHY3rUJdu1sfRqZgrznzuENnceATutZQm8djJhUhvo5tL6fiX2VJvRa4bb",
  "key8": "51a1jaw2y3hiLrsAyCQqQGQr8CTNY9SQoeRREsApVh7UGBJrPpUxHtAFxRecJ5mKX9EHJHcygvAF1XtVvUtVSsTq",
  "key9": "xG1dCRmaHRD2EYs5UvM88mpAtHUga9mcEkkDU8xziMtWikeVLQfrNWYon3XnauqSoUMwC7ueBzxHyab66cdhPYX",
  "key10": "319TqtUkp9hbafK52CDrYvq8tU3HxeeHE2gSAMHmXaRcxPd2Q4PrzvwegmQ9Te5MCFUb6FQjuWRkJu7PnFtxYuZr",
  "key11": "2CwKWj6v31ZgdEHYdE6u4HxErFtqmaKP78gzeRtni4RDHa1B76Zo2m2pSHwhEuMeUcS6WfmdxQbVr5KNaqbghMrJ",
  "key12": "4zQJoVedcnpCobYGJ5Xv3jdiyLGWpkzQ74Gk5zUMT6EiK7dUxcyK6Kdx12WMoCw7XnrZqAZMRiSg8Vrt2puj2uS9",
  "key13": "5316EnyhYBNvf8w18NBoxSE1SWWxKtKrFbrNoPWwHzopThaWp6aHUgrJqE1sd94L11qgwBVMnPjY3kQrcY4UcMbv",
  "key14": "5uAZVj9u2sgqM6syBPbQP42Mtmq7scFHU9bsM4MNps2xrkKBb8MqiFYWWN5uuEXVtgRCWBD4fy2V9JrBpvn2sPfi",
  "key15": "5sLijP328zbAcCRo6BTvnUwAuXwJLcxzSTXVeDKaRRELs7YXcBSHKur24SzyXcRT2Cexp8EcCQ4bhzAZY6KK5ou5",
  "key16": "RFmToYc9KaywQhL6cEFhCvytsJ3Xg6HkQyh31SGMhkTnAK8g3zRwSZMcR3eNBm7FA3L8danokofVLBNTuZhkmCW",
  "key17": "2AKEF5LZ8bzY2T7iSFVfjuexuNuzu8tn21Wt96d5YRwu1WKPek5BM5f5SMtdjX4Ae6WRTXMaKezPBV1Xt92XKQe4",
  "key18": "4Nx9PzJ1NjKj6LbrYoF79KSv2TyoxmLBxsJ1zkvqRC1GJDhdS9LC9mS5K943m8gakywTsY2dGeLHoBiu1UVCHs49",
  "key19": "3phzBUvVxR35jTKkjjVQpLMSr1tXAZQKZezCwM3jHCaot8LYpbgqNMWfWU1wmmg4yd1AKtanxDXuHkQW5n8pArM9",
  "key20": "4oJKJkVWppLG54DWcHRk6HHgCiJ93uvU7hdxbLZiajwWahG8GmWRTk6qjGPuw2YMrAgsvg9vWKCmXt7DCCtwvv67",
  "key21": "BCNbu9H6MRaNEWrxAEvZezQ67nqaj33gxKtSaAHvVxksE7hbHep9KCHhprjxeNFBTRMUhDLDLqrCH6FRs37X9aT",
  "key22": "2LrdRrP5eVnMYpXjFTnYZBab4QZGN1Uuy8qys6QRjDnKVfnKHHyYZ4i8mLZ9yCEisCbTfW4jTAAGkPLxA36iBgWu",
  "key23": "2X1xsx1GizALeAMFSdQ5G3p9ZeQ19SLAfiWkFyqU1NSKppMQ88j255FkjcMEMW6u5roFokJC52eTsdh9Z7czXWgf",
  "key24": "9n4QTZiumKa5XqNqaenCewEi56BXGxJz2rAXAA2kBM4v7n3VZewNk3SgbXeXzrMnXw21yUfHGBLmA1a8FQWFXUr",
  "key25": "9eeNczz67LofLTRUL7CRoPe1i8bc23Q4XtUnXWsvNd2iabi8szLJvBSstCvfp7Jknr4iLFwh3xYwoJCG6LJFUmU",
  "key26": "3yeZ4rsoP7LcvCCXCEmnZG1CNE9dm1b9wbiZH5PSMsMVF3HfCzwdzn3EcZnDGgU7GL4o8b3jgRz86DbrDNSVKMPZ",
  "key27": "5xrvSPjT3ra2rTEVBMur9inniMGvV9Syedsmz3DKpN78iBjFZk2ABtQvrqyzwr8sKMoBSLmNTf9Lg6nRST359ntZ",
  "key28": "5eH16oQswYKbwQ9vNxUkNmTKg1UfLYCYMzDHR9HWrDxdQ2xYvKL2FU8UvEjCHy49gZJxe8ZM6z6STWzDMXJ22dHg",
  "key29": "24WySEk8qcLj4gfPRDZsqvxjDLj7Fw72wyFcFBPzUDJkrRPCgDowXLitR5QT6cMtn2j3K4RcoKyofzdvDcdkAP1i",
  "key30": "2b6ePpYK7MrDLSjDrDFdakodxQJueXnZHMZ8XDUtuHeemmqEf1ccmVCXk6Q5UErENzT3ijqimEXzsEBNxpV9vYQA",
  "key31": "32ZdMtnvwDZ8vewuHCCin92FY9fM4AqfPnrz2jSjpBeZ1b9jk5e6FMGfywiC61p5TrSrhPANrA3KcReRSotYSeT7",
  "key32": "2xV1TG2ZF2jRHZqRhTSCbGhQCZEwLD1VYsJQooGUu8VcHKp7FT64PfRLnzMBp35XhxwnH5yG8MXwMEEiUia5a7mv",
  "key33": "4E5SXnSj1wuFKcdMbUvT8JDAUwTt4jWbuC3fwxPCa4tTQDWrQremxxvPtXvpF6aLsy6KaMiSSyRYq6HuFH6cibLB",
  "key34": "59uNRHvQ41Po69PPoQN6mnZesQzHce1fgD4MnerfrEv8ysUcR7KE4seguHx62NYdUqpHCz3pr7QKk527QuwiiHY2",
  "key35": "4Y9ugn4LgkEbpDq1Sqgk1Ypr41EqWv1fVwggF172CStiD1nAvmhtpcpTG7N6hXZhLzWUDtQ3fV5ReVemYVhdf3H8",
  "key36": "4fqfhmzYLskApM1SfFYqoT8jjdyvQ6RDZ2mNCE6nWuBuKqRXcyiR921H2dJA9T2tNgyhQd8wmYs4wq2nf3xT9Vc8",
  "key37": "4H3LW8QvgZrXi3qXH9AqYNF6wu4FtBtRn2fW8H27DBaQhRZtBYXJUR5vTRc5HXs1hbMfr4YuWanvZ4HpgDYgUS7a",
  "key38": "45w4SmSLxb8QXwN6pipCsJ879CuLsWygwKNaD81SNSqFT8JqKwJsZidNfhZuT796JgVo2hJvZ5GSSaj2UikkW3bU"
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
