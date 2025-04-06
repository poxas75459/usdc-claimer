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
    "2MxovMdxy1vYQnyEuk7g4zKAL8XTV7VXQ7Vjed1PexYyHbHZUgk5ZoQ859a6Miw2Me2Bc6XGJNgBL1d7APWzcPFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iUKPN6u4SSY9nvmeJVQb3WDdk6pz1DYFYbPt6R3hWTgSppB8fbkVmzYEL8fVzFCuVwj5YR7U6MGY3kkf89cBDe4",
  "key1": "5bWvGgbT4uApYzPehN4pwnN3EmjapX79fK31rmavczjXPNhKVdsEuEGorkdqyYwbooetB5KLh4iqi3LeQ5e7g11e",
  "key2": "5Jc7WHNMBJF3W4xJiwMyuzzqpM1LYx5hwQccJZYPTzCdsFMc87T4ug5mkkLejveGTmfdBxvwj3UYqHW6cLBxTVrW",
  "key3": "3bAZ5A7Lb4ejUsTqWEuofwgST9Lp9Si1eFXfxApxWkpkfwgQieHGp8wqGdxiPGr4QYpPutsrmFuuLgoWkSFPBm9h",
  "key4": "2UkeAg1EELoSLfgn4QjY3XTC4X3t6ERHYXnQC6bpApB8arWF1ZKRVbq9wsxDgf5MNzW6csXCC2TvcATzpgBdRHjY",
  "key5": "2FViNyBDN8rzVFZ4B3tko7xydEuTTmwHbLqxduUpj6ddiV69UTQjCBDvnaxr1hvWPxAZBnntqahwmr7FPERJs67",
  "key6": "5qgMd8N7be8Xt8c14tyL1PajoDLbA4PhwQY8iMpdhTge9LJGPwjJUP4vXETsC9mkDszoufg4378zUJtokc9NXXGB",
  "key7": "51tS3ytWDwrdsuQiZrfeT637UyY4Vfk181oPjYP3fw35RSM4FrmmUqjYDbiMsPoF9WarPZvxjR9ekR6TWLLNuRmq",
  "key8": "3Mth1iFu6tJcXBCvbH7uJCDBhSnHLhZ55jKbXeBKCTKG8KsAoqMgYWkbTdTLnzKkpFd5yuwNu3UFvjHTVq63cohS",
  "key9": "5e6hgQAz6aUgranbbDKUSZdgAE2TxxogrdvbSRmHZSPfr1KsyXAzBxSVK596MkCREQk86Ye8jccHCqnnQGju4edQ",
  "key10": "f4asJJK5kmeAof8HNkqZNxiPbxo5LSNEEDbh4gxr2QiqXTmwoPR22mx5GNGD5iyBVcEYq1CBr1WSqDz8r2xdZET",
  "key11": "3dTPCcA1GAE4ex5asvFxKT258orK9mY4VkhpGQjpd35csMwXSaaGWtpcECKMGJcYg2HAfy1QwexiooPdsJwZZLS4",
  "key12": "3hvJUjkpt13QdFZnpmatT7dZUeCPS3agvcjaMALwqWMFvnQx1dZmfZTYXArobfjBZribvBwUJ6ybJiMkPS7KCyHN",
  "key13": "4BUghbfFKzStXHWquozx3hM9kw9pzGhcipQRQXuPTEm6hRrnf1GQwTZoJuge2UCcQotVrPGLpPcL6LY9Y4SfvQ9u",
  "key14": "xf2NWzMfrVZSPZnVPpqU8BdwTHpr6cr98NzZPEP5SLQyTWqMmm29gRiWtwq7qZ5kEWBnXUxPPdfdH2ax6fEmoEB",
  "key15": "29hMdF4HuotCejATXFHXvhLAd5dDDe7LufbuEawqebL8jC19PycPvwhRCbShQanxmHbXSibVGCM2sDw8JKerUP3e",
  "key16": "3T2cgbvqGDLuoawMUAjYuPPL1HMNeBAymmYPtrEntfG3dF1xVDJLaQaFEQW59uMKHiNx1pv2rPWRBu9rJc7DTRXR",
  "key17": "2fi2M2Gw45HrUTuq1vqF5hpLzXTjrTQmvdJ6Y9Rn7FsMzEArRooZoBGCbYAceFW1fYqLupR5VhJnBtens45wb1wU",
  "key18": "5GjFPL5LiYNTQFLoXucLFdSxqznMKnU14nQFXv43brhbt8PtWKj2NNhLfrcsFWF8onAhxse2DSbLmzwSYrpv7PsW",
  "key19": "4rU255cGAxr9TmTzLLS6M5yMgUUdZsaZLLvFjsykqoNmBeL1KdbxiieVwQELLqK7vzpei6U9fcH2CCBA1U8UEe4b",
  "key20": "x2kTjLCrbBAmJXT2aALRikDZnCYp3mAZ2dDQSGsNMbC8F81QwF1EU3oc7hyf7qo2MjPM8bEumiTeCjsGehVb3Qr",
  "key21": "2RxRp2AJK12hHWMYNTGbRDpQDTsibQrBYETpgwHe4xR5SaBuy7wNJNYuK4rv8nA7zWCHEdre6ZdPtra1tfmTa8Zf",
  "key22": "3EYLaLYuEdapHcxyb4r1r7reB6XtpBEF9XsfwTVbbfV5kdLaQ1N8hawmYyP7VsQqztUTV8VecYxKbajGa8EdgH2T",
  "key23": "3aofR3uXC5QpDFbCDvEBiWSZApMvsp17obK7hB1ZgfFyF6d4kt3tYqWV4f1wz9yyvwRaTr6Z9eHEA2bJWKw46WiN",
  "key24": "3nHiRpUiGttsjvhBgWsVrA8BuVK9bUeJREV3UBv9f8AdNuusbiyKcE67fEYboGQk4A5ACe7kd9PmYftr7LmabXxZ",
  "key25": "26yXHPGbpqaQeFgiSMpXBf9hH4nJ7MkE6Nr4VWqkhThgTmtAk4qfz4ZDLADC4DK7PPwfVb9JJpgMpKNXxgeNCfT2",
  "key26": "61BzDfrWUbExYPnFTffcdpubyp8AGRsnAPmkwaybSG3T4mYfgSfhJnNAoQGm6VWCwq1XvFtjMvFSdkF33zpCQdZZ",
  "key27": "45UV4EiNmrjPqGRpaRxRGnbVBx1tmArjZaPNXZ2syKb3b11fgjbqkLuQsyCsLgaWQZ5kHukR6EHaRf6dYzszeQhM",
  "key28": "5QATUursdRzQa7egNwJVAE8ohfwNDx1iWqKkTB8EJHGN6zk8TSDBzNdMxGx6QvfHNXkj2qzRKAx51baTHQ2wpgGU",
  "key29": "5bDhmG4rs1NCBfsPNpr5kBEEa3k2Yrh4rS88fF8V37pM6maHzsrqxT9mTfAF326HmbsbfDts6hGpbvMQ78dfcKMt",
  "key30": "3d784D7z1EUs84LyieFRwpVpEBTRZN3cihD7pr7wVFistwPpLERXyA4WTZExonz6KFLAbGV7u5kqZKJTyYgbu98R",
  "key31": "3TEcM3vztH9EXJD2s3GhG449WVWgNe7ZXbm9QVLPp77eeoqPdVC4YCVtxJfW4fgJHtz8TqdEMHfzUWCZhKSciTJU",
  "key32": "V1HvhxkX4z4pE89hJi5ZR2z92sp9ucQMc1xWUHaPQH1TK5iQLfXsVDofR4PFfqF2yLZQjc8U3zBfLZj2rwF2jyr",
  "key33": "T1NATHGQUBPy7xxhwYcn2NeKvBqKVwmrozzYiQLFAiCGkyMAnmRNvvm6rhUZYakR4hPTX3Z8JAZa5jbu53KpvfR",
  "key34": "W6JFnvvQFpThyhoowYXxX5iSb3g3NP1FBe5J1rDgycLTJupfNupLbfEeANXdAzgrvv6qFJMGwKwW2LrYx4ddp2h",
  "key35": "2ygvUH1FV2Z2QjwJFu1jzX2h5g8UkJvRU79Py9eqsjfTRo5XUoHGiyoXFiRKzjaZs2Z2En2qJ7jSoAHCYEBuciYT",
  "key36": "3NQC6ABukVzdU581GK7yCorJzJHKwpftCbmtv2s6BmyCuTrapgmpJjTt8hhM5QgewCxJ1vQrrUk3QMDnBSZ4NBWg"
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
