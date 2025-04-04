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
    "g8H8U2pNxvp1giFXt7Mxt9W3u79TM7DuHtsAxgJrJKd6kHtWS3o6smUXaQPEDnMqRrkbW5HRBsgcfjRVqHFNskQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n842HpjEBtKu4DTBZHoBgfJJngPAdxYvE2ZckQNPFabWmq9of7BvTGGqLzCUPnTsXuMeKZg8Evmeex674aF7j7Q",
  "key1": "2xYqkTYLUJj3JVxUjyuECno6N8is5inWqu35i3d5KefSKdjz74Xw8yjKCeoccNduavce5hdSsoGPhF1aYtf3TQYu",
  "key2": "2wRoMxW3hgTYdazaeshygxc5w8x2uhY4rmLwEggnoYESTpcU29gpAmH1turV18fYPBEAJudZgQ84w8bcKCSJSZTy",
  "key3": "5SaWpzpv4YEqx98ZRFFD6j5opQn3PCSyHQ54cj6mzDTLiCQKnmZkCryvoRrgPcSo8rZ88oFqZPnmYFGHjoxX6dGY",
  "key4": "2LMhkPZxfqx4mv9j9jnjsSEkZRSpRd54X12jRK2vpmvGsAs2RrcaQrVjHspy484GKqdWFuJwyTqJHKVxX4bjFBGC",
  "key5": "21B3xXVZ4jnNcT8sWH9hhDpfXn8XVBSQ6psrSer6mFHzugjVwQYx2fVXxFmb2hSDgxEfgy3Ez2HSLuR5H5ThbC2v",
  "key6": "4AmeiFzJhBcwsqRFPjzkqPLNF8TWFuKittJbbN3qB1XhB9wto5UTjSUCVTuzLpaTR4qGB9d1RJ1Tb3W833wSn8y2",
  "key7": "5ePprsRbTBRz2L51yutnV1enV2MUUSR3bxvyBbGztx37o2SLhvYAnNLvwFeFzo1r56CQPJe4Sz13SNtY2Cf41jeC",
  "key8": "3WWKt3ZhWd6vbdGA6xDLWRVtfcjWYZ3VCV5QECqkPzJjfdPbs7B4ziLTPV5YRYr2Jn3ex5zAu3yFWKbSkewcqgB7",
  "key9": "39hqHdgvMPz53w6yTCbqjzWW3btxfpDG2iPEQPXJniXouDgXJwvYKg1813SpPKiE1RbEvBkHBCss5AxzSFpbBQ6i",
  "key10": "4YKAaBBTF3Q8U2NtHNvEjZLAfZgY9AbwABvS8G8NYBKSq9RcNrDQnsRun1dPra9Z1SdeawJwY9o6XtgFMSTcxH9x",
  "key11": "5JDhYuCR2MCf6xvToRJPy65M1EPPrxn6tppjfmPqcXKRdRt7RVBhXBL7QLq7Qb821iwaePBfakW5syMH9PxW3DzW",
  "key12": "4PrfksWV2z3Z1wSNu6PKUgGR1jhgXzbfN8b3Z7uAWii8SWudhptbKrMXktLq6LYF2tCfvMnYy6pno8CK4bdPrY6h",
  "key13": "3dNSeGbXwXJ3vw3D38iRkpotdijfcqEXwpeJj7S5Xc49hoAYpwRkHcz6A6vEw6gkd1NdxVP1eHEemcPaWdtXnyhS",
  "key14": "3eYYxiQgpPs28cxZFpQjXfS9HcBdjeamd3uqmUYARskXc9UycRf3weuAY6vHhjXb3uoYjA3HcWALHJZ7itRucZFW",
  "key15": "S71t9JaAcCKU1teMzrPDdmY5iCqKtmRMnZHeLye1zNjgZH7AakNYM9XQfEL4XnjRyBUgkhKbgLCKeRqt5ficBmH",
  "key16": "3rEvj9r8XhAZHeS8RXGcaDV7YkFkmy4W3txzFa3xJ8tCR9iuixp5y2ifZPRJ4vq6PJ5MTcjawXgnwXQCHepWowMU",
  "key17": "4cw6j8MpMuAexsMFvhTySB9gnxXp4LH7brtZbmNjP4LKonvt3oE5McV19rxxZcmEpxEixgc6iFwRSCqzeFLcssas",
  "key18": "w3od45suMyHHsdZvi2bre8KrdJxwMWbMFZukpBjYN5dE78PHbUE81GEpo7rjvtV5jPuHS4y3SeVjCWjJPFacqxs",
  "key19": "5dEAB6Fx4h73wcrqJoXgXCnE3zuP6VZ5JzJsXqH6Xkb7TyTt3Aq5CiVuGFW723AmVowUH73MmYHuN1nxwbVxYkNC",
  "key20": "5UDCeA6ePFBUBUT852rr3WXn7TXpSEwci6eZ1Uq5FGEUytZvGWwqKnbm6hGYXJCHXnG9pwQZEhRH37aCpfB4djL8",
  "key21": "3q7cmHBqLdqR23uAnYr4f9kpuEQb9oCftL6mgPKG7RsucSVbiDA6SY5MMRsTUgfhqhCC3ExQa59FfUqqicpXTpXy",
  "key22": "66sdsvVkPAFSzMZHpiPi3f9ZznAEctmAKJ5hrAp5XUwnqjRUUCxC5nD9W1hzsXMUCBDn1yRBeYYGAEZ6g1zywpWh",
  "key23": "3r1xNbeGDHQohDfNJWi7Hb8QWoyKQUEQ4KEdBnJNDUHq1xAnyiJLgXSB9H3VjDNiTd3gjei49Kod3FP96d2m1E3s",
  "key24": "5SjSMGzmXmRRapRdaEmpwBaeQCopBtzvCGhRgEYSYG6Getoj32uJwa2yPbHFrpNajzkmazDxPS4mub8HxwKJGikR",
  "key25": "3rHsNBro1pZepmkRoSEGJSGbShwnBmKNWsJKVw2ihmghupaxwa8ibYUSQ8x3y4v2WyjwL8nwCQjrezV3WHNx9Msm",
  "key26": "2p6QRBkr28XBQR7W62WKAp9nsE2MNqrX383jHax7dEzhxCfwUQ5UNsrHXGe5teV7MCDy9511oYGdqnUskAQhnGFN",
  "key27": "67QrK3duXevD5yZ5aZNEGukFKUccDkuuNMHiAUARt5nmtjHMX1VxG8hY5nRgSpXvKKvdSbUYrsWj4g3TNeE3nxKn",
  "key28": "3eb5kXjKw7FZegvWDDqqWV2gGrTLjMKmFPs8vzfsP9AY9NE4nvNFwDWShUbveqxHSX7v4FrTR4QTnjmAYwazqNq5",
  "key29": "237GHKJ1r9fC71hJLdz4bakfoznEXAekgvL7zEq1pDsgZuinsoouxcYeX9fzRbXRh5eurP9jLpaswzGSNqhKfnHT",
  "key30": "4Wvj1wsUSMkZbjzimXeypiwSStjjznXgJCa8iar1z2uB2dXGu8dUowzcc1wKZ7jmpSQd7yKMUuaW18udJ9ru2k4d",
  "key31": "3AohE7g3i9t4SjVSQTeAYrSxK3ST7iPap5N2Zns5NNxBKtkmGBC6juYuwL3bYeDTzJD6N3dFfFzcrm6aKjifEjmA",
  "key32": "2tsBseYbwpTRmstqHWvqJg9M9DJiLDhNbX5BXfRRkWJciVj8YXo5vb8Z2qZ5Lbk31VkXBqLGNZCzpdqbUGuoEuS7",
  "key33": "xD8tqLHpmWxufaajfAMT1mhPSBmV8bXNdHDVPqbmCvT9B2jie9pd634TZgTwLimE3NtU2DkjP7MjUCbsWaxgsdn",
  "key34": "39uMPi6TXEQ2NFGCuKRXqyVDTZ6NaDbg9peTEMwX8mdkw1W4PoDD5DSXKf4mczuQ4h3F5t3KHrJsBhNdgHaTRWVV",
  "key35": "47FjfbZif45mYtDhwcPSKChLzBEEe3ZxxcqRhzB5zecC9JJVsAuqbMi1xe6xiu59Qh91a4JNirY9PMgiHRcp5Y4j"
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
