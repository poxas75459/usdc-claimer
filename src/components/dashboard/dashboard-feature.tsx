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
    "4VaCAWJPmRpnx516UthaEaTfnk6JUvprgTimWWznWQuubZAHWiByMw8YnjxkGZdSAa35U3xquz51kv97QgWaFbcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JvKCBG8THt5vgJAScJ3GXFm5moCrfJbKmWBHGkzikgsRFhkNU98KbqPSQ23zi22KXbY1cHPQPFhaWuYqYGVaX3u",
  "key1": "2P5XNsDP3rF4kPFgDEGRXxnXiVPVKMGdn1xzrEeir8emA57fnW9zLjuQZHZbZFjxtwCEMWtZee9sv3uKNYAzNwTP",
  "key2": "3jyXfsUCnZ6viBAYbSMdEqZdd51iDf1AAKSN367kFEuH1B58RLCK5bPUM4afen1w3iVAnG7cvrDy9MKx2sf8gnZE",
  "key3": "4FcLwNSmhGbMBs76YX4Xa3Ntof2HZx2Nw21kHnJEyiQ9u2kNRGpLPg87VBdHdx4YmXYjvwkPN7PPSubwcR1bASTg",
  "key4": "43VrNR9GCgrqG9v63NZ9Z4sB3HfhzRNckXMNbeGuHKnjqp1Pgi6AwPwW9iCpXgPY6m9Efp1JwCxaGL3zBqtjXcMS",
  "key5": "2bqwQxgLGjrBD3smxSFu6e9FRm8n2tTm9c29eeJi6NUynoJuZyDvNZE7nLjFiCQgtiKbNcXuSDJGcbxi8w7LgJrb",
  "key6": "2K6N4uqjVdZmw6zco16QtGand41uZH2dhTQtcQdFSckDMZKKnHKi428bprzSnbZyb2GUYnBvGQy9bAkZXA3apJP",
  "key7": "ThZMXTJkTRynfP9BHdnTa9tHteiE7UzaAn82c4zuvbhZztZdZGAn6qNTd5ySUyY8x5AaQtJAnLSgNbucXBabwkz",
  "key8": "3PBregrcgx9h7vq6yfScSEJ2LtqBMtfmicybhuGtXbVdanUxodnWvjFfsoeuSLBwcsiXZhtudgEveZoNUDnbrBR8",
  "key9": "5fXDoKqofnDpyXV4ac3Y3GtyfHA43UoNDBpuhoQn3GeGsUTxERbsf7xFkrReEzsJMAE539S6GXRoZoSQy9aSU2To",
  "key10": "235JBoCyX9M59WKobFQy4ofR8J1Fkf6VWVUAsR8R6ds6fACoTpFwC2wpfGw6UnYvAoCUkLyzY3AeoMjdb7pi8VFQ",
  "key11": "3zVKM4KuNnaGvu4Ar26NWpJPyqAz4tE7Wrxzvm21UmWFs3MRJhucrZ5BLjbe4hPoSnG2Hf2hBbYQqPbcyZF26Tzv",
  "key12": "5KdWiyZwHr1U12EpCKMrwAhjwTqCD2Gnt3BXeCnTKP5raZppeWY5E7qrQwWVzuNYZSJwfSK7udrSe94gUKd9z7zL",
  "key13": "5WM3CCdBmV8qD7gJsDj2wvcPRFrWAkcYDeXWhUZK79finh5kV1KMBaaNjMmePaXmdK1VYANL6zbavNnQP6h7Hbju",
  "key14": "3RsxULGTtLgmwz4UPM26uvsMaSNhWSYKQYhnqm952h4n6nVQJF4dHhJRPcNPhfueh4vjudJiiZkzSrtYoW9ZGQa5",
  "key15": "YjE7HyC9UtKUtjDtK86L4RxuEgxLGZLYxyfCKbQV4MEURh9b9zv1CPWgAZJEoXsxcuNjytpSC7ohwAG6bW8h2sH",
  "key16": "6P6mkEbVQb2dK37hJsefbGCN5oLbqDWwBB1PtCA1pJ8rngu3LKGvSVTB8dQhz2CozREYG75aMzEDUZjAB8pZ9aF",
  "key17": "4RDDefkTuWPNKEPBHkvsY5XFY2eZ2dJdBzoHQQ6YArcBtsb8TvZDiwZUf7m1U7Ce4K3mLUZoYThUJGG2PAjLtesv",
  "key18": "3VKAsNJpir4ub6F5tQgggdGmKM5TucaUBVHsPtDFKxfuMMz5yR6JVd5Piar4Ecgh3bR7NQeE9Miwsp2RD7oWEi2k",
  "key19": "3MKUfaf5929iqcNaY22Tpr7jrL11cDVQwuyG3i2XDNRh4hCoRcCtwkMgKrA3UvWiKnbN1M3ttSnshEFdARESEbGx",
  "key20": "26L6omdx9cJAJ3bbKfUed82SnmnfcapHteErvPgxbXoSbJVe3EwCn2srCheAdVUUregkyE1HY5rbxJoWLxwWFCK3",
  "key21": "d1RREY1SEo8eiYBHhCEEVtTrNYqH97yVieEiSTQvHyqQEBaQvvfqe55acFkRNqXbDFymVPFcts9xYn1ZQwfJfyL",
  "key22": "3ijnRfVZyuqGvX3XYbbPaoJEa9K3vDbZVAEU437qBvxDLuHyFKZ4wDvzKY6wDZ35d7TEi1VAhNsM7NHEhajCtDdH",
  "key23": "4WL48bw9P3viZkjo3bQoU35ZFsUpgZ9N5LbH1dXVZKL52qeC2okiAmTSJi3ZZR7CdhTj11jZotSRAyWcjtrKFckG",
  "key24": "jtNC3dbX6dLxc92Vwc7xHE9gK3ssxuPSzMLnaQtUniNVHHJHCptqARwPoUos1gUHui9dntF72tYnWad7ZVkskfb",
  "key25": "2u3ytV9XCy2Am63AqcFgMsRw7MYnYc8dQxZVRTVoxJaGvW8rA3SpPVhn61xAPnfWZVWbHSA9BRz2vtRSrkpLS1AW",
  "key26": "2EgZHa4NWCyjeriVCLrXxLVUPFjarvZix7eRmYoAFkGP495XM7HjtP4wCub7YPWc3Tum53McvUwS9Z2XDopWczJ7",
  "key27": "3RZSN4GiEN1ymihH8kr4M3yHCmoVippTU8n1mBEho6ePMPBJACYCRka36BuGgJPUxkyNUVpMT1iCk1KdiboAxMjv",
  "key28": "2wNZCwotVYx43Rdeymeys74Z1CaAyfiWVcnZNAsmsCQnb3bqn7HKah6THwD9dEKyuxrVU8V7opWDtYs5cTDenufu",
  "key29": "2KjhRtZEvM6fQaZSM74Y4xdJ8skdik8MVphe3uG8MXqb7GgVMYbTz3r8JFBjvgkKtUiBFSou2mGNyQ2dooCp8RTP",
  "key30": "4iCnNwMmdMRGFWcSjc2xj54JRCHUzw6LuDoUXg7ymZqW8KZ5uieabRsN61pvyYtBE2XNaGBfdoTQ9o6UieVxFeXc",
  "key31": "3sba3ZPP2y6gZtax3bzatAAoAm6BkeHLqEZyGBgZ9Z5MkV3CfTZneetSrMJbV3Dm8rhXZUTAd5YfqMbPcWnLRTjo",
  "key32": "Efjr4mQEkXwa7navpX76RPQ9jrcfdxRM3LfYUmWbM4yztebjoMmveaLCHcmKLKZQNiMfHig896UkKArGCvhMo23",
  "key33": "4DfxfR9wjGpFZrg4AAz1h67Uay9YE2pPJYVjEVXaT9kczvRqnXU377jPXVzxUgCBbvf9VoqV5UUZkKLM4DG6pFrp",
  "key34": "53tedTpHouXyoDzhkcJQjoyYzGdChvCE1F5EAjuKqtTJWZdhroqiMMuitTAM9UYwzGZtQ4s9cG2zHvPzmtDzwCYM",
  "key35": "jXVAtdZtmhHf3LK6AaJzMtyiZjTCy7pxB5BdXV7RkEhk8xdoH9fWW232aFVJvrhgWPm8F8sRgn1gpdMjZVcnF2t",
  "key36": "F8us3q2jMBwJT9FjZqh5YVyqqAYrD1Ktoub7ucvx54FrSc7V2V8dfrScYpabwLi815ZNdiNbt8GyL1pTdYqtpz8",
  "key37": "4g3oLEWaeF6MV7fsH4o7Ku33cLjm4QpzYvizCDnA2wku4ohc5g7bJAG9X1xnTTN9fi2aZPKA3y8W7uNSpJUwwyuQ"
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
