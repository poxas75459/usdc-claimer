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
    "3fDwCvgHohgpSQUtM51KNBTNfAuaiqBedsdBkLbTvYwgcJs6fWjRwkBb8kWsD3F4GfnQyoqyuu1ScPvYxkd315Ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "267qYNfR64M2UTDFKzk46uhpQ33mPYpQgZeeNy4hiMEx48xenANBERsyX7HT8LQ2PbovUtuSQD5kSnpMcz5xfAk5",
  "key1": "7V8gdiZJLovkA3wzFLPiTbzK6ik1qjKnULDTJVCUFYcZFZaU6wvxJ7ZzhSWmYhkJ2KWt9H3hP71tQ7MNFjWaY8q",
  "key2": "2ztBypdxs5Tkfc4hJG5DwZcmyrpjjLPx1fZDP9srNdyEynKu7K3kdc9Uc1yD1z6jKnWAcGcYg6T3rHVa4Pq77DmK",
  "key3": "5EUaETf5MXz7WJ6iA6BP6p8DuNLr3aFgwfovsFYK1TTTn5XgnrYp8WKhd2n42aNej76vxysVrAT9cYCGLa6FMRVV",
  "key4": "2MvgUUQEJ76baq9WpJ6mb3w4tpAjTx1DNpv25s72d1eFmcmoYwD7UegApfdRAZ2QydPy7f5qv2juN57DNhjqfXRX",
  "key5": "PTWZvMk4URh8eLm5vXVtKSDXSxVB4WqdVPUZRSR3ZSSnRBrmxMxBygaJgoE8PBiq72H7VKok7jCNoVUhw4ce4ND",
  "key6": "4UbKFhAtV5b3wVHXX9KaPm2T5qgzVSty1VPry942SBoTZqs3D5NtJvqHeWtx9eenS7mVL1W274xJJdmaXw7oiMg",
  "key7": "5YeGst2UoWXXuJKrgYEP6epsGWckzw13tvfJUV84gAYbRpKSrsfb5RGyvfLsMZyn2yPRkvNkAUzmnpWgsbfZdJyc",
  "key8": "e87aLLAwCVcXh5wf8KcH2j9AbHPtbHwz7FyruLZ3iRavQntRBwNLV782ZsmpXQXFrXtNKRpDnRyyfPspb5gpx3s",
  "key9": "2DXWqEcztrsouAp67PYrBhHdd8wgh4jTj4MqZ4SvAKefiEJoFnmGReRoT2m2L4Af3HF9tinpdBb3AU6MiQM8cHrQ",
  "key10": "4o4AbvZurc1kTAQwfMg9LuGACK91jFhap5uJj89FAxw69CWkDGStozvBrB1raGqrWpm4ZdTLnJL7S8JourTXC7eo",
  "key11": "64QHMNWD6HixENvHEATM1JAJ8ASyqKWYZH8dqCv1upWPYNFJ21cxcKqEgNVAzayHGaS3iLCraLignyyDnn1CeLPY",
  "key12": "4MEqHDdrmS4fBkq1k9DNqH2L8htPpBxTEURgCJQuoktuGrFNsr5ER8thAmDr2yhj4VUwrThcBoYqFHvJHtaJpE3k",
  "key13": "3kp5Lm9DHBFSd2oyLvt965XaAigLv6yMkWJnRCAoqgZNEA58ZnPDXoNPpnMYN484NW7vJKqQ19ycTXr1iyHqbNFS",
  "key14": "5K2bTztfCrwEh3AP3dMAENrSCxcPVNgJxJcw81kLyf1HLoEo9bTCErYzdyUCrNDv6HrwCM9GbBmxLBLEda8FkuA1",
  "key15": "4uqJ4tZog6Yy8F1AJYqYLfeJPsG4KsKcJrroZjFf8VBhGfgdMxn4jfsApszcYsn38LmYbzsBZSbc44MAEyV7qPaa",
  "key16": "D3xyYdrE78BFsfxjbkLYQwVKCQ9VzNuMNENsqNXo5V2KxyGMFpKZiPzgTG5aEV3dd2Mxca3e3Q1anuXBB1Bs7Fd",
  "key17": "2RsXzGs4LyRmTLy8Taavmj7JwqKRcw5agmrN9eMsREWZrQiPaybvMbZWkLAxgWuPVTqFDAJHinQtLe5zMaxxYEMZ",
  "key18": "2Sjnz3CV3XvbGsA5cXM3M8bHKqGzBK4jkHZb1HmspjGu3KFNhyqh4NrMzaR5dnzkLxHC5Rpcvk82cmy6owFcMNgf",
  "key19": "35NzX6jDNMsYYykLDJgUWhmVQyyGLYWsnVTUrePz4zY3EDFExoZxzHVSti9vXFBQNTAqhbR48HwTx5FdAHuTzNfB",
  "key20": "5EAtia4QVbXbPVM5zBRCYdTW72SXNGPaqcKVxwJXpbcW8FC3SjW3FhQXPj6eGC4XCtqXuhbaXwR5P95cPquAKTzR",
  "key21": "sT2vE3bTWpz5pT2Gi95Kfe68515iuoUDbamTLoDznphYXAf5VZWcfgEMQ19Sc5wz2qbegxvDAhsjVRGBrptRgfh",
  "key22": "3xxGL4RWfKjvSXRfT95VMXknZhvTKbFgjUqVeye9dvYgDY2os5KZWASGprqkXc97kUZ3jsvsLmZDnxnCnfYdHji3",
  "key23": "Ac9n4wQvbHVpKozVHMEwkKyRnbg2hXkkuaw5XjhxgBZgfomJ6WdGukt5JJW2NrfqqgDBLhFSiGLPaAkFytQJTy7",
  "key24": "vxPgbDSmUC4eE8zVuz324BgD7dQbazpFwy8bZWSPK2Nkv4gkhhfFpv55gJo3bDyWY72s6hZiLS5ThwSisgn4DSi",
  "key25": "2LqiGsTDMi4tuGDmgHLtPT4ZqbvneT76fjSV6AEKZWnL9ncSo3DRyfyxgqTh6v1ZzvAgHYMzdHqR36t72qwae8Jf",
  "key26": "41YgsbAsypYF44bGMZmGnkyLumgKzhjFedzP4CvQspHZC1rTWtrFscQnBeBziQnnUx3JgBFc6W2axxc8e6StFZiC",
  "key27": "2H3ZwYj4duXwiS9WD7BwMSyEnUoEcxScQobazv8m3vFdfPznyT9LYDmt28rXw2QAg7MXfLBNvkrBSx86Fq3Wwt63",
  "key28": "X7Xha7xWvobjJuVKoJXkgJLxSZAZSmQX5WKXCKhwCiDLXgYbxgMh5ardhDfDz8yhkRC457HoyCuoQxfP2xuTgUs",
  "key29": "219mGqnr9dBGpkvJiac5qyc2SS5Sa7hA2e3tcmEc4j1BHjR5auNtxKi4WypVzDwbezF6odTySqn1PigCdQ5Pis92",
  "key30": "VWBfc8GD7t6PXWPfpUfrZGHasPz3p8kzyFnrXLKKBKENAq5ogL7vku4vsA1WkF3UJqjxpgjFA1ijx2A2LD1nJ3Q",
  "key31": "5atJBeKjRpX1jv7jBZZtVUmAmw4Fprmmi17pVBGoBKn4WKi1QAoDpvXJzvPa1EWaLVpDjZvbet3AtQNYVPjWvvG5",
  "key32": "5Ji3U9AthTqgTUynv34pU1dkxHKKbYSbobXjDJxSLVtnNcooHbenWdDJmtZsv6bTDTGhotTErezcshxr4BkPeb5o",
  "key33": "Nxq8BVzhriV7UtsLRUZ6meU9bk9puGzXTeW5MyaQBu2pj8GrvztVV2itkPZDCvJsd77rrZyzVhYkkR5zgSsPLsu",
  "key34": "5nb8287sXYgnH7SBEeFBH4KBi7AGQHxXrqTBcLSGF2WeAmYcoLGKcjeKEjCUdDdHtuGDA1R3dyJSS2WuNYjDZ3pR",
  "key35": "4nzWNqpPMVVdFzhNWKNpb1ev6BHLcJ7C3s1JjTwqfFWMxSenBdsyacs1YUjswrDjZ4DoDNw5eKNYGDrEJf6ZyMnU",
  "key36": "538TAajedtFGa31GmM14p6TXtB3QKh7kTQLxdiw6NLqZji5KpVtu6v1UoahcMABzUp7CmVp17xtk727qb9aWmty9",
  "key37": "2bLVY6DJvaFRNzPP4gPJjP1Humz5QNp76wvtai78P8LVZCfe48B7RhvsP6qaaM64pjaTxRdPkvgSnyyiAPNwBowz",
  "key38": "5tB4oTdzTZ3DjTgGDhPYYeZcBwWMzFPXHLBnaiWnBMUqphL4Tw5na9uN8hszZehM9YeX28kEWZpfW6pnZyGkc1nL",
  "key39": "3tPdnp3MXsqEFuiuN4s4NGzXRuZaPSNWbRpGhmwz7bNYpX9jkDEmWUEd5kCAMM5x2sVAjjH9r2XZ6c8t3uzEeybb",
  "key40": "4NfLY3TCKyPspW9JdZBzSTpT7CpunJS68krDmJ8hKkvePj5wiCxerugsMhSEXGaAMQpDTLVtPkd8Rkn98kHmpst1",
  "key41": "NfTJU9LdC7QXrVr5PrBWFR9KRkP56ee8rP6zdkSeT5oL2Q3q4qbTQzFxVW3XRETWEhmiggP38zkiaXYwC5vuuhE",
  "key42": "4E5kxJBfhX34jNEUUKB6digeE7MAw5is3zX5aT3SpxFRcWC512vnV5t44jMDhn3dgHYiLM4FhnEJFpR3Gd3XRToP",
  "key43": "5iSzMmXRv3rT6xvQbuZfFfXVLYiQ8Z5J37wG6DHqSXdyeSzwwWCgBcJkQ53Hq762JtbUNtX75sWtETuGKyHKDvRh",
  "key44": "3TNQaSkWBSX5xSzJbSwNkKTsbzhBUjNnFv1sa4yXWRxK7ST38LsuAveUYXzJshBsQ4HcqL3L7qWdywoQjDBQCCca",
  "key45": "Wyk8jLHKVFehDpBThFmAUnbTeMviSJ7wmRteiA2ojKHdrS82BHgffd7x9f7BjHQT1M7SufgyBHg8FXgxAUrDNa2",
  "key46": "4e7XVGpnPyjPr56y2ZejX5KHEzNKb6ThAje2AtfYd7JdMfgPLZqgbKADhvtdbCyYVWuFmYfSgaRHAGhY3ZLVpd7X",
  "key47": "4HzKhat5pVCQAc98uZECtKQBBL1C3t94DLHG89C4yFr8ddUCZs2oQzjuCkH8te4wpAM4Bra7XDkZK2QthQLndJDo",
  "key48": "56HyAfjASssXvRAxi9W9tgWiB2QeziQeFcmb8Wi3yexpx1K4RBGpStdN8yfj4NJ4ScmCt7DE5Kj1A82XR3sQs7GB"
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
