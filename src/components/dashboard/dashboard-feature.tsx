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
    "5Zr3oEeg7KbnBxEosk2ewL5GzaNycQjRABGQ4g3d9TyDZAnE3apcXgoZn6pbC2Hg5vyw7N2eoK5CcTn5WN9L3XSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZ6LEiD4mnC1Yp7q5J8ivhYGvYZEHCYs7h1ym8wcXgrzMjsDQRxctUcwV59SQb2Rs15HEUqTYmPc8yA6uoWSpXb",
  "key1": "5gCgEQ4ic2XgsKgeTCHYLvMUSyxAwN9K77ZdugSFjBrzwmFgLDkLuRig5opmMcvE7hopk9TW1EMkEbKBzAVGB1pR",
  "key2": "3yJiwGY4GDfeyg1VGFxxwToVqLSkEN8JwwpCyyuLwvKYWQVUFK5pho5TqHR7J75F7QxKAMCFjAcT2iutADad2NFE",
  "key3": "4eR5yP77LQY6AUY71PCE6zq6G2tcFaoT2FUyW3GS6HJxXqz4n2ZQT9prMi4TRpvck8oCthzmyCA8Q5t9W9FH7n88",
  "key4": "2f5Me5JRi6Yfdi7zcWh1JJv688a6YgVtVQL63ZLiyHZ9uAivz15z49GQqpCqGDiGjwwqHdVaP7LLUhCSdBhxjnFg",
  "key5": "QZpmURa628jC2kWExydpqcWmqPZwBFLFDXaKbkfX41muchZs3t2yQ7ojVQANu6y65Cs2gdyMYTEuFqAtkGJX5Uj",
  "key6": "4eRSUmMCZj6VzYS8deZyj5d7N1RPoHEtDXbXBhX9NiekzZE5h34xNaQNieCXZtZrGsZx1VMmqM3Wcj6h5vGPmitE",
  "key7": "5mvYhZ5szXdjtvQygWnPB7WBsmVkw1oiqkcjfGysCjbdkb8TfQCcKXapDBCar6xAnMczCgXdx5mzZBb891Ffqfc4",
  "key8": "37tjQc5mZe1S1yahJrJmHCbAGc1eybDKHU3ksmDSb8ZU4yw5X7DL5bavx4U1EeRWv5wv8nu7naPjaREAyCWGsUjT",
  "key9": "4td52G3V5qpsPhTpZ6Qyjx5LAcanuXXkQS1coU35o1kFjjagtGAvGDEEmPcQDEQbLRVPkhv2gbXC1Gjozjqsrz1Y",
  "key10": "T8wvVBJr6EazbQS4S7bYbRsACjhZWey5e65ey1s2cLTFfoyK8Ptj4xB5PDheNpkNLk2BXGaq6CEjap8pcUQ15Fc",
  "key11": "5Sq6LDs94yK2Cmr6FGtAKdip5ozAw3gw6ZpWZeajaRt22cZWmNMER4YQZ9kNc397ijZ8uAzgtXkNoNX75YG1pnJ1",
  "key12": "2dcrapUvgh2dbytv1PKDBZgkfdGugAh8Fq1cSd4i9Pz87cViDdWLyTM4sKHSomSPd2XvL1ufBY3YxYUyBjVCq4zf",
  "key13": "X5mR9wefuNaCYYce4y81pJxMtpkvT9m45NrrwwurTtC2bHQoRnVcn7f3b6XYKZr536SAqfVRWjzmTZFvJiJAALb",
  "key14": "574R9vfRzDcko5ZeS4p1NGwoaFaiUYVxkaAw5VQr2ArDZrFDtBz287TvWuHRvfvZnrsGjKagwkfaRaNZA4nfVAjF",
  "key15": "463YY1FkaiQUvH8HKCYoRyA4JrkyzSYfeupzzeCsunT3SaQEK2FFLJ3ZMNdmff4QPsBNiTRM2L6PVqU3m5ZgG5b8",
  "key16": "Z4KKY7f5zgz3qy7NT7QTebtE7E3dqzdF2w9hZbxfZLz8So7ZiSnGfg12dzdTHFiFpVhsTCVHpq6w6GtucGyBzhF",
  "key17": "3oNkkHNSCxBPcydwK9xyFwtcZtJPJ4WyQQT1m2dppdK3a7h7wYMK5hP11QceKiHLbBPk6mrX5HocsdrEU2z6Ywud",
  "key18": "o9zG3zVywwQzFtaX5W8JznvPWmHhTCLQ5iWjqFvc1EBsoUYsRbtVTLCCRCV4urjzUBWAEqz3EMjVqY79kQUXLhi",
  "key19": "3vU9ygfSV98NPUH5nXYcWDGpyh4tZ6FaUt5c2hGBuhYrZbK4n3UEuJb5kvTWUwNSQqao2ESFGcKaFbKr66M8zuhm",
  "key20": "5s7nobNL8GnoZJBK63iRi2gtBXf6yw1FVm8Yv67M6dchcCjr3KjBoSZKbD4t1KLBZRXcAFE7vHhnKrW37G5FjMCn",
  "key21": "3HtkF75sU3S6UoV33hGYVFBq6otbKSDvSrvv8Wc848EWw7tiDcEFgw57Ckk9WzHKZPELcpRzuzCMebWGzK3C1t1E",
  "key22": "33MyrcXA4unLqG8RrfsM9gvjHprEgjxS5fXrNy2sq8pQyAv3ZoULqLPMXuGz8y5cD1vPTE2Ua8TJ5kjsSLK8zH5W",
  "key23": "3Seypwf1fMTNCXgftSUL89WVygsfc2dPtBoi3ps7MF9tFXBt6YV6JqX6w9B22RpsHGqFYQgkZR1t3SvqUYnA7w1s",
  "key24": "451nwspJATi6fEZjoNazH7jatm3JgZRuR7tACyqrty2jgHySy74n57ZXDN3ikuur1hpRkakPDa8HUfY762NCXZeu",
  "key25": "JLbs7R3u3ZSvSu3TtJLFCLbvHPwFpbpTiPE8PgsB6XHv2s8wnFqnu8SYWe1Z1BeGdUX4XvF5c8wLdGdeWJbyCVa",
  "key26": "3M6197wEtZey2CL9RhbDt2RfRDZ6UqW7EwHgfbVbxhVmTVKAkssKVqTr5eju6vccdM7Lad7945tuBXjyS9UAaEQc",
  "key27": "5KA93RJod7hKN7N3kQWmLUih2W3a3ieq85NQhL2LVAeWQZo3e9iKg4Q3tmLQQgAgrmXfYsuJjncc2g6cjsDFnNzC",
  "key28": "4QP8Ds6noJ5Fg2mekuwWP2s4VgJERKXjCV18G8wU9hyjbWxGXLE2mMQU1bz5X59ATKJ7KtRZWK6iRkSG1TE4Lpma",
  "key29": "4umeaLB3VB3CfWDcSLQCgSqw2cfyRJDNLvemh5sJbmfDix2ZXniCEoBxYcF1NVbtSCmuPLzBTZggk6KMeX2RUvkE",
  "key30": "3vKr9wTYuDxNnB5YKXbyT4UEt5RH6BB4Hr7S1Ms6JKhJTgu2F3oXw3g5onhbD5oX3MrPWenzbSJc69DeumYdSpe8",
  "key31": "7XtS9W65fDmuCCWEPY15TMx4W7JPCq8VMn9GjCNthWAy9qMZweXvL7B5N1x9mvjmZkYp1nCFyzeUGdZhwhkAN5Z",
  "key32": "2mjuvgBH8vzbhGP8BJhtBPbf12BkwJDA4kKE8YYhkGdvUKKZq7QxdfDpcrmsTFR77xbS7XfdR98dHaCLssFeZHmi",
  "key33": "3qrSEvYQw7mUpmtBbGfNAibd9MhSqoZ4ZhnsAbJBbgFnPLK7eZcHHvW7TdgHqTdwETsJjJJNGuWtqvanhWghPiy4",
  "key34": "3uxqBPCVmEVu6tg43geDCuEU2B4QWzxbnby1nBgv59tvXFXHtnoKHsBiEC9YXZWkKyAtfejxU4xqATny96w4oUnW",
  "key35": "46D7CqRLbJbBqBgnafmbUMdUzkvGRrZEHrTWT2kfUhDHoLDLnqgE4yNoqZaXjKqoXguYMqmSHNbCj5fEdnoAC9z",
  "key36": "5H2kbgbr3otVTEpf6LXL7yKNS37Yu4SPN35TkBfZd15ccqNtrJbDw3Ms4eRyqRxqnjfH7P6dAXRyBku2YXX4qPny",
  "key37": "5ZAFbW21qtCQC6fau8Raa9uHZYqtXgsk4sf6WnmFjN973SwQS18Zmvxrw6gjJyfbjxVa1Jbh2a29UQ7znjrEHqnv",
  "key38": "jGQQ4v3iSJm2X4C7SJyMiScCPpLE9P717yqxKWe18FEkvwRWfBMe3dJcHDE5q7xTWt2zirsqbwXLNN7ZGMgzsqx",
  "key39": "2kxebbtAkDV5mk2KMbvWWHPpubv5j3rZBQQbjoCQsgpmCTZ2iQrhLi1hE2TwYGr41o7gtBsgvM1Tfs3KVCg3958Y",
  "key40": "3btPxL11XgRF3cC9EEdDaMCb9jtZG1LJJA8b3MfbQU43u641SDPHoTJ9aeAdf2qxUTyHi5Avg6SNLUyjjBfWfy9L",
  "key41": "2UQdND7D2GHH4H9K2o8RWNMHDtYSnbsMf92CradxncEQAzpFW7pNao31Qop63XJzNXcEvF3ZkRZd9oKrpkmaq8rg",
  "key42": "2tzm6ifBMbi2Umah5XiEQZ3LyRnWp9pPKG8psDgXqC46fScFMn5Un4ehYWaE68pFWvqJHWmQmGYfe78d2QPLviTi",
  "key43": "gafNumgJiuEnPaaiEW1q9ba2b6JSa8fBfKsfST4iqgky5mG4qyyvHysbTFBtqau3eR8xBzhwudRhg1vpPdQ9wCU",
  "key44": "4tVPppcPxx4xozmDMfY76B5XGNgTKGemHJAT7cDJ3ToVZEfC29MZLbEYjBcywNhX4g5RfsaU4xumCc85MZy1imLg"
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
