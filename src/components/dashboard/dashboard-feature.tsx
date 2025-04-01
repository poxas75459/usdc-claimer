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
    "5pwhExAApTNJxWQsHxF7DpraFmcnem7Z6115t3dKKrz4drRF3kQpXQFDQWoeUQD31PpCx5U9F3kgedHKWFHv5xYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2acbFT3Tb6XAED1Gd5aNHkpsNMjo17MVi7Hh2zGvRtzSebAj7JarkDq4gQPzdX2G9LWQkA3g1CbszCAJqsQRs8rE",
  "key1": "5Cs3KyyJWgn9Pn8f3ufeAadwvTSqTeoSsxkRW6m4hAbdvMegsw84eXdms88NWHu5Q1ytADNx8etMwe4VxhxpHtAM",
  "key2": "A54gXC8Pe34kbYDqmZnymnwUVUhQBkpBocUkgqNEgrH1Rick9WrDuzfUL6vGWenWdSD2i2mjnZ2xNBeN25Cgp7x",
  "key3": "4n1XqkyJXzQgUjmQmBTXSRXWPmjHXpwEmXUHQegMCK2JBGx7ZMPs86L2eS8aE1Bfm8aoPR7CAoSehq5d9qcs92Yb",
  "key4": "2aeKZ96CpNmcKqqcXrsoQ2zM2Bhf3eDF85hK8eGf6xhFxaeQskU9S25QCTxPT25j1a5a9KGAJCXGNtv6nHWBZooJ",
  "key5": "59v2iNigh5EWQS1U3uaGqGGdyWuhBCKaa5u9bZgD9W9HuEvUvBPVBtM69KuH6ncUXao3fFHwU54KaGfS7KiP8we3",
  "key6": "5mhRQdnmjYGuNANRbZFK7rfGeykqnYCU3527aDM4XhqxDWgUzzbPoxcBZZfnvwAZBZuNNWANq6eDGxXhvE3CrF7v",
  "key7": "VonmoHF6DaCuDgjpyF3Lxed1cHF7MJ1wCvG5USxpzgmAbth2CvPKy2VgDw8ja2D5tPLXqYDq7r9kRZBoPSujLWe",
  "key8": "yuEmYiPx5oB37kvEJPeDpiJrbRcx1H4ddcf7ooDtkr8ob3ks3bEf4uRFgM9GQQSYGAFs66Gj7RX8brtq1iQM1Ci",
  "key9": "6pW4b5mEG8wX24SgvLzVLYwBcXj37A22eaaH925bFct9gnTxhfqTwttb5raw1CU2cT8AKGFFT8EaKiuFUPG8E7Q",
  "key10": "5ET9Szeud3gCWCFdFiMUA3wPsQa2kr39UnCdW2aWcGgdTMJUNfm6JKh3XNVjVJTvcMSW4qwfQPYbhrp5dqPjXLQ5",
  "key11": "2WbvA9z1LDAuZWi8ZkrCqwJ1jJsTBr4fRyS2E7vqWrs5cfHDqRopvuKBmEHeawQrVZjXgoC1tytYSZC9SJGkh6vy",
  "key12": "4qDmHBKhrXYY423y6AMNg4WUntkkR6Fv3auiBC9ob9YiEjCRg5V3DZAAMUzHhHkhqUFBPzr3KFzx6wYLTBAJHex7",
  "key13": "5WevEdoyBcbE1CajV62FZZh6T6uQwpQYbkaNdzAGSQmZNUcQ5xCqQwgk3d48WdZGSm8nzVuu2KKNZ2a7rFmWFcAh",
  "key14": "Uufhvep8YTPNtyUvVs6dH4VBsNsin84r6fu5pQ3VrEeEVBFEtR63t9vorz2ArgGEuU1Bt6sk3VzbPCBR1RCPfBD",
  "key15": "1bEDSebANNRiA5qgMxAToXxP1NNJGN7DYUyUygFN9PRoQr4yYyDuC69cFA8XovTZhafGjTdMVYFYxtjLG76zKAg",
  "key16": "2YfYamQGFdoRQGm85TPGRJ69tYxVzwc7rNhf3xj5jtj6NYtKUUf4ECbsBMGqiTK2AaUfND28mCtkXD4zsN4yMmaR",
  "key17": "3KX4diHpWeps9Kd8hUQKPJ9273gKZuo25wyVkHncxJg17Ujv7ghqeLjnBeYNEh5WqFszT74m6NmaQuseWS75Uakt",
  "key18": "5aLuhoEPUuwQ1oxQaRTVuyi7k4mJAT1PyZaRpLrULHSF69AnQB97QzS9koHHEmr1uZsbFJ8vx42zsD4FpT9HCzNt",
  "key19": "i1j5S8XdNb9SzvRC1M5UoQXySWmN7LXXTN7L1t84EqUqohQJDNDEPjD4n6XYHZdQKs9d6yyoEHe9Xb7GZKPBxtL",
  "key20": "54x4kDbfQbvKc95tK45AsUEovUv3KsjdeyBiL2PHEBWg3DdJHAqReZcYfkfrguLa6RyEZeq4s8eGWRYMh92iuZfx",
  "key21": "2sMXzGkkU49XF7fmnN6ULZcVQFkKhYcS5p8kT2S8NmiRz4WhiuhfXhrwa16QeKXjauuUhKJ42WkvMZLmRWdC3HUp",
  "key22": "4Q93NgEAzqbcvedYq7hRBmK27hbyPaf7N1kwG7Gjyup6rA2e3EQeHbyjiNLVFANH2FBQkUhK3e61f7zdkUbc49Tt",
  "key23": "3DeoJ7jvaDwN4sNKdWgvGsHtGJXB3uWhdaYJJfzvg32ire9TcYeEG52zNTnUscLoN1jQAUyviBnuVCYRPaoLAqJU",
  "key24": "pd2BbvYYd5DTkN92LKwWXmXySYLDgR4D89eNgk6Gi5ky8ZkYDzStDwg81Jt46gk2GK5Zj8eFNVUxMo1dWFHGG7T",
  "key25": "3YERNYcKoy6b9QmAo3P8KEUHCjkdHeTH3w4Cg7RXAu53cHmgiFP3xYWHBaCqcFpZvtV1EWayGv73PVNm63m5fyEx",
  "key26": "5mmrwzWTzeCBySEi3Lwc55JzUyzGox16g43Dqk2ekh8cnk94x4dbKxP6rcMHLdu4Lb8i1Tkviy78Yuh4zwFv1sbE",
  "key27": "g9R4jnvvmZkwai17eRrWdGf16SmSMRavkPesbVRGfmF94ohYoAd3kEvJoVEM736L2gGW1eLjxb3e65XdqmKUffq",
  "key28": "3sHpvBYMSd8WXoJ6cAPhvgyLNyFWRV8bhusA8XWcv1vbUKD1e2S3VNWcow8bPqM7VGhbBFRd17m35omDtfY8syVi",
  "key29": "4wEQ2m8zYFuRZAFN3NREjKRon5ixwK3mz152X9nDV4PKMPHsw5PL8wD5wSUNvsnfiVegxEiXUruHjt83hhDyDpDt",
  "key30": "2sVsLxdW1RDCL286PK3pp84GBPdrEw32ng6KG4YNBAZ3U7zpqACDJmGdjZdQsWFzpvi3A5zzjSaRphZqtuBRnHRE"
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
