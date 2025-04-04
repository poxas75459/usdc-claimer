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
    "8fHzrFD5gGr6ygukJsSYEGcrpVb1w1YLjwXHdHX61gYEfQ5x5tAzDvNpDkcXTtSDoNeWXDKnpnU8vfB6cTLRU43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xp5okk6XnMKQLdCkv2whThpfg3bupRBf7tnqN935c81KqJrQN4QHnYK6KvmcPzG4fabXyxBGPpFCHMyu7pgW8UP",
  "key1": "4M7rEp7sqLCijVHbqYSDMHdxTvJHZeZcxEGJ83chDGNb5jJLFauLuMT4s3c3q9yhZAjVFymogYQ134dS1uMKvLEf",
  "key2": "4mokeZY1ZCJEegJTitnJ5cuRzdUCpQs5f1LzTctMFeTJijAX4ciXB8BgheHxf5LxG4X7ujdmg9aEs1nkG9SAna1k",
  "key3": "5NLsa7UCFDd2Sw6fQc355nKMAANG4LZpTzfE7tNH4UHf1mhgL9zwyExa3y7iemjPt9q4rDY1yMekCuMw3V3nFZSu",
  "key4": "4rCuHyepfNF7cJttPGUVJ6vzFaZpUnMaHT3X34HtBdXBZWYY4S6njUdVmAjuijFWxFvVmVycCbb2K13yk3fWcL6M",
  "key5": "3QX1T8YroGnsAHyWjHBrx63JV3GdwyEqE5gXRsHnfUJoucgGcbcesp6q7YCTPm6cHpZcnMqSq92NzUXTs5nB1ZWF",
  "key6": "64HBfKxM89AERZeAnHqb792Ks1wb9E2vrpPHPjuK76t5epPt6x5gaEEaNL5nBfTgyWYQzkicBf5CvaJTa6VFUyN",
  "key7": "jnRamqoW2jYL9p6bu9pon4RjHG4xMBR4Fv6uCGUwn4uiyWmPt7d3W3L3DfhsGnuiNKaXjMptm91wMovWt9f9SSH",
  "key8": "5MZ3Td5WKRSE6Hj2R2pGJ8rLdYqVsSj6h8voHmr3BXTcZEJ2sUJTKyRFqb6CPJqUPSBrzLMGfaTgCpDe4f3MqAZg",
  "key9": "5pnrpqsYu7kth7v3zWye6h2ZRSZRD7vJMkoAWrHGhaDtEHEYVbgqCENrah6QJzg35eX2eyguJwtUHkB2A3vChGr3",
  "key10": "36JG8XwUVfpmaD9hgQFqcyaF6UAJQzYxurNtRDf5ueBrympzjZ65S43EZnahDnGYJtsh98ymKKLjqaXTh4Bg5DV9",
  "key11": "5BS74gWNf7sjW9gr6o3Dbduuy7vj1GLnFNW1t8czKamUDh56pfWuCDoVpyiXdwC1aJNA3LoMh43bx9xPZtrM4ZnG",
  "key12": "25ufQ1Zv5BDLNHVvPnozLec2g8x4Gwnp1ez4ueAjsDfW6BXEN5ZEk24mjb6XDQFcLo83vXi7sJ5RB4gBRw3U54mk",
  "key13": "3DwF2RPXhy7TWmD98wCqQjS4E7hFMFMyP8Fz2Wiu2gjDneiS1YKojoBrL256Esrj1DH3iP7rnUhzyM4ijpBfqq3F",
  "key14": "Jsqm3sCbe1MKgi6cAEz5Xzxd7F6bTrrTDWUgvbSyWVkq7urEyUsuXVS52fAce2LBemQoAmQHNkUsvxTvfLg4hbG",
  "key15": "42Ja5PhqtuaENRXdbaKfQasHheqaQY8baQdyc7fTNN6rw8AinYfYeLEyXnYX78XB14pJocnkWCRjcVbtssaE5f1H",
  "key16": "4dWKjYagnhxkDCTKqmxJD2Kn4bcGk4TULQvmrw7bWLbDJioMa9BctZ1hkq53q9t3mG8opF8JsLzfdQ2hPrubtSKG",
  "key17": "4h1B1hDLwgNVu56sjajjoqDr5GJbQ7dZLWHpc98kU6XozsXedH6NpSLo3wBzSiR2mWHuUwSkszHMnLfTFkFqtLxn",
  "key18": "2UXNtYTyis7Y6Xk19i8yKpXTREBNu8aiHGPPwJE9YVjAAFx19mg3B4QGZg8T9obWwAFFagSwobvnSnwBm7n3wVpT",
  "key19": "5Wa6tF6au3cryS7LphJWGDvM5f4yqH8sE24PmZMdTbqvoRytTxdcmDRrJWdWZqwSxgXFEHmA2yMLnFABEDWRbiMh",
  "key20": "wHc5kJwdHWpvhANX1vvUP9u7yTWr2jMBDxDkBDjkoM4Z2XpQVK1waM54ue4tEe3Y2nyPTD3Zgz2RdPmZ8vrANYd",
  "key21": "pJKAZbV6D3xWMarCCUG7N4iwgeKcrc765ynVzF4A87zJsswuZXzmyH3jCrGPAS2Am1bnLyqrb9mMpDMr4TUtbPs",
  "key22": "RTmBcs4mvhmY54ffggR8rpDYXzJiLnBKYQfSpXS1ittUB3S64tW96LnL3yHGZWZRZ2BUMSQFBC3MTA8h7YwedAF",
  "key23": "1hU4nDaWzv6Rh2AtwtBr9NRnv8ZqV6A7cea8KAZ6QJsi6eEAWXeSamaAWPmV3UcnRDd13gCQLYGb2PhycGKSeM1",
  "key24": "2TC9mAQSL3MezDamWoLRrEX2bcYNnrsx1XR8p5iaxH5g24ebubMbP9m1XxJ8MA9oHndosXTyZv2zZ5jvyuahmosm",
  "key25": "2EUcv5ieEeoypRhxUNdVJQLc679n6fDodeJhBtuiMeQ5YigvQP242MUH6q4ALPucBX1ruNKCapvnRMTLHgGaxhKR",
  "key26": "E3WNgjdXY3GEnfCScuLeNhEWzekQKs6xh8kqamGsRrm6TPT3Qbk6avJdQ1uCihMYxhhikvW1cHJzD4ueQfMCpGE",
  "key27": "4ak1ztJdCCFUVzpz25Tmdnw69XwnY3Zp4vfCpnM7YTaYUMMNBDH89xY8qExpzdb2ojvKfwsU4NRyzGroDcuPxjMs",
  "key28": "4ABo8ZiwhQNy1QSRXnQper6ykFeKNgbXeYwSKzdKxiJp5zX9ydsKKjhybutHoRTvwVBDNnsHGXkMSX5Sx7P7892n",
  "key29": "5vzuu8KjJcuGf1HFuTZm3F8ggJoK46kuqNGEABKaio7cF2BuNgGd4gzjBfnJQuBGfoTSKE3oq4M8D4L4N6Z649JN",
  "key30": "4ZhFSJ6bLYrPwBM9z5SurhLTNVDPmZyKGB3Vn5zvc5ruaqx1bStv8cCFDhz7a8ss4koDar9xKXAh8Ks5YKeDgyM",
  "key31": "2ZfxoddGLJTjX22S1WxV2D9nGZbADfhYLPRffSzS2jKH9mkAcKf3qQSivR7UGM7JD4hST7z5cLZsUJVjgRchXYr6",
  "key32": "3K1r5RgAJwAb8DuBi3tmkugv9dDDsxWgFqcv3sjeT6WVz6C2EyxH4U4TEehxFZEfbyXSGiUZcEUJqYEDaEoofWjQ",
  "key33": "61fWvCZSbkx2b18CN3WVEAa4whzrkbJH65poNj9wVCWiUuedgstgk1EELhL5uzbjWHUkrDLEi4fqTzQU1fWFDpQm",
  "key34": "4FUdJ7kUrHdcE7bNyFS9uosbn3xXn1w2jtdGjdrbmAEzR4aQcwusd2mi6c5j2w2KaeiSWPi1NjXQ5gPF5qQm3kZE",
  "key35": "kzu4zfZBjXZfWAbdrdaE3rJXZPMUZmuYi7sNkQZkXcU4Eh6gJ5YwfeaNWXs7ns54HENi7BgYCbqkdT8fDXxW4T6",
  "key36": "5pogXCD3HVfjJniYoa3PiSNizhJGK2a8F4KPXLAnXNv6zniy1DXVMqo4SMxcih1EDAtDU4zmP6t52vvQonpJMMFC",
  "key37": "22t8G2tfQoQGuupgxmFA1gHSTVn7HywgMbgDCixDkHCMeqs3JamMQiaK6QmgYWXufRtm1Kf7SyJmVNoTtUhPZAxp",
  "key38": "2wfxBQTFaVK8fnNtJTsQ59pEnwuamCZ6b1zKTtkjGDtn2q6MwknzTEWQ8TdP7a9aXzm1F2DfLMStXYfcj52dNdft",
  "key39": "5u1idfHeD2dBTne3XghLiFNo68wW5Q3q7gwNEYLyduj73DvkXWHLNr6hTPUyZFHZm4LtF1Nug9njLqcBrLZ2UCji",
  "key40": "wq4voKUuv3s1DgD3osUNPeHYYDzzKrr91RspzwsZW7J8TxrzpuEZN7EaCorPQtotWwLvMB3qJKV2i5rs6ytPDFJ",
  "key41": "2zXwHk1hD5QyZJuJJ7dTBG6YHnkZzmxvkgco6fTEnSo8MghhFJP97EQWriXi2rGs1V8N8m6HQqsRk1QkY6pjGWL5",
  "key42": "2pLe6Q8xJxBAKmMcGimLpHn2rmfMyJ3ieF4JkSJLBNmdmATMTWDQ9CyioVSZWiWFQC7RDSeDhess4CL2oQ7FWdZB",
  "key43": "3fc6ucKD5gp72ZY2r32FryboS9NhvXrr1TujE5nqPhcg5ShQcB1H15VFYHdXPAkU8JURgMnxGDbnb62rVsQe3Rrr",
  "key44": "57umRvLbmxAAMwEdgARdG1LJzD2tBVBhPCCEhzQpz89cDSRL2vLPpc2cW86MgUYoAHe7TrpozRhM7G4Qhk4TADWR",
  "key45": "2AYmNXSUZkUwR3y6FvXTNC2YGsoTMoqVGdokQHLEDTfQQeBGgBN9PPf3VWkKcCpqmAEQtHqRZ6KsBpe65jBSKD8V",
  "key46": "2udBg4gjDn42UaF3TqirPeiJePd1CKgvR2gXcjYTPSdQwAhTBTCuL2enN2BvrjnGgpbjn1PwukkZWz7BX1aisJ5z",
  "key47": "2d9dJyiAH4RzUMeSbrtj1EXVvF1oK2YJJZ6YS8y8fjkQqt8FGf3Dk4PKNK1pRKmTKJrJXEtffCTVVR6KdE6CDEz9",
  "key48": "5zzMo7oLB4zqQ6GhHhLWQBzCDtX7PVJzbTv2Jd9b2QJti76sE2crDH87raoWykU2jgF33dPYbWQbqZrnMVTnnEMD"
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
