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
    "2KUDVbcvv2HTNTXqRrQ88VP8oTU6UP6rGDqfKzijHT95idDQtH2Qw1yKrCL3ki6gGkR1kYwTP9VjKfNNPuNsAGta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGk6bhjDMfhPtr4uE8q2orTt9frCg7jK9G7iAoPzw8Q1iYAvdqyKX87XwuVvWFQk1ZkMh1fSxqQJExV4EP7JsYi",
  "key1": "n9sBXbyHjqjGgWusxchtGb6HgaLQYkU7Jf4XYpm51iXfgT7ExvzoVP9vvwBRypb6Ynb2ZNHBXSGkC9DWVCgzavN",
  "key2": "2vR6ERq1yopGH5BFXe1yEfArS4ZL7nu1sQaVjmkrMgsWJ3HA9YyXMv179Sryb5vnq6ommfQiMF3fEzyhCo9MD6wF",
  "key3": "5gRZKXFBRTtwzKEYynP4PuCS8c4U2LJU9j3cyjbkChS7ogarrtDThBjmBzL5t4VQTq1ng7bxpipqDxn86unw96ix",
  "key4": "4y2r1ju84wHL8yKsDe4jXofpEPzwxcMVmYuPMASrHu1MfDEiPEr2VPfYsigSMSUohGKnVyAQ9ifedFzEJYXKkJwA",
  "key5": "47je3pZdbDxgedtQTBpe6KLbrFvaZBa7aNvopR8ufhQXiguXobJykL2n1myMMDZs7Xk4VWBLNoNzppMdYv7HQgPr",
  "key6": "521hxjNbTNoZSgRaXwo7sJekMJRiqzRZFpFMJUPthvLkHSfhYKj9YLQGfSQNEw3DFjA6m7wHuFssb5ApXtP3Wsrh",
  "key7": "3X9AGfYBUfEQqoTT3YjvvHoKc7qSkVVVdKCTRCdpE6rJqXJUaCaLDKxcnH9d9App95CTvsZdDwBVBZ62y1gQghu5",
  "key8": "45kG8AsGhToFCgr7gKvZFDK75NGW7iAGTojWhyTsE15eApiYvxL75D8CVzguVuHTn2mhJBbymEZsipfdcNQq8J3H",
  "key9": "4HFm4rkn9zK4Q6YrR24XTGTKPNYaZkfmcwP5oCxRD5aTw1PVnRsAGtDcC6esa1yTMdiqthgvhZjn7CPJfbrVETx",
  "key10": "3tz9HEoDfh8kLjRRfw3h31ahrdQ1KCUEWubLdAG126EyXmbuhCY7Hk87fz7m3NGfvB4GAciGJ8cBNAMiEDHCV2Vd",
  "key11": "Q3bR1zWKMsz5XGHbv2XrDpkeTv8gHetwEMXAPAfiLgLXcLU8MBPap618MrChBt8Zk7dNqmhSEHCe7BoNiRKQ1j5",
  "key12": "3h2Ecjy52fhzkbV8AnxN4ozWr72Zxw67xnKx3diAtd9RfcSuXmoE8WfkVPXh923oGBtrqWt7A9PD9qH8sLaNnwam",
  "key13": "4eBsCcnFCcRchY23J5bAE3G6mCP8TGBuWVpbhH9KUMKsutEkY66uYyVEyVj46CxfRjApXcGZDRY3MMCHuemiAb5P",
  "key14": "5UzTwTG4ZSqD2a3JLkpURHTzyau3msdiMWUrGriMsGjU8S9Apjy8Teia8grWaHRXyiNbEhtC52L9UYEtsC1ZFw1U",
  "key15": "3CraQgDvvYWt5Aq29cT33mPTPqnLTTwEeFJv22g1iDGSJ8qnQyQ3AkPoiAb45qNpjwg4TDocXyKdiaTNF7JucLw3",
  "key16": "5jQsawugGyQWRTH1kCLTqENTz7LyfbJ5mAg8uqXx3ehJYT3AN9ZfqYXnrdjVzZV3XGWRsyEmyWpNuGKSqxVsn2db",
  "key17": "2zx1CcqUPs5mkEn2tTBLmrAsSqsnfZnUhjZnsmUQA1g7XrJJ1aNnB3BNfdiDe2KopEPSPUSYf3Nn7nV6zxHWBJMZ",
  "key18": "5YuFUhhpn2YhqraqB6HyPMaL9LWLw6iEWacPnchqTFZ2ZKFbxPBMJejjm8oUGKXC5nB3MBJTAWDBktKwDuQo3eGg",
  "key19": "2kSWi8Cu64kp2irkGWUra6KBzB3sXaHc9tZtsyEpgWcN2T5rRMnGkrP4Rufj1uHPXUrUjPccrzgSL4BZUqsi9BYx",
  "key20": "2JLREyb1T5DyMVcg2VCNv69MFFJyGZCMxMR9gNTseeof69mntNzrdweMrWUWrYcRWyTtNs29ferwCt6s79mDrN4R",
  "key21": "29eYr9xou6QkXoaCkTQqYPEz9gBsRykCoGmA6XYET14TEjQUC81UAsR2jAsqKVXU2UVa965fZwxDYbb5MN95a3ND",
  "key22": "2MC8Zfk1rTEyWJbbesZDtgtLJJyNNNq1oTNEA2CoaUKM2PUqXf2zGgWv2ctvb6q29m6Eb4s32rWYSrkFvd1a8Tyz",
  "key23": "5pTzagNbwSFazsX9xanJ4c97qEHhCwtRLpjRvFZvdgD33LifCMGTcX4rH2QTKnB5cwHdtaEjRsTZRGNpzCQ947J8",
  "key24": "3kKF81fBdDgXowg1Q94WuK12ou4PSFb36iRVc8iNG38Qc3EXWV1LhBqrM2qCNfCq946fovtbA9tVYzWHnRrqUQN",
  "key25": "3uiatDroLKD8jbn16rTEJmh9xU52YyuidrWAb8CMDHkWC4gv2J47GefKe5NF2qKE1CoYXTBjxaTH5RXaK2EnCnYS",
  "key26": "3YgwEqemR9QK9XjHJiruwucN9nZ2CQ7hDRTKUUKRL3APnSMuSnthwb4s7Zg441gvgXHBYWceMPHfo7Hez2pNPngq",
  "key27": "3t3WeGHoGoRMVGjs1Bp9xa17nNLXQbMCCo7z8A55u1KxG2k46fx3YMiMV2FeMSobRsEFTREm98Y9pSDbwE5YJjey",
  "key28": "TXmPbfuqFesbpcaMGRnXNv3kbP4zeuFnTxUJWmso289Gu4xfBb62FUkYH7RZWnWvzJtvksYoeaRsciHF6qTqNRh",
  "key29": "NyAW1d1sCVJjxDnQ2vj8FirgrkRpEFd7BAhzkEJLVtsMreZAhnKVajcry9aT8CE39JSryBq53MaewgfPn2ZNkbr",
  "key30": "4S7NPUo2UMqrd4GDwAmjDiZ2scJ6Q83RWigP99woUXGFPMGxJs3BAbPqp3QuXRmWuCzf5hNi4YHAnj8VbzprFsoR",
  "key31": "WhuEEypZstYBufSRvRgwotZJR1du62dMd9nvxEAUaKXqhHxSESy31SMbsTvfR71RgK6ueghRz1muB8Yea7wFb5k",
  "key32": "R1Q6whdVfPd5Vj98yHKuxN8PAfsMJRMHh3MH7hDYovvfuX7sPeuZUa6Fhb5nYyzfChL6EiRr8W8vgAzVbw6ztP9",
  "key33": "4mLM3YkNm4gzfsnFtZMQk4WgTj6BUEG2QrmEFtZUqpzkw6zStkpZsF4gYojmqV56ppxzWgTpcSj9hZyHoh75VBbr",
  "key34": "jkpgmTRUERuCSGadkp73Kqjwv1szeznFZsjXEVe7AAui8sDwFJQ8kTgfXi9fPzVJ2bjQSgkWwvfvQKjcCF75Rzk",
  "key35": "4LPEX65sorHr5TysDEdNV2ob9JCdmJiCHEhwDBErwTMuwDbbqoLTqFr3kc9LWKpFQ9EDfrn7PSydwXirUmmXefYT",
  "key36": "3NkXrnX9pVEeyXZFD5WQHVtr1EiKVfohuxu74da1Mwexgopn27dknhGXUG9Zc99FVy588PbeMbSA2cMQKC2LZvdt",
  "key37": "5qJHzn7ZNQFb99uopqArQHdfbmQdTTwmAn5UXv6qLfDXALVBH7WfH6kK5WAXWNdra67nDzCMp8Qhp4J79d2bV1nr",
  "key38": "2iUKNontYP5S7CXrQAayuKUiDnkntmVNhK82Fw3CYLk9TjAaHgKMgzgXvq8g83AzRDxJ5mD9TuQnK63cenWaixu1",
  "key39": "3oC1aFe15k4TuriSN3aCxauPWzGrxkkyymmaxb8gennGcfTn5YTkCAGzYQzrfJqxwfWzyzMjooNBR5uvGifStxSi",
  "key40": "4fxrUzJ8Y3ZJWxjmCm117rFsKy728ATD4DJ1VMhCeDfY4doXSBB2uG5KV9zrfh95v7dV4PV6DnMVs82XqNZYm6Nu",
  "key41": "4wteer1EVc7wdsvuxuDRUpdYN6WAFAmjGif22pdL5j1kLQ3a3eYRVmdfT78cqZsMXBWZqmrK57GDhAMgPCWytbGC",
  "key42": "hj7rhAA3rmPPKD2imjs3zxGTzNxFdz1r8qdFjnYr5xRoXaQawYvjS8bijBqYVejZ6MPAZbn3cxja1JLq6jbNfzU",
  "key43": "4RhzCYpUTM6zBLWAQxnNqaRNGpUEL2iy72jwmbjgt1aFo2YWrHXtijANUB2MGZW6ToTfXfu93WVj4pqXz6yRa7AV",
  "key44": "3hV2e14ADzQUywQB4ymy5qCN4bqbAxMJHM5aWvXTokg5FFCH9NP5zTHeSwCppGUqM16ZdUXhZwZ4kzB8iX67XBhh",
  "key45": "2W5Lg4w9R5iBYwvFh4kzpSPeMTbtQtyckrDmyKH8DzhaNwyYX5qL364EeRnyqgf6skmmX9Qpm4mFGBJtYu91r44V",
  "key46": "5Eg9ybWnNT9HPrNs9usQeSUFHdntSzZu1rXmGuKmz4JLL2ZPnh9ykenG34EYqa6b3oMBPBP47gG3SNry3PtpdY8x"
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
