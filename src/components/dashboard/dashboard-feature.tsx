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
    "3UfckzrsdCc1RVRRU3Py17h71HETqPKMPQ989qWwVVSDmxL8QdiRgbj2KZRkxoQdxz5GGu3TeNRvBwMda1NKhixQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ya3rN2JHHXbdDvs7DvBHaunuNDT56ccpEgMbs2hyWJEHZA1q6QP1LkjDw9KVtFyELTQndL7xiQ8VkcX4bxUzygF",
  "key1": "4p3YyaF3Q2bVStrz9GJte6WTB8SmCZ3WaedbQxPrAuPkyCjaDGnYGgpaEdnetYLbeV9umsppPGLUb4wzYcSjFBVw",
  "key2": "4Xd95DAg8T1V2E4tSm8YwxmuHP9aRz1BP1zpvYBKLRGTKr3m8bAbMdrcmwmUrhQxpA35GVQ4JXszVk2tSZrirPVc",
  "key3": "4S6xPZqr4gd3NzPpRLYjRrSjMLnxTuwAjRDPr7Rwv8kFcp8iR6btN6kUqSAUgCzn3N82dGpdPKx1ss7hX9s5KZy5",
  "key4": "63oNTfN3MAuji6ewcYDMFjrmTBPRQPfBvBLiz9Vh93YfimomqQ2MzSVNei2zZGmiR7S1Y85b8Wmu5TB2h4Zzj1QJ",
  "key5": "4kEdrCqXSzip9cHWa21r7U2DFwmGq1kVGgDwhZhDvYKoJjnVTP9j8S9b3haWZaWH5Q3x4ENwepQZ77B7BSihcJpA",
  "key6": "41SW1aWqbQFHFJWbfj12hdmuAYxeJMnL9BHsvnUQr4tncd1aFAUyHuHe8EzAn7DqWbjYzo1VBwfziRDNZ79kUpBm",
  "key7": "3gCV4YdJ2STK6jFBydbXxbXocY8oFeX7w21NVpthgrqVHZjjDi4gHHD1jjRExNT7PWZ5nxjT9n85MqivneSjvJXe",
  "key8": "26TB8YrW86zJN2MZgb35QTd7Dz5AuS9w4v5j5jbMYBhR7RST8AqEL5f1j6dMDTprt3dYWrMHPEsYD1TUfZtMQGB2",
  "key9": "2nhYKGstvNUhTr1zSjvNJdntc55x9V1yv59uA2S917MQNup7fDQ5q3HjWk5iy2pBHgeftkP3rKdRXDirdsoh8ayp",
  "key10": "472oTRBbaa9LD9pFPhyj3Ga3HxyxkAFydzQKxnJR9otpxuDSDDefJU6GqMymW4JmPLBMKsNJSVApzE6YuqhURKL7",
  "key11": "pHiCxd1x94k1boJo3YD4jkGe59J1gCLENUM6xf5MMM9GPEfBJSdjXfHTyFcK7uF8SJwVxCfRcUezhAuAPMR2RH4",
  "key12": "CosLMHZbBDVQrzCVwVXf4j2SpdZBMYjt4zNirywsvDXVF42PovC4ojC9RFLPfbncm9LtyyCNNk1NxkC4qMUX2SD",
  "key13": "4hQrTqrw4AhF9d8cqi64VDhq7yrM1xYFVadLtAyJRQ2tLM3c8zbNccZ5nPkvgjwejqU6ouQSiUtZBiDH93BcqvEK",
  "key14": "2yomKZeTMZWiFp95FCEZw5F7nujarvFgMFsgf9pTAAt9Av5KAiZCuMoGwQrSz54Wf2EJm4aFkDk4q3End7t29hvZ",
  "key15": "3LYH9gTeMSSCc9EAAJ8mMPVMXv3iTU5doiwykUDp9NmfykFRKYr16NRUF5jSkDxfbgks1c2L3hQkSgk91t7k4Zqv",
  "key16": "4Z3FnJBwmdwe2XrMErAPTsh789aK8wVU9H6uJqenM3UgG7YfcQVNNb591R3autLpuAjQM9HNzftzgffXteYdJ83f",
  "key17": "4p2tTvCDEjxKKysWbbwQ8X6iwipPf1r4KGH5z4uwNtfpGYAM2LXEi6qgXiQawTyt144zJTzAVwscLV3nWsNBa8vm",
  "key18": "5EfTxTvGNDQF8142vvsQmNxKyvp4ujyoHxjXn6U8RhuWEXZb9ZQTWuCdRjhTqv4Pdf61HkLjC9Rw3wLean96XPxs",
  "key19": "5wnY9iuwvJjYQKxqTrZhELCqN6pBXGwKFpQ4ho9ZcMaNcgjrLDekim4EGbwWZcTeBeZwUarH3UW1aoXYc2N72Rze",
  "key20": "5SihnEgejghKmGT96P8LEiAVoXsaGn6yUifFJUyd9oto6ReCNkm6CTXv5xHYxDvmELMXge96cpEfxJg6W71WEnuV",
  "key21": "2CrY1CNLzrSprqiWrTxVzc8RPqcpzapJndfpx2dkpUayCrc8wtvtd6j4GvrZ81Ngx2Qsnm7U1HpE7Rbn1H56S6fP",
  "key22": "dAjBdDPQBQC7JH8YEyQ3cerYTsuMhSp7F7NHKs4AAXC8yn1yVdoXqad767Y44bSD3RypZ93dDjLXJxkyyxjeBSo",
  "key23": "4UTurqUAodK7kPRf7y7qumaoT9SBhXz9pd27nC5GDWKUqEFoKRHBTDGqd6k8aEzpE7HTae9rTjqo3JfvPddAMz2h",
  "key24": "tCy8cbPpTjarSiQ4CrFC1KZ3FbWFJbWtBp7pXM3K6wx72zt6kow5PHv3dfFctDyKkMFxFM4bLEqi8VXgguo8rta",
  "key25": "5yWhfC5vMGzoDW8YQX6YWgLtcLqEcQeozVQDFuxm7gdM5Ym3SKUwhRkEkzhPFLQmAirer2YJ6dkD4C9YfRfcsPCN",
  "key26": "4chYyWJVLXrgyt2GHY13rnjWUhtXh1LgkfNbFWZXGEUmC8YKFh3SD6sXNeEcWpyn3K2podTVWPpw2J8Z2BQTc7pW"
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
