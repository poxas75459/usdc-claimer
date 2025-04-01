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
    "2ZPpRb2kjwwpox3pp5WfJRhoB8GXYgmmsanF64Pew5NuTpEyHCJRe4uWnuUwB7YCc9Djwy4g7hNbDJrRzHnfghWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qmJtXiuwDVKThLnyJCgNbQ7xAYMwLHYtxuPfDkUzDyXCCEsUkCDJLdZn5RSSi7aKJNRBPY4YsLm8xreit9ZVfmr",
  "key1": "4tJjAxkSpMtdE49fmXd7EYVsYKdQ4T2TicjL6YnjynZXrYvcwWKKRnDcun1gpn6xvN4TEwrSSvScW7qruADm154V",
  "key2": "46fUxfXxSr1u15SbkToc8e3SjnPfXgResyWYRzH97h6X5CV4s4aKqShRHGb7M3dUYaFkt4gaU9zfUjNC5od2uxaJ",
  "key3": "5jHrXD9cCc7ZjP9UjhZGwp7cJRsuw9sG1sa6YyAk16cxgH9dkxZ7tn9ca9Ry24aQ1sdTDm5scpy7YCVeXTDXNNKD",
  "key4": "2hYHvbibLX7FbHLq5uxAVNd6eW9nyJ2FCjFq5B29J6pq34MgxyLLLiT3cjk5peuBGLn2nGdi7iSCHvqaSPvUJVrS",
  "key5": "5382Wd7mnadYj49qW9VZFo5kGNyS97x5bMqw3pQtmgq7hvrPjmVarbzDRzqRtVp8gNueQ5awb236q5Vf9WMf6uV7",
  "key6": "ugFQK9jgKeWxGCTPa64uNn2XYRwT5D6WX8t3nxgaRVhGPWnjYKJfe3GKpNyvZvnSLHgAEaGuGnTQc8cFDF6ZsyR",
  "key7": "2ZJtRCUXzcGTQnzBABmSdq3cfbub4odjXZqHy2FoRxsEMyx2yMwdPKvhKJ3ZUJVA2wLWqpZXt91KnMthNbai93EY",
  "key8": "GgWEbAoieqQ4djUxu1yyJyhTkXQP1osQxm8skyq4tSfCcSqAcmdhD8LqYs3XLMH13TPsbMgzTRh7Bz7yUcsXYg2",
  "key9": "38DjS6kSimhEQuXkL92zFyHdRmKbqYQCoAE96A6nhYnQqE3ZC83xjrhP213qtrh9Ej4yYBSqwxZ2Zn8vzsZBpvtw",
  "key10": "35Aphrepwfv7nQZFebcL6QhU8XMsh6SQ8gE4af962JyMp7RtYMebh3J9xDQPZsByNeNkSb7fG6qtYykjURBjDTSU",
  "key11": "2oZqnDyKaaACwCfZWtmTXz6Am46J35o4kWmcAE8zwX15D35XTDXqD8jTngKvqpqJht18Yxj7cWWr56APjfbeVqHT",
  "key12": "2FHiktBctATtLmKTVYCnymEMRdBu2P7QmhCJNT89aSqc7uWwzCV6rQhDVoetKX7GSEzsbbt7GJhf5aE1mEDFcHUb",
  "key13": "4pwfLGN4s7KnN3eAw9qDMLx5bnYASW8wSGmiYv2BwtA3YHs1PUVkNUUf7osV3paym4UrUL8X6JvCBWYfYb7BsUZm",
  "key14": "Jy96vcmzJTruE5xEZUV4yMCWSzoFmkYgifqFHe4P8a2X51BrRWGvr3cagjiWHVGnp7iw1ok52acWpM2khNDxd29",
  "key15": "2aoqX9uiTn7DDiDTFwYjW47nQXSz2enFibend6DkZfiDQSBg7cmHaDF3zbweBHKZrvY4nfTSuNQkR9z6YZx6h8B8",
  "key16": "5JqWwWBQhRV5RUhowePe5mNLb3MFL9BRziDyspfprMa6LakQnkLFDF1njBaWWphbA14HYpDEjqyZc1UvpXWt8FGi",
  "key17": "4XNtfbGGPRZnVd5h8SXudPdnxkDohRWmUxuKmL2kyt3Sqi9U4j9ewkmNX3jGAGSdDjCQMGWRiP9oqJSXKiKvqK3U",
  "key18": "2D35HakQ4J8qfFW4hcFkX7S5fVNxwKCpwkgB8A3r3HeWeXKFpgTyq3sFaeoS4xb7FRzcDJpLsHVhcQuCjoreWHTb",
  "key19": "FTmKeX4m8wMFYyr3xVL73pt4mX6eMpAfAWHoZs26pr8qTWabWRSaadYRGR2iNQybMUZjMLbWmy2ZqTynv8Xha2b",
  "key20": "4Ja1JEWox1gNcuLi49PupQ1c5sGuwaFhKhFJR2xhhefArtUiH9gGHUpzJzjWVR1tPu8bRYaANLrnxQzzSUwM8iA5",
  "key21": "22wBHpaj6mTNJQSKhkXgMaHJjbM2EReewDFV7f8fEgiQzDx4An4oHQoU241ubBGqfzfn5hA1UV3RpKB4jkMUvyst",
  "key22": "3Zvz6qDCrTrRFKRqLzGuwvBuYMiNx2XQyrovUbpoNhpmZjWFYe5zEP5GTuGiRG5CtJ83sQeD2e7Xsbaprkw7WQzp",
  "key23": "64T68Fr1uPnivKAEDxXXwTFo1bvBQmAQBiWe5odvzXuGsF1MijvKUHRLVrs2V99t9TmkhRULLFGXjTPiXqHZZWHq",
  "key24": "czx4QiBnPQhfhKKrfDfLPMYEy32cyb1xRt9n94PUHfa6vLknsjBAp4K8cfoh8BRNTAEgrkwmome6WzWfMjAtVnT",
  "key25": "3t5vWDHT5PEmYAA664CpjcMiQ3Rjp5GqknErXda3DxDw7udzEWQJFXbYGzMQaxroyykWn38jPhQvDYtFjPvh9bGv",
  "key26": "hKum5Dqd489URZia8CxwE9vbBHAGXPniCASPTkoMruGJdD2fDYisLX4FXAgxiguKfFgJsxE2ytMoiqaTeaT4xba",
  "key27": "3cJTL9XzvofwzFrLR178SMgULpzHsMhP3s4Sjw4doheN32Roac7LR62WvgR4m9f49Cazku2yZFQ3wnKTHuJ3Yn1L"
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
