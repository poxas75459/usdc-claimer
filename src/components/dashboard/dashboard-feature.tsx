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
    "4FK7FUebtvrQvoXUBM7xWkpyfeXdzc2u4jmSk4Zfk2tM32P5fGSs88NifYBnhVVt1U2R6sJBrCEwk4zMrw2v6WzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31vtLTAcamU83yqcLQWUNATmJVF5uSkWi6f1osKQ2eZGWDxHQfS6bBNiikwPtk1BxYhBh5D7Bng9MqjJ334UVTts",
  "key1": "5kqwJ6jhn7jGPiPEb8hJ3nY4BfunjmtrtNeyYRipxBj1QtRaGhmFh2YiUtnbRVNsYVByFetiQ932RmYWJ5SDoi5E",
  "key2": "4eqvFTHLwHCaMkWuXatbgJdjjLd3Ddr5zGDY8LdknH4ec4jTh3JSUGPFL5aCfxgKjXUaStvfuqYyq214cscgBd8e",
  "key3": "2kzLhQe6Y5W4WoCXKRM5fbz7LUdDk8w8owv1mU2jPaTnQYHZ8DeGWxLUSmnMqxaTZrRYY7FDqoTMb6gsMQ1jmm9q",
  "key4": "4WkZPEtb8pEmdPLvuwvBkREUxy3f1vrmmkhtj71M7jMEw35SGXBhv39ovu4eV2ksUJFdbkXGkLm3N5JcNKtLQoNp",
  "key5": "tVQ6xNquCom86W85NB28nC9yoHigbqnLXbeJDvaw2yMy6D9RLZYZzuWXvpT6LRa7y7ET1HMeGtFwm5NiSGpGuPv",
  "key6": "4SHEnAThs4rqqUzagUH6rxbTs24d9xTzw16zgWAvvR4bngXrTbKnK2XHeW5YnychHbELcokbjvG4te1VeXKn884s",
  "key7": "g7YSXFrHZFqq3vUY9WErZQ7iG1H7z96d1s14C95ooDEoGYiKf2N7QUTu8SjHDCQEnLLKZ9SWQjyhjMJVQb8RqSe",
  "key8": "2BC57RG5n8Em4c8FLdwQsRBf6V22r8F2eikjKhYPurYVnfVMzUFen4Q22CiwvT2cdbxkWVWUP3wQeVjjdLww3VVc",
  "key9": "23tnUF6zATHz5ycx72ScpWWwoqG2C99Vgc2gm4ap1Kfkwopfrn6YEoznjt9pnDX4CXEtPZxDJ1DRLuJADMyLUFDU",
  "key10": "66PSzt6LWWgo3GK13DQRmhc8cXENhApqjfZe8NA8xje8zNEbwTETX4e52GSVuPdQE9F7z7b8uwuVgsRamAXhDj5H",
  "key11": "4zcMfgPSWYiowkdKPF1prva3gFfS4bdMWffdf7rpjFS3YYEEjx1cGptifE78Epht5KfZ26DwyCVUPvQuWRrMtg5Y",
  "key12": "2qLUVwYWuX8zTqTjQERQtqBiRr7cfSGywdCf1FpF1TZamt9cFKbM8Jxikfz6TfJgr54aw4iWdxuaT99EmVydyazM",
  "key13": "RB2Ute66wfW5BrYMAs9As7FAENm1mUwnSXk89Q4F5wQsex5b1T1bXjRYrqiiaZU3KiJgnvGxDykoPSiHMThqHxb",
  "key14": "5p8LjbPyGHw1AfAyziW2oRNPo79shwLU7PCcrAuFmmP6tcds1AWe6zFXE3rMwiFAXmvXYE8VsQ7AiwVzEmXwpV1",
  "key15": "56N8ptcCJiYqsGT3NksthkkiVyXaT2SqbsujKxXZANS47RQQn8cJFGAkZM6XwkaUTPWXUWJpgSoWdMUSwNijepmr",
  "key16": "3YfSdi5bScyt5SubHHF86MtDGQvVDJV4PX99YzFg1Vqtk9jztEzNbee59a9QbHgoE71sA7x6DACCWyGA6G6HUuZ5",
  "key17": "2H7oNv1xtwHZVdxcDzvm6GSNBnmqfo1USUoedJHUxFLBw8Bo2bqCN8hsd3ow8cLvU4H9KEG5f18LnfLoD8LhCXGX",
  "key18": "2rBwXWefmN72gDzfvnLXmnVGUf7MVySZtfnvWvHuuHKR3RNzXcvzwEffpnPshFiZoHZEygrvkoArdof8iKLV4rrS",
  "key19": "fixVFhgBU13QPqFNsJPJCmZTff9wAxBdGwL9d1VxeTicoyP8SzLwmi9tKHUFdKD96GrebtksnkbkE23nPpDbNus",
  "key20": "4KyjbCvM6BHiMmf4UktdV7u46P2n2Vcgp5HJi5Uz9RNVJVA4srrJd2mKK3FiBeKqLpjYYoh5yb1aiwhnf7EEtdnD",
  "key21": "4QLoFpuCN1XqBY5ANEQywnE7ffJKr4C7aXHTYNvAVzCmwJaPzHU5tBiEzDAg4qAmFKheUeUKF8oxDAZmh29dYMCm",
  "key22": "2nMv8KFNxd8WvLcSGBCNU56MS3SGqTqVtkQ9pBaVgxVSeFHNpzgoHYHLeqYXLsnCHVhr2s6NC78b4AfG9U5Ucoc7",
  "key23": "3f94kTg4Lc1AQhuLaRWXY9wGFY2uoCDuoqgQrQjdDikK475ygGdMpcfaMwc9SBU2LAWnPxJ2FrDG2MofWdMUo8dc",
  "key24": "3YRYEJmsfSRv7fe5FZ9YHqidSMX8EkwiPEpiSBvvKu7QWE9oErV2xtkFUbHHUhMAMoFd4nuAVespcmdHQxtt8JUW",
  "key25": "uDyye9ApVxP4foez93aCarYKCcg4DCDkbkwfoqxbFTkvUop89k536HTJ6R1nwwr6BeM8H2KAr3Ay7j66fHs96YB",
  "key26": "5orwBYQeXEc7zZQdqAyhgbxQPcw4qrNMuGFi3dg6PBioKmkZAJCaSDm3g3rzpvBjRrLrzZ7XFdtDFb9AnhKV5d5t",
  "key27": "399jsMFPDCyhSD2dayXhswoD3YSwiq6b99JhDkL5Z8WaJpbEf9WT6V8esGjCL79hNG7ZmaMKqxtqmr6L9KEj3H2v",
  "key28": "sLiNTzcfDvgxjaVQ5sM8h6JwEwVvbt3bGBVdk7D3PLN5RvTfhDvzyRuMNtNok1w3QavUs3TwMgpKdMfMbs4tz8H",
  "key29": "2gPmAeQS5hgeBBxYF6fQbzrjbybQH6kx8KV3guzV5E67dzSgct5YnXPf1m2nesPqJy8cXi6SrHDAgupDssJEo4A9",
  "key30": "5HkAFxwYfsqC432psJFYtX7o9f8KW9Ckw7SbuSZ3HMaJFTqXmQGSkK9YYbwNbYi79vGzQSRbkKk2nUFNxyswqKM4",
  "key31": "4ymeQVsRgombQVJ1b2EUGstCZnDhmFPRBkUkCs1qXnXGxaFVp3VYo7S62XzP5ujt2DKB2d2sWC6MpkkKJhDqtA9m",
  "key32": "5F4yZCThBNcvptnrmE8zHvyToCo1Ge57MJcCHqaCfcMQY3pUhDrNDBD8DZcvN5U84eACJS4uFmWciPoeByLsAqea",
  "key33": "54SHzZTY123P4zuVsF492waYPpkThBUpxcmUJ7CfChJdnp4CfvrJaYAV8qukMH95hex5isvuRhrUEef6hF7Qkimj",
  "key34": "574ZqRPjkX9rYunjooFo9C81ArSAor9WG1VSsVhNiKmxCXELZxzBoyHLXYfMpHfJuaa5qYCjoLbBkguhWMdJi1ij",
  "key35": "37HgDXLD2RfpkTj3SHuUZWaxAGw1MxSMLDrzy9knqj5N1UZtRuXEx9K69mog3YutURwZAmRqhWZzrG7YYR2cQHuT",
  "key36": "2s8QkyMFzmgiD3BKwfeWN6rb2sJiyfry4T3ZxYZQ1RVVnKVk9bksHPY4BLwECjJhdVGP3oQHUcRAZrWbTc755RG2",
  "key37": "7y84B4SChCukiTG5NU5SXdK79zCP9BZz4g5nUvvztewbe9fmspFD5wYYVQXmHqFDbk5K9LNTojHDVm9L7bLitnL",
  "key38": "23Yh4fiAM3Puyjy9k7UG437ZGYF5jQTH3WZDpGcmyLPUQ3E4JiNbRQ28NwLThWEw2DwbGyfyoUFYsmqwCsXYhMWM",
  "key39": "6666qBWq31di9C7wAWyRdmR2qrXBE8w7SyLqSyRoVgts4aySFgfGfAaKnXJQLrK5ENr5KfQBNHJUdhpKASDbXdCh",
  "key40": "2u8Kp4Un4AYNF7mmbnkyFWvXPb8ZUtPqmDqRkYTc3DNQNUgnVMc66TLntrvWbsmTUHLn3zJ5ubFvAge6BaBCrRGS",
  "key41": "2tjWy58MTH4YdjFZWDmC4fEXriKyyjtxGZ8SURWcG2B9sAmMdRz8odLFS7P1EmEMoQx9XmFjTLLtHyrorUthebcB",
  "key42": "5JsD1tc5aMCM4A9pDsLKotaD4waPwBwhHwZiLYZkf9eigonUCdNyyhJZvyasXXp7kdX1PcLCe3tkNDi8DKhMJEfs",
  "key43": "5f4fHrQwwka3Vj3snmm9uEc8A5i5P57RyPn2CeM7EdPcqWKXHdq9rY2h66ufAhUU4uRfbmj8thQwkf78JdsrbDh6",
  "key44": "2W4DU7uE9Qt262gxFRbamH3hWWPUP4tirZ46eaqxkGJ7Ufc3eGkfxFGhajPWemi3VtNtp4MUpvwELRb3MZQEEovc",
  "key45": "5FKtDHVDhDZDK3x1XtVXbNoduwBGRZFwEarVWor1DAK2PNXYqmULg9K6p6Ge3tZYsk6bXW7VdE8itAiDhWiupB2h",
  "key46": "44sPzE5bEpgjX8ukugzXX6AZD1P3FdPFBufqgcr74QqgFWo2Dm7a1JK6Z3mZTUNz5ezRmZd5EX41TvWQ37BHGn2y",
  "key47": "3csJ8iQs4BccSm4Vz9iqUKdrs4B4DXdkhAvfhpqYiLDzeQzM2qxMAYq7pU45QMobTJ49L7FbGUGTQspNrSSD2C9i"
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
