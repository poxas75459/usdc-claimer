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
    "3kUUmvprJUchRRbdE3e1QCHgyND21Vf24yqbL1pdsvrvgVLn36DkeJXFp55XKKK25gRsfNHchnKy2M7eBM7YjrVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FSpX5SXzDekNbaCd9ykuscszcsst8zNDRdkUhaNEvmVRmLgbTG4bKKCcD5USPCHqj6Z4N7sVysFT9nHAmNrTV5u",
  "key1": "4vJxSKSkng5eATN1fPL87vxgy6TzZotRxPNJuTduid3iWQgUEAFxvdwUh97feZqUxHTWDPVXX4vfccNonCW6bajM",
  "key2": "rTCSpRKQgNc1MGQi8RGG5A4HDHieW2dhhtEEkg4oNZZxcv9JwUaeZU9znHMYe1fYz5gft8h6BHELY7UVZEhXRvL",
  "key3": "4jdGszdDJ7ZCDspp9P4UmyAZpAM1paGkV9QEs5kjn9r5fTT8hVoW14yA8UbbrcXSWF4SwHaYW7vZLA4AWK9AQ9Xx",
  "key4": "3eSafrvTfRM8TFmL2YBjaEVPTZhKbW6zSafjTjRWJkbQ1zniiQtMhz9NCHddRKe1xL5izQZEbSwmrBgrHPfV9gV2",
  "key5": "53RPNRZbGK2Ai25ZK3XACnUUzy5Vuxaqu2HSHrLUGag524MFiV1jkg7fUL9Ff3wZ6qGp5Et4VNT8TYRZE3j7xU3c",
  "key6": "4qL4WpQKqCnsNgStZgBcrYFhFjejUzGzZmNaLRPRCpiP1gUtKr3WoLhJaJEEqYRwrcxqAx6gWCgZfHynnTSSNUqw",
  "key7": "22T8NLwMU283rfZySfxFxrXpVf54HH19DqmFTuqGmgcCuwBsc8mATnwkBr5v97bgri58EPhKT9jhqWpia2wFHYHi",
  "key8": "5njxWfPcJHSECw2Qfb2VREN9EXWSHBj59Skx6aFuAogMdWwJ4UyHhB1ceqZ3Pn7fQ9mxjEeBW7ynmJVHGCT2dX3h",
  "key9": "81zgc4WGHFuMXSwiTp6JCb1nSSwmbjhcDMq7G36ASYHCUkhZ2NMsveH9T3jcBYczChZk4BZhPcLhwPggvkjwdyz",
  "key10": "v2TBvKVW9Rnz7KgnTwMsSGPKV6VvYyqRu51YzX3qcQt6df3NDSbd2hiket9vRaKpbCrY6a5UNUFD35jsbbs2RH6",
  "key11": "4sFvno1Hz9MFwF7VjyLXKTgKtfPP4o7styE8pBhqGw2Rs985v89tKFJxfadiByn2Mr8pDVMqLYYhk1mKv3cB8Cm8",
  "key12": "4W83yCVxBPawhKKFCLzeKGeyZxJ5wN6Fqv1EnHANHvnZBQz6xYRtVp1F9YGNT3jDAhKtRrdNp4S1kgfEW2McUb2S",
  "key13": "ZwMrC8kzCFpEfhVqYiZWeiCZsYzCVCpcrzRR7Gwbw7i9TTMPzdZ4VTHMn6kJ1u7ij37hGMySP9oNKX19jMqqV1s",
  "key14": "5TnVspG6XZZLf244VpJ5A3dsTfeSmQGEmMRm8uqgeWoc5ChUVSCbBNVmHqcziiVgRYKdY3sAQhnkdpYmznV3o5ZL",
  "key15": "4dhDpjmQgNbQbUyHPLDELGVAho7Sgn2PifQF8bmNfv3jrVwXxvmPdGozkfrpXd3NbcxbBSByw4AKpYPKC4ZRV3N8",
  "key16": "4JbtQqZgqnPmGKgA9BjxiCP452fyLF5q8WVNbo5tukbxstCFLVt7cGodvxNHuyGPXCc3QwYACRwGgMZBqFZcVU5v",
  "key17": "3qYViwCamFKkvmjZrHh71HzxfE2zaTomQ89CJsXUydcmtbZezrJ9DzcNLqJ2wXnHrWpomnXTcPYUZgMP7aBScarg",
  "key18": "2dv3SbvsBKfb8ERa8ouKBEnEiqhm1dVxocojyJBsLuxAV7wnygQsGSm4mRaCzNaiq45CZ19bE9uGRfvJZJNQGU9C",
  "key19": "477hvR7pJEcvuTFLqHgK7r7UmTQjJ6hajmyYG1zKJSMMBTJn84uqoGfZfbBqFnVFJC29zuhBvAAwkBxmPFyVpUoe",
  "key20": "3YSf7HxmLz2S5jh3Kn8Ftwom1FbcbMnQ8P7aCNto7KcZSDBMzhUVz51HxkvMMajjP1TwA6cv5dtPBAG7tQU7XoRU",
  "key21": "5gh4qt5cRVnNoSZSf3pcvRZ4k2Vkej9cocX56gz4QC5UzvJKNapHDTaddRsiNiDacpoMwqq9AQgAskSSq1QYHcUX",
  "key22": "2KEZr9yCXQNqvzcaYDPKSWyd8j7j5eLWFZHeYQ5XqkrwWPRewjX8A3v3JJPMBQTttb2svwBcK5nxLo83h1amZrno",
  "key23": "2KvdQaaW4yn7qv1ScYYYVArSPF7CCwRt2p4CmGzyqJWAh4PJyEQyP7RDTNw1edQa5CWSBrhanweFqPx9tU2WDpC2",
  "key24": "59LNjChHbkWDysQkKwYQMXUQAZR359sGyWZK8HqLFVz5e9NFVq2KdFdH9mGmycu1XwGFvbqPLLe7cStFMpmD29B7",
  "key25": "4yUjYjQZHsv94fUeqoguNbcM32W4tm87yDVzSb2h9b75AUfWBbMPaVvdSdvh31ZAyz2iSFhTGkuB1XkXqj4jLCHy",
  "key26": "5fNfVsvTfCVxL24WJ2u6fBaZumzqNuGYu4zrVQbXzBExT1AoWCw8WWAx8c2fhzzhrQCBEtqHRRfttQwpkg3cRARu",
  "key27": "bUytnbTHneGvzBEehTWNjxEe5qLDaU2292ouhmbbzX9bxSShwtnQyCyZ7pgiseLexNYmjgsCWnXVbw9raJyj5py",
  "key28": "28MmFxSx5ovbt3SQyMnPpEErwM6FCPEqg8RjbKc1Ry6o5cMAX5dsa4SQDHmdpWkYcTHSq81GRCamQRvEWeVeSFej",
  "key29": "5r5LfractTxbfZzj3H3ZiRPfEdw5MstJhwr1XfXaBNmmdxq3pYpiXbsKY1sSXj9ZuftWYBHnPyYjTmvaFcLHqkvd",
  "key30": "3weRgQpniVt2FP2q2fC9VYdJVngqKUqHqp2w4Ch4FMewwVeMkN666iUb1bR3tksbC2xuyYshf2fczpJUYhS4M4Vu",
  "key31": "62mHLzHLJrwPMyZ7vERX4rdA9s6J3FwwPXyfkSy6GeJKvxWeSJmRAr8qbyBm7HypNwBmvU4iAwL5kwsBdwkvE5zU",
  "key32": "4FuZbq4SHjYpAanYdMseCyZZzSko2mgB1SmyFxVbrPuocfDyaP7U4fGCySSvQfYxXg9mMwkAyBUFUbCeh4peJSmk",
  "key33": "3FVMuPJ5gr47Qmt6HaHbX2LAQgRRWeLZUqqyin4vJnGKP9nkwc6oTK4aHjNH764ME5ibAEsEErWrVB3CNL1HFtzi",
  "key34": "3Ta1tyVFXGUPeaap3exFVrVsfC4VmhtBhXYcqZHh7HeQo7dEAtKTuEum8ozVMcaBRyYrfLSRCmW8BzNrkAQBvQfZ",
  "key35": "3FuAnMRYiPVuiSpdS6B37kpwdBtqbXtGeoKYyx1smPcGePhW9TQk2h7kt8wuDiWP5VS4jkPjxsZmfccZ934FUTK3",
  "key36": "RqxHGMEhKrkypvT58cM1tHiv1m4e6jytz7dMei1uJLB8HkACoFLqRD7KfgWKAjT2nCEhW7YHir9gryhaNHaDx55",
  "key37": "WKyLzxvfa681V3kH5feofgksB5PsLozHmXoKtu3Wx5b5pDZHUzbeJu6Y8MpstDGKPsJX69J2Xn4DUna5sMsGhF6",
  "key38": "PaqShJJ5P8i88NMud1hCxrGx9hSco2rskax71BTpGACzu5aymf8A2VjvvY7wtWgHXAnZzXNQfvCcnbomdtX2d6R",
  "key39": "2G4eBo8zVchnCD6kZdazJkd5FUMGWVx4hfWJRhwUQGS23zLKSTyMaWdvkbd8TGmew88dduLuyhaMnhSyVF4BehiT",
  "key40": "3oENVfqeNTijdxwLHNQ8xKwqaywEtQhnnsycizAHivEFV4VZiRPoLeTp3CVqsUw2HWC4aE4ivSXz5XW4R5yTVWi5",
  "key41": "5N9XnGu9mojiJDsd3Qnnr64X5a3AgmHybLjMjDuSi2WJhRTGQ4VsBif9EgZUWGVEEujPVvnyxYTwwUJtDqQuZbG6",
  "key42": "58i3oNXok4Jis6GdSpWnsm8JbKm9ieoPgKPYFr16FGwrFfADbkQkbeM84JPuHCSmC3vpFAxvHCzPpUD1Ht3RdzcR",
  "key43": "2zdjHPRV1yRLC1Ht2MkVUGMKQqqTNHcYCbxXcLa6pmS7M7AsD1aV1EPmRmVTwKH6pcq9FB4X7VeESV4TaHfCniaF"
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
