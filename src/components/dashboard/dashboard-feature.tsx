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
    "3B8aRwzaLUcWJmE7ZAve3VWrCMqy8SNtanTyVPF314qywEUXiocP4gMadMimDtHnKPcqd9Eh15nzwctubwRYJzd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7zWad4Ney2Nfsba4ZgXJnEv1V7vfuGgfsga1C1fEECzWt7KtaFaaat4TeTY6yciKYLfjBrYXSirutJPGxZbq88",
  "key1": "3z1H2ygFoH8zpTbX4nSFaUYmieFW8ftHrbVEwTVfZYiPEGqRw4w9GoMf9rVeyJdQkqQP8qrhrfnBvXwR46s12sM7",
  "key2": "3z6gvEwq9AeYDxC8kb2pXHuT3cXS9m4oq5SSA8PuMuMQv8kwtMTLn8uAgb6b2pf19XUUH7k75EeQHboPYnhb3iLn",
  "key3": "375iX8JHa6PuwqfyTAazC8q3LVbpLkGiGyUkRB6GtvJAb9dfdg6s674UX8rsP2fLTCbBV2EKW4zmvGGADJozqvuY",
  "key4": "5FC1WbxT39cghVNHciwNpZpQ6V19rwwzSjv9g7MaxCoPX1N1E5J1NR1QbobXtmXx9aNkjWiGoV33cWJjcT7ChPmA",
  "key5": "3ByBZoRb3GQKwycd333AHF7Cr1WZhMhmkpGaErtzjrfnArTJkZm3WeDdo8wzs2cCKWgk7eEQdfsCDnXkPyRXq6Jt",
  "key6": "65HEpTKY1tky5EHs3JbRNnxDQENQcnH1XRfm3ALSJKd9zRfL6XxF3qgvdMrgLKrhY8BdLcJ48Qr8hdzHh6tgXXfM",
  "key7": "fHTNyBtwdHzocRTDjWHjPRW8EpVJf9xwHh7PYTEfaVZ4uJVi6aLcxYjW83RVin9aoaDnrPbxMt7TVSc6Ly4vqGC",
  "key8": "5WpJBjFNqmQysxcTsiVxikfi12KBuVX9swCjZn5NSBn4PUWXctABdpwUC7E4wKN9LkyZTYT4UsxUpbNgwMNyW5AL",
  "key9": "3pqBs4QXpLd2PrT45gGTiY46iB6JRaD6pwVCYezjZiRgkUjdkVa6cYcV87U3kZMR2aTj79t2W5U1XbZPge1MP2ce",
  "key10": "5mcp2NzT64UMAZJgYs5RcCi4H1xqqs7cVpRxBHnLVqZd7WkkRZpV7wFNJ74mrZpnz7vthHWoMoJo8DLujtkudb87",
  "key11": "3CbwP5osUZ3fS5HwCkF4Q7AdSPeGujynEFh8uYSjkizFfnTG7NeMvDSPWPxjj8NDWiG2TchtMM9gfqnjR9nF85Sw",
  "key12": "4tw5Ge7kwx6cZRDgk7L2FTZrkuTsHkdZbJrVtPWfh2uvhvk8LUW7QCF4icvYXpZ8FZK1ohgvqGEm5N93vJCyyiZG",
  "key13": "3nyMStgpEdc7TqcqhqjbV3yc3XZTRR5UWL3xhyakk9jreEMV8wwPgzUu99WxdVKkVLT8fj4ntL3By9zhEtxuFpU5",
  "key14": "365vJ96rr2fcLVAsMeYcNwRtfbU9CgaPPxWiQfuH6Newk42sFviQzYmN4s3xCHzUE5q6GG3yQ6kvkqpWumTWHd3Q",
  "key15": "2Bjf2mJE1bjKZ5JGhWu6Fv3J93WXpTfr9tcwu4cd8Wm4dLr9junzkbRHcW28fGC2Li3wbQ3e3fF2akPKut1fu9H3",
  "key16": "3qjQk822yaijXA4yTpA7JHQxgjAZ7pPnQxDMh7KTR6NzLc23Z4ryhvAGBtsVZn3vEQrhLtaDTMNUsTHPbwC1k8jy",
  "key17": "3xr923SCWQGLsQbq3BkWYHPesy2oV1tfTUaw3waxSV6zFECUj3bGdPxqbGsGuPTXM128rhHP46uRvUtPDf6mAUt8",
  "key18": "47R11uAnDY3WAt2fVy8579dbKxZx9F6G3322baxWAXadG9AAGdy5kfB9Ftp4EyUEBsH32Df2Aox8m7966GhXXXPa",
  "key19": "qvmk8mPqEaJeDDmerba9ri8ycpAdcARUzVUVnErwUim7HsafLts53mDHnao7Q1gz8voFd6iscreTviVj2oCUsYS",
  "key20": "5K5bQULeTU47jtZXBALoNbrPFwJnbXefcPvJ1JdbTYohH4g5uNXHX7etW8gHP2advxhqvQaYQ6BqhLUGZPhMCv8d",
  "key21": "5TW5mFHH7h8G7WSy5hC2jXsq2uPjxLK6WqK4qjH6dBTrskmZ4u6DTh7zKfUT9zQadms6cdC7EFKkKF5Bq8uF1xMj",
  "key22": "3zWcZkFENwBE4e7uSaj6Da7CgZ9pbEFXGQZpsNFpfNxcfRFa2zaVKMpGBVdHonWKU3aeBicvyDd8k65nEzAD1Tbq",
  "key23": "cxoGj2736BCq3sa3A47HFBdzdgxZhCA4SaAJbfAtTgx3cyoauMC9MvWW6t9NVRkWcdytDkSHwG26RRLwyh6EL9U",
  "key24": "2Zrz28YksdRXkPYc28bkTngUng67UniUQr8RiB2WrykkMygDm5dLHCbyhLtaV1uApHeWwCACiVdvXGWZbiuzBzKY",
  "key25": "4gENhrti1vgsg5bkxevyUmEUSKg2RGn6tYvPJwbnkG45dKQhrY4VtgyMTPfV8d6jtqL4NSvLFPM4eSxfBoUAQJC5",
  "key26": "pkJpr8aRsoxyeE36xSVJDuvHHfBaMU9UqoVnWhcNw8i7HRpGczJqarvPP6kC1R1g5dg3swDFQqd7Gg2a4GsaAG6",
  "key27": "27vFJ7tfYxLiUXjN1d5x1iyhBTPMaW4PKsHAxMvhUU6n5tbcBo4XLaVJ7jVuBbm62Vhq2anQgAeVapFKoG9ipXCX",
  "key28": "4E1GuBJb7H6uRYAoqNnmy8fynYetArSCieZNmUq3fXJbQ5Tth3cHgymTC4bhz7VsNd8Xwq3fRE37AtqgGhkJzaY4",
  "key29": "KdX8dVfCi7UWaeqSrTot5fZvX7eKwF8URzLyGSjFJPn1kWkWvFGJJSzpAuwn6JvPEUt1yPzo3m46aweH7tV3BJY",
  "key30": "srK7pTdVPz17c1ZphXrfn5K4RaHW9sqepTFWE5RhA7yZjrsm6gnHR4ESnaD65xgZRp4nfWBUEth4EfmVREVC9NP",
  "key31": "ybDdWs6wThjqdLLA9de6Rsp2MXWuXyMYGzrSubjJC97Gqi2ct1i7Q1BVWRGhHCVKPvm7gWJ8mFAxvsm7G8gqXZn",
  "key32": "2B8afTmZEadFTYryQvc8Df2HSuVAnMD1Ac9bs6QDCqa6YpGGTvMpPk5br6dZwSmEaRu8MGwfa5JV1mdy9advSwtQ",
  "key33": "3Ks4doVNSo45ZQrupML4JxGTZx7AsUi1VjUsJTtCpLj8Pyd5ZNEni2KH975dysJ7a8fpFY6mxPjaJKyaEcvxvwbP",
  "key34": "35MgeWq2nGmACLBFshPmhhY8hAPThyQP8DbZnXVteDKHbpeJtF35JorUhkWNSpVhpk4wgWD8PqcnsSBuAMMuZnQo",
  "key35": "5w28yzT4KME3iiowFVhysFEjERhSdDLSEwYxDtCuULs63wVnhYjQjvabRvBHu8yEUhqjS9Taqj6K3u8bUrP1iVt1",
  "key36": "4Ux2mzcCQhmCqjrtFaFxxRzFTcdSkvrv9EsEY4iYgc63P5v9kJQDQMCyNfaf7NfkXoXbk2MM2GFqyMKCscbrpKNj",
  "key37": "4QuxzU7oeycVAc1gLixW9okbBSCrhLrfQEDdsxTVXXfDyLAtoQgmhY8TWcMyCJr1sgvxcns41awWdkGZNCEgFbuA",
  "key38": "5DmDbBMrghd4qECp3zDAtVtXYJRvFZ1PXsAzGp4QjAeNyZ84tnZtUDr9itFrr9VkXH7TJrAHDuP5AwwoYePeD8F1"
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
