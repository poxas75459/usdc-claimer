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
    "3t1TtnqgAoLRNXXvVTdWSQc2HUWssDHCygKj8AzBf4bBE18cCpnzV3o5rcVKkX74CzVnoAJ6UVaRbhkQY391NvaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oJKs2C6tAZ3RkZ8RDibkNkphnvPDnqnnNqigVc3M6GtLY6SSmXpYKc16vMSSEu959MBRC6Peg3Q74gertGRH6ei",
  "key1": "49PwYXHwrTWGSto2TS9ZBjYcTC9x4hxFn6YsBRWTFRrtKkR2Dj9gDqj3BqMKx3dGMWiaLdaqWQw5LCobeTV3pHHq",
  "key2": "3rPTViCZ9BrP2Azabdi7yanZh6AvAgC9ggde8KYS5wsjpKVTNhzbf9DYHDa1TqxLbET9vJgMyMXFSuXRVzTnTxT5",
  "key3": "4ed1RkQN79XyJGrye8gbGJ3UDEW8VC8k4AsRryhGKAh7AKom5FJqZB4pYng4jWwupYwK4xo8MUzV3V2RMPpyReLj",
  "key4": "52JBQfvghg2RzsM9PHASybkgrdSWc27m6VbbATkcejDZzazuKozJYSaTTnkz44EEKYxXXCoUbkiaBVmgJPmxR8GG",
  "key5": "5Zr6xAWfL8MH8CrSUPp5t65XSQLMkm3CG7YtmmSiDtciHHwHLtcx5EY6HAUYRGFpyhpmshzF3v4A19Mow5kwAYoX",
  "key6": "5UEAyz9jxTdqU5AF8zfzckkU4c5u2Zz66NhDn6RmD2uEvSjr11R4JBMQNxY9S7ScfTSQZtBQcwuVkGH5J7fmEfAi",
  "key7": "uBHp2kYWeWDaB5daTZidnjUCYbowVAy74aa5KwHkedKu12LVrmSN8QEcE1Y5hso9twn2oRgHVGjEMUvG3qPfw1V",
  "key8": "378HfGoDqDrXE4fHa9VZGukRxnvmXLaAkQC8u5MPYciXrZYpYkueC4sStnVKgaN88ARBhKAfZmpwi9zKkPwANRkt",
  "key9": "36TnbpxZBjVXzhFvNPggjSoVeKzbqez6DsqBGFPc89oY5J9BRQYnCF4wdF9yvoRZdcMAZedvLmPrvXH9ixvwVXa7",
  "key10": "4anCwry5vG7CCK1frzvRTu6uWhNpmWKRc2Biybz322bh8g2i1ARZeDuRbbbW16Axfzdt42c8Nr67Vr8xSevff6sX",
  "key11": "2K4yfvs7H8rVhtqPtdvpdb6f3V7FvJbuSxiTv52U2Cq1SbG3smVxfE9W3kmxbY2z2GmyxoFogyttZRd5zP8TMbbk",
  "key12": "2DLpuijGj1LMMqUm7PpB4H7ZtLRwmCDx2aeRPKzdnvbYMViSPGC8P7b5GP9HeQuFVLGAEGeTpFgvU89EzDjWJhBL",
  "key13": "2osyfGMbDHH9oNYT7tR6h2nGs4gZ5U9eUrLguSkWu15S6vpBjtxdihDBsvBohbYhPLndXQr6bH5a7fW4jjheJi7b",
  "key14": "TP4u4LPYDwM6NczHBtepNRW1cyaFQC2xXgQCEZzNrEsfs7k82B8iNP5cTbNV3qZVzideT2oqAYT3tE2ezE2g5XH",
  "key15": "5JH7PPEtXZwCK4xD3uvGfhm4Xfnbmk1RNap6WKnVsT8i4UUAznbH2V7NFzU2JXeBGVGpjqLBMhNA2bh8HnaYP3Vv",
  "key16": "7nZoDXMcKLZj8B9Cr31d7sGMzJPD2tTP2QPtAFpeRkzTPEJXWW5QYnEfLsFuEyTM1PYCj9p8yh9N4UrfsA9ce96",
  "key17": "2fQPXjiL7tM9MwzwtpLGxAEfJasUNyR5p1NiNCphSbFz777PPwfje6XvzxmB8nryzYsK746tMDiVnYBPZ39sC2Jo",
  "key18": "3jWMXfrvDExHb48HK7XfTkBzpXAHjvAQVBb7aScqD3qtNJriHrd7nApoxF3tYFGC1ToJZwA9ZvVuJmJzd4ET5ig4",
  "key19": "3sToyQ3heEMffwBmNMDjPPwAVDh385FuUEyiiXUfqnkGmSKpGqsa7SuXnkBudqhsaLyBZSFToTweJ8BqEjF594fg",
  "key20": "xXNJa4xZf9Mn4JrEST5hp3yc8ocXjX1ZcysZ7RfFZTNdKJguhnoMN9Fk1oYGZ518h5HaussZGepAswcuUj3NESC",
  "key21": "2id6MhQ7WDvhwGHb2MH6sGXXHSEksWtMQ4QNZ9k3NnMW8goKp5zriiZVRBrdQeyfqbZ2ba9Ay5hiDqdod2RXiBgT",
  "key22": "5Fri6Q6iVp3SWovuF61D6onuTRgwb8UoWoF76mqTmC2oVk9ExKi2vuyxhdHxPchV5EsaupcrEAPvQCZH6UgEwQkj",
  "key23": "4eBTaPcVZPxNsUcuie8kwM9VafphWiTPkAdXcqrwJhj3oQkYmuKi9AzCUQ7ARqm4bDNPkymetiQTCkS4ZKr15jHN",
  "key24": "2WgSKFtkPR9VT1wmfNHFf6eUNuenSRh9Zck4a6zrX3dcgm45uxKmpcYcymdQ3CAKnxKSAbDzHzsTSsvEHbYAaFDG",
  "key25": "2R9CNHpQqcr8o93VACZgcohQNULjnNw5uvHhtD6yyGCoDN9VJdoRAsgb2KXZff84DAXtfHLRPBvjaJgMYCbZZXBB",
  "key26": "2kd9tbdLZTb2jgyLhFJTBoycX1wGmyKAyac7GEJgSqH1HDN5AtFnWbW8ptTVDyQRo9RBFpGtSKKaUBcoDV3U8Buv",
  "key27": "gvwwnRwjwiEcpw2rPyEekUrkNKTKLJYGDmnkuXwWgBBz9YURqYjtpawuM222Z6SYnms4fE5VQugSwdufu8ZGxeh",
  "key28": "2PrZkVNETRkhcVp9UQREmUa3FQLgJ8H8ZHzYuX8BSMTFMyGKTZwXTb2uTyS3TwZMgDt4aLsqyNHjzkZLL2Y6jgfV",
  "key29": "3CvrRYvnCZM82twS5idXu3dVv1XsH7MB8V2pnReEMSap3MZ9jbLWN5Fiz1yavxShogA1u69PLyXZCur4TRjXBdnw",
  "key30": "5DmeRCgbgFUr9rDaZoTAJVg4urtwswUAGvEZoeNSGYYtWx8piwPfC6hGin6vA98C745HFe5jPTES6LtvQp2ZnYaW",
  "key31": "29skRD6Gearj3a15YSrW4JGZQ67qTXNCPDPNB5h3mrXfMZmMz3m9sRUyTKSRr4bWDjec3buzdzBYdxw6Lb8fuUsg",
  "key32": "4HyRY4Kgjus7U15TQjPsY4xRZZwso9xAYEGpUj7FSoZTta2VZSM7gRhu6uqV2J5pCfoPYBKnLGTg8sX9QgE8zJ8k",
  "key33": "2QvV9mq8w4jrmZUJaXaUdonMAxtCBRzqXvm2CrgKqzJdWqZd5uYq5MRLtvhJVbW5CiuGHxofSv7pyUjKMawiHTqA",
  "key34": "3Uhdo6hHS7x7jDXiscUm4dx7Fa6EXMkAJxirYYBHQbaKPFB9r49XhYTL4z2ArDAGzuGMr473pU3EjCEr8p4hoAqe",
  "key35": "iU98KxGsRHZs53XtchCiaQEMfc8YTSpu54ypRaJAQf6XtbCdw4VaxFFaUoqduPKfMUUMK9i74tE58cy5CFvbVAv",
  "key36": "3iJEpPfmVRZjCsYc1Lut5xKWzJ9ven1YwTxrYFC1y1kHaubP6ZXhePzo4PwjpZQrkaXcbUc9CEs3wnCiTuXJXQWw",
  "key37": "a5EJ3KEUrMqKpezT5ToyApzcJ1L6AtUbiM16jzHCgBozih6U2C14sdBLEV5ygMAbdmj6os1g5EHWqUs1z51Hbto",
  "key38": "5gx8XSqij77C8cQmTUvvxB19TAtsNzNy9eUQ9qKVgv7NNiJoCe4CAGVN9MPThTymYS12r3P4c5GRrEsQSMBNwb5M",
  "key39": "4qLCKSLKV62JEa37ySt4Kubj9aQmD7ANoKyqQHdzpm7LiK9Nazb6ciaVemaxQi9FgzsfqnB28xzH7vFS5XmC4wx6",
  "key40": "FkaqwMWZMrFyHJZSGBvPrs4mvTafUynvbEuVMuCYKbHQ8R5kDzMBGXZX7jag8dXq1rD8JARJwxQNENTKmbkjH42",
  "key41": "5qvqUXaoqbDredyMv7yQZCWsKv4aXgjhYe51fw6RjAQuiA3KzPD2t3Ed38wtvo3KwDqMTxwFPFKXabei1Ej9hXvx",
  "key42": "kANY4hE29pKE42M4wXDAf7vLV7W7GtwNG8RYXfAaXh8s2wtnB3DpCWhDSy9dtXWDY33N2usvcM9i6wcnaJunwkX",
  "key43": "579u8hUG1HBHbv1cTZV53N5nu3LRdyB4Wwea5qWGvKFsvuLhQJ9qyoBHRnZA7XHwoW9NbF7vLaf83LSud9G5kQit"
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
