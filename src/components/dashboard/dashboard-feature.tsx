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
    "598Wv5q1AsvPeAmqsTevUbAZMM7BHUfkWyuZq7QQ3P5Xa2LAfQFowV172wVMqbbN4mxQkjCYpib5hKy1hAJWUz6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jCnbiPqJaCC2HjD7hbNQPCp89cJ6NgGepsyf6LfDkgpTvEhqgfDG5m3bTn9BXGnhJjadv4oSyDeGbrQQFjF6HJp",
  "key1": "2YCzX83WX49cbefmhSCueioGCJBtmFYPnim8Pg2Siuw7xCXuFs4jc11kE8rKEAA4G197uMMKkNMnpa99fg75JzeR",
  "key2": "4SWM3CkkRoZqA7v1uT7C12VdDEYNrK4qT7pkgsqnjJoeJv1ZYXUmcdAuJaZ5rPWVfpwZqfdfwsvsAqcYoDVbasvj",
  "key3": "2Bfgaey3gvkMVoKg2hZs5D8jfeAXYMw8YVdRP6YZSUwH1hZwLpLxh84NhtW46n4GjuxT9ZXnoqy1m9DMgRY1SGkB",
  "key4": "5uw3bqUt6e8s7Vqbj1cRS19KDF6CFGEaAoD2oGKbyKB1E5JNu6dGL7CuXNiFQFvm72m17wpQZZ7LjMnPATRviezp",
  "key5": "39zMTXh8z4TGcunS5Qa5h9KSTtpQyYDQ8p3w8C7UQucnyD9q1pZzCNKNqvRDGSjMryFRHuySn1ACDkb2YMamqVKh",
  "key6": "tiNDUY834N5K2NEEfQQBzqSaXiXeFxQpLEvrLjE9D3YK789TKD1fW3Jr5p7fnWyx1UUpWjWuhEWoy2WkXxrwKjN",
  "key7": "MSBy3Ru2ZhWCNco8qjyWz2MMaKebC1T5LqSRqwiGvEr9f6TTta1NvVkwb21QTc1aMqLQ7hngWZYLKYTY5fuiGKK",
  "key8": "3ALXGLwoJgBuS9dDiyf1CXYRKWjUprb2h5CGmyq5JqzosLZQjAUBATEu7YFZztV2eRWKMGBjQu3qhteUXvjX12dg",
  "key9": "2YQqfjaZL5tT5ufsHVYDghMrw1hYVMu2jdsGWHad9UJVq73vRetCsF5BzUdKQcVthyra7YYGx5G1vK1SVNMbXXdz",
  "key10": "29nx482rvFAhXYzWXT3ogXDyjJjQcJftyGU8QuAp4povJoDsjmhTMccA4aYUru83WDndpmMJ1ukYg2hPJsASsZkL",
  "key11": "QkbLXAV2yvhtcxeXRbGoPs6qwCwB1E4NgS93VNfP6G7VFjPisQKDWA3DjUP5RZn8eq2kBjvQyEPAyfvmhGQtX7t",
  "key12": "2nBFHRiwtraA4bvLWvzyDpVPDSnxxuRj5n7iSE1pEE4tUnQwzANgJ3NwBTkK45UFixTWN1wpL4YgjDPgYKHH4Sr9",
  "key13": "3qYrLd8aiLbwLJvirVK6SWV9pYyL6UYm1btAeV8cpEKz1H8vKcF3iiqbU3KGfZKnqyUiKTMSVkctqhScin4a2SJc",
  "key14": "4mrAdVn5mrfYbkTdnwGZDrwgL5KxXcz6irxBTiVroxVHWRsfk6mwCsW8ZucUoAJbqsauUjPQdMNUCrQDEisw8MYb",
  "key15": "3RZFn3EbdrC9nfBY5z6e4fqLzhqNevFqEUVbufS8FaG6YMB34iUdDd9P2h5BLds6ics3ZqipWXY3xw6Fu3VykNya",
  "key16": "ZmyTYgNpbB9G2hxrMkUTLEzct9zvCL1bgFEgNdm2i4Mw8XBnN2JTN4P1n53yddXteWqPN2meKJvasZVxV9s2XZQ",
  "key17": "4La8swyWPWGfMTrjdagycaJoo4ZMKRXVRz4xJx9bG7qRn58oPBLBN9dZCW7w1LLaE6WCQLWgfKoiakFdjLCQACuG",
  "key18": "QRx9N3nmRG46xcf7N8GnuKZ3UuKwmiCRW1c9vxC7nm3F8uG7gxYNEKmHDi7XmX57HNa81nh8cuDt7Q77DikYQaH",
  "key19": "cfqmh1c2XPLSmqXnsFBB5XWrE8XekPNgVeJJwS7wpn7uixk1dE7MrnLqo3R7LZKJfz4f5Vam6kfd6RJ769rR8UU",
  "key20": "H3HgC4udG2hmGP1adBPGaDkCYSSi7MTESwYnPHcuJpJSKf12WXkokBc7DVgpBWAA6JnHSY5ZZ6qi8CAWmmQkQnr",
  "key21": "JJSDMzcZiztsE6nsRBZmYDLuqFyHHNApuJZac6McGEuWK4MMNmYgUxbyvT5dpZP4RA4eQjEnbq5eSZh3zZfsPm2",
  "key22": "4WAUAWNTZ5YB4GWM7xZ2gQzhfyg2dBMw1bEH3swzvmBSu7Ab1BcBvoAJZMfqFrHQ4e5SjbJ7yW9JheukfDCWctW3",
  "key23": "NpZRwMHhMtwACaduCryxZK4jQeU6Q4xAYg7CD4v9M7zW6w97FYMZdHBuiW3XajDbyg2xbSkW6sRDdGJrWfy1ziH",
  "key24": "4H6acF2m7RqUMjqmFd8gt6hCJeJ958JdkKB4hS81eSYqdtW5ntVgkc6c3V78rDs4h6rbEmQ4Phc3LAdLgL9cWsyo",
  "key25": "23voXETtu5upaGHigYFL7AmafzzsHL5WXpvrERMyNyK9JwkdZcbFSUKYMFt8hEZGeDrdMRhboGDYPS1ceztbhL75",
  "key26": "Xu5XkKL5oNLdxyXVL6eLwbeJHzs1rMcDtJxoqCTnekz3B8Wg8LX986M7zQy3n6NN2yAE8LBtkRY582HPs72oNsS",
  "key27": "2ASQgQNy13VBNkm1WMcaFLbbcL1JFnaJrZmTmoCufQ6Uq7PsTPuFvibnY5Gs3L3P6KLz3YPRy6RsgmFisnUGfzxo",
  "key28": "2m1UTVbq6315KVBFA8cc853QFWqzQXFQdaT3zD98KMay4nAjD9AybxkT3RE1TzXr3NymeFJKA9c5szpVSdQwepqU",
  "key29": "5fDJeoyLAatK1VDpkUFo1VLzYYseybxehhrb4jqh1dbBrvbVSKpK7YBPxhZEyccxXK5ukt8HqeeK53MdyfgGFtNv",
  "key30": "4h9Fo4EWjmcgVyA8E42wVTXgZ72whB85G3eybiLGzu4DYudfQTqcsii6PDTojEArqjHVn3A8VPzNCSKBDC1rtn8d",
  "key31": "2kxvDzq5izL4j2yYQyUyvxvrCffq3RTpRgTmhJ36Qtp47KSXzqQPbqVJ5Mi5iHwyXrArK3i87jCQCnSdAvQw3gv4",
  "key32": "5z5HLqBaeRLXM9HgzjsoQnmpbpw8DkGoCUyrvwWnmCRQLvVfVCCU1eKC8pGFHnmwoQo9a4rPosFc986vVZ5VsgGM",
  "key33": "4A87E5yUbbCgZkMogvBnpMQZuLqMewP3pnRMzuoq9TrZ1atmZE1k1UcW5MB31JpTzPGt5s9DjhLrwNSLAjbXgvMj",
  "key34": "ejFsnAFnbhm1eM8KEVvDVwznEuzvezZrQraqkrzouF7eUcBaZCpVyieqmhL7imsRHqZtFGnQSQoGgjoGymZ5R4V"
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
