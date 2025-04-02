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
    "toQMc9ezdrGP9hQYNGnZXwN4k6qLCratthesatbPA9YNSwqGQqGNv6dUL2RjV4Dnx8hh96Nuu5MZFj3rWbKfZJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Beakto3c8YjtH1mRGs2eyZ4qBL5Fdd9BEgBJxW9LJknByWfmXBDWdKmpBcak6mX2N6YsWzHwunNTBs8ccJ38hsd",
  "key1": "64NruLpaGAA86BVzjV4BAVnzPmnfXMkv61C8sCKo3Tm4x4HjyjqBxhDY8uJPcZk8KVCu2MdaSnhTrKSs8PXEQjjG",
  "key2": "2gF2YTptDy8wo3HaHMPKeGCJvXRZuLPGLHhkyNLK56DviRjDmF2NwUoBtCevsLrtSdjM44L7s8trNQBKrobQpJkM",
  "key3": "2ZibW9dsgrTxpPoyc9twVkzsjCADigmdsKtNrGPKUDf2fsq3PdHEJw5RiYhuDwzhbthvz5HrWFRXdjFaQvZCgtKX",
  "key4": "31TgQuWJ6DGpemZnPvYicAkyQyr3DQUANgqtAAPQKgwvcg57BA1aMT4jbYUi5N9416JYMC8m94bLdvM9zLwZnoQh",
  "key5": "4iT7T2bqaWxcHypXCP6QoERzzvNCajMKNmQC3GwkjPFsLyYnnUrmsToka7gsGgkbLsTQr2NRJ643gVdyu53oGNPo",
  "key6": "4kCmxGmvi2CtTskTQ5bdTPzw7GhV4EZbRFL4dgbMwim6AVAS8B7Q2BGEy8aTMXdAh2xfYfSyG6HKyN1F79SpiCfv",
  "key7": "HK7WHrNLUnbeykmJ2UyKFCABPdMEu9nZdH7Fu4yxzMLKme3pznBVT7RE7WNPUvzgHsfnyTKrnLKchRDfSd4XC1q",
  "key8": "wSCHduYpzyrCX756AVEvXgF4N4Pc3Z6N3jZ6EqbAwqJTdeG1YFET82RQDbZM68SECDKEXtUQr1pLB3L8dLMXyEk",
  "key9": "2iewJ1sQ9JUMoR636rhhuob5CLf1r7ZUv1MQq4YsE6bnkffES8oDrQdwZvsRUSTRaZN8pMZYSJD2DquwBrwRAk2z",
  "key10": "5zhMyobTGvYtmCvDmoqngEkDA6eSoWik2rKiyEkeG8xPSpmYhUxUvn5FNugFYa52T2gkTbehf7co9b1z3HXRjypM",
  "key11": "3yidPFGGNaNLRhSXbeuK41gKR6Kyn9UEuq2p8ecuNtCYwDgPNYQWtWQMsvzCRfYGWf7XwqDiQAmG2i8QbHsMvwUE",
  "key12": "oZmfptgCmJhuMwuRkd5fTgyw22LnR74opcf8jUxQXNRCph8Ks72km5dXyPQqHz4jsRy4yUKCi5j7Vjhd6mnEn7K",
  "key13": "2s9vD32zGEqiEH7u3XkJeqJFduTATBEXDnkBX1HYx2eM4oMgc8eBPYxvwzVddJq4faZfu821FPgbKhaWKekv8KAU",
  "key14": "3KuTZTbD3qddFz86YAhA4UXhozSW5nKgANJHAtyNEvPmZbGWGcuve6RzYJitCh8c3sCdrffbX5HXTibWmTf6AhXN",
  "key15": "2r7PfdW6cH8wingGJ8pq1QU6SQ6boMQKHPgYJ4zwJ8jByUHq5PJkAQktSj93ffXpokY2T4C1fD6thGEUPKuUjXy4",
  "key16": "2jRCC9sYJYhCWaGyvBao6KLLSHFXTCzvXuaWntpGprc5RBtSo7t1ymPhSjp9vu4g9Pvsm1oAU9AqB8eW3JBGDH3K",
  "key17": "33AbNT9v2UrsfoRzNnVEviWkHS2QcfSEtfMxqy37jd9pqZWpUR29MyqpmVnhiWboBgfdyToVR87V5wcvRYaAcEgt",
  "key18": "NPnx58GEtFrX4pb59BQF5DPaUzrTaZB3Sr59H18X3LCXpPrHrSeos3ijTNHFpXz94B4Q2qaPe5oJFrBZvBAGJmn",
  "key19": "2JnBEqaCj1Cn2ERhVnQRuGjoQp81ik9hdsP4XbsEZHzE25XmhYRApdyMnp3GuHFTy9Uay2WYKZzkFdQ3aKvvDW8g",
  "key20": "2JoVtFnqUh3TZmGMMVJEfEdLhhsgKAakPBmB7kXSShQVyCVy2c7JQnSmRWUFqDTNVGh5FU3DKKeZ9bxAh98z6Jc4",
  "key21": "5TcDRbUsvzZDtTne8AXk79uf2EhzNrjGPzbbiNMQBAqE8HmC7uFKf9aiuMmTxQ89wcA4w6iz7VZAqcWJtJJDFzik",
  "key22": "4dcoGS4mj2mUZUQJv1nSFydh9eMwHTGBb1gpFbNquJvHdzhZySpeZ3km7xuTrULi9fAaRwTcNYo1KxLFAGo5K6eB",
  "key23": "K9p6ygJPghrGQcf1Gjr3HubrZsSmjk4vKjLg9Mg2b4VDMh1aVM2NTrCe1gYZxJj2SpwxQgNu2tMHYsoD3RwN2ag",
  "key24": "2WrczZeLo7J8bq7ycaaKBnXsHnP4hDF83YeVx29R6n6jSD6DEVUY6Fa4Zqp1LMZpn3Rihrrne1ikaAH2P18pULo3",
  "key25": "t1b3uCvjAGSGdfse7LcrVk8eBASaAB9CzyANwBQcKrGmnXqjAW3KLKud1v17kKybEGSQC1szCDcdvfjrStFtBvw",
  "key26": "4zXXUceCFpyRmmuKDWsE1XjExLixcev1nk8H8UbfmgfpZEKRvjrrJwYn9pzUASrQq79yGbWD6Qevzrekw7TcCDYW",
  "key27": "2nQ8uX1BvzFwSh8jA3CbDoViBkzE2eApF4CNvYJyFqSDrNR9uKjxZVdekxsudZfZTPLJyozArDC4VcJyaqrv6GzJ",
  "key28": "2m2RtpkYNnZwB6rJHAtKpadFaHHDqxqoSnvpyQfPMXpU2bmd1vn7hxshow7ohxCaJx3xBoWFm3k4aVArh6kRQt11",
  "key29": "5n3g48WyxfrpzwLs8STMf33Eg249RBpkK48x473sYmeppQ8HGXj6dDLNJkRrrAT2hBrmCPZKR9gQyT3iKiipy84b",
  "key30": "3fVjL7Kby3cCA9mcnCefcbTF2igCTnCgSAJ7PqrQfCWS2xYNmABt38YL4eeJRgdgo5Eut58TyqTmzS6LAmhgB1UB",
  "key31": "2BS5LrXJdg94X2CspDhaeFXKaRqQDfXrgNS9jy2y6puC1jR9qm39hfHMwb8shxWSB2azJdqVHNcyMPFaqhRKv95U",
  "key32": "2WYEJ1XdTDfUpFXDejiumDCTVoQAgvXgsU8j2xVUkeunb19JDA1taatV1ztNov96KaYkJtT3WbiMVYmPqocaYY4b",
  "key33": "pVvUJruquy1VixAADpoL829Kt2zYmVXa1RpJdey6oraiSTQr9B3JNGFTzaK7Ry4Xxb2EhedabDmcuTo2feKBhts",
  "key34": "kkp87eoovR5jWtVfZYJJhB1yJ5326AKCaw4eQdTYFq2nDvZqkMytz82UwgdHdDScSz8GLgBf1adDv3USeSHjeJq",
  "key35": "31nAzVDa4aMsxmFjzkAEFAmeVenY9iy8zkg2MCHQnBi9C5aGHtWSDtcd79DWMpxzRjJg8SF6j3aLumojUXXZ21VF",
  "key36": "5qqCQxBmLjrSvEnu3eH3pfaqzkdgWXQ9jrhHpK2kG4U4mLbU5qQMgKkZfkoU3ZdA6uqAb8FwyrwhwHj5QgY6sAXM",
  "key37": "JUwbZ4c9VZ6Fr71K9cr4pgwVLrrSJeGPFsMqRKMZSVYUffUv8mfEcwYrfB4i3jGztd1rTGyCA6eDFFfQzKcdjqv",
  "key38": "FXkVVF1kgiRvenjEddXb4egJsZ2PYKfQZ85jt75BkzxBt9aBwqYwVvqRDXRXS8dj2ymvEMxCfC1Yzbh82rBsTPj",
  "key39": "peEC5gQvC6P887YoWaEt3iruWWH2zRAQhkNbqFSdgdtGVRcUDnhJBE6Q3Kp7jQ2v1AwDZJ1P3mwt1UvcfxUXy2H",
  "key40": "5WQDbk8K7gurSo7kpe3mjZMTKKswbqdLkszuB3BiKLXf7m6hCC6fiqUr13mqL15DV1NGeHVDz28VrqZDjgyy919P",
  "key41": "faXqJZevUkfxCkcWsd8xACXmaDnWuijTkVjF7XZg6wWtJ5p2fRndd6cm3ha8Dm9hqe5n17NNYrnypwbXPqmG3gL"
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
