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
    "62U95rHbSPHeukvNqDvXDmoPfmH4SCPt1rvtJ58DzHJ3PdqeLGd1pBecXuqvUx4t1ADxJc8DqPnGP2mL3iEeLvnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fh2wZdzpkTpX3nZVmGHPGMzvEUXZ9M2BXNHyD13mLW7sg4JYnEPvoRTWP8sP8wh3HaXFyj3T3eXRZm8J9M8fByt",
  "key1": "DTAvVE1YyeZJa64wRHVApaG7GSBTund9vxkgrTE6ivnwKN1dKjDiP7aTNpSikgde7JKKVecJdqbQXd44q9rwzsm",
  "key2": "4Dh3iGGU6Ge9HodQDLSGm29jPTMKBWxLL41jUgQr8hwB8RiySkbUoBN8M9zrkBy8sHwf6J6XL6KomLqgEMGWosuV",
  "key3": "FmsYTB9pVKaw8uaWVFDhhXHEzoRWTDeX7KKWo5yfzGi4pA3CE8ZigxTBYiV8ABZfbCwb64uRtab1cT4kAzzM7XU",
  "key4": "3JjGfsBUc5xzZMRz4QA3MqKfZdGmr5ejM4yXn3JZUz6GpbQioz5HqLYAUZPM316qXGE4JpxQPpEHE2Rnvdanycfm",
  "key5": "3xvceTCdB63To2sGmGz9DfF8NULgrBR4kpknfxxcz6SDtnaNXLK1Gm8jF1TPwUxSUCGYyHKy66YTCuXFw4ksSfRh",
  "key6": "2GBRcUv6kafi4CHnP68XsN1yiJpYz9r9ZPtLmwWkfEEUnTgqJDj3suJbfPs3RSvyNbDJpPTxsLBgpJYsVanGTsQW",
  "key7": "48hgfcQDYr1HVia3qh6yP7xWKbC9pM5NHzFpiJeBf5aTWNAik8jw6Dr2w82XpS1A4cW2bNXVAbepuFKoHTfooWdZ",
  "key8": "5dPb6XVSxgcJP6aLfANYaLmf8PsDB1FpD7wZGJJw3XYAuFZQVyhLReziX9AmBcqzkgF5m6qoRE6tUBiziTQF2Wqs",
  "key9": "4fwLZhV7SG7nCe6D8DWaSZgV1vYHvbjcTjB3bnn1FTwHatiHdLDf6ov17xHJukbCU2TLq2kRY5yrV5YN1NyEdgeQ",
  "key10": "2g9qttvTmJFpSLAwpn4BTPy4aNGHMeut6T3D4czftF5hv6ZSHEFb5fniK5qUMQzSVJ7wBLxhenkLe8oPHSixFHYP",
  "key11": "qySKg7kraguV3Ug3mX6ZUxdz5rjg7MxdBfvU72J2UgjxjPdo7Dccyghqj7r5gsQaYfraAGbx1ctAmctrMcdHj7n",
  "key12": "5hyqNXv8ifeXL38wGbRfjrTHJciJwEfzaKqmu19Q3DK3oy51AYeBwmpTcqAJy4sFxUbrM4yxAuuFPHvBwis28NsK",
  "key13": "3W4B9qoudC1BGAieuucVre3wQJL8QqHTa8gtzjo1q3rZCzKLaCeaYiXCZTnSBAPoGFY5Af3XDZLfkNDBnFyA4szc",
  "key14": "pxj7T6no1DyhaZZcNyYWEpQ2M99GdZ3utCvbzfhjbEwaAMtQyboBxqp3hvNo3aSwBFMm83F2MNpHxYcZxMRY7fa",
  "key15": "H8hemnzZ6NXLGEuAfSG6VRYACsFC95R6TWTyzEbqhBchKEFKNmU1cSd9pt9RwkdqcgJ1uxRaCHyuDTC4ckWaEdJ",
  "key16": "4UHz8GWMdYN9SkubcHaHsSNrULxXXKf9m5dLePgGbkqF1v4H8JJCgYnXSmF9syTo3vDrPE2Ts3gHExMCF3CnaVWk",
  "key17": "2WGhXTuJazvMNEf12pMnhijHjqrcDWbzUPf2LzJWm71gKxaspomNwdezSGFsVX6NNDWDPZLZhGfgm7xTbXWgmJz7",
  "key18": "3U18u8HaRZ53HhehQECaZzdRri55oL44oo6xNbrZZN37kwdjNqw2RdpvVm1Jm5noEwYSigkHfgvYxYP8sNSeMgw6",
  "key19": "LovftsNjXe6AVeJdD1zYssH6T8jfJsj7xrYPdcGMHGghTKdk19AQjdeg64cymgC1xoMhHMDoCpoB1euQtaaJtnR",
  "key20": "3w3SBoub8EhCZkDUBxi5gf88xCDokE2wudk2K5V1tYHJpWjZ9sQWmtFLk5oem6d6st4Z3Tz3FrPe71cFR3c5r6Cw",
  "key21": "fUE4cxiK7zGF9Zh55ewoJ1EcXojYMYkbkdBFzPUnGdHqFVxX4BYVhdb3c3NXBAbdUZBYB9hQ6AaJWpMBaPnVQ1L",
  "key22": "4urf6cYFGHiaiJt1RfbNkCFb63WkD7KJ5X3CRfregvG3D9QDrnej7ombnzLh1pHmgZYYmsDVWwt8sZdPnvqdhphz",
  "key23": "4RpQrqg16jCTnB7h19TNY9mrkTkSjVZG8RskncA4kZwtcBjyxg8VeuEd4FXoY1WfqncKKxtHbkFfiNckvKksXJDu",
  "key24": "4CiHKojJi3nFggETaCBFPe5cPE9DSDypSqsfoAPspbcoDnpCbhuuXEvrn3mxBBWHpnYA9sGuVkRq5QYNvWnYHrir",
  "key25": "64qQoZLFFpkKXThSBmj9r9a1Sjo3KnMVzLKxyHxErMJbFFzjSNFacfnndTJAShN1Sq2CvQeTtmCcwVWjmokwfLqQ",
  "key26": "2veT4ybcQCM65SDgRkJwP9oybw8Q79g9EFPyXFGgvBdQocqFXEMg2AJysS4Y9Y5ZB122W92G8W2dMWXgaNXw46PU",
  "key27": "2LBZ16vjpC991Z2wYLW6Yi4dntwDH8TtKnoUjS7LHvf3hr94zCPZnBJ6KCosRrkqj4EdBnTHbpWog8w6GWhd4wmp"
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
