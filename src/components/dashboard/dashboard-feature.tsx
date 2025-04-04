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
    "1y19JuU6bMAH4aVwumxHn7tgEbfk9DzQRyk1aUVgrV2Deo7Uujo4L6CQcz4xtNFumHft5FckBC75zEyBMoQGwDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C7JEN5uZmj1eEoAz2FxW121ysXEGKiksWqtU6HGPzwVb8jSxyWDhJDUHT1bYg5cXpTNUASVBaZ1Yqf7ZY4ErPrx",
  "key1": "4nM5RbfvvyfEiUEzsVm4MVXbTPsVUzCuGnzfZTduokb8ZBZz3v1rwiWxiPGQBV2DSzfK5UT1UexR3SYnVZbkmoFt",
  "key2": "5d3GbDY6Y632g4SfPJdS3LEDa2Ws175Lbu27JF6LVJp3ABgLj24WxJTj6rf8XZ1ojbWzuzeJtL5WqgZfHV9rMVY1",
  "key3": "5vy998dxiwajp9w5tZDmB6gKX5RyEu5sNP9ZBjSBvuQcSxthLeT27EfCDpvWbGGZ2XtGMXXLbhb3zkrnz5JQiSqy",
  "key4": "4rdEr9GbzEugAkfNBKqVgCeVgytR6EfcstYSodZyXSTHeY35aD9QypbPVgnkXQ5kueYgBLPS5UZ6bWNpwuEE9FQz",
  "key5": "Q7zYzahBn9m8CmKrEydvKFoNeHasqgGHyrF2xezKiWitnGatMdnHxFiY6AzpqvGp7Y5qXKH12eX8JA1jd1pvFPm",
  "key6": "2xcK8oTKXFVLk3gpe5BX45JhEPS12SRMduYDXD56WmwQLLoRiMhdKzjnGL6eZ3EUJywLJnFDauSRPqXGJ3QPTwEZ",
  "key7": "VWEgWYrkdVVQ3r8Bi5kMm9TbobpUhTZtR63srqLYVfUsGGejSC5P6usnLZ2Fmoi1snBJy3cdnNzNQdNm75kPmgS",
  "key8": "2gxrUBJtoFaHmFhn46MtN4Ff4mQHNpEEtnBjdAvoxYCJP1XwvBjfsNfrk3RRh54zRA8xqzK48UHAPKfpCVYKTgqN",
  "key9": "4cQqHHnGFpJcFvHCVa2zojabvUownzryAsmXXuSoJ86RHQzMZDayFwqWmeSk6ZUdzjKAbX1cbb3UU2FtmG2p9dQc",
  "key10": "5AAjdYBJeemqdYS6ixrs2xpa65KfFL7iegbXGQr1rKQnXpFnnUJ6yUhV9xjxgHfepPUD482FUJQK6kSCC2jMPTb8",
  "key11": "5itiGUUKLqDsgKmtf6mVq9MWtH3nky9FSguUvESN3kC8oT6xinmpEfJ3KFd7r5rSNxzzVdJs3tTYAqzh7NZatmmf",
  "key12": "uLvZRZDL1tKdXZvs2EgcudQE89BywPygzHk2GCQYtrZc7jb4hWJAg7R5iLdaffYEZn9FHtbi2S3jkV9XH5McDdJ",
  "key13": "2zGWxhiLQLGSciUBBU7FmLUpHyAvnEFRHxs6TcJTneQF8Adcz8pKdGQEo6Co6jj5voNVgS8dNPLNWVVDMAq2RkDN",
  "key14": "61sgcCNS3nj6m3g1esGVTUtpay4VURoq57enkhkKB7HAMmPxMd5oZsNxmsXpY7Ghyof3ugH5X59VVhiaxEGDM7eu",
  "key15": "SuWVr1nQjWKZf6wfY9qN1CLw6yWJduZWkY5rzn8Wq8K3XiXH6PkS6YhAKBazHdRWHUGyXHqvwBnDP9eS9UdHXhR",
  "key16": "5fogiJEgTCtvLArJTooLEJpgKf2bgWF81cKPixn6UB5wm8pz3hxG7REoKpDBVQQyAjvKe9f8t6BP3jK1Mgf4GnnK",
  "key17": "2Mikykut4cWXNqYo7wsdKfKTfQyFEMat7gqroSJhiWvLxLc5KV1UQGEPU6QUWTaMN2mNQPsFRN3icRCx5uwAVgqV",
  "key18": "3qrSi2hfKMS5EjvhxZitT6tectJUYf9JpFhtACKqq6zVeJ2jFCEfoGUUroWwTK4KzBNfEKsKyZ4M3AD18Q8LWJBm",
  "key19": "2xRjuLBQgHwbYqKtqezqtYymfBzKFxN92e6cjE8jgv1GBE41oNWhMK6Mra8bV8EfbN8A5ogdqQiqnMdgxiDgd4op",
  "key20": "5MtsuP2P1Bwmd2Wg3aHSg3wvNnM4tPMfnVgtcxF1sR5Vue3V7Se4GBjLvttTX4Z58P8Dczn1BqCLj6XWmm4ZocFP",
  "key21": "3aXR7dDoQDwEbK2SduQsupEkzd5LZFkQ6hUY6EvTtiW7J2xgHJiAiEwQy7mDKMKjm7yavLG7cyhhZZtPBDrDk9t4",
  "key22": "3d6WUzYjJWWJFxPRka5cecyLNDzJdNvMveYjq28zDb74of4wFn9fDYifGELrRTwcUa2qUgrGY1F7N5P1btKmujQw",
  "key23": "2nDrKWWgzFQq9VcT97kWLvK6CEGLkQEQth7aTe3hJYJUCJ1aRRBi9ntaBXrCXcWGoJZ2pxvDp11WGEmNRLba4hTg",
  "key24": "CsGxLWbiemqmeZt4Wv5FTWKwW5R8koW6xNLFa9jxEzv1afDJSJzEpWP5JiZFhtbTsZK4fV57yZuHUd8Pye9G1r3",
  "key25": "1pUFSickUpCsZNCH8m3LB1z55UXPAhK2ZxFgXnGrR8ryuykhKU9dZzjuVNNibV2kjeiDsMsxYfKB1mwaL1kC8bF",
  "key26": "2vgAptdsgS4ox1fZXgD2mtVmDvKA2xunqfQwEqGmYxbjzfWpAbaFg1a8np6ZtdtYETfafyRGyuZF869FXuUHZTaz",
  "key27": "63WbuDnigCfobyXmPHCCu7hn3b5txfjXEcP46D2vTPBQmDUguX9Mx5wVnpdRgr61qFcmjGZDBW3pwspkJf9UUJHj",
  "key28": "4hSXVwJVS77Ao8EsB2pxVzc9QFW4srCwjHdjiUB7AwMoVm9NgpGwV96yv6bzCQp9U5npKE6UuAf2NeXpbHzcHraX",
  "key29": "3YnhrMyuNWnRHvT4bvdQNNuEjXvvuDmHQMk1hucVy9nhQvyBLmpAWdtM4cvGt73GoZab1pcBAG62CpjewneTNmZg",
  "key30": "3GK8xc46EAS8BCz5iBPCsuxJ3PspXLqYoaERbAaoPhNcMHxXkRZQMJLhNSqCxqbTYWr5FpS2xHs9s6thcWGbr1xE",
  "key31": "4dbkGGhp8ago7W7Lafb48DuSMQAzbsJn54BtABaCkVsxrWT6GDCkXC5CTFp684iYnB6ZjgCydDzN4yTiKv1sj2b",
  "key32": "5KRB9CwgTEggt1ssy72BXPprQPpCzjKiK7sbFBmcTNdo7s1chKSivWvarDAckNU1tvpxHfEMbA63HALs342iLUfQ",
  "key33": "5yjsD7HcQQGkeYxtU4xiz5Y3csLsCtUcmsRnPinetsBiGhKZXWJVzis2ZpjK9wkTu8bGi3rZRti65FkjqKCt4xtr",
  "key34": "4CFp4d94KddUmtNH7ooeSLtCYjuNeYEFaMP8berW1faM4B8G2tUez2uj1j2WKYHy8bVJSCWmLwsdFkzjsdbxYSc2",
  "key35": "4YAAkAX47rNwJC6DfEiyKznwdaw6XES4z9Lh14w6YWT8taSE2U9P85RW65cU1dwRSsUv3cxW32vkYBjKEuV7V9pH",
  "key36": "GoLvu4ReFcpyhUB8wUVeUfmU4qVYKU1oSRuRyP2Mim5qQRyFYM5zpQRFrPCEo743AeWT57tn5NB5Wp43ts6nDRS",
  "key37": "bn2GZ53UphEq7uxnsZ6pBY5mcJP7xauZcFrqdiGpdWA48rcozAYDGApxnFFMvZYi3AhStCwdfQwhcGbwmbidh3D",
  "key38": "2gTcypVv9CAown6qJSmiMnW1iVXUXcsHbCdXTJceonXLXRPGHwPhtH1W6Vr3T3EyHitH16ztJeZwfusiYKcWcFYd",
  "key39": "3yV5Ho11D3pySaCpZ31hkwgPRygRYPNf29SrT8CdCHjRRLYm6xnAQ6fG2aU7i5CjVDQEcewLcPzrGXaH85gaQqxm",
  "key40": "59prqHKUmhFhtLmwiYJtY1h6rsRWd3uzXVXhoAmLLMNZL4PVgHUqXyVbXsYkLY7jpSY2GSAsyEscH8o94MdkvdE4",
  "key41": "3bmWsFsiKpPqPZ4HySHuQgWVRfwmG4UHieG3Xdpuv3Cs6whnEk9SjFHaBbG2Dybf74bV1WmAPSTky63kBR8M9dJZ",
  "key42": "2ZwwE78tuDywFoaay2jszNNfYW5zjXaa52CTJ7Nu2St7bG8MaZPx8nKTyALsBRRDi8Zo8qyovsNQ7CUedMewaHP9",
  "key43": "3YgHo3Goja3MVmisbX5qutwCjCdUk6iU2P8feCskxrqwcdeeRF1E6mQPkqU1y6z5nDVjd66prVEwCD7i9fLwvGi9",
  "key44": "5z2hQWDLTB3PMnzvpt5eR6w8owFALkmckKEmiz5NG9UKzcSFi6LcqnwXiYvoYnBomHY8iKnck6KRBnTzrj7ncLaV",
  "key45": "fZFLcxjPLso6JJTPVusm8tbQtqt6HxNpHBacDus3VphtW1w1uAxBqWoxYtWJueKK9uVb6eHRXziPhn6rb3kQ6V7",
  "key46": "2gShQ5XvzS4r5uxF9QdYCjhJQeuj7LVh9vzPi7ffqNpp5WTt8yJTyHK9w9Ut2XDzjxAy4ttesEVcVWHEHWsuppQe",
  "key47": "4PwsGnz9SLJZJitPdFie9jZuBmp3TRi5A5bTFw1QmiAGiZjEbLzSdZC1Z4gDbUgnZXFZ6GzUfyazuCkvoRCawkp1"
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
