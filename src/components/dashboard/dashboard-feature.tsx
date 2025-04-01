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
    "YAfjc1X4xgfciwFQ3wT26sxht98f2zEFmXMXrLPQ4aN6UeyweUjWFWA9Ya46vZLudmGRXGHbMswaArK69aQaFoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ikPxVFKvprJowLsgLQaTVkGNBpRoCSeeLSq44eimJwbDVU26Sj6MJ8uNsoJ2EzZFdrAsSK9kGFTAB1BGvfxDhCd",
  "key1": "4SG8CLPE7ABETdPiHXvYdnceXHSe9Axe4DtjXds9SPW7AFjTNxPLpLqd7XQQGLhX4UpRFy8bhfKKKrdjPQqXJ3Jc",
  "key2": "29mCmCsyRJ5tmcFv57hX2NYbDrxUQ6FMHwRtvNRVFo7mgbVeDxQrhFL7ycJxUTnWzNzR4c672aYDrsUpVhAsHNj9",
  "key3": "4puFxSvLhhdwtHuGbT2VpJRn1xHSSsZjKHyqf6MbsdwqkpU7tvD3yWW5X3WJLFuqtzMRnzV7fM2faULdqV4cXghj",
  "key4": "T42sQbjYbcmijnEBm2HkcfayJUCGCk4BGVf1kzUFrkP4TJ1oxND3uxEtvyoJsXkY5nEsXaLeMXvvKupnouvjNxR",
  "key5": "tvVkienHNSWiYBBYVAQEK1X5BrtyRzPagABtwwKme2SXY84sYCgpiCFSwXRcgSTCdqQMxF3AqrQCoMJuYeMt5pd",
  "key6": "58w6Q5MYBgAPy9sNp63eeqxr4F8XBDPiRuxfkbZU5ZBo7m6TyNzSZitLzC3RQMSXnwz4YtcDxK6UmHwRmVukjxS6",
  "key7": "4AEEssF3ravQhoUKZR5JkboA4pYrgkb6Qz22aS6XQa4uVZz2vwaWcbiQQaKpLNpvB5EcjqsJgn4wuyBxUX22CieG",
  "key8": "49kAuFZYMHh6G6FooZ3yt2fBhpxx5BAnELWbR756r7iFkFYBtXd4Kb5iwJt7PwUnubQkANQY8pCTqvLjRQ9bUhLn",
  "key9": "JpimAHr4hb5CWqLFRjTPVPyXm4ZHXbgQR8C82mMxyfW2iEzjaWpqjx5iVrdjHWseLpnGSTxDzewbnufGRD1XnJ4",
  "key10": "2PP2T6WqotzWsduPu6mkBpqzZNio4uiAAqsdMm7mn1VqGMQz4sdNjhBdkFgPVfYQpHbWFv1GharxhcaKvJiKvC3i",
  "key11": "ffaYbrq9ZLLNB6nBApdVq7xENxHyjPo42tj8KkPmy6ExxaUzKm3dcQNWPwPtAdyEAMMv2BRxUwjVGXc1ebwYUA3",
  "key12": "4RRWqMSTvXDsQFUJx4HK5Yj6wWriw7uXmvWkH6Ez3BiyroaGxU9hYdiDzs8sBC9aG3R6x5yK9utFJPMi2XSX4NT6",
  "key13": "4VFSf46b26YsKzt173xq1Kp3VBfjyyvj2da8Uo6K4WCEYczLYTXevqjpFSbGaohneHh2j9P4UyZHNyNzZ295BNmz",
  "key14": "5ohdaTYkTNs2kzPPPoBfAKcNinuWoFiVdvMBUanx1WrY6TgdEC7rK6zGv68acn6UynwVAhsg4abtFDJKHqXyaZ9V",
  "key15": "4PpdvbURKGZBjbK3ovXuENmL6p6gRa8cD2sWXDPdse8C4L6rmRnGa2nrZbaWVrqKgEQnEwpY1puBc5gEeckDZYiM",
  "key16": "rha5G3gui4GtDKsBTSqzizXT21MGhpqVpz7raPKUsRksMhPzxWDMwpeCx181efdzK8WYRxFgnPtVpZDhBmy8vje",
  "key17": "1jQuzCSzpp9CteLi1adrEYGj7rKCnYbUQHP3uE7Sk5o5MNrd9fTJMubJcF1pmqUivsX7qitQ23B3HJhNqZu23NQ",
  "key18": "59GzFnYjyNrqDWrKBSaJkdZYPSHY5VEq1M36fWxuP1ANP6yE5mHz5MBR7o6iLG8dHmVDZNTXMVyFcqwh1c2CoBgf",
  "key19": "5C9MsGnmyd7bdoHRDhe3rzbXTMqptp1a57yJvw8XQQCryx3eLAC41QTaWbvU5AG1FbGF72Z4G7sBBGMbT2siRhRa",
  "key20": "2vmiwPcjxP9jcNcjQdk72kXNQ7Scz6jtkVNLKoWzcX8dzogpz6CDY5ScPJKDKFn51zwtddexNnRNG2pw9aV9sJj1",
  "key21": "nvr6uU9TL4JmyQP98KLiMPNzW4CzcfjPDwdk32xbC1TGW9ZJJXwfdZ93hmrr1UmQ2pNsT7hogdXhbRtPUjeKW4E",
  "key22": "3zjQN5gCo6yC3avPbZ7sSoR3bdytuUWwfXPaGkmkUHKPBQKbCjLfZEKDqMPXANb24abGd7hco9T1trZDD1jw7ofc",
  "key23": "4QDNWDHo5QUdzhzf9iSkXnC5bFszGQxAmtAR8AwhSgkRktpFUTU9TpHjT9jdpdX66hPvUWvN4aG2mEEXgKU9uW3X",
  "key24": "4wLNJ9DeWypYyg1XKWi5ykpXEZdgfp8eLDrVbAvbk6MTfdTVLgz58o5N963P8YqJtjrA98xjBwvrpTmxXLoov7iA",
  "key25": "4k4uymyv7baN913r3ZMpgGB3g86T9xNqwFRvgbRyM2weDCQkG8grxDPxupL9iBozAs9RytFqhKKXXyKjmhQGiSKv",
  "key26": "2WsKDiiKDbavBDgRQkAYNRExGXVUWfaAW9yLJ65N2wDdXQxan1A148ZSmGKrZE67pSxRNbxQNEKzi3gqDKUamdCh",
  "key27": "4LYyY83uy27n4e6XMECVgWx9dtpZyQGUmeCCxzN51VETMSwB3WZw7n5d9hpbwfVLsX5tHommzyhoUPwUy5Lf4N7F",
  "key28": "BijULKNrZFDwy7QzFGA3Ck9gg4diQdJbNSknrRDr6XQcyrZK2Y7LCM6DbSRra23umLJQgc1Zg2EDVJw7FPZnmGu",
  "key29": "2RWxCAm6dChYwJwNjJTVEttaGnNtkLBN3g91dMoYFyYpPT9adci2811eSzvTCdyUo8mrWLkr9YSLqGwauPCTGnez",
  "key30": "4PhM1aQG9qraKcxccLuR9at9V1MQziJeRs54fKYdeNjhnBs8iLcnvKkR2VgMzUpzmVkwzzQopgNtW8LjWX5gpERp",
  "key31": "5khmUHRK4TsLwC6d614Gnf7nZshVsz4yvzXHtdxKMNVSmghbS6LQSuhvofG5Lknw5ycc8uEgvcLFsN3pHV6RSYey",
  "key32": "5JN4sccKmvjmpU1TPd3A9CAf3n2QNiRcmWXvfopG3yUzzDcG1cYoLQASTkYkDnB1FJtdA7Zpq1btyGyLQfanitcY",
  "key33": "ETvWxySbudGzZ86Ctx8cuKyDwuq2tchwixiTiqVDNZeZDWyqSf3BiviwhpJwho9TYfnjzeg21JcXfjop8VnySeS",
  "key34": "Xoq7DcCL3g43ajXE5feMv5cXxnLYJKf8fcA1gkCPkrX9gttMzphSXFBLSXJb5zUbf9gZHFUWGeecZ5qKzpHZp1A",
  "key35": "4jzDnrADCJgr9oF8Hd8x35DkGKjuo9C2Lc36ZVRjY9cYQrLbx937wcneL5nt7h7C4DQSBYiBiosHhtv6gYe12kEv",
  "key36": "3oozGpBeWn38kKJptTNVBhexARKDJT7gY1EpSKNJb3Fdj4ynUfssxkxThDE6bxwVAjSYJqMk4t14JeEtBMAyoBdK",
  "key37": "4zgPPKMzyKa3GmDyrM8NQfnqy6nbbsGJ7NujHYnZSg8tCY81SZwRZ23mnxpy1T1KBGGsRTwzstMCbV7XmRkPNwrP",
  "key38": "LQCimJVz9oFbHHGdTxTMW6eUJjm7JXH7JKLhEdpBsQHXXGP2gwhquh66cjPzMmXZ1WiBAmerjNk1bhnmsH1PXDq",
  "key39": "3HDQ5zDRRsYUjP3Yztkx8hGvJMrPCY8BhKhf3MZDBKLrSdTTo7AGP6bFPoZFS7RpfX8UPgDraEmrcVVd4TAqr1mq",
  "key40": "UqMMZ6QwiWgZgwdocMf18RApzrWLb3LcRirqgJtTrFYTFrzgV58xUdRHkVMjRRB4NkMXu5FZWVZ3nmgBdD54Q57",
  "key41": "4rMNRAcRD2sCKE7qg63TASDNHRcbTGss9oD1HvyQRrEd3c7meHzuZ7hoVMFr9QH2b2cpWDBCNaTz1Lf9iq1N4bFn",
  "key42": "2SDTKaD6AQwizr4FWDGwmnScrcAdSTbWeszehYPvy16WbVCVa6C7p9hX6gthS9s6SXo4xnQVbKB1yZ3GiENdfaza",
  "key43": "5bo8Cc3nnA4zgKt6k7jxSSVXDE4vC65fepRCuj2SJ9jWqLYgeC7jH8rPPFyThkVHbb6o5d6yP786KnKmXPfiGEaF",
  "key44": "3Ds5tU58eiCJNjwTWFvYQZP2aEtCrmbuActUbyxfqrk42Rv1FeT3DpWXwXih1hvPnR66WTBn4MGRW1GQi8bR588R"
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
