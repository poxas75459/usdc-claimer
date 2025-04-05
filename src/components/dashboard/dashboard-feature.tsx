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
    "4ktBaqtaFBDLNKtEXyhqCzXqxwHrpuutfs7ni9bemRUr8BLXVs6pxViR1yPo2nYRqstEz6hYKMDX2tQDvz6SwqHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u3oqAwVB3KQvpTyN9av1bJPgwhDNowPL3KB8UuKNRo4sGeXgKK3EHdbzEazaRCT7p1BptTc7fbpJdqkRBHg9eeJ",
  "key1": "3DepQKeCWurhccNSx4AeWBgxnn2xe96u3FRTcNx6KcUY5Gy4grbRNH8cfoC32rSTvHH6aY1yvnnQLggwcousn2dB",
  "key2": "4jsW3KTYcvXZEqKbNToQdvRgvP2Wg3HwiRoe13brtRQGjez8xRw7dJ3EkYHekPXT2yB68RYUstiYddCPhxBjD42a",
  "key3": "2mmjKCxek8LpWFapYJRsz97o4g99Ukmq3Uvw4FC5VvYkHKHe69c1m2RjwQ7BQC7fwRANqHC2ZTe6rtt2gNyMZhEE",
  "key4": "3F5P3xtmC598HmgYrGtXWEULCNSheTcC5tGnAVAN9h9VQ1KoNeGUtm56KFvCJE6bHiQUywRRKVRyrSbQEcqm917p",
  "key5": "3mW8yCk4U9Z6FozLqpmWsgvSgo6Peoyopaaafo65xJ1cdSVzsoMQMDN3S3R9SXuhkSSd7bF7oxUp5KJHRtDpwyFD",
  "key6": "3nns7AERJZ3MuPaqWDvyNaVjK7Ed2NQYGdrsQTDcrmT4nGFwGG63mWnWFyMVBHTWpSmaXBzdrjCRY42Lj4vyTmaU",
  "key7": "334XgtHhkzMQZqsinvJUMLoWwegBDzCUNnMKiCT9y1nZPmR82gUZudMUM7HBEc7iWfVSaJDMnhp3ka9UpzomgaFz",
  "key8": "2rQcR5J5wS6YAZ97Va9e27kihkUQQFtRGQAzs8HuXKDui3yiQTVeVzLbJXrCsvpwaYLKvqW33nGyDgppbDhPQKRS",
  "key9": "4QN8ahxc85XiCTrpNxtBRiagyS387Xan2ZooV1qzGaTqXzqtQPMvaNvBewTT124UBiyG9nSXjtfP7JxiNudmyYU4",
  "key10": "kTHxJLmaHwhJS7TMifpDY5mEn4TPVCQLBjJXNn7koZmCqAyqoxZstHFSaFG2aascX2UCvEiZnDBQZ8ETDEBLhTq",
  "key11": "q5scZvXbDjxW4Q7x7jhFyp3AwoPYeo7k36igxx63gViSLh71yk9LrbYcma39HTXqqX4XCgeJgjJVw6zdn7rJ8WK",
  "key12": "53TahGEpf4VbKAU1AXUxrrChxeZFacNRAnZKtVVPowA4jyQQB2y3dzQvS2iabXHJ3a414Ck942yPsNEQrCVFsNGe",
  "key13": "4fSE9j8DoS8JBsmtjF2yVhbMV3ygAnq2SabFzHtdCrM3R2Q3kH2s3yuZJLjhwp58pv12TVVjJ5s6oWv2a8p9kPRs",
  "key14": "2hnJX1U1gTV67gRYrmQ4LxmFHmG4MDx2CCJEKk25Gdawn6dZL3LfBrYofDNDgQrLYSyoUxJjmZBRjaswhZEhfZwD",
  "key15": "55NT6twM9QAvhYCsVmEp7EdzjnXsSFTLRATzVc3S94F3yg8BBNvv2AGW49uTqKSVXK2AX1m7n7dkks1mQk3w829v",
  "key16": "5xWHgnoYoveZh7xJDdb3qySSZw4fn3dbSnytXAUWym8KqYhZ7HP9D5SjxifnzUccDDUw1JTERb6krU2LXA7Dwqg3",
  "key17": "2pb9Lv2Kpg2S3tSyo4hWqaLWBKf6b2UtJMZfqMy4PTxreG5TayRvCfor7PPKh4KFNewGyPUoa3Hr3PzJdvd5KGq3",
  "key18": "5pp9NuvMW7DibTiDXaae2AJtWJ7iw7zfd6zz2QGm6NgTL9KE3xut8gbwyWXSLNnnW57gq5mn2WQjDQEVXNi4DtZM",
  "key19": "2jJY99U8unenvovJtbntvYh64yWsfPkw6y8qWUxm7VqKoaVNJfS1Gmoq4hfp95e5RYm4GoEQZWmGqeghTJ53Jg2Z",
  "key20": "3drLynYwETgNYr1hkG57GZA5rLYNW4g3y38b5nDwx6hctQhspoAuwgh3XcgwBtcuDVBxP9Ur2NAo4xADCRaPyfFf",
  "key21": "3wsCrgFHHvwvskUB9KwhLfDYbhjcYKyafncXZwzSeNdckuokmxn3DGZXkWhRANyon4sTwUCUoYsRxxKLpJi6wbpA",
  "key22": "46wt7cTKSEjorvjD4CFYv1qnqAW2VzSvoi3S6Z2HxQp9tjq6QKuwRYehYWBASnHTV1RRpd1weYwkJXhvoJs5rUeH",
  "key23": "4GbRK9B9pQUCkd5xeGWLvufP353AvsV5Dtus9wKuSQZ6o6Y8gFE4VipiE7ATPQDoBb4SDQjZ8CLTCP6GaoSGNaNQ",
  "key24": "2juvSkgU12XYS2nWj1JyPqPJW9WdwZ2ewP2ohQCZFVSfnRR8vUeUTmfBTM6g6xcpGzFEMCWAmWuJwiaV7MHebsyC",
  "key25": "4BrnNXzLTv3rRLcGRo1BzUZ2mYn95PzA6CAT7GC9wtohMPkhWr3r78BSnUsgViGVGLm4JdJvyXWx7zUZs2AyvBAP",
  "key26": "TQXt58kdhR1TM4zq8Psc1BGhM6nUojHyQ7gpZ2kDA3Ug4wvvdTtXdccSNo4ygxUJEV93ijnBTo9csfoHwpYwPAy",
  "key27": "5jH6tCGySvcSuHykNqdLrsqNmK4ukLGqC9MGF6S2q2TqbB74o3hGCkZSA7VymAnnSNCJ4CcickB8PJGrCfzefkbW",
  "key28": "5mJ3BQZpQ4YpP3XBMtEB8kAoFwuXsVtg3e1gnGD4iUMMcp75Vg4zyncLtjajYmyEwscB3YQpmXHJqtYehBFAZ4rM",
  "key29": "5F3waWxEGDV9nQDiDr7FEjMAy6EQU32ep5M9vLFZh7AgGJNPD9FcwynR4k3Bow7wwjuhpE9jJo9u4cfddmnFpKBH",
  "key30": "5fGAb1vG83YEQArrb1BowDQivXTU9PemuzpsgTAstrMzjJdb4EyQxjHdV2e1EvqSwcK9Af8ww2KifAzzg2HSVaPv",
  "key31": "3oxsNhpBWPNcRonyhrWeUGzGFNFQVnQLAm3H6Z8PUKvifjHTmBknHpm7e1fWhLk8ghDcySmxe37phsBWmo89UXCw",
  "key32": "ndDE6icyhuHFCSz15K2Ejk6f53Tc2vwEdmDnCUTsnYgLXeoPSPKJsTuDaDk92qHkWiUggiCFHMzuDVsynPGkAJw",
  "key33": "4MN4X1y64Hd8towU4WSBBQnQJgizLHkUzvqhQ49iYMhDuh71D8mgFgEEF3K7XZAhaQHvS5qgGM8mcVhPbyVxpdDY",
  "key34": "57U18Puzr9m3k4DEZgGEJ9F1ekm55fQ24NEh6qgiorNYK53xc4tUWtgdFUeC5NjCpmuVq6f1C9kzU7ctLZGn8qKx",
  "key35": "63p7SaQhtFtrtjZoHKaGtnPNFByJCsrYKyXeuXsmQyQFWFKR9oeA5hjzxLCVmxEUKVBy9Vr5LfjJDm6hQcMFHE4D",
  "key36": "5VdBeMrrcVsQemwTCpLwtLxPV1pSqN8uZBSXj8pvpD7GVKM4JBtxDU6SMDVNdjJCC2TL96XUaWQxrF6d3HAmRisV",
  "key37": "5rBZeUwAXxMThR9Nbw66vTeXQhHNNQWZ9xpx7HAK6R1yCwoD297q88JoNbQzXSMnbEFJgLzMtpKd6ArExUYWqZyf",
  "key38": "4XaddR1C4bnG4pxrPhhzFcE2LHmxhjPfu1BRYtSN5VwVc6DmmqQimemvHVYPmyaYrDSPAhU1MscE6dUEBSZPVLTA",
  "key39": "67hLV7YueJfxQW3hEfLTz4KdHnVhisGGEHQEShnFbHLSkg44c3cUigHrocN7ghwDQqFH1p5EVfpgN53HYNPVcY4k",
  "key40": "5WZixGNR1BwTrKHw947mVtWvpjhWUj4LHeAxXexZtAprenYiMaNonoUwkH2jfu6n3ZniHicvNCMEeBd5xGJdzeZQ",
  "key41": "4D8nj9x9cymsZWRZXKrbjyCp9siTNxVDZoob6C6GNZnxk5DknQpKwsVB6jt6HywpsHPxgLwJJP8V5pqFxJeo3hr5",
  "key42": "486tbb8SPV9dPuTApUino2oFfoJcN5nPjbuT2Tn5agohzPH9KUZrxWbS6KfLKNerwXFfuut8AD3QCdziAnZLnqk",
  "key43": "4LTHpJMtu4NfXRrZ6LtPTUXQg87y2mzyE1rPShRUL6Are1Ks63hk4RvMjRXv6Q1oykhnXqE5VrmjHnsTxDnwEmzc",
  "key44": "5ScKgbYrpiDuYWKP62UeZTJDsJmgRWG1LveBxV19iFPMDs8HSdX7upkRBwisYzxdFNcjRZCDkwGGzKqNjhzyomeQ",
  "key45": "5Rs41F7JAYjSvSd9h5iPTKXGauJQrPk35g9gmXZUerTbBX9jvVYXSPSQ1SbyhpfTqprToFtYe8yGAGyY3MpUskJN"
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
