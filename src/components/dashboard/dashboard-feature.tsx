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
    "tyYRP9sRDKaUXJYyX4rEjfdQRAqAWX2nAtcAZgkrTNbN4WftGBgA4pwU5QUjbn1GRtg7PUAYvjtw7WDszu2iBaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "365oDkLP924oL35iTstDLRitDJYpJFzTbsaAMajfndw8htEHcBmUGgCUsX69BsWMVWq1q6YFvBxqrKrGMzcffujV",
  "key1": "2go1PFPGbxB6jbELMdFLHv2GM58hGxh595RLAf7CgGpxemFvzMFhLewgF9AmQzjbs56MxgTrN4WPKqn7sqE5pxyw",
  "key2": "3XE57aTX7N6sjjf4Hqi5xeKvLDsee2ufefcCtdbbBTEVykupCJURphAGRBtVaRaFVHZ8VnLrYdTVHchfsVVnK1z1",
  "key3": "tUjNYsvj5TDCh4PwrqbTopWe7vUeNanCiQaXEJgqQweos6gTVGqFFHw62wKQjWGruSgUcodTD3ff2dLwTdfR2QL",
  "key4": "2CuQQHVPY3Ad59erPHxYe6Jo3XvfUMjvtCWRDTbFUBCh8naXDXDqgc63ew3iU3qSZKPaFySqKYwJvXw9QiQqNRNv",
  "key5": "47x51GoCJXXtESee2LhZRdRpAQrxRWv1TmqzC4huz9187sq4og5PZNSCzV4pjqptTYTQJnkN9Q9E9bHz2q7dVUYT",
  "key6": "BoSciwzUAsybT6xJZinc5bCUSCXJH9E7R5u9qeVGXgBkhg5W2jp4EWzTqS6JGBhJrKMcFSK4fF95AAq1ejJqChn",
  "key7": "G38Cr2V6epMeVjZtorfhLCssrcLBTKqBXojdcT9t2Xcjs1ijiG7bTHtwCYg8x644v1oL54Rj47yqKtNsD6fX1ou",
  "key8": "31qSfSwa2uDRgKFWS7Wou7RSCd2GAbBdE7p5x5sPyLzi78PjJGHehb63Lst5knPSrWrUw32tZK6xLtSAHBvkPRZC",
  "key9": "29itC2WtgXZXR4jgf5aHqG38KjhtKwL5Vo4fpPsDUi9EajhAhWZQE1wEHtEj2GaZQsbtpbSA2wdpfDEaxZ5EoAv6",
  "key10": "4QUw1moucqirkBV2CbdxTTG6JoCK9w6thAjhz3b6AZScjvr5sJ8VkCnMiKiCz7N2KkYKCRjTrcJTT8FSBJ6Rx3xX",
  "key11": "61tgyXXtDc5D4zHAJFPaQJra1WCNsDmWxHBVjnMbpjWCY2HvsUtJG7oQgmfnQTjjrUC9gvE8zDzxaLjXd4HRcFjd",
  "key12": "4cuTGYVwtiBGb7FA9HhnZKoHLX2xwFBDny2NJY4MVSnBBFH2ZkYVpqZBQjjZ5KCFZ9FcyRPbq6ZMqpW4AAHqeBjR",
  "key13": "xuaxQ5DRpuwTuVSnCaw21M8TdiqZ3b3jPxnsHYKSqoA6VziUUW7xZmQ9QeDJngbgVDjybFRDRrebPHjzTkQ2DRo",
  "key14": "MAReJuSrPtGHAJnuZtnUt7MEmMLE4oPqiJpVXiRVwp9ZDXhKVw9dFNMBXcVPiUwV35XPpdoJKktywHGK4yswqvw",
  "key15": "3ZqTHL4R5rTvFdZJX83iatmVA2ie62UWnQDdi3tybzvFi7otMiLRUr3ese5QTcbF7iEuXtTXb711dPCrUqcLXVtM",
  "key16": "2TvBYQT81sMipd5aTkWijqkR2MZFVck1cN8oa15wGmBHyHeNK5CzmLdwDneUy4g8j3gFWnFYBCZtWvF7aqed1Bcc",
  "key17": "qQJT2wBy75T16cAm8d9GTU8gNcuphzczzsjUU1qZ9vXyQ2CqJEco8xM47o9rZndMuMLRYUZTcmp3T6N7wdB4tEX",
  "key18": "58tzkB8VGZZqwAUM43XstyMSSkxa47tAqfuSVGah5tULksM9KCwhPVgHBQEMoPJzcCc5RKNFRZrQYSdHVbf1mTLX",
  "key19": "57EbBowWRXurn3bZhmfN3G3dQobjBsP8TkWTHPm9JSLg6P6T82vEm6FvzesDoz2aT6Agjkt5QGgY2LRsCZbHJmck",
  "key20": "3avTLkB1zv2waQGbF7DomntTfociEu6jdR1VJgXuQZzxaNYHTWFx2geTSJ4xNFGmEsnxuJbjwnaHTxn87xb5tZNo",
  "key21": "34eaTh31ohT7wymnn1hLWzcK4NFjX2R8fYs34acqfBofR3N3jYoT9VkFHuQtVJyPp4TRSjVvSpAM7NN8R3SFKe84",
  "key22": "DcenHqPv4RiRsFd8xX7Lh3vMta3J9kpJDesAMQsfCLxPreS4U9cM3L4ggE88Q56wVfGiUDVJzUqCRfCSBAwMyh4",
  "key23": "54WGMVdFDeZtWaSEh5iyxTXG1W6CuEY8EZtDKNaWYEvuoweXgRoMN769mtzrBYdYgDaxPV3L7q1iShhY4bbcYr9E",
  "key24": "24hd6TeUDUT2otV64oXTPFxQfiQMNH5igQerYrXUGkuZGBcoFHFtmmwgZNKRBeXNUpQgmhNcNhjRCC2isuHgk68H",
  "key25": "2pPHEjagDWLHwjgk9QXtnM8guz1mbjxB7wasHfM9oSXofVdFc4fqE2bMY6xUsN75SSkjGyzpEDDeQNH8pHXuJuZQ",
  "key26": "a7HYt9nrNgBeEjToR7xe3vYRetRRCcpXrbsDYQLs3MoBrJxMybe43nNJcLeEtz4RNLT8myG1S9VRfZ7wy7U9BS1",
  "key27": "3s5JTE5cQnk7qrqMB4Yp6zYTgiXbsLu5DJUSHQyAUPKH6UiLJES4K2Kn2Y8ghUnmNPkgkuCffPBGYw88e5jCteRq",
  "key28": "5FRXQPKh24dhasgwqfMxFHxeDJJbFWBHptyZAGFiM63S4fjkfeeHZYJKZnKJmN2gnMEHBWyyUSoFR7SZxmguoKQQ",
  "key29": "56yriVNybpAyRKrX3pZP669S1CRSbDmTqPXrKj8CtsbQzu5BjEyWW6tpxM1Zp27AttFKbWsiYYJ8sfoUFeEgjyoe",
  "key30": "59b6KgZE1dhfEwjvke35GLh3MhKpzCStnmNesPa8Quu8viLCHuQDSm6qW5duvs8Tdj3XsGCHHuq95gs7JBUyhSty",
  "key31": "4gFKGiyMLyb68noWuWqFTc4UUL2PmAVSye9yz3oMUtSzPCV4JTt74yGzuAcyAsr3WKcndcPf23ivmY7Wc7s9gNLb",
  "key32": "2xdLffYtkGnrXyFP1vZkvoPNjjkrVZvvvBuNidB1SGLAuSposjkEzgyxHZyW1tstpwb7VvKTE2ggsMBYGL7jnLDi",
  "key33": "3TisH5e5qZ6GtU4YNbm3j21JR6FEU7cnGW8riPESYncStPvmPfiw1RyBmbrUaZzfe8Ug3KMSSDR57nv3HtUFERvV",
  "key34": "4S7TDWtcVAAwiMBpi2noXowxc4it1kBfbFS2FqMzEdqqRPwaYtM5ofvVX99FGkpohKCyqAqopicTHi3DUrFidpjd",
  "key35": "2HbcBn1cXy9s5BTSXSvqpXcj2Bz2SVFadKRVw9KyuimynzsAEoZtTvW6cojQBhbx59pwcP1fz9wrgGrBz8bpjnFe",
  "key36": "4ys2YVnJnXt5yiBV4jseSyxomZPiFH9Jfew6RRfiY6QfW6BeTA7MoHce6EASFefkVkUdvRhQSrkY4msYLzHWA6Q5",
  "key37": "5t7BNtpbtSLKpM6EarqNusp6vKumkQBEBDAnUpQz1BYUQR8vGLMdykuPMuKqK3sqXzMtH6L19SokFgFXPPmAyBm5",
  "key38": "3exxkGMXrrsUEdcviduWCD8Vz4QZMag9cePHXYu2xX9ZY1jLzBKjq7ur37AhsWGL5qvgKe9y34U1WqVNfiKr2jmQ",
  "key39": "2A9vKPiBeN2PJFPcCttBYkpzy2yn595AcY8ZybnyTwvtnttiFVbKxQC52FvKN6D75kvf3bvq4xR1WHhkeGj72jmd",
  "key40": "3TBziraxacXJqZokkeRubHfv8xQUFQCjMstCcxB8FLG7xhxGwZ6t5YejgNri2KKf29nkWpZ5rZKiMfh1FNzg8CLP",
  "key41": "51DnyZVeu22jsz9C8hCqrUpUMkG3HmjUbwc3nBUHRxFVpKMMWnL21ZzGU4saXy9Meh6dLEGNj5TByTdhy2Cbcm9L",
  "key42": "26ZzXFQjZb1ccJqmTkX7uAUyfTwAx7rQavL91AeiaDcPzJsphPxx34B5hDkZjDfg87bauMEm7cn5Q5hMteLVYH5f",
  "key43": "2jeRYz3xsYLG3A9mRf3uSciB562n2DEVjjgGoMFcuDpwujhuSNiqmC5TyGgokpgQd3ukJaYVmuMG7GjgmbecTQ3M"
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
