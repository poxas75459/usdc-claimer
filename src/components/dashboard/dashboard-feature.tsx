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
    "66sPhnNQrmfruvh8FW4WJ8nAoh4cd7rDaV7MJaBgabkL2cftTFwRz7yKBP6Ua8ZQf3sWFW3G9NJZCdZB5KFF15rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Dv2VwJ51SGizYgVpYgKXFFB9GTRVDJzMFpMmJoJATSKTsLDHwDd8QjmLHu71ZW6HVjM1NUuQ2JnX2LMiYonjPv",
  "key1": "3NWt428oBS2j12WNK2gi1kdG4ghyHbDfKjfpKKqNRV5SMHR4FptddMH5Q8fvB2BhoBEgVKTYZMDcj5FUSiKw9iAa",
  "key2": "2Z3q3RaE9dZye6fXwr2tmtvVDk48TU9YeGYjhdP4AGnng6jueJSDatgE6acdKBYNs9qcnq5EakfUW68RffoctusX",
  "key3": "vo4pUoLmCw5yzK5GEZmeUVG5gXfXi9sJn224r6BNYRHbnhWZZts5hAqDa84Ek2ykiDAScZvawQ9BhNcCWYWUZoC",
  "key4": "zC2Lx4d9JNmFbkgdWqat9zcjfXFFFJ8bzSxN8v7HWmepy2riSKDsqXtWW5drYYzqd5Bz9LXektS3ADh2GFD2SRN",
  "key5": "5eF7vhVF3rEUfViDkoiCkVZxiay6UVFmhqqcXAtjNfXixTr5wSPDE5jyLjk8WFQ1DQsZob1xKFw21quoxW4W6DbP",
  "key6": "5J46fGpW5pvEsmUrxNhqN58NaafoFQZwnREMXdnwhJzrjpmKqQtA7dv7CN1DoNahwCFTXPYGZV9VM828fPEvyRv3",
  "key7": "ut7V1reVqv8wjXTASyubrJNVjehnM59hyrJQ47udDvyGH8YqR6RfXJ16jJJ7tS7QEkP5cpBa2Li3GWQrfYNewya",
  "key8": "3brfVypZhbSbayQpSKCWz2oLntePNd6gKhrqbqA7FZtvYAqxb4FHQP4tN6KKCP8hwAZwj2Fd53ccCvhYwujYqpEE",
  "key9": "2GTDhQ52N1cXqYVC9q3vdoFaXiHFYjbTHhTvXMhYDbZGrspNKqsM1Cw7qwGTmNZnZrrHpZR2Kg2Y1V4WBnvmASXz",
  "key10": "4u5PjCrXPymGj8c2gXW8GgYcJq36jdb8pMKdCpeBnptxKtKLF5CTy4koih4p7gMLqEdBNUaXM3byfe9dg9KiReLn",
  "key11": "4PaGvAa5UXTer8rVa2U4n5xrZ71Hod6WPATShUMbrX1u7Bnm9EmqiUZgwgpgrJcYRX8NRjrs73ejrGrr42iHemtN",
  "key12": "2YPFr2BBKCqKpNxZkEbbuhEUrnrH6sRro6Zi64E4758ZcqHVBaXym8up7qZxA25yVGXcuJ4PrB7ccubiRUV5xF7M",
  "key13": "Qt7G5C4LgpB6wHpmSrYjPpCbb8ueR1NPGqtBGVZnuHv19GEMrPoUGEhZqtwjhTZm3u6Yhn6ZoxUL2Z2oUQD9zds",
  "key14": "3FQdzRCz8RNjpGXerGoL63EdsEf26N9afcHCW6ikZaprsTMfM1feerwbSTnyoPuVcU4WGZzPpeqJqb67UQonwbzC",
  "key15": "64wkUdmujpdFXPXtsUi7r2RnjqhRZvbxtEwRVcBCgcN1LmRyqAcBz5SiWQwGh5bxZvAhDHYoT7uB8dTvvkdYp6CW",
  "key16": "5PUnFSjEhknZqxauiS1iBPw2jsJ8QXyrpaWDQiQLJLtrfZ1TMCE4Yo4nrF75uzjNZ19QoE9Ku3XiANgw7j5SMTXs",
  "key17": "4iYpYR4EAtd1q7GwS6doqTxeMbxdsRFNsx8X93wkm4XYHSpxv9Waj6cCWR6wEXR8XjqsD2hFHGU21YbXZdey66WN",
  "key18": "WKJnAAgAoqza5cMa9y3CuSVeETSYs2WGm1nBGkRiFeQqnwt3wjwsQA55SmqAHE6LPkphgcKCT1iQJ2iNAUAEgVa",
  "key19": "D3975yPvQQB4qr8UVMz67Abgxqd3eft4nxb1kswiGJcFm56sKvDuKhS7CkAGkViKkXaqStFDsc236if3pFGpZUP",
  "key20": "3uL8VkheKRNnfMbnfJQVLiZ816CDT2m46kVrHnERjuNyvKjdeLoR3LpCRD7QhooW1u9yGtPgXsaifaaEaPs77G3f",
  "key21": "2HaUYsEuCpwj51cJMeiAg6B4jbz7hFhhbWTfki6jiu7gJs8B5Lm2t5KTDnqKQ4ApLjVdcz8RxwieHEDjjLUK1VVh",
  "key22": "3zoNWFbERvPEFKFeZCTAioYTjKHgwzEp1yZqBgPrWNCBwgVxKGF5G3sGrkz1SU8KzYQHhgrb6dfCTMFB4niJrX3v",
  "key23": "chsREkqHmSk18S7RFJ3RLd4u2AjTi5Fv9TFj88eyv1QM9uaEBCQV8BDA3sXLSTaRdwDNrxXugxzyZgbGXwbGkSo",
  "key24": "5ZrsYBMnDVC4qLhjtmUsxGUVMrgJwfWgTP3k3Rcej4CynV9omAbtyAj6ov2wAdabxBKLjPmeoMEbvBDxC9F6xc7i",
  "key25": "23muV6FC8ehA6j3YV7N8vw1gs1Y5SZBYqPBSy2X9qRpk2eryRHvZ4ypVWuvA3s8pGXZuA6z1Fx3iX3PGs2FwoidD",
  "key26": "2PFhG5xm1KL8F4euBXnzqP1m5WWDWpmv7uzmFGj1PiRGLtyaBkCne4XRrynQeGcd1knZYdFCSD8KehS3XFgqXSRG",
  "key27": "wXwwFhszToC8AeCfDjtoxi4xUNgPgYUpFnthtdw1BqrLDvJhjq7gFu3HEQuDJZ6nZGuy4cqQfxuXr1x9WSmcytB",
  "key28": "W3aZ1rwKBrWEfiiujZ7N7R9Dppmpx6JKWc9zh8vEDnzZtRRi69QCyA3jeoKbsva2SUuNF4VEKWCW74gRUf4PdzH",
  "key29": "29GZGYi6E1yLQRwGyevTQvUgK1GGpKzMoZWiis1wQ2J1bZ5DMWe6GJchEnY6rs2wmrY99EssuMm7eN4RQYxvz6pa",
  "key30": "p7teDoMmkGjN5xwHTV9LynJity9Q6hHCVZUmQdNJgUex45Hsbv5aeiR8juTWss9zfK4rDybshAQS74DQxnkeudr",
  "key31": "5yUkT9fgerSSm42HAEEXxCztnizoNJwhw9iV1H1kPRBvfygX47Z6QdmjpdyGedG7XhWwkPBqo7EL4ryqWmKbR125",
  "key32": "4hZN7yNV8ZSGnGdJC2ye3HmBJSoFfskZb9SK7pGZt2eUdVVPvZUZDZYUyvbJiqtfeYnwNLjfKsfrBkzYcjLBxHS",
  "key33": "5o6GBsqum4aaJDuGyVQMThfbRsNEiNoYCqNJsgeaUKYqkY8KS9GbqYqxo3vSa45tgYcN16Lr4eucx1fxdyQHXj7H",
  "key34": "3QVxRsswHKyZVYpNo7TCMLMJucXNWk2hpXxFte466tfYaLfZ6bC9KKqVHVMhqrejSb12ihKK25TUPmZFM5e6PT38",
  "key35": "2Ac5zxQ4zkP86nkL5uNHseENphwUU7fmoCkTGVxJCLw6tVoVD1ih4LweoyZqdtFS8bx4erZTLzm9LDxX9mgvEBL6",
  "key36": "G5kdaRCKrWPAGdH7Buxhe6rmAVJsEWboGRp4T9HjszQWv3d8YxMzhd3Rjt5Z4H3MRFnPcoZYKQLVtZJQhpVY7hC",
  "key37": "23GpmUGZ4ze3NXnyC1hXuXnxFuoN9mMXyFqBoDWra3duoMN1mqwW4ZNP9esJHcJuneuDtWr4u4aQH8LuY24s8PxY",
  "key38": "56fSXrYygDGdaA15bUKcgY6uK5qr1x2U1r47zN9e6aWa5uvjfKCZnXiGTEDgNMEAY29tkeyzpbjECsrfVLTRe4mu",
  "key39": "4baFWrqYyotCAMUFbnXuxBPiuqMKHBNQ87yC6vyxNEX7S1bRQ27uBSe3eEodUqUUwDy6T4WcdgLBSrAPXTjMzTpN",
  "key40": "5XDREb2t2QnBXXXQ1wrxM3NKLHwwGcdzB74Sc5n9rFerfb3nB9UXR7ZMp79SzP39snHTtEJRzrz9JoccWpmW38KJ",
  "key41": "49AjgZPpcgXT14tfFCTG5LCXPCsvLzwxQr66wGFrdMmwWs6UjVCmqRFkiUJQRQkxXEaCz2eeW6wA95SXBz3z92ZP",
  "key42": "38dVQHB7TuQoLrGRjpPJddsqQNv2N7PxxoezA2GVVYh64FpwtkGDk1tQHRZ7YLzYJdzewuFEtjuwm7yr1aPYPQKK"
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
