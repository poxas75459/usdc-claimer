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
    "2Uf4gmfJW86m4rdQ9F74QnvqaUBQTZDNZnqUrhnoneEH9TALk2ztz5WhGgqgZFUrjSMJ5ejZzBJsfX9MRoXx3qcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32z21CAnunZkZd8D3DuS38HsE7kRfxwTVDr3xoj2Cp6KdpztifbHZCxyPoYx8wuwYHKVQF6wmxvmsCqCB2SpjxMg",
  "key1": "YXMuq27uD5y8mczYm8PrSyYf7NXD9ojHNBXZNNmsvkRsP4gbPRGFDixY235zfYn7gMkMkFVm4UWsSoMCBXDFdVE",
  "key2": "4arYNmbjNpPH6nwHJseSGUrHs8dqJzvAKpRedgBZ1iaeW8jQAL4qpuWcYEZj4taXt48kWJVFzbN211jHLNvgFtvM",
  "key3": "2NW5cbffCaWSksyntPbab3M8UYgm2Fc9tWuXHbwYXK6H4Kr37a88v5iHwZsjpStKhL5KGrhynhyRzXZ8Ay6P7xF5",
  "key4": "4YhE8S2yzUS6uGNZ9P5pL6i2dDsAQRnAc4PiHYgaJUwznw66evmDUDXQMJvY39DfwdLN8nAyqhRiDLZXRhvHmZVD",
  "key5": "5Dw3azH5S3kqP3dz3eciAYhMnADPBMvxH9KNAgnDnFhmMfZZ3WwvrbM5cri4CSJuVE36UwJiJfVmEUEvDesLD4iy",
  "key6": "4M9MhEi95qXMGSNCeQaXDUP9cyHTWz6ZfG2TyPQT5ZKUSbcvNzg3Eer3qzNmyo6B4xrX2agQCNWH978foDu9kCZm",
  "key7": "6w3MH65Tuoc1bBcrE595VdbeTH2NSqbKVq2e3xcVxX2hV85rzmrrkDYzSyvpxV4wu7k9syAdnWxvupcAtpNuy81",
  "key8": "4iudRaAz7TwUJaQ8bZDBWPUHU9mmrgcrKEoL6gyiN65iFTzRb4GaWcMaEMG3qLDQhkRYQd5jU2ayTZDpnZbjJUVa",
  "key9": "2K8ZrHLKLhU3T8mWHr5wk6cy6L1SsKjviAxqMaUZ4c7uqhyGAsqExmYVrL5C2qjKCEzodsKiMR9ep4CKnzyojRDF",
  "key10": "46KCboiDhF92AhHDUGy4y55Krikx6QD6L2Gs89Av1czYgoEVBPHHHgZDmURgEQv63FX2t1uqN8aV3KaCJqrRoJwC",
  "key11": "5PtmTUf9BoKKdvX8dvGFgXPr94ZarThX5WNhh6GQzkWpSgLBsqbF4X8u9HqktAfA6VGx41ZzdYGMaQFdPY6arZgX",
  "key12": "2w2tnHxZXEMnJqNrX1WEHiKUiN28g7bzuoaCAbbW8n1caRaUxTpajF6Z5ZJE6VWDhtTRigUuSgdDmVQ7YZ4X9Jgn",
  "key13": "3capJrWgceDbFjfCX3Mwe5oLeXm8Kh2dAwmUGVqvDcwLE2mtUzKjjn1ynGPVvJ1jdhKQoNADW4sbqELewa594Mxz",
  "key14": "4FUdFwfL434G2Af2BGGcZtcdmKsebGn3ehgwu33aKLPUDkMwyd9X14jXZDn3NuQ9k5mGevzSWs24L1S6AsiMTnGE",
  "key15": "i4zpZf1xb8W2s7VGjnZZSVddV9wKfCL3WjCHkGfJsj1fRq44wfU4g8SaiqaGeh2Nc1GhZX6d47f6yPi5tUNMrAL",
  "key16": "2ijfRTeqe9hjzTZKo66T7QMQSm1MkMxJSxp9zLBEBPCE218aMDH7S7TqrXz7icbECyFVmkuTtGrKUEB1ZR1QnYTT",
  "key17": "btqHqr4JCSTLCNkfnsBAm2n1AQi1WJ9CMt3nxkBuiLy6p9SuYH3EKJLPd5pHLZhjj68nXRiDyFnjRZNqviGwwEG",
  "key18": "3hzJqUTJqfQJMBVhxUogXJXew6W625ceaVF15e2XYqBcyBJsCyNyf5yk61cHwRGiGDPynyiyFtPb3GK1BzPWS5e",
  "key19": "5RaDJ8XNnA3Y7iu9EXTdJCfTnCre2XpqRPnyC18vnASXCTnPSwPCWT4mJ6FFrRxZZQBatnDHaUJ3yuvpUhLaGFRS",
  "key20": "5shDhmbf7PWYfhhcjFpkXc2SfX4cSnZqdMpkeZT1MXy2jrsVTFmcG5zP7c2QKHdjewPxzQ5wyi86y8gqWBMfvpZs",
  "key21": "4EBJcA1eCrVn8cK62ftZfXEZ8Xsj2MdRjTf4v4UVYfsTQnaKStwxcYk92sR4REEhAHn4uQtK1HkGEBcVCAmGhzqy",
  "key22": "UAPmkM8hFK8qrYgC3RHUwSm5Ahk1rQLUrUCJB1DzyBsMTqwwPUiJLwpZkhs93T5wnvL6BE1iFip7ukCLjMfZvHM",
  "key23": "5Mw3Xeq8uUzEwgytBUqX4xzZfWuGNNJTVTaxFnoXUsybisuQTsU3kbtGjQ29dk37bPEFe6DLnWrPn8eyXJaWVm2n",
  "key24": "CFZGN8qV67cckMWPGBNxw55PXBYbPsnLQn8EBV4PDLXXJsjWe4Z9WPCeLRTbkn1qpA5ECJDjY1HnaUSePUWvGoi",
  "key25": "4nR53tCFTLVxxupiNtJVXCWqNvMGsNfdZN5HUiqMCxYNu9DNu1dyPtCgFeii3CyCaeNgJKKxoiSmzDHNbcneeKkw",
  "key26": "25GvnU3JbjmiD5JAVHXoGoohs8XJpSc7VujLuJoH1eTuuPeHbiJcwcGvBtUHSozUqTPQrDvcutCBLRgafFyxtEmL",
  "key27": "2ar3p4d4BgPuUdGenSA8sfbo7AedgYxdnyuzqm6S9tkAQYGpeWML5bep4aHk9vYtUYht5FB88s7ocrGA8rV87G87",
  "key28": "5EBqZbCD8jtFj13Npjr3zPffDyPjRMVwwBE1WSoLkXjnkJkEGERi6RkQmDV956wygVd5Beb4PYYGL79Yw7LasWuS",
  "key29": "3G6Lxk78riA4LjgqgBLzFxM21YBALmRSbVGg4Dj77WqabJVptt9ynYHWwfWUvt6Z4zJhiBe8TnpTcpm2YE6GmeBf",
  "key30": "57dYaG8pTsfqdGJWysJn5AB7vALJ1dG7Bfac8Ck2VFBAxtT8aRZkSwfPwzxxQ1q7Wyq9WqByhVZLMUJ9zNizi1KZ",
  "key31": "5CYVBrhCKN6L6gGHWPTbjgNftKm3nxJZKDKNFuQiXZmJXmYmxzgUQBvaGKycafF2a1VDZaAZ7ZsrqveKaPQUNtiT",
  "key32": "3gu7QfF3xoyW7y18V2N7rT2NkXUqnZBFZqmPWJ9mRHcj8am7Q1k7Hh4eUK5TrVp4nGpAfdQf4suVaiMVUBM9LUDZ",
  "key33": "3BXDFEhBC5X5VT7xqBYZyh6QZ8cFr2LK7NY9TJKTX8VRxtoATKBFzgFMczWfSHc9xfTeMyD1YaKTRFVeiB9Rr6Sk",
  "key34": "5fUjTh6Bs5pGSAPSatgbeUueQQwTd7W9MS8GCyz5eTUKs15z8GAiLz8H8WcEN48cACRDpV13mqTPFw6mpWsXeokU",
  "key35": "4yaRnBu5V5nQCpPb7RtZbkbQuQRB6tvtafsQnXsGmEpYdCrcPA9c7Pr18NSqawFv8QQc6UzGHzsPb1ZfWCq3xo2V",
  "key36": "4hS9RwEmdcUHFqFgCHjDxpzSGWTrUN1hK5gkmtzUBQMDmMQvRuwvRJTc3pxQCm5K2kCm7k2SnzcwBvgWphP1iBcm",
  "key37": "4nwgvoAH9JKghtwfWXRc1FXA2bj7t3MDRENxR3bk4r5N3QoU3cPo6Pxgrubuh2LCHrRhC2BDswHm1a5gMSV4RipL",
  "key38": "4xaNEeg7YbSa14PeV2eyD7uhtQCkvPH2sJ6U3Pg1Cf7g1qiaUXbX8NKDirH46vmPNxi5Q6F8ZqSLnszXHnsunVkx",
  "key39": "3hUMHDMtB6w5qFScz9z9VjFbt6tNQrxYpLSYgvxLnLc8Qduz5LJTj6MwCmH5bYaGeY8qHwh37HBgZEyygco8DNqw"
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
