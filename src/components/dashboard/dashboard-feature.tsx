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
    "3xhr6gT1XxpsYohcXe4hBaTonszGqNf225rWL6kZj521E6SoXosynvWbHeh37FTAadsonkBJpfsnmryndwVGvedD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "539fV2p1ZqniHZNu9XSPzpW6BqctmTRjUpoV9N48xyggY3eFBS7Ks1V3qc3pZt9zyG21bBzMpszb3w4Y1EcHUWb1",
  "key1": "kKCksKud9sfwQVZmN3XdfYNjwsj1oJmAPJKJMrFsWUQ9PkBVPRigk7LKbhtG3y5FUn367CeVsUob1B5tddwmkXq",
  "key2": "5mhg8hDeHJ1Cozqy67Z1CYs8GnoJVdbbEaz6qDadBbXjjN8BnkmhmafSu7xp4iXc68mWr5eCqB5ueEsBwSEWNsrM",
  "key3": "3u7zbvdiRJjzp9n2QmsCZmZDAAt7JS3Jai2LFZvg2YANi68Spdeh9S9v5VSoJEB9NHUWiToTHGdyBD9F3HkXWHu5",
  "key4": "2BnpYDQzPtRNkpnz7G9oL4Q6x6V2GCXoT4VqHiuYUGnbjX4ia3Qug8h9h8ZBBLj8SMPz5YwyWwyroPhK82kw5CP5",
  "key5": "5uzodK9jrPAH2c3P2XFs6iT8GLZKToJp2BqJrM3zkwyGoiD2WYd8fPdDja8jtT9oxCp5sn1M6H1mDSjKMPp2d3xB",
  "key6": "53D7h4Tcmgp9ar9G8jXnscFCKq6MU5FiXGADiVy5GUWYhwRJCQ5FwEAGdfKfemzQLJv8FBFcv4PDmMVuab8iiEHF",
  "key7": "5dLwjBFZUY6FWz2fbp74CBGWVKDtFMLR4xYqW2RHQWkF8HuSm7jd2SMq8BV2Wz2kPSGb2jNagajxGT8y8TwfEsSE",
  "key8": "TQ4vXH1ew4d9dshEQ72cEnUfPiT7iPGBHjHx2qH9CqFH1XeEFjmJFwYYx8Hmsb8FteyTFtaSDPoaeHjjHXcKmTp",
  "key9": "4mk8n5Um6aPMXTKuCXHLsV4KM5it7nWU2AMw5JJjt6UXySBTacZptAnWuxaZSxJmi4hkqEBVmNPNfmaqED9Nqj5g",
  "key10": "CrgBtfA1WnMi6r8ky8HGzEdZLUCWAJwgCdMmE9EWt8PPB1WBdorvfAQAybxuSjVJJRkQykE7FcUs2L1tWhsUnzs",
  "key11": "29yUEyZvDGoQQgzvkAtfjZecKihakqqfaoFAVwjeZWvoTBTYyGwqVZnMZ5xpiWWuAhSnbZxf6oJWDjadB1qnWLko",
  "key12": "27ML1NqFXVBjF7SwFPGfVxCZVwNfNXZ2C7t7BkexHDEAiMA6uPxp8z9dSmDe8g2mGq7HLMfRASCAJQBCh9pDEDuV",
  "key13": "3Fqit8GM1T2xqpjKVcdGhhjYQR3jEZVXo7Ck4SK5ctxC9P1N5FBn1CZ7epc9fFWKNbJpcrY1bTrXJzxisZFX6HNV",
  "key14": "5fVFJyfKu6ziyCgvkdxBwtPm4didv4EpxW6W5oEfWQPtFYpJ48sp8qjFHXAwmJqyEFosvBv9jt9AEe7UVRjXicp8",
  "key15": "yF99XUd8rdheWW63gnjvLYD5QM4tAVYgsYB7XedMi7HNnKBS26hFhcoMozeVfar8ijg2Awn3vqpQMUEjyovHk4F",
  "key16": "2SQRdFMyGwhVvTcBEfZNJG3uMY5xCrf5zjApjAPFDSubBsxQ98YhTUU7qBeyLEF46zwwwV2faZgKBmqFA88SkWH",
  "key17": "aqWYiaZVN9MN9Yz5AZSJfG6ipwVmxJhL9hYXsVzyrdWFzHQRKMHUdTbJdWceEQg6KiotWF6f569PXqn5wt2i4fV",
  "key18": "5MykPjGJqpTRXTkYfDjGvKWDHFHYJWPcYvH3YbL3NKmjdz3p5bxJgG1rrSsG1PGT5nxe6GWYiAvDWNRt8Vvthfcc",
  "key19": "SixcBMD9LwfJfUYf9Uvw4TMKwVyKnt292NXVyauVpF9BiyWqmdo7gcdcFyp8QsiTqppNJiErqtkJgcbXJwrFPdY",
  "key20": "3tmq3rC7NHKWiKW8d6sBGQK7d5HsfLKak3yiV6NexvS5SxtuftQyP7DM4TMq79yXhBPRGwAeiYxMRNbtGoABp4Gd",
  "key21": "5uBghekdVU5PGqmLUfEG15WSfLViwtzuRgy1grZ4YNkvzVLzZckoNuDZb2YTMpcSSkzCkfrP7LS36SuWZuaa6BkJ",
  "key22": "2PAuWcfXS4oEQqCWvqJPcjwP7Y15bUoSsaN6PPgxBeazeCv4dWHNdtvR7dkpoco75P5GRt5SszkdSbpw43jC5Fpm",
  "key23": "5ieVTsFRhuj5CifsA8wUDMa1xoB9Kfg8oHFKUMUPz964adaJ1tnuCn11J6QuThGDdzS1Ggquz6oNUpe4Yo12YTuE",
  "key24": "28DXgx3jfPtJv5T5r1S2xPi2wA3NiEWfqLAp9DrmAfC9uzGiWFT8pGPF6JJYEC3ewP3FdKHkaKj56GCrAYiHz5VV",
  "key25": "9ixF4on7FUB5kZ5mrU9ou36AzxG6S5tKRyFJjAeF1N8PXQXonnkdD2ERVGyTAFc7Lrr7hwtXfxX4wXTgUrdbtDM",
  "key26": "JVDuaTC4GW197M7whUWfDGbhrVxkGLLdapKNjJ49sSra3C9W7SzvYGYiVNgcwpQtcQswaCRgP4y5cDaWMHg19fP"
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
