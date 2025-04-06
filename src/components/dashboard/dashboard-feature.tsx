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
    "Vd6mnQyipjWNjc6jfEz8EPzTufmGV2EtiD3kzqHaL9pC8M29sCHnhU9p1xsRdjgQivK7UVFfDQD5F519i4RUMVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gLpGAiNQpGBUYCETYkuK3B2Ha6xedYRqcsm6XAbAxA53i29VLqqU6nfBkpu11UJTWdEqU1466NvDtx5CVpibSRb",
  "key1": "2382BCkFD6aZz39MMBhXXDJfFMKbCxRVKoVCeMFj4e6m5syLjq8sJYUgopwqgHBp7SNEeRxaRBwm66X5Swmv837j",
  "key2": "38goSbepvn5UsTbc4NfKCraC19f4CZLzRRy8H1Z2HMHBDUF735od9p3GEja7ShhzCP1stjXjGW8HMAjHPBmyyzZC",
  "key3": "26S3aUe7boyv8Qqp6xQznqyQEJLW1wKjyVb3jWsUWCQHyN4FWANhXTd3kZLqPpckbJA5LSNwJTi29DRhC66qZ9qh",
  "key4": "3cUWBG1SvVabANnTt6P6ACrBNfriacXn59mRiCfGR2G3SJWjKDpf4pB6f11zhcWfgf6SrjKm9fWoxn7TAYQNwd8v",
  "key5": "3X9f5AZn3YqFXfpVUgxb2xyAVZbcJxnTapxHDmXubPWZuv2wQDyDdMW3AUDvRr7mXNFSExXvKeTQX72qjvMhz4qV",
  "key6": "3v7nU9BMwzpTqnuYXRqGo2P63v188xh5zXTqFhuc9j6b13tYBnYjk4ie3k7y9ssA8WCamiqCLkU1ueDMDfiUyGQr",
  "key7": "2W4b62uE3RaQNqNUkoTf7NSyZLHcx13AQDsUoDHuyXNmWra6mBcTk8kgsf7LLVQxDxf2eqQyxSkux6gSG6N84y2z",
  "key8": "3Z5q6cu4PDJwEjDYSnvDw4Wbme18JuKgM6Bw6b6De6hNFafQdu397Msb59tesYbknJYDjLfA9kUpxUPyg3hnYWJZ",
  "key9": "2kGh8jAqKsbpSW2jPJzY7mrFUKZEmRTJB516NXE1JPyvyZFy4HFv7heVqdpoVsQmwAe9Etp2jZqrWUUUgZ3yDdDp",
  "key10": "2dES6HrFmw5AmutyHSBk2utBc1H5k9o9pHaUmp3LcFS9xQReeBFq5LSJfM2XTtCGEfix2g2qQZJD3BhPjjNbWUp5",
  "key11": "3wHGeJrZz8be1vVzKg8JLd9EXWLJVhsjUEKnCFaxDjsWxb1Fxozq2uA3zFVu37Ux2FVsMCoQkLoHkaAjJjRTJUgE",
  "key12": "2tEdT5mqHxithVqmSFEZWcvTyv78djuYroRedv1GVwdBwsHS1RB4kZyyENingf4cGJgXT6yv8hVq5WFuKv2cZu36",
  "key13": "4aua8ZBdEhq6EH3ahyedKJ37Z8bXTf4gAojoMiyX45rizDVpsCX2W1NJDvsCNY3aRFLrnUV8dv8ymKVy1nQVEZUg",
  "key14": "4uDXthyEBys9Ko7Y1nGXHrpujjmqj7niWQeoJBZxbiDXsmK5kCrqLyYoHqxSa9boctTQJKRV5B8Ue9F6LedBAgUf",
  "key15": "5MssKYBKLWdviYvqgbwq1aDAvrWH9aMBa5WRfbZBJEvsdPMCbpfdqpzoXq7m1BPdC91sVT8hxNAGFj38wxgcZxqD",
  "key16": "ZekysSbgkx4syNbYocyCKjNL9G3qUYF9Uvb3Zi6A9X2cEyowjV2tkHorWVf3dL6Gr8McUdekLQBiJQFtb1Cgy7v",
  "key17": "65rCdJ6c4ZsDkaM4J7WWGrG87x58cFsZdTok7agc6EvU8XsGVRoJ6RsxNANu5tA8osRscQhA2X5czGW2NE72doZC",
  "key18": "uwLo5LTDEjc6mm5QppGxMEiUshoYgFzcTbhA6kwrAYnTHLzFWRFJozbTLhpmqkKhRafxFx1uDbdnK6uMZPdFDNJ",
  "key19": "5DwY5qH3cSvJrfzDhMhy5RhsRGHfeA76SguF25JvRtY7kicGoUbWd9mx6MVsQHJMv9kKkHMStUpofkkVG9yk8rf8",
  "key20": "2MD8xev3rQYZENq1FRj7MEHgZsg9osZNEtLMMvdLWRt2Bqy9HdhfYsNcdwummCsGFMr7iG9rcnPTHWZVmcNoYxFV",
  "key21": "5ZAzBpRpDxqMS5j4K1mxrbz1ddkAGZ4hbwTNeRrBatjqX8q1Hfyxrgh5A7TEvibWkLT2LEqj9FJtS7FBTaN6Tyrw",
  "key22": "2DV8nCKT4YKwSJeiK9ECGJ1Q9Xn6cddjzMXUq1PwJx6VcSwuJN4apSA5WbTPb8V6EvAx5rmZpQCJzqdUFtBGUjxn",
  "key23": "5PPAufNptCiq8HqtjgtjNp75PoGzSeZ6rH8sNnm2vXWU1DTN1hdkVN2Ri2abBRs2pN3aXnSmewev5xTWemrdRrBT",
  "key24": "3XczEcKW5VyXQ66CDRfuwDAiSNvCcvpkfTt76WDmj5kdncCRfe8q759NNfYKGDpgeYW2fapf22r5ZgYa6mWPBumB",
  "key25": "49nDivxewxJeyUWXXYA34jjwN4VQWRFdGj5UxbdnWFkzkxdpGftXqsvxCW1Vt1ESQVWHtdXRbpkz2n1VS4btF2TA",
  "key26": "491qeN2en1Wj8rUNSUdWXrV7tjR64XBpysZsHXCaYmUAYrhKwXLjCBojatTQ3oHWCYnZdiQ9WDy7t1wHArApuxDN",
  "key27": "41cWx8E4wMBUZrskUribLXVQwbT7AdRgtT6F9nqVcEjRN8aujAQh2i6Lyv5QhFmsayU29veeX9HYhdRNjxpxWaRy",
  "key28": "5tdcGYjXwwudPcDjXo4mJjfQiBcrT3pDAiAKWk7bBpoBRGwZo3GvHWK1DYnwGfY1Use5s4c8caHGnUPZh47tGLei",
  "key29": "589NnZydmeNrbCTLJudtNMiisG14V5eXxBZ87BH3QMnNmwcgZv1X9PjiXEtMMaCZpCpjd4a9h3ojuZar7dnFHhxL",
  "key30": "5pdMzJzMCyDm75sGv7mkPdRP3MKAhbg4b3miTgok2TgbgZrr7q2o1VZdPPRRhHcbRphcPCsxUcb8kVJciDBXEVZT",
  "key31": "azCjmiZzugHuiR9Fzs6nsUDejN2EjobMFdbm9sTzopnNZtDQmBnKbTazLJubwwrsZuZG3U4kGN1xa2nmZ6GvUnd",
  "key32": "4dQwyLjHbHv9XX5PH64xQvifiqGwdtnCstpZVQfDChfkXAW1MgJCqXMBewVN6RBio8VHUcYPt1k3EE4vg7KE76rd",
  "key33": "2BP7ihpYA3dWTYZ2Szv1yqfXoDEAwTbi8c6tcvBXaGs9Q2SgCNWsyjYNwXNKsDMTSZ31bohLnastQqp2UM5jvJdJ",
  "key34": "aYdQtiBns688GUsrxYQUHjttwp1E1FAMW942nrpDx4hxCDs7wxs1sWnwsuDpwHSKrxGVJc68HQTZney9F2YKFJG",
  "key35": "4r4eYfhB1NMwzagRFMuPjDjvFoxN1z87VyzQxkJ4WXeGq4jk7By9Z72Uk1DV6cWu7hkcFwrmpzYdPWFCkfB169us",
  "key36": "2C3LJLY1og5Bbc1tx34GNHp8YVQgc6YGRVjY6pcy4QycioKYJ8yVFjos41qemCc7d2QwAXCPXEVjzoRw6yZs1U6A",
  "key37": "2ry5QZHmjV1PU19BLLYv1rrQBetCJtkbbYGjsUF578V93aFALZFGvsW8BHGSweT134V9fR8QWCGUpJ28bceAULj4",
  "key38": "5x1HfqigyAxCQdnfzwMFyXbEcG8XipQiyDAtydYmKrnEHVwPvGQumsrCeS92hrb9RJFCAeFfP8wdXdPxDVp52hLC",
  "key39": "3KtSfXyTYfqFZeX3TJqTN6zFYvmY26gQKdgb8x6TWPaSpjFvZBhWf5FSeGiz912gTZdEQfxH1BTjwcMsvpkCzfwr",
  "key40": "534Vv2UDnepVmUkgJw1Foc4EJPxcQR3MvfLYDodHcP4z7sKDFnQ6JGueemjTC75FyvZ84GNMhRpKkrdiz6qce8zk",
  "key41": "4oAd8rNAgZu65MEK45nEPiD8ZLbhqg7n7udPdDWbBjwzvrs4hgU49FP1Sj819qjzzBu17dzux6VBWhs4PJ9bueBz"
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
