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
    "412eP9WyoPmH4HQ4psQyRfutToxP8HRXnCV8sUUoom4aasm48YWf5zJVpgJQQGC6Kv9ymV5RRDWdRCnX1bCsWJio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mJvSeAJyFr8bDqMdHzmGwEWxSopRdrcBPce6yH6ABxNnwDzWKLzir28zm9eXq85MAYmMrJ1xXbv8CUbZFvaWDst",
  "key1": "3Tt2cMtBf1SK3aRtydA6MqWfeuYBcwm9Peh1JwiQbbRveR9eRJmAo5UY7Lu7sSzYuWbJJ2JQtT4ActR8qfLqoTSQ",
  "key2": "2z56rqAZnjAb6Vhte5vpurVKrhnsoWuZd4P2RD3a9pr837J7ShEaoNsfCnwitSsrs2W9bHBARTR6eCvHemYDUd6G",
  "key3": "JKQZjtA5DrTvzEqe7Vj8wmsuWgj9raE9gWfRnwKe7eBLbJNG7PKQKLiWe7wDWrt2v7ETgHhdfQ4DHYRSzU5kets",
  "key4": "3geukMQr57NZSynQef4ja64Bh1RPJakmbcEPf368x3cMTXWu7RXSFKmAcuA2kpxd3WkzXQmKSXpULz8tEgRsaxdD",
  "key5": "MnfzCJ3DDYE5eidKa2knZAnovkPFfSC2vmKXbypmxS6VsgPnT1MbGrdiyfZTonFUtZNtGT2Kb55F3a5sTLXveSm",
  "key6": "4SSZZpci7RwcmXe1tyNxHAYQAZUrMj2u6kc4Jcvmwo3Xqnwmur3rPBbsuromamJDRSWJRbQZiwoc4dmPf6brPgAq",
  "key7": "3VNND8cAaCMbNsj7JfW5UgEpRE21GQhcUZRMu8e4DZUAMdkBuRQ6p5YkVr65sCRBNKBdNzbagbP517ywwW3Azx9N",
  "key8": "5hb9KtAjoHUnDu3gB1naiYo2682Q6oSv4fFx3Wb4iTcDo2AReAFaa1QNmQDaSZEQ4Xz5HCcEgPv4BUUMpxhM7HTL",
  "key9": "5NTTqK9Bpd2vQ4L4WGzhj95vH3mTs85cg6nriUTLiYrhdHHbD4z9mBRPsmxSca7UC2SPPuXdnU7xfTLzLbQarNZ3",
  "key10": "33x9pWJqWdZ9PQWi7yAMVoh8mwMrbUxW3g14VK2FxMxmg5vyvkDcqGEW7b1JmeWUZnX98CXFZKmfoKWwfTeHt6qd",
  "key11": "3ZCxLsNqXChUo3hk9yKKHveGhSXcPNVvwU9Kb6jAtLYhXK4x4tnMktXDHBqqbTLDap3okiuBxW8mZK1mKNwC5KRe",
  "key12": "3Cb4c1s1d2ZadNTsuyuWRtcnmMm7n29ChgdarW7rjot21d3VXg9wgAQC15mt633cwFcdTL3PGjC3Wbh38jgv7tKk",
  "key13": "3diTDSReCJ2ncBCbbM6HnVTSyrVLEQX6fnwtdgkYW9YTcQZ1JjWnUrGUQvP3a6c3hzyvDJFhQhUrVYHteZ6ucXTi",
  "key14": "PUSEhYVYiD3xDhr9tzvgYx4fFqER2ebs5AXhAJXdiFLeJHJE8SvzKdnfTVmTaLjzLoBW86vzrwehAKeGCJZ2zpt",
  "key15": "3bTgJyjVWyLr7hdwDZmGRDZP7oNpWgrkH7VVFRDqp4eywqDqb6AMdxVt2UKvAEEyZ1ncfWkpfpNcgorbihzor9Nn",
  "key16": "39F5kNE1t5XPVeggmkWMmD3zH9zAYJvyRfY6oS8pdoVEzgTKYixw7B1UpX15kUzTg8NrTMEVFJd87vt68zwtXXtR",
  "key17": "Jp9fFiMKGhWtNpsNTwmQZ2smKhFUqRPLELHATipspRF7DUUC6VH3ybU9noLdHKU5yUWjWb3zrUuxpvwqCvdwJ1e",
  "key18": "56dwFMZqj9BQi7bTemnKUbQ7QumRZBLB3oroWyyYzWnqmsh7vjYiJwFLj9NwrnSiqiwo4HZ2CVVyHfBzTB82jivS",
  "key19": "5dpkNJiyjcPvtHPjobSBDqWUZDQzzN4AP2cVvwP7oTPeYtUrgPZma7mxKQEGSWFCEDXZRVmBUVxEpsjCacBmtc1q",
  "key20": "2p9tq6XFaepZvt6Vg6z5seREBv8wqa2VHrJh6RQSwRHHzvnPECnAk4kGADFmVfYkNNDfYq2paKqiXeWB27un1Hrv",
  "key21": "AByC5bwXjech3hsnrQDFUyVerqTRr8mCfZhBWJvZWNV1mPj8uj3ZaAYyNeEdvzFkjpAyo1RYanyjDQ2tq8PvevW",
  "key22": "raFdrV6oCRkfbVBsfrbTFhji5gpuwyfNr9dcouCkrwLxAcTjBQDw4Emk1YkgNesoaeMxoGPpjyd7wmnTXjS8KmR",
  "key23": "3R2WtvRbfuNNhr6eiQ4WvCpEXYHg8GH3babeEjrPWBjyC5s4GUzHMyUrEND7q5YfTxjhp6akhw22e3zj1ahWkz6u",
  "key24": "qtsyBQVh5ceKi9p8PYhBuK1iQT4FsJVgxbCb237A6dkMygwMWbyfQyChznV1C6iXFk2kBp77i1uoyKcWZdAEbUB",
  "key25": "5cN7c3kGLNteDq69dshTZ9CfEXh4X4BwwijdopXwHqcAaCdeXF2n1wu2Spb4WeZsgmUr43brEUo5CLNpsXcVd8hr",
  "key26": "4WkoqM15y3Jj32UcovnmhnJCuARnndR5yTrFv4VtHyq5RDPKRvCKxv6Mmg9iDmCK6uHZbHgxz8w69FHH9hLWyBYm",
  "key27": "3fsKfaL3FC5WDgUGZTPxRvxXnD8imzTC94SgjgCyisqe3H2DCPxBCCjEbghZVb998xz55bhLQoETw5YrNkbpf9BN",
  "key28": "4amxspZpjjMM2hsRaVbM2LF5ZmTq74yXcHznBM4VtmSTqmL6joAkzvccTgHpX4Fo2aiXeuzxXcH1ydkjydiJMGKj",
  "key29": "5rFLC9jWDKhZnoVJufWLnV6BmEyVCDTRpvdVWD2sUjJGPjsXBipWctv8AfZg8AKnM2wR5cciWJ7SdgHHuQBuU3U5",
  "key30": "3STzDa5i14e5pFZitwiseaf7YLkMf2T6WQDTFnjUuEpVNu3HkUurkyLjU856m2162txby6W7neoNFhRM7WJWJf5D",
  "key31": "5WewTWVefKhtzigJeYWvqVAT8dNDHoFt57DRm8QpbQMyuaw3rdBTXj3R4CBmKaRYt8VEJC4m3T78HfBxha1mKi7J",
  "key32": "414Mh8QLBH8iabTX1QN64hAaPENRahZPVnzXJNn5CgmiWQSPgLNTk1uXCGKFt3DiGToLBJewjWdaamrfYokrXg3c",
  "key33": "G9Pq8ZNzCY49o7vCcuGdZ7nBSFJaXWV3i8k2C4D2ECmAGnwGc7CXtq3Ph7uJkaWzYhMfNSQLfGskj7afukQgBNL",
  "key34": "3nKSefdaYVJb4DyRgMKmFLzuAg8fSz56CtWsF6xrPSbny4W6VQ3ndv2ExNPNAAE3Uany5vhcuER6U89KxEv2w28W",
  "key35": "65oRnH2Nw1NFKkngRUtavoDtiFFdYNCmgGM6BhRkMZ2e5oHq8cZ3zW9SYvbSLca1WaHqzojb1JyX6iUYcgCeN1tw",
  "key36": "5qciNtUpsUssyLKvSsVmC9BLzKGoToboKPSGH4Dc6H1CEAc2bm6JvPqCKxk7kT1Xb6DKmHhqTYfcCU4reTKdyuLZ",
  "key37": "56pTN6igS4qT3YcbogYsXKtprjGdNGEr3kgj7HvxZaXmmss35yDqTM2NZdwj3VjUyXT9EaXv9C2EBfPdg7EWf4S",
  "key38": "3KNPiQa92ELspuyZmw1HcqjALeGSDGsdqdyegyStoKoBktNvzkV9Wiw8zfsRUAeBun44Q9h1s9jwjMZbjj25M9P9",
  "key39": "3UCTcXwmJ3EFAwJanA4p3x4x4YPGY5MAbPLb5fmh5ANxs8PaJGr1WHLEoExQa8dNbZW3fzt5mepeFKrsQLcsMo6k",
  "key40": "64J6hxnhkPRyvXEFXZCrbFDCYdzUuRsQA48NotToY9q7kUgJuRXyr6aSn1eVSTsjTfZPWkNrwVvzERa2iMTiu3o",
  "key41": "4YgQXShhkatpgeWjHi6fvHmRCoB19v6AuUP3FgeiDj8LL8jTgx2NXK441Z1VU4YddQ3BBiU1tffNU2Cn4xXdtxu4",
  "key42": "2BCRpRp1wPoiccVZc4pjT5yoLqH8msZM8EAJWHWFef824WFtzBg2nMnfe3SgPALviAHAMHiESxahfMrC1fbHQpg5",
  "key43": "3PC9b5H939WJn84wxiRkTq1DRRTo2PwcSZBXW8DLto8LGcaQBUHN3J8gz5WB2zAinEHCgy9fDC6tJ2C1UtewjLGt",
  "key44": "25v24mPyGMvd1jkHv8uDU6BoNinRVDr4xTHCLUyytVmBpYGqD7h2QwHPNg3v5gAG7eyhmApfQqGgLc4eRaEnfvje",
  "key45": "5rneC8nhXZoBCYEG7o1xw5Mk2HAbuxt9NSgwDoeFEARtuQwe4jYVvzWsToZqqkhgEnVDd8sGb4yczQ7eKBPvhoY8"
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
