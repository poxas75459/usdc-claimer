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
    "311gbdXB5aFqqMTodJYHeds39CrqspmX1MM7yPw2LeDdbgHAyiU6oN21eN9yAFG1SZxtcvKLSGxbCpNYoWnFkXAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vn6NsQXpzabc5U5ktZDr7CfhNSmu95aV1LZhaoSqpoi6Vo42TYWkd27yrAjgzYb4cZVKXhTd9Avh6HcJo9vpny2",
  "key1": "5cEB2tybidW2udNYNQhgEkBxMCL5XwHPHr4stgzJdzZTsMdLFHKgcPS95n2HeW2XoayLbhfxHrMPsTUokNNWnKsX",
  "key2": "acK3LnrWxFSmbTyeu1rd6ifkmni5g6iE9ZCmS2pYjmA4M4smFbSEJ3huMqk5UBT35kwxmBD9ci6L5P9hX1HkYfa",
  "key3": "4KPznADXhw3F2P7hwu9Eoy7q9oEZQuyHzLwJ1dXyFzXSyYp4eM7Xh2MM2dRpbS5xSryhTvgU6BWa1DqCZ2SFVVeT",
  "key4": "3uY4UeEA2aH2GhzuuYqCPkxgLqXheTccRGCgLJcAGQDfACjR7rx4C7hd5B1tQW5MGLjog3RaR7oQc8TwcRryKEFy",
  "key5": "3B14hRTKVnXC1AY7v4a3DMypTgHEAsS5akhiXS8NqoNbdCT8jstK996G1Stq792brWeELtk9HD4xPGm2kAQAPsfe",
  "key6": "rWFrGK5nWrgXPGQC6bnJm4htMf59s9P8S4Bqt6cBYRusCYJaYkfL8EP7Jn83LPx9W3iKXfGQYXKierdBjhhXDA4",
  "key7": "66KoWK4uRYzKcAbh4iQa2qvC6fYZaLjjXTYUvh51i4z4HCVb5i3JVQdAkq7iBR7bc9frJeNSw14LCkJ8TUjG3FCE",
  "key8": "4JPpLVbYRZzyAcg7BFxCWnL36XqxczEm2FJ1A7oc1V9AKypcx5dYEchr5aLxGPoH1BJDxAUAiENNiEHfLUZdRJd7",
  "key9": "2bJcoW6HcTcdH7e14TvDEwLaZEyRS8DdshXKrnd61FPZtciWv5BxpoSrHZKYMHELsuRADthtr4E7q5nrovaT1wDM",
  "key10": "3VW3HS9JfQrspE4qVUKZRzqEdRsp1cVP8HfvPZjxgrCBdLnLrgqNQwdYMBz4AzruYAiQoFQ1aSQpnaUdQYVkobVC",
  "key11": "5A5jxyfSa915vE3GhQJCbkU2ZzhP92GcZVNNXQCHnhMt7vwb1YDq433id4bY3pS6ryoHB1PGK7P3zPKrvTt6DZ6C",
  "key12": "SQbMgzMF5ZUDbuYdCudNxFpoamiNQFzASdTurPgVmXR9zXDWsCXy7NYEeBzCYU7Ri7PkAtbTFyNPtbUaKpRtyKA",
  "key13": "3qhsEeR2epe2SDzXqQFSjizramRHxxzp8MjFydD9pNJeYwgp4p8AE9PWeomyZFgQbnk11jwpCetjL7ZKoDpKD2ed",
  "key14": "5HnEr6sF2Gk6kZfHExDjXSS5noznV1EjfuG9NpNU7RESBGafE7aPW2WDP5s8xekz7pkALG6DByreyB3YN4PbovdA",
  "key15": "5VoqpsuZT7JD37rMY5msByMF3kaTc2BsjQWa9ojqwYyk7HbTS9swf84bvk4UjpsbPtnmqcdcKMvnNoZYdGcktzKp",
  "key16": "4ELvNLJhnckPSVcb7b3vNNmKZBJzqSVxndeZEeEN5GCP5p8Kbpp4QhYWibGF88d7t5RH3J9qi9FPQPgH9osAn4sx",
  "key17": "4b1cHz83KQeyVSiSr7LncBaMtMDqNrNwEACoewvoTpNumU4w98KAYjUto75Cg8gw6ZzjWm7Wa24wYeWQB7mbPNSQ",
  "key18": "o1RThgQ2ZR1N2EfYM5bbUBn1pUeXub8F56LFsNh4b6XMEtgfs4muN5bvhy9HrGyjeXmKD9Rergix3TQmzBqruEb",
  "key19": "5PG7WA4crjjoD9vtuXbb1ynqm1FdRAfRgDCuxgBK5NaQsMSsPZPfUowjJvCdjCQYzLJeeRW579rCDuqofDiE3vq1",
  "key20": "5wB6sKb2umdbAj1Kjqathx8ZrEnfmFkQYGchX3B5ez16x1mJ3TQfz7bn17fUQPid37nR3hBwVH68wWN5VN4PupGD",
  "key21": "3iEFsexC9PCA3CHAbAvRVKgmthasCwAZWthpTBa2hpZiYo6dxLuuuhe34JKWnpujWW1ZPngFHbje23m2E8X7nW4B",
  "key22": "voKHmRey21kaiGHBLHJSxutc2iUwxKHFNHxRK7afdjeeeaxdcM4xdeqSfu6kRtD1YqhQKjmkNz9vFJTsQQp7EKL",
  "key23": "4SLN9fmnBvEAm4H72EvCsxJUnLBK3u7AkNAjVE6V5iVJPxTgEucneDQYa1a3G1AxDDz1tHkKRr6WwgJhiuGdVfSq",
  "key24": "57mvNFzGFWyCAuyd4TaFMiwbG7cWXVBnrGkzY4MZnfY7zCTnbDUsmVWjmdUU8bDKqri1DW13Pf29Kk9vgMs2uygk",
  "key25": "4y8iavsRfRn4u2d4f9pbEv4QPKzfkNH8L4UoPo6ixoutHxLecybCMH3363L6aX4V9wGYth4vKELoKX9g9Y3txyGQ",
  "key26": "zfucA5QPeb2YH5zZ3daufuPEf8E68n2FuL9w3KWSYifyJrDbJUpMGacYmd2Evkrsfvgf55Fj8PjNywLNviXvz9e",
  "key27": "58bbvnkPox3P8xs4GTMjSgfh9t8RwNvSvHNX7wGNndSRfwYpUNxFaBjXuxPhEG2HrYytgUUEcNPqejEvWRw2pQPm",
  "key28": "5H4NfFKWrEHbX5whY6LMBdMUBycHxv6CtNhweV53ReVe8irSoRGea187xnHgsTsZY2PKPBEyPXqup81S5KfAyK46",
  "key29": "3zuEs8fFT7Xa768GUnAafa7xxvkMS6aUzpVRyC3B2taSjfWBTSUvEeUT6GwvnLzxhpPMok9pQS5JxoT7PwGSbFCS",
  "key30": "5f6nXwXFPvmpwB5sCiq6esEnz4YCH5VBjrCpezpvc9MjgFrmioj7iJJewL9shcAbbefphfrHtUTJUgUjcimMaPH2",
  "key31": "4fBHWghoBm3fPKd2cWMFiPuhVnbQgYJH1JenqTDeKg5dGFQ74eswhVWWJoS6JBA8HNt3AJpbM8p1r9nCHNbU8vYm",
  "key32": "2qxQVMaXhdtCPXEyVyaz2ZarYXskFryeCj8UZVoqLwF2FaPA6hSo17255bMBoEVAbrTs5tpsPmzUt2gcLgJ5c9ZS"
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
