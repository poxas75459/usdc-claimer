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
    "5JS3WRoq57WzZ2Xfar65FXs6Fo6ecoHi8ZMNWJbPgRNhwgkQiirceXUktrvVSiPwiJwJZpLEnqk2vMLPYwnhZFR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wLFTQa8nz5efA8rCzpD57cV9757BHTwes1yRef4EsKS8hZiBaioXDTYbQmDWXxCLixjMYhUGztwpZTunh5DevZW",
  "key1": "y3aYbiKrYm5DBJ8fcHbHjXt3XE5YgJahcjRSxQemdjgTcEiUcHSSND527Bm78JX9SAjWmUEfLuHZTfk9fHE1Vyc",
  "key2": "3PJoUFDBZRPTUcgCmGJLTc41BQ1L4XAcTSp5jphSxmEdd6USqrdTuwipUN3tjoFiC8USXYCjpYWBkB7fxvSTzV4y",
  "key3": "3zkCRS1PdfVSty8WebZekMmk1DFNnPPcD6GV24AbbprRZHnHjY66ZA3dfA9PfVtpSMpYB9NBHJpe3JRvWNHXkCB4",
  "key4": "3y3sTCo2iN4FYBs6ed8BicQ3kBLRhmadKuz4CtAhEwYWTavNfw5FuJCHqFPWYwjVY92JAZs5DjwbckcTb1GdQV1X",
  "key5": "2TuDMw9ScZCimGSAcRcTrea6GgyufYswnkxbNfkAXvTpxCTTALMSkSECNAoCPYzSEJoqoxvb59zuQ9QE1ynjpqW5",
  "key6": "3Qtb5NiVB1z9S3rTZodMrdFFVCR6TtZQBAfAeMCYSHUpZQeJYJU9ZPc13RQAw64gBk2iE6bDHDznGPeuHwxwvnQ5",
  "key7": "pQwZ1Sx5mv45yrGVZ3yeMbYFwp9eWdwdyB3Kgu8kRFdsoueQz6aat99hXSJ8bBk7zJYug2JTEXz8Vmm4VZZv9Ea",
  "key8": "5fzsDWRYDnutN5hK3vrQeJeL7jX23z3PBikV1zb4WUicT87D4D8Rt1BcGj123odjUsguVL3MUdwiZkRdoeY7TYYR",
  "key9": "59sobjXSt6rnkM7hemULU5iMD1MSPpzP3i8x8e2NMWfUUJwyhagerivUGYY8NGP3kcYvq1XwVqrnSMhZRfiow8WJ",
  "key10": "23YG5yAnDcshiMH8xQKJkPrcfGQ5wEce8w9jvTdKWaCF8er8ZkHzfRmH9jDkFCjmzVk4xVMkm2wMKi7ecfqovzi9",
  "key11": "4vPmFRYgnvLXQM7DrXUJG5hYZAPCdVjBnYk2vuiGAd7YDbqd3gn3kb36GDeP7Fv46USGkQZKpuCJRL6f91oTwhP7",
  "key12": "2Mnu53KGKUgqPUY3HzPQi9mshjqwcvXJGuYYTvn1WeMzUMpZmykZBpjRwrntjk7VjkEQ9zgQjFQEF1A5HfjjKsMX",
  "key13": "4maLovruT21qTZyuBzZt79na9x114Kk4wH1bhzDqGVRwvGYvfFeJtBjPtNb4vLv2QfmEXUngSkiEqWb3jW1RcFCa",
  "key14": "2YJuaXGigDnUVVrMxL8iGwq2koVepZQUcrq2uzDrSxSJs16fFCM14uzCZmn74sUD1cXdeKXsKWW5wiU6HQK1pJ57",
  "key15": "3Wsjuh8V21umgRMPxRdL7Xr9bcUUooRRANV19fEvfACDtZa3ZjgLENpWsRhGhaamD3ukhojGciFv5iSWgu986npi",
  "key16": "23veLHCdK4CUTKFB2Eh7bre2GPoAT16zKfKSVsaUGey71LfLao92263paQaVcSvHsvHZfaBsggiRbX9nCSihLJbF",
  "key17": "4ZtJsyLwyneGzP2NZEmhDrR2FfNTqrwKmj6zrUkvHX26RzSHh1T5ivkHHTwk5fA6thi1X1x2VKGjLj1ZQeu2p53c",
  "key18": "2TXJfbFXaTmCCRxTUrD4cKxr5hBWVkCjk96sBhHgyf8eKsxRuNm37poGj9Q9jzYrAKuAr3FrUrhAzvzDn3aCskfD",
  "key19": "2sWAoCzxYTuFzHXBpWYQNNabCJZe2Qqa1hHwPDy5BaTSFcf2WHvaEAy5VvJ1VnXsuViuqP3X8bxk3rrQoHKzgLPT",
  "key20": "4oFE5Fpb1ULJUqFg738iN8Zvkd4waS2i7ACgg6mjK3qDdRmuqJtT7jRk9L57STC4RCsdCkyKypZjtzJcjVVyfuUi",
  "key21": "4wHSukAp5TfA6K5xakc81aYyevzMM4UDhPakf2QxzpNKZH4fN4BaaezgTXkG2yimH3t6LCHjwAbjaVB7vhxFX3HU",
  "key22": "5TrnLqFvYdDutU7pyCu62SUmDCGfSMd4fW1d4XhtSQcpqrrBcAMzyN8wWEfPx1mScjym59mhmBVHEFM2YG1d7srW",
  "key23": "3Wqm6HshHnq9Vej9W86D39Q6bj1yAkJ3JLkcwvNGboyCRENqpH2fp7VoH5w92P4yna7Qd6eYsnuAfn7yRCGbfAwp",
  "key24": "kTJHtQMSGdwvzxNkfeQys3NgPySEdgzUHd9T5zxdWig5iVoR5YBEP2JLhdF38NpMNSPfrGypSKN6iRPtkQds6W7",
  "key25": "49op41UfFrb7N2U8587Tjv5TQmsHzCqUHQWAV9gkRQYu4wwkTLmMDhPGf8zonH6Tdp61NXNKnSHwHGQsv5J4DEYr",
  "key26": "2RJGsXxMfeocVoum8vqjnbHN6w9VunAJb1fdaauCoBivFu4Mfn2FgG4thoMxu8w1WuHnGBnKWwwbhc5sioHfchRh",
  "key27": "5V5FrH984bLqNiia99HGcmRPJAmFmEv6tbzLAHgSFTA9ZVm9E28YLbNzEuz2v9mzDcvYHDRdsX4MkHEFpyf9X2fg",
  "key28": "4me54yvWbt32rdtXJRghbzjNLXYi4dKScVKnTg5NcN2W9Lt8xAiMNRgDKL7MPUYBgfqegqqjDYJMiPTEiFV3KBwM",
  "key29": "3Hdo5etN8UVfYY7CtPjhgTTBxYWm8Lr5nss3Pxzdd5XnDYmfjfocUK6AEzN2nddbLQRo8aNVmhhazn7GwDxWRbGF",
  "key30": "3orDe5pp9P2RYYHAYGC94Hi3Dgp9aMmG7AuLwbDCETDpFX3zSXofrW2VhFJ9i4EEXALM39JhhbkCei6EefhqpSst",
  "key31": "3mguNYVRhqUUqZiixchEuZVRjrSsZgXR3HicB6p6mzr2z9EhqPo4giDfxBmMA2ZfGJP5c8xvy7ngaZTQn8apxxLQ",
  "key32": "5rPeU9j8QeAJxyfarHJie9V9P7bfTs3mag5dVTro83MU4rHfLSkz9P1F9GSy46nA5753FWwNKG7FPciUAauSy7nx",
  "key33": "2pRjQzunpPRvpTwG3R4kCRm8k7EwCUdS7BB9y7WJkqXe2qJNGM2gVKzCCUp9wCT64H6qEmJMVCyjVjRhVrD2wLuV",
  "key34": "4owmbgZn7SsNovapG3tW92ss6uQ6TncvPStFLBoWDavjiLCYkbqZZ3ovkBqL1HnQDxUhc4QvRjHC4J34fyLxKmsw",
  "key35": "5BQiHaA2SUUVEfT7Bsj1kvA9CmjvbEud5NBogByFpdAqqpQaMiB2hTPBYcWEWJmVYWpwqCdGQD18jcrrJbDLTBz2",
  "key36": "5biefoqgBDo3TY4CpexKhd9EQa8yHgZ4UCungAMDhwBNjHPofShC5Cqke5U3LcSEmZCNRKWJCJ1siWDrpyNphFGq",
  "key37": "2u3o3mMFcG4iShB2diaUZ3KSDY6UjCFCz7hRYbn3WT1Z4w2TJJGCuHESDaKMwRysebPAri3bX8BFuQ2y581wQwrh",
  "key38": "DJEde9L2cZ9CFsJr9Kw58JMSBruC9Fve6SbcQkEBygUeaZeYsCfEeMWq4vQcNSXKeo3X2xQT7Rb7Y1ioL4tCuoy",
  "key39": "e1YKN3CpTn6qRjvHR6Anqx2JkZY8ZmPPPGU6uwwzJUfDw8pMHdpGWYB4RqLMMJQBgs5AaJmQTrBVB62VHW4FLDZ",
  "key40": "3nexVQesQLGHz5wtwvpDnY9ngaExUH2QvHVjoN1XBrmHuuRAxi9h2qrRWgfXxA8Wi2vKciT2tYCx3ZzUBZcXBTZN"
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
