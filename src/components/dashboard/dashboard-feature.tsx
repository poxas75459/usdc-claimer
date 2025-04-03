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
    "5mqAtosHkeipAN7Kbgif8bVtDdqkXHFvLzESVzsvoprUGjBoYc6MdsnsYA7hVUyzoSUoTMJiTcqFCTX7xk3eJnsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LmCzzJBTYtoCtnNzwsxnhvcnEA1NjMWXjkBBicBiq5Vu8wG7pnAdqLUsKxUkb9NuyUxztgSAsadcwb5kzZAfJEW",
  "key1": "74QUmy2kb4XrXQAPwd8rEnxsEW226PQxV4ibgZFyEhheFffxUuhE6TnkXFies89TwuEMzfbPmCxfPYNQKc4L1nF",
  "key2": "3gmA1GCivzsB6AH7uUKYYJoFkm2H1YDhdZWNBtETZK1e7MKJAwRrsKujRoWfqDKGYLqadMsQBCdFC2rTFmbmcGHh",
  "key3": "3qZ2HUYDtfu6TxvExKYxv8qusDEUr8cBr97Qe76s5dnzYjHMQmVeRG6zhPyeZxtaNczPACgYwWpC57Lkdq2rUsim",
  "key4": "mZX3HS1555Ay5ibe2XT6vZsqMvgtNDYVtg47bKLmnFDg98fKUC9CS8zCoUEusAZDAyN6exJRgaz9V85MPnnhohY",
  "key5": "4gkQTjXaeZcguvDs8KmDHgkEk9jG6KBYhY5xuajHdboJuXBeYPGHbhtCAFvg7EM6oRPx24SVeCyaoYPSzXBQTNP7",
  "key6": "5pKvjBg9jQxSy5EhNdbLryh3T7cZ7FJJ54ej5RWWe7UvoTDxS82Msyp4dWTPuBgetDVWh4CuiLG3A8hWmgo9vYpV",
  "key7": "31NZACpisczWVhvgyGagSd3yh4STYVwR57VnJXiNGN48Nty1Ygi6DHqdvv6t7Exz8uZu4fzqJvrQMLZAsKz4CCjC",
  "key8": "4pFtTQENZ5XFGFWZVycGMw4RDk5eQcQhbbP1PqL1LJWTvWRd2uwPcd32bLkFTu6YuGMNgsxyjcwHFz7uV5w7kDbR",
  "key9": "25it66tThBLBRHLzrtAtwEfgLGjpoEToz878gEzBaP72R9qRAiK1fLQiLWxQzppqpWm7ULbqsw5P4Dn9stqQcfKX",
  "key10": "5w9ETc1q4m8LwJae8YGQp3xJuzN82XVJDJTtWESJ15xCYXrN2grx9ZHVLYYF9HYbkYAEUxxMyrhRrCnVYsVTXPPh",
  "key11": "5oQSEUxqawX92CBzMDYXt1pPsgR1atZJeUx8ns81wYW97EZhEC6KyJrTwqv5LWBrE1hNPDX9EczNUVtnFqk3qasY",
  "key12": "2Y43hyuVDDhPvQjeE1yKEy76CJt1a9TvDAezB7TTFD1cSMcT2VG2LTLdAoUVBFRnDrie3J7iBd3S4sCytXaWYbYk",
  "key13": "45jw9hgfrcBoFLThNxMFV3tWYvT95G7y5yJnA5QP6V6htWCyTgSUXrDFh4cngZpxy7o25U11JojcQdDwQtvZnH9e",
  "key14": "3cdiBs5FdjoDEtuXpfGx5oHJro28T4D1wwHvvDuCNxBgGnvnDU2iCNwfHJfThuG6JTskEMuAewPFQxHHNws5BCJv",
  "key15": "37ieYYqwpEHJ2kXK51pxwWJ94dxF5o8J4TauJvUZniwYD7FFZytCc9KyMFBGoyfYeviyD26XJw2v83gdDiKDW5Nc",
  "key16": "3KtvvfEuNHku4UWExhMBEnKJpQBHjStSH6ZzMQJZNAPyoH4GcpkGN4Vc9DZoGu3rv4YzxBCnuxXBQvsXiMPjV2yr",
  "key17": "5e4C4K5QZJpucXk8YN6kZfieeo4P51QSej5i9tDY9XmCrF6w4UVw5ySkM81C9ZpRTSTAkr8FZz3AZgrCrcg9XKEx",
  "key18": "2cLxXBQWKymkofMtVsHMKTuN6bhAUv51rXhTaPXDmG2bUGd1yrQeGEZp5Xr78iQVBMJ6d3V6GQniFvFpMugbewTW",
  "key19": "4tZbcwd8qdsyMvGXP3w5A7jzGuPwK2Gk4kGREWCGyxZEy3Ly64PqwZTRnaNv1MJYjMTwEHNCEzuYhrpadYhykXNa",
  "key20": "2zPFR5xEWr4cWgLEr2XZtQfJFskpRmwKy3TffSt28NTTFkJGWpZQCGPvke2w7nX8BV32ZGGfsFspu2pj74vYfdm",
  "key21": "SFd7k4sMptZJjdNN4WGZjLAkxNp73pjnCRmZhd6tSZgLMMi4cCDf8Xd8wbpuNgvfVjrKTsfYG3NeZRF3cbBAoid",
  "key22": "2yfSArcDzfWDKLT9tZ2iHL4vhxUyFpViLvRCE8iw3M2Sjpb44zP7YuA2eGA5TwqEP6xM6GNVFrUfz3TTvfUNLka2",
  "key23": "14BqZZ2rft7ZbKyRmpMA1KkMp5nDNWPHmsTNYutu3gAwDoGJR1Ga5ZvkkPQKFDMabYBA2BQJnMFmb27g2w84Yx5",
  "key24": "SVg8nhv2mZR3XQuEgtrxhBUuNKUTxcVF72Vcb3f1PdLSzZH1241WNqPFs4d58NyW2A3e2uU2prVGKY41YHhCXoV",
  "key25": "39pPbATp3cABiQtaMwevnHnyPv8sM8d7FSEBDYzM7YoJ7SCNkLmLKxA78GNzgnkVzFS4kCtwumRzNBSKtpoNx2L6",
  "key26": "61hadW7V9xS78y8wx5fdyX2Pm61orTfJX2jWfc1EK5vDpZvVXfwDvMqWRx8DxCmZuh6ak2JHYMfWEjVyRVmzjrEv",
  "key27": "62GSrrXN6cW6NgbyfTaHGoJvDK7EkMZkYwVpS7DEqKtJBFvyUJPbF93LboCQsWKvJNiMkWN7LYqpCujd3AaaFtXm",
  "key28": "4ZVUhgz3PTf2oN2Pgr4N8Fd48Ex5Kcyc5bfxqZUVPNoGafMsTuzsNxqopM2Q8YAKcE1kWBczuPkFh76p8AiDpLfe",
  "key29": "3MG3jmja7TVNPjjq1QANtPBJcZ24CzJWxoTdy94dmDXV7CFrD8HfBg8CvgYXMpQhmKL38LgnntTy6EWHcoRSWc4h",
  "key30": "3qHdMc4byyvfwBfxnU7UpYQ8AhtKyKzrCkU7y82aWZAHU6jiTJCBZmk8UHQAag5SSGwYeCHhKFb7sPeqmMj75t2B",
  "key31": "3wZf9hPqqpNDCnMPs4ah2As68mvAvDmpbSLJuPTV4djiNoaHvgj2dfdZCANgU7ZgTGKyC4UcpHXGu5ZvufhRMqsb",
  "key32": "5VvUAEPSz1QwDJfdjP4gFpa8SZDnJQZNFQW4v24d2D59uug8hfWZ2cJSoNuyvDVgHWTFdKVx7tQYyJgZtdFQJEHB",
  "key33": "3aA7j8akkcwLA2ZX4jazDihy8YWV7gFqgKeoCKv8KCxwouB2btRVrKuACzepsg5togywimvi1vjPHYLoiNAC547Q",
  "key34": "3gvaErhMAjgmZNJ6pUAfF5NsQCyZDsU6GJb9rnpu5LEhxpKMcDLgu4rbC9d9F96qk69k3ETwKFHUkRz5vhkJzNdt",
  "key35": "5h9LzL4dZNVFpq4tf5aXvBVgLpasGxG6L1Gw5jzmPY5bZRbYTW5e5PkwvucdwGgz9fXLH3nm48jyLt9kWvd6zgyV"
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
