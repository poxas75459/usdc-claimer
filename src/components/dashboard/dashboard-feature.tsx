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
    "9quhcBqjjk9jq9AmuHwRbpC8cf2rYJLkUanNJPuLM8wqXaJURbqFdoxgbtGhnssw58aSTAKN62VYeBAEQKwhmqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ghvFrBzs7abncEEkyk9ZdYAqodv11t44tXmc8xjWtSRnoZa2qn9pzzMHiF1XKDdxPc9MCXXZwpTNVapfHccGknf",
  "key1": "3J9RpLXSb1gdZ9428Ls7JQ4Z1EWEAubGV12BT4smVWoFyZETtbNP6Vor9hf4nsA1zEhXEdaj1UBaJewEPNYdEqkG",
  "key2": "26pPru7s9XmAuRqD5zDtzeX4zVwFZcZ2vJm8XZGZKAePD8D3vWujSSw6N9vfXydXA3AhEdW9FzRwLKVTusQbADbG",
  "key3": "zKD4Thf2QN9jzLT8WkAFqXFQsV8ohfAxXE5U5PPfjmYEguit6eoVQBS79e7WsGbx84ZYGmUuVfZLKh6FGhnPErt",
  "key4": "2M6AjSZYMnFQw2L8JWrmdX4ppy7fHoRnj6nu6G9ozv8puneZkgPg2oweMnBKJk3trUaKNdqQS2HHDsqbuUvKnJWy",
  "key5": "2ZMsoFGWGFC8JXUESAdwNjVay2ornWQshj2TzF8W3PwUVtRhciJ2AW69Yi9uuysb9VCAgXMH5NyJQHxvjBk7kEd3",
  "key6": "2da282tFRdqPMEgZh68LRfftWtND2LnA2iJg4Vr5wGTebmkxkMxzuGEv9SJW1xoHwHD8YAteixBgd1DLv1N6BxC8",
  "key7": "41ge7wtxx4b27n5gVmvZTaR5gXoGs7bpa2H93Qcp8hH3rXSzbmskVhztzgp2bLQSWNtXwZbpTZPSt1yf6ge7B7ax",
  "key8": "52ryRmghEEoa3ekNpuGA1SPw75GekJcHrSpKn72c21VgyNxT55EbuLSWFr6WMQ22mAWKvAn7YhcPEXnLh7ZWnKxV",
  "key9": "2BfcWKexVvV8N3VwSwq7imB38f76gdqxgB6cs3ULbpkqtq6WJ3NvSCBGgzzo9ze3JYHgCNwiPuQRgjfAhHqwyyy4",
  "key10": "4AY9Tx7ccbKkqkCsgZ6SPZyJZznccbCMEt3Y3TcVf5sqby8CX6vUuqYFQd4QsttGPoAefo3gQYiWcfc5abiZJ3Mj",
  "key11": "SU3nhjVeA3pkyJX5SuKpEUeSCVVaJZYS3kZUnM4YkXML8xNUcxZGWMivgYeqLsWFnVhXyNsZnVBYauFpXSmKs2M",
  "key12": "2buyqnDM2zSFJk3fW3yhtLVrzrPRMVT6zUvKNUX6WEpr2n8XuaaE9xwJJi3v2ZTtJx2kztN39pBsZRuCELx84ZT8",
  "key13": "238XLyQAos3HsCZPNdyRyxQNfcLq5TB8ETKQabwH5jSFDJKr1GZK9T5QaMUGHJL9pqU77zuMU3o7dQ9bWaH5VMVA",
  "key14": "2mLiv6x2U9dFW6zUZ6h9WwqDQarPbAtRXQighGpVSvopUMJhYbXFF7XkD8J7gWvJXNctAjTwXXxhKngJTHWYcpfj",
  "key15": "YRXgXxcLw9nW6D3twcMqTyvhZi9if2KZMe4gQJdcutgtPvfUBMBzfJcJeMDnbPAviVpKRLiWz7vNL8nmw9ANkF9",
  "key16": "3JeVVAvsVUidu8uvHRoH1cAaiKvjW1STV87nykW9DdD3pu7ziBS7ccLkyLDkZQhkbGQhy1TzMrahLPULfmq9QnUg",
  "key17": "4YxJy6yGpDkSguYEsYyN4xNuMrAg7WzGA73XtUzRYafMXBUwszjoYBVeHdXPpxthJmx5TGZo12DV5ctVf1AnRvg6",
  "key18": "3T6fL7GPrfSEaW4mmzu31xHQqNzdmWbTxH5mCRUKVJvD3PLkCeSKrwpbbXTXm7d6hpFjQ7FM1wCuLKf5TvdBHEXe",
  "key19": "2G2sFcraNiqs4m4ebsk6g9fyqgvEXapd5X81kmfJzKqPYGcfjGwmuEephgsTuyfyRmp4imoHKgxcuNJg2XMxSZCC",
  "key20": "3ZXFghM2fw3BeCEPCFmZEHBtM2ezJznraxt9awEghK6pUon38kKGos3QGQbtXuh2oEY2fRyRFwhy4FQWa6CENKhC",
  "key21": "52V394QfrY4yUVnzLN5oGyNKiJPsoP5hDTENocrna3594i6Tn6TpmGp7fAXtj1o84broGNobBs6iGBHSBVJonMWu",
  "key22": "3tYREsCmnz91bipeKHPfL1FmCy45xMtDnk7vMmoQg1bkzcn25dUhzWYwQDwMqeKPZUoeZNFvDa1j9zhmhAyWjxfU",
  "key23": "hWShKpytfcsNES9Qx7Eoo7X3knnLVYKKZR2WeCSsbbPcpHSbvrYLQdtyXE4H29MPzeqZnsWWP4trBGXkc1dDzva",
  "key24": "3gKxc4AKAhJLJYeUYMEMQ8wAuVZ72pZtRH2MrKEzKi4cpWgADJ5whEe8JesZhp3hDi4EAaRV5t5u4HaeV9DuRn8c",
  "key25": "4KwShAgee2CveZmyotdxYGC6dUGAzGTf2Y1i17YhvCn4mi9CErMukat4fo3WMNb8ri1BDusEBcM1fs8uNHDWodoi",
  "key26": "ttHiqr3DFRgXqpcEBnmoMys73NKSTFtbjmuLqiYcsVm4Sw5zzj5kErtK4WKLb9Xo73mMpges1SYyaog2RrSM8FE",
  "key27": "4uhD4Dy27saBY6iRQ6URk9oeyVnpghUwc5tJSFBBbgDcpbCV3hQbmHiFq7yMYyHzHRBganqy76wMGUeDmzyfEVtx",
  "key28": "3XBg8TjTY199os66E9azqJerwHPswGvhC3q5TTQevMK2iUuWbR7F6HNcj6jqce65sVHvjJ8V76ZsKSBeMQcYypwo",
  "key29": "3i9DBZAW5uQJ9893BzuUSQ3UnkLHtaXqnrNj3YKTQm774fcEKVff2agUpY9An4uaCkmRnMFzPfqYNxtBgsmhdS91",
  "key30": "2AgYJH1AJwAMRx2iDxLFkbwsaHpT7WAoL43AfGTHNfJeVWrMnLwbky6e2Pkpnx9GjaY8dCNj23XgHtxiApth6BMg",
  "key31": "2gsVdpA3y4wZNYET8Z4AntLB8vrRvyvkSkNwjwUwTPdaLiVrjDrwEPk3RoCiQW5gnrKyMaBA7VhDfgxGbUX6GVwV",
  "key32": "2j7rAuQhfp3AdVMDa9qHhyFgHZTVUieiWXmbwJg8ATF2aaXtcsN7HiGLXtmsCZnsLZ6y162f22h4j5UvXBkjqQ5H",
  "key33": "2aHgFgQ3hRRze1w17Yedq7LkpW5mcS6PeieNCae5HY4sWBxK7XKjU4cNEkiPLCUcWcBesFU4EyzwDiLtb8PD79C5",
  "key34": "5pviYjku13RNXR5U7xZa8iJJazHaBkwfJzX1kRgJKbCCEbaHQkQx9y45enxjBNmQYwVnHXhfZx1WVBFVbUgv8MTM",
  "key35": "AJMYWxBgc2JfdzGbrBWYynvgDdKc3ZXqGopRx5bHYFsJVswZEWRMV4rDtCstmEbKRC3cSvDaamWUcUYBsNrsbr5"
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
