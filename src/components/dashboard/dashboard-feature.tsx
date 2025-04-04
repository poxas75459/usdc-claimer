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
    "41J1sW6VkDyEfBi7z1xzbSAwrJRWFDXBaEvKFicaMhDTj2DSMnbt8qNPNt5SDrQfq5jeZmx9ghgC3dqGV2HpHwvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pT1y1TmNG2zUtX3qDTa75yJ9YZg98zBsvYfCSeBmfyPpE6AVqryRif1ZsWJ36LfseffBR28gXF8u59o4sLXhhyR",
  "key1": "59J6sQwbGqAAvsNNkfBVjYwMzxULpjxxr12rENy6DBCi3RCPdMjZoyfBXSvQoBwRYqMhR2ECvWgCAAVitCjYUksW",
  "key2": "4hPB85FF4cvPry67G2nGoA1JtZBU3PkR3EijdVaVyMT5u3gQ9Jtyb7qjUB8523zAmEt43vWUwGPxGptthanDftnd",
  "key3": "5dX39ZZAcwKHq3tEFduGPdB49MgucVvxf5N33iJPiwgUZUGZna7L2213CTvxiq3MYrKVPZDVPsNxMdkRj4R4e6Ax",
  "key4": "3SreM4bdyJCFgfA9QLSJty5VWjwAcALoWU6cHLs6L9eeLNJ79RKU8dEiekmFj9Z5cHjmS5p3Lq2AHJ2zfuQdvJD7",
  "key5": "5qjLt2WSHXU7PzTYrEr5ryEdir9DMTP6Y9bQmVQYWZwqGPtbW8hFZy2hHoKGDud9TmK85NESTrUwQ9o4yrentNTP",
  "key6": "3yAMPN1z2YJXzJ7MkvSQ3WiHW2HuEYP17iSYz8yhyVrsdRViEskbJst8zfqW13Xcxd1pWJmYKVXr2upEyUqUgJN6",
  "key7": "72gZhmnvLB6edi8trsJXZ5NLC1SAzsEvQP6K7Wp8R6TvBJREBX77wT4siucgUMFtj237qkQtuZEf7pakT3qLBTH",
  "key8": "9TVzFtb3njpH3GBZ2n4cmqAnFPu33cgzbqiZ4mYPeUwDPJoT6ckMv86sPrys7DxAzFKn96Gxv5smGTzru2HB6mr",
  "key9": "2TfXHmztbR4rqEWnJH9XkUbK4h65HM7fr4UwTfp2QL4kXKwFJAXQ7snJtmsMbiMNSbvnccQWrez6nGtE3QvvugLC",
  "key10": "4AR2XrCJwEwxadQY5r9pX5RRAu7grCKMaAcFb2zrxRkbnxht8iTrP2JAgthGsGYEc7MYkoXUT2fADs6iWULEPbPW",
  "key11": "4Bk3NgtyFuUY4evCv4A3W6WPKp6fGDrC8h2Ju9tNhQitCfb7Ngr6h5KbmeXt3kVsu66msAWRMt5egEotLbiVJXhR",
  "key12": "3KARCPEffBcdCTNadqrqhjmMicVkaV7BRLXiq7TqyemZxwSUUCdTEUL5RkR1wMA9rZ8vSUH8KrdsQgvuVnB93msM",
  "key13": "3u7vSfStQSif4yXTxiMiGjf8xqudSXq9pPrHEpZpacUCcgfYBJ8iqY4nJdJKJDnG62dLyZniRNZ5U1NpQLNUXxz",
  "key14": "2KXsMhgYqEwvHF976AY4mn5rGoqqTMvNZ29aCxBFjwbwopvpneWat9d5HrdjSiEAGsKtoC4b1AYYvshEQ1CgvnJU",
  "key15": "61CpJr4TW2TVFPyjHumPfY6QFTchRiBSMwptMAEmxyRs2d5YhQyYAyndyBYReorLWyzkS6TgP8m92GdiJXjzpeD7",
  "key16": "5ydGYGar1Jt8TqA7g1sFyvWBBjxNK71VGJcHHBZ8f3UuLr733MDJUNxeNJcwMrKF34383kr53mt5NWDENs5Cpd1S",
  "key17": "5w2RNuggsVocJa7WQrqdx3x1kDyvU29qtF2Me7vYjRsJMjDYM6NMYFGkeDSKFLX75JEsBj6bDrZjwqoCjgomtSZL",
  "key18": "2NuUPfmzYxpJmBeVtqugScUu5L1zmgxktPYPpnRFdnZW6BBPknXzDpUToKuKrMYVKYXhG2qgZrQm9dVhTrMTp5cF",
  "key19": "2ADdbc5gPMcnrZxNkWP3s96sK4EHHa4P4p3gascvikarjNL14txUUUoUovE3fQ8pHh1zYv65RnN33DsNSScFvCYu",
  "key20": "2wu9AEE2UFvhuVTnVFGXVGgsDTJjccXPfpop8h7DGcX8raAnUMpCeQ2SoiiBTugxwi7R5TPcYvtLF4LXKR9bvpJm",
  "key21": "59eEL24YjCBufeTZFoYeKEaYbwQg9x8X9P4oA7Fo9WgfoqYZDDZbVDM1JXgDNURsXik3ZVxD6GeZG6wQQx7zcuMb",
  "key22": "3ndqsTXeH2ScM6krixwnq5DoUFmd6HYQSCc2URiPt4FLhzPhqwtMNYvwsExHNnrKetU4Wp5vatVGdBPo9g8kFC5W",
  "key23": "5r93M5WZJFGYMVFbyZ4wdtH7jnFzxmJtk1homf6LmZ8g8NQqoFfCErKJpsetyGAAqoGe17ti4tFCwMgPsQz2rNUc",
  "key24": "4ddkpXsYdv41FJUVoPTrCfgL2E6n6atQw32M4mphW31ycd2iFthfV9a35bL9DAFFUTLrhMTxCojFKJ627KqxZVZj",
  "key25": "PDPsqipV2zwKt91Kaab2T1tNagcRh4wYFzo6WfnCNAEBnzz6mcxS3hbj3S7h71dFeJ8dpCg1G3CLkmZNfD6VimE",
  "key26": "2j3Y4ZfJpojWbdkD1Q6xk9T6CPcDhB5FB6due85xy5fQmWQZ2HutdQcZ53XUHK1bmroL57RitMZ2bm7c3Cm9DV6d",
  "key27": "3wxU5biNvL7zvETGbeiKvq7xDqn5p6ER6mCFGaDj2wUvH8VQ9De7uDGM562g6Koem8PPnTEx6vzkWB7jXuAJ7mjY",
  "key28": "3voCzz5L9etaiKUStfBR2QpQ2VzqKi2zmbqxeqG322Xc1D9cUjd4pCC6EwfFiFXu8nhRbHwZFQw9jQtCQMwBCJKM",
  "key29": "XVqqhPy4JNnTYfKEZisHzjXBwDmpYTjbCvh3wsvT3RnzEBadyz8N5mEZo62SKXKvr4p6jzx5MeJVvjRevyyLsgB",
  "key30": "2e8YkyaitMw2aw5MrTbCdYex7VDhugGM3nbZuffCrLXCtYsU9fCkTsAjpKj93qfmBCEFRozK6gw4LaLjCMSeUveQ",
  "key31": "3yfAh3DCbtejEkFGkJSVs87DLVnwNduMY2KzBnUJ6fe9aWKGXZfGh2X45ZuDHjPwTy9HsQcgQuypY5j1J7mqSWL1",
  "key32": "5kuXyU6CUvdvBWFsuEAtyGb7JDKPDVEA2JEr5AppdhfhJRFy81rfPKbtxuhjkpeNoMHELLfzxdveZmNWpziBNWt8",
  "key33": "RucL3xrH6Sn8UQAE3LjDvMVBi3DYjRSfcLaV61n11Hjj9Xa9ta8cDCYsaYwPH3rrVEaSGKh1tX2nY75xyBtvoRs",
  "key34": "3uYhecA7CNokJuK7rWSgL4yADzZtXDmCejVELmgJ2ZuEVUYvLbYgqGEjVgS8WhjMNMtwmgSGzB5kzXudBqFceG6L",
  "key35": "45DUveGdGPHbF7CCkKfK317vJVCJtDXbA1dhvcS736Mmg1dnQrrptSyvsXvRmF3H93oqZ2A8RDzUh2UmfQihjQJm",
  "key36": "5F2vpXr6HuiEvTmF8XSnahHqXD4v7KW5PKzGxd8eSUKL7d2TqjmDXRehWfGdcv8PAncqQTmip1CbofKu3ftVsu1",
  "key37": "2vWQs7y9uUPrt1tLZydhn5GfSfvbHFJYahAGiiuK8H5A7JZEMTU6t3Jx9gP8ekzQw6Pz4u7LUSq857Zd5cVQ2HQP",
  "key38": "53dBxMqL6VfMnkPGBbmHwLKpSr95NgeFwmwioUvAAnJ2DAu9zUgZmQetwe6gUqnjDsbZzKocDsE2KnttvEpFtoje"
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
