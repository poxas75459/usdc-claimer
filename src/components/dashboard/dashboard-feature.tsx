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
    "kMuSnPdao6npfb2AaLFqMGqFSE6ePyphfPo4ewjmJLaW2DTzaHk6X7Dw7oLctZ3UPoX7YuBPaoyXxqrEbsqVWNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nDAQFKvohufnpPjssUENmTs6pEa59ycW9TauKm6VruuAGP3BVkqXw1VgCGrmWVRmtwsxpNatVng4f7TwY331b7X",
  "key1": "4T3CKgwofMV269HhXhnczB2Jbfy3wknxMaV513jE8XfdHFndusxmyYkTXRJA6jHHUoMP2ckuJy18KFVXcp9ZpjY8",
  "key2": "2pTsPioTZ6utEdiLTcMx4EAMsaMJBPcjJLXyFdv9oh4x8K4oNYNe1icwk4cfkqYvM3aqTboxrNGmLr4imVD7yD9M",
  "key3": "64QVUkB3qdPcdPcFA5Vmcs6At7CGiM47vRvHzw2Uh3bcQNiVwLSvDqFTm47JW41Qd2Zk61MnWYmqcwN7G32s5Tkk",
  "key4": "4bxCwc4zGSDdD8gF2qhQfuHDAJeKet28tKHZTgDwSgibM1WYcbQVCX7BLxa9oRa1dFFr3f46d6MTEeNNrswFhyY2",
  "key5": "4ZdWCa9jXS46Dm9oYXHEcTEC7Qg9mqCVBj4iYAAtUkH7VCaJDAZ4U4Bt8sQbUgbNfgHMaYkeG7nCguXr2zEFrvMi",
  "key6": "26RyofhkNRUi6vV9zdSke6oVuS3PtBgtGBFLVgdS7kPAaHxqv967gxXBVM5VDSLBPmL4RZxy5J5BHUJG3uY8sirj",
  "key7": "5qiVGRCKNkLa5kpB4kskWR3daUu5i3XytMq1Cbni7cwEMcpgHcrLxKnK2SbUNvgQjAH1gDChQdHnzeSvJ5LjK59i",
  "key8": "2oCPvKwwjsiQrLhJ4d3C67P1Cng2ujUMzZCyE3qW4UtPt1qH1PqDQH2HbvFtrScRLE5nqgsrcptzgzxfyJpoATXZ",
  "key9": "2ZrJkxeo915fbviUP1XtSrBFPraHxc3WgyEmUQLr7rJx4dFPE8Z6pkgpcRN76bFkCZnBXuzDybudnFHj6QkcrBjb",
  "key10": "2Q4VCWrict4Pf5ZgJWrxL6ftr7Bik6wSdQ1YXyL4MTTuEzKD6wbmdq9um3kiGcvowLkW1KVN9d6fjaeYytTHgZC1",
  "key11": "3NLwdhWFUT2JWtzt5uQ7GBfa3uDneGKxrRSe6CRxUpC3KzP3rYLwyPTWvJbf5uqnpcyGFPFor81ftRNjvdPhQcBW",
  "key12": "4MLtRm2GqEXy7yyqbtVGVqbvrGUyFgXz9Skmkrg4eVu9yqnTaT6Z7BykucVR7qVCEzAY3r14THDeTW9PKp7fERXx",
  "key13": "sznPJmPCLTMSQCe4myj2rY6Hhq979ikwikY1SGnyoztu2Cuo37DYzh32PxhMY7TPrzMyy5CgmCmktCkMcUqEFAn",
  "key14": "2mUxb8rbzF1Vhx7aYeztJjuH6AYeyCGBJsm5jpBWfQkJXh54tsnqtKYatsVSWHRd6aqyMLKTzjwXNg2dsc1MU9uh",
  "key15": "xhk1aZHk6DXP6uWTwjdfxkB91ukDQXs9qRhjdZzYJ9qgEW6UZLCm1okHtZSo5cu7skaTQUFAM1kYAEe8HTitHVW",
  "key16": "FLVUD1c3NoJbUvcjAJNUy46enpNTcMdTJQ4Xw3poYCgC3hNdEFQU6zbwiF9BNQE3QfqCu9ZZrbvSfCWeWgaxfhv",
  "key17": "22D7tsDt6UNngpeNz71Tw47HNgu96EWgv8peef65QSQ1ynPJEC3GUUjZ7vebHaaSuqPhxXZZKGTHcgqCrGFj3Cmg",
  "key18": "5AZj1Bbf69wYM5MYSExhdBgvreerJ7t1ocppdYnTczdGh4o2BJnQhzUrZDXpf1GyLFucapdyUy8RGVgwu4J8gqi1",
  "key19": "663S23CtkGUgQpsyEVtibP9W8qaCSw7jvT2VBm3nM7TL5gHkMseoAmsFQBxjhbMke6t2L9GP3kyBitVwoqsQE5i7",
  "key20": "5MLScLagr2ahpAsjvBK45tCGD92diQxrBCfmRBf1KhXhPb47ihiFPKpevAJX4oR8tYo8oXgWZfsdfbshWpzA587E",
  "key21": "27MoAxYa2yNMM4BeyF6zMixyS3tmk6cqVtpw9GrrD1avvLJkhiTNUHp6q9DWYsn7ukyrVgd1TQKzqn759gedxr5b",
  "key22": "WBkaLjbE5wc8bFa8V3NVJvea4iXye3TWXacpHKXJpA4pegpEHmbtD9Gmzcezp6t4UavHDdUoRSCXH3WGH5gaUbq",
  "key23": "2xU6p47ZrpgyucmTyfanSgWAuwskHnRNX36PtuJKceFjMBqWJHQprni3kJWLpWTyMAAQQGtkAePuwU3TUDuVug6n",
  "key24": "2BAHDtpMxZLvvYGskfsf4FR5sHHHybtGRgHqkteEaFUDLrWYwCG7QoT4H9T1WEqseKFnbioUyDzt6CPt11apGsB2",
  "key25": "Vppmwe8qXuChdWkKwqhXvK4KDmgv7EtsbXSUp4UDuZVCuXEBR3JU7px9Wqfx1Yv83KwkpRFSVZRtddBRP7RHWj9",
  "key26": "c7NwV5jyiLtgKENhgc89DCRgooTAwDBM18xDU7EQkB6KDnZSo6ZeR63nnFkFudjZWzVxcCV1LxFphHVLeRmNDrh",
  "key27": "4XEtufT9QR8h1Qd6uWHVjJ1WJzuxYrcjPQ62udvTPDDQc4xNu9xaiNnv4crjQzo32P9ZW9tghdbM8cFpMyJBQbXa",
  "key28": "2TzAtTpNTQfnMGzexHQ6R3TP6eeqBLMD9FmTYZX8TS7VMnQs4rBM7ffVYN642TRVd4v6btmoNuFQ3NAXVXn7ryrf",
  "key29": "4vwf4cBhs2RzuGtZsyN2ZUWN4htcbGGwiWnbDzpSHyLqAWro4jH8VLv3fBrVkuNV9n5J8bTNz9cK77tQ6QdZkLfn",
  "key30": "5zh9tCopa4QcR5FBwkkFQpS1cAJunErbwNxr16Ld27Cwu5mvVQP51g6YmLXRovosREiKZen4gxEUU8DWKBDr264i",
  "key31": "2NcrxaoYoF9S5CvgGYnsjden2FLd4iiBMtqhCpBj2z5qouHqGt71YgwtmLXDYDTDbTXu5qCdUNKZYwirUysndy12",
  "key32": "3hpiFmeoqgXVggTfRzhq7h591NU1PWaqy192JAW2HY2PiSRkPw12FygbDQkh2fwEDfFGq5W3oYD3zqZS1CddABc3",
  "key33": "4XnDNX8f5Uev9XCr2nAiDYEFuxfevoNfYf4qfeLUeUKzKpTQwW9GVWHhf5pGgs9uSEzLqaZGK7eKwY5E4hUHETtd",
  "key34": "2sARp8pn2buNGzhrgWw7Kmwkht89Xva3st1ftUMQCW3HzDdeasim4mh6AJgRCg9itcBgwUQX2jxhcJ4cRnAgMtg",
  "key35": "3kALqvWybGmdnyaEiZvxsmDsmDECmJQavXSWvnBwc2kenpHJYsPTvSZ2UKXZJyzyomjmoPYbuKZ2rqg5YCSjpKhX",
  "key36": "DquAw2kjGbcQErcnrUGpnQyFshUTHTbq1ZafXwkdFK2ot47CPaK8TXHYqjK5kig7CvFYvzkFftgEGPUBfduxUjw",
  "key37": "NsTSvLaAg5SnKrNGMgzMX5j7QSjG7gPP7Q61PCkwcuAM8RYK2suKqH8Sypf9jYAzD1a1dtYomx2hq77HV3Yt6Hs",
  "key38": "5M14vWNEdip1a2mYxPdSAVkQ93552dPfPqMZrST5WaFCuATnC3KycvXqo13hFrHmqbe4SNyAb432LQFeCvHq7kn9",
  "key39": "rWvDajzrQ8aMMgBHyGsumr4R32xzjjutA6WhWjGbvYtrbX3aL7q9qtM4KXpGBYMSNStymfoT9XVHJDCbTPYp6FP",
  "key40": "Jhey5icca9QqTGEHQZqMrK3EHG9b6SJVyTQ5G2PtFRG34jZXkMX4q4xtaPwvMNVgjgaCmQEP2MbDpcMn6HgsNmc",
  "key41": "yzuyJHv3qjigFJmH6JaVAYFvouZnt9s1QwkmWipiGtgX8wBYvk5VK9BJykLZwJizmhcPb87sKfCYssG2bVuZdUT",
  "key42": "4Z3VALNK1iaGDC7TtkjocamRdEo3f8Bs1hRCXC7jSJmcPUa8hDrBr8eGybx8Lg4aSTnj7XQqYcC6owkJxfRjNRTD",
  "key43": "2qroMSP7oLTXc9xnLYfY6ytF1WEn8oEDTjCW42CfsUX8XPuSR6JTeXjtDKBvMWbhPRW3PT6Z1CWcsK7D53iXAC5U",
  "key44": "5BuWSCErEJ8NJWvPBNCWvnLSHsZnqucmA3FXtpHWnXDXCKKfu7jTCW5awywdVUwQNStYUsEvT5Asi6k2YMLqVoPS",
  "key45": "2d5ZJSxj9fPJEfgXf4Y3NPjd6xs7qdj8vfvoUrnUuGsqgvThah5fg1FgEadcYy5TvS4pPPeHcxD1j345Re7Nd5Hr",
  "key46": "44oVDARkwdwga1XHXbVHt67LkQHTPRzgFeRA31PtsTVnRHJ3bMqjt7cRB5cb2U7GXnhQgKZpJYfyBZwnqe3mm1oH",
  "key47": "56RQZdyZbeSochQZx34kmU7QmjZDs73pgniLdWGqg4BJUBjFqZQV9yEHXvivcWfigstDincBBpi3r5yjDoCmaHb8",
  "key48": "5ciaXvSka2oRjLNL3rDaDFMHdNHmHdnDJdHwWJ8K4Q3ohTBMdgfPZERjhQfmArfuXnmyYEeTxqtDNPmCQN191Vi8",
  "key49": "47bjw46Qzbq8gJekR3RRoy9ELAcZ3vQJ42KRmGMRxztQmYLwvCNVcyDVaZRwZjS3PNgMbutfLXXuDms846Buy3ga"
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
