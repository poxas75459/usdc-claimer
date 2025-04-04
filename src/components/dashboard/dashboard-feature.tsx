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
    "25JaTUcsuRm8x3QCcGFddstKB8U6zA9dHbzb92rK87edp7RnqYeJ9G5HC2q1RJAHS5BNxSpPQgzSZu4EKZzmGABr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BhygJCCtYybWkMw2zXhLy8NDcNsKioUbVxBEmLFtqedDqeE9g28rudu6CCH4UE7mr2zrbtW9rtrJj44EjH5gRXR",
  "key1": "5DnZpiKoeTup5y5zhvHNV6HhkMsoB21tbmzRzXyHzpuw54NFufbdKsF4pUJGsswZKH22wpMfrsteL8XLcWQWnB9Y",
  "key2": "4sQVz8ox7HMCnfn2NyPbZwuvnFut5Uyf9NmsuDPC4dwXSfeNPiTqTn5P8BbRBuQgsteX2pB41nBr9DLCzg3sdazs",
  "key3": "msnMwnTBWnZss1VcCd2LH7SPiFvcviXS4KsotxE7ZPhhpBRJpMrG6tEHJLSf1fqp4M1VGLWAdPbaKnKiso4WHCM",
  "key4": "5kJt9qSftRbrvPMwAX5vuwb6QCPLXqwZ3xVDYpvmMv9W5GtxCdFeD2AK5eQwpszmEBTyHiaudhJx5xmCfYCUnaRR",
  "key5": "5UjwSxvAonJjtdqYCMDkoJLmhRWeZ1KjtCS6SwrvRspYTiYEt6hD7fgyPgEsMbaP5Hge8tvRdEh1tKP1uPgAqFDe",
  "key6": "33DkLGeZMfFx6j8L84qDUUzHeJUXYdN8AAdvt42SECQiSsFpweWwgpG4nhuH4X2TgBk3BAgpDnrHv6Peg5Boz3T6",
  "key7": "2dd33d823hQ7obYwS4YZQwv5NQ6M5euuu7rBxkzpYzK1B8i7sAHaGFftVSorRnFnF6GTEmoir6emviUeqsMLim1Z",
  "key8": "61VU6dfe32Qts3HsfxY86nUXaoSAortxwZ6JHVhEmfYfdY5cZkpheHYjdwV7JF6BJonwJBcAxLaMLKBNUF4UFUyf",
  "key9": "5LXaFz4hNwr1mNtWDe7EbMU8ZCgTR5uHGPF8ncA2aejEXd8YsaZH4io8uGayvW7DNiR9CNpZ1UWnAyVzdCCT6knA",
  "key10": "u9A1wj6yyxGTfUqK4xzymJaPuaQwvyPZLEdLuLh3CDH4J62RnjnSw9Y2AHZRjGain7cQncitNpFojrvrYDHNMTm",
  "key11": "4LDsAbErDbkrunigEZgvsEeBiUopkkwhLxQ79SBMqGxt8NkNDXAVwJWTrZfGsvnwZqZUKBV2jpfLumHHxbsajvNs",
  "key12": "3MRCrL1Dxdk5ZXNxVSNcrZLgXHD56FBDFM4jwfLfHPN9bcjdEXzQzG7mDh9W72YJGGihXxmVuB1TkoBBSkRXm82Y",
  "key13": "oP7dsXJ5Tpd1XmfvXmpUqj8D6xZTcnhkuWBpJTwtTbYyseyYkJSoY94qT5eqTaVSreUK8JTWkztvTLBud2Jopic",
  "key14": "53Ggchhv2Eoj3CD9asNAutRPKPe6yG2tNgTvMbZyhVCtZTNJ5yLHatJWyg3rrfbLQHnMopXaSAbLiWCnfkvxHg3k",
  "key15": "51ZdH6KmAvYJgziuSxQpF2bs5qu4cewhMk6Ns6gh3EXYxkwPCW2pBFWWTgEh48KhbuB8SLzFYHsfruzvg2MzACXM",
  "key16": "FPUFdt8gdM42Sr4wY1xPWq1j29cZhKQgDnY2Q3zvFLH5tDddRYD6xcx3bQYDHnysxD1h2Hf8PfSf9QxfsS8CxPX",
  "key17": "359Rn35JcDa2BhSbiYvyGr6ahJ1JqpWTfBnem2o4QuFy4mFXZoubRjjXQ1g8Uat98PbgDUUXYFtunvFPnt6Uc2Qy",
  "key18": "2ax8115GEwicbAo6RQNMqAc9cRrQTgPBT4N4iBmTd6uspjr75yqoeH9fXAKab96j6NVb1VBFnhdqRxtsnGcLi3pn",
  "key19": "5jgJXoXNqMM6X1PNFxdbUuPvzcsyRVmnuCzxYUsQGskJ6y87rnLwE6S6iWgho3RM3t3b1j8jumGzJyj7k816J6zy",
  "key20": "5Lx44f8vv3VcBoXJJn4Y6ZXAnj7XqZPj5vhzSE6VK2GbCL2kVxCXBRb8vzFSaPTdkt1nqPz5NNpUoMjfDfeoNH2v",
  "key21": "5HeZVppzWnXTPpCGjMBQRfpnEuVuT8R8y8BMz65iWv6PGdK1LV7mumJRzabf1Tx3vccystoVTnMAqNiwgw7rW8D9",
  "key22": "4bbunEp9YFPASKtZJgKioXW82tPbW8dMG7AtVga45PBe8hK6XpLb4YhB7ssi2kiszS2whEaa83dify8RgVrqCqKN",
  "key23": "4YWewRmBSswrumeMP8wrqkVd9CsVEK6VvAVCMpprNU1DZTswNGGLMhf86A9kF5VeSbK97nuPxrd5kw4McEwFYLBk",
  "key24": "216obvbWtDyYR3CeouqHirXaPiV6sibhe9KU29dBY7qdtgNt21Diy7qzSJT9FsRftsDtGi9ikPpWHrpp3jpqCHrf",
  "key25": "3dgnr4q9kAiJv4uUsvC75qzXnLEpkGh43Evnqn7GQJNyifHy7rAxguakW6nF4s3Zo8uTZpDNxPr6iAWYfzryhoNS",
  "key26": "XSV6FTi5sHttVv74ocSzo2v5oJxKnJjE6NBnKGHUYNbW3P17xiYzBGakzyHhJsCzbqBp8nymXr1WQyCofdQaiio",
  "key27": "3WQrr61iCnL7cDFMG2HxbVMPRwrCfidxxfFDS8Tv4kZVfsjDazvKT8qMnNHg8yF6NRsQehgTrRVqRKFJuWbY1bDG",
  "key28": "2kjXkgE1bDczNGTJ5f3h7vb1SXbrufnjkG25ZdpEyZzARdMGf1fzx1ucHeYMNjJGWLtEiepdEaHBDswoc5ANVEF3",
  "key29": "5mxYNke6QJtoQnshTqD1f3dXxmrK5T11dmdpP63MDbNP7TPHjTzus8hQ5T5vDe5uuLA5DdJLFn9p32dUT8zzUKsv",
  "key30": "51pmSR5rAv5f5YDNRMJq5KtwBaPDy5yRvWtuXA56c2ktzBkgcNfYNNAwD3vTTSbReh6nbPyLAHJcagmTzDXJT4ZG",
  "key31": "Msv8gatie1qYWnxjVC2XAj6eQiVZvXCZg5JyuWe48KS1ZUrm5x8q7Mwq7UQCFNihU3tXFFjDwxZXQiiuNPxqSBw",
  "key32": "2qHfkpb2NwdneDVcWFYB23FTjikkroaVurd1ogMaqAwB2gdtBoNMVZPFthocxn4hdJFiBscXsH3mWhcFhq6yGW3d",
  "key33": "5R7qFhSfDiDKRoV47FWfqr2e2FeQMmpxMJWvuBNX4HMqm79WHDokyAfDwpGfrQsmSh93WWJcE4u2EEHhv1StkJbM",
  "key34": "sYBFaMxcfw7Y5pT1UxiMpYJLoKwXBQC87qpUDeLrZjgGPr6QrZn6uHRYgkpB2VjCc373roVgrbhRhdErr17zd6p",
  "key35": "4akfZK9FjZ1qHSuvNp2Jck9YU5P72g8jUJR2d6kXrTNT1YBHCTckoUjso1hjZbDGdEk3hzy8MzhmpHsywCfEgXMY",
  "key36": "4g5aH4WRSCVSedALLkQEWcZFSrAkfZg6WLip2TMGLYqbbu4SyfK4LKDgbQcSc4XKmpFuAFAanQQAgeq7wVkr4Be",
  "key37": "2Hd3NzvjxZwSCJ89Cfo9CdYUsGEm52n637EBLEVzUC4p4FWFzPmsvWUYu7J6htr3TPmMTYEbsXjsYkxDqT3zCWP9",
  "key38": "3w1QUdUzqTYVZbHSfWgPn48ZdBAYGQiCKrTH1YbSoH47zF5pKpRLsCJGFk869JX8frndUr7Pjmgm3aU4qSLneJAD",
  "key39": "2sRySGcSmQ9ofxTmpRgirAooSXBEXj6xtbB3TR8q9bsJqETD1MN2PuDnwNe6gawCxgdrMmvv7sTqDv1yHea5jSh1",
  "key40": "2xnZJznADgDLe2mCJ9aZRCo4pUKj6iRniXDi8ejdVqtW6s6QVFijUVRan2GySjc5gGUDUETKWVqn4CxjQyy9Gft1",
  "key41": "5T6ovfCqzQQ219phcAnHBsjDE9nAzdNSqRjMGoooA9CB9YDC6K4RyE4EwR8GM5zX5Fwotm76hRt6aQTB7WtNGq6R",
  "key42": "5tmh9cqWbL58qmkDppkwEERyKYN1N9SyNe6JGcC8PCyef9yFZAWnSCLXQXRZ7wgSafoYFMJPHzweaoDkUR93vXBg",
  "key43": "3Rso13vaKYRYbKck39nFaUQg5cieyDtzjPp1jKXUbDjiZm55QFPbBBAcL4BofgeZQQxBZGXFweZ2zje23Z91pEEX",
  "key44": "2FEzw44epCjEfx4L4YUQ4doaQ8gxKhVqycyzu9L2V2UkiSLBRi4yTbeP3Nw2tDgWg17B81CcAKPHcDAmomGCSoLE",
  "key45": "2y5ZeQN7DNBojD6Lb3psjYdKPfA2JHNiQBGbZQfmXe5bn24N3p9ye5mmSLfFDn2NJbyDM4KQpAkZamh7ZW4w3Qq",
  "key46": "4iMNjoZmFkhi38SEKfdpygnH75Kmtn5v9XK54V5RybfN8uxJ8vEu7iLgzD1rAVbPDp9htLsJPcYRkTiXQZhiVKLv"
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
