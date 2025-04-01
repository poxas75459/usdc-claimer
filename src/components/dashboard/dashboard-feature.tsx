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
    "2adR6ab3W9GcDP65JfwhRxAenXpkPum6ZMhGiMt6nGad676akvRoQfhk9kUKoAKS9CDToke2amsEBkpVXBT1Zkwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qz1oGSaFoEBzXMBG89kXhTRPwQgbFGZDLzeySWraiPHi1CgMUs1XNrVaUg7MWAo4wDwDqKdrkk9G1dGsdXFRKaB",
  "key1": "pHyEJVqF1nd87XZYyLw8hi6qPAVrjWbdTicBsXwDs81ZKT9XMi5c83KzRmg9tok84KeUuu2KktfsZRdhzQTTZdf",
  "key2": "2w84zRoYas4Z9K9o4cDFHP6G3UaNwdWuKZrTnKUPv2HiPgbBi5aKrd9BKzmXm6RopN7nAqtcJyDbxUPtJiHHqiV",
  "key3": "22uCq1BcpgAvX53iw1YtZf3crMcfY4PKgn5bBGu84DoUsYAu2oeaXxCuHz3P8LLaAEiTLoKoRHZqw7MTxXCxLVJE",
  "key4": "3Gi7GTqt2CjgHATAjUPJvVaoaPmfFSCA8QPGujkMjTAevC2Piv8cQdMp12f23jEz2r9CYq3Tzahmnuan7sbFiHwL",
  "key5": "5mGJn5YfftcZzUzK9tiSg5JNJwtkBrRhrs3sLseyddBgPxEXAtUUA5jCHYbCpGrgpqu1mvvz6ahptmV6aD66vfjb",
  "key6": "4swWnAmpsKm7RHSgKK35dq4eoBEVPKbZa2e4p8g2g6GeaimgowEK1wDEoKskshpu9qAGpUjsFxvcxjzvVTh7V2bP",
  "key7": "2b6boVNri2L4EqSSG3oWEi7HrD2GsXqrqsfBuGoRYhST71AHFopNKGjo74w7nXQJh7XsmVjSyJ4Q9D46WUXkJx7T",
  "key8": "43jLdMzawBdnjoqfx9WsSE6xuVXJfMGhSddjUMk1aCPtNyxSLGN8RQj7zZoMDXKXkkn6QMSjTgUDqH2ZNrPWsWz8",
  "key9": "4sYFEf1UVzrWrtmednusypwvjmKWMwnPu7teeKdmGswny7NwnuiY1coszZJjboRVNzHSGEXD5ETzSNuazZYbTWJ8",
  "key10": "4WzPtwntyFo5NtEQSXo8wU17cK4r9iYdFcbGcN1LYodPwtWJ2AcJgm85fLCjqo5ZcF8DrGtFeqZEUmx5bjiah7J",
  "key11": "5D8QpXoSyCbxwjD8SrKckdJHtvGxoGrDsSoaY73QV2W1DLqxkcf6jxXUUM7Ywno4YRiD28P7pryW6M5fgexNSXm8",
  "key12": "UAeGzea6GPt9A39e3t8mDyGHcSM32gxgmctXzojrbjeBrCnofSKVVUr1nu41mbf7mEtm9Exn6uRd9eAVr1SLAxK",
  "key13": "45TsgAwc9Kcx85rCCtQrPXM4FccChKcwNLnNfhxUTbEqnmQ11j4yv1cXB62Am1au1zaFsQqjMxQ69PmjktDATKpF",
  "key14": "hoyvXGbMMBJmjRL46oJekc6wMmLY1A3uv4rqKwohDwraEVX5u7ikKzRStrEFvQg2gDbvPx8bQTEgdnjLB9r8xe5",
  "key15": "2YHNJxSofg9rzkYSFLu31tDjL9R2WdghoLrTfrkc4xyBVj8C2p9L1Lgv3bwp7fk1BAsHDAXW7TAWbyGWXwTfK7Ro",
  "key16": "YGkfvuZFzvUnj3g7d6vLxy3AhYvCdzBnL6sbvxGKnAvWzoNt1zfHq1ErzH6qYh82crpJm54bZKGSJAPjABzX3TZ",
  "key17": "3JPxh1qR8JxQKZwHx7QyGvSopMMvZGrRSm8GPujKxsfvj2z6romRQJ3g9fhQwSJvnDujzfxRwo189L7LgTQ2FNxt",
  "key18": "4aEbwnLhqBvRDCfLcvi2Sz5v1qVoJyJswbUy5ZPL3Jq7x4sX5mPsAyrpkhbTgVdnYqXijmQAw5apYH8MmHULns4A",
  "key19": "3sS6Er3gxfJ4CoEpCedYfc7nj3kHYyZjV5PYsKso5Q93NAesKhs3hKJYjd8q3bpxdzmvwSidLegYXmPKYvVHAtcy",
  "key20": "5mYq9bNtEfFMceqo8DAKgn5QimhxcPsjv5uRSyGWYCyvXVixFyfcZt6939MxBj4WKbApbW1hyM6de8Axzrf8ygp3",
  "key21": "5T8tdK2P9hhRdndTBacWKuXZWMp6EPcHNYzS8wcUsDMMTmAQzdRnq6f7FAzwhapqyeN2xdc1japSp9jSRkNbXjTG",
  "key22": "8X4srzZ2hiAJoMnCXuAYsLA5jxXthJKGFoNVuto6k8FQ6BwQUCuvUH8uPgFTpij3esxgmjST3iBLbCtQX5gggkf",
  "key23": "3kwohpGaRJBHRDZ8jzX1pfX1TpWtQv4SpCkYAVb72BTqHkGvY9omeB7gTCPv2gveCkQRNDGv65BUBwgujryVcpC7",
  "key24": "5oCE8Tzp8Asoi18VyJ8kQX45Z7snp5S5iCCHoAJDw6gfinYCZBQvihaxriw3SzMQD8jgr2NEmQG5S2ZYt9jz3D2N",
  "key25": "2kBp7UHVYA63TZ7cVSQuUXLs8pxnZPuvPUx9AAD6T4iGHq1V775xjhjARWgdmzCh8YDH9rwaFF54LdzWRcrk9cCu",
  "key26": "2TYNJHdgVewpfvh51QMSdqzy83pB4ALif9nt9htTxk5SDhZ6uUB11TqLUaek3kVpECpVjdzCftUBnS9sEk5AiSV3",
  "key27": "3dc8UxF2Mf8XnGbkVm2HBiFnep5UTftkBhmPmiLMyqdSDN4DNtKYpE28kxWdFzxDQqxwTQAPQG8bXmTff7HCBAY6",
  "key28": "5dfUPyQkNnQYeoQDH5xiheM8wfXrUDqmf937TCwB9abtvAKm94Y2izaqsix5j2SAUsTkH4TwhXdG1NzGzEdFQkLs",
  "key29": "3Jx6ffoNsYjdb8kC7pGw6toiuhMNUgWPpDWin7rZoBxmkdkdc3BBdjNaNq8puv3tjg2P7ozRgRhvY7eaZkFnjqGH",
  "key30": "3ttVzGjordxg4Ke23LeQb7MF1CYgzPS2SJVbijBwCvoJMhaxe8Nd2C5QDkxLx9zQC6NKifw8pVbt9a6B1LVAKycN",
  "key31": "5615XCN6DPfSTP2t4p8i8K9xvCzBasKN4GyCgmeVy5yYCbFEEfJhSvyzUegsEf4eTjYvXUwpzgjdEpAGvXptFNLK",
  "key32": "p6XKGbBfUPrYiGomnDZzgJ3Bg5Few4FTstj2eYpmErxXWvdNRfHdwSBKgFssqaMeZi64WniRFyzU4erePgq2CEc",
  "key33": "2CCTr6UxLFFTwdi96K8SXcxGFdvE1EGADKPLJRJazSrpihEFUng7brgypWzDKPzepyrpEAicVp91c1245mFyDXvM",
  "key34": "2K8zYHqsZ5ZyujUA8GYoQ6LGUF2HgBqmWo37Qtjy7B8EhYSGeaETqLcNohMwvMTYn8zrkSYnL3bFFuNTutu1ard3",
  "key35": "2qtFJ7LsnPMrTHiM67V714SNAVRNzjTQUVe1wBNZZBqsqVgWSNuzmSLdLVyWAsp2meF8qMZL9mF6cXvRQB8WDMH6",
  "key36": "2ZMDYh9vRRT127ChAfkranZDh7fFFXqDpBr7XU9Yrj1JaJYELWKVtYXXWYhunBgWMftJgvqUCktWnpdTQwd8PMZJ",
  "key37": "46qsN3iAMwosjxiYMhYkNSFcoETtcuqBvX3sRWbTLvPHbN6Z4rHtGvu2JRMd1CQF2ycNVz7BVVCeeYcjmJFjYEtD",
  "key38": "3hxKLkKC3rm9hQB8TdVUk56ytircTAgfnPNVBRKwx4LiKhzH4K3xT1nV117LXfGkL9sWF15zzQAphi3fgfHG9YcX",
  "key39": "ESd2FUvd34bdH6g9maFTKMbwzJNucJFXCMcRm4MqD6XUhcntsGyAPkBcjbBePRyd1pXPmGqtu3sWqkyUbffVBWs"
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
