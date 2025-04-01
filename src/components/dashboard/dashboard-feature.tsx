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
    "3Mhf81QJhYkQg2wEhDuTjpy9TNJHXdRT5AWi9CfUgid8UWhVqCWaCHf91y9zqTWBQw6NGZNbxPw1Lyr4fvt1rPVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35uZYtWtZ7aZZ8wzfvUFdncyhXZ1yjp8QAAsaec4tZw2Pm72Akma7xGF6JhwbYxDfrxdDCYvjCMH8zyjgNaqouic",
  "key1": "wQiZeanKVN3xo6Qci6hi9wBNhyg8npdteoRGMPdZk3jSCgYq2GQ5bCPskqUky3YCPB6pmzQN8xCUV4A1NiJwetc",
  "key2": "3HMyWkYmhx2AJdmaFeUjnUwq1bizd1yCiUq16Dv8nRFvwbXimQCxpkum27hCQMHP15RcTDvFj3Hp61AnRxFSx4fW",
  "key3": "5vurWXjfizFtwUvWUZNDkMtSTwmjXZtzi3uiHkZwjRACpJQ6EbnMQQguvQNyw3Ut6zYKbRRMLGdgUBX4fKi4Jd74",
  "key4": "7YaR68A3ioTXtBkYbUh9UUXxSwPNmxSVhyhpgf1U51BZLpnnH5G48a4p4KTautypfLBSUedeGtnhdPKibNBduaN",
  "key5": "2EHHN1ULrN2nNeVu2sinyUgYZcd6icH7RuSP7NkJpLA8JGbaztZqUCaG19aPzMEGSJ3qLNFnSyr27RnNRbnFiNqR",
  "key6": "431nDLw73rzSGcQHAiLHwKZbvf5SjhRECeJez83JDRw43H2QnEwGzhN29BobZag6BMCnZsqQC4Tp1VTr6PRxFewV",
  "key7": "4NDkzbXWzd2Cvq37o8WuV7XJp88jh3EBW6sA3acx1SAXeFn8bB75KcGtEDPZK74UzZdW2jofAbzauVwXi54Lwypt",
  "key8": "4i2TwXdXSv3BReCDfNCgTbXYVsMcy8omcdwaRTesi3vcfQe4icqVr6Usrkq3Rj8Y4wtUQeqR4gXHFFTkjy7TtnK1",
  "key9": "2NktfR1N8ZVEyaJZrfSEqtyKoHWPSNXFdxyv4m9pjUMCtTAganJprHATPNcfEQkpJBpuFv1fHYfNq419LDtYaiqk",
  "key10": "2n5AZqDzB3YXcRXQKTdswfrjjGqXM24H7NjvVbwD8qfhg25Xcx7zYN1JGshYKrHZgtGSs8VAeXg5F7fTYgBWpSew",
  "key11": "2mewZqNNfyiXEakU2zDPWGyvGxmCVuvPGf16bCkBcPk41Wx1PpPQ8etGPHaikfkkaC2jYWg2B4xF39HPhCLwKJpr",
  "key12": "2tik3f2wpmvLCC57KRRvxedRcVszS9NzULdK1XGbVQvtS7UU9U9hBqTcVSsXUDZ6LPc1hjvTLxswMDPv7j3jiv5a",
  "key13": "rMY1WJiJeGava1Cq8U48F4iGjx1JYUMRGdMrR6dKmBPTg6PZ8h1ABgMnkbqM8x7KDyp7fLsa5mnzn12xqLKFDA1",
  "key14": "3Ssj48LNwSTQEYd7LMCpD7n68AsDpXw9NnXwNeMPpZ3JErN3T9o35fmvwZxnEUDUDTaWWRWsXMVjWyS272MgvZ83",
  "key15": "4JUXQG5uUqbc2FksEeLqdcvbUgtuyjAquXZ13uCVTdYFoXpjKTsx9rByqnviVJRTvm9APoDocuwNxqYbXFwisYEq",
  "key16": "3Xv7qbuY52sRYLa5jmxbm6jZcNRZxMPBAdtJWZYugm59yH4ZnD1Sk6U9ccWBG7MbtK3Jf6J1eKNVJKb9DdKy3oJs",
  "key17": "56nCJUcQzjSrwVsxbLhAAR3c7xfRa6pysuu1Kapr6ywXeQAUkv25YQrGr3ogYPV9fsVLyY7uu1YdSofLZTYp8Rjm",
  "key18": "4jShMcUnFecN8xgje7QLWMe3JiMApy4E14w5sStshpzewwSFGP2dTo9YVadHaUPTmEGtWmfZoXn14QtFnDEvG9rK",
  "key19": "5wVLQSHmaFoTwHLDjrPRGrywKUqd5vQugBhF97fAJYqZaLxmJe7kR283ZTDCNSWhtSheKvpR7q8xyfXcejMdmGcE",
  "key20": "3TyRZoqQKn7RDqHTDZMZi97bsMe91z2meHuNp4TbgNf6uByVbiEpSKFb6UifyMQEzhYrbf3DWHfVuAphQ5bQ7vKo",
  "key21": "4mDbYvXQLmjuJ8zEvhibX1qfsLC7sSCML7NSJBwqtHRWAXihx6hGRqrwLTV4rPuEgQgjzGVY3GqJLoHamzAENKUR",
  "key22": "5qs5oE2CEFJnxKK5udgawLrwikGvTo4rHDysTeo7euiME6wXf936WcTWAJ74HFyF8bggFDpstEoh5mLTFfoPHCGh",
  "key23": "3cSKc5jsynsCacfXN8sV8Z3d2zc5wWjdJ2JW9Syr1gaoZfk4CZ1yFKSztQ86WyrMZiM9DYFXExF1qMSwQ7fPZmxL",
  "key24": "58fRPqeQJ7BhHYzuGJ1EjXjPHDKEF2XPfuyf5Y9veBLeatu8VjNshcxM5JtmcuBQM7oDkoYzkj1k9yAff7QuzNAh",
  "key25": "3hkMgSye8E3yQnRBAQa9VmfvSbErspKZ9cuhufRKATs6rGKLFwbdQmRWVRK73rFv9W1EWWDJQ33mc51VM6EbjeRn",
  "key26": "5AtKrw4joDXrSvkuetgjwy1p2gUsSTC4F9iagoXEv7yqtRp29AaJtA3M4YjsxiR1wgrAHV6LGqk5G1fjriHoU9N9",
  "key27": "4S6fhNMC7kCjufJbAfQUBPZJ4PofmUSXUeVYXXVFkGSWS5jRfAiu2n15dqD7mc8todxoeViJXzMXnVkWUMRPGCPq",
  "key28": "3ZyQTx7rpzhvh5mcjfnZpyCbjnFri9SBweHv81RRLeKLEgoDM9W9FipjAVG8GJxCHNtEAn7jUmp8nsbmdNreGQNk",
  "key29": "5qsdgtFP68ss4rKS6RQGduvYMwMmWWcX6VWpsRGpWVn147rat5EXzLJAYMVBvb2c8ZMGoVnEW6ZLm2DSbxxbbRBf",
  "key30": "6UtuY2w31D9TY6JmRvq3DaejCNV2HqUJyT7mR9R617cVboRqpRaojx3iD6BrEruNCfoCMRUQ6ZJM6qtL4LuAq1B"
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
