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
    "5Qj5YgcdJ9YRGmfQyovgJS8qGud1EYrgEtFJG5DevytNShk2p4KXaC75vfY1owjTge2zLttvie3qACqsEkcGM5dJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vFAV3hp3JGPQhEV7G6qKEDLoaNMG5DYFcSuSjxgykq6sjJAmWUDTkzFs9dv7v5X8aLsMGoTEmDrKHEGyRHVQr7Z",
  "key1": "3pfFfZH62EX1ZnaPoZaduvdo5Mc8qxBifTAxDtsAomKwX1i8zQ9jBoZeZSTEdJJLZrYn3M4sJGRihHVFZbfCjYuN",
  "key2": "3mM22ZnrDmte8CTnHc229KY2qnAYhQnRuGakfoDYn4Fti1umJwiTuw5qkUHnFtLtqoRfndLT7CpXHQzV46hjmg6i",
  "key3": "dB5FvkKyc1rGRYuHgJLaG6dX82BA95oYex6SPL7iPhfD5fCCcvmkjYH9M1ETDwVyBFdJC8BtSCVgEC6n927MXnR",
  "key4": "5u5Tf1S3Ycwfj9rBTW6GuMsZfFaimf5sLQZQHfLmt2tapsxyreGp2NgPG9XNrFs449iznVbKnPNu91a5dTY93n5t",
  "key5": "3K6UTznVemcSeydhmJ3WVhyFgknhRF1Av5RJAUW6NyPNfKqs6CWBpzhSzUWxhDrdzkew8dxxV6s2CDvnBmHqCS2G",
  "key6": "q9L54ATAZYThfmkre4g3rCfdwVLBens3HnA9LFc9JnDi7957S6wRz8zf48doMkwMc9o4xj85RTQVw4WQKvNQmx5",
  "key7": "5uQCfZmhamisBBfWYZVRehEekahc2TTcbEJ8UgDcR1jx4QBg7ZhNPrmDFEtvX7xw4EjJsrJicif5PDGSj8ftbbYM",
  "key8": "3DYhvy4926HqDXULUX1EDLP3e3FJ8dE3PMUUMVdD5EiNbJWbex2iPja8MksVBP2Qzpm1TETvAnewzsypmVqPXhy6",
  "key9": "5LSGEDrztG9JGj4xMEC172Yn7dkWoL33PnpkBHFz5Ehzbep22iEnfwFjE2wFzAaMXmpzy17XDywA3Gxze6g3JB39",
  "key10": "4gHiouftrEMsEUNYxEVRmhvRKbwFbqQ9kjRpTwAebiyL2qrHr5SjejSwpTPQL8Bm2FstN7TEphQgHjErC51zL5fn",
  "key11": "22or8pafn9mD5UQNZcxNvVUWBeREhabXt8z9sXUy7HnUuYaWfUz7ab9hwtZAD8mdwXvxvkuxDWwwgJr4VziM4vAU",
  "key12": "4VXo7Db1C52NCqKUVAskQYqTQyCJGnbDzFWf61ik8hx7b4BDFCFEweRxHF62BRvuttzApLvKnYijF8WEfaE6btbR",
  "key13": "4xyZhdfTJhvkyMusF8gRCt4XrjM5eWNPb9LQdVwf4ikXQC7W655bBhdQr7o367PxkmgDqZ9AW3B3APRzaUtc6paX",
  "key14": "2fKSEvUGoTrKeMrggzBbZ2uXAjHv7s5mJkTD9phHaYrNEx631oTe94FZd3AfhrszAAopPakxbNTvRDwuqc8Khx2P",
  "key15": "WWfrAEcLAm56cfMQBmSVfTg1Ym8NupmPALY3ADo776TDhPCCQdpiDCYFFsxcJQSceY8WUi8d4LEdnRgottNvc26",
  "key16": "5wVSEveEkedBACPcyJ48mQoHfciyBHGNjMd5EUvJQairwcoGfG9aUMH2LJtJuZYqRW1XZK48L3YYZERWQdab8HfT",
  "key17": "5EdjJ4TUTFQ95c7AxJ5Gt495L3Qw2k2WnqobTkkbwyCEg4hVyj1zfGT687N63qvqgibQBo9N3jfZev2XUhChUQN3",
  "key18": "4vxzvcGx32XiVqkZ8Rx3WsnEYUHKkzUrmiTcEypCDFhvFfbyuacC1Z3BeevVd65e9PUN7Y4gVhwoUR8jQkM1MdYV",
  "key19": "2fsFJRrdYxXnpWqtuWagwnc3uwj59oxVHqk21sTwf4TE4aPTbsmGJzsGBHaq3uCKaRP3Ho5rr5UMvFPHkv5YpaeT",
  "key20": "fohZDUoQC9y4p5cgHmDRu15KsKZ7fxhoWGB4FVAZ1g9DmAdTokAH6Nds7tjQfv5oGiRiynT376PYJWoMTKLAfYE",
  "key21": "kbqNGDYvK5uNKp2dRnoGwTtNeANFWXj9NB8Tsqozj6v2MwjzQwKAWtXr6HKbx5pqDBiUYeRSGvfG6YxkF7PZuJZ",
  "key22": "4sx4Kqp5xmojUSzyvJw78JaNd62kNP3A1nyJDmWoPmN3pmvdTcyoABLeT5nnGmkbZg28manuGuC8zZSmD2jLgcJg",
  "key23": "3jSgmdZ3WRb3jt9swrzkvME2VrsXEdDmkDYdCwr9izqDV3i7biqgxDjGTuwtsK3DcAQChQBhuszoKMMHU9xWWhm1",
  "key24": "3m9qJWQtmCTLyJzqkK67TDxCPVWKq8ugZ9pjtLuyAJT1B6YTqY5Pj1sVGZ8fMJyTbNvQFT62in3w1GW6DA1xjis5",
  "key25": "4nz4H6cfTAUXeFozfagyhBFVZ5pvNi17grwWpyCBb1ZqRw3qmKvu2Y8eYnSAZjbpnC4vBuBiXrwADYpobFLaB2wM",
  "key26": "neKVY6ag5M9UFFYT2ZrfxxWdPaEkwwMYhYPYbTVqsbKy8DVb5LVKkYd2TLAXFrUNv9w4Nm946TgbV7MbyDGcvTR",
  "key27": "5HAZ5HWZCzsdPbnj2HasUS5yjgVk2FFyCk8CtV7xuC2xKJKWjBQHXP3CpWwTqaTTh2wFkGZtb9uy4A73vt9i2e1e",
  "key28": "8Qmn5Aje5yEHyfQrisuABQ3kxHnX6vAaxMwpWpmgcHujWQoLurEwSesewM2KZYCpyTBb1eN28B1Zvhx4Wh3HNk5",
  "key29": "4bPEXWBn2vejQjpACpmviqQz1t6pNLRYkDN4RU5d8UrJa3HptFNFDGiYbUHLWvSEtLXrG4G9yi4bgmpVnGxKz99M",
  "key30": "3fnRwX9jH9T6VyQAZzYCHXGoAqztQLzDtjfXp6hS4ZPhLfrLwXYHb81eK4PRNLkm8AZwbv553s5VRBZsvbvcr41F",
  "key31": "4EQrJ6tFXbTBErEWQFUnb1XksNLBizWzpfCCp8uGfEAK8LeXquzjfpdhsiM4taP5HJJeJEGDW9DT6oD87wPd9DWS",
  "key32": "4qM6MZB5hWATBDS5NeiZQHecfWuqix7NR5GzzNjP5HTvm94fK8dRZJv1ExEnFYEF9nJ991Q4yr6nMp4vfGpTpRz5",
  "key33": "kMmMKDJahUXW41AWyRxNctNzUu4CG9zUgEVipW5jGMvmxKDfzy7RnBfZAuiwpFtWtADZxmoBy1VBVPxGNVrNMgU",
  "key34": "eNDwJs9JTj7b8VmSAcwDKXPFqj1H4wkM9m1Jksu329mP2Xs8n3KFWaPqv8CCjBA1tVsenNtpphQ9unMwS8hsnrc",
  "key35": "2xTeSvw3BvBDwLNcSZ74zDk8nYVdA8xaogEJRUetsfNZvLNnTxSyJ88yZuQfkxhVxon3UtdbmrfkbE3CAeupkdN7"
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
