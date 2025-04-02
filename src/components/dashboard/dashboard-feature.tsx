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
    "5rZM7KKv7ZQxUc6jsSgUF45gy5z1uR8GsDmfGaRWuNaWuYaffcbXJggE1LZPRUXmVxG5JyYDXxNqBBoCCo6gqFCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9G7kKpcVM4bELkgABhivtw5wUU9nFdS9U8oWGhHKY8uw66EXBf5kjoRKEa2cDvkFFmBHQBDsdpbaQWc9rEtUEhw",
  "key1": "2KsZzP5e7NxdKkMQ6oo57HtsJCNuVAAFdm1PSRwr9ji9oSUWr5BWeKdrXXCw4K6Rjx8v5sMsvVVkWkJjEPtsVGQz",
  "key2": "3agJ9gAA1w2iRjE4MxDqzzJXiFJo9N59GbZHJ5Kc3pnCCM15kaaJRLiVg8Tb5purf32EpFRpau9kJcaPZedHqaE",
  "key3": "4opTxKoqpPEUFaNec67hfMrBeUqjhPX7d513Jp29yfrwodptbTQ9DDDT9W5LsgnSoLqAn2kkENYgKoXdcVAZaf9c",
  "key4": "213nNMwngmkFhMBekZUQww3h66Ebud1m9cX4PrBGEuq8h9DWtZV2GAJCwYYSKMEWfA2EBzf1Xweb5St5HhJsSHjv",
  "key5": "P8ZLYauuqpwAqP1quw94byXTzXhjaXYxX9yF1swT2juN37ZxddeD8JLLf8PNE4cbi62evQ8GjyV2UALMxVTZ1Zv",
  "key6": "5CahXb4pg1b1ivD1GbGscN4i6oV6HT3C9U4mPcwi2Ch1DjdasJgwX6kqaLfq6eq8PTU7fjp6jdRebF9CPwheE3GH",
  "key7": "4nZHvb7VuK5vWPRUNDi1GhwuWAeAz2x5VHAHXPpRZtsbWC8zgzTa2vqoMwHenn4PHceM8Kym6PBE9vPtgVaJH8AA",
  "key8": "tqWrAj3yKiGLWbQR7Q2jVvFhALN6CRYvcfRwyfYP7nS3fLwxwcjwwUTEuA8kuiS9Fwzz7KAPyxFX7cS5RNK6ws6",
  "key9": "2oCNwJtCeakAkuBQf8SXyzQFQk2Fho3xN3avLiTZjvjMdNxCTZQoR8hXLKUuQD5YDaDVQVMcePiwwDrcdGBd98j9",
  "key10": "5TWhXj2pXXGkGVYxBsgdGjTzfMUr46eRicSCBVfkxKBt2rV2sWjdNzyt6ibfw9WFEbWVRxWNE4igRCqeQMedfqyw",
  "key11": "67hviuVzaj8VkyP398vpYMiTFSQBAi4HE9DKq2NjZn3tP7daCpfVZw8kWNdGcZFGkXnFqLLGKWzwVWSvdVJNA1uh",
  "key12": "3zam9Dm754Unxsu5EGeot3JDbrg3pdYaMWEqr7euN816HpNCKPanbWGdyMHiYmZoN1fw93nm8yHtJUhzQj32nJvw",
  "key13": "3omiDvvZkPG7fw88HNZMiUou8N8qS2Ls8FS1edG47u6cbEV9dadVPqeZjHGS4m82gnPbZdeYkCbTgLETHvhWXf1p",
  "key14": "66EpArcHfF36jVRNVyzi4ZbZ6B3C4xQfDtKw1effkTZwZupk2VCTqtpgxgf4nGv6mCSbFXTmVDuqz2hebT5vRvoT",
  "key15": "2m7AhWi6i8DokENrUa5zLzLqZSMmho2Ztxu3bgZkKC44aPqcR4AaGWLDLQmJAbA6GR8id4wta9weLCQ4c6yi768N",
  "key16": "xNrDkWZPNqxspysRsMBS5TyDLXVKrkYBQgmWa6wtXDobqYaef62zH2uVKgdgjye4N1vESfV5nLSdp6MZyP2fkRc",
  "key17": "4eppfxxbPoE6hJ1vQkAnXZVpWnAFYrXbbMStwZEsppMXjiaYYoq9NtkvULwMf1rYNUbxYimRMFrEtDY2HumCVfr3",
  "key18": "4TxDyyrJYkLTpSWzfWKUYWpq4v8GjkNqzBxYJtbp981jpR1dpNQ8RvAgCQ4ZJ7u48LPVVy5Q5PbeBSnG9Hcc1B96",
  "key19": "XtRjCDuQtWSogDvtrrMDGrXAJm2npYUwCVrXd6g7BwsxDrfAREng2W3sGcDdwT1DrZiHk5fCpUdw2KpGPKxWvwM",
  "key20": "5b7hzJ5zKXdaHaQWnH7rbX8RQteBsG326NbAT3Do1S2xsbV3CszzjenQB7dLFj3Hf3UUYjDzk4xuso9U7EE8TjnB",
  "key21": "5CHmwaKNRp2j5p83JmTD3N7GAiaVme9kiWdtwCNStXczHBuBQfNyAUMWhb6HXLtsoUsQKgzFgtb7tKtThFR8ePe2",
  "key22": "3MPKNw9KizwirWjES99SYUwhyYFqgqQ1TzqRXjxB6aySeWr7ntqNqi92g968DgnUztYojYLH3u56oX2sNxCjuAqy",
  "key23": "wktqZwEtuNvZE63JwjMs5ZPeVa51PyrHBLhc96NxvuNadAZTegJYoMKK3NHqUGgvt3spimdUzjZrAsdJ21M4LqP",
  "key24": "v2TNNtfCmdey5WzeN1c1yPeoNStVr9qMSkEdTRPAwSWA3qGnJy33y8Xkwp4S4xaMWPduU4V2g9LKfiUSbvXYDLP",
  "key25": "51RtVn4pbDxHMr7YnqxHebM7LZPTXNPKmJiYN7pdD2BQpmdATEhLGXtWW86SxWmFsMPFhgDuWLjgqxGrz3FAuYBU",
  "key26": "5gryFJ2s4EZAKkvrgCWgKNigjU18o7AdAV7tePYCnsRTrAkfMgBXutNf7fPvTT5ShjPDGyK9NF8NoREnebs7VhXE",
  "key27": "2c6QYRoRTUqb2g6FYRd5C6Rc3CfauSrpxDnswUqKmd8DrGKJWiurBsFuRmW1UHMcetATScoHyYzdX55Pnrjhe4qB",
  "key28": "2PZZLmTraNourcuNCJwXErKYqmxnFFmt4sEJWBiXTWJyb4in3StccX1Z4sfApBFEKc8XQD9qjGgdLGVhRtEwb3yp",
  "key29": "Q1krS5SiiHQKf5F69v3C4SGot5TZRVr3wA831RStomZmzVwsfZZsMvVEmfW1cZ2gSWDWSWzjpeMC1vCwEKnj6BD",
  "key30": "9pVC57nw53jLy4rZ51wanFDij4Ek78LT6xBogeZ32ZcTN2mzEjWHrc8oZkr3pfeFxWzZWhP2bFuUKwiwsWTxmd8",
  "key31": "4XMvFuGvt4mEwwU162T22mKk2iFXnCNR9FExpHVWFmEHRXaq7BhVqd2qZwfJa5Yjep3Cmj83WqNyhy66AcqCEryK",
  "key32": "4tp5GGiaqxYeYyN8Vt3fJfqo1uY2ioN4D8kEPkSjYPJCKMV37ehNEpwteWGJvegyB4XbQS7v7gmDFwPYLicT9Ya5",
  "key33": "5pNEr6krs2rPQAEZUozkFX6VDjbBLQDpRxeb5fKDpuqh1dd3VJ38YQGBzd8Qz9xpMXvscp63DmmZ4tvoJmhqS4La",
  "key34": "2mQrpJN7LxihoGr85NP9VaKbm9XR2ccfrZm5rYbAVPWVCzuQCD6wqJzePf9XpmeFaV3dFSRxpNPWCVtfrPyqGvF8",
  "key35": "3caFWEEF7M6AfmvwZJx8zJaFeTHtJd4ciUgnghxyjtcU54jaqBzYydHSamPuCk7LoZYuwHY6pkKULUk7X6vBqBrS",
  "key36": "3WXmFRmeX3UjsoHxwBVUVFzbLQwfr1XknPtJScGrcN4ofjLDNrbQUKsjvz2kZ8U4b4ycoEhwa3uAXwaXrNC7zzn6",
  "key37": "2N3EqHPTztgJfY8u4ESTfMf2LwKfJoN9nZhrZqKjinkWCKJchSv9konabmaAQx8LK77yx3PY8DDVRdKk6wgyBBuz",
  "key38": "4YWvr4d1B1oenePLpk2e7fdQSzFLTJ2i9Wf5xuPVNC7vrwREBSTVAEr7o5W4s3mfFtXn68ACV41TuLF31KwRaBmk",
  "key39": "2q9NhCyaYSntBb3B6ujV9KPFKV2vSTDCy1eUgdGfsGjSQ8iP9xaXcKdqbqmhz551Jor6J1DYiKJy9Zq74K1UW8rz",
  "key40": "313hzjsNjRRmvZqHNimDN5cAFcYW4f3nVmhVNRzdbMpuo4JJTi42k6XAxAN6jbkyBX9F6hTkVGYNu1y5qLgWZ8DZ",
  "key41": "4QawZsSngqgoniKSyxy4G3mgCrqJhUopvEp9G29LykEyDvfYNojQVddFAVKGLTEhKtJKzNcP3FN6BXooiqH81ScL"
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
