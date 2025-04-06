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
    "MBwd9qPFHkrHRCSTfrk7wc2fJAGi9RT5DoCuS2C5iJ8SbF7TZhHH4XLneCzUiSfYhArttWMJaAY6nrNxQXexKGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J84YmwJRjiD64jUDqFo7NMTjzu69DfkwK9gWJTbgSd3TjocQimiX6xQ1iGE1XEhCGVxVbMHKDMA7PmxDeYorunV",
  "key1": "5U6FqddPPiZUQEevD4895HQKgFNZyFTvz5hBfJkf354yRD7RRcvhHDJoFRBgnVvH7oYbWFagQzdoMGizoqsw2PAP",
  "key2": "552SszPomvKHc6yMQotVSwS3SPHmS94Jh294CBPX2CLNf7b9jX2B44CD65aDw8TibJmLTMVvLRKTD4nJf77sVvtV",
  "key3": "4xYd7Fa3bbVQGPwpgCE4c5C18cXqTEtqBpJNyxJdDUxxRMwYR8XcYRQMQuzBWaeYjzWNrsbaXtsidSyR8NvzmymD",
  "key4": "64LTnCk4JB2dFTjvB3yy8DcMasH5exHDoxbVMYUqwxYVSRroztxVTHZY9E4Pgo2G5h5rj6i5LUZUTmsteAzZkXDx",
  "key5": "5GDsd1nWZrBoqUNkwCqJPj5J57hrHdLTXDmnSEsBN1pjQ9D31jdxvz3qBijMk5duCVUtWgB1tNsK9CfW6qfhyk3o",
  "key6": "2NyWYjpRVEKU5QVtsNEw38dsKE5YfPeFdhUmGUmL8oVmBKTGeiHp7rZ9xZDVDpXvte5z57HDNJnauZDczCEVLfqt",
  "key7": "5Lxqt2hmZtfUHfVr84hnXHjdnUBy2SgcLVjPJscAm4iPjbUQQBEwmJ4EKjHwziVAFjaNgsFnjvZ6mxyzTs7H79Q7",
  "key8": "MiRoJzxq9JGzFsNtbgWtVNtSyhUvJgyL6Zm5Ei48MLtUiKuR1HhwAFk1J9z2hNWq6wtvbfiyJhwvNxjTMY3D4ii",
  "key9": "Du5P2gsJVCyaRU817cvs1vugCzdiTdG4xagVjCxKriqEQBAfRdBnagpY6gZGn5dUcVeN7b8Zm3JiKfssT84DquJ",
  "key10": "2N74ABbBXP1v4ZAha6nKWY1SdioatV5xG3Ga56Ng49W59ub8pjGfzjqdSNjreg79Y24BcCh2f1C4ANa4LNmna65X",
  "key11": "73kuBvKbbsqvCQLzBjPK8yVuEbjBM9UWvWUEmzaSiU98S8ssaUgAFYMJWAaoPGr7gZ6SgrTgvE2QAUkJKiSRBkR",
  "key12": "3kUYDx1k2bd8dPKvLN7fkF9NtUDbyEiNshanvS1kxzkm9zkYyjNEsCmCq69Xx6Geqy5W7AGmJQPzY6CMxomKaCZK",
  "key13": "3NEWGuVgYXe1JoiYQ6kMUPZYoSNrVXLwmnjiA26YjUUhPKTDhzGgJfCWeYsfajGvrmz2tWpG7LNZxEPNUMMPksi8",
  "key14": "5N6h1dtP1is3X47Q1ugQr6rUH4tgV361GpxLTk4TqJRqGNn49eZjMc1TCyCgoDBmP8ZoY1WCCUQtDaUS7gK5vyFo",
  "key15": "4kwB64r8JTEXyyfi2hGSc8H4yLQiAPfpxBpRTtSKZuYCtcHCHas2hdmxkx4thoKscqLahnuCx9G5NSMetu2vT4Me",
  "key16": "2QELR1duFc1LfYqMCpM7nXVK9EpEePTW28i4f3Fz7eqLGRwdkQLq9WvpK2ahijQXhPzBBjjsiV8ineX95EJL2457",
  "key17": "3kEPQBqXTrW7feNV65Q8Pcx3PEzjXmFCvcJkUgJXZxXf9xgzDjZafpQeFiwDHshu88KkdAkWgDL6qFWUWeL7vwrZ",
  "key18": "2YW3MGYy7guFUiRw163xyNSHx3f8oR6UnEvgmxaDgvt9CQrLWxtMP58YcRL4uThVrNQjzjU9rBbD8gVG6CuJdzKR",
  "key19": "53Cm6fUbtWsibdeszwssfEENVyhgkfWvsrW3pHqZXEmuLgNGwm81qgHVwcp7tSp55z3NQYqS8iYVMN2PgvMG69kV",
  "key20": "5XMr6Q58bT6cYcegUTvs3e4weTXtyhfvLnjsCX9rdKYWFd252fV7rXcbAXqLbZFYmKnnmr5cJ2oXADF2F29DbC3C",
  "key21": "3gBoghZEt41oTJs5HvEnQYFPqDZXRZK8oo4ZVfd8wMKa1daJYCiwgDzi1AK5gSc66mHCgRLcsHYGJqfB2joQ4MQc",
  "key22": "4BWhsF66kSMPKgGtiNxji52kbNYRJF9Lg4vZ42udXaNJRWASpsDd3euxvxt8WDBBXEGSJ9MA94N3Liygs1CJQu6Q",
  "key23": "3Lvi72FbKLyWfB1qsvoXHaxBGwEYrrodmRWQDKikziGCFndhtxSKaGMG4rUNLmx22VhB6Zi4geNJbKMCgTrGsuCM",
  "key24": "2UHkkxZ1NRPhZTSyopxvaRyG3XQohueWSApPXCPNgscrcn8WwkrCHa1HFqq41Dm5f4UNDvZfoHipXzG7nrcDUaCn",
  "key25": "5f2iyp1tEZkWcJXVFtkZsGk1MLakmrH1btmwrVBwnkBmz2RALGrBKpHfBwGGZcohtt6gPK7h4SVDdSdyBeUSFLK4",
  "key26": "4sNK3HD4pngar3VbYBn8AZ5HWE7mLozc9VwCe32iFnreh2qrnc4SjjDs31La7k17DEpvbx9hv5CHuUHQk91tfzHP",
  "key27": "5n1Vd5uzAFdRa3BKz1w9Z2S1ZKsaxcn7CPWXK3arFoauhDRzrAQ1kJXZmyodEm776Ng7vFnGtxJWDAXsDZP27qVG",
  "key28": "5MrWPot2CpXtk8T2pQayyt4cZgSHBqhpHni5EXmThEH98j7g6pB9oeBk5Hh7yfzYiQkTbxLCR9jisKpBonHMmLr9",
  "key29": "V8D9Nor6W5nrh33KPAhxoAiynvBVCpWpgJXhCp1VZy5SpqergbTJGc1YQcBCL61xr3xH4SJS1dvpvUvkRGrEgMi",
  "key30": "5ivqcetyE5K2ikJhiykbrF3Wc14Uqgsn6fNZfN5aD7m5BVYxRdx4Z3Tksu9wbamtbEkEQurJGeZm6Vo9YQN3peiD",
  "key31": "TaWhfmqypDnRRGnsnKLow1ENkeTdrYY3EiVViNj7MHJ8bCwZAf4q2smov6xSTEstTGjxmS4jxhMBoPnPRssnigy",
  "key32": "2a7MbhywuWw7X6RrYuXRtazKazDEfJ2tMvs9BxGkddyd5mhhEte9MMBDDZqsxkGnVrSoL6Y55tYhi3cCyrDyCAEy",
  "key33": "5kqe56BsnkxLs94nMzTQmFXXS2fPBmResZB464CsAhyc46j91xVdD56fetSanKA8cqjJRVCZoWd7bHCVTa7WgAgz",
  "key34": "67cCQ7YAVvm6bZL9Ci6PZwd7JqnkrARi2G9Mp51kvXKzzXWHSEQbrYnJc9feBS4SfcNZdci29WCoFeX1nomCZW42",
  "key35": "23TfpzRHFZr7KF7R9La5XtPzMAsjWGAVZfcS4KYeGG227rCE3szbrZRZTsLaZcYysaYYSLMVs1sqdYXECykrbQds",
  "key36": "m9dVxK7UNyCuVXW3Eqbd14XWHhPHc7UU4DjoH8qREdN2kBH5BwPnUAB3STfkRgXGCMDVSS1LXNKNJf8wfY5JVcj",
  "key37": "4LH5LZzkfwx87rrGNoUFZMzdvDbUU4v6Q9MEfEzcKDr1apxqdHFiyMnhv9J5ejhakc3j9rPtwZd5MUZXZAUEW6qD",
  "key38": "4raSFjwzivj7Wfw5WrWtE2wsr4mUemijxNWAeqwzYeuuP5Yz57kJuRbDEWJAFjb5MiQQ6fAcX56LYn6wqyEpxFRs",
  "key39": "41Ed6HQCqMWYqYJ1435i8jmkLjVHrP3miLE5Yo2VZ1k5mvgRbvh47fuPomjW5s1Y6WVfa9AzyrV15caBxgr3Mpnv",
  "key40": "3catmigJ8TnDyfx9qLyQX8YUE71HCihsugJ85ERAsLANy1i8u5HNoKUu1tjF9o74vjqq5KLo1dsqtYqLzMfrfatw",
  "key41": "2zKz8Tna9QbxwgyziRqR1Hi4RbRvFoKQ9v6AAVG3ctzJzUtyZjhUXznru1yg3ySjcKjM4GpS4H9mskfVotpSoPPc",
  "key42": "53EvAnEcs7jHvYu9QoKg73nCi6Vwze8PLg3bMztE9DmzhEwEatcGSXNTsEw1Htgac2dsb3gPH3soCa9pZpHJBF3D",
  "key43": "3UWN8cokTS5RdPMyCa38cqKbXTPXkN1aPJpqVLxsbgrwWXLRQ9Fsh9a1qAcMwPaXjDQXCFArtiVPYVkNgRD5fF5E",
  "key44": "2SpFDiNzT2W7gVxVYAoYRUwdseBkNWGtfJVu7E5XWQN6KX26zspDmhe6QXJPnMUb8aoznJEiGEXMMgwCtFkhX9nd"
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
