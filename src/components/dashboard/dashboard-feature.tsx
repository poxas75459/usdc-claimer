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
    "yixdCfvjWfvKp8848i2eRx9r4kf4qmEftrZHwXGBVUpNVQDhsk3bXQyTz8JRLwqsDezQh8PZ6QLXGmTQ9szHv14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGHtKyk7gUGSDPmjNnBq6XXP1BGZNvVWWb7JKwTL4K46Ftuc21bLjsGFaPzHizX9FkNyuuvYzVRZKNFd4vTo1rP",
  "key1": "2qSN8kA7Cksg76JuNXLXCf5VZm2bEkLkgnZEeosG1PMqFWd7uZw8Liye1cpVs9icXiLVz5Gs2opwWbeVTEec73X6",
  "key2": "9gFc77KdihZiTro1fz354HRFipQMYTFMHVdvp6G4UDCnkBL52QGhfrzoYGMdWuBcqAPfyWYkMpPQRen6d1WqtzJ",
  "key3": "2cUgJBNwB2NieemxRGeSkM2kJ28wzqdup6B55cSsCKEYM6B6TuKEU7dVqDWyh87uCz51isy8RsXKT2AbFKtAdQk",
  "key4": "3qKHoeRziC7R3KrG9nXzmPrx4kqSCrdCj4zTPD2KTvsvxYhkFVzzqeNFkxoA1gUKxBDegwAL5JDWShgBbcYSZdwP",
  "key5": "GZRqk16X3M5ZZW9ieNVzch1XVNcznDeTY6oRhW8JcHb8NLky1rEw5dMwoGAk79tL6Yhsr2fx8JRjaguTWUD7nwg",
  "key6": "5L2TACDgxiFbVNMoPuMNeYEEVdQKRDPJ76y7NsXRtMuwcuHYkjgs7DiKsnsPU4PQ1cJ7ipYPuYrXYYiWyfL6qAkK",
  "key7": "522xbFrLwkcjo35tNTxwyZQALx1dTBUXgg2EKt9ng2CbZw5Tr9xn3MBaJUw4fh4VfuuBbGTbTHsu3k2cGkYoUa1u",
  "key8": "2fmJEqH97Y7k8t7RXgJUreE57LmB4VpRREWCeStLVAsUB5BmCMrUCgprLegLmcqcahAvZBLdoGgd9pWyqUQac2rr",
  "key9": "4d3cvb6vWuscbfkT45rBaBtB6GxCUvbr5DykY7bcQwuuSuP8YqqHSZ3rVEi3Vnfadxxby1rAozffTdfVjxEc6D9d",
  "key10": "46W1tphGYoyv7LPYKfanSd3a1W8KhUvxWR88K99tiBTbRJbR7exjjb6tN8umz5ujcqfaLjAuzyQXJ4YS7zTkzqad",
  "key11": "34U4z94spM4WTpYHNhBc9SEXAymzffB2XUbgrd8HWcY8w6whkP7QY7HbAUE8r7rqfwxd5AWvQ3vhcNyhQsnktu3J",
  "key12": "2nfSb6WuaQgmkaF3TxmhwNJXAoCK5t9m51ANWNV3dpWE1chA2r5zo5ECXwmdsDRs9L8hdvycAcAVQVTZiam2wLgc",
  "key13": "5DFBfmCtvCUcUyBnPU1zNmkXZivPRiFhiLfn9cPy4Na3fb441j4Xbazgfh1suFJz6aQv95WudY5KfMJUTPpxA9E5",
  "key14": "hYuty2pV1qH19EpQUAHk7dcB7VET81iunMf45SNazLvuARVM4KJNGw2sdFxCztxJPp6r8W5AmSUAdY4SB3AwkG1",
  "key15": "PbFMfQy5UVARjTiuqzJccXwqFzLPTjkeZeYzwgszh3PrCNo7wR9rBGnCp2GvJikVKC1bwVEGUPNJX3WGPQPqFVb",
  "key16": "32bsuosbdKG8uy7KkazERutuQqVHnbvfjADYFB4Nhe3W8Xb19Dqef6LMMBkbQNARnwq8QcWdqkwyVKL9wGfdABSQ",
  "key17": "3UXR15BU7HoqiudcK5K6KVX9sNb9bC2KeAZUrEUgYtKBdnPohRnNhGbjFRGAAZhVZgkFTfYhUC8pEFZTPZCRvvmM",
  "key18": "M2Wh9HWvctJMTB7FcvBv8xzKFLK782pVurSpatJrxuz7nz4hdByzeYXzfeHbDhJSTkD8LWtXJrSH5Q4yQTVHzcv",
  "key19": "3TbVnDXLhYD4TCyPLi4jsnMYafK5SuTpr7eT6vrBQfxXHbCrNKcrbqJhxNXDwG8yAgrqFFJEWVkhkgJJKgTf7auK",
  "key20": "5CNtWdzgWSC96cEAqa5T8SWhUpCtX2Ewtjs48rGZVvBoDYU9ajGktK83yamNRszzWB8vhMAVTzmMEtn8jp3vjRgE",
  "key21": "35FzBuhYyhhy9dtP5xY3P7BHQaZY4MyXxesDrKT7XEhhNeqtK2cZBQohTwNQ1LGMQty9J44hfkDyVy43PTvQWgfu",
  "key22": "3E7q3bXz5ahKRGosPNJFJubxLbeoYQXk2ieuF6B5Y3q6GKJvNfuBt7wMkg2mhXEFxKzxc1uPBUN434jGjLDQ5bQ3",
  "key23": "3J3ia75CgnxCPiJe2ErKdEnaGrGMMiukbe3cprdUcBzW2pvozLUm8WRHJbqUrSJfRuBG8YzSSrbdVZeepXZBMLDr",
  "key24": "2EE1vWFWQRMjAQSe95q8k4wyDto5zcm4C3dbBi84bmrj2r1tUp5bTE4F2GyPHmoCB5EwFz27VLYyEWy75BAh9s6a",
  "key25": "4rR8QjR4qAoaTm3VN5aV5DB1sDQxFPFkuC9E9wnTrGGmAQHEU972tXQjrVxBCNUc728BMdwyZXYXHaZJ4P1UgDYU",
  "key26": "54sBqynnoGEein8cRAwmakpo1bmsAXvydwV9xFLC3AuK5YfuoVfqHm7BC1y7hYXFuq2fr4hsg4JgPqzKiqY3oLDW",
  "key27": "3mxNmuTyf68uXCkrBz32kuMnXWZJ3hTKD2BEXPA4iXbToycyV1KjS2Q1BvLvCTC8SZeHrwH7mH59mn87Pk35Mxi",
  "key28": "371zDr3EZY4ibSSqZSQz1i1uQrJaHUVBN1vncJoD1taUnFz2p6A3heTuHDq7fLrDoj1ah86L34mjygDME9K1KjpM",
  "key29": "3tfMnnbhtGk3wNCdX54gLWUFeHDdjvcYNcAxhFPadpMtTVSmZTXzZR86JsKBCL5cGmUziAsV2LR9ojZq124zAwDT",
  "key30": "2PHtnpyKH59LYSVzyZSi9jwEXK16i5ceQuCMkjFT8Qeajb7UMP7vyfgxq5H19By76HDKpXLGtMYA63J2niZuvV5R",
  "key31": "299m7K2abjyZdUhBLrza6TvePWmgtUEKxDMiRAC2ggcogUuqGrrzHvPkCpcVtkb8E4SY2886pVQRniUhKiFrE4Vn",
  "key32": "5P6LSoKdLBr1PwhzJydvTvX8vfAB2RAEz4wCrCTAMY4vdMNY239QWJ4UytXDhoARZMKKFCn5nuKYkXgXqKgVcxCd",
  "key33": "5qtqnJvAFdXD9ieufZH1MP8kLwfLGxxHY4KofrN1pNJ1NQVYDQR9fvbVLoBXJjP3RSD2VU8HEudaWBrPNRtr1Emr",
  "key34": "4Nx5nD2SwA6ULaDHp49MLdiVf2yVfiJKJpP2BHMNgA1tKWWxUcGGsJNxkV64CvoYqfQAVAbtmwZcKcQMwD2jnvjd",
  "key35": "5SkG5KkeqFgQCxXhM4paPtmaEkqbwriMARDKPNJkjxMpHpiQ85BxGKvVyU7xqqaNLdjkwbnXXsa3xqM9LRhd5XTt",
  "key36": "bLKNNqpVcPkpJ2RBPxrLRegTXVpjaNm25bFm8FA7ruKw2y87pUU5WTw9rwa12Lmjotc5cdA11E1o1a4wg7uRHpT",
  "key37": "1A7MA5276hDPCbfVEjFKStLtgdM6sQ3yrk7cfoKhxnSQKQ5ESQfLntqnz83oLZNQBqTka3o8EUKwAnWiCVjeo6S",
  "key38": "5SSHKaovrECoqTx6uE1DVE9HtVPJRyRWLzeDfY3YkoXBzTRdw81YM7RawYVWF4qXADmM922RJGAvuJNDRyePpKW7",
  "key39": "3eLPYxFexRg1ysruUmSMBq7gYWCXX5hf3zfynRsPH5cxi3XvpCGBvfNHbjGA4Vx6QfCUju4k6y55yx4M7SpTbynL",
  "key40": "4sUJgFE79YkrtMuhcJJeFdNHdReVn8KehsdvYrrPfvDm5KzBX3HbXhA1PWbjnbaXMLzbkfyjLeT3ZQu65H2yRfCH",
  "key41": "LhQasBME95Sdh245q44UDYvAkRLdw23DrbbvDXxBAeTGQLCH4eASyfH8TsNv8qjBzMDr352KMMZc9oZuQYJRVZe",
  "key42": "4tyUrbtYnmnDHE399s9R5Wqi7ssAEjzsP7A3XDc7n4Q8aiNNuVnWuQpk6VyfcsYkAf4xFLN8oxXmNjZki6KuRVug",
  "key43": "2CBzFovwBep7t9JYgYf9qMfSLsGZQu9LYbBmxm4EAUmmTnDEw7Vnv7WWtt7cLdi4Lvwx2U7FMPjwWQGCb9ZWnwHr",
  "key44": "2f9fdK2oeAZHr7p2nEdRixuedPZkG5EUbhLe8ypWdjZFqXmTJqEh6iUx8qQw4vtbjw1xMi2CuKwCXpeURdVey3FD",
  "key45": "35zobfT4MGnPZnsMBi2XtLvXnJRd67MEN6tLBbtmZMXZJnFwvMCLuLvAf8N5g9PE2PHiS8evi8x4pkfWS76bQDQw",
  "key46": "2vKiKLC8ZSi4jsYbJXipQ79xAHs8ZSXWbvgJ61LMSnZNShfjUSpFAq698Mh8VXfYb7vs2d7BYCoidtu6Gxg6pdRa",
  "key47": "4NSBa9VQ7RgMbeteg8zvy9vvAptArKaxkV2zW3PuyELnvUncQGZE4EpK3DHUHbsMpmDzp2YaPBg47BCd7Nt1Q6Nw",
  "key48": "5uHDiU93aKqZW7BwhQannFcJ7mHMGdfLrugJ4S9Q3JigWiXXgkyqCGHXujBzrhJydzULitBDS1xs6363hezgYLMh"
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
