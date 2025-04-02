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
    "4d3MFhNXoMqLJ7PyqKz1n1F8W7ZEnBNz4N6Dg6fVTBAuiGDpzUgLCsd7eAfmY4QEz4yUcYDpnmAU8vjoe5hMHRz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ikhRwVp2npnBzTK6UR9r1x5z1Tk5uwT3LYQSryJjStcGiHQyHk1s2mXnmpSRhGsEoTvnW9HC4SCRBdfQvhmFKr",
  "key1": "3yEurUtwFuegRDsw5rhssrsfRvb9wErshr4tQnZ12AHz8hS4wrPadpjP7TuE1FrDnjTMtEn8sumgZBooSAEWgBQs",
  "key2": "3qcQpaqQuvU8ueTraFLgj6nkkeeGN8WcYoN7umC6tBKzCZHTWYVycp47x1hqY1hRitAdxZghefXoGucbmjeP4PPG",
  "key3": "3DPD96Jy85bR93umitV69uhpy36dyzeXxA1mXcAP1tHtmu52GkE26ZR98K1oYxaeSuVZKTPd6oAg4TE8BgHQUgwg",
  "key4": "jNAbe21tj3rjWCFvAYcyJoYevohP3d3Kid3SPpAGSJkPrJE4xCiAEvo4JRPqKzsfqwDP2sNLoseYy23GZQ9en26",
  "key5": "4Pt7n5CjhB5fksVBhtFYSnKfHZ2mP3n7zharfamGbmVuzLR43kaNBLRynE3oRafWMxZ9fVkLT9NYVN4gcLPR4J3k",
  "key6": "2fczQ8DV6k95hvuWsoxZFDkaLZAQRTas8dYfbvnXxBhV6bYhfcGthrYreVm6JY1nWByE2fMTscrZe9Pv5rrve4Av",
  "key7": "5Fyend64CB7adTsx62N9sqsNKnZeKzj5vYhKWsEun3AcH6F5zJckucSzjym9ygx2qBDJxgCR9CN13bWr7dLVtePn",
  "key8": "4EjBcyro1qqWPupm48R9NFcHERaiP67c2EcSgimWRzWzkisnWCNBpudYoqPRQpdTZWz1CxnoAtEpmPPRd6BhpAmZ",
  "key9": "47YFJ59B2VWEFwdseh12F8J3MG7c584LmqargKHj9eRxZv5FMJx2rmhjy9pjuZrnNP8JhreX2Tm9tw6Kz8LzV6JY",
  "key10": "3pcWqaerTJobZRWL8Br2xeLzSVr1yYcdR7XDPKRmLAZpQQfmURDjp3ZpTTWHJZq2EA4fdXVRUHb4XQdiYhRxsZcA",
  "key11": "32wQykk1GYa1pKwoiMyBckaK2XdHGqdyRmUyeeopHUrHFERrdmKHemUFXSUAmg9sFPWnG8SzQEKL4U7gXWJ2g3FD",
  "key12": "5o1jkksb1bA4cRndFAvVQ7NFLPXdhaZYR86ZQoB1SVa7wZLopCh9YbWibyZHAAmxZSJCLbqB6UG4SXoRvFs33m11",
  "key13": "3jNrdinh2LcSNXuNrbqyseZahPQuPtEN1ovUCZGsEQfGyqkYNRMw6FcCzxUg2zMBHF2YUJcDrop2jg8jUY6PPzJU",
  "key14": "5HUuoxsqkXvEbxeHNeJtFwpUXk1m6Grcr1uHsCMk8xpT7pnx4XMHSMYR6Q3PjRoU9mahkp41j596QxqPc3Yi9phY",
  "key15": "5j7pCjbSQFgimM3hzFDRt6Z9qVjuuoNYjUcT5PqwHucweAKHK6hjhJdLT8QvRRg3Utx5EfZMTLukTwCGJRKDuhp8",
  "key16": "5imTrBp7USWXViPj2EcHmRYPiEKGnrLevuqsyMSeU1kt3hD8jffYL8mbSknEhLcFbM9u4NGFF8XjKYeLgKuZEJwE",
  "key17": "2CT3oB1vUxJCU3CsU99gUd774V1ahQiAoGt9LTebvYMJYCuDutS7To6CxNfJkFyy9TnU6deLdp4yYKjmeWGz2XnM",
  "key18": "4DCe1KJRTnfaYMYJE2cozzvz35sufiPMr71VaJcxPN1JmXzGPaurxcNwPpkqyJ7kgnhWBkVZBR9jXQ5E12mPv6o4",
  "key19": "5iVNAkeGjj55wH7cwdguurh1WwjH3EH6PG7J8CLYAeVFykxqWdq6qNUNwe4zsZkz2oj6SGXjnYBmZDq5oJkXno3v",
  "key20": "4mPyuNWN6XVVVptkCLenmGyf9w28F79igQQjXsANrY1PMyR6SK3W46QwKLtMwYVbmCUzfrMA8fpwzvtM2EAEzqoq",
  "key21": "CLQqcLVfWqPQpiPjFcMBJqTWj7VSU7Eu2cdWHm84iCQRiCt2hCwzhLJhRW6mmk6PCPM84g8ArUhf1uv985sKks7",
  "key22": "1TRmSKwPs8ZvJUKt5vyVU1qnAtcFhe3TNHwJB3rfyqN96irtym9uKrpu9e9mCXeDomTbN7cL1Sek2XCTACrwbA8",
  "key23": "5H13pwNwfCnkzsRfJHEcjfxd7YAfwfh75U5E2zWpcbfQaKyYh2J455VnPHZVrk14Pxo4d95BipRNEKPDbtCgDE8b",
  "key24": "xR5iuH36mLDue1TTNvbbzBWEY6xRSFiYefekZ8rMpy4vkHk5QKrmvT6RzBCaZ9ozEfZ7GBfNsSvDiDbEnYT3N9i",
  "key25": "24jturgG1Tre5aH5Sj5ZFA5LgfgQCdfRuuYSMEwzmFCjpKE7ebeAtp4mB49A9o8jNjWZJdzy36mW9S1Qxt2ZcBw7",
  "key26": "vQ6Ej59RgxuZzosWyq5zZconLb5gVnXgGaLDPX4SwQtvvoc7Z8JhVDuEKPdUEiJV4Gi1ELz3fcK5fMBdCWQss5W",
  "key27": "zLCVr3mNRkK9WrUSPugmwVFvoHDNVXQCLygeZfKTbmFXxDF7Tqzqip6iq1wMBdreAvoRMBxPgoTDrEhwdAVYGzS",
  "key28": "xTPF1EMFxf826YedsfRusyHYkGAARmSVaT4HoxviSwqB6ZAq6ZdiLffD7bM6hirqpVsi4cqL9ZNA4c2JDMm78TZ",
  "key29": "k8TitCgSYJp4pBHMaNySgiYCVfs1YVHNS9zWKXsPKKkUDogwgprcasqduSbSJkXyFwfvRSqtjLF6Pop1cCyDU3x",
  "key30": "5XKKqfyBJZs8vzGm55EbhrgJUwWMbjd8fgppqHsPnYxjnhB59BxCFSpNSEfJ9gwoQdToQ7zwySubnsKcEUgWyves",
  "key31": "27SN8ENK1uR8HaMVD8e8xUMVffB6waivDyj1Qsh3kWrBqywmoafK1H7kKVLt9YL85JkYAxMmso8aB7s5NAW3oW6U",
  "key32": "2A62JwEtrbTxQ2yLxfWmCbRU2hoPj9zTrFjSTu5BYMa6rdaZLcHJAKZj2mJvSZoZiQGYWUQuUVJAJoeQ7QunhGs4",
  "key33": "5mLSDcrEVicShaXithsozhTPVFn9kvyVnV3VMUToeUg3hBsHniDQRHWGF9ruGcJMQM7cwvXNAzTVutJwR923Yasq",
  "key34": "4hvmE9uiQ3cQurgHQheZznZ1ZHXbDuadQh3VmFZJQFgYhGxJfcerYahdphcjj9439DMmH7rv9twXth4UXZF35nSP",
  "key35": "4yiA9mrbiGqkq9T8SPgMNF4imWUcfd7PLQTHXyLFmythgWqNykmrQEtWeeHaFfawmWrfKgt9bU8Mi7Dg7itSr5Ww",
  "key36": "5B1FsuoYHA71zT1acFFosvJ5FFUWnxz7FATZvRAbxF4Ua87jSFCBA5Z3TvgiyqmArP11WSRPHWyujAB1cm1ikWZT",
  "key37": "XCsauccd5Mttt9QFRrWxy99P1SRobKSSjVjcxzWwTLboSBtHoB6BLHu9w9snGncZRSF5gS8X7hqo2UQ15L4dWZ9",
  "key38": "zn73ekJyVGqE3aoTuHMcQtcHXd5v4rZKoSkgHySyS6k8LCvfCyRb1z2iQGHtKZm9J4KJLLwRaXDcj14oennzQN7",
  "key39": "S7ywtgHgQQ3X5BXk41mmwzKweQJA9Cfnns43DSheU5nTQ1QQ7mVhzK5uHRTyieq6udTRvjBUycEhM1Nhv7rvBEq",
  "key40": "3eN6sHs51Hd2yYYmo7t7UcG5aAwfqV9MH7HBh9SkUAU795ecSGomny4PfhYaMs9r7Bfkz33X9mtiiHYG8YsbS8Qw",
  "key41": "5MmvLyiNe4Pw4R5MpE9Mfx33cnWBtBs6YxHqLVFBL1NPpHaeRGqAya16xTQJ5QfDhXVQ8hhsfK1jBA4CeEXEEiDD",
  "key42": "2Sy3fT1PwxP37fo4AiLe8KxTpwvMoQnuoFhxn7PH7jLdSu1Rtd7mNPvEXPJjm29aV2yFufDJBmq4u1CbKwpX5Uju",
  "key43": "2y4RhSz66U1ika23F94rJSCNkqv5mjjeyp7qehgdYryKWLDjvRS7PH6TG5MV4y13X1dfJW5peJcxAKZqhUaWsFP7",
  "key44": "5oCq82todqB6AQZNHA5ERpTa8PmNsnwRATvBvcAh6Nwun3CVAn2c3MTdjTs2ArednwSQ1qKnstB5C1U94ZFJyhzf",
  "key45": "xMm8b1fA2e4kBRytta5mfT4doaD9HrjxkQHUr4nBnZiU1CNkPdEGhJGJ2x4vCHq7k64tQbDHiu3mKyaVKmKrkEC",
  "key46": "4SeYKLNS9MqA8Tw2UHQrq1uDtsEcoNmsbHs7HXbqWtURQH2yJmQanWAFBbBZ9JowiVStFXP3KFLsH73h43PcADkB",
  "key47": "5Km33riL3t21d8b2FWbvbYhEJc5iojAyijubmZKEtJ4QfGccKEbQcLpiQCbs2S7k8bunJuZZrm9YrdVTvYqCHN2g",
  "key48": "28sLARGTxi3FW3ourqrTg5uT1zEkYsHHHLN76DVg2akmUmUkSMPN7YWYiF1TdX9YjeGbMcWQjeR34BSv14hqDFkT"
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
