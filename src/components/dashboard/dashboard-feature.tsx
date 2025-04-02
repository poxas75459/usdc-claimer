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
    "4QPa9Ls1wsxX45EU3XeUPkjE35Bs4ZXXV2EzepEVtrzjB5AKfqPYVFmApx6CPXafjanSCsqVQ8RDDSsDRhCz2cmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b3qEyicRATGFSpXKZzaXeQUzbKKTYsQSpzY7ZZAhjG82TfoLRj1NvhvxDQSfpgBj9sU5TCf6rLFt5pVQpdnZG5m",
  "key1": "2cQiGsw8wQBztrqBXegB17DaPnpkyB88tRmztBYJqkuQirnJReREXUT9Y7qZ5xSeSA6ReV9kUnGFoHt9n5ukraQr",
  "key2": "5PB6MyGzGEaxPH1a8ceo3Cm9rwgnhthehnrHnU2SvxjcckX8w4ssCrpyKKGmpS2MVXJA1aE8zBqghX6sjXirKeiw",
  "key3": "3qM9sR1grMLjGThXfoYNc5EY2pS1iLfFJdnzBZpbGMjGS5VFnfmaMNfoU94cBwzqu2FjDBCweZuVM5JdxnHghVxP",
  "key4": "3LAZos4zfXRaGEarttgv6ui2NEWmiQpsMZXWhTYvcW5ugtfMANLNDiwhJ9epAo2NoqCNsFNuFQWZyyfeFhGKg1WA",
  "key5": "3AeFYR2spiYpTunZcaKKF9o7wbDLSdfnycqTF4EUXYieFhAQDUtV1e5tDBEcHXQDrJXy8bCQxG8XHRuNDSFYEHug",
  "key6": "5WjkhuMywUBCcKkErGLzD9Y69DgbrDEwp4G6PuY9HshEj4wamd46VBSkeB3NavE6ET19StdQPh7ejFYqMcZozXKx",
  "key7": "3yuNUpAZBekZsshuacpHa22q4jpeXVkDE2b2PWdd6intBtRBDmQqDNoQYYXd1mK7kYfAm4tqweBpw5VWccdHsUrz",
  "key8": "2uQGMum1t56m6mmgwR4GuzHBeQfwwKTSwakTn7pLNUEUZxUNF3TdJbDqfBgAoJVzgxEDBEhbTJ3F4YHZCjHgG7Sk",
  "key9": "47iwFATsVVA17DuBhejJRLic2zzqfehZVjxeTeSzo7vS2c9rm6CxzPnpKBTyDPtr7f42ZMakZSKmtYufytvZHTn7",
  "key10": "P3eJH9oGPoXCkfDXEgDpcgvR9qWKiwsQPmQ8NtPoixNP424AjduipeJ8yqcdtmF81nZZxX7QXaHcohHYy4J7ZoY",
  "key11": "3KMHK8wRj7zFLRHdhEsmRchZMKmXTqs31CHvxRa4Sm4dTh6fyq3VVFT7eLGVRkHq7P62HWKbdaAZ24TgBTZPs3r3",
  "key12": "2YHH3qNj36MKXgbX7HuZpsL3rgN48jvtkEubQreDBhRHw3df4jyisVMfduSivyLShNvCPtsvQGu2SMzcMhAz6h4e",
  "key13": "jkmWjJk5kbD37qHDNy9ZirGJZ73g4VXC36HFRN4Bf3AStF56LMviw8TWatv6itKGxscqa9wjgbgdkL9cugR7Yt7",
  "key14": "Bq6v2J5zfrgRkrcyemjc1GPrTf7yA96QfiSskmP2KrUNSKEQSaMb2NA3hiByNxecpbTrjMMscUxrxNjwAKg4xkL",
  "key15": "3g6vVxCuCRmjTGmz8D6DF99bKM2ZHUYgpV55rTKVFWPo9ANw6H7dcyNVufYNaUg45thsgfssbpkFDKTtgY3huxR9",
  "key16": "5Ktf2gbGver7k1JBYvGY65yUvp8yVfgKfBKfzs1SpPDpE46sz9wZpHzkjLrKgfzEDTdBrt4czqAyqmvSDYeKtviX",
  "key17": "5wZb9a3WSTtprLx9AtgX6VjC9Cm4xqCsrweDTuA1WtwDXLvNyhAjKFzs6duyQMSumFaM2n2ei3HUG9hyaXoMrKyN",
  "key18": "37AMCpprrFDDUPKWUqK9jAMfTVawt7t3sDuRYjviizbWWgtCGxEiZE6YyHHpCgXD6TSjSihKxSwms5qGuhzV9b6K",
  "key19": "64d66ULvvHEfXkh33JCaD7CKLwAE1ktcUYzfqahZNUhHZ65MCqocLA4Sav49xBDH2t4VaAsyP1Fay6NxpJbQMKB2",
  "key20": "4wx33nLnnxjEUD4uFKXFPKJo1pGzRYmnWHrisUxuXKvjDTQAmTAduX1BwiApAj4posDHjDvQ2npw3X9tf8aQDGyT",
  "key21": "2npCDjSkzW5KgL55yGB5LwYy2HtsLva4TrUTq9AU7qzYYi5kL5xDqU8oqrapsAtoFRYFMBQfzjxnax3shFDXsbEz",
  "key22": "2ACst4ifBfNtbKZAQENba2LCKbcnh2iChEoCjCBjApzcE1EyQGu3WBxakQiLDTqSoUB5BnGkC1j3rWY35w6MSyqx",
  "key23": "5pdEdKszzbCLDta6N12WjpUi5hTxy8A84chS7uGFE8MidxMgw4V3fu9SftbXdxrhNZepE9dAdN5kBtBve3Xw1SFT",
  "key24": "5Dz7pUcTEQieGP7ohQtZDoxMWyJfsZ7L6cedR4cNMxsRBwp45MWmtQPy7SadykacZGVfdfwGQWVYLdUVTMEQegpT",
  "key25": "4cfmcMmegrBuUd9rXH29oJmrnwCDBMLhx9fs5r1aYGKh4zvvkBARWsBcbH4SKfqHf5mQ3CrbJMnxHmYpV5MmdPg6",
  "key26": "2184vgyPbePevx8odtUCvknyUEcpujcis9Y2YvTHprq2uANnqdzDUcZ3kCmDPsg5jwd6BZFVoCX7xx3pLcN8sjm2",
  "key27": "VmoRW8HxA5DFXg1QdrRfXyyF8BeyNMTtZeXMRmY3UAZe56K1Md6vjaBy68MDbD1T3kNvfrjZrtaK3y4DfBt9MNA",
  "key28": "2BECZk7PQakkNB1S86aFZVCfkheUvs1nbV7FXDU7fYJVpu3NKYgpPctJynQCwRSquw4rcnMYVVU2U8785Xkod55a",
  "key29": "4HkBQw3XFM1eTTrRA95zAaL7BodjQPtXyuVERNekF56Gj2Z2aBTGr43i9C4qcsASzrHbuKZY9fBgUgQqxyUdqY5X",
  "key30": "2RvKH3PxgryHu9yaLW3BdhkYVe6TQEKpSEXejqXJWTCg7E3ma1dQxsJLL2yEAY3nBfBmGXbdszdkRgrnNiaitLcx",
  "key31": "2LkbScTHC3BXvDHd3MEauP7hfu86F8XHzrtnnCdJTb3xcA1dDbUmAkDua7UCJXDS9ACfSJCMaZbCXrf587jsiETz",
  "key32": "4CQKN4tyc6cGHXgapNXU15hg1GhVHidmYsgimRPwVcrpBjVKWYWZDVwKHzK5oUYG4t3ZSRbSho66PTjNLXvg4GXW",
  "key33": "2jC5dukfwWY4brVWPrWrYLmxZwWPD3Aj573aA5rCA5hojUskZUJEnDuE8T21fMXwCUjTpjXvibbN9scgSi2R8kW4",
  "key34": "3p1qjkMQcTjSmSX1LZeGuPMZ27WhDbZgUyN7gvckr6v96ktkxTstbJwGPmaTcBsMfkJ2GUfhENLmxyY7Y66jS93X"
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
