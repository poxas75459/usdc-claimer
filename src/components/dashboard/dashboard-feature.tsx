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
    "2oPHMWMYczMawvuMMP5tn1cdPtXeq2sab7KBYWKcCXGwFWUi1z6CNMEYtCeViZrrP7BvmTufvX2TAhoVUhiNsvs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iDiuiQeBh7JNHNiuoPwWh4wP7YnRUh9onw5V5pwoeDj5d5fpsZyDFjCgxUa5Lny1Q5kM5tEPjuGZq1QmRpYfbr5",
  "key1": "2zZFM6rfkULM32Yrtqtki8Ggvs3XUnF8CMZ9xumR2TzNvJmKRhEvyWSwhgJe8KaC7bFdrZobyiuXZwvMv3y9MnQ9",
  "key2": "4ZiT9m7YoEPuEEikSHNFtKJCgDGwfmZALprLJJgwvu6YFaxAapX4PsrKKQQa1Yadqp7ohWZiovkA5hid8kdGbNTF",
  "key3": "8S6e3pk3BmkLtQVL2xYTzgYwTnrzB93bfBENMcfM7877VKw5a7dd5BCHwNtnfpbz64CpyCSeXawAxXabGu2NvHk",
  "key4": "WxR5cZWpKh8sPENUueDXXPT3fCiCN2yn1Pusxpc5yxh426BZUJk4icV6x6q3ezYpA9ryD4kSyZvkKvxoiqmeSuv",
  "key5": "5jxTMe9YeVViJxu4Bwk8NmWe5G6UWTPq8w3suKejKAWoEjgh7t4Y24juV498izcmV3gPT2sAVtqp2naXt3v72SuM",
  "key6": "HnxBu1vUZxE75DmXJGwz61uMHY3iTUxFY5opdgxnM6LaVsuS7sdvuZQdegheL1qPyNMzGXpYZ91TmW4yPDNJtZr",
  "key7": "4cYE4Xh5uSBnxagpiZKTuarcNe7K5yAxVGUXVf7eCSYu9DTD4rSPMgwzukwqeiSi1eFVrkqGQi5KvdMM1tqY1ZjF",
  "key8": "2q9tH9B5kM6sZriq9ADYvQgGEu6R9YP8hFfYQmsTdXCctHY9VPKeCEyq8tSS6J2WmNJR2QZkbaURVEtpjxGwLRZ1",
  "key9": "4u5yFHh1ejpvn8vNzL62Pcy1r4Y8z6TRNmjuXh6yFLv4NMwunBJXzna5be1be2GJMiPPaL7BoqgYag1mGor1FLEz",
  "key10": "3XeH5gy8KYQ88zG7bvegc8GWwdgSc9JA8xu1og8UnBgq7w3LFuqjNrcEQyKpBJfDquBe8BKR31Xw57Jp8yPWg9GX",
  "key11": "3BHxVVCEFiCocmErPw4sqr7hv5uxwoKnLc5cVsFFT7sDxh5jBd4SoKQE4MGMx369CNtRuFvnh5AzCCKSR9nnSozp",
  "key12": "fVG81FiRXM3iFSDTfA46etoxxbTkPuRhJzrKW92Vq8xpU5QfF5sr6FmkZMNjJeFoSyKqRVFyaBQKFP1eaZLGsYt",
  "key13": "678ABK9T9C9G3VT6CmV8sctfhVjgBvTiveDhZHt3UuyHo4VSTgYPzRbZjpgZjst9ocXPTWshiZYg1BSKu4YKkqQ3",
  "key14": "5B8J7d5vGSZPHzYPDXrMebNnHBfit5rj7za8dcVJ5XeyfaTjTyGnZkz1wu2tR2sQ4KKbdsV5fxr1QQZ989eSG5T2",
  "key15": "JfRFzKny6TZjCajdJjWMAcTjLv4wq92ZKWiaqRiW56rPvagvqqEatyxkL3dDXUdMeRCc6haCQJFVDYg4ePohEpy",
  "key16": "Yk7aH3xQLsibEXYYhSiHko68VGak9jVSDzzkaeUvLRCAAdfqTDbERL5dxkfymYijNn7vpYfa439Y5QakhTvzyzL",
  "key17": "5AhCjuyu5gKvj1Ea5JHn1WnSsNT3T5t8wUYFAwMwp6VQs3NxHouHsTyp9nEEeuCvVcq3PKZxGoFYuYgW2gCZbfww",
  "key18": "5d6h7uwYYQKNEgN2eDs1vtouFHAQFLPtgukDPjLscY6WQCUnZPZ3BFoso1cFg7rP8GYL1W4ZLUBTHf3Hr7zE8oNS",
  "key19": "V8zM2QMviJjUWMTMjJ9CTnx8bfPJm8RZQDh34nqFoZ2RusrxkXHEsGWvDgwHn9vbXK1W85gY21qmcAdhoKFxxCL",
  "key20": "5FyWkx2NAohMb7HMPkqFLA6MfBLCNRt53tfM5tD44aNCgDRiMBW9zzC6xtDH5Fcrz3LHFTqjePYitZjbmBL6QXej",
  "key21": "2PoYyLm6jxDxjZy2HikERPPQzkA8c9vR58EJBQcSgwNTw8pkxDnkAjAfkiu7VTUCrKa1L7gBqFYRhkT6HkqKgChN",
  "key22": "cgL3S8kREaKjCZjrmUenKGNPWTZwd6BfCvGqJm25Y73eFAX42RcUgGHU1ywS1R4FJdmu1iBsbf4ttxjG2p4ucpW",
  "key23": "64LGVfCuodJ2KHzvbbZGkEEniQr5g73jQQxe2TtRMsDTkpzvh654Sx7RPaENMmMttbuwgV5ndsh8ctiDVGCQrgSM",
  "key24": "2MTHsAFiw9MqGgdzQemM3ppcLMPkPDsyKWFRpSGdhHMBY8nM3x7eqey3GFa8zYSG5P6PEev2WwXpFhYmgTm6QTq5",
  "key25": "2jEg4HVTwonup3K5oEyTPu8Hh833QjeNruXprC16ntEKTCuJEZQ8FGkpf26wfD3VSW2fkWGVtfUtCTfCE6J8TKQj",
  "key26": "5HxVbqHRhJB7D3uqd4qBm6e1SjCMvokvFoQ5YvGVwRdjnrUui8HaE9MeAkxopLox4iUBUVDswnMbBrSs6d13nJWa",
  "key27": "4ynpbjfuSjD3Gmh8prt7JcViucq5GAbfryd2TMwjbXa3Qt3LvsuGFyxuH8wUWJjMfVuqh7qg42ha7dorm5YR8ng8",
  "key28": "5ZgKxD9e4e3hk6Fpcwkm3xKg57PdGzYQ322Gk8W1b9di2x2w3ocMZMkWbcsQgdoWpPmuW36qwHCUjTZNTanf8jxY",
  "key29": "x14vZf9yeQkHEmu7UWd9tamd2WUK9ZUB463F1sqPMpxSTdJzkbtcDmbanpbprLRVpcVUgaad3az9LJHS3oi5DGg",
  "key30": "3SZD32FKYEQQ9HiqCwb5VFUWMcAVRhqgmQMH1YCbpuNMMksyB4uMT2HbvkGr9XgP8YMgXaiGkostTkzsNp5cjwY9",
  "key31": "FtSZF7AF7zxHhLeb2AqxWtDWDsH1PYywLBqEv64Geb3Ty3NhB9J2s5opLTSjUE1mT4Jg2ATkiawuBNJMvrd5vvX",
  "key32": "55EBA43W7MfsMn7paCw9BDWPrudsyzGjp2RAA2bnvSKACvcrfbWdRCxwf8kKACUggm7CCJh6sVTcRCiPwA8QuC9Q",
  "key33": "4aXbAeykf9dGmnwPKg7GJGZY3ZctmzQYy9WqiPahkyaj2eJr38BXzjowmSMPMss1pkeGMDZ98cJ8EJsqf1LtUN3Z",
  "key34": "5ntc6EqzgCa7uTXnQN9k6zQf7Ec6QvCjrsCmMWr2a7YKKMU44KjUCbLS9NnARmCTJjj3P9CX3fuEb2RXj7uWuMWT",
  "key35": "5iSUDLtru4Yr222e1LZWJCLWrS23o5ixicSn8tCXXhojpXcdspLJ3TEoW45igxrrL2J8NbBzGRdVJf8xywX6AYpe",
  "key36": "5V1in8RPLqQWarLRSWys59ADoBSgcMTSXRTXRT9o98dJexkFu8KrRvgAR36UcZ8DG7D1aZyKCDrooj8tUDfMzbuj",
  "key37": "kWrCeAaPHm1Wf9dCe5pw3NJjzssDuTQaMfSFWzQNzL6LfRCkex38TSp79iECCCqHcqWmXQcPyfaBYYygbcHWUPj",
  "key38": "4v9JXKmXR7XB8tBtti6ozf2cjFigT61z2yZZQ5b7ooxruw2Y1T4Lbt6VBzfjAppf1HGm6f5E7y3oQGeoc9PrDddN",
  "key39": "4TG7gyVQ8Lcuch93YUjiqnjKvCyvakqCTjgfrCJ5ZvX3yKgWx4EHvvgP82geM7pXGJE1YYUWsU8RcbFNy1zoVJjr",
  "key40": "2TnTSpGFroEeBN3qrpJYh1Ybu9tHuh9P5d7kAXqeNG5WnriqGK4ZS5aAfbSj1oahopczBeDiU9tk27HrbxtPKZwy"
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
