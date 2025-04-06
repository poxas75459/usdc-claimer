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
    "2smK86F4qW71pr7Ki9UagdjGePFy3yuke5A6fnbuK46k4dG8Ddybu1qyCnyD8kf3npy5PggzWpSKjhHDLbzHpiVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sx59u91F2xYYkUzg6aYbuSQhdfZN1MMNB5DjyVebMdgJH8erwXbAMXFaizYYpVbnMzUMPLFJuHGxEkj9trLPTsF",
  "key1": "3Bxtip7x73sEUFjXsuXr62s1ok7DHCGJHPztqxSQ1o6FMHRKywe394nVEXfwTwVvmeW9EpbbfhXQoEj7WK7fHw8T",
  "key2": "fvxBkEBXvvfDfMQCF5PWAingdar46vRvcXdTWtLmqjM15Rx2tQABCHd37hP6zWZBN5nZDpysBN1SC6rrLMBf9QV",
  "key3": "qmSjtgWFL6cxFKxfZjLfE6uFxHBpqC8e8zX5DAfFJofnEFQxvqP8pDJXTfHndBpN6RjQKSC9g86nhW9RisZG8Kk",
  "key4": "5SrsncRqGdpeFJt36QG7orDCZHw8mjET9ouM3n1nCKTJgDbBdXda1YbtjZnqgYKXKFPNzXWhxoUpy9TZh6YLH7wB",
  "key5": "VQb3YZrNGmPTwaSZM3tXXp13kpNoZNvFZn93me8djvjwaeuiDKXM41pfUpNGQjU5WHoj62yzH1qdo3vBYyHahqU",
  "key6": "23v8czBjEyy6heVjQycc4tu7kPUZmS1prTM7auv3naLGkRtbknw2fKDscHs3DpR9R9ZySW9oaDP5j7udPahXoksW",
  "key7": "3nBAVkmeaZ6fAAKF2GMDvmiU4DB7UxX5tJBWo8bgvP7WpwkWrMWgy6KxRW2G36NFQmsErUgPiepXVkDKs9qHYEhk",
  "key8": "7815pbnyBA2jSBz4HV5FQq6gbGRQvF64d4JYNLYcKDTUjL5eRBWa3dU4rHvVCp4XLQbWdtJSsEjpwc12G9foARd",
  "key9": "aH5F68z9vTPFFeRCS8QDcpjDJvsNd9KrYYtbjiByVXmTmmMXmJJ6h8nyPQ2N2Yqp9hBgovNJ9dkxMnoPUUHSERT",
  "key10": "48QNqHqUBzzQ4fUDpdsCmC8xs95EPKupUce6FpdLnxjwCDTvkGyTHrsX38q8pUwTux2YASAsh3Ly5ztrzt6H345s",
  "key11": "2ftYwgSJZ4rNErtH3GcBuLzKW4wXF7fSkX7MpSy7grFqMw2ECvhChQQScaiJFx45Nhuj6kWAu8Qawjcr5BPV8tmc",
  "key12": "3Ha1F8YGTxgrqrf3ybNUSBMDzkd9uqQ7AaeUtk38QmELs95CU6YrQC2fs1dvVNjeyTzNwSuteyHdMrBeteCeEuYo",
  "key13": "2CYJP9Q1DwHgGwHpyMcLtusxmW3RDwcGEBZKuo1g92oJRdQAze1nxWkQHVjUjgyTshPovJqNE9B2jed2unqhWgwG",
  "key14": "6D7VKEwTVKRt6JZ9r6WhvfvuKV2aucUHMQ5TRoiKa7rKBbRBWXYzRPY1NrePT5dMLb3ZYgNghKHAR4DSRepiGhT",
  "key15": "5Jy2yrYKpeY7grv8eoNF7CuD5Q5gsTK3MgG4qPRteAQ7DF6CX8rD7jNisFiJ719P3qTwAm7LUZCNAe3ScZFp6KtZ",
  "key16": "3Q3kSnZrSr4j3QhsYDhjR5kQXrL8LNasXYA9KQuDpPDjhzwDE8PUs93hfALuskdxbpANccDhHpuA7GmVriRASsLu",
  "key17": "2qhVBM2WCYH3ubBx8Ec6c8TbfRRiuQ7cmdkbevgJ3d5dU5jX2XVQdaP4jX7NU9y3gkZjLfBTFBtVgUpQ7MhwrqeT",
  "key18": "ev52puPtgWtFhLa6MzXn3WBCVyBvq3jAwvJfiaBuAzVFGXA6qUaa2JhZtSLXis786Q4BvDNo38ojL2aD2UNC6b2",
  "key19": "2W6wEVAZo82qDVRAU1bC8ix4BWryvf6waUdhe8tzmJEN9TZMuFPFG4c6XYZCxq6tw4ePXcvsyLoc6yJB4aWXbVX9",
  "key20": "3HSqpT2TnSJ6t7anCu9KBDJWYMg1P2mysnuxRjLSuBit5FSDMXE8phpgbxoQQ34Ljge8LFBEFs6hvPzgyFk1TqQX",
  "key21": "32dd85GZPNBxJnq59jDHLq6MrbESrRTvuvVb3sK6mVmwknz2j2rchAhehj2i5HSKavJNFoknw2QiJRMyTZZqDYcv",
  "key22": "yxwmCBiFpHUnQEME8Dtt7dA4TrGcy5yyupFihesEFJqWNVeiWhU8BjcNVfzs5ppF9hqVgvnuyccMjREF56efM5R",
  "key23": "4aAVbLiPoeBwzbAVN3sgeJrwySiWFeKFpQVdTfxJdVCBG1jW234gY35cz8sUqFB5xnhgy82dZPwXwnNKj3WUnDkQ",
  "key24": "5xE7Ac4b9QbiT27sD3Jnxp8EguDvExeibB3D3VPM9ezFcxeDeKLLZTfm2assQdfv59tAUCtQa27qQdbqQhFxUQ32",
  "key25": "5CYV5cwrqW4ZmsZ9yFnih5TuzsBFbphtRtXo7ejjZhKJUPn2q3GuKSArZh9dkPkMtLLbESDKm9eS9qkuM8pKnm2B",
  "key26": "39JDP6JMSuTbpYtH97vCUiZcKmnQHQbBYcxhDAWxgPmzArpKgdqgRTdKfzYZimHBdhyfbMHuEbYJ8qeze558qsig",
  "key27": "5F4jbKaDyuvSnbPntm2EPXUerWitboU1J3oG25fdaeEj5L38JKfYTitfTx5p3kjnk2pETrTsGvEtSpVb1m1ZJwY8",
  "key28": "54BJsmFp6iVaaChngJrY6Ho2HxpF36gwonAyXgPreDcwuPp6A6eUwvntG1peaNBuiRxcsdR12LxgHF8mcfVDUjRS",
  "key29": "3ZC2wSSzLVjpvBYMtKmH3jA9AjMGU2vQdhcKPJnvKf1P9AY6upXTdDTBCKz5QcaU76EY5LQxE8WouE8kkAJG16iz",
  "key30": "5RApAWAitvP6FSViQfZqczQGSy2SoksVf1cDYMfErLh219L7ho4VKHYytNdm49oZatCwmN2QW84Vo7YETM5xonfh",
  "key31": "2VKwqrD4eeKKnntEA9Y56WyQRawxpB6comaTji9mYjVXZHfgLMnihY63zk38dNoX7f2VeCktMNDRK1SYPzxiK7aJ",
  "key32": "2LjAXPirPUiJhB1pLDrHTrnv3Cb8KTTvn6T4CF1fPfeze7fCcAaseG21hMvXXKvaRcuc7V5CBN6n1SbLuEEoLTod",
  "key33": "Zb3ouHbJ8bskcNpaqwMHDZ1X7DhJTqi1kGE9XMdySHpwyA8EbkWEZzMVLXx4RtYLpfupFunvVw8RNUpaUXTWbUL",
  "key34": "BmAU8SWDHjTmNgfmU9uuSD7AqDkzmJabsh9yKV1PLRRyhBt7fX17ybxzpgXQWcfz7Mga2J2627RLCmrq2wvohBv",
  "key35": "4RpSGuJBApqyvHkr19CAf8tKwc2mwmroYoBy3rsq4FqfwryVr7jrqn2p1Nky2KrrUCq91gzKwRpWTEUjHTgi1ZGd",
  "key36": "5qc7AJCPoRGnTg6GPwn6tU6htgpuRLqSJNgtMtkFgqjocqbKVKHaBSd1ffcgUr2yXjMmLN2qF4RkH4aB3JWzuxLg",
  "key37": "5LiAXZSPk192cZuh6tceVyPfupHxYAY5uPaTu86bqg1BYZWnVwD4jYQRmpCLmchNtwJH9qYFgvxhQfUq5fPNCKi5",
  "key38": "4wWr5szdg9ySM8QVgTro5FJQcNAS3JkVV6jw5vC3J3nB4EKmsfqqqgrY5ZPknXSTpmFZ4iwstynpyDsY28QUfjTM",
  "key39": "2QUPrTdSUkUR4sREcCn946SKv3CDrSENnrxeemg13Nbav1sNBWKBUstJScQufFZ8ezmg6mFHBJbMM9NdLDLdoyBh",
  "key40": "2R2iDg3MTaks6cufbiuvaGAnnthSSPFn9NXBMppvgu87fggkVYnnvninJgi29PWScVPr62eyHGTgeNmgGvqP5CEF",
  "key41": "4pHbjqmoaopktpxWxmhE4oUzkLYPbqcRamTqtyeeCtBdVuhLM8DG7kQmyNe4WM6QVsGTvJiV5E55zCwieUgzXcz1",
  "key42": "32S6T79G91YgxC6mnnfD56Kj6k5CE1XhjhhZitvKSDfgvuVZo7srBpM2xmMfAYUMfNUn5frRFdowjdghyRdtPBjb",
  "key43": "5fx3ZVusK9Aw1Ukh875aA7vr9wZYWbA1P6wArsmeLxzfrEan6Ltgiam4j7ezWwh3C3vBnwdSCXuxvY6MymaaT8Bg"
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
