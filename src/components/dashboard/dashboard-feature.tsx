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
    "5AYfD5iDgac2qyu4wHoxM7GadcrjJMXDLHR2DZ7QHBPkdfZEMtt39hX59Q1Px91jqF5i45hRyKakuKE4qXbyCwgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wC7yLVn8X3yvcZvExDZE6eBt3G1G3UEGp6VTT8fiVjPPghmCKm89NMmTXhWioS6FSNPq4SpLJd1Y3iKkkXLQDzu",
  "key1": "A75LdCD3WRoGgBgoVLTAKFiNMtw4HCBChMrf27b84PesqKfDCXSp4boarinxNdyoDje268QwzEce5E7uBeuFmNu",
  "key2": "4KABWDEWKg2pRZLev3VwrEm2yGstkQx5EKJwTzzHrWL9U6PsmU7WbHiWkv8areqCecVgHt2MavQLTMBKnUXXtr2Y",
  "key3": "63dQxKenvw177K4dXsgCXsdwSH6HRA7LTHL47SQg89WbvFXXsPJPeot2os4gRdqAm83P4cqfCLmgKYrn2mNXmKHN",
  "key4": "3Jvwvctr9AdfYMHvFjD66jXKsAahyorWAoHfW7ziNBxtPaJZe7wCU2DT1XSLCpYjZLLvaAG6wo7ZrsNzgxeJLAzY",
  "key5": "5gceHhvMzmYgiELCYKKsgBnMNLL752wMFSwUFCCPPoLk3yQBfkK8QRCsErsmuFykvDkqUeiDNgRDvaD2QG5Ey47Z",
  "key6": "5E31NkpJbm7p4HRzyPHSf6cF3BBhaXNffvi7LHiPpHVMTN38Tw9mKPxcscpzPxAsbwxHL4LaqviMcd7SHMBrfL9f",
  "key7": "5sMkeCKQxicvhHR6yKwAjkBhSYJZ6HM9NTncKXFgYd9XiQAVdSQ2H8xqEXJ8rPPwQGm2BYkNfj6a6LbGmDmbKBFL",
  "key8": "3G81oWvfyafgKEQAamMLXSNvYTQUg3sWszFDeSo7seQvCBjxtBWxEbpz1vfz6rpTXAUNooeJsFBifGqKBfQwfeeW",
  "key9": "2YBJqQMqY67e5vDVjMg9bPSc4359kqomBVAhQn6PUd8Yycvx5xENPFB7VG3VsLbpAH84BMeakVFV1pmV9dBmrN5n",
  "key10": "5f4ZCPUvYwtLQCmqTwnApot9Sd9dS9M9YvtjcxA8PqTX43ETTDQhLK92XvjAErrSYuhQ6HakJn9d1XaDr4Lc6JaD",
  "key11": "5mrX5SGC3QfMiB5JRDt2D8rCQjZwNetXtazaeQcqXHwPcGXCrnNcD1wNsTppiSWkVa5ZchAWWYffFs7AUA6C9f49",
  "key12": "4CLeDXbTkHVUaSJ8NTkbckq99xbVaQZva3G3sFKH8AX3hKuYKZiX4u6tDs2mnpVSggVHMEu1NDjuua7C4k8UMS9d",
  "key13": "3Dr91uiowfXMvNMFCrVh6B8zzjs2jpZDZCqmTZxCuPoimq5Nq4h5e1S181cwVnaAMG49CT7W6m1QQtryLvbaeWrX",
  "key14": "3cwwVx1qJidQckNZcWWo5RYEUFYwWrnttjghE7A6TiqgbhS3N3YVmt3Xfv2grog4keK457vyBXefGKkhAfb6k8Xe",
  "key15": "5wab3cU8sHCeohTXKdWhmTj5TU6gPpi7MsP5TyBi2ZQNp5XyE8z57mH9vWiMBJNJt4wu61W29ijPWjHiJXB6RzMo",
  "key16": "3Dx57P5f4FrnrS5mUp3ekeVD3yrrABobjfxRTk1VMLzqwgNtuKoybrDo9UfLPLL8y8MtPpCX9X9PMLJFGaG4VGg5",
  "key17": "3UBTjiAXupqrKEsGCxgVSao8GcEXLy7sYdopFkJFbH1F1shTJq6GGEG6J1vi8Y7d2RQd9YFDWQiT4WTURrZe7GWE",
  "key18": "RmG7wvDFgxQZe97i5dLYMLGniNzvFguWZmQiGHNxwCfD8RYKvaxvfX3b8tUVPQDF1PZJQu7S7dPhDWuUjMMqesp",
  "key19": "5VsRXmQ46Xs6znA4EG34sDUDj67cJGRX6oYmjJKw5NB1W9giCJLC4uXiNPij5PbY1YTrpLUJQjXARSJUKyN84A8L",
  "key20": "2sLZY84fbPNK7UGHsPxxBq3cNpbYPNszqYAvsgQq4Q74tJQ7tvNJHXDtNJE86ZMx96tVkSTw61RXy79d8CRxtprN",
  "key21": "4QhzXWzXcNmaoWqJtx1tmCr43GQviCUoq2QuTgpZEbeqgtvvUkkxkG23NjoKVGL5ft5qtSPCguUmgZxdKSuzSJCT",
  "key22": "5wfs2uDg3M5kxuvtqyptFtRknNgcminc12824icEphG8cDvLBjX8PysHzgKSQEgN48qczXheii15bNb51gTjiarV",
  "key23": "5m6GjYBXvCVK4Zus8WjagTk9yAoDMTrpzHUQfuHSXbS5aEhCjakTp4XYw6kotRvE1tjBNPheGQcvuLPDMreXHc6G",
  "key24": "5zuJxWQecDMwoQcedLXEzFWrxoVN9NJnWRti6kFJSDrmqCx7TmTLVdUoYMJiKD3eQb7D4Rqz3EJ1KhE7T4Ebhiq",
  "key25": "2exmx8sdA2VoubLACcqfWYFzVeHF2jzU9DeGshhkR1s6bYCmjKR3TuKprwRNkVhX4sd9rfTNsZde5c6Mos6mzX2E",
  "key26": "ekCGY4UWq5tJFxx5Qo2KPciwQJeqnGMgBvZBaK97XmZVa5jh2opDHxy85fkuT6FtfFQ4KkuKg8mM4BsgJHcyQ8v",
  "key27": "MdDQze72bdxXoUVntUJK56GW7FxLKwUCahD1fvoTcMo3hrionWX2MnDcmSKr1Sy8SzADnr9kJRYbPXxVJwBK14G",
  "key28": "CFuv1WX7VkF42Rb8j1CCHJ9g2ax4gqq5FHe4WWBKakTH68GMTAUmGyNZf3FnWiHa7p3xBcqZ9ngMKpkWBYu1Uue",
  "key29": "5GC3PsrM3K1hP48t9waiiA2bf4Y2ZUgMGm5g7T8jGNWajkUmeJHsVWKWu1NvEpkTj6KKePjgBHm75EtqaLHJ7h3R",
  "key30": "rtfSLUeoE6s7c7xad4uuujGN1QxiLSGEJws2bw5SXQnEAXY7rCQra5tSpzG3ugAT9jK4LBHi4QF1SWe9SveaCMx",
  "key31": "5pzox5B1vwmTEFu9QQ9jXTFYgE5Hj6R2P3va57PrEWVMd3qTwoCBEjKUziqnBqS4xT42UWKCotVtE2qVkuFteAE5",
  "key32": "4c7eJZAoJjKmJZcbaQZ42GiAERrfPrfLtyaNwWecr41hijhFch8BesGQY5DSK5vBrLwxPHLMbaUiBM6sePtkTz7B",
  "key33": "akF5BWPZmmxJoec6vKQ6ikDc9zH6hZe9CkqAKg2Ny8kfVHk4Jc44NJ9UuHaMo6UcQLyfMLFeNZ6UqrZzaCiDc47",
  "key34": "5pNcrcbEYNjPusHYUGqmvX9Trovg2bSeMgmzskij883SPoAh6xf354mWCPY7gqFAfXQCEMmncWhLqDtUAR2yRe1R",
  "key35": "VuBvrcbR6RfDYtZu3AFqdruw1vBqK47mUWaLj1sKxm4mk1bqWUErxSxFGExCE5ixuSaBZpstzKzqiniTtaXtKQk",
  "key36": "4YidnT1NpVk9EqpH9ggEHQyVK72N6PeXpHgbCfDNewoq3VCuCfbmcgF7rHNGg3gffQDDX6R5Qp7iYzdq8qH1Um1u",
  "key37": "54aE4yQMBK8BV1XZD9qnbxLh95XESKQ6UQXdJnRW3d3ik4fhUHVncfqQWXFgHznMTDkFR7DHZEZCT2bjQ6qRcyUR",
  "key38": "KvgYKe2eXgW4BRkGDQdJZYHt6QNGoLSEKQ3fvZoy8uKyUfcPZiiCAGUNWTnThx2HTz1tYdC1eLrfytmsnSb11d3",
  "key39": "3NHoWDb34CzZTJMEk9LFSCUutMFqvpADz6CUwVWbfxqmAQxgkpeaKG32fnc2YjufxxLXgXpsWuyq9b6LQ5x1tmnE",
  "key40": "5bmmXGh8iJAo5mjcW8apsJyn3KARn8F7F3AizM72FBGjywxqBykWJvJ8fiZrnSUUVngDdhfLmqfpB98CpWxXJ189",
  "key41": "3MMZ7TwrvoFcztYcMvi11rva2GBoj8Vchopb3Cfz6XMXWKasLUjpwsBruAzqdEaXNdpPJABcqhLRdGJJtak4ed4R",
  "key42": "43woaAfPCCZF5NvuLiFvfwwwdxmS9QyP3uMyegLTbX3eF4BsZXaZAGVDzxJ7waABrcvoCRCpv994L27taWZmkc4V",
  "key43": "3uS1eXfEs9N4a98cSBhHXJGB3cN6piHcxPoaTSnkRYhYdx5jCaRng3YVsnrWEAZF9eKQpBtb1EdyakoqyV1NpbFc",
  "key44": "HqiPPjRfnb356HFyThxu4uc7Ay36CwVHq4XhLzTNSxeV5RupwPkJy3376hcXcEFcsVu3BdGykZBXi6MqfitNkZW",
  "key45": "4koNHyXXaNDuwjTyZkc7byKn1yX12krv1HkJxayeBvohucH7FkLqBcPMVJc8stDp1BtiUfcecHdNUL2NAcbuPKaD"
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
