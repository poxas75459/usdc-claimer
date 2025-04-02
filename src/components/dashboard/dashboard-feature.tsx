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
    "5tcxWafce3bmSiAN5Yix8YCNw1VTp4D7c79uexyh1Yv9jgtB22jvynYbDGFF8wAYvT4vuJ8YiGwd6knQRQbLqx5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ipMMxNUVNCZuDUkdHyYiqqnUSLgUxt85cFLw45BSSvg8SRjCfLEByhAkGtgKaxQeBZUy7rjbjeZepTCXfVCpU4E",
  "key1": "2nHv5uE83E2xLdxW7jXwQSXuaMEkjES6DgQHor39Hf8BGK5mwBRJEGQ2sR2WGoTWsq2HLvezhRqcti1hv2zg5Gsi",
  "key2": "5JposhtJyfm2ngL8hQ7KJyRynt7gZ4ZHEtaEbH3SUbvwDagqsnyj1wXqyfBjuMxmvBzkkBo2FZqjEJBMCyQuJ5LU",
  "key3": "3RW9nyy1SVNHrKMTRCgTz6MkvRkS1FBzzRjeWr8iJupyf8dLiQmowvL8aC4uWsps8v6J357ih96eWNtnzX3Hc2JU",
  "key4": "2bbAS7RkshTFS2D8562SX3oFJFAgAqsXAYH1x3UvNwhJi5VTKCPfecGhob93tMxU2PBtSqSyb8HGeSxA5KBxYCuD",
  "key5": "4F8oGSd8va7pGgosKMmCb5AhrGJTd5MMtkwEvuYLiP8hoGnPabXMjggnkFW9zdjcaxvSNJpyW7H4FPQ8Jpo6sRe4",
  "key6": "3LQumFpNxrNUVAPMpTeWtZHwpsaNTghnQFeCqQc3Wey7wz6tRg6KKmitmLLDdvJdm7uTe5SffTAQJTadjbMwPopF",
  "key7": "TzEjH5tqAmjvTJMyzELeZRCiXCyLVH27pTg39iVU7vwYSTVVTHvZYZpGuL6tSws6W63isJX5WawXLPPS986Qi62",
  "key8": "45Jk28o4r2pX3fCEh2mJj7H292Dgm1CeFCNPLhBjGRDtJfpV2YvNJCUJYzeKVdnj8HaWmgecoqnyMXkwVCKbe9oS",
  "key9": "3NZQWuJCJFbsnFhK8VNc1a77wzhDEd3HEvtnDZ3r5PdNuo1R9p9mzJP4ujFG5z2KVekDwz3BziR4KE6cX1wAvyx5",
  "key10": "dUe5WaSAyvHkxYQvPw67HKuSmeZF8V2xvv3NQLwSQGiSmNzYPyxni75nHWpGmYEi6412Pzn4Vr4GgMFvEF3tanw",
  "key11": "4Jp7B2kN9w55k4rZPjU4S6h1g6AuDrfdPTbzFLLKKH1UoompTRiG6srcCVDHRCPQVXM5qAeZo5FKSFokzezqmYF1",
  "key12": "5YQHyPm2rJHNLccH9K7HpkaBwtP19efqw6DT6WxErLHjaZ1tva4phQvRq18ciHbWd7QFXRRTLHKxiyh5N3pQacSN",
  "key13": "3WDAC39SAYgwdQPNiBEJwxLxUJ33yhsdj7v93sH6xhhmVUxF2twRu5F9wYwrAW14CBsbx8MKopBmCiba72FiQFJX",
  "key14": "2wVipKsKHH1cuAegZdbt7Q4ybnamJkC4ZvBGMqacZxsUX1oDyL9cPGHby4WxPB7hyFMvJNjwvUuKMc4jArPFVC8P",
  "key15": "27qgG8apfzxrNWQmsL9UzdedqKstSyhrB3FisNRWuo3jYB41USFmjYr1kSDVzMFiWeUGKCygaNYTgvhf1XYVmBrn",
  "key16": "2SkQcLJEUw8NU6RLzahgxyHTnGRfqY157zuPd9ENatrrNzUsaVpVQVt1NYerxUSxhkkfvSnGS38VaCoKxdhXcNCh",
  "key17": "5i2VeJDzzGwij2ufDR2JyzGgKRbSsfU8wMM36UwsQJjD3j6FdtcgNr1bW7s78VSgEUz6ugVNyiZo1gPkQXxMR5bb",
  "key18": "4BwruZYg8v8EPkcjkAHJEGcukhDYpifn9EzkkX7gKH7yAto5gd3SUr7CYLifcBFke7TjoMSxkY593PhtLHv7AB9k",
  "key19": "5RAtMtBamN8EzqGdyA1kA9iZ2MAKCHqDJCrRNLZnp6Bnx9HxRdVTeLdwo5sJFEWYNdyLHknfpaE8PPLjQheyALQJ",
  "key20": "5a9MLfDLCwMv5EMk6NCUjjHYcZCKMcRShC7aVZdkKe6RFWN2qsYcUqmfMKcF3SJ6Lm1SQhTaTTWYYAPLHubZw4F",
  "key21": "383KTJu8XAL6cxddKJyyWd7Tmu2VArarjdV1iyEFhUTssD66DZUEdrRcwEasYQ92FsP649tbSwTHZ8xazHVVDing",
  "key22": "4pRxVDxmF7gvMKXcHcKYNXfSqZH3UXzDAtNzULybrLv8TzKYG8xetsyome42QftgiRLMJSTzgWigco3jj9pbXm7d",
  "key23": "2Mcyvjas6uqUyYnchQfVo4qk4k6WucgQsBEk7peavAejaerGubQfwdeoDm5MhvcdazG9TQqSDdLGxN16rNN4vK9R",
  "key24": "5HMsPFSQkPKSvnZsjgLgT4KS1jhBFsD4ab63ys2ZGjxVt2Pcv9xkDWwgXHS4thykrLsLUfh2sdoFp4g5stzdQ3dd",
  "key25": "5X7yiDQfyw7i7hAJqUHUVgaGgaGep7usbDFmWWhUQxzZVFUz66MK1n1ukWk3oSSAACHiKHP1tbUAgsnQuBrcybBX",
  "key26": "2bKrsLutKCFT9XPwwBFGVaHNHFaarAWrQ55BW6BQZEUiyzHGYnnxj3UG1ZatmEtp5wfzCXCJu2ZL9bGtVpo3Ded1",
  "key27": "DdS5zzQHWgUdP9Dvzw6prtXYL1fJobe5iiUcFCcxz5hUmkMSkUUE1SZocYgMyW6Nn12NJW3d6BmgZuqhNdUdxjq",
  "key28": "5aKU4U6VzfEEDKtVMnnwAZaj5mHDfaybt7hgyXacVkYWefdmCprKhQQsuMQCaF7H1tyfsfMzm7QMUPyqG8rmVanw",
  "key29": "2K2777DeoMUiEwTxKtj9QDzFgzTu5PCcWrYkbL2onppbGax6hMQ6rmSSeMSMt4KoDnJS4Y6v3jjVeTG5tsVC8rif",
  "key30": "4Gvg7QVKMJXoN3E3Zzq6w4DsqE6NxufF7Q69h5DZdKoBD43dnQnhGs1aDMxWRbvgmwwQHVRbdoTjzS47TETDmZXM",
  "key31": "4LvjqpfVdFyLpyJuDPu9uZyV7pyF386MBUvaxDyu5zgVdeX8TyycezkknA2hfznRJLLLZYrWGTCBjgQidisU17sM",
  "key32": "3c4RxsFU7VsNV6gYndR6tUUxcWPXW5BeuQxeSG7fW3X2DoNxT9ummrV8nP4VT4EiipwaeKqPySbuTmDt4aFTNg5t",
  "key33": "3TcMRSkD9Bd9njuSDeGhNSzM8VsGX5CRiJxoYmmLQJcAF8m8VXhKSmVb8bnBLH6PVsYsAf6a9YYF34eVQur8by4V",
  "key34": "4Cg887FDon7seAESYTHeKQxusF5okRdmnNpNj5jDJzwmMq3c2K2jt8MAnBcK2xT2pV4xi9Ym8T2VnPkWkDfqng4J",
  "key35": "3MgpKKPJawubU4JobiXfMfFuKXZfiY51CQpap8kCCPbPwPR3nzwMK8bnD5z7eartr82ZY9ckiBpZpmHAsbGWsp1m",
  "key36": "5juzPzgbVq7XMTRpcYfv12M8azrz8F7ayZtVEDtYMrsx3UpwmD1MH6avkTVDYmcsspMEpiaX5PGiwQJNd9419UzP",
  "key37": "4a1vkUXKDxA4UEeWxs51ZyBfa7e8ezA2yt2TQugtNTYaizH5ZWzJNsmXRAbZ5umELmmTJcCxeBa9Qpd2egmJ6TRh",
  "key38": "51dQ5mvWcVcVTd9tStomkHswpEdM5LqqbSLmkaVED5QWWx3Z1igAE7AUY1BvWYEnCK8RUdYPMZri51QjVmLoxj4t",
  "key39": "QuLd9FM585UP5Ai1Fd6j8QbNwHb3M6otVeKtRh5z4fc5HtwbXdaX2aonJHh1vnkBqJWrkvLcRdjkutF6qXpQcsi",
  "key40": "rxDZvuZroG9LezGR1aPKova1pijEvpPeihbM4fYwmdVFUf6RFZAugHX2LVEArU3WR9WfKdofAEEbx9EHnVBvT8L",
  "key41": "4rVchgp6sKjLU6ewWwR8pQ66YNQd1dKuwRbomaFD6dMi11kSscsyjVATfmhXJCtu5uDv3P2yhntBZHZNKyQbz7sg",
  "key42": "2tb19Nr712W8WxokidDStA1HBojgmGN2gQUAeH6PuDT3MKVJYr9YXn8jvekh6XhoXqv8HpCe9GXRmRyyZCCgnAWU",
  "key43": "2pPXJcdKJxXA6NBRsmzQPQcxfjg7DQWaCTk9SuZLfAw5o8uubGAemzqjRSyUJiZtzU8Mf8quGMK3MSuHBLsookYL",
  "key44": "5qWr4kYJmDDQNsKhYj2VYcAxbwCka55fW9d78rvoNhGN8FghbiwUNq6ua9XuaYBcVGzEG9pxuLoej3HmxUNsRFYD"
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
