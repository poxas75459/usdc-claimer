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
    "2J9ZCAG7heJcCXjUYrhhUrazeV9cgtPoxPY2bHZ8xnkEw1cGqAwu1QjWnzMaLzy1jWEvs2Ugf69o9TzMsjWFTAe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c1Rft24sEWygGyJkXdenBH3VxKPYnwP4w3SxYoNasgQ6CRGmpjh6wJvTN7DGL4XvNS3Yoy4V9MKxSWuG6mnm75Y",
  "key1": "4pBNZKnbdLGbQd1vcFAVqzjyNwg3JfEQB3UVAC9PgbbQSPYzd7C7C68eg85g16xrNTdLf1mhNsCAV3sLtV7iJED",
  "key2": "64nuwALQ44ZyBc82kF4DjtnnTsAL9aCVKg6TNhPRMAq8SRnfzMcfvJ86938n5VijhFbXLk8H9UFy9mkjSgih2bqo",
  "key3": "4zm4kcNotJKsMEvj5cLxhWseAU7ezEXZTRas7ysE8Cw56s6L8ydDgKjUpwQoh57AB6JQiMrKt9LpYd387hMMXeqd",
  "key4": "5saKsCunNU1zEQzDYdcncYaWba8BzzKVNj1nBqdhqQUF1VGyLiU74Chf9W8CjuYX4VYMdj74S3PGEuAVr1QbAPtW",
  "key5": "493GVpkTfrtUHpv6bAsjJeXnyirgxSnSzv1jb1H6atynCHiBJCVXhHb4mKb1EatoU7y49LmCuP5s4fKJwNJZM8DH",
  "key6": "2xvJzCYDXx72D86ooGpU2q4NUKv1S3jXQ1wYwxuxicbcEcNgdyt2T1Qpf61VzsLrorHBWHScQUpkKQ4A4FsjipiE",
  "key7": "3VWSrZ67v5cLDHgP9Udnae3tSN9tcCEzVQwBLLGdXdHH8wc1PNw9GjyQsG8c9ppp63MvXxoXLExfzeWKYgxPH4i6",
  "key8": "UHht1k3gF7vyAxD4yAYXU5SZ9DbZVSkemAkFMoPBztyuF4Unoe77nXCijWHUBsGATfa48yTn8M4xE5FdxkcGg4z",
  "key9": "4bstC3Jc3m3qZLYRg7t7UYQPMJaNFkMuc5cYgTJMGtt516UZhqGHsC3az3foC6mK5Qhgfd8WvLM8DP6WMEJbfibe",
  "key10": "2gbsH6VAtpYWwogvSmzAr5Js7Yq5C5XJUGiiQoBctdjRvnwR6kdUnMJc2tiRAZNEjkYvLDRG3X5BUqJ1XRyqBHaV",
  "key11": "3XLgaBTDFCdZ1QsJeGK81NmGvksidPuJqZHgxYMLXbYD5jE2ywJvXg7ndeiiWB6e7PWgiRpQ5bXQcqiVdLhLtTGX",
  "key12": "2cf5DoT5JsZieTRyZwm2iKQrNQFGnaeEthLh5iSzpmcw8K9MCVi9f41Czknwmc7RUejMrK8Sv5SHgfcnsuJPCRGs",
  "key13": "3aDZYVokAEGcxN6AE9nz1bD2BzNF4oG64wegEmxE8mr51Sd5mmXkV8N8PWhfcbdpsTbacQYo3ZwHYt84csoeBMcM",
  "key14": "2A2pEJwATPiTpuFkdtMmL58a69C4m2aiXu8pvkXY7oMBSHKqW6AynASAeZEoqK3ZEn7wNXiNbXVW27Fg1bjzm7iG",
  "key15": "4vDP2oAC7LY3cWBHFbaPoL4jAD2bVfz6pdnuJzvoj9NceK3QaA9U2XANvvTVzidtppK3kucf1AZwbVM46ENtVUdV",
  "key16": "4qqBCs8BoPmF4PPZAb6yRpFFPiNtGwms2RGs6ViHbiy7rQw73rf8RFKbXCGsX7TQp5Viyo46pAPnG3SUsrNJsvg7",
  "key17": "4CDkg8G96VhvCcJvC61Unkf2fZwiEZXruiGEjGuhaCdepfUe33DSgXekTJaa5UrwQr7mmqDHqvk19nZBD91teQVM",
  "key18": "3BQCmoFV4Nk9ScE5XsSXmYRQGbmNKMpX3zU8BZt1mAE9u5rqWqck7bLSvys2Saxjv7DBnXx8hcxJfVryzmhFLnmA",
  "key19": "Bu6go522uxJRSeke3nXCpKeRYP9PUjHjpN3K1r6fmC3CCQZ7UkJSFcuKAba4UwQyAwd2Ua5WNq5wPyF4mnwCQKy",
  "key20": "33A2AyWn7nVf2bGKWiAK4kqX7TaBncwry9dxvmX9L7bRZ6gweeUuagAuZtgpY5rFZ7bjsgqvtZQ9DLaMiqNNEJNe",
  "key21": "3xsVepz6N5oJecGgXN8aPWUWPRXQNyJRix4w2Wz4i42P14HcngAc42GY5sctrfbEadN736r1fTV3CH6j3oXpDkha",
  "key22": "HtkPcvYuZvXxNaiFHPrBWTajmWEatsUA7KnQTrQ3juS3H7YEyXCZPLc6LUXgjJ1kbu94KKwJRPRprbnGcM9FA11",
  "key23": "3u3JXFKALgvq4dGKL46U2pPBTpcky7mbrhVxCuCampp6FztYVkjG3FEYtcYUMjvR8egYFj4o1Pf7oSNWr1GcZVaH",
  "key24": "4XqitAVHS33M95R3PtiN6Z6ScCSnK3UpU2As2RgzYh6RmrN9dz7T6FmrReqwwBcme5n8uwotajTtnn5Mro5X4qcv",
  "key25": "4S9FCMTzWcoDVPfBgo7HrAuEHHcmVLTMzdNVQeD8L8Qzdq5LABWx25CmdhujJ8uYCkVF72oL95WnTdfghoQNRotv",
  "key26": "3hYtkFjhupEkT9Sm9RJFJ58HtuStTtuFJKM8Zcy7u3AT52VMcgnHKt3K1m6NkscsrXmt1jBMDVxVAcbYXZzxaKcA",
  "key27": "4Ag4zpGpYxVGL6sqS4EwgHShdQoHbAwUc16cqtqoTDYXNguNTM8g4dRTLA2ztjDiGYMtTvAjoN4M1fuEifcgAcZe",
  "key28": "oH4BfPyiVB3QzaJ93Dci8gpB6SP8YpwkZp6pEssxdebwvKa1CjGgocFZ5G34miZou6dA1BV3jbfH6J5tGMD8btK",
  "key29": "3R1zGvjQdNgHM8UzCJehxnpj9urXKFNDZXnNstee3koRs8tSYHAzcSRDUhrC7uYq5woyoAQZYt2URSCrwCzg4YNM",
  "key30": "3GsPkbju9oSkMV7y8oixwYV1KVeL2EkLHAHnEsTJPUGZ4xf4AMbmBojAaKkeLi8PDHR1sgevZN1HR511A5Nt7Rm1",
  "key31": "21RyrEub6VNDtpuV4XR7UbJoUN4u7ASNJFoFBix6iJJSxcQJDjp2dFeo29Kr4fgB1h6cugsKGFGZSGi5ogcfbXFZ",
  "key32": "3TLxpnS9AnHwGjYL5WJw1vjY4z4USfoj7hswjTqDUSKpxEWLfukAWx54eXWj6gt3geSuZvmw8G37hXST8RquhVaA",
  "key33": "2JZ6nn7DesFpkXHNhuCijaozWozi5LbnWFDTfmQJLEoowrnciDEa87PSAnpDE2GGWTyr6CKuEbN8HJZEG928oecG",
  "key34": "5cgyK2VqNDpytJu85S5ffCVJtyQpr7NPu4mCuY4h1sLpQ8RJVnAdqCqDQerayC4dy9q1iiYeiRpy6HPB7ixSdUdy"
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
