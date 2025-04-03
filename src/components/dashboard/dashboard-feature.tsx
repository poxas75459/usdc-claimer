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
    "ePqQRcYccv5LA76tzwL5i9TNFpRJnUgcDrt8bMvErEaGo4i88oXwiTCkS8KW9Rje4YFqz1LeW1GXxaCtbyTaCE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mqpNTuXFWhwgtH6aqoAnFG7pXmefyVPDxGk3n3cCC18ZRuzAhWcagMdZdX652VBAVmkkgcYx1RQ5inrgeYpmqV1",
  "key1": "5EX4PyuUxTnFCuXhUoPRgRNiT91hZy2v6CropxarBwxZd1qJSNPLrgchoh2fZjLoJex5Px7Nswvrx44mJNKKD3NB",
  "key2": "37FXTHsRJwFPFKZfqoAj4Ltjthd7y6KwQFz7Mfv1nTHDmhUL5DvBCLRGNcS8fHnYYBY4Aif3mbW9f91sd4TScLVo",
  "key3": "3aDhBcTUyt1WLMZ5afVUA8vfi3JFKWAzMq1Yp8CQSUyPTr7h2Nzhi1aMAJos6HtUR4CmNMuvwmL9sqiFiU6eMPuY",
  "key4": "37yeA2KBZHXZGs2QiMLM5sC2hvrEibfTgQ2WEkxm1rp1pVxkqbYHYS7MBhhuxMioA8NUMXbaQTQCTLsJBSyX5VtU",
  "key5": "4U5osuSYV1Nds4ygwMKsaPNRsXsBboPu8SaGhSvfrd5NoNzGe8mEiRvhV7inYTS5C9was9DX1p29w1bGmecEajvW",
  "key6": "5GfYatTFAY6R7eTRC3YNAuAfE6gBytKeFUHdh3BwoaM7Lvzfb9ijv6hYfzZDXNoyCS2oZjB2Hc4zXM9g97TwK7y4",
  "key7": "5CX7GcsebvVEHJDH1f5KgUfCaFCWKQTYFbGUqdJLs8FPXaMr73RbNYMFBCGVuAYrewtPcS8Msp8AEbsE9SRokosb",
  "key8": "5x5xeaR8vCWZ3StB9TnvJoHs8yvsBFzx9CKsdxSvo3mzbE2Myxnm3m3Vpd1waP3kqQjeDeiRdND7XMLqaf56YMZU",
  "key9": "42sCHAbVRmsoPoiTR4FjChVSZ9hhQSNu5xyFSxuq8FZ9YsLfu22kD9R5SQz2vwzqWu71TcW4kCcSKVSSWKEH8D7N",
  "key10": "3jrJNQevkEL54JtU1nqXQphCbe3VopYCcfpkix7Jz1hXDfbN8gPJwKoKmVQ8J7m5nJk4LLfSyhpk9XJyzyYJEuQk",
  "key11": "pNLVh24H6GGDyALFwRAJwrV71SUw1ya2VEBLAwZkDsus44rfvjp4jRRP3BQZq7k7J5eVXpoPTLWygcfH4cw5Qro",
  "key12": "5JFSKZNwwVGyD8czg5upzeF6jMyt93wBH1dCJfkJVhLEAXBr7g52DaGzNng8PQjXeJX6oWSYNKfGLtryZTWB78h3",
  "key13": "5Q1JaLsjhf8Gkd4pt86MBpVEU8HEuMPP9HRDQHVoUjk9TzEM7WS1jLaBVMZBqeBpzih3ApWyFa5ybj6szuLdyuXu",
  "key14": "5VLbdyHh6MgssURV4kXTVMNaKvkW92BoaTf51s8Rk5zKCa8DMmKLq6RCue1wpd9ZHxZRhcRG9MF2YNb31EyhnY6a",
  "key15": "3XyWWuecAynMTdbQukPNRGAHAVYjm2j3E9Um6CWeZ2Z5Xk6FXyn5hqgySDBW2AX3GimtonwM4pL3w6bSv7qtYBx2",
  "key16": "2LrXyA8GhUuvTQLjJ2SP7DuHJUTaZG8y9VG1zEEE4pZzhrdQS3bgi9NS6Q8VRnSGskT1i4gxzTdPzxjMdFhnkhbW",
  "key17": "4STfmR995uKZCrKKbzdcBmPAGdDjyprD8XqBpuSARHBNzPVLZZWweHq5c5XHB7quqtV58numgEr6N2yeH2XtpE7s",
  "key18": "62zLdTBXTRZ7Ct72aA8EAV1Y496mcrSyY3HM3Kms6vWsYuzGJbrwSfcPmGpKtCjaiEy2yBg56MNQ3UHRZS6TbKgZ",
  "key19": "qdXUKaxgCK9XAHiry4jENN8FychaaKVbJNeewE7hFJb5oHu1auXd6k4YXi96hHBs1aMVdDK2FJnb84cTHYrx9BL",
  "key20": "TNkT6jxfcwysGqJKzAcPhVBFnV2FsNNXvcQZU44rQGDaNPWL7JMdjoJed85bYP7B6yBXkrw4c65kzs9Bi2nXQLA",
  "key21": "25umt2yJHtkofE7hax8cWCWTTUTKxdECSWEPbfT8xZwLyw9Nhb1AUyahdek2KVdpTk6fLuzhfWySJ1mnKMMrqe3m",
  "key22": "5tbXyghFTMtNWosNGG8RmSEXXWcrxhCrREPXeaaTS7u1C4Fp4Bea32fYTeisHpYuCfEMB9ckmPhPso8eXQZNtRv6",
  "key23": "37JsEKGGFANFh3LRiCPrsvbDm8Tp3o8574Doi2qZDkmP2XrSjXHCFjrCiuoxMC4Fsi8YHts3EsRzVFGQhp39R37j",
  "key24": "56n5YSjSWd8KThtVfSAoFgz8SgPDBo6g65XSKF9knp6eM5dpDo16aMVj6b6wRb3Ufc7VMG7btWuNsWZimX5HEsMH",
  "key25": "4Q33KiRxVhijgYNEifg7RuhYf3P7a7v6tEcxke5kHRTEu5V8khDExLBaMMoytdJ8KAuCx8PERgwPN8Ru4PQD6zFX",
  "key26": "4UFMB99CGSaLBs7xEFXCg6qEBoQvNwKyQte6s5yYHpwGbwMXkbvAesTnqFZuG3Qeo3qM6KNCkrLwKTYxBwGzRg8r",
  "key27": "SV7JEqAwF6rnyfMxQyTfEyhagUEAQfhjkwMRo4T1GG3fvSuYgBnGYVK4koKcF1qxeQNH55tCSnk3vyDYPjxpWzu",
  "key28": "KeeQ6Tjyu3hbjLySVebX83x6zJ8X4iPqiTM2Pv6CUTbwRAbQZm2dkzrwfRt4wzRJKJNmw6d5FjkafY4PR9spvsY",
  "key29": "ndULPPYe1KQ1fhDWs6C6Qn6MDQwd9hdcyhLWycyL25Kayyz3Noj1bGkkQhWwyiQDa9oDABeSqxN71ZN4s6Ft9tm",
  "key30": "2pmsgg9ZKk59bUUErHpXDJsypCdXp17Mcpxp5vVRy9izE3Fkzgn8wdJjv1Xcr9B2A7gv3yeEsCtGUTPQYZUunhny",
  "key31": "2cqDNw1Apufmh2sLgwgTMXUUnro9rtDpiQG6QTw8VDSXyWPMx29exvUDshzwy7CKGQ6FGvgYwDwBZjL2YMNch4fd",
  "key32": "64rWki3HyHqmKSoP6nJYDeQ3htJh8zUd8z4Li6TrniUgLhk69UTxUcvPhUUaJJub95mE48t7Qh4s8Vm8cjuxF43d",
  "key33": "5zZxtCFPEbSWRwcWkUm1yYXYQWwsm6TbdThFijYpGDyUf9T5AAKuYWT83fQTA11HxaNnoVXzueUnNtonC9vRKWjY",
  "key34": "65mkvwQqwRQaZs8RBceehRy2hBb2Zvv8Tw19zQcDbYVwb6e9HzzeJTCNLtTfc43T8J4L2WGLPUyFqeY383ZPnWQJ",
  "key35": "46BHJB59AGZ4Ys1iD4M8JWEfrNJNVizpsdDkn1ZHwEgFeifS6rNrPyN5oFW3B6SnBF3MN4Zji6fmBos85b7QYLzs",
  "key36": "FgXUonem97T8AferM3KQRkYfmTGCthpHQZ6CufyDqty6DB9QsxdMPifb3Q21CxcDqB173MDKjT5USHvdDYC5hgF",
  "key37": "5oFYQpjMgCH2EQjv6sbhDvF8cTfjq5qdT9GxWhfr1sYqFGkVCPFi9Lx8mcNMbtnXAdNampPvULhGZr6tCfCekKc7"
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
