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
    "4V2dFYsjGo2wVDG2FJ1gCE6tvC56jVGgqpCFQKnQo19y8MEg3ZpNpGewxf92iB2Hq2ZzNqmeV9spipJGNoUuoXjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zob58gaQ8DJY8K2LWRjZdVXWnALhYE3GZ7dAT7Rc5gD7Usxz4dYnbz5REUM85q5FM3qL3ig9S99qazEkx4d5rhw",
  "key1": "5vwqk8KzJnbicBbZZr749MdXrqfFQddCo8RNB9bNdrDsuAqh9WmcfToVNrAQebH8LpFAK6NK3s9dFx1agmkRdxDg",
  "key2": "5HeFTSD5Axeaus5yYLqJ6X2Awb6DJC93hvnHrCx23TdEZN3sVfH73TZDVdZMzzrkqoA3FU4kagUigMWgyJTxxN1G",
  "key3": "8a8F4FU8aJ5tGfSNLzh6Juxn6NUqzEDYNQrmrrCn2xm21a8UtKv7Wpqu8ukR1hZQaZBGYNSyeyAjVpmzQGYzsNx",
  "key4": "2QTiCeMBvjKTLEKv9uZre99w5Esev3pXYosNR3nFP9NaAPiJYz4Rfn5PuBzADEWBgK2bc3VToSm53mycURBs8fsY",
  "key5": "3BxEpdTWWV7yX3z18TN5vYDQ3SzjBrhXV6UYMKSsGCUtEQfh1Qt4WLZkBCB6PUiSEe3G3Pq4TXQ8qvKHik73G3eL",
  "key6": "51oEhmafa817XNK879qHJWR8wxi43Noy9BUES3DVgr8yUhgtyeqbh6crY3LJMypWoGJysiBfPdzadG5YLvjzVM3S",
  "key7": "5FVrsNbtKqum5prw8P1tvDPaZZ533ijxEh7q7qw69ZvxA6hSahtAJj7Y1DdTXeJihZEJmJK3jchFuK6jKcaqcQHC",
  "key8": "3pUf311YRp49fEqFPoTp7jvBG5SmN5aiMGqpqbBsURnYiuEhFZWbTo2aJXr2fBCNTdccxiisQPwFW1doc8ReJn1W",
  "key9": "5YHyD2K3tYngZJeZy1ieE978JwPsUpw9wHhmPvZ2nCMgDYrbfNR5NQoFz9A5ggCwhuACNR6UmnNdSQhUapBhZFg3",
  "key10": "5RdhjRc2CaQS2B46Zzsh9B8k3vsMBXeejKvvnk4eijus6xq5PDfE24768SxGWH1XvRw2hNXAakM3E9F9J5kD6CwC",
  "key11": "tmsFVJyYzy5mwGnWjECjGke5mF73Zzb6xga2pmb3xomi424o4tNCDwHEZPciRR2iJkxNTS5aBfT8FodLV3pvgxg",
  "key12": "3goefSBFuFTvMKx5pSapHhfYjzg75CaDx4BKnQJwwxJib5QmnDjJ4DPz8sijr54UoYki863g7DS9xr5J6SCtdPCE",
  "key13": "4Q2qY4DfBBAcKZLwbtVoRMzNd5GUEJu9f8YcV9NJaNTAvgG1iCbKXcyN9kftM9jrtckMteLS1wrfGrwshE6o3yKs",
  "key14": "4KPN9tGNiWBvwEPG6zNET1RsVPQM9gH7sUWyywaQSAXJ9FLcFFjfCoyJa5eUTegyTTKhezAdgHzY4ouNBVMEmsPR",
  "key15": "4Teb6Q8zHXKdNVK35SdTcNXBvMyMK4Um3nZScrNwgWa4DFBNEFSpgjZwDs3R1AWiF2Abr3TPNgTDwxXnQZeMJmAj",
  "key16": "57dPz5C4aSk9vqPM2g9tSckiYHVFakWooyAKa8xXBhw6b3g2LwBynxkARUhKU2ateqwQN3UtpEc7VXQDyHTXkyB6",
  "key17": "2K94XeSYsekQb9xwNqGr5G4Df9vEr9AA8PeHosqtvsFc4bSuTQyEbiZxwsewjMHP4b2KZG4vrXSe7GPe8sSMETaj",
  "key18": "2K2siUaqrtrWNWn6G8HfnDYTPzopTXFvzsN7r8RXJyL1SJD4Dey4vyUsP6iQfnXoCTX7i9pF9GMEHWNBAprGndC5",
  "key19": "2X5aTQeqrGAxJ55rAuTXfocYnPKqwRmLQCKxtcCokFMnf9MF5qiP2H3hoyFPcC48RSFuwxGUYcSV7xpPNJ4r2qZG",
  "key20": "f8qbLccNMC9f7LwFhkwhjeqwLKS5yEKtik19NaNsXE1GirxTTFPUfbnbXyFfGgaBaEBQsWu6euCMxDHQDLLHJx8",
  "key21": "5Z5Pc4gjCtuKXATX5ACAoEyvGjTM1PiZcfRUYUA6k8jza82abZxJSJNLcewmVTzbansGN31MKpMu6TFBt2QoBdmt",
  "key22": "LorWfErxo76tTHB1mKcq9yGWVaQkKgZLK5ALuyggYTZTyKZGptebhsCuwXHS39u1QaQW1YKVsdutj8eZKYmENML",
  "key23": "3eQ8VPnr81ybFAseWTq1jcnPCTY5bA4GGzh8twEhdXyKcSq1kGxvjRRbruHx6FKWcMm8PSSWAfnkkWMEdXNHoWSq",
  "key24": "b9JdeZEqP6aD5YyRgYoojUtTfNBebyzB7pKYMPTFZrcizCfxZKFsA15wiNi4ADojfCxpXJRweHHMVLWZZoYfdHM",
  "key25": "5GvoCX3gQiY5vm2qBCZbjgKzCqTy191aKiMwZN3dNAiDsvm6EGKchoiXt1Jd5WYGTqmS9YkM9VtR25oF4K4MpxZG",
  "key26": "hLJkrFCkxmL7wN82bHps9m8jZEKyeV81hYXcg1GvxpNL6kx91zbJb8xFdjMYMTXK62jMk9qW3pqVmThveWVgY2K",
  "key27": "jrwizVvT4V2H6whPjTug3F2SJx7zNG9c4w7Vp6j3SDtnMwfFokU1pZsUQm4N5VdRCAjBz7HcG5ZbfwwLTeLv1bg",
  "key28": "5Ha9LwRKMyCYXe5F8kshm1Mzz6ZLxHN93Pf1zCbXAerdiAqPWLeAPH7ahxC1drfbdedkaLDJbWvS5Wrgd5VgtQSK",
  "key29": "4EtZTMe6VHwdogQF8FZ4SLrNGiH3jFXBXcHy5jSt7u2d4AsTc7C2jDFgNzyPki1zuKHxiCYLEZ4obSZDRdSiskiB",
  "key30": "3D7iEHGBBZxCyUw8WtEykrRjuLUeLEB2YTwgGsaty3aN9bHAfiCoCAD8LENxTo84aVQxj8t336Rr2UQETC4t3toh",
  "key31": "2NHnFYcfCp7YGQCmET73CH8iM2HpfEw6iuQXaGQ1Kf1YMjpaoEieXAafjYNYEjrTAKzR1vTqPzFpkqNMfRf8JoxB",
  "key32": "2W3sS1WAsDrLZrUKqcKYyDTgnYjvC3iPhihdBwDrY3pYL8DSwxe36XihtXpgfkJjQj88CR9CAz8WBLrDjmy2X13A",
  "key33": "5y3KgXBdQi2zgB9EWJK6xReQYQDfsS2ZgH1HQf4CktyiHRwX6KZrHesddeVu4xsrcVy5CrxRe1tYnRzsmMMQtfzj",
  "key34": "4EMvM6r5qiEQv4RQrNssyZJs1BLR5nVMDKuLutjAXSaLD1pdVcNEAZMnYY1iDUTYEvgXnt6eEV9MKBtgfdj4qY8o"
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
