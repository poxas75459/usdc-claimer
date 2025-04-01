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
    "2cyQx6tbts74bxSCH8qmHpxtSRdNUPUteVvXbvTL2WgknS8aAwf41mUwpU7v2d9syZxj4EAD2RCFaURnUxSrd4aB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ocsrMZYDwuxhreH9dQXWf3Fet5PBXRUwGyvpnAkKuD1tr6W8bjKC78527CL1Z1sa735SbHSgbPhnPiz3yp4ThjN",
  "key1": "34HJKQk36z12S1uJnhBgXDkeHUSGaEkbYYMGQgRkpHpU6mrqHPAAbkV69yvufHaeRcSxsDH8TzXAiotvm19PxYb",
  "key2": "4otvixpcVZRGy3bc5bM2m2FL5sqQfZhxMtxSqHhbsSLuoPwR1U2PLrZNWGh4x7Kuht7Q5oxC9vbfrHdzTmUqhHHQ",
  "key3": "A3pkF3cGR2Zfp774ZFCVtyvNYdh6s5wZ9hwPdXyyMkxkBBx4NVxTZ38mWQnC6CYuerPWcFjYcNn76DrXn6o7vjW",
  "key4": "5SSkGHAUaG5nD8ybLr7MyhfHRaRMXRsG5sjFHrJ63sEJNBM6kP8sSZSowQRi3Y6Mqp2Six3zGPFtJvUXMTkcHH5L",
  "key5": "4mtudwCfFNqrUPzn4kZqZ5jruVJBftJpn9aiX3dR3f8gxGySTXCBEy1oTbviGC6gn4KEXgKBczKWjk2ad5eWCSFU",
  "key6": "2RkJpWMDZJgLCbZNJEiPaGybVzR8YngVmBLPgfZ2ujg9aAtN6taTZR5rso29yzqYj17oAbUXFDTCkkkbYNQs6YG3",
  "key7": "3WNd42scHXJeYKWYjNs7suW7Ykpjz7MPT5A6ZV3sQfL32s7UmwvApCQhPKvRdYD5JkuzAfkufmDPQvTFeDmnLQen",
  "key8": "3cLEA1CNLkUe5xCQVyPKn2TyzxFJoArKSKa4NVFRxUM5cYSWVt4JGzgXSyLkAvoWwC8Zv7G7L7T4zVk1LBBdmUGA",
  "key9": "2aCJvcHEkhWEXbeYRCwPu19RPCXDNDMQMsGuCRnWKvZfufEs1WVDhxXNFEsvdLxhqTTGziWqsoWNCgpcSWaoG7Sx",
  "key10": "5ADmJheakwfgxaBRfWHTndP7kcqAaWUY3r2t6gUrMn7dVSv38jq5Zt2pSqdZrwGVxmWkkfvjPnZyfWgDTHW6LVDB",
  "key11": "XjhRGnmpsBoERhvxh88wquGrYFEtc5bjJW5jxVKMqQmdziyoPNq326pLuFaPDymuAhrX5JT7DmmmUNxdPRR3yD3",
  "key12": "4yRCDeoUD9dPmASaj9orWZKjXJRtfr2tUM3S44v1EdtsbVaMAydT8efuZHCRCvhQH2DSfKxZSg3UbX449zuEGsd",
  "key13": "5S6eHJuFEa3z1eVGkZnsDEXatetGqfRwNhx5xPHRyhjG2cCHiHUwBaX3wGyLcKtUAHZJWFXz7r6FsdRaJHACqAPf",
  "key14": "2GTG5Srowu3AaqUgvXAbEGFvynnTrDDu34rCXS4Rgs6LU7cqEcwfPfuqyCiRcg8NR7n9Hcyf13JdcK7YHL2c5iP7",
  "key15": "4Lv1GDvnUJshUq8ETuXJ44mSov2GphHYqn2G7FPGopWUAqiFXRPxrxAjEpCMZcPk59ULNoXfXPYuzyG8uy15EFbR",
  "key16": "2PR4rAzjR7Rj1JY9FGQaZrxWk3fvLKYyYRpGXwra7YAarPcbVcXbffd73txXFRAoXDXSKT6yFEMeADJeAiLguE32",
  "key17": "2UnqFV4ZcKjQ1qPmWzH3cawEj91QS37Z8zT5V6SzBhJSmaG6CJBDfWND6hyTbKe4nFKB6FPLU3sgnPPhcBi8vs61",
  "key18": "QC7gtfhCG5jvFwwEYcdauWf5aowVhCWQkqcyDYs2EZodCDrGQqCAGKzYkLnBLQJG6BMrii8Ycs3g9MZFQ1yEc9h",
  "key19": "a2j4DEyAhpxrthUgB6T227L66iHr6RuHgSBY4fFri6Ayz5tc3TcE1S8T2vu4NXitjKsRXhYEqCd9SaarcD7ETXG",
  "key20": "2hsE2B5NPiaPNm5cwasDKsyJ9iCzsaGnoteVq5ekzgA5pbueKCiwJbstt7eMH2ya6JdL79rc47zLVcqEHEFEiYJd",
  "key21": "i6rSHXUpqozhaHu9nRkhbPXcD7Zy3UHGY4wptj1W6465Y2E8VHPuPyM5LD57JEMRyamcBKwerXeGfWvWyCtLa9H",
  "key22": "64Wic8UJfLWMui2QcQvVPEuus9CcbNeH3b96mf33awKnBQ3K29zAZw213PqYVqEMhF2CDdP8G4jeCAMfhYcXr5WW",
  "key23": "4xZBpjVVdSsqSSbBh2oV7yoaJRC5vB4MfWEFrmH6YM8H9JWGswjt3vBFrTWsLUZDiKpKM3UR819mesaDK2gKh5Sc",
  "key24": "23522f79pmnmJegVhKxnvWD96NmQ8m5zBhoT6jU9oTsJe5Y2TbUrAsbNnYMxLZSvJk5cycYoD17YktpkPhe6qXzX",
  "key25": "4awdFQayPhLypWGUbJJ8mN8TwCdEiJwk9VG2t2nDyooiSnFHuogmweU3s4aGjfKDXNX7sMwsUG6mYK5AEQPGCp2y",
  "key26": "5ytshQFWxjNnf7LXRowwdKjUv9ixDCBziTSRicYFW7USyhDopqTaF8bpEapQMpkcCqCEtJcAJikNQAEj1d2htNv4",
  "key27": "fP92iX8XZcM2P4ZopnDgWRin59jB62P1T7QfgvA6HUsxWdJrptqeo3EzYzYVCqGehXJuTh5mydK8QXuJ5acCPPF",
  "key28": "MFQ5tXfHs5bffTEgybrSahJh2GSqDBUr2YUrM3QruMSXo5cCKc6aMQSqp8ikv5TuA6YJkYyBWQ5UMh35EWreEaD",
  "key29": "2ZydxuC6oyqvSm7GFjc1gSLT7C5zNao6uJr3XpV92ozuRHyZvdFTre1ofF4Cd1gfd2mxXD39J39ovWfqXRf7Dpos",
  "key30": "52AUGyxPvpzDbJmFHCJHxBRqf2dj1XKF7toXLUJ9psihQVqXCzgLDf4EzQMFNxnTemd8QGvfFbUX2L14TT3xz8W9",
  "key31": "4LxnSL42RKvYYH21x3uNpYzkiqzXTYPrabFBYt1M6daEiYbHCxZ4JTyLriG5ggJFsQQTwF6wd7Lwq5jbeJxhge3i",
  "key32": "5wGdQBB7NWyiSJPsLLoL17JefSibH4M9pcRvf5KbbZELUnw2NAZAMp9iNd4UFvwLvrqGuE6tEwmQ3HXEPSgBhK1X",
  "key33": "452YnuQUaE68W1Ehjjq1mZymFXDhky3cSwUpjZhN4uc32q8Xs6rrQXVourhLdoY8L5VheJSTJ96A5qLANx979Jm2",
  "key34": "TBPbN94s9QZG2H8mQtnTSYJf6y6QM9KyvhYh84kpbnqfLCkmo88uPUP6YzC7muNLY3J3Did5c2BrgkPfrJpaCz4",
  "key35": "3RPc6yc81j9Pba3ybN1erBCewimjG6r31Ti45RFd5XoLFV757YwgTsKhzTXg3GNuzjz51kmu47BXCiD7P28H71TX",
  "key36": "34uzUQLRVEKvusg4WatCTof5mZ3Sv8YpwvHH16UxoAEfPbazNNxHPLvqRzKMCHegLm3ptqFqQL8RowyPoekGnWhf",
  "key37": "3humBXRJPkVcuByXjt9EpNvTowzY3cXFBnMmtphASehLBumye7zy9o3KHHKfiJ1wy7QmyeJFbwmwv1Zjftx48urk",
  "key38": "3KPviERM29vh7YX8aWo1oJssZYR1KDGXVv2iHKxY7zSQr5u1nr68FujshdFFGm1BcAi99Zy8suxbo4e81jntEBh7",
  "key39": "2g1bVquVcq5uP4NUYe1nC1PXNaeq8iDAGfkxeo5zqzxhsd6nBd3gGi7JvxbHEhMJFPvP9y5T4Ka9cLtEKR2U2YML",
  "key40": "3aBdcr4bh4maxr6nN8yQFLrHerF2c6rAUcXv143Xw7qV2mSbe6BTLb1xefjzKobdRyR9ByF57foFjBsEpfQhQ7sZ",
  "key41": "4viTbfpeAWzvV65UYGCvCsrAr92uXWtHcsmZSjNeHF15FZRd9iAxz3zHns6ycqVpKkwrvt42G5jRtYkC276NZGiJ",
  "key42": "3H6hTHzJwt6yuEs7AVHRztV3P8DGbsbYz3rL8t6KRGfiFbVkmfcifQgrDswkcmEEgjygfBYEhD3ZsGEcvnixNRmV",
  "key43": "3UoDn6YzAawhjRAKd6KSkKA4zHjvYwKg3jM7JzdBnvJNdaY6J3SCFFyHwuFQFHjirJeFKnUqQiTjHmLCuSnD8KtZ",
  "key44": "4DENESvy95HARnr6VwsH68a5Qr6UYKtHAmA5seZU7wA9gchJvUytecDwcyH7hgRHG8Xj5Z4EuXDZqCqQSuNhzpCK",
  "key45": "4CYB2nQXvU3xqCxCRNp2fXbDxenf4yj2akRW9PpASDez2a94eSSLYzoDNjGyDXtUui4q6YJvUUNUrqmFdquaYQDB",
  "key46": "4WeZBSv4jmi7tyLVcFDUrS6fMEjbYDqTBEnbG1EUsFMHZwNFmHoGKPmfQWC7Y4byNG4p8CEiui6MP81vtBfVxqbQ",
  "key47": "3cs5hLBZdn6L9uyPz2YVT86bR9P5NbPvDPQgnQD6UJiBLkALDLKHMECQf6JwzziYvHzJmkrjYJeA7sMS8FVFuc3G"
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
