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
    "2B88QfrtXQeqdLFT57hcna7kNBrMVMuXnamsZCRzajd2B3uFycM7uuoxhrSZogknQxAvfidEvQk9FkpYyY7DgB7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66PMtSN5vn2cnJ5kTBMzxUp5oEHRSwfHJCfAWA6x5T5WrfhyhZDcmDXZx7Qkngd8Uwq8ovxbfkCZXW7jadt1vmFb",
  "key1": "5i4xWgbfsUntT4uMH27jELimBKfvZvWTPQEqpWJ9ARFokxNHzQ3nrXdbKcE41YczewR99pK1jERYKsA53Xh7eqQU",
  "key2": "3AtPtPFuiYKGtHgaFWisc5nHmvFbUj4VoKWxD3zDjWjpLsEqfioGjsbrx9Jb67AaCe7P2L2DLc6GG8U1A1r6UG4m",
  "key3": "2eK7K839koornpkL3ejNVS23hyp4tYo11Wkk3cBQxU77rJxZB8BR2djjXnof3ucwCobd2gDcH8mAbgz9XBF3uWrh",
  "key4": "4PmcgGcPyCzD5gqvDQrJZDMeFwhoRQxbeQukmS7E7FrdDHekqG8q5n8JK9sJH3Pfp1BgdhZc1k5Drxxb22s2bkBo",
  "key5": "35Hmf2goGUHF6nd9rrtKD9hbfgxppBmqSdKLj76Vv3wkdQiVKfXTgqLYc6sscMS8gTzuRtTBWmAEt1nhxfgZHk2j",
  "key6": "bBP1aG6C8F2u1APnNGyiarZkGfBsBjT8Y7JqHJb6pg6wXLmpCkAN47KCi4TH5E3JmCkAKXK2UcvPUtLJKxpsR6P",
  "key7": "3f2QmXkwm15BNjNUmZcmB6sKtkMQYh5BH21u3uuHn8PLLbxQdF5EXk4vLFso8K8aAikUvQSv8h7o9v73AUSCdAS2",
  "key8": "4jbvbuWadT5JkQofjxhNXZ7StKwKo3J147Bo9Mww1EweYQpYJN3uoMQBAftiwf8Sva6iqs7NPW8t2oAntF6hNTxc",
  "key9": "2K1jkJidCoZ7RtTBbDyq4skuYXW9tNKvnXVir13vmTpSBkmgHk9g6gFhCaKEZAVKuuBDxodcfZqtL6dE3Tc96WJr",
  "key10": "25rFhBcPJDsSJ7dszsQAwcRguEamtv3bRJSMKTBZohMubP19u9eXbP6yBbKuMsc97geUdsuDY8vg45Z5EiRanwGs",
  "key11": "2TJ1uPSwXg4rfoh7w7bhdYbKmr7cgTqHzDYfg8PsST8vDtseW2RXCYCkopfcQmqqj9462EEJkmKAKU6MHNzAPMPA",
  "key12": "2bWXLn1YAkJ6C8Azsp5eJQMd4KFcdzti524vDL4DGdr4x4mVCSLiK4GMTze7oeNeCmLh94v8rh8mh1kVxoGkYdhC",
  "key13": "2uDPWYhHWstT7KS6xE1558vV8esccwBVVEjrAPcvJV55P1ETNoJ8n5sxHpo7Z5UrfbwnoAAR68A3xS4dNKiza8wD",
  "key14": "23i8B83QcgMomYTfH7EreT1fNotL7aiBrEXvRManaQkNWpJ1Ejd3YgS5YtqPcym8koVsbi5XnHpL96MKerNWqgYy",
  "key15": "54MdvUGScREsKrnLWjp5H24TaNsJdvgtbrkVLt4ebPkE2dJUcFC5PiXvzYjSvkkGcAbjPJ6CjcE1wk3QtpW3m6Xu",
  "key16": "3k4qw4v9eGqXDnybxGY5itVZUxxqctWRcuX6mYtTk7JC938ZjWEpVk9Kd2oBdyDfS21TWrKu37bQ97ru4UDwVRQs",
  "key17": "2rYw8xBAY4c22ZYL64ae7CQ598a7QiTwowqeNii28rNV75FTCkf5HAZnWdkcLczvNfizgP2uvdBbt7U6YTJLpzNm",
  "key18": "VLo6Rkao6CU75m1YqWdxQ6YmzKVbZqmLNsQVJuxxRQTktYjiS3JWFRnuAjy3rrERBVpj7fCZRurs4d53iSUZAdh",
  "key19": "4n7Je7RCggVZm5GCrbyv8UdhHFb427uySwqZbBGYT89XSssJGS7Wuhw8p41WXDfyNL8ANkJiMiHJ4wqHGmmDLkht",
  "key20": "4W2843yMHiKXyZaGPQV2exVwVpmsENm2kJ4gbFDoktcZWyx7x89T4ToxDysiQAVxd7uYdK8ULbh272Az5ciYj9Qq",
  "key21": "JjNtLd6ejh8ivX4YuezwBdkodeBYf8joQ7YoXseRexUdyCsT4kZEJKxNLLJne2pQ9EGSaVT9fEPE5FrJ8NzfYga",
  "key22": "63iLU6u6xTZeLNytXKr6vNvt2RVDFvSupxNrW8svHCrzGXwZQ5J6NK21f98nFJxY5vzs5vmJuQKoVfVP5NxaiV3Q",
  "key23": "3mVjecH8g6zSXxxXPn2j1nKHXLPb41rAzVrdFs7K3dxsLu7CpSfkSHGebWQ2fHwgvWrDLdtkJ93zBn8uC6zHTWbC",
  "key24": "PT2FXcUs92Hoq6jPhG75cUdrTfPGnG6rQUUbH8hqL4LuR5tYGYZ6icst4MLxfw6oSWMgFma4m1o8wS85tCk5m7f",
  "key25": "29oRpHhnxdeFPk7QMSUSeGtsvUqPYLMo3PwCdVykRFHn2ztv9Du2zRQhTECwinsg9u8th4Q3nwSgRNiQC3DGyHdR",
  "key26": "4uRsHuS6QFU43p2nCGfRroSeV8TcY1LdjWczV8iKqy81PVb2CTRFE19hV68wZcVqca4tp1df3tgWp72S36qxWBj1",
  "key27": "5M5aKb2Deb1JaSf1e5kVzEwrFP4R1j2tFrBaGWjVx9vxcr4Ak24MKmWAJeBPG3v6N2FSyABS7PspT2pHsAGf1sJP",
  "key28": "zpwo26nRoJab2fSkrceNxU3Jb6GKsq4X5AnRD59qCwgkjD2DXTyoTiuLVDEjbWN6NrazbAxVb9UAJ5bunjiTPzU",
  "key29": "3jfVWRpv25eaZW6oMrLQUsgm1XbgnBEX17qSBRNZrG6fhZ4Xh8nKMgWSRZ98Pgv2taKtRcaYfzrgQN1sYtVP3RyE",
  "key30": "4koy5WnvKBbMWGg62ZzvxjnYPmpY5Gp1D5SZWrnRqVaUocbw6uLE4JcA43WVNo7MpMZ7jbACAxCkbe7Tw5TeTUik",
  "key31": "MGQZrtaZma8Gv3M8QAjRjN46PjMCz4DwBeWQj7nEVryesUK4VK8zrbffo5nc4FWJkjbX83uYhwwyv1Vov9TrKqp",
  "key32": "2LFgtB4UtHv7urAre5XwAj8uVDn4enXWTrsAK5nDBPKDcjcWdfrdnFnJKYYYqjU3r3fuXtPpYYUJQvd8Znv696Fx",
  "key33": "4vX3hDSCfWjk5mrVGbZW76dGtdeSnBn8Ry4sJQiqFuoQ6v6C4jDkfe9YxcT1RWWP2k15TFdjNpnjQui6kMGGdhEW",
  "key34": "wrT6i8hRok8tFMBrXsoacqinQZEtPqntvdwVEQMzUbiuBTqpt4YhLdXrZ7pqaJfGNwY3yZ4UhRpo8ptx2eiEmWs",
  "key35": "4pHvr2RqUyBpMV2chiQrauPeatiy6fRKGMG6fS6oCGtx8P8UaMurA5hex4rvsTkq3sCPbcDMZdKwHrRysJSjB2ME"
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
