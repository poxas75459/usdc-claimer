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
    "2RfwJBz4JdFz1gpzZT8iGrRyWEB3TVm9VLm9JL1iUgScQLBKktfbSXJAu2nX87QkwDej6wq9T8HW9RHpu7nhZBgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gS4G5GYajNj5UcU4nXFAHyHm6dFPwRzSicdF3Jqx7QpV3E1Dq8UBVsi3zbVqWazj85s9T6CwWq52aJRiUJHYpmj",
  "key1": "2fbc1SFbi4vMyKC72mvvKzoEwNdAE56uUqJuqsSXdP5xxSBmaNazQ6zPE7318T22oKqFHWfR9ZAXnKNktFWVkxmN",
  "key2": "5wTRBkdvHYbvLrbkpNGmjJBPZrC8zEuCiSNjBaDu8NnWZsRzXgpuR5Goam4JHDDQa4AVUh6sPrBgp2Pyi77Aewz6",
  "key3": "5V3gJfoXK1FGnCuTG8Lbxj5JFL1CrhEamrT2orLUfJmP9NE9p3SAJdk3wCNdJFy1hNxN4vox1vYbiTHztbptAgzU",
  "key4": "4J1JA7R6PrBjXfQ8E4r8VSfdzfKe8H31wfpLM6utiaXoKVJyaC2XVRE7ZutaqCGbUvvWX5A7F4DNw3e6UYLX8Ncr",
  "key5": "5Kx9aZikBp2QFVv72m1HpJCF9cotPVn9ZhKpytx6pMoShVEGSdK1p3rVQG1jeSgiHFzKpX841QkTf8xWRBeW5s9D",
  "key6": "5P6fjkRbGtaE91CtXENjaMWHf8HjDhwvqmFR3pUQqiLFKoQJ6NSKbKFJfUvdSBVM6Y28Yougo8TF743cSZUpUxi3",
  "key7": "2owQJBdnXehJGukmEo4Pebshh3HKWpG8982LjaSnWViHsuFaf4NiHXiJMzVjNSzbotNgoJuKBt8U7g8YT4TxGM35",
  "key8": "5MN9VCnmgdRVYFMSwUZjYsdwTAS4L37bxuekrzNzkPQqeFnKKoDdFXUpnbNWCJwyNEnMXgHAtnwkRcqpMsGLRSQQ",
  "key9": "5dEgnrnEKcMRz4xhWQAt6SwiE6MEkzKT5ETixPqpsW91NonRoCz6k8xsuy1cF2uFJGMz45eme8vi1ownZgKsu2bo",
  "key10": "2NaNb8LXfxcMY6Xt9Wb2fkwnQgNhjVZuLuAUJnHxYB8xbs95QrEq4jhHsWrjwfvJ583zMKvriig662VnGdXy7Lih",
  "key11": "59uikq8ALwZQtfFgJf1YtHKqUZUr9TW96qMPDJcunZtYBTvpTuXHfwKTMwXMn7N3JB1Tfyv8oj96cb6kHXQoEnQ9",
  "key12": "4N9hCkQDSoLunmqZskPgBoHRjFgP9Vf1Zi3GGFAgCUyejimU3JYS56616zonHs9mTQEmPPnEpKEZT9Gd14biV9mM",
  "key13": "2pW2nBJd3uNmCbujJkSQgdRe9iyRqgZJdHbgQZg3tjyA7feCGufpzC8B9qvEtJqCXD46AYVaQkDmHMPvCd1acxVZ",
  "key14": "2UKv9UvnPFjvt1Bua96UsMKyMRCAmWMFYXn2yfFkE1TLaNXaFZCpzEELF3WNu7xfBdDPXWcQvMPhFgJiLYF2yCv7",
  "key15": "2oHb3bHCQZCGUfZs5cuqcZzjh5DpMeGRCzchnEZvBU35WNfVceMfibstNsRcVDjfTzmXv36RMWiiazZQWiBjG5Nw",
  "key16": "67ez28jqgqD9zUzuKuZTU1mM3yqvWindqruMjKzFRJD4zHtQgVaTMHAMv5Pk1y9AQbCL18MpqV6PGYQTBLpA9uut",
  "key17": "Ye8LTyih5gRnfxGjcFPqw1fBr5nRF7CExpG6nTS9zPB6iEpNZoJxeuQrFmV9EiADhoF9sKs74zTZTnreREFRz22",
  "key18": "21GXXVy49fU6DMFo4n5xyzcUmwJ3SmK5ZK5NxGN151qCJrKpbeYbAQwLjj3HAyspzBQPExgc8CPXh2H48HRav5Ea",
  "key19": "4NZhFNzNa7agxbJu1pvxCzexEyjPb23EngVL1e82pk5cnYm7BTiiD5HiPikoBsED1srsNxRQE6HsewFyMdeitw7t",
  "key20": "58pqPJMsNr31JRsgnAqBss2HCbVbpSDuQfMJVmyzvbLPtn4pG1GCcMdUXFH91QGfw9cy1zwVKuNb26kgmSQq2nLR",
  "key21": "4hC8oBWhdxLwzhpJKcFc7jZqWCrDbFcvCXxiYgHWMss2b8F9iFbbSESFF91e641jzpeq4hu5puBzo8DDFWgLBdqM",
  "key22": "57XHcz65CNLN1LtNj2WjXg1LzsJTh6j4yDMAyikBuzKrZ6m5u3Y2FAQKd8T9vgLCdTk1rx324eAdeuY9hnEuzw3y",
  "key23": "2rUMYZzoAQJ5uWc9cKjQRipDSBDogBJFhdkwzUTcQEu9yBEdSam6wxzwH3tt6t1WYqUR2MoA8QvvwcN2CUJ8Re8L",
  "key24": "55zW858nmQ54fySB9AvHFgCETKXEmP2SPbAoxtNh7fZXLzW9vUenmARkACsysNxMZ9kMorsd3hXHPbfRwXhmxneY",
  "key25": "2ZqKENJvm4DPmSzKu873gqnh5n5FZRCebmGtmCdLa2fjYykSaUwMp7fExke2hYFTwk83Nacqowp8PK4EyKkn3sGR",
  "key26": "3tgNzm5iCM11p8oiMQYXGJDxmc3TzEFGcwtjajB5dTb1b9XRf1Wsrvf9NCjGR4uoNFdEFUfqfFBnomtPRk7C2XM6",
  "key27": "3por8cPqsLGKB8UceWPJm3uT2wf4QLraeFrnTQpM14C8aSxsYP3fDka5nPNaKNhZCoqAhmEFdufVLEPUggqKAQ1N",
  "key28": "5JA9FHfdqS6xpX5DQWaVVcMB4d6MqM8zwxMGr5q1t1RFueHRBVnusMVJSRLyQ4dWCteNoCztbXmgVB7Pj8s3HLSd",
  "key29": "2y3Dmoc6dcjqjm3U5XGY8MH7ocsqNUCpC3RcYBBmyVU7hokRsn1PK7vPDc2SBeop4rsfWkmnBS5KNqJUvzSQSAAd",
  "key30": "28sQMw7nrvhcpzJEMna6oBKgQF9YYYJBddzk2VwaMzjuHzefY6xyt9C8FVpFhrM7gBMb1NqL8h4yAunshv3sAKfr",
  "key31": "3LL6s9WyRrgXs2792xyNmNNbFpm8tqTevAoDnxb4rPvCW5XTtd1pZjzkDg81LtpadParskkGWGkKB1XfGnZC2Np1",
  "key32": "5ZfVLSnXha6t6CrWUMia16uZ924JE162HzsJP85bSREno79DBq7Hqj3maDf6YvHmrVrqpUGJtxQBz6hPMymeEteG",
  "key33": "2zK7gZ73f8zNHLwDffZVzCjnjpzQmueXyLgZBEwMD873fYNAXg2e96RYLNvMhEX1Z7WGek7dJyFeNkoaSrxKnS5v",
  "key34": "iWNPNNLYmYg99Wvc1weEbXYYTnufBT5sCyNmdCEZAA72JPbdPGVUxeWHHFfTvTv4B7DrhvTMLBdipypQSJfoc1D",
  "key35": "T6byPbdhS7ir4NEPabYfn6r3VX7hHL8JG9dNc1waL241NmDSQxdJbhsHBNvtTYcWXtxHt8bTz2fhz5aRcS7iS8n",
  "key36": "2nzDBh5sC1izww1v4pXV3VveEjAfjaukhoMxkAEFZbG3arBvRPC8C79TJv5Pz11wNtZG65hvx9yZHjUA2TMRSWsi",
  "key37": "564HiwPRsVVkKKRMoBGc5GcQXou2btJqN9oRSamCjDaruGnPRNkf7XKEji6qD3Q5kXDVrxqkiPtcQ5pdG1MW1gDP"
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
