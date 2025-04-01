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
    "9M9g13cjUDqFtsp4NKh1A8R4HU3jLHPWx2ztHtk378dM8jiKYsmwyYcSFcV6fZKi2uFk2uPfTt15FtkpxsP24ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xxgPKWiRG78mWFfFToE176yS6cABzUZ5oLPd9XZRP1pV8XW6eaLgt95fCEwYZ6bShzWPtUJAr5SKRhYk8pHvEn6",
  "key1": "31r9aSzf8wrEq7Df4S7dCFaPD4kefZNzJMpe1msQttB1dRJQgFVDJPqa26BGSfc5eTXymWFQB4Mgi4VM1us46Gy3",
  "key2": "3JQCPAyK7K3tqsDXUbaMXn5vfaoY9Be4wHm8RsHFnBSXdJLnZCcgVGpx7ATqW3SYGE1AWNaXpuQ1kJHX2CDpNLhS",
  "key3": "4NZKXSaEszqtFd6NWypMSGCWLfoXnH1Rcdcrj243yTGgmgxuYfjxyb36uZvySN6AB2etyYLELZhv7LwcQfSFBif6",
  "key4": "4PGLZx6F2y4JUMjSUUzWJDYm56qA3AnXfuvvVvHPe1dhGotwrWSpdewz5bguLEv4yh12vtQ6XB7SAhdpB6RFsm2U",
  "key5": "22XSx9CKULR33skKmbnGdkQxd6FwX4JRN1QAyAjb4b24Vsm2YxHMRwVE7jeKzHbmwYhMAYa5YYuiotrt4m3nKoYz",
  "key6": "3kZ64gaUNYZa75S3XZWVKw2786tMLZzYryrWLbLrSbHj1d5TSrHdReFSMEmBv7uQkhiUzNWzdCeVDPUrcX7AEZNd",
  "key7": "5thGbCnMQKtpmdSXUHdEsj5ovLNrkDBBQ4CP8UWrgJegxZ1wKgmaJKkVqrGKSUdRpodZmU3ARnqeXdAwhpbXvy2h",
  "key8": "4sSXNc5XLFyqg6ezrarxZNmnPiALohydEimUoFJuT1zuDosq8ZnnMEeoqSAtMJhWgEX6tL5AQfC9xcMwak6uRD8W",
  "key9": "28hfPHaH3iNVQbFHc3h6PH9jhjZ1qTQSUirMW1T3XWPRMneovoNpvEsworpf3WN6n1PuvccS71jACFaBMVSfiEBp",
  "key10": "3xSfiQsnZLC3EyzmkGvT1Fe4SKEJ1QxNVHnHSohqowvf2GJo3mYD7da5KeSS5UyQv5DGwbcbVKp98j4KMHypBuc",
  "key11": "5F3oqKon64xkkiEiyUnLaD6e6sqR3pUh8XwSp8iip2CEkCWWrGaoxpA4wEwQNtUvrCjgiJDv7m4k3vvnbAeJnfqy",
  "key12": "2dsZgkoAYvk8Wt56tC74JRsvJsi5XgAtdGyCfTgdKCNG1GaWaHcbW7cUevuJJnmpm2FdYtbMw44U7DchRyZhKWRJ",
  "key13": "2im7wXDQQgHYLBqEcB21TN9AyvWhbo2kQQbnTfLZc3u964BhCm1YJUtSSDnqL9biuU6r8tbUQp4UoyCMJzNeL5zB",
  "key14": "64hstasRnZbmo6pjBBrHpk2b1ff61LetwudtZU6YCaxN3SoroRuvsX8hsfUJDzwrmsbqwrrvSRsQAEKhn5b84mKp",
  "key15": "613vSTgUzoh8G7uk1gsaB3Dju9VnGW9ER7ibMFRf2YUkLd4x6Z4FDwtCZ6fhYR8gJP7P3ihvgkEGcDkLh6tZZCGp",
  "key16": "7SaPa8i5fgQJNphw1tmGXVJ5uXDMmcmEyj25FmGupdaTpq4xqn76N9SZcFsr8PDFdb5DeZuEhkTBmsCEKBSPnVg",
  "key17": "4fWbVK5KtwrJ66umsDwrnACbKpcBoGesDfxeMnUu5ympsnrBBwJyK5Kv7D89zMaQJGQBCK4AqpZ1L18H3kvRrb5f",
  "key18": "5eqUnZg26kRucnCQikFPk9jKq8XviAK9rAuQWYMQrHRYMQJ7WU3FfnLymy8vb547ZcVcbKnMtfnFNdSzQmnHdZzE",
  "key19": "4tAr8EBuA2uAX6r5MJejK33b95Jat9Bb3dHKPnwnnN7mccxYDXvgBrgZxwQwnytnyMsDeNNNfUzVfjqdLrKE9fPE",
  "key20": "3BejDidSgsZwhVBNd2EPWs7GBgbEwfZEg6Qweks6wozqCPHHjs2uNC4xuSchdnF2JV4h46PoFZjDTWFDS9JoBHLT",
  "key21": "2RfcjQJ8CdrrabWadm3omoQea3iQCFqS24FrWbzVfqiPVnmKdUwwKnKAqewf2HdVzqqEkW8d2NoshwJNZB7k6LpN",
  "key22": "2RfsNjVyv9uxGaNVCrCuX3XnyB4qppdBhHBbPYHRPwsauxeUNqzxzvSG4y1FgNiHnHkX2jRWGacyjFB5nenMJGJ2",
  "key23": "oGRXjTJmtFgnRQvdNL6S3yx6zwuaim4r5kCHLd851LbYaBpEzekk2vx9Fg9bk8o3LsB6pBu4s3xhTSq2kZZHsAj",
  "key24": "47StqZCTmiSnmfBZEmtvJjxkG3gqvDyk3UZcc1AB9WLHWf56n1zCmXnSHedzjtS8rq8hrSxKjkUp6jYu9ewce82P",
  "key25": "5935NTEhCcCFWdW2vuq3yhzMsrviXrpp1MN7x2qJUj6GgBWefA3MSRE6dswWaFtmfGk4kmEFaXz2pTokCQ3hHFWf",
  "key26": "C92Xa94KEqHuJmj22D7VqTiALtuJCLRzUXPhp5MXYmHSyHRcp3vHTSbQ93Bhmyi5V22hxetc7it3NVWsfkv6MaF",
  "key27": "2SDCeMKanV6BmVzPUjXr3rgdcpoRFUD9dGLTPUjPrpLKhRiw3qgSzD7vSF8Z4obTa73gruC9HtEYMUkCG8aY7Wb6",
  "key28": "2CvSMTqWsWQij2Rp4cCHcQWNFgYGjBNhd2ceGcvukz8cnBtYzQH1DiAoJqGGDYnWBPmjCkYDipWVhg6wk1rEm52w",
  "key29": "3NmP2fjxPcK6e7By7HJMfo5WVALWzpcQFuhGpfSeRKgK5esU5hEvsZayaFXXpSfS988A1uQemrQLMogqnxaCAWVd",
  "key30": "4g52Uh2bL6ntro2eNnuwFopyouoGAqAj851dZ6yfxycV1vqL8VXiNPEtCbr9iQgnaoSfQm6A7MrrB4Bj9QMZ4mCU",
  "key31": "3DDFTc8XDfVNq8TMethxdJEpvR9PHrtEfkkTMDNEfaPmtRjdwqtHstemKjwhDudFGiDAf3t5NoYgvK4VEQ9cPsE5"
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
