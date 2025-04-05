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
    "3Z1tgUGWsRfGFsNKktByq9o765wiYpPJCGNzkiSGLWhd85W687pzC35goP2ACyTpWQH8UkiYE2MSJovdgJkQ98wG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "617TfaqPgxWQfuk8tvp8qbZHLVSRvTJuieVCGFYUV9fy8W5qprWkb88k4dHMEa9CGwnWRAFUKMBmzgHxerqBwVGP",
  "key1": "4UE1QQYR8znneRrxHxVhkxUE64GfJY4LEiJSZpX3MjzACfSCryWFaEdPKD9zu9AfDKgfuKesZDrqXdvV7PT3YBgf",
  "key2": "ZEomzDzSvyPuSgUHp9KmVWEwfyTQ3GgjeYhRMnrLfFCAZoZQ8F3RNPS5u42zc3bivhh6C6sE3eZZAWPNGuwbmTT",
  "key3": "TJ2xC9wjMphey41bo2uoiGgRoSZbgWUNAvoDcu5GDRSNns96WCefaXo8mnH69MSrYU8vBEAiyAjkhRtJaw9mcCu",
  "key4": "4Y4sL8ft8uHrmZsz5ySVAc5LXSmZ3MzswPmk5QEQE856x1tKFkmHJuuKh9wFTw9ELVhqHQiJ8pENA3wUMAg5FUqv",
  "key5": "2xbUo1QmPtgs46CrXEr9fLDNUwZfzs5VgipCg8CsfRK6HpMeTrEzcf88DefWh5Zsx2D7JrDWFy3wN8knoCjy2yZp",
  "key6": "4LLxt9CA9gTe6r4NdWnpwtpbBKaKjV27xyVNHnCbQtHKQRrYqVmtt7C4zjeXrMF76NeEA6eZL7kHNB489M5Fn4jQ",
  "key7": "5pJ84Rn6rJoLMToxN1N4zpwDRV3T2aMrj3AZ6wGCY9QjoS25SXNpQUbwMNKDHcoEVyHLNDbCF2W2Z3YWZLmhsR3E",
  "key8": "4FXHPBfwUi1Jh7vMg2cjdm7wW1iSF26syLLkArAMDBMDfZtvWPisojXs742oMuVt6fTTqd7mVvfxVA3YZg6XQdGB",
  "key9": "5N1ZBVMHv6yBnHW9EAZsQEHmRMTENDU1yswqKeGQfXHAUonqsdCyCpfihd8kLwcZj6ZpZHhPF9w4wN1n6H7Khins",
  "key10": "2PPucpMMMkk2AgJJNCt1YrWKWpTjRgi4w1NCJumkcxYUuQkTbscqMpw4LnNxx3rUFgzdzbSBYYtcRDS2ASVdqLuj",
  "key11": "58oCxqjJFRq95BAWNPCDbDvawDf3ZyYGvUfenNVd7QARjwG82sWonMyCG2zrQXBNmLxwPkEpQrEip6SccQ8FNkF2",
  "key12": "2VtYmiosKCSccjxqx4uaCaq2QktUiWdM5ZLst58WUZy1GhcEWsChFyHkaYSRN9nfYv8bxpGLnjXwqcbBLimZiwMu",
  "key13": "66im7wbj9wGJ3qisnMm5MC1eJ1N8jJnfzU2GXiuBxxPSm2DuQMHDPNKnAAJUpju3ofbYXSKHjvQ93Yo9MvjCPWLs",
  "key14": "63bnhB3zNaxof189GDZhkD3MvPHYZGaBi7qBTwtA5Mtq34mgNzZfPZqw2k4zxowkCvCR89gfU1bnmxj5BgFSHE95",
  "key15": "oiBvfF6EJs6R9LJN95Ju7QqanMRBRpH8GGgCthDSw7GY1ASnULGcvV5UNNm5k9bys2oGk89p3g5NM7EEyPi2zZ9",
  "key16": "29UDoefYjhN5gA67igF8Q4FNdyBKqtZR3mBSgiW9rA2TysUi2wBFDikgkumEoDToPvVti6FDNpjRWDd6zTasadEx",
  "key17": "242NnpXCydM36LLfwrUKGkju7dTgzekNVKokBpurB5BBorG98idVvfUm8f8wTzMoTyJTdqLFkaYhppANqGQtn6hr",
  "key18": "4bvUQEWHKzGfVc65ddUzTi4vcyoXhZRNf2iVt44cspSwXhLsugFksCYJ2hFDaB4DrDGVqMGWcoj9XbCzu4EH5uHS",
  "key19": "4HY1FqxSXpv3e6HGkVj6UBCKiibZLdLDHQ1c1QZvdjEQnoPEVMsV8igwGmXUbJYkx3JJeiSgfNojSeq4dmbiBgQS",
  "key20": "LT5QCSJuue7VEV9YzJgqaQFvxJehF7YobpK2cNb7cU1GvWM7Vf7EPuTMnGw4BLSrv3yZApNeUbmNrFj7JWUMsJu",
  "key21": "X7kjusnnXhcuNrNbcE5rUji4n4nvwRcaap9yt57LXpdb5h6R1MzHsukuabEHrNX2gSaeYzcf8RxjqSZQjhdKT69",
  "key22": "3ff8B3tzJj8b48pdjVFh5HMHVGkp9UycvBsezgm1TJ67cE4mZGrZU3ZCyDk4zyiuaU3sgxwZEhpMVJWhjwBHkzGv",
  "key23": "4hMgKutRRuWyzTXJYX8e3czZ9toeYKJRwYQ7ZMtsPFqVdTeY2LLKs3fs872Z4NeRuZBB2uf4XauzDHahntKWSxCR",
  "key24": "3kVRdMnsDV4UsHqMYjr2dBZrCUCMCyYACxbpLCkJ5grBKaWCWojkifdpkaWaF99XxKH11nvfB4CaFbkSYmi2nGMn",
  "key25": "eEPQvQ247q8cJC5U6GXPWiwvJZ738aJDaJ45bA7PkboqZz85zbNLSHzPKB66uREm6u92CoCom5TN5JrgBaFc6bD",
  "key26": "4DHF59Y8ScpxijSyppQFTe6qZDeS2cvcXCR7Q4DnS8jq8tmNW9sqbLy7TFXerDmRcLw25BwMzPDkYohTXRAkJ5wp",
  "key27": "61f5wBzsE4Cgd66QyiN9zuxP1v2pmPBFyQFXwffC373beKFNjEkEZLdr3CdaEsZ5CfjkFc4sBnifCPYfPY5fXd3w",
  "key28": "27E268QX2s7dyK1XN44haeex9XAtXth1ecBq4uTamRrPM6mfNyfXydWuT8HmqKXXQEDLDVMzE4yvNtvLzjMEchyk",
  "key29": "5gZY6oxwmjKoKeCDppE185SJYx2CoCkk9suyYa3vXwRdZX7BUQfNLzkXFszy6HFjAx1nRQsFj2atDab5jLaAacoW",
  "key30": "5i2RRr3MRbTxkKWupyoQyjc1d45LCKiPPS7F4XeHDRKytKJRJ1NGaJbVnSzLRcUJs4huiSVztVGakkxxvPDVNZrn",
  "key31": "2NMtxeQubn38vao3DoWXLU65vcRZXKDamr2rDAyfVWV11GcjYgRZp34shaF917M5PBNtN9Akg7TokQdZ63q4NZGF",
  "key32": "2Tbg7XsNd3jrcY1hkCanqTLkeGuepwTPAEHm5DTRAKss3s1SDRxnKQNQMrhoqKzY9HnP8EtiWYkZbmDt4SatRUi9",
  "key33": "61mzxPrKuKUNxFg1gYTGFHf9rghdGSz8SGvPfkf9katsVyjCGw6i7K6KUyUNPGZgvRfh6BdovP7254tSggUDXdck",
  "key34": "RB3N7HBBMcFQAyQ59WHhGyTb1LXdQqctuUZQBZr3a33FDyQuee41CM6RmkE1yqHUjr2DYASqh2L4cbatgAfK5T7",
  "key35": "64n1p61X7REZqWm4rcmEiizpeRcybuYhBVpbaAo6F3hh4fy2r3cmgxhuG3Rr5bePeidZsNceAZL6HxGUZmiPiAUX",
  "key36": "429jeRQva57niw9uGsf9HkbQ87BsdmtsGqboo9cocJcAbeSTYWaeZ1UBwV6z48WRjW5avS5rT8kpK9PC9FQTeTEX",
  "key37": "2yMWi4r1Pk8ATGNDKF9uVe4z2wM9kwCTN5X5JXrVLxzo8FF7hpiEwwV2JJHgdVEAQKwwZ7koc7nrELQdpWenonXE",
  "key38": "3w3UcijNLjMJqa3jvoGab3WonbxSmpqBSn35S44BfzmFMuksynTDZELizUGVGMBeZkp88fkuKKGdoZ2HKrnnLoMM",
  "key39": "5PLaQqkVHvAXHSAN6givQ1U5T1BFuridM5CCZeBeVbka7KVbwuFdZKvno8onQ85y1oz5Amb5pnprAvhDG3kesKjN",
  "key40": "494exSHhG9BAptR2uNZwiRWoU4syhCkQPhQM2HfqsumJYwk4eJtHnRNSoUgMmfK5YzbmbANz9U7pTqYjEfUW8Yd2",
  "key41": "5A5mwLBcXqGcN7gXwYvGEyN2ytPK8bDjiephmw7Z6PtPSUjxv3W23JUZgfcmVbij3TBTHnwHkfTuHv8jjC7tXmsr",
  "key42": "4KaUqb4WPbYErNgSwYxce479343xVBcS3CHVEMThiiE38ski8cLpYhFww7QxdiwUVQ4oQsVkPjkEg1fzivkp4cuV",
  "key43": "2c1RXQSiE6WT4BfTURsazz4WeRnA5f7Q284fHgK6qhFypa17vieeY7C6z6Fh5NbBmtXpSTpRvrqhnnn8k2LigvEk"
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
