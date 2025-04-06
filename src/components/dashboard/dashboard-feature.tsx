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
    "5ywmvRtYFv31Evz8ZWqRWhZPJGiMu98cFUdfyDqQaZpTp2oL13LJuPzgWDArU6huUQ4oJkUptXaLtKkvXA43zBGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B4JYTHPd9DzArTkU39jab9ZnJsviRmKVokmXPcNX3PVCo4rw42RRi9vUGmcLHFCW8kbzBynvEU4j4sxjCAkZE2H",
  "key1": "3e6Jqh9TMn4bWE14LUGPBiVHPcGcgspGbZMb9TrxKe24yaUHFVE7Xz2c6u6SYKX5pD5FS7pyhuu19iWTa6AVJJYM",
  "key2": "2sv7ne4fDJYmyjT4w5sW1Hexb4NUQ61vBAvbUTBXASyiQPE7BdjGHRfpKqs8vVpzuzyUXNQXG9wfBv8Ah411fWgD",
  "key3": "2USBenrq38eMzcNxNACmJvV1HgR67yFrZyszBgXQZAcRCNkgPih1vMbRe49EWjjP1rEMEZMuRBsBv1sinZP1Yc5q",
  "key4": "EfeQkM94i1s1XQaDqRe6FEj4hSUF3BzFUBtPhYvW3CMVgJBcDUPWwW4UYdPHo45rpHSD4Wx17EPHHaozizb8Rse",
  "key5": "Sai4xeLeu92K1ezHd7g3UY45ep9VDFVwDfyZgqKnhoNoTPeJdEEmndAdpXjNSSPMB2zMs1QGo2Q7BjY2ja113ak",
  "key6": "2Tb7DMjMhYG1iWkz1Q5T5Z8RfzEUdzddiGizdD1rqdj2L5CMu363Gqvpz2ViLrogqA6w2uSs6grGsgsLHHZaWw1a",
  "key7": "4ExAehqw6gvhTPV7pj1VzwWge4RhKZY8Z4PC4xWCtTmL74K63EFeRdzDuTYJ6gmRr1ECyPWdyY7KWTfzAMoQThY7",
  "key8": "4nLp8rfgAiB4TcaLFEbeJxPgvchcya6ZaWfio8MNCnrkHRDVAMProN6STSEGenwjpcN8bAnKingNnuU74qJSSNZn",
  "key9": "4WarwQz39BzTnChCrP3Kxh49snbwK7JFAts8vGEaX5oo1nPudiFMWBaZPKfPSHjuYdor9mSQiQSmxj95Mqbpvyp5",
  "key10": "21cJfFmVjWS7WM6jgVqFLUcGEGEuDT72zZkyPBKQN9j9t79SjvqDVB7baNZ9bL7B2kq98e4c1rzVpNEb5WBgVR9q",
  "key11": "2nBqgNCAzng3fQSkRgPAfd4EuWqcVKrKhFb9Qakfr98ASnj1afibNWkWeRXL3ySgRmXPP3Ktm7cqy8ZkWt621AXG",
  "key12": "3x5VYLHsYbQeMBwrEvPdhQbMsE8BVDTU6mj2BUkYVcvPjSMg5SEagGR4qWVYRQ72hQgbhZ2NrLNmssNTVg8CZn8c",
  "key13": "5yh4qcNV1mSmyeBJ4R5UWc74LwY1aHZy7rzS1n7jGgYNHaLrpBWurfvwQ6tjx564ZA4jERydU8jZG2meQMzeSUi8",
  "key14": "5FFb4RPtnimEYhcMsGXJnpeXB4k6htDp1vNnjqUeLuoKPytEBnLdS5vBX1SqtQ5bA7xi6vGDtY1UZU4mWwF1CqR4",
  "key15": "hMCS3nBTsUywE2pvai4uWAumBBzxXYCFj5iBVRRejkgtc7xbsd2Ls7BzaZK5bT7T3VQHiVWhpoBHmbdKRFaHJBG",
  "key16": "5Kr55jkDH1AubKy1Zd4CJh8UAF3Lm68MnaWKj8nwDvVsvm5rAG2C1QC5SyJiA8nLgAboWbKDjPx8QTDPGhntmbHt",
  "key17": "4yMDHQ7Dbu2RjAt26GT1Jt3jymsBeY8rh8ukX6fAxdeMeK5enAaiuzPp9XPmUEu2XuG5vLMBpdJNgQuhn9kVZE4",
  "key18": "22Tx9RSRYySwq7uHxo1aPbQ9W41mHL3gGekDnm4xSBVgbcH4BDqf1CWRoBsTkwv97CGnnKJjHixC5gE886oqLGtY",
  "key19": "5AmhiZwWvV5JKgiKnc62meKqNoPQwf1FCSuSmVq2DBqQbTr4R66dWHKLaihMnHa3uC4wYRggZsVj8uRLjqthdbqv",
  "key20": "5N2ZB31owRoTFdupyrnSFMVfLLuteMRpz4UfQiAGddk4pSDYte4jMby2A7YL3jvVLkXSeXE2V8hXsapNtNSvx9jF",
  "key21": "5P2YCagkxdgAPyCgU9izGR6rCb3kjXJzV1WTJPM3SiH51UMPdcv25upyghbZoWG2GZT6GSbgvLh3cnCSDjKByuCk",
  "key22": "5PsJ8iW3eGFF4EJ16fk4UgkeRpmDXXEHWMyvdT6AjFzgHzPtBCTiqetiGEnfVehe9edRWSYystNyZYoqU1wLUApG",
  "key23": "2bNtj3axhsg88edAqkTMD3TJyzooPEXmxABhZ3QU3ovfiPwokKaW97TdmyDy9Sn3a8LgRHmAxrWaqMG2X6f8kT3s",
  "key24": "55cYQ3eDjQ7iw56RU5a5rmDm3xpkoZY9FiYhgA2C4hZzW2c8C4KpV5TNtuvzfARdpSB8CFCwk1dgw8R7HJSKaAko",
  "key25": "toupoFBaE8GogU48PL5tnMtwjZCA9bRr5NRywjbs3eBWiCXntBrmxYUAyiLWFi9hJpYPX4wBpqTxhvCHVugbbrB",
  "key26": "4xw6C6JoYWf2zmXnc58zGwSWufygCj1P9iJXVD8ztyeHEWabLYzba9JtYJT51E6PMnA2CLEqBZVvf691yF3BzrZE",
  "key27": "24t6jCNScsThJZNNQ7QuwfFndBPp35v1wkHv5Joa41fyVMmhxdSmqFqK2JFnCrzBWdhUvEzur7gQF4zSZp5FtemY",
  "key28": "4mQQGmW86FBee67hVGZ8thHNXEvnUfZdxYJTUbdEoVbjp5mHGyRTqL2TtnfGUWUEUN56zvVWPZY3tVpRNiPP6Ca8",
  "key29": "4kTJ4ZXXzdASk7TCYk5WDiNN98tmzw8i86dPMxMWxggEehhMLdYA13gPDSPpPmEno4HvVr1xA9uFupceeKhEFL1S",
  "key30": "4de9Qv4YWmdfaBfvgx6FnHVXLFNj9SKvL5Wp2XjifRvt3mNUDF2QAnMFpKsW8RCfTcE32FzXR5cqcL7XVTifqri9",
  "key31": "5ax6upnvbsdsEJNSYjAnrKzVZQi2Dt6Mky8VNdgeGrLWTaEDc33hmnpZqFGtaUgrcCKKrYvCFSzueFHdLQ9xN1oQ",
  "key32": "3V2pa6CX5ZhpGFHz2qwWCa9YSScmU8YRYP9zZjCg4vdQ2ns8rGR2Js3gQ3RpTWQwK7H5baA3RjS4AmWSy9sMt3PG",
  "key33": "29DWUQJNjarsSjuxYc25jRkjxD55RgoJMMbuWR1FfjrC6NiLJFZ45XiZvNWA1NfYdnNRx3GAua3mf3UKytijGC74",
  "key34": "2wmdrCvRrC3TFqUjwcwwwbdRqAceffFDiAVb7ZEeqfEALEQ9L6FGAkoGAHrBnZh2nSTXr8iHo7SoJJw5mWdbo5h3",
  "key35": "MdPqphyVP6aX93aEYuawxtctYBb6PYxKD61gxBAF2Lb6MQEBb89VdXzKma9mehhTXyU6iSz6JKimRaaeRSEoFA1",
  "key36": "37VnYWEhTL6XGiaJgFhMb1JMtZusm9kbEF2AGDd6zVxajYBPphWE6eCxL8znLQ3GYu1MouZ7Fy9p7qnxwQ6pvf8Q",
  "key37": "5fZYVNX6QTTYBgJB7BB4gfcdfj5yXn5LnaREpgLtHg6HPL79t2JvTXPbRxoJ1X1rzH8UQyUY34rD95TqqvoqHoP7",
  "key38": "3tywkf2VpkY9c1Zdn5sQnLFPPLzDx9EgE9nWQaiUd2JMsg6VdvdZQkBv3uHdFbfhi9vBqfHajYYNmLMoi85abXsN",
  "key39": "JXkWZaC9CpzQqtbg816wbdNoTgCDwpmV1mZdRbvCk88K3kGdHirkmF8vP6GY5ScegrSMpwm5y6vr7PdGHRqj4Rc",
  "key40": "XcXHCyt4siN4tV5QWBbXRWaRfw1rbs4UocjajvNsu5o4fj8Pj6cGZ4kEDWXHrbZpoADGVBsdZLYUNTnR4o6ugJg",
  "key41": "3QxaV1zsraMYSscFE8Y1Bv49rdsmx79FrfgxkyQcw3o2MehchQP84572ggR65wessKCDS46WVwQYZFL8yQ6MKd9J",
  "key42": "4nRxcCSt2GFF6ZGNbx3zmm2nuiC1mcRm5KUnUZQ6mah9iqLruosi6NifcLqTzqhUgC9Th5j8MiSTxjRaW3L5auTh",
  "key43": "3ByqMdvjK7Bgk76gryf1NxUnu5MnyQo5bUqSuu18McXM5LgVWFVmTmHGQUqMrHWFQ9ekfB3xeaNMt84EyFhggTgw",
  "key44": "5AAhb9ahbrtew4wyd3i3Z5GRinx8STNvUZBrSYiiVnADr6DMQQrCbcFBoedUfncRsr6mhcYRZAvtiVthUG5BVWLb",
  "key45": "B2chB93B58Pu4yFcqzG5q2yt5LSwFfmyMbvwppS8Kcfuiy9vDnyT68ZUUTeprPirkFCfJi9BxyPfGLmiG8qPnwC",
  "key46": "5p6aNjrsYnXdNRVrPuwyR7rFBEJCLRHyYwUUnrkXS1XAGtbmssqFDreh4FhbbYwzFVSXGWiS3SMXEQPNsqDaddtE"
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
