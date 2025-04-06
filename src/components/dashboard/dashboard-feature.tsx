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
    "2YSEtQaXavCQr83bnV1yGSaxpxHHKcKZFzMZC8TSyRXNZRuHHXvrRba8JjscXcA6s1WULTyJzYqQJzepBuditXuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vZV5AWWwK4CKsQTrXdvqFLc69SJL9z7aim6Zm1vfVosYvdUQifDbTBSWe5HnnrYq2NBxhkvF7nb9wuQaJF9r2gz",
  "key1": "3924reNpw4WL51aQWXTzSR25jPzA8BTTJJ53rgJNuvx22nU7YqxBCbxGv1LzC1Ncopf3VC6PVS8YpZmsoxxG4mUU",
  "key2": "3635k1iUERdiD4yFKpp2kjBFKdHgLCyvRpWER5VPXVzWixxoZ3DqJFcL7VPiYuU1aMpyoh5y769MPd7oArypRNaN",
  "key3": "4kqYBdafMCtDvRXAjYA4sAxHDUkNPhS8cicDr9chmJzvzCjfhfN7RVKeSd9oy3jZCf6wSP9PEXxCkinJ5Dtw4VGv",
  "key4": "5EWDgVG6Pgp3rrac9opsVwYqqSCVMeN974PsUh9cQncuBuwFr4TQ6RGJPW9G4hehWKJsQ67EwS1kJEoVRFeCutx3",
  "key5": "3pyAJohQK1VAFDW1eisZP8Z5kLFtYYdUHxthw8NbwujErZgAQNoJxhmtfe439RLA4bAoQdCKG4Do1aTgUtuGGzaj",
  "key6": "4rfZWCQT3GSyzsPN33s4UGhVxenQChHMKKazGFbnVKi8WX3fDuUiNKnfYqyU25Qm4VDXToMGNQFM5mMpyTWLyzwQ",
  "key7": "nC3qwc6R6TGxT1AgFHSvFrEmPhbUm3B4ENmTeXeCrVeFzGRm8tPw1XLNqHzwvz8f8hSzkgZvQnKHHeRTxUjyZtx",
  "key8": "Kze9pfkJ9W9du1Gh3phjzDk6km293qGZJ52M1NJvxGVF9RiYaPTP29Ugir69qxAQa7vs4XKQrioMZLqPVXdGAe6",
  "key9": "5TpnBx79mY3QDgrbdqEqRaBRJqZNbmE9eYCFCHZ78wh4wejHS4mGdRbi5o56m58Ud3NdfeDfn9HpyAdAYXao7sDJ",
  "key10": "2SP14koNFVdGo1MpE9fjmtJHNPqSBocKAu5rRdhe7XcZAXZDMdyQgTbbfY8u7sh7amnXEXZVS4Zgxp25bE6Pi5cU",
  "key11": "5DsVG24Yx6VVEnabehTXkQT9CFCz6JmmiVuu8wcVTYmyCaJs6HSobU56tZ7Sz6K8BWQNFjdy2qU8LuDB7TyD1Q7z",
  "key12": "5aFEA6reJHNHLNQpm5iJAv3Bos5m3wXDBzLJjQ3RKqiy2Jr6DQ2zxargeiEH5nKzDg54EbUUTAjtdVLeUah2SMH1",
  "key13": "4MjdejsHKp5oA1wvAzG8NqiNDmcabV39eGpr1dNAZoYE3reNR7Rsma9NiRf1wKs1kzsfaBHxYCemf6kZBmiCJunt",
  "key14": "4Hc7ny9PXGhCAhoUF3rJ1UyYceoPQtaBAEkBX8EMG9bVMT9KqNMKtbykEsz7vgNFzoepZEmyQTpnM5uVcuvejLju",
  "key15": "4UKGuskJS6h3PQyQ71GpZiG7TnGKRLHcnu2viDUimTnJDubZrJkwPXthcuktd8gzn5yLM6rxm6FS1ySLsv6zfXq8",
  "key16": "5wLBRMjDgJ3H5jjhcPQoguChqzZRu5LsUG6vKrfyEStuUZcaapPhuM7APPiBMSf6GbDgGSNAH7rruwVqEQNyMmid",
  "key17": "2owmVUtA84zq7Qz4UM6CQDsUfdkgfmsMS2YqYG22THW5Lfkr4nj64W2zWc3FJtDHxKS5Yzv72dn3PKwATqZZiQk5",
  "key18": "oBJoTtpw1QVztoA9mqM5v33ShgmiT1hDpoi3HfrAQBwzLG8gGT6nkjbj8dTJCouRcjnANG8UJRpCi9gUJrj1V37",
  "key19": "44QQKSJNmmDy7rvDTsnbgP5tiLCRGV315B51CtJLiTc6Gzh49YSt7LCrM4RcGicmjPqiUVt3BLh2MuXdPGgqvGS5",
  "key20": "4uCi46YJaMv4HnAe9tPB6Wn4vpvcsgW1gmGtfz7wecidHSsFqnToMwFvCSytXk8f342NAvZQMEHnicvXztWDzNBP",
  "key21": "9aW6zkzib1U1ENkFaGMaRK2hDB9eJeUqXHzC2Q4LUULFn9vsvY3j2MziU9WNoedPxXPsjQwaWeSDFMwcjQTjjCd",
  "key22": "3mQhQu22YMbDfQHpKt7oXquoaStHZoFYEjT6sFdNuYbqrnA7QMLHXhF16iSLZtkqE4XfHWdPzkLRGVP3adjuGRVF",
  "key23": "52yEKjV3kTXXGkD4v3G2mLMCxbLHBQDPbjo5SdayPdEVDgW4DzA9er1udd8YddBoPpQwsXysAv61cRTwKk4eHWPZ",
  "key24": "2EmEvY7VLHK2FdhZQ589hX2RQRGDCw8WhuMMSZ4Mfq2wsAgXQVnVvPYQgJqR6NKZmsRebfLX9bwpnggZTWDY2eiy",
  "key25": "2NTdVKwcPCVJUSsHXgJLyT22sgLmey7eotNwmf3d8Thw2Xw7rDxRjcKFwfVxkTkj3e3qfKp69LGibpFAa5mkxkHA",
  "key26": "3zs9PHz4DBLQmvjoEHR9dhndZWEmCLN2jMe9wXFXuwHMK4ELB356jWpqTaG5hwjCKD6DrynR9JpSerkdJoRPvq4P",
  "key27": "2mSpEJmNadPbubNWadBV11tbK48vyyCceryvGv3PVK4YkiC7PJaycgp8TTnRB4et1Cqcec65oAX6izSqRZGCbujk",
  "key28": "3PkJLxwNFRUTwbUvfFu2xwi7YXMR5CzVb89KdAEt6E3NBv6bsTVm8ZvL7ViFm4h6qmzfFLV7sqY6vnysW62jZqDN",
  "key29": "4gWAKSprcrqQWBtfwSfyBpjAQsmYMTjiFgqhYShkLE6ioNRVGkDFcYZV7aaeD914U7UujSaPBQ9UiJA9NLBtGpeH",
  "key30": "nJNwNohh8mod1qxNSWswJuPeaGcyuWWRvvNBTNMdwx9yxssrqyRH4X89KqUdyPX9hkRPdHovSayyCJhpENU68td",
  "key31": "294uwWrjCBvbgN9RfLTxiE7s2mi57yHQkGRFSnwv4JPrUUm8Vj6KteaB8BecrXkfiHaT9Sd4yfhSAV1ozdJzUg2W",
  "key32": "5GLN6HjhTGyC4BjFaKVd6hBiENYjxvBxvc9cTRzJJxeD5suPE7YhqvMCt7D1rVUssHkjLUeJpsKeHQVrp3E8VPxE",
  "key33": "3wmmZLiNbM7UYbwK6yau8QiMSmJn7FRSwBqJam5xKo5B5XobWnMiT2RW5WGVdwCsfbZJr8pk42vqeXM9iFT4Zw6v",
  "key34": "2Hbeqw6dLn6HoKGpUwBHjs74uPhQgPq9qqbcijZRV1dWXKjGJki7wgrcLVNexF6Vajp7yJnBecmoucitt6F6fmug",
  "key35": "3WM7YeiSnfAce87NKVcALrp8zde6MSFZff2cetzJCvVJxduhikKLm6MXrLarXtyzQG6anKe6BtjxBSeUyQAE25ne",
  "key36": "2SAzYwkpbtWCgyTaC2VDVbBVdZMpRvtJP11eAeXdmMmLqCSRyB3sMaLoJc9UwtEnNVKkoU5cbXYY33PRxrgFJxJy",
  "key37": "4XwTubsJFP1ZqqLkwurPKVjqqE1otr8N7M21FLQ3yMN8hhjQTBwBDpsPFYih2w5fmTziC7u2T6jg73dQXZFLy4i5",
  "key38": "5Wg9MMYG6Hdr5UvBGkBqNPZDshusL9bs2ie65cA5oAjLFvAfPKG4oUespdLJCwvUk4h1NukBxGxCoLjDBxeUukkH",
  "key39": "Fcb76Z9HE75FcM52YrDGfxPUSmyHyEJJD1wPWfMhBvkVksan9G7wR7FRLpxdXraL2qExnyZZay6g7x1ndxtiFzd",
  "key40": "mS7Xh82ChxQ4gCUfHp1tb4pP9Y4cuGMV86boH9v2aPLHnfbpSFcbH6xbAYuW8zVSDoJ4yLxVgBxy2ba9s8mUGty",
  "key41": "3yy7JQG6FfdGHU9XjzAGK77AxmtC4nFBj29ez929kaw93Q9EbhbTRtZTq98AdaRqcSsNGWfBi2BGWQ4X6gxLsopz",
  "key42": "3K18kHRjF1hZET3ubPGHuLdC58mWRip4YfPrsW5cTg2Q35RBb88tFp2wfojENJWxYwQhALooeS3udfABPazCuNHT",
  "key43": "5ev8vAbExKWDjT6Ffoqfa6uy1cq6y4Hyiw9Chp66cqGe9QRnzyVGh1CybyDkq9HNkbQpZsiz7zkyvTPFjs7h4GKs",
  "key44": "3YAKwvVXiSLuvKxjs9WgpTGLRqfi4uiEGhGWLQKyMYw7ZUrWhUsgjTg6RpLT6yoairV5qDtVJptZzcb3pRWxAePy",
  "key45": "4WCH6Bd6Wvi8xjoGFz4gQjxWQ9prcYudKVjZeYD6KJTNa16ghX98jZeHG3VVXz93cv4QJbgPrYUe6mCJHPhiRhbr"
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
