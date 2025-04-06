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
    "234R1iddTopCLS6xPp4rmrNfgUPyA2Qw553iSPRbZZk3eThvZnTpBdotVkpfddxk19mhdxoeNRnjaQoFay4oHnjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fpiYQXtFwMaQWQsswv8L12xMZcsa2PYGSx23wgWhPGLC7dCe8bz1wu5BKobM8iMLVp49XF9wWTeySMBRr2eZAgZ",
  "key1": "4CEcqJy9cQbRjNLmELAmMzWxcQxk1ghyXhkkUndzjvpRBXXQad3RHfnHPXnJtxJYJiV58CT1snSwYzoAiHQEsw2H",
  "key2": "3idKaz8gQhW7Acf83BbSNXKkL7m7CLuGhbnKdDwwuJiQcCuk8V1EyxqEsZDFhZth5cTcTtiGFrqu78rPUwuwucuQ",
  "key3": "4KGjedUWwZcbprNwtRrQV6GPaQHnk8KQeKB6XnyT1mJqnN71p86iwuE5ysdSg6WDFqYWkbYnq4rhnrVVQSgfco6a",
  "key4": "3KbwQzHr7M2jS38aXEk2BniPDRTwLjYa2kMJ3VDXi6zSNorkrYmwgoQdzSv5y9mAXNk4XbK8HoEVDhPTVrEQUsrh",
  "key5": "RDe8FH9eUeTVimLTi1SSkowHGbsKXrBhqKBfuYitDGGWuBhv1ge7qHd1x6JgvTgniTXPSgbK7aPdTQGigdzB7Ei",
  "key6": "4qn7CYe5jKktJdTg4Y7kfwKXfptgjAJeLasGMji1pN9Q1Sy5HgRpvQKjWWaFtZb99gzd3daT6arxp2kWU9P4APMv",
  "key7": "3H6mqKpNcKscf7sXBVHQ2PHtCvXiLch1GCAZ7obxFopGzFaViWZEU9byDmPPC7gnf4JDNNXGhZrbYi6XhGj8Gnsz",
  "key8": "2y5951Uva8p82e2EgF3mzzmSRgmiWMKAPaW8pcnWdtjt6in1JZZmrXLRBYuRFKoogZARhjJaA9Au13XcQ8djkqFH",
  "key9": "2zAe269xLJHkRWSgED6VtTQwDccASXx646B3PW4HPjY1kLZHfRDpTwm3qrSNTdNFyBZiLikiXYpUVgL6x1BKFKmH",
  "key10": "3iFLWPzKe2aih3huymfcDTtmKSnj36VWxskAYvCV7bXK1zqATFDJQt7pU8yVbk5vVVgrJu2fSSjuhRCYWEQ4m834",
  "key11": "4dQTRXEQWBSudSVz4PCfcq6FDuuqsCFAqyCjvYkHqd7DdsNJjxHByqHjbq4k73GjDFC7QHzMq5g1XqmRGuFTCDCT",
  "key12": "3KuqxoFkJGtsSuttAi7fmh66SWWpiRYog1rERpeQczFgK2LhVzz1RBYvFjcq7wdzuAokL2pefoxe5iyEHCxxGXQg",
  "key13": "2bFNGzQmvhje6qtyJNYEpZ3rb6SNjB3KSmJS1ixLP3Ys9rh2XNehWZdTKwD7pb6W8evgFVvcsyUPxzSH3QWpGVUG",
  "key14": "3bNuuNokHPzuQ9Aaxhu1Gq3y3UWbrRHFBEPwxGXQCCgz6qk2QZyQo3LtpVAsRxeXmzYAuWn5eEdnwvMqwdd46Bhf",
  "key15": "5yAWqmPTAeVr23FUPYXKYNv9DSrf94Z8wtz7xHdkBkCrQkDJQKu59ftf918se2c2LCsmg5nCMidybyRPvwhnLZDb",
  "key16": "KesBHqygPWA3r8RKyvVmZAyN9rw4S1JAdnHkB49bW7BzuwrKJmHgMszzm3cx2JnmtDRGhejTRtHtTYHCqqdxJ3h",
  "key17": "3s824NxTAQAEnw4HyH7zqEkng4xJjjtvzG27pVb8DqqxaHEwdEfxUsRUK4mqwRPLSVyTofiPvpiWvf9LhefG1rLw",
  "key18": "5NXKHkEf6ZivVqskrXzuPkb3dZXYwAK6JGZceMiyNk6fyCKduYJC9bRV4MztwXHKGo1RH4VCVZbnwmRBDdsv5daY",
  "key19": "5izo67M6sYi9U5C2YBXEeETHFihBZ6YWXsryPYHnrx8xi24FjTz5v4fNGQZyVdsiTuaxueRv7QjhfhJoELGD2Dzp",
  "key20": "282SZ1PT1X1VPXQuUpTgnj1TNbkgujLGVXMgsvDsxxqskwDB8Hhk6TG3PwzJU1TW1ocyToNxFCEWC49n6VvLLnAH",
  "key21": "3wxgJN7pP6NnqVLgmzosceyUkqz2gvL7F1BepBjjp51118hyEvYySkj9XfyrQXvupnbWQ7swXR7FmnKyznPW9ycB",
  "key22": "43hgTGj9SiZ4ZoTQG83456yh1mzR8Qqo5PNwZQYjAJpS2YP6xn7NGL74ZG8jR6pZsiJsUzeFkA8SdRAuLbFJMa8W",
  "key23": "26YmbiXrh1GkY52DFnBFsNxo6AUQfNjvyozyDbzjGBdXDPep1KWkpgEihRBvQ6jgmZCTNc3EowYoPrwdErSTa67z",
  "key24": "5gtrZTCfah8WCCF2RahuX9ZquMB9gjaAJkuusLLhFoBJ25pF7pFAfFQvEkB8bXHnZy91V7Yvbd8V7owMkCmYwQPW",
  "key25": "JM31serbtfcrTStTxgCYhP7kuxQ4E4ueHU92QHNrVdZjgx85xAPm4dBuz61T3TGimdTNUyiLjDsMhwNf1KAitRW",
  "key26": "2HzcHECaRQ4S5HVUJxUZa6nfUA9Pcs6jrZY3NM2H7yoKQ7KxCaivBqiXCxKewVL1z6ACQkECUmB82zmXZ3X95aHD",
  "key27": "52HRDwBzxKGjQzL6nUprpnVwvzu3QPkU6LkQ91jyf7M1XMhAvtYM3GM56LWoPts7p5n9o3Rd9utujF4pPwYcGVsT",
  "key28": "2JSMJJcrH2HhWMKC98VJJXjuxb6LG1DUuM2FZNZjvhvWQ5VZnNZj7YBWPDkRakjcq1kfJmfwnnCjXZa7RjkfUEq1",
  "key29": "5cpiipKpd9iUZs6ivTKMde65rTtxj7XEKDtGXFFJYo7mHghLbiDf1zueTo5Sx1LMVfdep27hT26W4LFyxmMrTsDz",
  "key30": "292LuX1vPcLqHJU75YXQRnkZr8XQjZy7Ynum8Em2BCdQBWrtmCjsxqjNKjyYnUCTp56NF63XNTRx1jcn8goHruG5",
  "key31": "3uPBZf6GyHbYERKWau4d61SofvZRTt7mek94Fcd1i27b4RiPozrG9pKzbFti83uSJLRU74P1iik7QrPoQFdyCHkP",
  "key32": "2Bjvce1iDfkJ2SszXVNcfD2Axsc8nWF4tEk6mLA4b7jL7YiVe97HhEuwV2GmckcLjYaW4zjG9whHtF7RF27ZR4NZ",
  "key33": "2wXNLYKzXbdLZMkrYMrn7Tsx6sg8q45wtfLTcJUmgw3ckjGacUpZVTKFwoeZkfhLrTMGEDDq44VQhVgdjU6MNLyu",
  "key34": "f5JgNXANKSmdJkAxCxfMf1kVkgo4MY2bUZ3kFybW4vJv3BhAWJFRj5V9Y6ZjZSk7frcwUXU47oinCwxzt8YwqRY",
  "key35": "3YJCEC8e1Ub1W4aeKp6vPcNDxPB7KhDK49ozje8Cez8bYrS7oYb3C5Dup4VsuYVANqMFSThbNyRZAQ2iLCsHd12o",
  "key36": "owV9LdYb18NiLGSmbwdstWuU9VEmFT9zzzEjhjquxAJvWKipGSBw9VBt27CJaTWuGXnbPwrwTWTaoUKkz67mXEV"
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
