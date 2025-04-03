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
    "Nq8FBdE4XxJzV46vp3tvqj3XtkPHXdWhkbZG5Z5LCVJXoesibvciCuXsubZPLVsVW6mr6hexuXxD2icTzYkmqKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2decG6c61JHXxpU5ZDMVLE5eHC8QbYajYAsLQxoc9Lq7ruabnxh7LApe3XxuXcVTLQKMADTXeLHegxEGD5gyk6Pt",
  "key1": "2DRc1PiFqQjSwcKRA2vHac3H7KDKTcMqmcxUCxQbzm6EoUi85ivF3m3WXMs6WixQCcP816kFhRRurz5WdtiaanhL",
  "key2": "3LF6afw3rbNDsHxLG66AtxH92wEUmMNBqtkeFwdZXgeddGACTAhNEWssdps6xpkzS1bZ55YR19iMMqJ3TUH2f8Yy",
  "key3": "5sKm2tjZy1M8QYVYuN9re8CB27z836NpV8RdwibDoNYh9A6YothQGUa6ycpB83Y9uqshN72SM6Jnyx3SV5kQec92",
  "key4": "2dBZ3nZP4Fx4AmN9vPmfLF6sYjpdrgi5hkdzxUzCyRDZomgtP6YieP9ePHWyEvNc6xHEg3raRasf4G5PRTc5hR9i",
  "key5": "1yiDtcboFd8QSRhxWMjKmAZcJ6EqBSEwY35M5eLChviS66W4Kojpnd5wFhrEJAF2mYHWpvskJ8jfRLMU5ZgfHtj",
  "key6": "44vibcdU7oeNyiZVs6dSrGaidj1TyRn1ZdcHWcp6R1CChy2mtmq6J8uzXGmSjXZvX5qZ1Lh7a1nsgJjWufSqRi5a",
  "key7": "3iXzi2aFBiN3iHYphYwEohKEpHf8viTTxLxy3YABLWyWXQtbaRGcdwYDKG6E4pr9J1bnuGFEKeLbiVPydM7xs9Qz",
  "key8": "5PbGkbDsiz1EFddejk9YsZU4xDeLXaTdjqsU5gMSVSsYJjr9kKzpTuoPu8SHGWWU2pqBxESL1S46u2xQxpFy6ydP",
  "key9": "H1h2N5NSCSYAEDDp7CBxjwzLKz3ZUvT49kKfHXmk5VvfDesTATg31PeziGXwnqRPfrWe3WRt9kbXnr6xDCeQZqh",
  "key10": "5eTfFSZAF6xQwgB3tETQGL4So5YAUgqBLXGu3J3nVN6EouaX4PPegaT3MTpC3ggCgVwQN9BtyRRBdzaKVYkp3s1U",
  "key11": "3Q6wc67DZNUE8YLG9KEQpf3anCZyVhLEvjhJvKdVbvrFQeVAPSXzS7YyMnhmr3GZxQFyrbxdUrDuRahi7822hFJC",
  "key12": "51GMzbhAcKPAo6R31kCh7AZshrd1APJzoa25W1aY5DJBKyukz8gEnPq7r2AwuzDTQMcBbMKmorfVidb3F8E96vd4",
  "key13": "46PrRjZA47qVdExizZrqJ9yZrQZfUQuLLgoZUvY4mfkBiRhZrr4kWWgS234aABA6hMd2jwbKctyYeFwSi1sGvkH2",
  "key14": "4g6Qn5LZafgx2dPgteemczB6Czf9Anv7igyHBkp6X3qNBU3EEUoJBmmoW7xUQtvxVQt1dW88oFNYPUkiUEcT8DkY",
  "key15": "45YhTb2ZRkK8pdP32nMrxC897phiVk4xtKd46xWTPraFQUysdLWrsorAWqnMt1i8oze73VQVA6wdM2ejs8LxJgr6",
  "key16": "L6c8pSxQUfkgE4BYScRo9sR3dCXdtqqTd9xkGCaze39yteHrbSDap4HrxmzbUnTrErSytbqUfrk9RFeWuL7nGi2",
  "key17": "5CJa1cPT2Hmo47H2w3GAuAeFRJXWiUGHpkxmowtJGKVTTTXJEp5TFR9RwxaiTrKK89sMSfbwvn8JnBfc2L9gCUME",
  "key18": "5YurnLjHdaGAFduhM4CMytrPMMkZDnFkAJUCdAjmiRKJq8kwtXSuMaejScv5o51Y4S2Nxwyhymv7BNfR6CX2FPc8",
  "key19": "5BAQ6dowyHXsUMMHcApwU5UVMawNWMsf2Apu3LqndcNvWwadcpagyCscd3VPvN2vyKDxYexv1A3K45E3gfivAH5J",
  "key20": "3shd223NMU39Y2CNq5ArtKedzXqsszWiELNJHa6BHFRoVhskaRP4ovKswfgYriQ8zzwCd77XuotiTD9woeYHPMjy",
  "key21": "4NRqBQYoQkLG28HfsQN3eVkJd6cqnHo3hYFtkkv1iTwEvDAjB5ka2WHhZ5zsMD6eZhT4q7yNfwUhpPEFLa74BpWn",
  "key22": "s4Gc1G8RsjyhycaC9erzQFSotN7ZJhEUmu1xtsQmouq517zofo8ybDUF8zdeteW1EB6En5WNjGr4WroSCTP53x4",
  "key23": "5EuG25RqJUVq2fDSxMxactjgSvv15mDrPuz2m4pH1TTNd2zbUwYXGjPVrUb4cDRJfkYDuVdzxuSavRUydu66DoX7",
  "key24": "3jJF8dHystdxfDTjiM88Nbvj3e8QkdRNzwmhJFrgPb8ta6shLUBdJmLCeo71G3cgjQc2XMQ59TXxUaMRS19MZH5n",
  "key25": "5MUzbr8TLjm7PEe2dEDt4NydeRzqY4qoj99bm29RNPsTfuVtc2ziDcxCn9XDoUZvXuBW5R7th1PszPgwNfSBbsNV",
  "key26": "2urSnwwqa8gLwiXJaEv4xj7CYtRm1qL2jTcSTY4ZRcMeuzXjRghCxZdB9voEye9aE6GNPMnrLYfqNMGD5HKVQjTN",
  "key27": "5P5ycA61PNwukfSz7k2fSKRd4VXhcwsBn6UgvMnKQ8jpEtAASVLRiGrCJgvxzzivFQ6TH1T9VRCA1sbJ7jU8SMH9",
  "key28": "47QVVqdSKWUmNd3bsNMyj2H1xsTtZ5sZgtbyyDCDukB8BHrfhKgRigiPYPXgLucC2TrbiKHSKdJ3J51QxqqvHttt",
  "key29": "3NgHmtHsLLtpv5ZFvbNevCkroir7dGQVqH8jzoYV8tnTVMq97oegboUrsR1jTAqBRQVUCHyFyigNA1T2ZmnjjaYy",
  "key30": "mhefzdsujdL9n7WCWgajHRAcyJfhF96ECdTtnYj4tZeC7H8cphd58GzPfVPE9i3tSUXBmvbLVKPcTx3dEwhYy23",
  "key31": "4qbnwRovNznFutFBKjdrR873wX9ihPdNsLPaPorBY2wkzxbCKqdiHuPir3Fm9CTtNsPbj1cY46D2TM7hThUH1hnx",
  "key32": "2F9wGi15uWG4E166X3gqTa6JBrVZGa44N4U4nq9UdB2WmHHDFfCTttxHL5wFrktry5NJGUSUBiLYqspaZhmRCQby",
  "key33": "66WYV4f48bLB1FJ1sxJh1musy98wsg81Uzk2o8k1k9XMNkRTYaDKeA8RSpiDcDYfknWHrFDpJ9bEgG82Emp469cs",
  "key34": "veM5NnRcF6aUFG8GR1BCEpR2n6nNE1gYfLMFxWh3RSf1TD3VQca93MagveSmYqtJjvFbvoBguuh2d1zDKwpN3kF",
  "key35": "4tPy6enzXYdgsHbimTNZLW18C7QgF7APhm5Gxfc6NKNaz3eaptNjrZLBNN28YERh8Gv4TZaDEh37QZGg8pCzCad3",
  "key36": "2AawKBz7aUKBS2dQMZBkfPJKfCfDWQSYxoGEedtWrJKjEwU5BJxPCBQRm9iyragYYk6nkKtMYWi7HUtKSBkpFM5H",
  "key37": "5hCuBWG32LJDWdriRfWDSHXtFzQcXgWtspzCxPCrM3eyAyjgjcZxmJKYYQxVQrP3MPbXog6THTzbvy3Suzsx4iCj",
  "key38": "31Qy5e6j8PezTmRyvnAtbi1aLog1siswUzd5UswCMb4gvAZsWvvSZFvF61b44knKHvkuQAd3zLZUiHB7tUNPLJz3",
  "key39": "2DPSzQ9U6cVnimVi4N2BEXnRe4B7J6mQVvBk7XvAYSz61AAhnPqsrbdfVAv92XQ2fmGdRDo5r7PPUbVqVm5FvZ8t",
  "key40": "pG8y8PcdzrbPx5TmPHi6BvMzDfK3K9mwizx4izRiepRQ77SvS3j6Y63iJTkwMcjSK8VmPdAEZSorKmWr65NxaqM",
  "key41": "2Q24Y7fWijT3DMau6rsntV6pWeLYRMtc3EPS9fkZHnX2sJuSAixmd4aTzeVGzqhMyTKeGZtefSgka464eLmKg8Mo",
  "key42": "xJJh3x2SwtVDCkkSMtPpJ7RH5QLMDpnTk1QDM4ZSNYFzo5DqTfpZ1DoAUj2reV9a3ySrJ8d3RJdVEn7QZJd6BHy",
  "key43": "2v9ZEEV4PryRgWYRmv4sFkdoGwkCxWFLkZgNHxswdNGMuF6NPaBMrFdPRMxps5aMLybHGJYdRKPQixNBN7FwSqZ3",
  "key44": "5KwGJXxXShnSM7Bg7r9yCuHEF5LXY4AsG7Mykh6wvE3F1WARX5dbbrqJ3WwTa7wqamgL14Vq92hcy8NajRZdh3oF",
  "key45": "tyrdiDL6zZGMcpTnfo7qHtTwvSiq2RncKLEzy3eEJmjfsCwbvSKmLMh985YDJwkT88jGmWnBGfwe8rfZUk5NUtQ",
  "key46": "5aGShi6CRMJhs7qoBzfqW5NuDG28dyxmb3s9bXzc68iQNeaeSL9xghZTYCWLc5xXu1LSmR9o1HAjnBrRooh8K7o",
  "key47": "4yNV6U4vbfNfRoFX67dqVQzLkmPa2caTSbQA9jxZKGHd9xTwWgktRUpnNLJzVaB4KrxJQQ1AGKzK1xaafYttak9N",
  "key48": "4PjMYjR4VFjuRqXmeEWeibUDnj9SEj1QJW45ygeFEFCUpsbjbfcKzDx1jqkCqa1GNnspL4joDo8q3729aYt95Ypf"
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
