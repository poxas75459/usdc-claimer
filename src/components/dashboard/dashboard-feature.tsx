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
    "XmK2rBwBnnowCaACvMUYr9diD9wnFfZtv9gbs85xBBw5n3KBSFS696vNYxZwqmGpgwYQ9xuUavoFur2fz4fhnaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ujWDzxNQgniRxicvSMXtkqdWg1E7oRvdJLckF4Rm25Cm4yJhhAohwk2t4hFQZKJda4FmUFb7TTPZUtX63aqS2f",
  "key1": "sU1WD72mGb5Bdw1bF8Ay1s4xLffcmYXGHiL5VkHjo1DGPZPRoV6NfHsK6ED5SUcw8pt7J5xHbUW6X3UXuESEaJG",
  "key2": "41dZd4ySXxVAhsefgKrb4bEKbERv2Vr6J5LvvDtRJVWp7pMiqmmJRnrfxCxetG3gFYzteuF5P9psgDGdefq6EzQg",
  "key3": "5bqm1qQBKTczBubgU4cHrDB5TnWFoYM3c627XyyRNWRc3Juk2hENgHHoUNFYt9dXiLUvjqrw6ffspvNGfN4GmAht",
  "key4": "4Lp5D24EJVbeDRFKSr893PbVLw7o8Vp8EUAqdtCW5qq8wVHwtQriC53mbtSYL9hheL4J1qAWdYLukBfFBZ3dVATR",
  "key5": "5ndkTJDX5B3xYL1h1N8nJ6awsqpdq77iFyJxL4BAH6YvWPJcEeHVvZknFeWq8H6JADv7Ck3z7LCN8YwhC6kDsWqg",
  "key6": "3zRutUqFmciAgBpKGEStrwUuYATjKuKNTQ4K45a3SsFdkQmivdCSpzAGbfJqt9hej2hfKhWphbfvnGZ6CcEvdosq",
  "key7": "2M5wRDdwGqWM7a6wkwLb2PS2uVLFXwa7WH2rz7BuNf4knjhMsAE9fVz5QcFE4KPZGvmThip5PQSqaBcjf5U38Mzv",
  "key8": "42nRABWfG7osKeDSPZTcLSgSXPYjWQzZJgTtqLVkrMXZ3BsG3qvLyeY88pU2VgQm7j1ikCBF1aSsEM7sta6UkCnW",
  "key9": "5mxejSyuCXyygkAL4xdEkV4qVGg1Bfh5GZ1qnXKj9n3SJW7qJtybbc2PPLHw2QfjxB7bZYYwvHavo3hJLcCGMdYn",
  "key10": "5Sxgu9Qu3nv6MpJWDZymYtAMze9UipuzYozyEWRGghazff3XNhpanNG9aFCkJUJLRmzJNPFpfHsTwunSfsxdE1uD",
  "key11": "5Qned9QLSzM6qe6kZn7Ung3DyxAGr6RzCa6MsDZ1tzLW11wLfjM93hLABTv1Ty8eFz1qvhQp5LqoAeyTPn6mQ1na",
  "key12": "54v8fFJdRNBqH9iT4gUXZ6gXEx9kgskEzUkAfFTzo8EnPJpU9iKyZ2DVHKEVipDskm4basjGjmDFVxRJ4qFgzkfm",
  "key13": "4aUdoZDGrr4jqCyk2rFDyjzBX3ZuW2U6MSZ5FCwKKBqnAwH55GGz9sRxi8r9Xbk2YNFBKuo8r8ygnrGUqvSHNkiH",
  "key14": "3wuKU2GuSvakXE1oVGhgz2rSXHTQxZ7KMiXjsuCRdVt6HoDdmR3e9QUfWQnZzwUC4AmVAcs1qSTv6eAJRy7D9deU",
  "key15": "3bGPgdFAhujRuYLcMzLbDJHpjYSpFrYyggkA6NLnBnFAKjxZJKKs96cX9hVLXmMuZtn5MTKkoQYmAciBL2se18R",
  "key16": "4NsJ2xBqVNar8gmcEmmNqyBdAh1ocquctKmcNESKurNkHucfgbTrUEPNTexScjb26C1mghGTYRjnReLKShBY2HEG",
  "key17": "VvtmGPwg3UZXMxJxaWiZUCbF8dJaHpPTN2hKTVVrp21thLzBTuKmb1FaXbwshd9hA8CzNohosNepTjntNsoywr4",
  "key18": "uPVwawr6ZJW9AWECAttQN8ajBd6saD4Anig2egSTL25LGVeYW3k8tonD9QFvHZ8bboBW8Ww5bbKnN53XCrD3Y6i",
  "key19": "3nNkT8sAg2mXzyGiKH9SRWqYKCBH6H6f1wjotuTiFWQ7UFhhLwRNZaWJi7TfRNcPHkhTNqNiquqUF9Ri8aRxiPfH",
  "key20": "3Sy3eCFHrNmj57vaXEn4XE2LcG8LBtitBKZGEZ2cWxBn2z96vTdHXnuRANtmdGtwofDqZyvpS9hbZqVmfnfzXdYp",
  "key21": "2pgQVnZ3rSwLB8YtkGRRZsULMUr9ZaqcrgxKAJd6cYaLW6U27xBPQXncakWNXS8iVvg6TL8RD4mCjbgFx62auVHH",
  "key22": "5thxgpaRVZ7Rqnqk8QWxnUYiWvsM9wi6oiCC2q8Qb4QuCZw8MRpAaKXqYRuFDJbnrURkEmLAo9U42BAQyr2CdGdj",
  "key23": "2cVaXVmD4uAGn7nSdcJ8L4U69Dss3DzXQEPk6na5U25XdSouBmELLq43V2v7KP16uJ6C1sgznwbTRNHKr7VhiUUX",
  "key24": "4bSTqcHASLd3WE3V2MEfLkhwxknXD4NkcNYLFJmaHL38twFGroYDkUwyEagLLQcNZmRRfb7g5VX1G4dj55qjh8Wm",
  "key25": "4rhXa5qrP2cBNzZp6Qu8JJqGQ7ZeF6MVoDJ36r16b8uqvPMkJkjHYU8a6iXvFsDWPyhzm5JN6pZeVApLGS3pDEJe",
  "key26": "52HvzHhGUkNP6FJWKdMpA1akqsvjskVY6Qg9JwHTUY66B55y5Kv4U7pG6PWW1P56NJRxAsFUw9o8s7Je9zNJR8xP",
  "key27": "GcT5y53EkDrt2SPGXMf8gNLuv4QR6Q9hgEhx6QY6eQxfZuAKs74uNQaULUfmC71dLZHSkrPoL3HG3w1erg4fFCb"
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
