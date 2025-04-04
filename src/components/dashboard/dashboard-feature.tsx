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
    "2CG1nkb8XUmHdAxbRt1XDujkizrpH3cvF6Chxt4zL3WjqhZSa2FWjm3E5xJFF2DMLFr4YnuW2gzWToaK2H5c2qGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9gDLEKAr4j67r7SP2jUNGoyYE4QDeTQtS2pkJYvFd4W7ZUbMC1WPTNaFZCtV5RZat5FVKheoSCvBDq3xLSnWTtz",
  "key1": "27FyuTeaipxvL99j4ACHL5HdfJbvVmpBwLnM6DR6GdpmPT5vBNXgmJPKhT2WTiaAXXoBA3PCPFpPCbDu81MgdiTL",
  "key2": "35aFu3UustomeBadY11iBEqyBuASeUuPSKUhU65zx2dUr8vpa3j7foKLytoTkeUTpwUb8MF5RWTuqFepkGWpee5Z",
  "key3": "3ecZAQ8FHjUCX49HCGzzrgZdf1rAMG1ViN3dr9a9ecVN38tnukdGKsSqrA8u76wJWqmYgZjBGFjXGd3NtFwLn4Q8",
  "key4": "5o9WvEp6opZT2Cq6QacUwJ5xnuHhrf3Y2MufkRb9gfokWpjghyF4Tbx4qKrTpMmxteDDkezwWgzf6FzQFUagCMFF",
  "key5": "4yjxpMCPBjLioZZU5BXjCH4yPNhahHfb16qMh4ychaCSvAhc1bmBU8oMADxxndtF6PbErmYEcPYfSkbmSHzCBUw4",
  "key6": "4YEpY9yMN5s2RKxx4Z8mJgGUGLvg1HnAimmRvzYrvwvmEx1pERXySwVRJCRcfj8QS9b9FhzMoxU3cqt58WVr2cn5",
  "key7": "2THMEY7mKzGahCR2TD27WCwkxt4JztEFaD6Q2JXgZ3jdjGsJb8fakVLJL899jaf6cZNEMcjRgxhnSVYkfvXYepVq",
  "key8": "5A6UT63SasGay2kNKPD6mSLs3r37mcJck8rTeauyFx4tf9PWGtgScBcFWhShntq65LJHg3vDUmUZFa2g1fnMdX2w",
  "key9": "32FKrmQB1YnuiGqiR7FZMW4cae1ck6HNZ9MUVsbQbpNjegHEB6zTNoBb9LFcMW6Bk2dW529eMJRrt9KdYfZhh6up",
  "key10": "2KZmBrDn8YzBDrbKcRwUT4SzkbKkxFSE6VjnUmZWhtJdoKxqnvqj1EAhUv6z32cqEE8vAkv819Djs7EyMnWUWCsV",
  "key11": "41Qe5xvNTbrceYQMTt6XmM5WbyQHhgnqLuaKRhgaBgJ8CbLrqkmedmYwUwP822ycJACJ9XBqo5GcMrUEmjeJeMv",
  "key12": "3AMRR3jFeEodTeuffsHWrz2U3EgH3oLdAPMigV3TQDAS2dBvu269fy2BMGmf5wwWgDSA2ugnfKB6M8D6RZ9nRHBu",
  "key13": "3nHJJJKKqn4bb1Sdhcppc8EdfUz8Dy92jRB1hccTxXr4jPs99Htx1a8LQd34QLDePTbqdsSoWSrDatF5H5DjDGzR",
  "key14": "46dQukB3SbANxzu3hMHoZF2qLEoC5BRQQmCTmKbSc8raRvJGV9TUcrXpd4JZ7hUFdjEVkrvrtLnUPU3qUHjLQpKo",
  "key15": "32Z8pnewyHkpXPZQtEZ6bPLKYHpgAjBej5V6e6H9aGiR4vwyUwojvmcXyDQcPmfWCdxXxRZFK1r3w492toAUthsY",
  "key16": "3bjh8fnsKD2cHsujK7jsZWMvnhZvxyJRcZg4t9vo9iaCKuZdyH5NxGTPK2w7qRZdbNnMB3U4DZHZxfEC1yuysKQb",
  "key17": "2ALvWNfa9FReidt1YZKsexHpmf2Zrw4reKWZdHwU56faVyWBLAPZ4voS5RQUVRuWxLWSLQm9JHJUVcxopn9awBDF",
  "key18": "4tTpkGNwRHDcuHjCpLN6KD4jiqqjJR2xD4H8NWqpJEtziVoiQizsJy7K8RvuLYkYVRaX5QTmf2WmYQCuZ3uNnunc",
  "key19": "wvSEvZ6twQFy6WDfz8kYs4BpH3coyyRdn8oCk8oGtZ9DZznphCjLNaDjQxDWrispr86UPDzj5sJGrs6hYYxBpbs",
  "key20": "5CCsQofVK8XVUbsRaFzo8NW4V3E9TMwCm6wfbkVtjNxeSfQP5VV92PMU8WDVG3zkVVHSFQ8YqnaKJpWWTQiu83zQ",
  "key21": "4Q4g5BLhD9apY36aFyMc5DA5UuHUV8R1psfpQzENqmxFDPzGMm7FJvdRuwBs8rdVfeXD5FsRDxG94JquzYw6CgY1",
  "key22": "3GavMWJ3B2o5e3wuWRD4wqHA1PxZUCWguZZ6xPj6TiKA8JRmbnCFjeiu8Vw34fwddz3benkuiaun9TXb5LYYNort",
  "key23": "2cvvk1Xm9FXeQ4QVSgvoWFD2yqhqgH9UjC6E9sAy918eQYS6CVCk75cqoHW4DMg8m5y6xRijhWgq1NEeoFR2LyYq",
  "key24": "3U14GmBpEWMp3QobpvYqs14F1eyJUsnLtvfYepwJyQgkjEfae7yRUH3gatrVXQo6FsCqRoQX7U5nFkk898DY1BGZ",
  "key25": "ozi8L5ZUHVeebFRyaEZqo8wkyPZ2yGNjMxq5G4rCd2QLRWno3keqvDewWXcjLx3GGm562JYU4ZCjoLRdNNDuXhU",
  "key26": "miLUzFyDqxtp1GR4eaJitxkYwvP2hCeMGurMwTjVfbj1eZKqwPMpiETy2ZMBDUZ9SFKYwh1GqEd1b5FW3ExUqSJ",
  "key27": "2tTiPA8He884p3WEH2dhTorsPtNNJ3Q797BSTe73EBvXBLSoGfFzhDwbhyETn43Z3TQfiQ6Caq9jyT6qH4uk3j9b",
  "key28": "3vHNKPzcWZEd8cTW3yJPJLyeAoi9JT8nTQXrtyG5gPYs4dJx1KzHMC54EqbzEHpiK51i39JAuV6LmkQad4nvdexb",
  "key29": "5887nG2QsFKRZzY4rpiJrrrk9WktvCnZVAbVfZex7LbPGobiAJs8zJScNpHnkcPB7TftMPyapNZhwBFV7ccqzoac",
  "key30": "2fNwe46oWSMaL8F9FXMWqWdvg1GQSmaEXHFjicM8zTtaffUXsjP9hCM7pyGBwKnjCcwhCVgWt9bhnm5cRXBvUwrF",
  "key31": "4Ggq3TY6bN4coUxeuwq6nkaCBBRcYYKRg2FcDC6rz8c4Ndv248K9XATkNRFBox5AgHUKYHrY3euiGt4D8XMc3cfA",
  "key32": "5zXcG3YpZb6fPpgjLj7xMURC7Jqrd3zbhwH9krhsTCKEZa1dkU4L2Y4QZCeLxoGUVUTN8Btpfz5mDRY7TfcX3gAH",
  "key33": "4mKAQjAJm5dZnUBb8uvKoYj4EHefcSkET6u2s9hwVaRuYB8XAZpyQazgy6pwcWEb5ZDSYFLPjR3Sea4gWQ9fL3wd",
  "key34": "2258NqarQyiwdcRLrZbSVwEVLaQoiX1XcgLTJAJRDa4uWZqBBGYZKxHNmT9HTMwdTFfJiGyVU8JxbrKXCsQEhMdA",
  "key35": "5hCrJD6zgjeGEDZkMwzCyFpbmPhJNUq4sEDkBYb45cDshD3ZeCk4zvZ3MVwrEogyiRxNVHAuN5fTqBzRornS7cEY",
  "key36": "ACkzjkdNPTbcxuQD35qW5A3UKcTyiYhbqSJ3CJYvA8zyck6icpiJKu1JdieYvBE6CMNdscLLbC2XW4xH6dAy1ed",
  "key37": "2RvqsmA24bBCZdGJme9GrBNMMvVWbCCfMWpnuFcRhuqxjEh7Q1wHsazr9uX7XiaW65sMEXGPJUyYnMXF2NLQmThy",
  "key38": "3FVn8dhFjyyADXoF1ZYHxFFcUobAH1a4LgzkzdUnbtaf2K93pHkiV3kZDdi7c3UNNSJ5vYTYB456vKqeTs1pKSEG"
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
