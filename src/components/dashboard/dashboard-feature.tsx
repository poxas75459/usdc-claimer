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
    "2Epj1NkgFp6djwgtxTHwDpCX1Sj326WxN9j2iEMMnDuGUuB8uHC3QtwjMjpPiVy3LUphjMK2YfHQUe4DqnwKzZ6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iQg1d2Nw6aUtdM9LzgxtFPHULqDoJxobT8QVS4TnmkVhsAnQjvFm8jEczNeoZyuAtQgxGYeY19C3VFo6HZ9ahG3",
  "key1": "5mPgR27sChdxo4ciaz7fF8aXz1RKJPqQgrtAN1eUG91SMrWEjxyYyB7QDc2x2Cou9Z7nymVWu6JwWfjwxR1KegPr",
  "key2": "4ECB7iAMw8fKiqR9R8ikucBjGEGrQjXhQRqT7aqXUAFGwXDtEg2wnaXqKQk4NUmbkyoGsf8zvuxtWmgr7sadQGMZ",
  "key3": "3s9cUjqZKnQBf4Q3PzwthMYURqP3UUEzJc4kxXUEydRdQCaScyPBx2R4dMZHC1tQNvUpCfisP573WcCoSLg3M9Ny",
  "key4": "54SmHtHYWWEUEXxeB3HWmV7ADSktpayevBZByN2u1gdUJKJhPLQrfCUxtRDhNEqrhdP12NmRCkpy9hQMxpu2oAhk",
  "key5": "5sJdhoxTQCKRKfr72Ct3gJ51kGYy3BdJByc63VnsiCDLVJ5Z42VEuDpGWq7LUFHtGYp5oqMH4MjgnjwSpJN7n2jP",
  "key6": "3VFZBow13EzGm5747xfGjq2qCWGHzfrN5bqk4dwyvL14EoePH1boHZK4DpYc4A9qUVUVTyjgzBohwUpDfNbUemLY",
  "key7": "2HVFTGFPJCSvf7s7emKQnjUUaHC3UuqpAZRZcaoXdMAEVC4WQ6g4qPLQ8MTTM9JSCmkAVWHbUxGBxjD4NaqvrArY",
  "key8": "4XyrhUM1cmn4g56QLe1VkxqdaoyMkibbER8rBv9jaLuiQffH1Jasz8Qn5ndf6vuM41G4CEULSWVeG5KsFrz94p7y",
  "key9": "2b6DjTDAdoGvCGC92ppfNPbRcdfD7wJsPurv7yivEAtrHAuDdWBTeHvWLdnh3zzgMM3gdVZBKoHN9WXmLxkTZ955",
  "key10": "32D5JhjSYJES9F3QapSCcQQLBXZRo5uwospZG7ZKHhfZwmHJ9J9PzViUKNU1SNPHMCmFzP4mH5q6pn8U5yVGidMH",
  "key11": "mH3vcWMCEpXbQvs6jH9z4bmzKyhQoooQY3eLM2i3okJG89mkxG4aCxEirs1uPW8s4UxXMRW3puxtUuE1SPBHjqa",
  "key12": "WitEksrPRy85FbL9AMAvYhhxWPSqSFfkQDUm4thdRFJ4XS86wcGNx3ohYH6HU3emQRz337e5UvemzR3JUf2qwks",
  "key13": "5Gh37x7T7z6Ez5QXfy7fwPqnrasrmzRGYqmmjwUoqk1CiLKwk1NbFXex5pUYLhPAudC3ViD58c8opFkWbbVeQsAb",
  "key14": "ApY3JdnNGufAEJDYY5LSf8oeNZ1Lm4ee4XgP5CX2BHXW13q3aH8FVbDvZfT4VkkekvkE5bmSd3Q4MBiFKBVYxbd",
  "key15": "HAL1MszemQrhEW1d5ADorK2pbh61NAUveo1pogRbhwuomjn4PbN6yDYAwgTxV7Vfmf7ybcJHyfxC2Q157SuPThY",
  "key16": "25BaRrZCyn2QJ7sYXT7ELRd25zijSpZjVfUMVmYYt8siitbE7FdkAGiuraW7vMVJLcKNC4xuFp6uYg7uEaRj3FzH",
  "key17": "56zfkcQfZQT2a8dmzYqjemUAxA48T5RJmiUbpBD9LhJYkSi8Jhm3BquXkfTvi8ZAwtVshxmHYeK1zE8UAer1QBWd",
  "key18": "8WUr72xseEn4fMPr7vKCYCe5t1zAihcSZ5A6ZsZdSAvfmpSrKFnQfwL9pubqoxU1Pt8EgSciTnaHeoBbnYRaeYW",
  "key19": "4ZsHerzJC3bDxa2DXNuz35RHRCpcj8LavmwEdusm5HqCLNSjCChCiaFKGfC4xfG56NZYfuotvXRPaifyEbYADbyL",
  "key20": "3ced1ZR9346VC8BAUDEZdhY9UDcjesVPbCpVmiJERH8Ci9fYT5C5yJ71NdH7xDJBnvk7uRKbj5kEYTcxYLdfS8VP",
  "key21": "5URtv9V1RQMEJCaPNpQQ7XxLaLYFGvW2vXxho4RNzboGoBm2gH8n9uzNXMaSJTMZS1hn5gm8F5zBf7sU9LPxuQte",
  "key22": "5gEkdyBk3NxAFwJ35rL4ahHBTA7VyKQD33bcLzMkZKK2qHm3ZE7HUh58yGcUJS8rezfSn3AXaX3LMdEYeYX2BYac",
  "key23": "4bPKUvsUVZDQVwajmbXEwXBH3e2RfSEH66eJK6TZEsG2L2dmpNF8uMMSWHuzr1DpsE7BEzmEEcxQAxJexHpbFG4p",
  "key24": "3bKhG5tEXrEdcDjrm15jx2pMibKGX2QANF1EvJkvL4unYAhQtbpycG62XJZvFGTH83PkVzWHD5YRtbdsPwjFNQEd",
  "key25": "2EpvqvNBbSyxHEn2wr8L4nwUHx1Wiv424uGwnjZRkUF8hc2gBU2uGK2M56n7V7rAkCHz2WFwV4eM4znBENvJyzNc",
  "key26": "fw8sba6X2TickgBp13cX9Zru9s2jCqjTSMpkzjJUAVhqZ1N5pHrT7urPGyECE3fq9e1kUZH7gxNN2a1VnWQQu1S",
  "key27": "ouzxDXr7aMsaKM2XbfBYbBADPZU48Z5bhy756exkyzeVQUQiEoBFXXWUkqnyouJxL1E1jGDpRug8kHnwtkgwayf",
  "key28": "3heAwRtQ8FngmSFpppxARn4Sx2abTDBtB1o6cYczsTxXDt4xpmhFbGAS6o3cMW3uz8VtwUFDb1xNwmjXNT6bcZcq",
  "key29": "e9p9kDXhAWbX2qsCJykXXfi6QUGBdrF77tHWK9pbQKDWF8SVufNnbyQAf9Y3fJDLNiYYxN6agWgSQyZhU8XPxD9",
  "key30": "44PMwQhHWxnaMsTV3PiwTZ59sYGpBhYRhXgqAXcVVS2v7AHimRHCRdPQ2vzW7wenkAQXZUzjG4Rv8KzD4cMUMiyz",
  "key31": "5wCD1S6GxXbkxtcosfRnKLyvf3SDJAQEJL7ikFYwDStX2xpypJ6NBkxdDEfKwyE1GtNVWmDF6KCrra5U7vWK5iZg",
  "key32": "4tc8vVQqsLnW7d2FXkVchENrfNMYmDhyVCgK8txxNrjGFVtiAajoBBKt9TvNsc5SGFZraPmpYUMqHR9WNZqF4ikN",
  "key33": "2eTVpiSrY2PruhTto4a4NruTRnsigwbhoqzwq6qnVErnEvecDwrAruK2s5qLTGPd1DAVXeugnj6maCrDegFseA1N",
  "key34": "vh4L7un4Uowmf4gHZ7s7ZTpN29dBm69izGP8Kk2P3tWLUaRZUGPg9KBzDEQZxoMFGapNEnkvB8sBTHdsvB3Fqaq",
  "key35": "5kibK5dxsgpVUa4qFEFhNaTopAH3yP9jZRGv6AoC2pkctKCpABXkiKhgwGhunsNJUvj2jXBhKAxx7WyE6keUDsA5",
  "key36": "8PkXQu63ELQ5MtCDHW3jiEVGVJiyZt1KrHn49ks9RswYYsaA7SirVERBQnBjxFakVWREX4MBaHrZqyiWXon2shz"
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
