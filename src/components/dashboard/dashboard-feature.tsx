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
    "VD29oaQbGyNwrMpTbYm1s9N694wnHcHgruspanTiDbofQkbs6cfrbLadtRh9PWrGJW65RmHRQ6D1kqyLX46Go9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RqLZvp8z4LkBA4v7Dnc8rkBhfuuzPuKQnrwamqbMw5zLEQAAeMn9dCtqxXNrEh1AQm9J4RJAEPkDgcpcBFTxZYS",
  "key1": "4VpKMd8dnFJL7wpt4V4v3u93DcUDoRzNUCZpUF7Jo98rLDJ7xvxTv26UiTzogGFRdbxMbhZGeAn27fJ1GczmUukT",
  "key2": "28MnL7m6kXdGAJPyY5vCQwvqVV7zUcouxXGAP5YUG7NoE8RswcVWShFPdzV4uqr2j8cMhMUPosgUgmgKbMjdCTKM",
  "key3": "4ymE9AiQ1YvKXmY3uWH5QhtY8oG7dXd1c6rUcQQGNsajPegKHNEPTvZdvrwJhXECW2iimszNiXq7hPgsUTZHe9LX",
  "key4": "5h5zRKD8iAw98E1mLECpZVAjnQ2TffqsmvTnWRZCQfNM7n8QznamEbhoPht5fch58obPZdMvg4wNGBsfsSq66Wxc",
  "key5": "4UZ6GF3uv8CmeiUbjeEm8AxenpiNYwjFC3kTyshLwG9TDd8hoNeX1YTnCxAUtUHiXoMw38AR7E6PiECaFuA7ifXW",
  "key6": "64EFf8rvoYh4dCNu3AieQuzL5fHtf72XUCoLSscaXzcaiohsVpXtNqhxPiMo8vf7pfPmCuwAptyyqos13AUMDcum",
  "key7": "g9bsuhkhaGnUdL5nDUCkJfwpjTh3ZbJQJbsEBDffyJLcYvktaKQpdpV5SN83qmZniXUK65cTGcRuzLoGw5CCLQ4",
  "key8": "46xdPCWt5i7RYYqfSLzyrhYmoYCf9oJKCTQbhti7xXi28XUeJFG7QM9BXNTJgFs4mTugwmSdfDUV5nM2zLPEoNyP",
  "key9": "3CsDobbMUBiEEEC4oBVRcZuY8GhojRRZfviVovdGL5YmNezjSSEW8xrWU7hpQB91eTcR7Qm58A12K7fGHRRwwUKu",
  "key10": "41Ho1FkN7bDQQxtuCY8j8iPZRdBctAoRobDnyCdfdZLmrHrRx9mWfeJhz4jp2W1ZAEDeBXp64vW6e4xYwELbZQkz",
  "key11": "4j4F3fAEnSnFUSbUZoa6hUnnammYJi3vuQ8p6TbZTDr6zH4b5s4LLnrhiwGGiPa6anhu2BaHgm8khie2rFUgZpN8",
  "key12": "5wCQk6jWxjmphHxgoDxue2wnt54W1UQN9jpWChFCmxbt3Jp5MuBfThNbY7icsWGGx9NvTktsNy4osDJp8Cnb1JGL",
  "key13": "3GNUXEDL9NV3xDbYp3q9iB8BEMas7ujisVUEPCPrPcPuJgE7fgbYqNdxoNXjDtzY9spmaa3BMLUJyrscA3cfJ55E",
  "key14": "R5t8cJM35shDnwmdt1Ces6mZ6HdxMbzoQMRM86JNJrP983Um781tGhTDkWioEgEzyhEzeicgrqB7cQ8qNxr6H8W",
  "key15": "5TCMyCKgik2rN4Lvx8fASHeBsuRxBR1Zbu2JyXW2cnL1dk6tocEobhGc5VEqcrtbAtC3oo9xgxtB7syMUBoV9CzD",
  "key16": "3nqj35vSNMXxhsKL3tYWZsA44LLPaSeRiGRc9yALuXqJxCV9BRKNPzp2SGZqLPKFTEURje6TDEf1a2vvAwQX3vVU",
  "key17": "2y2rGuXz6QRi3g41FUM9w8PTXKjoWjAETMCboqGPrBCws2ppbM3yb7ySBSsXgCJWzWA4NHYwzyygE8jDFN4vKo7C",
  "key18": "4H1MyXnzypZucNKJeBX56d9NeFPSULpHggmo2v4s2MGWdYi6VRNNSiYjwgrd7sTsw9XHpe74fbjQANnaRao7EW94",
  "key19": "258zZGhXnLtVnT4YRDv1ota2QAtYRAjz3CsQzsgCeDV3RLmqLT4SizgfJeDmrC6ze7eS4etmRbPwmfkemNc2y9ZL",
  "key20": "4XmnuW6kY8mU9G1uMCcpeChuZRwJRvWomy4oGLVymuUzHDYDMWaVSbjKuKUgrEa9PDq1ba8NQPRX1QoS9LdYvsLr",
  "key21": "36invLt8aMYeQ1UFh3qQVt7rod8FqkaknsqHVusK1j1MM1tBnDLT9mYRCcZuBUfxRTMVCksHs14BmoxqmWcNbo84",
  "key22": "5v7bCceMndtBgD8hXJtxqsy1K9Tkihg1qkxv3VKRuD3mxErNJU9FbQRR6nitHYeH6kYnNDmZFv2s8GotYY9nK9V9",
  "key23": "254USEHPNpEYhxkgVnt9okTCvtrG1pX7VA1j9368Ne9YZL1826CgiWfhqk4mLLTcNDuwj1xK8DjveVC3UvtS4jqs",
  "key24": "2wJFBQFZwDLFUqcxfzgjCuPV7DjF9uUWkb9yX58gz1ySN3S6miPMryYrR7m62e9spY7YD7yYK6Bs7YmkE3Dmcffi",
  "key25": "5ecPWd8SQzkukLLFaiPVr3SBkNmZS7nsgRssw5u37UppS2oGGbk9fGkYvifXndkbcHipb6gA6d1N4MsRV1vEwEWf",
  "key26": "2KyaEsiy4ZXyLKhmNzmqqG1sJXteVk2UL1VA1u7aPREn7HCrBjj3jFCYG2osu5aX4V8PTPEg8gbjPjDgGhf6x2cK",
  "key27": "2ik2JeZ6Vgf3KLUMSwk8WC1h6RvxEfBH4xmgm5v9dnkx2qAHNRrkbCLjCyrpXEWWfNGgFGsDG9ambHuqG22pHHQk",
  "key28": "2GKEfpdvyR4tiQNw4edxNA77Risef7LjxZAjTgA91nSL2Mrzg1vt2SRbXttsyKUGXJTuM8gdpTsKot38YCtwxLBi",
  "key29": "exgLAm8RpxzbM9EN4uTQ8hg7wmLwE2djEwrcUNd51SrpUTm7MwEpoNEvXaRGLEYCXBWHFLtkBogNceS8174FVqY",
  "key30": "5rFMdi6xQhEJjFSqrwGw4CwPBXxpLG2HPhSwc3EzPWeYJv9tAw5dT3t5HL4E435nWRFwaYsAaKRKARZd17oYRTNS",
  "key31": "3QUa6apUHRQv3MZpSbhTWU2rwYVEWVjVAR5GLYrsENHkdtARQtuyPC8TaTckbVMkgqF23SkzuUiaBYAsB75QGEw8",
  "key32": "3G61eiVTBEEt1CfbmiBaUE7pv51e1e71jhcsiqfiGavbk2M5FCpxwzDvf25pU7aeNkruvD1pj7nMwwRhZ6YjPAdU",
  "key33": "2zafcVHEgZU33nnA4QreR2RHXCnHUxxgwnC9h7fG2c1VWi8r2467w9Ft7JZgCmFNBF9LseFf3UJZSctJ6hdwLSzN",
  "key34": "5xN1Dcy2vru56AU3RgZNGKpFtJ2JVqYpFarSPHYqygVnVFUDWo6TVC2xkUXrq25LyjtYnRNNtfg28bELcoKHxF7k",
  "key35": "5UBVT1b5P6UYx3zdRvNRqvWs3BAudH9H8cPSQ6umi7HVmTQekAMtXdfo7vg5Xocf8bgKTw5EzJQnjQbKA9orUi8R",
  "key36": "5Dgu93hNjHJbcdeVhKKd7bLZFciaUtatDxpaM36KaXqPpogHAWQ5q71tA9GDj6vCiB718tgnnAADQYE91KyqeHhn",
  "key37": "5v4oqYSHo774xEqPjCCRDgmAktBqqCMcpPvTinErPg3s8Rue8ifvUFeLZ3RUk82Usjwuf4NihsBSEt6mturG1XU1",
  "key38": "XSdSuaKhCVG1tGenGKvHwqxv1iCHd1HsbHhT9sKqxE7wv3x5WwPTDmyudmUbYyGkjtk9TvJnYAKkzjj5LErfot7",
  "key39": "3ukjkywwJiht8D4oDmkEh4oc38DynNgmm18VUnr5wm6ttapaV9XxGyQABA6iJNLaTh5ypuHk4EWBtjNeTg34VXe3",
  "key40": "Bxwo2RVKAPio9UuaBFPwXXWwTe9eUSnQTubtGUKnhZkiNo2EKyLcVx5WwS5SNsrTzkRcDWuEcn1VBap2VFEVVmM",
  "key41": "5asySQe6WgA5MCoeYyRfZFdyq3x6dsdR27HBxiSuEwiaAb5j7sQhsA2Jq8VQEyYYtYqBPqoPhsJGEasJNfYZiDG5",
  "key42": "5JpEZufgGrwVgTqFi8LHapeUeQoZgEqtGJQzim1QMx85bLVSkWxaAkaPVTa7SvDTePGTacJUzzSnRV2oG9KH5eYs",
  "key43": "544ZhzEH8dDjArsHwLUBE32ucZVXyBZft1uu2ejqz9Mmm6GTC92dTdyiHbEnEbXRPgFnKUzeHNTjwB4VNT3LA5Nf",
  "key44": "3wDNEG6j4za6dMQmhDjtHr1EK8i9FTAzEbpdtx4A6uNJGRjqg7jPMLK3eP7oV1zm4GDWdxvjzuPEfnyBxU6a8MNM",
  "key45": "iYZnPRwn9euvNRC4WTuFDeFbJbbcqhBZ2b8FBJNwDWpi5q4V9edyc8Mx7NbeKVzwzPqZsw95GYWuDDFZ691tXwj",
  "key46": "2fgyS3nhjAHWT7RMgJLH9DYUofECpZGkqNZwhEiWYB5H65tscYUPPASwtAcb1u4dqLBCYm3uDP8P4AMfcG5UfZ1u",
  "key47": "5nQYbXepaWdqfZtgCUyfh51ZaKKsZFzSdwyfRjv7BJh5hrEWfTYcHecDRDL4L3VPBLGgnmxnwvg7ZCG6P6XhftDc",
  "key48": "23TNQgSQRwAySLRTpVW5a4nqsve3GrgMA4EoBSBd7Hy1p3Ay4tVzqXgHJ6qLDyVrYatPNNEmGTCeeVkPbLWtYmtK"
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
