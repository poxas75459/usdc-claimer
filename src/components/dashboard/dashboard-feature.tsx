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
    "4gWw9xNhtGUzyjrne7m6fmajWQTYayr9mrrBN2yA4UnVqRihA9CTXssBnFc3aktZVoFADeLSRkZXHG3n6Sdzsbfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tH3t1iN3c2gHKN74dQdRZZ9HZrJev3zxFUB81AQmJi2pfwLH4iPTkArT445xj2vJgH6m1U9Rm8sRReUB45mYd6A",
  "key1": "5WmbDPX7xQXeytfdVbCS4NZSZBQzSqVdZsvAaNvJPYAoqNsGNs75hef9UteTryRso16qWzRTbTxQpNuY5dvFKfSt",
  "key2": "5oMFjvTkMsxNwjxQCho4L9apDFDRKzrufYEB1xFe9aXjNz1QNd7WUUAHHLGqKczJLqAXg7iQ8VGG39qVoUqxqd3v",
  "key3": "2qvuGmiZv3aCa5QPxCncUvizY25ko7ybvykwobE8L7Bm3GuHGvEHGswhGGX1eYXhNhNjznzZc4q9aHVuWRnYBFaH",
  "key4": "59QrfMpVth2sGPJSghK7Yq8fLFJwb1zyj89fRYesaKrGsbxaHkvqubBnafFj5KihJDPj1kTEQno9yDScy8TgWvKH",
  "key5": "35adGDoi7QuGZy141fAwPaEoUauw6v5ehKqH7JNE32NEWwD6S5WgHW4k4pYumfQaZmcHTB2gxSLBFh7CTcYXbXkZ",
  "key6": "4yLBGoMJGQ53wbAN4DzR18XNzKYnoawvL6jZu8JSAsfGPVEt2Rw9Ap76ug518CiqCW8FW5m9QyMa8AoG17ypfg7Y",
  "key7": "62UD7ZwXjN5EMMkzoBCQfnSZFSyyxMdbKC5mEpC7NbMzL97onLdXGw54fKQxvmuuCWRof7agFBcuwbughQqatyyi",
  "key8": "q2kzMQPK1zNyu1H2iZtGVi3QNJT8rPxEwQdsWFeyHUipwqsVNZRjyRCKRtyBDmwMZ7fqkzHju1tKGfiaoA6mD2X",
  "key9": "TBJXnNdT8F2PQgqBPuUYg27WiRBTxnfU3cTMytBY9qQtdn7qRahbaubqv6T6fXaBxqTBphzjQXeUEXTyrpZshhr",
  "key10": "5SAiU8mRY1ueRLpCqtmtX27MHQnFKk3ftYjaAkV7dh2AHsfvPHvMKZwLouSR47omoubmTB1cfrZCksdBHxaVHYmB",
  "key11": "29uYusmvyZx8Hrc4UFmgU8so79Bmq78zHuSCREzRfaWQqTwj38U4bwMHK94TaJGHEsaUrvtaQiTEGmWScewfUVK5",
  "key12": "57Sgh24bASVaNUkRL6naDzTHgAJrrxMjW2geHG7tp8sYqCKSx9xunjtPv9auTSHXFifxwWpmt2vtLLmjBUKC3uzU",
  "key13": "5aA2kZJP7NZdnFwfJ9UM9YPXTGPG4qCCdRN63AjoQahPp53fV877sD8MiQToQBgb6kFh1NP4sVSfoY2JZWhSZCA3",
  "key14": "wpn92HrMmXcd9A2fsuc74f2GEceaboLyd3srsFdfAZMwxkKVDntfAPEkqK5scotmQc5FR38AY2ojHSf165phafk",
  "key15": "3qwAWnbGXtbR7EQuP1dH5KMrPbaq13UXKD17fSr3fTjXMuDpTUwHddaCnCXG4jjRfkuK6DQ1bvzNtRyjAJNMkyvH",
  "key16": "36NZjBXGZ2ejUZDNevy5zuLFXLfMZdb9TtCehkq9NR2LvEpMfDpSxDzrS7ythjNZtmZzFoMuTVQ8pXcZ4pPDmDxP",
  "key17": "6FdQY4FAATbrWGGktWrgFpsg5x6Nh1rqwbZ5YvP8bUkx2X86ESGzNMuw6wxEHVyQV4wwYmNZHoecCmtJWnY6GQK",
  "key18": "2JZiTt3hwF3wiBbrMqFvWRJcwtUyUT2mUBAsANs279gPZPH1S2doDHnxVDdj1T44zHAupfo4a9o4QdLzKyGCEjL6",
  "key19": "Q7MikKL4SoA4rZkNb11T9FJWS7Yhacz7HYfw8kjK9USFsk4XYYejVzSfZmvTCUz1JnbS3Dk3NQzgXAx3niQSdJs",
  "key20": "3mAJ2mgzx7ckrqRe4WDza8ZC2nVpVzWHvJh1ZKDMtvgp34Bpt7FHGkhEP5PWpb2EVTBkBfBBwGQhUrGbzBR62AbR",
  "key21": "5H64p7kaysyLJX7AzTUYd4Wu57RjJMQzsm7pqASEA2ZHoRFUzbckyc4nksCHgimkosMqGSE1ExsQUaygD9Tykcou",
  "key22": "9UKH1nVE5LcfzNLjojDCjvoxsLxAz6V2j23RXDzxpsUnmeTRey3E8bncTV2ZDrPrXhy52uhnUNjATM2m6CRgpsz",
  "key23": "93JpHUuwSNv2KMaraMqzwaH85RVaZjmzDDyPWwDXU49PXv8MsodDUy4Y11eSVfhkwe2mna2A43NRdyzR9VhCX1o",
  "key24": "4U4VJtsQQ2T8cqjEkeGfMHc5XAP1ZajLwVSh8q8iq8BZiLPwLEc1KzergYmBcXA6jwT7W9efp3Kt7YQKFStRCakf",
  "key25": "3Pb4PPQDeZqgrru9kcwKZDzYGMQnfGrE8m6ffX47HaR5ni4hgTNTseTURGyDHtbUJe81BY1qdTbLKCHeBd3713uq",
  "key26": "23vCgruk6Epyu1c2RNCztwzcEuK6Ty3FJChNqXf6XRv3j9guUMSZ559SVT369fHe5pMywkgkkw32kJLx836jCPm1",
  "key27": "3X62e4Y5dHjQ7KWFySvYWL2C5cBpU1nE8bK1xb4PgCniEpoSMXwnf2duTZGd7aLjYpSB7VRwXFHwoY6DAcfQEq9H",
  "key28": "Gbukmn99CjF8WKzUvhpZCjS7vTBxWvAV6APvBxNco3hJjnop2vJq4qogahMongZu9Ap2eXLWRNmGTgGZt1mFbgr",
  "key29": "5Xxbpmc47B6E6Lin6gH85LCR8ehq5K7bd43e4roJJWmeadCoPxoqvczB7ngbySbbtrWANbHEawxBZpBMsU9Uzuj7",
  "key30": "4XTYX5HkvGp9t9sKguAu91DWtVh8LpcL4PNVobLMfgAX8LkArFNvENZFDXDUKkfrTLean7eqeNrSACE2VpEjoNwL",
  "key31": "3BQip2Agf5B9T5X9JxQ3a8CYB81sK45j2FF6AHFEuDmPXt8TxyaetUVHhofYjfnpBZp4BSxUshNGh9wKjvkNfPLu",
  "key32": "457Kf4MmNBqFbWTmqgpCj69MFZxPtJUXZCZ3vSRGEvfGDtBUbLCC4dWgiL5a6kUvBRZMhr54nWH8DrdtqUN7se1u",
  "key33": "4tEkHxyKRgZQdRXDFHSCrGzNg7HJCkC6NxyyqtYdg5xWVKRaZH8cSvYPGVnp1aZwzUmTo5ykZmxHugaGLHYxxgEE",
  "key34": "28UvW6Eeink9tz8VWJmoH7qeFR8EHcHxZQKRAveLjBnfzCP6GbScjzr28RVX3aYJ7CSABygGYzDn2YqDecL3HaHc",
  "key35": "2YyY1ZafU92sYZopBKpjqs4pyK32p2y8HfZKdXs6mBLWcRtJJSnozCpVgX9t9S3UoFiHtQy2cjKjTzLePaGBYiwp",
  "key36": "4DjMCK8Fj4GkYYWD7FnFcEz8YK2MChdj47TTdyw5myqJ9qLihZTGjpwxdQLKq52AhtRxB429d88udfsgeQ4GAB22",
  "key37": "4HD3DPdY2XweM733wBta4vXLWCu2PwhJ4rpFFpiz32pFDUBKxxB3E7NdURUjQZGdYuAAedw8Ntyq3BQfLzoYzApN",
  "key38": "2r24oZMmZK9JrCjjvqEKKTeqMB7MVH4z6TA8vEyXtHpeVBbeFzZMTKjhBuS1xB6oVYLt5EFFrReq4DC1xbFWyYc8",
  "key39": "2onLAejMaQUK4AHqiUH5XxDpTCAxMzeBhfqKVyprf8VPth5ZeHgfTEFUokoi2ctStYqTWTvrK3w1cx8zps69eZ8A"
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
