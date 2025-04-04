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
    "44cDLq8MiL5AAA3iYjTXR26ZvMeJbgB4FGcefvLbZ1syHLnEJh59tj8KHYs69DnyV64qbhqJziL8PcrgpmesUKCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mAr41eftau2Ayf4f5HYnphacWDuUWVZyeA9xTRse3q4wBB9xMwegKZJWAZRdE7RPwy7rJscd5VVfGfRbu8KCQAo",
  "key1": "5XcpbfNpRMAbkKAkBanT1hP46ScVcjUdDrcrMN68AXYg8J86hVyKyMECwxqCiXsxKoye6px6nBE3Nx5dU2GcLCEH",
  "key2": "54woYp3Ar5ecgXLRAEvtKKisMWuanewTc2DPBRraqn223uWE8gFype8qAJwvvy2LmAYaGaiKV1EvLLiqSUrCu894",
  "key3": "5bHyY1ZpKiKa6TP34kyevxaWPDn5FSTMxB7TFJgHfZP7faQU8t3Rfp5xVhkcrJbGMBqyrECp8LXUZJYnUZXSdVRW",
  "key4": "d1uzAKaBxAiRrBtp9x7NFP8XHvQDqPLrD8GvkqXmni8LDaYbJBo5Mnw7UPR2oK2CZsy7CN9yY1ABPoetdCuBzjQ",
  "key5": "4yCAMNo4pYXuiLgWyByTWZQ5eo5JVMxzQsHcy7yyJshEbBnQgjsbs3W3tx1yygLr2kD7QMNRytfZ6W3yE9EPZCr2",
  "key6": "3spyEASURtabCGr4MHC2GnU2ZmWV4T3ZY7yCDgFU8HxTBFBbTakLWY264UHQ4UBp7vAXkZR8a2fs6BaZ4w6o3t7",
  "key7": "wWFW4d5Eu8RQgV7n2CnUJzYu4KAE6HFvA5WpYEwXFs1MqDriGHzVuJDZ2FASw2TWvtUGdqtQW1Eh8UwBUugkQ9m",
  "key8": "fxJYzzdpDGeR4jnDyUCd1gTR4hMKNKVr6PVeDr3Z3YxWB4ag2BYTjKygtEXx7FqLsvyniSq6jR7KSDqPQyPqhKt",
  "key9": "5p9AkSb7iQeZzLvk6tFHMc9t3v4xDVHYBW4zhj3bXXUEtztryY5PpYM3P5qGpxyKnjCYToJoGcmmWCsoJ81eVJX6",
  "key10": "39dQYrNgZ9r43KKmazhadnkkt2kgaxYiCfJ3ky5bqnRjRwYbh9HEXmCC1D2pfd58BXDDfYM32A1Vw7oFrRH8c95k",
  "key11": "njLdjoCybjhrqgJtPRyagUA9woNanjftL18thDCH8tbeCCTZsNK4Pm5Azog8RvqQY7GyGm6R73dtLmUDYqzP1Yi",
  "key12": "29SYLMU3HBCo7KLuG481U8Q9fum1eNPxmdCGHeg561SZcXLJvw58ntkLsV1gJcKAGKAiNjkezrnpC7skUjJLZc8T",
  "key13": "auRKYQU4LzbHAktUNHu8HCqTLJyNE9XWHjTyeAA2deHJtNqQ8SLRddzu9wDHKhTQGNK4oPYUbLP7wbwEDiFDdvk",
  "key14": "3kFwFNZshfamDkSF6Nngs93LpdVC6V1PuG52sS5jFQC8VFwp1YGDig85adZz8NJX7LmEPxM3YNPUnoKuUvEBaay1",
  "key15": "HkrqbaSXQCNvfqtWEr6Xfj87JALH46hy7ThExcEMUAUsa6KLbvw1xmddckUCWti6yJzS1A7TUf7nezCsL2w8BcK",
  "key16": "4yxBLGHfbyPNvuS75gDtMRUVVSzoVnD7FdmgpF8N6EczqFfTo3DWyG8pWXWZcb4txSqN4y3ZhFLZqfW3SudHNwnF",
  "key17": "MqYxAEZXYfqMmqQmpK8F1qJCfbPnHZm7RQFeDucDyT88dD3gUMLmniEdjqZeKzpGCQ8mnspoB6XZgK4g8Eetfao",
  "key18": "3hVr9yeEmQT3mU7aFRM4xWBXwsj9Z1H8Sm62nJo3KuCvzjmeYtQevZjzsMpdCfVhiVpZ8ySnTa8Kt2t2YiHjm3CT",
  "key19": "3cAhN7FviTKZeTnDxRMKgZKVisbkYK23e58We1awFNJe4TmscnPvHeRe9aPgTiyjj3MLyo3Ff8bmCZG1vD3Reswr",
  "key20": "37eUVmYPAfTw6Lxqoa8C6psaP7pFD1hLdWoCtHPKJMRDEzsLAtYWkrnTiCFTyEaRDPJmnVGggkECVcDLBCS5s17K",
  "key21": "22GRtgFXPKyosj1q8bg357PRWSG5P1JFgaxTPCnfwB1Lgd9SFLXUkHWCTpmudR6LTaDknHWCswN81FNd47PzVsFM",
  "key22": "3xLprw7q4H5PRWhzhszUWMfamAWMcvJhE7Yxy6K743CwPuG54iWmHKBczuHw6XkNj8vd3ceMeihRytrne8GqyQee",
  "key23": "4kxMKoL4zbTVYajmGnyBx3NDW1iNhfEaNvUk8zBguUEKmjR9twdXkTGz5BKXPcCxMicTgztRcShx3F8gtHLtC9nj",
  "key24": "2HqjRxHqmWj9E3rP5E7p7Y3YWBqcp58fL3K7EHujJq8PPmPHd2MM14pYWdWmjNWZBvN31fLB9a5RcJSUXT6GR3Wn",
  "key25": "4jbfCsSLVR5Y6hPxqH2LWGC97eihBSMLKDDZsYga8ssjgspxyyeEzhr4d4Hus5jBUsR8v1fYDz9JuvzDNxSuB9oL",
  "key26": "5Q3bjPGKt8FRvpzXbmCd9AKvRbDZw8pqp9ZHHDuCJJG2J3oZdbc3S4rge3kJK24svRYiQB8PsrDSaHoQMja7mS1",
  "key27": "4yLC7NjQxfMXMDiiW32cNxATbxWP9pqHkHf7ZCYjfGJ9V7vD1f38Ta6RJbyN9qR43qrFxj9y7uHYJ4bdgNY8n279",
  "key28": "4WrZNA5XFPQAM96jK3NbrtkAxbc5uiPoeirHMjUF9YZTuoor55b5QjVDwEhma4GAbyUQzJTZQnTBXefJRo9Ym3xS",
  "key29": "4iNXkwEkDnVA7PNS5nHS64cLbjgNpessdmcQSR7YhcHsR8XBipgPePAsEtpwyPQrTLoMDSGPWFanixm2SyotLxFE",
  "key30": "2cD18rHxSmaCRyC3658YY8GH5yVFdYJpGoLazxGFa8AJRckt7kTgabEctfGmMNKMCf5Y4KhDpyYcKtuBCtQvZnsF",
  "key31": "663F5aU1CNvr9wPDjcRwra9hZBCUuyvv6zg9wFCeotHrFQQPyXXYmbC98YGSbKwgKeCwJsfpHGVCAyXe5pptkAtp",
  "key32": "3fP4pocNQJQEejqqtjFnBkvg6S43s84upKWBjb5PMNcQkT7m2DfxbXyeHfR8ovcchkZ7ZvzEmpvD6mT3aVS2W6T8",
  "key33": "3URCFTwkVNfD41VXLwhULyB987XeZGp7GurkUuLomG1YU4XWi1a9derZqvanVmLJtnXCMbyBf6vcNdXcYoKxv452",
  "key34": "34rrWDRsVegofdCgx2UfTGuiYLu4nNiFaZmAot72tpRt4zZdCLcaJp4K7Kza9TXxF8XWoeJXRoAbssZzQcF3MLaV",
  "key35": "5qwaBMbm5uNNme3LVwNWsAdcedsw64qjKq3kF1WU3P7dZ6npfCm9xSWm59w1tnzrAbs2iRYnSnGd4PVHMCQUq79Y",
  "key36": "2oBDmmKLs67WfRM37i5VusgfuYR3qVruZRXCms1MTQnPRNQE4Mpcb8McW184qaKeNf7k1JYHo7xJcUUMZXnzRMA7",
  "key37": "2yWq8kwHtvvnFUfFFFKXU3ByTzi6GL1VNmWAy1cV1jAZMTMMjaX5NbEhHvhZ7hjVBbU8r5es4DMfy7pkeR7XJ8vw",
  "key38": "4pFBYgtpJZn1SWA5VRgEoHkJXbh32mcAEie58ufn2MQeCyiVruZsMEW15u7SVpAw5brgRyn44g9JZAZEobx3VKsf",
  "key39": "cHP5LgwNdL4kHTRWRLLz69QBoo5wtUAwCXLPQKJ4VnjCoPyYLG1xuZJp7iEuNYUW4uuwrtGqzBCh7LuDaCBq4JY"
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
