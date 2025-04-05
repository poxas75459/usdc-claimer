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
    "2D9iDHjAymibr5RuL2FCNe6Nk6TFdM9Y7DCPhM5qv9vBjGpKocvthPDGQrRBkx9NoTwEc1FNvetdJbMAs5YpmNkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hVyQXPWSFXjT87e8rjQjgfqxo5gftKDQVL3xWwWgxKkhoEk4VFTGNhSwtCyyRBYNpaAukNCpn9sdCuoWpCEyYUB",
  "key1": "4c1sgqFyjp5sYxQhoDLshxj4ijpcrbrUp3NwWK13QMRYKtC7wTJyn2yeahW5pFk3y2HwXBStJ3CkVWHk8vqUkroj",
  "key2": "3knSBYGGXsWeLuvcipED4qhKwrcCJ5tzj9A3BYpWeE2bAuf3PoirMBvMyf1bveeiikgDjgSoBUP9EQmpJFwYpfms",
  "key3": "g1sTDfznzJjN5h7y7hoWwsUyWYi167Fh5iGT98VmJdjQMU4gEXzwsNBr3LrPNNQXjZT5Cv9EQQZMgSEHcpHRCWh",
  "key4": "3uGUvTNHcAQYuQcLuZGAsMnt7rQioEyyNaSvAChj3cte3YUZvn8QJdSGLUcghxs4aAFadYZpv1LwjMfJsJmQBEXA",
  "key5": "2mM15RyUHnmRM5Hu9M8iQSRC6XKv2zwWGiWmXtzcTSKAqLUt8rxqpyYpVjiejfc6rDMi1SWWfabuPGKJF5FGEW5n",
  "key6": "2dTSbq83UbNF1QA38GeqWhqXupMvQ4RzMq1gCstqNBaMdFzPxZBsWSRzs2Kp9dFEMHi8Rod9eCQcNPs1UABGGWsq",
  "key7": "4NCJ4WFjfh4Yq3S9uJ6MwXSvSfXXuqquzJCzrc1JjNGayRKjC7FF4spdVEGD9wfQfLjGUMESuyv2F37LKcpwNpva",
  "key8": "3g782wmJknsGA3JyQH3aBqKGCWf9kqVQ2cKkbtypSRNdu87apfMHrLUY6sSgwgEi4LpLZDLQuhXM9xG2NiKDaTgd",
  "key9": "4bKv6LKGXsSVFgAeCr15bRcxCaPRGhAm2j65RjBFECxovNXaxXjBKJjanrQZmGCgeAXxAGwP85TpxFNboPphJxtz",
  "key10": "47qqmpPCBUxhAkQVthjGK8iW5zmc4h7HGAnzTnCwziAimTaKJEsbX36x3vcAyneEFo7ubZUUckHLZzJqp6zf6eCe",
  "key11": "21RxV6V3M9cJ6R96Fbj3rcvGT3ZEo2UTnhqv4Bxdq2WZgTCd2L5qyCjG7fx2BXseyoKQwQgcz7NnGa1GPiCdwaUD",
  "key12": "2rFHbvFqo7KQPZLzQCEaXMaab4BBCVfwj8h6ftzT16vjm67y8xXRf1GZgsphko9LhvUNhS2p1u8bta3UbWAF8Ruj",
  "key13": "4Cgmijdz9HbCfuiPerztyT5wHocEQKZi8rnscp65Fya8wJRfui5eL3eXqeq65EcyLu1yStxh62LZKRGu6nueFvVr",
  "key14": "LANJ5xVejDBUYfr5khzfNyczZigi3YjQnTms7ktRFTX23dKxY1TmzQv3t9hts1h7HQY6noZQfSan313mMcBqUB7",
  "key15": "4UPHgvY6Xg7znxG4N4cRV9tQ9ZMLLK4ZJmF3y5okKqdryADy2KsgsSmnZNBBGgGG4CHZkAeBQxbZ53R2FXi43Uk6",
  "key16": "3WWe4qjupXSGkQTDLbL8eNykQ3aKtAVsZSyzujvBZW68XH5xqpFcN4EkARWSdqf4fLNBQPA72yuMtuPZxXfgdUW5",
  "key17": "5MjjYLgFWdoFLDEot1ArrMxCeJz6MpK37NgceA8RV6iWDCXMBmH8S945kkGV4m9XghRhon746StGneP9WJ1nz97e",
  "key18": "5FkUMauAVzSbwz1LjA6D9EQy3ct7fKu9pD1tbABzgxrvNnPBdP6iS2ToqApdV7HugckthKaXHnAhebu7GRqrpi2g",
  "key19": "3FGhhZRYnbofnsv9bPeSPWAG6JCw7sGzyerqUHFPbfcF291DoDKuerf3Ew2s1ZkbPFCLh1e86C6yugqRpuJfvX23",
  "key20": "3oAkms8xLSAMMMsarpMWDTV8dBP8hyfk3cMFncEVFC2Wkzja7vRK1czFEAkjNZKUBeZcVjvmn8hmeh4Q1Vv4o9AG",
  "key21": "VQeEQmzNWP5B7f4jdh8RvwKj1kDXY9r182wPFi2sviW8LyTQuY2XRPaunuW9A59CLLCWCyB8FUn7xnPZH1nERM9",
  "key22": "2HhrhyPbXiVvywWoDxLgPoiNnj254i7JzgjnuC5GXaFBZkqDhxds6Kk2ziSw26ht2TesUSWgR57xg8qgvbi9iqw4",
  "key23": "3kWXzAjBYGUJq5M6tsE8PHJBvCUm41hYuDtfnEKAs5nLunE3heCrLbZd5vzPV6EKB1dcRjWyBxFTxh9rHVuuJ3Qo",
  "key24": "5CHyK8ZTooL3mDxsRGsr6av9q3fMtUpRx7qAecGy5q7pyk1f5ykLcCBT2RTKycYSMvLYuzEVD8Nyi2cLi2irhJu2",
  "key25": "4rz6NfEFksKqEZJARhT164Akowtx6mj3ZEPghfMHadKVtDuqTBrdvyck2ZZmBB6tzYyqB6qgtxMh3D3MXYvaC7HN",
  "key26": "5vBkHwFcb2NaVarfNazTJHut93zPCmx9RAPnakCpohzPb5s89XxuHAWcsdybccHBSQXc48GYez5FezqYZ8mCJqyb",
  "key27": "2Du7dWSKbNGB65LiGYCEZY7UdfuVKpogoxZvpwfQH26a44LKKbCLysGuKy1ygoScF2DT8JfaKBUKv1NZYbEZzc9L",
  "key28": "5aENNuoLg2cG9GDeJ1DLiTSxp1eMfCm2u8hiG9f6iLgK8WUGivbCSpA7XX441oxZxxnoFYCTUGZJRDZgA3RrHsfx",
  "key29": "3bpdyfeA2PE2iFSFGR7M5ZLfkoxbETZm36mLGN13N2WhfUJPkw6wk6m7fKyLM3gp3VbZKSh4jtfUXSAJ5fwez7yB",
  "key30": "5LietNUBXnaxwi7YMtoYX6gHApEjyoWbba7ssJkHHvd36afuuexmArs4oNkMoJvDGXAGuntopiad3gZXbMhPpzmA",
  "key31": "2nCMCE9Snsz66TRokzbVEXfbfx3Rbr1wKzogqdUB1YYJNmJuPjZ3Ma8pgkmTp7E9dSsxgLqBB4CMZhoBFRGohqsn",
  "key32": "3YLfUPBhzRNQ3J8GmDcq8NZeSi4HgRvA67kfmauukY4uAVSBhNoNrRxcmzX7o6F3xpXXsXmjuTDDuxEB5KcxXecd",
  "key33": "46fwEAKvS8cczcVMmZRnMTw6b7M2YZh9XtjNt9TFgXVSRPc5Fdci3vEAtfc9DQiG7Km8PoNxz4tg267QuLd9PjUC",
  "key34": "7xjjs3nxnBSr5iwyKQBbWNysDzYquWKE3G7sPWkLx2p8qx88Vnizja41XSUuzXMHxjd3fJt9JzHWVLDZ4fwvY9A",
  "key35": "5PAYM4LWUM9U2i7DHkGD2vMaGCUSHH62TcbzbBEV3Vktj7TDRY3Kc3qi2PgvnR2kuwLY5UrbSQhF2dhTWZuyxPVZ",
  "key36": "xDkkj6u9rMm6qd4smKzJmRojWqnJDMH3qDfwZS8BvYWiCEibveksB7eiRVJLLjVXcX2Yytwr217PyvsuYY4x18t",
  "key37": "2C6zXPWsVJu6nZki1HVw4SseoVvwCPNjSvQWsTnUN1o79TpUTRDw6wpVypinrcojYSWBBcxBEeKVZ3mUD2aQtxox",
  "key38": "3kWWK5muFx7gbSW9UnrH1uBEC5BKWTrtafjDPitbAKsds61JrRKtox1rbhoT1F5BScRbnBRMXApb7BcCCYSoBtYU",
  "key39": "4J5vtQAbAhZMFuuc6GggschCf2gMQncNyBifaugQKFnK3zoHvGfuCqSqFTDgLBzywyugWxsLiBcSJaNnebBDFiw",
  "key40": "2PAMsYiRNkwHZwMwmAnmhP9Ap1dACiYxkfneNEPDvFECELG25B4CsNS7qyDrLg2rUxFaPFfwSUBqjYaMHHYELEJU"
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
