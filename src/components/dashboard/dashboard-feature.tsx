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
    "oe2FEv8yLEtt3EQXgtSXwSigQBrnnHVmmUoqYxCJC5MryK7EKTW3gfcZpXNpetRxu6U36CHXaHUu6aSE1A3CPtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rnGcnifgXuNCL2H3aTKG35quiD2fahPqcpSVyPEG3Pcmar5c1nq4R56HYZGcCu7rGeALTDpzTkYV3931cwsSBYU",
  "key1": "3U1YXo45NJJHT62dqWB3nvrw7TxFo2PeKeWGQegsrK9xb3FnTAE5VFQa6oUQkXEizdxhjnBuQa2rSK1Vi5gZ9Uqc",
  "key2": "LHdhScEdm786HvLRMrX92Uv8JzsWWeiAPY4duDwg4btXmJrw6ixJeMQtvDitTBJauUaaWS58Ve9XXfVEuwzATHx",
  "key3": "5nrV3EgPGvTbX8JsaKtHMeSVm5NTDwtxHX2kiCzqML993Q1egbUmKSNQTw24X7cGSc24EiXxXQeMbhk1BhbqsGFN",
  "key4": "cWFCX1c7GpB8rahiAujES27TctBfP198daMLDMANn2qkYjrD4PUU5TtT3ivQfdjTwVNZKB5mtJHaE4JQauBZEUB",
  "key5": "4ynuYW6m2UxpWe7xYAcVB9iG12GMy7Q28fGTDUQS2CqjaQXZUZYTkBbxvfWpZ6jDsoXn7kEsTXHBXi4dCWVrkAAi",
  "key6": "4FpPJ91HZUYrKKVDWRmnAUaS3EnQCQDbuN5M98b2RM1RDtR2b3HfcGxjhLWWYCtcyDUVNY9RHfLogYm69J1Bh4u9",
  "key7": "2wcj1YyfZkrbSfneExod5eNoLDzJa4ftPeG1WxZ3eKZ8coSm2MoxxddLcso8GA7qSzgVY2GDps9hzZtevN8LMezZ",
  "key8": "2v8tuSZmRzAzRBknk4GVy8NCeh7r3tBnDMTPPE9CzQQcVkHE9fWQUHR5qmvwnCnMiZwUFqdttJXQwQ7Uj8Mq76tU",
  "key9": "42tHv5XTskkvfx3kfvoPp6pMGetcpH7GYTdaDFoGFs5GApFtfebBU29E6zU91LCDUJoPr4VUSBpiyfUdzRGnM2k",
  "key10": "3QmqVnH5zQNpfM81Fjrd9puQvyhHdTuTFBcvazdw8SZZzN8amm5rnMEkZ2VupZGNAqt5LF9prkKF4sCr8eVCC1XU",
  "key11": "3KsRM4eiZNTHFSZ6VWqjomNgzJjSvVUKu1CDMsg2YwVa8JundEAYEZKSKo3jcyqZrPfMy3LLoVTSALaSpN9MvquT",
  "key12": "La8Eg4UYSmr916sZ8zeUWSs7xXGKp8Vcen2r77HYnMTYAgF584HKAkmGect5QHYsMVFbARrLNb59YDe31fKSucg",
  "key13": "nDkjVm2TbZRDTtbDsAG9zDTC2JXKcgEYkaSirRzZefxTaDJX2jg3wxv71Qc2Gbi3KRLHGoVtVEuEZ6xCkvFg4JV",
  "key14": "L3YWGhnSkUYDgBVW5k8VchhrqASRhmahVoMyth7X14rz2eqsKBX6xE4UfwqSFS4zdP3GgNZh4K8n6DrNzEUSqhe",
  "key15": "7Yc44ncC7dTkjnDj8yiagLFFvyLahrfihHwknSMEULc9DbNmp6Jn6rNTyUorsjeS3hdMy6fqJXjZjHZBXRnKjHx",
  "key16": "56jAj17u7YGPKuvtUMRka7nmNachhkHPu7XDjCLgqbCVTRX3Vk87U2MfmdLsuFc4wf9HRchRAAHH8g1xsCPRXrwo",
  "key17": "4AuQmS7UhME77Cw3gyTu4AjwHuRUuU5zWXAm3hVhRECtVt4B13FvrmmWNjhAqTsJFTMMyQ5yYaFq2Vv9jnjFVRcN",
  "key18": "P3jRQPxeqC49n9SfRnRZ2a3HdXG7yTdfM1L9UiMrhbfpFvyuns1EM28gFUqRy6BEtFSLdxWgedTpbH4SkAuvknB",
  "key19": "58bcPtmkmQXhzToGvfNbVsSRzwqnN7hZBDoB9u3kLN3hUU1tujT5e95NisojTm3s3yYYivG28eM5Pe6TW13eKgrp",
  "key20": "58HRSgKHyQoDJi2XYW4fvWGLAmJgNvmybiM2MrBUUyAthzhBvgbY7jLKYWBrs5cLJd16coaUW3QgE7GGsp27udK5",
  "key21": "5Pafhzp93ieDYBoY7oigoLqajZqoVuVXSkE2vxPykgvaLKTCqGSQ4nS3UbK5b1PPdyeHVp6mp3Cs8w5HMyRue8Um",
  "key22": "3k874BsDyph2tkteyryG6nFLvQxkwfcid3gkcXfbQwPwv5i6bAKZFRJs4Fkk6vj5EUTNHvhW5nqbGQGocE3xsxym",
  "key23": "63tkKVk7vrvo62UTc4SayVd16eusQHxkEaeTnGCs9tDocbMbopt8SRgnUJgDwRnvxAhaVqkHSHAqMSYy5v8DXkHb",
  "key24": "Z98GX8EFx7d371QtE5gkhVyx47XUdhkQ6oGjYiX2q1LY3EWEc81uWn44goDqk3Eo8NmaaaiAdLQie8oMrNrmBnB",
  "key25": "DrgpchV9k26LcJLivcg6TQMv9QMudaXeAjPyZx14o4vcWocX4ed4b1JF9Z3HspSmtde8JYtFNP47LE99McurmkP",
  "key26": "3GjxGkKYzRbGeFoc7imrcjV6JJP8j1GpTURGAk6WV1njox5RkcKDe3vJLBJAsLNMgwWgcTFToigYGPDvQkAmPAoU",
  "key27": "2hBwoy1tb9LZgxuk9d91R5oFauu7ZWMWgaoyKHabx9336rZY4rhnKCU3DA8ignAw78x6XLzm3QQEsbDn1ki66BxQ",
  "key28": "5ZnZTWKMgp5zvPATL28nL6SD4ttguYBEB8nCvy1B4PLwacw3hirJWwFUjLTqkkeqqGc58vd2hkP5wk6mRPLLaHfc",
  "key29": "55UKSTXeWrvSr1AzbxyQMrcdXV7f2F3bSmnHTbyUU2mKpAfu3ZLFT4MZpUjqaKFRVeBDEpo7q5sQxD5W1G1RJVYa",
  "key30": "4WNwMAbJsEDz33ymr56xpa72PeWLMkfvj17cygozUeDuTGFcCyhqaWZhUE1zwAk3sT1dQUyouc2YPpeJfa9y2y35",
  "key31": "33zonQW4YNtsn1PqNS1wCGHgsBm86ksJ4sgw6mFEjm9Xx5tX9gqJuS3W1DqH58BAdtQ5iXW2YtBwXLKjBgQoMk88",
  "key32": "33pnP7mGYHGVPsjjjS74rcoWWrpruFQ1XcL348BC6HFwodBN5NoeZRrAng16USBkNfucP9xVEYNTyCe8kDUVXULa",
  "key33": "3gbkubfkWogtQKoa4mdzDUNDTgqjDK4S63FjivrUsuQA1u5xKV5XidiQ6UWkuptGVTrH6UhZ7JQ54ueszXLZPQEN",
  "key34": "2YgJwefAM47ubcNU7T29CmAa3fdA9yo5MxREyh1wUpxWRao1q6CyiuYVzwmbvASn7q6FnbCxFDpPwUcnwQ2Dojmt",
  "key35": "53X2aJ5EMfLd6fCEDFZiv8yy976GfaC4RKVw4UsUv51fymHxvEES3xmyJVYop1iPQK2KmyerT5rkHKyMQsAkNjY5",
  "key36": "65e3a4t3ZRyRUKej1rK57jqRfFYaCsCU6QAigMYFksHvAzivhfVhEfBknu2uXVnQxRd69SwJ71TenKddMAHVLkuY",
  "key37": "VauQ8TRESwehj99uqYd6f4jMQw589cJwMhtNky19hmZL6igKyZa47U1dJdxssmxBnMreV2VU6igE5XW4WkpB54y",
  "key38": "atvGKp1Ezvsd7fswEXprGwnd4L4wUeJCXX1cNUSWnaxNtboiN5d49pDVeCuy9anY7CN647AjQVDZrRHTGbyYnfd",
  "key39": "ptCk2w5EERbbQYPeHagR9XRfuQC7UWYkiJrA3bBLBnTKDBXLSv4j9CUARgFwGZRbNhMkbLawqaHULv11GDjcFWY",
  "key40": "4FF7KFs7JefwTvDEe3GvD9v3MwJ59Se5VgULMuR8wT5nwLhbcZjtCryYryFAgobvBAJQHm2yh8ZP66LhTjgittcK",
  "key41": "2AGgGB3q27eLp8sr2XbU6mGiPwKLpxuQ87RFpPGrMKuBQTbs46CcHFbj7o7oow7FVXafirMXWEdYeHYbiL1fN7LV",
  "key42": "3EGkUkvxWNUqgvmNTF9V5d7EG9YvKRJv4UUPXPypdhs9A3byqBRJN5drMzYWQxzB4tuZGyYZDHtHsRwkvDUtwrB5",
  "key43": "W1spa42dBSDSHEyQyaTvmdnDjVdRaXZc3ot6wVTq7PS7NDnfXYCAVWaKNVQFYMs9Dknrr2PQGwBuBfLV7N5zHCp",
  "key44": "5AA87b82dGdMYRAbKmKCME4uaCDgAP1DmPgVXzQpDNJeVjK8BARsnQZv1JaJwu9ReE7dwSocG7MJNGxSpoSTm1cn"
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
