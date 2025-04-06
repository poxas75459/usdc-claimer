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
    "3R9Cf1nQzizmmChrjpQRfaUNZT2nCQdErvBtqJ6ucf8qAdAxeyJKutXCb78pr8h82VhGmJMq4wscZ7zvXecmdWWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rxWj5qNFDkhfZGn9kV2rVHqXLNYdxoW6WQk1jcU4xP7g56eFyj1P84uChgLR91ACoSXtoDtThTCbwSJ22LPmYSX",
  "key1": "58rJT9L5roL8UzM21XRz7FAQqvJF4u19g5qnbD3DinXRjNKpVT7PSiCKcj2Jm1UCuaEPHmYhAUCaSMXvrfrkzFYB",
  "key2": "4fiCQrf4ZktPw9UKFACui92sW2Lzaie7ZALhJP1Es8LHNJVVxeWdd4pUjGz22FvYnj2vCcYynszuxCgyLBF8L1Jr",
  "key3": "2FSVLsbJUyajix6m5Bk7Dg5rRLK4jUUZMpKEad6Hy3SPZwPqbdTCZs5Qor2Df2XpkP5VsQF9YDDMynSQ4Dv1m4at",
  "key4": "5bHyuvESVzUCZ28dqeVX6XZDKGHmwe88v17NCN5HEzaHx5C87U3GFdfTsVDhXJY4XeU7Duj3FsbcaKbzbD151AiM",
  "key5": "3qhYTYPbDAM5E1TzrbitFodnKCuuAztJWtS5V1uod9RqqySRekxKsvsTxwhGSEiUcQXtvVvS3kt5Vgkhr4s9dXHn",
  "key6": "4pYEEAmeitG7wpPuyBatPdGv7EDdZbJqWhkoj1p7LSsM6K9PX9mL6tLjRDzQRreyKJ7pu7RzrgUfCixjvxVustQD",
  "key7": "3gAiWTPtcBG7cjpujg6vqRUJym8ivmUZRbFkVh8D76xUDSSGtBwmwnF7tbuoz7aHXvZ3HFSJfqqD9wb12NX7Ze8R",
  "key8": "2b8iFdvnPkdvBw2KUDsAD1eNAWTF8WrFg5am13zjewDU9x9cZRVr32yjzKjMsQrFtN9QKpXyADKMi4vTL5AYrpKP",
  "key9": "5GHV5bbBLxfhyGmjRxFhMg3YZ7trhjfQFFeejWiS6PVcNe9b6c2nWUTywEtdwyoSfJHHLtQNhcBLcBbQiHzzeRpm",
  "key10": "4UPpUg9wSFK5YB9xLoEv5T6AjLMHveEv6fvY6bkaa9X5xrhySNqi7PdKrw1Hr6wxAikuT1ouZdBnucPUPodjoASS",
  "key11": "57JRAoNEYdnFmatrfkiMXpo1cYzVGBXrbLEmEAzH6g6Db3FFWa61mpVJ76CUM1SSKEGGsd58SD6jjQtEctv4Qj6f",
  "key12": "5MyTNWsHL8kjNF38AePM8RVQoy2L4FHcfCiPKUwCVHxLzwnyzAAjEvZViRrxNsfcPF6zJtjMskk3sME4fPTsL2zr",
  "key13": "6NoHNTUBnFoWowJw22eF5xk8tkCJg5mBDAkzuBCq3gwEiPmPfEMx7cpEK9puB6rjPg8tfgUXNRRaZc6TxcYgpyK",
  "key14": "MNntQWubnQDHN2rKEZqaFEW1ijpfdEgoRrG4sHtc5Wa6jCYqpXLG18zxwtJkw7MHW5QgsoJQYD4kt8eefpJZkGr",
  "key15": "dHEcYKcMGJ3fmqTcisWntZFckksdJQatMx61151NNqbeQ3XR8ZGhPpq1wdDGCozj5bXCxAzRS1nALrhChPRUWqf",
  "key16": "3KFCqAb1yJTrr3pRoS8pdgkZC8ZVTjmT52ubkdwCiCat6edycFnkSzh46niKkb1nudY2J2jB7YGkQcAF4zLog7gZ",
  "key17": "5yiXsRUaz4tAsdptCP6nVSbNKcP7n8FbFui8gEQq8zGNUcVGLaYxnjXVQVzBJiwiViVVnCtV4VNLJ95AFW2mGPjh",
  "key18": "3TrkhRiW2phGa2tF45b34DNYBjBjroutZTsSTn4fC4cpwZGs9cp8oKEyKVhaQWhQAK6yi8mDnYnSQSiFRxdFxAxL",
  "key19": "GpUqjbTaR7Tg4VjkC5UBkLvMxGQs1rdjDK48Mn5763GMnfohAtT21sEiazQ8pAhhut93rBLoC9xbcQzbKa14YKT",
  "key20": "2rMYHtWgMKbiQh9mWpSebApzYthdRnJQstnWb8HuSHKHJceef1MXdP8coNNdJyVxGmN5DUmNLCoR2T3TjqR9ZJKm",
  "key21": "28trLW5nTWKHYd7PDCZVV3LP5Ymj9UcinEqMxUgzomJpjsyH8W4X5PbxB89fYoKNXEjvt3eTbjztNbJkgsfyq2uX",
  "key22": "4oaxsctD6EYdJTUiyfqkK6k9RxJmWUNHajfeVZmJHBRQiXLCUoniVtu9cRrPfSK7KDhL9AWfgxRin2amKLuH4q1Z",
  "key23": "5Bi7UmHHm96Rz4gbqUo9msG3cerGvcfm3zg5L7NvYLuukcZ1jPejXUesoSQ4vdpwP7cLZqZKj4wKxPx69MjfeSNC",
  "key24": "37eJEPBRChp1gx15GTu2AcHWCNTpikeyDhHF1TJ3Qpjdwfut4NvWPZ5ScLfhqn3QnLcmkfe8GL1mK5qz4B4YUVQL",
  "key25": "47PzARPrXgEkyo54pxUXCLSDs1rrKzRJQTwg5PsLTFevWm65Y6DCF6vm5ieqntgGeUzCMSGQzeNtmcGrZyFEDNPm",
  "key26": "5USq35DiMFijeoLNkQwsZLwgqLLCEjEYxNtLEEMDfMkD6z9wgkPEuEV8Bz1srdYNVNWbVhiMP6pH4NZbMPs1tSw5",
  "key27": "4Q2utsJSzKS1k5pnaBpTvfyqCDap6nxNHEvJfh3gBroHaeAVkdoCmdr9i7hfszuZtwY9NhsBeWxKKwUVjSqEy7dN",
  "key28": "29gWHLBU7L8SSktmSgtC4mALBfnjnFt9bd8WpANgbz6arwP52eB3t1enkuzz58GBmGHMCfSjG3N2vRJuQvbCq4B6",
  "key29": "4ZFawZoink2YnAi8Nn94QjiFBq2Qo4WzhPUBjFERkKgKSdYE1w3GNhHtt2EFFKryCTYUVpEWCjcdaUPuMvP9Sxxn",
  "key30": "3uocUX9E1zWLijtbPUHySFjRtLUhynhFQx9h9a8gPhSq2HVsVfm3GRreRRnA6YFKMpXy4z69R7acFsKoN1T272g",
  "key31": "2CsUMtUoHnxEQtqBZGtut66LEuFjHpq4KAUT8txnvHwa2fircnu5oWyHAFjpH9dQTALPwcxMvUJnk2yo9ALSbJZA",
  "key32": "4NDGcDJFBcD3JywfcVxGsbEX1dSrHcXhPHXoRboMTdPt2qNAhZHUEPqLbGL94o72vNyS7pGLLTvpquTp5YLH7Xrr",
  "key33": "3QBw7EAyfcVUBs3wxomHTTNjyXkuUEs7FZwFqATqSAYMDrx3ZsK816SAzeyHmRyk8dyooBdsCwDFHd9tgSpBzP4a",
  "key34": "3Ny2ma9etHJyV9bjVtDkkf4YGucUrBJiMMnNjMigrWHncnoogULodDL8cqcegFEqHcwppebLmQg66TR2iH7oy8Lf",
  "key35": "39aEKGSNjFBTvcgtzh937sBngvU4xbDM7u5HELGQSfK7dseXmmzGsRNmLbfZipTBwDJgh17V67CnKbJcJ8bMBr5B",
  "key36": "2oMmQXhcjYKqeytGZzwgozugxMncXAkWM6HdH54EkNifx7zYWRm9m8dZFGy4PdHs1n8Lfu1iWHFowsQFwJgKTHL7",
  "key37": "4BYh7ArUiqemCEyVdbR8nSK8nJ1yqi5j56BRLC99nwsQMUf8LjtTVusaY3ziWA9BJasMnt5Scjt9zJpAR2akmwj5",
  "key38": "3J2V5hrSZCnY1ehFVTE2YbpDRMgh9YqkVh5gWz5zKJps552m1Wb62JakchPLqhrViJn4sYhbFDWJTVAHu3uiu68j"
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
