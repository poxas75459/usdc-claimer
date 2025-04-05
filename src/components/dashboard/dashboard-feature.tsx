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
    "LzfGdFG8j125sCjAroE37UZTbEduNdpwiUVZ5AMoRLPTzxbM96yzkq4PXCYkqcDjAzqnLDDyDdCJaTay5wbj9Bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Um4GSfWudFANYpuL2uzoXQQRVVX7APuLb4whX1HSy4ASmX4BG3YF8LsddcCkE3JU3YJLhZxL3FuK7MW3UgBcJYx",
  "key1": "2tExS5J8eWxL91gYUXeJ7Z7d9pLrzo7CbNGY694hBJaHVocDNPj7naKK9WYEpXRMSzzPLyjYsGFttc2rtMtDNVfi",
  "key2": "LuoSaxkM6mxtawEs9aVG2QumpFhpvKoLV2Crcw15ivxRUZ9R9rhv2wYaasDZpTuGjm5pdiT1tNhyFLYjosMVRvc",
  "key3": "58cLctBSuE8TkBkyLtp4E2VwQWQtWqEPEzVErngd1LScXhLTvcMgiGvV8QRZujXe3UCr8GTi9v6fFF6shnqYBu4q",
  "key4": "UoTHoLXGHdpTXEAenxPG68DBJZpuKL7sUhnUj1t1dhdtJgS2ZsU1WTJcdTxj92UEy9fsaWwghNeaE1hQnyY9hTQ",
  "key5": "2dvd1zr1d7QUjTeetgZjdWP9unoVVqaV8h4DmN5Ty2pmhFoda944CnqV4GwK4bdkichiPKF1FtFG8X2zEB5F6i4s",
  "key6": "5vkS961SbqEUFMzCLNsZ6TSFbYQCtrhH4SCyqoS69fzSj4xHfd19J8Xk3tM83nEbqb8jWTtjEyTfnT9Mgo7VLsvK",
  "key7": "8PEhe3W7mMGYJnzohb1iBGyKnpL1pVZBfSVDJUqrGEn22amRDt4MJpCgco4xgyqtrtvpSDeDH9PB1PD7edFisMj",
  "key8": "3ccMncewcTHFs3kCzqZYgX4QHx5sYTGbmDWih2CmEJvRvQUEpwxgk6pNrzYZTUM95BZdSLYeQfgFZ8akPgTowfzw",
  "key9": "9EDYvWUE9UQkuCPfFMGkFX5V3J5N6MaUy5u6nPU2ydchAY2vgcJYgTTHhfJieTJjDUQ9uqxrGu1KChjCvU7YLjW",
  "key10": "57GFakv3FwCAwf2EBV8tpggQAP9cLqPjuyPGmezym1wX8Ng25KdMjnnQHezi4Mh5oSt4sSxoSTHE3JVjw53DW8Vx",
  "key11": "3G5CPT4ssEGeD9RRhSqKAds7azDj33jbpimAYge1KutPtFCByGAur7PoRptjJcoF5v5g56x5fkNm3uzSWcyfTCak",
  "key12": "4wQus8SVXXjC6vTYea57xYdTEvHTXsAjShD8JC5TAmn5q2NAhtBhB1t8DT17rPbshSR4sw4GHFSiy8txwK1EGkLk",
  "key13": "2qre4nFaWXZXPhAbu7GfztxXmgPkaMtNLkJn7tKxXM7e84oR1qFFsM14TwK1Ad7QdR3j2uHgJLu3nsKMEnnR8hPy",
  "key14": "29Xe9aMxnwWKhVFRM5HjfqDWdc7Cn8XYvmpQZbLtnH8RLoFFQfcArFPzpW8KQMXJLn2DRTVBd3Ard4Q1CgRh44bo",
  "key15": "5F3JqC8Hp8CfNnDVE9CfwKy9RAGh12yE3nwS9nNxEke1KaUJNQPCkmj3YazX1hH54Y8v15KqEBANJPXEMGZ2JbMB",
  "key16": "3KdL5KbAGPx5wnoAumede7qhWq4pD68qnADVnR524JS2txLrgyD6jVKELd5EVbeA6NNDvWyS4Z95kPcmQ4qpWs9h",
  "key17": "5BS9wSAYEPijq4gPVZ5EakLSuyjqR7eu65TpN9gjBxjgj6toV2gfbz2nzT26DLs33ELHtNDFueFbxFZToSxQhCgt",
  "key18": "3d4pcYQzBQ4fMwWJY8xiYKLme87BfzLwFf5odzdw4zKFGuDyNdLdVd87MZGs1Z4qGNdmX7ujeqK9EVUmk41bCc2o",
  "key19": "2zuadbfiF7bCU4k8Wm1jhAf2MHWpmCGGrSfU13Q7Hnv1gYtHkrCguPBKz43b4Bc2hR9jLQz3e8e1V6HstVjRfsmq",
  "key20": "2SPduegreUyz9XvNqL4w48w4WgUeUpTe9tUcE8mNewbejS86dymr3FHH3KvzTJESyaaBF15WDHP9wn9mHK4R8kHw",
  "key21": "2WuEDjDaTC1mPsC6FE39AyZrXhm9VRVCq7Wam4H6QokYduqGaKPkrXgYQ3YBAyXLw8HhC7NNm2ZPFPc2svg3Chto",
  "key22": "5eAQjoqHssjMYJQapMGJz3keQ4ips4JVe68gRQPwvnEZdrJcMUKJ5Fk56FaSbRDp9sLWhB5mY85yQvoYAEMt6Xuy",
  "key23": "s96vfPasRWndFA8NDV8iv5DtbG9SkKqWvfNu6itr2NRA1EJk53hBou2H2b2wuz3Q8HDuPuc1DYrXASoqxTJqBxv",
  "key24": "3EQuMg9cVzoVRFJRJEGFCvVFqhkidXDNx2WDR2cyjrQ2P4t6oPfkgKoPbp2ZCagysBghP2r5DWsJpy5j28XmTFvq",
  "key25": "4ia6aG1GsdA4ZB8Z8cdRCYUUgX76fRHsZp4YSdfybByHKdLWqbTfEhy7GJAPC6N2XH8NEWJ9c8qTCuJfGEDgGtuD",
  "key26": "442MX2wX3TUC11c7kQrbGtq4o8FDEAJ63d3nZHCkHoZniwzHa9h1rgjGh8tK2QtiHpqJV39uu3hqhi9peXwBGKc2",
  "key27": "57u3y9czJSNS4dVce1so3kqtTijExE2ARDLH5VacmJZsJWe1TAhu2E43DrsSpUtS2fSyk7EDg3RkLoj1vmCsKMrn",
  "key28": "4xGRqFdGfT2YGns8kTk3Z3ygY7uw3JuyWPheLW8nrWWruQt6t5xekA4apfQrZJJCuWd6bxLs44do5xZoovj8t6f5",
  "key29": "3rW67C3P4tigEF7mdEUtv8yYGetfqAuqXk7m5hyDpnVz5VkD1f3tgTBCSvdMyMwrWd4m7B4tQVscU4uwh7vsR9nj",
  "key30": "5fvM5RTqHy4ZCvCVni5BB3tb1vjxPEWSxv6ggKddPEshP4rwZsFWTA5u4kx23U7KLYdxHyBQXtWNUDbUywzyWmJD",
  "key31": "3fUqQmdytBGmKMF2CWkK9XLe5gDxccgnGfdAadcvYedWVcYaPH6ReGFWJBfX566NdWe7je1otyKhw1j4tKo2WNk9",
  "key32": "5ZHcBuEYrPdx6THLS3XRQyxeYX1W3fbcfWX8AsDnqj1BnrQhavEP38n33WjrXKXLgqRt5FsytcGS5Yyub66B2zUJ",
  "key33": "wQpq1maAYatWjFhpiPc92nWx9bPQ4KpEQhaRxUhHxzDvZZYP3t5B659AMa2cStMoBHZj1Nt3ZBANARLrP3thkYB",
  "key34": "5D9ZR8jG8a37QYpP7aifyRcGKbsS2rRCW9NKE1yiuyc1cwzvmAdMdVPxE8c2VeitowBLBQ8zjRRy7LXNpFJtQXYA",
  "key35": "4HJw62UYatsweVdVaU34pMtHY1wYhDTVz1Mo9sDDbWBwvqctVuyFUZMnohZ7KLX8LktLdQ6pTmBo1B9JwKZcziWt",
  "key36": "k6KNz4pV7xkGGUBCjk4NVdmqKRb8kSeMrkafZPwd1B8doXCqMZtzNCemJdYFDyC5LuonNr3zdtG7RvZ7r7gVLti",
  "key37": "2y6fPusggDKmhNSZLbkU1FY5pVSzqmXSNnwz6NEeHGBJKZ4qfFKKn3qLxmXV8iEEe2WVoNpduq3BRwuHm5Rft3Fu",
  "key38": "3haWzQJNAdLooGs9tzLJpKdhsE8yjZLDmQWyZJNVPfT4DJMDZRkzLYa7JMZk3dH3As9gT9QbUYT8d63BBbTqCxWu"
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
