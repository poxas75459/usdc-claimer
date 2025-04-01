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
    "4iRjMzhUv9MYc5wGfjh4s2Lr37NNdLvW937M1xcpLSa7BMTUr4VjUKj3W47QLu9Aju45Z2pr72hd5Dj7mv1kVjCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WqrVjhj9zu1VnvhsWGrH1wXpyCjyNqozeyg9ByCPdj6nN9aPV7fMxdtbvC5DYxsJLjfb2aLzf97sxyQ95jKcStA",
  "key1": "5UYgScV57TW2rXER4JiRaJGjHuYN2uSorjnXWGrutSrTS3rX3Bk7L67LMeqm6AYJPc3Gz2kmmJ1Bn6fAB484kCkM",
  "key2": "631FrSwB7zBN21vpTSQxBcCMkjNcJTDLRquDGcekNkcBv1REqCW2XDFx6HCgXeTQW1nqP4UeCT2hRvRDwUX8dPU8",
  "key3": "yo75pstQaeB5jz8tqCwNaLXW8bfdGvjTX6df9xbTGyLLw3jyyZ8LXc9w7PYUurJTG46WUPkmTVqLbygz1vQAGf3",
  "key4": "3ay2rZPamuQeJn41bsT6HfEsQmFv8FPgmHTHMFyy6PvzKke97PQezeuMcqTurJGq7gRo9kpNvq1fnUw7cUovCy1K",
  "key5": "2qnCMGs6Vc1bySHq7xNVXMDPAdiBZVf7dWTDjwQE53wYccvWubEPCM2x1HQASg5LmtAq9wkScgJFRbhWQPuAXPby",
  "key6": "5oazn7q6xCzy7gRsVXgigXvxjPCtbSKmXywnApbS2R11hbDNNTMkiHR3nxHWcEqPbPVJSaPEL5LQZ7WMvTff48Z9",
  "key7": "4ek9sJ6NJaqXFqDCh67ScgMsq17i2WeHUxMT9byjjrPjZqVXgYaDidvjkqyxou7yEZyLDJankQX6k1NWE2T6Esgr",
  "key8": "2oagBp9FtNDtiqdYUpULYuaTdmMfGqdAAFaVeR8UsxGrsRmE4prNmA35DJgWkCTfgnYM5cHKgeiGEat9B26uXhBH",
  "key9": "39o2ChoVKAh3KcCkgStaQAAbXkFJh8wNBBzfJeN5KoZsrvq9wN45kZMjoVWKpg7KVeNP4mjznj3NV5CoDatPgKs1",
  "key10": "2h8acqXUFo85mQi1A2kRGrr5J9S7NegKhFaqFHz8guCARpN2YV5dU4SzmYjEipndM42gfzgGT92QpZ3WRH9PeJio",
  "key11": "3ERQ7VSZ5DyS8GX5XtqSZqNNZShGMuK1B6UcaLG1W5cPcXM1Ba9EBftbNz8TzsYCZTBS3bE4FZPYALsVFQUUXCMA",
  "key12": "43z4XKYrx59eU61m68kenYd2Mb22kDystKVW1wQcBq9Bt9Bj4fWg8H7gXUobJGmFurN3Dy2EFBTuh6fN3MVFBmDX",
  "key13": "23SQGrZ9K1CysuTwiqVaDHWJ4iMKtrS7mWFNJu3sz5BLDjcH2GtnnaRn2DtEYjC4doL8V2LQkE9MVWzWBB8C1Xrk",
  "key14": "5n3TTtbPVuC7GJQanwkC4aQ1LGNroLWqkQgTS7HFFByiX9Kc86BYv83zymVb5T7L5uC1XR1BHQtXMvurLcxdFAiC",
  "key15": "qS2WcPyDYWiJXuFEbpchjjLPdkkk6rSCZyS7YVXYXmswXHVFrAxYX34P1xpFbouz97yR4SkqDEytdKy9QXFyJBE",
  "key16": "CjDD2r1K17544JTyJGFVA6XCvqg92UbrGuTEjMawswbawS3aHvj2vrU17WXdna3aKwo4x6wLsWZBtPZoML3nNeh",
  "key17": "3jsLfzp7huwX4w9keVozhKzdqjPR8tJXkxL4kFrd7jMsMswo4wLpvBjJmSkc6N4r3zuZHbjUyzDFmrYHBdzkFzDL",
  "key18": "v7FaWCaSs75CFJWQK6CxutMEvqzmFTb3BZFRbM9mF5gMh2mwzVxxsT7qpVyVDRUZKRMsmvXUA4bh4E41146H3Td",
  "key19": "33dzPkWXSmPxbh8AMpKSYsR2zZVxoyS46ter3PXUeC6iSsiT7VNqj5W36wK5R3xdxAUzSRZRGA9ocpswD2ZHJJXc",
  "key20": "4VBacyZe95rD52fJVAQ4DQB4f2bbBxAjqGt1VPUB6Bp7skDyfGzLMcFiPHNWnzFsRiTobpLo9fBzLmUXiiDDmtME",
  "key21": "4xW8U1TE1mKYV19pND6yGW6Hq1n5oK52Ji12S6jK5uSzQcPdV1kDXGbTDG9w3krgBhdcUG9NvuwATritWybTBTN7",
  "key22": "3e3S8FUZF2sGBSxrNV7eYYTAaQ3btXEH9eG3Eq8Ezt7fjqst3afyocc8PTpKyoXnMeQBL6gpEeD41C2fmUNy6n4V",
  "key23": "4ddv1eYpRYyLPYXboXEmkZu3D7NubmSzv4H2Amz5ms4adPEwcDESaBfbX4AbebYKt6uTZq1htrbp8yF4zE1gQCMo",
  "key24": "FG2hEh741DheEsgvyw8fwLaXo88FUhwYWUiVBdKbFmsWAGdzpbLWJ1iiY2KWspvqMdGRmvftJgXkLVSK7s9L2h9",
  "key25": "2goB1u84gs8HRtvmzVqn5ydRFNP8DJMfdypxnJGc4Tfs5VpbVxeegAiNEeRY1AAgAAGNhnHm8Yu52crqBUNfoDcf",
  "key26": "5tbA25qDuBBATRaDp9DnTF4RrnYrYM5dGJtyUyqP4pMj6PRpuLCv6Cw7pBQv7qjxUSv2hmbT2L53JSJPWjEGFbmW",
  "key27": "2QmvWtymw1VrMjnZrTJ9mnoik6MB2BmaH81mLLm1egKNUS6c5EnfxH5ue6wpqtMxQmc9RGf2SFWuhK6MRqfoociE",
  "key28": "57xNeFBky9rfd9Xqtzemb6AvP4Gi3cETcr9S1Aw1qvLPKgcJXEiDVPV4UJdoc443H6p1t9fUVrEumQT4zLQGLGPR",
  "key29": "2vLucyhSrXDatABGy8vRC787c2RbMNeaAMn6njfbTHaJrJef8Srq9XsPTeR3UxFHR8EYnEutktpPVCGC5mGmRTeL",
  "key30": "46ZhZWFPV5ZSVKE6s37midx88w3ibg1YsSmS87W2dAQPtPngvMy12g2VEBJi2iy34SbTJJtiZ2UuWFXJcUKWEqKK",
  "key31": "pcqjkdR5ihGrkJ7z5drr9kStd4NrqA6gDVrsjTVr8ediC3W7jKYRi5PRb8u1w81U4HL1RXN42bkivXjbRB7XQXS",
  "key32": "5k8Jei4VY9GAYxMZZdFoJzyuKgr8meDfnmvvJkr69NdDxmLGHpBeVrD6CKWkgaPC5dGeUXfxLkAENCMb87gaZrRr",
  "key33": "23P9fyHwr7WfkXfx1Hetfi7729KcaByL1MLVDCy4oFJzFN8TfJPDR7cooYrKyRWdFNWjvd9BePkxiL3WwepuPcGw",
  "key34": "4x3xC7k4F6ncsxTi1CHqr67f9mkwrRCtQGG5iUMDLYCDAkKto6oEg8GgQa5rXN35m2qofUn5ESvsiQwHmpoA7HxB",
  "key35": "5NP2KJ48pd9yu7UfeQDt4Jrr6eSTX4Ko54skBLBv2oCpmsTsjksPLrWhFUoFUyqeuBiXMj7cbvs8w8AVKFSwCS5a",
  "key36": "3x6qGwe2K1A3wLUbce8GRiqdNU757urduzyGLiW4RX15y4NJtgx2gWbuTeCBJZRX1V8xe1p13Kypa2L7MYLwEwQB",
  "key37": "4khYrkfL2qw3KD2fX54Pag7Y4hwKk2Ncd2v5ohpBcUpT9bMJUi9m9gRnhuJRZFMSye91uPdqQE9hALN8pQDzioRC",
  "key38": "4vk1i2erpbMoZJ6W9UoM6AVtnqPPV3XWKV2TS4LbFUD1AXWCVgLzUePm9DZ2EUB1kkDasdXKSXGBJ5ATUok4QGYT",
  "key39": "36mq2JHyiE92sw4FKnSeYby9FWFsDw8JcoHo1X8rtmsqv9GXrk6Kq6ft9o3LYhgLGqGpVmHAYw5vngozjccEgHNi",
  "key40": "5WqZbXgNtsi9An38ZiXLLiBGgNuigdg1foJdteoi4yyRUudghEt1hBBmhkGKZVBWmo7dpjADFvEZ1rSXojSMK4Qj",
  "key41": "3cmgrDGCzH255Q1XEkZXzkuhwekHUsEcUkML2hKLw7exBtq9kfBno5QvtXdt3gwcGfeb6u4NT7R7WCh1XreMnN2v",
  "key42": "4C5WnPxRGgmYjRTGyo3Jibk1pWHZcKuVebJ6DNnUqwvHn8Ym4w1d2wBD8vx895NSHiLRxm1WHged9Yib2cVmGQEN",
  "key43": "4AuPfyWh7tm9gJSWd5uU3VfUL9QxYMDG9yExB5TNjZZoxyrsEFRiGDxtmpMXH9xsShwc9JFDWJBJiKzdxJwngK9A",
  "key44": "4HNmQKYCJFd5margtJdL6Vk9RqAwGjbr3nKWEAc3z9GRtQdjBA5xEFcK3MSMRTKJpVhcR4j5GLYm4uFFhDci4AoM",
  "key45": "45XuE5j4rRoryada7vA5dFKTE9jXNJ2L6fwMj5KeA388U7ag3uBws1AiLXgxhhT8MvhHyWZT2jCEwrisa7W3pkon"
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
