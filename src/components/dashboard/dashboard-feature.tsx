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
    "4QEVrXnMFcdyfcxLu7oUyRAKsRoELXBfHnz9Vxk1Wgbv7MpyK6cABdFe3JPZcGhWB87DUMRDexUBvpC4eMq1MCxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q7gZCZZHKZjPeKuh4v2LTosMfm4qHJ3vMXoHktSiSccThFKpsDR8wwAVJbgeQKpwtWZDcYYh475pySXNWhrBKJb",
  "key1": "2rqnrLmFMR4hxP26rwhmdfDHC6edoi982M4AjiW6pYcka1yet4Nr7psAgxEYtBmHzd7xTiupQPWpVuwdztAAu1Nb",
  "key2": "464TDMZbzv1PXGCRRB1kmBndQ5Wq2Li1JtBp9Lmq194A9jcPWDoex3thZJ8kGFXE5SBmoyPQn6hHrYJeRCUE5yjF",
  "key3": "Yx3ZvsEhiDa2PsD12AXGeiJYBADJ8s9R8C4oHfSLPxXE3koqVgHHJunCMEA7C6XBf9zktMpGvSuSHKLj14yzNKq",
  "key4": "4Txp1JdeZZ6uf4Nh2LKcUWv6efLTvkwh1Q3DwfdQQQtMU5mwtcnNCXqyYr8GFTkqGn5NQrmrezoUp8nYpTCQi7U6",
  "key5": "3h7NYaRtrjnLj93naQrxRRH72Q3orobpF1ZcwuHyfPGC5tJ7uW4jLuEbktjqDw2uJ1V7fi7tajUG8QVdhq7jt6ej",
  "key6": "2rEnebj3uB7jnSmReRpk9EbynnhXR7ppvx3uHchU9Xpw95eRq641X3PAHnAUmzqrghWJkbdz4z3HY37tBn1H8iZj",
  "key7": "4XhwuKvL4E6JFoiYidDNDzZkXLetHmhJ4epb2fnuHZwKARhyCpvzHSfnBCZjT2B9c7ek94x9Mru1cMbHUrz87Jdz",
  "key8": "5ZA4eJ8SvoFaJUvxS6X1go1qAPieVeU8Bp8kTGm1H3ZEEdDbDsxjgJqNiHhNFjLbRAEoAmM8xa34TdFaCj9c5Y1k",
  "key9": "47PXX54Ki6APNuuvmhTmTcWwfTCKEMLfTVBEBJGx5PkkFfS7ZUozHHVWUUsdDQH2RC6GW2MokbYb7EHKRF32qXr7",
  "key10": "s1iEEezdaCSLhELGTHzY7DG3n8iWZdYU3hS3yfAt985sXfeTjws3QrJyfyP1AXkT5WpKhEKpJHaSi2uPMPHcahh",
  "key11": "288VvjHY6uiNShbWKZpfmbeVrRPZS6wDrpiw9eD4aB4AtCnNP4wgP9NeCtMbTuS4BgPQg5kxZ2bd7XdYsKLuXMbz",
  "key12": "5EjxhFudWeP8WXkVUJFVfxCp9kNvKUd4teUsNnACChgm5XmZr9sSfM35scQffY2dLRFjbct8TuFsMg8V7fQz91jH",
  "key13": "ia8defSD51wXrHbj3KHum3Te1QQnCDjFzWv7Z27VRt7keVQhCVhLhimU2JzrdKdaokCHT2dQ8S9AJyRjoqyj35o",
  "key14": "2TbqgZMFBdLUCcSEhTgY3JMnVMg83JiYG8nKmWbu9Vfo971Wy8DJzgRK1HnLQ3wPAn9kRMB7EQ35mbBhA6Nb6xYD",
  "key15": "5RN4Y8n9smdMztYCUK9HrtxH5ywck3X18J1Zu4kcYKG1KG5SaeQHEaRiJkiYgLUj4LFusKQvR6xW2G4fRFnhjMa5",
  "key16": "34kws7ZCs6DCVMGs4UTQDgrbQAmzgxcConpx5gGBXuLfTRaLzcth8Yi38vPQ1VEuPKepP3Z7BvHLiqXmWdcwZCQt",
  "key17": "2c87PgCDB3p3o8BANLUzLrJmXZL5bpnqLkww3eJNYUb232GTQEH4HmJy5EBnc58Z2ddS8avPV9duz4i2rHBFYZsv",
  "key18": "4bJrdsqFg1xueHPkBkGDodGNAkWtBZiJJ76SpYPMYJ3chT2oyHQEfEA5NCvmNuMEj299VwxfHzrWwGjoW7MD5ePB",
  "key19": "hXjHrBAAinPN7WT7fnRPawvRLcknpPhezLCqBtQ6Ctcmm5u6kapTkFMayC2EKYHMavPfpPNJo6oZfueNqSaEZ5v",
  "key20": "3tRKJT9GZHAGTWWir3VuK7CVQ68a8KpukLCaFVrHzo6jsB4zuVYPhpux1faCwPmHHUBgt8xJcd6eXytM8MixbKGD",
  "key21": "395qz1QiNs9VZ2uhVz8UkMDnncxoR7iY5Wp6eaowpSagsKrTUppYmu3Rx9uvxqfcxKrABxPV3tscUtRZevrhkEQd",
  "key22": "34maWRt1gDF8egUsTEraTb52bUUvCep3JGm6UH4HQtnuLqnJ8b1REWQaLRHhMod7s8SHn7uXBdArVgrBfLLZJJ4L",
  "key23": "3nZRM2vXMPiCedkMB2FGQZzLHHbBVgcgF9ji4Y2oXZSHx32QZ5JARzTppiJ35ue31rQUh3upJxYf55d2TZXP3zXT",
  "key24": "3UJA6XchVHigAtSqSbX3QDLpa4jKxx42RGBJfwLwJ9mfuTezGG4fmWySPKaXrcHoECHRtUa6y5ToDq4b1XBEnnah",
  "key25": "DUYPueBU5or6TyondbbsoWYmbEKmxLtvLE7j71BPaJpkogLN2husQPQ1KEnNXnWjEgyYfPeCmpJUQz3xwDs5QzM",
  "key26": "3G4Ej5JNipKRubHW4r8jW6e7dXCt4FpauZX8iH8rWcZ1UNPC2coMrN6xwBVMAQbdAcLzuPAHAdXuRWHb5PdXAQma",
  "key27": "2REoQ7XYQLWhq1bYrKUje6d9T5fNWMjr9m1tSDYFA9WgP3omGgNyidXn9Bc2oS3PiUh9XHMpvCKd8ZWCgvwLz9EL",
  "key28": "66fUVTGXZcZ16bNoWHAapM1ubUtupfrJehQPwHmuMDQ9ssvXTZLCwPo69vx3EntcqDPoV8eG9KAGLfbLSuAZvsNf",
  "key29": "Q2kPKWPQnXae5RRD7smdw7hwBcagCqwrcY8t5aQAc7QvCzi2z2RUbeXg3SJLCChVDs9NHdPyWefLPGgZBsVCGWF",
  "key30": "4kU8tUBGCzsS87gnwgPWG3Wt99iN2w2tmxCNgR4kAPsoHFhgibzj11bxFWPrzBrter46nUAEjGAmmVJ3tqSSuCUK",
  "key31": "7BLwyMwQtwjZtiLoMyDVbmPmfZUxPNZNw9Gp4s7vwiznt74EwwKarerXV6iXDJ1mDT7eAYzyFXJgwZqUgQfbCWu",
  "key32": "5MwR8hBoBLz6o6e82VonpCdGhBHNwohc8JgwDBCiFKUGqw3QRqa6kaUr7UCspgCNyF7Hwje14Y886BYa7xh7FBh5",
  "key33": "3tP1mVM7Dtrr6wjcrUyebakY6PFqixEiQx6LXqtP5oDvK45WPAu8mAnktHERaQxgQzxmFSaZ5REdWKn6xtHYk3RV",
  "key34": "3QdVqanA9ovWi2SbMvD29AsYdmYMDBBjiS3p9YUnyHHEX5PqpZ7zKWZxoM4WtY9J7ATnZpStar9oLF3kPNvgBpnL",
  "key35": "2ieKZSTepmpPjTRNwRWg741f8iVGCdMeacHfCUyeg1VAZbDQuxyMoAd6gXkBMavnNgihZUqdgxKkFV9SJUAShs4N",
  "key36": "2ouQ5vDknWXXPuVWAPgJDGNGMhL8JmFdX51LrVg67jBX5wYNfpowjkgevxzMonKXzEdjoRQdqmidCDjXiYLRHPPF",
  "key37": "2oZDEMupwc4iZVD9xPHWvbrKAAuQt6QHQVoUgA15jWBeGAabRWApVc2NqF9bgGNjYYmF99qc3t4AxU5FZXL5efWg",
  "key38": "4JbjR6C79RqDqzMD6S1fo9SvjjEnipDP7AY4yvdU2d5jm1MfZdy9yMcG1ZMkSj58xHu6crAKs4iMMj3fpQQSEUWj",
  "key39": "BCR1gAZ3LbkG1TW4598ZJu6sqXXrf4mWcQUvRWXDurHGBmBCWog5PkmZAPRJ3Sj1yM9xjavdWTQ5wRHugsxD3gk",
  "key40": "44n3BCt16xXL73Kj42teqDWn4ZMZMZ1yYQwH3M1YJzCEUZpBNoYVpXqrKkkN6YuwsGnc9DSR5fHbqLWYANHbpBV8",
  "key41": "4766hXMUAD9EAg4WtfqkqYWEDH2ymNU2ccg55HQoHRpYi9Lx4eqeUKL8nPmnswAesB2R1bhG6vMwb5LYvc7zY2EW",
  "key42": "5StfqotD8Xvjm6UJDxaBDztq5Pq4Xzr928ULt3ZDG4FqkdVhoKUbJxMySmNxdqfq6CuzRUokDFPaFVer9ECPb3Ju",
  "key43": "5xgRsMdisXrvHDSMB8yxydBf76xvehkeqxbTEpeqowDNcPmwc1gYHqheLsKBzSgjN8ePX3P3G1oviEPn3g4JA6gw",
  "key44": "ZBWNGmx3qX3aZgASEHDHFZ5kvJqRq6hWtzBuZ1SukRWtFT47U49enwCaz4DsyW9Mg5FNHPJB91Ngt5DTLpQeDbe",
  "key45": "4vzZPZrWMMMmawacqkSxpgdfBW6iVrMbyCBHuQkVas8HXoajtVeGWfee52ZNZo8f7TL8jFw8T4a6yCKKD1iCWGYe"
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
