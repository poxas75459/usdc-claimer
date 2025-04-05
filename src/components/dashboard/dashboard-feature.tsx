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
    "5DrYkWtjGJTWbbTm1vsh9Socta3aSqDCCXiPjhvusC7rXKzFSvSt8LxuZ5voxAZM2gFLq9k248obbwxgsKHftnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F6Em4ecNjRiRhb2DYjE3MZCy39Co4e72WwHyZA9AFe5kJXURfnhaC7A5w31GUu3Ap17WVYotMcFs3JN5gvhZfqM",
  "key1": "3iEoX668JuGHpJDMJQWsebdd3N3TbY1eoeoCuMKPYRmbWERE8JXcevVeGD3wFMwpHHW6f9zNeZVYd7sVmfeLsuv",
  "key2": "39RAzwYVgEontbDQi37RwfaKeZk8roJkv9MwHveNyXMyprgw2tp66mhEdyXEYcEg3YPqjaFEMEFz3df1xSTdiRPT",
  "key3": "3pVBCGhzcmFmsp4QEWguLnRT6JnrUrmfa3N7kqUbU4LoJun4dUKMr6fn3hYShc7K52GcC6rxLo8YWXHqqJXEcw5y",
  "key4": "3RDrGEZ91SnzCGT7ERdNzdpNcyaAhAbQsR2cyGQPNu4uwBUeApWMEsPnBougxDtMnGk3xo9exdaSftCunnuPPMa2",
  "key5": "3FT4XDFG6amYuMiTYnnDRN5Mu8acKadZ7kpWApznHZALNwdUDRu2b3LibQyt6A6s5AWKhouVLG269faLdNXsvspu",
  "key6": "4wqh5Hf17jJnogecpei3sj1MjoLzoFMVGfigNjmombdPBGVtpRT7BFBFH5ABPPTgNMuvrXudyv7RYtYmdn8XXwgb",
  "key7": "5AqNVXiMezarPQ1yS1kRgz9rjE7m9YFr1bwzKuCsCdqW5uyTJJss6M7Mby543TmhMQ5VGW9dy7m8F3kjuCH6KLd7",
  "key8": "5mKmESYqkR8Cpx4i8bBCVXW4M92kpGwBE2FVvC1TJAsXXcH3EzLTDGV7KTPqKNuy7eV72yE4maBZT2sCGzWj6JZw",
  "key9": "5RT32QrBLfJxvSE1QJkycmpgnpzatJv4gYxPMWpUmajAmuqiGxV7zosDGQKJUnHBLCtLFq2YR1WaRg9ZtbBfPVTu",
  "key10": "64q7UheNHLYMmScaHqs6nkzuk95tcRnmeY6qDhvPkvtMqSUaVvRXoGNXf1tzXF5gJVFzj2F7svadDt1CQq9x11J3",
  "key11": "3Xovo8UZiGxc3WzYgYq8UKDTHFroG85y3deEBN9sFVed8YZM4A8jGQkfLUDz9dX5nMmSXwuF2d5NT7yasKX8V8Dj",
  "key12": "Mz6zkgUSbs3LJuzYmouMSom5FWrqtLM2H8kN3fae88d71hN8b3s3wxGnd7r2aJZWNM2Rm8XtwwHkfQypNEA4bmJ",
  "key13": "5XBVMFv6u7VJw6pvi2V8azpJd84kFtQZgmmdsxZG3nVsm7LYxUVLgPi7kQX9R3VRDg66GCADKgc3Fd5UpFTwTAsE",
  "key14": "iVvGQn1yTxrZ1qeiZ1vZDrEWuxFHAaPTUA34sMZqN9EjHpdAgMqniyuGKFH6m6MYpkdnK2gvMbnHG6wBuKKhtkN",
  "key15": "2x9Qv3ir694dVLawgSRKGJ9Nynw4fhsUpTzLJqkxxJi1275PsDNkSnesFep9hbwERhc4gj8YVw7A3hiGbWwgM7dC",
  "key16": "5rERmZmoF2MLd6nTwcyfADc3ahj7Mksb78g6Lm3ECU8ryv9iv5aSu9puRgdwEGZHJCX7sJuSNHpDD8gKSNLsvm1",
  "key17": "5LphYqzqcpPCRnsnRLYegrgigMv8GEnt4gqjLqNWxfjy3HHzesqq8pfKSesE9MN2HDUU8nVD9ERMtw7migSdMocx",
  "key18": "2RpT7v5LUSWBX4Yq3y8xRkD6UdvziCcZN1JHph7JWuzLj4rX2QeVPp9Biq2L8Z7TTbnFYzrCU8vV5oWt5H5kFuzi",
  "key19": "4pUEntr9HU52vLMef5LkAY3D2fqqoTvPbuQ6rUXgrPvVGoFNc1kt6cj6yUvJnW1mu7dXu5WZFsXHRZJY7faPd5VF",
  "key20": "hER8fe1C9mk1pYRHm1mKu2sydrjw1TtA5uozgfxcYCYRXXmeKtsUg4ugKBMUWLViDRs7mnnTN26b5Gsze21LT4F",
  "key21": "25iftywttDHmwb3p3g2hKBhrev6ZueAi83CLkaWhm6CyXsAVRbit5NKZbCD19R6uiKAvcK84iEaPaGRrCoFhzncQ",
  "key22": "5LYg2PvTb4da8K7oLbBygKFEwGo9q7H2XdSu3nsWMS5x3RTDU5xkMgVQ1LujUiKaVx9yNStXFsbyjAWzP8q8z6JT",
  "key23": "4B5dQ1GSmTxBfhByEbQyFNE9s2uNQWAoHnwCPrmMzLCEENbEjr7K534zpNCNxLadmCJWJttpJ41fcLWWGXn295NG",
  "key24": "2PgJmhZVWyqZ5URFhwxL5SjUJXTHdCckr13xbyBSpPuZJPa5gmAtcdxB44JFguDfcwDJj1wtK2H86UowV75C2JKm",
  "key25": "5rCN16xvtAJjfYpUS8N6QtKaUWcS5KiPMcGzfLoXHKFsTs6HaiGVDqRA6KcU72fanSWavE9Ee1iES6iJznqZL8s1",
  "key26": "2cHYD6hWpjuorzvhUMyPuWqTpaaKRZYZkr2or6hYKxR6q5waitrjWfVzKK6PMuazHRyqC9SmHpa5uJnMjuVMduxs",
  "key27": "63APSfd8hGtY84rgVaa491f61yu84zw128RJ5ipRMKKD7hxsKC7sFqoE79BtLB9iTLKZseTW8MwhWWKo6LWDjDjN",
  "key28": "418zmqePsfa3ZhMPNiweD2mfESKq8P51LnXfkxSnXWW9DmFanZfmDZEkyzSWRi14bNTrRoNWnPQpPF12rGdAdBNS",
  "key29": "4Wd4Kkyw6796Fo52BXU9jaPNkezVZ8gH4W2yRGr7pX15rc9P8M4nE3Bg4jvX765MpC2w94KcY5JpSY6t8ZrcPZ6J",
  "key30": "22KHZ6Enngsiri4ktJ9n4vDNiPKbqmxhdAuVeHy4LoEgZi39Gv7aufecvJdyzSGrekDMCU1GN75gkxB2R6saWDrj",
  "key31": "T49LYXvEmG9VSk9jR8GvxKnBGm8CrsGdxbUEE7Mo2QpE4nqQG6bb33UvNUes2mha2rkFqKmVJVmHvkpXDM4ECRi",
  "key32": "4GHN4mQRySdbGGkyJhuj8awUxcSrKep5uVZ7GqAioCLJUobpRoCFX5BF4rc8BaP64U4eGfb4nzNr5PZcn5v3ELaP",
  "key33": "TKZaHLoGdMzo3Ekmae9vzb4qagA3CZxEZoPLu3StQVSmhxryV3revvK8nfadkqrwmjbU76XjAisPNeULLvU2YSK"
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
