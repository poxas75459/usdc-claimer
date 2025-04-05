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
    "3TZhYPZAqukDTBVVgE9cf5cuMXGGKByqvLxuv2JxSNqzic88XUvfRprgNu8Je4BBxQgYDKng2TbdRwtf4P5irZRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tq5MrK4wUUnY5sJBYEeu2Wb3s9x3Z9s7je1bwxB5Rd15YHsyAtdYFEft6qRrNvSyyAkuP72f6RXhX1bCPgnigbb",
  "key1": "5c1rSgJ2ppdHZ3M4TgwFAkfNVVtusiGgj55gyvKH7FXzKKZQSXpjtKxdyyir9mX3n6vRjpm3CwGE7JKZQMvb5GRW",
  "key2": "3dkaJD1oUwrCWWAWNiUYhpmdxe6Ruz9VpZujZJAiAXuTfjg2ruwsEXesRk7TWdz2BFnEQKuke88HN9mUNvadci3",
  "key3": "4hhufmh6FASChV2WyyKbzoHdYYgPfVjanPKGw3sVgzdgXeKKFUbctiQmXqHiHHk5WoLc7FGMNG2gRgjUGns1X6BP",
  "key4": "5ZjiGmCDUEkWfYY7oGJNwmHGJZBtMKoqH8q6mjFHHLM9C7c65gDaieEb4Sm5BtSNwkytVQ1Jrjx5CZ3uWeUfZ7br",
  "key5": "4hcdU31GTupLP5VS2suTwksvrpfJ3bGxHTkeEDf2ktHsSo9XBuqziwRtvnZZ6UZKazkbVYTuvLjiL7kZPXVA9gs6",
  "key6": "4nU77dCJ1ckGJCmmsr5MRc4dNRwsj8jxnWVdWowFTetwZudT3GUNG5CuRNYciRGyX5kGva5Q8YH9gxfn31L1Moom",
  "key7": "47VjPcZEWwswVYK42Qq8DaQgRqF7tnVxPeWAqcNWxWHPDE7fsuj2T3Tn7bnyroRmHLNRro9GWZvzJ8zpGWBXfNb2",
  "key8": "2PbpufsHbVvw7apt2B7hJCTqEycmrdkYo35mywJtd78eCD6Yp3RNowARsGbqMkp8AHTsTAGhfGnZpa3DkxdajBHg",
  "key9": "4HTfsGBUXars3CxPMCi4vhSq1WgFrJDxEDonbcXSfUWw6UASM57UP9jmxxi8gVAQvjWFG6M4dX6pVPvBoeAjoUFD",
  "key10": "2RpwcexHR11zw5VjQCXPpP96oJpZYyTECB2MrkNDNBJvFxPLiwbH8yv2aEVyeykgUMZ7FZGVjPaGrUG8sG31jeoC",
  "key11": "2htakB2A7FmDTuysZuJGArSL7Foxxk2FRbSE1ZX7hHGfYkVKcBM6Zef727QTnbyiSTLEKfZ25U1HpjjGAF51Lvbg",
  "key12": "5H9AP5Bc4e9REK6VLRrB2SP9hQbcTWoENZFaRmMW3pVKF4P1oJFMN876LQjjMJxZEaJHo43Z8Eg4Z5FACfVUYVLp",
  "key13": "G48Edh5Nvyu8LoMsKrVtnjGLbFd1nT28quJNjndE2hw1Q7sEbkEE9y8sPf3TaodivWS5CabkFRi829D8fYiDTfK",
  "key14": "THP9PhCJJ4Gqy2ZXGyt1evzQ7wbemG9r3McM7GafcM2ihCLCCek4vMyCM6CJPzrxbpxe25xfkPh1mnLRm9TMKDD",
  "key15": "5CBTHinGVmw9bg4ze6QyETYiqEUDjx37rs5YeqqttqTGzTR8kziYHByPVqMp3ju1EvziGXc9nw7tS8DTprEfs82u",
  "key16": "V7j9N2jCGkfjt2ETjcWLrZMwhC2M7H1MxhkhUeNUMZASqHkhipUtpsvMuiPwQcNtQoWnUYjAYfzNwks5438yFKd",
  "key17": "2JknDvSbuBqWYTq7CsuLR6xGedpwd1eXrC5zMS6pdiRPDRGXq6jF5TjggfRsxgvfrxV9F6hYEkt3GHEqXg9krhAq",
  "key18": "2YCB3UCRdTrba3R59pnCwut534ZnxoPPhJcfTP2Y23YcFd3843RWAdTtfYad4h5PUgJ4d56J3n69NWQ1PUijXzHm",
  "key19": "3jS89Rj9VEBzAKYgoFxbX5861NLNAfQSdasMVe9BtUyA8E3PjqBKUXATu4WHFTVquCAFLxjgBpD1J2883PvNK7Ho",
  "key20": "41WAGAcNE2WGcpHcKPxPvhSsFpcqfFmqMRqsLYrqS8syncM8ghYn9Nb9Tmu2PHcLjYzaWR45bwzJ1JJYLYyGmuvF",
  "key21": "3vaAJ2nvxqkmvB1qVrvxEGyH5qC1B6zScVWzqG5XCLchvParzkj1U5pjhn9NC1z1MPB5X2T8FjzGY2BXPr3kFjYg",
  "key22": "RxTB15Enyuni8VudVRhuZJrDWVfarPJJiRJam75itXRiT39ab73yP7Pw9qY2tppAiD6oLFtT57hsphmiDFgNb6K",
  "key23": "Mcz4TCdYwEgW8KQkhtcrmeLnoEcCz28EVzNqgUgjRz4MttXoF7J7FF6PCLFPyMDGCbWNXEwce6sfxCS1nFkwX2L",
  "key24": "3byNj9ZWGMpSXMFErzDSUdbTxWKEisbA8P2YDpC3R8vR3K7mL88STFAeRWHffBzXq8h5hCnq57jPAN2Cxb7X4F7P",
  "key25": "3odKreDyLbpBJJgAtiazCVGVjJWpmjSdzV45k6JAhtQGSMPRuvmMpftzvfWGA9xv6vZgVGq7RWd2xciw9JdWdASr",
  "key26": "3MXBc5ZKUThfEQsP2omp6rRTQuB2nEYkKVh8UMVYZX4dYJqcFXmZwKFWE7fzWcP3CmHVcHUPBQQRBJrERBdchbyt",
  "key27": "5cZT8KmTW4fNWQHjUkzwP5dSwCzwWfBy3nAkLbcUCZpCU4dfpxDkeBbAvJ7bYx6TbgcYkHm6GgUekm1AzcF4mKPi",
  "key28": "5ubTb8CHSGNnB3EtjkjtseMSdLnX2J917kkmzndu3roMK9nmkyUH4LFXVp9N5LMCqbT1BctW54U3sLKEryaJRGqs",
  "key29": "3JG9bHXMShc8sFU9oukFWQhKszajEM2UqJrbz9nk4sQnVoiQS3zQiiFxhxxWsv7Pz1zdfQzPBFheqoxJfqm3kZw7",
  "key30": "5NbkWvLwdRVznvkmcyDnzf5z1fvNRvJeh4Ai1tZaqjWGo4rpEecEmfsxxxDikUJFccCNr36v2iTGWEswsbZGCX4d",
  "key31": "3PCnoGeSzBqk9sJRSNzdQ8UV9k3koxp1WZvXK423GPU1fuEbYu9t6K9gvtsNtw5r9KxEuND846v6ccN3RF8JMPDR",
  "key32": "TPr1uG7a6Jc5hNipeuycbXSEKotnet13d1qSohTKG29yhbA9s27dS5GKzYskYqLGkybyrNAqSgTVJXB26S97p1o",
  "key33": "2WxqBeCgxCVfxwd7GErnQwdWybPBiMbhbXQBvaa8NXdv1S62ELf1iUdE7c53ApsYrVpRFUnpgRs9ToNP6LPyNbMD",
  "key34": "KKQfBU2x6tPuyZ4RHhhkD2Jfmr1dNzD49cnhpm9fxCRU4kNL9ERVfjSMSoEcxcDEEE3Dtgq3hyHsXh4AW5H5ufP",
  "key35": "vKv7TDPGPLMNhevBoLiqz4V7yVRU1horB3SsbbNNw5o9NWh4WdgcvpxMrxEUhLnGzqHkj9XDi4DUedxqzS5LxsM",
  "key36": "5kqZgW991exhmhkhCwSxnDub74jj4BwGGP8fk7hb2Lyry4dLSpso2h5gYnKoxR6y8a9Wpb6YR8EVtkBHrrFQnDXX",
  "key37": "31FvbUrTUscY3tzpLvg79GYNmbgGnu8dEsj3yigAf4xbjoAWnfgsiTCYMdGYDcBammKPxwz6QE1LWNDiYhd45NbW",
  "key38": "3U1RY3SLS3ZUcJhUQZjuHSnxtiXxginPE24ec3YBJunSzmCZZhjufAdzencPEu97c7P2kd14qgRxsoYodcu6sMPJ",
  "key39": "577KrEm9kXZwXqwWaLsSqAdEVAEGFhRudG13ooLZ8v36mzr6J6ZG25bprZvrhX2qGbiJowbkZUPfb1jYB8TiEAfY",
  "key40": "2bNtvj1dFAF25wt5hGkvBsCQD1SRTTuVT5y4J6GKnoiyuUNdbjjVUt4Zo7qkfbcz2WErZpgSiL4vqFEMixcvSXAy",
  "key41": "4GScn5iPR2RYkfH1iDDqzYkSqSWNKVwk9fgWnfBfJANp5Beddx7GGKadcJJiumRykffArgk9JtcH3vMWhprVb3NV",
  "key42": "3cxzpgq44z6QqDD4A4e4UAB3HneuRZKrUu3ioaobSZeMHiRxQ3cASmUyL73o6s5362c5XRjxVL8ph3Y6krjFGCXU"
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
