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
    "3E6rN62QQcYnrRmtxjKvgxCkTUgdkxLnY1anpLdq5cuaYqmPUfzvghE88Y36itg4YX4YmcuHq7u4n7jXRdAPH38Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37CiRb8dNUuW1jNqp4CvqcrzJtEXqRuSTmzFvfmPAv6Eafz7kLYfkKnSyjbHWZoJ2o1Voct7EdjpWLVtGT5EJjeA",
  "key1": "41pvqetNsagvN6figodgMYPCe4PPWFKcZf7yFpY7E1XWcYwkrpJFsDEkLYf1t3kRebxu8ZsqQ8MRpcwyXELZJZZc",
  "key2": "2pZeMv8UUPv7NN8w2xSF33YP6HLGByoVu2BcRufpgeV43k8dyDPNzJzzhEGfXkfYhuXL5vDc38raGtgNbypafr1m",
  "key3": "62gSnRvaNNpuptCatm7hJPgXoi6bcqrfTQyxaVRR71op2bM7pDAjMwpF7T48MG2rkoGJsQTFrrdxx6hyNezXdGeG",
  "key4": "P9PjyYrNrnpTuPxWT49mNPTYP7YqWw1rYyS6TKPsUd6codwr1o4tKTxKPKp34ua8Km3bnvp4GA5NM7dKvcDWfgk",
  "key5": "UknpvESjtFmQfNqREUt4bEKQ2nVdzkmFEecxNgYPBWbaXR5vwbf44FxgejEMC1YgpFa6cgV2HPqVUiAERPY7icK",
  "key6": "52EtbLmpKh9S9CNV4DaYnj3tfWKmmhqTMe2CGQqfK5uGvY76wr5DgMuaiDLjVwJpfUGoFXPUd1PSEYjvRC77rVGp",
  "key7": "5YX9AUuLqw15nyLf88bfZxHf7F6gt8FrJHsbiXdyRyi4RM8w4c2BbnqEvQgvcFP66SjFZWpUzwwL9PMrTeuKoWAP",
  "key8": "21ZPX9F4nQ64hNdcdGVezSkesLHYSSRG9RbeDnnYtYw12FLcYfmDWEQDxVbzA8onr4tUDrhkGHm8R36v116nXh5W",
  "key9": "5dq457yDpy4bUJFZ6FzRg3GPs43CwePuNex4W1bimzHkhs7hBUbdmduTwEUdLPf6faLPi6DPmwAbNS2UioS5mefm",
  "key10": "3oiY8WsZBxNiSstzZ3BD8bLoHdMeYBqtgB5o7W97gV1xh5b7jGEf2P11CnRdSnppgap56aksBf9DcxRnMvxamQEK",
  "key11": "38NNQfkrZrWQYyDAn3vFUwfMMe16EKXaSZv7MbFEEeCvGAB9PbE6sPg7ZtmkRGnarUFMgcnzqNsiWKzwgw67L4Fa",
  "key12": "4mFB3bYTMLRLKa8zNAS6aEHxYLdH9q8w7gH2DLsYztVn3a2xVFRe861zwEm7NmR3fsjN4dtwtXimW7dFAQykvqJn",
  "key13": "5cFFZVgiJg5GhhJKHZJhPUZd6uM9yoUtpuiBUh9iypJwK78kRZH2Afcg6dcaSos7iQuCGxesBrMhbTDmUne37uQU",
  "key14": "61yd74iiaprfAwncyDa8Tfv6mZDxWbFt7pJxA39jJcpeXsMfQ6LPffddRcogS5csUEC8Winj8DTSqunQgYL6kDtP",
  "key15": "4nMtmdAfV4TBWBbwTqmXxpwRtpCZA67ByRQzN5AfRV64t9xq4jz7oL8PiLcP3mRRGz7EGtAx8pPBymxKyQadYZYJ",
  "key16": "3gLiu3a8H6AbE6TWhCM1GbRHRrZWmDDL2yomTntAxzCZZgV5ZHEfX2hzAt5UJ862wx4Wb8m8RwfZuL61zszcjBdQ",
  "key17": "3LPjaRFDJe436jnwGMLd7xmUnvoS9RAfksMi6HuT9BAUaDgeoDAobV42mxEHs8giAMZRWknBVTxK35jzAXfhGvXF",
  "key18": "5gN8mqkjw38FQVS97FSmUQwg7Wm756s3nEDVNL91azm8YJt4BgLaWgCd8FCz9g7JiVwEEMriM3LDvgj8nygqMzFi",
  "key19": "4KpeXNb2jnKaQrSWLWSL1kR4ouYFfDxvLygx7XkmfcmF7Sk51UtCubm7c1GearLzswHJtHmLdAAneruPoUzmp2P4",
  "key20": "5wSsFFdLfP6inxDqDnuY23CL1cgsHKxmozVpeUQxcYKYEoECycUje716nkRk5i1fmwd6PC3HCBHtiZCL4yyYgLt7",
  "key21": "46zUh1jhHmsEvJe7aRcnofe5ZmPmwaZApoxvArT9hb4BCKnFT2MfJEoasTgtbvxj5WVmgv8TtUahFK47FajcGWAt",
  "key22": "cmbnxhWGpDoLxZdZrso4FmwQrfpw9Sk4Td1amoyTgBEZy9iqcDmGmpYetxafc8XJfyL3sFrfFeGHcgqtixMVQ6G",
  "key23": "3yxikyzyMPKQvMwZ82z7LHwQJfrTWfm1FYipupcqc7TGNr7ckfEXgUWvHTaWGbMRU78ooBwp5vPH9jTY5fnNXyUv",
  "key24": "4z3HamTvnquVnVP6mzgFtxWxUhYGvr6uJAQQcgz7bPycBTAefH9WtV6d2R9QaSFyH25d9hGWVgJaXFVrqCPXPBJF",
  "key25": "3j67AHZLQSAcTpLez8mFDnTJni2Y6PgtvQdhHyUhrq38JchR8J6wjpwnngcLUjCmjseBEjCs4aqZxSEF9XFAa578",
  "key26": "2cujawz5TPj2Hhpe4tYgMQnV9RQdaeFkWeZ3AL6gvojb9Xf3gnqvyKukNgjp5wCKDuTsZoY1h2F9H2qJ5BBH6qFt",
  "key27": "x13rHfUQh8fPEhfJ9qfXAjvnbhAkqaDX3XsXjmvJzQuGSi1tMuZA5iW2z1niCJJCw86wmJKZsGBW9wU1wyS2Uxz",
  "key28": "2zEbBLJgL5dCNtuiSEN33wJ5bTQtYZXtaJaueBRH4rK887owqnNmd9vKf6s8s86Q58bUaWma9UccBpLrSb4Ek1vW",
  "key29": "41P3J9QDAtyJQM5B5KaxJh8WnvhXSNg77kHco3kad7QPVq47DxgCv7R4VoACrEGvTUW4qEpqdeBhxH96KqEiPVC3",
  "key30": "4XYBfkiTsd5tmHn1s3MuA2E7m3x46DDY4C7YLL6MMPhbWxd8Xad6tHeRs7jAoHxC6ZN5QosBksYAJ19EzpKuD3YF",
  "key31": "443ed4iVdMfWECzyfpFVxchFK2v4JDXjq9QwTCahJRr7ZVD6bDqoXV8Z4gjTat4eEah8mQRbUsXdcRpJfXzQaxmf",
  "key32": "36SChno2te8UNWu3fN5F7BbgkxAQCs5KpGeFrRqioujzSKg3Sy7D1GVf51hHs7KPve19xG9u97FH1Nuv79ZMELGe",
  "key33": "334AZqZEBj9qBBZsfpP9GHx8kThqEDBnUWFxD1dnfFWDxdeh4L13JXgC1ad4W7RBBMdXHfXErCMGHJ7hfX4gzqAz",
  "key34": "aGgF5GRztPYMc8BMJ7izCNycgT2sNhL39DLfQBNJyKocsXXsfi1cEwcTG937vYnVVxa8brFCfHmzoUMkn7zgZDH",
  "key35": "364Wz3nKgK41WQtpc41HBiwi2ZJTq7UzLtj8t4YT7KgWKh3uv6YP3FrR5W8YsJ8bBj7apefqNjjheyiVXjwf4nMw",
  "key36": "Mkobcp1yXoKpEYpCNRH5rhPRZJfV2gmN8q3ST96zKbyb49gTRj7CT4ASfDx41T2FYYY96aBJiy4JjzaF1Je7ZQJ",
  "key37": "6RH6CiZhpFmYqKucVphYNU2tqSJkcrWM7FUW9AW6X7yumXCebyVzTT4ZspDoNj9cLzTUC6kWrjzpnGR11dYtgEz"
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
