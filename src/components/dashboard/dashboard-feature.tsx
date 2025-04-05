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
    "2srLvxNVqXeWmJTScfruCqyCAobZPksaDL3JpatY1nsPGjWCCm9TmvNCXpyEQpcZVFnQqGGd6ModbWh2Si7gcczm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q8A2hbJdZR2gQbhTryzwMrW6Hv44MgHFotUcGiWZGjmFWL6gwEf4RMUXZMdehvs758SX3izsraHJ1RbFPo3HgNp",
  "key1": "3uu9r3RPfXbxTp8uV6o5Amxtk5bggYJc3gL2bvXLAyGh15VTYCbyDnBw8FszR6fFpxw9XocyGxZgN2JK5ZYxdcZ9",
  "key2": "2gdWsDZiAfPF5ATx3PwRYFdZ4BQ4qxGq6YLSkgGUF5597AsbpaLuxyBCS7smjG35V6QkSVbQg1GvVMmjL6yWSJs1",
  "key3": "Ji2G1GKdJrR3wUWyE3XT3PoUiBvUr9J46kyfWgfxe4So28M32QyF6YQtpS2GuPzVV91qghTkHiimVrXme4iK5we",
  "key4": "31ZJLBZdVAgWFJFbPfZMkY7t5MUHHypSNExXM8kzAiTXpxM6o7d3wWHEBFvtnB1ydhHpAFvWMsUimAH7vqJczNCz",
  "key5": "2VygwSYA33DP2mk3e1KSPYxpLBsbffstRua6wuk6PNFXfiMipi5dWi6rAd4TU8Y9izRMQVxHcjU82cGkzU8ZtNqV",
  "key6": "dGkdu9qocAq5T5yLvAm3gLC92zMdjeSnrmXVjTgjkJwwouqJRnx2jd3fnoufDqYKCwbYu4pY6pU6JbuYc3Tjnua",
  "key7": "3QpptJUKKeokGqcwe6boamZHa8TvAb9aHZbzdAmjmMkR88Tby6s8ndqTcLDeCF1nfwWRnCX7RQ8zQjgiLhqAwUc3",
  "key8": "5R3XKqf1PJ2QYbeXsk7ErHaEDdHFPAKrUy78cfpaWwcqCtU7kWvRWWfLmLMkEWqYyDoxfrJXtLMUdUoCoy8mQrDo",
  "key9": "4thNH3vPCvsx9KjEsrpziu5FBUHf7RYJyfAULahh33d715tatsXutnY2c24qi6aJxW1yVi6huFUHU6eHVgq3mbcT",
  "key10": "3cWiL96m6zVhnoRZpACf3Mp8BsEdKQh3iZA5EiR99da8MyZNmAEPLBxoCYhMjyz4BKm6X6C5KVHgMXtRYD5DNhwR",
  "key11": "5aMZAd5ayiKAv47qmsD9WDoc5sN3qLW8fmPEfJnWrRD3x9HmBbtPT95ARvxuYGrmVFU3AyqWExq1bKGMZ8B7jDVy",
  "key12": "3fFhghpcT7DcQM7uAbq4e4WDd9wm64nRmFbT7eU6bchKQSEEboj8n2SNgEwXfs9vLMbN6DpHeD5yw2PxTVeoVf1Q",
  "key13": "3hPTfMuVkcqAi6Rrm7GN1ybBKr3EDF51QWvdXGyQq9aRbPzC3swZBcW6LizfuRYungmJ6ii1BQum3k4n5Q4vcCDT",
  "key14": "nUnzB6vyYBJrPaGGsMP3zoGFeAcHuK5kD7wBPxcRs35qgfCrCgWrz8Vneiiagq9nPvqdFvcuuVdPdsjXbH4AU8E",
  "key15": "5upU1n5z57WEYVkw4XmSgdq59kUzQn8uBedYrEM3drqrQomrgfDDqqYmpisbTAJbntTn6X5mux1CrXDjcWPzjhZK",
  "key16": "vcLsjrR97jDAeAunCgRkq5e9M3xrZEPz1SEso3RFAiYBdp2jtezkUZBfjiaoLD7tcHhhQybEjEcTs3VubFWAyL2",
  "key17": "3TtLycHJmbSzyuL2QmgzcsXkSbNsh6uAqkoNwcAHwsmfjzxhHJPGkeX9TJNVRyThf5eEJMHVvSDU7m3aWSs2LBij",
  "key18": "3GELJFbnkTc8h1cPrjdgJRkCzZJ4z868mixxLDAPA6NaUiCur75FTfyLRxvv9LqZ4SgsCyobSmWx1VJZ6kTWzmMk",
  "key19": "3Q8SgPvAuxm3yspMZ78dGTe9svzG4KPYhHDKxoDzaJXbeFHGUoBAKxv26kEbyw7RnV5rQkHQYpfUFtZFoinFRUAF",
  "key20": "MYciNYeM4RLcbMdRJheuUzphcUtgqKda8psb5qoGHiPhkUG4UrSFkyUTgvaKvnmnAcukj2BgBGu23VVd8GajA4W",
  "key21": "5dXyGQfFeLUYzHccfey1BNny8JVWeaMG2cT9gPepQueN4psY2zxDZmGLNgt33C5Vo8vAMVkp4QoLrKiAJDeEd4k4",
  "key22": "2ZA7XUi7AmKBV1mRjTy5YjbhE6FmGzRxDfWUL51V7o6HWmjmfWuH2WNAgTz5SEjv7gQNcHYjnn4D3cisnyMHZJnj",
  "key23": "2A196GQ5XcTmYEckCALkvt44TkXKxkrPGAPCSQyhxPcqSPhcfqdcJae419Wz9nqAPtGDRJntPHWEYHFi46MKXoBG",
  "key24": "2YwmMLgAJyQ2GrKZuhHTRZUnZhtuNPrWBJhjTeaDqqQ11gcVHN5hRWWrdpWgrScRv14zxFpTDQeLCAsnB41dTdPh",
  "key25": "3LrK4VYde5noLrrZEZjY3uyRDwmBwwWpPRCRDYX8HUagXAr7hCgC1qUwQ4FC7G7te3uf8zpqH9CHPQiqH2JQdDJq",
  "key26": "3XJVLBVEgBWQKQ2EARh371wFraFv9ygiw9sq7u4hTFV9c1WiEEUexNHoVCc3UdqX7ZSN7TBePwt3XJgKRccBhVSL",
  "key27": "5QbaqvFE5DjfnXCj7SZNnmix5B1sdrpJVnJqR6Rnqn6kp5skza3px9FuSXbB4dbXUYWYmBwppNZG5Y7dbBWkYGQn",
  "key28": "2GC3mG9z1awYbwiZPB5byUuZbUifiUnzADmRpw142y1fFU8fw6ajS4gEPb3LsCJzqojjbHjRTs7FarBAxAtgfCE2",
  "key29": "64LJKgUYKwUk6K9mJA6FiTDJmQ2i86g5UjNg6zzd85HXsrgC6Rc8auHH2A6iphZCv6CU6LfozMdmvNCZS9xFfaDc",
  "key30": "5AViVHJkzHVZJtnEJjrFpiucf4A9wtWmbrvGFKihjU8U6aF7U4bR442dTb59hKhuXevCrVphGdSrk9THoBRT1iVu",
  "key31": "3M74UYas2qbx4fPh8DdG23PTX8yYZeH6SZ4rCbsL88RN6FhCSTm5hazxoSc2eeZx9EouSLkHDEoasDAum3zFChpu",
  "key32": "52tawo88pGknuxVskT4S3csuXukgkZQjsYip7Ef7v7mY7KpxkkF6Eau2ko3YAvqRLPU5PaD3UhAEngyMhAKZhy6b",
  "key33": "4oYfB3QR5iCGHueg3YMDJ5m3r9aqmjyf44ADkz6ayY2NXvdRZzDoeBffHMuA6kz1gxNzjQCt7Bn6os9Uyx2k2xU6",
  "key34": "Lfit9vnALVpPkgeNzMc3KdF8MkrLSdQFyt19QLsjmxiUmi4gF1Etkjso3Cdk6YptCfvXRMPShXh1fNgnMrCKVCP",
  "key35": "43x6GWLvw7B4Gt1RFWJmdxPPUzGFPfCaPtsf2M3CeAoLXWyMAkbm8ssucqP1ZKN9xx4eR68Eb38siDZj7eBHZgos",
  "key36": "4zN1UNP7EC5Q7qC26kUCWXdBkecXYfvJZU2fDxvNPMevnnwvA7c4tShV7qrPJQb1y3EjNg25jyGKugCY3wCz7E38",
  "key37": "5813gKepTBt6R4AXcuPtBczjmMurp6zLR9By1c11VeqQxSoByC3xCNUEBWMTbSuMwLMwEoTBuAdtinRj9L5wiZc4",
  "key38": "2JR3UU7F4osyHKEx2Ld9bWN7RE9jXo11bpZSs5BgjboyCTjgtzYCqEhkrqVAVSF6LQro9ghB5Pc1dFu7j8tQ1swa",
  "key39": "5VNd6TCXSW5KRKCnUmy6EhNm12xXjXv1ymXaGhVXR3QTXHreuENVpG71DRJ1qttkLqQv9wmPNLqsF8VeAQQyDicH",
  "key40": "2LpTKQdMuySBVf8iMFEss4emjQTSBaLuS2eLa9naMkKDj5UTHNMGzXrobmSwFctM6whYGbo1M2z7p6oyfFz3wue7",
  "key41": "3qoEDw9Xe16767dU4SWypP71uRw2ZUNVYikgnKhT8fQkRnS2QHTXnYiGXP73bkZz4xgBsLDLsQcrUrP2KM3nUSw6",
  "key42": "3dJMKx8cJHKMvJ7hzf7u3mermFDRaE6dv67rkRojQUQWbpwLiTUjDF8XscB1yQ4rUByTVGBXC8oe3VWTaArFV8ed",
  "key43": "2PaEBSkKd1WJVH178Tb9SmrcwDFTNsyQfPLfF2NrwF7NZSYFtUh6Krso2RYhuzxJSgSPMQcZkfPVU2gyBvTYdEE",
  "key44": "VUPGNzVYbiYp3U3e2vryciJr4FsEuYFKc6GbYdjRhd2qZDoouP4zTFsia5gZYCAQsyGVRqM8j6kBgys8WCNWJFH",
  "key45": "3BUo6cLXTZQp1tqa8DNmFTg8EaJh7BGzFJjFwLPas1xhtDdecbQddcy7sWR5nF5LmsiZdQWHpTkvXQ6tG7Fj2CjR"
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
