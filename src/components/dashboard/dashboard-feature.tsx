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
    "3y3u7W9a6E2yBhHb32WSqcFYN9rK9Gf3ZzQJQRe6yN9KGgoZm9ApTLFxqKWoRTUYBCqR6dHj9kH4w45qTjH5xmcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8WoMBpRTHFVjNoUtxRdRtHPowwKJ43WA3Hq4bdxEjqQZcNkkT5DugWxCmvJDNQgZWxYvW2H8gSr8QFNCksYFmZE",
  "key1": "2cxu6jSFCcXsWaDJ1BDByxDKUUwvNgcXTfSVfnjFbQiCGYUpN7Fc7Tea9pyPEaMjuXB5KjK5UWRhFaCvzGwY3rGJ",
  "key2": "3kRSFT3hbVeJbc9TXdFqgmg1bD9r6xJG9ySLRNgwHLH3ujgqaqoCJvuHquGGNUhJsBNE8kn7Dr8LopMC9SGTNxLd",
  "key3": "2xn2bw4ZQJ1Sm5KP9ZTynGWj3H36F3AerAHjktJD3iY9esjxLmEJiSYGAmBCPXHDbvt4ZH3aANp9YTw8u2Aexdn",
  "key4": "SgSQjzdjmuj8exYP4z9GTKUc7XxBRT2jNy7oEvYZ1zByzbtN6yqUGgsdxai5wv3rTS4SG2GS9B4mVyEaQXZ28og",
  "key5": "2ELrkfegB7tjSkFK3NcFTFqgaCUSK1PPYdiZzzehKAVsD46HBn9eVBLA7Y7xq52PAoLG7JVdQgwS7mAJUTN1HUSY",
  "key6": "64sfRVtbkNCJ3shwmHjjtc2YNCS9XLMQKAEzMEVfJNEdJquxrg6jReN9LQmfE49NRsrZEyhmi8AbCqGM2jvh4sEy",
  "key7": "5nmZVTCxqw3dcLPfXp8srMf5RKrmWqtxSH7KsYoAfTmwNgfCsBDACd8V9mrWziHn8M9JUC4VVXn7SAKbrjR6gWsG",
  "key8": "3U2Qj3roNZAJbjxJfugBQYEj19fx6nWbyL7XhwzwfRzPE3rmtx3tVzM5bQ5hFaYURSSftqvh99PiJmwbf2vNsiTL",
  "key9": "3Cw9i4VN3xf53FgkuhGkGiintJNGY9bjHJZeKv4pTTe39Kq9rScUA9qgCpLqJo63qoY4EbE13UmxJnahFBEhDHJZ",
  "key10": "5LixLN6F4dnc3Qba9pPNdoHvuVA2h5tAZu3d66jLqiod5PrLkerez9Mkd7f7aUCWGB3PxG7gmecXfaz36tE8iWsq",
  "key11": "J7KdSBETaSmCTwso1nj4uUfG2toQqEkGwnrDzxSbTwuqgn7RqAbrfBtJ9zeyeWKQ3Cf55LdKKzgPaMufv3KzRsW",
  "key12": "4H9mhEWTfpnaddJDyyp1DePZasNZfitTUUeYLqoK9nus5ERmiuWBHZCTdMqTF86FTPDo8TqaGz6zz2w88SQx5k3j",
  "key13": "5vtwLEsc4qxxc9dCAm7BSwWFhvE9EpKeKu5voQqsgqg1UBmuYhSKWct6vqg9BA8p49cqBNXiLdDkzzjEvfz6QWi6",
  "key14": "293hJ7adipPnCEZsXd8uPdJrPTSennjXZah4pdyHqh7ZtrorNtjDdX3QoKUATZy2zEnHhkA9bqnS2yvmKhzEyfrS",
  "key15": "3L2VdErUvBJT7wk9Rfu62v1sAPouBkqoFgzFa8pLrimZ3nEu2TMsQZ8h6yzDzPjDCpZwmaAGMw8GHuWN8DYBbXCn",
  "key16": "4tyBdN8yT4fZGkKqRMxCteDq3DcP3rYmo6UxYP1K2y9wJJ64VCFBntSri8oyMYvmJuPSUVMeqSkqmHFemGxvtrg2",
  "key17": "3jzdyA2m4M55GxNs9u958VhVVz72V4VdWmyPZPdFy5K8ExGVxoUj9bRybsy9LKfsmKA871A9YA7JyszsmiQU3Frj",
  "key18": "5oejXxZUFKDVAmhmmb2Gh965mRypVtWqhS5v7u2MuNynWid3eatK8nwkJcnDLLWmQwEjfVuDFBwYHQQN7vEr15is",
  "key19": "3jnBrzhWLuw1D5HbNmHtskYiH3qByjpEHCjxy1Qcvst5D9kAVmQc5KV1K3F2yemnSLtACnnE87tm4N8E3Y46hAnS",
  "key20": "3GkoeEfdGGvTb8thFr65ipG2o3t94hhuFgXX8BBVned4KjMdKwGDUvx7SJKKrQUzEEVsv5XCy45AvmYJPC6XnRcD",
  "key21": "3XicoRSKERAeGTfDEu15k9kJeUPSBo9RQhDMYpT1rexYu3H9UvjgoFz82rayZQV4WuiWqrEjceM91zmBLpoxkK5x",
  "key22": "5y1PqBW21ZFPnMNF5AKUZtkTBzvzFAQripog5k2sV7fjTDD8S5vdhY7Cqn7sdVtqMNnUqs5HsZyWREWoixB18Mgn",
  "key23": "3BJDR1AhALyxnk1cCmWw7HpiUxsbc7n1eiKgGSeNLPsLXn9FwAx3qAs3xUQAU7o6S45VyHW2pwJp4a1wNJSJjUhB",
  "key24": "2LMdEeKuEHVgnooNJgXUc9wWcxrc4vtx2845tCzN7vYGBzimvL5bojJyVBjh1m4B3qWhLtmU4o7zC95d61XEVMxd",
  "key25": "3vpYHv2oo8ribsVZG5GcDrEi8P7YJJrkmwUjGxRFeL7CqBPzJepZb7x1K8FisAL3woqbRxhMt2wykmroe44yey8q",
  "key26": "2QNc4KF2jdHAhfTcASKZsLLAJDxG2LW6NqCnSyatYX9hz3y9K7DhXzd5wyFeypXWXCgjUJiaNYVqsmkwKXgnwzH9",
  "key27": "5zARRmRiNz73PRU5RvRX28dNViLAoHeUAXg3fn5R1Cc96mHkG9U5GED5Y3nz7JtbfqBiJPp6ZDdbkzfamyLH1rR3",
  "key28": "3KHR8YPVshHdvcCKv56piFKsLX9gnwjmYdxVvJ8RoCRi9AjNEZif1jLUnXcX5oXTHsJaHZrakywa5kwZEzD5iRLW",
  "key29": "3nf3gtcZre1Wxxy9dFFXQ8TmYxR7Ufg82Vrd3RDc4BNLaUpA74yhiFJ2NaoKpFBsaS9SBKodFWU61DwzPHngRDYL",
  "key30": "27tfFRUtNP9i8v4zftTZoCy2it6hFvkvPTCKapb89Tx6dEyihxQZVJMuo5p4MmsJZ2F6Zu1aXvSSzsDrNtTtXruV",
  "key31": "5oyCN3d6JYeK2hFBjX8EbAVBuYZaqx8fZt3GTPyFTkQJU3gGNfLqVFK12mvKnGWQEv79zuMESoDCkUSbqFb8uH4z",
  "key32": "2VfAtMi7zxNrWvHrGTLtyjnfMVqe3wHfDgVAbDXWUxuCkTdX4cCzLyhgDjVtpEY3skurEeJWdbZMLNfc65mPEsf",
  "key33": "zBv1jzbHFmSpPVtQsxXtZt9QksuvtXb6GgyyUXu2xBdmzGiqFL2SVR4xqcwQVUwaDU1A4CtJqcWwLw8K1uzSs8r",
  "key34": "4Xtd3s8S5dW386AkvHVoEQVaiNvK32VG1iW7ZMF4PWpha2HxJzAuFdco5Zu5EWpQCA6AnJddBLRvUyL1vpw9vKB8",
  "key35": "3ZEsFtnKd6mqShpkUNXgDM6z5w4y9k3q7aFXq3tpAmDQzkrGKFzYuQX8xJPGGncH4DqHZACNpAgWR5zp3WSLtJ5s",
  "key36": "4T6BuPNBuS49b69xsvP18LVPFCr1MqeKatU9xca9fdD94tUPpa9Mg92dLHio9SynWvSXLpGqB6i7Hxr4TUy8q6Tv",
  "key37": "5ptqDTMA8LFq3SfKdgnuGGSwUco6uY3SQNwX2Aisxz5MerS1ZjsKArveKicRHb85FeFF5mwycLEySPcV9rCKGQiu",
  "key38": "4pStUUnuz549tE6CqgWzT1grRFonekyffoVjFycoV4uAWXsNxN9M2nN3sZRJPgNCYfgUsGuZZdEZLepkcyKTrmDn",
  "key39": "126LnQJmBnxQs5oe3EehwMjRkQoZ2YGLqSJTZDPvFNt5GLBT9XUFiigUALhTXrxapkMwZ4qu87xHZa4t6aNL8mid",
  "key40": "3y1jJRYgzhhvXTcJM4w75aekzPoVXRBZ7Az7QTpuqNKNgDcupr3wATBtMwaP8NcR6pN2SxxWWAG9YaXLKZaVj61D",
  "key41": "4pwfAVZWLYt4CdiNWHJGeaCSer8L9bAKeSS3iyQRsCHs6tAbTQ66CsVYcTjeAYM8ZW3j5BMSabiimTCpXHxgy14W",
  "key42": "5KA4PfFVhJWWbXSdCYSd76sABGpiNHFzJBnpUTuybcvN59UK2gJoVkRnbF9o9RV14keorsq67KfbSGEJZVShAvk1",
  "key43": "5dFg1MDtYrP3EWkKqiZsCWzTzXBCZXhogcrmzK1t8rqFHmuEDMFHSuWtfPCnZyRdBo531MTJuM6LgH69mbHzt115",
  "key44": "Gs8MSKfzak6qMfvGPJfPPdvbCrZoPmoJDGs6fSQ7paCQ97GtpuC6u6ze9sZRFoDat3xcnttNkX61HX8SSaQRdKu",
  "key45": "3niXK8e2E5vxc621YREH1gQf3hqCSimUnwcaU3bqNay1KVLDQcYPGpkGYLdm5vvbM8FPzuSh8bjAiDTBqRaz17ZT",
  "key46": "4BnBzXHtwDkEybkRHyngpj1vXNvBrXMkpoHC4v8PPgvGYBuuGhvpJ2eD6Jcr2AFb2GaSV1orw71gmhzFAkauCGe3",
  "key47": "5PcZiGzJXnvTSxBrGnuEBGUqmk6SJ14r8i1GG3rgvFowSf7CjZaKSmDNcp5qNffbRWA2aTCmpmcr2KpD6erma5ZX"
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
