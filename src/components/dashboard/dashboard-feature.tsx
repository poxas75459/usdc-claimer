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
    "4qMtkSmAXPVFyz7nZ2bKQPS86EcNedKDuBtovB2k9JuKN28iU4RdXiezswpWHUHWkJhrDNbG6XpE1A9nY9XA6Fha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cVnbupJY1qaVpZpw3c4HvsioAEii9J5CTzXTzNEeAkFK3GDeDpCKrXYUXmq811UE6U9BQiWmhRh5TNN3VQ68Xrp",
  "key1": "34WhgkH8CazVU7s9q3T3SrbKBTtREdebY245EnW8urZgYDJtf1L27bpndtpE4RbvHGTotoJScRmwx74mY2ntSctx",
  "key2": "5qw5zFLUysX5zmKeWKaEufwmgkznAM999obaNK1XACarmDFzawmLCqZjQ8vh6PMaYeDjXy2WLr31czs53G2RWX1r",
  "key3": "2ZPdu5L53P2hJerw7HkT6bGk9dM2DjFQpcHrwXiTFZWNDtLSbEkdPBTU3zX6jAptVxkfd6ujR8t5KSEbVfMvpMhr",
  "key4": "4rxb5YLh5Rm9d56gVXPdeBbg7cKAX9QNuCrkGDjHBCcHQpm38duqVgd3EkqfAPCC2KFUux74aCwaG8F2ZBQhot4c",
  "key5": "3nzcLpUfDPgiK5BoY5coswJYED38P8K6wJDEyDeY9PK8d6N42hedJR4RMHW7jXkjekgJcpMhGXV4YnSFDQjEStuh",
  "key6": "tXQWGBEsSTtApjX2u5JEvdvXhDVi1wzi83Xk33w7BLLX6ySdKUnL9djsAErkLewYnPdy9MHZhc71JGCTqFbngNX",
  "key7": "281B97sxwttysrNkZhvWt3Gn6JgTvmzjQsNNaEnJPFQsvWxoghFaTHW4FB7TxT2xF8Brvb6SqyX8wYwtPZqbPBJJ",
  "key8": "5dnoWQXxQypuZUUih9a68WBTUCux1yzMUvgcXgNe1RZxEBVEcCfnFrrXWWhPSMQJUx31xEiSqWjWKLAiaxV9riU6",
  "key9": "EKUd3fRift4xy1yzhqgVEUS5EF5VYWTHFRB2u6qdn8SRJnGmaVok6upEPsggf9NWT95QrALr5hmFPsBrGjNTmQN",
  "key10": "5FzzkH7hrV6suS8utMpRuHLTnuxQGMP2Qo63dnWK2Km88SUvMERxpFHJkJt4m3WLoj46jnvxwNFQNiUg19zAg2ht",
  "key11": "321ryB4SdLxZ6f8QYNHGNXxQkcAgEG7KmtekVRfpr5e6vPoeTPibib6xrREbxeHg5qseeZn8TfBzxfpA8PsmkrA6",
  "key12": "3M1uMUGCtZmThbQ2yiaDxDt48GkAcoLj8SWNDpoNJwxEf6JmkhnkH4HvW7d9wPkH7icFBgt6iB88nQuw4MJKtnnn",
  "key13": "t9fakdyBwJnBUFm2xQjg6R4s238Cx36Dkf4CsAazzGMyX1EWp8Cz5mmxokcYZ4LcEmQ15UjcaHEqJQFpFx1RsTd",
  "key14": "4bpF6TkQSLdcwsrLPL7NSBcXzod3tWDSKnxTAVokpqMnFdMPR8BU36jWVSLHKtexrNDvhcbfAbBKPRf4QNGxtQnj",
  "key15": "4PiJxcNVDGgnLn7MZsBfG1ejqp87WR3fQEF1t3Kg9y2CTEivqCvx7jyRPhUUtW8QhhR9uD1Lgiq4kQ4RNw6hm99C",
  "key16": "3gY8iJbJ1DLWAgvqa7iFxuEbcBeFQxDBHqLZyQUPSBb7BU4yCofBmFEScoPaGruSonYcEq3WgGqRZJbN1uc162Yp",
  "key17": "FTxuudt3QfY2R4rxdmWxEikjALx5bzyjLm6oiwarTV3w6YVcLK3PNVaM9Q9zNY2APFum5jaJGkyvxqL851pXKaX",
  "key18": "2aZDpbthrWuAbqrsU8zo5XnjmwGT45qG22sKtrYSGhVTnXBjdz3wqgpf2RiV8HSsfCh12rQZyT4tdBJX1X24LsVM",
  "key19": "3icpJQwdSuqUyxmxNSykTHbKrMr8jT6Ut3u5FQ4yMN7g1oNCYgcDWgDcbEs79fiRrQxEU11gCHThHkwUjJjPytqr",
  "key20": "4sj5TU81m18Svr2YaxsEZybS9JQpMSrbSkTXSYAaM9SzBZJdLrB3wALtZacRvGUFDGJuEz9AHgm4yTKSWYAWomQp",
  "key21": "42gCoSaKKQoEnwRVed7d4eVxUqyJFDfdENfw6PrECQUztdw4QCQHEh4P1wWqJYbvGchhh2XWMFaJTXX5LE9xw2C3",
  "key22": "2W5wguKNs2q5d4VkTriFT8iBA4atBomJUqZYL1p3xMSBKwpcZcYojNrLJT1NJQAqP9q9WX6KBN9aVjpiS7WQcmYe",
  "key23": "4iEVssKC92Gwd9bDJWQU9EwNciwm9J9cHGdguYXmj5PZddVievLrYkr2AdRbLJ2ePE84MFXNria5QsEb4rigsF6x",
  "key24": "5BgLQ6wMWKywoFc6XiLR886MMHxaXAWEpQWvJ9jKEYqHRGb7q9SuJiEyA3qDoyDZRfE7v9ZVZVLfzDnZNPz9QgwP",
  "key25": "3Tv6MCDhkzVSm5XrJFBs1tYvTfXncwjrXVxQAksX5dGa3q8VhWjBSMuf2XC6etitDiQQUJW2tcD3zDFZeCKRyLqo",
  "key26": "44Lrixo5ZtXX83PuGvQY8gA6mrvCXZWbg1TKotZc14Ej9SAgkAZfc6cB66AYLVojvMp5mbubqxjCnX7mNg2dFdYw",
  "key27": "48Xjir2znTBWNiQxqi49YeMBmTm99M8BCzSCso3geQo7BRcdNckxZyBiMzNWGWxataDDutFWbtQRHAyQZGt56Npm",
  "key28": "4RZZSKZN618Tq5F9HcsxLjvFg9qn6S9c6TFDg8mh1GK7jTWUEddSC82AaSBLjXCJxgYuodKzk5mnvzYoPSbb4z9d",
  "key29": "GSKgXSMrxpmsyn9bWd9WmbpWa65bihxJQLmBAuGSThVsLGwnurQYozdsJA2r7wuHtX5LvaQ6DcBuee9zX5FR48k",
  "key30": "2UnRkGMnzJeWi5eBLm8WYU3cH8SahsZheFiJdPGXhuV1tkiHBncxsryNbxydAsuWQvcaagtzG9BfJUvfpAiVDxMU",
  "key31": "3ptbgqwuDqexA9oYbgAzJALmfMoyXJUXyJurpfWYj5VV7TXwDzEs6JXAyD6yH4wDJr3x1kcBSAZe2ZQ2gxM7b5BX",
  "key32": "3Z4XSsBRMtG1FTcYDXw88bWY1hmHVyePHCSPAJH6xuiAwLaLD32LWcxfAGy1nDoFn4AURxthDpZjBiw2zDT8jUz5",
  "key33": "K5pbkCfiquijeJvjR8phy4rPLsxsYKLMf5Wy8uTU5pwMUmuHcf1AUxa7eiYkN9gGDuVUcLGG3AWDTLfYCuSaoGQ",
  "key34": "5jFRx2b8NLjsStLesenxmVABfh5MFsZPBbJxNVVH5b1H6beYSsSAHKG8CK5ugFCsURpUQhpgRf12fdEKYga5Q5Lh",
  "key35": "46LC1wPfjqjKaiTQJEDtB8oVBw6jCGm14MeGbSihLnWm7aoejGYL6hfdmFpffJxkHe8Yxx5zA9jvo8BNtDnK7kFr",
  "key36": "PihDAAee3oBfDndaArvASvHffB7amoYD6fBH3iSjAo8xYKXnuGj9fCua63FDCkhBs2RkV32sWqCy2zKUHstHvT8",
  "key37": "4X4pSJ98KXcgMu575G5z9suhwW9sgnA6XQfFzS5nKzuY8tzNMgKWX8tSifiKv31qH1EanCDQyuknBSLyeVZM7Ttn",
  "key38": "4RWHKZQro4anGRs7uNUeKjPUxPuqiotrbMixsorU3RAYuexYvi25EJoBoF3EeAhEnjfWGiPCMheBCDtaAwgR1eN7",
  "key39": "3b6bw1us58VzcfZBx5GjbTaCCRg5VoPma57UmbMZL2SVTrie2aYtMuVZD8N33DJwL5ethT8Z7uqNAbhW6jTiFfrY",
  "key40": "4XzjnPiwS9FUGJQ8MzUQFiekhEVZxtZVzXk3qcHXbo3zGJPeieUvXrMuYkWhUg6NDr1bQFVxe1bnNPyk54MSyfRC",
  "key41": "3GhYf1iDJhs3MqbY1u3LsJLbbLJdBuyW7wiajVwFNUAjjU7tqdNm9DqS68RFoFAHBQYHbUpViqBbQd6EDm7mhJXh"
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
