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
    "5b4dZrc5iZQ63kCihoKMHPeNb7uMFcdQXSWrGUhFNbQh1eiwFzP53N6cPLJ3bVedfyCqm7WF3E621hLrj3jzJJaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YUWZG4RwPuMkEsLLiEkqjdU23n8cpTLvujhxb8oeX1aMYCHF6F3uA2v6vkda9UiJgsujYNL2ZBrmNajv747SqQX",
  "key1": "21wZWuRLKxTjiaCV5j1YWL4upz2AXWGA9D4Zct7cVtm56Jtj6z8YA9jfNdgVQBxWdkFGDc4PT8K2fh4htz5h6ora",
  "key2": "jpu6TvGUotYNtWX9YPtps9FrdXvqqApu4CiZC6uwx6MEozGLGw2kD4MetGngoFG3fwSuvJTWrxSWdFynrMKLUcG",
  "key3": "23WhpX4BUmnttqw7CaZYq8z8qPuKkrQPpCsSeVG5mw8KqmsPDDqvcJKVWpJgDdvRBtdUSYMMiMCssUinVDyjeJ26",
  "key4": "3C8Y7ncBvimZnq8HRh9KpdurQuQk32UDzqm5byftPG9jeC4i8zaQLvNVQwdVgXmDjG5Wgwo7e4zupgwQ2JrT1Sx3",
  "key5": "5NK6YAZVv5BUtRTNGwRZ91xR2dTm9nAmRBwU284GB7QXpVMjECUJAyEXkgDvtjhFAyrzgsWvRBVZgaUyAoepUtBJ",
  "key6": "5LrFbAd9VNRXrLhkawog7xesAD5PdEd5Kk46bDFBbfjW7q13sQpmjCy229PzGoNZ1yFFyki9387sKYsmtD2HTjas",
  "key7": "tzExQEbhB4Nsuw4bWSx4nZhw7qwJ8BVDDWBERZH4sy23X6nZ6PKJEyebzSQnWPSFQ126D8f8UQLi8S73fpgARjZ",
  "key8": "3FNR6bqq6dkEbp22eg35JYqRfYUCyXYHpY1RCP2s2kNW36QC1mNy6dQmb2Rv9kV1cYn5aVeecgFGh1kk63MSYumJ",
  "key9": "4DcBNDdc7dPaRWwq8GwcY7jwCxDaZGBFYNHm2E91RRxwCgJWVk1ejnHitLJx54XtK92WNjvWrXogyucDE4PCb1W8",
  "key10": "25kqVxSwJSpfczaftRz56p9RqizUZAXc2KTH9qyYk3kC5wPu2rRr7ppvSTonqNYEeZ3v6BC279upbQtX3ziyA31U",
  "key11": "5UU3X3X1vk7dx9eNUea2K1qSoLV1YKEZM4oSbXUvvvujDcjJfnhneeRt7AM4ytjgyYQ8tV8TGhcmTLx1LXoQBCrA",
  "key12": "5rZZ6afhXQDPbBa14bgzuvoo5cqwmUHMxsisjJMZr2WxcK4sngt5tvZTRP5WavHMb49ecNnp8QhVVacJvMnKNpYz",
  "key13": "3ktxmQpSKZ73ugn7cdnNbNncqgaC6jgo6UdNL23pt3uGE61SqnYoZXPn1CUhekq5foaAZUedkQ1dwd5LWTaBx3W4",
  "key14": "3MjQjD2PKfs2n39q6hZKTn7jPeYsYcbf5XjRAbHNX1FuqU3fwNADMW52LJyCTx1arxioc4wG28AMxC5LL5tX5ME5",
  "key15": "5CspEQjxQxFPRC8QJkDf9EKLADHicuzg2V1UaSFNLG3A5BuhtmPE3dhJAfKJD4bLNTAvrP6RnY12oDP5AQJipVLH",
  "key16": "ufS2dAstP5RJT7kPu5scinQLPFjvvnvenVn16eghT7i2RfQy88T6n8fb6hymoXDiN91TtK9gxYkMbyzUrGCfe9v",
  "key17": "3UNVvkjEVhPxomj8z8ybCSMLopVBcK4LYHvBHcnSjsRRtckydQGMvqu3yh994VkDFQZ27HVWxo2S39rdtWdb3xvw",
  "key18": "4ZCfiJZStfRRot1QBwJPUxBF3FHqyBzLMWwZ9YSotJ1j7DvgGH3Ynf8chUu33eSvr8nX49anZ1L33hT2rTiSZYyk",
  "key19": "3qZtWQqUQbGZEJDcfoSLwDnHUuzaKY74Ux5MxuvUvD16f776W9Q9pbarzRTWEZHsoQBLbUukHxDEjNLUGyX19vCv",
  "key20": "4a7GTqsjfxiWWn5SQFtba7enxHi7orG45oRipo2Ax4TQEUu3WvNQxTyxYAEv7SN3EVmLhAZHzCTNah8x25ky5x9g",
  "key21": "4v9GYcgCsZSgSsrcxU7tKGxxTbWMkNJiboZRQ7obV56P8w63aSfizDB7aLLUjRfy85GiumqHz5ELxqKspZKwdS18",
  "key22": "JotLeyArnGRomYWqGvQMp3diqNpS67XSux9bkAPuUmpc63i3AnZtdnByDrqFRWh9wLgQhsP166pBdp9HPUwETTs",
  "key23": "3FNyBGgNYo4FPw6f2nfPaVRJJfYxYx934nzWYJyXLoidQUndaCyAxt4C9HN2cjUcMYYX9uzHWQQjwWFCR82L6qTu",
  "key24": "UJJFBxnYE7uP2DaurQdFPL2gv1npKzTkRZ1NFs8BFL7848PYvEtoQNX9cPHdK7ZAKz3hrc4cvWUGFDR7QbA4JdA",
  "key25": "3Ad1zrKq91UdHtmZZA5gFjGZfaXtis6TXDeKdMWbk3j9VxG1vFF2DT57ph3fQwVsXTjtiYf4U1nHDfH7abbZGbCr",
  "key26": "3Ya4dvDGSzRdxDK6zXVEfrv4b1brA6gXe28y1qLcksErU1kxJF2UpzD1zgrWcJEi69tuSdU8hnaSwJigW9mhjMKv",
  "key27": "3RjHxFdJ6225nyX2mv2zqymZr4Hbpk39xEegtBzHD5Mv2RaA24jzBXVf1rRwcFVgLrQibW4nS9ni2LQsdDNVk1rt",
  "key28": "5wDzMpB4FXSRbNKRWb8uCYRWG9rmkDU724SBhamhd3nEwjDqHBcWsFru23Kt9QyL9U2P8BFZg3te4qEDqmjAipBc",
  "key29": "rmrHPT9bQVtJRoqrqoaUuXVip26vDMV7hP6E1sJg6gAyKMnKmzv6ULhGeXvdr53QyXRU7ZYBgaEQ2oAcRVbkh8a",
  "key30": "4RLPQUVZTefjr4ceUWYAoCNfkEDDLFMQuWLd2qduLD8wRiX8tcmpa78XeK67Uf3atBsbAcyp2YxVAQUPfApUcAkQ",
  "key31": "LSCsAr4ofn2B6mmHiW3AQHKjxauV8ZvWYo24in4gtQmaj8eteeDSfgEmgRGtpf4yGMCkEmEmeGG5PXb3pUE3UqH",
  "key32": "3KPR2tejAxNMb7AeEkeqVHbwZarAJzuPZiKARQcU65JAi6kgQiDp71XM3cPAgBjKVJqdYBgsbkimMrgeqmvBcuJ7",
  "key33": "2NfZ5KcEWY2JsV2NXReu9vRfhatb4EbkhjLcNQvS6NmJjGZrLwQJsLpKc4D4emzNsE3X12zZQREd7WpvE5U8JDrf",
  "key34": "5s1zZz7F36iTZHAB3GLR7Qdxs9CUvkgw7D5WjiWsH4xdK9zmpD2Ft4xqApqJXgFnsE7GL3YdZvtU22g3RXGRQdVx",
  "key35": "5iKpbgoqRQZaNrRi2Hr5cUm8sqZLf1PJM5aWcyApphQZpiR122Vx9LWGL8QXjSSgJLc313YHGCZKo7ysHVZ64edd",
  "key36": "2eUprqQmNgb6fiX9Qs9YQ6Nm24UfDdYKmupoC8uky4aryPX66qngggrX5P9VUECvPY28wwv7wfWGw3jhL2wedSh",
  "key37": "2GL28YuJ2ZCe7ojMu392pYdTFrwSMQT7PGUboTFqvxcVrQsgr1FGHJhwoXFPCgXyVJUJtSmTmHpUbEoQVTcrXhXJ",
  "key38": "5khHNUJAXdBrpT3icudkRwVUkqZNCvEvVQRRcHnZZJu3Qocgu75yGkYPQwJfZTCbJ4E5Tn29XQvjL3nUSLRYvR74",
  "key39": "2q6awXKULQkx8nMajSPrfhfpgibmLW3R6XnKgKJYPggZb35TW6cZhWPT3YSxLiCerG4Thk3D9MZrGfes4qbuBkQQ",
  "key40": "2WhdwHv6yAEPvKhSGNMPe6kMmZb4uHwTwxbN5JBaxFASttu61gGmBZ1Biebkz18JxBfvpaUWT9kgiZrvjghjoyuq",
  "key41": "3HFrwxAhibn2y4RTCTjUfHRwvRZf6viFvaXcyWJWgR635oizxohiRJ7gSREaYhp48iP3zMzSJyCjWmo8xumJumYo",
  "key42": "5zxQY5qswGZAQ9gtX14kYyaZHVjA8TmBAtFRRoDpFQsVmB1Gyz3Ci54phH5wHHRbNiitycmD4Gzzzj76gRsc8yAo",
  "key43": "67PysHpDXkFWkLYrwNU9XjX64F62RXnYPaVZbgM7JA48VD52FCfygs2tUaMR44k94KJnqYewVePL7LgSZAmX11Lr",
  "key44": "2NqaTTHVnYdiFqgsLz7RaWoZ5kHY9rCJU4CiJ1qvFkA1AzpwxeDxZAM7vZdKPpyaU9VuNjt9oauoKFj6RoyBwZoS",
  "key45": "2xxvjjxicEdTbUHDUegVQyfwoaruzNSpsiXi1XdLzyhLjEJZPSYE9fxbnH4mRj4kKPFTbZVeViLwGio8RGLJZRG4",
  "key46": "5LZwYJ7skSwtyHzwrn1uAp6B83WNunkhRiasidrSFRKdRM4S252Zfffq2hQKnoAVwmN3bqs3swBy66wFMUWWixPD",
  "key47": "9juXQ8pYN5CSjx6NYiZXq6dBxBcBT9CM75XWK8BEYEg4LZddUe4A6mJ7k3LjbvqcLo7AHcsfvEY85hbd4YkMFDm",
  "key48": "4qknwLpkX7BHwU1W3c7MTT6ccfGWqnmHqf6iNpnQTGchSBx6F3ZT41yZon87t19HUHyXHg5DAQkLFEoz3v8MGgs8",
  "key49": "5QqXAEWDKjQqsGH6kh8N8XUgcjkV5pNNq43ke8oYKxFfPoo9ViQroo8LZKaTDKzgzZ7EdLyP8RFnkqciqihtXLqQ"
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
