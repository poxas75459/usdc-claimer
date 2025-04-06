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
    "4pNnoox15FYSFuAJ2nrqPXT3FhaXDVeMYpasaCGaE4SqZShfUvXnWTi3xTLXnBdTj6gbo4eDraVuKhuWBetL3gun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VM1wDojW2JKjJJRKak3zLxe2zP2sDS1ZmZ4xNP8yMt5x2jVhFEt3pqUxURQ2D8wbixksDPEZH9XC3CPPcBTcU6e",
  "key1": "5QJ8zd6AxgN1zrBpVcvTHEtpdM6KG291CoJRjBPTKcYedtE4MAwnCEXjBafsUTnhtfc9Jsnx2jkXnSEbMytufDjz",
  "key2": "543WqZBSK4LwPzPSE29KuAJ95M77Uj9hqicdBX8C38C64EjVqnb8auBT7gaXk9BVkC4GGZRSvTvYG5h6QR95tS7M",
  "key3": "2hY6CidjjDvBf9Lo5AmyWKSg7h9pKRcChptpy19EeJAYtvfa4P87PeGPtwwdSCwGHFonkDLia8Bv99xhxUtGsuxh",
  "key4": "4zirhbNJLrazeM9u3rYTUUgkvYihkESwmKwbqWDsyAxXb7n48doF7B8Sa6XsRzgErRRc4DaJ8SMnca6h3vc5DAUR",
  "key5": "EkVkG94gSTYexvJZspa1jQA1ZX7hVD7q3Wd47N49uTGv2FtHPcZhSwrc2WH6NHfYXM9piquAA7T7QcJRsoroAeG",
  "key6": "DhpCS4m5PT1kp9v9hhfDs1XmDUtuNzRSNS5iFbjUZ7mKiqj6Ay14oA31PJxjBuGQYoHSBVDUvA1EnbEgSDLmCGN",
  "key7": "hdLjre9Q6esjaQeaTufoRiQzKsQgqBbncggymFVm3yB4vwpupuxz9JugJetoBLQxuEZYohGzLJQwJGcPJ8nLXD6",
  "key8": "295PcZ8ubyP2fcPfFBVHoVVxCK8V7L2LRGw3qrQ5FFpBkzfrwTe7QtaiqjGqzMAe1sUTdwkgUSNQ4WB9hrdujn55",
  "key9": "4QFLDTx614yBtV7ZAo2QYy4NGrDL73wibp86mzmScHdc6jgjgmJUhsKrad7r6DMhgMqqdKSamBooaZABeYwuX9VA",
  "key10": "58gsAjkb5CDgHkRsetHpnQgqkF2aJWxYmYKtu73xgJ1SkPDYnRZ9vvwWm1n8JkmKM6yvqzCUgiTVTq9QLigeVzE1",
  "key11": "aeU7rV1JruEyWNP1qzd9f9Pr2gPA3wFCZYNzyKLq5Xd2FKnDp868CfW2UEdcNKsvTSf4yxZNSdyoiwaSCe6E713",
  "key12": "5XVPN6C6mLfLgAhkMusp2dz6C5ZABqfmxGaZW6ReSFCYNDGGExFKUgLQ5vrctQBxcF6ANmcV81TcpAqautHaJLu3",
  "key13": "67ANprjHA3E7BDW34ndkvXMsgJyzkzteLNJqR9admVRCZQi99Prbx3JosekSbmtFNnbS1WepdD7ymdTsbvR1FiKx",
  "key14": "XTYrCkLcGCs5H1rMZ6pK4WpSgZJkwUW1N3eyBdLmHD9zz7nF6p5kjb77ymbSziygKx3vB6ZajexUqtq7Gu6ze9e",
  "key15": "2Fu2Ms6hZY7qXaDP2mtMe3nkvjDMpXymC4MpZxe2ueopJCTt23Gs1LKwnsSXhPAbGMdRmMyssjKVZaUDSpmreL6T",
  "key16": "5v5tbaGMSKh6GrrhegZqFRA5W3XbvqPoLmLkiNt6EkUYsWZHLnxw4CM9hrRMMieksxFPu7Xx82yoAU615v9VLij1",
  "key17": "2AxEfEV2vw42vhFVuTuMGyZidHehzadm1VgypwrVvJqavrNez1FV7i531i1sQRsPWWAQayfSfwCzDPrXJdnfnJwY",
  "key18": "67BxAuYKr8MUaXh2idwpmcvTioMXHUoKJr9RDNpnXwkbb8DP2T9zMU933PaBSBkkjkSyt8Aj8QGRWiyBdbHow4ko",
  "key19": "35XqarwtWh1HbSEUgghPEYNsb4UnYT9aAYzjSghcYMioDpQZiSuokNyRr1cgE9LPCBz6ycRuPWZKtTA9fdewgcgg",
  "key20": "cDzeuWohseUiNNVtASwKzpep59135uJasrUUBq5GR4mYCEGVoALJu9hqKpoSkQa14pTEgkoBgwS4hi9Rugva2up",
  "key21": "5Zt2pbayHyveWXaFqYGSEq5nKugzAaTuksxfYTcRENsVLd6hHUXt5miSexW9Bq4rAXvTX9z8ujPHdjoXA641ia5W",
  "key22": "3g8CdHh4hFPbBv6DBVWu4FYeCpbHt2z1D62J3XFYgMN75Ruqh56ww9BXG85YNMqkwLQKxdp6zEtgoFQmNgo5AxcP",
  "key23": "59Lo8xDMbVNRQgggasY9cTPCGPnkg8a2rTNS9U8r5wJDvSCiHq9xF6KaitzGQAipf7iygU1rt4UrUs9Ng3wZR9Ci",
  "key24": "2tzcF21itFdJXK8K1VkfFzp3VFky5LRupkXGJdAahHuGbG5kFTouJsx2mQs8sNBTPnFqvfF2jiCeaoTvFaCJzP64",
  "key25": "5oPTHugHRHa9GrRfQmtJZ2BPm6HxmQmw7v7PpYpGddNmfVc9po8Deo749GbKWQ9aa7eWiiKQHFSTcjsH9hXFqw4V",
  "key26": "5RKpLdS7izaKQNY743Psuo5Yr1hXbgqnd6AxrJGFM2gQWhUpSLBdTWnfAPdyFAv7J6Lu8m4Fez61jWqJzjhg5G59",
  "key27": "3CUkVGkPaGnV7VHK6a4BSXtp4sySU92VSpRbGmcmoAsFYfykXxYbSCMTG7seMB3kwGBRAT2ShKUe9MjiLMfw6gTa",
  "key28": "4cr17uZLyf7AfU9Ura9KzybX6PeD4JAASxfN71XnsbmmqptdoQ2hgfoeuUkBVd3tvSjzke2jwLVyjNsc4g2hMiAn",
  "key29": "5Esmau77tB4g29KECQEqPDxms6qLKBRYmvsryYLtVz2fowo4Ddrqqt1u82fkun5TPRjGVSpowCjwfxTj6EzC86yD",
  "key30": "42S9i4MEcQ5bwnBuoWEt1L2V1AgBtqYwprUDnieXSj9Rzw4R5S3kLg4Syhp4Bvhyw9tUqdZJvh8vcd1W96a8r2RT",
  "key31": "5aNLy7VGTxSZSoYizaLPBQDkaas5BShQYJBXQhaVwtecXTjfKttbxoM9PRYkrBdXu11wVGczn4YsBw8rWqosC9ZR"
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
