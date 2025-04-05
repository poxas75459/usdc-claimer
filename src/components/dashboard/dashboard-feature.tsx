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
    "5TW44mQJertmhpsDYG9t1mzwojCpHVeJJwhk1XzGbaBamQCZuhUheXSCi57cFS9msjvApbaeH7bZisNb1sx6ZkG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "95nXp7iYgWqdAsTA4WWFSK2mwXAkSy9mM5N68UBCaMGCTTVAFjhLYb6Y9Zg1Bm1LxdtcH9myb8mFp3U3wSnMoUW",
  "key1": "3CuqyHcq8YQswfiEoVENKQK83x5qnLUX7vKAWyX3gJ7KF132JogqByHDoHn8DsRxfvcwAXTkE7vkpgiuhShNTyKC",
  "key2": "3sN642fY7RjozqPa9FhZb6oEguaN2aJDqgkpCfdTbvMzcSwmikSfwoVEMVRZSz4UynMA3BCdC6RFqKWjEkrSRM5e",
  "key3": "3W2sKYFzom4KkqvHQRC1cAxihgimY9ZDe8rhfEho6kXTKmZXoWEAMmdP11W1tVXzrrddkrwX7t6sx6vRQff3UMrK",
  "key4": "EteXiv1iTYDDenwXwgVLGheKRjWx1bQVpEhRcSbUH9beegAWDDVFsHna7sH2FswzRXMK4WGFgwXHYw3wC84jQ9a",
  "key5": "LS3HqAaA44U2wGVy1RWToEGC2NGtL5wojScNrZBwCqxPmPrVnZcKquymUpfTSoGRAzfhbaGNz5tWyXgaYwbQ5G5",
  "key6": "48uEho72hStHB4r33KnCGPxa1TZWFgm4veVSCmwi3QWrUB7vYZyngsk9LuoatjTorftkaoxq52URxnYRqQYhuiED",
  "key7": "5rmAqmp6VYTxC4HnLjkPHxii3Xyh6JiMYnBnDwe6Nz4gj4Ajv4W6H6tugVtTUhMp1X3UUJ48Q3KcRix8TD4iA54F",
  "key8": "5BN9AXjjt9KvfrwkVdhZ9p8mfB9hhe44Ec9m4ocq1XueMuykqnYAQEUDCiMWM5h2oX8QZ7M2JLMcr6APCm78PuLj",
  "key9": "j3cZhAmyehRJMXvbiAEbU8u4YWaJVDjoBVQgUjroMvcgWSMS34UtA6NMXb3xSvvTAaGwCKHwRutcdXqAH8LAx37",
  "key10": "5XR5Tam9KAMCpZD75BR8dEF4D39ihsJ38QQSCKjQ5DsXuimQMqHvk3YeotX5ET1XEVemyfzSJbqsf9jurSBbXiKX",
  "key11": "3ueuB8Dyyc4fxSntxZ69GCQiQff1ccvZ6CMmjtV44koqgkfBnF2S86d24LMLsVGpiZ3L5gDLw6UpcPUyN6NJxRWE",
  "key12": "5YCmBt7bSuCvMGF4KD2sBQiQEcrzbQP6LkjqZWHMFTfT73cNxGBhyK7pWye3FkKFTP1wzSr8PVe59z4rFy883nHf",
  "key13": "2tiW7DD39UJfoKD9kPjGRTEes1Y1kbeYnwvDWVJdqQb79g36cKwjwic6vapxNPhBGjgRUoSKt4KVBu7VnekxemUs",
  "key14": "woNj2daLxynw4njAUapFm8KzAS1AG77oRHNwAMngtDKrPuszVss5f3vikv3UrhigoBNuha2Hm9P9pbn3FhzZ2to",
  "key15": "2r8crcvne2xJdqmuaHkpsLpCvZZWwzquLDCFCaqRK2pcvUMn5Rzeus8a6ebH9uw5f3VbLP5VFyQRB4qQGpAp1v9U",
  "key16": "3uyKFx3ChNWuKyrxpHHDWbrMcmhWqv7irrRjvmwX8qSzck3uesWojDyr7vycf4zwtLpa81cXtKRnsaP47ZimQ7BD",
  "key17": "3MMvjK4AuKTmyZicLbLry4QoLDqJi2rLagkdMDUPG1thmC9i1JiyhjEvxydWmLCPXg4Cgt7ZrzskCFyoRxs8sd9d",
  "key18": "2LKsJksMBMmBVePeUN7TSqxDHAs5h9JZJtmH8QmPXRumNTVAdqhcCFPsQS4akdxmU3qHyaf4zXuJxSFhn2Y8pRXK",
  "key19": "4PyyBFQmAsWDaR2Lf9uN1NBx3fBwdYWV6idMkuhFRa7uANGJnHdAaNzURcnyWXgZrhqrWLcm7Wr9B1tyggTTHt5u",
  "key20": "2mtMcBcdwXQwrpgA7vdtA1NXAGwAfCRSfmMmPDyZtUfkZF8zx4VEF9WeAcuVLCpXKMDfjpEKBiABtbUW2nL7yUBg",
  "key21": "hC8f4wjxy8AMVjFqXTssEDvJA6ULNEpuNyvRwcMaJWywNKo6DqTUn8L3Yh9YSFFtR3kYUdssco8ckvtDqmDvDQL",
  "key22": "57gJRz3c1cVrxjtCwvjeFcVCrAPAnkmT4eJEKgJy3HRiCiSyhniK2utGQke1Z3m4DirZCpZq1FqbvCpoH5PRVn2z",
  "key23": "41aVFK976M9Y6Mu1NHLj4otpBqpt2NwmBD5FLYd2nbk3r7gtXJRodNAc4VtBTVEtwmcJ6V9pMixrWB3JDuHRQiu7",
  "key24": "2ZQsQmP28npegqxyuHtoSc9jNaPzDLFRv6UuD4C1qUhnHRfQX3vY1D4MvW3P6qcomfCeYeHsW4ktysZivAqMCaoz",
  "key25": "2RcbFDHckQmWERpKTEmjhrvQRUpJvMru6FXTBXo7G7PsDGMipqajju2jxJdptcWK4H8PYiFpC1QLYXsGiQgCNR8s",
  "key26": "4ey5yanRBQBwRbzfCEBn7C8LfPbg2qjkgXuy98yEtkmueEP33KqJxaZG61o8PA79GJZYFwLXgaUfAVjt7Nh21ofQ",
  "key27": "5mFgAxdfLRJzx4mNktYDpxd6HY2SggxMH8JzX5aMXUSzGVQSFtxADnsoD7wsS6dAu2EFo76JhHyqFigpTRSzuav9",
  "key28": "MusYijory9y8CUF9bbu57Y2xVPJqQZuiupQRfx3QkzTNqDxiB64V8mg3k8tL3mL8ssKkNSJQF2Z6T1v4dgXexKd",
  "key29": "3Tnq6WpK7xH6iQcmZxpsLyDECTvPd4vwMtV5BtnV7r5X4ZtWXsW6ht2JTcHA1NcAhcrexozF5WwEU9T4ndngX8JW",
  "key30": "3Q9AZjLqDwzrjZTLAggWSiUjnMouB35QKSsVg9pCyTWUcNm5ZshwRwe1PgRj5gwtxzFvxiRt91NGFe1Pf2BnNXJZ",
  "key31": "4U4imzhB2Bbxp4cEDqJQhDw8zuwW2fMmFcK3XB8fPeBidp6LpYN97DH8U3AqFnNPowwJamjeEdfeMR262RmqUjES",
  "key32": "5Mjmv94ymA9fvEYh1cnnCdohe3rMPiCb1V8DqdiqRTXVFqyw71GeBJAvfjW9Wgmkh2qvNtTKiMXLaui8xwrT5w5B",
  "key33": "32PCxzh67v2PsUd6AJZWvWufdEiSNJZYXNYMmWahZm19TyxpYZKkSfWdPaWMPJ3sD7zTXQTJTpsgWQbvjaaG88j9",
  "key34": "2VNDUro9LPLFq7ESAG5pLEjtXzL7uZ1USgxvddjaZxESBm3fFVEXK6bMKsJHyXFVbB9BwJjbjQ2rXAbzRjtykdt2",
  "key35": "2cKiWEjoP9cDp6UjXYB8yNGnE36A6NyWLFbVmN5HP8xMmK9HeQtnK7Lray8z6oKHv2DCq7o9HkEijfNuQTUtbqF9",
  "key36": "49ppBThUQbgzkQnNpsC8BqwGQcizprkDjaVw9NiKexhZKAhccGzGRfwwVPPTxBtPNwav32P5scXosKdDCnua5CCf",
  "key37": "4oCawtuabriqgs2z22jk1SmaQw4kuxzTin6uitAopkiryJNnwaRp47k4cFyaB7MQG7jQuQNgGjp5rCdTdk6mUpw6",
  "key38": "21qSSRnYfre4znL4Egfyb2gpA66VvKdfMyA9Wjqrvj5fe67vNXwEADkBzx7g5UzSW4cTSP7QCMowTdaFofxrB7Gr",
  "key39": "3PRaZHguSfXrZskucj2TxX514fKWViKdv2fUGMh4xreV4bAAPngKZq2WKGv5KurdAZMwFwPEM4wTKt8JL65ijxK1",
  "key40": "xWJVZsyfHatNxVron5sH4pev7KJGFTAQVhGSifxcvKvaajkfTHRfiqP7rJaJtDNuFYz1eaFJkAGJbw4Agmu5MUd",
  "key41": "4C5EHGXGYbC32F8tFXRPWuTurDGitVAbwV2XQc4F1vAHgBcVPDa2qwQcZqV8JhZ7kfiPxYBLrBwAPybzvgWuuUvY",
  "key42": "3ChJ2n1HMFifLPPCv8U6mKtFzoL519aKXj6umWGSkebQaFvqafsx2Rq3vmGiwczsRXjiL3NDwuUXVRhWgnEhXPcJ",
  "key43": "5Gjf4CHMiJ9vCKiG4VKj42EWJPWQdXBJpr84T9cUDzZDqc413jHMa83vYXb46YD67F8KMnnVyMimCgvMD3KGQQc6",
  "key44": "61SKyZmBsfrrscx6sq43HSacTsfxfKNceAKA4fB9DUqVHAKJRp8wDyvBDt9WCGijtwSVHWseW8kaWgopEuGp8ape"
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
