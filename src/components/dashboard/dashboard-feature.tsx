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
    "3s6ucm1H8XLDPSW3WDqJDP4WrHVzfwzKjxYuQba97ST3fttNFA6ifz7CP7BCQxbXXUKJ3HiB8P995o83ag614NTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Acntwz4hTBmZWKDkEX1Kpsaw1XxTgKpbR9PVZ19cmhBpJPgbuhqztPPim3dmgvnPYViKGGQV3QzYG1xbLcwQxB6",
  "key1": "4kHB84VJ1PBgUcpjrYqVtmZqDG4m7CqSdN1fVSPhyJWhDHKPeJuKJdU3eFxf3hDxGWShBTWqSXcjP1pLp4Bx5xvZ",
  "key2": "44rVqrHPPtADzKC2jG5g2aQYEJw2iov83kt6d1Miqr738VryY4thCcTrQBUYEGasuSRoFQrENmjyoLa2oAY1SKRB",
  "key3": "4W1iV1eUFHyrLrosodKMEu1kumfeTFDcEq7pNwmmvvvkveSB4BwVdkeqkd7vFUZQrSPN6WszuR2QkPTWyHTVNCpQ",
  "key4": "2iaHUSyk4kevJ7zUAS6AFi56MXYtihn2HMz5T6VjUWproh6PJsgGNFpMTW7WJN2DJ1DG8XWgyUZY5gP8Uy7gUyy8",
  "key5": "hBYCWwNrirMhxKXyaQA5vPxcFv696ZSwXZVY1v63JWqcmXCv6n36GRPqjXyzW5FGk2AukUd1gFPpTM8yWeEdxXa",
  "key6": "KDsoZbmRkzQtGFvHXnDNmPn5GEQPJTXNpeypoxbRQLY18S5EkA34cJeAj2JH6pEsNXiQjoM3du36etTqYD4bCPt",
  "key7": "633MHXAd795jXVf9DdegWYuiNw4qkR3q4RF8KZfP2hxANwkkeQDQwxxemcQVQj3Jv2mKbwsBptJRynEnXeto1wuQ",
  "key8": "3wVsP1FWt1pyXxwUn9ctiJ7UKVsxbMP7aeVJ9agTEbFroq3Qh6YH5UXPed8xhmLpqkQvWkq2RCjKNU6AS3XdUT1W",
  "key9": "3prFY4PU5jo7UpE5Xpv5cUfU2SJvcE55N8f9Wmy1v5pVxJ59Rkusetjsw4MKU2PDrKNujJykin9q3R1KBJrqrL8y",
  "key10": "4KAxdxo4RF4YoFqxPBd5cXdQsyj7iKp4PP5gcTbWrv5L5kMXmxENj2RMqieayzCmoAL4NcqwUpvt8Y2aSVRFx5MK",
  "key11": "3SoyU1GkFUEWn9Ns6KT7Rff9GqbiYhiopWnid7J4BiWofSRrz5zDEGg35LYdzz98aTysiqTnAgTZDt9LphqvWWMW",
  "key12": "3Aydut3HUjgmbS7KwWh3VkjLC9zJEJahfb2bUQwJzzUXX6ogbRAUpJxyTW3hsNbC8P9Kqd4qZLuZpJb4AkhdkzU",
  "key13": "4deQirqs7r5NFjV6aTNfv1RDzTfXXpyKVJ1BkQNaYwmhU2EumJoTizToCatvEbXmDEjdnCZRpC2oP1VGEFk8NhQB",
  "key14": "64RWt84QNxmBKzrGVpz2NZ5jF4duZ5b8pSCWAfio56GtShTBVSQnirvo2Uv9vSc1LKRsDz58fJs2AhXHzr3iW8Fi",
  "key15": "5Zmqk6EcNYv65Ehx2fqa69paQ3JxPcaNhswRh1jr2HZJw9nu9BxGQgP71VAs71p67BA5nKLuyAk9igY3ioBtebgE",
  "key16": "2gP4YrkWzDNZM2ajJXMZfpXBDrXqpfUaCpy7T8BZgEtefRXERRLYNs8Q4THnuESnocpoEBX1QQCNhkbgTfmDGpBp",
  "key17": "nrgkuZBdJQZAvBVoB1ycYcFpv86ELkqZTTXcSwbwFJYQKew6WHxJQ4LoTSDRQGsUsDki9f14AonjVjhx44CMLSC",
  "key18": "32J1VMqYqkRhtToVJGg3dyyXezHLASXdrYN9nxqLAKNkKwDgBtTzmvNwVJTGxQzb8Auk7myaAbhdutdfMoCEXPZV",
  "key19": "438rNsWhitboZ24Q3PqiefjZaNGvt7657QnB4Z6dEwnq6tJJbAixFzb6ep7qgNSYZyuJB7puJbGcKKAJakh3zUas",
  "key20": "54Xgt9XvsyUwYPr3zA3JPU6fJznEn9VfwjX81mUgP8QXKoS2ZGMWvvHZ87uhuSJq7GNWaTgvqrZf1HHUQcsQ8wuk",
  "key21": "5hDJz54BzEM3qhRhjCWCjE2B1UiU2kvkkENxkbZBmJwFuRc9kNrvu2konMHLTLwwQ7TboF3dte75YZqaqoYSgjbt",
  "key22": "3vQv3mMRPT6KzMkLBdPZdkN9S3QkEz1pLXMKq7ebgMSze976X9y8BBLwmCdLkXzB2actYbjKELViXZwNMwUtryUq",
  "key23": "4SV3Q9mJeSH3yEvwdo76B9di1oxYMoPuXDdPpN3QZ8gJ4rfttnP7M7U7pKmLqHA9bC1PUJkEDmXiGWGMVfXrjQB2",
  "key24": "dC1TNa6qWKKGryrzgcmoKCrK8wEXVErn4ctzy7KqhVS5DmEUgqgeP641544zq9HoncC31TkPZ8gMkgCv1S3XXi7",
  "key25": "3MSgwrjBbnGD3pDmX73acpUeiisvWsB64PjafTABn436iXyxEbwheN3WPQq3fmbfD8qnW51PV9zsNcmFTtgSqLum",
  "key26": "3dSPKCNEYBtzVKKz3KCVDcB3fioum44pDNLE46FtVTohoDBhsMsS96jsnUJkzLKbhkzwn9EuT34oHLrgdLnMytar",
  "key27": "2oPg3wajiyAKUaXz4VnxX3D7zZjpBmRpQ5hMit1AS8dGz3MnyuyrhZeidVuJiqLc9dzX1CEeV8Gv3zUzqfiLBqCD",
  "key28": "4v19uCL1sLASsfaR9LcKcyWjbi5UiZzAjLsTX59Uh5gx9rkf7e4TUcCVuHhPyGnoFD1Bocw74xXZ6mERrHR3Btob",
  "key29": "jZgY8yGJ1ta1cC5zeT9fSUV4pFJ3wyDePXQb9waTMjCFEszKEiXurgo2nxyxLxQkCMJC1FtJCm4iv1hT86SJ3V3",
  "key30": "2hEa5jFLdJ7LCCgMiKNr8krcUoJFMysRiCda33dhfjBd8ae3TxJ8CiheiKNhwA5AdY68MrDj9UpARawDMVJxtLzu",
  "key31": "GH6BG6dCmfaWqUp7zETAi4NHzV27G82rtFcpMjYXKNAmvzh76C8YzeVj7huvR6N9ghmG24oMfazWT3j2XQWnBs5",
  "key32": "5n4Lvv45WhdbkhwSzMsmmANFD8er5RUKfpUXCBNiGHXXkxytzNz3XPLk8gn3SpshkKaY7ndqBfBoa8t2STQ2Hqw2",
  "key33": "V4nUsjRKFZzdf6HmSrdqor7gVRLt78MKygoGRcveTfTYBgqxuTDKVEnvZEC6Wnw8kFWYRepiZD62ZNjiPRNqpuW",
  "key34": "4T9hew8yMKTY8jMs7eAJVUM8HtGnveNskSVwTfJYSs9uXJF7cqht9NmCxMuwj4CwKuS9U82eeiz7h2mHtX1YvDjA",
  "key35": "3orns3c79sPNXRxBEUdXqNXE11KonRzDpxZvtm3N7mB5PVxcWdP1TZ299hDPqq673g6LKTWS6QyERhzfDB1T5xo7",
  "key36": "29UVDx6nxb4wJVv9fA7JZmevjeFNGjN4Eg3EqzwQLyE5evH5W2LDSW2TwPHdtH3UndkeoQxQhGKiUmjDFtoHsPCC",
  "key37": "2KSkhBDYGPz1dzfJRG38vE82vRXJ1Zu5NYpLd8bZ957i1KikMTpB3nSHDMynyzbw4Ep6Ri9Qf6sZLuPRf7nsYjhh",
  "key38": "GxQ6GmxjSaM7H2iGSgNpreLpWxq1yPZ7RYFa965t9czLfBNmH4vzMEUxLXv2v1KcXy9FBshwHzanweg4f5bwEDs",
  "key39": "gmuyWg8iXFFS2ZVyPLws2AfLQRogbZYoMgDuPuRDNxAWF9HDADk8iLfiYeQkJSu2D4ZUCK5w7UUdavb2dXi36qy",
  "key40": "FiWn887dUDKQawAFcdnbXUiCiDWVmVuEG6r8o2J6gas99vWMmfywsZX6Qsj8y6GYxcN71XhgFBEiJoZpcEgg6yW",
  "key41": "72CqkAbGrTsxACrJYZs43QF8Zpefi1jnsZon444SMJQSmmTGZUPUiwFjAfwSAW8Rfc8vqAAcQFku7255xMhpBWT",
  "key42": "Nf5VYzY5DswTf8njD5oXcbYn3XhLJTcrCuUXNuec5fjf64z5dM6TAp2wkxBxqPeR8qgkK5BAhspQwai3w85bCWG",
  "key43": "5ZDxr2L8wWmNr9pon7CHA1KJqk96WvLqWGs6m7wj2V9HVt4HZBegBoNPi4NCSY5dS1HgZHJn2ohTFMsqQz28wCKQ",
  "key44": "2H8wUxXisimV33QjvTPFmxtstiuk5K6ezoP1shodxyxojohSefz4zbWgZLAuEdpCqWv1JaEfvS3cVftRrNPeEWQL",
  "key45": "2JBqxmhAbAEHAmGsAsZouDLqh9P8WDCGk1kAtaH9W4seXS4T6cqKY9TJ1FKRe8N3EZG2bXieNKug8yZWgd4STV4F",
  "key46": "3CJrpBpEhDjhzHDbJ1qZsPnzzvzipe8KBgckEjdH4GEgH45X9ZRgvHbST23C6X2CnP26hbkfonEenaqKBiKQY8zo",
  "key47": "5aeFJcL6uDiWkHZA3fjTQxjhsgoRsm79HHkBXQjRP6qzGsMrUNfTJuXuw6qe2nK4xLVyN1rqdqGEK94kXsLuNySZ",
  "key48": "2feau6n9ki2xyuRhbb8eLZhvHJNTZrxAL6yHN8QfgDdsZ4aRWmpEgcjjoiZEDkc2z7hQz2DVEtKYFANLHjKcxDqf",
  "key49": "5NnvZ27e1zTAmRqowNT7USvX6Wq4d1d6PsF1YxAfHhGDjnKd7Wi68A41LRqTC65mXBC6MTWghb6ipMxYrQgeZDe7"
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
