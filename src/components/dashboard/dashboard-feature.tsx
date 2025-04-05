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
    "2H5TP2oA7aJkR2Caod565UxwypfRkX1Kf6EDqPX7qv7qWYtTQhme1n5M7hV5h4HaLFM6X8Uj3eeyfChTzdV5YK9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y2RYMJRqWH8fWxGzMF8KLASYHmwYXqw9a5nj8CkzikxmivSFNfhedVVbEiKDs2rWx9ptkZMhNSGkmp3iqkZ9AUE",
  "key1": "48RtJNSvGY6dz5hvDcL3QGXScGdVzt6nFkC4h2xMyt5BfxyhfHZXY6Urdxuo2kdMk4Hs1n2dEFkjuPcESE8459GE",
  "key2": "3yxZYHaivhfXX4TQeMsZ1qCKD4ZnV7YpWyHCyFN5JG7MxUdbR7yBkTnNBomR3GHFZHsd7V1uVGi2qjiCvwQcPHQU",
  "key3": "3muQVMcpvK2U8fCmEMm8ruKADyBogBo6vWCPwmrTACd8MBrbHsoLtYzx1E176Y6i3rpM6iCmHHeXPN1mFPEoMdyL",
  "key4": "336StqE6PjqFX174or2aYn2oWAEM2PHQgitmyD1tBBkXqHeNa3nvjsELmS8mzKvc4LU6v8VPGxvYDPFej8ufxMG1",
  "key5": "4JnpKuA1XBx27iTbGmXAVUhh7A5fDbXCBNhiggpMrU6r5pWYvJe1cFf7er9FzSVCdWWiummFkxzVWAn6GrHv4frc",
  "key6": "3gTY9fejNPJRoVpiyCWgmGECcAqEvWeHSXuxLHviqhsmVXz15TTFhaQrzGc7bxr2pXzi8iBdEzMJsCtWJveuQdFJ",
  "key7": "46iEiRKUXYzudgPHkFT9vdN7sQwPesw7Hsg9ZsSPmmzEY7sFqFs6QoJQ9rYAU4AWna2NRVbirxrWpaWvRUySxZKE",
  "key8": "5nKZYPpLKUM9ZvBiv6nK2PeNJurU2VcYL9zvayfRkFuu1j7TWu9r7TFv46NBAYeEcXvZo1NPL5e2N1c15aEiGfUw",
  "key9": "2srFWTWdtJEKTTDKr5w51ARPhXDqrdSYjCYu48mDJs6mN6omXwb8cuHszxZN8gg4n6VtC9JVd1k5LJC9bYSavUYr",
  "key10": "54eem3dqvpoYWCbymhtCVzvRpbRq8n8XPMeHB9Q2rvDyQwFBk3Sh2tn4TqMfTEFdwkezh8YwRy7DmuS3uNRsz4jC",
  "key11": "5mMUEpzJL1T1guaMVF9dV8VWnd14Y3Lb6aJTeFRHxCbq55i57xpB8A5D7UmG9k22HriKbGHiPVHJGg6X5RS76vSv",
  "key12": "fiJSxu5vkmqVyhtm7AzJhNSoQbQasFs6xBNfhAmdFyAK6yrr8o6gzZgUhpRsMXnY78oLj1jV3UbwQ2oVed2QUjq",
  "key13": "5WWLGwcFwXpAcaP7WCQTDi22is2CAmcZTFfekqUDc6dfyBC3ifoJzxkXm51AQXvHwRjAShnSduqVmv5ax6KkLuFc",
  "key14": "3YaxZQvcabM1kFE8UmPoot9KTaZbE2eDk5N6FVukjkZvinNHF833avbn384RhKoF7cRsjiN9iDQhZ6ivNiFyVUWw",
  "key15": "225ifDtNnRPfaUHrVSQdVRj6aZcXsMtjPW5DibXvVi4pgmSuGuLyimJCnjbwaCMZpdptpjdqdPJ8DC9KTmW5LYuN",
  "key16": "5Rwd5Gh8psijMeZNgFX6Rwk8JHBkULKH4our4bbsdx3sShRc8hTHcPSYcpktGs8ywZ8gppmfCFHZVkTCHsPJEtyD",
  "key17": "2TNYXwCcvkmPytttqB1LzczBJLiTs5i7xLExow9xFHThPF4XnGq32n9rxqiq9xuRvvhtnaECd9dceHuwcsWbn723",
  "key18": "58vHAdjwe7NEeAPSKzKw4mDbg72BJ6HUecwkkoUkPNTicd2hH6NcBhuAT3jv2nsEfnVSsUaigaZsLrXv6Uc372A5",
  "key19": "5tCnRVCuA1V8JwZ7sWx9bKeufSFwSsgy8M1S3qzwmYU57LWN3zonaJrVPYMPkv5kYkSSzHZMMU5tmRh3G9zAvtnR",
  "key20": "3DegUGFLuDWtSvGyb5dinJPZRR8ricqphxuktx48kEwwkv7g5oXQjsPncUyhcsq6keKnCzAttZ1FdLY87FzXUzdz",
  "key21": "4m5NaxdJEFaL7aGGDRnAhPQ7untnx8FGAAwuoc6BaY48gcEW4BFVoppkucAcLc7TL8Nns3CSNjLDgMT4DkJ3d9va",
  "key22": "237xvtv3F6mHda9ZNaUHHCX6KZLFwGJTPecu2jx5FcFbbjWctYJ1gryED8SXLEbxoHnA2Za8JU4BEScj7LCCnFZu",
  "key23": "5yfGiMcRPWyXcGCC2spSKkBp2vevzDX5aiUXo8UgrkZ4g4Zg65HJDewFHEuDWe9BeBUHa465hwVucPMK9NXtmWAs",
  "key24": "28WNiBCGPDWFz85EENnY7rXVmMVVQdGqewQcUjLRaEXeG8o58d59JthX9BNm2UrFk6HWzKqLeSfzZKXRyYwSVdJr",
  "key25": "3pbKMEDDKxWY3gfLjgQ25ZgEgAb7vkv3kJoX25cUmwoVm4VzQJk5RFKecD9tS6Wic8Uy5cK5aTXFZBQmgdxoXnUY",
  "key26": "3BCXJP77LKjAAiJwWmySeFffmk5smDcF5i2xTy2EcWdyYUm3Mr6RRjgbPQ3sHznnT62Nt2WaSSXwYYaLSTxqEPGo",
  "key27": "2kViAmkbtH6bfgbBfbK6vUJed6Wsq9o4ZxGR75kzCqdpmE1GtvkiCvBUcoHxXoiX6g17LytN5uFJKvzxecsMJovK",
  "key28": "2VKXpmLmTQY5n3UHUw193kMf8jNkQcijsQcbdEWHZXMNnBDaNNcjp9FKV6jUpCjbYrUBhkM4Et5Saj6XHmwBuTnv",
  "key29": "5sfimMyjJFE5N7PoXpd2v9fNa6RzXjSuPzPuR1b1vqo5XfAGyKGnC8ovPYQPad9kkYC2fZYNBLezSsv25BxSxV7k",
  "key30": "3eWFmBY8TNWcGKQGnazTzi7cv4nvwMnsDpYBqFx9nWApj4u5vacPDTsd9jHUCyLFQjWiR1jJY92qdV8N1LTSB61w",
  "key31": "2QWuBxFtqykCkXyH1H2QLahjpTXjEcWDrMad61tj24XjL8TvnizxQZp1UbNQRSZU2CmA7ebebnLN7QSk6fEmrw5k",
  "key32": "4pxss5HMVX93Dd95hQhn5Fyuie4Y6EXLUCW1AF9ABmsisBXnFcf1X5CdNLp77qwRmeQ1K2P4QwuJmZB4jUS1DX5N",
  "key33": "48ukPmmoVf7eW2g3ViWUrcwEqBgux3CEUNxXeRQLRRxRDF6CVDmLVHLyKSXwTdM3NyAu5NQjnQAJJEYLNiBj7Xet",
  "key34": "5T9rCNXVQZVGZqgRemu9s6XQA2h2msTBhwDckdrStUWE2k7cTGETRMRDwDVT5b1UjEAbZTMLKqaX53dHbyavrJ97",
  "key35": "5x28VmMDtEqYP54gCtvaEhJeS7FLhhpkdJM5NnjRAiiUaV78JeGm3L9KnTF3gFX8245doPEJcG2ft9VXZHuWBkP",
  "key36": "22aqQGfXFPyj8ZqiJTN6pgEEVVc4kXGDVaze91yWUyrao9Zxc6nTZFUpv8FFNpYCoLYi7Nh4Co17sJTZn6F56fJG",
  "key37": "EXcW8iREazeqjNAuCWbCxD4TN1W9HiVbJjgzAbTKGKzW6585EUhejbZK5ipojjZTv43eJjdv6tpsojLn8Qzc7aQ",
  "key38": "tSm7eivQ2Y4QC7MEbTLid1i7NXhVx9Dm4icHJr7GEDabMcqUAknj7CmnjrbnYd6tPt4egCBhEU4gxGX7pj9iMn2",
  "key39": "ceoxYKY9QTtkBub2JwduLq169jCCQfit43D2vhCRcJXrcvvWxk1wHfh5iDSuyfM45vzBddjmyULLW1EzRt4WKMz",
  "key40": "52UA3eF2epgVzXzgAoS45b8sN9jaNKdW4wPa6cqgS4KxZHXtA25bttA5acJ5irz8R73UBdqaHPNyzxCNviXPYC2u",
  "key41": "5yfZPFZZWxrUwQ6CP3x9YqWqtuaQEDLexHrqoN5NPAa9As9XnDvwknVarKAwxxHCoyPc9RDzsTnSaujMMEwpkyVb",
  "key42": "4rLA7hohHq6TZ8qXrdSGWZUTH4VQD9St5zkmgHEbahJmPBH5je625cqW2mACBXD5Lr4EXmVWXncdTAeJTEyzd6T7",
  "key43": "2hv7X6QoHG2ep9Lk3YTLmBBdgSyGnjpJGuwkei7W7vk9e19f1WmsAHQVjFRtEZkTboMpsbAxZxQMAzsMSyCHYcuh"
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
