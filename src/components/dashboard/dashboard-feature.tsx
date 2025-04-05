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
    "5mfDxryxVrTf1JyL1vugSiPcj96xPVfJt9rGAqiuQ7uv3DxvxfhYUmebGnRT92EPSnmjkTky5pZduLEk2gqhSefc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r54gngwVVSEaZD6rdpJ8gpZCuugwRFURvjp5VfARpKh3S1Stng46TNsFUXW64nWPaVmCgW2TQbUGHAPemgofTTa",
  "key1": "43qWX1EknP2a2oWXchSGCqTvC4MrsPqK5t4hTTDWayaz3D4BVoQEu5nn1z75eXdJvEZY6ygfS41ayQh8sNTh9564",
  "key2": "66S1RrzZ53Hb8zGKbTGfVWXoA2ZU45AE3ccyo8rVKJpwr4NZNkZ8hNvvfGZYUVYqLpHM6cro3Y4AQwuA9KTaJJSZ",
  "key3": "4gQ5zsHqeFkPJjAdGZY6nUdW6J6pBviHGy4soGKeJWRoo9qFTywZvD1VSeyumHUGAUi1eCzDo7xcKK5HWcXZE7WZ",
  "key4": "2h7ExpY8dCvN2sqrKBD7tAYi3WJyJU9Q3v9WMgz3v6iWojKY5KCa5sSosXvgf9p5XfVR93sYHJ2fErPdVh3cTBHi",
  "key5": "4m9QygrsMa2snVW69BUFmDRMggemr2BBykUKgwZvDA3WdVh92R5SgNyeH78M48fVMJw8yppXDJUVCbD8NybtvbdB",
  "key6": "4ZiCNbmCdbmfJoPsVV47DNjbCh43LyHL2VxN8eBAgCJ3ncVKNsxnv1Na9mXhV4LoAQqHJeh5ujBwmsKgUQhzrign",
  "key7": "454gkDEFMGX1o4zZqtye9zQhdk5mwwMPM72J7G4nquTtdCHhwPqryGLnumd2QBTzYqyrq9LTqEYVyH4RTYHXK9v9",
  "key8": "2CktUhfRhMnoJwuT3k4Tt1sP8Ln2FUoKfAzeUutRdmhH7xrMXacMzenpzxfHFvSboTxHfGEn8FkeP5qTMqtGTgGy",
  "key9": "5FPmPKdWrTgcNVgrJhAn4FdsG3NqkrK88DjFQdPMbD1A16mJPmxtJ8KkzZ6pF66oe9xEoG4isB4bG4P5ybbucDhb",
  "key10": "624ZsJnC1audQtXLoWX9weDHp2DEqxzLz1A1JUAfFTkH3NHxLrnFiP4jZN4NcKLbCZzxw6eahMrFGrMQYQArP2zG",
  "key11": "2T9e3MxZNjrQFYj9aejnWYgS4xP1mcZvkYqnGzhVZ6TSxs5mXvJYZ53Gstq17esxp1YVYWoPZ92ETGoH2QYWX6Gt",
  "key12": "3Jq3vGvDo5C1ZxAsrD8EDGwabTAANndgwynrtB9dFsDdw56dF2hg3hAg8bxteUeahQt7mCj17YYGQsS8EJDFLY4P",
  "key13": "24kUyDynyMuUemQUYPitiF9boEkDTTibKoyNL8zRucpCiWvx713Gg1MSmvocqQesnkhujwLHf9MRAw6km1uVukE9",
  "key14": "24MJbxeXQ3osb2p8EkYnSsKfwynYfwQj5ur2iBDDyFxSCoPAyPeY3g5Ys37LRGZvb6WTbBbYRgJSTJEynjA29KvD",
  "key15": "4XG46edhNuoGCFLSVosBSHSKNfN37qrmxobWmXZ7JEjozW6oyDtt4zy1FswJSPqQCj1rx8P5y68fxctDHcrPwW9b",
  "key16": "3ovyQ1s3C96H5RBdJu7bSBorvhMjEMr359Bu52RS6ZTHYbYgH5XD3rApzuiZDVAfh9twahC7id9dNzgvWBTeMcz3",
  "key17": "gV992VgPyUXPqq2ZSQVDZ1GRtXi6dqTBjGE13WWRXMb77izH2sFBDdj1r95NU93PDKGc2H68wRkobLLNQqrYw4W",
  "key18": "3MX3eD3DSrBuyLeoBLCUv66LRmDfkTkfDKf863TZaNSgRKKLJeAz5dktB9caamN7zEvpRQtWrKTvpmYD2yXtXzz9",
  "key19": "3DwpQsj6i86AsihwuabBzGeUP7NkJtMqvP3Bq48wTaZBi5RNbbLFXfWmm3mZMkXgstmxfJPuVFEYn9YBS4eYp2dh",
  "key20": "2MjQacKJK1S9Rc4ym8Y91gyDncbDTDNpztxsdifXmcMaF2tXdi1vjQ8C2oeBaS9f7WPvCUKKrzosZKPWUfmA5V3T",
  "key21": "2BQMTPBx8fZ3jhFBEJpC6Av3SiZAvK9YZtYzX2JwHtjqa2RqqEbAx75TGcPFkM8muhoKieTD81au8r88Lijmt4fe",
  "key22": "4anFe51FVM6a27jtMYaABDGkPzQ3EWwdvBySFXJwSd85vkvEv4tR8UhhbrYL7BXBNY3MJbB6k3hWZHPaZzmQkQ3v",
  "key23": "g5tGm9WdM11x2A9M1SRgS4JQ3HohHYPnMMqdG4QgpvCpHWJLRTmkoX1BVzZdLx4AKcSm9Fs5BW6hFUGc6xLwfvn",
  "key24": "5fXCiZ4MeETayn8SJrBGdGU7Gk7nnZEUexY4ZAp3iGZyBT42q2cwFP6HMpkw8X33JmzFEpeg92c1Zk4Va7d1egEQ",
  "key25": "2SPgqC27nemsfdS6bqHb6dVgdQtBLmHiSeYshHXkuZ6AahKhjEB24zwNkPHYJRuoHWgbtpyrKxHFKHwVyHVoasJW",
  "key26": "2dLRhM6pAEoDQgjeHpi6SgHbH8UWSQLnZVFfC71HJWxocMPLMuKYi3TD7RCsvdGTJtPZ4zLT8M4nD7Z8t7HxireD",
  "key27": "21xpXu9MizAzu3yuGWNZXNjKqievYVwyoJodEApjPbfhdvSus1PqU6eofG73msiC2xc9ovv8uVCqTd4Aj1xGNvtu",
  "key28": "4zdb5Ut4Kw6riGdeizzAjKeN4TQNLkZwspfGv3ZJEoBAKzCRUfkPwa8QforvyX843RyMgPGjfwdawChCZYLJARu4",
  "key29": "39XNS73XdD1yi1qzd7sU2e9tnL9Pd7JAWYXMWJy8ByjUsnp4WU8pBVbQxcU2VWVMPTVjsjD75g7GgTZndERfCNfm",
  "key30": "4rw9rrnVnmJ9NebwS4d9XZrAochNEF66kHMXcCNa4EXyic6XN6K4qsFmJ6LrDB6JTe3wWHHxd7Sqjwmy7NZ6dvAS",
  "key31": "52uLFTsoAbKq1LosGUEK3tx46mpxz7dMLAEuhZXVsjswAGKs1mHe7PPs2XSLf6WkGw2DuNwXUhEzLVb9eNyLYXPx",
  "key32": "NTBi7QrKXNA2JmYtXc6hVHPmzvk9vLCth92XqRrTxHJiGidpZQTahuQSq6UxC47JYbN3p7ZBCB316Z7njbKJaPa",
  "key33": "3GYzFsxdFecL3RczaeHJhHnfjp9ctmskrmGfHVTWmWJYXyyC5ro8boo8CSd6n8AJhk8LQHuTCpp1CqAMoY9RxWfw",
  "key34": "3A752wtg4jmnbVBe63qPJzNAw1HrzunRNVNkXcLMmBrVUuGLLdz2TAbVZKJVETQn56nBvGxpkbvVXqWsUgwPAxNZ",
  "key35": "2AYDejihNgetcLSEcL9esJv5NeG7RWxSnmEDFMGrgv5eXXxLrEaFVMHuGacJnUVtjaUvA5rzfEgAaCgsT5jhSu4m",
  "key36": "3nwZW2N5na3XbstFYVBNKd6m4aWtdMUJQDYkEWzFYEnq7vtSrZj8R8vMhr64WqpiX463GCFUUu9jZpcPfPADhXPG",
  "key37": "2MMQz68WcT6hZnkVSZHsF6r6mhuYDReEGJu8zmrrA2YT31dgZXWXhnXNfcnctSWUQkJW2paEKHtJP2TLVSpqjTGA",
  "key38": "2Qx8U9xg7pUJ9EzQGU6qLLTBPoBmTZ2Zn3nnRmHdYmaiX8ZTb7mSbMHyLwZeAFT1iHLD2cDep9TXxEUqBtf9UYEp",
  "key39": "5JsodfnWFregjuR7nzU1edLZGMf1FU9h1xtCeNLcv51KzrMgWH21HaEYMxcEXt5e1xkzVzWjxHdqipRHdVmhAVvt",
  "key40": "4k1ceipU8vyy9YNEzLLpW5XDsZ7KpE1uetU91usnvVPfYyELEK2g4DU9embAo5tV34eEuSC61AsLuAL8MacrYnAg",
  "key41": "3Cag8Q7x6dFsfoJqgyEtNf4RM3AzyCjUettRAitVtnSMVdTTPqfurneHKn53KvtL89fmBpCEXL4KfsphpEU688r4",
  "key42": "371Mmsg64eUWv5aHLwXKynvWM8FA8ajWWTH9NFPvQcor5QuW13AbRAtDMmFteg8CekVrXwqaeUBpteu7DKSqGaWB"
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
