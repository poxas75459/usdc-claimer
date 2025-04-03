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
    "3oX5mJCg4vfgwjki9a6B8prrdejKJsZV69RMEid1W3oHuTaSRizd8Yr7zxgTL8BtsPpKmqrFpAwpbKW4fs4RLSzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNaWVu5xpGwMaWvGkh1sSYya1RPMVHXEcE7VWrWu49BBh22tgTjebF21qw5wzn7VeN3GdKbQFmFehS6HJy7k9BZ",
  "key1": "26LXQVn4hAnB58WhHz9kKcamsjDB6jCR63wv4GJKEcpzmmWjPb2b8kwQMrNGeWBQSDBPm3mkAuvNCm4CX4X7Mk8y",
  "key2": "3DgoUViu4mnTML8rgyMSZQK5yTjuX54uxxGNatav5j6WzcSkUtEcaewthKfxXDP99XxHJaBmLNoFgppqWUw2XmoG",
  "key3": "63sZDwbBkVkAemQYNSzRkfNFq3Ybebz7PVqNgj4vXJQJ5iXRcdjWV7oYoxM1veHpaA6KL51fq6CZGbXWEnqYPck1",
  "key4": "4XqTK8heFiBV3xw2Seh3Mk4u1npYxpaZufKfGuoJiCfTkHCekCcUvHbLEqBVCST69HDemVWTNdZew8i5XqHHr9P3",
  "key5": "4VRjHAvKgs4hA8kYpbPqu9PfFJzR3EJM4KMuDdKqNWcEUEJRriAwRkSwhEX2k2ERrMWFa1LhAgjAgCvv2V9ohCju",
  "key6": "5cvHH9PWPSjNdVZ7XMCFpvF9VcsUJGkjyJgc3pQHhpd1uDN1qde9huSVMhTXm67zqG22k26M9qcwVXBRoSiMda1h",
  "key7": "3P4fTPpTXd2NiN2GwsQrW6jwQGocq69QCp79f2dfq8GodZq2pdpm7Cc5KtrtmJigaLeRCVqYDuKgB6Yiu7mzFJpN",
  "key8": "5yb4w9wTgdYkDebaMRDn693iTAnNdgN7j9H3FMQQsHwBmwn43Aa2dbWR7LhnCUjvDbnLuE4qwHxZT4fqzBJNLWg8",
  "key9": "3VzWhqZaq7SjXA7sdij1cMqSibcCKXLBRHMHaFpsZND3h5kMXiZyzSbVSyv87L7x4jMHXfYwU7x8uTYLK8K5SgPS",
  "key10": "PNGm9iBJf812dkXbjjjpYP98Kqh4HW8xuKasVpZ54Xbf9ZNjHjLoXTpd79nTiCwAyaDKLk2rydvsqAsjN7jGRPs",
  "key11": "3DDqDqUY4R2hJC82qoKZdiaTEeW9Ffj7Vpd9hVBP8BdWpwP7YBxGuUuUzcYpxaDGEtuiQrjL8eJ2NDGyyUq6WppK",
  "key12": "3UcGBWiEfG2JKHL2buzNU1Q17w2wPXkWHg4UYurQeyx5pTyaNpLSGmffdP89w1vWXAaeqaf4Lt72qtR1NCRS7zr2",
  "key13": "3YoAdDiqFGWhcPJPQNe3ZzxMxV5qJCcokGXkRjQJtRPVxcpeKj3PhRGjYRe4KybB9tPasMfc3MYMeDW5m1pmQhRw",
  "key14": "3bFvzkWck3BJzwu3GbyjoC5HWioaFm33gAdgaSVKyx21kNXV5mquP1ErdHpxW9x69QmmtgV9GB6LMqbRfUndsuje",
  "key15": "43G6t2KjqV3dbT2TYfso24pQGkSQvAu3hUz91bF2tqrFDLveCxR9p7TDSsTAfDsZGCxvuVitfkpevwZycAQv89wo",
  "key16": "4snYEz15kQJKCoWPuiZbnnndffZ1sxoEPd6xiTcdWRhL8fK5FPLHzM94Qj4wg3CNWcG9CkNDNeiGYcbAdQHDubLq",
  "key17": "3uoAG3v8WUFh6jbhaJ9j5qv8tZctJy2zeyka46CufLemKiEJ7eAVLr9ww6B8Hnnk9VwMVoBV4EYUCCuTm7LEgb4p",
  "key18": "5QgcTn9dMqDTazkG4xHhg2AiURFZqMtf3RozqC62toM2n795dt1ye1quCrxU586a2KVae9eZ3w9Frjj1G4JW4hLS",
  "key19": "5xiGXMonFEWbFMKSnLo5SrPukLtxqebX3MFEpmAQXZrgY9fis1vTSkfkV3uCkiWKNU6uYfFw1rGwwsH7tv9kzWzb",
  "key20": "5EHTyDVQbRRxGaoRDtjacJXfCpP8cTKDjgkYWBK9LTk8nECp8zBiZP6ppGSYRXzaF3T5zkbr1vj6Ek3XT4dRpSYp",
  "key21": "5h1LxAdFTQcmksTP4BjFvaXDYseZDTVUdAh1j8Qqjrg1UMjfBYQvTWt1Q6RbaBqwhUmdpQDr6GYVC55D6yytuZAc",
  "key22": "5w3zwEoesAf9q35cBcYxti2ZogWjfgayLZspVddSoMuwLJTkDL3ZTBhPMFXC9FiRznEayW5Sh6QN5eUHwUCmVR71",
  "key23": "4AWTWesemu4kdR1PiCsHdRieGjtbZ2EipQJCXEfVa2vXBqLn5TQK8sD2z1UvvNrkBi55KjgTLAyaf4Z8grFuBcnG",
  "key24": "4xDcvwmW5FWf169HpWncqKzdLsHFMoyaaFTgRwPw3B4pWCYyXcPnY5eYnRiaV8auau35Kp59vpzYidFqJkbjywrE",
  "key25": "2k3fuRRNwtq5zJPxASpYrQZzEdbHy1akh33awsB97aN4ggPumZPpSpZ2XFFDsestcSinQBpQnD9uGVVgrwRo3u9u",
  "key26": "5Zvmg7GvAwLGcxgYVWYnZ3dasLYv7pg28pjRAZn8MZzbKrP3N7n9WGgeeTXZaYtKbKEGVsrALQ2BbKgsVP2af5nm",
  "key27": "4C771ifeq2kPMZtW4PMjtZBCqofuB3q1ZRW2Ne5MGTanPdZYGqFHRcBFZgme93hzEhZtakwrmWGE7usCCx4NiGSf"
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
