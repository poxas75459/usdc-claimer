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
    "38yT3fc8LMk2kiznokb4e5SvPW9Thdg3h6K8DH7KPKiZXLqEC6KuCsCkh4Mpn9BnoUXjg37sbmxMVc5wGrGzJjwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hBJ69hLuTNRCsn8SMHPMhiWhBTarW14kQf1pJdmrqygzdizqDBNFK2jeyxrBMy5eV79KU28n98f35guuxy8U2qJ",
  "key1": "mt1e2oBsRcNECmjPQ4rRYkJCHXsJYBsgzDQJX8xUmKX3wxZbxes68mKiNyjQyrNJ8HXa3HMzxWYWJjqNi49Uxrg",
  "key2": "34u3gXpuSvSN8gFqGNpUmV5i2AZ2FY2ieSwzH8UZHWGTGMHfMKnfvjFmUg1o8SsiwUiDcEpkQAQZsfzPJGHZZ9xQ",
  "key3": "4ATEtAYDUUq7Z8pjBuJ6UVsj2CpJ7MTtUkRrsMRyRmJAB7JrDafBtYd6UfAre8X9vSku1mzxvvhx6sV87SpmATPh",
  "key4": "63ChM4WreHcxc6Gh4sMS1TwRUUR9kXffYjPinA8PnVTsg5aV1uG2GXbYDbsUxXyRgQRSPyZXmKpknuUrHMkXwFZi",
  "key5": "2xSxWQ4ryJmXykAsX4u6ENNrDM1MBmLfdGiMxxQ4Tg1uia3frScSYfCU6gFVjRo1LYRgMFagdDndbGf9jULhjMvH",
  "key6": "LmL2AuR3xFW57joPHnE1GiEQHQZ6Y6UqeZgoyXc9f9cEpA8b3wMnGpT3LF39hSyemj8YRxrPBJybTrP24G4azAH",
  "key7": "55KYt1wP7cMPDB9NS9SPA9AvX1MRofvPSH3VJGg5SPchPZCZrj8Qa8Ee9mQSFCAMRmpMxCCMCNCiUex5rQwnaujc",
  "key8": "2Hs45Nkt6J1uf5va3WG5yxzTSdrHiUPLBVtNRCmdjJRZxx1tWAq2BvP9cfrJ3M8GjU3XGQJWTBZYrffW2wFsydTF",
  "key9": "37s7uvypW5E4zPres6uNbbEXqcexAzm4VER4h3Afew6zBhCFHu2hg5exDb274MwUHXtvHbWPYVnq6LBCD2hCRiAM",
  "key10": "4ePd5FKnjoSu5YyXZBt7vUTcZV9kdbmsrsiDpCCbyRp6notH7CcSCaoKXfvL3RKgDXxq4YXsLuvcCSse8TgtNGUa",
  "key11": "1dDg3yWo3Ph9hUkeVMmVfdNwE6Ebm8c3MWjPHGsJN9eKgKifzPBArxTf1RhgBffbKvrAfAjTgtQt2zWrNz1Vtrm",
  "key12": "5KrMyiimnZHiiJaoMYAND4MG6aVcBZXPncSiHWWU7QZSd1btvhDim15iuS8GqfiRfr1PwAwbTyw2NM3wB4xNA8WC",
  "key13": "2dGyfhDnwEhJBt7TN4q6X9QnLdhkjor2Cxj1YE6qH9dEPjN6S7jiEDZsNM2S34yKDQFkctnTgtw8NfECzrrzkL42",
  "key14": "LdneEcT6sK94KNsoyQyg4PkNxBuGtGn2c9vmvuGpJzjWg8mfpyB1Rsa9SV7rH9RiJ4iPUBJM3iJupdF6FyqUh9H",
  "key15": "3WBAwFCF9uLtawBxiFHi95DdEjMLEgUgPVhr5HAhaEffPp68WQfJCPSAoy5uDoRWmkun9wxcBT6kJGVatcMJG7Dz",
  "key16": "2PteByfurWMb7mxtFstAxzmiMy55feRxtWca3gZ1NoRY5XjWq7BZGf44QqugxjSMdR6u8vVLDTAM5CYuc6D3mTCY",
  "key17": "46GH1o3oTvbonQCF7J7SWXnAPXNSR7hETbD1QQz4RazTFW6YiAP3CiBvvDanMsZah1r8yRAofUgiTH1DzaK796U9",
  "key18": "LUJ4E94pwUHKw1FnQPcQu97vHC6QBsPbGkYJpeZYMFXnh5kmDMM6V5aT4yQgMYX2sFp64TmmAG4udwzs32TTAPy",
  "key19": "3FJB8KvNSYaz9Lau8SLhxV9Ef6pWYjPnZLXCGwL5MMzGNwzgrTjwUhwcHNcSPj4vvtxEhxPg4zzU4CEk7P8tsq4N",
  "key20": "3nJsNsqf2Twkki5FFovow4HPuM35w2Hb8kF9kDwrKD9hrnmhdgXPb6A2atxY8s3ySDjGGAVyRxzyBq3zTGi6WnDd",
  "key21": "5FuGD1uhedguXLNmXgevoHYKJxbeEDcfCgv2amTAuPG5KkPQR7xeeBpijF8CtCKK78pvDr6ByW9wDahk3GLsVrox",
  "key22": "4a41ckNXkBDg918yRdt2JdMmmzP3PY5fgDyvijvSGfDaixF2PgdfyDgJ8mHQ6yJdV5du4o3vDNcnrSNvVvhiLHTa",
  "key23": "5hMtJqiMJzrLxmsXjCQchCv4RzMZ7CC4Qp7ya7DyGfJvo62w7U7tRG2SRkyoSBQRTkKLuknq1zuQH4vhuRTSg2Ue",
  "key24": "3iTULEcgTuSYPgYWpn3o5LNiYSp9WgPJ9uELqQonc5kixS2DEjYfe2DvG4jwy1eexnoVtp3exyuMhRAnqm8juj1Y",
  "key25": "KBeSwvQ2gc3V9NDvXqao7NJggLTaged8H8CBPFansVBaAXrieVovP3pmeJcwiqo2kL5gMDMecAQ7yuzWzXrusS5",
  "key26": "VtbiYpWCfQJdmaMsLdyCSiYFF3Mzo1tk7VsMEkh1yLNEkDxJZ91hvgqwA48hLC8KsqDV7h9wjzXuSZsYS8APsoM",
  "key27": "EoZB6QUbm9nK5Je6EPJg3Yt24T87tyqrqhoaWVrsr4ACyoA77aa4ffomWFmUCQtvJsZdVYqcoedycgM8xoYrcvW",
  "key28": "5Vppjdmd9wtyu3LX4vC6TJUkE3eBDJM3MxKoMvVBkZLfSrddqT2kPxntFzRfHt4pnHyZJvaPJELpgfXcwwxhB4wX",
  "key29": "2YxL4DnNSRxJsc5i8nWMUnn6gBHCYFMURe7PaK45LMLCDjMasrSySp7NNMkpKBNV5AiqaKKpJL1jeh6ExSFaYZVe",
  "key30": "21HdC1EoiKHthpcS3xdVkwUZEKhRoaV3bUvbzxF6qfuUYYVgDC8Tx1ya8HUfK8QQQK4hAJQmyTbM5SzwyejRUCCb",
  "key31": "DpzqHC4Hr9ne6G3tgX76Kug5ysn1TEU3J3N68bb6wtLU8bUMKJKaWFdMVyV3nmujHRNiM2Rsk93ohx6L2AkLHvt",
  "key32": "afpYp8gyugUU5tdkYcd4x5PQ1Xp58hVeZCCVjAasKT2ZSMJNcsoLU1U7NhN9jhG2QEzFUdzfxxYjik2eq55f9db",
  "key33": "2cKF7h4q2xjyJc7NuKucRAoBKAiFEgDEkV6heVpTU1UtiLgkizGgn4S3VB3j81nB7N9tBaT7Kz6aEnz275bVDowk",
  "key34": "qpdxKpHFsNVE1XRw6TJPh7TH7PHycz67oV6fVsDbUC8r53uFC787QBxqXf5QuLzugP3nmMkCCUEKEw8ZKKG5iCw",
  "key35": "4hKExARbxvS1nYjjWPUrCiZFNNJYhBGuqvn6Kpb4QymSswyYfM4ik9pAK8bzMmLw5JBVhwn3G3GUJ6XipKcU97p1",
  "key36": "Ps37F6NnZMaHtnFAavV4uUQsjDXsbymLz6JydD5qVvUmU7X19dhfW7GCZUUnh1eag5k5WazFhTwPmFBwzKhvDts",
  "key37": "4oyHErQmF3cSer6rhsUd1wmkadgpE7gz3c7viw2ctPNhyvsNDyWF9Mc5VzLnTfcG3JVibVqvHncicN16gmwvHS9Q",
  "key38": "63hgEpS2XVF4KpMhDJqinStu4uRmbMXDQdkxP8RD8qXHZ4vBKFVzFH1KxUs2GrqzigsDe1Wxrpz7ERrtTmHjJSQw",
  "key39": "5qvXNxPS2yXnXD7SdrWAJdTSJxv4mywmm2GqoQVDRTXv7osDZEZgjb77oB4FPiPWYUaoGnXz4jYRok6qTmPTJoaB",
  "key40": "4Wr1bo8nGZJN8qqWNonKKH3BFNAvU6ckEnU6pwFR1eLWPhwnk6nYueLb8owaURc9YuJwxLoqg6D5PBFF6d3ftCQD",
  "key41": "3rqsffxtPLQo5C5XJFmAZKB5SP28Y3xvaqvzvxMxfcSWGK7eyckEFCcmBCBcCUA6PMUKt8u6A3rb2AitDwznW9o6",
  "key42": "4n7Ji1qw4yu6vucd8nbCrLrXmCW4Yt849GYgKMcdBMqxLPhC18BpVxg82kBYV1BresYiTAS3F6BoU3H3q8uRVBU5",
  "key43": "5UGcxbP7zeUW3bqc9DnLXSzfjYD9BaDf3S4ykY9F3o6xxWLQPAyiv2DSTLYd11o4iPMhZ4mDA3dF4n1yX2mFsE2V",
  "key44": "4puc4eLtAZeEVuGB3EwezhRQHTkbpfYwsd4AjRorpEu9gSRg2rA1CxZZZVaz6Xhd1AjW4R56hQtP4QZD8DAvge3k",
  "key45": "2NZqU5fMkoaCh3W3gWPPWax8Y7Ne8QwAaZquWuSYJQWkdetT6UT6UaASdPVyVvJDo161haE8vwakWC4NeHWD6uuf"
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
