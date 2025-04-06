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
    "3bjQ55CVbKvZp9Hhu4n3vN1Q6UYoGJusy5uTVPbEmfdaPK5kUk7dzoHUHdofeESzYm45e6a5UxRFuyBvJWjWS19n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8pXcwqGKPpVPoFrNEZVvARgAWwHL6vqw4pYdDUh3FszeMFQzc2MnzHsuECQcmU4P5A5HdYScHZhgr2Di4pxT2f",
  "key1": "rQsY8SQjWxRzjmuFoZC8YpwjAtDLNxdQzdwn3oEyfCMiqLJDbiHa71yVxDZeKz2oC8ZNTVyob9SKtFitGq61EUW",
  "key2": "4mgt9gwurDwfgv5Aeahbqp4ZB9mbKPcbfNnUeNmLz9M3rwWGE1xVZkKCKGcKzYByuWDcEDx2tSG6nHrHUtgo3f3Q",
  "key3": "53PbBKAxbc6R7f56MQpyTnP2MfbTybxAJkdycgi6gh4eDQc2kCDESMjVjP9RZi7VcaQxWTzojtFFopP9rniwENCR",
  "key4": "2YcoFxQeSL6zGU1zBNCHzTegGnit2LyAKpQoQLnbpfmM3NkCVQ1ZntsbGgJqX7ZWEzKpGwoyuSEXtSmDUmkXmqe3",
  "key5": "53nk6t8ZrZ4Ru5MjjCiXCKBxYKHgSy8RGCoDuWhGJrBAk6cAVHmzSFxV7CwkbDAzuivhEhcAdAY2bqQGiKmCnqfq",
  "key6": "5MVhUUUMgvHtUXKBcmV18AQU34uJJ6ZKBC4Y5SwzptLpTLgwWbX3Zt9Ax9i4w1rpTY38w2QkMqMHXBRTszoQDG6H",
  "key7": "35TKPLqTqKsng7E7oVXUUsQ5rizUFSdwhjsjgz7zEBuLW3PoxPY3gTAUSGbaQKeFdShXCfJFoqj7dkvUQS3BCGJk",
  "key8": "3a8yU8pt9GXCqxCSsPd6YLcbsYCSfSHVWBRhyf3tisrcyUmYzFHsJiJ6qUQEjWbp3qmMn2nm4KUHpXaFUYZQhpJo",
  "key9": "2z5JFKvPvEQVnn4qUDYm7unfngvhMeEiYWDoZTcTVgZ8JHUrXS5cZAQG8Be1AXGTP76tJJFdiVioBvxAFLsBKmMZ",
  "key10": "2o6gYRssdqXPPEMFQySHfgqpeW2bJv6LPxjo6DtDqeMqYXuFc5sUScybJoLvcAruD5fRTrWoXodAnzBJhNEurUR3",
  "key11": "5JaR9tUXZozXUc2GEQAmUo5wXZisDJp1SZVsWuabTNq6egQUiEPrhNbgedwtpZgDiUFYXuWhfVf3jUCVGkL4EJg9",
  "key12": "Kr1Ndi2uf79feVsNbxmoAKA8oQKuapfswTJHrqz6PLUtednuJPkD1BHfktyL58V3nfgVAGeYyLdCq8FLLTv75pz",
  "key13": "4q8Vfm8cwuMsRq8v28x4oAjrsZE6RTUcntusZcvNu15bVb7EXw55cziFLA8SrdhvZA12fHbN9M6MaqpvUAy21CZx",
  "key14": "hVPnhTEAv58im2wD9ePX179APigSTtNxiDSvZSriTf8JSjFYoH9MA5Hss6CcQzF7Ux2ByB5zX2cZNLQSJbVdTmU",
  "key15": "qjwYWj7eBugo3skSf3cJyFmj7HQCdMwbhPnDN1cQbkfon7Mn4p8fTWWY2tCnHzkQAb19vk7LNu1cNkCB252QDZH",
  "key16": "5ookc6EmxmUz8yWrupiuzzHR8FB4GRXWSvfc4inexGQEyT6RaubjzpSmVW7dtyq6o4iCTyJpnqeMuwuyfGKLSn5P",
  "key17": "375FuMsax8DDHxZnvjDvQYzn2FygdF2zme7SMju5wheSs6wHD52npVkodVg7ybjbwJ2GPMUzAxaM1TVByyBm2zcW",
  "key18": "3vnrgZVH95VHMi4bYu8r4HaKrPp4dF5GsbmnRcaXXPT2MMwvM5q4qSCzwcgEfSh1niiFM7tkenBSoeLo1m8a3kY6",
  "key19": "3t4BtJsahkE68qLHcQZ9ELTbm72jq3R666SbqYsx5fRM8cVjmHoTJQ3WFKmwXJu3FCLCn7DT9dc1NtmBsgiMD9TR",
  "key20": "2QTk4xVkPwy1pPtWwqCRERhDMjRTcUfeqC3Eb48Nnhk6aQLdsteVGn2KMxC3CHvXtmGLcJwKtN7ESATaDxpFvDC7",
  "key21": "3JyCYKS7uNttTJSCG2ZTEmzrcgUmr5BWGrLqufpk3JRjGzoGM6ntV4G4rxbj3RXWZE1Sdt86cRSrcxgjq176nBCD",
  "key22": "3Usrtf34jhg7YpCwGqJWQGfhtpMUwu5zo382YqNZ9H5ueobWbbCUzh4cs2jGPtLVvpfuWFaBqRu6vML6M3JH5tVX",
  "key23": "NpjXBnXwZVwYEabFJFGq75uEtn4oqpYguDv8CPqxVJmE8Zqm4f5H5LEspvzxowUDkdtmyavDhLmiFYaWdyeriRF",
  "key24": "4Kegn9L4RjmbdVHJ7Mpcw4aCiT4pZ97MN3vqydG7CtziDTPUQuVD5Sb1YRaMgDxQqWayeVizSpLg6v1P7XPVL8gR",
  "key25": "ja4mhnoSFtndYSZDwcrbVePujBgnVbyCyB9mXev5qggY1UXk3GsPBR6rbsbLyHSDXp2dViAZcQBSoi2fRAWJpAy",
  "key26": "2giUAGZTfUZ92HSfuhQ4sBWBAqrAttGNRdvXewCT2MC4kB1crjqCaYfi8rHWYMZh4yPvFhV1YoSxvmN4RwXKfViq",
  "key27": "635EBpTZqahKgFZurPikVDaH4yYQyWGTpdBL3uSKjkdLkjiPxtUWjZ9tyxmVsyL5Jipf4K4bMRrnMBHbeZ95tyqT",
  "key28": "cm6E23F9xJgJDrD1jKLwp1X8hk6kE5fwXCjojKSXWZFFPTwN2XYp2WUkZoQQGtca16RZ55y2DyW7R7e298go2wP",
  "key29": "4mZ9zb4vVgV3Us3CPieuwDsmm23azVDEebRqzUW67mTuyLcLXvbYx7C5Zsh2aNdhVTQJ6uZWfVvGV9qy6A814m6t",
  "key30": "33imVwyMNLBsxko8fLSTnAKrqMjwNcKcrwtEmtnXNPX3NuWqP2oTVdTng9MB9k6gfxECuWMPJkVvZ44LJA8v9oJE",
  "key31": "QHdNVjVy23Khng6TuCUXA9ZNcpYJpmwQ1yxCPVhsr567Mm6ySSfXtGgNmun1ni2qcNhQRCKq7diPCzZBXuiadE8",
  "key32": "zscbNQx66BnJCAEpN1YGD9QpLW4WBCr9NnP5cs4mG4NZw5KrZPU47Fua42HZKWRGjXPXkjSKwjvhuKQr9j8pg5Q",
  "key33": "5XucYcsnSv9eGfodKitXnfCnee2ZrRLvp3hw4qZ9tFCrZ7LSa6cKbLEanxEKUjsJhqbnWF9NU9pz1UhuScTq9cYa",
  "key34": "5NVsZk37L9fBBXpcX4pxBia2yWedCHiCFnwDUFTA6m99bUuNXXm3gWAysbnTbuLC8QG1CCKca5DhprAZbfvK11bQ",
  "key35": "4KJkYrYk4Hh4RU4KA6GfR2nGSAyVdGaakh17ehY7Rkv8Q1FJTYsab2VLXUYE4LaLck9ZjuyVxx2YCpYaF4fEz896",
  "key36": "3FVdZRXPBZhfPQSZaqUT6RPjtzGPbuVtKJizu633z5Br5xUjN1UPdvtAZCxszJtTDHPbdJHzZak9aLhhV1b9sNDR",
  "key37": "2gMuwd2vjdDAev7khiGmRiyPCXaMFQeM7zgDXrMDEEtpuhf9A6qenDwesqCr8ajAUGwFfRq4AgcbBVXsoVtScp6K",
  "key38": "2XBtgdAjj1Qsvzt8ySxo5xRpNUxUGWReysaKL6UayHm5FinzBZhuqDMG4P4Jg79PXYCE78X9maKLSxZ5gf9MMtPs",
  "key39": "22kg9syKBa29vfsKpfKNBFyGeKeVmjD2yYXgtqJeiiDrB4qdsBjLsohVJPtnQaoc2W6sRdJb93BBb46eFRXmX4m5",
  "key40": "59xzAGaYtah8keHuP7gmugdtpBKs32XU18kcCRoKEh7ScYgk6ocL6RtqNzY65Xx1wBA242uxbY6NztTgSoDhwDis",
  "key41": "5p1drkNkiiCFDjcnGKKiM1wyGWSxZL3DjYKpwddsxUVw6HJ72mDiXv3kFXdLBzNgntMXcj2sC56AFrdRoRtznCg9",
  "key42": "4dRdcUBsYaC8mcNrZmCdR6bzF2rqBex6iwivqaxnLZSTjQrb7x1bxFKkyNktqiHeoG4z172Yiq85RUzWwbsbHPVm",
  "key43": "2mfCxbqPhonqFPxE5M44Ge56hr5kE8NFymTxdx8VAbdmvi5jaXukFqBPFSfFuDRNdjt8bKm6L8MMsSm7webYGuaJ",
  "key44": "4TNTa927iZJ7ZaJsaPzersD7xVtPKSGGuBAsRfoWbvrJQzQnaMgJgbdG6Xvh73Tze2UGtnoFd8VkbKmLHK4U4Ya5"
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
