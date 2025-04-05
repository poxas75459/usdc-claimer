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
    "3u3CvQx6GG9sFwc5hyMEHPJLvdZC2ZSqAhBzucAdKuH4krE94Tz7W6VNy4i8TSJJiWNzvfAijT4P2CeWodMjT8tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oYtCUYqatU6T3d1P2sf9E1uRtPkGxDeg1k5FwqQW4FyWBabYju27YP9RCdmWSSN9T5ZtArRjgZTGCn6A6uSrmbr",
  "key1": "2EBR7YYGbvTgvWBKAweRgMjdt8NmZPFvjaQYgGsKX4cwBZnwdaziWqkrNBZ7YMsapM6bmPjRNXu51WRw675ghVtV",
  "key2": "4JoS4goaCx2yFwPpFYJokWotEHCCsSNvmP3iSAxSNzvEwsQ1Wy3nGSmo7vvN6m7ipPmuaoLy9QuqB6N1fXcB2E8b",
  "key3": "5yptYFu7BaCTpy8V8PVhnL3vNZepvAkQCUAi45GdJrGw3XgtHrJaKtyBEkr1RATVFrd73BZjqt6AEKSBJEfeggXn",
  "key4": "5QyYpdyudTtdog3LYLKMoaXcxEZ4EETatR2ADNcDVjZ7ZbopnyY281LLGT1oSoMmJDG1rGQAtqnZ6ETvHw8ELUXc",
  "key5": "4aG9iuXUHgjbg3H1SPFeWFzexyoX4tvUt53tuAfc9eAiVHGr4ffNKtSTYnEPGND1NYtsV2NrABmCKbvz4XvGFkr",
  "key6": "CWCbMgtnWv6MRrY8z77XixZtBTDwjCiqX7YbzwhMfD75A6TNh4EHsJM5BtXWoLLYy3Qv3QYK4SosZsooNNqFXqQ",
  "key7": "2mjriJF66wMquvdDDC6sffRcTe6Rn3FxjukiZbwh854kUA239oVfnom1zHxwA8CNqYuyYeM8qJHBq6bC3LpsAUhZ",
  "key8": "5NeDGYjbrfssutzjkV8VYwQZF2sANZRq3sVYSivf97BDzsnF6mLiR7vFv61s6umkzBPrCfZYipRpsX3z8tR9N38z",
  "key9": "GDFG4FYPJDQrxbu86KmoqYXeMbQ6pJc45aA5kogEqmuB6vx9QpU1KNGVj3rhoT8DFGThmYUj9TNkvC7Ai9wxMxc",
  "key10": "2jhtJnj1mhbUi8w1DryjaMWMjw2i4n2n1ndJYsNyfd8wUHhdiPATMcYCnSKseoBYoA1QZjb2TUYx5BRNiRoPgW54",
  "key11": "TTxvyn32aAecvGUmFeet1iSaE78w28kJ2ifudWEoDMjtVybrLhxeXPsBeHaR5MLWwYGiwSkjauGxMw7JGHGatSC",
  "key12": "4GEFGdmDwgQuQYQZy9oZNCNK1WAk9bRJ65ncsWgxsnPqSd3CtuBGp5uTEjBXfjgiBpDH8GkVJZehkzs3FTuwmd4Y",
  "key13": "2434M58auY1thLMAoGQ1FpGXGucE7Yyhavr4jRnQmxWAXM9fcDjHEsgkkaTCCRvs3MGT6HzAZ358bz3TTUpXZv23",
  "key14": "4Mn2vsdUaWeJC4eXAq1U7UP3iZkVU34w2m8VTWXUifoy4WPuvccHyPNtborbvqpScJHzzzETpG65gAB8FXFWPAt9",
  "key15": "21T9pYJbMeTksnFwNXB64rDwAE4TrXty9fW8ahPPTgRaKgkve7KtpvkZoewCezmiRb8BAuLRq5BUVmPPmjFXdeaf",
  "key16": "4XzuBVTjciYcDPo87cfvAjPxnXRRiLfScAmQA2w9dMY89YB4a4JpG8aooHZ5yQoDTfKDSSG917VBRDSgemjLrwmD",
  "key17": "4xXnTMXMPgPVvsegGqTtJ4c1zRwt5SqJEM2vrLaP8Q5rquK8vUhomxTUj9jQmJ6mdJH1abRY1KnKDjTwkRXUAJxp",
  "key18": "yX5SWJMZ7jSGXo4eeUChpAjmCsafKRfWtmAyGZxfLjSa9PFL3X618XnfqQBos52hzB9pcBaxDans4VeTAbGKu9C",
  "key19": "3zkw1ACAPVPC8cs3Zuf5wXVa3gfk4k8TzQxAsbu5YYF9VM5yYjBw2NvWTh4L7ZzFojWAwQmHEj6dc6HGsBpgkvEQ",
  "key20": "4QDV4FdFUtX3be41Fv5e7FSLXQYwxfZm6bZsw1fue1bHGXtLumrkYBKJAyRzpRdYfaU1GxaLMZk2E4Sm17p88sXV",
  "key21": "MtEnAVQrqV71oih6aNtK7srBzw15Kj8rewqrHFrgfMG8euxzr5BWf3dXVJL3hZMq5ma9uKyT8byhAboDpHZkbs1",
  "key22": "8TGUchRhcJRHvbekyBhTUqYS4NbqdVnsu3kcisayDtCjAoBxU6D3CtJZ6nPhHnZ3psghZTP6BookbW2iedVpjLg",
  "key23": "4iFM2Dv9uFgkLac8PEr7Ph5hfQk7JcmgYgx7U2BgJHYgXVb7EwZEBBiuW6awH3U9WTa5CrwUHeWiuEBnL53u6384",
  "key24": "5Exi77bWJjnHrvmTYDNxNw7erLLSumMo3BbALqKSGfoi9dzaKFLXubsYMcBxx6FFx2CABof4mDZHKp6FN77zPiBp",
  "key25": "5tw8fhTEirtftLE45KP2nYHY26DSnHVasX941ib2gb6JpFMJADaguWPtueg9V6U47QDF4tikzwisShhigudYgtWM",
  "key26": "5TizYG8nDdnGo1UfbPVxuXKVF1Prs1gYc5ZKH9oEPs5qyHty4fkkC7TBpjzDNhCegM1sxFrDw8jFhVQR9udtJrzr",
  "key27": "66HPs4r17BJnh14xEjU7KAwdmg1gpYKc4QhQ2FdF34AfFB9SwHeWkidsDxNuFfL9QaNJyf1HKmS74cxxA5zdrdrU",
  "key28": "4sAD8vx3BzCqXLNApo2x34DMvByqPoHQef6TGgFW5YPzoXFLraSRd66CpwL9uDEbHeZUHWHiBAJB4sdjjhBDkSBa",
  "key29": "5FjuS49tzTRgEM4LzLrPW15BZwpTw77ANDYpruK6bamXvuPiU6BbfpUAY3V6z7r6F6rhjngr24UiQpe7aoeby95q",
  "key30": "3h4gH1NsSXpMqXV4ue2EV2UuxSiwgFT3opHjzm6W979YUs4u1bGjKmh3Vj3ntm2hEGQHi8w7PJyDLK2bUQPQvYL4",
  "key31": "4iaas4hoC5qirpmZAuMspVkr9H9ZmWYRdC6jhF3tujspgUUetq5CGuJXneJgqNWbnJ4Mu4eQ7JBkbPWbHYfNzhEu",
  "key32": "3Zd5CA4knTQVXQc9LqfBAkYt51MYKzM7Xe8747Jw8rqAZNK6faK6QKsoihWPZm4TNm7QS3X7trHDZMEiMfzdi63",
  "key33": "5wfq6oyooTDqsWtHcCooDn4eibXkjbWUrERTL6A9h3z18rqBx6yb7877CTeTe9b1VXRijTkZLkGMVCBwLCoXdEv8",
  "key34": "4MMPWdu4uLMtvhzpi7ohhJ31tKDdznGim1of3kbMe2UWLLWZ5EiDHDXhureNurrsqSqbRhR7QuYa3ig65JCznTVN",
  "key35": "5wuKscFbTKAUdzh31q16YKEFC71iap378NFHFYyVB9yPnGvrvBYyC22U3VFW8jgMkLiERL833yLiajVmE9Jkh7nE",
  "key36": "vD9uDcMnZcKzc2TymZ8fjVGcmXRNET1mdExydkkdFiASHCoXnWPEwJe8rB5z5GKjcDWipTMCQS1ufvdQebpNHAd",
  "key37": "4RkYb7ETsyd3Ld8Ntr9Y6oAMEQqmk24HEMcFrpY6TCNn683F2vdbKCxZXC7rPR3FoqTZUU2wEzdZX4tKNjhRx3gL",
  "key38": "7UnpTVy8MWxiZEnQHxk8DnWhAudFdWEdietmzdmn2FgGF7uL1iBMGN1gyPg8HFN8dSxuHbcXcZUaWVtzNZkRqxo",
  "key39": "gL6uBwu1xKjxk9KBHJJr6dCEtcJXz4NCGYKHyN4RpjDv3r2ErqxMX3Hk2aWpaiGPnyuvE4h2eMypjL1y9nMgtDU",
  "key40": "Hx5DXbbysd1dzUaMYqKHHJC2MTiSsW7sQ6oG7H2PNqqYWSVyvwUQi4ega5uexDKSGjpyuFsJAZvB8hCdKGJyWsp",
  "key41": "3qqW3ZmV8edbJKhLdBtu6vsT7RSwhA4oEWsLQcYJ2vdoJB9A9j6RGTtuht19Sext7PDP9TGs9WyQhHwtvAXZfJqu",
  "key42": "W2wkcDv9nQuBax2nFrghkdRhDdtj5R7cSGLzY5rgTBeY9ZBBL3FSSDWx4T7x8r2FwGiXRpSuAxSoyn1gMokcaou"
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
