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
    "3utBGXc2ifDFreUd5aTuRESDFafsaQ7UGbK6DHZ8YoM3153pQTkUBpLvwMEC91R59poaV1ukiqpy6fcTxXYP4N5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nki3zTie7HcVGtH2qhsgXdx2Fyn8Z6MSfsjag182PivkaQfoCsjNUMHvyXZs6g3LBmR4qjDUP2HDxX4kuZKrMAj",
  "key1": "2fCgeWjJtCHvPt7DrqiUzgTBVxLbCCdQvn4iHnony1mfey1Lbk2PXXMo721jaqmdp9HHQzbSgqakWEEcXXjjv2qX",
  "key2": "5wdADrPrXvguGqXcDBLB4THcx7cUELDXXgNyKgV5gHtmVxo7U6zZEkwSjVJjjKKWhxzCnNGiEvhkAaBr2bZD9Pud",
  "key3": "6AKnA562mb4TXjRxUaNNYCRBymds5KYeX614N3WWdJiHAdjMoNUgAdGqSY19gGuTPNehWXtaVBNd7sxxbmyMXmU",
  "key4": "4Q9xU8aFRKc2Ww2A9toqr2Mdq8kpvoHTFsTw3Bp4fNwcnhSn9E4UHPg7Eyxqrtm96udjqPWqMVXqNGYdhVxoXbR1",
  "key5": "37qa23CqnQgxYiuqFv2vmopskkNLS8Xc7tksWEtKgdri8btDcjVw67ys8QRaNRk26ZoiTAsyBkstgLcN9mCFHpff",
  "key6": "u87iXZBJDrhNQLGiCMnfDpF5wxqH1f4ZzEeUatVMRvtwwKy8VXn6976aTGk9MYSQnKvgNjfvLrxk2PKyvcZ7tHh",
  "key7": "4efbrtN47v65o19qcozEBKgxCm2JCz8zBZ4FXhnSnGhuDncWnJYdcLoES8YvgQ2sJzjqWNoYZppaPL5xLhzUBEJf",
  "key8": "4TqEBiSQy89ttDexKJ8nDQged2p5GsbQEzoBh3SbMtiCugwushijwyRws9QGDQitnNEckqepqwB6taw5gx47G3AN",
  "key9": "2Z57UTZmxcaVWBqKn39tJcHyNkPKQKdaKAwd6ir1pAHzsCRtDZq9YmdMdMVpqExFs79jmLxFFvc4Dru52womkQAP",
  "key10": "tcsKRgFerxTUamb5CAdeTiFMub8roYRE87Wwp6Dt28kyj5iaKpzBXQnTY1menNNyXWhQBYTQVfg2LVXDjfSeXga",
  "key11": "YguhiFGmaTv4CB9ts8ii9wLMQwJKpR3kjuARbpg4rNHw2DjN3wjDmWmzFRBMSi87BbCUT4S2yXn4CxiGRFmdAoK",
  "key12": "3m62ADp4nRnLQbdAZtShYEhJQgjNFMEUdpTSap85aTphRMnvAE4eUcxqhDE87eAFnFCeiV4gvpkZo53AZkPhytV7",
  "key13": "4rdDk3XwjQZA3GudNEbaG98Gs6akbLDWmXZdn65ijmYM68oJQX9jch5vnPiaVUv1XsY8B5P2DUxTXYcrZ3RuTYmK",
  "key14": "4uf9Z1jjSLmN9iH54Y898AsDwWd7d34wQiSf82oXtKRH2x3qA8wg9CujnSwCnWBqG3gtA1VLfx6QZuJDY3xjUk1T",
  "key15": "2mgyDA45TYxBant1UFU6E8NyuhrHacT3gNJFQnk2jtrYLaEHTf2SQY8JtnEFpb7sjiAxyVvi3mze8jaxjgm9S3uP",
  "key16": "TZARJkB91xRg5qEEo9QUWgV45XaSvqp6SyGL7ishmDG1uJ3BjEvNuNrWNnrvvcYoa6rS1AMh12V3FmXziqCNwQz",
  "key17": "jY5RwhHE3FtV18CSnBZ8HNE21jHoDNCP26GXEYZKNkr7vrhm2q4LSZerN4NU7zT6gadoayY9jkGAxu8Rk8xPjGq",
  "key18": "XkMf48Z9A7gEorbqUGhKQwps5VGJMTzhKw2xeEE1xDQDeg7ZM5kfyCRHdRb4RGfKAvZpyS1nBKNrbj4GGFEGm5C",
  "key19": "34cFYeJgbmz95mopAUed4PEGhUnWJado9pdueYhrWEuaf4LpuxdjRHBhfeYAKBtxWLGU18TpxU6y9Q9PDjKgZc3q",
  "key20": "J2MFRbFYKKaYH79RHSBRU2ARaJLUAv5T9ud2TQkX7tEK16uKzDsgDe63LMZxfipFTwnFMqDePUhoqHTbTpx8Ge8",
  "key21": "3vmPPNRkkXdTBnMtwwhFmBx5mQLe8Ko3EC28KCUn5kYjFWZCRVng9Ja1csSbwwyfw1kX8zVKvK6HxhdFDgAfbmMk",
  "key22": "5fUC71ywZe8mCntd957JNUDxrErxtsERvoGZWdhPUyv2w4i5hcDTggoYooVvtg2oLXMDhggqwHYQSeG6HjZdaH8i",
  "key23": "44krFyVuTbufFYfQUASPft5ZGfyBLjgJwiEi2HHU1kxfSSsXr7aQMw77xo2PRM1yKTn4d9NsttfcxRFcdJUjEbxC",
  "key24": "2fb5UJkRyY6NmzUg8KhkPEsctMU7nPZKC9XUNnfy4rVu1msu2ef9mn6bXTG77w3iCi8kTMghqT9ocLMvqFEpgfZU",
  "key25": "3C872w5f1q53ygEQxPaEQYMkExnsPJBLsxC9FTgQnV3huCyEyCnvvxWwt34331vz6Q5PHfASDGg4bCWZxTfwH8zy",
  "key26": "4YEyedD4Qqk56nEiWaaN9G9kj2wDuUUZWXiorjmfpoUne6ausxDcGRyaP6zivF1r973mEmQQJiuhYBs8TfZbgi3E",
  "key27": "5xGczfmRsrZazVrTK5sChKpYWyPCQKNrcNWKzstCCjGhscSwg4q6RRvPiEq74fAkq5dcJEwXMyaFwGnD2oJbR1v4",
  "key28": "RrYLUfpbk2UQxcexPGoLvDG6cZwMFT9opRKGKYjrofhtwdkkALcvWq6hpsKgSbWaXfzEp6FFq7nPEJCbytBujF5",
  "key29": "wTmP8Ka63qGfQrSBEQJggsnQTBLSmBKHupMvMpZttuhHViPv1K1RtE4AJNYJj4nioTKa56Lcxj8k3N6WsycHtJb",
  "key30": "2YCSE3MgYA2Hoj2unpiVTdTPNBn4SGYkNd2KGBbSqy4wBqKyBuDreiAeyNKhJ8XLN1jTi6NhEGCdUercx3SyNGwp",
  "key31": "2aiNZHjcUPSMKYts9Vf4xWSu5tPpsBdUFrm4xaRXH5u5RTWjx9kXpC1r7pidowd3D2kAZUfPFxyUsq7Jnbag3PTw",
  "key32": "5qvzpyhm8Kgs4KXWJucmcoGKUmH29JXHKGau27i8rP9yQqQz5VCMQQP8Qwj2w1sQ3exJJkMmegaWm6geiUsTgeUb",
  "key33": "3ztBmJnijBGrWcxM2kdWAuqqwJWJ4J8EqnmoZyARxP3GExM8wrn6hLJxYkC1yfgSQ5XoPgqhoY5njSVHt29yBJ6n",
  "key34": "254juWEaaPtDHGTuUwEPrhR3hnu6c2zbzQifp23EcaBHLeLpKWL3bzuUDkPEj5X6hNgw2g7Nc6q7rwtMABcecVMe",
  "key35": "3Q1S6ep4HWM2HxSK6W26EqBpeaMxRWKhrca8dJq92bJ1DR4fxkZMXVUDCEkPmAhbUKPHRFoTjRB1GbTQgY7YQboD",
  "key36": "4K4HboWLJhLg1UKDMVhMcG2FTVyVGd3n5cHrZKxdZ3mR9BTc66VMxKsfkZNvkvmYozGDg5iFH4UJfkVXTSpxDveV"
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
