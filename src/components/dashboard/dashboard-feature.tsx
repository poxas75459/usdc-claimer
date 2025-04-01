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
    "4bTvV4FFzvk3Shhj7NEyVWLqiC8s8se27EammZS8S5NkbncSVhwdHDsGbeXPSJcwcaprzpch8EjSEMkb9xJLTt3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SxDe8CK77Dm2dJw3quS1ob32A1E3y9y2m6BfTRkP53BP7du9dsedc7gipq44GPw8MZ5E56e3UQHAoHvViUqQzsj",
  "key1": "H1RBKbBFJLpPHFqfD6zNh4fDjG3EPiv33FvPup6fzTaoqQsuZXNMci5Trm9SrJbZZyysWKLi9wjqzXht7vJYDRU",
  "key2": "2GyYMeU1JaZ5sgnyBrVihsD5CBZCnYzt4x4avjZKcmhpMwJvMSiFDAwbxUAzNx4fgBmu7eGQPmCLT3J6G1wsnSUF",
  "key3": "4w1WFmyEC1BgbimgdbL2BhpEUi52UwVVqzSVE9T4LLFt9RSbXYLwto52Q9fsLQZoNzJTo5k7tGr7pTR6xyU21Jzu",
  "key4": "HiwZKWupdJU2teYULS65K8pRt7izN3qCVZr7p8mVNzepKMHvmDuBe2Ak35JGN2aBkmUoszgC4FEdNfNTyKN2Uvv",
  "key5": "27ZzHuuSkwM2uUdiNVS2xdzbuRhioGE3o4Q6VXyu9G9AK9L7NG8XaiGncFp1DESJd6YFnZ5VnKiEM6gQMzM7RYW8",
  "key6": "2RgZCcba7aW9QJAHtL7jnAYsuA6k1koVaXcsyeY8w9rUM7JQoK6cBR69V8op2dsD61HLq297CcWQb4pqVH7jz7uQ",
  "key7": "3PHrxh3EVDgqPtLP7eowCMesZACu2pcAvtE8pTLUdZUBxuFtRU3qD2PWtRahfgSfZ3DDub5RyHGLV9BBE9Tr7j6x",
  "key8": "UkCruMweiSRoiEGdfjmBQMK3vaQKtyNPGBEMzztpfZsktkrYviwWF1YjDqiPseEdP2QhR2ubxzmbFukAJgWYJng",
  "key9": "4t9smZsZ2tz9zgnC77cU7YTNTACt9vQkMxs3yF9eeRS9VmsvtdiyRMa7gkv8dnWyhVp3qgxtV2XfMKwm21vVkAKg",
  "key10": "3nRmTy3EdXstSsRN2viQq9gUrGXWkkZdAYhTjnHwQ9d8ubaapk9DnyQKZMzF3zPC4AFy8Vid6PqAhqv6qzAS1r9n",
  "key11": "57SRbjaFdTxYuWzm75KYiTLtdB3tFVwPMo8PZ4FWdvyzDC9JhJfC7N58AVWnRFCEk3PCUwsPKvJizPyHwFcF5FUt",
  "key12": "3jX1EFgHD4fDPcorRHyUxMVdaiHHYy9ydbDXtZmYYjYJfjPmxz1U7AFjtbrzgroYMScZjyC3uMgbyabSJkNuRMKN",
  "key13": "3XB5TvUof5ihSjtzN4WRfTa7FnpYHtf2ZUnP7xd1oFHjEGGNngEsKXpfEUscnZeSqpHF1RoVJ8CRdk7HCxCazxvz",
  "key14": "2hVwFtYdBfLJFUrKiv3nBNadJU7vvdw3MHubjmEE8zGFVrrcMgjr5B5AW7EWpU9np5Lq2Z1k1auUAiCFrjBfsoF7",
  "key15": "2W6nJiisQLpwgCJnCM8kMMehqYms8W7WcJgSTZ5pLKumMz8knLa7YMPmfEc91roSeJsdk1rPamassLQzJ5R7fBLE",
  "key16": "59eVDzhEsMrm53MZN2dfFmp3twF9QyNHJVywCGYmH1dFBMowTuVghWoBMVzXptbtVquXXnMiuoR4NFdeXHZGANfk",
  "key17": "1ThqbSfGRPyPTRxmcF5JdV1dU3vtofgL2gsZNAiHpHrKuz7K6NUh4wtHKpqnE5ZueBaHN8zdLV1t4s6sEHwssSH",
  "key18": "5tVMvusYgKYmivwArYWbUM7Dte84uXy4CGM1g1ZV3X22WG1bxKDJq2cGak6oFF4JfSwMQTRmATBsLhr4zziPKq6E",
  "key19": "2uwcagy5DkNbRMK5zkBLkkcFdKGqHkzmCGcdWzeXz7YMvdqJXKsXMFjBtbMsehSvcrUfTo78GZ6syiUrn37XwtVW",
  "key20": "5rGGaN2DN1Em6QpkeDgiCAj28MLyrgdLnhu3795L3FyjnZPT2VWJW1HHgC5fFbg2R6qKuG8Tcz4V5znotCqC6kVn",
  "key21": "5thhTpGjTeiTgERLLhTDKPXiTMmUbopM6d9krRSQJJe7fYKN4DFYHQh7zaQ6rDm1vMjPqEUNJxb9KhnjBYJr2hcy",
  "key22": "3RzQmGPTTjt31xPMmtnJnANAMy7MpaZpr9Jd1vNyjStSCPRYUjokMD96dMLzKSKjD5dXFKi3VHwAqWvH33VHEqwW",
  "key23": "4xJWmPgWrJSDjPDtZv6SM6LG3DPCZyoWehnzySBRXWSj7bfKbB6VGCqHKsw89p1B2wvh6u4racqkVYHW5XzL5tio",
  "key24": "2BL3WfV18kjdCuzBfYLeFKVYS6m2ARACMPHyiK9mKacqzmteNcxtu7AhqxYwv7RHhb7nHBHM5NKWkcj1xZVp5oJ2",
  "key25": "3K3S31d3RdYQ1v8GZZJrjgjc9q4tUGt3aDwTdcUAfD2w23YUUycCjacde8QRdcvsdWNBKMR2EXpXjcgWFZ5dXcEE",
  "key26": "3KyhwFogmKBT2oLxd5peauXbcRtHbRE13eEvuPia65GWyoNbmjqKA9WHWMRNmsB6qbUDRjG2AQa1Loq4ARTRdfHx",
  "key27": "26eeNr3pe9m6GF312hMAmNqGqgYyTJLLDC3BBgUyVxy74m5s149gfLTYkL9DfyNN4HiXoQ3SubRnzJJE1SDZd445",
  "key28": "3tXuHAZowGt38ae89TqSyapmddJnuCnA8Pt1XHSC9u5cYR2BrLrpPoHioy11cAy8air3hrW6CcnrrGcqmmx6nv94",
  "key29": "id7xoCbpyKxhfupnQWtmBZ4trGjCUw4jejV9hnZSGKb3MkwgcCZTSFe2gzdzjRZdqPXqzon9cmLuA82CRof2vEU",
  "key30": "2McP2AqHzdtvwf2KUHcZWhGX66RvaX5QqnhiDzuftXZwXzRbL9yv9BSiPhJTmMXSn4BPdDsGPEgUtAxNMGGrh9jz",
  "key31": "31eJuSd6uWQGkQe54ADym3A7mU1hpPncqccLmQQ9dG2MbU2vC9WCVV6AfTH7fzfzMccdkVtruBkMm5DVEjiJ2oZ9",
  "key32": "5Fjj4vbsrX8rkaco8KMJSrPu1qHjoTnHXvMkgFPY6VFgQeTbYm4xrSBy1REx1Vv6K7U4mJAeB7co1K8QFpcCoFgS",
  "key33": "5gnLqfGHHktZk1MRRwzJ81FZN6QrrJQz1QqCFhBDncDX4xgFyimzxxmVJ9BvNxJwMkW6GMSeyRkCndvGsXERHW8Q",
  "key34": "4wYCid5i3zv4yejHcuKupkuEgrE7RNoM32DKcMskvEZSZiqMkLJ5BqCGyPhLkQVYKR8ufccbvQo5aLXJWRRb6gcq"
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
