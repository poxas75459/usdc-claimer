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
    "2DZrxEvLNXQk88XcjYEFUzMRAhsNLin2TXeU5zLN9ymPFBXt8xhouXbAuWG4LPRTDBKokmuEqcWXcWVdciJ26eQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rj8M2688iXinXVJtQQSyh6MewrwKWrYArEC6Ft8V1yoXZ9D5NfJ2hWLE4aCA8PSKQtrmqcFgzn1HCGhekHoPzb2",
  "key1": "2t6avg6iDHN4rqWNWW5iV4YZ8NMJEiDDErvrb9vvSrHJRvdAhWNXUcU2qeTSV4mTu9ncbxshDPSWB65kZGWC9Ncq",
  "key2": "3CQJQznc6VuvZRgC7NNn3UNeZpaSgnZupfWjMiQ5yWbfxtgeqGcrwJGi6vCna4JoQPQmB35gDRZCQaioDVBh7789",
  "key3": "2a8CJqQBHtuFYboUmo9x8ojB8XvLW4dW6wdUi3mknCCF5vWk6KmUQ7MoWRU3KqzaMbDyHAunJScfvdATy3SxHYM",
  "key4": "3gqgnPXmn3uqztLMWaBAeQ6Cvo5W31cbfdTSfibpcmXtt7hqBxxc5jo1zJbUv8cQvqaVSpHSw2m1gDPS4tJmem3G",
  "key5": "4wV4qVd1thcLTx9JHvBvVcLmmeY63zwiAppiaxSJps24cpzL32M42QCUw8JgsRiZ25EgfW6KwbQ95eNS3J74kUPo",
  "key6": "3xcsBySzRfH3cCtFvD9UhkXQAcXKRXs3f8h7FcZ2ky1PMC7no3v2AMKVbDtgXXatbR2FjhCUAHsBnCwUHeJ59Xgv",
  "key7": "65cY9L8QcN1EqCabSZVgqkWDnjipcTzn37U9xCUgg1grpDxrDjWLb8Y1nTyA7Fs5tHLtX4zsvEfrHRxnRxZtv3xC",
  "key8": "63FPUeUqTwx1LBU6XzhJGWmNyuATLGnV8eXyJcYtyXAGbhdC2sHcbsG984t2hyE6Dq4UHY69CmmBqpe3uE6UNPVj",
  "key9": "4ZKFJSdGZS8qk5cbN8eNYYRY2mr99t9MnbpmCsGXXKSG2vNjy7iAWoTnFgrrHQLNJoMogLrThSoQftM8nodaTV6N",
  "key10": "5gm5tVkdP1YjwCyfRiNXkKDkE3kY1zHxcrF5hWctXevEvBDCTWKPEWHRasvGAmWqM7wep5jY12DyPD1GnmRpRrW3",
  "key11": "2oQBu6LV1exThZX78CHV17iCxoZHsKy9Nfxg9abbTNYrkGS36tfX7H2xj8UWqhuP5reXvXVog5TvJFzMt33CjD3k",
  "key12": "3kxTS4t1AX8Kyon4hk1Lu6BymESxhStNAruYW2BeQJ3fSYx6iRcA4JC8ba9FMDnd6SuYcGboZYXxyB5PjdpjEfZW",
  "key13": "EZhYbiLGYDEbM2wkWdykxsmETUb62PVjFhoSYQrPpedqrAthLaNUiMCt682WMwTV9ARxVoG1Ezx6gkJcoRgrUpT",
  "key14": "3VQJepU7ZNr2BomDW3SzryiZmT7Y2rcKar9fLpv8tQiBvwqShFsXATpQAg9km4GM5PxmUGyyyjfhYt2XqapeJkYA",
  "key15": "5p6Hu7PaAgcjHesuVPY6zsYL65KLAGrVwfjtmzZnDJaBqeWFycYVXiE1EeD8T4yC2xqLMZRWCSyHvgvmAopSRsK9",
  "key16": "45oTZq9RB7rAKCpznAWmtfrB1pps1Abu99egWoEAiVn9RaDH94b4e8jqgvMbR6ix1eEUY4j4uVDZABWf9JDaxZSL",
  "key17": "4yGBmKaBc4LvuSyQ7TZYYKMmnrmp6ELpFU2njQT7ciELL4SuwtmtH6feuhQMQJYndKE1UUekfs5usdbb6S46kNaQ",
  "key18": "3vfL5SbjSgzyhU6Kc78Wfx15NTXymyPpxsGEbmoekg9g9qWaEP56hQsuf24hxaLyTWTcXL8CDg9zbmzZhBH5LBBk",
  "key19": "5UacPgMJCEYzZNM8RQrwU8mE9tzmRKgZfxykD44HkGAvzVh4RfbcffYSBTa1ALieoz7dvdPLXQnW6DNhSGtXk74d",
  "key20": "8gErzM1imAH1HY2B1ernLbVATkVkNMrqByjbJAsHdb8k2JufUCHhjqzq51G8EUzv3m9jswiZucfzqKYChRhbt97",
  "key21": "Ns15CBx7EyYTFsX1wiNTGTcjgXehtAJYQ1fFgmaGRszcFS1UsQWeGnrbQ4cHG9YgwAsyRs1S1xofLUh7cxgu7SA",
  "key22": "26Xg24ttu9JyPjiV9kC58uFpXFNhxo6r1qoD54J9QCWsZT94Tu6zBWJ15HLYNse2kvz35u8UfEtUVUdfXyGiqDxj",
  "key23": "5X1rFFKfmqC1jR4VHaRgGpACQ1awJzNu2NYP86HXJKe8zY8nYmyWiYgHeG84xe2AR7XZd3MWjDYn8XVgX4cwgSLG",
  "key24": "586JTh6bBT98d7Ptezg4Cwr7zW1XRWePvYnuDevUpgFjUGivSPFhXrJLTvLb9fqWp8rSpekF2JiCH3RF77mjs6Sb",
  "key25": "2XDc3wfLqHotTbX7mts51WGFyoQb2ENvjQUppwVbwSgbsGVwpCsycRMTdXcNuqy1YBMDDMp9iVnKvakdSTtup1Ef",
  "key26": "LFENtS9wrC8Yt8GYvCoEu43uh6dZxed6X7z2WzSUMLLU9VQ4DMNpBkBh14KMREnxDhU9x4tPrsQCS7HCm7x95AJ",
  "key27": "62g8UQtoa8WH6pjxxmKtcJTvMEau4tgaQXy9ecevgwA3dHoh24ULBEgamYWu2Qetr4gfj9rsEt2UBopBCwt5rP7g",
  "key28": "2bQp6sAaEDu1r12NxPMjK2Aabs7eQAFL5U1nMGCUG37h9hGkK7i9eJug6ybAjG8Dmo7ZsvCmo7DMNxq7qpiNVYtR",
  "key29": "BPJDkXH8AWkgf77EMj8VvdLRUzdijdUSm8K7o1MQdhEMzaQRaFUxTjTPKHLqhPb6sRmHyEpZJQfgzpftwstRgAi",
  "key30": "4zsZuF8pZmVAfCVWhzVi5CKw6cXZmwjcRVkbC1xLA7CHtzZRDNS7wTy2zEZsTNQ6hhqJfkrMCet4tQ7xXsJCdmqB",
  "key31": "4he7StuXisZy3ZepnV1WN1peVaSxCekFWCkhE6wiDJrEFtWVKh3dTd2QB4e3xuRjTJEUKd7ik26FSS7tg7VMX26V",
  "key32": "3DQhqm6nmmPZ4KCRM55ZGarLdVHzLSMxF9XW8eVJKJfUV62MKpRMajuUyYkR7WFMGJ5ekFPmqEnEPDsPc1JVLYmv",
  "key33": "24rAPzULL2hgapvz7xi2Wnn96u96KgAguscTp7BNiqbPrW7kceGERo6kiMhafJFLjrc5buRPowBMyDvqmmqkPPGw",
  "key34": "4Rxp24962kN7vcoETmBFgqE42TEEWRoMwhjJonWKfHWuTkshStjtahFXqWNBy7trpzU8oRAmjXQAJFY7hfM6Mgw2",
  "key35": "2umXHDq3TjGiNJjmT3wtcZdkXLHiTXbnej2MFP3PFRFZWDoiyhMYeYAm4ekAdLRwLVvo4VUwoQqQJAWVLCEcybq8",
  "key36": "5oXyh7Au61MhFC7gygRQu2WThWsPkFBGzfAkVjKVgkT2m5XAhVCQZhn79fVi2xKm995t99iqjQrq8QGoZZfA5t41",
  "key37": "2M1AQcjWzRVHAcGUsqL2mn35tN7ffPZ3TMzLw31pRuwQLusBTsKKGmZsNNRsYineH72i7oz74RVJpYY6J2vZC2oK",
  "key38": "3tFmHGjhVisyg1ykFTkg5Vxd49rQhc3BNhVCnnrmnjBkc3J8wQfVQNWv75vhEE5Y3X1vze4mSTapfRPKZnvEXgkt",
  "key39": "5SqCUe2KraMhXDJPriuz3pJu5XTcV3yjJbKyAbkcv8u377idQhRPLGb88Xarn8z31Njh4Q77SNsvvKTF1nSpQmwh",
  "key40": "2wX1ewR2LtbU88TA8XHp1sFFMM8Yrv1tjLkQmfeLi82K1CaBEQeSYKPjEKYiKpPxjmFcu7JWHftZBuvWXCPdp55G",
  "key41": "5gb6XdrKzbiwc3KpxmDPXAiyVUyzmZPxTShsu6jW8mLB5FBPWjw9X2szZaEmLsia6zZx3oRSLF9nzKFfb2XcuDue",
  "key42": "3hzevDfTZNMi5WyPDZAKVghHF4x7Gw4XP1W3c5Q6u2MGPG6MjsxZsjkv2NuACjUwqxzAiiFdxV462mcYv9VGWYpi",
  "key43": "ocg93czPY6nLiUJ7yaQUj2CzLibbKzGyNWjyPbWg2Bw1RhX1ESSMVKu23UNCLozMz9H4gVXzfRL1iyBeJ7N4Meo",
  "key44": "4cTyjBegQYu6tmSWGoR72qE4tTTD5onXZzDxb5GHXuJo7XwYBSBWJWHk5ZDPUhNhzDyEL2TR6azoXcgxfjt5yamx",
  "key45": "5KbCHiWFaaAQjj62pLPFrjPvwySosviqmPyrsgvcMu8Mye9iMRcJULTjeetcLWoisT1gKRmAeeDCjFRd2T48BC45"
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
