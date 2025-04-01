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
    "5P62fXCZWFV8sWTnvVs2SEfxm4KQwCfPDN2nx2Ae4jncC2U93g3zaPVdCpjxHJQimpJ5gxN3RVpTEwpfpvxpzGFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CMgCJhytTTV11E266E4npxTntQC8xeGzCgBBgC4JCNgD5KbAKAb62gctsQS6433G1E8Q6sqW2n3hDQx49nEpyLA",
  "key1": "N19LCTCBJPXbbq9s2SpA62EDuib8kgF8FLvcPx6gdMJj5cvinyxBHb9tR36MxjARZLv1MFVFuSadM9KPsYst26U",
  "key2": "4xMhZD28jEREi3Bx8mmke2iVJTZTDZxtCTR4ww7og3Bt7AkiHmKuz13BjLpkbdwvnoXDWAyViFaWRtuSApr3x98U",
  "key3": "4Mfi21Qe1uB2PwdoWTSZkgpEzvtnZoreBDp8XuJsGccRkX482afivr6YqaVvTRU9K6vqJ32kRqcBHUpXjvHwCVUn",
  "key4": "339DKQ59Wb2Y2DPj1Ub98NF6Hc5jSBYapHVcJMUkxoG41gigqGrZwymQrQ6APqQiL8XkfHkBGf9Q5agBLcSnC2Nd",
  "key5": "67c6jmrJDhKy8gkmEbJ4Tz6CaV1ur9SBG8ueXKqrncvkDGjh8Yb7h7tR3xZwVTNq7eZueHNvJ3WDHwaRLU6uNtkz",
  "key6": "4DgYNuGWYfpxCp6z3Y22Er3JfgyREQRew9bX16qAA3F4CgrNsKn7ntPR1iBNR3MngS7Anf1xz9NNDoHg9ksKwWF7",
  "key7": "5VYqSAu34tsWwPNungiFKr63Jxm8zrd3on4hFWUK4pWqo7hFMTQNS5mKSQ6gZbBHaq2TUFFQkzQFyqkyPqUxXWo4",
  "key8": "cHEEUdxmt3pQRuaHZhT1uFvBi5FMsQiVZVbYo1jANQf1o7gjG2AKwmkoxR6UEALRChmVCMxVr8uKSgvU2NRU9sp",
  "key9": "338A5VJAm1htbKMJNhbGf7FVNC9YzEMrfQLSxVhU515ktAKfrxord8qrMDv6cFrqgCuQthbghgxBpRLCpnjfhQ3J",
  "key10": "2X1RHuFCEPmYFx7K3kj9vLt1s9WKyCBVAtzrfgBHwuv7haz7t4PBciKm7qZ471m299A6B7RN6b1XqJ5Ef2PD5Yy3",
  "key11": "4j1DnWxxYHFEeDFLmbktTC93MPQCQja5XvjGGwpGToQp6kUxbyCTarJQJedHSBFsZA1ba27m7fmXToDUipToAVGX",
  "key12": "3mNQB8yHNDQyfwLwWB5mAFHQktjLgdCWitFEN6EunYcV4RNR8jjC87h8gRmYo6xVAm2CcThesDadHoTE7C9HvXNs",
  "key13": "4HZEtkYh3kyHrRUCM5m9xKRc3oAopj5MdHzKjRCt53LpKEZru5nPvo8aNdPBAoCFT4FrP4Rm5HCvZ82n23NppjmK",
  "key14": "z4t2TAuQ1RhfL2ycseoZhu63eoueJcqHRBzYimLEop176DZQqkLUcRG7fUmF4Vf7NbkNKmYRKZpfhhEd2fLy498",
  "key15": "58wwruXaGpHnApBCVEX5QctHQWCkyzuzVTEoWakg5CuVcxr2hzMaQgoKpnyBoheqbyzUSuMZSBDAwfH3wB9txRsz",
  "key16": "4x7xhKgisR5nZiZVPYzuHrNqLwKxb2iD9rgNuGw7mnU8y5c3kpLjFCw2URwSARMxcyaHZyTWJ1q2HLPiQ8FG8dtb",
  "key17": "2f3Ye5RZiVMtLMxP2MDPkjJMbZPgpQKtTC2QwTeinirR3n1Ux3ypDqrSg9JiASSSiqM6g6SztSTymggpMvtd4dqt",
  "key18": "2SEHG2jqu1x9NZ917YvizvfqLiMWgwgUSZLb7AhJtJwWg7RPLEExNtwF9bHMEzVutJpJYf4UGzeufB2KHbGvvecz",
  "key19": "2kAiMjhdyGgumLpoNRUa3hsnr3V4pV81fZ3xxRvtzW9Rs95a4axfnoGqnKEPEbz8vP1SQZWk1HJ3fKRPLhRsSf3P",
  "key20": "5qH7E4Ezvp4eMBQDgJ6uCf8iZ2KUxEH66uDkCSz5RykQWroN9WMB62BMLccsKTzTHwHh4nMukrJhGQ46v6Cr9Z5K",
  "key21": "2YJeBor7YGQpkYXkPf5uDXgz6WaoFR3yfuWbw3JD4jhaB25WjDvdkkrT4331LN1hVWMxn5SZLyDomKwEyo9vYaio",
  "key22": "Q2U8HTwdvLJzsroWmxbbffdfzpyCJPwjxxoVd7jxedZLEbBoCyqyF4TWEzSn1PNy1u8gfyeWhjCGF8iCcvi1CHi",
  "key23": "DnDtFo8ufUTikGs7udYphWKN5XvwymTheRhvtQFwLzMBxiUoVZNcqy692fWghsPFNrbMmMws9TxYG8XfZ1QEun6",
  "key24": "26QQpWQnkirXDSTpjEqC2hyuEAE6ehUfEXDhfSkemue4EE6BFYK52E2HSKWEjx8hhJqaN1nYexdkDzqJ7AXEm1Hj",
  "key25": "4M9WkTXctjDmr6vhQ7RfkBcWcavqnbBj2TY4QjgDPg2wv1P1qpDtwmRce6NJSw9iZA5PwNcFeWk8rQyDZ5tvrmbk",
  "key26": "8sqAPah3MnFpy1UQh7NFAmycnxeNs7wJRA92L1Cb68YydbMEbhWPNWWVwJ3Me8ztM2PHYctw1hdcXpR1P3AitdL",
  "key27": "5N6w7YF6UKhsWRcEX5bJ42p6NvhZhUXs57bUbY5MFh8QtXx7ktvS21sW3a8FGs7VVLjfnzMx3GrSVBcexH9MEvs5",
  "key28": "2JPKFh65davVDDjDh8f5ZsndPt9gkzTgwQLWeGvvxWzEDZLnfKnSdHbTNh7iWxcjXePY1PRgnnbiydZRBWvy6WH4",
  "key29": "2xvKyFbTyGmhjEfizm42UvWnax4XFc6PVThC2LeNqw2m9wF2PK3KFgnfCjkbNb5i77ScxgXwL9bDXpmPyUAH5Lik",
  "key30": "5WU4puxsy4Po4UAdymj2KbXyT3JSHbcUyNjo9atYX5Dk5cKcfTqRCsBvkp88m38Yqr6LnhVzW7XaLg8AxvPnh4Ac",
  "key31": "35F6L3dt8B7DbqxaPZfMw9WMyRSfRvt2Z7nZDAJFAjwxV2yHo85hupLx9M4F3jSz6CDLxGs8em3Yi33x6cXSQMDw",
  "key32": "3ezLWkscBALtF4tSnNbbScnERaMPYy3ooTzMSpJLz15TnAm24B1EhVbByr1a4YLqfNyd6HVVnazjc5usDt9kUcW8",
  "key33": "jzzdZPHujith5VVKcy7V54TD9VrtM4cvppHHobvyqpcqC2B49Pd8FDzE95Ced4fZZf1ftmZMGnBJV462ffNs7Fy",
  "key34": "3s6ygbktiauLeeK4iibadikEFvRAqdoht4QhJRUMux65KZKbh4oGDJejG31jzB8u95ow3xCJ8pbxewCwEnTB749G",
  "key35": "zeij5DnZAMsVj8YwLXTzKAPXdNFEVaN45htXxG8nY5zEemCj73U9FkocL556V11DRAwLfxqGGJgxL15a9ntRE9w",
  "key36": "7boNjqpPBy93VXPRsekj5S4kYPQmaJD98bGL7UmDAhzGYnLzby4pyo7gz49dBT4HoB6v7rTWhcvg62ym5dDwGYr"
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
