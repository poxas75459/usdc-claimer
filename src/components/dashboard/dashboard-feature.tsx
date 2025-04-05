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
    "2xzNGpMpXwzbAna6hAeA7yCqB8LHwDKG3BQHcC79A9HXtb83tTdEtcw5oe6bBVEmaWYRiLXE1Uaphypqxu9Rvjnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DwBkcjgxnuNcwnZc1BUUvhpWcke6ibvScnMVp3FnivLNKwscSY5XCR4j2wfyXuJGRDtAdzkrfg7g22pyv2Ziatx",
  "key1": "3N3289XAKjZj2zMTrVmz6c6i5GjjDXHaeT5Rju77yEjZHbYLiouGvVTt8nntmQScrYZEM1rMdyb1UQpZuiCrAfTx",
  "key2": "4mEvXja173NTu2yN1zPH5xSKEih5GHoPqyXsKUiedPC5fE7ijGa87Gn2W9XfATgkzXcYBTrKuZi3Gay3apcvNJZN",
  "key3": "39fjEMCNofFed5pJPUCA8CoQ494zquBV4H4qcuhLGzcgCcckPkfL5kmwkTjsbRGqUTCe87CH3saLw6vGB4ygDLZM",
  "key4": "2LNFgTHvyaXUfVewMUN5vfi9JEHEfoWqfYz488kUSjnzA8rHVZ7BXAvKCS4EF5zbF8gDu4ducZYxEQNvdB6j4Dqt",
  "key5": "242NpyUHGyFEz6P9XFV4eSJkJd9YURwu1FAYXHdM1BeMfA9pvPewCBPomAn2vdJyceAbR4bYFCx8MEpvmdYoDRGg",
  "key6": "i65yNsX9nY3Wk6hiGtsAG1Na65Szkw9boDozJFkM78ZDshmawDPUpHS8yTeuMyyHMFRXLBUNWbjDT6DWYq1mupi",
  "key7": "ah8zstarPEAqqyxpEbwu4EyUvQce3x6rTBmYZ8LwKPebBZmyrauL1zypTA968AQbcQ83zoJRsVcssYxvYqU1zFz",
  "key8": "3vYXZWJmvpUdSWew7jsP8tHzeQ4dKgsMNBzAyKhsEbRtWUKwEGK2Nxixex2P6Wu7yUgJ18N7x71XfvCvhwfBZWo9",
  "key9": "2jf3PNu52NFekotpCADFhyvFmiUuHTc12WgCqmXymtD7mCqhR8SQrxQmTPZvBict6BvQCCvjDga772dEWGm73iHD",
  "key10": "VtHztRbseWd3aQ6bBLTteBTYuK23e9bPGMy9kJLmHwUfFsYyA1hR81nnNPpYhMSVLkMDnHkZBDVaTceDfbuJyFn",
  "key11": "4eaecR5ikZ4wFcDMVmZCcX9AWppaXGWjLcKQ3TfYHWzfm9MsSNRFLhttPZs1iyWZ3RwvbnN7nSeeyTYbqSWvBvNV",
  "key12": "5kwDvq4XT8h82crWgRn6LypWT9oSP26uUiGGGD3Tv1z3co5sZJHx5Xg5ZzFq2T4B6YMcpxwJob84813LSXvxsSPU",
  "key13": "417kPGRQgqJ1jVV5o6Ys6BNc34RHc3igtSgQJRsZnK2AVgq8ERQQVqoBYcRbYs8WAaRyDbVqnjztTXDVfGheFkWm",
  "key14": "4jz9mLKkD3UN27Rkzn7ghBrfxGFHhRJ2ED2edHtaNaevRQh17DwdGSxeyRVy5VgyMrMLFd22ap4a87Awxvu2pY9w",
  "key15": "4rSYtMickuSKXhb6nB9dDpxQxpygAWuBrw7hWSFe4PqUbFKYXbvG45db1YZuq8hw5LvD3JRWaSGW3NTRDiMv4WSC",
  "key16": "57eeRSqLmJcUJFqnE5gtpRFySPdfennTqTLVrPKJxkUQgB71BwqNeiGqduUectaZgN8arHe5k2bZpoJRL8S2Cou1",
  "key17": "eUGXchXP2GHuBiCYzvSkd5ZpcApoktLyVsz8o2EbyLxGeucihMcKLYuX99y9DCp55m6wiN7NAaTA4W7fZbuAuLg",
  "key18": "3yv3Df2i998ENjbtADYWdiPdpii3VuynK5SQoHefQWS7UQyHJUeXz3EZeZ6K7Sn2Hqqkga4rXwtXHbFPHxeuUFM7",
  "key19": "2FMZg8sRUKciBTG8MtoMo9bLaFTTMwQpWAyFN1TeeVooCRVpH62qnpxkGeEPvKd78ungbkr1UDX1feJk14LZR8oV",
  "key20": "3kCm3A2U34oYQDEMgUwG5w3Dy1ATCfxxtCBWs4vh9BCue5bepUwUyKQfUKRCAULL4h5SmiiR9ZbrywtwFepK8VYd",
  "key21": "22RvCjVubKneTAe1Zs7GcXcq81h7o7bXGjS4ReTAMfTGjFoobenHAnnfjNVnnUVCDPZqEgKKaomzDv7B8GjofK3T",
  "key22": "TzwtWUPWFD3gZupmcV6qnhs2Yk2WNABtPWwzyn48XA14SNVxSECVSAa2y7KH8Yxo8k9XacshaPASmd4i4qHyjbE",
  "key23": "2MyEqgP5dkXvpt1H9Lm3gFU1Q4ZRwo9sATL8EwY8DZtLAZydscQc7hYyqxyE441Lm2Qt5uj1YfqfVAJh1K3jTBsv",
  "key24": "5UwDQtGWJBzeXo6psiLeeVLArRuLyBKZv6hq9AYP6pGvdAuQK6Dzx8bLrxcKSkbshUHbVKEMmM3dqMFahkdarrdN",
  "key25": "2a7dRedHS3jeaUEBa7wbaPLWrTet3YXC9tq7fPRK1qdcU1aBjvpyF3Q4Cw2hkfysjh4uqNUrCmGJXYvfbaJEffCj",
  "key26": "5ZDsnjT3BSK2h7yvUh4tyHMMFXnMuYsEnsRWN36jFEntfHbHpT4y7Ssi1V7XTBC3zbowNt8TwW2LRPbTFgwjS5Gz",
  "key27": "48kCDkzTSuPfsdC7RywaAg4EeE3gLuREox5HVUZ8K5DBaq4tXvYD1mfLc9THx7KjUgnVqdVi1TYbRdzGFS8TzWv2",
  "key28": "34vmwdVwz8TmtB3uHjhX5jxSfT6ZeHwBN4RvpsqNsdSs4a7pCyyiSDx8yM7j9yByDsiN2uPPmoaqbGhfHanuymy6",
  "key29": "5Bw1jE3Et3osLWxmUG4pnLLjrK7Ja3sa1VmuHH4NKEJd1VWmfkUaHUZRbn9Xtk6YLaHTCjFduxCBXG7jGwL1LGDB",
  "key30": "ak8GGr6hcHJcLMatcmwWvnC32T5LNz9UCV4zJ5tuihwSJqvcDx4akc6yum3Laf28EGr2EXLtnCDgaJguNqN6zhA",
  "key31": "5s7hqbj3TSYmJVB69vQAEMrNumkDkmVTPcJ6761wTSodg8Fc2q4EZSxahBrBUXM1ibbxH2fPvo9n1pQwYrMfqoKV",
  "key32": "3ybXAEm8GDXudu2JeiLjaDzqoMjMLJmDfAkvkAUikGMXM7dDrvjgVdWywVN4fxmiHAJtAxnv6BWATeYmLmJjXw3D",
  "key33": "oD9gs748U6AqkAzLrSWmLCenUc2TtWNzT95WTmCTq5vijKbmHh8bh7zuSYpa9nNNTwEgQKptHQ6yiHATPnPZx8h",
  "key34": "USQMgaEienMsPMh9HgMds57fcaU92TKmd9sg4BTkVzuUXok9EYoMPhPcFtXxFBpKFoEY5XVojhLt1TD9UKQgMFA",
  "key35": "2nxFmhygLko5H8aDHTwjD4YTiovhjgAKbAxys6dEaiERrpBtMhmn8F8vCY3pNA9DMQyWjXXaxHpQ4Kpk2jZkBQ9",
  "key36": "2bAW6LvEJ4sDXw1ymwtVzzf6hVKYDQiL7CxaJNpdPgf8E3VAFL9GUJvmvaSfHQTDCAWU2GZHoN3FVa13N8JceJQ2",
  "key37": "3f2bTQg2RNLPHXiJxMFJZDmMh5k4YJ6re38RYcUju5DuVkztYwCsepHusyPj5MJuxK1gKt7QdCzYhMDx6cSagR4q",
  "key38": "62xryyd5kTw7kBk4prhQpAgATUQ5mny4YYGQ6jL19xPyYXoJRRhn5fUwzENiLirDm3312Phg8LYQjwDebULDpUNz",
  "key39": "3UpGQwKiDPeFYKaereKoj41pKBV1pMkNi3G2rohY55sRyyKNtruHy71WAzxtCJRHgxE55UfkXB5pLECF1jFRUSNV",
  "key40": "4D5nCuJmZF27erLogB6YKmRJBChYf1ZMSd4iJNU5gRH7KGT5p7H4V7rQjVxxwQmc84MPFefzKS2p9Dvgd8aH5x3h"
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
