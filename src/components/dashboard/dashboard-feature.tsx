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
    "2m2yZusgkMDoF3EuouJRZvp52UwHJwSCNW8ERcQvDkjPkaLzKYqfPXXypXDDZrE5THwRYCRMNpLrue3dzJQncdBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pf6QLdyW1WJun81Tc1zH5Vsn6aYxsmarqR5Ps1fQMUcDJRK59cpRPrkmgDxMtb9rJdWXsPGJFxpy4z4D4VBwBLD",
  "key1": "4FUkjaHagugGSWztmaRugezfFxmuXxVMprcxNZsG7NAkbsACtuB9i2KPyMrzicnse6DfGwrWLNEyv2WAvwX15Vag",
  "key2": "4AD8UyAEFN7WZiSBo6nA1u1kcRAqHTwpA2zUgeK4ZAB8xXBcHSBb1sA5SwyGtVuUCoJQuXWkDspE1EuoBfb2mSge",
  "key3": "5pNTSxSjtd3oSuCbPkP5dp5Fgk5tYUyAaea76y6omsQKGkieuervyK5Lb3bgkqKWKTgWhFMHFEXXH1rYDhGHQgo1",
  "key4": "33v9GPrM9TYbErNxw2W821SuD3tiR8XVvZKNSYiLPZ6Pb46wk4XupXp2gqidpTMij5YPkPUckHNP6bn6wVaJVhoG",
  "key5": "3QRnt7N6VT6aUbj8x3U9JH6TSwRowUNoUoowuyhYn8qG37neqNagZxQYzwJf5PV9VFvoGDmkudy34FZf9FLEmNiV",
  "key6": "5xmsMUFnNpYF4vdCMQ3kFP7nccPjXRyhFMoKxxUgxSRbdfuB2XqSvy8oLGyXHhzAYcAMYLAKfg57ZE4iP1wEMxSd",
  "key7": "4ZoHSA93if8KXP2mQ4pgFrE9nvNuV9wpMBEcoA9WNqvzjeYNXGwFgvL264qP7eFZ3BpbFe3CF8ZJ2fF6wzgrGBAA",
  "key8": "4V1iaXZmRefQs9ckt6N8zBDyQg3fNx36kmsqXSHg72PiP25S2297vQ8WV7xe5HZaeehkmmJfn5vcGCqjMcgTZEHH",
  "key9": "46a98Yc9AP4CdeEbK8RSvUg12j48PE2nwjaFS4CaFVKMp5EMoX7nBNRcGbL7Y1wo4pRKMLxnoTZX8iSekCbRt79D",
  "key10": "25cyTx16pNi4TE7Aq1HEo9rywhBp7z6XgAf4fM2yUDfwcWYwP9VF2YHcsq27THkEvdxDABPznQs1U2UULootDuSL",
  "key11": "Vazvij3v1Pycy27AnRgLAT1HsnUj4qbwj5L4p5W8Z8hPadL1VPNj5xM3EjFV6e5aZeksHmPvnVyCTfXLYfGshQJ",
  "key12": "2VXuiCveNCeedp6fiXjetKeVtAdrdkVeqeusvg5AY3tjjUtNHRh15unAMiKdjawTZbXf4CUcpf77UeJ9CkGmbgSJ",
  "key13": "5R8hwV1XvmdJzJkCgk2sQCTyp5HAL9sm3K6V3QbnxNgMwk5BJ2Ha7zvVfZc6PyJ8dBdTM1dUz1tmr3iRJ79YVqZo",
  "key14": "4s5gwfXBF3NkXGQRdtMDU8CaXMAjF3YuKdUwrQxDiMWG8mkL21bNy8E5dBLbRhHvNP4ALMPzV1yf548oYmSc2Hsy",
  "key15": "54wMTTmbBmmi3GDZv78Fp6bdnLEwMG3XgUnAdjd2e5HpbGiT4DAHoJHW1YCMb1Wg3sCQSK1FcKahx7kGDVr1k4af",
  "key16": "27CEkGFJJy2W8QP6AeRy3ZKwFbb2a85TyqpDbiQLfjJUaopnWqeUhEdgMhsDidhk62doFTMRquuDgitEkUVzUE5a",
  "key17": "4DSNJjVx9cCdyKsYpVXqTnRBjEPygKSBHekTeSkomqLe7ECezBiMpAxRyiydE43XWqDVeKkgRdzvfbckj7jrdhDJ",
  "key18": "4qnXEPRf2Euyqrv2rQ8hkv2vu6eBt8GUSGP4xYhb2h62qkEE8pPeEVbC9j98wGcXQbKX8UzRcro8XHebomtPjdKV",
  "key19": "5bbUQ7YKJqRMQkboardQQtTBNhHvVfp1PKNnrQoDYF2QsbMVQ2xDbk8xGU1nzi1J4t35g27u5SqB7c48bq9kyihf",
  "key20": "3SCecEzXpEZ99cq9XpgH47Ger7K1whGVs2Tq792FeswHohB8Mee5rLEEN9pXQthxin5wrYsq9ZC3BCrCzkqUa53E",
  "key21": "3q9HxU2Ff13SYCAtCFUMuBAQikgjPuqU3d16V6zpjmn6hEGijF1YWP3uaemJPQufMVbscBhxV4zc6LpmvVQEb6f1",
  "key22": "prUWFKKomtswrQ5N5h4bL8mY7nAaNR4z3VKKEXWG3vw3k71pDXjzRBqk5kaXEr6JkCYbF1Xp919ZimSzPRDE3VT",
  "key23": "3grafirgrbdp5KKP2rYXLbuzw8cqsVNCbY3VuJkxsfi7W3gVnNCyPqjNhwhtzwLBnEhXcmGjxxtL5hA7qxJ6uhuS",
  "key24": "5ZYPeQy3i47XMo3z6us4wbdPAbDxuzrfxPwkZfBLiBcWCC4wvZdHQpKn3MaTc5nsz1kGJ591JTSFmB2fpM5qSL3H",
  "key25": "2kZUxBERAL7D9EpqyrxL1cd2ZsXSx9hFSp1fLK7jjSNciaJTCmMWfrRJDE1HnztrZkhKkEBGShZ9UrWwqp61wmww",
  "key26": "3cyYg7NFvWDfNdoathUtgXgjtW77rYfom3cqoqPSAAzaadUscA6VEwC51Fke1E7RU2Df4kaYKymTfqozDfNnetwx",
  "key27": "h68VdModX3becPgJrbEk24ADDgB3inbWpxZ545WT2Z3y3e1yYj6aCJ7jsVPpZhktncrZC5eNPKVZFytUgMDeWfG",
  "key28": "32gY7AL3xGL3TkVXt1X8jwVuQTMBUgrj9KoPm6q6pY3sio1RSjRGNcioGXKqsd7FEd1zQB7tGgGZwhpwkFXgo1zo",
  "key29": "5bHY6tJqNDH1Vo3GgQGB8TXBfvkxDnm3WvYsKLvQb3U2b7NrrMES3BwP8czM3dtoQHZAw86LoT1JuyFfQ9bu16tP",
  "key30": "53hRskp5W3V97YZSE6e6c8HEgghSe79979B56gWJstorBiNgsUKi8uRgRDFCAJXtQJpieitTAv2CKQi4S6vWQTMV",
  "key31": "39nBYvVsZ4Jdpw1uW8p5HkP4Wvi3XtAXy3JEkBuWxUrSkgHSF8B1yM759HnSoush8dN4qreiA7ryY67PEStyi4fV",
  "key32": "H5URmbMaH35q14Hz4AMk3KmW9fWhH52yLEuxieQfNH7FzGYYwgb1GUHLosK4abWheuCtpaaCqXxFPViunG8TCB7",
  "key33": "21SGi8YmiL1sAvaw1aTG8x73At7xxL8XrnZwHWttsJKhpk9jS1yTTzmci9yF6Hq4KoT8ebkxLEfmpMAG3hykp6ef",
  "key34": "ocng4kyEriJswXUmoYGHbWVZZM3iv5VjRHFFHwjnRHgjZSSBHvmPDGsr1UxfLsY4bfi636ZdkbwuPrfCyGYiFGc",
  "key35": "4b1TK3q6UPeta85BVAJM8kvRqqzto4hiPenyMmCpDihgFATYjHGG3nenERjmiWXx2VKkVN3kSDWimywhZbptXaHF",
  "key36": "2MH3zorMbKCbBo1fpJHUBgF95Ko43wUtq4h7C9DNsc2nwZe7Ly9o224UifxJrUyAp3w1SkuwcdYRwm42u9DmGzDD",
  "key37": "4SjhQk5bF4FScP8jJhJ99pjVarkWGj4ukWQTcTM35Vh6n7V9dA6QKq5GmPqmdQCvrsNQM4789WaHmQJZ22JKRDwN",
  "key38": "2ZGbqpQVpXWEPQLGMbuzg2iW4vMD2s5eaa67e5bf2AyRoLtX4PRJLFNjWhSqREAAoCHWv9h5gXbp9PXx94JadLte",
  "key39": "kCd1nEN381xE713tupofhQcWKPAu6zRZTb6qRJ3KJioaoJ3L5Ef8aQitDBdKxP7JjeXaAxTpAeraUUJLyKeRh3r",
  "key40": "4bvkHwVpQq436jnezG2M8ghii7aTTy7Dh4daHCsfFBD7UhtrEpFVP19hZACHtAjQR2QpBEJ1ZBV4w9utfs4pqMok",
  "key41": "2BA1rUtpCG4rPzPqr5siUcNaCVLXKpYHEfn7QKr1J7yrQyrjYZrWrmVWfaPmVJZpEDEAWth71TkXiiwB578wer3H",
  "key42": "2YyzmMNiD8XQxuaCsmQTZ8niFqL1Dy4GMrBjjAspzDZDuh3JLDXvrqAHqMu59iVBSyvhpYzD3TSPeHbtEGh9xYCE",
  "key43": "3J5cb9orTQzwRp2rwS2w1iFEM3L6rmDFvUjFtJYQK1bJBzwt2hwMHWefe2J6m5B2i4G4zhT5W1JdTxh7KcNASDzk",
  "key44": "4Pqv3XU25hznZFVsS3ipSuzhxUyfbiJHNx85RHzN8s5A3FgsiLpyFgLFcVmYDXJhiZssRgnnagqqFnmxberod3gy",
  "key45": "wZTM5KFaa5SJaHiRbYuiXvVfw7nY3maU7VgrA2Nx3bdCJCjoi2GcSMhjc5Yv23XvcpyM3TbaHHKPnGRaab1wPgb",
  "key46": "58rRexJMuXu5vG3HKMDT6fFyKK2neHPMFLEuJ5oPtRFvrykLwXruUq8dHwBB5GBH9BEszNjZ33itwmkADsoXBwtk",
  "key47": "C38LBs3RHC8ZTbtTmf78JhaohPnmhSGnPREvuoY8VuzaDpeLbr4htAq7y7psdHuV9x54eYJg9WhQ8vaaNefKvcv",
  "key48": "2dR2zQezGp7g2ehy5n17wRc5Mre6BzLThUJgpDRUCQZGoSVmMes9FXKghcbHNDz1Ns8ymxo7LWuHtmnNAwAhAeea"
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
