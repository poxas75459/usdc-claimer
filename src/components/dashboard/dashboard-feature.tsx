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
    "4tzX7p4LpwsFM7d2uZHj2cH5aUu9x4Tkksyz1UXNXVEgCttszX7JJZNzCTeDfnfE3QwLXYZaaTyD9B5ix3zZWerq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X5dUUTKTFRQAt8yQyuTxhGanWmmBUJwqDoj3M5gh9b1buRYG1qzPwoK8YpU71Ni2RcuzXM91x9VrExRfdtc13Xt",
  "key1": "2SYYTNdmtAhfQqAiMho27g7pjJVoNxS46E9RK9dAqxMjwqVs9TcszQgWBHH1j21e8NmLsnup8zCYHhPHfJqX4xSJ",
  "key2": "56AfBCe5T58nfAVkPfYNGsKJyZvVjeffG2gUZuYMTJz6dkZtg5wXciv4tNqzeLLTmm79ab8uarHgpuHfpUai2Jty",
  "key3": "31cBDWRargYCbSzegsUdiWYo6FBCpC254uvXTW6hc1DcX2wzWqkgPNqUYoaznk3Qi6MYHN4VUibasfZTodtucGLE",
  "key4": "PK9Ytfnf4at2Upa8TueWp45UoYmgzsu7a2QAc8VBHhCnx9YXboLUPVZZJ9MSnXhnLKkJWYobf7auTkChkdk7uWP",
  "key5": "5RVvg21n9hwY6bQRm8zQt2dyfE1DcYgMNgxQEJTeoFYqw7jJWeo6szeKGC1DTQVZBc4jDyJiKwQERD8sVukUxizS",
  "key6": "5DwQfSukrcXwnvh76tYTHEEfchahmQUGduBKFdP9sWxe9UYqA93M8SoYyiGw6WurZ8Q6pNncsh55EhoCT6ju1dwj",
  "key7": "39YGVcFSfLfhsrFzdFQDvXVhUrcNUNj7nXHR852NyjzcT9CUovC3JWWvnVTJLtRYET4eHqHXz7NKBvnKrP7xZRJD",
  "key8": "4itbt5ZtVnBiZppe96M9FCJvGKXX8omAZHfRQqCqK5nkSqTWQ6vyJGpb54EKA7EDQvGpqk8UbeMbmn2QzDN5A8rM",
  "key9": "297CAaEk4Ny836KuPxQbHfcy7Z8Q9hUPmLLA65WKzTG4NY12YCNb3EFPKh21a9Rcs3iFQQdrVoSPifJgTpoq2Mzb",
  "key10": "m7zSiTMDdDnxc1gPeukG3cvXXSvWuzNRimmVEAzYo3VDcpvVsRqueNVXJPPDPVzJ1oCpfjRRgcifJD7tiXoZydZ",
  "key11": "2vaaJF4q5h2kQjRhzukgWnSzfo6y2r91cGqYs9FtGEengvPMrtafpCi1rf8zvEa3DV4AcDac1nymqZF4i8n3YdQY",
  "key12": "2D5CW7LFRoBDrz5ZcbrDzHnpvePmneEQicXts6w9FonWs69S4S5ZXGofEpKuBedmQCqMVTpyKTC4JtetJfwgn973",
  "key13": "4FmMZ8Kb1i4V57yaMi6YGTjLMnCyjkwPrQ46i5VGRxzstXVtK5PSVYg2BaCDBFoWoWqr7jJeFSHFEZQJTNgPebRS",
  "key14": "3PPWxrRezYZJJ8Z1VdbrNHNoYMoNkuJTpvRCfjMveauEtYEZp8Sk9oattd5ATNEqxSo3yLivfGCPE3krb5jV7Rtt",
  "key15": "5YRsf3GSfaS3N39NyFBLMocdSKkAKMuEAHtJCVDEMc1xVB52QjJxCYFJEm7Y8NNbLKdt5LXSvufXGfwTv8WXE1jr",
  "key16": "4yscrnzqN3Ln4dAEkUew26GGbx775QPuGpuCFPe4ch7WVCmsesjkykJSDBwQbPaDSXTYjwUBnwVn35CXAsiWb8HJ",
  "key17": "4DpDa7Tz3srEpLmiwBF8R4LNDrVFha7hS9dFAYmG495k3wWzBzqEDYUiNgujAnutgn3RtZer9K5pTiJ5iV8ydT9c",
  "key18": "3SkYuRwvkp267JV3nNAG7rN4PaqE5Hmk2MVHG65m3QjVJ4oQSHjqsYPocmvHUiShMcEATk6d4bMT3cD5VfdVK1fu",
  "key19": "5dDrsvWCuCVXud6sTEyjqLfWRSqMg4smRiYt4vTM1njAtn6QmkYMAkR55PoA82vfBrdZKfjXc1yWaS6fDr2QyZAQ",
  "key20": "48AhAtAtQHZRxkUUxVJhtVg5TYnSVWknkCG4xJrVBFoN9c6gnXHNL5Nt2NDSWbvL5QhhfrCyPQD3SJGdT91hWg7G",
  "key21": "2vfe1caDRRat4cVcWeGRRmt4P8KKxuQJNc1PcvA526PB3FWGWQuT7GVLGSSYc71jSw6SshKXH3xKWwX1A3qQzuuw",
  "key22": "58QTGDo2TKXMUxKYZQFBrCHSRHwXnNWX895eB8DTCUodbK4HCsPpX4ruw1xgoV2stSjBg1c6ELoAZjfnGhMX7Vek",
  "key23": "4uchYhkEKiwHtmp5E8zKxUevzht5LJTAvqk8AR68Z7CVY363QgrBbRbLtaAbCtxTwDNVhncZ4Ufmau9JDyXPN9ux",
  "key24": "4PHTGUSHmGhdjDnumkpa8rKu65EBu7RrEQPTVdhVTbik3wEeHsZbuVFfEFADxGt8myrcRdFXzYwUrHs9jXSKNRXE",
  "key25": "Ecaw1CbJRStvHJzG69AsTkzd1C2F35VptBQkwsub7uYwcwqCf8PVE2fTAuEDwVvEj2NQBZJXUxfV9DxVm2H7uey",
  "key26": "Jyoayvife87dHFiyxVXuCUYiB2GCs2qkm7TfK1VRjB3RSHjeQngY9RqiEJpb4MkM8FvX8FsnLRupcvPdEyEAWDH",
  "key27": "3G2zCP6HPU5cCuvsRZrusHu1mRXBmA42ibjNY43x3RgUBpNMGQo74uNXeTC4kHRggaUj5oqF5K3UV6WcEKwMPvsF",
  "key28": "2WRkGcW2qypog7sC8xYdPPpUnuwvbnCrf62qfq4uucSuq51pJuNNp3QpQPVvdqF3UXFSes7ShkyFDT5shyPGcYAd",
  "key29": "4iHhc7jtqJFouk6JGTZ48CczijenRTYqBvYBXJVxFVWozF5kdGyLRbmjmcDwZHMn1wp4W3Pp4HpspjCmPjgz6C2S",
  "key30": "4DrhktJmLcNmhrp7eFfwC8TQZ7wqtLoJf6WCo5vVWY5Hcf7rJJA5gq7CeJGo95brkAx6GjCHdVJZFdTg8HxDSXx",
  "key31": "4vuPHysWyswqEDt6AMF3vULy4AKTNxTq7hxSCuATMa5KwyGga2R1iJeKtDaK95JN2mR7kDaEX1kmCUFrnJNk2S4r",
  "key32": "4HajyE7Sy5bK4YGgZnis4LGyoMFxWzsFQoAQF7CtC4XAKqCrBhyfEZztBWv9cCuDBbEztbQVW2jZguXCCHY6cj6t",
  "key33": "r93fLe9FjfJhcv4wsYAPvG1mXoKjJJFbv36QsATTgn65CCRB9pyDvNBHhgB3f7umvjkCLuDrhic94awwD6Xy9EH",
  "key34": "2K6jZPyErkzf1wiXzxywBgxBwp3bzY6namazubjDgiWXo1b7cggg83e2UKFye9oPz4RK7gSZxTyEb4TU4AaLzqyD",
  "key35": "4bKftWU4MyC3RcE1AVgc6rYCoY5UH1uoMtks9Psct395e6vG4Aj3Dzxg8yHZxC9yVbewSj3wRdn353eVeavZ6Yz9",
  "key36": "4ew71px4U7GZuQyidXjdBRQZhjo2xbpDftSJag2DFjMtgK2NdxxFU1ZF3NBnA38ohayVCY28FLRVNBABriuaiNSz",
  "key37": "3ym5Vq5gb636v5BbG9nJjTdwtsxYNhrfvT3peJpqRg9ZsCsJge6CXuJvfVqfYFaQzfLF5hLX4DJcoCAzQAjCVsbu",
  "key38": "4FTJFsv5pbzgmVKGTR2r6TAgTxXGC4W27dJFPrjf9nvdB54uYnpss83VJA2TNVa4teSNxnnhgDiWMnRFMCvnLY58",
  "key39": "2a6zhehfs4sEu8qPzZhJ6iSZGez8VbBN4uHjf9AUud6XYKggyMAgMLhFP9aaJtRdiHBjse6N5RoSAowvCZ4J7Syh",
  "key40": "5LtWcFo9xy6Y4MBgzAMnKRrHgV7fwuRCwFuDoufgPe2VpG58AheN4TeJ4HN7uJtDF7DLR6JoeLo1ZEyXf3rdJoZh",
  "key41": "3nS8xWakbMj2bcwBNFYdk6xmbEUeScHiczz2Ty9UCDVu91WAuxV6qp9H3SXKaMx395oibRSroLA2rMXMfrCjabD8",
  "key42": "3SdJW3ZqoDf87jMGwKsYy4RDMBHep395ziFsvhQqmgkeriYZYRsMcQsgfmZF2A3f2QHK1HZBtptEG1JvU5itwETs",
  "key43": "4TNgKtWftqUumuidSCLo3Q9bWxCLTJhPfnFdR98MTtp5xfhNxs7jZ791Ac9n9kzRuoFUjzhw7i8XkmbSLPnxDopx",
  "key44": "2gzaXu59jyRAXeXGCXoHJxAz3wovQbSacETXSVNUb2mjNqonC3XHXc8tD4QL1yLkTofpNjaDhFk5DhXtWR5ddAtg",
  "key45": "8nQSTKxVTMATotuPpN9jYkaMYNwo4AezcKZH1c7fQ1EX8ZCrEzqWYDLurndHyND7z6P7vkpGQ1oYX9THSAPcJob",
  "key46": "ucrtK6QFovsM1717gEjQNDVJC1Mr4c4SnEDspcvMjFc8sWeguVRAfNr1vodmoemtwvQBMgSJGBATfJ3DShiEKgj",
  "key47": "rFSyd8LgZgv4Q8vXfNXtvcv8cXR4eUKK6RsgLP8jn9t2HykG1izqCRfCHis9bGiWj19EaHaDfEqqo5pc16J1Agi",
  "key48": "f8TDu6KkwHuJbCWvBiWJvHchfZmqwAprd2P8fiBKQcY1s7sAQBS6EaN9FeT6fQywPu5J2qLHUznCsMBcRzECnk3"
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
