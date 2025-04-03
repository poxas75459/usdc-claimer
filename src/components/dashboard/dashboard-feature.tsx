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
    "3jGP7GCUuhg4Dh7z3QsfFfLWjDACFAacNenmMm8VwuQNMFGqKGsooKzohEtwpLSb8YbRDVrxjNe74Yy5megmswHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ywgRwP4uczurdy8UCk4tDRPVKDpuzEMW5MVFqRc2fc6fgaEdQVWS6sRdkHzrdHcQTD3uHoU5omHEWhpAmY1gjsB",
  "key1": "2JJszGag8i1LhDA9vXwW4buFAuomh3E1dJxxBXUE8CZL4k5kSpkt8jBU3f6Rr5V6xM9dAqAseyiZzmtU4gVAThFN",
  "key2": "3D8GQ4r1NZZbj9EfjbyJwrGLLa7qaYENJ8ujULNkAQtxLg8rquZJJyUn7Xi8LctnW6qQM8PiF3WJd75gkQiP3rXe",
  "key3": "5MY7fAXkXkv6hm3zFfgqkVqMqFCmDDj2qjmbWsv41URfUG5dM8k4xXg1dn2Q6WehQttCEwuAVkrXUaJVZspvU3Ds",
  "key4": "33hcjWmGiXGD6shh4W9CE55DHDd6MAbFZVQ1bbm3VebvZrUHcrYf64QjihQTTjSGspTsKRn9uHjgyunozfB6nNkF",
  "key5": "2mibN3RnuZwq25zYNX51qYrS6FjBC9iat31thmiXkXeD2vj1Q13RB6vM34iEAwDFhBZsty2hyaK65XFd17uXTKnV",
  "key6": "58uQ9ZM2XHRcDRRrZm69qNBb39QXSMjvYutpQGWE1YXbMUe64zQnj9ZYzFpesjKHrF7XxZuMroc26sydLUrULERP",
  "key7": "uQpziedJn1W26w3A7r96BGDJkSN89eWFd3AyHPcX5jmD7AREPUSonVjw4fXmGNgKriKq24Z8V85BwxMaqZheMhv",
  "key8": "4LT2wbNKLKauV2LN2x1pbroRawPXuaoQaT6KfNu45JqsvUUMhG6QLQUhQdxge9PHgy4v2X7wwbLQrG9MCyZdGNPC",
  "key9": "439BYFx4UJJUKJSJRdau61ixafQnwWqnQYEwD2YhBBBqNfiP3DJybFRhYhYLMLJN4zqRqYbjd3t3cGegzDaMmqRS",
  "key10": "635mwPgR8LiwRRHAiGRaQWJUfcUjVv2dQaC3A3CY7346K3kStaScJ31drZXf5FBHLErPKcii2H82ynYV1GarPQ6N",
  "key11": "5ZaZAzTzhtHUM2nV81afJGgXGYPjZcTvyanumY2qYw63kPX1nEbUPuYxTJHMZA9eVkrCa2dobfpArwQmfonyFCTJ",
  "key12": "54CRjmvXxp8DW7S9ZuyvWoWqoJkLWJPM9vBFDaRR2nxPqDJSw9k9Zn46WTcw9pHM2hQkG6p9GF4zovrNmvnZkdEA",
  "key13": "sDky3zCDS6TtEHTvWFD9Am5behpgnDnk3eXRqYmeL4nBpEVw5oJGfGq464KKBBRBfPqCy6KRdgUTGqtxmuNJ2oV",
  "key14": "4Rnsxqcf17gEuerkgrGCePPFGXWWoqEd8xAZe8VVHDgZAMnE2hU5K3sKrRpTQwmuFC3TE12vnQ4o6o8sveagY8YP",
  "key15": "3ABfi1J9YP5mnncMW5zxkSU35ahz1syQEbsGsMDcqRrPMcAVpnvB6NazWTzTh7bHwzs7aEk1SxZbWWuC4HmLBkWY",
  "key16": "3BWBCHTMA11uqWTZPrB8M4mP8mpDXccB37qZ5jDqqNrDgddGM9m63S6hEs52pKbLbSjadqVnjHxvtLo6pscW3Mpq",
  "key17": "2maFGg8DUSMjkG86ccrPoksgDLJcL15bVwxLwHEXTcYZYqUXAkfJWhAMVafvQuoJzztzCzusHq4d1yz7G1B8D1pk",
  "key18": "3q4ksecNtrejWx6L78EqKAsDhtCukr7wtLUA4yTHEdrBKW9Thn6DUrnESXDbpEzCNMp6A5AzhDCxd7YwuUuRmWsr",
  "key19": "4Mtrx7JnpWp4inTY8kPpQSDoyRq9zVDuQ848Qs2bU2qVgcjaSAZChmxh9T5v2S9nEc8RXZU5hRfHJydwwdbwtUgw",
  "key20": "5BET9mQTaGyR93FPSAtbesdxt5nVneTQi8q1RD7eMh65u7eVtPtvaMz29crRceuFTtmCQ4FWfAPsvTgXo433mMGC",
  "key21": "4x1DfvHdeDLVvm29aAd1NEF6gQB64TjW3FVFHta79KZeGj2amqiEPccM3bYa9s9mrxaSnuJkwCmFf1htu1GLYoor",
  "key22": "4ARriX8wZ7gMoYxuy48UXY6eqAX48reoyWiw385Fd5grdH6R7tosrJQ2mMqLBgCoRyJCHGUf8EAswvCp9QEiw8Yt",
  "key23": "2Nnzq6ehSgKusyEou7pnmBtJfWCXfvpcGN3Y13PJFQvDxZMAg3Z8Xkvf5GBxiZDPh8T9M5HqigAmkkVJXpFudqGb",
  "key24": "5GMuYpzgEL9cMR4CtwEqzENckq7H9TJZ8NKySqdjqKBpL19yafDgniE3xB8bc4V5qrHyfR8fB1gX1bfyGgpTzUkk",
  "key25": "42XWWNeEw64iLeZKN2c4aVbzz8wmRooQHEYksnJQc7v1C2XRgC5pY5vwAa8jaasGEyk2PVk9JJGHMU26aKi4nWJf",
  "key26": "qNfoXLydUgLjzkoNeFA9yvn3dTF8YoTH5sP3ptgJG2a7V5uKHxCGzrWwdkowVpEouZdsfPXkmEzQPt7ZpxBp19X",
  "key27": "zJvfRVPdEyjDLBLkvRRQohvFDWaE2YMQ91tBHSpm2YZGdN1fssX6RQnQK3CfVFmSMFmYqNHe3GaChNGiadiWFUq",
  "key28": "2AWp9BuqpZhB9SuxG4aKdtdSstXznzTv971kRixiZtqVowYzbLypi9VFQFNjkqnX9KQuhhhrrJTm3teGNfuTLnU9",
  "key29": "4F55d3CTPjEczLg91UiCE37mEP2oNGYhgMv99TJwaH4VemFGx6GqVT1QgDfXpyDp6Fbes1ZaEJHk4igAS7GJXbbD",
  "key30": "2WN4baD4bzzbb9qJ9XLitVj7XQbfw77tb42i7BPjw9hsC2eA7CiM32RSTvKXDVAks2ZSgWvjF567JW4PjVVENLjG",
  "key31": "3zDgJQkcgBa7pM2gozQRSr5cFMcKyJ1Ua7T2NejQ7NWVjfyA9f9pYpv3DNsZKaM9r6AtGeAuveEtYEBJyeZ1yCCp",
  "key32": "3cMVMCsNHT8HSMNsCSo98vv9WYcFsXxfyL6UWjhAGnDLmpr7VwsjXkXug3HqTLGJV68oTD4TTGvZGJm2VDyeJrSG",
  "key33": "2hRaLGgkuqMxBw2DyfvzyKGgV6gdhQU7jsKUyFDcFGxjQCTSbuAHkRWJC3kDW9BbRbQF3KvmfCzPC95EuUyYbe2n",
  "key34": "J2PMeJkd5BKDS8YCq9fKvVvUc2DysXwiBFYGiFCN76TUZEV7a4mjpAaEL2zBhg2R5g3K5R3J9JT8Kwzz6JoeLfr",
  "key35": "7b3w5ascTh9r21SHi3wUEGhzbb2TP4AdsKt9Bh77eEj16jznnuD9jq91Wjwz9bs5vatAxDpwyeJgsh33sVwHKkp",
  "key36": "Mt1qtArKJSVDDMiPLRb15ovWoZySb7ZTMEHih32Q1vyCF1wQ5RRKEGQS21DVeNEnqRJGTvw1pPfx24yHwRYrhxi",
  "key37": "29aPDyhcYC6mAeKQc96obQVEnyW4KnLS5dEnZP5pkp62p2TMLPEw9q514vYxay48aevHp9ty5iiF6HsmhT9ZGDy2",
  "key38": "3hECEpFYff3SxzC37BmsMURWobQ67a1szWfFMide2PJfpWo3Cq86C7nLpa8HintZjYVgBV5WGBMQ8ytEsozbd1mT"
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
